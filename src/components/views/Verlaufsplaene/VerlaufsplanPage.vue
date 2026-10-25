<script setup>
import { computed, ref, watch } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import DreiDDruck from './DreiDDruck.vue'
import DreiDDruckVerlaufsplan from './DreiDDruckVerlaufsplan.vue'
import GesetzDerGeschlossenheit from './GesetzDerGeschlossenheit.vue'
import GesetzDerGeschlossenheitVerlaufsplan from './GesetzDerGeschlossenheitVerlaufsplan.vue'
const props = defineProps({ topic: { type: String, required: true } })
const selected = ref('verlauf')
watch(() => props.topic, () => { selected.value = 'verlauf' })
const title = computed(() => props.topic === '3d-druck' ? '3D Druck' : 'Gesetz der Geschlossenheit')
const document = computed(() => props.topic === '3d-druck'
  ? (selected.value === 'verlauf' ? DreiDDruckVerlaufsplan : DreiDDruck)
  : (selected.value === 'verlauf' ? GesetzDerGeschlossenheitVerlaufsplan : GesetzDerGeschlossenheit))
</script>
<template>
  <main class="lesson-plan-page">
    <RouterLink to="/" class="back">← Zur Startseite</RouterLink>
    <header><p>Verlaufspläne</p><h1>{{ title }}</h1></header>
    <Tabs v-model:value="selected"><TabList><Tab value="verlauf">Verlaufsplan</Tab><Tab value="langform">Unterrichtsausarbeitung · Langform</Tab></TabList></Tabs>
    <div class="document-scroll" tabindex="0" role="region" :aria-label="`${title} – ${selected === 'verlauf' ? 'Verlaufsplan' : 'Langform'}`"><component :is="document" /></div>
  </main>
</template>
<style scoped>
.lesson-plan-page { padding: 32px; max-width: 1400px; margin: auto; color: #202622; box-sizing: border-box; }
.back { color: #176746; text-decoration: none; font-size: 14px; }
header { margin: 24px 0; } header p { color: #647168; margin: 0 0 6px; } h1 { font-size: 28px; font-weight: 500; margin: 0; }
.document-scroll { overflow: auto; max-width: 100%; margin-top: 20px; border: 1px solid #dce3dd; background: white; }
@media (max-width: 740px) { .lesson-plan-page { padding: 16px; } }
</style>
