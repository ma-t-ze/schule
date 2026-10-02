import { getAuth, signInAnonymously, connectAuthEmulator } from 'firebase/auth'
import { collection, connectFirestoreEmulator, doc, getDocFromServer, onSnapshot, runTransaction, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from './firebase'
import { quizVersion, questions } from '../components/views/BKGDQuiz/questions'

let identityPromise
let emulatorConnected = false
export async function quizIdentity() {
  if (!db) throw new Error('Firebase ist nicht eingerichtet.')
  const auth = getAuth(db.app)
  if (import.meta.env.DEV && import.meta.env.VITE_BKGD_QUIZ_EMULATOR === '1' && !emulatorConnected) {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true })
    connectFirestoreEmulator(db, '127.0.0.1', 8080)
    emulatorConnected = true
  }
  if (!identityPromise) identityPromise = (async () => {
    await auth.authStateReady()
    return auth.currentUser || (await signInAnonymously(auth)).user
  })().catch(error => { identityPromise = null; throw error })
  return identityPromise
}
const roomRef = pin => doc(db, 'bkgd_quiz_games', pin)
export async function syncClock(uid) {
  const before = Date.now()
  const ref = doc(db, 'bkgd_quiz_clocks', uid)
  await setDoc(ref, { time: serverTimestamp() })
  const result = await getDocFromServer(ref)
  return result.data().time.toMillis() - (before + Date.now()) / 2
}
export async function createGame(uid) {
  for (let attempt = 0; attempt < 8; attempt++) {
    const random = crypto.getRandomValues(new Uint32Array(1))[0]
    const pin = String(100000 + random % 900000)
    const created = await runTransaction(db, async tx => {
      const ref = roomRef(pin)
      if ((await tx.get(ref)).exists()) return false
      tx.set(ref, { ownerUid: uid, version: quizVersion, phase: 'lobby', questionIndex: -1, startedAt: null, createdAt: serverTimestamp(), updatedAt: serverTimestamp() })
      return true
    })
    if (created) return pin
  }
  throw new Error('Kein freier Spielcode gefunden. Bitte noch einmal versuchen.')
}
export async function joinGame(pin, user, name) {
  return runTransaction(db, async tx => {
    const game = await tx.get(roomRef(pin))
    if (!game.exists()) throw new Error('Diesen Spielcode gibt es nicht.')
    if (game.data().version !== quizVersion) throw new Error('Bitte lade die Seite neu. Das Quiz wurde aktualisiert.')
    const ref = doc(db, 'bkgd_quiz_games', pin, 'players', user.uid)
    const existing = await tx.get(ref)
    if (existing.exists()) return existing.data()
    if (game.data().phase !== 'lobby') throw new Error('Das Quiz läuft bereits. Bitte warte auf eine neue Runde.')
    const player = { name, joinedAt: serverTimestamp() }
    tx.set(ref, player)
    return { name }
  })
}
export async function advanceGame(pin, uid, expectedIndex) {
  return runTransaction(db, async tx => {
    const ref = roomRef(pin)
    const game = (await tx.get(ref)).data()
    if (!game || game.ownerUid !== uid) throw new Error('Nur die Spielleitung kann das Quiz steuern.')
    if (game.questionIndex !== expectedIndex) return
    if (game.phase === 'lobby' || game.phase === 'reveal') {
      const next = game.questionIndex + 1
      tx.update(ref, { phase: next >= questions.length ? 'finished' : 'question', questionIndex: Math.min(next, questions.length - 1), startedAt: next >= questions.length ? game.startedAt : serverTimestamp(), updatedAt: serverTimestamp() })
    }
  })
}
export async function revealGame(pin, uid, expectedIndex) {
  return runTransaction(db, async tx => {
    const ref = roomRef(pin)
    const game = (await tx.get(ref)).data()
    if (game?.ownerUid === uid && game.phase === 'question' && game.questionIndex === expectedIndex) tx.update(ref, { phase: 'reveal', updatedAt: serverTimestamp() })
  })
}
export async function sendAnswer(pin, uid, questionIndex, choice, questionStartedAt) {
  // Immutable document ID: one answer per participant and question.
  await setDoc(doc(db, 'bkgd_quiz_games', pin, 'answers', `${questionIndex}_${uid}`), { uid, questionIndex, choice, questionStartedAt, answeredAt: serverTimestamp() })
}
export const watchGame = (pin, next, error) => onSnapshot(roomRef(pin), { includeMetadataChanges: true }, next, error)
export const watchPlayers = (pin, next, error) => onSnapshot(collection(db, 'bkgd_quiz_games', pin, 'players'), next, error)
export const watchAnswers = (pin, next, error) => onSnapshot(collection(db, 'bkgd_quiz_games', pin, 'answers'), next, error)
export const watchOwnAnswer = (pin, uid, index, next, error) => onSnapshot(doc(db, 'bkgd_quiz_games', pin, 'answers', `${index}_${uid}`), next, error)
