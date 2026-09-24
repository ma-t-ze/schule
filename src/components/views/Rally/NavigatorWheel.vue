<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { rallyMuted } from './rallyAudio'
const emit = defineEmits(['selected', 'continue'])
defineProps({
  title: { type: String, default: 'Die Wahl des Navigators' },
  roleName: { type: String, default: 'Navigator' },
  continueLabel: { type: String, default: 'Weiter zur Wahl des Scanners' }
})
const names = ['Leon', 'Noah', 'Farrell', 'Justus', 'Niko', 'Julian', 'Mio', 'Marlon', 'Levi', 'Carlo', 'Nikolas']
const step = 360 / names.length
const rotation = ref(0)
const spinning = ref(false)
const selected = ref('')
const wheel = ref(null)
const colors = ['#284d46', '#476354', '#765738']
const background = computed(() => `conic-gradient(${names.map((_, i) => `${colors[i % colors.length]} ${i * step}deg ${(i + 1) * step}deg`).join(',')})`)
let pointer = null, lastAngle = 0, lastTime = 0, velocity = 0, frame = 0
let clickGain
watch(rallyMuted, muted => { if (clickGain) clickGain.gain.value = muted ? 0 : 1 })
let audioContext, clickBuffer, decoding, disposed = false
const clickSources = new Set()
const clickFile = fetch('/rally/click.wav').then(response => {
  if (!response.ok) throw new Error('Click sound unavailable')
  return response.arrayBuffer()
}).catch(() => null)
function prepareSound() {
  if (disposed) return
  const AudioContext = window.AudioContext || window.webkitAudioContext
  if (!AudioContext) return
  try {
    audioContext ||= new AudioContext()
    if (!clickGain) {
      clickGain = audioContext.createGain()
      clickGain.gain.value = rallyMuted.value ? 0 : 1
      clickGain.connect(audioContext.destination)
    }
    // Resume inside the pointer/key gesture so mobile browsers allow playback.
    if (audioContext.state === 'suspended') audioContext.resume().catch(() => {})
    decoding ||= clickFile.then(bytes => bytes && !disposed ? audioContext.decodeAudioData(bytes) : null)
      .then(buffer => { if (!disposed) clickBuffer = buffer }).catch(() => {})
  } catch { /* The wheel remains usable without audio. */ }
}
onMounted(prepareSound)
function rotateBy(delta) {
  const before = rotation.value
  rotation.value += delta
  const crossings = Math.abs(Math.floor(rotation.value / step) - Math.floor(before / step))
  if (!crossings || !clickBuffer || audioContext?.state !== 'running' || document.hidden) return
  for (let index = 0; index < crossings; index++) {
    const source = audioContext.createBufferSource()
    source.buffer = clickBuffer
    source.connect(clickGain)
    clickSources.add(source)
    source.onended = () => { source.disconnect(); clickSources.delete(source) }
    // Spread multiple boundaries crossed in a single frame over that frame's duration.
    source.start(audioContext.currentTime + index * 0.016 / crossings)
  }
}
function angle(event) {
  const rect = wheel.value.getBoundingClientRect()
  return Math.atan2(event.clientY - rect.top - rect.height / 2, event.clientX - rect.left - rect.width / 2) * 180 / Math.PI
}
function start(event) {
  if (pointer !== null || (event.pointerType === 'mouse' && event.button !== 0)) return
  prepareSound()
  cancelAnimationFrame(frame)
  pointer = event.pointerId
  wheel.value.setPointerCapture(pointer)
  lastAngle = angle(event)
  lastTime = performance.now()
  velocity = 0
  spinning.value = true
  selected.value = ''
}
function move(event) {
  if (event.pointerId !== pointer) return
  const next = angle(event), now = performance.now()
  const delta = ((next - lastAngle + 540) % 360) - 180
  rotateBy(delta)
  velocity = Math.max(-1.5, Math.min(1.5, delta / Math.max(8, now - lastTime)))
  lastAngle = next
  lastTime = now
}
function finish() {
  spinning.value = false
  const position = ((-rotation.value % 360) + 360) % 360
  selected.value = names[Math.floor(position / step)]
  emit('selected', selected.value)
}
function coast() {
  let previous = performance.now()
  const tick = now => {
    const elapsed = Math.min(40, now - previous)
    previous = now
    rotateBy(velocity * elapsed)
    velocity *= Math.exp(-elapsed / 1100)
    if (Math.abs(velocity) < 0.008) finish()
    else frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
}
function release(event) {
  if (pointer !== event.pointerId) return
  pointer = null
  if (performance.now() - lastTime > 120) velocity = 0
  if (Math.abs(velocity) < 0.008) finish()
  else coast()
}
function keyboardSpin(event) {
  if (!['Enter', ' '].includes(event.key) || spinning.value) return
  event.preventDefault()
  spinAgain()
}
function spinAgain() {
  if (spinning.value) return
  prepareSound()
  selected.value = ''
  spinning.value = true
  velocity = 0.7 + Math.random() * 0.7
  coast()
}
onBeforeUnmount(() => {
  disposed = true
  cancelAnimationFrame(frame)
  clickSources.forEach(source => { source.stop(); source.disconnect() })
  clickSources.clear()
  audioContext?.close().catch(() => {})
})
</script>
<template>
  <section class="navigator-choice">
    <h1>{{ title }}</h1>
    <p>Dreht das Rad mit dem Finger oder der Maus.</p>
    <div class="wheel-frame">
      <div class="needle" aria-hidden="true"></div>
      <div ref="wheel" class="wheel" :class="{ spinning }" :style="{ background, transform: `rotate(${rotation}deg)` }"
        role="button" tabindex="0" aria-label="Glücksrad drehen. Ziehen oder Enter drücken."
        @pointerdown="start" @pointermove="move" @pointerup="release" @pointercancel="release" @lostpointercapture="release" @keydown="keyboardSpin">
        <div v-for="(name, i) in names" :key="name" class="name-arm" :style="{ transform: `rotate(${(i + .5) * step}deg)` }"><span>{{ name }}</span></div>
        <div class="hub" aria-hidden="true">✦</div>
      </div>
    </div>
    <p class="result" role="status">{{ spinning ? 'Das Rad entscheidet …' : selected ? `${selected} ist euer ${roleName}!` : 'Die Nadel entscheidet.' }}</p>
    <div v-if="selected && !spinning" class="wheel-actions">
      <button class="continue" @click="$emit('continue')">{{ continueLabel }}</button>
    </div>
  </section>
</template>
<style scoped>
.navigator-choice { text-align: center; width: 100%; max-width: 780px; }
h1 { font-size: clamp(30px, 5vw, 58px); line-height: 1.1; margin: 0 0 16px; }
p { color: #c5d5c8; }
.wheel-frame { position: relative; width: min(65svh, 100%, 530px); aspect-ratio: 1; margin: 32px auto 24px; }
.wheel { position: relative; width: 100%; height: 100%; border-radius: 50%; border: 6px solid #b8c99d; box-shadow: 0 0 60px #82bda525, 0 12px 40px #000a; touch-action: none; user-select: none; cursor: grab; }
.wheel:active { cursor: grabbing; }
.wheel:focus-visible { outline: 3px solid white; outline-offset: 6px; }
.needle { position: absolute; top: -17px; left: 50%; transform: translateX(-50%); border-left: 15px solid transparent; border-right: 15px solid transparent; border-top: 38px solid #f9d381; z-index: 2; filter: drop-shadow(0 3px 3px #0009); }
.name-arm { position: absolute; inset: 0; pointer-events: none; }
.name-arm span { position: absolute; top: 10%; left: 50%; transform: translateX(-50%); font-size: clamp(12px, 2.5vw, 21px); font-weight: 700; color: #fff; text-shadow: 0 2px 4px #000; }
.hub { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 16%; aspect-ratio: 1; display: grid; place-items: center; background: #14231e; border: 3px solid #b8c99d; border-radius: 50%; font-size: 30px; color: #f9d381; pointer-events: none; }
.result { min-height: 1.5em; font-size: 20px; }
.wheel-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 16px; }
.continue { padding: 14px 24px; border: 1px solid #a5cfa56b; border-radius: 8px; background: #253c33; color: #eefbe7; font: inherit; cursor: pointer; }
</style>
