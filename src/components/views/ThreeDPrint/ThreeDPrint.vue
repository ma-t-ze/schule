<template>
  <div class="page">
    <div v-if="!$route.query.overview" class="start-overlay">
      <input
        v-model="gameCode"
        class="code-input"
        placeholder="Code"
        @keyup.enter="startGame"
      />
      <button class="start-button" @click="startGame">
        Start
      </button>
    </div>

    <button v-if="$route.query.overview" class="burger-button" @click="showBurger = true">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="burger-overlay" :class="{ open: showBurger }">
      <button class="burger-close" @click="showBurger = false">✕</button>
      <RouterLink to="/game" class="burger-item" @click="showBurger = false">Game</RouterLink>
      <button class="burger-item" @click="showBurger = false; showOverlay = true">Gruppenpuzzle</button>
      <button class="burger-item burger-item--secondary" @click="restart">Neu starten</button>
    </div>

    <div v-if="showBurger" class="burger-backdrop" @click="showBurger = false"></div>

    <div class="menu">
      <RouterLink to="/fdm" class="button">Schmelzschichtverfahren (FDM)</RouterLink>
      <RouterLink to="/sla" class="button">Lichthärtungsverfahren (SLA)</RouterLink>
      <RouterLink to="/sls" class="button">Laserverschmelzung von Pulver (SLS)</RouterLink>
      <RouterLink to="/results" class="button">Ergebnisse</RouterLink>
    </div>

    <div class="overlay" :class="{ open: showOverlay }">
      <div class="overlay-content">
        <button class="close-button" @click="showOverlay = false">
          Schließen
        </button>

        <h1>Gruppenpuzzle – 3D-Druckverfahren</h1>

        <p>
          Beim Gruppenpuzzle werdet ihr zunächst in Stammgruppen eingeteilt und
          bekommt je eine Expertenrolle. Dann wechselt ihr
          in eure Expertengruppen und erarbeitet dort euer Thema. Anschließend
          kehrt ihr in eure Stammgruppen zurück und erklärt euch gegenseitig
          eure Ergebnisse und beantwortet Transferfragen. 
        </p>

        <p>
          Ziel ist, dass jedes Gruppenmitglied am Ende alle Verfahren kennt.
        </p>

        <h2>Stammgruppen generieren</h2>

        <div class="generator">
          <label for="student-count">
            Anzahl der Schülerinnen und Schüler
          </label>

          <input id="student-count" v-model.number="studentCount" type="number" min="1" placeholder="z. B. 24" />

          <button class="generate-button" @click="generateGroups">
            generieren
          </button>
        </div>

        <div ref="pdfContent">
          <div v-if="groups.length" class="result">
            <h2>Stammgruppen</h2>

            <div class="group-list">
              <div v-for="group in groups" :key="group.id" class="group-card">
                <strong>Gruppe {{ group.id }}</strong>
                <span v-for="member in group.members" :key="member.label" class="member-tag">
                  {{ member.label }}
                </span>
              </div>
            </div>

            <p class="instruction">Geht nun wie folgt vor:</p>
            <p class="instruction">1. Findet euch in Gruppen dieser Größe zusammen.</p>

            <button v-if="instructionStep < 2" class="generate-button" @click="instructionStep = 2">
              Weiter
            </button>

            <template v-if="instructionStep >= 2">
              <p class="instruction">2. Notiert euch eure Rollenbezeichnung auf einen Zettel.</p>

              <button class="generate-button" @click="generateExpertGroups">
                Expertengruppen erstellen
              </button>
            </template>
          </div>

          <div v-if="expertGroups.length" class="result">
            <h2>Expertengruppen</h2>

            <div v-for="topic in ['FDM', 'SLA', 'SLS']" :key="topic">
              <h3>{{ topic }}</h3>
              <div class="group-list">
                <div
                  v-for="group in expertGroups.filter(g => g.topic === topic)"
                  :key="group.id"
                  class="group-card"
                >
                  <strong>{{ group.id }}</strong>
                  <span v-for="member in group.members" :key="member" class="member-tag">
                    {{ member }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button v-if="groups.length" class="generate-button pdf-button" @click="downloadPDF">
          Als PDF downloaden
        </button>

        <p v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </p>
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

  created() {
    if (this.$route.query.gruppenpuzzle) {
      this.showOverlay = true
    }
  },

  methods: {
    restart() {
      this.showBurger = false
      this.$router.push('/3dprint')
    },

    startGame() {
      if (this.gameCode === 'gmt') {
        this.$router.push('/game')
      } else if (this.gameCode === 'test') {
        this.$router.push('/3dprint?overview=true')
      }
    },

    generateGroups() {
      this.errorMessage = ''
      this.groups = []
      this.expertGroups = []
      this.instructionStep = 1

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
  gap: 16px;

  background: white;

  transition: transform 0.5s ease;
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
  padding: 48px;
}

.close-button,
.generate-button {
  padding: 12px 20px;

  border: none;
  border-radius: 8px;

  background: #222;
  color: white;

  font-size: 18px;
  cursor: pointer;
}

h1 {
  margin-top: 40px;
  font-size: 42px;
}

h2 {
  margin-top: 40px;
  font-size: 30px;
}

h3 {
  margin-top: 28px;
  font-size: 22px;
}

p {
  font-size: 22px;
  line-height: 1.5;
}

.generator {
  margin-top: 40px;
  padding: 24px;

  background: #f5f5f5;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

label {
  font-size: 22px;
  font-weight: bold;
}

input {
  width: 240px;
  padding: 14px;

  font-size: 22px;
  border: 1px solid #999;
  border-radius: 8px;
}

.group-list {
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

.group-card {
  padding: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  background: #f5f5f5;
  border-radius: 12px;

  font-size: 20px;
}

.member-tag {
  padding: 4px 10px;

  background: #222;
  color: white;
  border-radius: 6px;

  font-size: 16px;
  font-family: monospace;
}

.instruction {
  margin-top: 28px;
  font-weight: bold;
}

.error-message {
  margin-top: 24px;
  color: #b91c1c;
  font-weight: bold;
}
</style>