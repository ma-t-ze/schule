<script setup>
import { computed, ref, watch } from 'vue'
import Message from 'primevue/message'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Dialog from 'primevue/dialog'
import { originalPositions, validPositions, migrateSeating, validLayout, normalizePositions, resizeSeating } from './seatingPositions'

const props = defineProps({ classId: { type: String, default: '' } })
// Both globs live exclusively in the DEV-only route. All personal data is gitignored.
const datasets = import.meta.glob('../../../local-sitzplaene/klassen/*/klasse.json', { eager: true, import: 'default' })
const photos = import.meta.glob('../../../local-sitzplaene/klassen/*/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true, query: '?url', import: 'default' })
const classes = Object.entries(datasets).map(([path, data]) => ({ ...data, directory: path.slice(0, path.lastIndexOf('/')) }))
const currentClass = computed(() => classes.find(item => item.id === props.classId))
const seats = ref(originalPositions())
const columns = ref(6)
const rowCount = ref(5)
const draftColumns = ref(6)
const draftRows = ref(5)
const layoutError = ref('')
const selected = ref(null)
const dragged = ref(null)
const status = ref('')
const error = ref('')
const loading = ref(false)
const saving = ref(false)
const ready = ref(false)
const dirty = ref(false)
const revision = ref(0)
let csrf = ''
let generation = 0
const endpoint = '/site-auth/seating.php'
const storageKey = computed(() => `local-seating:v3:${props.classId}`)
const studentAt = position => currentClass.value?.students[position]
async function request(url, options = {}) {
  const response = await fetch(url, { credentials: 'include', cache: 'no-store', signal: AbortSignal.timeout(15000), ...options })
  let data
  try { data = await response.json() } catch { throw new Error('Die Sitzplan-API ist noch nicht verfügbar. Bitte die PHP-Dateien auf STRATO einrichten.') }
  if (!response.ok) throw new Error(data.error || 'Sitzplan-Anfrage fehlgeschlagen.')
  return data
}
function cache() {
  try { localStorage.setItem(storageKey.value, JSON.stringify({ positions: seats.value, columns: columns.value, rows: rowCount.value })) } catch { /* Remote persistence still works without localStorage. */ }
}
async function loadServer() {
  const version = ++generation
  ready.value = false
  loading.value = true
  error.value = ''
  selected.value = null
  dragged.value = null
  try {
    if (!/^[a-f0-9]{32}$/.test(currentClass.value?.boardKey || '')) throw new Error('Der lokale Sitzplan-Schlüssel fehlt in klasse.json.')
    const data = await request(`${endpoint}?board=${currentClass.value.boardKey}`)
    if (version !== generation) return
    if (!Number.isInteger(data.revision) || data.revision < 0 || typeof data.csrf !== 'string' || (data.positions !== null && !validPositions(data.positions))) throw new Error('Ungültige Antwort der Sitzplan-API.')
    csrf = data.csrf
    revision.value = data.revision
    if (data.positions !== null) {
      const loadedColumns = data.columns ?? 6
      const loadedRows = data.rows ?? 5
      const normalized = normalizePositions(data.positions, currentClass.value.students.length)
      if (!validLayout(loadedColumns, loadedRows) || data.positions.length !== loadedColumns * loadedRows || !normalized) throw new Error('Der gespeicherte Sitzplan passt nicht zur lokalen Klasse.')
      seats.value = normalized
      columns.value = draftColumns.value = loadedColumns
      rowCount.value = draftRows.value = loadedRows
      cache()
      dirty.value = false
      status.value = 'Platzanordnung von STRATO geladen.'
    } else {
      dirty.value = true
      status.value = 'Noch kein Serverstand vorhanden. Die aktuelle lokale Anordnung kannst du auf STRATO speichern.'
    }
    ready.value = true
  } catch (reason) {
    if (version === generation) { error.value = reason.message; status.value = 'Die lokale Anordnung bleibt verfügbar.' }
  } finally { if (version === generation) loading.value = false }
}
watch(currentClass, () => {
  generation++
  selected.value = null
  dragged.value = null
  ready.value = false
  loading.value = false
  saving.value = false
  dirty.value = false
  status.value = ''
  error.value = ''
  const defaultColumns = currentClass.value?.defaultColumns ?? 6
  const defaultRows = currentClass.value?.defaultRows ?? 5
  const layoutFits = validLayout(defaultColumns, defaultRows) && defaultColumns * defaultRows >= (currentClass.value?.students.length || 0)
  columns.value = draftColumns.value = layoutFits ? defaultColumns : 6
  rowCount.value = draftRows.value = layoutFits ? defaultRows : Math.max(5, Math.ceil((currentClass.value?.students.length || 0) / 6))
  layoutError.value = ''
  seats.value = originalPositions(currentClass.value?.students.length || 0, columns.value * rowCount.value)
  if (!currentClass.value) return
  try {
    const raw = localStorage.getItem(storageKey.value)
    if (raw) {
      const saved = JSON.parse(raw)
      const normalized = normalizePositions(saved.positions, currentClass.value.students.length)
      if (!validLayout(saved.columns, saved.rows) || !normalized || normalized.length !== saved.columns * saved.rows) throw new Error('Invalid seating cache')
      seats.value = normalized
      columns.value = draftColumns.value = saved.columns
      rowCount.value = draftRows.value = saved.rows
    } else {
      const numericCache = localStorage.getItem(`local-seating:v2:${props.classId}`)
      const previous = localStorage.getItem(`local-seating:v1:${props.classId}`)
      if (numericCache) {
        const normalized = normalizePositions(JSON.parse(numericCache), currentClass.value.students.length)
        if (!normalized || normalized.length !== 30) throw new Error('Invalid numeric cache')
        seats.value = normalized
      } else if (previous) {
        const migrated = migrateSeating(JSON.parse(previous), currentClass.value.students)
        if (!migrated) throw new Error('Invalid old seating cache')
        seats.value = migrated
      }
    }
  } catch { status.value = 'Der lokale Sitzplan konnte nicht geladen werden.' }
  loadServer()
}, { immediate: true })
async function persist() {
  if (!ready.value || saving.value || loading.value) return
  const version = generation
  saving.value = true
  error.value = ''
  status.value = 'Platznummern werden gespeichert …'
  try {
    const data = await request(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf }, body: JSON.stringify({ board: currentClass.value.boardKey, positions: [...seats.value], columns: columns.value, rows: rowCount.value, revision: revision.value }) })
    if (version !== generation) return
    if (data.revision !== revision.value + 1) throw new Error('Speicherung konnte nicht bestätigt werden.')
    revision.value = data.revision
    dirty.value = false
    status.value = 'Platzanordnung auf STRATO gespeichert. Namen und Fotos bleiben lokal.'
  } catch (reason) {
    if (version === generation) { error.value = reason.message; status.value = 'Änderung bleibt lokal erhalten und ist noch nicht auf STRATO gespeichert.' }
  } finally { if (version === generation) saving.value = false }
}
function swap(from, to) {
  if (loading.value || saving.value || !Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < 0 || from >= seats.value.length || to >= seats.value.length) return
  if (from !== to) {
    const next = [...seats.value]
    ;[next[from], next[to]] = [next[to], next[from]]
    seats.value = next
    dirty.value = true
    cache()
    if (ready.value) persist()
    else status.value = 'Anordnung nur lokal gespeichert. Die STRATO-Verbindung ist nicht verfügbar.'
  }
  selected.value = null
  dragged.value = null
}
function applyLayout() {
  if (loading.value || saving.value) return
  layoutError.value = ''
  const next = resizeSeating(seats.value, draftColumns.value, draftRows.value)
  if (!next) {
    layoutError.value = `Bitte wähle 1 bis 20 Spalten und Reihen mit mindestens ${currentClass.value.students.length} Plätzen.`
    return
  }
  seats.value = next
  columns.value = draftColumns.value
  rowCount.value = draftRows.value
  selected.value = dragged.value = null
  dirty.value = true
  cache()
  if (ready.value) persist()
  else status.value = 'Raster und Anordnung nur lokal gespeichert. STRATO ist nicht verfügbar.'
}
function choose(index) {
  if (loading.value || saving.value) return
  if (selected.value === null) selected.value = index
  else swap(selected.value, index)
}
function startDrag(event, index) {
  if (loading.value || saving.value) { event.preventDefault(); return }
  dragged.value = index
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text/plain', String(index))
}
function drop(index) { if (dragged.value !== null) swap(dragged.value, index) }
function photo(student) { return photos[`${currentClass.value.directory}/${student.photo}`] }
const pdfBusy = ref(false)
const pdfMessage = ref('')
async function exportPdf() {
  if (pdfBusy.value || !currentClass.value) return
  pdfBusy.value = true
  pdfMessage.value = ''
  const snapshot = { title: currentClass.value.title, columns: columns.value, rows: rowCount.value, seats: seats.value.map(position => { const student = studentAt(position); return student ? { name: student.name, photo: photo(student) } : null }) }
  const filename = `Sitzplan_${currentClass.value.id}.pdf`
  try {
    const { createSeatingPdf } = await import('./seatingPdf')
    const pdf = await createSeatingPdf(snapshot)
    pdf.save(filename)
    pdfMessage.value = 'PDF erstellt.'
  } catch { pdfMessage.value = 'PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { pdfBusy.value = false }
}
const gameOpen = ref(false)
const gameStudent = ref(null)
const nameVisible = ref(false)
const gameRound = ref(1)
const gameNumber = ref(0)
const gameStudents = computed(() => (currentClass.value?.students || []).filter(student => student.hasPhoto !== false && photo(student)))
let gameQueue = []
function shuffleStudents() {
  const list = [...gameStudents.value]
  for (let index = list.length - 1; index > 0; index--) {
    const target = Math.floor(Math.random() * (index + 1))
    ;[list[index], list[target]] = [list[target], list[index]]
  }
  if (list.length > 1 && list[0]?.id === gameStudent.value?.id) [list[0], list[1]] = [list[1], list[0]]
  return list
}
function nextGamePhoto() {
  if (!gameStudents.value.length) return
  if (!gameQueue.length) {
    gameQueue = shuffleStudents()
    if (gameNumber.value) gameRound.value++
    gameNumber.value = 0
  }
  nameVisible.value = false
  gameStudent.value = gameQueue.shift()
  gameNumber.value++
}
function startGame() {
  gameQueue = []
  gameStudent.value = null
  gameNumber.value = 0
  gameRound.value = 1
  nextGamePhoto()
  gameOpen.value = !!gameStudent.value
}
watch(currentClass, () => { gameOpen.value = false; gameStudent.value = null; gameQueue = [] })
</script>

<template>
  <main class="seating-page">
    <RouterLink :to="classId ? '/sitzplaene' : '/'">← {{ classId ? 'Sitzpläne' : 'Zur Startseite' }}</RouterLink>
    <h1>{{ currentClass?.title || 'Sitzpläne' }}</h1>
    <Message severity="info" :closable="false">Lokale Ansicht · nur im Dev-Modus verfügbar</Message>
    <template v-if="!classId">
      <nav class="class-links" aria-label="Klassen mit Sitzplan"><RouterLink v-for="entry in classes" :key="entry.id" :to="`/sitzplaene/${entry.id}`">{{ entry.title }}</RouterLink></nav>
      <p v-if="!classes.length">Noch keine lokalen Klassen vorhanden.</p>
    </template>
    <template v-else-if="currentClass">
      <div class="name-game-start"><Button label="Spiel beginnen" :disabled="!gameStudents.length" @click="startGame" /></div>
      <Dialog v-model:visible="gameOpen" modal header="Namen lernen" :style="{ width: '30rem', maxWidth: 'calc(100vw - 2rem)' }">
        <div v-if="gameStudent" class="name-game">
          <p class="game-progress">Runde {{ gameRound }} · Bild {{ gameNumber }} von {{ gameStudents.length }}</p>
          <img :src="photo(gameStudent)" alt="Wessen Foto ist das?" class="game-photo" />
          <p class="game-name" aria-live="polite">{{ nameVisible ? gameStudent.name : 'Wie heißt diese Person?' }}</p>
          <div class="game-actions"><Button label="Name" :disabled="nameVisible" @click="nameVisible = true" /><Button label="Nächstes Bild" outlined @click="nextGamePhoto" /></div>
        </div>
        <template #footer><Button label="Spiel beenden" severity="secondary" text @click="gameOpen = false" /></template>
      </Dialog>
      <form class="layout-controls" @submit.prevent="applyLayout"><div><label for="seat-columns">Spalten</label><InputNumber input-id="seat-columns" v-model="draftColumns" :min="1" :max="20" :use-grouping="false" show-buttons :disabled="loading || saving" /></div><span>×</span><div><label for="seat-rows">Reihen</label><InputNumber input-id="seat-rows" v-model="draftRows" :min="1" :max="20" :use-grouping="false" show-buttons :disabled="loading || saving" /></div><Button label="Raster anwenden" type="submit" :disabled="loading || saving" /></form>
      <Message v-if="layoutError" severity="warn" :closable="false">{{ layoutError }}</Message>
      <p>{{ columns }} Plätze pro Reihe · {{ rowCount }} Reihen. Ziehe eine Person auf einen anderen Platz. Alternativ: erst den Ausgangsplatz, dann den Zielplatz anklicken. Belegte Plätze werden getauscht.</p>
      <div class="seat-toolbar"><span role="status">{{ selected !== null ? 'Wähle jetzt den Zielplatz.' : status }}</span><Button v-if="selected !== null" label="Auswahl aufheben" text size="small" @click="selected = null" /></div>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <div class="sync-actions"><Button label="Exportieren als PDF" size="small" outlined :loading="pdfBusy" :disabled="loading" @click="exportPdf" /><Button label="Auf STRATO speichern" size="small" :loading="saving" :disabled="!ready || loading || !dirty" @click="persist" /><Button label="Serverstand laden" size="small" outlined :loading="loading" :disabled="saving" @click="loadServer" /></div>
      <p v-if="pdfMessage" role="status">{{ pdfMessage }}</p>
      <div class="seating-scroll" tabindex="0" role="region" :aria-label="`Sitzplan mit ${columns} Spalten und ${rowCount} Reihen`">
        <div class="seating-grid" :style="{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, minWidth: `${columns * 130}px` }">
          <button v-for="(position, index) in seats" :key="index" class="seat" :class="{ selected: selected === index, empty: !studentAt(position) }" :draggable="!!studentAt(position) && !saving && !loading" :disabled="saving || loading" :aria-pressed="selected === index" :aria-label="`Reihe ${Math.floor(index / columns) + 1}, Platz ${index % columns + 1}: ${studentAt(position)?.name || 'frei'}`" @click="choose(index)" @keydown.esc="selected = null" @dragstart="startDrag($event, index)" @dragend="dragged = null" @dragover.prevent @drop.prevent="drop(index)">
            <span class="seat-number">{{ Math.floor(index / columns) + 1 }} · {{ index % columns + 1 }}</span>
            <template v-if="studentAt(position)"><img :src="photo(studentAt(position))" :alt="studentAt(position).name" draggable="false" /><strong>{{ studentAt(position).name }}</strong></template>
            <span v-else class="empty-label">Freier Platz</span>
          </button>
        </div>
      </div>
    </template>
    <Message v-else severity="warn" :closable="false">Diese Klasse ist lokal nicht vorhanden.</Message>
  </main>
</template>

<style scoped>
.seating-page { max-width: 1400px; padding: 32px; margin: auto; color: #202622; box-sizing: border-box; }
.seating-page a { color: #176746; }
h1 { font-size: 28px; font-weight: 500; }
.class-links { display: grid; gap: 12px; margin-top: 24px; }
.class-links a { padding: 20px; border: 1px solid #dce3dd; border-radius: 8px; background: #f2f5f1; text-decoration: none; }
.layout-controls { display: flex; align-items: flex-end; gap: 12px; flex-wrap: wrap; margin: 20px 0; }
.layout-controls > div { display: grid; gap: 6px; }
.layout-controls :deep(.p-inputnumber) { width: 150px; }
.layout-controls :deep(.p-inputnumber-input) { width: 100%; min-width: 0; box-sizing: border-box; font-size: 18px; text-align: center; padding: 12px 42px 12px 16px; }
.layout-controls :deep(.p-inputnumber-button-group) { width: 32px; }
.name-game-start { margin: 20px 0; }
.name-game { text-align: center; }
.game-photo { display: block; width: 100%; height: 290px; object-fit: contain; }
.game-progress { font-size: 13px; color: #647168; }
.game-name { font-size: 22px; font-weight: 500; min-height: 34px; }
.game-actions { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
.sync-actions { display: flex; gap: 10px; flex-wrap: wrap; margin: 16px 0; }
.seat-toolbar { display: flex; gap: 12px; align-items: center; margin: 18px 0; min-height: 32px; }
.seating-scroll { overflow-x: auto; max-width: 100%; }
.seating-grid { display: grid;  gap: 12px; }
.seat { font: inherit; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 0; min-height: 180px; padding: 24px 8px 12px; gap: 8px; background: #f4f7f3; border: 2px solid #dce3dd; border-radius: 8px; color: inherit; cursor: grab; }
.seat.selected { border-color: #007c4a; background: #e4f2e9; }
.seat:focus-visible { outline: 3px solid #007c4a; outline-offset: 2px; }
.seat.empty { border-style: dashed; cursor: pointer; }
.seat img { width: 100%; height: 110px; object-fit: contain; }
.seat strong { font-size: 14px; overflow-wrap: anywhere; font-weight: 500; }
.seat-number { position: absolute; top: 5px; left: 8px; font-size: 11px; color: #647168; }
.empty-label { color: #647168; font-size: 14px; }
@media (max-width: 740px) { .seating-page { padding: 16px; } }
</style>
