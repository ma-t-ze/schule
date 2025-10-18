<template>
  <div class="walking-layer-section" :class="{ 'layer-visible': isWalkingActive }">
    <button class="stop-walking-button" @click="stopWalking">Zurück zur
      Planungsansicht</button>

    <div class="left"><img src="/images/arrows.svg" alt="" /></div>
    <div class="right"><img src="/images/arrows.svg" alt="" /></div>

    <!-- <div class="info">
      <ul>
        <li class="movement">Bewege dich mithilfe der beiden Joysticks durch die Ausstellung.</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'WalkingLayerSection',
  computed: {
    isWalkingActive() {
      return this.$store.getters.getWalk;
    }
  },
  methods: {
    stopWalking() {
      this.$store.commit('setWalk', false);
      this.$store.commit('setStopWalking', true);
      this.$store.commit('setPauseDayAndNightCycle', false);
      this.$store.commit('setShowActionBar', true);
      this.$store.commit('setShowFeelGoodBarometer', true);
      this.$store.commit('setBlockSelection', false);
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';

.walking-layer-section {
  position: relative;
  width: 100%;
  height: 100%;
  top: 100vh;
  z-index: 2000;
  transition: top 0.5s ease;
}

.left {
  position: absolute;
  font-family: 'Jost';
  font-size: 30px;
  left: 2450px;
  top: 1730px;
}

.right {
  position: absolute;
  font-family: 'Jost';
  font-size: 30px;
  left: 1480px;
  top: 1565px;
  transform: rotate(90deg);
}

.info {
  position: absolute;
  font-family: 'Jost';
  font-size: 30px;
  width: 800px;
  height: auto;
  padding: 20px;
  top: 80vh;
  left: 5vw;
  background-color: rgba(255, 255, 255, 0.5)
}

.movement {
  margin: 30px;
}

.rotation {
  margin: 30px;
}

.stop-walking-button {
  position: absolute;
  top: 90vh;
  // right: 6vw;
  right: calc(50vw - 500px);
  padding: 10px 20px;
  font-size: 60px;
  font-family: "Indie Flower";
  color: black;
  height: 160px;
  background-color: white;
  border: 10px solid black;
  border-radius: 80px;
  width: 1000px;
  cursor: pointer;

}

button:active {
  background-color: lightgray;
}

.walking-layer-section.layer-visible {
  top: 0vh;
  /* Move the button to the visible position */
}
</style>
