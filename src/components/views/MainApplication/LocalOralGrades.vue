<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Message from 'primevue/message'
import Select from 'primevue/select'
import { gradeStorageKey, localDate, validGradeDate, parseGrades, mergeGrades, serializeGrades, gradeType } from './localOralGrades'

const props = defineProps({ classroom: { type: Object, required: true } })
const entries = ref([])
const error = ref('')
const status = ref('')
const fileDirty = ref(false)
const writing = ref(false)
const fileBusy = ref(false)
const browserSaved = ref(true)
const fileLoaded = ref(false)
const importInput = ref(null)
const student = ref(null)
const editorOpen = ref(false)
const editingId = ref(null)
const date = ref(localDate())
const grade = ref('')
const type = ref('oral')
const gradeTypes = [{ label: 'Mündlich', value: 'oral' }, { label: 'Schriftlich', value: 'written' }]
const note = ref('')
const formError = ref('')
let fileRevision = null
let cacheReadable = true
const endpoint = `/__local-noten/${encodeURIComponent(props.classroom.id)}`
const fileName = `local-noten/Noten_${props.classroom.id}.json`
const studentEntries = computed(() => entries.value.filter(entry => !entry.deleted && entry.studentId === String(student.value?.id)).sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt - a.updatedAt))
const snapshot = () => serializeGrades(props.classroom.id, props.classroom.title, props.classroom.students, entries.value)
try {
  const cached = localStorage.getItem(gradeStorageKey(props.classroom.id))
  if (cached) entries.value = parseGrades(cached, props.classroom.id)
} catch { browserSaved.value = false; cacheReadable = false }
function cache() {
  if (!cacheReadable) return
  try { localStorage.setItem(gradeStorageKey(props.classroom.id), snapshot()); browserSaved.value = true }
  catch { browserSaved.value = false }
}
function changed() { cache(); fileDirty.value = true }
async function request(options = {}) {
  const response = await fetch(endpoint, { cache: 'no-store', ...options })
  const data = await response.json()
  if (!response.ok) throw new Error(data.error || 'Lokale Speicherung fehlgeschlagen.')
  return data
}
async function loadDisk() {
  if (fileBusy.value || writing.value) return
  fileBusy.value = true; error.value = ''
  try {
    const data = await request()
    const imported = parseGrades(JSON.stringify({ format: 'school-oral-grades', version: 1, classId: props.classroom.id, entries: data.entries }), props.classroom.id)
    entries.value = mergeGrades(entries.value, imported)
    fileRevision = data.revision
    fileLoaded.value = true; cacheReadable = true; cache()
    fileDirty.value = JSON.stringify(entries.value) !== JSON.stringify(imported)
    status.value = data.revision === null ? 'Die Datei wird beim ersten Speichern angelegt.' : 'Notendatei aus dem Schule-Ordner geladen.'
  } catch (reason) { error.value = reason.message || 'Die lokale Notendatei konnte nicht geladen werden.' }
  finally { fileBusy.value = false }
}
async function saveDisk() {
  if (writing.value || fileBusy.value) return
  if (!fileLoaded.value) { error.value = 'Bitte zuerst den Dateistand laden. Die bestehende Datei wird nicht überschrieben.'; return }
  writing.value = true; error.value = ''
  try {
    const data = await request({ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...JSON.parse(snapshot()), revision: fileRevision }) })
    fileRevision = data.revision
    fileDirty.value = false
    status.value = `Im Schule-Ordner gespeichert: ${fileName}`
  } catch (reason) { fileDirty.value = true; error.value = reason.message || 'Die Datei konnte nicht gespeichert werden.' }
  finally { writing.value = false }
}
async function importFile(event) {
  if (writing.value || fileBusy.value) return
  const file = event.target.files?.[0]
  if (!file) return
  error.value = ''; fileBusy.value = true
  try {
    if (file.size > 20 * 1024 * 1024) throw new Error('Die Notendatei darf maximal 20 MB groß sein.')
    entries.value = mergeGrades(entries.value, parseGrades(await file.text(), props.classroom.id))
    cacheReadable = true; changed()
    status.value = 'Noten importiert. Mit „Speichern“ in den Schule-Ordner übernehmen.'
  } catch (reason) { error.value = reason.message }
  finally { event.target.value = ''; fileBusy.value = false }
}
async function saveBackup() {
  if (fileBusy.value || writing.value || !cacheReadable) return
  const contents = snapshot()
  const now = new Date()
  const time = [now.getHours(), now.getMinutes(), now.getSeconds()].map(value => String(value).padStart(2, '0')).join('-')
  const filename = `Noten_${props.classroom.id}_Sicherung_${localDate()}_${time}.json`
  fileBusy.value = true; error.value = ''
  try {
    if (typeof window.showSaveFilePicker === 'function') {
      const file = await window.showSaveFilePicker({ suggestedName: filename, types: [{ description: 'Notensicherung', accept: { 'application/json': ['.json'] } }] })
      const writable = await file.createWritable()
      try { await writable.write(contents); await writable.close() }
      catch (reason) { await writable.abort().catch(() => {}); throw reason }
      status.value = `Sicherungskopie gespeichert: ${file.name}`
    } else {
      const url = URL.createObjectURL(new Blob([contents], { type: 'application/json' }))
      const link = document.createElement('a')
      link.href = url; link.download = filename
      document.body.append(link); link.click(); link.remove()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
      status.value = 'Download der Sicherungskopie gestartet.'
    }
  } catch (reason) { if (reason.name !== 'AbortError') error.value = reason.message || 'Die Sicherungskopie konnte nicht gespeichert werden.' }
  finally { fileBusy.value = false }
}
function show(person, category = 'oral') {
  student.value = person
  type.value = category
  editingId.value = null; date.value = localDate(); grade.value = ''; note.value = ''; formError.value = ''
  editorOpen.value = true
}
function edit(entry) {
  type.value = gradeType(entry)
  editingId.value = entry.id; date.value = entry.date; grade.value = entry.grade; note.value = entry.note; formError.value = ''
}
async function saveGrade() {
  if (writing.value || fileBusy.value) return
  if (!cacheReadable) { formError.value = 'Bitte zuerst eine vorhandene Notendatei öffnen, damit der Browserstand wiederhergestellt werden kann.'; return }
  if (!validGradeDate(date.value) || !grade.value.trim() || grade.value.trim().length > 20 || note.value.length > 2000) { formError.value = 'Bitte ein gültiges Datum und eine Note eingeben.'; return }
  const previous = entries.value.find(entry => entry.id === editingId.value)
  const entry = { id: previous?.id || crypto.randomUUID(), studentId: String(student.value.id), date: date.value, type: type.value, grade: grade.value.trim(), note: note.value.trim(), updatedAt: Math.max(Date.now(), (previous?.updatedAt || 0) + 1), deleted: false }
  entries.value = previous ? entries.value.map(item => item.id === entry.id ? entry : item) : [...entries.value, entry]
  changed()
  await saveDisk()
  editingId.value = null; grade.value = ''; note.value = ''; formError.value = ''
}
async function remove(entry) {
  if (writing.value || fileBusy.value) return
  entries.value = entries.value.map(item => item.id === entry.id ? { ...item, deleted: true, updatedAt: Math.max(Date.now(), item.updatedAt + 1) } : item)
  if (editingId.value === entry.id) { editingId.value = null; grade.value = ''; note.value = '' }
  changed()
  await saveDisk()
}
function beforeUnload(event) {
  if (writing.value || fileDirty.value || !browserSaved.value) { event.preventDefault(); event.returnValue = '' }
}
window.addEventListener('beforeunload', beforeUnload)
onBeforeUnmount(() => window.removeEventListener('beforeunload', beforeUnload))
onMounted(loadDisk)
defineExpose({ show, entries })
</script>

<template>
  <section class="local-grades" aria-label="Lokale Noten">
    <strong>Mündliche und schriftliche Noten · nur auf diesem Rechner</strong>
    <p>Speicherort im Schule-Ordner: <code>{{ fileName }}</code></p>
    <div class="file-actions">
      <Button label="Speichern" size="small" :loading="writing" :disabled="fileBusy || !fileLoaded" @click="saveDisk" />
      <Button label="Sicherungskopie speichern" outlined size="small" :disabled="fileBusy || writing || !cacheReadable" @click="saveBackup" />
      <Button label="Dateistand laden" outlined size="small" :loading="fileBusy" :disabled="writing" @click="loadDisk" />
      <Button label="Notendatei importieren" text size="small" :disabled="fileBusy || writing" @click="importInput.click()" />
      <input ref="importInput" type="file" accept=".json,application/json" hidden @change="importFile" />
    </div>
    <p role="status">{{ fileDirty ? 'Änderungen noch nicht in der Datei gespeichert.' : fileLoaded ? 'Dateistand aktuell.' : 'Datei wird geladen …' }} {{ browserSaved ? 'Browserkopie vorhanden.' : 'Browserkopie nicht verfügbar.' }}</p>
    <p v-if="status" role="status">{{ status }}</p>
    <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
    <Dialog v-model:visible="editorOpen" modal :header="`Noten · ${student?.name || ''}`" :style="{ width: '38rem', maxWidth: 'calc(100vw - 2rem)' }">
      <form class="grade-form" @submit.prevent="saveGrade">
        <label for="grade-type">Notenart</label><Select input-id="grade-type" v-model="type" :options="gradeTypes" option-label="label" option-value="value" />
        <label for="oral-grade-date">Datum</label><InputText id="oral-grade-date" v-model="date" type="date" required />
        <label for="oral-grade-value">Note / Punkte</label><InputText id="oral-grade-value" v-model="grade" placeholder="z. B. 2+, 2,5 oder 12 Punkte" maxlength="20" required />
        <label for="oral-grade-note">Bemerkung (optional)</label><Textarea id="oral-grade-note" v-model="note" rows="2" maxlength="2000" />
        <Message v-if="formError" severity="error" :closable="false">{{ formError }}</Message>
        <div class="file-actions"><Button label="Speichern" type="submit" :loading="writing" :disabled="fileBusy || !fileLoaded" /><Button v-if="editingId" label="Abbrechen" text @click="editingId = null; grade = ''; note = ''" /></div>
      </form>
      <p v-if="!studentEntries.length">Noch keine Noten eingetragen.</p>
      <ul v-else class="grade-history">
        <li v-for="entry in studentEntries" :key="entry.id">
          <div><span>{{ gradeType(entry) === 'written' ? 'Schriftlich' : 'Mündlich' }}</span> · <time :datetime="entry.date">{{ new Date(entry.date + 'T12:00:00').toLocaleDateString('de-DE') }}</time> · <strong>{{ entry.grade }}</strong><p v-if="entry.note">{{ entry.note }}</p></div>
          <div class="file-actions"><Button label="Bearbeiten" text size="small" @click="edit(entry)" /><Button label="Entfernen" text severity="danger" size="small" :disabled="writing || fileBusy" @click="remove(entry)" /></div>
        </li>
      </ul>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <p role="status">{{ writing ? 'Notendatei wird im Schule-Ordner gespeichert …' : fileDirty ? 'Änderungen noch nicht in der Datei gespeichert.' : 'Änderungen gespeichert.' }}</p>
    </Dialog>
  </section>
</template>

<style scoped>
.local-grades { margin: 20px 0; padding: 16px; border: 1px solid #dce3dd; border-radius: 8px; background: #f4f7f3; }
.local-grades p { font-size: 14px; }
.file-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.grade-form { display: grid; gap: 8px; }
.grade-form .file-actions { margin: 8px 0; }
.grade-history { list-style: none; margin: 20px 0 0; padding: 0; }
.grade-history li { padding: 12px 0; border-top: 1px solid #dce3dd; }
.grade-history p { white-space: pre-wrap; overflow-wrap: anywhere; margin: 6px 0; }
</style>
