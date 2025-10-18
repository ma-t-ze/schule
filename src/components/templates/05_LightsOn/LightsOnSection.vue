<template>
  <div class="energy-container" ref="energyContainer">
    <div class="icon-container" ref="buttonIconContainer"></div>
    <div class="text">Die Nacht senkt sich über Karlsruhe. Drehe die Turbine, um die Stadt zum Leuchten zu bringen.</div>
    <div class="energy-container-inner">
      
      <img class="turbine" ref="turbine" src="/images/turbine.svg" alt="" @touchstart="startRotation"
        @touchmove="rotateTurbine" @touchend="endRotation" />
      <img class="turbine-assets" ref="turbineAssets" src="/images/turbine_assets.svg" alt="" />
      <div class="progress-vertical" :style="{ width: progressPercent + '%' }"></div>
      <!-- <div class="barometer-container">
        <div class="progress-vertical" :style="{ height: progressPercent + '%' }"></div>
      </div> -->
    </div>
    
  </div>
</template>


<script>
import { nextTick } from 'vue';
import lottie from 'lottie-web';

export default {
  name: 'FeelGoodBarometerSection',
  data() {
    return {
      totalRotation: 0,
      totalRotationCount: 0,
      targetRotation: 0,
      lastAngle: null,
      turbineCenter: { x: 0, y: 0 },
      animationFrame: null,
      buttonAnimationInstance: null,
      progressPercent: 0,
    };
  },
  computed: {
  },
  mounted() {
    // ✅ Check if powerPlant is already true on mount
    if (this.$store.state.powerPlant) {
      this.$nextTick(() => {
        if (this.$refs.energyContainer) {
          this.$refs.energyContainer.style.left = this.$store.state.powerPlant ? '0vw' : '100vw';
        }
      });
    }

    // ✅ Watch for changes to powerPlant (triggers for both true and false)
    this.$watch(
      () => this.$store.state.powerPlant,
      async (newValue) => {
        await nextTick();
        if (this.$refs.energyContainer) {
          this.$refs.energyContainer.style.left = newValue ? '0vw' : '100vw'; // ✅ Works for both true and false
        }
        // ✅ Automatically update block selection based on the new value
        // this.$store.commit('setBlockSelection', true);
      },
      { immediate: true } // ✅ Ensures it runs on mount
    );
    // ✅ Ensure Lottie animation is initialized when component is ready
    if (this.$refs.buttonIconContainer) {
      this.$refs.buttonIconContainer.innerHTML = ''; // Clear previous animation
      this.buttonAnimationInstance = lottie.loadAnimation({
        container: this.$refs.buttonIconContainer, // ✅ Correctly reference the container
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animation/bulb.json' // ✅ Ensure this path is correct
      });
    }
  },
  beforeUnmount() {
    // ✅ Destroy animation instance when component is removed to prevent memory leaks
    if (this.buttonAnimationInstance) {
      this.buttonAnimationInstance.destroy();
      this.buttonAnimationInstance = null;
    }
  },
  methods: {
    startRotation(event) {
      const touch = event.touches[0];
      this.turbineCenter = this.getTurbineCenter();
      this.lastAngle = this.calculateAngle(touch.clientX, touch.clientY);
    },

    rotateTurbine(event) {
      event.preventDefault(); // Prevent unintended scrolling

      const touch = event.touches[0];
      const newAngle = this.calculateAngle(touch.clientX, touch.clientY);

      if (this.lastAngle !== null) {
        let angleDiff = newAngle - this.lastAngle;

        // Handle crossing 0° (e.g. 350° → 10° should be a 20° turn)
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;

        this.totalRotation += angleDiff;
        this.totalRotationCount += Math.abs(angleDiff);
        this.targetRotation = this.totalRotation; // Set target rotation

        this.lastAngle = newAngle;

        // ✅ Start smooth rotation animation
        if (!this.animationFrame) {
          this.animateRotation();
        }

        // ✅ Check if the turbine has rotated 5 full times (1800 degrees)
        if (Math.abs(this.totalRotationCount) >= 1800) {
          this.turnOnLights();
          setTimeout(() => {
            this.totalRotation = 0;
            this.totalRotationCount = 0;
            this.targetRotation = 0;
            this.progressPercent = 0;
          }, 6000);
          setTimeout(() => {
            this.$store.commit('setBlockSelection', false);
          }, 1400);
        }
      }
    },

    endRotation() {
      this.lastAngle = null; // Reset angle tracking on touch end
    },

    turnOnLights() {
      this.$store.dispatch('setLights', true);
      setTimeout(() => {
        this.$refs.energyContainer.style.left = '100vw';
      }, 1400);
    },

    // 📍 Smooth animation using requestAnimationFrame
    animateRotation() {

      this.animationFrame = requestAnimationFrame(() => {
        // ✅ Use LERP (Linear Interpolation) for smoothing
        this.totalRotation += (this.targetRotation - this.totalRotation) * 0.2;

        if (this.$refs.turbine) {
          this.$refs.turbine.style.transform = `rotate(${this.totalRotation}deg)`;
        }


        // ✅ Update barometer progress based on rotation
        this.progressPercent = Math.min((this.totalRotationCount / 1800) * 100, 100);

        // If rotation difference is small, stop animation
        if (Math.abs(this.targetRotation - this.totalRotation) > 0.1) {
          this.animateRotation();
        } else {
          this.animationFrame = null; // Stop animation loop
        }
      });
    },

    // 📍 Helper: Get the center of the turbine image
    getTurbineCenter() {
      const turbine = this.$refs.turbine;
      if (!turbine) return { x: 0, y: 0 };

      const rect = turbine.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    },

    // 📐 Helper: Calculate angle between touch and turbine center
    calculateAngle(touchX, touchY) {
      const dx = touchX - this.turbineCenter.x;
      const dy = touchY - this.turbineCenter.y;
      return Math.atan2(dy, dx) * (180 / Math.PI); // Convert radians to degrees
    }
  }
};
</script>




<style scoped lang="scss">
@import './style.scss';
</style>
