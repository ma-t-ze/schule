<script setup>
import { computed, ref, watch } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import Panel from 'primevue/panel'
import { checklists } from './checklists'
import { checklistKeyPoints } from './checklistKeyPoints'
import { cognitiveGoalLevels } from '../Unterrichtsbaukasten/cognitiveGoals'
import { topics } from './topics'
import { psychologyTopics } from './psychologyTopics'

const props = defineProps({ subject: { type: String, required: true } })
const query = ref('')
const exporting = ref(false)
const exportError = ref('')
async function exportPdf() {
  const subject = props.subject
  exporting.value = true
  exportError.value = ''
  try {
    const { downloadChecklistPdf } = await import('./exportChecklistPdf.js')
    await downloadChecklistPdf(subject)
  } catch {
    exportError.value = 'Der PDF-Export ist fehlgeschlagen. Bitte versuche es erneut.'
  } finally { exporting.value = false }
}
const checklist = computed(() => checklists[props.subject])
watch(() => props.subject, () => { query.value = '' })
const total = computed(() => checklist.value.groups.reduce((sum, group) => sum + group.items.length, 0))
const groups = computed(() => {
  const term = query.value.trim().toLocaleLowerCase('de')
  let number = 0
  return checklist.value.groups.map(group => ({
    ...group,
    items: group.items.map(item => ({ ...item, number: ++number })).filter(item => `${group.title} ${item.statement} ${item.answer} ${item.sourceNote || ''} ${item.sources?.map(source => source.label).join(' ') || ''}`.toLocaleLowerCase('de').includes(term))
  })).filter(group => group.items.length)
})
function sources(group) {
  const catalog = props.subject === 'paedagogik' ? topics : psychologyTopics
  const links = [...(catalog.find(topic => topic.id === group.topicId)?.sourceLinks || []), ...(group.extraSources || [])]
  return [...new Map(links.map(link => [link.href, link])).values()]
}
</script>

<template>
  <section class="checklist-study" :aria-label="checklist.title">
    <h2>{{ checklist.title }}</h2>
    <p>{{ checklist.intro }}</p>
    <div class="export-actions">
      <Button :label="subject === 'paedagogik' ? 'Pädagogik: PDF mit allen Antworten' : 'Päd. Psychologie: PDF mit allen Antworten'" :loading="exporting" :disabled="exporting" @click="exportPdf" />
      <p>Der Export enthält alle {{ total }} Aussagen und Antworten, auch bei aktiver Suche.</p>
    </div>
    <Message v-if="exportError" severity="error" :closable="false">{{ exportError }}</Message>
    <a :href="checklist.original" target="_blank" rel="noopener noreferrer">{{ checklist.originalLabel || 'Originale Ich-kann-Liste öffnen (DOCX)' }}</a>
    <Message severity="info" :closable="false">{{ checklist.notice || 'Die Aussagen stammen aus der Vorlage. Die Antworten sind eigene Lernhilfen und Muster für die Prüfung. Aussagen zur eigenen Praxis musst du mit deinen tatsächlichen Erfahrungen und Beispielen abgleichen.' }}</Message>
    <p v-if="checklist.reviewNote" class="review-note">{{ checklist.reviewNote }}</p>
    <div v-if="checklist.scopeNotes?.length" class="scope-notes">
      <h3>Eingrenzung laut PDF</h3>
      <ul><li v-for="note in checklist.scopeNotes" :key="note">{{ note }}</li></ul>
    </div>
    <label for="checklist-search">Aussagen und Antworten durchsuchen</label>
    <InputText id="checklist-search" v-model="query" type="search" placeholder="Zum Beispiel Bezugsnorm oder Motivation" class="search" />
    <p class="count" aria-live="polite">{{ groups.reduce((sum, group) => sum + group.items.length, 0) }} von {{ total }} Aussagen · Öffne eine Aussage für die Antwort.</p>
    <p v-if="!groups.length" role="status">Keine passende Aussage gefunden.</p>
    <section v-for="group in groups" :key="group.title" class="checklist-group">
      <h3>{{ group.title }}</h3>
      <p v-if="subject === 'psychologie'" class="stem">Ich kann …</p>
      <Panel v-for="item in group.items" :key="item.id" :header="`${item.number}. ${item.statement}`" toggleable collapsed class="answer-panel">
        <div v-if="checklistKeyPoints[item.id]" class="key-points">
          <h4>Stichwortschema</h4>
          <template v-if="item.id === 'paed-methoden-4'">
            <p><strong>Fragend-entwickelnder Unterricht</strong></p>
            <ul>
              <li>Gesprächsziel transparent machen</li><li>Offene, weite Einzelfragen stellen</li><li>Denkzeit geben</li><li>Viele beteiligen</li>
              <li>Suggestiv- und Kettenfragen vermeiden<ul><li>Immer enger hintereinander fragen, um auf eine bestimmte Antwort zu kommen</li><li>Besser: weite Fragen stellen und verschiedene Antworten zulassen</li></ul></li>
            </ul>
            <h5>Gedanke:</h5>
            <p>Schüler denken nach und beschreiben ihre Erkenntnisse in Alltagssprache. Ich ordne diese ein und gebe anschließend die Fachbegriffe. Schüler sollen Begriffe nicht erraten.</p>
            <ul><li>Qualifiziert rückmelden</li><li>Ergebnisse am Ende sichern</li></ul>
            <h5>Zusätzlich:</h5>
            <ul><li>Leitfrage formulieren</li><li>Das Gespräch soll lebendig bleiben.</li></ul>
            <h5>Grundgedanke:</h5>
            <p>Schüler denken nach und beschreiben ihre Erkenntnisse allgemein. Ich lenke das Gespräch und gebe die Fachbegriffe. Schüler sollen Begriffe nicht erraten.</p>
          </template>
          <template v-else-if="item.id === 'paed-methoden-5'">
            <h5>Lehrervortrag</h5>
            <ul><li v-for="[feature, explanation] in checklistKeyPoints[item.id].slice(0, 4)" :key="feature"><strong>{{ feature }}:</strong> {{ explanation }}</li></ul>
            <h5>Lehrergespräch</h5>
            <ul><li v-for="[feature, explanation] in checklistKeyPoints[item.id].slice(4)" :key="feature"><strong>{{ feature }}:</strong> {{ explanation }}</li></ul>
          </template>
          <template v-else-if="item.id === 'paed-leistung-grundlagen-1'">
            <h5>Die sechs Funktionen der Notengebung</h5>
            <div class="table-scroll"><table><thead><tr><th scope="col">Funktion</th><th scope="col">Bedeutung</th></tr></thead><tbody>
              <tr><th scope="row">1. Selektion und Berechtigung</th><td>Noten entscheiden über Abschlüsse, Versetzungen und Bildungswege.</td></tr>
              <tr><th scope="row">2. Sozialisation</th><td>Schülerinnen und Schüler lernen, dass Leistung gesellschaftlich bewertet wird.</td></tr>
              <tr><th scope="row">3. Kontrolle</th><td>Noten zeigen, ob Lernziele erreicht wurden.</td></tr>
              <tr><th scope="row">4. Prognose</th><td>Noten sollen zukünftige Leistungen einschätzbar machen.</td></tr>
              <tr><th scope="row">5. Information und Rückmeldung</th><td>Noten informieren Schüler, Eltern und Lehrkräfte über den Leistungsstand.</td></tr>
              <tr><th scope="row">6. Selbstdisziplinierung und Motivation</th><td>Noten sollen zu Anstrengung und selbstständigem Lernen anregen.</td></tr>
            </tbody></table></div>
          </template>
          <template v-else-if="item.id === 'paed-leistung-grundlagen-2'">
            <ul>
              <li><strong>Objektivität:</strong> Die Bewertung ist unabhängig von der prüfenden Person.<br /><em>Beispiel:</em> Zwei Lehrkräfte bewerten dieselbe Klassenarbeit mit dem gleichen Ergebnis.</li>
              <li><strong>Reliabilität (Zuverlässigkeit):</strong> Die Messung liefert bei Wiederholung unter vergleichbaren Bedingungen ähnliche Ergebnisse.<br /><em>Beispiel:</em> Ein Schüler erreicht bei zwei gleich schwierigen Tests vergleichbare Ergebnisse.</li>
              <li><strong>Validität (Gültigkeit):</strong> Die Prüfung misst tatsächlich das, was sie messen soll.<br /><em>Beispiel:</em> Soll die Gestaltungskompetenz geprüft werden, müssen die Schüler etwas gestalten und nicht nur Gestaltungsregeln auswendig wiedergeben.</li>
            </ul>
            <h5>Merksatz:</h5>
            <ul><li>Objektivität = <strong>Wer</strong> bewertet, spielt keine Rolle.</li><li>Reliabilität = <strong>Wie zuverlässig</strong> wird gemessen?</li><li>Validität = <strong>Wird das Richtige</strong> gemessen?</li></ul>
          </template>
          <template v-else-if="item.id === 'paed-leistung-grundlagen-3'">
            <p>Das nennt man die <strong>drei Arten der Leistungsdiagnostik bzw. Leistungsbewertung</strong>. Sie werden nach dem <strong>Zeitpunkt und Zweck der Bewertung</strong> unterschieden.</p>
            <div class="table-scroll"><table><thead><tr><th scope="col">Art</th><th scope="col">Wann?</th><th scope="col">Wozu?</th><th scope="col">Beispiel</th></tr></thead><tbody>
              <tr><th scope="row">Diagnostisch</th><td>Vor dem Lernen</td><td>Vorwissen und Lernstand feststellen</td><td>Eingangstest</td></tr>
              <tr><th scope="row">Formativ</th><td>Während des Lernens</td><td>Lernfortschritt erkennen und fördern</td><td>Feedback zu einem Entwurf</td></tr>
              <tr><th scope="row">Summativ</th><td>Nach dem Lernen</td><td>Lernergebnis abschließend bewerten</td><td>Benotete Klassenarbeit</td></tr>
            </tbody></table></div>
            <h5>Merksatz:</h5>
            <ul><li>Diagnostisch = <strong>Wo stehen die Schüler?</strong></li><li>Formativ = <strong>Wie können sie sich verbessern?</strong></li><li>Summativ = <strong>Was haben sie gelernt?</strong></li></ul>
            <p>Die Unterscheidung hilft Lehrkräften, Lernstände zu erkennen, den Unterricht anzupassen und Leistungen am Ende zu bewerten.</p>
          </template>
          <template v-else-if="item.id === 'paed-leistung-grundlagen-5'">
            <p><strong>Ziel:</strong> Schülerleistungen möglichst objektiv und gerecht beurteilen.</p>
            <h5>Beurteilungsfehler:</h5>
            <ul><li><strong>Sachfremde Eindrücke:</strong> Sympathie, Verhalten oder persönliche Erwartungen beeinflussen die Note.</li><li><strong>Beispiel:</strong> Ein sympathischer Schüler erhält für einen fachlich schwachen Entwurf eine zu gute Note.</li></ul>
            <h5>Maßnahmen zur Vermeidung:</h5>
            <ol><li><strong>Klare Kriterien:</strong> Vor der Bewertung festlegen, welche fachlichen Leistungen zählen.</li><li><strong>Anonymisierung:</strong> Arbeiten möglichst ohne Namen korrigieren.</li><li><strong>Aufgabenweise Korrektur:</strong> Dieselbe Aufgabe bei allen Schülern nacheinander bewerten.</li><li><strong>Vergleich unsicherer Fälle:</strong> Bewertungen anhand der Kriterien und anderer Arbeiten überprüfen.</li></ol>
            <p><strong>Merksatz:</strong> Nicht die Person bewerten, sondern ihre nachweisbare Leistung.</p>
          </template>
          <template v-else-if="item.id === 'paed-leistung-praxis-3'">
            <h5>Lernförderliches Feedback nach Klassenarbeiten</h5>
            <p><strong>Ziel:</strong> Schüler sollen erkennen, wo sie stehen und wie sie sich verbessern können.</p>
            <ul>
              <li><strong>Lernziel:</strong> Was sollte erreicht werden? Die Bewertungskriterien verdeutlichen.</li>
              <li><strong>Lernstand:</strong> Was wurde bereits gut gemacht, wo bestehen noch Schwierigkeiten? Stärken und Fehler konkret benennen.</li>
              <li><strong>Nächste Schritte:</strong> Was muss verbessert werden? Wenige, konkrete und umsetzbare Hinweise geben.</li>
              <li><strong>Weiterarbeit:</strong> Schüler erhalten Gelegenheit, Fehler zu korrigieren und das Feedback anzuwenden.</li>
            </ul>
            <p><strong>Beispiel:</strong> Statt „Layout unübersichtlich“ besser: „Verwende ein einheitliches Gestaltungsraster und richte die Texte daran aus.“</p>
            <p><strong>Merksatz:</strong> Gutes Feedback zeigt das Ziel, den aktuellen Stand und den Weg zur Verbesserung.</p>
          </template>
          <template v-else-if="item.id === 'paed-sprache-1'">
            <h5>Textoptimierung:</h5>
            <ul><li><strong>Inhalt:</strong> Logisch und schrittweise aufbauen.</li><li><strong>Wörter:</strong> Einfache Sprache, Fachbegriffe erklären.</li><li><strong>Sätze:</strong> Kurz und verständlich formulieren.</li><li><strong>Struktur:</strong> Absätze, Zwischenüberschriften und Hervorhebungen.</li><li><strong>Layout:</strong> Übersichtlich und gut lesbar gestalten.</li></ul>
            <h5>Einsatz im Unterricht:</h5>
            <ul><li><strong>Einheitlich:</strong> Alle erhalten denselben optimierten Text.</li><li><strong>Differenziert:</strong> Gleicher Inhalt auf verschiedenen Sprachniveaus.</li><li><strong>Arbeitsteilig:</strong> Unterschiedliche Texte bearbeiten, Ergebnisse gemeinsam sichern.</li><li><strong>Fachwortschatz:</strong> Vokabellisten und Beispielsätze anbieten.</li></ul>
            <p><strong>Grundsatz:</strong> Sprachliche Hürden abbauen, fachliches Niveau möglichst beibehalten.</p>
          </template>
          <template v-else-if="item.id === 'paed-arrangements-1'">
            <p><strong>Grundsatz der Unterrichtsplanung:</strong> Am Anfang steht nicht die Methode, sondern das <strong>Thema und das Lernziel</strong>: „Ich stelle das Thema XY in den Mittelpunkt, verfolge diese Ziele … Dafür eignet sich die Methode, weil …“</p>
            <h5>Fünf Lehr-Lern-Arrangements</h5>
            <ol>
              <li><strong>Lernen durch Lehren (LdL):</strong> Schüler erarbeiten Inhalte und vermitteln sie ihren Mitschülern.<ul><li><strong>Beispiel:</strong> Schüler erklären sich gegenseitig die Farbkontraste.</li><li><strong>Geeignet:</strong> Wenn Inhalte durch eigenes Erklären vertieft und gefestigt werden sollen.</li></ul></li>
              <li><strong>Direkte Instruktion:</strong> Die Lehrkraft erklärt und demonstriert, anschließend üben die Schüler.<ul><li><strong>Beispiel:</strong> Die Lehrkraft zeigt eine Funktion in InDesign, die Schüler wenden sie an.</li><li><strong>Geeignet:</strong> Wenn neue Grundlagen oder klar definierte Arbeitsschritte effizient vermittelt werden sollen.</li></ul></li>
              <li><strong>Kooperatives Lernen:</strong> Schüler erarbeiten gemeinsam ein Lernziel mit individueller Verantwortung.<ul><li><strong>Beispiel:</strong> Think–Pair–Share zur Bewertung eines Plakatentwurfs.</li><li><strong>Geeignet:</strong> Wenn unterschiedliche Perspektiven ausgetauscht und gemeinsam Erkenntnisse erarbeitet werden sollen.</li></ul></li>
              <li><strong>Kooperative Projektarbeit:</strong> Schüler planen und realisieren gemeinsam ein größeres Projekt.<ul><li><strong>Beispiel:</strong> Eine Gruppe entwickelt eine App vom Konzept bis zum Prototyp.</li><li><strong>Geeignet:</strong> Wenn mehrere Kompetenzen selbstständig auf eine komplexe, praxisnahe Aufgabe angewendet werden sollen.</li></ul></li>
              <li><strong>Selbstorganisiertes Lernen (SOL):</strong> Schüler planen, bearbeiten und kontrollieren ihren Lernprozess weitgehend selbstständig.<ul><li><strong>Beispiel:</strong> Schüler bearbeiten eigenständig Lernmodule zur Bildbearbeitung.</li><li><strong>Geeignet:</strong> Wenn selbstständiges Lernen, Eigenverantwortung und individuelles Lerntempo gefördert werden sollen.</li></ul></li>
            </ol>
            <p><strong>Merksatz:</strong> Erst das Lernziel festlegen, dann die passende Methode auswählen.</p>
          </template>
          <template v-else-if="item.id === 'paed-arrangements-2'">
            <p><strong>Allgemein:</strong> Lehr-Lern-Arrangements unterscheiden sich vor allem im Grad der <strong>Selbststeuerung</strong>, der <strong>Zusammenarbeit</strong> und der <strong>Rolle der Lehrkraft</strong>. Die Auswahl richtet sich nach Lernziel, Lernvoraussetzungen und Unterrichtssituation.</p>
            <p><strong>Beispiel:</strong> Bei der Einführung in InDesign eignet sich die <strong>direkte Instruktion</strong>, weil grundlegende Arbeitsschritte zunächst erklärt und demonstriert werden müssen. Für die anschließende Gestaltung eines Magazins eignet sich <strong>Projektarbeit</strong>, weil die Schüler ihr Wissen selbstständig und gemeinsam anwenden.</p>
            <p><strong>Merksatz:</strong> Nicht jede Methode passt zu jedem Lernziel.</p>
          </template>
          <template v-else-if="item.id === 'paed-erziehung-1'">
            <h5>Vier Wege der Werteerziehung im Unterricht</h5>
            <ol><li><strong>Vorbildfunktion:</strong> Ich lebe Respekt und Fairness im Umgang mit den Schülern vor.</li><li><strong>Verantwortungsübernahme:</strong> Ich schaffe durch Gruppenarbeit und projektorientierten Unterricht Freiräume für selbstbestimmtes und eigenverantwortliches Arbeiten.</li><li><strong>Werte reflektieren:</strong> Ich nutze fachliche Themen wie den Konstruktivismus, um Perspektivwechsel und Toleranz anzusprechen.</li><li><strong>Werte einfordern:</strong> Ich greife bei respektlosem Verhalten ein und fördere konstruktive Kritik und Zusammenarbeit.</li></ol>
          </template>
          <template v-else-if="item.id === 'paed-erziehung-2'">
            <h5>Meine Rolle als Vorbild und meine Werte</h5>
            <p>Meine pädagogische Haltung orientiert sich an drei zentralen Werten:</p>
            <ol><li><strong>Freiheit:</strong> Der Mensch braucht Freiheit, um sich individuell zu entfalten und seine Persönlichkeit zu entwickeln.</li><li><strong>Verantwortungsbewusstsein:</strong> Hier liegt die moralische Dimension – der eigene Anspruch, richtig und gut handeln zu wollen und für sein Handeln einzustehen.</li><li><strong>Respekt:</strong> Die eigene Freiheit endet dort, wo die Freiheit und die Rechte anderer beginnen.</li></ol>
            <p><strong>Meine Vorbildfunktion:</strong> Ich vertrete diese Werte nicht nur durch Worte, sondern lebe sie im täglichen Umgang mit meinen Schülern vor.</p>
          </template>
          <template v-else-if="item.id === 'paed-erziehung-3'">
            <p>Hier geht es darum, <strong>wie du als Lehrkraft mit unterschiedlichen Wertvorstellungen umgehst und gemeinsam mit Kollegium und Schulleitung eine einheitliche pädagogische Haltung entwickelst.</strong></p>
            <ul><li><strong>Kollegium:</strong> Gemeinsame Regeln und Vorgehensweisen abstimmen.</li><li><strong>Schulleitung:</strong> Unterstützt bei Konflikten und sorgt für einen verbindlichen Rahmen.</li><li><strong>Unterschiedliche Werte:</strong> Andere Überzeugungen respektieren, solange sie nicht die Rechte anderer verletzen.</li><li><strong>Konflikte:</strong> Das Gespräch suchen, gemeinsame Lösungen finden und klare Grenzen setzen.</li></ul>
            <p><strong>Merksatz:</strong> Unterschiedliche Werte respektieren, gemeinsame Regeln vertreten und bei Konflikten abgestimmt handeln.</p>
          </template>
          <template v-else-if="item.id === 'paed-erziehung-4'">
            <h5>Werteerziehung an Alter und Lerngruppe anpassen</h5>
            <p><strong>Grundsatz:</strong> Die Werte bleiben gleich, aber ihre Vermittlung richtet sich nach Alter, Reife und Lernvoraussetzungen.</p>
            <ul><li><strong>Jugendliche:</strong> Mehr Anleitung, klare Regeln und eingeübte Routinen. Bei Bedarf Eltern einbeziehen.</li><li><strong>Erwachsene:</strong> Partnerschaftlicher Umgang, gemeinsame Vereinbarungen und mehr Eigenverantwortung.</li><li><strong>Unterschiedliche Lerngruppen:</strong> Je nach Selbstständigkeit und sozialem Verhalten mehr Freiräume oder stärkere Begleitung.</li></ul>
            <p><strong>Beispiel:</strong> Eine selbstständige Klasse organisiert ihre Gruppenarbeit eigenverantwortlich. Eine Klasse mit Schwierigkeiten bei der Zusammenarbeit erhält klare Rollen und Regeln.</p>
            <p><strong>Merksatz:</strong> Gleiche Werte, unterschiedliche pädagogische Wege.</p>
          </template>
          <template v-else-if="item.id === 'paed-inklusion-1'">
            <h5>Behinderung nach § 2 SGB IX</h5>
            <p>Eine Behinderung liegt vor, wenn eine <strong>körperliche, seelische, geistige oder Sinnesbeeinträchtigung</strong> im Zusammenspiel mit <strong>Barrieren der Umwelt</strong> die gleichberechtigte Teilhabe erschwert.</p>
            <ul><li><strong>Dauer:</strong> Voraussichtlich länger als sechs Monate.</li><li><strong>Wichtig:</strong> Nicht nur die Beeinträchtigung, sondern auch die Umgebung kann Menschen behindern.</li><li><strong>Beispiel:</strong> Ein Rollstuhlfahrer wird durch eine Treppe ohne Rampe an der Teilhabe gehindert.</li></ul>
            <p><strong>Merksatz:</strong> Behinderung entsteht im Zusammenspiel von Beeinträchtigung und Barrieren.</p>
          </template>
          <template v-else-if="item.id === 'paed-inklusion-2'">
            <h5>Exklusion, Separation, Integration und Inklusion</h5>
            <ul><li><strong>Exklusion:</strong> Ein Angebot nur für Menschen ohne Behinderung – andere werden ausgeschlossen.</li><li><strong>Separation:</strong> Unterschiedliche Gruppen erhalten getrennte Angebote.</li><li><strong>Integration:</strong> Einzelne werden im bestehenden System individuell unterstützt.</li><li><strong>Inklusion:</strong> Das System wird so gestaltet, dass alle teilhaben können (<em>Universal Design</em>).</li></ul>
            <p><strong>Merksatz:</strong> Bei der Integration passt sich der Einzelne dem System an. Bei der Inklusion passt sich das System den Menschen an.</p>
          </template>
          <template v-else-if="item.id === 'paed-inklusion-3'">
            <h5>Schulgesetzänderung 2015 – Inklusion in Baden-Württemberg</h5>
            <p><strong>Ziel:</strong> Mehr gemeinsamer Unterricht von Schülern mit und ohne Behinderung.</p>
            <ul><li><strong>Sonderschulpflicht aufgehoben:</strong> Schüler mit Behinderung müssen nicht mehr zwingend eine Sonderschule bzw. ein SBBZ besuchen.</li><li><strong>Inklusive Bildungsangebote:</strong> Gemeinsames Lernen an allgemeinen Schulen wird ermöglicht.</li><li><strong>Zielgleich:</strong> Schüler lernen nach denselben Bildungszielen, gegebenenfalls mit Unterstützung.</li><li><strong>Zieldifferent:</strong> Schüler können gemeinsam unterrichtet werden, aber unterschiedliche Bildungsziele verfolgen.</li><li><strong>Elternwahlrecht gestärkt:</strong> Eltern erhalten mehr Mitspracherecht bei der Wahl des Lernorts, insbesondere bis einschließlich Sekundarstufe I.</li><li><strong>Berufliche Schulen:</strong> Die Reform gilt dort nur eingeschränkt, insbesondere mit Blick auf das sechsjährige berufliche Gymnasium.</li></ul>
            <p><strong>Merksatz:</strong> Seit 2015 steht die gemeinsame Beschulung stärker im Mittelpunkt – die Pflicht zum Besuch einer Sonderschule wurde aufgehoben.</p>
          </template>
          <template v-else-if="item.id === 'paed-inklusion-5'">
            <h5>Inklusion und schulische Umsetzung in Baden-Württemberg</h5>
            <p><strong>Grundsatz:</strong> Nicht der Mensch muss sich dem System anpassen, sondern das System soll Teilhabe ermöglichen. In Baden-Württemberg wird Inklusion vor allem durch <strong>gemeinsamen Unterricht an allgemeinen Schulen und individuelle Unterstützung</strong> umgesetzt.</p>
            <ul><li><strong>Inklusive Bildungsangebote:</strong> Schüler mit und ohne Behinderung können gemeinsam lernen.</li><li><strong>Sonderpädagogische Unterstützung:</strong> Je nach Förderbedarf werden zusätzliche Hilfen organisiert.</li><li><strong>Zielgleich oder zieldifferent:</strong> Schüler arbeiten entweder auf dieselben oder auf unterschiedliche Bildungsabschlüsse hin.</li><li><strong>Elternwahlrecht:</strong> Eltern können eine inklusive Beschulung wünschen; die konkrete Umsetzung wird mit der Schulverwaltung geklärt.</li></ul>
            <h5>Speziell an beruflichen Schulen:</h5>
            <ul><li><strong>Berufswegekonferenz:</strong> Klärt vor dem Übergang Bildungsziele und notwendige Unterstützung.</li><li><strong>Projekt inklusivBS:</strong> Fördert individuell alle Jugendlichen, um Bildungschancen und berufliche Teilhabe zu verbessern.</li></ul>
            <p><strong>Merksatz:</strong> Baden-Württemberg setzt Inklusion durch gemeinsame Beschulung, sonderpädagogische Unterstützung und individuelle Förderung um.</p>
          </template>
          <template v-else-if="item.id === 'paed-inklusion-6'">
            <h5>Beeinträchtigung ADHS und schulischer Umgang</h5>
            <p><strong>ADHS (Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung)</strong> ist eine neuroentwicklungsbedingte Störung. Betroffene haben Schwierigkeiten mit der Aufmerksamkeitssteuerung und/oder Impulsivität und Hyperaktivität.</p>
            <h5>Mögliche Auswirkungen im Unterricht:</h5>
            <ul><li><strong>Unaufmerksamkeit:</strong> Leichte Ablenkbarkeit, Schwierigkeiten bei längeren Aufgaben.</li><li><strong>Impulsivität:</strong> Vorschnelles Handeln oder Dazwischenreden.</li><li><strong>Hyperaktivität:</strong> Innere oder äußere Unruhe, Bewegungsdrang.</li></ul>
            <h5>Daraus leite ich folgende Maßnahmen ab:</h5>
            <ol><li><strong>Klare Struktur:</strong> Unterrichtsabläufe und Arbeitsaufträge transparent machen.</li><li><strong>Kleine Arbeitsschritte:</strong> Komplexe Aufgaben in überschaubare Teilaufgaben gliedern.</li><li><strong>Bewegungspausen:</strong> Kurze Pausen und Bewegungsmöglichkeiten anbieten.</li><li><strong>Reizarme Umgebung:</strong> Ablenkungen möglichst reduzieren.</li><li><strong>Positives Feedback:</strong> Fortschritte zeitnah und konkret würdigen.</li></ol>
          </template>
          <template v-else-if="item.id === 'paed-inklusion-7'">
            <h5>Umgang mit besonderem Förderbedarf – Beispiel ADHS</h5>
            <p><strong>Ziel:</strong> Den Unterricht so planen, dass Schüler mit ADHS möglichst gut lernen können, ohne den Vorbereitungsaufwand unnötig zu erhöhen.</p>
            <ol><li><strong>Förderbedarf klären:</strong> Im Vorfeld mit dem Schüler und gegebenenfalls Eltern oder Fachkräften besprechen, welche Schwierigkeiten bestehen und was hilft.</li><li><strong>Unterricht planen:</strong> Klare Abläufe, kurze Arbeitsaufträge, kleine Lernschritte und Bewegungspausen vorsehen.</li><li><strong>Individuell unterstützen:</strong> Reizarme Arbeitsplätze, Checklisten und regelmäßige Rückmeldungen anbieten.</li><li><strong>Aufwand begrenzen:</strong> Wiederverwendbare Checklisten und Arbeitsvorlagen erstellen, die auch anderen Schülern helfen.</li><li><strong>Wirksamkeit überprüfen:</strong> Beobachten, welche Maßnahmen tatsächlich das Lernen erleichtern, und diese gegebenenfalls anpassen.</li></ol>
            <p><strong>Beispiel:</strong> Im Gestaltungsunterricht erhalten alle Schüler eine strukturierte Aufgabenliste. Ein Schüler mit ADHS bekommt zusätzlich kurze Zwischenziele und individuelle Rückmeldungen.</p>
            <p><strong>Merksatz:</strong> Förderbedarf klären, Unterricht anpassen, Aufwand begrenzen und Wirksamkeit überprüfen.</p>
          </template>
          <template v-else-if="item.id === 'paed-inklusion-8'">
            <h5>Formen der Inklusion und ihre Folgen abwägen</h5>
            <p><strong>Ziel:</strong> Eine Form der Inklusion finden, die möglichst allen Beteiligten gerecht wird.</p>
            <h5>Mögliche Unterrichtsformen:</h5><ul><li><strong>Gemeinsamer Unterricht:</strong> Alle bearbeiten dieselbe Aufgabe, einzelne erhalten zusätzliche Unterstützung.</li><li><strong>Differenzierter Unterricht:</strong> Alle arbeiten am gleichen Thema, aber mit unterschiedlichen Aufgaben oder Anforderungen.</li></ul>
            <h5>Chancen:</h5><ul><li><strong>Schüler mit Förderbedarf:</strong> Zugehörigkeit und gesellschaftliche Teilhabe.</li><li><strong>Mitschüler:</strong> Lernen Rücksichtnahme und den Umgang mit Vielfalt.</li><li><strong>Lehrkräfte:</strong> Können stärker auf individuelle Lernbedürfnisse eingehen.</li></ul>
            <h5>Herausforderungen:</h5><ul><li><strong>Schüler:</strong> Mögliche Über- oder Unterforderung.</li><li><strong>Lehrkräfte:</strong> Höherer Planungs- und Betreuungsaufwand.</li><li><strong>Schule:</strong> Zusätzlicher Bedarf an Personal, Zeit und Räumen.</li></ul>
            <p><strong>Beispiel ADHS:</strong> Ein Schüler arbeitet gemeinsam mit der Klasse an einem Plakat, erhält aber kürzere Arbeitsphasen, eine Checkliste und bei Bedarf Bewegungspausen.</p>
            <p><strong>Merksatz:</strong> Inklusion muss tatsächliche Teilhabe ermöglichen und die Bedürfnisse aller Beteiligten berücksichtigen.</p>
          </template>
          <template v-else-if="item.id === 'paed-inklusion-9'">
            <h5>Eigene Position zu Chancen und Grenzen der Inklusion</h5>
            <p><strong>Meine Haltung:</strong> Inklusion ist ethisch wichtig, weil jeder Mensch ein Recht auf Bildung, Chancengleichheit und gesellschaftliche Teilhabe hat.</p>
            <ul><li><strong>Chancen:</strong> Gemeinsames Lernen fördert Zugehörigkeit, gegenseitigen Respekt und den Umgang mit Vielfalt.</li><li><strong>Stolpersteine:</strong> Fehlendes Personal, Zeitmangel und unzureichende Ausstattung können zu Überforderung führen.</li><li><strong>Schulische Verantwortung:</strong> Individuelle Förderung ermöglichen, ohne die Lernbedürfnisse der anderen Schüler zu vernachlässigen.</li><li><strong>Ethische Verantwortung:</strong> Niemand darf aufgrund einer Beeinträchtigung ausgeschlossen oder benachteiligt werden.</li></ul>
            <p><strong>Meine Position:</strong> Ich befürworte Inklusion, wenn sie tatsächliche Teilhabe und individuelle Förderung ermöglicht. Dafür müssen aber die notwendigen Rahmenbedingungen geschaffen werden.</p>
            <p><strong>Merksatz:</strong> Inklusion ist nicht allein die gemeinsame Anwesenheit, sondern die Möglichkeit, gemeinsam erfolgreich zu lernen.</p>
          </template>
          <ul v-else><li v-for="[feature, explanation] in checklistKeyPoints[item.id]" :key="feature"><strong>{{ feature }}:</strong> {{ explanation }}</li></ul>
        </div>
        <div v-if="item.id === 'paed-planung-4'" class="taxonomy-reference">
          <h4>Taxonomiestufen nach Anderson und Krathwohl</h4>
          <div class="table-scroll"><table><thead><tr><th scope="col">Stufe</th><th scope="col">Taxonomiestufe</th><th scope="col">Typische Operatoren</th></tr></thead><tbody>
            <tr v-for="level in cognitiveGoalLevels" :key="level.id"><td>{{ level.level }}</td><th scope="row">{{ level.name }}</th><td>{{ level.goals.map(goal => goal.text).join(', ') }}</td></tr>
          </tbody></table></div>
          <p><strong>Merksatz:</strong> Die kognitiven Anforderungen steigen vom einfachen Wiedergeben von Wissen bis zum eigenständigen Entwickeln neuer Lösungen.</p>
          <h4>EPA – Einheitliche Prüfungsanforderungen in der Abiturprüfung</h4>
          <div class="table-scroll"><table><thead><tr><th scope="col">Bereich</th><th scope="col">Bedeutung</th><th scope="col">Beispiel aus GMT</th></tr></thead><tbody>
            <tr><th scope="row">AFB I – Reproduktion</th><td>Gelerntes Wissen wiedergeben</td><td>Drei Gestaltungsprinzipien nennen</td></tr>
            <tr><th scope="row">AFB II – Reorganisation und Transfer</th><td>Wissen auf eine Aufgabe anwenden und Zusammenhänge untersuchen</td><td>Ein Plakat hinsichtlich seiner Gestaltungsprinzipien analysieren</td></tr>
            <tr><th scope="row">AFB III – Reflexion und Problemlösung</th><td>Eigenständig Lösungen entwickeln und begründet beurteilen</td><td>Ein Plakat anhand definierter Anforderungen bewerten und Verbesserungen entwickeln</td></tr>
          </tbody></table></div>
        </div>
        <h4>Musterantwort</h4>
        <p>{{ item.answer }}</p>
        <div v-if="item.sources?.length" class="answer-sources">
          <p class="basis">{{ item.basisLabel }}</p>
          <p v-if="item.sourceNote" class="source-note"><strong>Hinweis zur Quelle:</strong> {{ item.sourceNote }}</p>
          <h5>Fundstellen zur Antwort</h5>
          <ul><li v-for="source in item.sources" :key="source.href + source.label"><a :href="source.href" target="_blank" rel="noopener noreferrer">{{ source.label }}</a></li></ul>
        </div>
      </Panel>
      <div class="sources">
        <h4>Unterlagen zum Nachlesen</h4>
        <ul><li v-for="source in sources(group)" :key="source.href"><a :href="source.href" target="_blank" rel="noopener noreferrer">{{ source.label }}</a></li></ul>
      </div>
    </section>
  </section>
</template>

<style scoped>
.checklist-study { margin-top: 28px; }
.export-actions { margin: 20px 0; }
.export-actions p { margin: 8px 0 0; color: #59665e; font-size: 14px; }
h2 { font-size: clamp(24px, 4vw, 32px); }
h3 { margin: 28px 0 12px; font-size: 22px; }
h4 { margin: 0 0 10px; font-size: 16px; }
p, li { line-height: 1.65; }
a { color: #007c4a; overflow-wrap: anywhere; }
label { display: block; margin: 24px 0 8px; }
.search { width: 100%; }
.count, .stem { color: #59665e; }
.answer-panel { margin: 12px 0; }
.answer-panel p { margin-bottom: 0; }
.answer-panel p { white-space: pre-line; }
.key-points { margin-bottom: 24px; padding: 16px 18px; background: #f1f6f2; border-radius: 10px; }
.key-points ul { margin: 0; padding-left: 20px; }
.key-points li + li { margin-top: 6px; }
.key-points h5 { margin: 18px 0 6px; font-size: 15px; }
.key-points p { margin: 0 0 10px; }
.key-points h5 + p { margin-bottom: 12px; }
.taxonomy-reference { margin: 24px 0; }
.taxonomy-reference h4:not(:first-child) { margin-top: 24px; }
.taxonomy-reference p { margin: 12px 0; }
.table-scroll { overflow-x: auto; }
.table-scroll table { width: 100%; min-width: 600px; border-collapse: collapse; text-align: left; }
.table-scroll th, .table-scroll td { padding: 10px 12px; border-bottom: 1px solid #dce3d9; vertical-align: top; }
.table-scroll thead { background: #edf2e9; }
.answer-sources { margin-top: 18px; padding-top: 12px; border-top: 1px solid #cdd8d0; font-size: 14px; }
.answer-sources h5 { font-size: 14px; margin: 14px 0 8px; }
.answer-sources ul { margin: 0; padding-left: 20px; }
.basis, .review-note { color: #59665e; font-size: 14px; }
.source-note { padding: 12px; border-left: 3px solid #748b77; background: #f1f6f2; }
.sources { margin-top: 20px; font-size: 14px; }
.sources li + li { margin-top: 8px; }
.scope-notes { margin-top: 28px; padding: 20px; background: #f1f6f2; border-radius: 12px; }
.scope-notes h3 { margin-top: 0; }
:deep(.p-panel-title) { line-height: 1.5; overflow-wrap: anywhere; }
:deep(.p-panel-header) { gap: 12px; align-items: flex-start; }
:deep(.p-panel-header-actions) { flex-shrink: 0; }
</style>
