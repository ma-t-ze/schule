<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import Tabs from 'primevue/tabs'
import PlanTextEditor from './PlanTextEditor.vue'
import Button from 'primevue/button'
import './planFonts.css'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import DreiDDruck from './DreiDDruck.vue'
import DreiDDruckVerlaufsplan from './DreiDDruckVerlaufsplan.vue'
import GesetzDerGeschlossenheit from './GesetzDerGeschlossenheit.vue'
import KopierstempelUnterricht from './KopierstempelUnterricht.vue'
import KopierstempelVerlaufsplan from './KopierstempelVerlaufsplan.vue'
import GesetzDerGeschlossenheitVerlaufsplan from './GesetzDerGeschlossenheitVerlaufsplan.vue'
const props = defineProps({ topic: { type: String, required: true } })
const selected = ref('verlauf')
const textEditor = ref(null)
const editingText = ref(false)
const documentRoot = ref(null)
const downloading = ref('')
const pdfError = ref('')
async function downloadPdf(mode) {
  downloading.value = mode; pdfError.value = ''
  try {
    selected.value = mode
    await nextTick()
    await textEditor.value?.whenLoaded()
    const { exportKopierstempelPlan } = await import('./exportKopierstempelPlan')
    await exportKopierstempelPlan(documentRoot.value, mode)
  } catch (error) { pdfError.value = error.message || 'PDF konnte nicht erstellt werden.' }
  finally { downloading.value = '' }
}
async function downloadWord(mode) {
  downloading.value = `word-${mode}`; pdfError.value = ''
  try {
    selected.value = mode
    await nextTick()
    await textEditor.value?.whenLoaded()
    const { exportPlanWord } = await import('./exportPlanWord')
    await exportPlanWord(documentRoot.value, mode, title.value, props.topic)
  } catch (error) { pdfError.value = error.message || 'Word-Dokument konnte nicht erstellt werden.' }
  finally { downloading.value = '' }
}
watch(() => props.topic, () => { selected.value = 'verlauf' })
const title = computed(() => props.topic === 'kopierstempel' ? 'Kopierstempel in Photoshop' : props.topic === '3d-druck' ? '3D Druck' : 'Gesetz der Geschlossenheit')
const document = computed(() => props.topic === 'kopierstempel'
  ? (selected.value === 'verlauf' ? KopierstempelVerlaufsplan : KopierstempelUnterricht)
  : props.topic === '3d-druck'
  ? (selected.value === 'verlauf' ? DreiDDruckVerlaufsplan : DreiDDruck)
  : (selected.value === 'verlauf' ? GesetzDerGeschlossenheitVerlaufsplan : GesetzDerGeschlossenheit))
</script>
<template>
  <main class="lesson-plan-page">
    <RouterLink to="/" class="back">← Zur Startseite</RouterLink>
    <header><p>Verlaufspläne</p><h1>{{ title }}</h1></header>
    <div v-if="topic === 'kopierstempel'" class="pdf-actions">
      <Button label="Verlaufsplan als PDF" outlined :loading="downloading === 'verlauf'" :disabled="!!downloading || editingText" @click="downloadPdf('verlauf')" />
      <Button label="Unterrichtsausarbeitung als PDF" outlined :loading="downloading === 'langform'" :disabled="!!downloading || editingText" @click="downloadPdf('langform')" />
      <Button label="Verlaufsplan als Word" outlined :loading="downloading === 'word-verlauf'" :disabled="!!downloading || editingText" @click="downloadWord('verlauf')" />
      <Button label="Unterrichtsausarbeitung als Word" outlined :loading="downloading === 'word-langform'" :disabled="!!downloading || editingText" @click="downloadWord('langform')" />
    </div>
    <p v-if="pdfError" role="alert">{{ pdfError }}</p>
    <Tabs v-model:value="selected"><TabList><Tab value="verlauf" :disabled="editingText || !!downloading">Verlaufsplan</Tab><Tab value="langform" :disabled="editingText || !!downloading">Unterrichtsausarbeitung · Langform</Tab></TabList></Tabs>
    <PlanTextEditor v-if="documentRoot" ref="textEditor" :key="`${topic}-${selected}`" :root="documentRoot" :topic="topic" :mode="selected" @lock="editingText = $event" />
    <div ref="documentRoot" class="document-scroll" tabindex="0" role="region" :aria-label="`${title} – ${selected === 'verlauf' ? 'Verlaufsplan' : 'Langform'}`"><component :is="document" :key="`${topic}-${selected}`" /></div>
  </main>
</template>
<style scoped>
.lesson-plan-page, .lesson-plan-page :deep(*) { -webkit-user-select: text; user-select: text; }
.lesson-plan-page { padding: 32px; max-width: 1400px; margin: auto; color: #202622; box-sizing: border-box; }
.pdf-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; }
[role="alert"] { color: #b42318; }
.document-scroll :deep([data-plan-editable]) { outline: 1px dashed #10a077; outline-offset: 3px; cursor: text; }
.document-scroll :deep([data-plan-editable]:focus) { outline: 2px solid #10a077; background: #f0fdf4; }
.back { color: #176746; text-decoration: none; font-size: 14px; }
header { margin: 24px 0; } header p { color: #647168; margin: 0 0 6px; } h1 { font-size: 28px; font-weight: 500; margin: 0; }
.document-scroll { overflow: auto; max-width: 100%; margin-top: 20px; border: 1px solid #dce3dd; background: white; }
@media (max-width: 740px) { .lesson-plan-page { padding: 16px; } }
</style>
