<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { riddles, riddleAudio, isCorrectAnswer } from './riddles'
import { rallyMuted } from './rallyAudio'
import IntroMonster from './IntroMonster.vue'
const props = defineProps({ station: Object, visible: Boolean })
defineEmits(['continue', 'collected'])
const ready = ref(false), released = ref(false), freed = ref(false), feedback = ref('')
const narration = ref(null)
const audioError = ref('')
let questionTimer
async function playQuestion() {
  if (!props.visible || released.value || !narration.value) return
  audioError.value = ''
  try { await narration.value.play() }
  catch { audioError.value = 'Zum Anhören bitte auf „Frage abspielen“ tippen.' }
}
function scheduleQuestion() {
  clearTimeout(questionTimer)
  if (props.station.id !== 9) questionTimer = setTimeout(playQuestion, 2000)
}
function stopQuestion() { clearTimeout(questionTimer); narration.value?.pause() }
onMounted(scheduleQuestion)
watch(() => props.visible, visible => { if (visible) scheduleQuestion(); else stopQuestion() })
onBeforeUnmount(stopQuestion)
const riddle = computed(() => riddles[props.station.id])
const answers = computed(() => riddle.value?.answers.map((text, index) => `${'ABCD'[index]}) ${text}`) || [])
function answer(index) {
  if (!ready.value || released.value) return
  if (isCorrectAnswer(props.station.id, index)) { released.value = true; stopQuestion(); feedback.value = 'Richtig! Die Tür öffnet sich …' }
  else feedback.value = 'Noch nicht richtig. Versucht es noch einmal!'
}
</script>
<template>
  <section class="prison-encounter">
    <audio v-if="station.id !== 9" ref="narration" :src="riddleAudio(station.id)" :muted="rallyMuted" preload="auto"></audio>
    <h1>{{ station.name }}</h1>
    <div class="model">
      <IntroMonster :model-url="station.modelUrl" :label="station.name" :playing="true" :visible="visible"
        :imprisoned="station.id !== 9" :collect-after-release="Boolean(riddle)" :released="released" @prison-ready="ready = true" @freed="freed = true; feedback = 'Geschafft! Die Creatur ist befreit!'" @collected="$emit('collected')" />
    </div>
    <div v-if="station.id !== 9" class="riddle">
      <button v-if="!released" class="question-play" @click="playQuestion">Frage abspielen</button>
      <p v-if="audioError" role="alert">{{ audioError }}</p>
      <div class="answers"><button v-for="(option, index) in answers" :key="option" :disabled="!ready || released" @click="answer(index)">{{ option }}</button></div>
      <p v-if="feedback || !ready" role="status">{{ feedback || 'Das Gefängnis wird geladen …' }}</p>
    </div>
    <button v-if="station.id === 9" @click="$emit('continue')">Scanner öffnen</button>
  </section>
</template>
<style scoped>
.prison-encounter { width: 100%; height: 100%; min-height: 0; display: flex; flex-direction: column; text-align: center; gap: 8px; pointer-events: none; }
h1 { position: relative; z-index: 1; flex: 0 0 auto; font-size: clamp(20px, 3vw, 32px); margin: 0; }
.model { position: absolute; inset: 0; z-index: 0; }
.model :deep(.monster-view) { min-height: 0; }
.riddle { position: relative; z-index: 1; pointer-events: auto; flex: 0 0 auto; width: 100%; max-width: 620px; margin: auto auto 0; padding: 10px; box-sizing: border-box; background: #14231ed9; border: 1px solid #a5cfa54d; border-radius: 12px; }
p { line-height: 1.3; margin: 6px 0 0; font-size: clamp(11px, 1.7vw, 14px); }
.answers { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; margin-top: 8px; }
button { padding: 10px 6px; border: 1px solid #a5cfa56b; border-radius: 8px; background: #253c33; color: #eefbe7; font: inherit; font-size: clamp(12px, 2vw, 16px); cursor: pointer; }
button:disabled { opacity: .5; cursor: default; } button:focus-visible { outline: 3px solid #d3efb6; }
.question-play { padding: 6px 12px; }
.prison-encounter > button { position: relative; z-index: 1; pointer-events: auto; flex: 0 0 auto; align-self: center; }
@media (max-height: 550px) and (min-width: 600px) {
  .riddle { max-width: 460px; padding: 6px; }
  .answers { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 4px; }
  button { padding: 6px; }
}
</style>
