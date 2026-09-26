import { computed, onActivated, onBeforeUnmount, onDeactivated, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { firebaseConfigured } from '../../../services/firebase'
import { ensureRally, recordRallyScan, releaseRallyCreature, saveRallyEnergy, sendRallyCreatureHome, watchRally } from '../../../services/rallyFirebase'
import { isRallyId, readRallyState } from './rallyState'

export function useRallySync() {
  const route = useRoute()
  let saved
  try { saved = localStorage.getItem('rally-game-id-v1') } catch { /* Links also carry the ID. */ }
  const gameId = isRallyId(route.query.game) ? route.query.game : isRallyId(saved) ? saved : crypto.randomUUID().replaceAll('-', '')
  try { localStorage.setItem('rally-game-id-v1', gameId) } catch { /* Sharing remains possible. */ }
  const state = ref(null)
  const connected = ref(false)
  const failure = ref('')
  const pending = ref(0)
  let stop, enabled = false, generation = 0
  const link = name => `${import.meta.env.BASE_URL}${name}?game=${gameId}`
  const rallyLink = link('rally')
  const controlsLink = link('freecreatures')
  const message = computed(() => failure.value || (pending.value ? 'Wird gespeichert …' : connected.value ? 'Rally live verbunden' : 'Warte auf Firebase-Verbindung …'))
  function fail(error) {
    failure.value = error.code === 'permission-denied'
      ? 'Firebase-Zugriff fehlt. Bitte die Rally-Regeln im Firebase-Projekt veröffentlichen.'
      : error.code === 'unavailable' ? 'Keine Firebase-Verbindung. Bitte Internetverbindung prüfen.'
        : error.message || 'Die Synchronisierung ist fehlgeschlagen.'
  }
  function start() {
    if (enabled) return
    enabled = true
    const run = ++generation
    failure.value = ''
    if (!firebaseConfigured) { failure.value = 'Firebase ist nicht eingerichtet.'; return }
    stop = watchRally(gameId, snapshot => {
      if (run !== generation) return
      connected.value = !snapshot.metadata.fromCache
      if (snapshot.exists() && !snapshot.metadata.hasPendingWrites) state.value = readRallyState(snapshot.data())
    }, error => { if (run === generation) { connected.value = false; fail(error) } })
    ensureRally(gameId).catch(error => { if (run === generation) fail(error) })
  }
  function disconnect() { enabled = false; generation++; stop?.(); stop = null; connected.value = false }
  function retry() { disconnect(); start() }
  async function write(action) {
    pending.value++
    try {
      if (!state.value) await ensureRally(gameId)
      await action()
      failure.value = ''
      return true
    } catch (error) { fail(error); return false }
    finally { pending.value-- }
  }
  onMounted(start)
  onActivated(start)
  onDeactivated(disconnect)
  onBeforeUnmount(disconnect)
  return {
    gameId, state, connected, failure, pending, message, rallyLink, controlsLink, retry,
    release: id => write(() => releaseRallyCreature(gameId, id)),
    recordScan: id => write(() => recordRallyScan(gameId, id)),
    sendHome: id => write(() => sendRallyCreatureHome(gameId, id)),
    saveEnergy: value => write(() => saveRallyEnergy(gameId, value))
  }
}
