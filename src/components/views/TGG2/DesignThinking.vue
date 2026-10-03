<script setup>
import { ref, watch, onActivated, onDeactivated, onBeforeUnmount } from 'vue'
import projectTerms from './projectTerms'
import PostComposer from './PostComposer.vue'
import PublicPosts from './PublicPosts.vue'
import ProblemVotes from './ProblemVotes.vue'
import { watchDesignPosts, designError } from '../../../services/designThinkingFirebase'
const posts = ref([])
const resultError = ref('')
let stopResults, resultGeneration = 0
function stopPublished() { resultGeneration++; stopResults?.(); stopResults = null }
onActivated(async () => {
  const generation = ++resultGeneration
  resultError.value = ''
  try { if (generation !== resultGeneration) return; stopResults = watchDesignPosts(value => { posts.value = value }, e => { resultError.value = designError(e, 'Beiträge laden') }, false) }
  catch(e) { if (generation === resultGeneration) resultError.value = designError(e, 'Verbindung herstellen') }
})
onDeactivated(stopPublished); onBeforeUnmount(stopPublished)
const storageKey = '3tgg2-design-thinking-phase1'
const prompts = ['Wer hat das Problem?', 'Wann tritt es auf?', 'Warum ist es ein Problem?', 'Wie wird es momentan gelöst?', 'Was wäre stattdessen wünschenswert?']
const worksheet = ref({ team: '', problems: ['', '', '', '', ''], selected: '', investigation: ['', '', '', '', ''], question: '' })
const storageNotice = ref('Eure Eingaben werden automatisch in diesem Browser gespeichert.')
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || 'null')
  if (saved) {
    for (const key of ['team', 'selected', 'question']) if (typeof saved[key] === 'string') worksheet.value[key] = saved[key]
    for (const key of ['problems', 'investigation']) if (Array.isArray(saved[key])) worksheet.value[key] = Array.from({ length: 5 }, (_, i) => typeof saved[key][i] === 'string' ? saved[key][i] : '')
  }
} catch { storageNotice.value = 'Automatisches Speichern ist nicht verfügbar. Ladet eure Antworten vor dem Schließen als PDF herunter.' }
watch(worksheet, value => {
  try { localStorage.setItem(storageKey, JSON.stringify(value)) }
  catch { storageNotice.value = 'Automatisches Speichern ist nicht verfügbar. Ladet eure Antworten vor dem Schließen als PDF herunter.' }
}, { deep: true })
const exporting = ref(false)
const exportError = ref('')
async function downloadWorksheet() {
  if (exporting.value) return
  exporting.value = true
  exportError.value = ''
  const data = JSON.parse(JSON.stringify(worksheet.value))
  try {
    const { jsPDF } = await import('jspdf')
    const pdf = new jsPDF({ unit: 'mm', format: 'a4' })
    let y = 22
    function writingLines(count = 3) {
      // Keep each blank answer together, with room for handwriting.
      if (y + count * 10 > 274) { pdf.addPage(); y = 22 }
      pdf.setDrawColor(160)
      pdf.setLineWidth(0.2)
      for (let i = 0; i < count; i++) {
        y += 10
        pdf.line(20, y, 190, y)
      }
      y += 6
    }
    function write(text, heading = false) {
      if (!text.trim()) { writingLines(); return }
      if (heading && y + 50 > 274) { pdf.addPage(); y = 22 }
      pdf.setFont('helvetica', heading ? 'bold' : 'normal')
      pdf.setFontSize(heading ? 13 : 11)
      const lines = pdf.splitTextToSize(text.trim(), 170)
      for (const line of lines) {
        if (y > 274) { pdf.addPage(); y = 22 }
        pdf.text(line, 20, y)
        y += 6
      }
      y += 4
    }
    write('Entwicklung einer App', true)
    write('Design-Thinking-Methode · Phase 1: Analysieren')
    write('Gruppe: ' + data.team.trim())
    if (!data.team.trim()) writingLines(1)
    write('1. Probleme sammeln', true)
    data.problems.forEach((value, i) => { write(`Problem ${i + 1}`, true); write(value) })
    write('2. Problem auswählen', true)
    write(data.selected)
    write('3. Problem untersuchen', true)
    prompts.forEach((prompt, i) => { write(prompt, true); write(data.investigation[i]) })
    write('4. Problem formulieren', true)
    write(data.question)
    const pages = pdf.getNumberOfPages()
    for (let page = 1; page <= pages; page++) {
      pdf.setPage(page); pdf.setFont('helvetica', 'normal'); pdf.setFontSize(9)
      pdf.text(`3TGG2 · Phase 1 · Seite ${page} / ${pages}`, 20, 288)
    }
    pdf.save('1_Analysieren.pdf')
  } catch { exportError.value = 'Der PDF-Download hat nicht funktioniert. Eure Eingaben bleiben erhalten. Bitte versucht es erneut.' }
  finally { exporting.value = false }
}
const dialog = ref(null)
const activeTerm = ref(null)
const designThinking = {
  title: 'Design-Thinking-Methode',
  learning: true,
  text: 'Design Thinking ist eine Methode, um Lösungen für Probleme zu entwickeln. Im Mittelpunkt stehen die Menschen, die eine Lösung später nutzen sollen. Ihr untersucht zuerst ihre Bedürfnisse. Dann sammelt ihr Ideen, macht einen einfachen Entwurf und probiert ihn mit anderen aus. Ihr nutzt ihre Rückmeldungen, um den Entwurf zu verbessern. Dabei könnt ihr immer wieder zu einem früheren Schritt zurückgehen.',
  example: 'Nach Briefing und Rebriefing arbeiten wir für unsere App mit sechs Phasen: Analysieren, Ideen finden, Anforderungen festlegen, Entwerfen, Testen und optimieren sowie Präsentieren. Wir beginnen mit einem Problem aus dem Schulalltag und überlegen erst danach, wie eine App helfen könnte.'
}
const terms = projectTerms.filter(term => ['Briefing, Rebriefing', 'Problemanalyse'].includes(term.title))

function openTerm(term) { activeTerm.value = term; dialog.value.showModal() }
function closeTerm() { dialog.value?.close() }
onDeactivated(closeTerm)
onBeforeUnmount(closeTerm)
</script>

<template>
  <main class="design-page">
    <div class="page-shell">
      <router-link class="back-link" :to="{ name: '3tgg2' }">← Zur Übersicht 3TGG2</router-link>
      <header>
        <p class="eyebrow">3TGG2 · GMT</p>
        <h1>Wir entwickeln eine App</h1>
        <div class="legend">
          <p><strong class="blue-label">Blau · Unser Lernweg</strong>Die blauen Inhalte bilden die Metaebene: Sie helfen euch, die Begriffe durch ein eigenes Projekt zu verstehen. Diese Arbeitsaufgaben sind nicht Stoff der Klassenarbeit.</p>
          <p><strong class="yellow-label">Gelb · Wissensinput</strong>Hinter den gelben Buttons auf der rechten Seite findet ihr Hintergrundwissen.</p>
        </div>
      </header>
      <div class="content-grid">
        <div class="lesson">
          <details open class="blue-card" aria-labelledby="project-overview">
            <summary><h2 id="project-overview">Projektverlauf</h2></summary>
            <h3>Vor der inhaltlichen Bearbeitung des Projekts</h3>
            <ul>
              <li><strong>Briefing – der Auftakt des Projekts:</strong> Wir lernen den Auftrag, die Ziele und die Rahmenbedingungen kennen.</li>
              <li><strong>Rebriefing:</strong> Wir geben den Auftrag in eigenen Worten wieder und klären offene Fragen gemeinsam.</li>
            </ul>
            <h3>Inhaltliche Bearbeitung des Projekts</h3>
            <ol class="phase-overview">
              <li>Analysieren</li>
              <li>Ideen finden</li>
              <li>Anforderungen festlegen</li>
              <li>Entwerfen</li>
              <li>Testen und optimieren</li>
              <li>Präsentieren</li>
            </ol>
          </details>
          <details open class="blue-card" aria-labelledby="project-title">
            <summary><span class="block-heading"><span class="eyebrow">PROJEKTAUFTAKT · EINZELARBEIT · 20 MINUTEN</span><h2 id="project-title">Das Briefing – der Auftakt des Projekts</h2></span></summary>
            <div class="assignment">
              <h3>Arbeitsauftrag</h3>
              <p>Lies das Briefing „App für den Schulalltag“ aufmerksam durch, notiere offene Fragen und poste sie für die Allgemeinheit. Im Anschluss klären wir diese gemeinsam.</p>
            </div>
            <h3>Briefing – App für den Schulalltag</h3>
            <dl class="briefing">
              <dt>Auftraggeber</dt><dd>Ein Unternehmen aus dem Bildungsbereich möchte sein digitales Angebot erweitern.</dd>
              <dt>Ausgangssituation</dt><dd>Der Schulalltag bringt für Schülerinnen und Schüler unterschiedliche Herausforderungen mit sich. Digitale Anwendungen können dabei helfen, Abläufe zu vereinfachen und Probleme zu lösen.</dd>
              <dt>Aufgabe</dt><dd>Entwickelt eine App, die ein konkretes Problem aus dem Schulalltag löst.</dd>
              <dt>Ziel</dt><dd>Entwicklung eines App-Konzepts, das sich an einem echten Bedürfnis der Zielgruppe orientiert.</dd>
              <dt>Zielgruppe</dt><dd>Schülerinnen und Schüler</dd>
              <dt>Anforderungen</dt><dd>Die App soll einen erkennbaren Nutzen für die Zielgruppe haben. Welches Problem sie löst und welche Funktionen sie benötigt, wird im Entwicklungsprozess erarbeitet.</dd>
              <dt>Rahmenbedingungen</dt><dd><ul><li>Entwicklung als App für das iPad</li><li>Optimierung für die Bedienung per Touchscreen</li><li>Gestaltung für das iPad-Display</li><li>Einfache und verständliche Benutzerführung</li><li>Konzentration auf die wesentlichen Funktionen</li><li>Entwicklung und Gestaltung des Prototyps in Figma</li></ul></dd>
              <dt>Ergebnis</dt><dd>Ein klickbarer Figma-Prototyp, mit dem die wichtigsten Funktionen der App ausprobiert werden können.</dd>
              <dt>Zeitrahmen</dt><dd>12 Unterrichtsstunden</dd>
              <dt>Erfolgskriterien</dt><dd>Die App löst ein nachvollziehbares Problem, berücksichtigt die Bedürfnisse der Zielgruppe und lässt sich einfach und intuitiv bedienen.</dd>
            </dl>
            <PostComposer kind="briefing" label="Fasse kurz in eigenen Worten zusammen, was der Auftraggeber von dir will, und stelle bei Bedarf Rückfragen." />
            <h3>Rebriefing – den Auftrag gemeinsam klären</h3>
            <PublicPosts :posts="posts.filter(post => post.kind === 'briefing')" />
            <p v-if="resultError" role="alert">{{ resultError }}</p>
          </details>
          <details open class="blue-card" aria-labelledby="phase-one">
            <summary><span class="block-heading"><span class="eyebrow">PHASE 1 · GRUPPENARBEIT · 50 MINUTEN</span><h2 id="phase-one">Analysieren</h2></span></summary>
            <div class="assignment">
            <h3>Arbeitsauftrag</h3>
            <p>Geht in Gruppen von <strong>drei Personen</strong> zusammen und bearbeitet die Schritte 1–4 und ladet eure Antworten als PDF herunter. Die Problemfrage bei Punkt 4 sollt ihr für die Allgemeinheit posten.</p>
            <p class="important"><strong>Wichtig:</strong> Entwickelt zunächst noch keine App. Versteht zuerst das Problem.</p>
            </div>
            <label class="field-label" for="team">Namen eurer Gruppenmitglieder</label>
            <input id="team" v-model="worksheet.team" type="text" placeholder="Eure drei Namen">
            <p class="save-note" role="status">{{ storageNotice }} Auf gemeinsam genutzten Geräten können andere eure Eingaben sehen.</p>
            <h3>Geht wie folgt vor:</h3>
            <ol class="tasks">
              <li><div class="step-title"><h3>Zielgruppe verstehen &amp; Probleme sammeln</h3><span>Arbeitszeit: 15 Minuten</span></div><p>Sammelt mindestens fünf Dinge, die euch im Schulalltag nerven.</p><p>In diesem Fall fällt es euch einfach, euch in die Zielgruppe hineinzuversetzen und diese zu verstehen, da ihr selbst die Zielgruppe seid.</p><div v-for="(_, i) in worksheet.problems" :key="i"><label class="field-label" :for="`problem-${i}`">Problem {{ i + 1 }}</label><textarea :id="`problem-${i}`" v-model="worksheet.problems[i]" rows="2"></textarea></div></li>
              <li>
                <div class="step-title"><h3>Problem auswählen</h3><span>10 min</span></div>
                <p>Diskutiert: Welches Problem kennt ihr alle? Könnte man an der Situation etwas verbessern? Wählt ein Problem aus.</p>
                <label class="field-label" for="selected-problem">Unser ausgewähltes Problem und warum wir es wählen</label>
                <textarea id="selected-problem" v-model="worksheet.selected" rows="4"></textarea>
              </li>
              <li>
                <div class="step-title"><h3>Problem untersuchen</h3><span>15 min</span></div>
                <p>Beantwortet folgende Fragen:</p>
                <div v-for="(prompt, i) in prompts" :key="prompt">
                  <label class="field-label" :for="`investigation-${i}`">{{ prompt }}</label>
                  <textarea :id="`investigation-${i}`" v-model="worksheet.investigation[i]" rows="3"></textarea>
                </div>
              </li>
              <li>
                <div class="step-title"><h3>Problem formulieren</h3><span>10 min</span></div>
                <p>Formuliert euer Problem als Frage. Beginnt mit „Wie könnten wir …?“</p>
                <blockquote>Wie könnten wir Schülerinnen und Schülern helfen, Freistunden sinnvoll zu nutzen?</blockquote>
                <p class="example-note">Das ist ein Beispiel. Formuliert eine Frage zu eurem eigenen Problem.</p>
                <PostComposer v-model="worksheet.question" kind="problem" label="Unsere Problemfrage" button-label="Problemfrage posten" />
              </li>
            </ol>
            <button type="button" class="download-button" :disabled="exporting" @click="downloadWorksheet">{{ exporting ? 'PDF wird erstellt …' : 'Antworten als PDF herunterladen' }}</button>
            <p v-if="exportError" role="alert">{{ exportError }}</p>
            <h3>Problemfragen der Klasse</h3>
            <ProblemVotes :posts="posts.filter(post => post.kind === 'problem')" />
            <p v-if="resultError" role="alert">{{ resultError }}</p>
          </details>
          <router-link :to="{ name: '3tgg2-design-thinking-admin' }">Admin-Ansicht für die Lehrkraft</router-link>
        </div>
        <aside aria-labelledby="knowledge-title">
          <div class="knowledge-panel"><h2 id="knowledge-title">Wissensinput</h2><p>Tippt auf einen Begriff, um die Erklärung zu öffnen.</p>
            <div class="knowledge-buttons">
            <button v-for="term in terms" :key="term.title" type="button" class="term-button" aria-haspopup="dialog" @click="openTerm(term)"><span>{{ term.title }}<small v-if="term.subtitle">{{ term.subtitle }}</small></span><span aria-hidden="true">↗</span></button>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <dialog ref="dialog" class="term-dialog" :class="{ 'learning-dialog': activeTerm?.learning }" aria-labelledby="term-title" @click="event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeTerm() } }">
      <template v-if="activeTerm"><button class="close-button" type="button" autofocus @click="closeTerm">Schließen ×</button><p class="eyebrow">{{ activeTerm.learning ? 'UNSER LERNWEG · EINFACH ERKLÄRT' : 'WISSENSINPUT' }}</p><h2 id="term-title">{{ activeTerm.title }}</h2><p v-if="activeTerm.subtitle">{{ activeTerm.subtitle }}</p><p class="term-definition">{{ activeTerm.text }}</p><p v-if="activeTerm.learning">Wenn ihr noch mehr Details wissen wollt, schaut euch gerne <a href="https://www.youtube.com/watch?v=Q2oODeqnLLY" target="_blank" rel="noopener noreferrer">dieses Video an ↗</a>.</p><div v-if="activeTerm.example" class="term-example"><strong>In unserem Projekt</strong><p>{{ activeTerm.example }}</p></div><p v-if="activeTerm.note" class="source">{{ activeTerm.note }}</p><a v-if="activeTerm.source" class="source" :href="activeTerm.source" target="_blank" rel="noopener noreferrer">{{ activeTerm.sourceLabel }} ↗</a></template>
    </dialog>
  </main>
</template>

<style scoped>
.blue-card > summary { display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 44px; cursor: pointer; list-style: none; }
.blue-card > summary::-webkit-details-marker { display: none; }
.blue-card > summary::after { content: '+'; flex-shrink: 0; font-size: 28px; color: #2156a0; }
.blue-card[open] > summary::after { content: '−'; }
.blue-card[open] > summary { margin-bottom: 16px; }
.blue-card > summary h2 { margin: 0; }
.block-heading { min-width: 0; }
.block-heading .eyebrow { display: block; margin-bottom: 8px; }
.blue-card > summary:focus-visible { outline: 3px solid #2156a0; outline-offset: 5px; border-radius: 4px; }

.briefing dt { font-weight: 600; margin-top: 12px; }.briefing dd { margin: 6px 0 0; line-height: 1.65; font-size: 18px; }.published-text { white-space: pre-wrap; overflow-wrap: anywhere; }
.term-definition { white-space: pre-line; }
.knowledge-buttons { display: grid; gap: 10px; }
.knowledge-buttons .term-button { margin: 0; width: 100%; }

.field-label { display: block; margin: 12px 0 6px; font-size: 17px; font-weight: 500; }
textarea, input { display: block; width: 100%; min-width: 0; padding: 12px 14px; border: 1px solid #8daacb; border-radius: 8px; background: white; color: #172b44; font: inherit; font-size: 18px; line-height: 1.5; }
textarea { resize: vertical; }
textarea:focus-visible, input:focus-visible { outline: 3px solid #2156a0; outline-offset: 2px; }
.save-note { font-size: 14px; }
.download-button { padding: 14px 22px; min-height: 48px; border: 0; border-radius: 9px; background: #2156a0; color: white; font: inherit; font-size: 18px; cursor: pointer; }
.download-button:disabled { opacity: .6; cursor: wait; }

.inline-term { display: inline; padding: 0; border: 0; border-bottom: 2px dotted currentColor; background: transparent; color: #154779; font: inherit; cursor: pointer; }
.inline-term:hover { border-bottom-style: solid; }
.term-dialog.learning-dialog { border-color: #bfd5ef; border-top-color: #3674b7; background: #f6faff; color: #172b44; }
.learning-dialog .term-example { background: #e5effc; }
.learning-dialog .close-button { border-color: #bfd5ef; }

.design-page { min-height: 100vh; background: #f7f8fa; color: #172b44; font-family: 'Jost', sans-serif; user-select: text; }
.design-page * { box-sizing: border-box; }
.page-shell { max-width: 1280px; margin: auto; padding: 24px 28px 40px; }
a { color: inherit; text-underline-offset: 4px; }
header { padding: 24px 0; }
.eyebrow { font-size: 12px; letter-spacing: .12em; font-weight: 600; margin: 0 0 12px; }
h1 { max-width: 980px; font-size: clamp(34px, 5vw, 62px); line-height: 1.12; font-weight: 500; margin: 0 0 20px; }
h2 { font-size: clamp(25px, 3vw, 34px); line-height: 1.2; font-weight: 500; margin: 0 0 20px; }
h3 { font-size: 22px; font-weight: 500; margin: 24px 0 12px; }
p, li { font-size: 18px; line-height: 1.65; }
.legend { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }.legend p { margin: 0; font-size: 16px; }.legend strong { display: block; width: fit-content; padding: 4px 12px; border-radius: 6px; margin-bottom: 10px; }.yellow-label { background: #ffe27a; color: #493700; }.blue-label { background: #dcecff; color: #154779; }
.content-grid { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 20px; align-items: start; }.lesson { min-width: 0; }.blue-card { background: #e5effc; border: 1px solid #bfd5ef; border-top: 5px solid #3674b7; border-radius: 16px; padding: 24px; margin-bottom: 18px; }
.assignment { margin: 16px 0; padding: 16px 18px; background: white; border: 1px solid #8daed6; border-left: 4px solid #2156a0; border-radius: 10px; }.assignment h3 { margin: 0 0 8px; }.assignment p { margin: 8px 0 0; }.important { color: #154779; }
.phase-overview { padding-left: 32px; margin: 16px 0; }.phase-overview li { font-size: 18px; font-weight: 600; line-height: 1.65; margin-bottom: 12px; padding-left: 4px; }.phase-overview li:last-child { margin-bottom: 0; }
.tasks { list-style: none; counter-reset: task; padding: 0; margin: 16px 0; display: grid; gap: 16px; }.tasks > li { counter-increment: task; padding: 18px; border: 1px solid #8daed6; border-left: 4px solid #2156a0; border-radius: 10px; background: white; }.tasks .step-title h3::before { content: counter(task) ". "; color: #2156a0; }.step-title { display: flex; gap: 12px; justify-content: space-between; align-items: baseline; }.step-title h3 { margin: 0; }.step-title span { white-space: nowrap; font-size: 15px; }.tasks p { margin: 12px 0; }.tasks ul { padding-left: 22px; }blockquote { margin: 16px 0; padding: 12px 18px; border-left: 3px solid #3674b7; background: #f6faff; }.example-note { font-size: 15px; }
.knowledge-panel { position: sticky; top: 24px; padding: 24px; background: #fff6d2; border: 1px solid #e7d48a; border-radius: 16px; }aside { position: sticky; top: 24px; }.knowledge-panel h2 { font-size: 25px; }.knowledge-panel p { font-size: 15px; }.term-button { display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; padding: 16px; margin-top: 12px; border: 1px solid #d8b23d; border-radius: 9px; background: #ffdf6b; color: #3f3109; font: inherit; font-size: 18px; text-align: left; cursor: pointer; }.term-button:hover { background: #ffd34a; }.term-button small { display: block; font-size: 13px; margin-top: 3px; }
.future-phase { padding: 24px 32px; border: 1px solid #bfd5ef; border-radius: 16px; background: #edf3fc; margin-bottom: 16px; }.future-phase h2 { margin-bottom: 8px; }.future-phase p:last-child { font-size: 15px; margin: 0; }
.term-dialog { position: fixed; inset: 0; margin: auto; width: min(640px, calc(100% - 32px)); max-height: calc(100dvh - 40px); overflow-y: auto; border: 1px solid #d8b23d; border-top: 7px solid #ffdf6b; border-radius: 16px; padding: 28px; background: #fffcf0; color: #302a18; }.term-dialog::backdrop { background: #102238bb; }.close-button { display: block; margin: 0 0 24px auto; padding: 10px 14px; min-height: 44px; border: 1px solid #b9a25b; border-radius: 8px; background: white; font: inherit; cursor: pointer; }.term-example { background: #f5edce; border-radius: 10px; padding: 20px; }.term-example p { margin-bottom: 0; }.source { font-size: 13px; }a:focus-visible, button:focus-visible { outline: 3px solid #2156a0; outline-offset: 4px; }
@media (max-width: 850px) { .content-grid { grid-template-columns: 1fr; }aside { position: static; grid-row: 1; }.knowledge-panel { position: static; }.term-button { display: inline-flex; width: auto; margin-right: 8px; }.legend { grid-template-columns: 1fr; } }
@media (max-width: 500px) { .page-shell { padding: 24px 16px 40px; }header { padding-top: 20px; }.blue-card, .future-phase { padding: 16px; }.tasks > li, .assignment { padding: 14px; }.step-title { flex-wrap: wrap; gap: 4px; }.term-dialog { padding: 22px; } }
</style>
