<template>
    <div class="liquid-cursor" :style="cursorStyle">
        <svg class="liquid-cursor__defs" aria-hidden="true">
            <filter id="liquid-goo-strong">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
                <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 30 -10
                    "
                    result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </svg>

        <div class="liquid-cursor__inner">
            <span class="liquid-cursor__blob liquid-cursor__blob--1"></span>
            <span class="liquid-cursor__blob liquid-cursor__blob--2"></span>
            <span class="liquid-cursor__blob liquid-cursor__blob--3"></span>
            <span class="liquid-cursor__blob liquid-cursor__blob--4"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "LiquidCursorBlobs",

    data() {
        return {
            mouseX: -300,
            mouseY: -300,
            currentX: -300,
            currentY: -300,
            rafId: null
        }
    },

    computed: {
        cursorStyle() {
            return {
                transform: `translate3d(${this.currentX - 100}px, ${this.currentY - 100}px, 0)`
            }
        }
    },

    mounted() {
        window.addEventListener("mousemove", this.handleMouseMove, { passive: true })
        this.animate = this.animate.bind(this)
        this.animate()
    },

    beforeUnmount() {
        window.removeEventListener("mousemove", this.handleMouseMove)

        if (this.rafId) {
            cancelAnimationFrame(this.rafId)
        }
    },

    methods: {
        handleMouseMove(event) {
            this.mouseX = event.clientX
            this.mouseY = event.clientY
        },

        animate() {
            const ease = 0.16

            this.currentX += (this.mouseX - this.currentX) * ease
            this.currentY += (this.mouseY - this.currentY) * ease

            this.rafId = requestAnimationFrame(this.animate)
        }
    }
}
</script>

<style lang="scss">
.liquid-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    pointer-events: none;
    z-index: 999999;
    will-change: transform;
}

.liquid-cursor__defs {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
}

.liquid-cursor__inner {
    position: relative;
    width: 100%;
    height: 100%;

    filter: url(#liquid-goo-strong);

    /* weiche äußere Kante */
    mask-image: radial-gradient(circle, black 80%, transparent 90%);
    -webkit-mask-image: radial-gradient(circle, black 55%, transparent 75%);
}

.liquid-cursor__blob {
    position: absolute;
    border-radius: 50%;
    opacity: 1;
    filter: blur(30px);
    will-change: transform;
}

.liquid-cursor__blob--1 {
    width: 120px;
    height: 120px;
    left: 18px;
    top: 20px;
    background: #ff2d55;
    animation: floatBlob1 4.8s ease-in-out infinite;
}

.liquid-cursor__blob--2 {
    width: 110px;
    height: 110px;
    left: 78px;
    top: 18px;
    background: #ff8a00;
    animation: floatBlob2 5.6s ease-in-out infinite;
}

.liquid-cursor__blob--3 {
    width: 110px;
    height: 110px;
    left: 38px;
    top: 82px;
    background: #0057ff;
    animation: floatBlob3 4.4s ease-in-out infinite;
}

.liquid-cursor__blob--4 {
    width: 92px;
    height: 92px;
    left: 98px;
    top: 92px;
    background: #6a00ff;
    animation: floatBlob4 6s ease-in-out infinite;
}

@keyframes floatBlob1 {
    0% {
        transform: translate(0px, 0px) scale(1);
    }
    25% {
        transform: translate(14px, -8px) scale(1.08);
    }
    50% {
        transform: translate(8px, 10px) scale(0.96);
    }
    75% {
        transform: translate(-10px, 8px) scale(1.04);
    }
    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

@keyframes floatBlob2 {
    0% {
        transform: translate(0px, 0px) scale(1);
    }
    25% {
        transform: translate(-12px, 10px) scale(0.96);
    }
    50% {
        transform: translate(10px, 12px) scale(1.06);
    }
    75% {
        transform: translate(6px, -10px) scale(1.02);
    }
    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

@keyframes floatBlob3 {
    0% {
        transform: translate(0px, 0px) scale(1);
    }
    25% {
        transform: translate(10px, -12px) scale(1.06);
    }
    50% {
        transform: translate(-8px, -4px) scale(0.98);
    }
    75% {
        transform: translate(-12px, 10px) scale(1.07);
    }
    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

@keyframes floatBlob4 {
    0% {
        transform: translate(0px, 0px) scale(1);
    }
    25% {
        transform: translate(-8px, -8px) scale(1.08);
    }
    50% {
        transform: translate(12px, 6px) scale(0.95);
    }
    75% {
        transform: translate(-4px, 12px) scale(1.03);
    }
    100% {
        transform: translate(0px, 0px) scale(1);
    }
}
</style>