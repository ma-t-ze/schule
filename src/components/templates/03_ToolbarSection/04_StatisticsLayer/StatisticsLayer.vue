// StatisticsLayer.vue

<template>
  <div class="container" ref="container">
    <div class="container-inner">
      <div class="bar-chart">
        <div v-for="(tag, index) in tags" :key="index" class="bar">
          <div :style="{ width: `${tag.percentage}%` }" class="fill"></div>
          <span class="tag">{{ tag.name }}</span>
          <span class="percentage">{{ tag.percentage.toFixed(0) }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'StatisticsLayer',
  computed: {
    ...mapState(['sizeSums']),
  },
  data() {
    return {
      tags: [
        { name: 'Grünfläche', id: 'greenAreaTrees', percentage: 0 },
        { name: 'Parkplätze', id: 'parkingLots', percentage: 0 },
        { name: 'Wohnungen', id: 'apartments', percentage: 0 },
        { name: 'Kaufhaus', id: 'commercials', percentage: 0 },
        { name: 'Museum', id: 'museums', percentage: 0 },
        { name: 'Bibliothek', id: 'libraries', percentage: 0 },
        { name: 'Schule', id: 'publicSchools', percentage: 0 },
        { name: 'Kindergarten', id: 'publicNurseries', percentage: 0 },
        { name: 'Gotteshaus', id: 'housesOfGod', percentage: 0 },
        { name: 'Unbebaut', id: 'none', percentage: 0 },
      ],
    };
  },
  methods: {
    updateTags() {
      if (this.sizeSums && this.sizeSums.length > 0) {
        const totalSize = this.sizeSums.reduce((sum, item) => sum + parseFloat(item.size), 0);
        this.tags.forEach(tag => {
          const sizeSumItem = this.sizeSums.find(item => item.name === tag.id);
          if (sizeSumItem) {
            tag.percentage = (parseFloat(sizeSumItem.size) / totalSize) * 100;
          } else {
            tag.percentage = 0;
          }
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
