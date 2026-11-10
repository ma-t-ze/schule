<script setup>
import { computed, ref, watch } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import Panel from 'primevue/panel'
import { checklists } from './checklists'
import { topics } from './topics'
import { psychologyTopics } from './psychologyTopics'

const props = defineProps({ subject: { type: String, required: true } })
const query = ref('')
const exporting = ref(false)
const exportError = ref('')
async function exportPdf() {
  const subject = props.subject
  exporting.value = true
  exportError.value = ''
  try {
    const { downloadChecklistPdf } = await import('./exportChecklistPdf.js')
    await downloadChecklistPdf(subject)
  } catch {
    exportError.value = 'Der PDF-Export ist fehlgeschlagen. Bitte versuche es erneut.'
  } finally { exporting.value = false }
}
const checklist = computed(() => checklists[props.subject])
watch(() => props.subject, () => { query.value = '' })
const total = computed(() => checklist.value.groups.reduce((sum, group) => sum + group.items.length, 0))
const groups = computed(() => {
  const term = query.value.trim().toLocaleLowerCase('de')
  return checklist.value.groups.map(group => ({
    ...group,
    items: group.items.filter(item => `${group.title} ${item.statement} ${item.answer} ${item.sourceNote || ''} ${item.sources?.map(source => source.label).join(' ') || ''}`.toLocaleLowerCase('de').includes(term))
  })).filter(group => group.items.length)
})
function sources(group) {
  const catalog = props.subject === 'paedagogik' ? topics : psychologyTopics
  const links = [...(catalog.find(topic => topic.id === group.topicId)?.sourceLinks || []), ...(group.extraSources || [])]
  return [...new Map(links.map(link => [link.href, link])).values()]
}
</script>

<template>
  <section class="checklist-study" :aria-label="checklist.title">
    <h2>{{ checklist.title }}</h2>
    <p>{{ checklist.intro }}</p>
    <div class="export-actions">
      <Button :label="subject === 'paedagogik' ? 'Pädagogik: PDF mit allen Antworten' : 'Päd. Psychologie: PDF mit allen Antworten'" :loading="exporting" :disabled="exporting" @click="exportPdf" />
      <p>Der Export enthält alle {{ total }} Aussagen und Antworten, auch bei aktiver Suche.</p>
    </div>
    <Message v-if="exportError" severity="error" :closable="false">{{ exportError }}</Message>
    <a :href="checklist.original" target="_blank" rel="noopener noreferrer">{{ checklist.originalLabel || 'Originale Ich-kann-Liste öffnen (DOCX)' }}</a>
    <Message severity="info" :closable="false">{{ checklist.notice || 'Die Aussagen stammen aus der Vorlage. Die Antworten sind eigene Lernhilfen und Muster für die Prüfung. Aussagen zur eigenen Praxis musst du mit deinen tatsächlichen Erfahrungen und Beispielen abgleichen.' }}</Message>
    <p v-if="checklist.reviewNote" class="review-note">{{ checklist.reviewNote }}</p>
    <div v-if="checklist.scopeNotes?.length" class="scope-notes">
      <h3>Eingrenzung laut PDF</h3>
      <ul><li v-for="note in checklist.scopeNotes" :key="note">{{ note }}</li></ul>
    </div>
    <label for="checklist-search">Aussagen und Antworten durchsuchen</label>
    <InputText id="checklist-search" v-model="query" type="search" placeholder="Zum Beispiel Bezugsnorm oder Motivation" class="search" />
    <p class="count" aria-live="polite">{{ groups.reduce((sum, group) => sum + group.items.length, 0) }} von {{ total }} Aussagen · Öffne eine Aussage für die Antwort.</p>
    <p v-if="!groups.length" role="status">Keine passende Aussage gefunden.</p>
    <section v-for="group in groups" :key="group.title" class="checklist-group">
      <h3>{{ group.title }}</h3>
      <p v-if="subject === 'psychologie'" class="stem">Ich kann …</p>
      <Panel v-for="item in group.items" :key="item.id" :header="item.statement" toggleable collapsed class="answer-panel">
        <h4>Musterantwort</h4>
        <p>{{ item.answer }}</p>
        <div v-if="item.sources?.length" class="answer-sources">
          <p class="basis">{{ item.basisLabel }}</p>
          <p v-if="item.sourceNote" class="source-note"><strong>Hinweis zur Quelle:</strong> {{ item.sourceNote }}</p>
          <h5>Fundstellen zur Antwort</h5>
          <ul><li v-for="source in item.sources" :key="source.href + source.label"><a :href="source.href" target="_blank" rel="noopener noreferrer">{{ source.label }}</a></li></ul>
        </div>
      </Panel>
      <div class="sources">
        <h4>Unterlagen zum Nachlesen</h4>
        <ul><li v-for="source in sources(group)" :key="source.href"><a :href="source.href" target="_blank" rel="noopener noreferrer">{{ source.label }}</a></li></ul>
      </div>
    </section>
  </section>
</template>

<style scoped>
.checklist-study { margin-top: 28px; }
.export-actions { margin: 20px 0; }
.export-actions p { margin: 8px 0 0; color: #59665e; font-size: 14px; }
h2 { font-size: clamp(24px, 4vw, 32px); }
h3 { margin: 28px 0 12px; font-size: 22px; }
h4 { margin: 0 0 10px; font-size: 16px; }
p, li { line-height: 1.65; }
a { color: #007c4a; overflow-wrap: anywhere; }
label { display: block; margin: 24px 0 8px; }
.search { width: 100%; }
.count, .stem { color: #59665e; }
.answer-panel { margin: 12px 0; }
.answer-panel p { margin-bottom: 0; }
.answer-sources { margin-top: 18px; padding-top: 12px; border-top: 1px solid #cdd8d0; font-size: 14px; }
.answer-sources h5 { font-size: 14px; margin: 14px 0 8px; }
.answer-sources ul { margin: 0; padding-left: 20px; }
.basis, .review-note { color: #59665e; font-size: 14px; }
.source-note { padding: 12px; border-left: 3px solid #748b77; background: #f1f6f2; }
.sources { margin-top: 20px; font-size: 14px; }
.sources li + li { margin-top: 8px; }
.scope-notes { margin-top: 28px; padding: 20px; background: #f1f6f2; border-radius: 12px; }
.scope-notes h3 { margin-top: 0; }
:deep(.p-panel-title) { line-height: 1.5; overflow-wrap: anywhere; }
:deep(.p-panel-header) { gap: 12px; align-items: flex-start; }
:deep(.p-panel-header-actions) { flex-shrink: 0; }
</style>
