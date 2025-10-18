<!-- BuildingSelection.vue -->

<template>

  <div class="container">
    <div class="container-inner">
        <div class="container-building-selection">
            <div class="construction green-areas-trees" ref="greenAreaTrees" @touchstart="callUndeveloped">
          <img src="/images/empty.png" alt=""> Unbebaut
        </div>
        <div class="construction green-areas-trees" ref="greenAreaTrees" @touchstart="callGreenAreaTrees">
          <img src="/images/greenArea.png" alt=""> Grünfläche
        </div>
        <div class="construction places-parking-lots" ref="parkingLots" @touchstart="callParkingLots"><img
            src="/images/parkingLots.png" alt="">Parkplatz</div>
        <div class="construction apartments" ref="apartment" @touchstart="callApartments"><img src="/images/apartments.png"
            alt="">Wohnblock</div>
        <div class="construction commercials" ref="commercials" @touchstart="callCommercials"><img
            src="/images/commercials.png" alt="">Kaufhaus</div>
        <div class="construction cultural-museum" ref="museums" @touchstart="callMuseums"><img
            src="/images/museum.png" alt="">Museum</div>
        <div class="construction cultural-library" ref="culturalLibrary" @touchstart="callCulturalLibrary"><img
            src="/images/libraries.png" alt="">Bibliothek</div>
        <div class="construction puplic-school" ref="publicSchool" @touchstart="callPublicSchool"><img
            src="/images/publicSchool.png" alt="">Schule</div>
        <div class="construction puplic-nursery" ref="publicNursery" @touchstart="callPuplicNursery"><img
            src="/images/publicNursery.png" alt="">Kindergarten</div>
        <div class="construction house-of-god" ref="houseOfGod" @touchstart="callHouseOfGood"><img
            src="/images/houseOfGod.png" alt="">Gotteshaus</div>
      </div>

    </div>
  </div>

</template>

<script>


export default {
  name: 'BuildingSelection',
  mounted() {

  },
  methods: {
    callUndeveloped() {
      this.$store.dispatch('setUndeveloped', true);
    },
    callGreenAreaTrees() {
      this.$store.dispatch('setGreenAreaTrees', true);
    },
    callParkingLots() {
      this.$store.dispatch('setParkingLots', true);
    },
    callApartments() {
      this.$store.dispatch('setApartments', true);
    },
    callCommercials() {
      this.$store.dispatch('setCommercials', true);
    },
    callMuseums() {
      this.$store.dispatch('setMuseums', true);
    },
    callCulturalLibrary() {
      this.$store.dispatch('setCulturalLibrary', true);
    },
    callPublicSchool() {
      this.$store.dispatch('setPublicSchool', true);
    },
    callPuplicNursery() {
      this.$store.dispatch('setPublicNurseries', true);
    },
    callHouseOfGood() {
      this.$store.dispatch('setHousesOfGod', true);
    },
  }

}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
