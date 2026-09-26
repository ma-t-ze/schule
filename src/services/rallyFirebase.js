import { arrayUnion, doc, onSnapshot, runTransaction, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from './firebase'
import { creatureIds, initialRallyState, isRallyId } from '../components/views/Rally/rallyState'

function gameRef(id) {
  if (!db) throw new Error('Firebase ist nicht eingerichtet.')
  if (!isRallyId(id)) throw new Error('Ungültiger Spielcode.')
  return doc(db, 'rally_games', id)
}
export function watchRally(id, next, error) {
  return onSnapshot(gameRef(id), { includeMetadataChanges: true }, next, error)
}
export function ensureRally(id) {
  const reference = gameRef(id)
  return runTransaction(db, async transaction => {
    const snapshot = await transaction.get(reference)
    if (!snapshot.exists()) transaction.set(reference, { ...initialRallyState(), updatedAt: serverTimestamp() })
  })
}
export function releaseRallyCreature(id, creatureId) {
  if (!creatureIds.includes(creatureId)) throw new Error('Ungültige Kreatur.')
  return updateDoc(gameRef(id), { releasedIds: arrayUnion(creatureId), updatedAt: serverTimestamp() })
}
export function sendRallyCreatureHome(id, creatureId) {
  if (!creatureIds.includes(creatureId)) throw new Error('Ungültige Kreatur.')
  return updateDoc(gameRef(id), { releasedIds: arrayUnion(creatureId), homeIds: arrayUnion(creatureId), updatedAt: serverTimestamp() })
}
export function recordRallyScan(id, stationId) {
  if (!Number.isInteger(stationId) || stationId < 1 || stationId > 9) throw new Error('Ungültige Station.')
  return updateDoc(gameRef(id), { foundIds: arrayUnion(stationId), updatedAt: serverTimestamp() })
}
export function saveRallyEnergy(id, energy) {
  return updateDoc(gameRef(id), { energy: Math.max(0, Math.min(100, energy)), updatedAt: serverTimestamp() })
}
