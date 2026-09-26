<script setup>
import { ref, onBeforeUnmount, watch } from 'vue'
import { rallyMuted } from './rallyAudio'
import { riddleAudio } from './riddles'
const props = defineProps({ visible: Boolean })
const panel = ref(null)
const sounds = [
  { label: 'Intro', url: '/rally/intro.mp3' },
  ...Array.from({ length: 9 }, (_, i) => ({ label: `Frage ${i + 1}`, url: riddleAudio(i + 1) })),
  { label: 'Geräusch (Frage 5)', url: '/rally/egg.wav' },
  { label: 'Türquietschen', url: '/rally/dor.wav' },
  { label: 'Jubel', url: '/rally/happy.wav' },
  { label: 'Monsterlachen', url: '/rally/monster-laughing.wav' },
  { label: 'Monstersound', url: '/rally/monster-background.wav' },
  { label: 'Game-Musik', url: '/rally/game_music.wav' },
  { label: 'Guitar-Musik', url: '/rally/guitar-background.wav' }
]
function stopOthers(current) {
  panel.value?.querySelectorAll('audio').forEach(audio => { if (audio !== current) audio.pause() })
}
watch(() => props.visible, visible => { if (!visible) stopOthers() })
onBeforeUnmount(() => stopOthers())
</script>
<template>
  <details ref="panel" class="manual-sounds" @toggle="!$event.target.open && stopOthers()">
    <summary>Alle Sounds einzeln abspielen</summary>
    <div class="sound-list">
      <button type="button" @click="stopOthers(); panel.open = false">Schließen</button>
      <label v-for="sound in sounds" :key="sound.url">
        {{ sound.label }}
        <audio controls preload="none" :src="sound.url" :muted="rallyMuted" :aria-label="sound.label" @play="stopOthers($event.target)"></audio>
      </label>
    </div>
  </details>
</template>
<style scoped>
.manual-sounds { margin-top: 20px; font-size: 14px; }
summary { color: #b6ff00; cursor: pointer; }
.sound-list { position: fixed; right: 12px; top: 80px; bottom: 20px; width: min(340px, calc(100vw - 24px)); overflow-y: auto; box-sizing: border-box; padding: 16px; border: 1px solid #b6ff00; border-radius: 8px; background: #09120f; z-index: 30; }
label { display: block; color: white; margin-bottom: 16px; }
button { margin-bottom: 16px; padding: 10px 16px; background: transparent; border: 1px solid #b6ff00; color: #b6ff00; border-radius: 5px; cursor: pointer; }
audio { display: block; width: 100%; height: 42px; margin-top: 6px; }
</style>
