<template>
  <div class="page">
    <main class="content">
      <section class="intro">
        <h1>Stereolithografie (SLA)</h1>

        <p>
          Die Stereolithografie ist das älteste 3D-Druckverfahren. Das
          3D-Objekt entsteht aus einem zähflüssigen lichtempfindlichen Polymer
          (Photopolymer). Das Polymer wird an den gewünschten Stellen Schicht
          für Schicht mit Hilfe eines Lasers ausgehärtet.
        </p>

        <p>
          Das Verfahren zeichnet sich durch hohe Detailgenauigkeit aus. Hohle
          Objekte sind nur möglich, wenn Öffnungen zum Herauswaschen des
          ungebundenen Polymers vorgesehen sind. Durch entsprechende
          Nachbelichtung mit UV-Licht können die Objekte vollständig
          durchgehärtet werden.
        </p>

        <p>
          Die gedruckten Objekte sind je nach verwendetem Polymer spröde oder
          elastisch. Das Verfahren dient zur relativ schnellen und
          kostengünstigen Fertigung von Präsentationsmodellen und ersetzt damit
          immer mehr den herkömmlichen manuellen Modellbau.
        </p>
      </section>

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
  name: 'SLAPage',

  components: {
    draggable
  },

  data() {
    return {
      steps: [
        {
          id: 1,
          text: 'Die Bauplattform wird in das flüssige Photopolymer abgesenkt'
        },
        {
          id: 2,
          text: 'Der Laser härtet die erste Schicht des Polymers aus'
        },
        {
          id: 3,
          text: 'Die Bauplattform bewegt sich um eine Schichtstärke'
        },
        {
          id: 4,
          text: 'Die nächste Schicht wird mit dem Laser ausgehärtet'
        },
        {
          id: 5,
          text: 'Das Bauteil wird nach dem Druck gereinigt und mit UV-Licht nachgehärtet'
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
            'gering'
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
            'sehr hoch'
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