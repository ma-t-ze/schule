<script setup>
import { computed, reactive, ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Message from 'primevue/message'
import CalendarRangeBars from './CalendarRangeBars.vue'
import AppointmentMarker from './AppointmentMarker.vue'
import { appointmentStyle } from './appointmentAppearance'
import { lessons, periods } from './schoolTimetable'
import { schoolYearEvents } from './schoolYearEvents'

const emit = defineEmits(['edit-note', 'delete-note'])
const props = defineProps({ notes: { type: Array, default: () => [] }, view: { type: String, default: 'week' }, focus: { type: Date, default: () => new Date() } })
const yearChangesKey = 'school-year-events-overrides-2026-27-v1'
function loadYearChanges() {
  try { const data = JSON.parse(localStorage.getItem(yearChangesKey) || '{}'); return data && typeof data === 'object' && !Array.isArray(data) ? data : {} }
  catch { return {} }
}
const yearChanges = ref(loadYearChanges())
const yearEditorOpen = ref(false)
const yearDeleteOpen = ref(false)
const yearError = ref('')
const yearEditId = ref('')
const yearForm = reactive({ title: '', note: '', event_date: '', end_date: '' })
const calendarEntries = computed(() => [...props.notes, ...schoolYearEvents.flatMap(item => {
  const change = yearChanges.value[item.id]
  if (change?.deleted === true) return []
  return [{ ...item, ...(change && typeof change === 'object' ? change : {}), id: item.id, readonly: true, yearPlan: true }]
})])
function editYearEvent(item) {
  yearEditId.value = item.id
  Object.assign(yearForm, { title: item.title, note: item.note || '', event_date: item.event_date || '', end_date: item.end_date || '' })
  yearError.value = ''
  yearEditorOpen.value = true
}
function persistYearChanges(next) {
  try { localStorage.setItem(yearChangesKey, JSON.stringify(next)); yearChanges.value = next; yearError.value = ''; return true }
  catch { yearError.value = 'Die Änderung konnte in diesem Browser nicht gespeichert werden.'; return false }
}
function saveYearEvent() {
  if (!yearForm.title.trim() || !yearForm.event_date) { yearError.value = 'Bitte Titel und Startdatum eingeben.'; return }
  if (yearForm.end_date && yearForm.end_date < yearForm.event_date) { yearError.value = 'Das Enddatum darf nicht vor dem Startdatum liegen.'; return }
  if (persistYearChanges({ ...yearChanges.value, [yearEditId.value]: { title: yearForm.title.trim(), note: yearForm.note.trim(), event_date: yearForm.event_date, end_date: yearForm.end_date || null } })) yearEditorOpen.value = false
}
function deleteYearEvent() {
  if (persistYearChanges({ ...yearChanges.value, [yearEditId.value]: { deleted: true } })) yearDeleteOpen.value = false
}
const view = computed(() => props.view)
const selectedNote = ref(null)
const dateKey = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
const coversDay = (note, key) => note.event_date && key >= note.event_date && key <= (note.end_date || note.event_date)
const focus = computed(() => props.focus)
const monthDays = computed(() => {
  const start = mondayOf(new Date(focus.value.getFullYear(), focus.value.getMonth(), 1))
  return Array.from({ length: 42 }, (_, i) => {
    const date = new Date(start); date.setDate(start.getDate() + i)
    const key = dateKey(date)
    return { date, key, outside: date.getMonth() !== focus.value.getMonth(), today: key === dateKey(new Date()), notes: calendarEntries.value.filter(note => coversDay(note, key)) }
  })
})
const periodTitle = computed(() => {
  if (view.value === 'month') return focus.value.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
  const end = new Date(mondayOf(focus.value)); end.setDate(end.getDate() + 6)
  return `${mondayOf(focus.value).toLocaleDateString('de-DE')} – ${end.toLocaleDateString('de-DE')}`
})

function mondayOf(date) {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  monday.setDate(monday.getDate() - (monday.getDay() + 6) % 7)
  return monday
}
const week = computed(() => mondayOf(focus.value))
const days = computed(() => Array.from({ length: 7 }, (_, index) => {
  const date = new Date(week.value)
  date.setDate(date.getDate() + index)
  return { date, notes: calendarEntries.value.filter(note => coversDay(note, dateKey(date))), label: date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' }), today: date.toDateString() === new Date().toDateString() }
}))
const minutes = value => { const [h, m] = value.split(':').map(Number); return h * 60 + m }
const position = time => (minutes(time) - 480) / 545 * 100
const lessonStyle = lesson => ({ top: `${position(lesson.start)}%`, height: `${(minutes(lesson.end) - minutes(lesson.start)) / 545 * 100}%` })
</script>

<template>
  <div class="school-calendar">

    <div v-if="view === 'month'" class="calendar-scroll" tabindex="0" role="region" aria-label="Monatskalender">
      <div class="month-calendar" :aria-label="periodTitle">
        <div class="month-weekdays"><strong v-for="day in ['Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.', 'So.']" :key="day">{{ day }}</strong></div>
        <div v-for="row in 6" :key="row" class="month-week">
          <div class="month-dates"><div v-for="day in monthDays.slice((row - 1) * 7, row * 7)" :key="day.key" :class="{ outside: day.outside, 'month-today': day.today }"><time :datetime="day.key" :aria-current="day.today ? 'date' : undefined">{{ day.date.getDate() }}</time></div></div>
          <CalendarRangeBars :dates="monthDays.slice((row - 1) * 7, row * 7).map(day => day.key)" :notes="calendarEntries" @select="selectedNote = $event" />
        </div>
      </div>
    </div>
    <div v-else class="calendar-scroll" tabindex="0" role="region" aria-label="Stundenplan von Montag bis Sonntag, horizontal scrollbar">
      <div class="timetable">
        <div class="day-headings"><span>Zeit</span><strong v-for="day in days" :key="day.label" :class="{ today: day.today }">{{ day.label }}</strong></div>
        <div class="week-note-grid"><span class="note-row-label">Termine</span><CalendarRangeBars :dates="days.map(day => dateKey(day.date))" :notes="calendarEntries" @select="selectedNote = $event" /></div>
        <div class="time-grid">
          <div class="time-axis" aria-label="Unterrichtsstunden">
            <div v-for="([start, end], index) in periods" :key="start" class="period-label" :style="{ top: `${position(start)}%`, height: `${(minutes(end) - minutes(start)) / 545 * 100}%` }"><span>{{ start }}</span><small>{{ index + 1 }}.</small><span>{{ end }}</span></div>
          </div>
          <div v-for="(day, index) in days" :key="day.label" class="day-column" :class="{ 'current-day': day.today }" :aria-label="day.label">
            <div v-for="[start, end] in periods" :key="start" class="period-line" :style="{ top: `${position(start)}%`, height: `${(minutes(end) - minutes(start)) / 545 * 100}%` }" aria-hidden="true"></div>
            <article v-for="lesson in lessons.filter(item => item.day === index)" :key="lesson.start" class="lesson" :class="`subject-${lesson.subject.toLowerCase()}`" :style="lessonStyle(lesson)">
              <strong>{{ lesson.className }}</strong><span>{{ lesson.subject }}</span><span v-if="lesson.room">Raum {{ lesson.room }}</span><time>{{ lesson.start }}–{{ lesson.end }}</time>
            </article>
          </div>
        </div>
      </div>
    </div>
    <Dialog :visible="!!selectedNote" modal :header="selectedNote?.title" :style="{ width: '30rem', maxWidth: 'calc(100vw - 2rem)' }" @update:visible="value => { if (!value) selectedNote = null }"><template #header><div class="appointment-detail-heading" :style="appointmentStyle(selectedNote)"><AppointmentMarker :important="selectedNote?.is_important === true" /><h3>{{ selectedNote?.title }}</h3></div></template><time v-if="selectedNote?.event_date">{{ new Date(selectedNote.event_date + 'T12:00:00').toLocaleDateString('de-DE') }}<template v-if="selectedNote.end_date"> – {{ new Date(selectedNote.end_date + 'T12:00:00').toLocaleDateString('de-DE') }}</template></time><p class="note-detail">{{ selectedNote?.note }}</p><p v-if="selectedNote?.source" class="note-source"><a :href="selectedNote.sourceUrl" target="_blank" rel="noopener noreferrer">{{ selectedNote.source }} ↗</a></p><template #footer><template v-if="selectedNote?.yearPlan"><Button label="Bearbeiten" @click="editYearEvent(selectedNote); selectedNote = null" /><Button label="Löschen" severity="danger" outlined @click="yearEditId = selectedNote.id; yearError = ''; yearDeleteOpen = true; selectedNote = null" /></template><template v-else-if="!selectedNote?.readonly"><Button label="Bearbeiten" @click="emit('edit-note', selectedNote); selectedNote = null" /><Button label="Löschen" severity="danger" outlined @click="emit('delete-note', selectedNote); selectedNote = null" /></template></template></Dialog>
    <Dialog v-model:visible="yearEditorOpen" modal header="Jahresplantermin bearbeiten" :style="{ width: '30rem', maxWidth: 'calc(100vw - 2rem)' }">
      <form class="year-form" @submit.prevent="saveYearEvent"><p>Die Änderung wird in diesem Browser gespeichert. Die Jahresplan-PDF bleibt unverändert.</p><label for="year-title">Titel</label><InputText id="year-title" v-model="yearForm.title" required /><label for="year-note">Beschreibung</label><Textarea id="year-note" v-model="yearForm.note" rows="5" /><label for="year-start">Startdatum</label><input id="year-start" v-model="yearForm.event_date" type="date" required /><label for="year-end">Enddatum (optional)</label><input id="year-end" v-model="yearForm.end_date" type="date" /><Message v-if="yearError" severity="error" :closable="false">{{ yearError }}</Message><div class="year-actions"><Button label="Abbrechen" severity="secondary" outlined type="button" @click="yearEditorOpen = false" /><Button label="Speichern" type="submit" /></div></form>
    </Dialog>
    <Dialog v-model:visible="yearDeleteOpen" modal header="Jahresplantermin löschen?" :style="{ width: '26rem', maxWidth: 'calc(100vw - 2rem)' }"><p>Der Termin wird in diesem Browser aus dem Kalender entfernt. Die Jahresplan-PDF bleibt unverändert.</p><Message v-if="yearError" severity="error" :closable="false">{{ yearError }}</Message><template #footer><Button label="Abbrechen" severity="secondary" outlined @click="yearDeleteOpen = false" /><Button label="Löschen" severity="danger" @click="deleteYearEvent" /></template></Dialog>
  </div>
</template>

<style scoped>
.year-form { display: grid; gap: 10px; }
.year-form p { line-height: 1.5; }
.year-form label { font-weight: 500; }
.year-form input[type="date"] { font: inherit; padding: 8px; border: 1px solid var(--school-border); border-radius: 4px; }
.year-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 12px; }
.school-calendar :deep(.calendar-toolbar > .p-button-text), .school-calendar :deep(.period-navigation .p-button-text) { color: var(--school-primary); }
.calendar-toolbar { display: flex; justify-content: flex-end; margin-bottom: 8px; }
.period-navigation { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
.period-navigation h2 { font-size: 16px; font-weight: 500; margin: 0; }
.week-note-grid { display: grid; grid-template-columns: 48px minmax(0, 1fr); border-bottom: 1px solid #dce3dd; }
.day-notes { min-width: 0; padding: 4px; border-left: 1px solid #e1e6df; }
.note-row-label { font-size: 10px; padding: 8px 2px; }
.calendar-note { box-sizing: border-box; min-width: 0; display: block; width: 100%; text-align: left; background: color-mix(in srgb, var(--school-primary) 10%, var(--school-surface)); border: 1px solid var(--school-border); border-radius: 4px; color: var(--school-text); font: inherit; font-size: 12px; padding: 5px; margin-top: 5px; overflow-wrap: anywhere; cursor: pointer; }
.calendar-note:hover { background: color-mix(in srgb, var(--school-primary) 18%, var(--school-surface)); }
.appointment-detail-heading { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-left: 4px solid var(--appointment-border); background: var(--appointment-bg); color: var(--appointment-ink); border-radius: 5px; min-width: 0; }
.appointment-detail-heading h3 { margin: 0; font-size: 20px; overflow-wrap: anywhere; }
.note-detail { white-space: pre-wrap; overflow-wrap: anywhere; user-select: text; }
.month-calendar { min-width: 490px; background: white; }
.month-weekdays, .month-dates { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)) repeat(2, minmax(0, .55fr)); }
.month-weekdays strong { font-size: 13px; text-align: center; padding: 10px 0; }
.month-week { border: 1px solid var(--school-border); background-image: linear-gradient(to right, transparent calc(16.3934% - 1px), var(--school-border) calc(16.3934% - 1px), var(--school-border) 16.3934%, transparent 16.3934%, transparent calc(32.7869% - 1px), var(--school-border) calc(32.7869% - 1px), var(--school-border) 32.7869%, transparent 32.7869%, transparent calc(49.1803% - 1px), var(--school-border) calc(49.1803% - 1px), var(--school-border) 49.1803%, transparent 49.1803%, transparent calc(65.5738% - 1px), var(--school-border) calc(65.5738% - 1px), var(--school-border) 65.5738%, transparent 65.5738%, transparent calc(81.9672% - 1px), var(--school-border) calc(81.9672% - 1px), var(--school-border) 81.9672%, transparent 81.9672%, transparent calc(90.9836% - 1px), var(--school-border) calc(90.9836% - 1px), var(--school-border) 90.9836%, transparent 90.9836%); }
.month-dates > div { min-width: 0; padding: 6px; font-size: 13px; }
.month-dates .outside { color: #7e8a81; background: #f3f5f2; }
.month-today > time { background: var(--school-primary); border-radius: 4px; color: white; padding: 2px 5px; }
.school-calendar { contain: inline-size; min-width: 0; width: 100%; max-width: 100%; }
.calendar-scroll { overflow-x: auto; max-width: 100%; min-width: 0; }
.timetable { width: 100%; min-width: 0; background: var(--school-surface); }
.day-headings { display: grid; grid-template-columns: 48px repeat(5, minmax(0, 1fr)) repeat(2, minmax(0, .55fr)); align-items: center; border-bottom: 1px solid #dce3dd; }
.day-headings > * { padding: 12px 3px; text-align: center; font-size: 11px; font-weight: 500; min-width: 0; overflow-wrap: anywhere; }
.day-headings .today { color: var(--school-primary); background: color-mix(in srgb, var(--school-primary) 10%, var(--school-surface)); }
.time-grid { display: grid; grid-template-columns: 48px repeat(5, minmax(0, 1fr)) repeat(2, minmax(0, .55fr)); height: 620px; }
.time-axis, .day-column { position: relative; }
.time-axis { background: var(--school-background); }
.period-label { position: absolute; left: 0; right: 0; display: flex; flex-direction: column; justify-content: space-between; align-items: center; font-size: 10px; color: #647168; padding: 2px 0; box-sizing: border-box; }
.period-label small { color: #8a968c; }
.day-column { border-left: 1px solid #e1e6df; background: var(--school-background); }
.current-day { background: color-mix(in srgb, var(--school-primary) 5%, var(--school-surface)); }
.period-line { position: absolute; width: 100%; border-top: 1px solid #dce3dd; border-bottom: 1px solid #e9ece7; box-sizing: border-box; }
.lesson { position: absolute; left: 3px; right: 3px; box-sizing: border-box; border: 1px solid var(--school-border); border-left: 3px solid var(--school-primary); background: color-mix(in srgb, var(--school-primary) 9%, var(--school-surface)); border-radius: 4px; padding: 4px 5px; display: flex; flex-direction: column; gap: 1px; font-size: 11px; overflow-wrap: anywhere; }
.lesson strong { font-size: 11px; }
.lesson time { margin-top: 2px; font-size: 10px; }
.subject-met { background: #e8eff8; border-color: #c9d9ed; border-left-color: #4f78a8; }
.subject-grd { background: #f5eddf; border-color: #e6d6b9; border-left-color: #ab8246; }
.subject-bpk { background: #f0eafa; border-color: #dcd0ed; border-left-color: #8863ad; }
@media (max-width: 740px) { .timetable { min-width: 650px; } }
</style>
