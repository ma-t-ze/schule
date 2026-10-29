<script setup>
import { computed, ref, watch } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Panel from 'primevue/panel'
import Select from 'primevue/select'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Textarea from 'primevue/textarea'
import { topics, supplementary } from './topics'
import PsychologyStudy from './PsychologyStudy.vue'
import ConnectionsStudy from './ConnectionsStudy.vue'

const subject = ref('paedagogik')
const subjects = [
  { id: 'paedagogik', label: 'Pädagogik' },
  { id: 'psychologie', label: 'Pädagogische Psychologie' },
  { id: 'connections', label: 'Querverbindungen' }
]

const key = 'paed-d25-learning-v1'
let saved = {}
try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {} } catch { /* Ohne gespeicherten Stand starten. */ }
const validIds = value => Array.isArray(value) ? value.filter(id => topics.some(t => t.id === id)) : []
const completed = ref(validIds(saved.completed))
const shortlist = ref(validIds(saved.shortlist))
const notes = ref(typeof saved.notes === 'string' ? saved.notes : '')
const storageError = ref(false)
watch([completed, shortlist, notes], () => {
  try { localStorage.setItem(key, JSON.stringify({ completed: completed.value, shortlist: shortlist.value, notes: notes.value })); storageError.value = false }
  catch { storageError.value = true }
}, { deep: true })
const query = ref('')
const visibleTopics = computed(() => topics.filter(t => `${t.title} ${t.required}`.toLocaleLowerCase('de').includes(query.value.toLocaleLowerCase('de'))))
const trainingTopic = ref(null)
const questionIndex = ref(0)
const showAnswer = ref(false)
const trainingTopics = computed(() => trainingTopic.value ? topics.filter(t => t.id === trainingTopic.value) : topics)
const current = computed(() => trainingTopics.value[questionIndex.value % trainingTopics.value.length])
watch(trainingTopic, () => { questionIndex.value = 0; showAnswer.value = false })
function next() { questionIndex.value++; showAnswer.value = false }
const stages = [
  ['26. Oktober – 8. November', 'Orientieren und Schwerpunkt suchen', 'Alle acht Bereiche überblicken und drei Fälle laut bearbeiten. Zwei bis drei Schwerpunkt-Kandidaten markieren und eigene Unterrichtsbeispiele sammeln. Der 8. November ist dein persönliches Auswahlziel, keine bestätigte Meldefrist.'],
  ['9. – 15. November', 'Schwerpunkt ausarbeiten', 'Eine Leitfrage, zentrale Begriffe und zwei Fälle mit Handlungsalternativen entwickeln. Die übrigen Themen wiederholen. Auch ein Lehr-Lern-Arrangement und eine Beeinträchtigung als vertiefte Beispiele auswählen.'],
  ['16. – 22. November', 'Wissen vernetzen', 'Täglich einen Fall aus wechselnden Bereichen bearbeiten und Gegenargumente suchen. Psychologische Bezüge anhand der Modelle im Bereich Pädagogische Psychologie ausarbeiten.'],
  ['23. – 29. November', 'Prüfungsgespräche üben', 'Mit einer zweiten Person Gespräche im für deine Laufbahn passenden Zeitrahmen simulieren. Nachfragen zulassen. Prüfen, ob du analysierst, Theorie anwendest und Alternativen abwägst.'],
  ['30. November – 1. Dezember', 'Gezielt wiederholen', 'Offene Lücken und eigene Praxisbeispiele wiederholen. Organisatorische Fragen klären. Möglichst kein neues großes Thema beginnen.'],
  ['2. Dezember 2026', 'Prüfung', 'Fall genau erfassen, bei Unklarheiten nachfragen, kurz strukturieren und begründet antworten. Querverbindungen selbst anbieten.']
]
</script>

<template>
  <main class="exam-page">
    <RouterLink class="back" :to="{ name: 'home' }">← Zur Startseite</RouterLink>
    <header><p class="eyebrow">Deine Prüfungsvorbereitung · D25</p><h1>Pädagogik und Pädagogische Psychologie</h1><p class="intro">2. Dezember 2026 · Verstehen, am Fall anwenden und die eigene Entscheidung begründen.</p></header>
    <nav class="subject-nav" aria-label="Lernbereich wählen">
      <Button v-for="item in subjects" :key="item.id" :label="item.label" :outlined="subject !== item.id" :aria-pressed="subject === item.id" @click="subject = item.id" />
    </nav>
    <PsychologyStudy v-show="subject === 'psychologie'" />
    <ConnectionsStudy v-show="subject === 'connections'" />
    <section v-show="subject === 'paedagogik'" aria-label="Pädagogik">
    <Message severity="info" :closable="false">Schwerpunkt noch offen. Vergleiche in den nächsten zwei Wochen mögliche Themen. Ein Schwerpunkt ersetzt die Vorbereitung der übrigen Inhalte nicht.</Message>
    <Tabs value="overview">
      <TabList><Tab value="overview">Prüfungsrahmen</Tab><Tab value="topics">Lernstoff</Tab><Tab value="practice">Falltraining</Tab><Tab value="plan">Lernplan &amp; Schwerpunkt</Tab></TabList>
      <TabPanels>
        <TabPanel value="overview">
          <section class="two-column">
            <Card><template #title>Was die Hinweise D25 verlangen</template><template #content>
              <p>Grundlage: <strong>„Hinweise zur Prüfung D25“ von Lutz Eisele, S. 1–5.</strong> Zusammenfassung der bereitgestellten Unterlage:</p>
              <ul><li>Höherer Dienst: insgesamt 30 Minuten, je 15 Minuten pro Fach. Gehobener Dienst: insgesamt 20 Minuten, je 10 Minuten pro Fach.</li><li>Ein Schwerpunkt kann in einem der beiden Fächer gewählt werden und muss aus den Lehrveranstaltungen stammen. Die Wahl wird auf dem Meldeformular vermerkt.</li><li>Einstieg über einen von den Prüfenden vorgelegten Fall. Schwerpunkt einschließlich Fall: höchstens ein Drittel der gesamten Prüfungszeit.</li><li>Bewertet werden Theoriekenntnisse, reflektierte Anwendung auf Unterricht und Schule sowie Verbindungen zwischen Pädagogik und Pädagogischer Psychologie.</li></ul>
            </template></Card>
            <Card><template #title>So gehst du an einen Fall heran</template><template #content>
              <ol><li><strong>Erfassen:</strong> Was ist beschrieben, was fehlt? Beobachtung und Vermutung trennen.</li><li><strong>Einordnen:</strong> Welche Begriffe oder Modelle erklären das Problem?</li><li><strong>Handeln:</strong> Zwei sinnvolle Möglichkeiten für die konkrete Situation entwickeln.</li><li><strong>Abwägen:</strong> Chancen, Grenzen und Folgen für die Beteiligten benennen.</li><li><strong>Prüfen:</strong> Woran erkennst du, ob dein Vorgehen wirkt?</li></ol>
              <p>Diese Schritte sind eine Lernhilfe. Laut Prüfungshinweisen zunächst knapp strukturieren, Vertiefungen anbieten und Querverbindungen selbst herstellen. Auch der Gesprächsrahmen des Falls zählt, etwa ein kurzes Gespräch auf dem Flur.</p>
            </template></Card>
          </section>
          <Panel header="Gezielt eingrenzen" class="section-panel"><ul><li><strong>Ausgeschlossen:</strong> Visualisierung im Bereich Unterrichtsmethoden und die dritte Sitzung zur Leistungsmessung. Nachteilsausgleich bleibt über Inklusion prüfungsrelevant.</li><li><strong>Nicht gefordert:</strong> die Unterscheidung zwischen leichter und einfacher Sprache.</li><li><strong>Gezielt auswählen:</strong> ein Lehr-Lern-Arrangement sowie eine Beeinträchtigung aus Autismus, AD(H)S oder Förderschwerpunkt Lernen.</li><li><strong>Schulentwicklung:</strong> ergänzend enthalten, da das Skript eigene Prüfungserwartungen nennt; nicht ausdrücklich durch D25 ausgeschlossen.</li></ul></Panel>
          <Message severity="info" :closable="false">Die Psychologie-Unterlagen sind im eigenen Lernbereich aufbereitet. Unter „Querverbindungen“ übst du die Verknüpfung beider Fächer am Fall.</Message>
          <p class="source">Eigene Lernzusammenfassungen nach den D25-Unterlagen. Die Fälle und Antwortideen sind selbst entwickelte Übungen, keine vorhergesagten Prüfungsfragen. Originalunterlagen werden hier nicht öffentlich zum Download bereitgestellt.</p>
        </TabPanel>
        <TabPanel value="topics">
          <div class="study-toolbar"><label for="topic-search">Themen suchen</label><InputText id="topic-search" v-model="query" placeholder="z. B. Feedback oder Inklusion" /><span>{{ completed.length }} von {{ topics.length }} sicher erklärt</span></div>
          <p>Hake ein Thema ab, wenn du es ohne Text erklären und am Fall anwenden kannst.</p>
          <p v-if="!visibleTopics.length" role="status">Kein passendes Thema gefunden.</p>
          <Panel v-for="topic in visibleTopics" :key="topic.id" :header="topic.title" toggleable collapsed class="section-panel">
            <p class="required"><strong>Prüfungsziel:</strong> {{ topic.required }}</p>
            <section v-for="[term, explanation] in topic.concepts" :key="term"><h2>{{ term }}</h2><p>{{ explanation }}</p></section>
            <h2>Übertrage es auf deinen Unterricht</h2><ul><li v-for="question in topic.questions" :key="question">{{ question }}</li></ul>
            <p class="connection">{{ topic.bridge }}</p>
            <div class="check-row"><Checkbox v-model="completed" :input-id="`learned-${topic.id}`" :value="topic.id" /><label :for="`learned-${topic.id}`">Kann ich erklären und anwenden</label></div>
            <p class="source">Quelle: {{ topic.source }}</p>
          </Panel>
          <Panel :header="supplementary.title" toggleable collapsed class="section-panel"><p>{{ supplementary.text }}</p><h2>Transferfrage</h2><p>{{ supplementary.question }}</p><p class="source">{{ supplementary.source }}</p></Panel>
        </TabPanel>
        <TabPanel value="practice">
          <label id="training-topic-label" for="training-topic">Trainingsbereich</label><Select aria-labelledby="training-topic-label" v-model="trainingTopic" input-id="training-topic" :options="topics" option-label="title" option-value="id" show-clear placeholder="Alle Themen" class="training-select" />
          <Card class="case-card"><template #subtitle>{{ current.title }} · selbst entwickeltes Übungsbeispiel</template><template #title>Wie würdest du handeln?</template><template #content>
            <p class="case-text">{{ current.situation }}</p><p>Antworte zunächst laut: analysieren, theoretisch einordnen, Alternativen begründen und Wirkung prüfen.</p>
            <Button :label="showAnswer ? 'Antwortideen ausblenden' : 'Antwortideen anzeigen'" outlined @click="showAnswer = !showAnswer" />
            <div v-if="showAnswer" class="answer"><h2>Möglicher Gedankengang</h2><ol><li v-for="point in current.answer" :key="point">{{ point }}</li></ol><p>{{ current.bridge }}</p><p class="source">Andere begründete Lösungen sind möglich. Materialbasis: {{ current.source }}</p></div>
          </template><template #footer><Button label="Nächster Fall" @click="next" /></template></Card>
          <Panel header="Nachfragen zum Weiterdenken" class="section-panel"><ul><li v-for="question in current.questions" :key="question">{{ question }}</li><li>Welcher Einwand könnte gegen deine erste Lösung sprechen?</li><li>Was tust du, wenn die Maßnahme nicht wirkt?</li></ul></Panel>
        </TabPanel>
        <TabPanel value="plan">
          <section class="two-column">
            <Card><template #title>Deine Schwerpunkt-Kandidaten</template><template #content><p>Markiere mehrere Möglichkeiten. Das ist eine persönliche Vorauswahl, keine offizielle Meldung.</p><div v-for="topic in topics" :key="topic.id" class="check-row"><Checkbox v-model="shortlist" :input-id="`candidate-${topic.id}`" :value="topic.id" /><label :for="`candidate-${topic.id}`">{{ topic.title }}</label></div></template></Card>
            <Card><template #title>Was eignet sich für dich?</template><template #content><ul><li>Habe ich eigene Unterrichtserfahrungen und konkrete Beispiele?</li><li>Kann ich Theorie präzise erklären und kritisch anwenden?</li><li>Kann ich Alternativen und Grenzen diskutieren?</li><li>Gelingen mir Verbindungen zur Pädagogischen Psychologie?</li><li>Interessiert mich das Thema auch bei vertieften Nachfragen?</li></ul><label for="focus-notes">Eigene Beispiele, offene Fragen und Entscheidung</label><Textarea id="focus-notes" v-model="notes" rows="6" auto-resize class="notes" /></template></Card>
          </section>
          <h2>Dein Weg bis zum 2. Dezember</h2><p>Vorschlag für die Vorbereitung, keine Seminarvorgabe. Die offizielle Meldefrist für den Schwerpunkt bitte separat prüfen.</p>
          <Panel v-for="[date, title, text] in stages" :key="date" :header="`${date} · ${title}`" class="section-panel"><p>{{ text }}</p></Panel>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </section>
    <Message v-if="storageError" severity="warn" :closable="false">Dein Lernstand konnte in diesem Browser nicht gespeichert werden.</Message>
    <p class="source">Häkchen, Vorauswahl und Notizen bleiben in diesem Browser gespeichert, ohne Synchronisation mit STRATO.</p>
  </main>
</template>

<style scoped>
.exam-page { max-width: 1180px; margin: 0 auto; padding: 32px 24px 64px; color: #26362f; }
.subject-nav { display: flex; flex-wrap: wrap; gap: 12px; margin: 24px 0; }
.back { color: #007c4a; display: inline-block; margin-bottom: 24px; }
header { margin-bottom: 24px; }
.eyebrow { color: #007c4a; letter-spacing: .06em; font-size: 14px; }
h1 { font-size: clamp(28px, 4vw, 44px); line-height: 1.16; margin: 10px 0 16px; }
h2 { font-size: 20px; margin-top: 24px; }
p, li { line-height: 1.65; }
li + li { margin-top: 9px; }
.intro { font-size: 18px; }
.two-column { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
.section-panel, .case-card { margin: 20px 0; }
.required, .connection, .answer { background: #f1f6f2; padding: 16px; border-radius: 10px; }
.source { color: #59665e; font-size: 14px; overflow-wrap: anywhere; }
.study-toolbar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.study-toolbar input { flex: 1; min-width: 180px; }
.training-select { display: flex; max-width: 100%; width: 480px; margin-top: 8px; }
.case-text { font-size: 21px; }
.check-row { display: flex; align-items: center; gap: 10px; margin: 14px 0; }
.check-row label { cursor: pointer; }
.notes { width: 100%; margin-top: 10px; }
:deep(.p-tablist-tab-list) { flex-wrap: wrap; }
:deep(.p-tab) { white-space: normal; }
:deep(.p-tabpanels) { background: transparent; }
:deep(.p-message) { margin: 20px 0; }
@media(max-width: 720px) { .two-column { grid-template-columns: 1fr; } .exam-page { padding: 20px 12px 40px; } :deep(.p-tabpanels) { padding: 16px 0; } }
</style>
