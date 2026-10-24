<script setup>
import { ref } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import StoffverteilungsplanDetail from './views/StoffverteilungsplanDetail.vue'
import Pruefungszeitraeume from './views/Pruefungszeitraeume.vue'
import { plans } from './utils/planData'
const selected = ref('3tgg1-2')
</script>
<template>
  <div class="plans-overview">
    <Tabs v-model:value="selected" scrollable><TabList><Tab v-for="(plan, id) in plans" :key="id" :value="id">{{ plan.name }}</Tab><Tab value="exams">Prüfungszeiträume</Tab></TabList></Tabs>
    <div class="plan-content" role="region" :aria-label="selected === 'exams' ? 'Prüfungszeiträume' : plans[selected].name">
      <KeepAlive><component :is="selected === 'exams' ? Pruefungszeitraeume : StoffverteilungsplanDetail" :key="selected" :plan-id="selected === 'exams' ? undefined : selected" embedded /></KeepAlive>
    </div>
  </div>
</template>
<style scoped>
.plans-overview { min-width: 0; contain: inline-size; }
.plan-content { padding-top: 20px; min-width: 0; }
.plan-content :deep(.page) { padding: 0; min-height: 0; }
.plan-content :deep(.table-wrap) { max-width: 100%; overflow-x: auto; }
</style>
