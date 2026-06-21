<template>
  <div class="page">
    <main class="content">
      <RouterLink to="/3dprint?overview=true" class="back-button">
        Zurück
      </RouterLink>

      <section class="task">
        <h2>Aufgabenbeschreibung</h2>
        <ol class="task-list">
          <li>Lies den Text aufmerksam und analysiere die schematische Darstellung des Druckverfahrens.</li>
          <li>Löse Aufgabe 1 und Aufgabe 2. Vergleicht eure Ergebnisse anschließend in der Gruppe. Bei Fragen wendet euch zunächst an eure Expertengruppe, erst dann an die Lehrkraft.</li>
          <li>Wenn ihr überzeugt seid, alle Aufgaben korrekt gelöst zu haben, holt euch den Prüfungscode bei der Lehrkraft ab.</li>
          <li>Kehrt in eure Stammgruppe zurück und erklärt das Verfahren anhand der schematischen Darstellung – stellt dabei die wichtigsten Merkmale kurz vor.</li>
        </ol>
      </section>

      <h1>Stereolithografie (SLA)</h1>

      <div class="intro-row">
        <section class="intro">
          <p>
            Die Stereolithografie ist das älteste 3D-Druckverfahren. Das 3D-Objekt entsteht aus einem
            zähflüssigen lichtempfindlichen Polymer (Photopolymer), das Schicht für Schicht mit UV-Licht
            ausgehärtet wird.
          </p>

          <p>
            Das Verfahren erreicht eine sehr hohe Detailgenauigkeit und erzeugt sehr glatte Oberflächen.
            Für Überhänge sind meist Stützstrukturen erforderlich, die nach dem Druck entfernt werden.
            Anschließend wird das Bauteil mit UV-Licht vollständig nachgehärtet.
          </p>

          <p>
            Die Kosten liegen im mittleren Bereich. Aufgrund der hohen Präzision eignet sich SLA
            besonders für Präsentationsmodelle und detailreiche Modelle.
          </p>
        </section>

        <img src="/images/3dprint/process/sla.png" alt="SLA-Prozess" class="process-image" />
      </div>

      <section class="task">
        <h2>Aufgabe 1</h2>
        <p>Ordne die Prozessschritte in die richtige Reihenfolge.</p>

        <draggable v-model="steps" item-key="id" class="steps" ghost-class="ghost" animation="200">
          <template #item="{ element }">
            <div class="step-button">
              {{ element.text }}
            </div>
          </template>
        </draggable>
      </section>

      <section class="task">
        <h2>Aufgabe 2</h2>
        <p>Wähle zu jedem Merkmal die passende Beschreibung aus.</p>

        <div class="feature-table">
          <div v-for="feature in features" :key="feature.id" class="feature-row">
            <div class="feature-name">
              {{ feature.label }}
            </div>

            <div class="feature-options">
              <template v-if="feature.selected === null">
                <button
                  v-for="option in feature.options"
                  :key="option"
                  class="option-button"
                  @click="selectOption(feature.id, option)"
                >
                  {{ option }}
                </button>
              </template>

              <template v-else>
                <button class="option-button selected">
                  {{ feature.selected }}
                </button>

                <button class="edit-button" @click="editOption(feature.id)">
                  bearbeiten
                </button>
              </template>
            </div>
          </div>
        </div>
      </section>

      <section class="task">
        <div class="check-row">
          <input v-model="checkCode" class="code-input" placeholder="Code" @keyup.enter="submitCode" />
          <button class="check-button" @click="submitCode">
            Lösung prüfen
          </button>
        </div>

        <p v-if="feedback" class="feedback" :class="{ success: isCorrect, error: !isCorrect }">
          {{ feedback }}
        </p>

        <RouterLink v-if="isCorrect" to="/results" class="results-button">
          Zur Ergebnisseite
        </RouterLink>
      </section>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'SLAPage',

  components: {
    draggable
  },

  data() {
    return {
      steps: [
        { id: 2, text: 'Der Laser härtet die erste Schicht des Polymers aus' },
        { id: 4, text: 'Die nächste Schicht wird mit dem Laser ausgehärtet' },
        { id: 1, text: 'Die Bauplattform wird in das flüssige Photopolymer abgesenkt' },
        { id: 5, text: 'Das Bauteil wird nach dem Druck gereinigt und mit UV-Licht nachgehärtet' },
        { id: 3, text: 'Die Bauplattform bewegt sich um eine Schichtstärke' }
      ],

      features: [
        {
          id: 1,
          label: 'Ausgangsmaterial',
          selected: null,
          correct: 'flüssiges Photopolymer',
          options: ['Kunststoffdraht', 'flüssiges Photopolymer', 'Kunststoffpulver']
        },
        {
          id: 2,
          label: 'Funktionsprinzip',
          selected: null,
          correct: 'Material wird mit Licht ausgehärtet',
          options: ['Pulver wird mit Laser verschmolzen', 'Material wird mit Licht ausgehärtet', 'Material wird geschmolzen und abgelegt']
        },
        {
          id: 3,
          label: 'Detailgenauigkeit',
          selected: null,
          correct: 'sehr hoch',
          options: ['mittel', 'hoch', 'sehr hoch']
        },
        {
          id: 4,
          label: 'Oberflächenqualität',
          selected: null,
          correct: 'sehr glatt',
          options: ['sehr glatt', 'leicht rau', 'sichtbare Schichten']
        },
        {
          id: 5,
          label: 'Stützstrukturen',
          selected: null,
          correct: 'meist erforderlich',
          options: ['durch Pulver gestützt', 'meist erforderlich', 'nie erforderlich']
        },
        {
          id: 6,
          label: 'Kosten',
          selected: null,
          correct: 'mittel',
          options: ['hoch', 'gering', 'mittel']
        },
        {
          id: 7,
          label: 'Typische Anwendung',
          selected: null,
          correct: 'Präsentationsmodelle und detailreiche Modelle',
          options: ['industrielle Funktionsbauteile', 'Präsentationsmodelle und detailreiche Modelle', 'Prototypen und Hobbybereich']
        }
      ],

      feedback: '',
      isCorrect: false,
      checkCode: ''
    }
  },

  methods: {
    submitCode() {
      if (this.checkCode === 'gmt-solve') {
        this.steps = [
          { id: 1, text: 'Die Bauplattform wird in das flüssige Photopolymer abgesenkt' },
          { id: 2, text: 'Der Laser härtet die erste Schicht des Polymers aus' },
          { id: 3, text: 'Die Bauplattform bewegt sich um eine Schichtstärke' },
          { id: 4, text: 'Die nächste Schicht wird mit dem Laser ausgehärtet' },
          { id: 5, text: 'Das Bauteil wird nach dem Druck gereinigt und mit UV-Licht nachgehärtet' }
        ]
        this.features.forEach(f => { f.selected = f.correct })
        this.$nextTick(() => this.checkSolution())
        return
      }
      if (this.checkCode === 'gmt-sla') {
        this.checkSolution()
      }
    },

    selectOption(featureId, option) {
      const feature = this.features.find(item => item.id === featureId)
      feature.selected = option
      this.feedback = ''
    },

    editOption(featureId) {
      const feature = this.features.find(item => item.id === featureId)
      feature.selected = null
      this.feedback = ''
    },

    checkSolution() {
      const correctStepOrder = [1, 2, 3, 4, 5]

      const stepsCorrect = this.steps.every((step, index) => {
        return step.id === correctStepOrder[index]
      })

      const featuresComplete = this.features.every(feature => feature.selected !== null)
      const featuresCorrect = this.features.every(feature => feature.selected === feature.correct)

      this.isCorrect = stepsCorrect && featuresComplete && featuresCorrect

      this.feedback = this.isCorrect
        ? 'Gut gemacht! Du bist bereit, das Verfahren in deiner Stammgruppe zu erklären. Gehe in den Bereich Ergebnisse und gib dort den Code "gmt-sla" ein.'
        : 'Es hat sich ein Fehler eingeschlichen. Diskutiert eure Lösung noch einmal. Falls ihr den Fehler nicht findet, wendet euch an die Lehrkraft.'
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 48px;
  display: flex;
  justify-content: center;
}

.content {
  width: min(100%, 950px);
}

.intro-row {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}

.intro {
  flex: 1;
  text-align: left;
}

.intro p:first-child {
  margin-top: 0;
}

.process-image {
  width: 50%;
  flex-shrink: 0;
}

h1 {
  margin-bottom: 24px;
  font-size: 36px;
}

h2 {
  margin-top: 40px;
  font-size: 28px;
}

p {
  font-size: 17px;
  line-height: 1.5;
}

.task {
  margin-top: 40px;
}

.steps {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.step-button {
  width: 100%;
  padding: 18px 22px;
  border-radius: 10px;
  background: #222;
  color: white;
  font-size: 18px;
  text-align: left;
  cursor: grab;
  user-select: none;
  touch-action: none;
}

.step-button:active {
  cursor: grabbing;
}

.ghost {
  opacity: 0.4;
}

.feature-table {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ddd;
}

.feature-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid #ddd;
}

.feature-name {
  font-size: 20px;
  font-weight: bold;
}

.feature-options {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.option-button,
.edit-button,
.check-button,
.back-button,
.results-button {
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.option-button {
  background: #222;
  color: white;
}

.option-button.selected {
  background: #22c55e;
  color: white;
}

.edit-button {
  background: #ddd;
  color: #222;
}

.check-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.code-input {
  padding: 12px 16px;
  font-size: 18px;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  width: 160px;
}

.code-input:focus {
  border-color: #999;
}

.check-button {
  background: #111;
  color: white;
  font-size: 20px;
}

.feedback {
  margin-top: 24px;
  padding: 20px;
  border-radius: 12px;
  font-size: 18px;
}

.feedback.success {
  background: #dcfce7;
  color: #166534;
}

.feedback.error {
  background: #fee2e2;
  color: #991b1b;
}

.back-button,
.results-button {
  text-decoration: none;
  display: inline-block;
}

.back-button {
  margin-bottom: 16px;
  background: #222;
  color: white;
}

.task-list {
  padding-left: 20px;
}

.task-list li {
  font-size: 17px;
  line-height: 1.5;
  margin-bottom: 8px;
}

.task-list li:last-child {
  margin-bottom: 0;
}

.results-button {
  margin-top: 24px;
  background: #222;
  color: white;
}
</style>
