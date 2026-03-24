<template>
    <div ref="root" class="liquid-cursor-three" :class="{ 'is-visible': isVisible }" :style="rootStyle"></div>
</template>

<script>
import * as THREE from "three"
import TWEEN from "tween.js/src/tween.js"
import { markRaw } from "vue"

const RENDER_SIZE = 800
const DISPLAY_SIZE = 1000
const DISPLAY_OFFSET = DISPLAY_SIZE / 2

const DEFAULT_PALETTE = ["#FFBC8F", "#FFBC8F", "#FFBC8F", "#FFBC8F"]

export default {
    name: "LiquidCursorThree",

    props: {
        targetX: {
            type: Number,
            default: 0
        },
        targetY: {
            type: Number,
            default: 0
        },
        isVisible: {
            type: Boolean,
            default: true
        },
        hoverKey: {
            type: [Number, String],
            default: null
        }
    },

    data() {
        return {
            currentX: 0,
            currentY: 0,
            lastX: 0,
            lastY: 0,
            rafId: null,
            startTime: 0,
            idleTimeout: null
        }
    },

    computed: {
        rootStyle() {
            return {
                transform: `translate3d(${this.currentX - 400}px, ${this.currentY - 400}px, 0)`
            }
        }
    },

    watch: {
        targetX() {
            if (this.hoverKey === null) return
            this.startMoveTween(this.targetX, this.targetY)
        },

        targetY() {
            if (this.hoverKey === null) return
            this.startMoveTween(this.targetX, this.targetY)
        },

        hoverKey(newValue, oldValue) {
            if (newValue === oldValue) return

            if (this.idleTimeout) {
                clearTimeout(this.idleTimeout)
                this.idleTimeout = null
            }

            if (newValue === null) {
                this.startPaletteTweenTo(DEFAULT_PALETTE)

                this.idleTimeout = setTimeout(() => {
                    if (this.hoverKey === null) {
                        this.moveToIdlePosition()
                    }
                }, 120)

                return
            }

            this.startPaletteTween()
            this.startMoveTween(this.targetX, this.targetY)
        }
    },

    created() {
        this.renderer = null
        this.scene = null
        this.camera = null
        this.material = null
        this.mesh = null
        this.positionTween = null
        this.paletteTween = null
        this.lastPaletteIndex = -1

        this.colorPalettes = [
            ["#1A237E", "#3949AB", "#64B5F6", "#E3F2FD"],
            ["#0D47A1", "#1E88E5", "#90CAF9", "#E1F5FE"],
            ["#1F2937", "#6B7280", "#D1D5DB", "#F3F4F6"],
            ["#052E16", "#065F46", "#047857", "#065F46"],
            ["#F8FAFC", "#E5E7EB", "#D1D5DB", "#9CA3AF"],
            ["#FFE4E6", "#FFC1CC", "#FFB6C1", "#FFA6B0"]
        ]

        this.currentPaletteState = this.createPaletteState(DEFAULT_PALETTE)
    },

    mounted() {
        this.currentX = window.innerWidth / 2
        this.currentY = 100

        this.lastX = this.currentX
        this.lastY = this.currentY

        this.initThree()
        this.setPalette(DEFAULT_PALETTE)
        this.applyPaletteStateToUniforms()

        window.addEventListener("resize", this.handleResize, { passive: true })

        this.animate = this.animate.bind(this)
        this.startTime = performance.now()
        this.animate(this.startTime)
    },

    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize)

        if (this.rafId) {
            cancelAnimationFrame(this.rafId)
        }

        if (this.positionTween) {
            this.positionTween.stop()
            this.positionTween = null
        }

        if (this.paletteTween) {
            this.paletteTween.stop()
            this.paletteTween = null
        }

        TWEEN.removeAll()

        if (this.mesh) {
            this.mesh.geometry.dispose()
        }

        if (this.material) {
            this.material.dispose()
        }

        if (this.renderer) {
            this.renderer.dispose()

            if (this.renderer.domElement && this.renderer.domElement.parentNode) {
                this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)
            }
        }
    },

    methods: {
        hexToRgbObject(hex) {
            const color = new THREE.Color(hex)

            return {
                r: color.r,
                g: color.g,
                b: color.b
            }
        },

        createPaletteState(palette) {
            const [hex1, hex2, hex3, hex4] = palette

            const c1 = this.hexToRgbObject(hex1)
            const c2 = this.hexToRgbObject(hex2)
            const c3 = this.hexToRgbObject(hex3)
            const c4 = this.hexToRgbObject(hex4)

            return {
                c1r: c1.r, c1g: c1.g, c1b: c1.b,
                c2r: c2.r, c2g: c2.g, c2b: c2.b,
                c3r: c3.r, c3g: c3.g, c3b: c3.b,
                c4r: c4.r, c4g: c4.g, c4b: c4.b
            }
        },

        setPalette(palette) {
            this.currentPaletteState = this.createPaletteState(palette)
        },

        getRandomPalette() {
            if (!this.colorPalettes.length) return null

            let nextIndex = this.lastPaletteIndex

            while (nextIndex === this.lastPaletteIndex) {
                nextIndex = Math.floor(Math.random() * this.colorPalettes.length)
            }

            this.lastPaletteIndex = nextIndex

            return this.colorPalettes[nextIndex]
        },

        applyPaletteStateToUniforms() {
            if (!this.material) return

            this.material.uniforms.u_color1.value.set(
                this.currentPaletteState.c1r,
                this.currentPaletteState.c1g,
                this.currentPaletteState.c1b
            )

            this.material.uniforms.u_color2.value.set(
                this.currentPaletteState.c2r,
                this.currentPaletteState.c2g,
                this.currentPaletteState.c2b
            )

            this.material.uniforms.u_color3.value.set(
                this.currentPaletteState.c3r,
                this.currentPaletteState.c3g,
                this.currentPaletteState.c3b
            )

            this.material.uniforms.u_color4.value.set(
                this.currentPaletteState.c4r,
                this.currentPaletteState.c4g,
                this.currentPaletteState.c4b
            )
        },

        startPaletteTween() {
            const palette = this.getRandomPalette()
            if (!palette) return

            this.startPaletteTweenTo(palette)
        },

        startPaletteTweenTo(palette) {
            if (!this.material || !palette) return

            if (this.paletteTween) {
                this.paletteTween.stop()
            }

            const targetState = this.createPaletteState(palette)

            this.paletteTween = new TWEEN.Tween(this.currentPaletteState)
                .to(targetState, 700)
                .easing(TWEEN.Easing.Sinusoidal.InOut)
                .onUpdate(() => {
                    this.applyPaletteStateToUniforms()
                })
                .start()
        },

        initThree() {
            const width = RENDER_SIZE
            const height = RENDER_SIZE

            this.scene = markRaw(new THREE.Scene())

            this.camera = markRaw(
                new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
            )

            this.renderer = markRaw(
                new THREE.WebGLRenderer({
                    alpha: true,
                    antialias: true,
                    powerPreference: "high-performance"
                })
            )

            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            this.renderer.setSize(width, height)
            this.renderer.setClearColor(0x000000, 0)

            const geometry = new THREE.PlaneGeometry(2, 2)

            this.material = markRaw(
                new THREE.ShaderMaterial({
                    transparent: true,
                    uniforms: {
                        u_time: { value: 0 },
                        u_resolution: { value: new THREE.Vector2(width, height) },
                        u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
                        u_color1: { value: new THREE.Vector3(0.941, 0.412, 0.400) },
                        u_color2: { value: new THREE.Vector3(0.980, 0.839, 0.651) },
                        u_color3: { value: new THREE.Vector3(1.000, 0.000, 0.463) },
                        u_color4: { value: new THREE.Vector3(0.349, 0.059, 0.718) }
                    },
                    vertexShader: `
                        varying vec2 vUv;

                        void main() {
                            vUv = uv;
                            gl_Position = vec4(position, 1.0);
                        }
                    `,
                    fragmentShader: `
                        precision highp float;

                        uniform float u_time;
                        uniform vec2 u_resolution;
                        uniform vec2 u_mouse;
                        uniform vec3 u_color1;
                        uniform vec3 u_color2;
                        uniform vec3 u_color3;
                        uniform vec3 u_color4;

                        varying vec2 vUv;

                        float circle(vec2 uv, vec2 pos, float radius, float blur) {
                            float d = length(uv - pos);
                            return 1.0 - smoothstep(radius - blur, radius + blur, d);
                        }

                        float blobField(vec2 uv, vec2 mouse) {
                            float t = u_time;

                            vec2 p1 = vec2(
                                0.34 + sin(t * 1.2) * 0.07,
                                0.36 + cos(t * 1.0) * 0.06
                            );

                            vec2 p2 = vec2(
                                0.68 + cos(t * 1.1 + 1.3) * 0.08,
                                0.38 + sin(t * 1.4 + 0.8) * 0.07
                            );

                            vec2 p3 = vec2(
                                0.42 + sin(t * 1.5 + 2.0) * 0.08,
                                0.70 + cos(t * 1.2 + 0.4) * 0.06
                            );

                            vec2 p4 = vec2(
                                0.70 + cos(t * 1.3 + 2.4) * 0.06,
                                0.70 + sin(t * 1.1 + 1.5) * 0.07
                            );

                            vec2 mp = mix(vec2(0.5, 0.5), mouse, 0.35);

                            float f = 0.0;
                            f += circle(uv, p1, 0.22, 0.18);
                            f += circle(uv, p2, 0.24, 0.18);
                            f += circle(uv, p3, 0.23, 0.18);
                            f += circle(uv, p4, 0.19, 0.16);
                            f += circle(uv, mp, 0.20, 0.22) * 0.8;

                            return f;
                        }

                        vec3 palette(float x) {
                            vec3 color = u_color1;
                            color = mix(color, u_color2, smoothstep(0.0, 0.33, x));
                            color = mix(color, u_color3, smoothstep(0.33, 0.66, x));
                            color = mix(color, u_color4, smoothstep(0.66, 1.0, x));
                            return color;
                        }

                        void main() {
                            vec2 uv = vUv;
                            vec2 mouse = u_mouse;

                            vec2 center = uv - 0.5;
                            float distToCenter = length(center);

                            float field = blobField(uv, mouse);

                            float alphaShape = smoothstep(0.18, 0.95, field);
                            float edgeFade = 1.0 - smoothstep(0.55, 0.92, distToCenter);

                            float wave1 = sin((uv.x * 5.0) + (u_time * 1.2)) * 0.5 + 0.5;
                            float wave2 = cos((uv.y * 6.0) - (u_time * 1.0)) * 0.5 + 0.5;
                            float wave3 = sin((uv.x + uv.y) * 7.0 - u_time * 1.4) * 0.5 + 0.5;

                            float colorMix = (wave1 * 0.35) + (wave2 * 0.35) + (wave3 * 0.30);

                            vec3 color = palette(colorMix);

                            vec2 glowCenter = uv - mouse;
                            float mouseGlow = 1.0 - smoothstep(0.0, 0.45, length(glowCenter));
                            color += vec3(0.18, 0.08, 0.22) * mouseGlow;

                            color *= 1.15;

                            float alpha = alphaShape * edgeFade;

                            gl_FragColor = vec4(color, alpha);
                        }
                    `
                })
            )

            this.mesh = markRaw(new THREE.Mesh(geometry, this.material))
            this.scene.add(this.mesh)

            this.$refs.root.appendChild(this.renderer.domElement)
        },

        startMoveTween() {
            if (this.positionTween) {
                this.positionTween.stop()
            }

            const state = {
                x: this.currentX,
                y: this.currentY
            }

            this.positionTween = new TWEEN.Tween(state)
                .to(
                    {
                        x: this.targetX,
                        y: this.targetY
                    },
                    250
                )
                .delay(150)
                .easing(TWEEN.Easing.Sinusoidal.Out)
                .onUpdate(() => {
                    this.currentX = state.x
                    this.currentY = state.y
                })
                .start()
        },

        handleResize() {
            if (!this.renderer || !this.material) return

            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            this.renderer.setSize(RENDER_SIZE, RENDER_SIZE)
            this.material.uniforms.u_resolution.value.set(RENDER_SIZE, RENDER_SIZE)
        },

        animate(now = 0) {
            const elapsed = (now - this.startTime) * 0.0007

            TWEEN.update(now)

            const velocityX = this.currentX - this.lastX
            const velocityY = this.currentY - this.lastY

            const mouseInfluenceX = 0.5 + Math.max(-0.18, Math.min(0.18, velocityX * 0.02))
            const mouseInfluenceY = 0.5 - Math.max(-0.18, Math.min(0.18, velocityY * 0.02))

            if (this.material) {
                this.material.uniforms.u_time.value = elapsed
                this.material.uniforms.u_mouse.value.set(mouseInfluenceX, mouseInfluenceY)
            }

            this.lastX = this.currentX
            this.lastY = this.currentY

            if (this.renderer && this.scene && this.camera) {
                this.renderer.render(this.scene, this.camera)
            }

            this.rafId = requestAnimationFrame(this.animate)
        }
    }
}
</script>

<style lang="scss">
.liquid-cursor-three {
    position: fixed;
    top: 0px;
    left: 0;
    width: 1000px;
    height: 1000px;
    pointer-events: none;
    z-index: 2;
    will-change: transform;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.liquid-cursor-three.is-visible {
    opacity: 1;
}

.liquid-cursor-three canvas {
    display: block;
    filter: blur(20px) saturate(1.4);
    transform: scale(0.6);
}
</style>