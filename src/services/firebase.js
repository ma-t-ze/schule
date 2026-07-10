import { initializeApp } from "firebase/app"
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getFirestore,
    onSnapshot,
    serverTimestamp,
    setDoc,
    updateDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}

const firebaseConfigured = Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
)

const app = firebaseConfigured ? initializeApp(firebaseConfig) : null
const db = app ? getFirestore(app) : null

export async function createQuizParticipant(name) {
    if (!db) return null

    const participant = await addDoc(collection(db, "gestaltgesetze_quiz_results"), {
        name,
        score: 0,
        currentQuestion: 0,
        finished: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    })

    return participant.id
}

export function subscribeQuizControl(callback) {
    if (!db) {
        callback({ isOpen: false, configured: false })
        return () => {}
    }

    return onSnapshot(
        doc(db, "gestaltgesetze_quiz_control", "current"),
        snapshot => {
            const data = snapshot.data() || {}

            callback({
                isOpen: Boolean(data.isOpen),
                quizStartedAt: data.quizStartedAt || data.countdownStartedAt || null,
                answerSeconds: data.answerSeconds || data.countdownSeconds || 30,
                nextQuestionSeconds: data.nextQuestionSeconds || 10,
                configured: true
            })
        },
        error => {
            callback({
                isOpen: false,
                configured: true,
                error
            })
        }
    )
}

export function subscribeQuizParticipants(callback) {
    if (!db) {
        callback({ participants: [], configured: false })
        return () => {}
    }

    return onSnapshot(
        collection(db, "gestaltgesetze_quiz_results"),
        snapshot => {
            const participants = snapshot.docs
                .map(result => ({
                    id: result.id,
                    ...result.data()
                }))
                .sort((first, second) => {
                    if ((second.score || 0) !== (first.score || 0)) {
                        return (second.score || 0) - (first.score || 0)
                    }

                    return String(first.name || "").localeCompare(String(second.name || ""))
                })

            callback({
                participants,
                configured: true
            })
        },
        error => {
            callback({
                participants: [],
                configured: true,
                error
            })
        }
    )
}

export async function openQuizForParticipants() {
    if (!db) return

    await setDoc(doc(db, "gestaltgesetze_quiz_control", "current"), {
        isOpen: true,
        openedAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    }, { merge: true })
}

export async function closeQuizForParticipants() {
    if (!db) return

    await setDoc(doc(db, "gestaltgesetze_quiz_control", "current"), {
        isOpen: false,
        countdownStartedAt: null,
        quizStartedAt: null,
        closedAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    }, { merge: true })
}

export async function startQuizCountdown() {
    if (!db) return

    await setDoc(doc(db, "gestaltgesetze_quiz_control", "current"), {
        isOpen: true,
        countdownStartedAt: null,
        quizStartedAt: Date.now(),
        answerSeconds: 30,
        nextQuestionSeconds: 10,
        updatedAt: serverTimestamp()
    }, { merge: true })
}

export async function deleteQuizParticipants(participants = []) {
    if (!db) return

    await Promise.all(
        participants.map(participant =>
            deleteDoc(doc(db, "gestaltgesetze_quiz_results", participant.id))
        )
    )
}

export async function updateQuizParticipant(participantId, data) {
    if (!db || !participantId) return

    await updateDoc(doc(db, "gestaltgesetze_quiz_results", participantId), {
        ...data,
        updatedAt: serverTimestamp()
    })
}

export { firebaseConfigured }
