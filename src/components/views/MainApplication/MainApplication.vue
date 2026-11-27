<script setup>
import { computed, nextTick, onActivated, onMounted, ref } from 'vue'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import Popover from 'primevue/popover'
import Toolbar from 'primevue/toolbar'
import SelectButton from 'primevue/selectbutton'
import Dialog from 'primevue/dialog'
import AdminPdfList from './AdminPdfList.vue'
import { PhBell } from '@phosphor-icons/vue'
import { classServiceUrls } from './classServiceUrls'
import SchoolCalendar from './SchoolCalendar.vue'
import UpcomingNotes from './UpcomingNotes.vue'
import ExamEntry from './ExamEntry.vue'
import ExamAccommodations from './ExamAccommodations.vue'
import { examDateLabel } from './classExamEvents'
import { schoolYearPlanUrl } from './schoolYearEvents'

const calendarFocus = ref(new Date())
const calendarView = ref('week')
const calendarTitle = computed(() => {
  const date = calendarFocus.value
  if (calendarView.value === 'month') return date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  monday.setDate(monday.getDate() - (monday.getDay() + 6) % 7)
  const sunday = new Date(monday); sunday.setDate(sunday.getDate() + 6)
  return `${monday.toLocaleDateString('de-DE')} – ${sunday.toLocaleDateString('de-DE')}`
})
function navigateCalendar(direction) {
  const date = calendarFocus.value
  if (calendarView.value === 'month') calendarFocus.value = new Date(date.getFullYear(), date.getMonth() + direction, 1)
  else { const next = new Date(date); next.setDate(next.getDate() + direction * 7); calendarFocus.value = next }
}
const calendarViews = [{ label: 'Woche', value: 'week' }, { label: 'Monat', value: 'month' }]
const classesCollapsed = ref(true)
const calendarCollapsed = ref(false)
onActivated(() => { classesCollapsed.value = true; calendarCollapsed.value = false })
const openDocuments = ref([])
function documentId(url) {
  return `document-${encodeURIComponent(url)}`
}
async function openDocument(event) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  const link = event.target.closest('a[href]')
  if (!link || link.hasAttribute('download')) return
  const url = new URL(link.href, window.location.href)
  if (url.origin !== window.location.origin || !(/^\/(sitzplaene|designvorlagen|pruefungen|lehrplaene|korrekturzeichen|notenschluessel)(\/|$)/.test(url.pathname) || url.pathname.endsWith('/school-admin-materials.php'))) return
  event.preventDefault()
  event.stopPropagation()
  const src = url.pathname + url.search + url.hash
  if (!openDocuments.value.some(document => document.src === src)) {
    openDocuments.value.push({ src, title: link.textContent.trim().replace(/\s*↗$/, '') })
  }
  await nextTick()
  document.getElementById(documentId(src))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function closeDocument(src) {
  openDocuments.value = openDocuments.value.filter(document => document.src !== src)
}

const isDev = import.meta.env.DEV
const calendarNotes = ref([])
const notesReady = ref(false)
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
const adminMaterialsUrl = import.meta.env.DEV ? '/site-auth/school-admin-materials.php' : '/school-admin-materials.php'
const adminMaterials = ref([])
const adminMaterialsError = ref('')
const adminMaterialsBusy = ref(false)
const adminDeleteTarget = ref(null)
let adminMaterialsCsrf = ''
let adminSectionsSupported = false
let adminFilesSupported = false
async function loadAdminMaterials() {
  try {
    const response = await fetch(adminMaterialsUrl, { credentials: 'include', cache: 'no-store' })
    const data = await response.json()
    if (!response.ok || !Array.isArray(data.items)) throw new Error(data.error || 'PDFs konnten nicht geladen werden.')
    adminMaterials.value = data.items.map(item => ({ ...item, section: item.section || 'schuladministration' }))
    adminMaterialsCsrf = data.csrf || ''
    adminSectionsSupported = data.sections_supported === true
    adminFilesSupported = data.files_supported === true
    adminMaterialsError.value = ''
  } catch (error) { adminMaterialsError.value = error.message || 'Dateien konnten nicht geladen werden.' }
}
async function uploadAdminPdf(event, section) {
  const input = event.target
  const file = input.files?.[0]
  if (!file) return
  if (!file.size || file.size > 5 * 1024 * 1024) { adminMaterialsError.value = 'Bitte eine Datei mit höchstens 5 MB auswählen.'; input.value = ''; return }
  adminMaterialsBusy.value = true
  adminMaterialsError.value = ''
  try {
    if (!adminMaterialsCsrf) await loadAdminMaterials()
    if (!adminMaterialsCsrf) throw new Error('Bitte erneut anmelden und die Seite neu laden.')
    if (section !== 'schuladministration' && !adminSectionsSupported) throw new Error('Für diesen Bereich muss die PDF-Verwaltung auf dem Server aktualisiert werden.')
    if (!adminFilesSupported) throw new Error('Für Datei-Uploads muss die Verwaltung auf dem Server aktualisiert werden.')
    const body = new FormData(); body.append('file', file); body.append('section', section)
    const response = await fetch(adminMaterialsUrl, { method: 'POST', credentials: 'include', headers: { 'X-CSRF-Token': adminMaterialsCsrf }, body })
    const result = await response.json()
    if (!response.ok) throw new Error(result.error || 'Die Datei konnte nicht hochgeladen werden.')
    if (!result.item || !result.item.id) throw new Error('Der Server hat keine gültige Bestätigung zurückgegeben. Bitte die Seite neu laden.')
    adminMaterials.value.push({ ...result.item, section: result.item.section || 'schuladministration' })
  } catch (error) { adminMaterialsError.value = error.message || 'Die Datei konnte nicht hochgeladen werden.' }
  finally { adminMaterialsBusy.value = false; input.value = '' }
}
async function deleteAdminPdf() {
  if (!adminDeleteTarget.value || adminMaterialsBusy.value) return
  adminMaterialsBusy.value = true
  adminMaterialsError.value = ''
  try {
    const body = new FormData(); body.append('action', 'delete'); body.append('id', String(adminDeleteTarget.value.id))
    const response = await fetch(adminMaterialsUrl, { method: 'POST', credentials: 'include', headers: { 'X-CSRF-Token': adminMaterialsCsrf }, body })
    const result = await response.json()
    if (!response.ok) throw new Error(result.error || 'Die Datei konnte nicht gelöscht werden.')
    const src = `${adminMaterialsUrl}?id=${adminDeleteTarget.value.id}`
    closeDocument(src)
    adminMaterials.value = adminMaterials.value.filter(item => item.id !== adminDeleteTarget.value.id)
    adminDeleteTarget.value = null
  } catch (error) { adminMaterialsError.value = error.message || 'Die Datei konnte nicht gelöscht werden.' }
  finally { adminMaterialsBusy.value = false }
}
onMounted(loadAdminMaterials)
const sickLeaveInfo = ref(null)
const repairInfo = ref(null)
const sabineHeitmannInfo = ref(null)

const classKeys = ['2026-27-3bkgd1-1-met', '2026-27-3bkgd1-1-grd', '2026-27-3tgg1-2', '2026-27-3tgg2', '2026-27-1bfd1-bpk']
const exams = ['3BKGD1/1 MET', '3BKGD1_1_GRD', '3TGG1/2', '3TGG2', '1BFD1 BPK']
const serviceGroups = [{ key: 'teams', label: 'Teams' }, { key: 'figma', label: 'Figma' }]
const metDatesOpen = ref(false)
const metDates = 4
const grdDatesOpen = ref(false)
const grdDates = 4
const tgg2DatesOpen = ref(false)
const tgg2Dates = 2
const bpkDatesOpen = ref(false)
const bpkDates = 2
const tgg12DatesOpen = ref(false)
const tgg12Dates = 5
</script>

<template>
  <main class="school-home" aria-label="Schule – persönliche Startseite">
    <Toolbar class="class-services" aria-label="Teams und Figma nach Klassen">
      <template #start>
        <nav v-for="group in serviceGroups" :key="group.key" class="service-group" :aria-label="`${group.label} – Klassenlinks`">
          <h2>{{ group.label }}</h2>
          <div class="service-links">
            <template v-for="(name, index) in exams" :key="classKeys[index]">
              <a v-if="classServiceUrls[group.key][classKeys[index]]" :href="classServiceUrls[group.key][classKeys[index]]" :title="`${group.label} · ${name}`" target="_blank" rel="noopener noreferrer">{{ name }}</a>
              <span v-else class="service-unavailable" title="Link noch nicht hinterlegt">{{ name }}</span>
            </template>
            <a v-if="group.key === 'figma'" :href="classServiceUrls.figma.export" target="_blank" rel="noopener noreferrer">Export</a>
          </div>
        </nav>
      </template>
    </Toolbar>
    <aside class="sidebar" aria-label="Unterricht und Organisation" @click.capture="openDocument">
      <Panel v-model:collapsed="classesCollapsed" header="Klassen 2026/27" toggleable>
        <nav class="link-list class-list" aria-label="Klassen 2026/27">
          <RouterLink :to="{ name: 'medientechnik' }">3BKGD1/1 MET</RouterLink>
          <span class="class-unavailable" title="Für diese Klasse ist noch keine Schülerseite vorhanden">3BKGD1_1_GRD</span>
          <RouterLink :to="{ name: '1bfd1' }">1BFD1 BPK</RouterLink>
          <RouterLink :to="{ name: '3tgg12' }">3TGG1/2</RouterLink>
          <RouterLink :to="{ name: '3tgg2' }">3TGG2</RouterLink>
        </nav>
      </Panel>
      <Panel header="Unterricht planen" toggleable collapsed>
        <nav class="link-list" aria-label="Unterricht planen">
          <RouterLink :to="{ name: 'unterrichtsbaukasten' }">Unterricht planen</RouterLink>
          <RouterLink :to="{ name: 'arbeitsauftraege-planen' }">Arbeitsaufträge planen</RouterLink>
        </nav>
      </Panel>
      <Panel header="Notengebung" toggleable collapsed>
        <nav class="link-list" aria-label="Notengebung">
          <RouterLink :to="{ name: 'notengebung' }">Klassenlisten</RouterLink>
          <a href="/notenschluessel/Notenschluessel_30p.pdf" target="_blank" rel="noopener noreferrer">Notenschlüssel 30p</a>
          <a href="/notenschluessel/Notenschluessel_40p.pdf" target="_blank" rel="noopener noreferrer">Notenschlüssel 40p</a>
          <div class="correction-link">
            <a href="/korrekturzeichen/Korrekturzeichen.png" target="_blank" rel="noopener noreferrer">Korrekturzeichen</a>
            <a class="correction-download" href="/korrekturzeichen/Korrekturzeichen.png" download="Korrekturzeichen.png" aria-label="Korrekturzeichen herunterladen" title="Korrekturzeichen herunterladen"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M4 17v3h16v-3" /></svg></a>
          </div>
        </nav>
      </Panel>
      <Panel header="Administration" toggleable collapsed class="administration-panel">
      <Panel header="Schuladministration" toggleable collapsed class="class-subpanel">
        <div class="admin-link"><a :href="schoolYearPlanUrl" target="_blank" rel="noopener noreferrer">Jahresplan CHS 2026/27 (PDF) ↗</a></div>
        <div class="admin-link"><a href="/schuladministration/Pausenaufsichten_2026-10-12.pdf" target="_blank" rel="noopener noreferrer">Pausenaufsichten (PDF) ↗</a></div>
        <div class="admin-link"><span>Sabine Heitmann</span><Button label="i" aria-label="Kontaktdaten von Sabine Heitmann" rounded outlined size="small" @click="sabineHeitmannInfo.toggle($event)" /></div>
        <Popover ref="sabineHeitmannInfo">
          <div class="webuntis-info">
            <strong>Sabine Heitmann</strong>
            <p>Carl-Hofer-Schule<br />Adlerstraße 29<br />76133 Karlsruhe<br />Raum 413</p>
            <dl class="contact-details">
              <dt>Telefon</dt><dd><a href="tel:+497211334869">0721 133-4869</a></dd>
              <dt>Mobil</dt><dd><a href="tel:+4915735642863">01573 5642863</a></dd>
              <dt>E-Mail</dt><dd><a href="mailto:sabine.heitmann@af-ka.de">sabine.heitmann@af-ka.de</a></dd>
              <dt>Im Notfall</dt><dd><a href="tel:+49721972460">0721 97246-0</a></dd>
            </dl>
          </div>
        </Popover>

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
        <AdminPdfList section="schuladministration" :items="adminMaterials" :endpoint="adminMaterialsUrl" :busy="adminMaterialsBusy" :error="adminMaterialsError" @upload="uploadAdminPdf" @delete="adminDeleteTarget = $event" />
      </Panel>

      <Panel header="Schulwiki" toggleable collapsed class="class-subpanel">
        <nav class="link-list" aria-label="Schulwiki">
          <RouterLink :to="{ name: 'schulwiki-krank-bei-klassenarbeiten' }">Krank bei Klassenarbeiten</RouterLink>
        </nav>
        <AdminPdfList section="schulwiki" :items="adminMaterials" :endpoint="adminMaterialsUrl" :busy="adminMaterialsBusy" :error="adminMaterialsError" @upload="uploadAdminPdf" @delete="adminDeleteTarget = $event" />
      </Panel>
      <Panel header="Prüfungen" toggleable collapsed class="class-subpanel">
        <nav class="link-list" aria-label="Prüfungsunterlagen">
          <RouterLink :to="{ name: 'pruefung-schulrecht' }">Prüfung Schulrecht und Schulorganisation</RouterLink>
          <RouterLink :to="{ name: 'pruefung-paedagogik-psychologie' }">Prüfung Pädagogik und Pädagogische Psychologie</RouterLink>
          <a href="/pruefungen/Beratungsbesuche_Ausbildungsgespraeche.pdf" target="_blank" rel="noopener noreferrer">Beratungsbesuche und verbindliche Ausbildungsgespräche (PDF) ↗</a>
          <a href="/pruefungen/Terminplan_D25_Pruefungen.pdf" target="_blank" rel="noopener noreferrer">Terminplan D25 – Prüfungen (PDF) ↗</a>
          <a href="/pruefungen/D25_Pruefungsbestandteile.pdf" target="_blank" rel="noopener noreferrer">D25 – Prüfungsbestandteile (PDF) ↗</a>
          <a href="/pruefungen/Pruefungsplan_PAED_PAEDPSYCH_D25_mit_Raum.pdf" target="_blank" rel="noopener noreferrer">Prüfungsplan PÄD + PÄDPSYCH D25 mit Raum (PDF) ↗</a>
          <a href="/pruefungen/Aerztliches_Zeugnis.pdf" target="_blank" rel="noopener noreferrer">Ärztliches Zeugnis (PDF) ↗</a>
          <a href="/pruefungen/Klassen_UBs.jpg" target="_blank" rel="noopener noreferrer">Klassenauswahl für die unterrichtspraktischen Prüfungen (JPG) ↗</a>
        </nav>
        <AdminPdfList section="pruefungen" :items="adminMaterials" :endpoint="adminMaterialsUrl" :busy="adminMaterialsBusy" :error="adminMaterialsError" @upload="uploadAdminPdf" @delete="adminDeleteTarget = $event" />
      </Panel>
      <Dialog :visible="!!adminDeleteTarget" modal header="Datei löschen" @update:visible="value => { if (!value) adminDeleteTarget = null }"><p>„{{ adminDeleteTarget?.title }}“ wirklich löschen?</p><p v-if="adminMaterialsError" role="alert">{{ adminMaterialsError }}</p><template #footer><Button label="Abbrechen" text :disabled="adminMaterialsBusy" @click="adminDeleteTarget = null" /><Button label="Löschen" severity="danger" :loading="adminMaterialsBusy" @click="deleteAdminPdf" /></template></Dialog>
      </Panel>
      <Panel header="Archiv" toggleable collapsed>
        <nav class="link-list archive-links" aria-label="Archiv">
          <Panel header="BKGD" toggleable collapsed class="class-subpanel">
            <nav class="link-list" aria-label="BKGD">
              <RouterLink :to="{ name: 'conversepage' }">Converse</RouterLink>
              <RouterLink :to="{ name: 'bkgdpage' }">BKGD Plattform</RouterLink>
              <RouterLink :to="{ name: 'variablefont' }">Variable Font</RouterLink>
            </nav>
          </Panel>
          <Panel header="GMT" toggleable collapsed class="class-subpanel">
            <nav class="link-list" aria-label="GMT">
              <RouterLink :to="{ name: '3dprint' }">3DPrint</RouterLink>
              <RouterLink :to="{ name: 'bridgepage' }">Paperbridge</RouterLink>
              <RouterLink :to="{ name: 'chaos' }">Gesetz der Nähe</RouterLink>
            </nav>
          </Panel>
          <Panel header="Privat" toggleable collapsed class="class-subpanel">
            <nav class="link-list" aria-label="Privat"><RouterLink :to="{ name: 'rally' }">Rally</RouterLink><RouterLink :to="{ name: 'free-creatures' }">FreeCreatures</RouterLink></nav>
          </Panel>
        </nav>
      </Panel>
      <RouterLink :to="{ name: 'style-kit' }" class="sidebar-link">Style-Kit</RouterLink>
    </aside>
    <div class="center-column">
      <Panel v-model:collapsed="calendarCollapsed" class="calendar-column" header="Kalender" toggleable>
        <template #header><div class="calendar-header"><span class="calendar-title">Kalender</span><div class="calendar-view-controls" @click.stop @keydown.stop><SelectButton v-model="calendarView" :options="calendarViews" option-label="label" option-value="value" :allow-empty="false" aria-label="Kalenderansicht" /><Button v-if="calendarView === 'week'" class="break-alarm-link" as="a" href="/pausenalarm" target="_blank" rel="noopener noreferrer" aria-label="Pausenalarm aktivieren" title="Pausenalarm aktivieren" size="small"><PhBell :size="19" aria-hidden="true" /></Button><Button label="Heute" text size="small" @click="calendarFocus = new Date()" /><div class="calendar-period"><Button label="‹" :aria-label="calendarView === 'week' ? 'Vorherige Woche' : 'Vorheriger Monat'" text @click="navigateCalendar(-1)" /><span aria-live="polite">{{ calendarTitle }}</span><Button label="›" :aria-label="calendarView === 'week' ? 'Nächste Woche' : 'Nächster Monat'" text @click="navigateCalendar(1)" /></div></div></div></template>
        <SchoolCalendar :notes="calendarNotes" :view="calendarView" :focus="calendarFocus" @edit-note="upcomingNotes?.edit($event)" @delete-note="upcomingNotes?.askDelete($event)" />
      </Panel>
      <Panel v-for="document in openDocuments" :id="documentId(document.src)" :key="document.src" class="document-panel" :header="document.title">
        <template #icons>
          <Button as="a" :href="document.src" target="_blank" rel="noopener noreferrer" text rounded class="document-open-tab" :aria-label="`${document.title} in neuem Tab öffnen`" title="In neuem Tab öffnen">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14 3h7v7M21 3l-10 10M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
            </svg>
          </Button>
          <Button label="×" text rounded class="document-close" :aria-label="`${document.title} schließen`" @click="closeDocument(document.src)" />
        </template>
        <iframe :src="document.src" :title="document.title" class="document-preview" />
      </Panel>
    </div>
    <Panel class="exams-column" header="Klassenarbeiten" toggleable>
      <ul><li v-for="(name, classIndex) in exams" :key="name">
        <template v-if="name === '3BKGD1/1 MET'">
          <div class="exam-heading"><div class="class-title"><span>{{ name }} (0/4)</span><ExamAccommodations :class-key="classKeys[classIndex]" :class-name="name" /></div><Button :label="metDatesOpen ? '−' : '+'" text rounded size="small" :aria-expanded="metDatesOpen" aria-controls="met-exam-dates" aria-label="Klassenarbeitstermine für 3BKGD1/1 MET" @click="metDatesOpen = !metDatesOpen" /></div>
          <ol v-if="metDatesOpen" id="met-exam-dates" class="exam-dates"><li v-for="number in metDates" :key="number"><ExamEntry :disabled="!notesReady" :label="`${number}. Klassenarbeit: ${examDateLabel(calendarNotes, `2026-27-3bkgd1-1-met-${number}`)}`" :edit-label="`${number}. Klassenarbeit in 3bkgd1-1-met bearbeiten`" :exam-key="`2026-27-3bkgd1-1-met-${number}`" :appointment="calendarNotes.find(item => item.exam_key === `2026-27-3bkgd1-1-met-${number}`)" @edit="upcomingNotes?.editExam(`2026-27-3bkgd1-1-met-${number}`)" /></li></ol>
        </template>
        <template v-else-if="name === '3BKGD1_1_GRD'">
          <div class="exam-heading"><div class="class-title"><span>{{ name }} (0/4)</span><ExamAccommodations :class-key="classKeys[classIndex]" :class-name="name" /></div><Button :label="grdDatesOpen ? '−' : '+'" text rounded size="small" :aria-expanded="grdDatesOpen" aria-controls="grd-exam-dates" aria-label="Klassenarbeitstermine für 3BKGD1_1_GRD" @click="grdDatesOpen = !grdDatesOpen" /></div>
          <ol v-if="grdDatesOpen" id="grd-exam-dates" class="exam-dates"><li v-for="number in grdDates" :key="number"><ExamEntry :disabled="!notesReady" :label="`${number}. Klassenarbeit: ${examDateLabel(calendarNotes, `2026-27-3bkgd1-1-grd-${number}`)}`" :edit-label="`${number}. Klassenarbeit in 3bkgd1-1-grd bearbeiten`" :exam-key="`2026-27-3bkgd1-1-grd-${number}`" :appointment="calendarNotes.find(item => item.exam_key === `2026-27-3bkgd1-1-grd-${number}`)" @edit="upcomingNotes?.editExam(`2026-27-3bkgd1-1-grd-${number}`)" /></li></ol>
        </template>
        <template v-else-if="name === '3TGG1/2'">
          <div class="exam-heading"><div class="class-title"><span>{{ name }} (0/5)</span><ExamAccommodations :class-key="classKeys[classIndex]" :class-name="name" /></div><Button :label="tgg12DatesOpen ? '−' : '+'" text rounded size="small" :aria-expanded="tgg12DatesOpen" aria-controls="tgg12-exam-dates" aria-label="Klassenarbeitstermine für 3TGG1/2" @click="tgg12DatesOpen = !tgg12DatesOpen" /></div>
          <ol v-if="tgg12DatesOpen" id="tgg12-exam-dates" class="exam-dates"><li v-for="number in tgg12Dates" :key="number"><ExamEntry :disabled="!notesReady" :label="`${number}. Klassenarbeit: ${examDateLabel(calendarNotes, `2026-27-3tgg1-2-${number}`)}`" :edit-label="`${number}. Klassenarbeit in 3tgg1-2 bearbeiten`" :exam-key="`2026-27-3tgg1-2-${number}`" :appointment="calendarNotes.find(item => item.exam_key === `2026-27-3tgg1-2-${number}`)" @edit="upcomingNotes?.editExam(`2026-27-3tgg1-2-${number}`)" /></li></ol>
        </template>
        <template v-else-if="name === '3TGG2'">
          <div class="exam-heading"><div class="class-title"><span>{{ name }} (0/2)</span><ExamAccommodations :class-key="classKeys[classIndex]" :class-name="name" /></div><Button :label="tgg2DatesOpen ? '−' : '+'" text rounded size="small" :aria-expanded="tgg2DatesOpen" aria-controls="tgg2-exam-dates" aria-label="Klassenarbeitstermine für 3TGG2" @click="tgg2DatesOpen = !tgg2DatesOpen" /></div>
          <ol v-if="tgg2DatesOpen" id="tgg2-exam-dates" class="exam-dates"><li v-for="number in tgg2Dates" :key="number"><ExamEntry :disabled="!notesReady" :label="`${number}. Klassenarbeit: ${examDateLabel(calendarNotes, `2026-27-3tgg2-${number}`)}`" :edit-label="`${number}. Klassenarbeit in 3tgg2 bearbeiten`" :exam-key="`2026-27-3tgg2-${number}`" :appointment="calendarNotes.find(item => item.exam_key === `2026-27-3tgg2-${number}`)" @edit="upcomingNotes?.editExam(`2026-27-3tgg2-${number}`)" /></li></ol>
        </template>
        <template v-else-if="name === '1BFD1 BPK'">
          <div class="exam-heading"><div class="class-title"><span>{{ name }} (0/2)</span><ExamAccommodations :class-key="classKeys[classIndex]" :class-name="name" /></div><Button :label="bpkDatesOpen ? '−' : '+'" text rounded size="small" :aria-expanded="bpkDatesOpen" aria-controls="bpk-exam-dates" aria-label="Klassenarbeitstermine für 1BFD1 BPK" @click="bpkDatesOpen = !bpkDatesOpen" /></div>
          <ol v-if="bpkDatesOpen" id="bpk-exam-dates" class="exam-dates"><li v-for="number in bpkDates" :key="number"><ExamEntry :disabled="!notesReady" :label="`${number}. Klassenarbeit: ${examDateLabel(calendarNotes, `2026-27-1bfd1-bpk-${number}`)}`" :edit-label="`${number}. Klassenarbeit in 1BFD1 BPK bearbeiten`" :exam-key="`2026-27-1bfd1-bpk-${number}`" :appointment="calendarNotes.find(item => item.exam_key === `2026-27-1bfd1-bpk-${number}`)" @edit="upcomingNotes?.editExam(`2026-27-1bfd1-bpk-${number}`)" /></li></ol>
        </template>
        <template v-else><div class="class-title"><span>{{ name }}</span><ExamAccommodations :class-key="classKeys[classIndex]" :class-name="name" /></div></template>
      </li></ul>
      <UpcomingNotes ref="upcomingNotes" @change="calendarNotes = $event" @ready="notesReady = $event" />
    </Panel>
  </main>
</template>

<style scoped>
.school-home { background: var(--school-background); box-sizing: border-box; min-height: 100vh; display: grid; align-content: start; grid-template-columns: minmax(185px, 0.78fr) minmax(0, 2.47fr) minmax(210px, 1fr); gap: 24px; width: 100%; margin: 0; padding: 40px 32px; color: var(--school-text); font-family: 'Jost', sans-serif; }
.class-services { grid-column: 1 / -1; background: var(--school-surface); border: 1px solid var(--school-border); border-radius: var(--school-panel-radius); padding: 10px 16px; }
.class-services :deep(.p-toolbar-start) { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: start; gap: 24px; width: 100%; min-width: 0; }
.service-group { min-width: 0; }
.service-group + .service-group { border-left: 1px solid var(--school-border); padding-left: 24px; }
.service-group h2 { font-size: 17px; font-weight: 500; margin: 0 0 4px; }
.service-links { display: flex; flex-wrap: wrap; gap: 8px 19.2px; }
.service-links a, .service-unavailable { display: inline-block; padding: 4px 0; font-size: 15px; line-height: 1.5; }
.service-links a { color: var(--school-primary); text-decoration: none; }
.service-links a:hover { text-decoration: underline; text-underline-offset: 4px; }
.service-links a:focus-visible { outline: 2px solid var(--school-primary); outline-offset: 3px; }
.service-unavailable { color: #84918b; }
@media (max-width: 740px) {
  .class-services { order: -2; }
  .class-services :deep(.p-toolbar-start) { grid-template-columns: 1fr; gap: 16px; }
  .service-group + .service-group { border-left: 0; padding-left: 0; border-top: 1px solid var(--school-border); padding-top: 16px; }
}
.center-column > .p-panel { align-self: stretch; width: 100%; box-sizing: border-box; }
.center-column { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
.document-panel { min-width: 0; scroll-margin-top: 20px; background: var(--school-surface); }
.document-panel :deep(.p-panel-title) { overflow-wrap: anywhere; }
.document-close { font-size: 28px; flex-shrink: 0; }
.document-open-tab { flex-shrink: 0; width: 2.5rem; height: 2.5rem; }
.document-preview { display: block; width: 100%; height: 80vh; min-height: 480px; border: 1px solid #e2e5df; border-radius: 4px; background: white; }
.plans-panel { min-width: 0; background: var(--school-surface); }
.sidebar { align-self: start; display: flex; flex-direction: column; gap: 0; min-width: 0; padding: 4px 8px; background: var(--school-surface); border: 1px solid var(--school-border); border-radius: var(--school-panel-radius); }
.sidebar :deep(.p-panel-header) { padding: 10px 12px; gap: 6px; }
.sidebar :deep(.p-panel-title) { font-size: 17px; }
.sidebar :deep(.p-panel-content) { padding: 0 12px 12px; }
.sidebar :deep(.p-panel-toggle-button.p-button) { width: 32px; height: 32px; min-width: 32px; padding: 0; color: var(--school-primary); }
.sidebar :deep(.p-panel-toggle-button .p-button-icon) { width: 12px; height: 12px; }
.sidebar :deep(.class-subpanel .p-panel-title) { font-size: 17px; }
.sidebar :deep(.class-subpanel .p-panel-header) { padding: 7px 9px; }
.sidebar :deep(.class-subpanel .p-panel-content) { padding: 0 9px 9px; }
.sidebar .link-list { gap: 2px; }
.sidebar .link-list a, .sidebar .link-list .class-unavailable { padding: 6px 0; font-size: 16px; }

.sidebar-link { display: block; padding: 12px; background: transparent; border: 0; border-radius: 0; color: inherit; font: 500 17px 'Jost', sans-serif; text-decoration: none; }
.sidebar-link:hover { color: var(--school-primary); text-decoration: underline; text-underline-offset: 4px; }
.sidebar :deep(.p-panel) { background: transparent; border: 0; border-radius: 0; box-shadow: none; }
.sidebar > :deep(.p-panel:not(:first-child)), .sidebar > .sidebar-link { border-top: 1px solid var(--school-border); }
.calendar-column, .exams-column { background: var(--school-surface); border: 1px solid var(--school-border); border-radius: var(--school-panel-radius); }
.school-home :deep(.p-panel-header) { padding: 20px; gap: 8px; }
.school-home :deep(.p-panel-title) { font: 500 17px 'Jost', sans-serif; }
.school-home :deep(.p-panel-content) { padding: 0 20px 20px; }
.class-subpanel :deep(.p-panel-title) { font-size: 17px; }
.class-subpanel :deep(.p-panel-header) { padding: 10px 12px; }
.class-subpanel :deep(.p-panel-content) { padding: 0 12px 12px; }
.link-list { display: flex; flex-direction: column; gap: 6px; }
.link-list a, .link-list .class-unavailable { display: block; padding: 10px 0; font: inherit; font-size: 17px; line-height: 1.5; overflow-wrap: anywhere; }
.link-list a { color: var(--school-primary); text-decoration: none; }
.correction-link { display: flex; align-items: center; gap: 10px; }
.link-list .correction-download { display: inline-flex; align-items: center; justify-content: center; padding: 8px; }
.class-list .class-unavailable { color: #68736e; }
.link-list a:hover { color: var(--school-primary); text-decoration: underline; text-underline-offset: 5px; }
.link-list a:focus-visible { outline: 2px solid var(--school-primary); outline-offset: 4px; }
.archive-links a { font-size: 17px; }
.calendar-column :deep(.p-panel-header) { flex-wrap: wrap; }
.calendar-header { flex: 1 1 0; display: flex; align-items: center; gap: 18px; flex-wrap: wrap; min-width: 0; }
.sidebar :deep(.p-panel-header) { padding: 10px 12px; }
.sidebar :deep(.p-panel-title) { font-size: 17px; }
.sidebar :deep(.p-panel-content) { padding: 0 12px 12px; }
.sidebar :deep(.class-subpanel .p-panel-title) { font-size: 17px; }
.sidebar :deep(.class-subpanel .p-panel-header) { padding: 7px 9px; }
.sidebar :deep(.class-subpanel .p-panel-content) { padding: 0 9px 9px; }
.sidebar .link-list a, .sidebar .link-list .class-unavailable { padding: 6px 0; font-size: 16px; }
.calendar-period { display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; font-size: 15px; }
.calendar-title { font: 500 17px 'Jost', sans-serif; }
.calendar-view-controls { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.calendar-view-controls :deep(.p-selectbutton) { display: inline-flex; padding: 3px; gap: 3px; border: 1px solid var(--school-border); border-radius: var(--school-panel-radius); background: var(--school-background); }
.calendar-view-controls :deep(.p-togglebutton) { min-width: 74px; min-height: 36px; padding: 0; border: 1px solid transparent; border-radius: var(--school-panel-radius); background: transparent; color: var(--school-text); font-size: 14px; font-weight: 500; }
.calendar-view-controls :deep(.p-togglebutton-content) { padding: 7px 12px; border-radius: inherit; }
.calendar-view-controls :deep(.p-togglebutton.p-togglebutton-checked) { background: var(--school-surface); border-color: var(--school-border); color: var(--school-primary); }
.calendar-view-controls :deep(.p-togglebutton-checked .p-togglebutton-content) { background: transparent; box-shadow: none; }
.calendar-view-controls :deep(.p-togglebutton:focus-visible) { outline: 2px solid var(--school-primary); outline-offset: 2px; }
.calendar-view-controls :deep(.p-button-text) { color: var(--school-primary); }
.calendar-view-controls :deep(.break-alarm-link.p-button) { color: white; background: var(--school-primary); border-color: var(--school-primary); text-decoration: none; }
.calendar-view-controls :deep(.break-alarm-link.p-button:hover) { background: color-mix(in srgb, var(--school-primary) 88%, black); border-color: var(--school-primary); }
.calendar-column :deep(.p-panel-content-container), .calendar-column :deep(.p-panel-content) { min-width: 0; max-width: 100%; box-sizing: border-box; }
.calendar-column, .exams-column { min-width: 0; align-self: start; }
h1, h2 { font-size: 25px; font-weight: 500; margin: 0 0 24px; }
.exams-column ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 26px; font-size: 17px; overflow-wrap: anywhere; }
.class-title { display: flex; align-items: center; gap: 8px; min-width: 0; }
.exam-heading { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.exams-column :deep(.p-button.p-button-text:not(.p-button-secondary):not(.p-button-danger):not(.marked-appointment)) { color: var(--school-primary); }
.exams-column :deep(.p-button.p-button-text:not(.p-button-secondary):not(.p-button-danger):not(.marked-appointment):hover) { background: color-mix(in srgb, var(--school-primary) 10%, transparent); }
.exam-dates { list-style: none; padding: 0; margin: 10px 0 0; display: grid; gap: 8px; font-size: 15px; }
.administration-panel :deep(.p-panel-content > .class-subpanel + .class-subpanel) { margin-top: 8px; }
.administration-panel .admin-link { margin: 0; padding: 5px 0; min-height: 32px; box-sizing: border-box; }
.administration-panel .admin-link + .admin-link { margin-top: 0; }
.administration-panel .admin-link :deep(.p-button.p-button-rounded) { width: 28px; height: 28px; min-width: 28px; padding: 0; }
.administration-panel .admin-link a, .administration-panel .admin-link span:not(.copy-status) { font-size: 16px; line-height: 1.5; }
.school-email { user-select: text; overflow-wrap: anywhere; min-width: 0; font-size: 17px; }
.copy-status { font-size: 13px; color: #526257; }
.admin-link { flex-wrap: wrap; display: flex; align-items: center; gap: 12px; }
.admin-link a { color: inherit; font-size: 17px; text-underline-offset: 4px; }
.contact-details { display: grid; gap: 4px; }
.contact-details dt { font-weight: 500; }
.contact-details dd { margin: 0 0 8px; overflow-wrap: anywhere; }
.webuntis-info { max-width: min(320px, calc(100vw - 64px)); font-size: 15px; line-height: 1.5; }
.empty-note { margin: 0; color: #647168; }
@media (max-width: 1150px) { .school-home { grid-template-columns: 195px minmax(0, 1fr); padding: 24px; } .exams-column { grid-column: 2; min-height: auto; } .sidebar { grid-row: span 2; } }
@media (max-width: 740px) { .school-home { display: flex; flex-direction: column; padding: 16px; gap: 16px; } .center-column { order: -1; } .calendar-column { min-height: auto; } .exams-column { min-height: auto; } .calendar-column, .exams-column { align-self: stretch; } }
</style>
