<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { rallyMuted } from './rallyAudio'
const props = defineProps({ active: Boolean })
const emit = defineEmits(['won', 'lost', 'close'])
const frame = ref(null)
const ready = ref(false)
const error = ref(false)
const paused = ref(false)
const music = ref(null)
let completed = false
let disposed = false
let loadTimer
function shouldPlayMusic() {
  return props.active && !paused.value && !error.value && !completed && !disposed && !document.hidden
}
function syncMusic() {
  const audio = music.value
  if (!audio) return
  if (!shouldPlayMusic()) { audio.pause(); return }
  audio.volume = 0.1
  audio.play().then(() => { if (!shouldPlayMusic()) audio.pause() }).catch(() => {})
}
function close() {
  music.value?.pause()
  emit('close')
}
function sync() {
  frame.value?.contentWindow?.postMessage({ source: 'rally-host', active: props.active && !paused.value }, window.location.origin)
  syncMusic()
}
function receive(event) {
  if (event.origin !== window.location.origin || event.source !== frame.value?.contentWindow || event.data?.source !== 'rally-space-invaders') return
  if (event.data.type === 'ready') {
    clearTimeout(loadTimer)
    ready.value = true
    error.value = false
    sync()
  } else if (event.data.type === 'error') {
    clearTimeout(loadTimer)
    error.value = true
  } else if (ready.value && !completed && ['won', 'lost'].includes(event.data.type)) {
    completed = true
    music.value?.pause()
    emit(event.data.type)
  }
}
watch(() => props.active, sync)
watch(error, syncMusic)
watch(paused, () => { sync(); if (!paused.value) frame.value?.contentWindow?.focus() })
onMounted(() => {
  window.addEventListener('message', receive)
  document.addEventListener('visibilitychange', syncMusic)
  syncMusic()
  loadTimer = setTimeout(() => { if (!ready.value) error.value = true }, 15000)
})
onBeforeUnmount(() => {
  disposed = true
  music.value?.pause()
  clearTimeout(loadTimer)
  window.removeEventListener('message', receive)
  document.removeEventListener('visibilitychange', syncMusic)
})
</script>

<template>
  <Teleport to="body">
  <div class="space-game">
    <audio ref="music" src="/rally/game_music.wav" :muted="rallyMuted" preload="auto" loop></audio>
    <header><button @click="paused = !paused">{{ paused ? 'Weiterspielen' : 'Pause' }}</button><button @click="close">Spiel schließen</button></header>
    <p v-if="error" role="alert">Das Spiel konnte nicht geladen werden. Bitte schließen und erneut starten.</p>
    <p v-else-if="!ready" role="status">Spiel wird geladen …</p>
    <p v-if="paused" role="status">Spiel pausiert.</p>
    <iframe ref="frame" src="/rally/space-invaders/index.html" title="Space Invaders" @load="sync" />
    <small><a href="https://github.com/ozelentok/SpaceInvaders" target="_blank" rel="noopener noreferrer">Space Invaders · Oz Elentok</a> · <a href="/rally/space-invaders/LICENSE.txt" target="_blank" rel="noopener noreferrer">MIT-Lizenz</a></small>
  </div>
  </Teleport>
</template>

<style scoped>
.space-game { position: fixed; inset: 76px max(12px, 5vw) 12px; z-index: 15; display: flex; flex-direction: column; gap: 8px; min-height: 0; padding: 12px; box-sizing: border-box; background: #050c09f5; color: white; font-family: sans-serif; pointer-events: auto; border: 1px solid #b6ff00; border-radius: 14px; }
header { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; }
button { border: 1px solid #b6ff00; color: #b6ff00; background: transparent; border-radius: 8px; padding: 10px; cursor: pointer; }
p { margin: 0; font-size: clamp(11px, 1.5vw, 14px); line-height: 1.35; }
iframe { flex: 1; width: 100%; min-height: 0; border: 0; }
small { font-size: 10px; }
a { color: #b6ff00; }
</style>
