<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'

const scenes = [
  {
    title: 'Haustier', perspective: 'Perspektive des Tierarztes',
    options: [
      'Der Tierarzt versteht das Gesehene als Katze.',
      'Die tatsächlich vorhandene Wollmütze; eine echte Katze ist nicht vorhanden.',
      'Die wahrgenommene Form der Wollmütze, die einer Katze ähnelt.'
    ], sign: 'C', object: 'B', interpretant: 'A'
  },
  {
    title: 'Blumen', perspective: 'Perspektive der älteren italienischen Dame',
    options: [
      'Der Strauß Chrysanthemen vor Sofias Haustür.',
      'Die Dame verbindet die Blumen mit Trauer und deutet sie als Hinweis auf Sofias Unglück.',
      'Die Liebe oder Zuneigung des jungen Mannes zu Sofia, für die er die Blumen vor ihre Haustür legt.'
    ], sign: 'A', object: 'C', interpretant: 'B'
  },
  {
    title: 'Einkaufsladen', perspective: 'Perspektive des Ladenbesitzers',
    options: [
      'Der tatsächliche Griff zum Portemonnaie, um zu bezahlen.',
      'Der Ladenbesitzer deutet die Situation als Überfall und vermutet eine Waffe.',
      'Die Äußerung des Mannes und sein Griff in die Jackentasche.'
    ], sign: 'C', object: 'A', interpretant: 'B'
  }
]
const pages = [[], [scenes[0]], scenes.slice(1)]

const fields = [{ key: 'sign', label: 'Zeichen (Representamen)' }, { key: 'object', label: 'Objekt' }, { key: 'interpretant', label: 'Interpretant' }]
const container = ref(null)
const paper = ref(null)
const scale = ref(1)
const solutions = ref(false)
const busy = ref(false)
const error = ref('')
let observer
onMounted(() => {
  observer = new ResizeObserver(() => { if (container.value && paper.value) scale.value = Math.min(1, container.value.clientWidth / paper.value.offsetWidth) })
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
    pdf.setProperties({ title: 'Zeichen, Objekt und Interpretant · 3TGG1/2' })
    const papers = container.value.querySelectorAll('.a4-paper')
    for (let i = 0; i < papers.length; i++) {
      const canvas = await html2canvas(papers[i], { scale: 3, backgroundColor: '#fff', onclone(doc) { doc.querySelectorAll('.a4-paper').forEach(element => { element.style.transform = 'none'; element.style.boxShadow = 'none' }) } })
      if (i) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    }
    pdf.save(`3TGG1_2_Zeichen_Objekt_Interpretant${solutions.value ? '_Loesung' : ''}.pdf`)
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>
<template>
  <main class="worksheet-page">
    <div class="screen-only"><RouterLink to="/">← Zur Startseite</RouterLink><h1>Zeichen, Objekt und Interpretant</h1><div class="actions"><Button :label="solutions ? 'Lösung ausblenden' : 'Lösung anzeigen'" outlined :disabled="busy" :aria-pressed="solutions" @click="solutions = !solutions" /><Button :label="solutions ? 'Lösungsblatt als PDF' : 'Arbeitsblatt als PDF'" :loading="busy" @click="downloadPdf" /></div><Message v-if="error" severity="error" :closable="false">{{ error }}</Message><p class="preview-label">{{ solutions ? 'Lösungsblatt' : 'Arbeitsblatt' }} · 3 Seiten · DIN A4, Hochformat</p></div>
    <div ref="container" class="paper-container"><div v-for="(page, pageIndex) in pages" :key="pageIndex" class="paper-frame" :style="{ height: `${1122.52 * scale}px` }"><article :ref="element => { if (pageIndex === 0) paper = element }" class="a4-paper" :style="{ transform: `scale(${scale})` }">
      <header class="worksheet-header"><img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo"><h2>GESTALTUNGS- UND MEDIENTECHNIK</h2><p>Eingangsklasse | CHS | Heckel</p></header>
      <div class="worksheet-body"><template v-if="pageIndex === 0"><div class="sheet-heading"><h2>Charles Sanders Peirce – Wie entstehen Bedeutungen durch Zeichen?</h2></div><div class="introduction"><p>Der amerikanische Philosoph und Logiker <strong>Charles Sanders Peirce (1839–1914)</strong> beschäftigte sich mit der grundlegenden Frage:</p><p><strong>Wie kommt es, dass wir etwas wahrnehmen und darin eine Bedeutung erkennen?</strong></p><p>Seine zentrale Erkenntnis: Dinge haben nicht einfach von sich aus eine bestimmte Bedeutung. Bedeutung entsteht durch einen <strong>Zeichenprozess</strong>, den Peirce <em>Semiose</em> nennt.</p><h3>Das triadische Zeichenmodell</h3><p>Peirce unterscheidet drei Bestandteile, die untrennbar miteinander verbunden sind:</p><ol><li><strong>Zeichen (Representamen):</strong> Das, was wir wahrnehmen und als Zeichen verstehen, beispielsweise Rauch.</li><li><strong>Objekt:</strong> Das, worauf sich das Zeichen bezieht, beispielsweise ein Feuer.</li><li><strong>Interpretant:</strong> Die Bedeutung beziehungsweise das Verständnis, das durch das Zeichen entsteht, beispielsweise der Gedanke: „Dort brennt etwas.“</li></ol><p>Das Entscheidende ist, dass ein Zeichen nicht einfach nur für etwas steht. Es muss auch <strong>interpretiert werden</strong>, damit Bedeutung entsteht.</p><h3>Warum ist das wichtig?</h3><p>Menschen verstehen Zeichen aufgrund ihrer Erfahrungen, ihres Vorwissens und kulturell erlernter Zusammenhänge. Deshalb kann dasselbe Zeichen unterschiedlich interpretiert werden.</p><p>Beispielsweise kann eine Chrysantheme in einem kulturellen Kontext als Zeichen der Trauer verstanden werden, während sie in einem anderen vor allem als dekorative Blume wahrgenommen wird.</p><p>Peirce erklärt damit auch, <strong>warum Missverständnisse entstehen können</strong>: Ein Zeichen wird anders interpretiert, als es ursprünglich gemeint war.</p><p>Wichtig ist dabei: Der <em>Interpretant</em> ist nicht die interpretierende Person, sondern das durch das Zeichen entstehende Verständnis. Dieses kann wiederum Ausgangspunkt weiterer Interpretationen sein.</p></div></template><template v-else><div class="sheet-heading"><h2>Zeichen, Objekt und Interpretant</h2><span v-if="solutions">LÖSUNGSVORSCHLAG</span></div><p class="subtitle">Das Zeichenmodell nach Charles Sanders Peirce</p></template>

        <template v-if="pageIndex === 1"><section class="example"><h3>Beispiel: Rauch vor dem Fenster</h3><p>Anna sieht vor dem Fenster dunklen Rauch und denkt, beim Nachbarn brenne es. Tatsächlich stammt der Rauch aus seinem Kamin: Das Holz verbrennt noch nicht richtig.</p><div class="example-relations"><p><strong>Zeichen (Representamen):</strong> Der sichtbare Rauch ist das, was Anna wahrnimmt.</p><p><strong>Objekt (das Bezeichnete):</strong> Das tatsächliche Feuer im Kamin ist das, worauf sich der Rauch bezieht.</p><p><strong>Interpretant:</strong> Anna versteht den Rauch als Hinweis auf Feuer und deutet ihn als gefährlichen Hausbrand.</p></div><p>Die konkrete Deutung veranschaulicht den Interpretanten hier vereinfacht. Das tatsächliche Feuer und Annas Vorstellung davon sind zu unterscheiden.</p><p><strong>Zeichenarten:</strong> Das Objekt ist das Bezeichnete: der Gegenstand, das Ereignis oder der Sachverhalt, auf den sich ein Zeichen bezieht. Ikon, Index und Symbol beschreiben diese Beziehung: durch Ähnlichkeit, einen Zusammenhang oder eine Konvention. Der Rauch ist ein Index: Er steht durch seine Entstehung mit dem Feuer in Zusammenhang.</p></section><section class="assignment"><h3>Aufgabe</h3><p>Ordne für jeden der drei Werbefilme die Aussagen A, B und C den Begriffen <strong>Zeichen (Representamen), Objekt und Interpretant</strong> zu. Trage die Buchstaben in die Felder ein. Jeder Buchstabe wird pro Film einmal verwendet.</p></section></template>
        <section v-for="(scene, index) in page" :key="scene.title" class="scene"><div class="scene-heading"><span class="scene-number">{{ String(pageIndex === 1 ? 1 : index + 2).padStart(2, '0') }}</span><div><h3>Werbefilm „{{ scene.title }}“</h3><p>{{ scene.perspective }}</p></div></div><table class="matching-table" :aria-label="`Aussagen zum Werbefilm ${scene.title}`"><tbody><tr v-for="(option, optionIndex) in scene.options" :key="option"><th scope="row">{{ String.fromCharCode(65 + optionIndex) }}</th><td>{{ option }}</td></tr></tbody></table><div class="scene-answers"><div v-for="field in fields" :key="field.key" class="answer-field"><strong>{{ field.label }}:</strong><span class="answer-line"><span v-if="solutions">{{ scene[field.key] }}</span></span></div></div><p v-if="solutions && scene.title === 'Haustier'" class="solution-note">Hier kann derselbe Gegenstand unter verschiedenen Gesichtspunkten betrachtet werden; entscheidend ist die begründete Zeichenbeziehung.</p><p v-if="solutions && scene.title === 'Blumen'" class="solution-note">Die Blumen stehen für die Zuneigung des jungen Mannes. Die Frau versteht sie aufgrund ihrer erlernten Bedeutung anders und vermutet einen Trauerfall.</p></section>
        <p v-if="solutions && pageIndex === 2" class="solution-note">Die Lösungen zeigen mögliche Zuordnungen. Andere nachvollziehbar begründete Zeichenbeziehungen sind zu berücksichtigen.</p>
      </div><footer class="worksheet-footer"><span>3TGG1/2 · Gestaltungs- und Medientechnik</span><span>{{ pageIndex + 1 }} / 3</span></footer>
    </article></div></div>
  </main>
</template>
<style scoped>
.worksheet-page{max-width:1080px;margin:auto;padding:32px;color:#303030;font-family:Jost,sans-serif}.screen-only a{color:#444}.screen-only h1{font-size:30px;font-weight:500;margin:24px 0;letter-spacing:-.02em}.actions{display:flex;flex-wrap:wrap;gap:12px;margin:20px 0}.preview-label{font-size:14px;color:#6b6b6b;margin:24px 0 16px}.paper-container{width:100%;max-width:210mm}.paper-frame{position:relative;overflow:hidden;margin-bottom:24px}.a4-paper{display:flex;flex-direction:column;width:210mm;height:297mm;padding:10mm 12mm 8mm;box-sizing:border-box;transform-origin:top left;background:white;color:#303030;box-shadow:0 2px 18px #0002;font-family:Jost,sans-serif}.worksheet-header{text-align:center;border-bottom:1px solid #b5b5b5;padding-bottom:13px}.worksheet-header img{display:block;width:128px;height:44px;margin:0 auto 9px}.worksheet-header h2{font-size:15px;font-weight:600;letter-spacing:.05em;line-height:1.4;margin:0 0 3px}.worksheet-header p{font-size:12px;margin:0}.worksheet-body{flex:1;padding-top:5mm;font-size:12px;line-height:1.5}.sheet-heading{display:flex;justify-content:space-between;align-items:center;gap:12px}.sheet-heading h2{margin:0;font-size:27px;font-weight:500;line-height:1.15;letter-spacing:-.03em}.sheet-heading span{font-size:10px;letter-spacing:.1em}.subtitle{margin:7px 0 0;color:#6b6b6b}.introduction{font-size:12px;line-height:1.5}.introduction p{margin:3mm 0}.introduction h3{font-size:15px;margin:5mm 0 2mm}.introduction ol{padding-left:6mm;margin:2mm 0}.introduction li{margin:1.5mm 0}.example,.assignment{margin-top:4mm;padding:3mm 4mm;border-left:3px solid #777;background:#f2f2f2}.example h3,.assignment h3{font-size:12px;margin:0 0 5px}.example p,.assignment p{margin:4px 0;line-height:1.5}.example-relations{margin:2mm 0}.example-relations p{margin:2px 0}.scene{margin-top:6mm}.scene-heading{display:flex;align-items:center;gap:12px;margin-bottom:3mm}.scene-number{display:flex;align-items:center;justify-content:center;width:34px;height:34px;flex-shrink:0;background:#eee;font-size:16px;font-weight:500}.scene-heading h3{font-size:15px;margin:0 0 3px}.scene-heading p{font-size:11px;color:#6b6b6b;margin:0}.matching-table{width:100%;border-collapse:collapse;table-layout:fixed;border:1px solid #d5d5d5}.matching-table th,.matching-table td{padding:5px 9px;text-align:left;vertical-align:top;font-size:12px;line-height:1.4}.matching-table th{width:24px;font-weight:600}.matching-table tr+tr th,.matching-table tr+tr td{border-top:1px solid #ddd}.scene-answers{display:flex;flex-wrap:wrap;gap:3mm 5mm;margin-top:3mm}.answer-field{display:flex;align-items:baseline;gap:2mm}.answer-field strong{font-size:11px;font-weight:500}.answer-line{display:inline-block;min-width:9mm;min-height:5mm;text-align:center;border-bottom:1px solid #999;box-sizing:border-box}.answer-line span{color:#333;font-size:12px;font-weight:600}.solution-note{font-size:10px;line-height:1.35;margin:2mm 0;color:#555}.worksheet-footer{display:flex;justify-content:space-between;padding-top:12px;border-top:1px solid #ddd;font-size:10px;color:#6b6b6b}@media(max-width:700px){.worksheet-page{padding:16px}}
</style>
