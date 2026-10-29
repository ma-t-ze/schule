<script setup>
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
import Panel from 'primevue/panel'
import { connections } from './connections'
import { topics, supplementary } from './topics'
import { psychologyTopics } from './psychologyTopics'
const revealed = ref([])
const sources = computed(() => Object.fromEntries(connections.map(c => [c.id, [
  ...c.paed.map(id => topics.find(t => t.id === id)?.source),
  ...c.psych.map(id => psychologyTopics.find(t => t.id === id)?.source),
  ...(c.id === 'schulentwicklung-gesundheit' ? [supplementary.source] : [])
].filter(Boolean)])))
function toggle(id) { revealed.value = revealed.value.includes(id) ? revealed.value.filter(x => x !== id) : [...revealed.value, id] }
</script>
<template>
  <section aria-label="Querverbindungen" class="connections-study">
    <h2>Pädagogik und Psychologie verknüpfen</h2>
    <p>Verknüpfe eine pädagogische Entscheidung mit einem psychologischen Erklärungsmodell. Erkläre nicht nur zwei Theorien nebeneinander: Zeige, was die Verbindung für dein Handeln im konkreten Fall verändert.</p>
    <Message severity="info" :closable="false">Die D25-Hinweise erwarten selbstständig hergestellte Querverbindungen. Die folgenden Fälle sind eigene Übungsvorschläge auf Grundlage deiner beiden Materialsammlungen.</Message>
    <Panel v-for="connection in connections" :key="connection.id" :header="connection.title" toggleable collapsed class="connection-panel">
      <h3>Der Fall</h3><p class="case-text">{{ connection.case }}</p><p>{{ connection.question }}</p>
      <Button :label="revealed.includes(connection.id) ? 'Verknüpfung ausblenden' : 'Verknüpfung anzeigen'" outlined @click="toggle(connection.id)" />
      <div v-if="revealed.includes(connection.id)" class="answer">
        <h3>Theorie verbinden</h3><p>{{ connection.theory }}</p>
        <h3>Handlung ableiten</h3><p>{{ connection.action }}</p>
        <h3>Wirkung prüfen</h3><p>{{ connection.evaluation }}</p>
        <p>Andere Deutungen und Lösungen sind möglich. Welche zusätzliche Information könnte deine Einschätzung verändern?</p>
        <p class="source">Materialbasis:</p><ul class="source"><li v-for="source in sources[connection.id]" :key="source">{{ source }}</li></ul>
      </div>
    </Panel>
    <p class="source">Die Pädagogik-Hinweise nennen Gruppenphasen als weiteres Verknüpfungsbeispiel. Ein eigener ausführlicher Text zum dort gemeinten Gruppenphasenmodell war in der Psychologie-ZIP nicht enthalten; ein bestimmtes Modell wird deshalb hier nicht als gesicherter Kursinhalt ergänzt.</p>
  </section>
</template>
<style scoped>
p, li { line-height: 1.65; }
h2 { font-size: 26px; }
h3 { font-size: 20px; margin-top: 24px; }
.connection-panel { margin: 20px 0; }
.case-text { font-size: 20px; }
.answer { background: #f1f6f2; padding: 16px; border-radius: 10px; margin-top: 20px; }
.source { color: #59665e; font-size: 14px; overflow-wrap: anywhere; }
</style>
