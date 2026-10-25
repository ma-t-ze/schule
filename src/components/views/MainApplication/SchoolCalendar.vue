<script setup>
import { computed, ref } from 'vue'
import SelectButton from 'primevue/selectbutton'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import CalendarRangeBars from './CalendarRangeBars.vue'
import { lessons, periods } from './schoolTimetable'

const emit = defineEmits(['edit-note', 'delete-note'])
const props = defineProps({ notes: { type: Array, default: () => [] } })
const view = ref('week')
const views = [{ label: 'Woche', value: 'week' }, { label: 'Monat', value: 'month' }]
const selectedNote = ref(null)
const dateKey = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
const coversDay = (note, key) => note.event_date && key >= note.event_date && key <= (note.end_date || note.event_date)
const focus = ref(new Date())
const monthDays = computed(() => {
  const start = mondayOf(new Date(focus.value.getFullYear(), focus.value.getMonth(), 1))
  return Array.from({ length: 42 }, (_, i) => {
    const date = new Date(start); date.setDate(start.getDate() + i)
    const key = dateKey(date)
    return { date, key, outside: date.getMonth() !== focus.value.getMonth(), today: key === dateKey(new Date()), notes: props.notes.filter(note => coversDay(note, key)) }
  })
})
const periodTitle = computed(() => {
  if (view.value === 'month') return focus.value.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
  const end = new Date(mondayOf(focus.value)); end.setDate(end.getDate() + 6)
  return `${mondayOf(focus.value).toLocaleDateString('de-DE')} – ${end.toLocaleDateString('de-DE')}`
})
function navigate(direction) {
  if (view.value === 'month') focus.value = new Date(focus.value.getFullYear(), focus.value.getMonth() + direction, 1)
  else { const next = new Date(focus.value); next.setDate(next.getDate() + direction * 7); focus.value = next }
}

function mondayOf(date) {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  monday.setDate(monday.getDate() - (monday.getDay() + 6) % 7)
  return monday
}
const week = computed(() => mondayOf(focus.value))
const days = computed(() => Array.from({ length: 7 }, (_, index) => {
  const date = new Date(week.value)
  date.setDate(date.getDate() + index)
  return { date, notes: props.notes.filter(note => coversDay(note, dateKey(date))), label: date.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' }), today: date.toDateString() === new Date().toDateString() }
}))
const minutes = value => { const [h, m] = value.split(':').map(Number); return h * 60 + m }
const position = time => (minutes(time) - 480) / 545 * 100
const lessonStyle = lesson => ({ top: `${position(lesson.start)}%`, height: `${(minutes(lesson.end) - minutes(lesson.start)) / 545 * 100}%` })
</script>

<template>
  <div class="school-calendar">
    <div class="calendar-toolbar"><div class="calendar-view-controls"><SelectButton v-model="view" :options="views" option-label="label" option-value="value" :allow-empty="false" aria-label="Kalenderansicht" /><Button v-if="view === 'week'" class="break-alarm-link" as="a" href="/pausenalarm" target="_blank" rel="noopener noreferrer" label="Pausenalarm aktivieren" size="small" /></div><Button label="Heute" text size="small" @click="focus = new Date()" /></div>
    <div class="period-navigation"><Button label="‹" :aria-label="view === 'week' ? 'Vorherige Woche' : 'Vorheriger Monat'" text @click="navigate(-1)" /><h2 aria-live="polite">{{ periodTitle }}</h2><Button label="›" :aria-label="view === 'week' ? 'Nächste Woche' : 'Nächster Monat'" text @click="navigate(1)" /></div>
    <div v-if="view === 'month'" class="calendar-scroll" tabindex="0" role="region" aria-label="Monatskalender">
      <div class="month-calendar" :aria-label="periodTitle">
        <div class="month-weekdays"><strong v-for="day in ['Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.', 'So.']" :key="day">{{ day }}</strong></div>
        <div v-for="row in 6" :key="row" class="month-week">
          <div class="month-dates"><div v-for="day in monthDays.slice((row - 1) * 7, row * 7)" :key="day.key" :class="{ outside: day.outside, 'month-today': day.today }"><time :datetime="day.key" :aria-current="day.today ? 'date' : undefined">{{ day.date.getDate() }}</time></div></div>
          <CalendarRangeBars :dates="monthDays.slice((row - 1) * 7, row * 7).map(day => day.key)" :notes="notes" @select="selectedNote = $event" />
        </div>
      </div>
    </div>
    <div v-else class="calendar-scroll" tabindex="0" role="region" aria-label="Stundenplan von Montag bis Sonntag, horizontal scrollbar">
      <div class="timetable">
        <div class="day-headings"><span>Zeit</span><strong v-for="day in days" :key="day.label" :class="{ today: day.today }">{{ day.label }}</strong></div>
        <div class="week-note-grid"><span class="note-row-label">Termine</span><CalendarRangeBars :dates="days.map(day => dateKey(day.date))" :notes="notes" @select="selectedNote = $event" /></div>
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
    <Dialog :visible="!!selectedNote" modal :header="selectedNote?.title" :style="{ width: '30rem', maxWidth: 'calc(100vw - 2rem)' }" @update:visible="value => { if (!value) selectedNote = null }"><time v-if="selectedNote?.event_date">{{ new Date(selectedNote.event_date + 'T12:00:00').toLocaleDateString('de-DE') }}<template v-if="selectedNote.end_date"> – {{ new Date(selectedNote.end_date + 'T12:00:00').toLocaleDateString('de-DE') }}</template></time><p class="note-detail">{{ selectedNote?.note }}</p><template #footer><Button label="Bearbeiten" @click="emit('edit-note', selectedNote); selectedNote = null" /><Button label="Löschen" severity="danger" outlined @click="emit('delete-note', selectedNote); selectedNote = null" /></template></Dialog>
  </div>
</template>

<style scoped>
.break-alarm-link, .break-alarm-link:hover, .break-alarm-link:focus-visible { text-decoration: none; }
.calendar-view-controls { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.calendar-toolbar, .period-navigation { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
.period-navigation h2 { font-size: 16px; font-weight: 500; margin: 0; }
.week-note-grid { display: grid; grid-template-columns: 48px minmax(0, 1fr); border-bottom: 1px solid #dce3dd; }
.day-notes { min-width: 0; padding: 4px; border-left: 1px solid #e1e6df; }
.note-row-label { font-size: 10px; padding: 8px 2px; }
.calendar-note { box-sizing: border-box; min-width: 0; display: block; width: 100%; text-align: left; background: #e1efe7; border: 1px solid #c4dfce; border-radius: 4px; color: #22563a; font: inherit; font-size: 12px; padding: 5px; margin-top: 5px; overflow-wrap: anywhere; cursor: pointer; }
.calendar-note:hover { background: #cce6d5; }
.note-detail { white-space: pre-wrap; overflow-wrap: anywhere; user-select: text; }
.month-calendar { min-width: 490px; background: white; }
.month-weekdays, .month-dates { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); }
.month-weekdays strong { font-size: 13px; text-align: center; padding: 10px 0; }
.month-week { border: 1px solid #dce3dd; min-height: 100px; background-image: linear-gradient(to right, transparent calc(100% - 1px), #e3e8e1 1px); background-size: calc(100% / 7) 100%; }
.month-dates > div { padding: 6px; font-size: 13px; }
.month-dates .outside { color: #7e8a81; background: #f3f5f2; }
.month-today > time { background: #007c4a; border-radius: 4px; color: white; padding: 2px 5px; }
.school-calendar { contain: inline-size; min-width: 0; width: 100%; max-width: 100%; }
.calendar-scroll { overflow-x: auto; max-width: 100%; min-width: 0; }
.timetable { width: 100%; min-width: 0; background: #fff; }
.day-headings { display: grid; grid-template-columns: 48px repeat(7, minmax(0, 1fr)); align-items: center; border-bottom: 1px solid #dce3dd; }
.day-headings > * { padding: 12px 3px; text-align: center; font-size: 11px; font-weight: 500; min-width: 0; overflow-wrap: anywhere; }
.day-headings .today { color: #007c4a; background: #e9f4ed; }
.time-grid { display: grid; grid-template-columns: 48px repeat(7, minmax(0, 1fr)); height: 810px; }
.time-axis, .day-column { position: relative; }
.time-axis { background: #f6f8f5; }
.period-label { position: absolute; left: 0; right: 0; display: flex; flex-direction: column; justify-content: space-between; align-items: center; font-size: 10px; color: #647168; padding: 2px 0; box-sizing: border-box; }
.period-label small { color: #8a968c; }
.day-column { border-left: 1px solid #e1e6df; background: #f5f7f4; }
.current-day { background: #f0f7f2; }
.period-line { position: absolute; width: 100%; border-top: 1px solid #dce3dd; border-bottom: 1px solid #e9ece7; box-sizing: border-box; }
.lesson { position: absolute; left: 3px; right: 3px; box-sizing: border-box; border: 1px solid #cbded0; border-left: 3px solid #33855c; background: #eaf4ed; border-radius: 4px; padding: 8px 5px; display: flex; flex-direction: column; gap: 3px; font-size: 11px; overflow-wrap: anywhere; }
.lesson strong { font-size: 11px; }
.lesson time { margin-top: 5px; font-size: 10px; }
.subject-met { background: #e8eff8; border-color: #c9d9ed; border-left-color: #4f78a8; }
.subject-grd { background: #f5eddf; border-color: #e6d6b9; border-left-color: #ab8246; }
.subject-bpk { background: #f0eafa; border-color: #dcd0ed; border-left-color: #8863ad; }
@media (max-width: 740px) { .timetable { min-width: 650px; } }
</style>
