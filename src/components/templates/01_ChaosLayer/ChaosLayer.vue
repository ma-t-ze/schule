<!-- StartLayer.vue -->
<template>
  <div id="spacer" class="center-wrapper" :style="{ backgroundColor: '#FFE500' }">
    <div id="flyAroundElements" ref="flyAroundElements"></div>
  </div>
</template>

<script>
export default {
  name: 'ChaosLayer',

  data() {
    return {
      isRunning: false,
      _rafId: null,

      flyAroundInt: 8.4,
      flyAroundd: 0.0006,
      flyAd1020: 10,
      flyAd7: 0,
      iNeu: 0
    };
  },

  mounted() {
    // create only ring 3 dots
    this.iNeu = 0;
    this.flyAround3st();

    // run shortly, then pause
    this.startAnim();
    setTimeout(() => this.stopAnim(), 10);

    // toggle with spacebar
    window.addEventListener('keydown', this.handleKeydown);
  },

  beforeUnmount() {
    this.stopAnim();
    window.removeEventListener('keydown', this.handleKeydown);
  },

  methods: {
    handleKeydown(e) {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        this.isRunning ? this.stopAnim() : this.startAnim();
      }
    },

    startAnim() {
      if (this._rafId) return;
      this.isRunning = true;
      const tick = () => {
        if (this.isRunning) {
          this.iNeu = 0;
          this.flyAround3();
          this.flyAroundInt += this.flyAroundd;
        }
        this._rafId = requestAnimationFrame(tick);
      };
      this._rafId = requestAnimationFrame(tick);
    },

    stopAnim() {
      this.isRunning = false;
      if (this._rafId) {
        cancelAnimationFrame(this._rafId);
        this._rafId = null;
      }
    },

    /* ========== RING 3 ONLY ========== */
    flyAround3() {
      const c = this.$refs.flyAroundElements;
      if (!c) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      for (let n = 1400; n < 2000; n += 2) {
        const base =
          (Math.cos((this.flyAroundInt * n) / 360 * 2 * Math.PI) / 360) *
          2 *
          Math.PI *
          600 +
          10 * n;
        const ang = (base / 360) * 2 * Math.PI;
        const addLeft =
          Math.sin(ang) * 600 * 0.003 * n + this.flyAd7 + cx;
        const addTop =
          Math.cos(ang) * 600 * 0.003 * n + cy;

        this.iNeu++;
        const chain = c.children[this.iNeu - 1];
        if (!chain) continue;
        chain.style.fontSize = '1000px';
        chain.style.left = addLeft / this.flyAd1020 + 'px';
        chain.style.top = addTop / this.flyAd1020 + 'px';
      }
    },

    flyAround3st() {
      const c = this.$refs.flyAroundElements;
      if (!c) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      for (let n = 1400; n < 2000; n += 2) {
        const base =
          (Math.cos((this.flyAroundInt * n) / 360 * 2 * Math.PI) / 360) *
          2 *
          Math.PI *
          600 +
          10 * n;
        const ang = (base / 360) * 2 * Math.PI;
        const addLeft =
          Math.sin(ang) * 600 * 0.003 * n + this.flyAd7 + cx;
        const addTop =
          Math.cos(ang) * 600 * 0.003 * n + cy;

        const f = document.createElement('div');
        f.innerHTML = '&#8226;';
        const g = Math.max(0, Math.min(255, n / 1.25 - 1400));
        f.style.color = `rgba(100, ${g}, 255, 0.1)`;
        f.style.fontSize = '1000px';
        f.style.position = 'absolute';
        f.style.left = addLeft / this.flyAd1020 + 'px';
        f.style.top = addTop / this.flyAd1020 + 'px';
        c.appendChild(f);
      }
    }
  }
};
</script>

<style scoped>
.center-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#flyAroundElements {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -500px;
}

:deep(#flyAroundElements > *) {
  position: absolute;
  line-height: 1;
  user-select: none;
  pointer-events: none;
}
</style>
