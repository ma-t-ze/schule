<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import Dialog from 'primevue/dialog'
const props = defineProps({
  classKey: { type: String, required: true },
  className: { type: String, required: true }
})
const endpoint = import.meta.env.DEV ? '/site-auth/exam-accommodations.php' : '/exam-accommodations.php'
const entries = ref([])
const expanded = ref(false)
const busy = ref(false)
const error = ref('')
const status = ref('')
const previewOpen = ref(false)
const previewUrl = ref('')
const previewName = ref('')
const previewLoading = ref(false)
let previewRequest
function closePreview() {
  previewRequest?.abort()
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = ''
}
async function showPdf(entry) {
  closePreview()
  const controller = new AbortController()
  previewRequest = controller
  previewName.value = entry.student_name
  previewOpen.value = true; previewLoading.value = true; error.value = ''
  try {
    const response = await fetch(`${endpoint}?class_key=${encodeURIComponent(props.classKey)}&id=${entry.id}`, { credentials: 'include', cache: 'no-store', signal: controller.signal })
    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      throw new Error(data.error || 'PDF konnte nicht geladen werden.')
    }
    const bytes = await response.arrayBuffer()
    if (new TextDecoder().decode(bytes.slice(0, 5)) !== '%PDF-') throw new Error('Der Server liefert keine gültige PDF.')
    if (!controller.signal.aborted) previewUrl.value = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }))
  } catch (e) {
    if (e.name !== 'AbortError') { error.value = e.message; previewOpen.value = false }
  } finally { if (previewRequest === controller) previewLoading.value = false }
}
onBeforeUnmount(closePreview)
let csrf = ''
async function request(url, options = {}) {
  const response = await fetch(url, { credentials: 'include', cache: 'no-store', ...options })
  let data
  try { data = await response.json() } catch { throw new Error('Bitte die Nachteilsausgleich-API auf STRATO einrichten.') }
  if (!response.ok) throw new Error(data.error || 'Speichern fehlgeschlagen.')
  return data
}
async function load() {
  busy.value = true; error.value = ''
  try {
    const data = await request(`${endpoint}?class_key=${encodeURIComponent(props.classKey)}`)
    if (!Array.isArray(data.items) || typeof data.csrf !== 'string') throw new Error('Ungültige API-Antwort.')
    if (data.items.some(entry => typeof entry.comment !== 'string')) throw new Error('Kommentare sind noch nicht verfügbar. Bitte die Website aktualisieren.')
    entries.value = data.items; csrf = data.csrf
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function add() {
  entries.value.push({ id: 0, student_name: '', has_pdf: false, revision: 0, comment: '' })
  status.value = ''
}
async function save(entry, action = 'save') {
  if (action === 'delete' && !entry.id) { entries.value.splice(entries.value.indexOf(entry), 1); return }
  if (action === 'save' && !entry.student_name.trim()) { error.value = 'Bitte einen Namen eingeben.'; return }
  busy.value = true; error.value = ''; status.value = ''
  try {
    const body = new FormData()
    for (const [key, value] of Object.entries({ class_key: props.classKey, id: entry.id, revision: entry.revision, student_name: entry.student_name, comment: entry.comment, action })) body.append(key, String(value))
    await request(endpoint, { method: 'POST', headers: { 'X-CSRF-Token': csrf }, body })
    await load(); status.value = action === 'delete' ? 'Eintrag gelöscht.' : 'Name und Kommentar gespeichert.'
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
onMounted(load)
</script>
<template>
  <div class="accommodations">
    <Button
      class="accommodation-trigger" label="N" outlined size="small"
      :aria-label="`Nachteilsausgleiche für ${className} öffnen`"
      :title="`Nachteilsausgleiche · ${className}`"
      aria-haspopup="dialog" :aria-expanded="expanded"
      :aria-controls="`${classKey}-accommodations`"
      @click="expanded = true"
    />
    <Dialog
      v-model:visible="expanded" :id="`${classKey}-accommodations`"
      :header="`Nachteilsausgleiche · ${className}`" modal
      :closable="!busy" :close-on-escape="!busy"
      :style="{ width: '36rem', maxWidth: 'calc(100vw - 2rem)' }"
    >
    <div class="accommodation-content">
    <p v-if="error" role="alert">{{ error }}</p>
    <div v-for="(entry, index) in entries" :key="entry.id || `new-${index}`" class="person">
      <label :for="`${classKey}-person-${index}`">Name</label>
      <InputText :id="`${classKey}-person-${index}`" v-model="entry.student_name" maxlength="150" :disabled="busy" @input="status = ''" />
      <label :for="`${classKey}-comment-${index}`">Kommentar</label>
      <Textarea :id="`${classKey}-comment-${index}`" v-model="entry.comment" class="accommodation-comment" rows="3" maxlength="10000" :disabled="busy" @input="status = ''" />
      <Button v-if="entry.has_pdf" label="PDF anzeigen" text size="small" @click="showPdf(entry)" />
      <div class="actions"><Button label="Speichern" outlined size="small" :disabled="busy" @click="save(entry)" /><Button label="Entfernen" text severity="danger" size="small" :disabled="busy" @click="save(entry, 'delete')" /></div>
    </div>
    <Button label="Name hinzufügen" text size="small" :disabled="busy || !!error" @click="add" />
    <Button v-if="error" label="Neu laden" text size="small" :disabled="busy" @click="load" />
    <span role="status">{{ busy ? 'Wird geladen / gespeichert …' : status }}</span>
    </div>
    </Dialog>
    <Dialog v-model:visible="previewOpen" :header="`PDF · ${previewName}`" modal maximizable :style="{ width: 'min(70rem, 95vw)' }" @hide="closePreview">
      <p v-if="previewLoading" role="status">PDF wird geladen …</p>
      <iframe v-if="previewUrl" :src="previewUrl" :title="`Nachteilsausgleich – ${previewName}`" class="pdf-preview" />
    </Dialog>
  </div>
</template>
<style scoped>
.accommodations { display: inline-flex; flex-shrink: 0; }
.accommodation-trigger { width: 1.75rem; height: 1.75rem; padding: 0; border: 1px solid #176746; border-radius: 5px; color: #176746; background: transparent; font-weight: 600; }
.accommodation-trigger:hover { color: #115033; border-color: #115033; background: #e8f2ec; }
.accommodation-content { padding: .5rem 0; }
.person { display: flex; flex-direction: column; align-items: flex-start; gap: .5rem; margin-bottom: 1rem; }
.person > input { width: 100%; }
.accommodation-comment { width: 100%; box-sizing: border-box; height: calc(6rem + 2px); min-height: calc(6rem + 2px); max-height: calc(6rem + 2px); line-height: 1.5rem; padding: .75rem; overflow-y: auto; resize: none; }
input { max-width: 100%; min-width: 0; box-sizing: border-box; }
.pdf-preview { display: block; width: 100%; height: 75vh; border: 0; }
.actions { display: flex; flex-wrap: wrap; gap: .4rem; }
[role="alert"] { color: #b42318; }
[role="status"] { display: block; font-size: .85rem; }
</style>
