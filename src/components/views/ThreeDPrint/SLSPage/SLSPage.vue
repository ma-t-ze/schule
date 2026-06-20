<template>
  <div class="page">
    <main class="content">
      <section class="intro">
        <h1>Selektives Lasersintern (SLS)</h1>

        <p>
          Selektives Lasersintern und selektives Laserschmelzen gewinnen immer
          mehr an Bedeutung. Der Einsatzschwerpunkt liegt im Rapid Manufacturing
          – der generativen Produktion von Produkten.
        </p>

        <p>
          Bei diesen Verfahren wird zunächst eine dünne Pulverschicht aus
          Polymer (SLS) oder Metall (SLM) auf eine Trägerplatte aufgebracht. An
          den durch die CAD-Daten definierten Stellen wird mittels Laserstrahl
          das Pulver verschmolzen.
        </p>

        <p>
          Danach wird die Trägerplatte etwas nach unten bewegt, die nächste
          Pulverschicht wird aufgebracht und an den definierten Stellen wird
          erneut verschmolzen. Hohle Objekte sind nur möglich, wenn Öffnungen
          zum Herausschütteln des ungebundenen Pulvers vorgesehen sind.
        </p>
      </section>

      <img src="/images/bkgd/process/sls.png" alt="SLS-Prozess" class="process-image" />

      <section class="task">
        <h2>Aufgabe 1</h2>
        <p>Ordne die Prozessschritte in die richtige Reihenfolge.</p>

        <draggable
          v-model="steps"
          item-key="id"
          class="steps"
          ghost-class="ghost"
          animation="200"
        >
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
          <div
            v-for="feature in features"
            :key="feature.id"
            class="feature-row"
          >
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

                <button
                  class="edit-button"
                  @click="editOption(feature.id)"
                >
                  bearbeiten
                </button>
              </template>
            </div>
          </div>
        </div>
      </section>

      <RouterLink to="/3dprint" class="back-button">
        Zurück
      </RouterLink>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'SLSPage',

  components: {
    draggable
  },

  data() {
    return {
      steps: [
        {
          id: 1,
          text: 'Eine dünne Pulverschicht wird auf die Trägerplatte aufgebracht'
        },
        {
          id: 2,
          text: 'Der Laser verschmilzt das Pulver an den gewünschten Stellen'
        },
        {
          id: 3,
          text: 'Die Trägerplatte wird um eine Schichtstärke abgesenkt'
        },
        {
          id: 4,
          text: 'Eine neue Pulverschicht wird aufgetragen'
        },
        {
          id: 5,
          text: 'Der Laser verschmilzt die nächste Schicht mit dem Bauteil'
        }
      ],

      features: [
        {
          id: 1,
          label: 'Ausgangsmaterial',
          selected: null,
          options: [
            'Kunststoffdraht',
            'flüssiges Photopolymer',
            'Kunststoffpulver'
          ]
        },
        {
          id: 2,
          label: 'Funktionsprinzip',
          selected: null,
          options: [
            'Material wird geschmolzen und abgelegt',
            'Material wird mit Licht ausgehärtet',
            'Pulver wird mit Laser verschmolzen'
          ]
        },
        {
          id: 3,
          label: 'Detailgenauigkeit',
          selected: null,
          options: [
            'mittel',
            'sehr hoch',
            'hoch'
          ]
        },
        {
          id: 4,
          label: 'Oberflächenqualität',
          selected: null,
          options: [
            'sichtbare Schichten',
            'sehr glatt',
            'leicht rau'
          ]
        },
        {
          id: 5,
          label: 'Stützstrukturen',
          selected: null,
          options: [
            'meist erforderlich',
            'durch Pulver gestützt',
            'nie erforderlich'
          ]
        },
        {
          id: 6,
          label: 'Kosten',
          selected: null,
          options: [
            'gering',
            'mittel',
            'hoch'
          ]
        },
        {
          id: 7,
          label: 'Typische Anwendung',
          selected: null,
          options: [
            'Hobbydruck und einfache Prototypen',
            'Präsentationsmodelle und detailreiche Modelle',
            'industrielle Funktionsbauteile'
          ]
        }
      ]
    }
  },

  methods: {
    selectOption(featureId, option) {
      const feature = this.features.find(item => item.id === featureId)
      feature.selected = option
    },

    editOption(featureId) {
      const feature = this.features.find(item => item.id === featureId)
      feature.selected = null
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

.intro {
  text-align: left;
}

.process-image {
  width: 100%;
  margin-top: 0px;
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
  font-size: 20px;
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
.edit-button {
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

.back-button {
  display: inline-block;
  margin-top: 32px;
  padding: 12px 24px;

  text-decoration: none;

  background: #222;
  color: white;
  border-radius: 8px;
}
</style>