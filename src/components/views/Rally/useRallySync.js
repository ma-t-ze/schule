import { computed, onActivated, onBeforeUnmount, onDeactivated, onMounted, ref } from 'vue'
import { firebaseConfigured } from '../../../services/firebase'
import { createNewRally, recordRallyScan, releaseRallyCreature, saveRallyEnergy, sendRallyCreatureHome, watchRally } from '../../../services/rallyFirebase'
import { readRallyState } from './rallyState'

export function useRallySync() {
  const state = ref(null)
  const connected = ref(false)
  const failure = ref('')
  const pending = ref(0)
  let stop, enabled = false, generation = 0
  const message = computed(() => failure.value || (pending.value ? 'Wird gespeichert …' : connected.value ? state.value ? 'Rally live verbunden' : 'Bitte in FreeCreatures eine neue Rally starten.' : 'Warte auf Firebase-Verbindung …'))
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
    stop = watchRally(snapshot => {
      if (run !== generation) return
      connected.value = !snapshot.metadata.fromCache
      if (!snapshot.metadata.hasPendingWrites) state.value = snapshot.exists() ? readRallyState(snapshot.data()) : null
    }, error => { if (run === generation) { connected.value = false; fail(error) } })
  }
  function disconnect() { enabled = false; generation++; stop?.(); stop = null; connected.value = false }
  function retry() { disconnect(); start() }
  async function write(action, creating = false) {
    pending.value++
    try {
      if (!creating && !state.value) throw new Error('Bitte zuerst in FreeCreatures eine neue Rally starten.')
      await action(state.value?.roundId)
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
    state, connected, failure, pending, message, retry,
    newRound: () => write(createNewRally, true),
    release: id => write(roundId => releaseRallyCreature(roundId, id)),
    recordScan: id => write(roundId => recordRallyScan(roundId, id)),
    sendHome: id => write(roundId => sendRallyCreatureHome(roundId, id)),
    saveEnergy: value => write(roundId => saveRallyEnergy(roundId, value))
  }
}
