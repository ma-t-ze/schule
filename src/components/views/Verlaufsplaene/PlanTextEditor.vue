<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import Button from 'primevue/button'
import { cleanTextHtml, collectBlocks, validBlocks } from './planEditing'
const props = defineProps({ root: { type: Object, required: true }, topic: { type: String, required: true }, mode: { type: String, required: true } })
const emit = defineEmits(['lock'])
const editing = ref(false), dirty = ref(false), busy = ref(false), ready = ref(false), error = ref(''), status = ref(''), unmatched = ref(0)
const endpoint = import.meta.env.DEV ? '/site-auth/lesson-documents.php' : '/lesson-documents.php'
const fileInput = ref(null)
let blocks = [], saved = [], imported = null, revision = 0, csrf = '', loadingPromise = Promise.resolve()
const docKey = computed(() => `${props.topic}-${props.mode}`)
async function request(options = {}) {
  const response = await fetch(endpoint + (options.method ? '' : `?document_key=${encodeURIComponent(docKey.value)}`), { credentials: 'include', cache: 'no-store', ...options })
  let data
  try { data = await response.json() } catch { throw new Error('Textspeicherung noch nicht eingerichtet. Bitte lesson-documents.php und lesson-documents.sql auf STRATO einrichten.') }
  if (!response.ok) throw new Error(data.error || 'Laden oder Speichern fehlgeschlagen.')
  return data
}
function apply(entries) {
  const map = new Map(entries.map(block => [block.key, block]))
  let count = 0
  for (const block of blocks) {
    const entry = map.get(block.key)
    block.el.innerHTML = entry?.base === block.base ? cleanTextHtml(entry.html) : block.original
    if (entry?.base === block.base) {
      count++
      const scopeAttributes = block.el.getAttributeNames().filter(name => name.startsWith('data-v-'))
      for (const child of block.el.querySelectorAll('*')) for (const name of scopeAttributes) child.setAttribute(name, '')
    }
  }
  unmatched.value = entries.length - count
}
async function load() {
  busy.value = true; error.value = ''; status.value = ''
  try {
    const data = await request()
    if (!validBlocks(data.blocks) || !Number.isInteger(data.revision) || typeof data.csrf !== 'string') throw new Error('Ungültiger Dokumentstand.')
    saved = data.blocks; revision = data.revision; csrf = data.csrf
    apply(saved); ready.value = true
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function setEditing(value) {
  editing.value = value
  emit('lock', value)
  for (const { el } of blocks) {
    if (value) { el.setAttribute('contenteditable', 'true'); el.setAttribute('spellcheck', 'true'); el.dataset.planEditable = '' }
    else { el.removeAttribute('contenteditable'); el.removeAttribute('spellcheck'); delete el.dataset.planEditable }
  }
}
function markDirty() { dirty.value = true; status.value = '' }
function onPaste(event) {
  if (!editing.value || !event.target.closest('[data-plan-editable]')) return
  event.preventDefault()
  // Paste text only; existing document formatting remains under our control.
  document.execCommand('insertText', false, event.clipboardData.getData('text/plain'))
  markDirty()
}
function current() {
  const known = new Set(blocks.map(block => block.key))
  const entries = (imported || saved).filter(block => !known.has(block.key))
  for (const block of blocks) {
    const html = cleanTextHtml(block.el.innerHTML)
    if (html !== block.base) entries.push({ key: block.key, base: block.base, html })
  }
  return entries
}
async function save() {
  busy.value = true; error.value = ''; status.value = ''
  try {
    const entries = current()
    const data = await request({ method: 'POST', headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf }, body: JSON.stringify({ document_key: docKey.value, blocks: entries, revision }) })
    if (!Number.isInteger(data.revision)) throw new Error('Ungültige Speicherantwort.')
    saved = entries; imported = null; revision = data.revision; apply(saved); dirty.value = false; setEditing(false); status.value = 'Auf STRATO gespeichert.'
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function cancel() {
  if (dirty.value && !window.confirm('Ungespeicherte Änderungen verwerfen?')) return
  imported = null; apply(saved); dirty.value = false; setEditing(false); status.value = ''
}
function backup() {
  const data = { format: 'schule-lesson-text-v1', document_key: docKey.value, blocks: current(), text: props.root.innerText }
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }))
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = `${docKey.value}-text.json`; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
}
async function importFile(event) {
  const file = event.target.files?.[0]; event.target.value = ''
  if (!file) return
  try {
    if (file.size > 1500000) throw new Error('Die Datei ist zu groß.')
    const data = JSON.parse(await file.text())
    if (data.format !== 'schule-lesson-text-v1' || data.document_key !== docKey.value || !validBlocks(data.blocks)) throw new Error('Diese Datei gehört nicht zu diesem Dokument oder hat ein ungültiges Format.')
    if (dirty.value && !window.confirm('Aktuellen Entwurf durch die Datei ersetzen?')) return
    // Keep source entries that no longer match the current template for review/export.
    imported = data.blocks
    error.value = ''; apply(imported); setEditing(true); markDirty(); status.value = 'Datei übernommen. Bitte prüfen und speichern.'
  } catch (e) { error.value = e.message }
}
function beforeUnload(event) { if (dirty.value) { event.preventDefault(); event.returnValue = '' } }
onBeforeRouteLeave(() => !dirty.value || window.confirm('Ungespeicherte Änderungen verwerfen und die Seite verlassen?'))
onMounted(() => {
  loadingPromise = (async () => {
    await nextTick(); blocks = collectBlocks(props.root)
    props.root.addEventListener('input', markDirty); props.root.addEventListener('paste', onPaste)
    window.addEventListener('beforeunload', beforeUnload)
    await load()
  })()
})
onBeforeUnmount(() => {
  props.root.removeEventListener('input', markDirty); props.root.removeEventListener('paste', onPaste)
  window.removeEventListener('beforeunload', beforeUnload); setEditing(false)
})
defineExpose({ whenLoaded: () => loadingPromise })
</script>
<template>
  <section class="text-editor" aria-label="Dokument bearbeiten">
    <div class="editor-actions">
      <Button v-if="!editing" label="Text bearbeiten" outlined :disabled="!ready || busy" @click="setEditing(true)" />
      <template v-else>
        <Button label="Speichern" :loading="busy" @click="save" />
        <Button label="Abbrechen" text :disabled="busy" @click="cancel" />
      </template>
      <Button label="Textstand herunterladen" text :disabled="busy" @click="backup" />
      <Button label="Textstand importieren" text :disabled="!ready || busy" @click="fileInput.click()" />
      <input ref="fileInput" type="file" accept="application/json,.json" hidden @change="importFile">
      <Button v-if="error && !editing" label="Erneut laden" text :disabled="busy" @click="load" />
    </div>
    <p v-if="editing">Klicke direkt in einen Absatz, eine Überschrift oder eine Tabellenzelle. Änderungen mit „Speichern“ übernehmen.</p>
    <p v-if="dirty" role="status">Ungespeicherte Änderungen</p>
    <p v-else-if="status" role="status">{{ status }}</p>
    <p v-if="unmatched" role="alert">{{ unmatched }} gespeicherte Textstellen passen nicht mehr zur überarbeiteten Vorlage. Sie bleiben in der Sicherungsdatei erhalten. Bitte den Textstand herunterladen und gemeinsam prüfen.</p>
    <p v-if="error" role="alert">{{ error }}</p>
  </section>
</template>
<style scoped>
.text-editor { margin: 16px 0; font-size: .9rem; }
.editor-actions { display: flex; flex-wrap: wrap; gap: 8px; }
p { margin: 10px 0; }
[role="alert"] { color: #b42318; }
</style>
