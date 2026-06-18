<template>
  <div class="page">
    <button class="group-button" @click="showOverlay = true">
      Gruppenpuzzle
    </button>

    <div class="menu">
      <RouterLink to="/game" class="button">Game</RouterLink>
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

        <h1>Gruppenpuzzle</h1>

        <p>
          Beim Gruppenpuzzle werdet ihr zunächst in Stammgruppen eingeteilt und
          bekommt je eine Expertenrolle. Dann wechselt ihr
          in eure Expertengruppen und erarbeitet dort euer Thema. Anschließend
          kehrt ihr in eure Stammgruppen zurück und erklärt euch gegenseitig
          eure Ergebnisse. 
        </p>

        <p>
          Ziel ist, dass jedes Gruppenmitglied am Ende alle Verfahren kennt.
        </p>

        <div class="generator">
          <label for="student-count">
            Anzahl der Schülerinnen und Schüler
          </label>

          <input id="student-count" v-model.number="studentCount" type="number" min="1" placeholder="z. B. 24" />

          <button class="generate-button" @click="generateGroups">
            generieren
          </button>
        </div>

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

          <p class="instruction">
            Findet euch in Gruppen dieser Größe zusammen und teilt die Rollen FDM, SLA und SLS unter euch auf. Bei
            4er-Gruppen darf eine Rolle doppelt vergeben werden.
          </p>

          <button class="generate-button" @click="generateExpertGroups">
            Expertengruppen erstellen
          </button>
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
      showOverlay: false,
      studentCount: null,
      groups: [],
      expertGroups: [],
      errorMessage: ''
    }
  },

  methods: {
    generateGroups() {
      this.errorMessage = ''
      this.groups = []
      this.expertGroups = []

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

.group-button {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 10;

  padding: 14px 22px;

  border: none;
  border-radius: 8px;

  background: #22c55e;
  color: white;

  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
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