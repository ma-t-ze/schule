<template>
  <div class="page">
    <main class="content">
      <RouterLink to="/3dprint?overview=true" class="back-button">
        Zurück
      </RouterLink>

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

      <div class="push-area">
        <button class="push-button" @click="pushSolution">
          Lösung pushen
        </button>
        <button class="reset-button" @click="resetSolution">
          Zurücksetzen
        </button>
        <span v-if="pushConfirm" class="push-confirm">Lösung wurde an alle gepusht.</span>
      </div>

    </main>
  </div>
</template>

<script>
import { db } from '../../../../firebase.js'
import { ref, onValue, set } from 'firebase/database'

export default {
  name: 'ResultsPage',

  data() {
    return {
      code: '',
      message: '',
      pushConfirm: false,

      unlocked: {
        fdm: false,
        sla: false,
        sls: false
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
          text: 'Eine Schule verfügt über ein begrenztes Budget und möchte sich einen 3D-Drucker anschaffen, um Prototypen kostengünstig herzustellen. Welches Verfahren empfehlt ihr? Begründet eure Entscheidung.',
          answer: ''
        },
        {
          id: 2,
          text: 'Ein Ersatzteil soll stabil sein und in kleiner Stückzahl hergestellt werden. Welches Verfahren ist besonders geeignet? Begründet eure Auswahl.',
          answer: ''
        },
        {
          id: 3,
          text: 'Ein Zahnarzt möchte ein hochpräzises Modell eines Gebisses mit sehr glatter Oberfläche herstellen. Welches Verfahren empfehlt ihr? Begründet eure Entscheidung.',
          answer: ''
        }
      ]
    }
  },

  mounted() {
    this._dbRef = ref(db, 'session/solutionPushed')
    this._unsubscribe = onValue(this._dbRef, (snapshot) => {
      if (snapshot.val()) {
        this.unlocked = { fdm: true, sla: true, sls: true }
      } else {
        this.unlocked = { fdm: false, sla: false, sls: false }
      }
    })
  },

  unmounted() {
    if (this._unsubscribe) this._unsubscribe()
  },

  methods: {
    unlockResult() {
      const normalizedCode = this.code.trim().toLowerCase()

      if (normalizedCode === 'gmt solve all') {
        this.unlocked.fdm = true
        this.unlocked.sla = true
        this.unlocked.sls = true
        this.message = 'Alle Verfahren wurden freigeschaltet.'
      } else if (normalizedCode === 'gmt-fdm') {
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
    },

    async pushSolution() {
      await set(ref(db, 'session/solutionPushed'), Date.now())
      this.pushConfirm = true
      setTimeout(() => { this.pushConfirm = false }, 3000)
    },

    async resetSolution() {
      await set(ref(db, 'session/solutionPushed'), null)
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

.push-area {
  margin-top: 48px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.push-button {
  background: #16a34a;
  color: white;
  font-size: 18px;
  padding: 14px 24px;
}

.reset-button {
  background: #ddd;
  color: #222;
  font-size: 18px;
  padding: 14px 24px;
}

.push-confirm {
  font-size: 17px;
  color: #16a34a;
  font-weight: bold;
}

.back-button {
  display: inline-block;
  margin-bottom: 24px;
  padding: 12px 16px;
  border-radius: 8px;
  background: #222;
  color: white;
  font-size: 16px;
  text-decoration: none;
}
</style>