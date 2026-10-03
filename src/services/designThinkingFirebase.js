import { getApps, initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth, signInAnonymously, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore, collection, doc, getDocFromServer, onSnapshot, serverTimestamp, setDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'

const contexts = new Map()
function context(admin = false) {
  if (!db) throw new Error('Firebase ist nicht eingerichtet.')
  const name = admin ? 'design-thinking-admin' : 'design-thinking-student'
  if (contexts.has(name)) return contexts.get(name)
  const app = getApps().find(app => app.name === name) || initializeApp(db.app.options, name)
  const value = { auth: getAuth(app), db: getFirestore(app) }
  if (import.meta.env.DEV && import.meta.env.VITE_DESIGN_THINKING_EMULATOR === '1') {
    connectAuthEmulator(value.auth, 'http://127.0.0.1:9099', { disableWarnings: true })
    connectFirestoreEmulator(value.db, '127.0.0.1', 8080)
  }
  contexts.set(name, value)
  return value
}
let studentPromise
export function studentIdentity() {
  if (!studentPromise) studentPromise = (async () => {
    const { auth } = context()
    await auth.authStateReady()
    return auth.currentUser || (await signInAnonymously(auth)).user
  })().catch(error => { studentPromise = null; throw error })
  return studentPromise
}
export async function submitDesignPost(id, kind, text) {
  if (!['briefing', 'problem'].includes(kind) || !text.trim() || text.trim().length > 5000) throw new Error('Bitte gib einen Text mit höchstens 5.000 Zeichen ein.')
  const user = await studentIdentity()
  const ref = doc(context().db, 'design_thinking_posts', id)
  // A retry after a lost acknowledgement must not create a duplicate post.
  const existing = await getDocFromServer(ref)
  if (existing.exists()) return
  await setDoc(ref, { uid: user.uid, kind, text: text.trim(), createdAt: serverTimestamp() })
}
export async function checkDesignAdmin() {
  const { auth, db } = context(true)
  await auth.authStateReady()
  if (!auth.currentUser) return null
  const role = await getDocFromServer(doc(db, 'design_thinking_admins', auth.currentUser.uid))
  if (role.data()?.enabled !== true) throw new Error('Dieses Konto ist noch nicht für die Admin-Ansicht freigeschaltet.')
  return auth.currentUser
}
export async function loginDesignAdmin() {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  await signInWithPopup(context(true).auth, provider)
  return checkDesignAdmin()
}
export const logoutDesignAdmin = () => signOut(context(true).auth)
export function watchDesignPosts(next, error, admin = true) {
  return onSnapshot(collection(context(admin).db, 'design_thinking_posts'), snap => next(snap.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0))), error)
}
export function watchDesignResults(next, error, admin = false) {
  return onSnapshot(doc(context(admin).db, 'design_thinking_results', 'current'), snap => next(snap.data() || {}), error)
}
export async function saveDesignResults(rebriefing, problem, sourceIds) {
  const admin = await checkDesignAdmin()
  if (!admin) throw new Error('Bitte melde dich an.')
  await setDoc(doc(context(true).db, 'design_thinking_results', 'current'), { rebriefing, problem, sourceIds, updatedBy: admin.uid, updatedAt: serverTimestamp() })
}
export function designError(error, action) {
  if (String(error.code).includes('permission-denied')) return `${action}: Zugriff verweigert. Die Lehrkraft muss die Design-Thinking-Regeln und die Admin-Freischaltung prüfen.`
  if (error.code === 'auth/popup-closed-by-user') return 'Die Anmeldung wurde abgebrochen. Du kannst sie erneut starten.'
  if (error.code === 'auth/popup-blocked') return 'Bitte erlaube das Anmeldefenster im Browser und versuche es erneut.'
  if (error.code === 'auth/operation-not-allowed') return 'Die Google-Anmeldung muss noch in Firebase Authentication aktiviert werden.'
  if (error.code === 'auth/unauthorized-domain') return 'Diese Website-Domain muss in Firebase Authentication als autorisierte Domain eingetragen werden.'
  if (String(error.code).startsWith('auth/')) return `${action}: Anmeldung fehlgeschlagen (${error.code}). Bitte Zugangsdaten und Verbindung prüfen.`
  return `${action}: ${error.message || 'Bitte Verbindung prüfen und erneut versuchen.'}`
}

export async function editDesignPost(id, text) {
  if (!text.trim() || text.trim().length > 5000) throw new Error('Bitte gib einen Text mit höchstens 5.000 Zeichen ein.')
  await updateDoc(doc(context(true).db, 'design_thinking_posts', id), { text: text.trim() })
}
export async function deleteDesignPost(id) {
  await deleteDoc(doc(context(true).db, 'design_thinking_posts', id))
}

export function watchDesignVotes(next, error) {
  return onSnapshot(collection(context().db, 'design_thinking_votes'), snap => next(snap.docs.map(d => ({ id: d.id, ...d.data() }))), error)
}
export async function submitDesignVote(postIds) {
  const user = await studentIdentity()
  const ref = doc(context().db, 'design_thinking_votes', user.uid)
  const existing = await getDocFromServer(ref)
  if (existing.exists()) return
  await setDoc(ref, { postIds, createdAt: serverTimestamp() })
}
