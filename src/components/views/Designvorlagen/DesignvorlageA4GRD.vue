<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
import GrdA4Header from './GrdA4Header.vue'
import antonFont from '../../../assets/fonts/Anton-Regular.ttf?url'

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
    const [{ jsPDF }, response] = await Promise.all([import('jspdf'), fetch(antonFont)])
    if (!response.ok) throw new Error('Schrift nicht verfügbar.')
    const bytes = new Uint8Array(await response.arrayBuffer())
    let binary = ''
    for (const byte of bytes) binary += String.fromCharCode(byte)
    const logo = new Image()
    logo.src = '/designvorlagen/chs.svg'
    await logo.decode()
    const canvas = document.createElement('canvas')
    canvas.width = 640; canvas.height = 220
    const context = canvas.getContext('2d')
    if (!context) throw new Error('Logo nicht verfügbar.')
    context.drawImage(logo, 0, 0, canvas.width, canvas.height)
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    pdf.setProperties({ title: 'Designvorlage A4 · 3BKGD1_1_GRD' })
    pdf.addFileToVFS('Anton-Regular.ttf', btoa(binary))
    pdf.addFont('Anton-Regular.ttf', 'Anton', 'normal')
    pdf.setTextColor(0, 0, 0)
    pdf.setFont('Anton', 'normal'); pdf.setFontSize(14)
    pdf.text('BERUFSKOLLEG GRAFIKDESIGN', 12, 15.5)
    pdf.setFont('times', 'bold'); pdf.setFontSize(9)
    pdf.text('Grafikdesign Schuljahr 1 | chs', 12, 20)
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 95, 11.8, 20, 6.875)
    pdf.text('Heckel', 198, 20, { align: 'right' })
    pdf.setDrawColor(0, 0, 0); pdf.setLineWidth(0.18); pdf.line(12, 22, 198, 22)
    pdf.save('Designvorlage_A4_3BKGD1_1_GRD.pdf')
  } catch {
    error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.'
  } finally { busy.value = false }
}
</script>

<template>
  <main class="design-template-page">
    <div class="screen-only">
      <RouterLink to="/">← Zur Startseite</RouterLink>
      <h1>Designvorlage A4 · 3BKGD1_1_GRD</h1>
      <div class="template-actions"><Button label="Als PDF herunterladen" :loading="busy" @click="downloadPdf" /></div>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <p class="preview-label">Vorschau · DIN A4, Hochformat · 210 × 297 mm</p>
    </div>
    <div ref="container" class="paper-container">
      <div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article ref="paper" class="a4-paper" :style="{ transform: `scale(${scale})` }" aria-label="A4-Vorlage für 3BKGD1_1_GRD">
          <GrdA4Header />
        </article>
      </div>
    </div>
  </main>
</template>
<style scoped>
.design-template-page { max-width: 1080px; margin: auto; padding: 32px; color: #202d32; font-family: 'Jost', sans-serif; }
.design-template-page a { color: #176746; }
h1 { font-size: 28px; font-weight: 500; margin: 24px 0; }
.template-actions { display: flex; gap: 12px; margin: 20px 0; }
.preview-label { font-size: 14px; color: #647168; margin: 24px 0 12px; }
.paper-container { width: 100%; max-width: 210mm; }
.paper-frame { position: relative; }
.a4-paper { width: 210mm; height: 297mm; padding: 10mm 12mm 8mm; box-sizing: border-box; transform-origin: top left; background: #fff; color: #000; box-shadow: 0 2px 18px #0002; }
@media (max-width: 700px) { .design-template-page { padding: 16px; } }
</style>
