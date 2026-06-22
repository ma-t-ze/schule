<template>
  <div class="page">
    <div v-if="!$route.query.overview" class="start-overlay">
      <div class="start-inner">
        <div class="start-row">
          <input
            v-model="gameCode"
            class="code-input"
            placeholder="Code"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="none"
            spellcheck="false"
            @keyup.enter="startGame"
          />
          <button class="start-button" @click="startGame">
            Start
          </button>
        </div>
        <p class="start-hint">Nutze im weiteren Verlauf nur die Navigationselemente der Anwendung – nicht den Zurück-Button des Browsers.</p>
      </div>
    </div>

    <button v-if="$route.query.overview" class="burger-button" @click="showBurger = true">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="burger-overlay" :class="{ open: showBurger }">
      <button class="burger-close" @click="showBurger = false">✕</button>
      <button class="burger-item" @click="goToGame">Game</button>
      <button class="burger-item" @click="showBurger = false; showOverlay = true">Gruppenpuzzle</button>
      <button class="burger-item burger-item--secondary" @click="restart">Neu starten</button>
    </div>

    <div v-if="showBurger" class="burger-backdrop" @click="showBurger = false"></div>

    <div class="menu">
      <h1 class="menu-title">Die wichtigsten 3D-Druckverfahren</h1>
      <h2 class="menu-subtitle">Tippt entsprechend eurer Rolle auf ein Thema (z. B. Schmelzschichtverfahren (FDM) für die Rolle FDM-1) und folgt der Aufgabenbeschreibung.</h2>
      <RouterLink to="/fdm" class="button">Schmelzschichtverfahren (FDM)</RouterLink>
      <RouterLink to="/sla" class="button">Lichthärtungsverfahren (SLA)</RouterLink>
      <RouterLink to="/sls" class="button">Laserverschmelzung von Pulver (SLS)</RouterLink>
      <RouterLink to="/results" class="button">Ergebnisse</RouterLink>
    </div>

    <div class="overlay" :class="{ open: showOverlay }">
      <div class="overlay-content">
        <button v-if="!$route.query.gruppenpuzzle" class="close-button" @click="showOverlay = false">
          Schließen
        </button>

        <RouterLink to="/game?solved=true" class="generate-button back-to-game">Zurück</RouterLink>

        <h1>Gruppenpuzzle zum Thema 3D-Druckverfahren</h1>

        <p>
          Beim Gruppenpuzzle werdet ihr zunächst in Stammgruppen eingeteilt und
          bekommt je eine Expertenrolle. Dann wechselt ihr
          in eure Expertengruppen und erarbeitet dort euer Thema. Anschließend
          kehrt ihr in eure Stammgruppen zurück und erklärt euch gegenseitig
          euer Thema und beantwortet Transferfragen. 
        </p>

        <h2>Stammgruppen generieren</h2>

        <div class="generator">
          <div class="generator-row">
            <input id="student-count" v-model.number="studentCount" type="number" min="1" placeholder="Anzahl SuS" />

            <button class="generate-button" @click="generateGroups">
              generieren
            </button>
          </div>
        </div>

        <div ref="pdfContent">
          <div v-if="groups.length" class="result">
            <h2>Stammgruppen</h2>

            <div class="group-list">
              <div v-for="group in groups" :key="group.id" class="group-card">
                <strong>Gruppe {{ group.id }}</strong>
                <span class="group-size">{{ group.size }} Pers.</span>
                <span
                  v-for="member in group.members"
                  :key="member.label"
                  class="member-tag"
                  :class="{ selected: selectedMember === member.label }"
                  @click="toggleMember(member.label)"
                >
                  {{ member.label }}
                </span>
              </div>
            </div>

            <p class="instruction">Geht nun wie folgt vor:</p>
            <p class="instruction">1. Findet euch in Gruppen dieser Größe zusammen.</p>
            <p class="instruction">2. Vergebt die Rollen in eurer Gruppe.</p>
            <p class="instruction">3. Tippt eure Rolle auf dem Tablet an.</p>
            <p class="instruction">4. Tippt auf „Expertengruppen erstellen".</p>
            <p class="instruction">5. Schaut, in welcher Expertengruppe ihr seid, und tippt dann auf „Deine Expertengruppe finden".</p>
            <p class="instruction">6. Hebt euer Tablet hoch und findet eure Expertengruppe.</p>


            <div class="generator-row">
              <button class="generate-button" @click="generateExpertGroups()">
                Expertengruppen erstellen
              </button>
            </div>
          </div>

          <div v-if="expertGroups.length" class="result">
            <h2>Expertengruppen</h2>

            <div class="expert-columns">
              <div v-for="topic in ['FDM', 'SLA', 'SLS']" :key="topic" class="expert-column">
                <h3 class="expert-topic">{{ topic }}</h3>
                <div
                  v-for="group in expertGroups.filter(g => g.topic === topic)"
                  :key="group.id"
                  class="group-card"
                >
                  <strong>{{ group.id }}</strong>
                  <span
                    v-for="member in group.members"
                    :key="member"
                    class="member-tag"
                    :class="{ selected: selectedMember === member }"
                  >
                    {{ member }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="expertGroups.length" class="generator-row" style="margin-top: 24px;">
          <button class="generate-button pdf-button" @click="downloadPDF">
            Als PDF downloaden
          </button>
          <button class="generate-button" @click="showExpertenOverlay = true">
            Deine Expertengruppe finden
          </button>
        </div>

        <div v-if="expertGroups.length" class="generator-row" style="margin-top: 16px;">
          <input v-model="weiterCode" class="code-input-small" placeholder="Code" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" />
          <button class="generate-button" @click="weiterCode === 'gmt59' && goToOverview()">
            Weiter
          </button>
        </div>

        <p v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </p>
      </div>
    </div>

    <div v-if="showExpertenOverlay" class="experten-backdrop" @click="showExpertenOverlay = false"></div>
    <div v-if="showExpertenOverlay" class="experten-overlay">
      <button class="experten-close" @click="showExpertenOverlay = false">✕ Schließen</button>

      <div v-if="expertenGroup" class="experten-content">
        <span class="experten-label">{{ expertenGroup.id }}</span>
      </div>

      <div v-else class="experten-content">
        <p>Wähle zuerst eine Rolle aus den Stammgruppen aus.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeDPrint',

  data() {
    return {
      gameCode: '',
      showBurger: false,
      showOverlay: false,
      studentCount: null,
      groups: [],
      expertGroups: [],
      instructionStep: 1,
      selectedMember: null,
      showExpertenOverlay: false,
      stammCode: '',
      weiterCode: '',
      errorMessage: ''
    }
  },

  watch: {
    showBurger(val) {
      if (val) {
        setTimeout(() => { this.showBurger = false }, 2000)
      }
    }
  },

  computed: {
    expertenGroup() {
      if (!this.selectedMember) return null
      return this.expertGroups.find(g => g.members.includes(this.selectedMember)) || null
    }
  },

  created() {
    if (this.$route.query.gruppenpuzzle) {
      this.showOverlay = true
    }
  },

  methods: {
    goToGame() {
      this.showBurger = false
      this.showOverlay = false
      const overlay = this.$el.querySelector('.overlay')
      const content = this.$el.querySelector('.overlay-content')
      if (overlay) overlay.scrollTop = 0
      if (content) content.scrollTop = 0
      this.$router.push('/game')
    },

    restart() {
      this.showBurger = false
      this.$router.push('/3dprint')
    },

    toggleMember(label) {
      this.selectedMember = this.selectedMember === label ? null : label
    },

    goToOverview() {
      this.showOverlay = false
      this.$router.push('/3dprint?overview=true')
    },

    startGame() {
      document.activeElement?.blur()
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      if (this.gameCode === 'gmt') {
        window.location.href = '/game'
      } else if (this.gameCode === 'uebersicht') {
        this.$router.push('/3dprint?overview=true')
      }
    },

    generateGroups() {
      this.errorMessage = ''
      this.groups = []
      this.expertGroups = []
      this.instructionStep = 1
      this.stammCode = ''

      if (!this.studentCount || this.studentCount < 3) {
        this.errorMessage = 'Bitte gib mindestens 3 Schülerinnen und Schüler ein.'
        return
      }

      const roles = ['FDM', 'SLA', 'SLS']
      const groupCount = Math.floor(this.studentCount / 3)
      const baseSize = Math.floor(this.studentCount / groupCount)
      let rest = this.studentCount % groupCount

      this.groups = Array.from({ length: groupCount }, (_, index) => {
        const size = baseSize + (rest > 0 ? 1 : 0)
        if (rest > 0) rest -= 1

        const rawRoles = Array.from({ length: size }, (_, i) => roles[i % roles.length])
        const roleCounts = rawRoles.reduce((acc, r) => ({ ...acc, [r]: (acc[r] || 0) + 1 }), {})
        const roleOccurrence = {}
        const members = rawRoles.map(role => {
          if (roleCounts[role] > 1) {
            roleOccurrence[role] = (roleOccurrence[role] || 0) + 1
            return { label: `${index + 1}-${role}-${roleOccurrence[role] === 1 ? 'A' : 'B'}`, role }
          }
          return { label: `${index + 1}-${role}`, role }
        })

        return {
          id: index + 1,
          size,
          members
        }
      })
    },

    async downloadPDF() {
      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(this.$refs.pdfContent, { scale: 2, backgroundColor: '#ffffff' })
      const imgData = canvas.toDataURL('image/png')

      const html = `<!DOCTYPE html><html><head><title>Gruppeneinteilung</title><style>body{margin:0;padding:20px}img{max-width:100%}@media print{body{padding:0}}</style></head><body><img src="${imgData}" style="width:100%"/></body></html>`
      const blob = new Blob([html], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      const win = window.open(url, '_blank')
      win.addEventListener('load', () => {
        win.print()
        URL.revokeObjectURL(url)
      })
    },

    generateExpertGroups() {
      const byRole = { FDM: [], SLA: [], SLS: [] }

      for (const group of this.groups) {
        for (const member of group.members) {
          byRole[member.role].push({ label: member.label, stamm: group.id })
        }
      }

      this.expertGroups = ['FDM', 'SLA', 'SLS'].flatMap(topic => {
        const allMembers = byRole[topic]
        const groupCount = Math.ceil(allMembers.length / 4)
        const baseSize = Math.floor(allMembers.length / groupCount)
        let rest = allMembers.length % groupCount

        // Interleave members from different Stammgruppen via round-robin
        const byStamm = {}
        for (const m of allMembers) {
          if (!byStamm[m.stamm]) byStamm[m.stamm] = []
          byStamm[m.stamm].push(m)
        }
        const queues = Object.values(byStamm)
        const interleaved = []
        while (interleaved.length < allMembers.length) {
          for (const q of queues) {
            if (q.length > 0) interleaved.push(q.shift())
          }
        }

        let offset = 0
        return Array.from({ length: groupCount }, (_, i) => {
          const size = baseSize + (rest > 0 ? 1 : 0)
          if (rest > 0) rest--
          const slice = interleaved.slice(offset, offset + size)
          offset += size
          return { id: `${topic}-${i + 1}`, topic, members: slice.map(m => m.label) }
        })
      })
    }
  }
}
</script>

<style scoped>
.page {
  position: fixed;
  inset: 0;
  overflow: hidden;
}

.menu {
  position: fixed;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
}

.burger-button {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 950;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  width: 44px;
  height: 44px;
  padding: 8px;

  background: #222;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.burger-button span {
  display: block;
  height: 2px;
  background: white;
  border-radius: 2px;
}

.burger-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  z-index: 940;

  display: flex;
  flex-direction: column;
  padding: 80px 32px 32px;
  gap: 16px;

  background: white;

  transform: translateX(100%);
  transition: transform 0.4s ease;
}

.burger-overlay.open {
  transform: translateX(0);
}

.burger-close {
  position: absolute;
  top: 24px;
  right: 24px;

  padding: 8px 12px;

  background: none;
  border: none;

  font-size: 22px;
  cursor: pointer;
  color: #222;
}

.burger-item {
  width: 100%;
  padding: 16px;

  text-align: center;
  text-decoration: none;

  background: #222;
  color: white;
  border: none;
  border-radius: 8px;

  font-size: 18px;
  cursor: pointer;
}

.burger-item:hover {
  opacity: 0.85;
}

.burger-item--secondary {
  background: transparent;
  color: #999;
  border: 2px solid #ddd;
}

.burger-backdrop {
  position: fixed;
  inset: 0;
  z-index: 930;
  background: rgba(0,0,0,0.2);
}

.start-overlay {
  position: fixed;
  inset: 0;
  z-index: 900;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;

  transition: transform 0.5s ease;
}

.start-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.start-row {
  display: flex;
  align-items: center;
  gap: 16px;
}


.code-input {
  width: 180px;
  padding: 14px 18px;

  font-size: 20px;
  color: #999;

  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
}

.code-input::placeholder {
  color: #bbb;
}

.code-input:focus {
  border-color: #999;
  color: #222;
}

.start-button {
  padding: 14px 28px;

  border: none;
  border-radius: 8px;

  background: #222;
  color: white;

  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.start-button:hover {
  opacity: 0.85;
}

.start-hint {
  font-size: 22px;
  color: #2563eb;
  text-align: center;
  margin: 0;
  max-width: 50%;
}

.menu-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
}

.menu-subtitle {
  font-size: 20px;
  font-weight: normal;
  color: #555;
  margin-bottom: 24px;
  text-align: center;
  max-width: 50%;
}

.button {
  width: 340px;
  padding: 16px;

  border-radius: 8px;

  text-align: center;
  text-decoration: none;

  background: #222;
  color: white;

  font-size: 18px;
}

.button:hover,
.group-button:hover {
  opacity: 0.85;
}

.overlay {
  position: fixed;
  inset: 0;

  transform: translateX(100%);
  transition: transform 0.5s ease;

  background: white;
  z-index: 1000;

  overflow-y: auto;
}

.overlay.open {
  transform: translateX(0);
}

.overlay-content {
  width: min(100%, 1000px);
  margin: 0 auto;
  padding: 32px;
}

.close-button,
.generate-button {
  padding: 8px 16px;

  border: none;
  border-radius: 8px;

  background: #222;
  color: white;

  font-size: 17px;
  cursor: pointer;
}

.back-to-game {
  display: inline-block;
  margin-bottom: 16px;
  text-decoration: none;
}

h1 {
  margin-top: 24px;
  font-size: 28px;
}

h2 {
  margin-top: 24px;
  font-size: 22px;
}

h3 {
  margin-top: 16px;
  font-size: 18px;
}

p {
  font-size: 17px;
  line-height: 1.5;
}

.generator {
  margin-top: 24px;
  padding: 16px;

  background: #f5f5f5;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 12px;
}

.generator-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.code-input-small {
  width: 160px;
  padding: 10px;
  font-size: 17px;
  color: #999;
  border: 1px solid #999;
  border-radius: 8px;
  outline: none;
}

.code-input-small::placeholder {
  color: #bbb;
}

.code-input-small:focus {
  border-color: #555;
  color: #222;
}

label {
  font-size: 17px;
  font-weight: bold;
}

input {
  width: 200px;
  padding: 10px;

  font-size: 17px;
  border: 1px solid #999;
  border-radius: 8px;
}

.expert-columns {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: 12px;
}

.expert-column {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.expert-topic {
  margin-top: 0;
  margin-bottom: 4px;
}

.group-list {
  margin-top: 12px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.group-card {
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  background: white;
  border-radius: 10px;

  font-size: 17px;
}

.group-size {
  font-size: 15px;
  color: #666;
}

.member-tag {
  padding: 3px 8px;

  background: #222;
  color: white;
  border-radius: 6px;

  font-size: 14px;
  font-family: monospace;

  cursor: pointer;
  user-select: none;
}

.member-tag.selected {
  background: #86efac;
  color: #14532d;
}

.instruction {
  margin-top: 16px;
  font-weight: bold;
}

.error-message {
  margin-top: 16px;
  color: #b91c1c;
  font-weight: bold;
}

.experten-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1999;
  background: rgba(0, 0, 0, 0.4);
}

.experten-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  z-index: 2000;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.experten-close {
  position: absolute;
  top: 24px;
  left: 24px;

  padding: 10px 16px;
  background: #222;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  cursor: pointer;
}

.experten-content {
  text-align: center;
}

.experten-label {
  font-size: 24vw;
  font-weight: bold;
  line-height: 1;
}
</style>