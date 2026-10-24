<script setup>
import { computed } from 'vue'
import { calendarRanges } from './calendarRanges'
const props = defineProps({ notes: { type: Array, default: () => [] }, dates: { type: Array, required: true } })
defineEmits(['select'])
const segments = computed(() => calendarRanges(props.notes, props.dates))
</script>

<template>
  <div class="range-bars" aria-label="Termine">
    <button v-for="segment in segments" :key="segment.note.id" class="range-bar" :class="{ 'continues-before': segment.continuesBefore, 'continues-after': segment.continuesAfter }" :style="{ gridColumn: `${segment.start + 1} / ${segment.end + 2}`, gridRow: segment.lane + 1 }" :title="`${segment.note.title}: ${segment.note.event_date} – ${segment.note.end_date || segment.note.event_date}`" @click="$emit('select', segment.note)">{{ segment.continuesBefore ? '‹ ' : '' }}{{ segment.note.title }}{{ segment.continuesAfter ? ' ›' : '' }}</button>
  </div>
</template>

<style scoped>
.range-bars { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); grid-auto-rows: minmax(28px, auto); gap: 4px 0; padding: 4px 0; min-height: 28px; }
.range-bar { min-width: 0; margin: 0 3px; border: 1px solid #afd0bb; border-radius: 5px; background: #d8ebdf; color: #22563a; text-align: left; padding: 5px 7px; font: inherit; font-size: 12px; cursor: pointer; overflow-wrap: anywhere; }
.range-bar:hover { background: #bddfc9; }
.continues-before { border-top-left-radius: 0; border-bottom-left-radius: 0; }
.continues-after { border-top-right-radius: 0; border-bottom-right-radius: 0; }
</style>
