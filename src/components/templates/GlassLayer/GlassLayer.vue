<template>
    <div class="glass-layer">
        <svg class="glass-filter-defs" aria-hidden="true">
            <filter
                id="glass-distortion"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
                primitiveUnits="objectBoundingBox"
            >
                <feImage
                    href="https://essykings.github.io/JavaScript/map.png"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                    result="map"
                    preserveAspectRatio="none"
                />
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="0.02"
                    result="blur"
                />
                <feDisplacementMap
                    in="blur"
                    in2="map"
                    scale="0.8"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
        </svg>

        <div class="mouse-glass-circle" :style="circleStyle"></div>
    </div>
</template>

<script>
export default {
    name: "GlassLayer",

    data() {
        return {
            mouseX: -200,
            mouseY: -200
        }
    },

    computed: {
        circleStyle() {
            return {
                transform: `translate3d(${this.mouseX - 50}px, ${this.mouseY - 50}px, 0)`
            }
        }
    },

    mounted() {
        window.addEventListener("mousemove", this.handleMouseMove, { passive: true })
    },

    beforeUnmount() {
        window.removeEventListener("mousemove", this.handleMouseMove)
    },

    methods: {
        handleMouseMove(event) {
            this.mouseX = event.clientX
            this.mouseY = event.clientY
        }
    }
}
</script>

<style lang="scss">
.glass-layer {
    pointer-events: none;
}

.glass-filter-defs {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
}

.mouse-glass-circle {
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 999999;

    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0.03) 100%
    );

    border: 1px solid rgba(255, 255, 255, 0.3);

    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.16),
        inset 0 1px 0 rgba(255, 255, 255, 0.35);

    backdrop-filter: url(#glass-distortion) blur(8px);
    -webkit-backdrop-filter: blur(8px);

    will-change: transform;
}
</style>