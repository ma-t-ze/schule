<script setup>
import { computed, ref, shallowRef, onMounted, onBeforeUnmount, watch } from 'vue'
import { riddles, riddleAudio, isCorrectTextAnswer } from './riddles'
import { createRallySound } from './rallyAudio'
import IntroMonster from './IntroMonster.vue'
import SpaceInvaders from './SpaceInvaders.vue'
import { isCorrectFinalCode } from './stations'
const props = defineProps({ station: Object, visible: Boolean, remotelyReleased: Boolean })
const emit = defineEmits(['continue', 'collected', 'wrong-answer', 'ship-departed', 'released'])
const monsterWarning = ref(false)
const gameOpen = ref(false)
const isGameStation = computed(() => props.station.id === 2)
const isAudioOnlyStation = computed(() => [3, 5].includes(props.station.id))
const isSoundStation = computed(() => props.station.id === 5)
const isFinalStation = computed(() => props.station.id === 9)
const ready = ref(false), released = ref(false), freed = ref(false), feedback = ref('')
const narration = shallowRef(createRallySound(riddleAudio(props.station.id), { onended: questionEnded }))
const eggAudio = shallowRef(props.station.id === 5 ? createRallySound('/rally/egg.wav') : null)
const doorAudio = shallowRef(props.station.id !== 9 ? createRallySound('/rally/dor.wav') : null)
const happyAudio = shallowRef(createRallySound('/rally/happy.wav'))
const laughAudio = shallowRef(createRallySound('/rally/monster-laughing.wav'))
const finaleMusic = shallowRef(props.station.id === 9 ? createRallySound('/rally/game_music.wav', { loop: true }) : null)
const stationSounds = [narration, eggAudio, doorAudio, happyAudio, laughAudio, finaleMusic]
onMounted(() => stationSounds.forEach(sound => sound.value?.preload().catch(() => {})))
onBeforeUnmount(() => stationSounds.forEach(sound => sound.value?.dispose()))
let disposed = false
async function playFinaleMusic() {
  const audio = finaleMusic.value
  if (!audio || !released.value || !props.visible || disposed) return
  audio.volume = 0.1
  try {
    await audio.play()
    if (disposed || !props.visible) audio.pause()
  } catch { /* The finale remains visible if playback is blocked. */ }
}
watch(() => props.visible, visible => { if (visible) playFinaleMusic(); else finaleMusic.value?.pause() })
onBeforeUnmount(() => finaleMusic.value?.pause())
async function playEffect(audio) {
  if (!audio || !props.visible) return
  audio.currentTime = 0
  try {
    await audio.play()
    if (disposed || !props.visible) audio.pause()
  } catch { /* Animations still work if audio is unavailable. */ }
}
const audioError = ref('')
const answerDialog = ref(null)
const answerText = ref('')
function openAnswerDialog() {
  if (isAudioOnlyStation.value) return
  if ((!ready.value && !isFinalStation.value) || released.value || monsterWarning.value) return
  answerText.value = ''
  stopQuestion()
  answerDialog.value?.showModal()
}
let questionTimer, eggTimer
async function playQuestion() {
  if (gameOpen.value || !props.visible || released.value || !narration.value) return
  clearTimeout(questionTimer)
  clearTimeout(eggTimer)
  eggAudio.value?.pause()
  if (isSoundStation.value) narration.value.currentTime = 0
  audioError.value = ''
  const audio = narration.value
  try {
    await audio.play()
    if (disposed || !props.visible || released.value) audio.pause()
  }
  catch { audioError.value = 'Zum Anhören bitte auf „Frage abspielen“ tippen.' }
}
function questionEnded() {
  clearTimeout(eggTimer)
  if (isSoundStation.value && props.visible && !released.value && !disposed) {
    eggTimer = setTimeout(playEgg, 2000)
  }
}
async function playEgg() {
  if (!isSoundStation.value || !props.visible || released.value || disposed || !eggAudio.value) return
  stopQuestion()
  audioError.value = ''
  const audio = eggAudio.value
  audio.currentTime = 0
  try {
    await audio.play()
    if (disposed || !props.visible || released.value) audio.pause()
  } catch { audioError.value = 'Zum Anhören bitte auf „Geräusch abspielen“ tippen.' }
}
function scheduleQuestion() {
  clearTimeout(questionTimer)
  if (!gameOpen.value && !released.value) questionTimer = setTimeout(playQuestion, 2000)
}
function stopQuestion() { clearTimeout(questionTimer); clearTimeout(eggTimer); narration.value?.pause(); eggAudio.value?.pause() }
onMounted(scheduleQuestion)
watch(() => props.visible, visible => { if (visible) scheduleQuestion(); else { stopQuestion(); doorAudio.value?.pause(); happyAudio.value?.pause(); laughAudio.value?.pause(); answerDialog.value?.close() } })
onBeforeUnmount(() => { disposed = true; stopQuestion(); doorAudio.value?.pause(); happyAudio.value?.pause(); laughAudio.value?.pause(); answerDialog.value?.close() })
const riddle = computed(() => riddles[props.station.id])
function releaseCreature() {
  if (released.value) return
  gameOpen.value = false
  answerDialog.value?.close()
  monsterWarning.value = false
  laughAudio.value?.pause()
  released.value = true
  if (isFinalStation.value) playFinaleMusic()
  stopQuestion()
  playEffect(doorAudio.value)
  playEffect(happyAudio.value)
  feedback.value = ''
  if (!isFinalStation.value) emit('released', props.station.id)
}
watch([() => props.remotelyReleased, ready, () => props.visible], ([remote, loaded, visible]) => {
  if (remote && loaded && visible && !isFinalStation.value) releaseCreature()
}, { immediate: true })
function wrongAnswer() {
  gameOpen.value = false
  feedback.value = ''
  monsterWarning.value = true
  playEffect(laughAudio.value)
  emit('wrong-answer')
}
function answer() {
  if (isAudioOnlyStation.value) return
  if ((!ready.value && !isFinalStation.value) || released.value || monsterWarning.value || !answerText.value.trim()) return
  answerDialog.value?.close()
  if (isFinalStation.value ? isCorrectFinalCode(answerText.value) : isCorrectTextAnswer(props.station.id, answerText.value)) releaseCreature()
  else wrongAnswer()
}
</script>
<template>
  <section class="prison-encounter">
    <Teleport to="body">
      <div v-if="monsterWarning && visible" class="wrong-answer-pulse" aria-hidden="true"></div>
      <dialog ref="answerDialog" class="answer-dialog" aria-labelledby="answer-dialog-title">
        <form @submit.prevent="answer">
          <h2 id="answer-dialog-title">{{ isFinalStation ? 'Zahlencode eingeben' : 'Antwort eingeben' }}</h2>
          <label for="creature-answer">{{ isFinalStation ? 'Die 8 Ziffern der Kreaturen 1–8' : 'Eure Antwort' }}</label>
          <input id="creature-answer" v-model="answerText" type="text" :inputmode="isFinalStation ? 'numeric' : 'text'" :pattern="isFinalStation ? '[0-9]{8}' : undefined" autocomplete="off" :maxlength="isFinalStation ? 8 : 100" required autofocus>
          <div class="answer-actions">
            <button type="button" @click="answerDialog.close()">Abbrechen</button>
            <button type="submit" :disabled="!answerText.trim()">Antwort prüfen</button>
          </div>
        </form>
      </dialog>
    </Teleport>
    <div class="warning-monster" :class="{ appearing: monsterWarning }" aria-hidden="true" @animationend="monsterWarning = false">
      <IntroMonster :playing="monsterWarning" :visible="visible && monsterWarning" />
    </div>
    <h1>{{ isFinalStation && !released ? 'Frage 9 · Der Zahlencode' : station.name }}</h1>
    <p v-if="released && !isFinalStation" class="earned-digit">{{ station.id }}. Ziffer: {{ station.codeDigit }}</p>
    <SpaceInvaders v-if="gameOpen" :active="visible" @won="releaseCreature" @lost="wrongAnswer" @close="gameOpen = false" />
    <div v-if="isFinalStation && released" class="victory-backdrop"><img src="/rally/gewonnen.png" alt="Gewonnen!"></div>
    <div v-if="!isFinalStation || released" class="model">
      <IntroMonster :model-url="station.modelUrl" :label="station.name" :playing="true" :visible="visible" :spaceship="station.id === 9" @ship-departed="$emit('ship-departed')"
        :imprisoned="station.id !== 9" :collect-after-release="Boolean(riddle)" :released="released" @prison-ready="ready = true" @freed="freed = true; feedback = ''" @collected="$emit('collected')" />
    </div>
    <div v-if="isFinalStation && !released" class="final-code">
      <p>Jede befreite Kreatur hat eine Ziffer. Gebt die Ziffern in der Reihenfolge der Kreaturen 1–8 ein, um das Raumschiff zu rufen.</p>
      <div class="answer-actions">
        <button @click="playQuestion">Frage abspielen</button>
        <button :disabled="monsterWarning" @click="openAnswerDialog">Zahlencode eingeben</button>
      </div>
      <p v-if="audioError" role="alert">{{ audioError }}</p>
    </div>
    <div v-if="station.id !== 9" class="riddle">
      <div v-if="!released" class="answer-actions">
        <template v-if="isGameStation">
          <button class="question-play" @click="playQuestion">Frage abspielen</button>
          <button class="question-play" :disabled="!ready || monsterWarning" @click="stopQuestion(); gameOpen = true">Spiel starten</button>
        </template>
        <template v-else>
          <button v-if="isSoundStation" class="question-play" @click="playEgg">Geräusch abspielen</button>
          <button class="question-play" @click="playQuestion">Frage abspielen</button>
          <button v-if="!isAudioOnlyStation" class="question-play" :disabled="!ready || monsterWarning" @click="openAnswerDialog">Antwort eingeben</button>
        </template>
      </div>
      <p v-if="audioError" role="alert">{{ audioError }}</p>
      <p v-if="feedback || !ready" role="status">{{ feedback || 'Das Gefängnis wird geladen …' }}</p>
    </div>
  </section>
</template>
<style scoped>
.wrong-answer-pulse { position: fixed; inset: 0; z-index: 100; pointer-events: none; background: #e000002b; box-shadow: inset 0 0 140px #ff1616bb; animation: warning-red-pulse 1s ease-in-out 3; }
@keyframes warning-red-pulse { 0%, 100% { opacity: .1; } 50% { opacity: .85; } }
@media (prefers-reduced-motion: reduce) { .wrong-answer-pulse { animation: none; opacity: .4; } }
.warning-monster { position: absolute; top: 10%; left: 0; width: min(75%, 700px); height: 75%; z-index: 2; pointer-events: none; visibility: hidden; transform: translateX(-110%); }
.warning-monster.appearing { visibility: visible; animation: monster-warning 3s ease-in-out both; }
@keyframes monster-warning { 0%, 100% { transform: translateX(-110%); } 30%, 68% { transform: translateX(12%); } }
@media (prefers-reduced-motion: reduce) { @keyframes monster-warning { 0%, 100% { opacity: 0; transform: translateX(12%); } 30%, 68% { opacity: 1; transform: translateX(12%); } } }

.prison-encounter { width: 100%; height: 100%; min-height: 0; display: flex; flex-direction: column; text-align: center; gap: 8px; pointer-events: none; }
h1 { position: relative; z-index: 1; flex: 0 0 auto; font-size: clamp(20px, 3vw, 32px); margin: 0; }
.earned-digit { position: relative; z-index: 1; color: #b6ff00; font-size: 22px; font-weight: bold; }
.final-code { position: relative; z-index: 1; pointer-events: auto; width: 100%; max-width: 480px; margin: auto; }
.final-code p { margin-bottom: 20px; font-size: clamp(14px, 2vw, 18px); }
.model { position: absolute; inset: 0; z-index: 0; }
.victory-backdrop { position: absolute; inset: 0; display: grid; place-items: center; pointer-events: none; z-index: 0; }
.victory-backdrop img { width: 96%; max-height: 80svh; object-fit: contain; }
.victory-backdrop + .model { z-index: 1; }
.model :deep(.monster-view) { min-height: 0; }
.riddle { position: relative; z-index: 1; pointer-events: auto; flex: 0 0 auto; width: 100%; max-width: 620px; margin: auto auto 0; padding: 10px; box-sizing: border-box; background: transparent; color: #fff; border: none; border-radius: 12px; }
p { line-height: 1.3; margin: 6px 0 0; font-size: clamp(11px, 1.7vw, 14px); }
.answer-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; }
.answer-dialog { width: min(440px, calc(100vw - 32px)); box-sizing: border-box; margin: auto; padding: 24px; border: 1px solid #b6ff00; border-radius: 12px; background: #09100e; color: #fff; font-family: jost, sans-serif; box-shadow: 0 0 40px #b6ff0022; }
.answer-dialog::backdrop { background: #000b; }
.answer-dialog h2 { margin: 0 0 20px; font-size: 24px; }
.answer-dialog label { display: block; margin-bottom: 8px; }
.answer-dialog input { width: 100%; box-sizing: border-box; padding: 12px; margin-bottom: 20px; border: 1px solid #b6ff0080; border-radius: 5px; background: transparent; color: #fff; font: inherit; font-size: 18px; }
.answer-dialog input:focus-visible { outline: 2px solid #b6ff00; outline-offset: 2px; }
.answer-dialog button { padding: 10px 16px; }
button { padding: 10px 6px; border: 1px solid #b6ff00; border-radius: 5px; background: transparent; color: #b6ff00; box-shadow: 0 0 24px #b6ff0022; font: inherit; font-size: clamp(12px, 2vw, 16px); cursor: pointer; }
button:disabled { opacity: .5; cursor: default; } button:focus-visible { outline: 3px solid #caff42; outline-offset: 3px; }
button:not(:disabled):hover { color: #caff42; border-color: #caff42; box-shadow: 0 0 33px #b6ff0044; }
.question-play { padding: 6px 12px; }
.prison-encounter > button { position: relative; z-index: 1; pointer-events: auto; flex: 0 0 auto; align-self: center; }
@media (max-height: 550px) and (min-width: 600px) {
  .riddle { max-width: 460px; padding: 6px; }
  button { padding: 6px; }
}
</style>
