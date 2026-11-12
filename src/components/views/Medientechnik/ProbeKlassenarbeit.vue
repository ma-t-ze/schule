<script setup>
import { nextTick, ref, watch } from 'vue'
import Checkbox from 'primevue/checkbox'
const props = defineProps({ step: { type: Number, default: 1 } })
const heading = ref(null)
const checked = ref([])
const base = '/medientechnik/indesign/probe-klassenarbeit/'
const steps = ['Das Dokument anlegen', 'Die Bedienfelder einrichten', 'Die Vorlage nachbauen', 'Dein Ergebnis prüfen', 'Die Arbeit abgeben', 'Bewertungskriterien']
const link = step => ({ name: 'indesign-probe-klassenarbeit', params: { step } })
watch(() => props.step, async () => { await nextTick(); heading.value?.focus() })
const checks = [
  'Besteht mein Dokument aus zwei gegenüberliegenden A4-Seiten mit den vorgegebenen Rändern und dem Anschnitt?',
  'Sind alle geforderten Bedienfelder geöffnet und sinnvoll gruppiert? Liegt der Screenshot meiner Arbeitsoberfläche in meinem Namensordner?',
  'Erstreckt sich das große I am Anfang über genau vier Textzeilen?',
  'Ist der kleine Text unten neben dem Bild unterstrichen?',
  'Ist das Bild korrekt eingefügt: proportional, ohne Verzerrung und mit einem Ausschnitt wie in der Vorlage? Ist die Verknüpfung vorhanden?',
  'Ist die rechte Seite für den Fließtext in zwei gleich breite Spalten mit gleichem Zwischenraum aufgeteilt?',
  'Ist die schräge Linie auf der rechten Seite orange?',
  'Sind Schrift, Größen, Abstände und Positionen so nah wie möglich an der Vorlage?',
  'Sind alle Texte vollständig sichtbar, ohne Textüberlauf?',
  'Sind meine InDesign-Datei und das verwendete Bild im Abgabeordner gespeichert?',
  'Ist die vollständige Doppelseite als PDF exportiert und im Abgabeordner abgelegt?'
]
const criteria = [
  { title: 'Dateien einschließlich PDF richtig benannt (teilweise richtig: 1–2; falsch: 0)', points: 3 },
  { title: 'Dokument korrekt angelegt', points: 2 },
  { title: 'Bedienfelder eingerichtet und Screenshot abgegeben', points: 3 },
  { title: 'Seitenaufteilung wie in der Vorlage; rechts zwei gleich breite Spalten', points: 3 },
  { title: 'Textgestaltung: I über vier Zeilen, Unterstreichung, Blocksatz, passende Schrift', points: 4 },
  { title: 'Bild korrekt eingefügt und verknüpft', points: 2 },
  { title: 'Orange Linie, Überschrift und Schlusspunkt', points: 1 },
  { title: 'Texte vollständig, kein Überlauf; bearbeitbare Dateien (InDesign-Datei .indd) abgegeben', points: 1 },
  { title: 'Vollständige Doppelseite als PDF exportiert und im Abgabeordner abgelegt', points: 1 }
]
const grades = [
  ['1 · sehr gut', '19–20'],
  ['2 · gut', '16,5–18,5'],
  ['3 · befriedigend', '13,5–16'],
  ['4 · ausreichend', '10–13'],
  ['5 · mangelhaft', '6–9,5'],
  ['6 · ungenügend', '0–5,5']
]
const panels = [
  ['Seiten, Ebenen und Verknüpfungen', 'Fenster → Seiten / Ebenen / Verknüpfungen'],
  ['Eigenschaften und Steuerung', 'Fenster → Eigenschaften / Steuerung'],
  ['Zeichen und Absatz', 'Fenster → Schrift und Tabellen → Zeichen / Absatz'],
  ['Absatzformate und Zeichenformate', 'Fenster → Formate → Absatzformate / Zeichenformate'],
  ['Farbfelder und Kontur', 'Fenster → Farbe → Farbfelder; Fenster → Kontur'],
  ['Ausrichten', 'Fenster → Objekt und Layout → Ausrichten'],
  ['Preflight', 'Fenster → Ausgabe → Preflight']
]
</script>

<template>
  <main class="lesson-page"><div class="shell">
    <RouterLink to="/medientechnik/adobe-indesign" class="back">← Adobe InDesign</RouterLink>
    <header><p class="eyebrow">PROBE KLASSENARBEIT · SCHRITT {{ step }} VON {{ steps.length }}</p><h1 ref="heading" tabindex="-1">{{ steps[step - 1] }}</h1></header>
    <nav class="step-links" aria-label="Die sechs Schritte"><RouterLink v-for="(title, index) in steps" :key="title" :to="link(index + 1)" :aria-current="step === index + 1 ? 'step' : undefined" :aria-label="`Schritt ${index + 1}: ${title}`">{{ index + 1 }}</RouterLink></nav>

    <template v-if="step === 1">
      <section class="practice" aria-labelledby="document-title"><h2 id="document-title">Dokumentvorgaben</h2><ol>
        <li>Erstelle einen Ordner <strong>Probe_Klassenarbeit_Nachname</strong>. Lade die Vorlage und das Bild unten herunter und speichere beide darin.</li>
        <li>Wähle <strong>Datei → Neu → Dokument</strong>: <strong>A4, Hochformat, 210 × 297 mm</strong>.</li>
        <li>Stelle <strong>2 Seiten</strong> ein, aktiviere <strong>Doppelseiten</strong> und setze <strong>Startseitennummer auf 2</strong>. So stehen die beiden Seiten direkt als linke und rechte Seite nebeneinander.</li>
        <li>Lege <strong>15 mm Ränder</strong> an allen Seiten und <strong>3 mm Anschnitt</strong> rundum fest. Wähle zunächst <strong>eine Spalte</strong>; die zwei Textspalten richtest du später auf der rechten Seite ein.</li>
        <li>Speichere als <strong>Probe_Klassenarbeit_Nachname.indd</strong> in deinem Ordner.</li>
      </ol></section>
    </template>

    <template v-if="step === 2">
      <p class="intro">Richte zuerst deine Arbeitsoberfläche ein. Öffne die Werkzeugleiste und die folgenden Bedienfelder, bevor du mit dem Nachbau beginnst.</p>
      <section class="practice" aria-labelledby="panels-title"><h2 id="panels-title">Diese Bedienfelder brauchst du</h2>
        <div class="table-scroll" tabindex="0" role="region" aria-labelledby="panels-title"><table><thead><tr><th scope="col">Bedienfelder</th><th scope="col">Menüweg</th></tr></thead><tbody><tr v-for="panel in panels" :key="panel[0]"><th scope="row">{{ panel[0] }}</th><td>{{ panel[1] }}</td></tr></tbody></table></div>
        <ol><li>Blende über <strong>Fenster → Werkzeuge</strong> die Werkzeugleiste links ein.</li><li>Docke die Bedienfelder rechts an und gruppiere zusammengehörige Felder. Klappe Gruppen bei Bedarf zu Symbolen zusammen, damit die Doppelseite sichtbar bleibt.</li><li>Mache einen Screenshot von deiner Arbeitsoberfläche. Drücke dazu <strong>⌘ + Umschalt + 4</strong> und ziehe mit gedrückter Maustaste einen Auswahlrahmen um das gesamte InDesign-Fenster. Lege den Screenshot anschließend in dem Ordner mit deinem Namen ab.</li></ol>
      </section>
    </template>

    <template v-if="step === 3">
      <p class="intro">Baue jetzt die Vorlage nach. Verwende das bereitgestellte Bild und die Texte unten. Wähle verfügbare Schriften, die der Vorlage möglichst nahekommen; eine exakt identische Schrift ist nicht erforderlich.</p>
      <section class="practice" aria-labelledby="layout-title"><h2 id="layout-title">Dein Arbeitsauftrag</h2><ol>
        <li><strong>Linke Seite:</strong> Setze die orange Überschrift oben. Baue darunter den großen, linksbündigen Text mit einem <strong>I über vier Textzeilen</strong> am Absatzanfang nach.</li>
        <li>Platziere <strong>picture.png</strong> im unteren rechten Bereich der linken Seite. Achte auf Proportionen, Position und Bildausschnitt. Verwende <strong>Datei → Platzieren</strong> und passe Bild und Rahmen passend an.</li>
        <li>Setze den kleinen Text links neben das Bild, im unteren Bereich der Seite. Übernimm die zwei Absätze und die rechtsbündige Ausrichtung. Der Text muss <strong>unterstrichen</strong> sein. Die Farbe der Unterstreichung kannst du frei wählen.</li>
        <li><strong>Rechte Seite:</strong> Teile den oberen Textbereich in <strong>zwei gleich breite Textspalten</strong> auf. Achte auf einen gleichmäßigen Spaltenabstand. Übernimm die Absätze und verwende einen Blocksatz.</li>
        <li>Zeichne unter dem Fließtext eine dünne, <strong>orange Linie</strong>, die von links unten nach rechts oben steigt.</li>
        <li>Setze darunter den großen zweizeiligen Schriftzug <strong>„Absence can be as / revealing as presence.“</strong>. Der abschließende Punkt ist orange.</li>
        <li>Vergleiche die Doppelseite mit der Vorlage: Positionen, Größenverhältnisse, freie Flächen, Schriftwirkung und Farben. Speichere deine Datei.</li>
        <li>Exportiere die fertige Doppelseite über <strong>Datei → Exportieren → Adobe PDF (Druck)</strong>. Wähle im Exportdialog <strong>Alle Seiten</strong> und die Ausgabe als <strong>Druckbögen</strong>, damit beide Seiten nebeneinander erscheinen. Speichere die PDF als <strong>Probe_Klassenarbeit_Nachname.pdf</strong> im Ordner <strong>Probe_Klassenarbeit_Nachname</strong>. Öffne die PDF und prüfe, ob die gesamte Doppelseite korrekt angezeigt wird.</li>
      </ol><p>Die Vorlage dient nur zum Vergleichen. Platziere sie nicht als fertiges Seitenbild in deinem Dokument.</p></section>
      <section class="practice" aria-labelledby="texts-title"><h2 id="texts-title">Texte zum Kopieren</h2>
        <h3>Orange Überschrift links</h3><p class="copy-text">IS IT REAL OR ARE WE TRAINING?</p>
        <h3>Großer Text links</h3><p class="copy-text">Independent culture has always produced its own archives. Flyers, demo tapes, photocopied zines, posters taped to lampposts… these materials were rarely designed to last. They existed to announce, to gather, to invite. Yet decades later, they become evidence.</p>
        <h3>Kleiner Text neben dem Bild</h3><p class="copy-text">Independent culture often negotiates this tension carefully. Documentation is shared within trusted networks before entering broader circulation.</p><p class="copy-text">The archive is not neutral. Decisions about what to include and what to exclude shape how scenes are remembered.</p>
        <h3>Rechte Seite · linke Textspalte</h3>
        <div class="copy-text"><p>Today, documentation happens almost simultaneously with creation. A show is performed and recorded. A mural is painted and photographed before it fades. A publication is launched and scanned. The present anticipates its own disappearance.</p><p>This impulse to archive reflects an awareness of instability. Independent scenes often lack institutional recognition. Without formal preservation structures, documentation becomes a survival strategy. To record is to insist on existence.</p><p>But digital storage has complicated this process. While physical archives were limited by space, digital archives are limited by attention. Files accumulate without structure. Images circulate without context. The volume of material risks obscuring the very scenes it attempts to preserve.</p><p>Independent publications play a critical role here. By selecting, editing and sequencing documentation, they transform fragments into narrative. They slow down accumulation and give shape to memory. A printed page imposes boundaries on excess.</p></div>
        <h3>Rechte Seite · rechte Textspalte</h3>
        <div class="copy-text"><p>The archive is not neutral. Decisions about what to include and what to exclude shape how scenes are remembered. Which events are documented? Which artists are photographed? Which spaces are named? Absence can be as revealing as presence.</p><p>Archiving the present also raises ethical questions: Who controls images? Who benefits from documentation? When informal scenes become visible, they may attract attention that changes their structure. Visibility can preserve, but it can also accelerate transformation.</p><p>Independent culture often negotiates this tension carefully. Documentation is shared within trusted networks before entering broader circulation. Credit is emphasized. Context accompanies image. Memory remains collective rather than extractive.</p><p>To archive the present is not to freeze it. It is to create a trace that can travel. Scenes move, spaces close, people relocate. What remains are documents partial, imperfect, but alive with evidence of movement. The archive does not stop motion. It records that it happened.</p></div>
        <h3>Großer Schriftzug unten rechts</h3><p class="copy-text">Absence can be as<br>revealing as presence.</p>
      </section>
    </template>

    <template v-if="step === 4">
      <section class="check" aria-labelledby="check-title"><h2 id="check-title">Checkliste vor der Abgabe</h2><p>Kontrolliere dein Dokument und hake die Punkte ab. Die Häkchen gelten für diese geöffnete Seite.</p>
        <div v-for="(check, index) in checks" :key="check" class="check-row"><Checkbox v-model="checked" :input-id="`check-${index}`" :value="index" /><label :for="`check-${index}`">{{ check }}</label></div>
      </section>

    </template>

    <template v-if="step === 5">
      <section class="practice" aria-labelledby="submission-title"><h2 id="submission-title">Abgabe</h2><p>Speichere die bearbeitbare <strong>InDesign-Datei</strong> und gib deinen Ordner einschließlich des verwendeten Bildes ab. Lege auch die <strong>exportierte PDF</strong> und den Screenshot deiner Arbeitsoberfläche in den Abgabeordner.</p></section>
      <section class="practice" aria-labelledby="names-title"><h2 id="names-title">Dateinamen</h2><p>Ersetze <strong>Nachname</strong> durch deinen eigenen Nachnamen.</p><ul><li>InDesign-Datei: <strong>Probe_Klassenarbeit_Nachname.indd</strong></li><li>PDF: <strong>Probe_Klassenarbeit_Nachname.pdf</strong></li><li>Screenshot: <strong>Arbeitsoberflaeche_Nachname.png</strong></li><li>Verwendetes Bild: <strong>picture.png</strong></li></ul><p>Gib alles im Ordner <strong>Probe_Klassenarbeit_Nachname</strong> ab.</p></section>
    </template>

    <template v-if="step === 6">
      <section class="practice" aria-labelledby="criteria-title"><h2 id="criteria-title">Punkteverteilung · insgesamt 20 Punkte</h2>
        <div class="table-scroll" tabindex="0" role="region" aria-labelledby="criteria-title"><table><thead><tr><th scope="col">Kriterium</th><th scope="col">Max. Punkte</th></tr></thead><tbody><tr v-for="criterion in criteria" :key="criterion.title"><th scope="row">{{ criterion.title }}</th><td>{{ criterion.points }}</td></tr></tbody><tfoot><tr><th scope="row">Gesamt</th><td><strong>{{ criteria.reduce((sum, criterion) => sum + criterion.points, 0) }}</strong></td></tr></tfoot></table></div>
      </section>
      <section class="practice" aria-labelledby="grades-title"><h2 id="grades-title">Notenschlüssel</h2><table><thead><tr><th scope="col">Note</th><th scope="col">Erreichte Punkte</th></tr></thead><tbody><tr v-for="grade in grades" :key="grade[0]"><th scope="row">{{ grade[0] }}</th><td>{{ grade[1] }}</td></tr></tbody></table></section>
    </template>

    <section v-if="step === 1 || step === 3 || step === 4" aria-labelledby="reference-title"><h2 id="reference-title">Die Vorlage</h2><figure class="document-image"><a :href="`${base}vorlage.png`" target="_blank" rel="noopener noreferrer"><img :src="`${base}vorlage.png`" alt="Vorlage einer Doppelseite: links orange Überschrift, großes Initial-I, kleiner unterstrichener Text und ein Schwarz-Weiß-Bild; rechts zwei Textspalten, eine schräge orange Linie und ein großer Schriftzug."></a><figcaption>Klicke auf die Vorlage, um sie in voller Größe zu öffnen.</figcaption></figure><div class="downloads"><a :href="`${base}vorlage.png`" download>Vorlage herunterladen</a><a :href="`${base}picture.png`" download>Bild für den Nachbau herunterladen</a></div></section>
    <nav class="pager" aria-label="Vorwärts und zurück"><RouterLink v-if="step > 1" :to="link(step - 1)">← Zurück</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">← Zur Übersicht</RouterLink><span>{{ step }} / {{ steps.length }}</span><RouterLink v-if="step < steps.length" :to="link(step + 1)">Weiter →</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">Zur Übersicht →</RouterLink></nav>
  </div></main>
</template>

<style scoped>
@import './indesignTutorial.css';
.table-scroll { overflow-x: auto; margin-bottom: 24px; }
table { width: 100%; border-collapse: collapse; line-height: 1.6; }
th, td { padding: 12px; border-bottom: 1px solid #e0d8dc; text-align: left; vertical-align: top; }
.check-row { display: flex; align-items: flex-start; gap: 12px; margin-top: 20px; }
.check-row label { line-height: 1.6; cursor: pointer; }
.check-row :deep(.p-checkbox) { flex-shrink: 0; margin-top: 3px; }
.downloads { display: flex; gap: 20px; flex-wrap: wrap; }
.copy-text { padding: 16px; background: #f8f7f3; border-radius: 8px; user-select: text; }
h3 { margin-top: 28px; }
</style>
