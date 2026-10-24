<script setup>
import { plans } from '../utils/planData'
</script>
<template>
  <nav class="plan-tabs" aria-label="Stoffverteilungspläne">
    <RouterLink v-for="(entry, id) in plans" :key="id" :to="`/stoffverteilungsplaene/${id}`" exact-active-class="selected-plan">{{ entry.name }}</RouterLink>
    <RouterLink to="/stoffverteilungsplaene/pruefungszeitraeume" exact-active-class="selected-plan">Prüfungszeiträume</RouterLink>
  </nav>
</template>
<style scoped>
.plan-tabs {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  margin-bottom: 12px;
  border-bottom: 1px solid #bbb;
}

.plan-tabs a {
  flex: 0 0 auto;
  padding: 10px 18px;
  border: 1px solid #ddd;
  border-bottom: 3px solid transparent;
  border-radius: 8px 8px 0 0;
  background: #eee;
  color: #555;
  font-size: 14px;
  text-decoration: none;
}

.plan-tabs a:hover { background: #e0e6e2; }

.plan-tabs a.selected-plan {
  background: white;
  border-bottom-color: #374641;
  color: #263a31;
  font-weight: bold;
}

.plan-tabs a:focus-visible {
  outline: 2px solid #2463a0;
  outline-offset: -3px;
}

</style>
