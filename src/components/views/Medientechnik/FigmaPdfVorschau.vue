<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'

const props = defineProps({ src: { type: String, required: true } })
const viewport = ref(null)
const canvas = ref(null)
const pageNumber = ref(1)
const pageCount = ref(0)
const loading = ref(true)
const error = ref('')
let pdf
let loadingTask
let renderTask
let resizeObserver
let timer
let renderVersion = 0
let alive = true

async function renderPage() {
  if (!pdf || !viewport.value || !canvas.value) return
  const version = ++renderVersion
  if (renderTask) { renderTask.cancel(); try { await renderTask.promise } catch { /* cancelled */ } }
  try {
    const page = await pdf.getPage(pageNumber.value)
    if (!alive || version !== renderVersion) return
    const base = page.getViewport({ scale: 1 })
    const available = Math.max(1, viewport.value.clientWidth)
    const scale = available / base.width
    const view = page.getViewport({ scale })
    const ratio = Math.min(window.devicePixelRatio || 1, 2, 4096 / Math.max(view.width, view.height))
    canvas.value.width = Math.floor(view.width * ratio)
    canvas.value.height = Math.floor(view.height * ratio)
    canvas.value.style.width = `${view.width}px`
    canvas.value.style.height = `${view.height}px`
    renderTask = page.render({ canvasContext: canvas.value.getContext('2d'), viewport: view, transform: [ratio, 0, 0, ratio, 0, 0] })
    await renderTask.promise
    if (version === renderVersion) { loading.value = false; error.value = '' }
  } catch (reason) {
    if (!alive || version !== renderVersion || reason?.name === 'RenderingCancelledException') return
    loading.value = false
    error.value = 'Die PDF-Vorschau konnte nicht angezeigt werden. Öffne die Vorlage über den Link.'
  }
}
async function loadPdf() {
  try {
    const [pdfjs, worker] = await Promise.all([import('pdfjs-dist'), import('pdfjs-dist/build/pdf.worker.min.mjs?url')])
    if (!alive) return
    pdfjs.GlobalWorkerOptions.workerSrc = worker.default
    loadingTask = pdfjs.getDocument({ url: props.src, isEvalSupported: false })
    pdf = await loadingTask.promise
    if (!alive) return
    pageCount.value = pdf.numPages
    await nextTick()
    await renderPage()
  } catch {
    if (alive) { loading.value = false; error.value = 'Die PDF-Vorlage konnte nicht geladen werden.' }
  }
}
onMounted(() => {
  resizeObserver = new ResizeObserver(() => { clearTimeout(timer); timer = setTimeout(renderPage, 150) })
  resizeObserver.observe(viewport.value)
  loadPdf()
})
watch(pageNumber, () => { loading.value = true; renderPage() })
onBeforeUnmount(() => { alive = false; renderVersion++; clearTimeout(timer); resizeObserver?.disconnect(); renderTask?.cancel(); loadingTask?.destroy() })
</script>

<template>
  <div class="viewer">
    <div v-if="pageCount > 1" class="toolbar" aria-label="PDF-Werkzeuge"><div class="controls"><Button label="‹" size="small" outlined :disabled="pageNumber <= 1" aria-label="Vorherige Seite" @click="pageNumber--" /><span>Seite {{ pageNumber }} / {{ pageCount }}</span><Button label="›" size="small" outlined :disabled="pageNumber >= pageCount" aria-label="Nächste Seite" @click="pageNumber++" /></div></div>
    <div ref="viewport" class="viewport" aria-label="PDF-Vorlage"><p v-if="loading" class="status" role="status">PDF wird geladen …</p><Message v-if="error" severity="error" :closable="false">{{ error }}</Message><canvas ref="canvas" role="img" aria-label="PDF-Vorlage der Einkaufs-App" /></div>
  </div>
</template>

<style scoped>
.viewer { border: 1px solid #f3c2bf; border-radius: 10px; overflow: hidden; background: white; }
.toolbar { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding: 10px 12px; background: #fff7f6; border-bottom: 1px solid #f3c2bf; }
.controls { display: flex; align-items: center; gap: 10px; font-size: .9rem; }
.controls span { min-width: 46px; text-align: center; }
.viewport { width: 100%; box-sizing: border-box; background: white; }
.viewport canvas { display: block; max-width: 100%; height: auto; margin: 0 auto; background: white; }
.status { text-align: center; color: #755451; }
</style>
