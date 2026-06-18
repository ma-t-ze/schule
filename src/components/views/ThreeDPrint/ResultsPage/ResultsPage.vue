<template>
  <div class="page">
    <main class="content">
      <h1>Ergebnisse</h1>

      <section class="assignment">
        <h2>Arbeitsauftrag</h2>
        <p>
          Durch die Eingabe eures Codes erscheint die jeweilige Lösung.
          Stellt euren Gruppenmitgliedern das Verfahren anhand der Lösung vor
          und beantwortet im Anschluss die Transferfragen.
        </p>
      </section>

      <div class="code-area">
        <input
          v-model="code"
          type="text"
          placeholder="Code eingeben"
          @keyup.enter="unlockResult"
        />

        <button @click="unlockResult">
          Freischalten
        </button>
      </div>

      <h2>Prozessschritte</h2>

      <table>
        <thead>
          <tr>
            <th>Schritt</th>
            <th>FDM</th>
            <th>SLA</th>
            <th>SLS</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="index in 5" :key="index">
            <td>{{ index }}</td>
            <td>{{ unlocked.fdm ? processSteps.fdm[index - 1] : '' }}</td>
            <td>{{ unlocked.sla ? processSteps.sla[index - 1] : '' }}</td>
            <td>{{ unlocked.sls ? processSteps.sls[index - 1] : '' }}</td>
          </tr>
        </tbody>
      </table>

      <h2>Merkmale</h2>

      <table>
        <thead>
          <tr>
            <th>Merkmal</th>
            <th>FDM</th>
            <th>SLA</th>
            <th>SLS</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="feature in features" :key="feature.key">
            <td>{{ feature.label }}</td>
            <td>{{ unlocked.fdm ? results.fdm[feature.key] : '' }}</td>
            <td>{{ unlocked.sla ? results.sla[feature.key] : '' }}</td>
            <td>{{ unlocked.sls ? results.sls[feature.key] : '' }}</td>
          </tr>
        </tbody>
      </table>

      <p v-if="message" class="message">
        {{ message }}
      </p>

      <section class="transfer">
        <h2>Transferfragen</h2>

        <div
          v-for="question in transferQuestions"
          :key="question.id"
          class="question"
        >
          <label :for="`question-${question.id}`">
            {{ question.id }}. {{ question.text }}
          </label>

          <textarea
            :id="`question-${question.id}`"
            v-model="question.answer"
            rows="4"
            placeholder="Antwort eingeben"
          />
        </div>
      </section>

      <button class="back-button" @click="showLeaveWarning = true">
        Zurück
      </button>

      <div v-if="showLeaveWarning" class="overlay">
        <div class="modal">
          <p>
            Achtung, beim Verlassen dieser Seite gehen alle Eingaben verloren.
          </p>

          <div class="modal-actions">
            <RouterLink to="/3dprint" class="leave-button">
              Seite verlassen
            </RouterLink>

            <button class="cancel-button" @click="showLeaveWarning = false">
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ResultsPage',

  data() {
    return {
      code: '',
      message: '',
      showLeaveWarning: false,

      unlocked: {
        fdm: false,
        sla: false,
        sls: false
      },

      processSteps: {
        fdm: [
          'Kunststoffdraht wird im Extruder geschmolzen',
          'Material wird durch die Düse gepresst',
          'Druckkopf verfährt in x- und y-Richtung',
          'Eine Schicht des Bauteils entsteht',
          'Druckkopf und Bauplatte bewegen sich um eine Schichtstärke auseinander'
        ],
        sla: [
          'Die Bauplattform wird in das flüssige Photopolymer abgesenkt',
          'Der Laser härtet die erste Schicht des Polymers aus',
          'Die Bauplattform bewegt sich um eine Schichtstärke',
          'Die nächste Schicht wird mit dem Laser ausgehärtet',
          'Das Bauteil wird nach dem Druck gereinigt und mit UV-Licht nachgehärtet'
        ],
        sls: [
          'Eine dünne Pulverschicht wird auf die Trägerplatte aufgebracht',
          'Der Laser verschmilzt das Pulver an den gewünschten Stellen',
          'Die Trägerplatte wird um eine Schichtstärke abgesenkt',
          'Eine neue Pulverschicht wird aufgetragen',
          'Der Laser verschmilzt die nächste Schicht mit dem Bauteil'
        ]
      },

      features: [
        { key: 'material', label: 'Ausgangsmaterial' },
        { key: 'principle', label: 'Funktionsprinzip' },
        { key: 'detail', label: 'Detailgenauigkeit' },
        { key: 'surface', label: 'Oberflächenqualität' },
        { key: 'support', label: 'Stützstrukturen' },
        { key: 'costs', label: 'Kosten' },
        { key: 'application', label: 'Typische Anwendung' }
      ],

      results: {
        fdm: {
          material: 'Kunststoffdraht',
          principle: 'Material wird geschmolzen und abgelegt',
          detail: 'mittel',
          surface: 'sichtbare Schichten',
          support: 'meist erforderlich',
          costs: 'vergleichsweise gering',
          application: 'Prototypen und Hobbybereich'
        },
        sla: {
          material: 'flüssiges Photopolymer',
          principle: 'Material wird mit Licht ausgehärtet',
          detail: 'sehr hoch',
          surface: 'sehr glatt',
          support: 'meist erforderlich',
          costs: 'mittel',
          application: 'Präsentationsmodelle und detailreiche Modelle'
        },
        sls: {
          material: 'Kunststoffpulver',
          principle: 'Pulver wird mit Laser verschmolzen',
          detail: 'hoch',
          surface: 'leicht rau',
          support: 'durch Pulver gestützt',
          costs: 'hoch',
          application: 'industrielle Funktionsbauteile'
        }
      },

      transferQuestions: [
        {
          id: 1,
          text: 'Ein Zahnarzt möchte ein sehr genaues Modell eines Gebisses herstellen. Welches Verfahren würdet ihr empfehlen? Begründet eure Entscheidung.',
          answer: ''
        },
        {
          id: 2,
          text: 'Ein Ersatzteil soll stabil sein und in kleiner Stückzahl hergestellt werden. Welches Verfahren ist besonders geeignet? Begründet eure Auswahl.',
          answer: ''
        },
        {
          id: 3,
          text: 'Für ein günstiges Modell im Unterricht soll ein einfacher Prototyp hergestellt werden. Welches Verfahren passt am besten? Begründet eure Entscheidung.',
          answer: ''
        },
        {
          id: 4,
          text: 'Warum ist es wichtig, vor dem Druck das passende 3D-Druckverfahren auszuwählen? Bezieht euch auf mindestens zwei Merkmale aus der Tabelle.',
          answer: ''
        }
      ]
    }
  },

  methods: {
    unlockResult() {
      const normalizedCode = this.code.trim().toLowerCase()

      if (normalizedCode === 'gmt-fdm') {
        this.unlocked.fdm = true
        this.message = 'FDM wurde freigeschaltet.'
      } else if (normalizedCode === 'gmt-sla') {
        this.unlocked.sla = true
        this.message = 'SLA wurde freigeschaltet.'
      } else if (normalizedCode === 'gmt-sls' || normalizedCode === 'gmt sls') {
        this.unlocked.sls = true
        this.message = 'SLS wurde freigeschaltet.'
      } else {
        this.message = 'Der Code ist nicht korrekt.'
      }

      this.code = ''
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
  width: min(100%, 1200px);
}

h1 {
  margin-bottom: 24px;
  font-size: 36px;
}

h2 {
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 28px;
}

.assignment {
  margin-bottom: 32px;
  padding: 24px;

  background: #f5f5f5;
  border-radius: 12px;
}

.assignment p {
  margin: 0;

  font-size: 20px;
  line-height: 1.5;
}

.code-area {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
}

input,
textarea {
  padding: 12px 16px;

  font-family: inherit;
  font-size: 18px;

  border: 1px solid #999;
  border-radius: 8px;
}

textarea {
  width: 100%;
  margin-top: 10px;

  box-sizing: border-box;
  resize: vertical;
}

button {
  padding: 12px 20px;

  border: none;
  border-radius: 8px;

  background: #222;
  color: white;

  font-size: 18px;
  cursor: pointer;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #999;
  padding: 14px;
  text-align: left;
  vertical-align: top;
}

th {
  background: #f5f5f5;
  font-size: 20px;
}

td:first-child {
  font-weight: bold;
  width: 220px;
}

.message {
  margin-top: 24px;
  font-size: 20px;
  font-weight: bold;
}

.transfer {
  margin-top: 48px;
}

.question {
  margin-top: 28px;
}

.question label {
  display: block;

  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
}

.back-button {
  margin-top: 32px;
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

  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
}

.modal-actions {
  margin-top: 28px;

  display: flex;
  justify-content: center;
  gap: 16px;
}

.leave-button,
.cancel-button {
  padding: 12px 16px;

  border: none;
  border-radius: 8px;

  font-size: 16px;
  cursor: pointer;
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