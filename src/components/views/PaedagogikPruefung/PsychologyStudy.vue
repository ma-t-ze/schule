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
import { psychologyTopics as topics, psychologyNotes } from './psychologyTopics'

const key = 'psych-d25-learning-v1'
let saved = {}
try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {} } catch { /* Ohne gespeicherten Stand beginnen. */ }
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
const visibleTopics = computed(() => topics.filter(t => `${t.title} ${t.required} ${t.concepts.flat().join(' ')}`.toLocaleLowerCase('de').includes(query.value.toLocaleLowerCase('de'))))
const trainingTopic = ref(null)
const questionIndex = ref(0)
const showAnswer = ref(false)
const pool = computed(() => trainingTopic.value ? topics.filter(t => t.id === trainingTopic.value) : topics)
const current = computed(() => pool.value[questionIndex.value % pool.value.length])
watch(trainingTopic, () => { questionIndex.value = 0; showAnswer.value = false })
function next() { questionIndex.value++; showAnswer.value = false }
const stages = [
  ['Bis 8. November', 'Überblick und Auswahl', 'Alle Themen an der Ich-kann-Liste prüfen. Zu drei möglichen Schwerpunkten je einen eigenen Fall und zwei zentrale Modelle notieren. Interessen, Praxiserfahrung und Sicherheit vergleichen.'],
  ['9. – 15. November', 'Modelle präzisieren', 'Begriffe und Modelle ohne Vorlage erklären: etwa vier Fragen der Motivation, vier operante Konsequenztypen oder Gedächtnismodelle. Bei einem gewählten Schwerpunkt Chancen, Grenzen und zwei unterschiedliche Fälle ausarbeiten.'],
  ['16. – 22. November', 'Theorie am Fall anwenden', 'Jeden Tag einen Fall laut analysieren. Erst Beobachtung, dann theoretische Erklärung, dann Handlung. Im Bereich Querverbindungen jeweils den passenden pädagogischen Anschluss ergänzen.'],
  ['23. – 29. November', 'Prüfungsgespräch', 'Mit einer anderen Person Nachfragen, alternative Deutungen und Gegenargumente üben. Auch Themen außerhalb des gewählten Schwerpunkts einbeziehen. Offene Fragen zu Mediation und Kursabgrenzungen vorher klären.'],
  ['30. November – 1. Dezember', 'Lücken schließen', 'Fehleranfällige Unterscheidungen wiederholen, eigene Beispiele griffbereit haben und kurze strukturierte Antworten üben. Den Lernumfang begrenzen und Erholung einplanen.'],
  ['2. Dezember 2026', 'Prüfung', 'Den Fall genau erfassen, bei Bedarf nachfragen und das passende Modell begründet auswählen. Eigenständig eine Verbindung zur Pädagogik anbieten.']
]
</script>

<template>
  <section class="psych-study" aria-label="Pädagogische Psychologie">
    <h2>Pädagogische Psychologie</h2>
    <p>Modelle erklären, Situationen differenziert deuten und begründete Handlungsmöglichkeiten entwickeln.</p>
    <Tabs value="overview">
      <TabList><Tab value="overview">Prüfungsrahmen</Tab><Tab value="topics">Lernstoff</Tab><Tab value="practice">Falltraining</Tab><Tab value="plan">Lernplan &amp; Schwerpunkt</Tab></TabList>
      <TabPanels>
        <TabPanel value="overview">
          <div class="two-column">
            <Card><template #title>Dein Stoffüberblick</template><template #content>
              <p>Die Aufbereitung folgt der <strong>Ich-kann-Liste Pädagogische Psychologie von Jörg Heckendorf</strong> und den Präsentationen, Skripten und Arbeitsaufträgen aus deiner ZIP.</p>
              <ul><li v-for="topic in topics" :key="topic.id">{{ topic.title }}</li></ul>
              <p>{{ completed.length }} von {{ topics.length }} Themen als sicher erklärt markiert.</p>
            </template></Card>
            <Card><template #title>So übst du prüfungsnah</template><template #content>
              <ol><li>Beschreibe den Fall ohne vorschnelle Zuschreibung.</li><li>Wähle ein Modell und erkläre dessen Begriffe korrekt.</li><li>Zeige, wie das Modell die konkrete Situation erklären könnte.</li><li>Leite mehrere Handlungsoptionen ab und wäge sie gegeneinander ab.</li><li>Stelle einen Bezug zur Pädagogik her und nenne ein überprüfbares Ziel.</li></ol>
              <p>Eine theoretische Erklärung ist eine begründete Perspektive, keine sichere Diagnose der beteiligten Personen. Übe auch, wann ein anderes Modell hilfreicher wäre.</p>
              <p>Für Ablauf, Zeitrahmen und Schwerpunktregel gelten hier die neueren „Hinweise zur Prüfung D25“ aus dem Bereich Pädagogik. Prüfung: <strong>2. Dezember 2026</strong>.</p>
            </template></Card>
          </div>
          <Message severity="info" :closable="false">Visualisierung ist im Psychologie-Thema Lernen und Gedächtnis enthalten. Der Ausschluss in den D25-Pädagogik-Hinweisen bezieht sich auf den dortigen Bereich Unterrichtsmethoden.</Message>
          <Panel header="Quellenstand und gezielte Nachlesepunkte" toggleable collapsed class="section-panel"><ul><li v-for="note in psychologyNotes" :key="note">{{ note }}</li></ul></Panel>
          <p class="source">Eigene Zusammenfassungen, keine vollständige Wiedergabe der Originalunterlagen. Die Übungsfälle und Antwortideen wurden für deine Vorbereitung entwickelt; sie sind keine angekündigten Prüfungsfragen. Originaldateien bleiben außerhalb der veröffentlichten Website.</p>
        </TabPanel>
        <TabPanel value="topics">
          <div class="study-toolbar"><label for="psych-search">Psychologie-Themen suchen</label><InputText id="psych-search" v-model="query" placeholder="z. B. Weiner oder Gedächtnis" /><span>{{ completed.length }} von {{ topics.length }} sicher erklärt</span></div>
          <p>Hake ab, wenn du die Begriffe ohne Vorlage erklären und an einem neuen Fall anwenden kannst.</p>
          <p v-if="!visibleTopics.length" role="status">Kein passendes Thema gefunden.</p>
          <Panel v-for="topic in visibleTopics" :key="topic.id" :header="topic.title" toggleable collapsed class="section-panel">
            <p class="required"><strong>Lernziel nach den Materialien:</strong> {{ topic.required }}</p>
            <section v-for="[term, explanation] in topic.concepts" :key="term"><h3>{{ term }}</h3><p>{{ explanation }}</p></section>
            <h3>Eigene Praxis reflektieren</h3><ul><li v-for="question in topic.questions" :key="question">{{ question }}</li></ul>
            <p class="connection">{{ topic.bridge }}</p>
            <div class="check-row"><Checkbox v-model="completed" :input-id="`psych-learned-${topic.id}`" :value="topic.id" /><label :for="`psych-learned-${topic.id}`">Kann ich erklären und anwenden</label></div>
            <p class="source">Quelle: {{ topic.source }}</p>
          </Panel>
        </TabPanel>
        <TabPanel value="practice">
          <label id="psych-training-label" for="psych-training">Trainingsbereich</label><Select aria-labelledby="psych-training-label" v-model="trainingTopic" input-id="psych-training" :options="topics" option-label="title" option-value="id" show-clear placeholder="Alle Psychologie-Themen" class="training-select" />
          <Card class="case-card"><template #subtitle>{{ current.title }} · selbst entwickeltes Übungsbeispiel</template><template #title>Wie erklärst du die Situation?</template><template #content>
            <p class="case-text">{{ current.situation }}</p><p>Antworte zunächst laut. Trenne Beobachtung, Hypothese, Modell und Handlung.</p>
            <Button :label="showAnswer ? 'Antwortideen ausblenden' : 'Antwortideen anzeigen'" outlined @click="showAnswer = !showAnswer" />
            <div v-if="showAnswer" class="answer"><h3>Möglicher Gedankengang</h3><ol><li v-for="point in current.answer" :key="point">{{ point }}</li></ol><p>{{ current.bridge }}</p><p class="source">Andere begründete Lösungen sind möglich. Materialbasis: {{ current.source }}</p></div>
          </template><template #footer><Button label="Nächster Fall" @click="next" /></template></Card>
          <Panel header="Nachfragen zum Weiterdenken" class="section-panel"><ul><li v-for="question in current.questions" :key="question">{{ question }}</li><li>Was erklärt das Modell hier nicht?</li><li>Woran überprüfst du, ob deine Maßnahme wirkt?</li></ul></Panel>
        </TabPanel>
        <TabPanel value="plan">
          <div class="two-column">
            <Card><template #title>Deine Psychologie-Kandidaten</template><template #content><p>Persönliche Vorauswahl, keine offizielle Meldung. Der Schwerpunkt wird nur in einem der beiden Fächer gewählt.</p><div v-for="topic in topics" :key="topic.id" class="check-row"><Checkbox v-model="shortlist" :input-id="`psych-candidate-${topic.id}`" :value="topic.id" /><label :for="`psych-candidate-${topic.id}`">{{ topic.title }}</label></div></template></Card>
            <Card><template #title>Deine Entscheidung vorbereiten</template><template #content><ul><li>Welche Modelle kann ich präzise und kritisch erklären?</li><li>Welche eigenen Fälle kenne ich?</li><li>Kann ich mehr als eine Handlungsmöglichkeit begründen?</li><li>Welche Verbindung zur Pädagogik gelingt mir?</li><li>Welche offenen Quellenfragen muss ich noch klären?</li></ul><label for="psych-notes">Beispiele, offene Fragen und Schwerpunktideen</label><Textarea id="psych-notes" v-model="notes" rows="7" auto-resize class="notes" /></template></Card>
          </div>
          <h3>Bis zum 2. Dezember</h3><p>Persönlicher Lernvorschlag. Die offizielle Meldefrist separat prüfen.</p>
          <Panel v-for="[date, title, text] in stages" :key="date" :header="`${date} · ${title}`" class="section-panel"><p>{{ text }}</p></Panel>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <Message v-if="storageError" severity="warn" :closable="false">Dein Psychologie-Lernstand konnte in diesem Browser nicht gespeichert werden.</Message>
    <p class="source">Psychologie-Häkchen, Vorauswahl und Notizen werden getrennt vom Pädagogik-Lernstand nur in diesem Browser gespeichert.</p>
  </section>
</template>

<style scoped>
p, li { line-height: 1.65; }
li + li { margin-top: 9px; }
h2 { font-size: 26px; }
h3 { font-size: 20px; margin-top: 24px; }
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
@media(max-width: 720px) { .two-column { grid-template-columns: 1fr; } :deep(.p-tabpanels) { padding: 16px 0; } }
</style>
