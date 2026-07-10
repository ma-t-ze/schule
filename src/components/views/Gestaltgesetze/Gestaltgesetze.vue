<template>
    <main class="kahoot-page">
        <section v-if="!quizOpen" class="start-screen">
            <p class="start-screen__eyebrow">Gestaltgesetze</p>
            <h1>Quiz</h1>
            <p>
                Warte, bis das Quiz gestartet wird. Admins können es mit dem Code freischalten.
            </p>

            <form class="player-form" @submit.prevent="unlockQuiz">
                <label for="quiz-code">Admin-Code</label>
                <div class="password-field">
                    <input id="quiz-code" v-model.trim="adminCode" :type="showAdminCode ? 'text' : 'password'"
                        autocomplete="off" placeholder="Code eingeben" />
                    <button class="password-field__toggle" :class="{ 'is-visible': showAdminCode }" type="button"
                        :aria-label="showAdminCode ? 'Admin-Code ausblenden' : 'Admin-Code anzeigen'"
                        @click="showAdminCode = !showAdminCode">
                        <span></span>
                    </button>
                </div>
                <p v-if="!firebaseConfigured" class="player-form__hint">
                    Firebase ist noch nicht konfiguriert. Der Start gilt nur lokal.
                </p>
                <p v-if="saveError" class="player-form__error">
                    {{ saveError }}
                </p>
            </form>

            <button class="start-screen__button" type="button" :disabled="saving || !canUnlockQuiz" @click="unlockQuiz">
                Start Quiz
            </button>
        </section>

        <section v-else-if="!started" class="start-screen">
            <p class="start-screen__eyebrow">Gestaltgesetze</p>
            <h1>Teilnehmen</h1>
            <p>
                Trage deinen Namen ein, um am Quiz teilzunehmen.
            </p>

            <form class="player-form" @submit.prevent="joinQuiz">
                <label for="player-name">Dein Name</label>
                <input id="player-name" v-model.trim="playerName" type="text" autocomplete="name"
                    placeholder="Name eingeben" required />
                <p v-if="!firebaseConfigured" class="player-form__hint">
                    Firebase ist noch nicht konfiguriert. Das Quiz läuft lokal.
                </p>
                <p v-if="saveError" class="player-form__error">
                    {{ saveError }}
                </p>
            </form>

            <button class="start-screen__button" type="button" :disabled="saving || !playerName" @click="joinQuiz">
                An Quiz teilnehmen
            </button>

            <form class="player-form admin-entry-form" @submit.prevent="openAdminView">
                <label for="admin-code-open">Admin-Code</label>
                <div class="password-field">
                    <input id="admin-code-open" v-model.trim="adminCode" :type="showAdminCode ? 'text' : 'password'"
                        autocomplete="off" placeholder="Code eingeben" />
                    <button class="password-field__toggle" :class="{ 'is-visible': showAdminCode }" type="button"
                        :aria-label="showAdminCode ? 'Admin-Code ausblenden' : 'Admin-Code anzeigen'"
                        @click="showAdminCode = !showAdminCode">
                        <span></span>
                    </button>
                </div>
            </form>

            <button class="start-screen__button" type="button" :disabled="!canUnlockQuiz" @click="openAdminView">
                Admin Ansicht öffnen
            </button>
        </section>

        <section v-else-if="currentQuestion" class="quiz-shell">
            <header class="quiz-header">
                <div>
                    <p>Frage {{ displayedQuestionIndex + 1 }} / {{ questions.length }}</p>
                    <h1>{{ currentQuestion.question }}</h1>
                </div>
                <div class="quiz-header__side">
                    <div v-if="timedQuizState.isRunning && timedQuizState.phase === 'answer'" class="quiz-header__timer">
                        {{ timedQuizState.answerRemaining }} s
                    </div>
                    <div class="quiz-header__score">
                        {{ score }} Punkte
                    </div>
                    <div v-if="isAdmin" class="admin-controls">
                        <button class="admin-controls__button" type="button" @click="showAdminOverview = !showAdminOverview">
                            Übersicht
                        </button>
                        <button class="admin-controls__button" type="button" :disabled="saving" @click="startCountdownForAll">
                            Quiz Starten
                        </button>
                        <button class="admin-controls__button admin-controls__button--danger" type="button"
                            :disabled="saving" @click="showCloseConfirm = true">
                            Aktuelles Quiz schließen
                        </button>
                    </div>
                </div>
            </header>

            <div class="admin-overlay" :class="{ 'is-visible': isAdmin && showAdminOverview }" @click.self="showAdminOverview = false">
                <section class="admin-overview">
                    <button class="admin-overview__close" type="button" aria-label="Übersicht schließen"
                        @click="showAdminOverview = false">
                        ×
                    </button>
                    <h2>Übersicht</h2>
                    <p v-if="participantsError" class="player-form__error">
                        {{ participantsError }}
                    </p>
                    <p v-else-if="!participants.length" class="admin-overview__empty">
                        Noch keine Teilnehmer.
                    </p>
                    <div v-else class="admin-overview__list">
                        <div v-for="participant in participants" :key="participant.id" class="admin-overview__row">
                            <span>{{ participant.name }}</span>
                            <strong>{{ participant.score || 0 }}</strong>
                        </div>
                    </div>
                </section>
            </div>

            <div class="confirm-overlay" :class="{ 'is-visible': showCloseConfirm }" @click.self="showCloseConfirm = false">
                <section class="confirm-dialog">
                    <h2>Aktuelles Quiz wirklich schließen?</h2>
                    <p>
                        Alle bisher angemeldeten Teilnehmer und Punktestände werden gelöscht.
                    </p>
                    <div class="confirm-dialog__actions">
                        <button class="confirm-dialog__button" type="button" @click="showCloseConfirm = false">
                            Abbrechen
                        </button>
                        <button class="confirm-dialog__button confirm-dialog__button--danger" type="button"
                            :disabled="saving" @click="closeCurrentQuiz">
                            Quiz schließen
                        </button>
                    </div>
                </section>
            </div>

            <div class="countdown-overlay" :class="{ 'is-visible': countdownState.isVisible }">
                <section class="countdown-panel">
                    <div v-if="currentQuestion" class="countdown-resolution">
                        <h2>{{ resolutionState.headline }}</h2>
                        <p>
                            Richtige Antwort:
                            <strong>{{ currentQuestion.answers[currentQuestion.correct].text }}</strong>
                        </p>
                        <p>{{ currentQuestion.explanation }}</p>
                    </div>
                    <p>{{ countdownState.label }}</p>
                    <strong>{{ countdownState.remaining }}</strong>
                </section>
            </div>

            <div class="question-card">
                <div class="question-visual">
                    <img v-if="currentQuestion.image" class="question-image" :src="currentQuestion.image"
                        :alt="currentQuestion.imageAlt" />
                    <component :is="currentQuestion.visual" v-else />
                </div>

                <div class="answers">
                    <button v-for="(answer, index) in currentQuestion.answers" :key="answer.text" class="answer"
                        :class="[
                            `answer--${index}`,
                            {
                                'is-selected': selectedAnswer === index,
                                'is-correct': showResolution && index === currentQuestion.correct,
                                'is-wrong': showResolution && selectedAnswer === index && index !== currentQuestion.correct
                            }
                        ]" type="button" :disabled="!canAnswerCurrentQuestion"
                        @click="chooseAnswer(index)">
                        <span class="answer__shape">{{ answerShapes[index] }}</span>
                        <span>{{ answer.text }}</span>
                    </button>
                </div>
            </div>

            <footer class="quiz-footer">
                <p v-if="waitingForQuizStart">
                    Warte, bis der Admin das Quiz startet.
                </p>
                <p v-else-if="saveError" class="quiz-footer__error">
                    {{ saveError }}
                </p>
                <button v-if="selectedAnswer !== null && !timedQuizState.isRunning" class="quiz-footer__button" type="button" @click="nextQuestion">
                    {{ currentIndex === questions.length - 1 ? 'Ergebnis anzeigen' : 'Nächste Frage' }}
                </button>
            </footer>
        </section>

        <section v-else class="result-screen">
            <p class="start-screen__eyebrow">Fertig</p>
            <h1>{{ score }} / {{ questions.length }}</h1>
            <p>Du hast {{ score }} Fragen richtig beantwortet.</p>
            <button class="start-screen__button" type="button" @click="restartQuiz">
                Noch einmal spielen
            </button>
        </section>
    </main>
</template>

<script>
import {
    closeQuizForParticipants,
    createQuizParticipant,
    deleteQuizParticipants,
    firebaseConfigured,
    openQuizForParticipants,
    startQuizCountdown,
    subscribeQuizControl,
    subscribeQuizParticipants,
    updateQuizParticipant
} from "@/services/firebase"
import frage01Naehe from "@/assets/images/gestaltgesetze/frage-01-naehe.png"
import frage02Praegnanz from "@/assets/images/gestaltgesetze/frage-02-praegnanz.png"
import frage03Logos from "@/assets/images/gestaltgesetze/frage-03-logos.png"
import frage04Menu from "@/assets/images/gestaltgesetze/frage-04-menu.png"
import frage05Geschlossenheit from "@/assets/images/gestaltgesetze/frage-05-geschlossenheit.png"
import frage06Gleichheit from "@/assets/images/gestaltgesetze/frage-06-gleichheit.png"
import frage07Buttons from "@/assets/images/gestaltgesetze/frage-07-buttons.png"
import frage08Kreis from "@/assets/images/gestaltgesetze/frage-08-kreis.png"
import frage09Website from "@/assets/images/gestaltgesetze/frage-09-website.png"
import frage10Praegnanz from "@/assets/images/gestaltgesetze/frage-10-praegnanz.png"
import frage11Stopwatch from "@/assets/images/gestaltgesetze/frage-11-stopwatch.png"

const VisualProximity = {
    template: `
        <div class="visual visual--proximity">
            <div class="dot-grid">
                <span v-for="item in 25" :key="item"></span>
            </div>
            <div class="dot-column">
                <span v-for="item in 5" :key="item"></span>
            </div>
        </div>
    `
}

const VisualPraegnanz = {
    template: `
        <div class="visual visual--praegnanz">
            <div class="simple-form simple-form--filled"></div>
            <div class="simple-form simple-form--outline"></div>
        </div>
    `
}

const VisualLogos = {
    template: `
        <div class="visual visual--logos">
            <span class="logo-mark">●</span>
            <span class="logo-mark">◆</span>
            <span class="logo-mark">◐</span>
            <span class="logo-mark">M</span>
        </div>
    `
}

const VisualMenu = {
    template: `
        <div class="visual visual--menu">
            <div v-for="item in ['Startseite', 'Über uns', 'Leistungen', 'Kontakt', 'FAQ']" :key="item" class="menu-line">
                <span></span>
                <strong>{{ item }}</strong>
            </div>
        </div>
    `
}

const VisualClosure = {
    template: `
        <div class="visual visual--closure">
            <span></span><span></span><span></span><span></span><span></span>
        </div>
    `
}

const VisualSimilarity = {
    template: `
        <div class="visual visual--similarity">
            <span v-for="item in 36" :key="item" :class="{ square: item === 4 || item === 24 || item === 31 }"></span>
        </div>
    `
}

const VisualButtons = {
    template: `
        <div class="visual visual--buttons">
            <div>♥ Favoriten</div>
            <div>● Benachrichtigungen</div>
            <div>⚙ Einstellungen</div>
        </div>
    `
}

const VisualCircle = {
    template: `
        <div class="visual visual--circle"></div>
    `
}

const VisualWebsite = {
    template: `
        <div class="visual visual--website">
            <div class="website-bar"></div>
            <div class="website-main"></div>
            <div class="website-lines">
                <span v-for="item in 6" :key="item"></span>
            </div>
            <div class="website-side">
                <span v-for="item in 4" :key="item"></span>
            </div>
        </div>
    `
}

const VisualStopwatch = {
    template: `
        <div class="visual visual--stopwatch">
            <div class="watch-face">
                <span></span>
            </div>
        </div>
    `
}

export default {
    name: "Gestaltgesetze",

    components: {
        VisualProximity,
        VisualPraegnanz,
        VisualLogos,
        VisualMenu,
        VisualClosure,
        VisualSimilarity,
        VisualButtons,
        VisualCircle,
        VisualWebsite,
        VisualStopwatch
    },

    data() {
        return {
            started: false,
            quizOpen: false,
            isAdmin: false,
            showAdminOverview: false,
            showCloseConfirm: false,
            quizStartedAt: null,
            answerSeconds: 30,
            nextQuestionSeconds: 10,
            countdownNow: Date.now(),
            countdownInterval: null,
            adminCode: "",
            showAdminCode: false,
            currentIndex: 0,
            selectedAnswer: null,
            score: 0,
            playerName: "",
            participantId: null,
            evaluatedQuestions: [],
            saving: false,
            saveError: "",
            participantsError: "",
            firebaseConfigured,
            unsubscribeQuizControl: null,
            unsubscribeQuizParticipants: null,
            participants: [],
            answerShapes: ["▲", "◆", "●", "■"],
            questions: [
                {
                    question: "Welches Gestaltgesetz besagt, dass nahe beieinanderliegende Elemente als zusammengehörig wahrgenommen werden?",
                    visual: "VisualProximity",
                    image: frage01Naehe,
                    imageAlt: "Punktgruppen mit unterschiedlicher Nähe",
                    correct: 3,
                    explanation: "Nahe Elemente werden als Gruppe wahrgenommen.",
                    answers: [
                        { text: "Gesetz der Prägnanz" },
                        { text: "Gesetz der Gleichheit" },
                        { text: "Gesetz der Geschlossenheit" },
                        { text: "Gesetz der Nähe" }
                    ]
                },
                {
                    question: "Was beschreibt das Gesetz der Prägnanz?",
                    visual: "VisualPraegnanz",
                    image: frage02Praegnanz,
                    imageAlt: "Einfache Formen als Beispiel für Prägnanz",
                    correct: 2,
                    explanation: "Unser Gehirn bevorzugt einfache, stabile und gut erkennbare Formen.",
                    answers: [
                        { text: "Unser Gehirn ergänzt fehlende Teile." },
                        { text: "Unser Gehirn verbindet ähnliche Elemente." },
                        { text: "Unser Gehirn bevorzugt einfache und gut erkennbare Formen." },
                        { text: "Unser Gehirn erkennt nur geschlossene Formen." }
                    ]
                },
                {
                    question: "Ein Logo besteht aus wenigen einfachen Formen und ist sofort erkennbar. Welches Gestaltgesetz steckt dahinter?",
                    visual: "VisualLogos",
                    image: frage03Logos,
                    imageAlt: "Einfache bekannte Logos",
                    correct: 3,
                    explanation: "Einfache, klare Formen werden besonders gut erkannt.",
                    answers: [
                        { text: "Nähe" },
                        { text: "Gleichheit" },
                        { text: "Geschlossenheit" },
                        { text: "Prägnanz" }
                    ]
                },
                {
                    question: "Warum werden Menüpunkte häufig mit gleichem Abstand untereinander angeordnet?",
                    visual: "VisualMenu",
                    image: frage04Menu,
                    imageAlt: "Menüeinträge mit gleichem Abstand",
                    correct: 3,
                    explanation: "Gleiche Abstände helfen, Elemente als zusammengehörige Gruppe zu lesen.",
                    answers: [
                        { text: "Damit sie größer wirken." },
                        { text: "Damit sie bunter aussehen." },
                        { text: "Damit sie schwerer zu lesen sind." },
                        { text: "Damit sie als zusammengehörige Gruppe wahrgenommen werden." }
                    ]
                },
                {
                    question: "Welches Gesetz sorgt dafür, dass wir eine unvollständige Figur trotzdem als vollständig erkennen?",
                    visual: "VisualClosure",
                    image: frage05Geschlossenheit,
                    imageAlt: "Unvollständige Formen, die ergänzt werden",
                    correct: 2,
                    explanation: "Das Gesetz der Geschlossenheit beschreibt das Ergänzen fehlender Teile.",
                    answers: [
                        { text: "Nähe" },
                        { text: "Gleichheit" },
                        { text: "Geschlossenheit" },
                        { text: "Prägnanz" }
                    ]
                },
                {
                    question: "Welche Eigenschaft spielt beim Gesetz der Gleichheit KEINE Rolle?",
                    visual: "VisualSimilarity",
                    image: frage06Gleichheit,
                    imageAlt: "Punktmuster mit einzelnen Quadraten",
                    correct: 3,
                    explanation: "Beim Gesetz der Gleichheit geht es um ähnliche Eigenschaften, nicht um Abstand.",
                    answers: [
                        { text: "Farbe" },
                        { text: "Form" },
                        { text: "Größe" },
                        { text: "Abstand" }
                    ]
                },
                {
                    question: "Warum wirken gleich gestaltete Buttons in einer App zusammengehörig?",
                    visual: "VisualButtons",
                    image: frage07Buttons,
                    imageAlt: "Gleich gestaltete App-Buttons",
                    correct: 1,
                    explanation: "Gleich gestaltete Elemente werden als verwandt wahrgenommen.",
                    answers: [
                        { text: "Wegen des Gesetzes der Nähe." },
                        { text: "Wegen des Gesetzes der Gleichheit." },
                        { text: "Wegen des Gesetzes der Geschlossenheit." },
                        { text: "Wegen des Gesetzes der Prägnanz." }
                    ]
                },
                {
                    question: "Welche Aussage trifft auf das Gesetz der Geschlossenheit zu?",
                    visual: "VisualCircle",
                    image: frage08Kreis,
                    imageAlt: "Gestrichelter Kreis",
                    correct: 1,
                    explanation: "Das Gehirn ergänzt fehlende Informationen zu einer vollständigen Form.",
                    answers: [
                        { text: "Nur vollständige Formen werden erkannt." },
                        { text: "Das Gehirn ergänzt fehlende Teile automatisch." },
                        { text: "Nur Kreise werden ergänzt." },
                        { text: "Nur Dreiecke werden ergänzt." }
                    ]
                },
                {
                    question: "Welches Gestaltgesetz hilft besonders dabei, Inhalte auf einer Webseite sinnvoll zu strukturieren?",
                    visual: "VisualWebsite",
                    image: frage09Website,
                    imageAlt: "Schematischer Webseitenaufbau",
                    correct: 0,
                    explanation: "Nähe hilft, zusammengehörige Inhalte visuell zu gruppieren.",
                    answers: [
                        { text: "Gesetz der Nähe" },
                        { text: "Gesetz der Gleichheit" },
                        { text: "Gesetz der Geschlossenheit" },
                        { text: "Gesetz der Prägnanz" }
                    ]
                },
                {
                    question: "Welches Gestaltgesetz beschreibt am besten den Satz: „Unser Gehirn sucht nach einfachen und stabilen Lösungen.“?",
                    visual: "VisualPraegnanz",
                    image: frage10Praegnanz,
                    imageAlt: "Einfache stabile Formen",
                    correct: 0,
                    explanation: "Das ist das Gesetz der Prägnanz.",
                    answers: [
                        { text: "Gesetz der Prägnanz" },
                        { text: "Gesetz der Nähe" },
                        { text: "Gesetz der Gleichheit" },
                        { text: "Gesetz der Geschlossenheit" }
                    ]
                },
                {
                    question: "Bonus: Wie viele Millisekunden benötigt unser Gehirn ungefähr, um den ersten Eindruck eines Designs zu bilden?",
                    visual: "VisualStopwatch",
                    image: frage11Stopwatch,
                    imageAlt: "Stoppuhr",
                    correct: 1,
                    explanation: "Der erste Eindruck entsteht extrem schnell, oft in ungefähr 50 Millisekunden.",
                    answers: [
                        { text: "5 Millisekunden" },
                        { text: "50 Millisekunden" },
                        { text: "500 Millisekunden" },
                        { text: "5 Sekunden" }
                    ]
                }
            ]
        }
    },

    computed: {
        canUnlockQuiz() {
            return this.adminCode === "HeckelAdmin"
        },

        displayedQuestionIndex() {
            if (this.timedQuizState.isRunning && !this.timedQuizState.isFinished) {
                return this.timedQuizState.questionIndex
            }

            return this.currentIndex
        },

        currentQuestion() {
            return this.questions[this.displayedQuestionIndex] || null
        },

        waitingForQuizStart() {
            return this.firebaseConfigured && !this.isAdmin && !this.timedQuizState.isRunning
        },

        canAnswerCurrentQuestion() {
            if (this.waitingForQuizStart) return false

            return this.timedQuizState.phase === "answer"
        },

        showResolution() {
            return this.timedQuizState.phase === "prep"
        },

        resolutionState() {
            if (this.selectedAnswer === null) {
                return {
                    headline: "Keine Antwort ausgewählt."
                }
            }

            return {
                headline: this.selectedAnswer === this.currentQuestion.correct ? "Richtig!" : "Nicht ganz."
            }
        },

        timedQuizState() {
            if (!this.quizStartedAt) {
                return {
                    isRunning: false,
                    isFinished: false,
                    phase: "answer",
                    questionIndex: this.currentIndex,
                    answerRemaining: this.answerSeconds,
                    prepRemaining: 0
                }
            }

            const cycleSeconds = this.answerSeconds + this.nextQuestionSeconds
            const elapsedSeconds = Math.max(0, Math.floor((this.countdownNow - this.quizStartedAt) / 1000))
            const questionIndex = Math.floor(elapsedSeconds / cycleSeconds)

            if (questionIndex >= this.questions.length) {
                return {
                    isRunning: true,
                    isFinished: true,
                    phase: "finished",
                    questionIndex: this.questions.length,
                    answerRemaining: 0,
                    prepRemaining: 0
                }
            }

            const cycleElapsed = elapsedSeconds % cycleSeconds

            if (cycleElapsed < this.answerSeconds) {
                return {
                    isRunning: true,
                    isFinished: false,
                    phase: "answer",
                    questionIndex,
                    answerRemaining: this.answerSeconds - cycleElapsed,
                    prepRemaining: 0
                }
            }

            return {
                isRunning: true,
                isFinished: false,
                phase: "prep",
                questionIndex,
                answerRemaining: 0,
                prepRemaining: cycleSeconds - cycleElapsed
            }
        },

        countdownState() {
            if (this.timedQuizState.phase !== "prep") {
                return {
                    isVisible: false,
                    label: "",
                    remaining: 0
                }
            }

            return {
                isVisible: true,
                label: "Nächste Frage in",
                remaining: this.timedQuizState.prepRemaining
            }
        }
    },

    watch: {
        displayedQuestionIndex(newIndex, oldIndex) {
            if (newIndex === oldIndex) return

            this.currentIndex = newIndex
            this.selectedAnswer = null
        },

        "timedQuizState.phase"(newPhase, oldPhase) {
            if (oldPhase !== "answer" || newPhase !== "prep") return

            this.commitAnswerForQuestion(this.displayedQuestionIndex, false)
        },

        "timedQuizState.isFinished"(isFinished) {
            if (!isFinished) return

            this.currentIndex = this.questions.length
            this.selectedAnswer = null
            this.saveCurrentScore(true)
        }
    },

    mounted() {
        this.countdownInterval = window.setInterval(() => {
            this.countdownNow = Date.now()
        }, 250)

        this.unsubscribeQuizControl = subscribeQuizControl(control => {
            if (control.error) {
                this.saveError = this.formatFirebaseError("Der Quiz-Status konnte nicht aus Firebase gelesen werden.", control.error)
                return
            }

            this.quizOpen = control.isOpen
            this.quizStartedAt = control.quizStartedAt
            this.answerSeconds = control.answerSeconds
            this.nextQuestionSeconds = control.nextQuestionSeconds
        })

        this.unsubscribeQuizParticipants = subscribeQuizParticipants(result => {
            if (result.error) {
                this.participantsError = this.formatFirebaseError("Die Teilnehmerübersicht konnte nicht geladen werden.", result.error)
                return
            }

            this.participantsError = ""
            this.participants = result.participants
        })
    },

    beforeUnmount() {
        if (this.countdownInterval) {
            window.clearInterval(this.countdownInterval)
            this.countdownInterval = null
        }

        if (this.unsubscribeQuizControl) {
            this.unsubscribeQuizControl()
            this.unsubscribeQuizControl = null
        }

        if (this.unsubscribeQuizParticipants) {
            this.unsubscribeQuizParticipants()
            this.unsubscribeQuizParticipants = null
        }
    },

    methods: {
        async unlockQuiz() {
            if (!this.canUnlockQuiz) return

            this.saving = true
            this.saveError = ""

            try {
                await openQuizForParticipants()
                this.quizOpen = true
                this.isAdmin = true
                this.started = true
                this.currentIndex = 0
                this.selectedAnswer = null
                this.score = 0
                this.evaluatedQuestions = []
            } catch (error) {
                this.saveError = this.formatFirebaseError("Das Quiz konnte nicht für alle freigeschaltet werden.", error)
                console.error(error)
            } finally {
                this.saving = false
            }
        },

        openAdminView() {
            if (!this.canUnlockQuiz) return

            this.isAdmin = true
            this.started = true
            this.currentIndex = 0
            this.selectedAnswer = null
            this.score = 0
            this.evaluatedQuestions = []
            this.showAdminOverview = false
            this.saveError = ""
        },

        async startCountdownForAll() {
            this.saving = true
            this.saveError = ""

            try {
                await startQuizCountdown()
                this.quizStartedAt = Date.now()
                this.answerSeconds = 30
                this.nextQuestionSeconds = 10
                this.currentIndex = 0
                this.selectedAnswer = null
                this.score = 0
                this.evaluatedQuestions = []
            } catch (error) {
                this.saveError = this.formatFirebaseError("Der Countdown konnte nicht gestartet werden.", error)
                console.error(error)
            } finally {
                this.saving = false
            }
        },

        async joinQuiz() {
            if (!this.playerName) return

            this.saving = true
            this.saveError = ""
            this.started = true
            this.currentIndex = 0
            this.selectedAnswer = null
            this.score = 0
            this.evaluatedQuestions = []

            try {
                this.participantId = await createQuizParticipant(this.playerName)
            } catch (error) {
                this.saveError = this.formatFirebaseError("Der Name konnte nicht in Firebase gespeichert werden.", error)
                console.error(error)
            } finally {
                this.saving = false
            }
        },

        async chooseAnswer(index) {
            this.selectedAnswer = index
            await this.saveCurrentScore(false)
        },

        async commitAnswerForQuestion(questionIndex, finished) {
            const question = this.questions[questionIndex]

            if (!question || this.evaluatedQuestions.includes(questionIndex)) return

            if (this.selectedAnswer === question.correct) {
                this.score += 1
            }

            this.evaluatedQuestions.push(questionIndex)
            await this.saveCurrentScore(finished)
        },

        async nextQuestion() {
            const isFinished = this.currentIndex === this.questions.length - 1

            if (isFinished) {
                await this.commitAnswerForQuestion(this.currentIndex, true)
            } else {
                await this.commitAnswerForQuestion(this.currentIndex, false)
            }

            this.selectedAnswer = null
            this.currentIndex += 1
        },

        restartQuiz() {
            this.started = false
            this.currentIndex = 0
            this.selectedAnswer = null
            this.score = 0
            this.evaluatedQuestions = []
            this.playerName = ""
            this.participantId = null
            this.saveError = ""
        },

        async closeCurrentQuiz() {
            this.saving = true
            this.saveError = ""

            try {
                await closeQuizForParticipants()
                await deleteQuizParticipants(this.participants)
                this.quizOpen = false
                this.isAdmin = false
                this.quizStartedAt = null
                this.showAdminOverview = false
                this.showCloseConfirm = false
                this.adminCode = ""
                this.participants = []
            } catch (error) {
                this.saveError = this.formatFirebaseError("Das aktuelle Quiz konnte nicht geschlossen werden.", error)
                console.error(error)
            } finally {
                this.saving = false
            }
        },

        async saveCurrentScore(finished) {
            this.saveError = ""

            try {
                await updateQuizParticipant(this.participantId, {
                    name: this.playerName,
                    score: this.score,
                    currentQuestion: Math.min(this.displayedQuestionIndex + 1, this.questions.length),
                    totalQuestions: this.questions.length,
                    finished
                })
            } catch (error) {
                this.saveError = this.formatFirebaseError("Der aktuelle Punktestand konnte nicht in Firebase gespeichert werden.", error)
                console.error(error)
            }
        },

        formatFirebaseError(message, error) {
            const code = error?.code ? ` (${error.code})` : ""
            const details = error?.message ? ` ${error.message}` : ""

            return `${message}${code}.${details}`
        }
    }
}
</script>

<style scoped lang="scss">
.kahoot-page {
    position: relative;
    height: 100vh;
    padding: 28px;
    box-sizing: border-box;
    background: white;
    color: #111;
    font-family: Jost, sans-serif;
    overflow: hidden;
}

.start-screen__button,
.quiz-footer__button {
    border: none;
    border-radius: 8px;
    background: black;
    color: white;
    cursor: pointer;
    font-family: Jost, sans-serif;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
}

.start-screen__button:disabled {
    cursor: not-allowed;
    opacity: 0.55;
}

.start-screen__button--danger {
    margin-left: 12px;
    background: #e91d2d;
}

.start-screen__button--danger:hover {
    background: #b91522;
}

.start-screen__button:hover,
.quiz-footer__button:hover {
    background: #333;
}

.start-screen,
.result-screen {
    display: grid;
    align-content: center;
    max-width: 920px;
    min-height: calc(100vh - 56px);
    margin: 0 auto;
    padding: 24px 0;
    border-radius: 0;
    background: white;
    box-shadow: none;
    text-align: center;
}

.start-screen__eyebrow {
    margin: 0 0 10px;
    color: black;
    font-size: 24px;
    font-weight: 700;
}

.start-screen h1,
.result-screen h1 {
    margin: 0 0 18px;
    font-size: clamp(48px, 9vw, 104px);
    line-height: 0.95;
}

.start-screen p,
.result-screen p {
    margin: 0 auto 26px;
    max-width: 680px;
    font-size: 26px;
    line-height: 1.28;
}

.player-form {
    display: grid;
    gap: 10px;
    max-width: 460px;
    margin: 0 auto 22px;
    text-align: left;
}

.admin-entry-form {
    margin-top: 22px;
    margin-bottom: 14px;
}

.player-form label {
    font-size: 22px;
    font-weight: 800;
}

.player-form input {
    width: 100%;
    padding: 16px 18px;
    border: 3px solid black;
    border-radius: 10px;
    box-sizing: border-box;
    font-family: Jost, sans-serif;
    font-size: 24px;
    font-weight: 700;
}

.password-field {
    position: relative;
}

.password-field input {
    padding-right: 66px;
}

.password-field__toggle {
    position: absolute;
    top: 50%;
    right: 14px;
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    transform: translateY(-50%);
}

.password-field__toggle span {
    position: relative;
    display: block;
    width: 28px;
    height: 17px;
    border: 3px solid black;
    border-radius: 50%;
    box-sizing: border-box;
}

.password-field__toggle span::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: black;
    transform: translate(-50%, -50%);
}

.password-field__toggle span::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -5px;
    width: 38px;
    height: 3px;
    border-radius: 999px;
    background: black;
    transform: translateY(-50%) rotate(-34deg);
    opacity: 1;
}

.password-field__toggle.is-visible span::after {
    opacity: 0;
}

.password-field__toggle:hover span {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
}

.player-form__hint,
.player-form__error {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
}

.player-form__hint {
    color: black;
}

.player-form__error,
.quiz-footer__error {
    color: #e91d2d;
}

.admin-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.admin-overlay.is-visible {
    pointer-events: auto;
    opacity: 1;
}

.admin-overview {
    position: absolute;
    top: 0;
    right: 0;
    width: min(58vw, 720px);
    height: 100vh;
    padding: 42px;
    box-sizing: border-box;
    background: white;
    box-shadow: -18px 0 46px rgba(0, 0, 0, 0.24);
    transform: translateX(100%);
    transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.admin-overlay.is-visible .admin-overview {
    transform: translateX(0);
}

.admin-overview__close {
    all: unset;
    position: absolute;
    top: 24px;
    right: 32px;
    cursor: pointer;
    font-size: 42px;
    font-weight: 800;
    line-height: 1;
}

.admin-overview h2 {
    margin: 0 0 28px;
    font-size: clamp(44px, 6vw, 78px);
    line-height: 0.95;
}

.admin-overview__empty {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
}

.admin-overview__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 10px;
}

.admin-overview__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-height: 40px;
    padding: 9px 12px;
    border: 2px solid black;
    box-sizing: border-box;
    font-size: clamp(15px, 1.55vw, 20px);
    font-weight: 700;
}

.admin-overview__row span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.admin-overview__row strong {
    flex: 0 0 auto;
    color: black;
    white-space: nowrap;
}

.confirm-overlay {
    position: fixed;
    inset: 0;
    z-index: 120;
    display: grid;
    place-items: center;
    padding: 28px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.78);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.24s ease;
}

.confirm-overlay.is-visible {
    opacity: 1;
    pointer-events: auto;
}

.confirm-dialog {
    width: min(620px, 100%);
    padding: 38px;
    border: 4px solid black;
    box-sizing: border-box;
    background: white;
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.22);
}

.confirm-dialog h2 {
    margin: 0 0 18px;
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1;
}

.confirm-dialog p {
    margin: 0 0 28px;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.25;
}

.confirm-dialog__actions {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}

.confirm-dialog__button {
    border: none;
    border-radius: 8px;
    background: black;
    color: white;
    cursor: pointer;
    font-family: Jost, sans-serif;
    font-size: 20px;
    font-weight: 700;
    padding: 14px 18px;
}

.confirm-dialog__button:hover {
    background: #333;
}

.confirm-dialog__button--danger {
    background: #e91d2d;
}

.confirm-dialog__button--danger:hover {
    background: #b91522;
}

.confirm-dialog__button:disabled {
    cursor: not-allowed;
    opacity: 0.55;
}

.countdown-overlay {
    position: fixed;
    inset: 0;
    z-index: 110;
    display: grid;
    place-items: center;
    padding: 28px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.88);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
}

.countdown-overlay.is-visible {
    opacity: 1;
    pointer-events: auto;
}

.countdown-panel {
    display: grid;
    place-items: center;
    min-width: min(440px, 88vw);
    max-width: min(640px, 90vw);
    padding: 30px;
    border: 4px solid black;
    box-sizing: border-box;
    background: white;
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.18);
}

.countdown-resolution {
    display: grid;
    gap: 8px;
    margin-bottom: 22px;
    text-align: center;
}

.countdown-resolution h2 {
    margin: 0;
    font-size: clamp(24px, 3.6vw, 42px);
    font-weight: 900;
    line-height: 1;
}

.countdown-resolution p {
    margin: 0;
    font-size: clamp(15px, 2vw, 22px);
    font-weight: 700;
    line-height: 1.22;
}

.countdown-resolution p strong {
    font-size: inherit;
    font-weight: 900;
    line-height: inherit;
}

.countdown-panel p {
    margin: 0 0 10px;
    font-size: clamp(18px, 3vw, 32px);
    font-weight: 800;
    line-height: 1;
    text-align: center;
}

.countdown-panel strong {
    font-size: clamp(56px, 10vw, 120px);
    font-weight: 900;
    line-height: 0.85;
}

.start-screen__button,
.quiz-footer__button {
    padding: 16px 28px;
}

.quiz-shell {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    height: calc(100vh - 40px);
    max-width: 1180px;
    margin: 20px auto 0;
}

.quiz-header {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 18px;
    align-items: start;
    margin-bottom: 14px;
}

.quiz-header p {
    margin: 0 0 4px;
    color: black;
    font-size: 16px;
    font-weight: 700;
}

.quiz-header h1 {
    margin: 0;
    max-width: 820px;
    font-size: clamp(20px, 2.6vw, 34px);
    line-height: 1.08;
}

.quiz-header__score,
.quiz-header__timer {
    padding: 10px 14px;
    border-radius: 8px;
    background: white;
    color: black;
    font-size: 18px;
    font-weight: 800;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.quiz-header__timer {
    border: 2px solid black;
    font-size: 24px;
    line-height: 1;
}

.quiz-header__side {
    display: grid;
    gap: 10px;
    justify-items: end;
}

.admin-controls {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
}

.admin-controls__button {
    border: none;
    border-radius: 8px;
    background: black;
    color: white;
    cursor: pointer;
    font-family: Jost, sans-serif;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 12px;
}

.admin-controls__button:hover {
    background: #333;
}

.admin-controls__button--danger {
    background: #e91d2d;
}

.admin-controls__button--danger:hover {
    background: #b91522;
}

.question-card {
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
    min-height: 0;
    padding: 20px;
    border-radius: 12px;
    background: white;
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.12);
}

.question-visual {
    display: grid;
    place-items: center;
    min-height: 0;
    height: clamp(160px, 27vh, 230px);
    margin-bottom: 16px;
    overflow: hidden;
}

.question-image {
    display: block;
    width: auto;
    max-width: min(76%, 520px);
    max-height: 100%;
    object-fit: contain;
}

.answers {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
}

.answer {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 62px;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-family: Jost, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.1;
    text-align: left;
    transition: transform 0.18s ease, filter 0.18s ease;
}

.answer:hover:not(:disabled) {
    transform: translateY(-2px);
    filter: brightness(1.05);
}

.answer:disabled {
    cursor: default;
}

.answer--0 {
    background: #e91d2d;
}

.answer--1 {
    background: #1367c8;
}

.answer--2 {
    background: #f4a60b;
}

.answer--3 {
    background: #258b25;
}

.answer__shape {
    flex: 0 0 auto;
    font-size: 22px;
}

.answer.is-selected {
    outline: 5px solid #111;
    outline-offset: -5px;
}

.answer.is-correct {
    outline: 5px solid #111;
}

.answer.is-wrong {
    opacity: 0.45;
}

.quiz-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    min-height: 48px;
    margin-top: 10px;
}

.quiz-footer p {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
}

.quiz-footer p.is-correct-text {
    color: #258b25;
}

.visual {
    width: min(620px, 100%);
}

.visual--proximity {
    display: flex;
    justify-content: center;
    gap: 70px;
}

.dot-grid {
    display: grid;
    grid-template-columns: repeat(5, 24px);
    gap: 12px;
}

.dot-grid span,
.dot-column span,
.visual--similarity span {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #050505;
}

.dot-column {
    display: grid;
    gap: 12px;
}

.visual--praegnanz {
    display: flex;
    justify-content: center;
    gap: 70px;
}

.simple-form {
    position: relative;
    width: 140px;
    height: 120px;
}

.simple-form::before,
.simple-form::after {
    content: "";
    position: absolute;
    inset: 15px;
    border-radius: 50%;
}

.simple-form::after {
    top: 48px;
    right: -12px;
    left: -12px;
    height: 24px;
    border-radius: 0;
    transform: rotate(-8deg);
}

.simple-form--filled::before,
.simple-form--filled::after {
    background: black;
}

.simple-form--outline::before {
    border: 3px solid black;
}

.simple-form--outline::after {
    border: 3px solid black;
    background: white;
}

.visual--logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 44px;
}

.logo-mark {
    color: black;
    font-size: 76px;
    font-weight: 900;
}

.visual--menu {
    width: 260px;
    padding: 18px;
    border: 1px solid #bbb;
    border-radius: 8px;
}

.menu-line {
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 14px;
    align-items: center;
    padding: 11px 0;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
}

.menu-line span {
    width: 18px;
    height: 18px;
    background: black;
}

.visual--closure {
    display: grid;
    grid-template-columns: repeat(3, 90px);
    gap: 38px;
    justify-content: center;
}

.visual--closure span {
    width: 82px;
    height: 82px;
    border: 5px solid black;
    border-right-color: transparent;
    border-radius: 50%;
}

.visual--similarity {
    display: grid;
    grid-template-columns: repeat(6, 24px);
    gap: 16px;
    justify-content: center;
}

.visual--similarity span.square {
    border-radius: 0;
}

.visual--buttons {
    display: grid;
    gap: 16px;
    width: 340px;
}

.visual--buttons div {
    padding: 18px 28px;
    border-radius: 12px;
    background: #111;
    color: white;
    font-size: 26px;
    font-weight: 700;
}

.visual--circle {
    width: 170px;
    height: 170px;
    border: 5px dashed black;
    border-radius: 50%;
}

.visual--website {
    display: grid;
    grid-template-columns: 150px 1fr 120px;
    gap: 16px;
    width: 420px;
    padding: 18px;
    border: 1px solid #bbb;
    border-radius: 8px;
}

.website-bar {
    grid-column: 1 / -1;
    height: 36px;
    background: #b8c5d8;
}

.website-main {
    height: 140px;
    background: #c8d2e3;
}

.website-lines,
.website-side {
    display: grid;
    gap: 12px;
}

.website-lines span,
.website-side span {
    display: block;
    height: 18px;
    background: #d5dbe5;
}

.website-side span {
    background: #b8c5d8;
}

.visual--stopwatch {
    display: grid;
    place-items: center;
}

.watch-face {
    position: relative;
    width: 150px;
    height: 150px;
    border: 8px solid #111;
    border-radius: 50%;
}

.watch-face::before {
    content: "";
    position: absolute;
    top: -26px;
    left: 50%;
    width: 38px;
    height: 22px;
    border-radius: 6px 6px 0 0;
    background: #111;
    transform: translateX(-50%);
}

.watch-face span {
    position: absolute;
    left: 50%;
    top: 24px;
    width: 5px;
    height: 54px;
    background: #111;
    transform: translateX(-50%);
}

@media (max-width: 820px) {
    .kahoot-page {
        padding: 18px;
    }

    .start-screen,
    .result-screen {
        min-height: calc(100vh - 36px);
        margin: 0 auto;
        padding: 16px 24px;
    }

    .question-card {
        padding: 16px;
    }

    .quiz-shell {
        height: calc(100vh - 28px);
        margin-top: 14px;
    }

    .quiz-header {
        gap: 10px;
        margin-bottom: 10px;
    }

    .quiz-header p {
        margin-bottom: 3px;
        font-size: 14px;
    }

    .quiz-header h1 {
        font-size: clamp(18px, 3vw, 26px);
    }

    .quiz-header__score,
    .quiz-header__timer {
        padding: 8px 10px;
        font-size: 16px;
    }

    .admin-controls {
        flex-direction: column;
    }

    .admin-controls__button {
        font-size: 14px;
        padding: 8px 10px;
    }

    .admin-overview {
        width: 72vw;
        padding: 34px 28px;
    }

    .admin-overview h2 {
        margin-bottom: 22px;
        font-size: 48px;
    }

    .admin-overview__list {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 8px;
    }

    .admin-overview__row {
        min-height: 34px;
        padding: 7px 9px;
        font-size: 15px;
    }

    .question-visual {
        height: clamp(140px, 24vh, 210px);
        margin-bottom: 12px;
    }

    .answer {
        min-height: 54px;
        padding: 10px 12px;
        font-size: 16px;
    }

    .answer__shape {
        font-size: 19px;
    }

    .quiz-footer {
        gap: 10px;
        min-height: 44px;
        margin-top: 8px;
    }

    .quiz-footer p {
        font-size: 16px;
    }

    .quiz-footer__button {
        padding: 12px 18px;
        font-size: 18px;
    }

    .visual {
        transform: scale(0.82);
        transform-origin: center;
    }

    .start-screen h1,
    .result-screen h1 {
        font-size: clamp(44px, 9vw, 76px);
    }

    .start-screen p,
    .result-screen p {
        margin-bottom: 20px;
        font-size: 22px;
    }
}

@media (max-width: 620px) {
    .quiz-header {
        grid-template-columns: 1fr;
    }

    .answers {
        grid-template-columns: 1fr;
    }

    .answer {
        font-size: 19px;
    }
}
</style>
