<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import FileUpload from 'primevue/fileupload'
import Dialog from 'primevue/dialog'
const props = defineProps({ examKey: { type: String, required: true } })
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
    const response = await fetch(`${endpoint}?exam_key=${encodeURIComponent(props.examKey)}&id=${entry.id}`, { credentials: 'include', cache: 'no-store', signal: controller.signal })
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
    const data = await request(`${endpoint}?exam_key=${encodeURIComponent(props.examKey)}`)
    if (!Array.isArray(data.items) || typeof data.csrf !== 'string') throw new Error('Ungültige API-Antwort.')
    entries.value = data.items.map(entry => ({ ...entry, file: null })); csrf = data.csrf
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function add() {
  entries.value.push({ id: 0, student_name: '', has_pdf: false, revision: 0, file: null })
  status.value = ''
}
function selectFile(entry, event) {
  const file = event.files[0]
  if (file && (file.size > 5 * 1024 * 1024 || !file.name.toLowerCase().endsWith('.pdf'))) {
    error.value = 'Bitte eine PDF mit maximal 5 MB auswählen.'; entry.file = null; return
  }
  entry.file = file || null; status.value = ''; error.value = ''
}
async function save(entry, action = 'save') {
  if (action === 'delete' && !entry.id) { entries.value.splice(entries.value.indexOf(entry), 1); return }
  if (action === 'save' && !entry.student_name.trim()) { error.value = 'Bitte einen Namen eingeben.'; return }
  busy.value = true; error.value = ''; status.value = ''
  try {
    const body = new FormData()
    for (const [key, value] of Object.entries({ exam_key: props.examKey, id: entry.id, revision: entry.revision, student_name: entry.student_name, action })) body.append(key, String(value))
    if (entry.file) body.append('pdf', entry.file)
    await request(endpoint, { method: 'POST', headers: { 'X-CSRF-Token': csrf }, body })
    await load(); status.value = action === 'delete' ? 'Eintrag gelöscht.' : 'Name und PDF gespeichert.'
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
onMounted(load)
</script>
<template>
  <div class="accommodations">
    <Button label="Namen und PDFs" text size="small" :aria-expanded="expanded" :aria-controls="`${examKey}-accommodations`" @click="expanded = !expanded">
      <template #icon><svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" :style="{ transform: expanded ? 'rotate(90deg)' : undefined }"><path d="m4 2 4 4-4 4" stroke="currentColor" stroke-width="1.5" /></svg></template>
    </Button>
    <div v-show="expanded" :id="`${examKey}-accommodations`" class="accommodation-content">
    <p v-if="error" role="alert">{{ error }}</p>
    <div v-for="(entry, index) in entries" :key="entry.id || `new-${index}`" class="person">
      <label :for="`${examKey}-person-${index}`">Name</label>
      <InputText :id="`${examKey}-person-${index}`" v-model="entry.student_name" maxlength="150" :disabled="busy" @input="status = ''" />
      <FileUpload mode="basic" choose-label="PDF auswählen" accept="application/pdf" :max-file-size="5242880" :disabled="busy" custom-upload :auto="false" invalid-file-size-message="Die PDF darf maximal 5 MB groß sein." invalid-file-type-message="Bitte eine PDF auswählen." @select="selectFile(entry, $event)" />
      <Button v-if="entry.has_pdf" label="PDF anzeigen" text size="small" @click="showPdf(entry)" />
      <div class="actions"><Button label="Speichern" outlined size="small" :disabled="busy" @click="save(entry)" /><Button label="Entfernen" text severity="danger" size="small" :disabled="busy" @click="save(entry, 'delete')" /></div>
    </div>
    <Button label="Name hinzufügen" text size="small" :disabled="busy || !!error" @click="add" />
    <Button v-if="error" label="Neu laden" text size="small" :disabled="busy" @click="load" />
    <span role="status">{{ busy ? 'Wird geladen / gespeichert …' : status }}</span>
    </div>
    <Dialog v-model:visible="previewOpen" :header="`PDF · ${previewName}`" modal maximizable :style="{ width: 'min(70rem, 95vw)' }" @hide="closePreview">
      <p v-if="previewLoading" role="status">PDF wird geladen …</p>
      <iframe v-if="previewUrl" :src="previewUrl" :title="`Nachteilsausgleich – ${previewName}`" class="pdf-preview" />
    </Dialog>
  </div>
</template>
<style scoped>
.accommodations { width: 100%; padding-left: 1.8rem; box-sizing: border-box; }
.accommodation-content { padding: .5rem 0; }
.person { display: flex; flex-direction: column; align-items: flex-start; gap: .5rem; margin-bottom: 1rem; }
.person > input { width: 100%; }
input { max-width: 100%; min-width: 0; box-sizing: border-box; }
.pdf-preview { display: block; width: 100%; height: 75vh; border: 0; }
.actions { display: flex; flex-wrap: wrap; gap: .4rem; }
[role="alert"] { color: #b42318; }
[role="status"] { display: block; font-size: .85rem; }
</style>
