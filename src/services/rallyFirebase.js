import { arrayUnion, doc, onSnapshot, runTransaction, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from './firebase'
import { creatureIds, initialRallyState } from '../components/views/Rally/rallyState'

function gameRef() {
  if (!db) throw new Error('Firebase ist nicht eingerichtet.')
  return doc(db, 'rally_games', 'current')
}
export function watchRally(next, error) {
  return onSnapshot(gameRef(), { includeMetadataChanges: true }, next, error)
}
export function createNewRally() {
  return setDoc(gameRef(), {
    ...initialRallyState(crypto.randomUUID().replaceAll('-', '')),
    updatedAt: serverTimestamp()
  })
}
function updateRound(roundId, patch) {
  const reference = gameRef()
  return runTransaction(db, async transaction => {
    const snapshot = await transaction.get(reference)
    if (!snapshot.exists()) throw new Error('Bitte zuerst in FreeCreatures eine neue Rally starten.')
    if (snapshot.data().roundId !== roundId) throw new Error('Eine neue Rally wurde gestartet. Bitte erneut versuchen.')
    transaction.update(reference, { ...patch, updatedAt: serverTimestamp() })
  })
}
export function releaseRallyCreature(roundId, creatureId) {
  if (!creatureIds.includes(creatureId)) throw new Error('Ungültige Kreatur.')
  return updateRound(roundId, { releasedIds: arrayUnion(creatureId) })
}
export function sendRallyCreatureHome(roundId, creatureId) {
  if (!creatureIds.includes(creatureId)) throw new Error('Ungültige Kreatur.')
  return updateRound(roundId, { releasedIds: arrayUnion(creatureId), homeIds: arrayUnion(creatureId) })
}
export function recordRallyScan(roundId, stationId) {
  if (!Number.isInteger(stationId) || stationId < 1 || stationId > 9) throw new Error('Ungültige Station.')
  return updateRound(roundId, { foundIds: arrayUnion(stationId) })
}
export function saveRallyEnergy(roundId, energy) {
  return updateRound(roundId, { energy: Math.max(0, Math.min(100, energy)) })
}
