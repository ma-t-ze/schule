<script setup>
import { ref, computed, watch, nextTick, onMounted, onActivated, onDeactivated, onBeforeUnmount } from 'vue'
import { rallyMuted } from './rallyAudio'
import jsQR from 'jsqr'
import QRCode from 'qrcode'
import IntroMonster from './IntroMonster.vue'
import PrisonEncounter from './PrisonEncounter.vue'
import NavigatorWheel from './NavigatorWheel.vue'
import WheelDrawer from './WheelDrawer.vue'
import ManualSounds from './ManualSounds.vue'
import EnergyChallenge from './EnergyChallenge.vue'
import { energyTasks } from './energyTasks'
import { useRallySync } from './useRallySync'
import { mergeRescuedCreatures } from './rallyState'
import { stations, stationCode, parseStationCode } from './stations'

const video = ref(null)
const testCreature = ref(false)
const phase = ref('welcome')
const navigatorName = ref('')
const scannerName = ref('')
const wheelDrawerOpen = ref(false)
onDeactivated(() => { wheelDrawerOpen.value = false })
const energy = ref(100)
const { state: cloudState, message: syncMessage, failure: syncFailure, retry: retrySync, release: saveRelease, recordScan, saveEnergy, sendHome } = useRallySync()
const energyTaskIndex = ref(0)
try {
  const saved = Number(localStorage.getItem('rally-energy-task-current'))
  if (Number.isInteger(saved) && saved >= 0) energyTaskIndex.value = saved % energyTasks.length
} catch { /* The task sequence remains usable without storage. */ }
let pendingEnergy = null
function updateEnergy(value) {
  energy.value = value
  pendingEnergy = value
  saveEnergy(value)
}
function loseEnergy() { updateEnergy(Math.max(0, energy.value - 20)) }
function rechargeEnergy() {
  if (energy.value > 0) return
  updateEnergy(100)
  energyTaskIndex.value = (energyTaskIndex.value + 1) % energyTasks.length
  try { localStorage.setItem('rally-energy-task-current', String(energyTaskIndex.value)) } catch { /* Optional persistence. */ }
}
watch(energy, value => {
  if (value > 0) return
  wheelDrawerOpen.value = false
  if (sectionMenu.value) sectionMenu.value.open = false
  stopCamera()
})
function recordRelease(id) { if (!cloudState.value?.releasedIds.includes(id)) saveRelease(id) }
const showRoleSidebar = computed(() => phase.value !== 'welcome' || Boolean(navigatorName.value || scannerName.value))
const sectionMenu = ref(null)
const sectionToggle = ref(null)
const sections = [
  { id: 'welcome', label: 'Rettet die Creaturen' },
  { id: 'markers', label: 'Markern' },
  { id: 'navigator', label: 'Wahl des Navigators' },
  { id: 'scanner-choice', label: 'Wahl des Scanners' },
  { id: 'intro', label: 'Monster-Intro' },
  { id: 'clue', label: 'Scanner öffnen' },
  { id: 'scanner', label: 'QR-Code scannen' },
  ...stations.map(station => ({
    id: `encounter-${station.id}`,
    label: station.id === 9 ? 'Finale · Raumschiff' : `Creatur ${station.id} · ${station.name}`
  }))
]
const currentSection = computed(() => {
  if (phase.value === 'scanner' && active.value) return `encounter-${active.value}`
  return phase.value === 'departing' ? 'intro' : phase.value
})
function closeSectionMenu() {
  if (sectionMenu.value) sectionMenu.value.open = false
  sectionToggle.value?.focus()
}
async function jumpToSection(id) {
  closeSectionMenu()
  if (id === currentSection.value) return
  clearTimeout(departureTimer)
  pauseIntro()
  gameMusicAudio.value?.pause()
  stopCamera()
  testCreature.value = false
  active.value = null
  preview.value = false
  error.value = ''
  message.value = ''
  introError.value = ''
  if (introAudio.value) introAudio.value.currentTime = 0
  const station = stations.find(station => id === `encounter-${station.id}`)
  if (station) {
    expectedStation.value = station.id
    phase.value = 'clue'
    return
  }
  expectedStation.value = null
  phase.value = id
  if (id === 'intro') startMission()
  else if (id === 'scanner') await openScanner()
  else if (isSetupPhase()) playGameMusic()
}
const scannedThisMission = ref(false)
const introAudio = ref(null)
const monsterAudio = ref(null)
const musicAudio = ref(null)
const gameMusicAudio = ref(null)
const isSetupPhase = () => ['welcome', 'navigator', 'scanner-choice', 'markers', 'start'].includes(phase.value)
async function playGameMusic() {
  if (!isSetupPhase() || !visible.value || !gameMusicAudio.value) return
  try {
    gameMusicAudio.value.volume = 0.1
    await gameMusicAudio.value.play()
    if (!isSetupPhase() || !visible.value) gameMusicAudio.value?.pause()
  } catch { /* Retry on the next user gesture if autoplay is blocked. */ }
}
const introPlaying = ref(false)
const introError = ref('')
const introWaiting = ref(false)
let introDelayTimer
let departureTimer
let audioAttempt = 0
let monsterTimer
let monsterAttempt = 0

function stopMonsterSound() {
  monsterAttempt++
  clearTimeout(monsterTimer)
  if (monsterAudio.value) {
    monsterAudio.value.pause()
    monsterAudio.value.currentTime = 0
  }
}
async function playMonsterSound() {
  if (phase.value !== 'intro' || !visible.value || introAudio.value?.paused || introAudio.value?.ended) return
  const attempt = ++monsterAttempt
  try {
    monsterAudio.value.volume = 0.2
    await monsterAudio.value.play()
    if (attempt !== monsterAttempt && monsterAudio.value) monsterAudio.value.pause()
  } catch {
    if (attempt === monsterAttempt && phase.value === 'intro') introError.value = 'Der Monstersound konnte nicht abgespielt werden. Bitte pausiere das Intro und starte es erneut.'
  }
}
function repeatMonsterSound() {
  clearTimeout(monsterTimer)
  if (phase.value === 'intro' && introPlaying.value) {
    monsterTimer = setTimeout(() => {
      if (monsterAudio.value) monsterAudio.value.currentTime = 0
      playMonsterSound()
    }, 5000)
  }
}
function introPaused() {
  introPlaying.value = false; stopMonsterSound()
  if (phase.value === 'intro' && !introAudio.value?.ended) musicAudio.value?.pause()
}

async function playMusic() {
  if (phase.value !== 'intro' || !visible.value) return
  const attempt = audioAttempt
  try {
    musicAudio.value.volume = 0.1
    await musicAudio.value.play()
    if (attempt !== audioAttempt || !visible.value || phase.value !== 'intro' || (!introWaiting.value && introAudio.value?.paused)) musicAudio.value?.pause()
  } catch {
    if (attempt === audioAttempt && phase.value === 'intro') introError.value = 'Die Hintergrundmusik konnte nicht abgespielt werden. Bitte pausiere das Intro und starte es erneut.'
  }
}

function startMission() {
  phase.value = 'intro'
  introWaiting.value = true
  introError.value = ''
  gameMusicAudio.value?.pause()
  if (gameMusicAudio.value) gameMusicAudio.value.currentTime = 0
  playMusic()
  clearTimeout(introDelayTimer)
  introDelayTimer = setTimeout(() => {
    introWaiting.value = false
    if (visible.value && phase.value === 'intro') playIntro()
  }, 5000)
}
async function playIntro() {
  clearTimeout(introDelayTimer)
  introWaiting.value = false
  phase.value = 'intro'
  gameMusicAudio.value?.pause()
  if (gameMusicAudio.value) gameMusicAudio.value.currentTime = 0
  introError.value = ''
  const attempt = ++audioAttempt
  try {
    // Start all audio elements in the click gesture, including on mobile browsers.
    const playback = introAudio.value.play()
    playMonsterSound()
    playMusic()
    await playback
    if (attempt !== audioAttempt || !visible.value || phase.value !== 'intro') introAudio.value.pause()
  } catch {
    stopMonsterSound()
    musicAudio.value?.pause()
    if (attempt === audioAttempt) introError.value = 'Das Intro konnte nicht abgespielt werden. Bitte versuche es erneut.'
  }
}
function pauseIntro() { clearTimeout(introDelayTimer); introWaiting.value = false; audioAttempt++; introAudio.value?.pause(); stopMonsterSound(); musicAudio.value?.pause() }
function finishIntro() {
  if (phase.value !== 'intro') return
  clearTimeout(introDelayTimer)
  introWaiting.value = false
  phase.value = 'departing'
  audioAttempt++
  musicAudio.value?.pause()
  gameMusicAudio.value?.pause()
  introAudio.value?.pause()
  introPlaying.value = false
  stopMonsterSound()
  departureTimer = setTimeout(() => { phase.value = 'clue' }, 1200)
}
const active = ref(null)
const expectedStation = ref(null)
const cameraOn = ref(false)
const starting = ref(false)
const preview = ref(false)
const showCodes = ref(false)
const error = ref('')
const message = ref('')
const found = ref([])
const rescued = ref([])
const flownHome = new Set()
const rescuedList = ref(null)
let finaleRun = 0
let creatureFlight
const departingCreature = ref(null)
function cancelFinale() {
  finaleRun++
  creatureFlight?.cancel()
  creatureFlight = null
  departingCreature.value = null
}
async function sendCreaturesHome() {
  cancelFinale()
  const run = finaleRun
  while (rescued.value.length && run === finaleRun && phase.value === 'scanner' && active.value === 9) {
    const station = rescued.value.at(-1)
    const element = rescuedList.value?.querySelector(`[data-creature="${station.id}"]`)
    if (!element) break
    element.scrollIntoView({ block: 'nearest', behavior: 'instant' })
    departingCreature.value = station.id
    await nextTick()
    if (run !== finaleRun) return
    creatureFlight = element.animate([
      { transform: 'translateX(0)' },
      { transform: `translateX(${window.innerWidth + 200}px)` }
    ], { duration: 2000, easing: 'ease-in', fill: 'forwards' })
    if (!visible.value) creatureFlight.pause()
    try { await creatureFlight.finished } catch { return }
    if (run !== finaleRun) return
    flownHome.add(station.id)
    rescued.value = rescued.value.filter(item => item.id !== station.id)
    sendHome(station.id)
    creatureFlight.cancel()
    creatureFlight = null
    departingCreature.value = null
    await nextTick()
  }
}
function collectCreature() {
  if (current.value) flownHome.delete(current.value.id)
  if (current.value && !rescued.value.some(station => station.id === current.value.id)) {
    rescued.value = [...rescued.value, current.value]
  }
  expectedStation.value = null
  nextStation()
}
const qrImages = ref({})
const visible = ref(true)
watch([phase, active], () => { if (phase.value !== 'scanner' || active.value !== 9) cancelFinale() })
watch(visible, value => { if (creatureFlight) value ? creatureFlight.play() : creatureFlight.pause() })
const current = computed(() => stations.find(s => s.id === active.value))
watch(cloudState, (state, previous) => {
  if (!state) return
  if (!previous || state.roundId !== previous.roundId) {
    cancelFinale()
    clearTimeout(departureTimer)
    pauseIntro()
    gameMusicAudio.value?.pause()
    stopCamera()
    active.value = null
    expectedStation.value = null
    rescued.value = []
    found.value = []
    flownHome.clear()
    navigatorName.value = ''
    scannerName.value = ''
    wheelDrawerOpen.value = false
    scannedThisMission.value = false
    pendingEnergy = null
    energyTaskIndex.value = 0
    phase.value = 'welcome'
    try {
      localStorage.setItem('rally-found-v1', '[]')
      localStorage.setItem('rally-energy-task-current', '0')
    } catch { /* Firebase remains the source of shared progress. */ }
  }
  if (pendingEnergy === null || state.energy === pendingEnergy) {
    energy.value = state.energy
    pendingEnergy = null
  }
  found.value = [...new Set([...found.value, ...state.foundIds])]
  rescued.value = mergeRescuedCreatures(rescued.value, state, active.value).filter(station => !flownHome.has(station.id))
})
let stream, scanTimer, requestId = 0
const scanCanvas = document.createElement('canvas')
const context = scanCanvas.getContext('2d', { willReadFrequently: true })

function stopCamera() {
  requestId++
  clearTimeout(scanTimer)
  stream?.getTracks().forEach(track => track.stop())
  stream = null
  if (video.value) video.value.srcObject = null
  cameraOn.value = false
  starting.value = false
  starting.value = false
}
function pause() { visible.value = false; gameMusicAudio.value?.pause(); stopCamera(); pauseIntro() }
function visibilityChange() {
  if (document.hidden) pause()
  else { visible.value = true; playGameMusic() }
}
async function openScanner() {
  active.value = null
  phase.value = 'scanner'
  await nextTick()
  await startCamera()
}
async function startCamera() {
  testCreature.value = false
  stopCamera()
  error.value = ''; message.value = ''; preview.value = false; active.value = null
  if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
    error.value = 'Die Kamera benötigt HTTPS oder localhost. Du kannst die Wesen unten ohne Kamera ansehen.'
    return
  }
  starting.value = true
  const id = requestId
  try {
    const nextStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false })
    if (id !== requestId || !visible.value) { nextStream.getTracks().forEach(track => track.stop()); return }
    stream = nextStream
    await nextTick()
    video.value.srcObject = stream
    await video.value.play()
    if (id !== requestId) return
    cameraOn.value = true
    stream.getVideoTracks()[0].addEventListener('ended', () => {
      if (id !== requestId) return
      stopCamera(); error.value = 'Die Kamera wurde getrennt. Starte sie erneut.'
    })
    scan()
  } catch (cause) {
    if (id !== requestId) return
    stopCamera()
    error.value = cause.name === 'NotAllowedError' ? 'Der Kamerazugriff wurde nicht erlaubt. Bitte erlaube ihn in den Browsereinstellungen und versuche es erneut.' : cause.name === 'NotFoundError' ? 'Keine Kamera gefunden. Die Vorschau funktioniert auch ohne Kamera.' : 'Die Kamera konnte nicht gestartet werden. Schließe andere Kamera-Apps und versuche es erneut.'
  } finally {
    if (id === requestId) starting.value = false
  }
}
function scan() {
  if (!cameraOn.value) return
  if (!testCreature.value && !active.value && video.value?.readyState >= 2) {
    try {
      const ratio = Math.min(1, 640 / video.value.videoWidth)
      scanCanvas.width = Math.round(video.value.videoWidth * ratio)
      scanCanvas.height = Math.round(video.value.videoHeight * ratio)
      context.drawImage(video.value, 0, 0, scanCanvas.width, scanCanvas.height)
      const pixels = context.getImageData(0, 0, scanCanvas.width, scanCanvas.height)
      const code = jsQR(pixels.data, pixels.width, pixels.height, { inversionAttempts: 'dontInvert' })
      if (code) {
        const station = parseStationCode(code.data)
        if (station) {
          if (expectedStation.value && station.id !== expectedStation.value) {
            message.value = `Bitte scanne den QR-Code für ${stations.find(item => item.id === expectedStation.value).name}.`
            scanTimer = setTimeout(scan, 220)
            return
          }
          active.value = station.id; scannedThisMission.value = true; message.value = ''; stopCamera()
          recordScan(station.id)
          if (!found.value.includes(station.id)) {
            found.value = [...found.value, station.id]
            try { localStorage.setItem('rally-found-v1', JSON.stringify(found.value)) } catch { /* Session progress remains available. */ }
          }
        } else message.value = 'Dieser QR-Code gehört nicht zu dieser Rally. Scanne einen Stationscode.'
      }
    } catch {
      stopCamera(); error.value = 'Das Kamerabild konnte nicht gelesen werden. Bitte starte die Kamera erneut.'
      return
    }
  }
  if (cameraOn.value) scanTimer = setTimeout(scan, 220)
}
function nextStation() { testCreature.value = false; stopCamera(); active.value = null; preview.value = false; message.value = ''; phase.value = 'clue' }
function printCodes() { window.print() }
onMounted(async () => {
  playGameMusic()
  try {
    const saved = JSON.parse(localStorage.getItem('rally-found-v1') || '[]')
    if (Array.isArray(saved)) found.value = [...new Set(saved.filter(id => stations.some(s => s.id === id)))]
  } catch { /* Corrupt or unavailable storage starts an empty collection. */ }
  try {
    const images = await Promise.all(stations.map(async s => [s.id, await QRCode.toDataURL(stationCode(s.id), { width: 320, margin: 4, errorCorrectionLevel: 'M' })]))
    qrImages.value = Object.fromEntries(images)
  } catch { error.value = 'Die Stationscodes konnten nicht erstellt werden. Bitte lade die Seite erneut.' }
  document.addEventListener('visibilitychange', visibilityChange)
})
onActivated(() => { visible.value = !document.hidden; playGameMusic() })
onDeactivated(pause)
onBeforeUnmount(() => { cancelFinale(); clearTimeout(departureTimer); pause(); document.removeEventListener('visibilitychange', visibilityChange) })
</script>

<template>
  <div class="mission-layout" :class="{ 'with-navigator': showRoleSidebar }" @pointerdown="playGameMusic" @keydown="playGameMusic" @click="playGameMusic">
  <button class="mute-toggle" :aria-pressed="rallyMuted" :aria-label="rallyMuted ? 'Ton einschalten' : 'Ton stummschalten'" :title="rallyMuted ? 'Ton einschalten' : 'Ton stummschalten'" @click="rallyMuted = !rallyMuted">
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H3v6h3l5 4Z" />
      <path v-if="rallyMuted" d="m16 9 6 6m0-6-6 6" />
      <path v-else d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
    </svg>
  </button>
  <details ref="sectionMenu" class="section-menu" @keydown.esc.prevent.stop="closeSectionMenu">
    <summary ref="sectionToggle" aria-label="Abschnittsmenü öffnen oder schließen">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
    </summary>
    <nav aria-label="Rally-Abschnitte">
      <h2>Abschnitte</h2>
      <button v-for="section in sections" :key="section.id" :class="{ 'current-section': currentSection === section.id }"
        :aria-current="currentSection === section.id ? 'step' : undefined" @click="jumpToSection(section.id)">
        <span>{{ section.label }}</span><small v-if="currentSection === section.id">Du bist hier</small>
      </button>
    </nav>
  </details>
  <aside v-if="rescued.length" ref="rescuedList" class="rescued-creatures" :class="{ 'finale-flight': departingCreature !== null }" aria-label="Befreite Creaturen">
    <div v-for="station in rescued" :key="station.id" :data-creature="station.id" class="rescued-creature" :class="{ departing: departingCreature === station.id }">
      <div class="rescued-model"><IntroMonster :model-url="station.modelUrl" :label="station.name" :playing="true" :visible="visible" /></div>
      <span>{{ station.name }}<br><strong class="creature-digit">{{ station.id }}. Ziffer: {{ station.codeDigit }}</strong></span>
    </div>
  </aside>
  <audio :muted="rallyMuted" ref="gameMusicAudio" src="/rally/game_music.wav" preload="auto" loop></audio>
  <audio :muted="rallyMuted" ref="introAudio" src="/rally/intro.mp3" preload="metadata"
    @play="introPlaying = true" @pause="introPaused" @ended="finishIntro"
    @error="pauseIntro(); introError = 'Die Intro-Datei konnte nicht geladen werden.'"></audio>
  <audio :muted="rallyMuted" ref="monsterAudio" src="/rally/monster.wav" preload="auto" @ended="repeatMonsterSound"></audio>
  <audio :muted="rallyMuted" ref="musicAudio" src="/rally/guitar-quiet.wav" preload="auto" loop></audio>
  <main v-if="phase === 'welcome'" class="mission-screen">
    <div class="mission-welcome">
      <h1 class="mission-logo"><img src="/rally/rettet_die_creaturen.png" alt="Rettet die Creaturen" fetchpriority="high" /></h1>
      <button class="mission-start welcome-start" @click="phase = 'navigator'">Spiel starten</button>
    </div>
  </main>
  <main v-else-if="phase === 'navigator'" class="mission-screen">
    <NavigatorWheel key="navigator" @selected="navigatorName = $event" @continue="phase = 'scanner-choice'" />
  </main>
  <main v-else-if="phase === 'scanner-choice'" class="mission-screen">
    <NavigatorWheel key="scanner" title="Die Wahl des Scanners" role-name="Scanner" continue-label="Mission starten"
      @selected="scannerName = $event" @continue="startMission" />
  </main>
  <main v-else-if="phase === 'start'" class="mission-screen">
    <button class="mission-start" @click="playIntro">Mission Monster starten</button>
  </main>
  <main v-else-if="['intro', 'departing', 'clue'].includes(phase)" class="mission-screen intro-screen">
    <div v-if="phase !== 'clue'" class="intro-monster-stage" :class="{ departing: phase === 'departing' }">
      <IntroMonster :playing="introWaiting || introPlaying || phase === 'departing'" :visible="visible" />
    </div>
    <div v-if="phase === 'intro'" class="intro-controls">
      <p v-if="introWaiting || !introPlaying" class="intro-status" role="status">{{ introWaiting ? 'Die Mission beginnt …' : 'Intro pausiert' }}</p>
      <p v-if="introError" class="intro-error" role="alert">{{ introError }}</p>
      <button class="skip-intro" @click="finishIntro">Intro überspringen</button>
      <button @click="introWaiting || introPlaying ? pauseIntro() : playIntro()">{{ introWaiting || introPlaying ? 'Intro pausieren' : 'Intro abspielen' }}</button>
    </div>
    <div v-if="phase === 'clue'" class="mission-clue">
      <div class="scanner-reticle" aria-hidden="true"><span></span></div>
      <button class="mission-start scanner-open" @click="openScanner">Scanner öffnen</button>
    </div>
  </main>
  <main v-else-if="phase === 'markers'" class="mission-screen marker-screen">
    <section class="marker-overview">
      <h1>Markern</h1>
      <a class="marker-download" href="/rally/mission-monster-marker.pdf" download="Mission-Monster-Marker.pdf">Alle 9 Marker als PDF herunterladen · DIN A4</a>
      <p v-if="error" role="alert">{{ error }}</p>
      <div class="marker-grid">
        <article v-for="station in stations" :key="station.id" class="marker-card">
          <h2>{{ station.id }} · {{ station.name }}</h2>
          <img v-if="qrImages[station.id]" :src="qrImages[station.id]" :alt="`QR-Marker für ${station.name}`" width="320" height="320" />
          <p v-else>Marker wird geladen …</p>
          <code>{{ stationCode(station.id) }}</code>
          <button @click="jumpToSection(`encounter-${station.id}`)">Station scannen</button>
        </article>
      </div>
    </section>
  </main>
  <main v-else class="mission-screen scanner-screen" :class="{ 'encounter-screen': current }">
    <PrisonEncounter v-if="current" :key="current.id" :station="current" :visible="visible && energy > 0" :remotely-released="cloudState?.releasedIds.includes(current.id)" @released="recordRelease" @continue="nextStation" @collected="collectCreature" @wrong-answer="loseEnergy" @ship-departed="sendCreaturesHome" />
    <section v-else class="camera-stage" :class="{ 'model-stage': current || testCreature }" aria-label="Stationscode scannen">
      <video ref="video" autoplay muted playsinline aria-label="Live-Kamerabild" :class="{ live: cameraOn }"></video>
      <div v-if="!current && !testCreature" class="scan-guide"><div v-if="cameraOn" class="scan-frame"></div><p>{{ starting ? 'Kamera wird geöffnet …' : cameraOn ? 'Scanne den QR-Code auf eurem Hinweis.' : 'Kamera ist pausiert.' }}</p></div>
      <div v-if="testCreature && visible" class="creature-anchor test-creature">
        <IntroMonster model-url="/rally/creatur-1.glb" label="Creatur 1" :playing="true" :visible="visible" />
      </div>
    </section>
    <div v-if="!current" class="scanner-controls">
      <p v-if="error" role="alert">{{ error }}</p>
      <p v-if="message" role="status">{{ message }}</p>
      <button v-if="!cameraOn && !starting" @click="openScanner">Kamera starten</button>
      <button @click="nextStation">Scanner Schließen</button>
    </div>
  </main>
  <aside v-if="showRoleSidebar" class="energy-panel" aria-label="Spielenergie">
    <span class="energy-label">Energielevel</span>
    <div class="energy-gauge">
    <div class="energy-track" role="progressbar" aria-label="Verbleibende Energie" :aria-valuenow="energy" aria-valuemin="0" aria-valuemax="100">
      <div class="energy-fill" :class="{ low: energy <= 20 }" :style="{ height: `${energy}%` }"></div>
    </div>
    </div>
  </aside>
  <aside v-if="showRoleSidebar" class="navigator-info" aria-label="Teamrollen" aria-live="polite">
    <p>Navigator: <strong v-if="navigatorName">{{ navigatorName }}</strong><span v-else class="role-pending">Noch nicht gewählt</span></p>
    <p>Scanner: <strong v-if="scannerName">{{ scannerName }}</strong><span v-else class="role-pending">Noch nicht gewählt</span></p>
    <button class="open-wheel" aria-haspopup="dialog" @click="wheelDrawerOpen = true">Glücksrad einblenden</button>
    <ManualSounds :visible="visible" />
    <details class="rally-sync"><summary>Rally-Status</summary><p role="status">{{ syncMessage }}</p><button v-if="syncFailure" class="open-wheel" @click="retrySync">Erneut verbinden</button></details>
  </aside>
  <WheelDrawer v-if="wheelDrawerOpen" @close="wheelDrawerOpen = false" />
  <EnergyChallenge v-if="energy <= 0 && visible" :task="energyTasks[energyTaskIndex]" @solved="rechargeEnergy" />
  </div>
</template>

<style scoped>
.energy-panel { position: fixed; right: calc(220px + 5vw); top: 100px; bottom: 48px; width: 100px; z-index: 5; display: flex; flex-direction: column; align-items: center; gap: 20px; pointer-events: none; }
.energy-label { flex: 0 0 auto; margin: 0; color: #fff; font: 500 17px/1.3 jost, sans-serif; letter-spacing: .02em; white-space: nowrap; text-align: center; }
.energy-gauge { position: relative; flex: 1; min-height: 0; max-height: 560px; width: 58px; display: flex; justify-content: center; }
.energy-gauge::before, .energy-gauge::after { content: ''; position: absolute; top: 12px; bottom: 12px; width: 6px; background: repeating-linear-gradient(to top, #b6ff0070 0 1px, transparent 1px 16px); }
.energy-gauge::before { left: 0; }
.energy-gauge::after { right: 0; }
.energy-track { position: relative; height: 100%; width: 26px; overflow: hidden; border: 1px solid #b6ff00; border-radius: 999px; background: #b6ff000a; box-shadow: 0 0 18px #b6ff0022, inset 0 0 12px #b6ff001a; }
.energy-track::after { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(to top, transparent 0 calc(20% - 2px), #030509  calc(20% - 2px) 20%); pointer-events: none; }
.energy-fill { position: absolute; bottom: 0; width: 100%; background: linear-gradient(90deg, #79b500, #caff42 50%, #79b500); box-shadow: 0 -2px 16px #b6ff00aa; transition: height .8s ease, background .8s ease; }
.energy-fill.low { background: linear-gradient(90deg, #ac271b, #ff654d, #ac271b); box-shadow: 0 -2px 16px #ff654d99; }
@media (max-width: 600px) { .energy-panel { right: calc(110px + 5vw); top: 88px; bottom: 32px; width: 68px; gap: 14px; } .energy-label { font-size: 11px; } .energy-gauge { width: 40px; } .energy-track { width: 20px; } }
@media (max-height: 500px) { .energy-panel { top: 76px; bottom: 20px; gap: 12px; } }
@media (prefers-reduced-motion: reduce) { .energy-fill { transition: none; } }

.rescued-creatures { position: fixed; top: 88px; left: 16px; z-index: 6; max-height: calc(100svh - 100px); overflow-y: auto; pointer-events: auto; }
.rescued-creatures.finale-flight { overflow: visible; }
.rescued-creature.departing { position: relative; z-index: 10; pointer-events: none; }
.rescued-creature.departing span { visibility: hidden; }
.rescued-creature { display: flex; align-items: center; gap: 4px; color: #eff7ee; }
.rescued-model { width: 96px; height: 88px; }
.rescued-model :deep(.monster-view) { min-height: 0; }
.rescued-creature span { font-family: jost, sans-serif; font-size: 12px; text-shadow: 0 2px 5px #000; }
.creature-digit { color: #b6ff00; font-size: 15px; }
.mute-toggle { position: fixed; top: 16px; left: 74px; z-index: 21; display: grid; place-items: center; width: 48px; height: 48px; border: 1px solid #b6ff00; border-radius: 5px; background: transparent; color: #b6ff00; box-shadow: 0 0 24px #b6ff0022; }
.mute-toggle[aria-pressed="true"] { color: #b6ff00; }

.marker-screen { padding-top: 90px !important; align-items: start; }
.marker-overview { width: min(1100px, 100%); }
.marker-download { display: inline-block; padding: 16px; margin: 16px 0 24px; background: #253c33; border: 1px solid #a5cfa56b; border-radius: 8px; }
.marker-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(230px, 100%), 1fr)); gap: 20px; }
.marker-card { padding: 16px; background: #14231e; border: 1px solid #a5cfa533; border-radius: 12px; text-align: center; }
.marker-card img { width: 100%; height: auto; display: block; margin: 12px 0; }
.marker-card code { display: block; font-size: 12px; }
.marker-card button { margin-top: 12px; padding: 10px; background: #253c33; color: #eefbe7; border: 1px solid #a5cfa56b; border-radius: 8px; }
.scanned-model { width: 90%; height: 65%; }
.camera-stage.model-stage { background: transparent; }

.section-menu { position: fixed; top: 16px; left: 16px; z-index: 20; color: #eff7ee; font-family: jost, sans-serif; }
.section-menu summary { display: grid; place-items: center; width: 48px; height: 48px; border: 1px solid #b6ff00; border-radius: 5px; background: transparent; color: #b6ff00; box-shadow: 0 0 24px #b6ff0022; cursor: pointer; list-style: none; }
.mute-toggle:hover, .section-menu summary:hover { color: #caff42; border-color: #caff42; box-shadow: 0 0 33px #b6ff0044; }
.section-menu summary::-webkit-details-marker { display: none; }
.section-menu summary:focus-visible { outline: 3px solid #d3efb6; outline-offset: 3px; }
.section-menu nav { width: min(340px, calc(100vw - 32px)); max-height: calc(100svh - 92px); overflow-y: auto; margin-top: 10px; padding: 16px; border: 1px solid #a5cfa54d; border-radius: 14px; background: #0c1715fa; box-shadow: 0 18px 60px #000a; }
.section-menu h2 { margin: 0 0 12px; font-size: 20px; }
.section-menu button { display: block; width: 100%; text-align: left; padding: 10px 12px; border: 1px solid transparent; border-radius: 8px; background: transparent; color: inherit; }
.section-menu button:hover { background: #253c33; }
.section-menu button.current-section { border-color: #a5cfa580; background: #253c33; color: #d3efb6; }
.section-menu small { display: block; margin-top: 3px; font-size: 11px; }
.mission-layout { min-height: 100svh; background: #030509; }
.with-navigator .mission-screen { width: calc(100% - 320px - 5vw); }
.navigator-info { position: fixed; right: 0; top: 0; bottom: 0; width: 220px; padding: 32px 20px; box-sizing: border-box; border-left: 1px solid #ffffff80; background: transparent; color: #fff; font-family: jost, sans-serif; z-index: 5; }
.navigator-info strong { display: block; font-size: 28px; color: #fff; }
.navigator-info p + p { margin-top: 24px; border-top: 1px solid #ffffff55; padding-top: 16px; }
.navigator-info { overflow-y: auto; }
.role-pending { display: block; color: #fff; font-size: 13px; margin-top: 4px; }
.open-wheel { width: 100%; margin-top: 24px; padding: 12px 8px; border: 1px solid #b6ff00; border-radius: 5px; background: transparent; color: #b6ff00; font: inherit; font-size: 14px; overflow-wrap: anywhere; cursor: pointer; }
.open-wheel:hover { box-shadow: 0 0 20px #b6ff0033; }
.rally-sync { margin-top: 20px; font-size: 12px; overflow-wrap: anywhere; }
.rally-sync a { display: block; margin-top: 12px; color: #b6ff00; }
@media (max-width: 600px) {
  .with-navigator .mission-screen { width: calc(100% - 178px - 5vw); padding: 16px 10px; }
  .navigator-info { width: 110px; padding: 24px 10px; font-size: 13px; }
  .navigator-info strong { font-size: 20px; overflow-wrap: anywhere; }
}

.mission-welcome { width: 100%; text-align: center; display: flex; flex-direction: column; align-items: center; gap: clamp(24px, 5svh, 48px); padding-top: 52px; }
.mission-logo { width: min(100%, 1100px); margin: 0; line-height: 0; }
.mission-logo img { display: block; width: 100%; max-height: 58svh; object-fit: contain; }
.mission-start.welcome-start { background: transparent; color: #b6ff00; border-color: #b6ff00; padding: 16.8px 25.2px; font-size: clamp(13.2px, 2.4vw, 22.8px); border-radius: 4.8px; font-weight: 700; box-shadow: 0 0 24px #b6ff0022; }
.mission-start.welcome-start:hover { background: transparent; color: #caff42; border-color: #caff42; box-shadow: 0 0 33px #b6ff0044; }
.mission-title { margin: 0 0 48px; font-family: jost, sans-serif; font-size: clamp(44px, 10vw, 132px); font-weight: 900; line-height: .95; letter-spacing: -.045em; text-transform: uppercase; text-shadow: 0 4px 28px #0009; }
.mission-title span { display: block; margin-top: .12em; color: #d3efb6; text-shadow: 0 0 48px #82bda540, 0 8px 32px #000b; }
.test-creature { width: min(360px, 85vw); height: min(360px, 85vw); }
.intro-monster-stage.departing { animation: monster-exit 1.2s ease-in forwards; }
@keyframes monster-exit { to { transform: translateX(-110vw); opacity: 0; } }
.mission-clue { position: relative; display: grid; place-items: center; width: min(100%, 700px); min-height: min(65svh, 540px); text-align: center; animation: clue-enter .7s ease-out; }
.scanner-open { position: relative; z-index: 1; }
.scanner-reticle { position: absolute; width: min(90%, 440px); aspect-ratio: 1; border: 1px solid #b6ff0080; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, #b6ff0016 0%, transparent 68%); box-shadow: 0 0 35px #b6ff0022, inset 0 0 35px #b6ff0022; }
.scanner-reticle::before { content: ''; position: absolute; inset: 10%; border: 2px dashed #b6ff0090; border-radius: 50%; animation: reticle-orbit 40s linear infinite; }
.scanner-reticle::after { content: ''; position: absolute; inset: -7%; background: linear-gradient(#b6ff00, #b6ff00) center top / 2px 15% no-repeat, linear-gradient(#b6ff00, #b6ff00) center bottom / 2px 15% no-repeat, linear-gradient(#b6ff00, #b6ff00) left center / 15% 2px no-repeat, linear-gradient(#b6ff00, #b6ff00) right center / 15% 2px no-repeat; opacity: .8; }
.scanner-reticle span { position: absolute; inset: 23%; border: 1px solid #b6ff0066; transform: rotate(45deg); }
@keyframes reticle-orbit { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .scanner-reticle::before { animation: none; } .mission-clue { animation: none; } }
@keyframes clue-enter { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
.scanner-screen { display: flex !important; flex-direction: column; justify-content: center; gap: 16px; }
.mission-screen.scanner-screen.encounter-screen { height: 100svh; min-height: 0; padding: 76px 16px 12px; justify-content: flex-start; }
.scanner-screen .camera-stage { width: min(100%, 760px); height: 72svh; min-height: 420px; }
.scanner-controls { text-align: center; max-width: 700px; }
.scanner-controls button { background: transparent; border: 1px solid #b6ff00; border-radius: 5px; padding: 12px 18px; margin: 6px; color: #b6ff00; box-shadow: 0 0 24px #b6ff0022; }

.mission-screen { min-height: 100svh; width: 100%; position: relative; overflow: hidden; display: grid; place-items: center; padding: 24px; box-sizing: border-box; background: radial-gradient(ellipse at 50% 60%, #182528 0%, #090e13 42%, #030509 85%); color: #eff7ee; font-family: jost, sans-serif; isolation: isolate; }
.mission-screen::before { content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none; background: linear-gradient(115deg, transparent 25%, #779b8a08 45%, transparent 60%); box-shadow: inset 0 0 130px #000a; }
.mission-start { max-width: 100%; padding: 28px 42px; border: 1px solid #a5cfa56b; border-radius: 8px; background: linear-gradient(150deg, #253c33, #101d1b); color: #eefbe7; font-size: clamp(22px, 4vw, 38px); font-weight: 500; letter-spacing: 0.04em; box-shadow: 0 0 65px #82bda51a, 0 16px 50px #0009; transition: border-color .2s, box-shadow .2s; }
.mission-start:hover { border-color: #d3efb6; box-shadow: 0 0 75px #82bda533; }
.intro-monster-stage { position: absolute; inset: 0 0 180px; display: grid; place-items: center; pointer-events: none; }
.intro-glow { width: min(70vw, 460px); aspect-ratio: 1; border-radius: 50%; background: radial-gradient(ellipse, #719d7926, transparent 65%); }
.intro-controls { align-self: end; z-index: 1; text-align: center; padding: 24px 0; }
.intro-status { font-style: italic; color: #fff; font-size: 22px; }
.intro-controls button { padding: 12px 20px; margin: 8px; border: 1px solid #b6ff00; border-radius: 5px; color: #b6ff00; background: transparent; box-shadow: 0 0 24px #b6ff0022; }
.intro-controls button:hover { color: #caff42; border-color: #caff42; box-shadow: 0 0 33px #b6ff0044; }
.intro-controls button:focus-visible { outline: 3px solid #caff42; outline-offset: 4px; }
.intro-controls .skip-intro { background: transparent; border-color: #b6ff0080; color: #b6ff00; }
.intro-error { max-width: 440px; color: #ffc4ad; }
.rally-app { --ink: #193c32; --muted: #64796e; background: #f3f5ee; color: var(--ink); min-height: 100vh; padding: 0 5vw 48px; font-family: jost, sans-serif; }
.rally-app * { box-sizing: border-box; }
.topbar { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 24px 0; border-bottom: 1px solid #193c3220; }
a { color: inherit; } .wordmark { font-weight: 600; font-size: 22px; } .wordmark span { font-size: 14px; font-weight: 400; color: var(--muted); }
.counter { border: 1px solid #193c3220; border-radius: 24px; padding: 8px 14px; font-size: 14px; white-space: nowrap; }
.intro { padding: 44px 0 28px; }.eyebrow { font-size: 11px; letter-spacing: 2px; font-weight: 600; }
h1 { font-size: clamp(32px, 4.5vw, 58px); line-height: 1.08; font-weight: 500; margin: 12px 0 18px; } h2 { font-weight: 500; font-size: 25px; margin: 10px 0; } p { line-height: 1.55; }
.intro > p:last-child, .collection > p { color: var(--muted); }
.experience { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 30px; align-items: start; max-width: 1300px; }
.camera-stage { position: relative; min-height: 600px; height: min(720px, 80svh); overflow: hidden; border-radius: 28px; background: radial-gradient(ellipse at 50% 35%, #466e58, #142e29 85%); color: white; isolation: isolate; }
video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; } video.live { opacity: 1; }
.live-label { position: absolute; top: 20px; left: 20px; border: 1px solid #ffffff35; background: #17342dc9; border-radius: 24px; font-size: 12px; padding: 8px 12px; }
.camera-welcome { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 32px; text-align: center; }.camera-welcome p { max-width: 360px; color: #d4e2d8; }.scan-symbol { font-size: 80px; color: #d9f5ab; }
button { font: inherit; cursor: pointer; } button:disabled { cursor: wait; opacity: 0.6; } button:focus-visible, a:focus-visible { outline: 3px solid #83b347; outline-offset: 4px; }
.camera-welcome button, .encounter button, .codes-intro button { background: #d9f5ab; color: #183a2c; border: 0; border-radius: 30px; padding: 12px 22px; margin-top: 14px; }.camera-welcome .secondary { background: transparent; color: white; text-decoration: underline; }
.scan-guide { position: absolute; inset: 0; display: grid; place-content: center; text-align: center; pointer-events: none; }.scan-frame { width: 220px; height: 220px; border: 2px solid #d9f5ab; border-radius: 24px; }.scan-guide p { text-shadow: 0 1px 5px black; background: #16352eaa; border-radius: 16px; padding: 8px; }
.creature-anchor { position: absolute; top: 39%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; }
.encounter { position: absolute; bottom: 62px; left: 16px; right: 16px; background: #142e29df; text-align: center; padding: 18px; border: 1px solid #ffffff20; border-radius: 20px; }.encounter p { font-size: 10px; letter-spacing: 2px; margin: 0; color: #d9f5ab; }.encounter h2 { font-size: 30px; margin: 4px 0; }.encounter span { display: block; font-size: 14px; color: #c4d8cb; }
.camera-stop { position: absolute; bottom: 16px; right: 20px; color: white; background: #142e29cc; border: 1px solid #ffffff40; border-radius: 20px; padding: 8px 12px; font-size: 12px; }
.collection { padding: 8px 0; }.collection > p { font-size: 14px; }ol { list-style: none; padding: 0; margin: 22px 0; display: grid; gap: 8px; }li button { display: flex; align-items: center; gap: 12px; width: 100%; padding: 12px; color: var(--ink); background: #ffffffa0; border: 1px solid #193c3215; border-radius: 16px; text-align: left; }li button:hover, li button.selected { border-color: #476f50; background: white; }li button > span:last-child { margin-left: auto; }.station-number { display: grid; place-items: center; width: 40px; height: 44px; border-radius: 12px; font-size: 14px; }li strong, li small { display: block; }li strong { font-weight: 500; }li small { color: var(--muted); font-size: 11px; }
.feedback { background: #e4ecd8; padding: 18px; border-radius: 16px; }.error { background: #ffe4d8; color: #68351f; }.privacy { color: var(--muted); font-size: 12px; margin: 20px 0 32px; }.complete { padding: 14px; background: #d9f5ab; border-radius: 12px; }
.codes-section { border-top: 1px solid #193c3220; padding-top: 20px; }.codes-toggle { background: none; border: none; color: var(--ink); font-size: 18px; padding: 8px 0; }.codes-intro { display: flex; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 24px; }.codes-intro p { max-width: 620px; }.codes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }.code-card { text-align: center; background: white; padding: 24px 10px; border-radius: 16px; }.code-card p { font-size: 11px; letter-spacing: 1px; }.code-card h3 { margin: 8px 0; }.code-card img { display: block; width: 100%; max-width: 200px; height: auto; margin: auto; }.code-card code { font-size: 11px; }
@media (max-width: 800px) { .rally-app { padding: 0 16px 32px; }.wordmark span { display: none; }.experience { grid-template-columns: 1fr; }.intro { padding-top: 24px; }.camera-stage { min-height: 560px; height: 75svh; }.codes-grid { grid-template-columns: repeat(2, 1fr); }.codes-intro { flex-direction: column; align-items: start; } }
@page { size: A4 portrait; margin: 12mm; }
@media print { .rally-app { padding: 0; background: white; }.topbar, .intro, .experience, .feedback, .privacy, .codes-toggle, .codes-intro { display: none; }.codes-section { border: 0; padding: 0; }.codes-content { display: block !important; }.codes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; }.code-card { border: 1px solid #aaa; padding: 4mm; height: 62mm; break-inside: avoid; }.code-card img { width: 38mm; height: 38mm; }.code-card h3, .code-card p { margin: 0; }.code-card code { font-size: 8pt; } }
.mission-start.scanner-open { background: transparent; border-color: #b6ff00; color: #b6ff00; border-radius: 5px; box-shadow: 0 0 24px #b6ff0022; }
.mission-start.scanner-open:hover, .scanner-controls button:hover { border-color: #caff42; color: #caff42; box-shadow: 0 0 33px #b6ff0044; }
.mission-start.scanner-open:focus-visible, .scanner-controls button:focus-visible { outline-color: #b6ff00; }
.scanner-screen .camera-stage:not(.model-stage) { background: #b6ff000c; border: 1px solid #b6ff0066; }
.scanner-screen .scan-frame { border-color: #b6ff00; box-shadow: 0 0 24px #b6ff0033; }
.scanner-screen .scan-guide p { color: #b6ff00; background: #030509b3; border: 1px solid #b6ff0055; }
</style>
