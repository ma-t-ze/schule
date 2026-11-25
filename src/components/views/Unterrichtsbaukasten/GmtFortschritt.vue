<script setup>
import { computed, ref, watch } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Message from 'primevue/message'

const props = defineProps({ visible: Boolean })
defineEmits(['update:visible'])
const units = [
  { id: 1, title: 'Grundlagen des Projektmanagements', hours: 6, topics: [
    ['1.1', 'Projektmanagement', 'Analyse des Projektauftrages; Projektplanung; Lösungsstrategien; Auswahl, Realisierung und Ergebnis'],
    ['1.2', 'Projektdokumentation', 'Projektauftrag; Projektplanung; Projektverlauf; Resultat mit Begründung'],
    ['1.3', 'Ergebnispräsentation', 'Vorbereitung; Durchführung'] ] },
  { id: 2, title: 'Grundlagen der visuellen Kommunikation', hours: 22, topics: [
    ['2.1', 'Visuelle Wahrnehmung', 'Sehvorgang; Wahrnehmungs- und Gestaltgesetze'],
    ['2.2', 'Farbwahrnehmung', 'Farbreiz; Farbvalenz; Farbempfindung; Farbeigenschaften: Farbton, Helligkeit, Sättigung; Farbwirkung'],
    ['2.3', 'Grafische Grundformen', 'Linie, Kontur, Fläche, Archetypen; visuelles Gewicht; Komposition'],
    ['2.4', 'Visuelle Kommunikation und Zeichen', 'Kommunikationsmodell; Ikon, Index, Symbol; semiotische Analyse: Syntaktik, Semantik, Pragmatik'] ] },
  { id: 3, title: 'Zeichentechniken und Flächengestaltung', hours: 16, topics: [
    ['3.1', 'Zeichenwerkzeuge und Papiere', 'Blei- und Farbstifte; Faserstifte; Marker; Papiere'],
    ['3.2', 'Gestalten mit Linien und Flächen', 'Linie, Kontur; Schraffur, Textur, Struktur; einfarbige Flächen; Farbverläufe'],
    ['3.3', 'Gestalten mit Formen und Farben', 'Linie, Kontur, Fläche; Beziehungen und Wirkungen; Farbgenerierung; Farbkompositionen; Farbwirkungen'] ] },
  { id: 4, title: 'Grafik', hours: 12, topics: [
    ['4.1', 'Grafische Zeichen', 'Piktogramm; Logo; Icon; technische und gestalterische Merkmale und Anforderungen'],
    ['4.2', 'Entwurf und Umsetzung', 'Kreativitätstechniken; Scribbles; Entwurfsskizze; Raster, Hilfslinien, Konturen, Füllungen und Farben; kritische Analyse; Dateiausgabe'] ] },
  { id: 5, title: 'Digitales Bild', hours: 12, topics: [
    ['5.1', 'Digitale Fotografie', 'Kameratechnik; Aufnahmetechnik; Dateiformate'],
    ['5.2', 'Fotografische Bildgestaltung', 'Blende; Verschlusszeit; Brennweite; Lichtempfindlichkeit; Motivwahl; Kameraperspektiven; Bildausschnitt'],
    ['5.3', 'Bildbearbeitung und Ausgabe', 'Bildauswahl; Bildkorrekturen; Bildkomposition; Dateiausgabe'] ] },
  { id: 6, title: 'Layout und Typografie', hours: 18, topics: [
    ['6.1', 'Layout', 'Formate und Formatwirkung; Satzspiegel; Gestaltungsraster'],
    ['6.2', 'Schrift', 'Schriftentwicklung; Merkmale eines Buchstabens; Schriftkategorien; Schriftfamilie und Schriftschnitte'],
    ['6.3', 'Schriftauswahl und Schriftsatz', 'Schriftwirkung; Schriftmischung; Schriftart; Schriftgröße und Zeilenabstand; Zeilenlänge; Satzarten; Laufweite; Auszeichnung; Satzfehler; Ausgabemedium'],
    ['6.4', 'Medienentwurf', 'Ideenfindung; Layoutskizzen; Layouterstellung; Dateiausgabe'] ] },
  { id: 7, title: 'Grundlagen der Medientechnik', hours: 24, topics: [
    ['7.1', 'Hard- und Software, Daten', 'Hardware und Komponenten; Ein- und Ausgabegeräte; Netzwerke; Speichermedien; System- und Anwendersoftware; Systemsicherheit; Datenmanagement; Zahlensysteme; Speichereinheiten; Datenmengen'],
    ['7.2', 'Farbe in der Medienproduktion', 'Additive und subtraktive Farbmischung; RGB und CMYK; metrische Farbräume HSB, HSL, LAB'],
    ['7.3', 'Digitale Bildtechnik', 'Bildparameter: Größe, Farbtiefe, Pixeldichte/Auflösung; Berechnung der Datenmenge; Dateiformate und Kompression'],
    ['7.4', 'Produktionsworkflow', 'Dateiarten und Dateiformate; Datenerfassung und Datenimport; Datenbearbeitung; Dateiausgabe für Printmedien und digitale Medien'] ] },
  { id: 8, title: 'Räumliche Darstellung', hours: 24, topics: [
    ['8.1', 'Technisches Zeichnen', 'Projektion nach DIN ISO 5456; Projektionsmethode 1; Linienarten; Hauptmaße'],
    ['8.2', 'Axonometrie', 'Dimetrie: Winkel und Verkürzung; Isometrie'],
    ['8.3', 'Fluchtpunktperspektive', 'Zentralperspektive; Zwei-Punkt-Perspektive'],
    ['8.4', 'Scribbles und Entwurfsskizzen', 'Anforderungen; räumliche Konturzeichnung in Axonometrie und Fluchtpunktperspektive; schattierte Darstellung mit Lichteinfall und Schatten; Detailskizzen'] ] },
  { id: 9, title: 'Modellbauverfahren', hours: 16, topics: [
    ['9.1', 'Additive Verfahren', 'Modellbauwerkstoffe; Modellbauwerkzeuge; Modellbautechniken'],
    ['9.2', 'Subtraktive Verfahren', 'Modellbauwerkstoffe; Modellbauwerkzeuge; Modellbautechniken'],
    ['9.3', 'Plastische Verfahren (Modellieren)', 'Modellbauwerkstoffe; Modellbauwerkzeuge; Modellbautechniken'] ] }
]
const key = 'school-gmt-3tgg-progress-v1'
let saved = {}
try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {} } catch { /* Start with an empty plan. */ }
const completed = ref(Array.isArray(saved.completed) ? saved.completed : [])
// Landeseinheitliche Ferientermine: Kultusministerium Baden-Württemberg.
const calendars = [
  { year: '2026/27', start: '2026-09-14', end: '2027-07-28', holidays: [['2026-10-26', '2026-10-30'], ['2026-12-23', '2027-01-09'], ['2027-03-25', '2027-04-03'], ['2027-05-18', '2027-05-29']] },
  { year: '2027/28', start: '2027-09-13', end: '2028-07-26', holidays: [['2027-11-02', '2027-11-06'], ['2027-12-23', '2028-01-08'], ['2028-04-13', '2028-04-22'], ['2028-06-06', '2028-06-17']] },
  { year: '2028/29', start: '2028-09-11', end: '2029-07-25', holidays: [['2028-10-30', '2028-11-03'], ['2028-12-23', '2029-01-05'], ['2029-03-26', '2029-04-07'], ['2029-05-22', '2029-06-01']] },
  { year: '2029/30', start: '2029-09-10', end: '2030-07-24', holidays: [['2029-10-29', '2029-11-02'], ['2029-12-22', '2030-01-05'], ['2030-04-15', '2030-04-26'], ['2030-06-11', '2030-06-21']] }
]
const today = ref(new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Berlin' }))
watch(() => props.visible, visible => { if (visible) today.value = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Berlin' }) })
const currentCalendar = computed(() => calendars.find(calendar => today.value >= calendar.start && today.value <= calendar.end) || calendars.find(calendar => today.value < calendar.start) || null)
const schoolDays = computed(() => {
  const calendar = currentCalendar.value
  if (!calendar || today.value < calendar.start) return 0
  let count = 0
  const end = today.value < calendar.end ? today.value : calendar.end
  for (let date = new Date(`${calendar.start}T12:00:00Z`); date.toISOString().slice(0, 10) <= end; date.setUTCDate(date.getUTCDate() + 1)) {
    const day = date.getUTCDay()
    const iso = date.toISOString().slice(0, 10)
    if (day > 0 && day < 6 && !calendar.holidays.some(([from, to]) => iso >= from && iso <= to)) count++
  }
  return count
})
const weeks = computed(() => schoolDays.value / 5)
const storageError = ref(false)
watch(completed, () => {
  try { localStorage.setItem(key, JSON.stringify({ completed: completed.value })); storageError.value = false }
  catch { storageError.value = true }
}, { deep: true })
const count = units.reduce((sum, unit) => sum + unit.topics.length, 0)
const completedHours = computed(() => units.reduce((sum, unit) => sum + unit.hours * unit.topics.filter(topic => completed.value.includes(topic[0])).length / unit.topics.length, 0))
const elapsedHours = computed(() => Math.max(0, Number(weeks.value) || 0) * 6)
const expectedHours = computed(() => Math.min(150, elapsedHours.value * 150 / 240))
const difference = computed(() => completedHours.value - expectedHours.value)
const format = value => new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1 }).format(value)
</script>

<template>
  <Dialog :visible="visible" header="3TGG · Lehrplan GMT – Eingangsklasse" modal dismissable-mask :style="{ width: 'min(960px, calc(100vw - 32px))' }" @update:visible="$emit('update:visible', $event)">
    <div class="gmt-summary">
      <p>Markiere die behandelten Inhalte. Die Eingaben werden in diesem Browser gespeichert.</p>
      <p v-if="currentCalendar"><strong>Schuljahr {{ currentCalendar.year }} · {{ format(weeks) }} Unterrichtswochen</strong> automatisch berechnet bis {{ new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${today}T12:00:00Z`)) }}.</p>
      <Message v-else severity="warn" :closable="false">Für das aktuelle Schuljahr liegen noch keine Ferientermine vor. Eine automatische Zeitschätzung ist daher nicht möglich.</Message>
      <div class="gmt-stats">
        <div><strong>{{ completed.length }} / {{ count }}</strong><span>Inhalte behandelt</span></div>
        <div><strong>{{ format(completedHours) }} / 150</strong><span>geschätzte BPE-Stunden</span></div>
        <div><strong>{{ format(elapsedHours) }} / 240</strong><span>Stunden bei 6 pro Woche</span></div>
        <div><strong>{{ !elapsedHours ? 'Noch keine Einschätzung' : difference >= -0.01 ? 'Im Zeitplan' : 'Zeitplan gefährdet' }}</strong><span v-if="elapsedHours">{{ format(Math.abs(difference)) }} BPE-Stunden {{ difference >= 0 ? 'Vorsprung' : 'Rückstand' }}</span></div>
      </div>
      <div v-if="currentCalendar" class="gmt-bars" aria-label="Lehrplanfortschritt im Vergleich">
        <div class="gmt-bar-row">
          <div class="gmt-bar-label"><strong>Ist · behandelt</strong><span>{{ format(completedHours) }} / 150 Std.</span></div>
          <div class="gmt-bar-track" role="progressbar" aria-label="Behandelte BPE-Stunden" :aria-valuenow="Math.round(completedHours)" aria-valuemin="0" aria-valuemax="150"><div class="gmt-bar-fill gmt-bar-actual" :style="{ width: `${Math.min(100, completedHours / 150 * 100)}%` }"></div></div>
        </div>
        <div class="gmt-bar-row">
          <div class="gmt-bar-label"><strong>Soll · bis heute</strong><span>{{ format(expectedHours) }} / 150 Std.</span></div>
          <div class="gmt-bar-track" role="progressbar" aria-label="Erwartete BPE-Stunden bis heute" :aria-valuenow="Math.round(expectedHours)" aria-valuemin="0" aria-valuemax="150"><div class="gmt-bar-fill gmt-bar-target" :style="{ width: `${Math.min(100, expectedHours / 150 * 100)}%` }"></div></div>
        </div>
      </div>
      <p class="gmt-note">Schätzung: Werktage Montag bis Freitag seit Schuljahresbeginn, abzüglich landeseinheitlicher Ferien, anteilig als Wochen gezählt und mit 6 Stunden pro Woche multipliziert. Von 240 Stunden entfallen laut Lehrplan 150 auf BPE 1–9, 60 auf Vertiefung und Projekte sowie 30 auf Leistungsfeststellung. Die Stunden einer BPE werden gleichmäßig auf ihre Teilinhalte verteilt; Feiertage außerhalb der Ferien, bewegliche Ferientage, Ausfälle, der tatsächliche Stundenplan und individuelle Schwerpunktsetzung sind nicht berücksichtigt. <a href="https://km.baden-wuerttemberg.de/de/service/ferien" target="_blank" rel="noopener noreferrer">Ferientermine des Kultusministeriums ↗</a></p>
      <Message v-if="storageError" severity="warn" :closable="false">Der Fortschritt konnte in diesem Browser nicht gespeichert werden.</Message>
    </div>
    <section v-for="unit in units" :key="unit.id" class="gmt-unit">
      <h3>BPE {{ unit.id }} · {{ unit.title }} <span>{{ unit.hours }} Std.</span></h3>
      <label v-for="topic in unit.topics" :key="topic[0]" class="gmt-topic" :for="`gmt-${topic[0]}`">
        <Checkbox v-model="completed" :input-id="`gmt-${topic[0]}`" :value="topic[0]" />
        <span><strong>{{ topic[0] }} · {{ topic[1] }}</strong><small>{{ topic[2] }}</small></span>
      </label>
    </section>
    <template #footer><Button label="Fertig" @click="$emit('update:visible', false)" /></template>
  </Dialog>
</template>

<style scoped>
.gmt-summary p { line-height: 1.5; }
.gmt-summary label { font-weight: 600; margin-right: 12px; }
.gmt-summary input { width: 90px; padding: 7px; border: 1px solid #aebbbd; border-radius: 5px; }
.gmt-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin: 18px 0; }
.gmt-stats div { background: #f1f6f5; border-radius: 8px; padding: 14px; }
.gmt-stats strong, .gmt-stats span { display: block; }
.gmt-stats span, .gmt-note { font-size: .85rem; color: #536568; }
.gmt-bars { display: grid; gap: 14px; margin: 20px 0; }
.gmt-bar-label { display: flex; justify-content: space-between; gap: 12px; margin-bottom: 6px; font-size: .9rem; }
.gmt-bar-track { height: 14px; border-radius: 999px; background: #e4ecea; overflow: hidden; }
.gmt-bar-fill { height: 100%; border-radius: inherit; transition: width .25s ease; }
.gmt-bar-actual { background: #277963; }
.gmt-bar-target { background: #759a91; }
.gmt-unit { border-top: 1px solid #dce5e3; padding: 12px 0; }
.gmt-unit h3 { font-size: 1rem; display: flex; justify-content: space-between; gap: 12px; }
.gmt-unit h3 span { white-space: nowrap; font-weight: normal; }
.gmt-topic { display: flex; align-items: flex-start; gap: 12px; padding: 9px 0; cursor: pointer; line-height: 1.45; }
.gmt-topic small { display: block; color: #536568; margin-top: 3px; }
</style>
