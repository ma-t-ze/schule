<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
const solutions = ref(false)
const busy = ref(false)
const error = ref('')
const container = ref(null)
const scale = ref(1)
let observer
onMounted(() => {
  observer = new ResizeObserver(() => { scale.value = Math.min(1, container.value.clientWidth / 793.7) })
  observer.observe(container.value)
})
onBeforeUnmount(() => observer?.disconnect())
async function downloadPdf() {
  if (busy.value) return
  busy.value = true; error.value = ''
  try {
    await document.fonts.ready
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    pdf.setProperties({ title: `${solutions.value ? 'Lösungsschlüssel' : 'Klassenarbeit 01'} · 3BKGD1_1_GRD` })
    const papers = container.value.querySelectorAll('.a4-paper')
    for (let i = 0; i < papers.length; i++) {
      const canvas = await html2canvas(papers[i], { scale: 2, backgroundColor: '#ffffff', onclone(doc) {
        doc.querySelectorAll('.a4-paper').forEach(p => { p.style.transform = 'none'; p.style.boxShadow = 'none' })
      } })
      if (i) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    }
    pdf.save(`3BKGD1_1_GRD_Klassenarbeit_01${solutions.value ? '_Loesungen' : ''}.pdf`)
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>

<template>
  <main class="design-template-page">
    <div class="screen-only">
      <RouterLink to="/">← Zur Startseite</RouterLink>
      <h1>3BKGD1_1_GRD · Klassenarbeit 01</h1>
      <p>Farbensehen beim Menschen und Rhythmus in der Gestaltung · 30 Punkte</p>
      <div class="actions">
        <Button :label="solutions ? 'Aufgaben anzeigen' : 'Lösungsschlüssel anzeigen'" outlined :disabled="busy" @click="solutions = !solutions" />
        <Button :label="solutions ? 'Lösungsschlüssel als PDF' : 'Aufgaben als PDF'" :loading="busy" @click="downloadPdf" />
      </div>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <p class="preview-label">{{ solutions ? 'Lösungsschlüssel · 2 Seiten' : 'Aufgaben · 2 Seiten' }} · DIN A4</p>
    </div>
    <div ref="container" class="papers">
      <div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article class="a4-paper" :style="{ transform: `scale(${scale})` }">
          <header class="worksheet-header">
            <img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" />
            <h2>BERUFSKOLLEG GRAFIKDESIGN</h2>
            <p>Grafikdesign Schuljahr 1 | chs | Heckel</p>
          </header>
          <div class="worksheet-body">
            <h2>Klassenarbeit 01 · Farbensehen und Rhythmus</h2>
            <div class="assessment"><span>Name: ___________________________</span><span>Punkte: ____ / 30</span><span>Note: ____</span></div>
            <h2 class="topic-heading">Farbensehen</h2>
            <h3>1. Ordne die Begriffe zu. <span>5 Punkte</span></h3>
            <p>Trage zu jeder Beschreibung den passenden Buchstaben ein. Jeder Buchstabe wird genau einmal verwendet. Je richtige Zuordnung: 1 Punkt.</p>
            <p class="word-bank">A Stäbchen · B Zäpfchen · C Sehnerv · D Absorption · E Reflexion</p>
            <table class="match-table"><thead><tr><th>Beschreibung</th><th>Buchstabe</th></tr></thead><tbody>
              <tr><td>Licht wird von einem Gegenstand zurückgeworfen.</td><td class="solution-answer">{{ solutions ? 'E' : '' }}</td></tr>
              <tr><td>Diese Sinneszellen ermöglichen das Hell-Dunkel-Sehen.</td><td class="solution-answer">{{ solutions ? 'A' : '' }}</td></tr>
              <tr><td>Er leitet elektrische Signale vom Auge zum Gehirn.</td><td class="solution-answer">{{ solutions ? 'C' : '' }}</td></tr>
              <tr><td>Licht wird von einem Gegenstand aufgenommen.</td><td class="solution-answer">{{ solutions ? 'D' : '' }}</td></tr>
              <tr><td>Diese Sinneszellen sind für das Farbensehen zuständig.</td><td class="solution-answer">{{ solutions ? 'B' : '' }}</td></tr>
            </tbody></table>
            <h3>2. Ergänze den Lückentext. <span>5 Punkte</span></h3>
            <p>Verwende jedes Wort genau einmal. Je richtige Lücke: 1 Punkt.</p>
            <p class="word-bank">Gehirn · Wellenlängen · Netzhaut · elektromagnetischen · elektrische</p>
            <p class="cloze">Licht besteht aus <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'elektromagnetischen' : '' }}</span> Wellen. Diese haben unterschiedliche <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'Wellenlängen' : '' }}</span>. Im Auge liegen die Sinneszellen auf der <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'Netzhaut' : '' }}</span>. Sie wandeln Licht in <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'elektrische' : '' }}</span> Signale um. Der Farbeindruck entsteht durch die Verarbeitung im <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'Gehirn' : '' }}</span>.</p>
            <h2 class="topic-heading">Rhythmen in der Gestaltung</h2>
            <h3>3. Kreuze jeweils eine Antwort an. <span>4 Punkte</span></h3>
            <p>Je richtig gelöster Teilaufgabe: 1 Punkt. Mehrere Kreuze in einer Teilaufgabe ergeben dort 0 Punkte.</p>
            <div class="mc"><strong>a) Ein regelmäßiger Rhythmus wirkt …</strong><p>□ ungeordnet. &nbsp; <span :class="{ 'solution-answer': solutions }">{{ solutions ? '☒' : '□' }} ruhig und stabil.</span> &nbsp; □ zufällig.</p></div>
            <div class="mc"><strong>b) Ein gleichmäßiger Rhythmus erzeugt …</strong><p><span :class="{ 'solution-answer': solutions }">{{ solutions ? '☒' : '□' }} eine Erwartung.</span> &nbsp; □ einen Sehnerv. &nbsp; □ eine Absorption.</p></div>
            <div class="mc"><strong>c) Die Unterbrechung eines gleichmäßigen Rhythmus setzt …</strong><p>□ eine Netzhaut. &nbsp; □ eine Wellenlänge. &nbsp; <span :class="{ 'solution-answer': solutions }">{{ solutions ? '☒' : '□' }} einen Akzent.</span></p></div>
            <div class="mc"><strong>d) „Häufigkeit“ beschreibt …</strong><p>□ die Ausrichtung der Elemente. &nbsp; □ ihre Größe.<br /><span :class="{ 'solution-answer': solutions }">{{ solutions ? '☒' : '□' }} wie oft ein Element innerhalb einer Fläche vorkommt.</span></p></div>
          </div>
          <footer class="worksheet-footer"><span>3BKGD1_1_GRD · Klassenarbeit 01</span><span>1 / 2</span></footer>
        </article>
      </div>
      <div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article class="a4-paper" :style="{ transform: `scale(${scale})` }">
          <header class="worksheet-header">
            <img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" />
            <h2>BERUFSKOLLEG GRAFIKDESIGN</h2>
            <p>Grafikdesign Schuljahr 1 | chs | Heckel</p>
          </header>
          <div class="worksheet-body">
            <p>Name: __________________________________________</p>
            <h3>4. Ergänze den Lückentext. <span>4 Punkte</span></h3>
            <p>Verwende jedes Wort genau einmal. Je richtige Lücke: 1 Punkt.</p>
            <p class="word-bank">größer · ruhig · gleich · zwei</p>
            <div class="cloze">
              <p>Bei einem regelmäßigen Rhythmus sind die Abstände immer <span class="blank" :class="{ filled: solutions }">{{ solutions ? 'gleich' : '' }}</span>.</p>
              <p>Ein regelmäßiger Rhythmus wirkt <span class="blank" :class="{ filled: solutions }">{{ solutions ? 'ruhig' : '' }}</span>.</p>
              <p>Bei einem alternierenden Rhythmus wechseln sich <span class="blank" :class="{ filled: solutions }">{{ solutions ? 'zwei' : '' }}</span> unterschiedliche Elemente ab.</p>
              <p>Bei einem progressiven Punktrhythmus können die Punkte Schritt für Schritt <span class="blank" :class="{ filled: solutions }">{{ solutions ? 'größer' : '' }}</span> werden.</p>
            </div>
            <h3>5. Zeichne einen alternierenden Punktrhythmus. <span>6 Punkte</span></h3>
            <div class="drawing-box" aria-label="Zeichenfeld für den alternierenden Punktrhythmus">
              <div v-if="solutions" class="dot-rhythm" role="img" aria-label="Musterlösung: zwölf abwechselnd kleine und große Punkte">
                <span v-for="n in 12" :key="n" class="dot-position"><span class="rhythm-dot" :style="{ width: n % 2 ? '7px' : '18px', height: n % 2 ? '7px' : '18px' }"></span></span>
              </div>
            </div>
            <h3>6. Zeichne einen progressiven Punktrhythmus. <span>6 Punkte</span></h3>
            <div class="drawing-box" aria-label="Zeichenfeld für den progressiven Punktrhythmus">
              <div v-if="solutions" class="dot-rhythm" role="img" aria-label="Musterlösung: acht von links nach rechts größer werdende Punkte">
                <span v-for="n in 8" :key="n" class="dot-position"><span class="rhythm-dot" :style="{ width: `${4 + n * 3}px`, height: `${4 + n * 3}px` }"></span></span>
              </div>
            </div>
            <p>Zeichne die Punkte frei Hand. Leichte Abweichungen sind erlaubt, solange das geforderte Prinzip klar erkennbar bleibt.</p>
          </div>
          <footer class="worksheet-footer"><span>3BKGD1_1_GRD · Klassenarbeit 01</span><span>2 / 2</span></footer>
        </article>
      </div>

    </div>
  </main>
</template>

<style scoped>
@font-face { font-family: 'ExamHeading'; src: url('../../../assets/fonts/Anton-Regular.ttf') format('truetype'); font-style: normal; font-weight: 400; font-display: swap; }
.design-template-page { max-width: 1080px; margin: auto; padding: 32px; color: #202d32; font-family: 'Jost', sans-serif; }
.design-template-page a { color: #176746; }
h1 { font-size: 28px; font-weight: 500; margin: 24px 0; }
.template-actions { display: flex; gap: 12px; margin: 20px 0; }
.preview-label { font-size: 14px; color: #647168; margin: 24px 0 12px; }
.papers { width: 100%; max-width: 210mm; }
.paper-frame { position: relative; }
.a4-paper { display: flex; flex-direction: column; width: 210mm; height: 297mm; padding: 10mm 12mm 8mm; box-sizing: border-box; transform-origin: top left; background: #fff; color: #202d32; box-shadow: 0 2px 18px #0002; font-family: 'Jost', sans-serif; }
.worksheet-header { text-align: center; border-bottom: 1px solid #abb3b5; padding-bottom: 13px; }
.worksheet-header img { display: block; width: 128px; height: 44px; margin: 0 auto 9px; }
.worksheet-header h2 { font-family: 'ExamHeading', sans-serif; font-size: 21px; font-weight: 400; letter-spacing: .025em; line-height: 1.25; color: #111; margin: 0 0 5px; }
.worksheet-header p { font-size: 12px; margin: 0; }
.worksheet-body { flex: 1; }
.worksheet-footer { display: flex; justify-content: space-between; gap: 12px; padding-top: 12px; border-top: 1px solid #d3dad6; font-size: 10px; }
@media (max-width: 700px) { .design-template-page { padding: 16px; } }

.papers { margin-top: 24px; }
.paper-frame { margin-bottom: 24px; }
.worksheet-body { padding-top: 14px; font-size: 12px; line-height: 1.4; }
.worksheet-body h2 { font-size: 22px; font-weight: 500; letter-spacing: -.02em; line-height: 1.2; color: #111; margin: 0 0 10px; }

.worksheet-body p { margin: 5px 0; }
.worksheet-body ul, .worksheet-body ol { margin: 6px 0; padding-left: 22px; }
.worksheet-body li { margin: 5px 0; padding-left: 3px; }
table { width: 100%; border-collapse: collapse; margin: 8px 0; }
th, td { border: 1px solid #d3dad6; padding: 4px 8px; text-align: left; }
@media print {
  .screen-only { display: none; }
  .design-template-page { padding: 0; }
  .papers { margin: 0; }
  .paper-frame { height: auto !important; margin: 0; break-after: page; }
  .paper-frame:last-child { break-after: auto; }
  .a4-paper { transform: none !important; box-shadow: none; }
}

.actions { display: flex; flex-wrap: wrap; gap: 12px; margin: 20px 0; }
.worksheet-body { font-size: 12px; line-height: 1.4; }
.worksheet-body h3 { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; font-size: 13px; font-weight: 500; line-height: 1.4; color: #111; margin: 10px 0 6px; }
.worksheet-body h3 span { white-space: nowrap; font-size: 11px; font-weight: 400; color: #555; font-variant-numeric: tabular-nums; }
.assessment { display: flex; justify-content: space-between; gap: 20px; margin: 14px 0; }
.assessment span:first-child { flex: 1; }
.instructions { padding: 9px 12px; background: #f1f2ef; }
.match-table td { height: 25px; }
.word-bank { border: 1px solid #abb3b5; padding: 8px; }
.cloze { line-height: 2.6; }
.mc { margin: 8px 0 9px; }
.mc p { margin: 3px 0; }
.answer-line { height: 25px; border-bottom: 1px solid #abb3b5; }
.drawing-box { height: 46mm; border: 1px solid #abb3b5; margin: 12px 0 5px; }
.criteria { color: #526257; font-size: 11px; }
.key-table td, .key-table th { padding: 5px; }
.worksheet-body .topic-heading { font-family: 'ExamHeading', sans-serif; font-size: 15px; font-weight: 400; text-transform: uppercase; letter-spacing: .045em; line-height: 1.25; color: #111; margin: 12px 0 8px; padding-bottom: 5px; border-bottom: 1px solid #111; }
.blank { display: inline-block; width: 108px; height: 20px; line-height: 20px; vertical-align: baseline; border-bottom: 1px solid #abb3b5; text-align: center; }
.long-blank { width: 156px; }
.solution-answer, .blank.filled { color: #176746; font-weight: 500; }
.dot-rhythm { display: flex; align-items: center; justify-content: center; height: 100%; padding: 0 20px; }
.dot-position { display: flex; align-items: center; justify-content: center; width: 48px; flex: 0 0 48px; }
.rhythm-dot { display: block; background: #176746; border-radius: 50%; }
@page { size: A4; margin: 0; }
</style>
