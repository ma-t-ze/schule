<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
const signTasks = [
  { text: 'Eine Zeichnung zeigt eine Katze. Die Zeichnung steht für die Katze.', answer: 'Ikon', reason: 'Die Zeichnung ähnelt der Katze.' },
  { text: 'Rauch steigt aus einem Feuer auf und weist auf dieses Feuer hin.', answer: 'Index', reason: 'Der Rauch entsteht durch das Feuer.' },
  { text: 'Eine rote Ampel zeigt an, dass Fahrzeuge anhalten müssen.', answer: 'Symbol', reason: 'Die Bedeutung beruht auf einer erlernten Regel.' },
  { text: 'Frische Pfotenabdrücke im Schnee weisen auf den Hund hin, der sie hinterlassen hat.', answer: 'Index', reason: 'Die Abdrücke entstehen durch den Hund.' },
  { text: 'Das geschriebene Wort „Katze“ steht für das Tier.', answer: 'Symbol', reason: 'Der Bezug des Wortes beruht auf sprachlicher Konvention.' }
]
const container = ref(null)
const paper = ref(null)
const scale = ref(1)
const solutions = ref(false)
const busy = ref(false)
const error = ref('')
let observer
onMounted(() => { observer = new ResizeObserver(() => { if (container.value && paper.value) scale.value = Math.min(1, container.value.clientWidth / paper.value.offsetWidth) }); observer.observe(container.value) })
onBeforeUnmount(() => observer?.disconnect())
async function downloadPdf() {
  if (busy.value) return
  busy.value = true; error.value = ''
  try {
    await document.fonts.ready
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
    const canvas = await html2canvas(paper.value, { scale: 3, backgroundColor: '#fff', onclone(doc) { const element = doc.querySelector('.a4-paper'); if (element) { element.style.transform = 'none'; element.style.boxShadow = 'none' } } })
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    pdf.setProperties({ title: 'Ikon, Index und Symbol · 3TGG1/2' })
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    pdf.save(`3TGG1_2_Ikon_Index_Symbol${solutions.value ? '_Loesung' : ''}.pdf`)
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>
<template>
  <main class="worksheet-page"><div class="screen-only"><RouterLink to="/">← Zur Startseite</RouterLink><h1>Ikon, Index und Symbol</h1><div class="actions"><Button :label="solutions ? 'Lösung ausblenden' : 'Lösung anzeigen'" outlined :disabled="busy" :aria-pressed="solutions" @click="solutions = !solutions" /><Button :label="solutions ? 'Lösungsblatt als PDF' : 'Arbeitsblatt als PDF'" :loading="busy" @click="downloadPdf" /></div><Message v-if="error" severity="error" :closable="false">{{ error }}</Message><p class="preview-label">{{ solutions ? 'Lösungsblatt' : 'Arbeitsblatt' }} · 1 Seite · DIN A4, Hochformat</p></div>
    <div ref="container" class="paper-container"><div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }"><article ref="paper" class="a4-paper" :style="{ transform: `scale(${scale})` }">
      <header class="worksheet-header"><img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo"><h2>GESTALTUNGS- UND MEDIENTECHNIK</h2><p>Eingangsklasse | CHS | Heckel</p></header>
      <div class="worksheet-body">
        <section class="sign-types"><div class="sheet-heading"><h2>Zusammenhang mit Ikon, Index und Symbol</h2></div><p>Peirce untersuchte außerdem, <strong>auf welche Weise ein Zeichen mit seinem Objekt verbunden ist</strong>:</p><table class="types-table"><thead><tr><th scope="col">Zeichenart</th><th scope="col">Beziehung</th><th scope="col">Beispiel</th></tr></thead><tbody><tr><th scope="row">Ikon</th><td>Ähnlichkeit</td><td>Zeichnung einer Katze</td></tr><tr><th scope="row">Index</th><td>Tatsächlicher Zusammenhang</td><td>Rauch als Hinweis auf Feuer</td></tr><tr><th scope="row">Symbol</th><td>Erlernte Regel oder Konvention</td><td>Rotes Ampellicht bedeutet Halt</td></tr></tbody></table><p><strong>Merksatz:</strong> Peirce wollte nicht nur beschreiben, <em>was</em> Zeichen bedeuten, sondern vor allem erklären, <strong>wie Zeichen Bedeutung erzeugen und warum wir sie unterschiedlich verstehen können.</strong></p><h3>Zeichenarten anwenden</h3><p>Ordne jedem Beispiel <strong>Ikon, Index oder Symbol</strong> zu. Begründe die Zuordnung kurz anhand der Beziehung zum genannten Objekt.</p><div v-for="(task, index) in signTasks" :key="task.text" class="sign-task"><p><strong>{{ index + 1 }}.</strong> {{ task.text }}</p><div class="sign-task-answer"><span>Zeichenart: <span class="sign-type-line">{{ solutions ? task.answer : '' }}</span></span><span class="sign-reason">Begründung: <span class="sign-reason-line">{{ solutions ? task.reason : '' }}</span></span></div></div></section>
      </div><footer class="worksheet-footer"><span>3TGG1/2 · Gestaltungs- und Medientechnik</span><span>1 / 1</span></footer>
    </article></div></div>
  </main>
</template>
<style scoped>

.worksheet-page{max-width:1080px;margin:auto;padding:32px;color:#303030;font-family:Jost,sans-serif}.screen-only a{color:#444}.screen-only h1{font-size:30px;font-weight:500;margin:24px 0;letter-spacing:-.02em}.actions{display:flex;flex-wrap:wrap;gap:12px;margin:20px 0}.preview-label{font-size:14px;color:#6b6b6b;margin:24px 0 16px}.paper-container{width:100%;max-width:210mm}.paper-frame{position:relative;overflow:hidden;margin-bottom:24px}.a4-paper{display:flex;flex-direction:column;width:210mm;height:297mm;padding:10mm 12mm 8mm;box-sizing:border-box;transform-origin:top left;background:white;color:#303030;box-shadow:0 2px 18px #0002;font-family:Jost,sans-serif}.worksheet-header{text-align:center;border-bottom:1px solid #b5b5b5;padding-bottom:13px}.worksheet-header img{display:block;width:128px;height:44px;margin:0 auto 9px}.worksheet-header h2{font-size:15px;font-weight:600;letter-spacing:.05em;line-height:1.4;margin:0 0 3px}.worksheet-header p{font-size:12px;margin:0}.worksheet-body{flex:1;padding-top:5mm;font-size:12px;line-height:1.5}.sheet-heading{display:flex;justify-content:space-between;align-items:center;gap:12px}.sheet-heading h2{margin:0;font-size:27px;font-weight:500;line-height:1.15;letter-spacing:-.03em}.sheet-heading span{font-size:10px;letter-spacing:.1em}.subtitle{margin:7px 0 0;color:#6b6b6b}.introduction{font-size:12px;line-height:1.5}.introduction p{margin:3mm 0}.introduction h3{font-size:15px;margin:5mm 0 2mm}.introduction ol{padding-left:6mm;margin:2mm 0}.introduction li{margin:1.5mm 0}.example,.assignment{margin-top:4mm;padding:3mm 4mm;border-left:3px solid #777;background:#f2f2f2}.example h3,.assignment h3{font-size:12px;margin:0 0 5px}.example p,.assignment p{margin:4px 0;line-height:1.5}.example-relations{margin:2mm 0}.example-relations p{margin:2px 0}.scene{margin-top:6mm}.scene-heading{display:flex;align-items:center;gap:12px;margin-bottom:3mm}.scene-number{display:flex;align-items:center;justify-content:center;width:34px;height:34px;flex-shrink:0;background:#eee;font-size:16px;font-weight:500}.scene-heading h3{font-size:15px;margin:0 0 3px}.scene-heading p{font-size:11px;color:#6b6b6b;margin:0}.matching-table{width:100%;border-collapse:collapse;table-layout:fixed;border:1px solid #d5d5d5}.matching-table th,.matching-table td{padding:5px 9px;text-align:left;vertical-align:top;font-size:12px;line-height:1.4}.matching-table th{width:24px;font-weight:600}.matching-table tr+tr th,.matching-table tr+tr td{border-top:1px solid #ddd}.scene-answers{display:flex;flex-wrap:wrap;gap:3mm 5mm;margin-top:3mm}.answer-field{display:flex;align-items:baseline;gap:2mm}.answer-field strong{font-size:11px;font-weight:500}.answer-line{display:inline-block;min-width:9mm;min-height:5mm;text-align:center;border-bottom:1px solid #999;box-sizing:border-box}.answer-line span{color:#333;font-size:12px;font-weight:600}.solution-note{font-size:10px;line-height:1.35;margin:2mm 0;color:#555}.worksheet-footer{display:flex;justify-content:space-between;padding-top:12px;border-top:1px solid #ddd;font-size:10px;color:#6b6b6b}@media(max-width:700px){.worksheet-page{padding:16px}}
.sign-types p{margin:3mm 0;line-height:1.45}.sign-types h3{font-size:15px;margin:5mm 0 2mm}.types-table{width:100%;border-collapse:collapse;font-size:12px}.types-table th,.types-table td{border:1px solid #c8c8c8;padding:5px 8px;text-align:left;vertical-align:top}.types-table thead{background:#eee}.types-table th:first-child{width:22%}.sign-task{margin:2mm 0 3mm}.sign-task p{margin:0 0 1mm}.sign-task-answer{display:flex;gap:4mm;align-items:baseline;font-size:11px}.sign-type-line,.sign-reason-line{display:inline-block;border-bottom:1px solid #aaa;min-height:5mm;min-width:18mm;color:#333}.sign-reason{display:flex;flex:1;gap:2mm;align-items:baseline}.sign-reason-line{flex:1}
</style>
