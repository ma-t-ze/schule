<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Message from 'primevue/message'

const props = defineProps({ src: { type: String, required: true }, title: { type: String, required: true } })
const container = ref(null)
const pages = ref([])
const loading = ref(true)
const error = ref('')
let documentTask
let pdf
let observer
let generation = 0
let resizeTimer
let renderTasks = []

async function drawPages(version) {
  if (!pdf || !container.value) return
  renderTasks.forEach(task => task.cancel())
  renderTasks = []
  const width = Math.max(200, Math.min(1100, container.value.clientWidth - 32))
  for (let index = 0; index < pdf.numPages; index++) {
    if (version !== generation) return
    const page = await pdf.getPage(index + 1)
    if (version !== generation) return
    const canvas = container.value.querySelector(`[data-pdf-page="${index + 1}"]`)
    if (!canvas) continue
    const scale = width / page.getViewport({ scale: 1 }).width
    const viewport = page.getViewport({ scale })
    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(viewport.width * ratio)
    canvas.height = Math.floor(viewport.height * ratio)
    canvas.style.width = `${viewport.width}px`
    canvas.style.height = `${viewport.height}px`
    const task = page.render({ canvasContext: canvas.getContext('2d'), viewport, transform: [ratio, 0, 0, ratio, 0, 0] })
    renderTasks.push(task)
    try { await task.promise } catch (reason) { if (reason?.name !== 'RenderingCancelledException') throw reason }
  }
}
async function load() {
  const version = ++generation
  clearTimeout(resizeTimer)
  renderTasks.forEach(task => task.cancel())
  renderTasks = []
  if (documentTask) documentTask.destroy()
  pdf = null
  pages.value = []
  loading.value = true
  error.value = ''
  try {
    const [pdfjs, worker] = await Promise.all([import('pdfjs-dist'), import('pdfjs-dist/build/pdf.worker.min.mjs?url')])
    if (version !== generation) return
    pdfjs.GlobalWorkerOptions.workerSrc = worker.default
    documentTask = pdfjs.getDocument({ url: props.src, isEvalSupported: false })
    const loaded = await documentTask.promise
    if (version !== generation) return
    pdf = loaded
    pages.value = Array.from({ length: pdf.numPages }, (_, index) => index + 1)
    await nextTick()
    await drawPages(version)
    if (version === generation) loading.value = false
  } catch (reason) {
    if (version !== generation) return
    error.value = 'Das PDF konnte nicht geladen werden. Öffne es über den Link in einem neuen Tab.'
    loading.value = false
  }
}
onMounted(() => {
  observer = new ResizeObserver(() => {
    clearTimeout(resizeTimer)
    if (pdf) resizeTimer = setTimeout(() => { drawPages(generation).catch(() => { error.value = 'Die PDF-Vorschau konnte nicht dargestellt werden.' }) }, 150)
  })
  observer.observe(container.value)
  load()
})
watch(() => props.src, load)
onBeforeUnmount(() => { generation++; clearTimeout(resizeTimer); observer?.disconnect(); renderTasks.forEach(task => task.cancel()); documentTask?.destroy() })
</script>

<template>
  <div ref="container" class="pdf-viewer" :aria-label="`PDF-Vorschau: ${title}`" tabindex="0">
    <p v-if="loading" class="pdf-status" role="status">PDF wird geladen …</p>
    <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
    <canvas v-for="page in pages" :key="page" :data-pdf-page="page" :aria-label="`${title}, Seite ${page} von ${pages.length}`" role="img" />
  </div>
</template>

<style scoped>
.pdf-viewer { max-height: 80vh; min-height: 450px; overflow: auto; background: var(--school-background); border: 1px solid var(--school-border); padding: 16px 0; box-sizing: border-box; }
.pdf-viewer canvas { display: block; max-width: 100%; margin: 0 auto 16px; background: white; box-shadow: 0 2px 8px #0002; }
.pdf-status { text-align: center; color: var(--school-text); }
</style>
