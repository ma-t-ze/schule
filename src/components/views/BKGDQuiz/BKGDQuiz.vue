<script setup>
import PlayerAnimal from './PlayerAnimal.vue'
import { computed, onActivated, onDeactivated, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import QRCode from 'qrcode'
import QuizResults from './QuizResults.vue'
import { questions, answerSeconds, answerCounts, questionPhase, ranking, answerPoints, quizVersion } from './questions'
import { quizIdentity, syncClock, createGame, joinGame, advanceGame, revealGame, sendAnswer, watchGame, watchPlayers, watchAnswers, watchOwnAnswer } from '../../../services/bkgdQuizFirebase'

const showRanking = ref(false)
const menuDialog = ref(null), awardsDialog = ref(null), awardsPreviewOpen = ref(false)
const sampleResults = [
  { id: 'demo-1', name: 'Alex', correct: 19, score: 17650 },
  { id: 'demo-2', name: 'Sam', correct: 18, score: 16200 },
  { id: 'demo-3', name: 'Kim', correct: 17, score: 14850 },
  { id: 'demo-4', name: 'Robin', correct: 15, score: 12600 }
]
function previewAwards() {
  menuDialog.value?.close()
  awardsDialog.value?.showModal()
  awardsPreviewOpen.value = true
}
const route = useRoute(), router = useRouter()
const user = ref(null), room = ref(''), game = ref(null), role = ref(''), name = ref(''), pinInput = ref('')
const players = ref([]), answers = ref([]), ownAnswer = ref(null), qr = ref('')
const ownAnswerData = ref(null)
const ownPoints = computed(() => answerPoints(ownAnswerData.value))
const busy = ref(false), sending = ref(false), ready = ref(false), error = ref(''), copied = ref(false)
const online = ref(navigator.onLine), serverConfirmed = ref(false), now = ref(Date.now()), clockOffset = ref(0)
const letters = ['A', 'B', 'C', 'D']
const music = ref(null), musicBlocked = ref(false)
const pointsSound = ref(null)
function stopPointsSound() {
  if (!pointsSound.value) return
  pointsSound.value.pause()
  pointsSound.value.currentTime = 0
}
function openRanking() {
  showRanking.value = true
  stopPointsSound()
  pointsSound.value?.play().catch(() => {})
}
const musicShouldPlay = computed(() => awardsPreviewOpen.value || (role.value === 'host' && (phase.value === 'finished' || (phase.value === 'question' && startTime.value != null))))
let unsubscribers = [], ownUnsubscribe = null, allUnsubscribe = null, timer = null, active = false, generation = 0, revealing = false, revealRetryAt = 0
const question = computed(() => questions[game.value?.questionIndex])
const phase = computed(() => questionPhase(game.value, now.value))
const startTime = computed(() => game.value?.startedAt?.toMillis?.() ?? null)
const seconds = computed(() => startTime.value == null ? answerSeconds : Math.max(0, Math.min(answerSeconds, Math.ceil((startTime.value + answerSeconds * 1000 - now.value) / 1000))))
const counts = computed(() => answerCounts(answers.value, game.value?.questionIndex))
const totalAnswers = computed(() => counts.value.reduce((sum, n) => sum + n, 0))
const leaders = computed(() => ranking(players.value, answers.value))
const myResult = computed(() => leaders.value.find(p => p.id === user.value?.uid))
const joinUrl = computed(() => `${location.origin}${router.resolve({ name: 'bkgd-live-quiz', query: { game: room.value } }).href}`)
const canAnswer = computed(() => role.value === 'player' && phase.value === 'question' && startTime.value != null && ownAnswer.value == null && !sending.value && online.value && serverConfirmed.value)

function stopMusic() {
  if (!music.value) return
  music.value.pause()
  music.value.currentTime = 0
  music.value.muted = true
  musicBlocked.value = false
}
function playMusic() {
  if (!music.value || !musicShouldPlay.value || !active) return
  music.value.muted = false
  music.value.volume = 0.25
  music.value.play().then(() => {
    if (!musicShouldPlay.value || !active) stopMusic()
    else musicBlocked.value = false
  }).catch(error => { if (error.name !== 'AbortError' && musicShouldPlay.value) musicBlocked.value = true })
}
function primeMusic() {
  // Start muted within the button gesture so mobile browsers permit later playback.
  if (!music.value) return
  music.value.muted = true
  music.value.play().then(() => {
    if (!musicShouldPlay.value) stopMusic()
  }).catch(() => {})
}
watch([musicShouldPlay, () => game.value?.questionIndex], ([playing]) => {
  stopMusic()
  if (playing) playMusic()
}, { flush: 'sync' })

function explainError(e) {
  const code = e?.code || ''
  if (code.includes('operation-not-allowed') || code.includes('admin-restricted-operation') || code.includes('configuration-not-found')) return 'Die anonyme Anmeldung ist in Firebase noch nicht aktiviert. Bitte die Spielleitung informieren.'
  if (code.includes('permission-denied')) return 'Firebase hat den Zugriff abgelehnt. Bitte die Quiz-Regeln im Projekt gestaltgesetze-ada34 prüfen. Antworten sind nur während der 30 Sekunden möglich.'
  if (code.includes('network') || code.includes('unavailable')) return 'Die Verbindung ist unterbrochen. Bitte prüfe dein Internet und versuche es erneut.'
  return e?.message || 'Etwas hat nicht geklappt. Bitte erneut versuchen.'
}
function failed(e) { error.value = explainError(e) }
function disconnect() {
  stopMusic()
  stopPointsSound()
  unsubscribers.forEach(stop => stop()); unsubscribers = []
  ownUnsubscribe?.(); ownUnsubscribe = null
  allUnsubscribe?.(); allUnsubscribe = null
}
function listenAnswers() {
  if (allUnsubscribe || !room.value) return
  allUnsubscribe = watchAnswers(room.value, snap => { answers.value = snap.docs.filter(d => !d.metadata.hasPendingWrites).map(d => d.data()) }, failed)
}
function connect(pin, mode) {
  disconnect()
  room.value = pin; role.value = mode; game.value = null; answers.value = []; players.value = []; ownAnswer.value = null; ownAnswerData.value = null
  serverConfirmed.value = false
  unsubscribers.push(watchGame(pin, snap => {
    serverConfirmed.value = !snap.metadata.fromCache && !snap.metadata.hasPendingWrites
    if (!snap.exists()) { error.value = 'Dieses Spiel ist nicht mehr verfügbar.'; return }
    const value = snap.data()
    if (value.version !== quizVersion) { error.value = 'Die Quiz-Version hat sich geändert. Bitte lade die Seite neu.'; return }
    if (mode === 'host' && value.ownerUid !== user.value.uid) { error.value = 'Dieses Spiel gehört einer anderen Spielleitung.'; disconnect(); game.value = null; role.value = ''; return }
    game.value = value
    if (mode === 'host' || value.phase === 'finished') listenAnswers()
  }, failed))
  unsubscribers.push(watchPlayers(pin, snap => { players.value = snap.docs.map(d => ({ id: d.id, ...d.data() })) }, failed))
}
watch([room, () => game.value?.questionIndex, phase], () => { showRanking.value = false; stopPointsSound() })
watch(() => game.value?.questionIndex, index => {
  ownUnsubscribe?.(); ownUnsubscribe = null; ownAnswer.value = null; ownAnswerData.value = null
  if (role.value !== 'player' || !Number.isInteger(index) || index < 0) return
  ownUnsubscribe = watchOwnAnswer(room.value, user.value.uid, index, snap => {
    if (!snap.metadata.hasPendingWrites) {
      ownAnswerData.value = snap.exists() ? snap.data() : null
      ownAnswer.value = ownAnswerData.value?.choice ?? null
    }
  }, failed)
})
watch(joinUrl, async url => { if (room.value) qr.value = await QRCode.toDataURL(url, { width: 240, margin: 2 }) })
async function action(fn) {
  if (busy.value) return
  if (!online.value) { error.value = 'Du bist offline. Bitte verbinde dich mit dem Internet.'; return }
  busy.value = true; error.value = ''
  try { await fn() } catch (e) { failed(e) } finally { busy.value = false }
}
async function host() {
  await action(async () => {
    const pin = await createGame(user.value.uid)
    await router.replace({ name: 'bkgd-live-quiz', query: { game: pin, mode: 'host' } })
    connect(pin, 'host')
  })
}
async function join() {
  const pin = pinInput.value.replace(/\s/g, ''), nickname = name.value.trim()
  if (!/^\d{6}$/.test(pin)) { error.value = 'Bitte gib den sechsstelligen Spielcode ein.'; return }
  if (nickname.length < 2 || nickname.length > 20) { error.value = 'Dein Spitzname braucht 2 bis 20 Zeichen.'; return }
  await action(async () => {
    const player = await joinGame(pin, user.value, nickname)
    name.value = player.name
    await router.replace({ name: 'bkgd-live-quiz', query: { game: pin } })
    connect(pin, 'player')
  })
}
async function next() {
  if (busy.value || !online.value) return
  primeMusic()
  await action(() => advanceGame(room.value, user.value.uid, game.value.questionIndex))
}
async function answer(choice) {
  if (!canAnswer.value) return
  const index = game.value.questionIndex
  sending.value = true; error.value = ''
  try {
    await sendAnswer(room.value, user.value.uid, index, choice, game.value.startedAt)
    if (game.value.questionIndex === index) ownAnswer.value = choice
  } catch (e) {
    if (phase.value !== 'question') error.value = 'Die Antwortzeit ist vorbei. Deine Antwort kam leider zu spät an.'
    else failed(e)
  } finally { sending.value = false }
}
async function copyLink() {
  try { await navigator.clipboard.writeText(joinUrl.value); copied.value = true } catch { error.value = 'Bitte kopiere den angezeigten Link.' }
}
async function revealIfDue() {
  if (!active || revealing || !online.value || role.value !== 'host' || game.value?.phase !== 'question' || phase.value !== 'reveal' || Date.now() < revealRetryAt) return
  revealing = true
  try { await revealGame(room.value, user.value.uid, game.value.questionIndex) }
  catch (e) { revealRetryAt = Date.now() + 1500; if (!String(e.code).includes('permission-denied')) failed(e) }
  finally { revealing = false }
}
async function initialize() {
  const current = ++generation
  ready.value = false; serverConfirmed.value = false; error.value = ''
  try {
    const identity = await quizIdentity()
    const offset = await syncClock(identity.uid)
    if (!active || current !== generation) return
    user.value = identity; clockOffset.value = offset; ready.value = true
    pinInput.value = /^\d{6}$/.test(String(route.query.game)) ? String(route.query.game) : ''
    if (pinInput.value && route.query.mode === 'host') connect(pinInput.value, 'host')
    else if (pinInput.value) {
      // Rejoin only if this device already registered; never invent a nickname.
      const { doc, getDocFromServer } = await import('firebase/firestore')
      const { db } = await import('../../../services/firebase')
      const player = await getDocFromServer(doc(db, 'bkgd_quiz_games', pinInput.value, 'players', identity.uid))
      if (active && current === generation && player.exists()) { name.value = player.data().name; connect(pinInput.value, 'player') }
    }
  } catch (e) { if (active && current === generation) failed(e) }
}
function connectionChanged() {
  online.value = navigator.onLine
  if (online.value && user.value) syncClock(user.value.uid).then(offset => { clockOffset.value = offset }).catch(failed)
}
function stop() {
  menuDialog.value?.close(); awardsDialog.value?.close()
  active = false; generation++; disconnect(); clearInterval(timer)
  window.removeEventListener('online', connectionChanged); window.removeEventListener('offline', connectionChanged)
}
onActivated(() => {
  active = true; online.value = navigator.onLine
  window.addEventListener('online', connectionChanged); window.addEventListener('offline', connectionChanged)
  timer = setInterval(() => { now.value = Date.now() + clockOffset.value; revealIfDue() }, 150)
  initialize()
})
onDeactivated(stop)
onBeforeUnmount(stop)
</script>

<template>
  <main class="live-quiz" :class="{ participant: role === 'player' }">
    <audio ref="music" src="/audio/bkgd-quiz/game_music.wav" preload="auto" loop></audio>
    <audio ref="pointsSound" src="/audio/bkgd-quiz/points.wav" preload="auto"></audio>
    <header class="top"><router-link :to="{ name: 'bkgd-live-quiz' }" @click="disconnect(); game = null; role = ''; room = ''">BKGD · Live-Quiz</router-link><span v-if="room">Spielcode <strong>{{ room }}</strong></span><span v-else>20 Fragen · 30 Sekunden</span><button v-if="role !== 'player'" aria-haspopup="dialog" @click="menuDialog.showModal()">☰ Menü</button></header>
    <p v-if="!online" class="notice" role="status">Du bist offline. Deine Verbindung wird wiederhergestellt, sobald du online bist.</p>
    <p v-else-if="room && !serverConfirmed" class="notice" role="status">Verbindung zum Spiel wird hergestellt …</p>
    <div v-if="error" class="error" role="alert">{{ error }} <button v-if="!ready" @click="initialize">Erneut verbinden</button></div>
    <section v-if="!game" class="entry">
      <p class="eyebrow">GEMEINSAM WISSEN TESTEN</p><h1>Farbmischsysteme<br>und Programme</h1><p class="lead">Die Fragen stehen auf dem großen Bildschirm. Auf deinem Gerät wählst du A, B, C oder D.</p>
      <form class="join-card" @submit.prevent="join"><h2>Mitspielen</h2><label for="game-code">Spielcode</label><input id="game-code" v-model="pinInput" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" required autocomplete="off" placeholder="123456"><label for="nickname">Dein Spitzname</label><input id="nickname" v-model="name" minlength="2" maxlength="20" required autocomplete="nickname" placeholder="Spitzname"><button class="primary" :disabled="!ready || busy || !online">{{ busy ? 'Bitte warten …' : 'Beitreten' }}</button></form>
      <div class="host-entry"><h2>Für die Spielleitung</h2><p>Öffne diese Ansicht auf dem Beamer. Die Klasse meldet sich mit dem Spielcode an.</p><button :disabled="!ready || busy || !online" @click="host">Neues Quiz leiten</button> <button @click="previewAwards">Siegerehrung testen</button></div><p v-if="!ready && !error" role="status">Verbindung zu Firebase wird hergestellt …</p>
    </section>

    <template v-else-if="role === 'host'">
      <div v-if="musicBlocked && musicShouldPlay" class="host-controls">
        <button @click="playMusic">Musik einschalten</button>
      </div>
      <section v-if="phase === 'lobby'" class="lobby">
        <h1>Seid ihr bereit?</h1><p>QR-Code scannen oder Spielcode eingeben.</p><div class="invite"><img v-if="qr" :src="qr" alt="QR-Code zum Mitspielen" width="240" height="240"><div><p class="pin">{{ room }}</p><a :href="joinUrl" target="_blank" rel="noopener">{{ joinUrl }}</a><button @click="copyLink">{{ copied ? 'Link kopiert' : 'Link kopieren' }}</button></div></div>
        <h2>{{ players.length }} angemeldet</h2><ul class="names"><li v-for="player in players" :key="player.id"><PlayerAnimal :id="player.id" />{{ player.name }}</li></ul><button class="primary" :disabled="busy || !players.length || !serverConfirmed || !online" @click="next">Quiz starten</button><p>Je schneller die richtige Antwort eingeht, desto mehr Punkte gibt es: 500 bis 1.000 Punkte. Falsche Antworten geben 0 Punkte. Alle haben 30 Sekunden.</p>
      </section>
      <QuizResults v-else-if="phase === 'finished'" :players="leaders" />
      <section v-else-if="question" class="question-screen" :class="{ resolved: phase === 'reveal' }">
        <div class="question-meta"><span>Frage {{ game.questionIndex + 1 }} / 20 · {{ question.topic }}</span><strong v-if="phase === 'question'" class="timer" role="timer" aria-label="Verbleibende Sekunden">{{ seconds }}</strong><strong v-else>Zeit vorbei</strong></div>
        <template v-if="phase === 'question' || !showRanking">
          <h1>{{ question.text }}</h1>
          <div class="options">
            <div v-for="(option, i) in question.answers" :key="i" class="option" :class="[`answer-${i}`, { correct: phase === 'reveal' && i === question.correct }]">
              <b>{{ letters[i] }}</b><span>{{ option }}</span><span v-if="phase === 'reveal' && i === question.correct" aria-label="Richtig">✓</span>
            </div>
          </div>
          <p v-if="phase === 'question'">{{ totalAnswers }} / {{ players.length }} Antworten eingegangen</p>
          <button v-else class="primary" @click="openRanking">Zur Rangliste</button>
        </template>
        <div v-else class="reveal">
          <p class="correct-count"><strong>{{ counts[question.correct] }} von {{ players.length }}</strong> haben richtig geantwortet.</p>
          <div class="bars" aria-label="Antwortverteilung"><div v-for="(count, i) in counts" :key="i"><span>{{ letters[i] }} · {{ count }}</span><div :class="`answer-${i}`" :style="{ width: `${players.length ? count / players.length * 100 : 0}%` }"></div></div></div>
          <p>{{ Math.max(0, players.length - totalAnswers) }} ohne Antwort</p>
          <section class="live-ranking" aria-labelledby="ranking-title">
            <h2 id="ranking-title">Rangliste</h2><ol class="leaderboard"><li v-for="player in leaders" :key="player.id"><strong><PlayerAnimal :id="player.id" />{{ player.name }}</strong><span>{{ player.score }} Punkte</span></li></ol>
          </section>
          <button class="primary" :disabled="busy || game.phase !== 'reveal' || !online || !serverConfirmed" @click="next">{{ game.questionIndex === 19 ? 'Endergebnis anzeigen' : 'Nächste Frage' }}</button>
        </div>
      </section>
    </template>

    <section v-else class="player-screen">
      <p class="eyebrow">{{ name }}</p>
      <template v-if="phase === 'lobby'"><h1>Du bist dabei!</h1><p>Schau auf den großen Bildschirm. Gleich geht es los.</p></template>
      <template v-else-if="phase === 'finished'"><h1>Geschafft!</h1><p v-if="myResult">{{ myResult.correct }} von 20 richtig · <strong>{{ myResult.score }} Punkte</strong></p><p>Den Klassenstand siehst du auf dem großen Bildschirm.</p></template>
      <template v-else>
        <h1>Frage {{ game.questionIndex + 1 }} / 20</h1><p v-if="phase === 'question'">Wähle deine Antwort. <strong>{{ seconds }} Sekunden</strong></p>
        <p v-else-if="ownAnswer === null">Zeit vorbei. Schau auf die Lösung am großen Bildschirm.</p><p v-else>{{ ownAnswer === question.correct ? `Richtig! +${ownPoints.toLocaleString('de-DE')} Punkte` : 'Leider nicht richtig.' }} Schau auf den großen Bildschirm.</p>
        <div class="player-buttons"><button v-for="(letter, i) in letters" :key="letter" :class="[`answer-${i}`, { chosen: ownAnswer === i }]" :disabled="!canAnswer" :aria-label="`Antwort ${letter}`" :aria-pressed="ownAnswer === i" @click="answer(i)">{{ letter }}<small v-if="ownAnswer === i">Deine Antwort</small></button></div>
        <p v-if="sending" role="status">Antwort wird gesendet …</p><p v-else-if="ownAnswer !== null && phase === 'question'" role="status">Antwort gespeichert. Warte auf die Auflösung.</p><p v-if="phase === 'reveal'">Die Spielleitung startet gleich die nächste Frage.</p>
      </template>
    </section>
    <p class="emoji-credit">Tiergrafiken: <a href="https://github.com/jdecked/twemoji" target="_blank" rel="noopener">Twemoji</a> © Twitter und Mitwirkende · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a></p>
    <dialog ref="menuDialog" class="quiz-dialog" aria-labelledby="quiz-menu-title" @click="($event.target === menuDialog) && menuDialog.close()">
      <div class="dialog-top"><h2 id="quiz-menu-title">Quiz-Menü</h2><button autofocus @click="menuDialog.close()">Schließen</button></div>
      <div v-if="role === 'host' && game" class="restart-controls">
        <button :disabled="busy || !online || !serverConfirmed" @click="menuDialog.close(); host()">Spiel neu starten</button>
        <p>Neue Runde mit neuem Spielcode. Die Klasse tritt erneut bei.</p>
      </div>
      <button class="primary" @click="previewAwards">Siegerehrung testen</button>
      <h3>Alle 20 Fragen</h3>
      <ol class="question-list">
        <li v-for="(item, index) in questions" :key="index">
          <small>{{ item.topic }}</small><p>{{ item.text }}</p>
          <ul class="menu-answers" aria-label="Antwortmöglichkeiten">
            <li v-for="(answer, answerIndex) in item.answers" :key="answerIndex" :class="{ 'menu-answer-correct': answerIndex === item.correct }">
              <strong>{{ letters[answerIndex] }}.</strong> {{ answer }}
              <span v-if="answerIndex === item.correct">✓ Richtig</span>
            </li>
          </ul>
        </li>
      </ol>
    </dialog>
    <dialog ref="awardsDialog" class="quiz-dialog awards-preview" @close="awardsPreviewOpen = false" aria-label="Vorschau der Siegerehrung" @click="($event.target === awardsDialog) && awardsDialog.close()">
      <div class="dialog-top"><strong>Vorschau · Beispieldaten</strong><button autofocus @click="awardsDialog.close()">Vorschau schließen</button></div>
      <button v-if="musicBlocked" @click="playMusic">Musik einschalten</button>
      <QuizResults :players="sampleResults" />
    </dialog>
  </main>
</template>

<style scoped>
.live-quiz { min-height: 100dvh; box-sizing: border-box; background: #241443; color: white; padding: 24px clamp(16px, 4vw, 64px) 64px; font-family: 'Jost', sans-serif; }
.top { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; max-width: 1300px; margin: auto; }.top a { color: white; text-decoration: none; font-weight: 500; }.top strong { letter-spacing: .12em; }
h1 { font-size: clamp(30px, 4vw, 58px); line-height: 1.2; margin: 24px 0; }h2 { font-size: clamp(22px, 2.3vw, 30px); }.eyebrow { letter-spacing: .14em; font-size: 14px; color: #d9cafa; }.lead { font-size: 22px; max-width: 720px; margin: 24px auto; }
p { line-height: 1.5; }button, input { font: inherit; }button { cursor: pointer; padding: 13px 22px; border-radius: 10px; border: 2px solid transparent; background: white; color: #241443; font-weight: 500; }button:disabled { cursor: default; opacity: .55; }button:focus-visible, a:focus-visible, input:focus-visible, summary:focus-visible { outline: 4px solid #ffe29b; outline-offset: 4px; }.primary { background: #e7ff88; font-size: 22px; }.notice, .error { max-width: 1000px; margin: 20px auto; padding: 16px; border-radius: 8px; color: #241443; background: #ffe9b4; }.error { background: #ffd9e0; }.error button { margin-left: 12px; }
.entry, .lobby, .results, .player-screen { max-width: 1000px; margin: 50px auto 0; text-align: center; }.join-card { max-width: 400px; text-align: left; margin: 32px auto; background: #ffffff12; padding: 28px; border-radius: 18px; }.join-card h2 { margin-top: 0; }.join-card label { display: block; margin: 16px 0 6px; }.join-card input { box-sizing: border-box; width: 100%; padding: 14px; border: 0; border-radius: 8px; color: #21122f; background: white; font-size: 22px; }.join-card button { width: 100%; margin-top: 24px; }.host-entry { padding-top: 24px; border-top: 1px solid #ffffff35; }
.invite { display: flex; justify-content: center; align-items: center; gap: 32px; flex-wrap: wrap; margin: 32px 0; }.invite img { border-radius: 12px; }.invite a { display: block; color: white; overflow-wrap: anywhere; margin: 16px 0; }.pin { font-size: clamp(48px, 8vw, 90px); font-weight: 600; letter-spacing: .14em; margin: 0; }.names { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin: 24px 0; }.names li { padding: 10px 18px; border-radius: 8px; background: #ffffff20; }
.restart-controls { margin-bottom: 24px; }
.host-controls { max-width: 1200px; margin: 24px auto; display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 12px; }.host-controls span { font-size: 14px; color: #d9cafa; }
.question-screen { max-width: 1200px; margin: 32px auto; text-align: center; }.question-meta { display: flex; align-items: center; justify-content: space-between; gap: 20px; }.timer { display: grid; place-items: center; width: 76px; height: 76px; border: 4px solid #e7ff88; border-radius: 50%; font-size: 36px; }.options { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }.option { min-height: 76px; padding: 18px; border-radius: 12px; display: flex; gap: 18px; align-items: center; text-align: left; font-size: clamp(18px, 2vw, 27px); border: 4px solid transparent; }.option b { font-size: 32px; }.answer-0 { background: #bd234a; color: white; }.answer-1 { background: #2355b8; color: white; }.answer-2 { background: #f0bf36; color: #221c10; }.answer-3 { background: #18764d; color: white; }.correct { border-color: white; box-shadow: 0 0 0 3px #e7ff88; }.muted { opacity: .5; }.reveal { padding: 16px 0; }.correct-count { font-size: 27px; }.bars { display: grid; gap: 10px; max-width: 600px; margin: 24px auto; text-align: left; }.bars > div { background: #ffffff14; border-radius: 6px; padding: 8px; }.bars > div > div { height: 12px; border-radius: 3px; min-width: 0; margin-top: 6px; }details { margin-top: 32px; }summary { cursor: pointer; }
.leaderboard { padding-left: 30px; text-align: left; }.leaderboard li { padding: 24px; margin-bottom: 12px; border-radius: 14px; background: #ffffff14; font-size: clamp(22px, 2.6vw, 32px); min-height: 92px; }.leaderboard strong { overflow-wrap: anywhere; }.emoji-credit { text-align: center; font-size: 12px; margin-top: 40px; color: #d9cafa; }.leaderboard span { display: block; margin-top: 12px; font-size: .85em; }.player-screen { max-width: 720px; }.player-buttons { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 32px auto; }.player-buttons button { min-height: min(25vh, 200px); font-size: 60px; border: 4px solid transparent; }.player-buttons button:disabled { opacity: .65; }.player-buttons .chosen { border-color: white; opacity: 1 !important; }.player-buttons small { display: block; font-size: 16px; }
.resolved h1 { font-size: clamp(26px, 3vw, 42px); margin: 18px 0; }.resolved .option { min-height: 42px; padding: 12px; }.resolved .bars { grid-template-columns: repeat(4, 1fr); max-width: 800px; margin: 16px auto; }.resolved .reveal { padding: 0; }.resolved .reveal h2 { margin: 12px 0; }.resolved .reveal p { margin: 12px 0; }
@media (max-width: 650px) { .options { grid-template-columns: 1fr; gap: 10px; }.option { min-height: 40px; padding: 12px; }.leaderboard span { display: block; float: none; }.entry, .lobby, .results, .player-screen { margin-top: 30px; }.join-card { padding: 20px; }.pin { letter-spacing: .08em; } }
.quiz-dialog { box-sizing: border-box; width: min(850px, calc(100% - 32px)); max-height: 90dvh; overflow-y: auto; background: #241443; color: white; border: 1px solid #ffffff40; border-radius: 18px; padding: clamp(18px, 4vw, 40px); font-family: 'Jost', sans-serif; }
.quiz-dialog::backdrop { background: #090313cc; }.dialog-top { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; }.dialog-top h2 { margin: 0; }.question-list { padding-left: 28px; }.question-list li { padding: 14px 8px; border-bottom: 1px solid #ffffff30; }.question-list p { font-size: 20px; margin: 6px 0; }.question-list small { color: #d9cafa; }.awards-preview { width: min(1100px, calc(100% - 24px)); }.host-entry button { margin: 6px; }
.menu-answers { list-style: none; padding: 0; margin: 12px 0 0; }
.question-list .menu-answers li { padding: 10px 12px; margin: 6px 0; border: 0; border-radius: 8px; background: #ffffff12; }
.question-list .menu-answers .menu-answer-correct { background: #e7ff8820; color: #e7ff88; }
.menu-answers span { display: inline-block; margin-left: 10px; font-weight: 600; }
</style>
