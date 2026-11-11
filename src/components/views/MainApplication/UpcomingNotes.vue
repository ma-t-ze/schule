<script setup>
import { computed, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Message from 'primevue/message'
import DatePicker from 'primevue/datepicker'
import SelectButton from 'primevue/selectbutton'
import Checkbox from 'primevue/checkbox'
import AppointmentMarker from './AppointmentMarker.vue'
import { appointmentColors, appointmentStyle } from './appointmentAppearance'

const emit = defineEmits(['change', 'ready'])
const eventDate = ref(null)
const endDate = ref(null)
const dateKey = date => date ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}` : null

const endpoint = import.meta.env.DEV ? '/site-auth/upcoming.php' : '/upcoming.php'
const items = ref([])
const undatedItems = computed(() => items.value.filter(item => !item.event_date && !item.exam_key))
const loading = ref(false)
const ready = ref(false)
const saving = ref(false)
const error = ref('')
const formError = ref('')
const editorOpen = ref(false)
const deleteTarget = ref(null)
const editing = ref(null)
const title = ref('')
const note = ref('')
const eventColor = ref(null)
const important = ref(false)
let csrf = ''
async function request(options = {}) {
  const response = await fetch(endpoint, { credentials: 'include', cache: 'no-store', ...options })
  let data
  try { data = await response.json() } catch { throw new Error('Die Notizen-API ist noch nicht verfügbar. Bitte die PHP-Dateien auf STRATO einrichten.') }
  if (!response.ok) throw new Error(data.error || 'Die Anfrage ist fehlgeschlagen.')
  return data
}
async function load() {
  loading.value = true
  emit('ready', false)
  error.value = ''
  try {
    const data = await request()
    if (!Array.isArray(data.items) || typeof data.csrf !== 'string') throw new Error('Die Notizen-API liefert eine ungültige Antwort.')
    items.value = data.items
    emit('change', items.value)
    csrf = data.csrf
    ready.value = true
  } catch (reason) { error.value = reason.message; ready.value = false }
  finally { loading.value = false; emit('ready', ready.value) }
}
function editExam(examKey) {
  if (!ready.value || loading.value || saving.value) return
  const item = items.value.find(entry => entry.exam_key === examKey)
  if (item) { edit(item); return }
  const match = /^2026-27-(3bkgd1-1-met|3bkgd1-1-grd|3tgg1-2|3tgg2|1bfd1-bpk)-([1-5])$/.exec(examKey)
  const classes = { '3bkgd1-1-met': ['3BKGD1/1 MET', 4], '3bkgd1-1-grd': ['3BKGD1/1 GRD', 4], '3tgg1-2': ['3TGG1/2', 5], '3tgg2': ['3TGG2', 2], '1bfd1-bpk': ['1BFD1 BPK', 2] }
  if (!match || Number(match[2]) > classes[match[1]][1]) return
  edit({ exam_key: examKey, title: `${match[2]}. Klassenarbeit · ${classes[match[1]][0]}`, event_date: ({ '2026-27-3bkgd1-1-met-1': '2026-11-20', '2026-27-1bfd1-bpk-1': '2026-12-09' })[examKey] || null })
}
function edit(item = null) {
  if (!ready.value || loading.value || saving.value) return
  editing.value = item
  title.value = item?.title || ''
  note.value = item?.note || ''
  eventColor.value = appointmentColors.some(color => color.value === item?.event_color) ? item.event_color : null
  important.value = item?.is_important === true
  eventDate.value = item?.event_date ? new Date(item.event_date + 'T12:00:00') : null
  endDate.value = item?.end_date ? new Date(item.end_date + 'T12:00:00') : null
  formError.value = ''
  editorOpen.value = true
}
async function mutate(payload) {
  return request({ method: 'POST', headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf }, body: JSON.stringify(payload) })
}
async function save() {
  if (saving.value) return
  if (!title.value.trim()) { formError.value = 'Bitte gib einen Titel ein.'; return }
  if (endDate.value && (!eventDate.value || dateKey(endDate.value) < dateKey(eventDate.value))) { formError.value = 'Bitte wähle ein Startdatum und ein Enddatum, das nicht davor liegt.'; return }
  saving.value = true
  formError.value = ''
  try {
    const data = await mutate({ action: editing.value?.id ? 'update' : 'create', exam_key: editing.value?.exam_key, id: editing.value?.id, revision: editing.value?.revision, title: title.value.trim(), note: note.value.trim(), event_date: dateKey(eventDate.value), end_date: dateKey(endDate.value), event_color: eventColor.value, is_important: important.value })
    if (editing.value?.exam_key && data.item?.exam_key !== editing.value.exam_key) throw new Error('Die Klassenarbeits-Zuordnung fehlt in der Serverantwort. Bitte die aktuelle upcoming.php hochladen und die Notizen neu laden.')
    if ((data.item?.event_date || null) !== dateKey(eventDate.value) || (data.item?.end_date || null) !== dateKey(endDate.value)) throw new Error('Das Kalenderdatum wurde vom Server nicht übernommen. Bitte die aktualisierte upcoming.php und die Datumsspalte auf STRATO einrichten.')
    if (data.item?.event_color !== eventColor.value || data.item?.is_important !== important.value) throw new Error('Die Terminmarkierung konnte nicht gespeichert werden. Bitte lade die Termine neu und versuche es erneut.')
    if (editing.value?.id) items.value = items.value.map(item => item.id === editing.value.id ? data.item : item)
    else items.value.unshift(data.item)
    emit('change', items.value)
    editorOpen.value = false
  } catch (reason) { formError.value = reason.message }
  finally { saving.value = false }
}
async function remove() {
  if (saving.value || !deleteTarget.value) return
  saving.value = true
  formError.value = ''
  try {
    const data = await mutate({ action: 'delete', id: deleteTarget.value.id, revision: deleteTarget.value.revision })
    items.value = data.item ? items.value.map(item => item.id === deleteTarget.value.id ? data.item : item) : items.value.filter(item => item.id !== deleteTarget.value.id)
    emit('change', items.value)
    deleteTarget.value = null
  } catch (reason) { formError.value = reason.message }
  finally { saving.value = false }
}
function askDelete(item) {
  if (!ready.value || loading.value || saving.value) return
  deleteTarget.value = item
  formError.value = ''
}
defineExpose({ edit, editExam, askDelete })
onMounted(load)
</script>

<template>
  <section class="upcoming" aria-labelledby="upcoming-title">
    <div class="upcoming-heading"><h3 id="upcoming-title">Upcoming</h3><Button label="Neue Notiz" size="small" :disabled="!ready || loading" @click="edit()" /></div>
    <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
    <Button label="Neu laden" size="small" text :loading="loading" :disabled="saving" @click="load" />
    <p v-if="loading" role="status">Notizen werden geladen …</p>
    <p v-else-if="ready && !undatedItems.length" class="empty">Keine Notizen ohne Datum. Datierte Notizen findest du im Kalender.</p>
    <div class="notes" :aria-busy="loading">
      <Card v-for="item in undatedItems" :key="item.id" class="note-card" :style="appointmentStyle(item)">
        <template #title><h4 class="marked-title"><AppointmentMarker :important="item.is_important === true" />{{ item.title }}</h4></template>
        <template #content><time v-if="item.event_date" :datetime="item.event_date">{{ new Date(item.event_date + 'T12:00:00').toLocaleDateString('de-DE') }}<template v-if="item.end_date"> – {{ new Date(item.end_date + 'T12:00:00').toLocaleDateString('de-DE') }}</template></time><p class="note-text">{{ item.note }}</p></template>
        <template #footer><div class="actions"><Button label="Bearbeiten" size="small" text :disabled="!ready || saving || loading" :aria-label="`${item.title} bearbeiten`" @click="edit(item)" /><Button label="Löschen" size="small" severity="danger" text :disabled="!ready || saving || loading" :aria-label="`${item.title} löschen`" @click="askDelete(item)" /></div></template>
      </Card>
    </div>
    <Dialog v-model:visible="editorOpen" modal :header="editing?.exam_key ? 'Klassenarbeit bearbeiten' : editing ? 'Notiz bearbeiten' : 'Neue Notiz'" :closable="!saving" :close-on-escape="!saving" :style="{ width: '30rem', maxWidth: 'calc(100vw - 2rem)' }">
      <form class="note-form" @submit.prevent="save">
        <label for="upcoming-title-input">Titel</label><InputText id="upcoming-title-input" v-model="title" maxlength="160" required autofocus :disabled="saving" />
        <label for="upcoming-note-input">Notiz (optional)</label><Textarea id="upcoming-note-input" v-model="note" rows="6" maxlength="5000" :disabled="saving" />
        <label for="upcoming-date-input">Startdatum im Kalender (optional)</label><DatePicker input-id="upcoming-date-input" v-model="eventDate" @update:model-value="value => { if (!value) endDate = null }" date-format="dd.mm.yy" show-icon show-clear :manual-input="false" :disabled="saving" />
        <label for="upcoming-end-date-input">Enddatum (optional, einschließlich)</label><DatePicker input-id="upcoming-end-date-input" v-model="endDate" date-format="dd.mm.yy" show-icon show-clear :manual-input="false" :min-date="eventDate || undefined" :disabled="saving || !eventDate" />
        <div class="appearance-options">
          <span id="appointment-color-label">Farbe</span>
          <SelectButton v-model="eventColor" :options="appointmentColors" option-label="label" option-value="value" :allow-empty="false" :disabled="saving" aria-labelledby="appointment-color-label" class="color-options">
            <template #option="{ option }"><span v-if="option.value" class="color-dot" :class="`color-${option.value}`" aria-hidden="true"></span>{{ option.label }}</template>
          </SelectButton>
          <div class="important-option"><Checkbox input-id="appointment-important" v-model="important" binary :disabled="saving" /><label for="appointment-important">Wichtig – mit großem Ausrufezeichen anzeigen</label></div>
          <div class="appearance-preview" :style="appointmentStyle({ event_color: eventColor, is_important: important, category: editing?.exam_key ? 'exam' : null })" aria-label="Vorschau der Terminmarkierung"><AppointmentMarker :important="important" /><span>{{ title.trim() || 'Terminvorschau' }}</span></div>
        </div>
        <Message v-if="formError" severity="error" :closable="false">{{ formError }}</Message>
        <div class="actions"><Button label="Abbrechen" severity="secondary" text :disabled="saving" @click="editorOpen = false" /><Button label="Speichern" type="submit" :loading="saving" /></div>
      </form>
    </Dialog>
    <Dialog :visible="!!deleteTarget" modal :header="deleteTarget?.exam_key ? 'Klassenarbeitstermin entfernen?' : 'Notiz löschen?'" :closable="!saving" :close-on-escape="!saving" :style="{ width: '26rem', maxWidth: 'calc(100vw - 2rem)' }" @update:visible="value => { if (!value && !saving) deleteTarget = null }">
      <p v-if="deleteTarget?.exam_key">Termin für „{{ deleteTarget.title }}“ aus dem Kalender entfernen? Unter Klassenarbeiten steht dann „nicht festgelegt“. Die Checkliste bleibt erhalten.</p><p v-else>„{{ deleteTarget?.title }}“ endgültig löschen?</p>
      <Message v-if="formError" severity="error" :closable="false">{{ formError }}</Message>
      <template #footer><Button label="Abbrechen" severity="secondary" text :disabled="saving" @click="deleteTarget = null" /><Button label="Löschen" severity="danger" :loading="saving" @click="remove" /></template>
    </Dialog>
  </section>
</template>

<style scoped>
.upcoming { margin-top: 28px; border-top: 1px solid #dce3dd; padding-top: 18px; }
.upcoming-heading, .actions { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
h3 { font-size: 19px; font-weight: 500; margin: 0; }
h4 { margin: 0; font-size: 17px; overflow-wrap: anywhere; }
.notes { display: grid; gap: 12px; margin-top: 10px; }
.note-card { border: 1px solid var(--appointment-border); border-left-width: 4px; box-shadow: none; background: var(--appointment-bg); color: var(--appointment-ink); }
.marked-title { display: flex; align-items: center; gap: 10px; }
.appearance-options { display: grid; gap: 12px; margin: 8px 0; }
.color-options { display: flex; flex-wrap: wrap; }
.color-dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; margin-right: 6px; }
.color-red { background: #dc2626; }
.color-orange { background: #ea580c; }
.color-green { background: #16a34a; }
.important-option { display: flex; align-items: center; gap: 10px; }
.important-option label { margin: 0; cursor: pointer; }
.appearance-preview { display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid var(--appointment-border); border-left-width: 4px; border-radius: 6px; background: var(--appointment-bg); color: var(--appointment-ink); overflow-wrap: anywhere; }
.appearance-preview > span { min-width: 0; }
.note-text { white-space: pre-wrap; overflow-wrap: anywhere; font-size: 15px; margin: 0; user-select: text; }
.empty { color: #647168; font-size: 14px; }
.note-form { display: grid; gap: 12px; }
.note-form label { margin-top: 4px; }
.note-form textarea { resize: vertical; }
.note-form .actions { justify-content: flex-end; margin-top: 8px; }
</style>
