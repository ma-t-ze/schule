<script setup>
import { computed, onActivated, onDeactivated, onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import { lessons } from './schoolTimetable'
import { breakAlarmState } from './breakAlarm'

const now = ref(new Date())
const enabled = ref(true)
const state = computed(() => breakAlarmState(now.value))
const active = computed(() => enabled.value && !!state.value.active)
const clock = computed(() => now.value.toLocaleTimeString('de-DE', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }))
const dayLabel = computed(() => now.value.toLocaleDateString('de-DE', { timeZone: 'Europe/Berlin', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }))
const todayLessons = computed(() => lessons.filter(lesson => lesson.day === state.value.weekday - 1 && state.value.schoolDay))
const lessonSeconds = time => { const [h, m] = time.split(':').map(Number); return h * 3600 + m * 60 }
const running = lesson => state.value.seconds >= lessonSeconds(lesson.start) && state.value.seconds < lessonSeconds(lesson.end)
let timer
function tick() { now.value = new Date() }
function start() {
  tick()
  if (timer) return
  timer = setInterval(tick, 1000)
  document.addEventListener('visibilitychange', tick)
}
function stop() { clearInterval(timer); timer = null; document.removeEventListener('visibilitychange', tick) }
onMounted(start)
onActivated(start)
onDeactivated(stop)
onBeforeUnmount(stop)
</script>

<template>
  <main class="break-page" :class="{ 'alarm-active': active }">
    <div class="break-content">
      <header><RouterLink to="/">← Zur Startseite</RouterLink><Button :label="enabled ? 'Pausenalarm deaktivieren' : 'Pausenalarm aktivieren'" severity="secondary" outlined size="small" @click="enabled = !enabled" /></header>
      <div class="clock-section"><p>{{ dayLabel }}</p><time class="clock" :datetime="now.toISOString()" aria-label="Aktuelle Uhrzeit">{{ clock }}</time><Tag :value="enabled ? 'Pausenalarm aktiv' : 'Pausenalarm aus'" :severity="enabled ? 'success' : 'secondary'" /></div>
      <section class="alarm-message" aria-live="polite" aria-atomic="true">
        <template v-if="active"><h1>Gleich Pause <span role="img" aria-label="lächelndes Gesicht">😊</span></h1><p>Pause um {{ state.active.label }}</p></template>
        <template v-else><h1>Dein Stundenplan heute</h1><p v-if="!enabled">Der Pausenalarm ist ausgeschaltet.</p><p v-else-if="state.next">Die nächste Erinnerung erscheint zwei Minuten vor {{ state.next.label }}.</p><p v-else-if="state.schoolDay">Für heute stehen keine weiteren Pausenerinnerungen an.</p><p v-else>Am Wochenende ist der Pausenalarm aus.</p></template>
      </section>
      <div class="today-lessons"><Card v-for="lesson in todayLessons" :key="lesson.start" class="lesson-card" :class="{ current: running(lesson) }"><template #content><div class="lesson-details"><strong class="lesson-time">{{ lesson.start }}–{{ lesson.end }}</strong><div><h2>{{ lesson.className }}</h2><p>{{ lesson.subject }}<template v-if="lesson.room"> · Raum {{ lesson.room }}</template></p></div><Tag v-if="running(lesson)" value="Jetzt" severity="success" /></div></template></Card><p v-if="!todayLessons.length" class="empty-day">Für heute ist kein Unterricht im Stundenplan eingetragen.</p></div>
      <footer>Erinnerungen montags bis freitags: 9:28–9:30 Uhr und 11:18–11:20 Uhr. Lass diese Seite geöffnet.</footer>
    </div>
  </main>
</template>

<style scoped>
.break-page { position: relative; isolation: isolate; min-height: 100vh; background: #f5f8f4; color: #173c28; padding: 24px; box-sizing: border-box; }
.break-page::before { content: ''; position: fixed; inset: 0; z-index: -1; background: #47c77d; opacity: 0; pointer-events: none; }
.alarm-active::before { animation: break-glow 6s ease-in-out infinite; }
@keyframes break-glow { 0%, 100% { opacity: 0.12; } 50% { opacity: 0.85; } }
.break-content { max-width: 1000px; margin: 0 auto; }
header { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
header a { color: #176746; text-decoration: none; }
.clock-section { text-align: center; margin: 40px 0 20px; }
.clock-section p { margin: 0 0 8px; font-size: clamp(16px, 2vw, 23px); }
.clock { display: block; font-size: clamp(28px, 4vw, 44px); line-height: 1.1; font-variant-numeric: tabular-nums; font-weight: 500; margin-bottom: 16px; }
.alarm-message { text-align: center; min-height: 130px; margin: 32px 0; }
h1 { font-size: clamp(28px, 5vw, 58px); margin: 0 0 12px; font-weight: 500; }
.alarm-message p { margin: 0; font-size: 18px; }
.today-lessons { display: grid; gap: 14px; }
.lesson-card { border: 1px solid #d6e3d9; box-shadow: none; background: #ffffffdf; }
.lesson-card.current { border: 2px solid #007c4a; }
.lesson-details { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; }
.lesson-time { font-size: 23px; font-variant-numeric: tabular-nums; }
h2 { margin: 0 0 4px; font-size: 22px; font-weight: 500; }
.lesson-details p { margin: 0; color: #53695b; }
.empty-day { text-align: center; }
footer { text-align: center; color: #526b5b; font-size: 13px; margin-top: 32px; }
@media (prefers-reduced-motion: reduce) { .alarm-active::before { animation: none; opacity: 0.65; } }
@media (max-width: 600px) { .break-page { padding: 16px; } .clock-section { margin-top: 28px; } }
</style>
