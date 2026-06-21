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

      <h1>Fused Deposition Modeling (FDM)</h1>

      <div class="intro-row">
        <section class="intro">
          <p>
            Bei der Schmelzschichtung (Fused Deposition Modeling) wird im Extruder
            des Druckkopfs ein Kunststoffdraht (Thermoplast) geschmolzen und durch
            die Düse gepresst. Der Druckkopf verfährt in der x- und y-Richtung. So
            entsteht eine Schicht des Bauteils. Anschließend fahren der Druckkopf
            und die Bauplatte um eine Schichtstärke auseinander. Die nächste
            Schicht kann aufgebaut werden. Der 3D-Druck entsteht so Schicht für
            Schicht in senkrechter Richtung.
          </p>

          <p>
            Die erreichbare Detailgenauigkeit liegt im mittleren Bereich. Überhänge benötigen meist
            Stützstrukturen, die nach dem Druck entfernt werden. Die vergleichsweise geringen Geräte- und Materialkosten
            machen FDM-Drucker zur bevorzugten Wahl für Prototypen und den Hobbybereich.
          </p>
        </section>

        <img src="/images/3dprint/process/fdm.png" alt="FDM-Prozess" class="process-image" />
      </div>

      <section class="task">
        <h2>Aufgabe 1</h2>
        <p>Ordne die Prozessschritte in der richtigen Reihenfolge.</p>

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
                <button v-for="option in feature.options" :key="option" class="option-button"
                  @click="selectOption(feature.id, option)">
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
  name: 'FDMPage',

  components: {
    draggable
  },

  data() {
    return {
      steps: [
        {
          id: 3,
          text: 'Druckkopf verfährt in x- und y-Richtung'
        },
        {
          id: 5,
          text: 'Druckkopf und Bauplatte bewegen sich um eine Schichtstärke auseinander'
        },
        {
          id: 1,
          text: 'Kunststoffdraht wird im Extruder geschmolzen'
        },
        {
          id: 4,
          text: 'Eine Schicht des Bauteils entsteht'
        },
        {
          id: 2,
          text: 'Material wird durch die Düse gepresst'
        }
      ],

      features: [
        {
          id: 1,
          label: 'Ausgangsmaterial',
          selected: null,
          correct: 'Kunststoffdraht',
          options: ['flüssiges Harz', 'Kunststoffdraht', 'Kunststoffpulver']
        },
        {
          id: 2,
          label: 'Funktionsprinzip',
          selected: null,
          correct: 'Material wird geschmolzen und abgelegt',
          options: ['Pulver wird mit Laser verschmolzen', 'Material wird mit Licht ausgehärtet', 'Material wird geschmolzen und abgelegt']
        },
        {
          id: 3,
          label: 'Detailgenauigkeit',
          selected: null,
          correct: 'mittel',
          options: ['hoch', 'mittel', 'sehr hoch']
        },
        {
          id: 4,
          label: 'Oberflächenqualität',
          selected: null,
          correct: 'sichtbare Schichten',
          options: ['sehr glatt', 'leicht rau', 'sichtbare Schichten']
        },
        {
          id: 5,
          label: 'Stützstrukturen',
          selected: null,
          correct: 'meist erforderlich',
          options: ['nie erforderlich', 'meist erforderlich', 'durch Pulver gestützt']
        },
        {
          id: 6,
          label: 'Kosten',
          selected: null,
          correct: 'vergleichsweise gering',
          options: ['mittel', 'vergleichsweise gering', 'hoch']
        },
        {
          id: 7,
          label: 'Typische Anwendung',
          selected: null,
          correct: 'Prototypen und Hobbybereich',
          options: ['industrielle Funktionsbauteile', 'Prototypen und Hobbybereich', 'Präsentationsmodelle']
        }
      ],

      feedback: '',
      isCorrect: false,
      checkCode: ''
    }
  },

  methods: {
    submitCode() {
      if (this.checkCode === 'gmt solve') {
        this.steps = [
          { id: 1, text: 'Kunststoffdraht wird im Extruder geschmolzen' },
          { id: 2, text: 'Material wird durch die Düse gepresst' },
          { id: 3, text: 'Druckkopf verfährt in x- und y-Richtung' },
          { id: 4, text: 'Eine Schicht des Bauteils entsteht' },
          { id: 5, text: 'Druckkopf und Bauplatte bewegen sich um eine Schichtstärke auseinander' }
        ]
        this.features.forEach(f => { f.selected = f.correct })
        this.$nextTick(() => this.checkSolution())
        return
      }
      if (this.checkCode === 'gmt33') {
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

      const featuresComplete = this.features.every(feature => {
        return feature.selected !== null
      })

      const featuresCorrect = this.features.every(feature => {
        return feature.selected === feature.correct
      })

      this.isCorrect = stepsCorrect && featuresComplete && featuresCorrect

      this.feedback = this.isCorrect
        ? 'Gut gemacht! Du bist bereit, das Verfahren in deiner Stammgruppe zu erklären. Gehe in den Bereich Ergebnisse und gib dort den Code "gmt solve all" ein.'
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
.leave-button,
.cancel-button,
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
  font-weight: bold;
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

.overlay {
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.45);
  z-index: 1000;
}

.modal {
  width: min(90%, 520px);
  padding: 32px;

  background: white;
  border-radius: 16px;

  text-align: center;
}

.modal p {
  margin: 0;
  font-weight: bold;
}

.modal-actions {
  margin-top: 28px;

  display: flex;
  justify-content: center;
  gap: 16px;
}

.leave-button {
  background: #222;
  color: white;
  text-decoration: none;
}

.cancel-button {
  background: #ddd;
  color: #222;
}
</style>