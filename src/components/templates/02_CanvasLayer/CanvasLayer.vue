// Filename: CanvasLayer.vue

<template>

<!-- <div class="moon">
    <img src="/images/moon.png" alt="" />
  </div> -->

  <div class="img-container">
    <img class="background" ref="imgContainer" src="/images/background_small_filter.jpg" alt="">
  </div>
  <div>
    <div class="canvas" ref="canvas"></div>
  </div>
  <div class="logo-container">
    <img class="logo" ref="logo" src="/images/KarlsVision.svg" alt="" />
  </div>
  <!-- <JoystickNavigation :onMove="handleJoystickMove" :onEnd="handleJoystickEnd" /> -->
  <LoadingSpinner v-if="isLoadingSpinner" />
</template>

<script>
import threeJSConstructor from './scripts/threeJSConstructor';
import LoadingSpinner from '@/components/templates/partials/LoadingSpinner/LoadingSpinner.vue';
// import JoystickNavigation from '@/components/templates/partials/joystickNavigation/JoystickNavigation.vue';

export default {
  name: 'CanvasLayer',
  components: {
    LoadingSpinner,
    // JoystickNavigation,
  },
  data() {
    return {
      deselectBlocks: false,
      threeJSInstance: null,
      isLoadingSpinner: false,
    };
  },
  mounted() {
    this.initThree();

    this.$store.watch(
      (state) => state.startGame,
      (newValue, oldValue) => {
        if (newValue) {
          this.startGame();
        }
      }
    );

    this.$store.watch(
      (state) => state.restart,
      (newValue, oldValue) => {
        if (newValue) {
          this.restartGame();
        }
      }
    );
  },
  methods: {
    initThree() {
      const canvas = this.$refs.canvas;
      const store = this.$store;
      const showStats = this.$route.query.stats === '1';

      this.threeJSInstance = new threeJSConstructor(
        canvas,
        store,
        showStats,
        this.$refs.imgContainer,
        this.$refs.logo,
        this.updateLoadingSpinner,
      );
    },
    updateLoadingSpinner(isLoading) {
      this.isLoadingSpinner = isLoading;
    },
    // handleJoystickMove(data) {
    //   if (this.threeJSInstance) {
    //     this.threeJSInstance.handleJoystickMove(data); // Pass joystick data to the constructor
    //   }
    // },
    // handleJoystickEnd() {
    //   if (this.threeJSInstance) {
    //     this.threeJSInstance.handleJoystickEnd(); // Notify the constructor that joystick movement ended
    //   }
    // },
    startGame() {
      const logo = this.$refs.logo;
      const height = window.innerHeight;
      const width = window.innerWidth;
      logo.style.transition = "width 0.5s ease 2s, left 0.5s ease 2s";
      logo.style.width = width * 0.1 + 'px';
      logo.style.left = height * 0.075 + 'px';
    },
    restartGame() {
      const logo = this.$refs.logo;
      const height = window.innerHeight;
      const width = window.innerWidth;
      logo.style.transition = "width 0.5s ease 2s, left 0.5s ease 2s";
      logo.style.width = width * 0.25 + 'px';
      logo.style.left = height * 0.1 + 'px';
    },
  },

}
</script>

<style scoped lang="scss">
@import './style.scss';

#moveCameraButton {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 20000;
}

#moveCameraButton:hover {
  background-color: #0056b3;
}

// .moon {
//   position: absolute;
//   z-index: 4000 !important;
//   // top: -320px;
//   top: 1000px;
//   // left: 800px;
//   animation: moveMoon 300s linear infinite;

//   img {
//     height: 1000px;
//   }

//   // Add this animation at the bottom of your CSS/SCSS:
// @keyframes moveMoon {
//   0% {
//     left: 1000px;
//   }
//   100% {
//     left: -1000px; // depending on image width; adjust if needed
//   }
// }

// }
</style>
