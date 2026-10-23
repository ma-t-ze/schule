<script setup>
import Panel from 'primevue/panel'
import SchoolCalendar from './SchoolCalendar.vue'
import UpcomingNotes from './UpcomingNotes.vue'

const classes = [
  ['3BKGD1_1_MET', 'medientechnik'], ['1BFD1', '1bfd1'],
  ['3TGG12', '3tgg12'], ['3TGG2', '3tgg2']
]
const archive = [
  ['Kahoot Farbmischsysteme und Programme BKGD', 'bkgd-live-quiz'],
  ['Farbmischsysteme', 'farbmischsysteme'], ['Rally', 'rally'],
  ['FreeCreatures', 'free-creatures'], ['Gesetz der Nähe', 'chaos'],
  ['Gestaltgesetze', 'gestaltgesetze'], ['Variable Font', 'variablefont'],
  ['Paperbridge', 'bridgepage'], ['BKGD Plattform', 'bkgdpage'],
  ['Converse', 'conversepage'], ['3DPrint', '3dprint'],
  ['Prüfung Schulrecht und Schulorganisation', 'pruefung-schulrecht'],
  ['Programme im ersten Jahr Medientechnik', 'programme-medientechnik'],
  ['Hardwarekomponenten', 'hardwarekomponenten']
]
const exams = ['3BKGD1_1_MET', '3BKGD1_1_GRD', '3TGG12', '3TGG2', '1BFD1']
</script>

<template>
  <main class="school-home" aria-label="Schule – persönliche Startseite">
    <aside class="sidebar" aria-label="Unterricht und Organisation">
      <Panel header="Klassen 2025/26" toggleable collapsed>
        <nav class="link-list" aria-label="Klassen 2025/26">
          <RouterLink v-for="[label, name] in classes" :key="name" :to="{ name }">{{ label }}</RouterLink>
        </nav>
      </Panel>
      <Panel header="Archiv" toggleable collapsed>
        <nav class="link-list archive-links" aria-label="Archiv">
          <RouterLink v-for="[label, name] in archive" :key="name" :to="{ name }">{{ label }}</RouterLink>
        </nav>
      </Panel>
      <Panel v-for="title in ['Schuladministration', 'Stoffverteilungspläne', 'Verlaufspläne']" :key="title" :header="title" toggleable collapsed>
        <p class="empty-note">Noch keine Einträge.</p>
      </Panel>
    </aside>
    <Panel class="calendar-column" header="Kalender" toggleable collapsed>
      <SchoolCalendar />
    </Panel>
    <Panel class="exams-column" header="Klassenarbeiten" toggleable collapsed>
      <ul><li v-for="name in exams" :key="name">{{ name }}</li></ul>
      <UpcomingNotes />
    </Panel>
  </main>
</template>

<style scoped>
.school-home { background: #007C4A; box-sizing: border-box; min-height: 100vh; display: grid; align-content: start; grid-template-columns: minmax(230px, 1fr) minmax(0, 2.25fr) minmax(210px, 1fr); gap: 24px; width: 100%; margin: 0; padding: 40px 32px; color: #202622; font-family: 'Jost', sans-serif; }
.sidebar { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
.sidebar :deep(.p-panel), .calendar-column, .exams-column { background: #f1f2ef; border: 1px solid #e2e5df; border-radius: 10px; }
.school-home :deep(.p-panel-header) { padding: 20px; gap: 8px; }
.school-home :deep(.p-panel-title) { font: 500 21px 'Jost', sans-serif; }
.school-home :deep(.p-panel-content) { padding: 0 20px 20px; }
.link-list { display: flex; flex-direction: column; gap: 6px; }
.link-list a { padding: 10px 0; color: inherit; text-decoration: none; font-size: 17px; overflow-wrap: anywhere; }
.link-list a:hover { color: #176746; text-decoration: underline; text-underline-offset: 5px; }
.link-list a:focus-visible { outline: 2px solid #176746; outline-offset: 4px; }
.archive-links a { font-size: 17px; }
.calendar-column, .exams-column { min-width: 0; align-self: start; }
h1, h2 { font-size: 25px; font-weight: 500; margin: 0 0 24px; }
.exams-column ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 26px; font-size: 17px; overflow-wrap: anywhere; }
.empty-note { margin: 0; color: #647168; }
@media (max-width: 1150px) { .school-home { grid-template-columns: 240px minmax(0, 1fr); padding: 24px; } .exams-column { grid-column: 2; min-height: auto; } .sidebar { grid-row: span 2; } }
@media (max-width: 740px) { .school-home { display: flex; flex-direction: column; padding: 16px; gap: 16px; } .calendar-column { order: -1; min-height: auto; } .exams-column { min-height: auto; } .calendar-column, .exams-column { align-self: stretch; } }
</style>
