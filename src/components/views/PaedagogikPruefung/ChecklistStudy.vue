<script setup>
import { computed, ref, watch } from 'vue'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Panel from 'primevue/panel'
import { checklists } from './checklists'
import { topics } from './topics'
import { psychologyTopics } from './psychologyTopics'

const props = defineProps({ subject: { type: String, required: true } })
const query = ref('')
const checklist = computed(() => checklists[props.subject])
watch(() => props.subject, () => { query.value = '' })
const total = computed(() => checklist.value.groups.reduce((sum, group) => sum + group.items.length, 0))
const groups = computed(() => {
  const term = query.value.trim().toLocaleLowerCase('de')
  return checklist.value.groups.map(group => ({
    ...group,
    items: group.items.filter(item => `${group.title} ${item.statement} ${item.answer}`.toLocaleLowerCase('de').includes(term))
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
    <a :href="checklist.original" target="_blank" rel="noopener noreferrer">{{ checklist.originalLabel || 'Originale Ich-kann-Liste öffnen (DOCX)' }}</a>
    <Message severity="info" :closable="false">{{ checklist.notice || 'Die Aussagen stammen aus der Vorlage. Die Antworten sind eigene Lernhilfen und Muster für die Prüfung. Aussagen zur eigenen Praxis musst du mit deinen tatsächlichen Erfahrungen und Beispielen abgleichen.' }}</Message>
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
.sources { margin-top: 20px; font-size: 14px; }
.sources li + li { margin-top: 8px; }
.scope-notes { margin-top: 28px; padding: 20px; background: #f1f6f2; border-radius: 12px; }
.scope-notes h3 { margin-top: 0; }
:deep(.p-panel-title) { line-height: 1.5; overflow-wrap: anywhere; }
:deep(.p-panel-header) { gap: 12px; align-items: flex-start; }
:deep(.p-panel-header-actions) { flex-shrink: 0; }
</style>
