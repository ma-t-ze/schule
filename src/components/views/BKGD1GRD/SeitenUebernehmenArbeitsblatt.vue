<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
import GrdA4Header from '../Designvorlagen/GrdA4Header.vue'

const container = ref(null)
const paper = ref(null)
const scale = ref(1)
const busy = ref(false)
const error = ref('')
let observer
onMounted(() => {
  observer = new ResizeObserver(() => { scale.value = Math.min(1, container.value.clientWidth / paper.value.offsetWidth) })
  observer.observe(container.value)
})
onBeforeUnmount(() => observer?.disconnect())
async function downloadPdf() {
  if (busy.value) return
  busy.value = true
  error.value = ''
  try {
    await document.fonts.ready
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
    const canvas = await html2canvas(paper.value, { scale: 2, backgroundColor: '#fff', onclone(doc) {
      const clone = doc.querySelector('.worksheet-paper')
      if (clone) { clone.style.transform = 'none'; clone.style.boxShadow = 'none' }
    } })
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    pdf.setProperties({ title: 'InDesign · Seiten aus einem anderen Dokument übernehmen' })
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    pdf.save('Arbeitsblatt_InDesign_Seiten_uebernehmen.pdf')
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>
<template>
  <main class="worksheet-page">
    <div class="screen-only">
      <RouterLink to="/">← Zur Startseite</RouterLink>
      <h1>Arbeitsblatt · Seiten in InDesign übernehmen</h1>
      <Button label="Als PDF herunterladen" :loading="busy" @click="downloadPdf" />
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <p class="preview-label">Vorschau · DIN A4, Hochformat</p>
    </div>
    <div ref="container" class="paper-container"><div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
      <article ref="paper" class="worksheet-paper" :style="{ transform: `scale(${scale})` }">
        <GrdA4Header />
        <div class="worksheet-body">
          <p class="eyebrow">ADOBE INDESIGN · ARBEITSBLATT</p>
          <h2>Seiten aus einem anderen Dokument übernehmen</h2>
          <p>In Adobe InDesign lassen sich Seiten aus einem anderen InDesign-Dokument direkt in ein bestehendes Dokument übernehmen.</p>
          <h3>So geht’s Schritt für Schritt</h3>
          <ol>
            <li>Öffne beide InDesign-Dokumente.</li>
            <li>Öffne im Quelldokument das Bedienfeld <strong>Fenster → Seiten</strong>.</li>
            <li>Wähle die gewünschte Seite im Seitenbedienfeld aus.</li>
            <li>Öffne das Menü des Seitenbedienfelds oben rechts und wähle <strong>„Seiten verschieben …“</strong>.</li>
            <li>Wähle unter <strong>„Verschieben nach“</strong> das Zieldokument aus.</li>
            <li>Lege die gewünschte Position fest und bestätige mit <strong>OK</strong>.</li>
          </ol>
          <div class="important"><strong>Wichtig</strong><p>Aktiviere <strong>„Seiten nach dem Verschieben löschen“</strong> nicht. So wird die Seite kopiert und bleibt auch im Quelldokument erhalten.</p></div>
          <p class="check"><strong>Ergebnis prüfen:</strong> Kontrolliere, ob die Seite an der gewünschten Stelle im Zieldokument steht und im Quelldokument weiterhin vorhanden ist.</p>
        </div>
      </article>
    </div></div>
  </main>
</template>
<style scoped>
.worksheet-page { max-width: 1080px; margin: auto; padding: 32px; color: #202d32; font-family: 'Jost', sans-serif; }
.screen-only a { color: #176746; }.screen-only h1 { font-size: 28px; font-weight: 500; margin: 24px 0; }.preview-label { font-size: 14px; color: #647168; margin: 24px 0 12px; }
.paper-container { width: 100%; max-width: 210mm; }.paper-frame { position: relative; }
.worksheet-paper { width: 210mm; height: 297mm; padding: 10mm 12mm 8mm; box-sizing: border-box; transform-origin: top left; background: #fff; color: #111; box-shadow: 0 2px 18px #0002; }
.worksheet-body { font-family: 'Jost', sans-serif; font-size: 11pt; line-height: 1.5; padding-top: 14mm; }
.eyebrow { font-size: 9pt; font-weight: 500; letter-spacing: .09em; margin: 0 0 3mm; color: #555; }
.worksheet-body h2 { font-size: 21pt; line-height: 1.16; font-weight: 600; margin: 0 0 6mm; max-width: 160mm; }
.worksheet-body h3 { font-size: 14pt; font-weight: 600; margin: 10mm 0 4mm; }
.worksheet-body p { margin: 0 0 4mm; }.worksheet-body ol { padding-left: 7mm; margin: 0; }.worksheet-body li { padding-left: 2mm; margin-bottom: 3mm; }
.important { border-left: 1mm solid #111; padding: 2mm 0 2mm 5mm; margin-top: 8mm; }.important p { margin: 2mm 0 0; }.check { margin-top: 8mm !important; }
@media (max-width: 700px) { .worksheet-page { padding: 16px; } }
</style>
