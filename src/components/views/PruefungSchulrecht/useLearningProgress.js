import { computed, onMounted, onUnmounted, ref } from 'vue'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { collection, doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { getExamFirebase } from '../../../services/examFirebase'
import { learningPlan } from './learningPlan'

export function useLearningProgress(ids) {
  const user = ref(null)
  const ready = ref(false)
  const loaded = ref(false)
  const busy = ref(false)
  const pending = ref(new Set())
  const progress = ref({})
  const notes = ref({})
  const noteDrafts = ref({})
  const noteMessages = ref({})
  const message = ref('')
  const today = ref('')
  let stopAuth, stopData, timer
  const refreshDate = () => { today.value = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date()) }
  const errorMessage = (error) => ({
    'auth/popup-closed-by-user': 'Anmeldung abgebrochen. Du kannst sie erneut starten.',
    'auth/popup-blocked': 'Bitte erlaube das Anmeldefenster in deinem Browser.',
    'auth/unauthorized-domain': 'Diese Domain muss in Firebase Authentication als autorisierte Domain eingetragen werden.',
    'auth/network-request-failed': 'Keine Verbindung. Bitte prüfe deine Internetverbindung.',
    'permission-denied': 'Lernstand nicht zugänglich. Bitte die Firestore-Zugriffsregeln veröffentlichen.'
  }[error.code] || 'Die Verbindung zu Firebase ist fehlgeschlagen. Bitte versuche es erneut.')
  onMounted(() => {
    refreshDate()
    timer = setInterval(refreshDate, 60000)
    const { auth, db } = getExamFirebase()
    stopAuth = onAuthStateChanged(auth, (account) => {
      stopData?.()
      user.value = account
      progress.value = {}
      notes.value = {}
      noteDrafts.value = {}
      noteMessages.value = {}
      loaded.value = false
      message.value = ''
      ready.value = true
      if (!account) return
      stopData = onSnapshot(collection(db, 'learners', account.uid, 'questions'), { includeMetadataChanges: true }, (snapshot) => {
        if (user.value?.uid !== account.uid) return
        progress.value = Object.fromEntries(snapshot.docs.filter(d => ids.has(d.id)).map(d => [d.id, d.data().status]))
        notes.value = Object.fromEntries(snapshot.docs.filter(d => ids.has(d.id)).map(d => [d.id, d.data().note || '']))
        loaded.value = !snapshot.metadata.fromCache
        message.value = snapshot.metadata.hasPendingWrites ? 'Änderungen werden gespeichert …' : snapshot.metadata.fromCache ? 'Warte auf Verbindung zum gespeicherten Lernstand …' : 'Lernstand mit Firebase synchronisiert.'
      }, (error) => { loaded.value = false; message.value = errorMessage(error) })
    }, error => { ready.value = true; message.value = errorMessage(error) })
  })
  onUnmounted(() => { stopAuth?.(); stopData?.(); clearInterval(timer) })
  const login = async () => {
    busy.value = true
    message.value = ''
    try { await signInWithPopup(getExamFirebase().auth, new GoogleAuthProvider()) }
    catch (error) { message.value = errorMessage(error) }
    finally { busy.value = false }
  }
  const logout = async () => {
    busy.value = true
    try { await signOut(getExamFirebase().auth) }
    catch (error) { message.value = errorMessage(error) }
    finally { busy.value = false }
  }
  const setStatus = async (id, status) => {
    if (!user.value || !loaded.value || pending.value.has(id) || !ids.has(id) || !['open', 'review', 'secure'].includes(status)) return
    const uid = user.value.uid
    pending.value.add(id)
    try {
      await setDoc(doc(getExamFirebase().db, 'learners', uid, 'questions', id), { status, updatedAt: serverTimestamp() }, { merge: true })
    } catch (error) { if (user.value?.uid === uid) message.value = errorMessage(error) }
    finally { pending.value.delete(id) }
  }
  const editNote = (id, value) => {
    noteDrafts.value[id] = value
    noteMessages.value[id] = 'Ungespeicherte Änderung.'
  }
  const saveNote = async (id) => {
    if (!user.value || !loaded.value || pending.value.has(id) || !ids.has(id)) return
    const value = noteDrafts.value[id] ?? notes.value[id] ?? ''
    if (value.length > 10000) return
    const uid = user.value.uid
    pending.value.add(id)
    noteMessages.value[id] = 'Wird gespeichert …'
    try {
      await setDoc(doc(getExamFirebase().db, 'learners', uid, 'questions', id), { note: value, updatedAt: serverTimestamp() }, { merge: true })
      if (user.value?.uid === uid) {
        notes.value[id] = value
        if (noteDrafts.value[id] === value) delete noteDrafts.value[id]
        noteMessages.value[id] = 'Bemerkung gespeichert.'
      }
    } catch (error) {
      if (user.value?.uid === uid) noteMessages.value[id] = 'Nicht gespeichert. ' + errorMessage(error)
    } finally { pending.value.delete(id) }
  }
  const learned = computed(() => Object.values(progress.value).filter(s => s === 'secure').length)
  const review = computed(() => Object.values(progress.value).filter(s => s === 'review').length)
  const plan = computed(() => today.value ? learningPlan(ids.size, learned.value, today.value) : null)
  return { user, ready, loaded, busy, pending, progress, message, today, learned, review, plan, login, logout, setStatus, notes, noteDrafts, noteMessages, editNote, saveNote }
}
