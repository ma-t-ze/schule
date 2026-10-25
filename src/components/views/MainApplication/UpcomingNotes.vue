<script setup>
import { computed, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Message from 'primevue/message'
import DatePicker from 'primevue/datepicker'

const emit = defineEmits(['change'])
const eventDate = ref(null)
const endDate = ref(null)
const dateKey = date => date ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}` : null

const endpoint = import.meta.env.DEV ? '/site-auth/upcoming.php' : '/upcoming.php'
const items = ref([])
const undatedItems = computed(() => items.value.filter(item => !item.event_date))
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
  error.value = ''
  try {
    const data = await request()
    if (!Array.isArray(data.items) || typeof data.csrf !== 'string') throw new Error('Die Notizen-API liefert eine ungültige Antwort.')
    items.value = data.items
    emit('change', items.value)
    csrf = data.csrf
    ready.value = true
  } catch (reason) { error.value = reason.message; ready.value = false }
  finally { loading.value = false }
}
function edit(item = null) {
  if (!ready.value || loading.value || saving.value) return
  editing.value = item
  title.value = item?.title || ''
  note.value = item?.note || ''
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
    const data = await mutate({ action: editing.value ? 'update' : 'create', id: editing.value?.id, revision: editing.value?.revision, title: title.value.trim(), note: note.value.trim(), event_date: dateKey(eventDate.value), end_date: dateKey(endDate.value) })
    if ((data.item?.event_date || null) !== dateKey(eventDate.value) || (data.item?.end_date || null) !== dateKey(endDate.value)) throw new Error('Das Kalenderdatum wurde vom Server nicht übernommen. Bitte die aktualisierte upcoming.php und die Datumsspalte auf STRATO einrichten.')
    if (editing.value) items.value = items.value.map(item => item.id === editing.value.id ? data.item : item)
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
    await mutate({ action: 'delete', id: deleteTarget.value.id, revision: deleteTarget.value.revision })
    items.value = items.value.filter(item => item.id !== deleteTarget.value.id)
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
defineExpose({ edit, askDelete })
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
      <Card v-for="item in undatedItems" :key="item.id" class="note-card">
        <template #title><h4>{{ item.title }}</h4></template>
        <template #content><time v-if="item.event_date" :datetime="item.event_date">{{ new Date(item.event_date + 'T12:00:00').toLocaleDateString('de-DE') }}<template v-if="item.end_date"> – {{ new Date(item.end_date + 'T12:00:00').toLocaleDateString('de-DE') }}</template></time><p class="note-text">{{ item.note }}</p></template>
        <template #footer><div class="actions"><Button label="Bearbeiten" size="small" text :disabled="!ready || saving || loading" :aria-label="`${item.title} bearbeiten`" @click="edit(item)" /><Button label="Löschen" size="small" severity="danger" text :disabled="!ready || saving || loading" :aria-label="`${item.title} löschen`" @click="askDelete(item)" /></div></template>
      </Card>
    </div>
    <Dialog v-model:visible="editorOpen" modal :header="editing ? 'Notiz bearbeiten' : 'Neue Notiz'" :closable="!saving" :close-on-escape="!saving" :style="{ width: '30rem', maxWidth: 'calc(100vw - 2rem)' }">
      <form class="note-form" @submit.prevent="save">
        <label for="upcoming-title-input">Titel</label><InputText id="upcoming-title-input" v-model="title" maxlength="160" required autofocus :disabled="saving" />
        <label for="upcoming-note-input">Notiz (optional)</label><Textarea id="upcoming-note-input" v-model="note" rows="6" maxlength="5000" :disabled="saving" />
        <label for="upcoming-date-input">Startdatum im Kalender (optional)</label><DatePicker input-id="upcoming-date-input" v-model="eventDate" @update:model-value="value => { if (!value) endDate = null }" date-format="dd.mm.yy" show-icon show-clear :manual-input="false" :disabled="saving" />
        <label for="upcoming-end-date-input">Enddatum (optional, einschließlich)</label><DatePicker input-id="upcoming-end-date-input" v-model="endDate" date-format="dd.mm.yy" show-icon show-clear :manual-input="false" :min-date="eventDate || undefined" :disabled="saving || !eventDate" />
        <Message v-if="formError" severity="error" :closable="false">{{ formError }}</Message>
        <div class="actions"><Button label="Abbrechen" severity="secondary" text :disabled="saving" @click="editorOpen = false" /><Button label="Speichern" type="submit" :loading="saving" /></div>
      </form>
    </Dialog>
    <Dialog :visible="!!deleteTarget" modal header="Notiz löschen?" :closable="!saving" :close-on-escape="!saving" :style="{ width: '26rem', maxWidth: 'calc(100vw - 2rem)' }" @update:visible="value => { if (!value && !saving) deleteTarget = null }">
      <p>„{{ deleteTarget?.title }}“ endgültig löschen?</p>
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
.note-card { border: 1px solid #dce3dd; box-shadow: none; }
.note-text { white-space: pre-wrap; overflow-wrap: anywhere; font-size: 15px; margin: 0; user-select: text; }
.empty { color: #647168; font-size: 14px; }
.note-form { display: grid; gap: 12px; }
.note-form label { margin-top: 4px; }
.note-form textarea { resize: vertical; }
.note-form .actions { justify-content: flex-end; margin-top: 8px; }
</style>
