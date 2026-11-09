<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
import regularFont from '../../../assets/fonts/Jost-Regular.ttf?url'
import mediumFont from '../../../assets/fonts/Jost-Medium.ttf?url'

const subject = 'GESTALTUNGS- UND MEDIENTECHNIK'
const byline = 'Eingangsklasse | CHS | Heckel'
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
async function fontData(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('Schrift nicht verfügbar.')
  let binary = ''
  for (const byte of new Uint8Array(await response.arrayBuffer())) binary += String.fromCharCode(byte)
  return btoa(binary)
}
async function downloadPdf() {
  if (busy.value) return
  busy.value = true; error.value = ''
  try {
    const [{ jsPDF }, regular, medium] = await Promise.all([
      import('jspdf'), fontData(regularFont), fontData(mediumFont)
    ])
    const logo = new Image()
    logo.src = '/designvorlagen/chs.svg'
    await logo.decode()
    const canvas = document.createElement('canvas')
    canvas.width = 640; canvas.height = 220
    canvas.getContext('2d').drawImage(logo, 0, 0, 640, 220)
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    pdf.setProperties({ title: 'Designvorlage A4 · 3TGG1/2' })
    pdf.addFileToVFS('Jost-Regular.ttf', regular); pdf.addFont('Jost-Regular.ttf', 'Jost', 'normal')
    pdf.addFileToVFS('Jost-Medium.ttf', medium); pdf.addFont('Jost-Medium.ttf', 'Jost', 'bold')
    pdf.setTextColor(32, 45, 50)
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 88, 10, 34, 34 * 22 / 64)
    pdf.setFont('Jost', 'bold'); pdf.setFontSize(11.25)
    pdf.text(subject, 105, 28.5, { align: 'center' })
    pdf.setFont('Jost', 'normal'); pdf.setFontSize(9)
    pdf.text(byline, 105, 34, { align: 'center' })
    pdf.setDrawColor(171, 179, 181); pdf.setLineWidth(.2); pdf.line(12, 39, 198, 39)
    pdf.setDrawColor(211, 218, 214); pdf.line(12, 281, 198, 281)
    pdf.setFontSize(7.5)
    pdf.text('3TGG1/2 · Gestaltungs- und Medientechnik', 12, 287)
    pdf.text('1 / 1', 198, 287, { align: 'right' })
    pdf.save('Designvorlage_A4_3TGG1_2.pdf')
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>

<template>
  <main class="design-template-page">
    <div class="screen-only">
      <RouterLink to="/">← Zur Startseite</RouterLink>
      <h1>Designvorlage A4 · 3TGG1/2</h1>
      <div class="template-actions"><Button label="Als PDF herunterladen" :loading="busy" @click="downloadPdf" /></div>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <p class="preview-label">Vorschau · DIN A4, Hochformat · 210 × 297 mm</p>
    </div>
    <div ref="container" class="paper-container">
      <div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article ref="paper" class="a4-paper" :style="{ transform: `scale(${scale})` }" aria-label="A4-Vorlage mit CHS-Kopfzeile">
          <header class="worksheet-header">
            <img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" />
            <h2>{{ subject }}</h2>
            <p>{{ byline }}</p>
          </header>
          <div class="worksheet-body"></div>
          <footer class="worksheet-footer"><span>3TGG1/2 · Gestaltungs- und Medientechnik</span><span>1 / 1</span></footer>
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
.a4-paper { display: flex; flex-direction: column; width: 210mm; height: 297mm; padding: 10mm 12mm 8mm; box-sizing: border-box; transform-origin: top left; background: #fff; color: #202d32; box-shadow: 0 2px 18px #0002; font-family: 'Jost', sans-serif; }
.worksheet-header { text-align: center; border-bottom: 1px solid #abb3b5; padding-bottom: 13px; }
.worksheet-header img { display: block; width: 128px; height: 44px; margin: 0 auto 9px; }
.worksheet-header h2 { font-size: 15px; font-weight: 600; letter-spacing: .05em; line-height: 1.4; margin: 0 0 3px; }
.worksheet-header p { font-size: 12px; margin: 0; }
.worksheet-body { flex: 1; }
.worksheet-footer { display: flex; justify-content: space-between; gap: 12px; padding-top: 12px; border-top: 1px solid #d3dad6; font-size: 10px; }
@media (max-width: 700px) { .design-template-page { padding: 16px; } }
</style>
