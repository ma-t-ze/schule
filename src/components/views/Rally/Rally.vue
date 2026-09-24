<script setup>
import { ref, computed, nextTick, onMounted, onActivated, onDeactivated, onBeforeUnmount } from 'vue'
import { rallyMuted } from './rallyAudio'
import jsQR from 'jsqr'
import QRCode from 'qrcode'
import IntroMonster from './IntroMonster.vue'
import PrisonEncounter from './PrisonEncounter.vue'
import NavigatorWheel from './NavigatorWheel.vue'
import { stations, stationCode, parseStationCode } from './stations'

const video = ref(null)
const testCreature = ref(false)
const phase = ref('welcome')
const navigatorName = ref('')
const scannerName = ref('')
const collectorName = ref('')
const showRoleSidebar = computed(() => phase.value !== 'welcome' || Boolean(navigatorName.value || scannerName.value || collectorName.value))
const sectionMenu = ref(null)
const sectionToggle = ref(null)
const sections = [
  { id: 'welcome', label: 'Rettet die Creaturen' },
  { id: 'roles', label: 'Rollen verteilen' },
  { id: 'markers', label: 'Markern' },
  { id: 'navigator', label: 'Wahl des Navigators' },
  { id: 'scanner-choice', label: 'Wahl des Scanners' },
  { id: 'collector-choice', label: 'Wahl des Sammlers' },
  { id: 'start', label: 'Missionsstart' },
  { id: 'intro', label: 'Monster-Intro' },
  { id: 'clue', label: 'Scanner öffnen' },
  { id: 'scanner', label: 'QR-Code scannen / Creaturen' }
]
const currentSection = computed(() => phase.value === 'departing' ? 'intro' : phase.value)
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
  phase.value = id
  if (id === 'intro') startMission()
  else if (id === 'scanner') await openScanner()
  else if (isSetupPhase()) playGameMusic()
  else playMusic()
}
const scannedThisMission = ref(false)
const introAudio = ref(null)
const monsterAudio = ref(null)
const musicAudio = ref(null)
const gameMusicAudio = ref(null)
const isSetupPhase = () => ['welcome', 'roles', 'navigator', 'scanner-choice', 'collector-choice', 'markers', 'start'].includes(phase.value)
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
  const attempt = audioAttempt
  try {
    musicAudio.value.volume = 0.1
    await musicAudio.value.play()
    if (attempt !== audioAttempt || !visible.value || isSetupPhase() || (phase.value === 'intro' && !introWaiting.value && introAudio.value?.paused)) musicAudio.value?.pause()
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
  introAudio.value?.pause()
  introPlaying.value = false
  stopMonsterSound()
  departureTimer = setTimeout(() => { phase.value = 'clue' }, 1200)
}
const active = ref(null)
const cameraOn = ref(false)
const starting = ref(false)
const preview = ref(false)
const showCodes = ref(false)
const error = ref('')
const message = ref('')
const found = ref([])
const rescued = ref([])
function collectCreature() {
  if (current.value && !rescued.value.some(station => station.id === current.value.id)) {
    rescued.value = [...rescued.value, current.value]
  }
  nextStation()
}
const qrImages = ref({})
const visible = ref(true)
const current = computed(() => stations.find(s => s.id === active.value))
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
}
function pause() { visible.value = false; gameMusicAudio.value?.pause(); stopCamera(); pauseIntro() }
function visibilityChange() {
  if (document.hidden) pause()
  else { visible.value = true; playGameMusic() }
}
async function openScanner() {
  phase.value = 'scanner'
  await nextTick()
  playMusic()
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
          active.value = station.id; scannedThisMission.value = true; message.value = ''; stopCamera()
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
function demo(station) {
  stopCamera(); preview.value = true; active.value = station.id; error.value = ''; message.value = ''
}
function showTestCreature() { testCreature.value = false; demo(stations[0]) }
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
onBeforeUnmount(() => { clearTimeout(departureTimer); pause(); document.removeEventListener('visibilitychange', visibilityChange) })
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
  <aside v-if="rescued.length" class="rescued-creatures" aria-label="Befreite Creaturen">
    <div v-for="station in rescued" :key="station.id" class="rescued-creature">
      <div class="rescued-model"><IntroMonster :model-url="station.modelUrl" :label="station.name" :playing="true" :visible="visible" /></div>
      <span>{{ station.name }}</span>
    </div>
  </aside>
  <audio :muted="rallyMuted" ref="gameMusicAudio" src="/rally/game_music.wav" preload="auto" loop></audio>
  <audio :muted="rallyMuted" ref="introAudio" src="/rally/intro.mp3" preload="metadata"
    @play="introPlaying = true" @pause="introPaused" @ended="finishIntro"
    @error="pauseIntro(); introError = 'Die Intro-Datei konnte nicht geladen werden.'"></audio>
  <audio :muted="rallyMuted" ref="monsterAudio" src="/rally/monster.wav" preload="auto" @ended="repeatMonsterSound"></audio>
  <audio :muted="rallyMuted" ref="musicAudio" src="/rally/guitar.wav?v=63fc19f89477" preload="auto" loop></audio>
  <main v-if="phase === 'welcome'" class="mission-screen">
    <div class="mission-welcome">
      <h1 class="mission-title">Rettet die <span>Creaturen</span></h1>
      <button class="mission-start" @click="phase = 'roles'">Start</button>
    </div>
  </main>
  <main v-else-if="phase === 'roles'" class="mission-screen">
    <button class="mission-start" @click="phase = 'navigator'">Rollen verteilen</button>
  </main>
  <main v-else-if="phase === 'navigator'" class="mission-screen">
    <NavigatorWheel key="navigator" @selected="navigatorName = $event" @continue="phase = 'scanner-choice'" />
  </main>
  <main v-else-if="phase === 'scanner-choice'" class="mission-screen">
    <NavigatorWheel key="scanner" title="Die Wahl des Scanners" role-name="Scanner" continue-label="Weiter zur Wahl des Sammlers"
      @selected="scannerName = $event" @continue="phase = 'collector-choice'" />
  </main>
  <main v-else-if="phase === 'collector-choice'" class="mission-screen">
    <NavigatorWheel key="collector" title="Die Wahl des Sammlers" role-name="Sammler" continue-label="Mission starten"
      @selected="collectorName = $event" @continue="startMission" />
  </main>
  <main v-else-if="phase === 'start'" class="mission-screen">
    <button class="mission-start" @click="playIntro">Mission Monster starten</button>
  </main>
  <main v-else-if="['intro', 'departing', 'clue'].includes(phase)" class="mission-screen intro-screen">
    <div v-if="phase !== 'clue'" class="intro-monster-stage" :class="{ departing: phase === 'departing' }">
      <IntroMonster :playing="introWaiting || introPlaying || phase === 'departing'" :visible="visible" />
    </div>
    <div v-if="phase === 'intro'" class="intro-controls">
      <p class="intro-status" role="status">{{ introWaiting ? 'Die Mission beginnt …' : introPlaying ? 'Der Weg nach Hause.' : 'Intro pausiert' }}</p>
      <p v-if="introError" class="intro-error" role="alert">{{ introError }}</p>
      <button v-if="!introWaiting" @click="introPlaying ? pauseIntro() : playIntro()">{{ introPlaying ? 'Intro pausieren' : 'Intro abspielen' }}</button>
      <button class="skip-intro" @click="finishIntro">Intro überspringen</button>
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
          <button @click="phase = 'scanner'; demo(station)">Modell ansehen</button>
        </article>
      </div>
    </section>
  </main>
  <main v-else class="mission-screen scanner-screen" :class="{ 'encounter-screen': current }">
    <PrisonEncounter v-if="current" :key="current.id" :station="current" :visible="visible" @continue="nextStation" @collected="collectCreature" />
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
      <button @click="nextStation">Zurück zum Hinweis</button>
      <button @click="showTestCreature">Test</button>
    </div>
  </main>
  <aside v-if="showRoleSidebar" class="navigator-info" aria-label="Teamrollen" aria-live="polite">
    <p>Navigator: <strong v-if="navigatorName">{{ navigatorName }}</strong><span v-else class="role-pending">Noch nicht gewählt</span></p>
    <p>Scanner: <strong v-if="scannerName">{{ scannerName }}</strong><span v-else class="role-pending">Noch nicht gewählt</span></p>
    <p>Sammler: <strong v-if="collectorName">{{ collectorName }}</strong><span v-else class="role-pending">Noch nicht gewählt</span></p>
    <p class="roles-note">Die Rollen wechseln während des Spiels.</p>
  </aside>
  </div>
</template>

<style scoped>
.rescued-creatures { position: fixed; top: 88px; left: 16px; z-index: 6; max-height: calc(100svh - 100px); overflow-y: auto; pointer-events: auto; }
.rescued-creature { display: flex; align-items: center; gap: 4px; color: #eff7ee; }
.rescued-model { width: 96px; height: 88px; }
.rescued-model :deep(.monster-view) { min-height: 0; }
.rescued-creature span { font-family: jost, sans-serif; font-size: 12px; text-shadow: 0 2px 5px #000; }
.mute-toggle { position: fixed; top: 16px; left: 74px; z-index: 21; display: grid; place-items: center; width: 48px; height: 48px; border: 1px solid #a5cfa56b; border-radius: 12px; background: #14231ef2; color: #eff7ee; }
.mute-toggle[aria-pressed="true"] { color: #f9d381; }

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
.section-menu summary { display: grid; place-items: center; width: 48px; height: 48px; border: 1px solid #a5cfa56b; border-radius: 12px; background: #14231ef2; cursor: pointer; list-style: none; }
.section-menu summary::-webkit-details-marker { display: none; }
.section-menu summary:focus-visible { outline: 3px solid #d3efb6; outline-offset: 3px; }
.section-menu nav { width: min(340px, calc(100vw - 32px)); max-height: calc(100svh - 92px); overflow-y: auto; margin-top: 10px; padding: 16px; border: 1px solid #a5cfa54d; border-radius: 14px; background: #0c1715fa; box-shadow: 0 18px 60px #000a; }
.section-menu h2 { margin: 0 0 12px; font-size: 20px; }
.section-menu button { display: block; width: 100%; text-align: left; padding: 10px 12px; border: 1px solid transparent; border-radius: 8px; background: transparent; color: inherit; }
.section-menu button:hover { background: #253c33; }
.section-menu button.current-section { border-color: #a5cfa580; background: #253c33; color: #d3efb6; }
.section-menu small { display: block; margin-top: 3px; font-size: 11px; }
.mission-layout { min-height: 100svh; background: #030509; }
.with-navigator .mission-screen { width: calc(100% - 220px); }
.navigator-info { position: fixed; right: 0; top: 0; bottom: 0; width: 220px; padding: 32px 20px; box-sizing: border-box; border-left: 1px solid #a5cfa533; background: #0c1715; color: #eff7ee; font-family: jost, sans-serif; z-index: 5; }
.navigator-info strong { display: block; font-size: 28px; color: #d3efb6; }
.navigator-info p + p { margin-top: 24px; }
.navigator-info { overflow-y: auto; }
.role-pending { display: block; color: #a5b5aa; font-size: 13px; margin-top: 4px; }
.roles-note { font-size: 14px; line-height: 1.5; color: #c5d5c8; }
@media (max-width: 600px) {
  .with-navigator .mission-screen { width: calc(100% - 110px); padding: 16px 10px; }
  .navigator-info { width: 110px; padding: 24px 10px; font-size: 13px; }
  .navigator-info strong { font-size: 20px; overflow-wrap: anywhere; }
}

.mission-welcome { width: 100%; text-align: center; }
.mission-title { margin: 0 0 48px; font-family: jost, sans-serif; font-size: clamp(44px, 10vw, 132px); font-weight: 900; line-height: .95; letter-spacing: -.045em; text-transform: uppercase; text-shadow: 0 4px 28px #0009; }
.mission-title span { display: block; margin-top: .12em; color: #d3efb6; text-shadow: 0 0 48px #82bda540, 0 8px 32px #000b; }
.test-creature { width: min(360px, 85vw); height: min(360px, 85vw); }
.intro-monster-stage.departing { animation: monster-exit 1.2s ease-in forwards; }
@keyframes monster-exit { to { transform: translateX(-110vw); opacity: 0; } }
.mission-clue { position: relative; display: grid; place-items: center; width: min(100%, 700px); min-height: min(65svh, 540px); text-align: center; animation: clue-enter .7s ease-out; }
.scanner-open { position: relative; z-index: 1; }
.scanner-reticle { position: absolute; width: min(90%, 440px); aspect-ratio: 1; border: 1px solid #91e9ce66; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, #86eac416 0%, transparent 68%); box-shadow: 0 0 35px #82bda51a, inset 0 0 35px #82bda51a; }
.scanner-reticle::before { content: ''; position: absolute; inset: 10%; border: 2px dashed #b0f4d975; border-radius: 50%; animation: reticle-orbit 40s linear infinite; }
.scanner-reticle::after { content: ''; position: absolute; inset: -7%; background: linear-gradient(#b0f4d9, #b0f4d9) center top / 2px 15% no-repeat, linear-gradient(#b0f4d9, #b0f4d9) center bottom / 2px 15% no-repeat, linear-gradient(#b0f4d9, #b0f4d9) left center / 15% 2px no-repeat, linear-gradient(#b0f4d9, #b0f4d9) right center / 15% 2px no-repeat; opacity: .8; }
.scanner-reticle span { position: absolute; inset: 23%; border: 1px solid #91e9ce55; transform: rotate(45deg); }
@keyframes reticle-orbit { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .scanner-reticle::before { animation: none; } .mission-clue { animation: none; } }
@keyframes clue-enter { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
.scanner-screen { display: flex !important; flex-direction: column; justify-content: center; gap: 16px; }
.mission-screen.scanner-screen.encounter-screen { height: 100svh; min-height: 0; padding: 76px 16px 12px; justify-content: flex-start; }
.scanner-screen .camera-stage { width: min(100%, 760px); height: 72svh; min-height: 420px; }
.scanner-controls { text-align: center; max-width: 700px; }
.scanner-controls button { background: #253c33; border: 1px solid #a5cfa56b; border-radius: 8px; padding: 12px 18px; margin: 6px; color: #eefbe7; }

.mission-screen { min-height: 100svh; width: 100%; position: relative; overflow: hidden; display: grid; place-items: center; padding: 24px; box-sizing: border-box; background: radial-gradient(ellipse at 50% 60%, #182528 0%, #090e13 42%, #030509 85%); color: #eff7ee; font-family: jost, sans-serif; isolation: isolate; }
.mission-screen::before { content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none; background: linear-gradient(115deg, transparent 25%, #779b8a08 45%, transparent 60%); box-shadow: inset 0 0 130px #000a; }
.mission-start { max-width: 100%; padding: 28px 42px; border: 1px solid #a5cfa56b; border-radius: 8px; background: linear-gradient(150deg, #253c33, #101d1b); color: #eefbe7; font-size: clamp(22px, 4vw, 38px); font-weight: 500; letter-spacing: 0.04em; box-shadow: 0 0 65px #82bda51a, 0 16px 50px #0009; transition: border-color .2s, box-shadow .2s; }
.mission-start:hover { border-color: #d3efb6; box-shadow: 0 0 75px #82bda533; }
.intro-monster-stage { position: absolute; inset: 0 0 180px; display: grid; place-items: center; pointer-events: none; }
.intro-glow { width: min(70vw, 460px); aspect-ratio: 1; border-radius: 50%; background: radial-gradient(ellipse, #719d7926, transparent 65%); }
.intro-controls { align-self: end; z-index: 1; text-align: center; padding: 24px 0; }
.intro-status { font-style: italic; color: #bacbbf; font-size: 22px; }
.intro-controls button { padding: 12px 20px; margin: 8px; border: 1px solid #83988970; border-radius: 8px; color: #e6eee5; background: #192822; }
.intro-controls .skip-intro { background: transparent; border-color: transparent; color: #a8b4ab; text-decoration: underline; }
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
</style>
