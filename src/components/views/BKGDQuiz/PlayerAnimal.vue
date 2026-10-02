<script setup>
import { computed } from 'vue'
const props = defineProps({ id: { type: String, required: true } })
const animals = ['1f436', '1f431', '1f42d', '1f439', '1f430', '1f98a', '1f43b', '1f43c', '1f428', '1f42f', '1f981', '1f438', '1f435', '1f427', '1f989', '1f984']
// Seed the assignment with Firebase's random UID so every screen agrees,
// including after reloading, without adding fields to existing game records.
const source = computed(() => {
  let seed = 2166136261
  for (const char of props.id) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619)
  return `/twemoji/${animals[(seed >>> 0) % animals.length]}.svg`
})
</script>
<template><img class="player-animal" :src="source" alt="" width="56" height="56"></template>
<style scoped>
.player-animal { width: 56px; height: 56px; object-fit: contain; vertical-align: middle; margin-right: 14px; flex-shrink: 0; }
@media (max-width: 600px) { .player-animal { width: 40px; height: 40px; margin-right: 10px; } }
</style>
