<script setup>
import { computed } from 'vue'
import { calendarRanges } from './calendarRanges'
import { appointmentStyle } from './appointmentAppearance'
import AppointmentMarker from './AppointmentMarker.vue'
const props = defineProps({ notes: { type: Array, default: () => [] }, dates: { type: Array, required: true } })
defineEmits(['select'])
const segments = computed(() => calendarRanges(props.notes, props.dates))
const today = () => {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}
const isPast = note => (note.end_date || note.event_date) < today()
</script>

<template>
  <div class="range-bars" aria-label="Termine">
    <button v-for="segment in segments" :key="segment.note.id" class="range-bar" :class="{ 'past-event': isPast(segment.note), 'exam-event': segment.note.category === 'exam', 'continues-before': segment.continuesBefore, 'continues-after': segment.continuesAfter }" :style="{ ...appointmentStyle(segment.note), gridColumn: `${segment.start + 1} / ${segment.end + 2}`, gridRow: segment.lane + 1 }" :title="`${segment.note.title}: ${segment.note.event_date} – ${segment.note.end_date || segment.note.event_date}`" @click="$emit('select', segment.note)"><AppointmentMarker :important="segment.note.is_important === true" /><span class="range-content"><span class="range-title">{{ segment.continuesBefore ? '‹ ' : '' }}{{ segment.note.title }}{{ segment.continuesAfter ? ' ›' : '' }}</span><span v-if="!isPast(segment.note) && segment.note.note" class="range-description">{{ segment.note.note }}</span></span></button>
  </div>
</template>

<style scoped>
.range-bars { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)) repeat(2, minmax(0, .55fr)); grid-auto-rows: max-content; align-items: start; gap: 4px 0; padding: 4px 0; }
.range-bar { min-width: 0; margin: 0 3px; border: 1px solid var(--appointment-border); border-radius: 5px; background: var(--appointment-bg); color: var(--appointment-ink); text-align: left; padding: 5px 7px; font: inherit; font-size: 12px; cursor: pointer; overflow-wrap: anywhere; display: flex; align-items: center; gap: 5px; }
.range-content { min-width: 0; flex: 1; }
.range-title, .range-description { display: block; }
.range-description { white-space: pre-wrap; margin-top: 4px; }
.past-event { align-self: start; }
.past-event .range-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.range-bar:hover { filter: brightness(.96); }
.range-bar:focus-visible { outline: 2px solid var(--appointment-ink); outline-offset: 2px; }
.continues-before { border-top-left-radius: 0; border-bottom-left-radius: 0; }
.continues-after { border-top-right-radius: 0; border-bottom-right-radius: 0; }
</style>
