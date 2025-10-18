<!-- ToolbarSection -->

<template>
  <div class="action-container" ref="actionContainer">
    <div class="action-container-inner">
      <GameNavigationSection/>
      <BuildingSelection />
  
    </div>
 
    <LegendLayerSection/>
  </div>
</template>

<script>
import GameNavigationSection from '@/components/templates/03_ToolbarSection/01_GameNavigation/GameNavigationSection.vue';
import BuildingSelection from '@/components/templates/03_ToolbarSection/02_BuildingSelection/BuildingSelection.vue';
import LegendLayerSection from './06_LegendLayer/LegendLayerSection.vue';


export default {
  name: 'ToolbarSection',
  components: {
    BuildingSelection,
    GameNavigationSection,
    LegendLayerSection
  },
  mounted() {
    this.$store.watch(
      (state) => state.showActionBar,
      (newValue) => {
        if (newValue) {
          this.showActions();
        } else {
          this.hideActions();
        }
      }
    );
  },
  methods: {
    showActions() {
      const actionContainer = this.$refs.actionContainer;
      actionContainer.style.transition = "top 1s ease 1.5s";
      actionContainer.style.top = '0px';
    },
    hideActions() {
      const actionContainer = this.$refs.actionContainer;
      const height = window.innerHeight;
      actionContainer.style.transition = "top 1s ease 0s";
      actionContainer.style.top = height + 'px';
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
