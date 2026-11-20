<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Message from 'primevue/message'
import { gradeStorageKey, localDate, validGradeDate, parseGrades, mergeGrades, serializeGrades, gradeType, gradesForStudent, weightedAverage } from './localOralGrades'

const props = defineProps({ classroom: { type: Object, required: true } })
const entries = ref([])
const error = ref('')
const status = ref('')
const fileDirty = ref(false)
const writing = ref(false)
const fileBusy = ref(false)
const browserSaved = ref(true)
const fileLoaded = ref(false)
const student = ref(null)
const editorOpen = ref(false)
const overviewOpen = ref(false)
const listOpen = ref(false)
const finalGrades = ref({})
const finalDraft = ref({})
const editingId = ref(null)
const date = ref(localDate())
const grade = ref('')
const type = ref('oral')
const gradeTypes = [{ label: 'Schriftlich', value: 'written' }, { label: 'Praktisch', value: 'practical' }, { label: 'Mündlich', value: 'oral' }]
const note = ref('')
const formError = ref('')
const weights = ref({ written: null, practical: null, oral: null })
const weightDraft = ref({ ...weights.value })
const weightsError = ref('')
const pdfBusy = ref(false)
let fileRevision = null
let cacheReadable = true
const endpoint = `/__local-noten/${encodeURIComponent(props.classroom.id)}`
const fileName = `local-noten/Noten_${props.classroom.id}.json`
const snapshot = () => serializeGrades(props.classroom.id, props.classroom.title, props.classroom.students, entries.value, weights.value, finalGrades.value)
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
    if (data.weights) weights.value = { ...data.weights }
    finalGrades.value = { ...(data.finalGrades || {}) }
    weightDraft.value = { ...weights.value }
    fileLoaded.value = true; cacheReadable = true; cache()
    fileDirty.value = JSON.stringify(entries.value) !== JSON.stringify(imported)
    status.value = data.revision === null ? 'Die Datei wird beim ersten Speichern angelegt.' : 'Notendatei aus dem Schule-Ordner geladen.'
  } catch (reason) { error.value = reason.message || 'Die lokale Notendatei konnte nicht geladen werden.' }
  finally { fileBusy.value = false }
}
async function saveWeights() {
  const values = gradeTypes.map(kind => weightDraft.value[kind.value])
  if (values.some(value => value === null || value === '' || !Number.isFinite(Number(value)) || Number(value) < 0 || Number(value) > 100) || Math.abs(values.reduce((sum, value) => sum + Number(value), 0) - 100) > 0.001) {
    weightsError.value = 'Bitte drei Werte zwischen 0 und 100 eingeben, die zusammen 100 % ergeben.'
    return
  }
  weights.value = Object.fromEntries(gradeTypes.map(kind => [kind.value, Number(weightDraft.value[kind.value])]))
  weightsError.value = ''
  changed()
  await saveDisk()
}
async function exportGrades() {
  pdfBusy.value = true; error.value = ''
  try {
    const { createGradesPdf } = await import('./gradesPdf')
    const pdf = await createGradesPdf({ classroom: props.classroom, entries: entries.value, weights: weights.value, finalGrades: finalGrades.value })
    pdf.save(`Notenliste_${props.classroom.id}.pdf`)
  } catch (reason) { error.value = reason.message || 'Die PDF-Datei konnte nicht erstellt werden.' }
  finally { pdfBusy.value = false }
}
function average(person) { return weightedAverage(entries.value, person.id, weights.value) }
function defaultFinal(person) { const value = average(person); return value === null ? '' : String(Math.round(value)) }
function openList() {
  finalDraft.value = Object.fromEntries(props.classroom.students.map(person => [String(person.id), finalGrades.value[person.id] ?? defaultFinal(person)]))
  listOpen.value = true
}
async function saveFinalGrades() {
  finalGrades.value = Object.fromEntries(props.classroom.students.flatMap(person => {
    const id = String(person.id)
    const value = String(finalDraft.value[id] ?? '').trim()
    return value && value !== defaultFinal(person) ? [[id, value]] : []
  }))
  changed()
  return await saveDisk()
}
async function exportList() { if (await saveFinalGrades()) await exportGrades() }
async function saveDisk() {
  if (writing.value || fileBusy.value) return
  if (!fileLoaded.value) { error.value = 'Die Notendatei konnte noch nicht geladen werden. Bitte die Seite erneut öffnen.'; return }
  writing.value = true; error.value = ''
  try {
    const data = await request({ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...JSON.parse(snapshot()), revision: fileRevision }) })
    fileRevision = data.revision
    fileDirty.value = false
    status.value = `Im Schule-Ordner gespeichert: ${fileName}`
    return true
  } catch (reason) { fileDirty.value = true; error.value = reason.message || 'Die Datei konnte nicht gespeichert werden.' }
  finally { writing.value = false }
}
function show(person, category, entry = null) {
  student.value = person
  type.value = category
  editingId.value = null; date.value = localDate(); grade.value = ''; note.value = ''; formError.value = ''
  if (entry) edit(entry)
  editorOpen.value = true
}
function showOverview(person) {
  student.value = person
  overviewOpen.value = true
}
function edit(entry) {
  type.value = gradeType(entry)
  editingId.value = entry.id; date.value = entry.date; grade.value = entry.grade; note.value = entry.note; formError.value = ''
}
async function saveGrade() {
  if (writing.value || fileBusy.value) return
  if (!cacheReadable) { formError.value = 'Der Browserstand konnte nicht gelesen werden. Bitte die Seite erneut öffnen.'; return }
  if (!validGradeDate(date.value) || !grade.value.trim() || grade.value.trim().length > 20 || note.value.length > 2000) { formError.value = 'Bitte ein gültiges Datum und eine Note eingeben.'; return }
  const previous = entries.value.find(entry => entry.id === editingId.value)
  const entry = { id: previous?.id || crypto.randomUUID(), studentId: String(student.value.id), date: date.value, type: type.value, grade: grade.value.trim(), note: note.value.trim(), updatedAt: Math.max(Date.now(), (previous?.updatedAt || 0) + 1), deleted: false }
  entries.value = previous ? entries.value.map(item => item.id === entry.id ? entry : item) : [...entries.value, entry]
  editingId.value = entry.id
  changed()
  if (await saveDisk()) {
    editingId.value = null; grade.value = ''; note.value = ''; formError.value = ''
    editorOpen.value = false
    overviewOpen.value = false
  }
}
async function remove(entry) {
  if (!entry || writing.value || fileBusy.value) return
  entries.value = entries.value.map(item => item.id === entry.id ? { ...item, deleted: true, updatedAt: Math.max(Date.now(), item.updatedAt + 1) } : item)
  changed()
  if (await saveDisk()) {
    editingId.value = null; grade.value = ''; note.value = ''
    editorOpen.value = false
  }
}
function beforeUnload(event) {
  if (writing.value || fileDirty.value || !browserSaved.value) { event.preventDefault(); event.returnValue = '' }
}
window.addEventListener('beforeunload', beforeUnload)
onBeforeUnmount(() => window.removeEventListener('beforeunload', beforeUnload))
onMounted(loadDisk)
defineExpose({ showOverview, entries })
</script>

<template>
  <section class="local-grades" aria-label="Lokale Noten">
    <strong>Mündliche, schriftliche und praktische Noten · nur auf diesem Rechner</strong>
    <p>Speicherort im Schule-Ordner: <code>{{ fileName }}</code></p>
    <div class="export-settings">
      <Button label="Notenliste anzeigen" :disabled="!fileLoaded" @click="openList" />
      <form class="weight-form" @submit.prevent="saveWeights">
        <strong>Gewichtung</strong>
        <label v-for="kind in gradeTypes" :key="kind.value">{{ kind.label }} <span><input v-model.number="weightDraft[kind.value]" type="number" min="0" max="100" step="any" required /> %</span></label>
        <Button label="Gewichtung speichern" type="submit" size="small" :loading="writing" :disabled="!fileLoaded || fileBusy" />
      </form>
    </div>
    <p v-if="weightsError" role="alert">{{ weightsError }}</p>
    <div class="file-actions">
      <Button label="Speichern" size="small" :loading="writing" :disabled="fileBusy || !fileLoaded" @click="saveDisk" />
    </div>
    <p role="status">{{ fileDirty ? 'Änderungen noch nicht in der Datei gespeichert.' : fileLoaded ? 'Dateistand aktuell.' : 'Datei wird geladen …' }} {{ browserSaved ? 'Browserkopie vorhanden.' : 'Browserkopie nicht verfügbar.' }}</p>
    <p v-if="status" role="status">{{ status }}</p>
    <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
    <Dialog v-model:visible="listOpen" modal :pt="{ mask: { class: 'grade-dialog-mask' } }" :header="`Notenliste · ${classroom.title}`" :style="{ width: '75rem', maxWidth: 'calc(100vw - 2rem)' }">
      <div class="table-scroll" tabindex="0" role="region" aria-label="Notenliste">
        <table class="grades-table list-table">
          <thead><tr><th scope="col">Name</th><th v-for="kind in gradeTypes" :key="kind.value" scope="col">{{ kind.label }} ({{ weights[kind.value] ?? '–' }} %)</th><th scope="col">Durchschnitt</th><th scope="col">Endnote</th></tr></thead>
          <tbody><tr v-for="person in classroom.students" :key="person.id">
            <th scope="row">{{ person.name }}</th>
            <td v-for="kind in gradeTypes" :key="kind.value">{{ gradesForStudent(entries, person.id, kind.value).map(entry => entry.grade).join(', ') || '–' }}</td>
            <td>{{ average(person) === null ? '–' : average(person).toFixed(2).replace('.', ',') }}</td>
            <td><input v-model="finalDraft[person.id]" class="final-grade" maxlength="20" :aria-label="`Endnote für ${person.name}`" /></td>
          </tr></tbody>
        </table>
      </div>
      <p>Endnoten werden auf ganze Noten gerundet und können angepasst werden. Bei fehlenden oder nicht eindeutig numerischen Noten bleibt der Durchschnitt offen.</p>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <div class="file-actions"><Button label="Endnoten speichern" :loading="writing" @click="saveFinalGrades" /><Button label="Notenliste als PDF downloaden" :loading="pdfBusy" :disabled="writing" @click="exportList" /></div>
    </Dialog>
    <Dialog v-model:visible="overviewOpen" modal :pt="{ mask: { class: 'grade-dialog-mask' } }" :header="`Noten · ${student?.name || ''}`" :style="{ width: '54rem', maxWidth: 'calc(100vw - 2rem)' }">
    <div class="table-scroll" tabindex="0" role="region" aria-label="Notenübersicht">
      <table class="grades-table">
        <thead><tr><th scope="col">Name</th><th v-for="kind in gradeTypes" :key="kind.value" scope="col">{{ kind.label }}</th></tr></thead>
        <tbody><tr v-if="student">
          <th scope="row">{{ student.name }}</th>
          <td v-for="kind in gradeTypes" :key="kind.value">
            <div class="grade-cell">
              <button v-for="entry in gradesForStudent(entries, student.id, kind.value)" :key="entry.id" type="button" class="grade-entry" :aria-label="`${kind.label}: ${entry.grade} für ${student.name} bearbeiten`" @click="show(student, kind.value, entry)">{{ entry.grade }}</button>
              <button type="button" class="grade-add" :disabled="!fileLoaded || fileBusy || writing" :aria-label="`${kind.label}e Note für ${student.name} hinzufügen`" @click="show(student, kind.value)">+</button>
            </div>
          </td>
        </tr></tbody>
      </table>
    </div>
    </Dialog>
    <Dialog v-model:visible="editorOpen" modal :pt="{ mask: { class: 'grade-dialog-mask' } }" :header="`Noten · ${student?.name || ''}`" :style="{ width: '38rem', maxWidth: 'calc(100vw - 2rem)' }">
      <form class="grade-form" @submit.prevent="saveGrade">
        <p>{{ gradeTypes.find(kind => kind.value === type)?.label }}</p>
        <label for="oral-grade-date">Datum</label><InputText id="oral-grade-date" v-model="date" type="date" required />
        <label for="oral-grade-value">Note / Punkte</label><InputText id="oral-grade-value" v-model="grade" placeholder="z. B. 2+, 2,5 oder 12 Punkte" maxlength="20" required />
        <label for="oral-grade-note">Bemerkung (optional)</label><Textarea id="oral-grade-note" v-model="note" rows="2" maxlength="2000" />
        <Message v-if="formError" severity="error" :closable="false">{{ formError }}</Message>
        <div class="file-actions"><Button label="Speichern" type="submit" :loading="writing" :disabled="fileBusy || !fileLoaded" /><Button v-if="editingId" label="Entfernen" type="button" text severity="danger" :disabled="writing || fileBusy" @click="remove(entries.find(entry => entry.id === editingId))" /></div>
      </form>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <p role="status">{{ writing ? 'Notendatei wird im Schule-Ordner gespeichert …' : fileDirty ? 'Änderungen noch nicht in der Datei gespeichert.' : 'Änderungen gespeichert.' }}</p>
    </Dialog>
  </section>
</template>

<style scoped>
.local-grades { margin: 20px 0; padding: 16px; border: 1px solid #dce3dd; border-radius: 8px; background: #f4f7f3; }
.local-grades p { font-size: 14px; }
.export-settings, .weight-form { display: flex; flex-wrap: wrap; align-items: end; gap: 12px; }
.weight-form label { display: grid; gap: 4px; font-size: 14px; }
.weight-form input { width: 70px; padding: 7px; border: 1px solid #b9cbbd; border-radius: 6px; font: inherit; }
.file-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.grade-form { display: grid; gap: 8px; }
.grade-form .file-actions { margin: 8px 0; }
.table-scroll { overflow-x: auto; margin-top: 20px; }
.grades-table { width: 100%; min-width: 600px; border-collapse: collapse; background: white; text-align: left; }
.grades-table th, .grades-table td { border: 1px solid #dce3dd; padding: 10px; vertical-align: top; }
.grades-table thead th { background: #e8efe8; font-weight: 600; }
.grades-table tbody th { width: 25%; font-weight: 500; }
.grades-table td { width: 25%; }
.list-table { min-width: 850px; }
.list-table td { width: auto; }
.final-grade { width: 4.5rem; padding: 6px; border: 1px solid #b9cbbd; border-radius: 6px; font: inherit; }
.grade-cell { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
.grade-entry, .grade-add { min-width: 34px; min-height: 34px; border: 1px solid #c5d6ca; border-radius: 6px; background: #f4f8f4; color: #20583b; font: inherit; cursor: pointer; }
.grade-add { font-size: 20px; background: white; }
.grade-add:disabled { opacity: .5; cursor: not-allowed; }
</style>

<style>
.grade-dialog-mask { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); background: rgba(30, 40, 35, .55); }
</style>
