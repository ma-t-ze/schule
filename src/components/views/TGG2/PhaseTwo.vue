<script setup>
import { computed, ref, watch, onDeactivated, onBeforeUnmount } from 'vue'
import PostComposer from './PostComposer.vue'
import ProblemVotes from './ProblemVotes.vue'
defineProps({ posts: { type: Array, default: () => [] } })
const draft = ref({ team: '', idea: '', pitch: '' })
const notice = ref('')
try {
  const saved = JSON.parse(localStorage.getItem('3tgg2-phase2') || '{}')
  for (const key of Object.keys(draft.value)) if (typeof saved[key] === 'string') draft.value[key] = saved[key]
} catch { notice.value = 'Deine Eingaben können auf diesem Gerät nicht automatisch gespeichert werden.' }
watch(draft, value => {
  try { localStorage.setItem('3tgg2-phase2', JSON.stringify(value)) }
  catch { notice.value = 'Deine Eingaben können auf diesem Gerät nicht automatisch gespeichert werden.' }
}, { deep: true })
const remaining = ref(480), running = ref(false)
let interval, deadline
function stop() { clearInterval(interval); interval = null; running.value = false }
function tick() { remaining.value = Math.max(0, Math.ceil((deadline - Date.now()) / 1000)); if (!remaining.value) stop() }
function start() {
  if (running.value || remaining.value === 0) return
  deadline = Date.now() + remaining.value * 1000
  running.value = true
  interval = setInterval(tick, 200)
}
function pause() { tick(); stop() }
function reset() { stop(); remaining.value = 480 }
onDeactivated(pause); onBeforeUnmount(stop)
const times = computed(() => Array.from({ length: 8 }, (_, i) => Math.min(60, Math.max(0, remaining.value - (7 - i) * 60))))
const minute = value => `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`
</script>

<template>
  <details open class="phase-two" aria-labelledby="phase-two-title">
    <summary><span class="eyebrow">PHASE 2</span><h2 id="phase-two-title">Ideen finden</h2></summary>
    <div class="assignment"><h3>Arbeitsauftrag</h3><p>Jetzt entwickelt ihr Ideen, um eure Fragestellung aus Phase 1 zu beantworten. In dieser Phase zählt <strong>Quantität vor Qualität</strong> – es geht darum, so viele Ideen wie möglich zu sammeln, egal ob realistisch, verrückt oder ganz einfach.</p><ul><li>Faltet ein DIN-A4-Blatt so, dass ihr acht Felder bekommt.</li><li>Ihr habt acht Minuten Zeit, um acht unterschiedliche Ideen zu beschreiben – eine Idee pro Feld.</li></ul></div>
    <div class="timer-controls"><button type="button" :disabled="running || remaining === 0" @click="start">{{ remaining === 480 ? 'Starten' : 'Fortsetzen' }}</button><button v-if="running" type="button" @click="pause">Pause</button><button type="button" @click="reset">Zurücksetzen</button></div>
    <div class="timer-grid" aria-label="Acht Minuten für acht Ideen"><div v-for="(time, i) in times" :key="i" :class="{ active: running && time > 0 && time < 60, finished: time === 0 }"><span>Idee {{ i + 1 }}</span><strong>{{ minute(time) }}</strong></div></div>
    <p v-if="remaining === 0" role="status">Die acht Minuten sind vorbei. Stellt euch jetzt eure Ideen vor.</p>
    <label for="phase2-team">Namen eurer Gruppenmitglieder (3–4 Personen)</label><input id="phase2-team" v-model="draft.team" placeholder="Eure Namen">
    <p v-if="notice" role="status">{{ notice }}</p>
    <h3>Geht wie folgt vor</h3>
    <h4>Schritt 1: Beste Idee eurer Gruppe auswählen</h4><p>Stellt euch gegenseitig eure Ideen vor und überlegt, welche besonders spannend, originell oder nützlich sind. Fasst ähnliche Ideen zusammen und entscheidet euch für eine Idee, die ihr in der nächsten Phase als Prototyp umsetzen möchtet.</p>
    <label for="phase2-idea">Unsere ausgewählte Idee</label><textarea id="phase2-idea" v-model="draft.idea" rows="4"></textarea>
    <h4>Schritt 2: Idee vor der Klasse pitchen</h4><p>Präsentiert eure Idee in drei Minuten vor der Klasse. Ein Pitch ist eine kurze, überzeugende Vorstellung einer Idee mit dem Ziel, andere dafür zu begeistern.</p><p>Orientiert euch an folgenden Leitfragen:</p><ul><li>Wie funktioniert eure Idee?</li><li>Was macht eure Idee besonders und warum sollte sie umgesetzt werden?</li></ul>
    <label for="phase2-pitch">Notizen für euren Pitch</label><textarea id="phase2-pitch" v-model="draft.pitch" rows="4"></textarea>
    <h3>Finale Idee zur Abstimmung posten</h3><PostComposer v-model="draft.idea" kind="idea" label="Unsere finale Idee" button-label="Idee posten" />
    <h3>Die Klasse entscheidet sich für eine Idee</h3><ProblemVotes kind="idea" :posts="posts.filter(post => post.kind === 'idea')" />
  </details>
</template>

<style scoped>
.phase-two { padding: 28px; border: 1px solid #bdd3ef; border-radius: 16px; background: #e5effc; margin-bottom: 28px; color: #172b44; }
summary { cursor: pointer; }.eyebrow { font-size: 13px; letter-spacing: .12em; }h2 { font-size: 32px; margin: 10px 0 20px; }h3 { font-size: 23px; margin: 30px 0 16px; }h4 { font-size: 20px; margin-bottom: 12px; }p,li { line-height: 1.7; }.assignment { padding: 20px; background: #fff9; border-radius: 12px; }.assignment h3 { margin-top: 0; }
label { display: block; font-weight: 500; margin: 20px 0 10px; }input,textarea { width: 100%; box-sizing: border-box; padding: 14px; border: 1px solid #8daacb; border-radius: 8px; font: inherit; }textarea { resize: vertical; }.timer-controls { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }button { padding: 12px 20px; background: #2156a0; color: white; font: inherit; border: 0; border-radius: 8px; cursor: pointer; }button:disabled { opacity: .5; cursor: default; }
.timer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0 30px; }.timer-grid div { display: flex; align-items: center; justify-content: space-between; gap: 10px; background: white; border: 2px solid transparent; border-radius: 10px; padding: 16px; }.timer-grid strong { font-size: 26px; font-variant-numeric: tabular-nums; }.timer-grid .active { border-color: #2156a0; }.timer-grid .finished { opacity: .5; }
:is(button,input,textarea,summary):focus-visible { outline: 3px solid #2156a0; outline-offset: 3px; }@media(max-width:600px) { .phase-two { padding: 20px; }.timer-grid div { flex-direction: column; } }
</style>
