<script setup>
import { computed, ref } from 'vue'

function mondayOf(date) {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  monday.setDate(monday.getDate() - (monday.getDay() + 6) % 7)
  return monday
}
const week = ref(mondayOf(new Date()))
const days = computed(() => Array.from({ length: 5 }, (_, index) => {
  const date = new Date(week.value)
  date.setDate(date.getDate() + index)
  return { date, label: date.toLocaleDateString('de-DE', { weekday: 'short' }), today: date.toDateString() === new Date().toDateString() }
}))
const lessons = [
  { day: 0, start: '08:00', end: '09:30', className: '3TGG2', subject: 'GMT', room: '229' },
  { day: 0, start: '09:50', end: '11:20', className: '3BKGD1/1', subject: 'NFZ', room: '' },
  { day: 0, start: '13:00', end: '16:15', className: '3BKGD1/1', subject: 'GRD', room: '429' },
  { day: 1, start: '08:00', end: '09:30', className: '3TGG1/2', subject: 'GMT', room: '429' },
  { day: 1, start: '09:50', end: '11:20', className: '3TGG1/2', subject: 'GMT', room: '429' },
  { day: 1, start: '13:45', end: '15:30', className: '3TGG1/2', subject: 'GMT', room: '429' },
  { day: 2, start: '09:50', end: '11:20', className: '1BFD1', subject: 'BPK', room: '103' },
  { day: 4, start: '09:50', end: '13:00', className: '3BKGD1/1', subject: 'MET', room: '118' }
]
const periods = [
  ['08:00', '08:45'], ['08:45', '09:30'], ['09:50', '10:35'],
  ['10:35', '11:20'], ['11:30', '12:15'], ['12:15', '13:00'],
  ['13:00', '13:45'], ['13:45', '14:30'], ['14:45', '15:30'],
  ['15:30', '16:15'], ['16:20', '17:05']
]
const minutes = value => { const [h, m] = value.split(':').map(Number); return h * 60 + m }
const position = time => (minutes(time) - 480) / 545 * 100
const lessonStyle = lesson => ({ top: `${position(lesson.start)}%`, height: `${(minutes(lesson.end) - minutes(lesson.start)) / 545 * 100}%` })
</script>

<template>
  <div class="school-calendar">
    <div class="calendar-scroll" tabindex="0" role="region" aria-label="Stundenplan von Montag bis Freitag, horizontal scrollbar">
      <div class="timetable">
        <div class="day-headings"><span>Zeit</span><strong v-for="day in days" :key="day.label" :class="{ today: day.today }">{{ day.label }}</strong></div>
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
  </div>
</template>

<style scoped>
.calendar-scroll { overflow-x: auto; }
.timetable { min-width: 650px; background: #fff; }
.day-headings { display: grid; grid-template-columns: 64px repeat(5, minmax(0, 1fr)); align-items: center; border-bottom: 1px solid #dce3dd; }
.day-headings > * { padding: 12px 3px; text-align: center; font-size: 13px; font-weight: 500; }
.day-headings .today { color: #007c4a; background: #e9f4ed; }
.time-grid { display: grid; grid-template-columns: 64px repeat(5, minmax(0, 1fr)); height: 810px; }
.time-axis, .day-column { position: relative; }
.time-axis { background: #f6f8f5; }
.period-label { position: absolute; left: 0; right: 0; display: flex; flex-direction: column; justify-content: space-between; align-items: center; font-size: 10px; color: #647168; padding: 2px 0; box-sizing: border-box; }
.period-label small { color: #8a968c; }
.day-column { border-left: 1px solid #e1e6df; background: #f5f7f4; }
.current-day { background: #f0f7f2; }
.period-line { position: absolute; width: 100%; border-top: 1px solid #dce3dd; border-bottom: 1px solid #e9ece7; box-sizing: border-box; }
.lesson { position: absolute; left: 3px; right: 3px; box-sizing: border-box; border: 1px solid #cbded0; border-left: 3px solid #33855c; background: #eaf4ed; border-radius: 4px; padding: 8px 5px; display: flex; flex-direction: column; gap: 3px; font-size: 11px; overflow-wrap: anywhere; }
.lesson strong { font-size: 12px; }
.lesson time { margin-top: 5px; font-size: 10px; }
.subject-met { background: #e8eff8; border-color: #c9d9ed; border-left-color: #4f78a8; }
.subject-grd { background: #f5eddf; border-color: #e6d6b9; border-left-color: #ab8246; }
.subject-bpk { background: #f0eafa; border-color: #dcd0ed; border-left-color: #8863ad; }
</style>
