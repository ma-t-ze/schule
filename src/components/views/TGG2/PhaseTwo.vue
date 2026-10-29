<script setup>
import { computed, ref, watch, onDeactivated, onBeforeUnmount } from 'vue'
import { submitDesignPost, designError } from '../../../services/designThinkingFirebase'
import ProblemVotes from './ProblemVotes.vue'
import { exportPhasePdf } from './exportPhasePdf'
const phaseElement = ref(null)
const props = defineProps({ posts: { type: Array, default: () => [] }, pdfMode: { type: Boolean, default: false } })
const draft = ref({ team: '', idea: '', pitch: '', team2: '', idea2: '', pitch2: '', candidate1: '', candidate2: '', candidate3: '', selectedCandidate: 'candidate1', finalIdea: '', matrix: Array.from({ length: 4 }, () => ({ text: '', scores: [0, 0, 0] })) })
const notice = ref('')
try {
  const saved = props.pdfMode ? {} : JSON.parse(localStorage.getItem('3tgg2-phase2') || '{}')
  for (const key of Object.keys(draft.value)) if (typeof saved[key] === 'string') draft.value[key] = saved[key]
  if (Array.isArray(saved.matrix)) draft.value.matrix = Array.from({ length: 4 }, (_, i) => ({
    text: typeof saved.matrix[i]?.text === 'string' ? saved.matrix[i].text : '',
    scores: Array.from({ length: 3 }, (_, c) => Number.isInteger(saved.matrix[i]?.scores?.[c]) && saved.matrix[i].scores[c] >= 1 && saved.matrix[i].scores[c] <= 5 ? saved.matrix[i].scores[c] : 0)
  }))
  if (!draft.value.team2) draft.value.team2 = draft.value.team
  if (!draft.value.finalIdea) draft.value.finalIdea = draft.value[draft.value.selectedCandidate] || draft.value.idea2 || draft.value.idea || draft.value.candidate1
} catch { notice.value = 'Deine Eingaben können auf diesem Gerät nicht automatisch gespeichert werden.' }
watch(draft, value => {
  if (props.pdfMode) return
  try { localStorage.setItem('3tgg2-phase2', JSON.stringify(value)) }
  catch { notice.value = 'Deine Eingaben können auf diesem Gerät nicht automatisch gespeichert werden.' }
}, { deep: true })
const criteria = ['Originalität', 'Nutzen', 'Umsetzbarkeit']
const rankedIdeas = computed(() => draft.value.matrix.map((idea, index) => ({
  index, text: idea.text, total: idea.scores.reduce((sum, score) => sum + score, 0), complete: idea.scores.every(score => score > 0)
})).sort((a, b) => b.total - a.total || a.index - b.index))
const posting = ref(false), postMessage = ref(''), postError = ref('')
const finalIdea = computed(() => draft.value.finalIdea)
let pendingPost
async function postIdea() {
  if (posting.value || !finalIdea.value.trim() || finalIdea.value.length > 5000) return
  posting.value = true; postError.value = ''; postMessage.value = ''
  if (!pendingPost || pendingPost.text !== finalIdea.value) pendingPost = { id: crypto.randomUUID(), text: finalIdea.value }
  try {
    await submitDesignPost(pendingPost.id, 'idea', pendingPost.text)
    postMessage.value = 'Eure finale Idee wurde zur Abstimmung veröffentlicht.'
  } catch (error) { postError.value = designError(error, 'Idee posten') }
  finally { posting.value = false }
}
const exporting = ref(false), exportError = ref('')
const pitchInfo = ref(props.pdfMode)
async function downloadAnswers() {
  if (exporting.value) return
  exporting.value = true; exportError.value = ''
  try {
    await exportPhasePdf(phaseElement.value)
  } catch { exportError.value = 'Der PDF-Download hat nicht funktioniert. Eure Eingaben bleiben erhalten. Bitte versucht es erneut.' }
  finally { exporting.value = false }
}
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
function pause() { if (running.value) tick(); stop() }
function reset() { stop(); remaining.value = 480 }
onDeactivated(pause); onBeforeUnmount(stop)
const times = computed(() => Array.from({ length: 8 }, (_, i) => Math.min(60, Math.max(0, remaining.value - (7 - i) * 60))))
const minute = value => `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`
</script>

<template>
  <details ref="phaseElement" class="blue-card phase-two" aria-labelledby="phase-two-title">
    <summary><span class="block-heading"><span class="eyebrow">PHASE 2</span><h2 id="phase-two-title">Ideen finden</h2></span></summary>

    <section class="assignment" aria-labelledby="assignment-one">
      <h3 id="assignment-one">Arbeitsauftrag 1</h3>
      <p>Jetzt entwickelt ihr Ideen, um eure Fragestellung aus Phase 1 zu beantworten. In dieser Phase zählt Quantität vor Qualität – es geht darum, so viele Ideen wie möglich zu sammeln, egal ob realistisch, verrückt oder ganz einfach.</p>
      <ul><li>Faltet ein DIN-A4-Blatt so, dass ihr 8 Felder bekommt.</li><li>Ihr habt 8 Minuten Zeit, um 8 unterschiedliche Ideen zu beschreiben.</li></ul>
    </section>
    <section v-if="!pdfMode" class="timer-block" aria-label="Timer für acht Ideen">
      <div class="timer-controls"><button type="button" :disabled="running || remaining === 0" @click="start">{{ remaining === 480 ? 'Starten' : 'Fortsetzen' }}</button><button v-if="running" type="button" @click="pause">Pause</button><button v-if="remaining < 480" type="button" @click="reset">Zurücksetzen</button></div>
      <div class="timer-grid" aria-label="Achtmal eine Minute"><div v-for="(time, i) in times" :key="i" :aria-label="`Idee ${i + 1}: ${minute(time)}`" :class="{ active: running && time > 0 && time < 60, finished: time === 0 }"><strong>{{ minute(time) }}</strong></div></div>
      <p v-if="remaining === 0" role="status">Die acht Minuten sind vorbei.</p>
    </section>
    <section class="assignment" aria-labelledby="assignment-two">
      <h3 id="assignment-two">Arbeitsauftrag 2</h3>
      <p>Findet euch in Gruppen von 2–3 Personen zusammen, diskutiert eure Ideen und entscheidet euch für einen Favoriten. Anschließend <button class="term-link" type="button" :aria-expanded="pitchInfo" aria-controls="pitch-explanation" @click="pitchInfo = !pitchInfo">pitcht</button> ihr eure ausgewählte Idee vor der Klasse. Am Ende der Stunde stimmt die Klasse darüber ab, welche Idee von allen umgesetzt wird.</p>
      <p v-if="pitchInfo" id="pitch-explanation" class="pitch-explanation">Pitchen bedeutet, eine Idee kurz und überzeugend vorzustellen: Wie funktioniert sie, was macht sie besonders und warum sollte sie umgesetzt werden?</p>
    </section>
    <section class="phase-section" aria-label="Gruppenarbeit zum zweiten Arbeitsauftrag">
      <label class="field-label" for="phase2-team2">Namen eurer Gruppenmitglieder (2–3 Personen)</label><input id="phase2-team2" v-model="draft.team2">
      <h3>Geht wie folgt vor</h3>
      <ol class="tasks"><li><div class="step-title"><h3>Beste Idee eurer Gruppe auswählen</h3></div>
      <p>Stellt euch gegenseitig eure Ideen vor und fasst ähnliche Ansätze zusammen. Wählt anschließend vier vielversprechende Ideen aus und bewertet diese mithilfe einer Bewertungsmatrix anhand der Kriterien Originalität, Nutzen und Umsetzbarkeit. Vergebt für jedes Kriterium 1–5 Punkte. Die Idee mit der höchsten Gesamtpunktzahl ist euer Favorit.</p>
      <div class="idea-matrix">
        <div v-for="(idea, i) in draft.matrix" :key="i" class="matrix-row">
          <div class="matrix-text"><label class="field-label" :for="`matrix-idea-${i}`">Idee {{ i + 1 }}</label><textarea :id="`matrix-idea-${i}`" v-model="idea.text" rows="4"></textarea></div>
          <div class="matrix-scores">
            <fieldset v-for="(criterion, c) in criteria" :key="criterion"><legend>{{ criterion }}</legend><div class="rating-options">
              <label v-for="point in 5" :key="point" class="rating-option"><input v-model="idea.scores[c]" type="radio" :name="`rating-${i}-${c}`" :value="point" :aria-label="`Idee ${i + 1}, ${criterion}: ${point} Punkte`"><span>{{ point }}</span></label>
            </div></fieldset>
          </div>
        </div>
        <h4>Favorit</h4>
        <div class="idea-ranking" role="status" aria-live="polite"><div v-for="idea in rankedIdeas" :key="idea.index" :class="{ winner: idea.complete && idea.total === rankedIdeas[0].total }"><strong>Idee {{ idea.index + 1 }}</strong><span>{{ idea.total }} Punkte{{ idea.complete ? '' : ' (vorläufig)' }}</span></div></div>
      </div>
      </li><li><div class="step-title"><h3>Idee vor der Klasse pitchen</h3><span>3 Minuten</span></div>
      <p>Präsentiert eure Idee in 3 Minuten vor der Klasse. Ein Pitch ist eine kurze, überzeugende Vorstellung einer Idee mit dem Ziel, andere dafür zu begeistern.</p>
      <p>Orientiert euch an folgenden Leitfragen:</p><ul><li>Wie funktioniert eure Idee?</li><li>Was macht eure Idee besonders und warum sollte sie umgesetzt werden?</li></ul></li></ol>
    </section>
    <section class="phase-section" aria-labelledby="final-idea-title">
      <h3 id="final-idea-title">Finale Idee zur Abstimmung posten</h3>
      <label class="field-label" for="phase2-final-idea">Unsere finale Idee</label>
      <textarea id="phase2-final-idea" v-model="draft.finalIdea" rows="5" maxlength="5000" :disabled="posting"></textarea>
      <button type="button" :disabled="posting || !finalIdea.trim() || finalIdea.length > 5000" @click="postIdea">{{ posting ? 'Wird gesendet …' : 'Idee posten' }}</button>
      <p v-if="postMessage" role="status">{{ postMessage }}</p><p v-if="postError" role="alert">{{ postError }}</p>
    </section>
    <section v-if="!pdfMode" class="phase-section" aria-labelledby="vote-title"><h3 id="vote-title">Die Klasse entscheidet sich für eine Idee</h3><ProblemVotes kind="idea" :posts="posts.filter(post => post.kind === 'idea')" /></section>
    <p v-if="notice" role="status">{{ notice }}</p>
    <div class="download-area" data-html2canvas-ignore><button class="download-button" type="button" :disabled="exporting" @click="downloadAnswers">{{ exporting ? 'PDF wird erstellt …' : 'Antworten als PDF herunterladen' }}</button></div>
    <p v-if="exportError" role="alert" data-html2canvas-ignore>{{ exportError }}</p>
  </details>
</template>

<style scoped>
@import './designThinking.css';
.phase-two { color: #172b44; }
.phase-two * { box-sizing: border-box; }
.phase-section { margin: 24px 0; }
.timer-controls { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 20px; }
.timer-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; max-width: 360px; margin: 16px 0 24px; }
.timer-grid > div { display: grid; place-items: center; padding: 16px; background: white; border: 1px solid #8daed6; border-radius: 10px; }
.timer-grid strong { font-size: 28px; font-weight: 500; font-variant-numeric: tabular-nums; }
.timer-grid .active { background: #f6faff; border-color: #2156a0; box-shadow: inset 0 0 0 1px #2156a0; }
.timer-grid .finished { opacity: .5; }
button { padding: 14px 22px; min-height: 48px; border: 0; border-radius: 9px; background: #2156a0; color: white; font: inherit; font-size: 18px; cursor: pointer; }
button:disabled { opacity: .6; cursor: default; }
button.term-link { display: inline; min-height: 0; padding: 0; border: 0; border-bottom: 2px dotted currentColor; border-radius: 0; background: transparent; color: #154779; font: inherit; }
.pitch-explanation { padding: 12px 18px; background: #f6faff; border-left: 3px solid #3674b7; }
.phase-section > textarea { margin-bottom: 16px; }
.download-area { margin-top: 24px; }
[role=alert] { color: #9b2323; }
.idea-matrix { margin-top: 24px; }
.matrix-row { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, 1fr); gap: 18px; align-items: center; margin-bottom: 20px; }
.matrix-text .field-label { margin-top: 0; }
.matrix-scores fieldset { display: flex; align-items: center; gap: 12px; padding: 0; margin: 8px 0; border: 0; min-width: 0; }
.matrix-scores legend { float: left; width: 120px; font-size: 16px; padding: 0; }
.rating-options { display: flex; gap: 6px; }
.rating-option { position: relative; display: grid; place-items: center; width: 30px; height: 30px; cursor: pointer; }
.rating-option input { appearance: none; position: absolute; inset: 0; margin: 0; width: 100%; height: 100%; border-radius: 50%; border: 1px solid #8daacb; padding: 0; background: #e5effc; cursor: pointer; }
.rating-option input:checked { background: #2156a0; border-color: #2156a0; }
.rating-option span { position: relative; pointer-events: none; font-size: 14px; }
.rating-option:has(input:checked) span { color: white; }
.idea-ranking { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }
.idea-ranking > div { padding: 12px; border: 1px solid #bfd5ef; border-radius: 8px; }
.idea-ranking strong,.idea-ranking span { display: block; overflow-wrap: anywhere; }
.idea-ranking span { font-size: 15px; margin-top: 6px; }
.idea-ranking .winner { background: #e5effc; border-color: #2156a0; }
@media(max-width: 1100px) { .matrix-row { grid-template-columns: 1fr; } }
@media(max-width: 500px) { .idea-ranking { gap: 4px; }.idea-ranking > div { padding: 8px 4px; font-size: 14px; }.idea-ranking span { font-size: 12px; }.matrix-scores legend { width: 110px; }.rating-options { gap: 4px; }.rating-option { width: 27px; height: 30px; } }
</style>
