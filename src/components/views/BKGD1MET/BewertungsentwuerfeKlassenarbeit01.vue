<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'

const criteria = [
  ['Dateien einschließlich PDF und Abgabeordner korrekt benannt', 3],
  ['Dokument korrekt angelegt', 2],
  ['Bedienfelder eingerichtet und Screenshot abgegeben', 3],
  ['Seitenaufteilung: Infospalte, zwei Textspalten, Trennlinien und Weißräume', 3],
  ['Textgestaltung: Titel, Untertitel, Initial-D und passende Typografie', 4],
  ['Bild proportional, passend beschnitten', 2],
  ['Hellgelbe Fläche und weiße Bildunterschrift passend gestaltet', 1],
  ['Texte ohne Überlauf und bearbeitbare InDesign-Datei abgegeben', 1],
  ['Vollständige Doppelseite als PDF exportiert', 1]
]
const records = ref([]), selectedId = ref(null), container = ref(null), paper = ref(null), scale = ref(1)
const busy = ref(false), error = ref('')
const selected = computed(() => records.value.find(item => item.id === selectedId.value) || null)
let observer
onMounted(async () => {
  try {
    const response = await fetch('/__local-bewertungen/met-klassenarbeit-01', { cache: 'no-store' })
    if (!response.ok) throw new Error()
    const data = await response.json()
    if (data.version !== 1 || !Array.isArray(data.records) || data.records.some(item => !Array.isArray(item.criteria) || item.criteria.length !== criteria.length)) throw new Error()
    records.value = data.records
    selectedId.value = records.value[0]?.id ?? null
    await nextTick()
    observer = new ResizeObserver(() => { if (container.value && paper.value) scale.value = Math.min(1, container.value.clientWidth / paper.value.offsetWidth) })
    if (container.value) observer.observe(container.value)
  } catch { error.value = 'Die lokalen Bewertungsentwürfe sind nicht verfügbar. Bitte die Seite auf diesem Computer über localhost öffnen und den Entwicklungsserver neu starten.' }
})
onBeforeUnmount(() => observer?.disconnect())
async function exportPdf(all = false) {
  if (busy.value || !selected.value) return
  busy.value = true; error.value = ''
  const original = selectedId.value
  try {
    await document.fonts.ready
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    const list = all ? records.value : [selected.value]
    for (let i = 0; i < list.length; i++) {
      selectedId.value = list[i].id
      await nextTick()
      const canvas = await html2canvas(paper.value, { scale: 2, backgroundColor: '#fff', onclone(doc) { const el = doc.querySelector('.a4-paper'); if (el) { el.style.transform = 'none'; el.style.boxShadow = 'none' } } })
      if (i) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    }
    pdf.setProperties({ title: 'Korrekturvorschlag Klassenarbeit 01 · 3BKGD1/1 MET' })
    pdf.save(all ? 'Korrekturvorschlaege_3BKGD1_1_MET.pdf' : `Korrekturvorschlag_${selected.value.name}.pdf`)
  } catch { error.value = 'Das PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { selectedId.value = original; busy.value = false }
}
</script>

<template>
  <main class="review-page"><div class="screen-only">
    <RouterLink to="/">← Zur Startseite</RouterLink><h1>Korrekturvorschläge · Klassenarbeit 01</h1>
    <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
    <template v-if="selected"><p>Die Vorschläge beruhen auf den abgegebenen PDFs und Screenshots. Offene Kriterien erfordern eine Prüfung im Originaldokument und durch die Lehrkraft.</p><label for="student">Bewertungsbogen</label><select id="student" v-model="selectedId" :disabled="busy"><option v-for="item in records" :key="item.id" :value="item.id">{{ item.name }}</option></select>
      <div class="actions"><Button label="Diesen Bogen als PDF speichern" :loading="busy" @click="exportPdf(false)" /><Button label="Alle Bögen als PDF speichern" outlined :disabled="busy" @click="exportPdf(true)" /></div>
      <details><summary>Dateien in der Abgabe anzeigen</summary><ul><li v-for="file in selected.files" :key="file">{{ file }}</li></ul></details>
      <p class="preview-label">Korrekturvorschlag · DIN A4 · noch nicht abschließend bewertet</p>
    </template>
  </div>
  <div v-if="selected" ref="container" class="paper-container"><div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }"><article ref="paper" class="a4-paper" :style="{ transform: `scale(${scale})` }">
    <header class="worksheet-header"><img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" /><h2>BERUFSKOLLEG GRAFIKDESIGN</h2><p>Medientechnik Schuljahr 1 | chs | Heckel</p></header>
    <div class="assessment-fields"><div class="name"><span>Name:</span><strong>{{ selected.name }}</strong></div><div>Punkte: ______ / 20</div><div>Note: ______</div></div>
    <div class="worksheet-body"><h2>Bewertungsbogen · Klassenarbeit 01</h2><p class="subtitle">Adobe InDesign · Magazin-Doppelseite</p>
      <p class="status">Korrekturvorschlag: Punkte mit „offen“ und die Gesamtbewertung durch die Lehrkraft prüfen. Aussagen zur Bearbeitbarkeit und zum Anschnitt erfordern die InDesign-Datei.</p>
      <table><thead><tr><th scope="col">Bewertungskriterium und Beobachtung</th><th scope="col">Max.</th><th scope="col">Vorschlag</th></tr></thead><tbody><tr v-for="([title, maximum], index) in criteria" :key="title"><td><strong>{{ title }}</strong><div class="evidence">{{ selected.criteria[index].evidence }}</div></td><td>{{ maximum }}</td><td>{{ selected.criteria[index].score === null ? 'offen' : selected.criteria[index].score }}</td></tr></tbody><tfoot><tr><th scope="row">Gesamt</th><th>20</th><td>offen</td></tr></tfoot></table>
    </div><footer class="worksheet-footer"><span>3BKGD1/1 MET · Medientechnik</span><span>Korrekturvorschlag · 1 / 1</span></footer>
  </article></div></div></main>
</template>

<style scoped>
.review-page{max-width:1080px;margin:auto;padding:32px;color:#202d32;font-family:Jost,sans-serif}.screen-only a{color:#176746}.screen-only h1{font-size:28px;font-weight:500;margin:24px 0}.screen-only label{display:block;font-weight:600;margin:18px 0 6px}select{font:inherit;width:min(100%,360px);padding:9px;border:1px solid #abb3b5;border-radius:6px;background:#fff}.actions{display:flex;gap:12px;flex-wrap:wrap;margin:18px 0}details{margin:14px 0}.preview-label{font-size:14px;color:#647168;margin:24px 0 12px}.paper-container{width:100%;max-width:210mm}.paper-frame{position:relative}.a4-paper{display:flex;flex-direction:column;width:210mm;height:297mm;padding:10mm 12mm 8mm;box-sizing:border-box;transform-origin:top left;background:#fff;color:#202d32;box-shadow:0 2px 18px #0002;font-family:Jost,sans-serif}.worksheet-header{text-align:center;border-bottom:1px solid #abb3b5;padding-bottom:13px}.worksheet-header img{display:block;width:128px;height:44px;margin:0 auto 9px}.worksheet-header h2{font-size:15px;font-weight:600;letter-spacing:.05em;line-height:1.4;margin:0 0 3px}.worksheet-header p{font-size:12px;margin:0}.assessment-fields{display:flex;gap:8mm;align-items:baseline;margin-top:6mm;font-size:12px}.assessment-fields .name{flex:1;display:flex;gap:2mm}.worksheet-body{flex:1;padding-top:6mm;font-size:11px;line-height:1.3}.worksheet-body h2{font-size:19px;font-weight:500;margin:0}.subtitle{color:#647168;margin:1mm 0 3mm}.status{font-size:10px;margin:2mm 0 3mm}.worksheet-body table{width:100%;border-collapse:collapse;table-layout:fixed}.worksheet-body th,.worksheet-body td{border:1px solid #abb3b5;padding:1.4mm 2mm;text-align:left;vertical-align:top}.worksheet-body thead{background:#f1f4f2}.worksheet-body th:nth-child(2),.worksheet-body th:nth-child(3),.worksheet-body td:nth-child(2),.worksheet-body td:nth-child(3){width:16mm;text-align:center}.evidence{font-size:10px;color:#49575a;margin-top:1mm}.worksheet-footer{display:flex;justify-content:space-between;gap:12px;padding-top:12px;border-top:1px solid #d3dad6;font-size:10px}@media(max-width:700px){.review-page{padding:16px}}
</style>
