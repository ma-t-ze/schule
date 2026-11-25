<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'

const criteria = [
  { title: 'Dateien einschließlich PDF und Abgabeordner korrekt benannt', points: 3 },
  { title: 'Dokument korrekt angelegt', points: 2 },
  { title: 'Bedienfelder eingerichtet und Screenshot abgegeben', points: 3 },
  { title: 'Seitenaufteilung: Infospalte, zwei Textspalten, Trennlinien und Weißräume', points: 3 },
  { title: 'Textgestaltung: Titel, Untertitel, Initial-D und passende Typografie', points: 4 },
  { title: 'Bild proportional, passend beschnitten', points: 2 },
  { title: 'Hellgelbe Fläche und weiße Bildunterschrift passend gestaltet', points: 1 },
  { title: 'Texte ohne Überlauf und bearbeitbare InDesign-Datei abgegeben', points: 1 },
  { title: 'Vollständige Doppelseite als PDF exportiert', points: 1 }
]
const container = ref(null), paper = ref(null), scale = ref(1), busy = ref(false), error = ref('')
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
    pdf.setProperties({ title: 'Bewertungsbogen Klassenarbeit 01 · 3BKGD1/1 MET' })
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    pdf.save('Bewertungsbogen_Klassenarbeit_01_3BKGD1_1_MET.pdf')
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>

<template>
  <main class="design-template-page">
    <div class="screen-only">
      <RouterLink to="/">← Zur Startseite</RouterLink>
      <h1>Bewertungsbogen · Klassenarbeit 01</h1>
      <Button label="Als PDF speichern" :loading="busy" @click="downloadPdf" />
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <p class="preview-label">Vorschau · DIN A4, Hochformat · 1 Seite</p>
    </div>
    <div ref="container" class="paper-container"><div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
      <article ref="paper" class="a4-paper" :style="{ transform: `scale(${scale})` }">
        <header class="worksheet-header"><img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" /><h2>BERUFSKOLLEG GRAFIKDESIGN</h2><p>Medientechnik Schuljahr 1 | chs | Heckel</p></header>
        <div class="assessment-fields"><div class="assessment-name"><span>Name:</span><span class="write-line"></span></div><div class="assessment-points"><span>Punkte:</span><span class="write-line"></span><span>/ 20</span></div><div class="assessment-grade"><span>Note:</span><span class="write-line"></span></div></div>
        <div class="worksheet-body"><h2>Bewertungsbogen · Klassenarbeit 01</h2><p class="subtitle">Adobe InDesign · Magazin-Doppelseite</p>
          <table><thead><tr><th scope="col">Bewertungskriterium</th><th scope="col">Max.</th><th scope="col">Erreicht</th></tr></thead><tbody><tr v-for="item in criteria" :key="item.title"><td>{{ item.title }}</td><td>{{ item.points }}</td><td></td></tr></tbody><tfoot><tr><th scope="row">Gesamt</th><th>20</th><td></td></tr></tfoot></table>
        </div>
        <footer class="worksheet-footer"><span>3BKGD1/1 MET · Medientechnik</span><span>1 / 1</span></footer>
      </article>
    </div></div>
  </main>
</template>

<style scoped>
.design-template-page{max-width:1080px;margin:auto;padding:32px;color:#202d32;font-family:Jost,sans-serif}.screen-only a{color:#176746}.screen-only h1{font-size:28px;font-weight:500;margin:24px 0}.preview-label{font-size:14px;color:#647168;margin:24px 0 12px}.paper-container{width:100%;max-width:210mm}.paper-frame{position:relative}.a4-paper{display:flex;flex-direction:column;width:210mm;height:297mm;padding:10mm 12mm 8mm;box-sizing:border-box;transform-origin:top left;background:#fff;color:#202d32;box-shadow:0 2px 18px #0002;font-family:Jost,sans-serif}.worksheet-header{text-align:center;border-bottom:1px solid #abb3b5;padding-bottom:13px}.worksheet-header img{display:block;width:128px;height:44px;margin:0 auto 9px}.worksheet-header h2{font-size:15px;font-weight:600;letter-spacing:.05em;line-height:1.4;margin:0 0 3px}.worksheet-header p{font-size:12px;margin:0}.assessment-fields{display:flex;gap:10mm;align-items:baseline;margin-top:6mm;font-size:12px}.assessment-fields>div{display:flex;align-items:baseline;gap:2mm;white-space:nowrap}.assessment-name{flex:1}.assessment-points{width:41mm}.assessment-grade{width:21mm}.write-line{flex:1;height:5mm;border-bottom:1px solid #abb3b5}.worksheet-body{flex:1;padding-top:7mm;font-size:12px;line-height:1.4}.worksheet-body h2{font-size:20px;font-weight:500;margin:0}.subtitle{color:#647168;margin:1mm 0 5mm}.worksheet-body h3{font-size:14px;font-weight:600;margin:5mm 0 2mm}.worksheet-body p{margin:2mm 0}.worksheet-body table{width:100%;border-collapse:collapse;table-layout:fixed}.worksheet-body th,.worksheet-body td{border:1px solid #abb3b5;padding:2mm 2.5mm;text-align:left;vertical-align:middle}.worksheet-body thead{background:#f1f4f2}.worksheet-body th:nth-child(2),.worksheet-body th:nth-child(3),.worksheet-body td:nth-child(2),.worksheet-body td:nth-child(3){width:19mm;text-align:center}.worksheet-body tbody tr{height:11mm}.feedback-lines{height:27mm;background:repeating-linear-gradient(to bottom,transparent 0,transparent calc(9mm - 1px),#abb3b5 calc(9mm - 1px),#abb3b5 9mm)}.worksheet-footer{display:flex;justify-content:space-between;gap:12px;padding-top:12px;border-top:1px solid #d3dad6;font-size:10px}@media(max-width:700px){.design-template-page{padding:16px}}
</style>
