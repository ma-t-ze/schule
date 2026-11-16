<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'

const subject = 'GESTALTUNGS- UND MEDIENTECHNIK'
const byline = 'Eingangsklasse | CHS | Heckel'
const scenes = [
  {
    title: 'Haustier', perspective: 'Perspektive des Tierarztes', reason: 'Ähnlichkeit',
    options: [
      { text: 'Eine Wollmütze.', kind: 'sign' },
      { text: 'Eine Katze.', kind: 'meaning' }
    ]
  },
  {
    title: 'Blumen', perspective: 'Perspektive der älteren italienischen Dame', reason: 'Konvention',
    options: [
      { text: 'Dort liegen Chrysanthemen, die für Trauer stehen. Sofia ist verunglückt!', kind: 'meaning' },
      { text: 'Ein Blumenstrauß.', kind: 'sign' }
    ]
  },
  {
    title: 'Einkaufsladen', perspective: 'Perspektive des Ladenbesitzers', reason: 'Zusammenhang',
    options: [
      { text: 'Der Mann will eine Waffe ziehen und den Laden überfallen.', kind: 'meaning' },
      { text: 'Ein Mann greift in seine Jackentasche, um sein Portemonnaie herauszuholen, und sagt, dass die Person am anderen Ende des Telefons ausgeraubt wird.', kind: 'sign' }
    ]
  }
]
function solutionLetter(scene, kind) {
  return String.fromCharCode(65 + scene.options.findIndex(option => option.kind === kind))
}
const container = ref(null)
const paper = ref(null)
const scale = ref(1)
const busy = ref(false)
const error = ref('')
const solutions = ref(false)
let observer
onMounted(() => {
  observer = new ResizeObserver(() => { scale.value = Math.min(1, container.value.clientWidth / paper.value.offsetWidth) })
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
    pdf.setProperties({ title: 'Zeichen und ihre Bedeutung · 3TGG1/2' })
    const pages = container.value.querySelectorAll('.a4-paper')
    // Export all current pages, including the current wording and solution state.
    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], { scale: 3, backgroundColor: '#ffffff', onclone(doc) {
        doc.querySelectorAll('.a4-paper').forEach(element => { element.style.transform = 'none'; element.style.boxShadow = 'none' })
      } })
      if (i) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    }
    pdf.save(`3TGG1_2_Zeichen_und_Bezeichnetes${solutions.value ? '_Loesung' : ''}.pdf`)
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>

<template>
  <main class="design-template-page">
    <div class="screen-only">
      <RouterLink :to="{ name: '3tgg12' }">← Zur Übersicht 3TGG1/2</RouterLink>
      <h1>Zeichen und ihre Bedeutung</h1>
      <div class="template-actions">
        <Button :label="solutions ? 'Lösung ausblenden' : 'Lösung anzeigen'" outlined :disabled="busy" @click="solutions = !solutions" />
        <Button :label="solutions ? 'Lösungsblatt als PDF' : 'Arbeitsblatt als PDF'" :loading="busy" @click="downloadPdf" />
      </div>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <p class="preview-label">{{ solutions ? 'Lösungsblatt' : 'Arbeitsblatt' }} · 3 Seiten · DIN A4, Hochformat</p>
    </div>
    <div ref="container" class="paper-container">
      <div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article ref="paper" class="a4-paper" :style="{ transform: `scale(${scale})` }" aria-label="Arbeitsblatt Missverständnisse – Ergebnisse aus dem Plenum">
          <header class="worksheet-header">
            <img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" />
            <h2>{{ subject }}</h2><p>{{ byline }}</p>
          </header>
          <div class="worksheet-body">
            <div class="sheet-heading"><h2>Warum verstehen wir Zeichen unterschiedlich?</h2></div>
            <section class="assignment" aria-labelledby="plenary-worksheet-task">
              <h3 id="plenary-worksheet-task">Aufgabe</h3>
              <p>Auf welche Weise sind die Missverständnisse entstanden? Notiere zu jedem Werbefilm ein Stichwort bzw. Stichwörter zum im Plenum besprochenen Ergebnis.</p>
            </section>
            <section v-for="(scene, index) in scenes" :key="scene.title" class="plenary-section">
              <div class="scene-heading">
                <span class="scene-number">{{ String(index + 1).padStart(2, '0') }}</span>
                <div><h3>Werbefilm „{{ scene.title }}“</h3></div>
              </div>
              <div class="keyword-answer"><span>Stichwort bzw. Stichwörter:</span><span class="keyword-line" :aria-label="`Stichwort bzw. Stichwörter zum Werbefilm ${scene.title}`"></span></div>
            </section>
          </div>
          <footer class="worksheet-footer"><span>3TGG1/2 · Gestaltungs- und Medientechnik</span><span>1 / 3</span></footer>
        </article>
      </div>
      <div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article class="a4-paper" :style="{ transform: `scale(${scale})` }" aria-label="Arbeitsblatt Zeichen und ihre Bedeutung">
          <header class="worksheet-header">
            <img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" />
            <h2>{{ subject }}</h2><p>{{ byline }}</p>
          </header>
          <div class="worksheet-details" aria-label="Angaben zum Arbeitsauftrag">
            <div><span class="detail-label">Sozialform</span><strong>Gruppenarbeit · 3 Personen</strong></div>
            <div><span class="detail-label">Zeitvorgabe</span><strong>15 Minuten</strong></div>
          </div>
          <div class="worksheet-body">
            <div class="sheet-heading"><h2>Warum verstehen wir Zeichen unterschiedlich?</h2><span v-if="solutions">LÖSUNG</span></div>
            <p class="subtitle">Zuordnungsaufgabe zu drei Werbefilmen</p>
            <section class="assignment" aria-labelledby="video-worksheet-task">
              <h3 id="video-worksheet-task">Aufgabe</h3>
              <p>Ordne jedem Werbefilm das passende Zeichen und den Gedanken zu, den die Person damit verbindet.<br />Schreibe die richtigen Buchstaben (A und B) in die Lücken.<br />Ordne außerdem jedem Werbefilm einen Grund für das Missverständnis zu: Ähnlichkeit (ähnliches Aussehen), Zusammenhang (Ursache und Wirkung) oder Konvention (gelernt bzw. kulturell gelernt).</p>
            </section>
            <section v-for="(scene, index) in scenes" :key="scene.title" class="video-section">
              <div class="scene-heading">
                <span class="scene-number">{{ String(index + 1).padStart(2, '0') }}</span>
                <div><h3>Werbefilm „{{ scene.title }}“</h3><p class="perspective">{{ scene.perspective }}</p></div>
              </div>
              <table class="matching-table" :aria-label="`Aussagen zum Werbefilm ${scene.title}`">
                <tbody><tr v-for="(option, optionIndex) in scene.options" :key="option.text"><th scope="row"><span class="option-letter">{{ String.fromCharCode(65 + optionIndex) }}</span></th><td>{{ option.text }}</td></tr></tbody>
              </table>
              <div class="scene-answers">
                <div><strong>Zeichen / Zeichengruppe:</strong><span class="answer-line" :class="{ 'solution-answer': solutions }">{{ solutions ? solutionLetter(scene, 'sign') : '' }}</span></div>
                <div><strong>Gedanke:</strong><span class="answer-line" :class="{ 'solution-answer': solutions }">{{ solutions ? solutionLetter(scene, 'meaning') : '' }}</span></div>
                <div><strong>Grund:</strong><span class="answer-line" :class="{ 'solution-reason': solutions }">{{ solutions ? scene.reason : '' }}</span></div>
              </div>
            </section>

          </div>
          <footer class="worksheet-footer"><span>3TGG1/2 · Gestaltungs- und Medientechnik</span><span>2 / 3</span></footer>
        </article>
      </div>
      <div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article class="a4-paper" :style="{ transform: `scale(${scale})` }" aria-label="Arbeitsblatt Zeichen und ihre Bedeutung – Aufgabe 4">
          <header class="worksheet-header">
            <img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" />
            <h2>{{ subject }}</h2><p>{{ byline }}</p>
          </header>
          <div class="worksheet-body">
            <div class="sheet-heading"><h2>Warum verstehen wir Zeichen unterschiedlich?</h2><span v-if="solutions">LÖSUNG</span></div>
            <section class="reflection-task">
              <p class="optional-note">Optional: Nur für Schnelle</p>
              <div class="scene-heading">
                <span class="scene-number">04</span>
                <div><h3>Warum kann dasselbe Zeichen bei verschiedenen Menschen unterschiedliche Gedanken auslösen?</h3></div>
              </div>
              <p>Antworte in eigenen Worten.</p>
              <div class="reflection-answer">
                <p v-if="solutions" class="reflection-solution">Menschen haben unterschiedliche Erfahrungen und unterschiedliches Vorwissen. Auch ihre Erwartungen und die Situation beeinflussen, wie sie ein Zeichen deuten. Deshalb kann dasselbe Zeichen verschiedene Gedanken auslösen.</p>
                <div v-else class="writing-lines" aria-label="Sechs Schreibzeilen"><span v-for="line in 6" :key="line"></span></div>
              </div>
            </section>
          </div>
          <footer class="worksheet-footer"><span>3TGG1/2 · Gestaltungs- und Medientechnik</span><span>3 / 3</span></footer>
        </article>
      </div>
    </div>
  </main>
</template>
<style scoped>
.design-template-page { max-width: 1080px; margin: auto; padding: 32px; color: #303030; font-family: 'Jost', sans-serif; }
.design-template-page a { color: #444444; }
h1 { font-size: 30px; font-weight: 500; margin: 24px 0; letter-spacing: -.02em; }
.template-actions { display: flex; flex-wrap: wrap; gap: 12px; margin: 20px 0; }
.preview-label { font-size: 14px; color: #6b6b6b; margin: 24px 0 16px; }
.paper-container { width: 100%; max-width: 210mm; }
.paper-frame { position: relative; overflow: hidden; margin-bottom: 24px; }
.a4-paper { display: flex; flex-direction: column; width: 210mm; height: 297mm; padding: 10mm 12mm 8mm; box-sizing: border-box; transform-origin: top left; background: #fff; color: #303030; box-shadow: 0 2px 18px #0002; font-family: 'Jost', sans-serif; }
.worksheet-header { text-align: center; border-bottom: 1px solid #b5b5b5; padding-bottom: 13px; }
.worksheet-header img { display: block; width: 128px; height: 44px; margin: 0 auto 9px; }
.worksheet-header h2 { font-size: 15px; font-weight: 600; letter-spacing: .05em; line-height: 1.4; margin: 0 0 3px; }
.worksheet-header p { font-size: 12px; margin: 0; }
.worksheet-details { display: grid; grid-template-columns: 1.5fr 1fr; gap: 3mm; margin-top: 5mm; }
.worksheet-details > div { display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px 12px; padding: 0; }
.detail-label { font-size: 10px; color: #6b6b6b; }
.worksheet-details strong { font-size: 12px; font-weight: 500; color: #404040; }
.worksheet-body { flex: 1; padding-top: 5mm; font-size: 12px; line-height: 1.5; }
.sheet-heading { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.sheet-heading h2 { margin: 0; font-size: 28px; font-weight: 500; line-height: 1.15; letter-spacing: -.03em; color: #292929; }
.sheet-heading>span { font-size: 10px; letter-spacing: .12em; color: #444444; }
.subtitle { margin: 7px 0 0; color: #6b6b6b; font-size: 12px; }
.assignment { margin-top: 4mm; padding: 3.5mm 4mm; border-left: 3px solid #777777; border-radius: 0; background: #f2f2f2; }
.assignment h3 { font-size: 12px; line-height: 1.3; font-weight: 600; margin: 0 0 6px; color: #404040; }
.assignment p { margin: 0; line-height: 1.55; }
.video-section { margin-top: 7mm; break-inside: avoid; }
.scene-heading { display: flex; align-items: center; gap: 12px; margin-bottom: 3mm; }
.scene-number { display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; flex-shrink: 0; border-radius: 0; background: #eeeeee; color: #404040; font-size: 16px; font-weight: 500; }
.scene-heading h3 { font-size: 15px; line-height: 1.2; font-weight: 600; margin: 0 0 4px; }
.perspective { font-size: 11px; line-height: 1.3; color: #6b6b6b; margin: 0; }
.matching-table { width: 100%; border-collapse: separate; border-spacing: 0; table-layout: fixed; border: 1px solid #d5d5d5; border-radius: 0; overflow: hidden; }
.matching-table th,.matching-table td { padding: 10px 12px; text-align: left; vertical-align: top; }
.matching-table th { width: 36px; padding-right: 0; }
.matching-table td { font-size: 12px; line-height: 1.5; }
.matching-table tr { background: #fff; }
.matching-table tr:first-child { background: #f2f2f2; }
.matching-table tr+tr th,.matching-table tr+tr td { border-top: 1px solid #dddddd; }
.option-letter { display: inline-flex; justify-content: center; align-items: center; width: 22px; height: 22px; border: 1px solid #cccccc; border-radius: 0; color: #404040; font-size: 11px; font-weight: 600; background: white; }
.scene-answers { display: grid; grid-template-columns: max-content max-content minmax(0, 1fr); gap: 4mm; margin-top: 3mm; padding: 2mm 0; font-size: 12px; }
.scene-answers > div { display: flex; align-items: baseline; gap: 3mm; }
.scene-answers strong { font-weight: 500; color: #444444; white-space: nowrap; }
.scene-answers > div:nth-child(-n+2) .answer-line { flex: 0 0 7mm; width: 7mm; min-width: 7mm; }
.answer-line { display: inline-block; flex: 1; min-width: 13mm; min-height: 5mm; border-bottom: 1px solid #999999; text-align: center; }
.solution-answer,.solution-reason { color: #444444; font-weight: 600; }
.worksheet-footer { display: flex; justify-content: space-between; gap: 12px; padding-top: 12px; border-top: 1px solid #dddddd; font-size: 10px; color: #6b6b6b; }
@media (max-width: 700px) { .design-template-page { padding: 16px; } }
.plenary-section { margin-top: 9mm; break-inside: avoid; }
.keyword-answer { display: flex; align-items: baseline; gap: 3mm; margin-top: 4mm; font-size: 12px; }
.keyword-line { display: inline-block; width: 65mm; height: 6mm; border-bottom: 1px solid #bbbbbb; }
.reflection-task { margin-top: 5mm; break-inside: avoid; }
.optional-note { font-weight: 600; margin-bottom: 3mm !important; }
.reflection-task .scene-heading { margin-bottom: 2mm; }
.reflection-task h3 { font-size: 14px; line-height: 1.4; margin: 0; }
.reflection-task > p { font-size: 12px; margin: 0; }
.reflection-answer { min-height: 21mm; }
.writing-lines span { display: block; height: 7mm; border-bottom: 1px solid #bbbbbb; }
.reflection-answer .writing-lines span { height: 9.1mm; }
.reflection-solution { font-size: 12px; line-height: 1.6; margin: 3mm 0 0; }
@page { size: A4; margin: 0; }
@media print { .screen-only { display: none; }.design-template-page { padding: 0; margin: 0; }.paper-frame { height: auto !important; margin-bottom: 0; break-after: page; }.paper-frame:last-child { break-after: auto; }.a4-paper { transform: none !important; box-shadow: none; } }
</style>
