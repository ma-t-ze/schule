<script setup>
import { ref, watch, onDeactivated, onBeforeUnmount } from 'vue'
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
    function write(text, heading = false) {
      pdf.setFont('helvetica', heading ? 'bold' : 'normal')
      pdf.setFontSize(heading ? 13 : 11)
      const lines = pdf.splitTextToSize(text.trim() || '(Noch nicht ausgefüllt)', 170)
      for (const line of lines) {
        if (y > 274) { pdf.addPage(); y = 22 }
        pdf.text(line, 20, y)
        y += 6
      }
      y += 4
    }
    write('Entwicklung einer App', true)
    write('Design-Thinking-Methode · Phase 1: Verstehen')
    write('Gruppe: ' + (data.team.trim() || '(nicht angegeben)'))
    write('1. Probleme sammeln', true)
    data.problems.forEach((value, i) => write(`${i + 1}. ${value.trim() || '(Noch nicht ausgefüllt)'}`))
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
    pdf.save('3TGG2-Design-Thinking-Phase-1.pdf')
  } catch { exportError.value = 'Der PDF-Download hat nicht funktioniert. Eure Eingaben bleiben erhalten. Bitte versucht es erneut.' }
  finally { exporting.value = false }
}
const dialog = ref(null)
const activeTerm = ref(null)
const designThinking = {
  title: 'Design-Thinking-Methode',
  learning: true,
  text: 'Design Thinking ist eine Methode, um Lösungen für Probleme zu entwickeln. Im Mittelpunkt stehen die Menschen, die eine Lösung später nutzen sollen. Ihr untersucht zuerst ihre Bedürfnisse. Dann sammelt ihr Ideen, macht einen einfachen Entwurf und probiert ihn mit anderen aus. Ihr nutzt ihre Rückmeldungen, um den Entwurf zu verbessern. Dabei könnt ihr immer wieder zu einem früheren Schritt zurückgehen.',
  example: 'Für unsere App arbeiten wir mit vier vereinfachten Phasen: Verstehen, Ideen finden, Entwerfen und Testen. Wir beginnen mit einem Problem aus dem Schulalltag und überlegen erst danach, wie eine App helfen könnte.'
}
const terms = [
  { title: 'Was ist ein Projekt?', subtitle: 'DIN 69901', text: 'Ein Projekt ist ein Vorhaben, dessen Bedingungen in ihrer Gesamtheit einmalig sind. Es hat ein bestimmtes Ziel und begrenzte Mittel, zum Beispiel Zeit, Geld und Personen. Es ist von anderen Vorhaben abgegrenzt und hat eine eigene Organisation.', example: 'Für unser App-Projekt arbeiten wir als Team an einem festgelegten Ziel: einen Entwurf für eine App entwickeln, die den Schulalltag erleichtert.', source: 'https://www.projektmanagement.sachsen.de/was-ist-ein-projekt-4334.html', sourceLabel: 'Projektmanagement Sachsen: Projektbegriff nach DIN 69901', note: 'Vereinfacht erklärt, kein wörtliches Normzitat.' },
  { title: 'Projektauftrag', text: 'Der Projektauftrag hält fest, welches Projekt durchgeführt werden soll. Er klärt das Ziel, das erwartete Ergebnis, die Zuständigkeiten und den Rahmen, zum Beispiel Zeit und Budget.', example: 'Unser Auftrag: Ein Unternehmen aus dem Bildungsbereich möchte eine App für Schülerinnen und Schüler entwickeln lassen, die ihren Schulalltag erleichtert.' },
  { title: 'Briefing', text: 'Ein Briefing gibt dem Team die wichtigen Informationen für eine Aufgabe. Dazu gehören die Ausgangssituation, das Problem, die Zielgruppe, das Ziel und Vorgaben zu Zeit und Kosten. Offene Fragen werden gemeinsam geklärt.', example: 'Für unsere App müssen wir klären: Für wen ist sie gedacht? Welches Problem soll sie lösen? Welche Vorgaben gibt es?', source: 'https://wirtschaftslexikon.gabler.de/definition/briefing-28149', sourceLabel: 'Gabler Wirtschaftslexikon: Briefing' },
  { title: 'Analyse', text: 'Bei einer Analyse untersucht ihr eine Situation genau. Ihr sammelt Informationen und schaut, welche Probleme, Bedürfnisse und Ursachen es gibt.', example: 'Ihr untersucht, wer ein Problem im Schulalltag hat, wann es auftritt und wie es bisher gelöst wird.' },
  { title: 'Lösungsstrategie', text: 'Eine Lösungsstrategie beschreibt, wie ihr ein Problem lösen wollt. Ihr legt ein begründetes Vorgehen fest, das zu eurem Ziel passt.', example: 'Wir verstehen zuerst das Problem. Danach sammeln wir Ideen, entwerfen eine Lösung und testen sie. Wenn nötig, überarbeiten wir sie.' }
]
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
        <h1>Entwicklung einer App mit der Design-Thinking-Methode</h1>
        <div class="legend">
          <p><strong class="blue-label">Blau · Unser Lernweg</strong>Die blauen Inhalte bilden die Metaebene: Sie helfen euch, die Begriffe durch ein eigenes Projekt zu verstehen. Diese Arbeitsaufgaben sind nicht Stoff der Klassenarbeit.</p>
          <p><strong class="yellow-label">Gelb · Prüfungswissen</strong>Die gelben Buttons auf der rechten Seite öffnen Inhalte, die ihr für die Klassenarbeit bzw. das Abitur wissen müsst. Es sind Pflichtbegriffe aus dem Lehrplan GMT.</p>
        </div>
      </header>
      <div class="content-grid">
        <div class="lesson">
          <section class="blue-card" aria-labelledby="project-title">
            <p class="eyebrow">UNSER PROJEKT</p>
            <h2 id="project-title">Wir machen ein Projekt: eine App</h2>
            <h3>Wie läuft ein Projekt ab?</h3>
            <p>Am Anfang steht ein Auftrag. Wir klären die Aufgabe, verstehen das Problem und entwickeln eine passende Lösung.</p>
            <div class="assignment"><h3>Unser Projektauftrag</h3><p>Ein Unternehmen aus dem Bildungsbereich will sein Portfolio erweitern. Es möchte eine App für Schülerinnen und Schüler entwickeln, die ihren Schulalltag erleichtert.</p></div>
            <p>Wir entwickeln die App mit einer vereinfachten <button type="button" class="inline-term" aria-haspopup="dialog" @click="openTerm(designThinking)">Design-Thinking-Methode</button>. Dabei stehen die Menschen und ihre Bedürfnisse im Mittelpunkt. Wir beginnen mit der Analyse und entwickeln danach eine Lösungsstrategie.</p>
            <ol class="phase-overview" aria-label="Unsere vier Phasen"><li>Verstehen</li><li>Ideen finden</li><li>Entwerfen</li><li>Testen</li></ol>
          </section>
          <section class="blue-card" aria-labelledby="phase-one">
            <p class="eyebrow">PHASE 1 · GRUPPENARBEIT · 45 MINUTEN</p>
            <h2 id="phase-one">Verstehen</h2>
            <p>Geht in Gruppen von <strong>drei Personen</strong> zusammen und überlegt: Wo gibt es in eurem Schulalltag Probleme, nervige Situationen oder Dinge, die unnötig kompliziert sind?</p>
            <p class="important"><strong>Wichtig:</strong> Entwickelt zunächst noch keine App. Versteht zuerst das Problem.</p>
            <label class="field-label" for="team">Namen eurer Gruppenmitglieder</label>
            <input id="team" v-model="worksheet.team" type="text" placeholder="Eure drei Namen">
            <p class="save-note" role="status">{{ storageNotice }} Auf gemeinsam genutzten Geräten können andere eure Eingaben sehen.</p>
            <h3>Geht wie folgt vor:</h3>
            <ol class="tasks">
              <li><div class="step-title"><h3>Probleme sammeln</h3><span>10 min</span></div><p>Sammelt mindestens fünf Dinge, die euch im Schulalltag nerven.</p><div v-for="(_, i) in worksheet.problems" :key="i"><label class="field-label" :for="`problem-${i}`">Problem {{ i + 1 }}</label><textarea :id="`problem-${i}`" v-model="worksheet.problems[i]" rows="2"></textarea></div></li>
              <li><div class="step-title"><h3>Problem auswählen</h3><span>10 min</span></div><p>Diskutiert: Welches Problem kennt ihr alle? Könnte man an der Situation etwas verbessern? Wählt ein Problem aus.</p><label class="field-label" for="selected-problem">Unser ausgewähltes Problem und warum wir es wählen</label><textarea id="selected-problem" v-model="worksheet.selected" rows="4"></textarea></li>
              <li><div class="step-title"><h3>Problem untersuchen</h3><span>15 min</span></div><p>Beantwortet folgende Fragen:</p><div v-for="(prompt, i) in prompts" :key="prompt"><label class="field-label" :for="`investigation-${i}`">{{ prompt }}</label><textarea :id="`investigation-${i}`" v-model="worksheet.investigation[i]" rows="3"></textarea></div></li>
              <li><div class="step-title"><h3>Problem formulieren</h3><span>10 min</span></div><p>Formuliert euer Problem als Frage. Beginnt mit „Wie könnten wir …?“</p><blockquote>Wie könnten wir Schülerinnen und Schülern helfen, Freistunden sinnvoll zu nutzen?</blockquote><p class="example-note">Das ist ein Beispiel. Formuliert eine Frage zu eurem eigenen Problem.</p><label class="field-label" for="problem-question">Unsere Problemfrage</label><textarea id="problem-question" v-model="worksheet.question" rows="3" placeholder="Wie könnten wir …?"></textarea></li>
            </ol>
            <button type="button" class="download-button" :disabled="exporting" @click="downloadWorksheet">{{ exporting ? 'PDF wird erstellt …' : 'Antworten als PDF herunterladen' }}</button>
            <p v-if="exportError" role="alert">{{ exportError }}</p>
          </section>
          <section v-for="(phase, index) in ['Ideen finden', 'Entwerfen', 'Testen']" :key="phase" class="future-phase" :aria-label="`Phase ${index + 2}: ${phase}`"><p class="eyebrow">PHASE {{ index + 2 }}</p><h2>{{ phase }}</h2><p>In den nächsten Stunden</p></section>
        </div>
        <aside aria-labelledby="knowledge-title">
          <div class="knowledge-panel"><p class="eyebrow">GMT · PRÜFUNGSWISSEN</p><h2 id="knowledge-title">Die Pflichtbegriffe</h2><p>Tippt auf einen Begriff, um die Erklärung zu öffnen.</p>
            <button v-for="term in terms" :key="term.title" type="button" class="term-button" aria-haspopup="dialog" @click="openTerm(term)"><span>{{ term.title }}<small v-if="term.subtitle">{{ term.subtitle }}</small></span><span aria-hidden="true">↗</span></button>
          </div>
        </aside>
      </div>
    </div>
    <dialog ref="dialog" class="term-dialog" :class="{ 'learning-dialog': activeTerm?.learning }" aria-labelledby="term-title" @click="event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeTerm() } }">
      <template v-if="activeTerm"><button class="close-button" type="button" autofocus @click="closeTerm">Schließen ×</button><p class="eyebrow">{{ activeTerm.learning ? 'UNSER LERNWEG · EINFACH ERKLÄRT' : 'GMT · PRÜFUNGSWISSEN' }}</p><h2 id="term-title">{{ activeTerm.title }}</h2><p v-if="activeTerm.subtitle">{{ activeTerm.subtitle }}</p><p>{{ activeTerm.text }}</p><p v-if="activeTerm.learning">Wenn ihr noch mehr Details wissen wollt, schaut euch gerne <a href="https://www.youtube.com/watch?v=Q2oODeqnLLY" target="_blank" rel="noopener noreferrer">dieses Video an ↗</a>.</p><div class="term-example"><strong>In unserem Projekt</strong><p>{{ activeTerm.example }}</p></div><p v-if="activeTerm.note" class="source">{{ activeTerm.note }}</p><a v-if="activeTerm.source" class="source" :href="activeTerm.source" target="_blank" rel="noopener noreferrer">{{ activeTerm.sourceLabel }} ↗</a></template>
    </dialog>
  </main>
</template>

<style scoped>
.field-label { display: block; margin: 18px 0 8px; font-size: 17px; font-weight: 500; }
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
.page-shell { max-width: 1280px; margin: auto; padding: 32px 28px 72px; }
a { color: inherit; text-underline-offset: 4px; }
header { padding: 48px 0 36px; }
.eyebrow { font-size: 12px; letter-spacing: .12em; font-weight: 600; margin: 0 0 12px; }
h1 { max-width: 980px; font-size: clamp(34px, 5vw, 62px); line-height: 1.12; font-weight: 500; margin: 0 0 32px; }
h2 { font-size: clamp(25px, 3vw, 34px); line-height: 1.2; font-weight: 500; margin: 0 0 20px; }
h3 { font-size: 22px; font-weight: 500; margin: 24px 0 12px; }
p, li { font-size: 18px; line-height: 1.65; }
.legend { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }.legend p { margin: 0; font-size: 16px; }.legend strong { display: block; width: fit-content; padding: 4px 12px; border-radius: 6px; margin-bottom: 10px; }.yellow-label { background: #ffe27a; color: #493700; }.blue-label { background: #dcecff; color: #154779; }
.content-grid { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 28px; align-items: start; }.lesson { min-width: 0; }.blue-card { background: #e5effc; border: 1px solid #bfd5ef; border-top: 5px solid #3674b7; border-radius: 16px; padding: 32px; margin-bottom: 28px; }
.assignment, .important { background: #f6faff; border-radius: 10px; padding: 20px; }.assignment h3 { margin-top: 0; }.assignment p { margin-bottom: 0; }
.phase-overview { display: flex; flex-wrap: wrap; gap: 12px 32px; padding-left: 24px; margin-top: 28px; }.phase-overview li { font-size: 16px; padding-right: 10px; }
.tasks { padding-left: 28px; }.tasks > li { padding: 20px 0; border-top: 1px solid #b7cce6; }.tasks > li::marker { font-weight: 600; }.step-title { display: flex; gap: 12px; justify-content: space-between; align-items: baseline; }.step-title h3 { margin: 0; }.step-title span { white-space: nowrap; font-size: 15px; }.tasks p { margin: 12px 0; }.tasks ul { padding-left: 22px; }blockquote { margin: 16px 0; padding: 12px 18px; border-left: 3px solid #3674b7; background: #f6faff; }.example-note { font-size: 15px; }
.knowledge-panel { position: sticky; top: 24px; padding: 24px; background: #fff6d2; border: 1px solid #e7d48a; border-radius: 16px; }aside { position: sticky; top: 24px; }.knowledge-panel h2 { font-size: 25px; }.knowledge-panel p { font-size: 15px; }.term-button { display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; padding: 16px; margin-top: 12px; border: 1px solid #d8b23d; border-radius: 9px; background: #ffdf6b; color: #3f3109; font: inherit; font-size: 18px; text-align: left; cursor: pointer; }.term-button:hover { background: #ffd34a; }.term-button small { display: block; font-size: 13px; margin-top: 3px; }
.future-phase { padding: 24px 32px; border: 1px solid #bfd5ef; border-radius: 16px; background: #edf3fc; margin-bottom: 16px; }.future-phase h2 { margin-bottom: 8px; }.future-phase p:last-child { font-size: 15px; margin: 0; }
.term-dialog { position: fixed; inset: 0; margin: auto; width: min(640px, calc(100% - 32px)); max-height: calc(100dvh - 40px); overflow-y: auto; border: 1px solid #d8b23d; border-top: 7px solid #ffdf6b; border-radius: 16px; padding: 28px; background: #fffcf0; color: #302a18; }.term-dialog::backdrop { background: #102238bb; }.close-button { display: block; margin: 0 0 24px auto; padding: 10px 14px; min-height: 44px; border: 1px solid #b9a25b; border-radius: 8px; background: white; font: inherit; cursor: pointer; }.term-example { background: #f5edce; border-radius: 10px; padding: 20px; }.term-example p { margin-bottom: 0; }.source { font-size: 13px; }a:focus-visible, button:focus-visible { outline: 3px solid #2156a0; outline-offset: 4px; }
@media (max-width: 850px) { .content-grid { grid-template-columns: 1fr; }aside { position: static; grid-row: 1; }.knowledge-panel { position: static; }.term-button { display: inline-flex; width: auto; margin-right: 8px; }.legend { grid-template-columns: 1fr; } }
@media (max-width: 500px) { .page-shell { padding: 24px 16px 40px; }header { padding-top: 32px; }.blue-card, .future-phase { padding: 22px; }.step-title { flex-wrap: wrap; gap: 4px; }.term-dialog { padding: 22px; } }
</style>
