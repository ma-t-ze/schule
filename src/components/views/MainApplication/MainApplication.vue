<script setup>
import { ref } from 'vue'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import Popover from 'primevue/popover'
import SchoolCalendar from './SchoolCalendar.vue'
import UpcomingNotes from './UpcomingNotes.vue'
import PlansOverview from '../Stoffverteilungsplaene/PlansOverview.vue'

const isDev = import.meta.env.DEV
const calendarNotes = ref([])
const upcomingNotes = ref(null)
const emailCopyStatus = ref('')
async function copySchoolEmail() {
  try {
    await navigator.clipboard.writeText('heckel@chs.karlsruhe.de')
    emailCopyStatus.value = 'Kopiert.'
  } catch {
    emailCopyStatus.value = 'Bitte die Adresse markieren und mit ⌘ + C oder Strg + C kopieren.'
  }
}
const webuntisInfo = ref(null)
const m365Info = ref(null)
const neoInfo = ref(null)
const paedmlInfo = ref(null)
const teacherCodeInfo = ref(null)
const internalAdminInfo = ref(null)
const sickLeaveInfo = ref(null)
const repairInfo = ref(null)

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
      <Panel header="Klassen 2025/26" toggleable>
        <nav class="link-list" aria-label="Klassen 2025/26">
          <RouterLink v-for="[label, name] in classes" :key="name" :to="{ name }">{{ label }}</RouterLink>
        </nav>
      </Panel>
      <Panel header="Archiv" toggleable collapsed>
        <nav class="link-list archive-links" aria-label="Archiv">
          <RouterLink v-for="[label, name] in archive" :key="name" :to="{ name }">{{ label }}</RouterLink>
        </nav>
      </Panel>
      <Panel header="Schuladministration" toggleable collapsed>

        <div class="admin-link"><span class="school-email">heckel@chs.karlsruhe.de</span><Button label="Kopieren" size="small" text aria-label="Schul-E-Mail in die Zwischenablage kopieren" @click="copySchoolEmail" /><span role="status" class="copy-status">{{ emailCopyStatus }}</span></div>
        <div class="admin-link"><a href="https://webuntis.com/" target="_blank" rel="noopener noreferrer">WebUntis ↗</a><Button label="i" aria-label="Was ist WebUntis?" rounded outlined size="small" @click="webuntisInfo.toggle($event)" /></div>
        <div class="admin-link"><a href="https://m365.cloud.microsoft/apps/?fromcode=cmmiadtp424&amp;refOrigin=Google&amp;origindomain=Office&amp;auth=2" target="_blank" rel="noopener noreferrer">M365 ↗</a><Button label="i" aria-label="Was ist M365 an der CHS Karlsruhe?" rounded outlined size="small" @click="m365Info.toggle($event)" /></div>
        <div class="admin-link"><a href="https://carl-engler-schule-karlsruhe.de/intern/" target="_blank" rel="noopener noreferrer">Schulportal CES ↗</a></div>
        <div class="admin-link"><a href="https://neo.kultus-bw.de/neo/app/?04101746_BS" target="_blank" rel="noopener noreferrer">NEO CHS ↗</a><Button label="i" aria-label="Was sind NEO und ASV-BW?" rounded outlined size="small" @click="neoInfo.toggle($event)" /></div>
        <Popover ref="neoInfo"><div class="webuntis-info"><strong>NEO und ASV-BW</strong><p>ASV-BW ist die Schulverwaltungssoftware, die auf den dafür vorgesehenen Schulverwaltungsrechnern genutzt wird.</p><p>NEO ist dagegen die browserbasierte Anwendung zur Notenerfassung, auf die du als Lehrkraft auch von zu Hause zugreifen kannst.</p><p><strong>Wichtig:</strong> ASV-BW muss nicht auf jedem Schulrechner installiert sein. Normalerweise haben nur berechtigte Personen auf entsprechend eingerichteten Rechnern Zugriff.</p></div></Popover>
        <div class="admin-link"><span>paedML Kürzel mhe</span><Button label="i" aria-label="Was ist paedML?" rounded outlined size="small" @click="paedmlInfo.toggle($event)" /></div>
        <div class="admin-link"><span>Lehrerkürzel hec</span><Button label="i" aria-label="Information zum Lehrerkürzel hec" rounded outlined size="small" @click="teacherCodeInfo.toggle($event)" /></div>
        <Popover ref="teacherCodeInfo"><div class="webuntis-info"><strong>Lehrerkürzel hec</strong><p><strong>hec</strong> ist dein Lehrerkürzel und wird zum Beispiel in WebUntis verwendet.</p></div></Popover>
        <Popover ref="paedmlInfo"><div class="webuntis-info"><strong>Was ist paedML?</strong><p>paedML steht für „pädagogische Musterlösung“ und ist eine Lösung für schulische Computernetze. Sie unterstützt die Verwaltung von Benutzerkonten, Klassen und Schulgeräten. Lehrkräfte können damit je nach Einrichtung beispielsweise Dateien verteilen und den Internetzugang im Unterricht steuern.</p><p>Mit deinem Kürzel <strong>mhe</strong> meldest du dich an den Schulrechnern an.</p><a href="https://www.lmz-bw.de/netzwerkloesung/paedml-meine-schulplattform" target="_blank" rel="noopener noreferrer">Mehr beim Landesmedienzentrum ↗</a></div></Popover>
        <Popover ref="m365Info"><div class="webuntis-info"><strong>M365 · CHS Karlsruhe</strong><p>Microsoft 365 ist das System der CHS Karlsruhe.</p></div></Popover>
        <Popover ref="webuntisInfo"><div class="webuntis-info"><strong>Was ist WebUntis?</strong><p>WebUntis ist eine Online-Plattform für den Schulalltag. Sie zeigt Stunden- und Vertretungspläne. Je nach Ausstattung der Schule können Lehrkräfte dort auch das digitale Klassenbuch führen, Fehlzeiten erfassen und Unterrichtsinhalte oder Hausaufgaben dokumentieren.</p><a href="https://www.untis.at/produkte/webuntis/digitales-klassenbuch" target="_blank" rel="noopener noreferrer">Mehr bei Untis ↗</a></div></Popover>
        <div class="admin-link"><span>Interne Schulverwaltung CHS</span><Button label="i" aria-label="Information zur internen Schulverwaltung CHS" rounded outlined size="small" @click="internalAdminInfo.toggle($event)" /></div>
        <Popover ref="internalAdminInfo"><div class="webuntis-info"><strong>Interne Schulverwaltung CHS</strong><dl><dt>E-Mail</dt><dd>nachname@chs.karlsruhe.de</dd><dt>Server Schulverwaltung</dt><dd>Schulleitung (S:)</dd><dt>Server für eigene Dateien</dt><dd>Home (H:)</dd><dt>Server für Datentausch</dt><dd>Lehrernetz (L:)</dd></dl><p>Zugriff über CHS-Verwaltungsrechner.</p></div></Popover>
        <div class="admin-link"><span>Reparaturschein EDV</span><Button label="i" aria-label="Hinweise zum Reparaturschein EDV" rounded outlined size="small" @click="repairInfo.toggle($event)" /></div>
        <Popover ref="repairInfo"><div class="webuntis-info"><strong>Reparaturschein EDV</strong><p>Du findest den Reparaturschein in Microsoft Teams im Team <strong>Alle-Lehrer_Kib</strong>, im ausgeblendeten Kanal <strong>„Reperaturschein EDV“</strong>.</p><p>Markiere im Reparaturschein direkt die zuständige Person mit einer <strong>@-Erwähnung</strong>:</p><ul><li><strong>PädML:</strong> @Hasenhündl, @Mossa, @Akyol</li><li><strong>Lehrernetz / Verwaltungsnetz:</strong> @rsc</li><li><strong>iMacs:</strong> @Tögel, @Akyol</li><li><strong>iPads und Apple TV:</strong> @Baier</li><li><strong>Allgemeine Fragen / sonstige Themen:</strong> @Akyol</li></ul><p><strong>Bei iMacs bitte den Mac-Namen angeben.</strong> Du findest ihn auch über den Gast-Account in den Systemeinstellungen im Bereich „Info“.</p></div></Popover>
        <div class="admin-link"><span>Bis 7:30 Uhr im Sekretariat krankmelden</span><Button label="i" aria-label="Hinweise zur Krankmeldung" rounded outlined size="small" @click="sickLeaveInfo.toggle($event)" /></div>
        <Popover ref="sickLeaveInfo"><div class="webuntis-info"><strong>Krankmeldung</strong><p>Per E-Mail gerne auch schon früher krankmelden. Wenn möglich, Aufgaben an die Abteilungsleitung mitschicken, die die SuS bearbeiten könnten.</p><p>Bei TG-Beteiligung auch an der CES krankmelden.</p></div></Popover>
      </Panel>

      <Panel header="Verlaufspläne" toggleable collapsed>
        <nav class="link-list" aria-label="Verlaufspläne"><RouterLink to="/verlaufsplaene/3d-druck">3D Druck</RouterLink><RouterLink to="/verlaufsplaene/gesetz-der-geschlossenheit">Gesetz der Geschlossenheit</RouterLink></nav>
      </Panel>
      <Panel header="Prüfungen" toggleable collapsed>
        <nav class="link-list" aria-label="Prüfungsunterlagen">
          <a href="/pruefungen/Terminplan_D25_Pruefungen.pdf" target="_blank" rel="noopener noreferrer">Terminplan D25 – Prüfungen (PDF) ↗</a>
          <a href="/pruefungen/D25_Pruefungsbestandteile.pdf" target="_blank" rel="noopener noreferrer">D25 – Prüfungsbestandteile (PDF) ↗</a>
          <a href="/pruefungen/Meldung_Kolloquien_Paed-PaedPsy_D.pdf" target="_blank" rel="noopener noreferrer">Meldung Kolloquien Päd-PädPsy D (PDF) ↗</a>
          <a href="/pruefungen/Pruefungsplan_PAED_PAEDPSYCH_D25_mit_Raum.pdf" target="_blank" rel="noopener noreferrer">Prüfungsplan PÄD + PÄDPSYCH D25 mit Raum (PDF) ↗</a>
          <a href="/pruefungen/Aerztliches_Zeugnis.pdf" target="_blank" rel="noopener noreferrer">Ärztliches Zeugnis (PDF) ↗</a>
        </nav>
      </Panel>
      <Panel v-if="isDev" header="Sitzpläne" toggleable collapsed>
        <nav class="link-list" aria-label="Lokale Sitzpläne"><RouterLink to="/sitzplaene">Sitzpläne öffnen</RouterLink></nav>
      </Panel>
    </aside>
    <div class="center-column">
      <Panel class="calendar-column" header="Kalender" toggleable><SchoolCalendar :notes="calendarNotes" @edit-note="upcomingNotes?.edit($event)" @delete-note="upcomingNotes?.askDelete($event)" /></Panel>
      <Panel class="plans-panel" header="Stoffverteilungspläne" toggleable collapsed><PlansOverview /></Panel>
    </div>
    <Panel class="exams-column" header="Klassenarbeiten" toggleable>
      <ul><li v-for="name in exams" :key="name">{{ name }}</li></ul>
      <UpcomingNotes ref="upcomingNotes" @change="calendarNotes = $event" />
    </Panel>
  </main>
</template>

<style scoped>
.school-home { background: #ffffff; box-sizing: border-box; min-height: 100vh; display: grid; align-content: start; grid-template-columns: minmax(230px, 1fr) minmax(0, 2.25fr) minmax(210px, 1fr); gap: 24px; width: 100%; margin: 0; padding: 40px 32px; color: #202622; font-family: 'Jost', sans-serif; }
.center-column > .p-panel { align-self: stretch; width: 100%; box-sizing: border-box; }
.center-column { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
.plans-panel { min-width: 0; background: #f1f2ef; }
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
.calendar-column :deep(.p-panel-content-container), .calendar-column :deep(.p-panel-content) { min-width: 0; max-width: 100%; box-sizing: border-box; }
.calendar-column, .exams-column { min-width: 0; align-self: start; }
h1, h2 { font-size: 25px; font-weight: 500; margin: 0 0 24px; }
.exams-column ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 26px; font-size: 17px; overflow-wrap: anywhere; }
.admin-link + .admin-link { margin-top: 12px; }
.school-email { user-select: text; overflow-wrap: anywhere; min-width: 0; font-size: 17px; }
.copy-status { font-size: 13px; color: #526257; }
.admin-link { flex-wrap: wrap; display: flex; align-items: center; gap: 12px; }
.admin-link a { color: inherit; font-size: 17px; text-underline-offset: 4px; }
.webuntis-info { max-width: min(320px, calc(100vw - 64px)); font-size: 15px; line-height: 1.5; }
.empty-note { margin: 0; color: #647168; }
@media (max-width: 1150px) { .school-home { grid-template-columns: 240px minmax(0, 1fr); padding: 24px; } .exams-column { grid-column: 2; min-height: auto; } .sidebar { grid-row: span 2; } }
@media (max-width: 740px) { .school-home { display: flex; flex-direction: column; padding: 16px; gap: 16px; } .center-column { order: -1; } .calendar-column { min-height: auto; } .exams-column { min-height: auto; } .calendar-column, .exams-column { align-self: stretch; } }
</style>
