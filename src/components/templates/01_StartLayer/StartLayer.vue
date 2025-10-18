<!-- StartLayer.vue -->

<template>

  <div :class="['img-container', { 'terminal': showDifferentCSS }]" ref="imgContainer">
    <div class="description" ref="description">KarlsVision ist eine Städtebausimulation für Karlsruhe. Wählen Sie
      einzelne Baublöcke aus und gestalten Sie die Stadt ganz nach Ihren Vorstellungen mit Gebäuden Ihrer Wahl.
    </div>
    <div class="faecher-container" ref="faecherContainer">
      <img class="faecher" src="/images/faecher.png" alt="">
    </div>
    <div class="castle-container" ref="castleContainer">
      <img class="castle" src="/images/castle.png" alt="">
    </div>
    <div class="green-container" ref="greenContainer">
      <img class="green" src="/images/green.png" alt="">
    </div>
  </div>

  <div class="start-game" ref="startGame">
    <button @click="startGame" class="free"> <img src="/images/planning_icon.svg" alt="">FREIE PLANUNG BEGINNEN</button>
    <button @click="startMission" class="mission"> <img src="/images/mission_icon.svg" alt="">MISSION SPIELEN</button>
  </div>

  <LoadingSpinner v-if="isLoadingSpinner" />

</template>

<script>

import LoadingSpinner from '@/components/templates/partials/LoadingSpinner/LoadingSpinner.vue';

export default {
  name: 'StartLayer',
  components: {
    LoadingSpinner
  },
  data() {
    return {
      isLoadingSpinner: true,
      showDifferentCSS: 0,
    };
  },
  mounted() {
    this.showDifferentCSS = this.$route.query.terminal === '1';

    // Check for 'start=1' query parameter and start the game if present
    if (this.$route.query.start === '1') {
      // Use $nextTick to ensure the DOM is fully rendered before executing startGame
      this.$nextTick(() => {
        this.startGame();
      });
    }

    this.$store.watch(
      (state) => state.restart,
      (newValue, oldValue) => {
        if (newValue) {
          this.restartGame();
        }
      }
    );

    this.$store.watch(
      (state) => state.loading,
      (newValue, oldValue) => {
        if (newValue) {
          this.isLoadingSpinner = false;
        }
      }
    );
  },
  methods: {
    startGame() {
      this.$store.dispatch('setShowActionBar', true);
      this.$store.dispatch('setStartGame', true)
      this.$store.dispatch('setStartInTimer', true)
      this.$store.dispatch('setAudio', true)
        .then(() => {
          const imgContainer = this.$refs.imgContainer;
          const startGame = this.$refs.startGame;
          const width = window.innerWidth
          const height = window.innerHeight;
          // Set transition delay
          imgContainer.style.transition = "left 1.5s ease 1.5s";
          imgContainer.style.left = width + 'px';

          // startGame
          startGame.style.transition = "top 0.5s ease 1.5s";
          startGame.style.top = height + 'px';
        });
    },
    startMission() {
      this.$store.dispatch('setShowActionBar', true);
      this.$store.dispatch('setMissionMode', true);
      this.$store.dispatch('setShowFeelGoodBarometer', true);
      this.$store.dispatch('setStartGame', true)
      this.$store.dispatch('setStartInTimer', true)
      this.$store.dispatch('setAudio', true)
        .then(() => {
          const imgContainer = this.$refs.imgContainer;
          const startGame = this.$refs.startGame;
          const width = window.innerWidth
          const height = window.innerHeight;
          // Set transition delay
          imgContainer.style.transition = "left 1.5s ease 1.5s";
          imgContainer.style.left = width + 'px';

          // startGame
          startGame.style.transition = "top 0.5s ease 1.5s";
          startGame.style.top = height + 'px';
        });
    },
    restartGame() {
      const imgContainer = this.$refs.imgContainer;
      const startGame = this.$refs.startGame;
      const height = window.innerHeight;
      // Set transition delay

      imgContainer.style.transition = "left 1s ease-in 1s";
      imgContainer.style.left = 0 + 'px';

      // startGame
      startGame.style.transition = "top 0.5s ease 1s";
      startGame.style.top = height * 0.8 + 'px';
    },
  }

}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
