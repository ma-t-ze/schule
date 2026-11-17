<script setup>
import { nextTick, ref, watch } from 'vue'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
const props = defineProps({ step: { type: Number, default: 1 } })
const unlocked = ref(false)
const accessCode = ref('')
const accessError = ref('')
async function unlock() {
  if (accessCode.value !== '17112026_MET') {
    accessError.value = 'Der Code ist nicht richtig. Versuche es erneut.'
    return
  }
  unlocked.value = true
  accessCode.value = ''
  accessError.value = ''
  await nextTick()
  heading.value?.focus()
}
const heading = ref(null)
const checked = ref([])
const base = '/medientechnik/indesign/klassenarbeit-01/'
const steps = ['Das Dokument anlegen', 'Die Bedienfelder einrichten', 'Die Vorlage nachbauen', 'Dein Ergebnis prüfen', 'Die Arbeit abgeben', 'Bewertungskriterien']
const link = step => ({ name: 'indesign-klassenarbeit-01', params: { step } })
watch(() => props.step, async () => { await nextTick(); heading.value?.focus() })
const checks = [
  'Besteht mein Dokument aus zwei gegenüberliegenden A4-Seiten (2 und 3) mit 15 mm Rändern und 3 mm Anschnitt?',
  'Sind die Bedienfelder eingerichtet und ist der Screenshot im Abgabeordner?',
  'Sind InDesign-Datei, Bild, Screenshot und vollständige Doppelseiten-PDF im korrekt benannten Ordner?'
]
const criteria = [
  { title: 'Dateien einschließlich PDF und Abgabeordner korrekt benannt', points: 3 },
  { title: 'Dokument korrekt angelegt', points: 2 },
  { title: 'Bedienfelder eingerichtet und Screenshot abgegeben', points: 3 },
  { title: 'Seitenaufteilung: Infospalte, zwei Textspalten, Trennlinien und Weißräume', points: 3 },
  { title: 'Textgestaltung: Titel, Untertitel, Initial-D und passende Typografie', points: 4 },
  { title: 'Bild proportional, passend beschnitten', points: 2 },
  { title: 'Hellgelbe Fläche und weiße Bildunterschrift passend gestaltet', points: 1 },
  { title: 'Texte ohne Überlauf und bearbeitbare InDesign-Datei abgegeben', points: 1 },
  { title: 'Vollständige Doppelseite als PDF exportiert', points: 1 }
]
const grades = [
  ['1,00', '20'],
  ['1,25', '19'],
  ['1,50', '18'],
  ['1,75', '17'],
  ['2,00', '16'],
  ['2,25', '15'],
  ['2,50', '14'],
  ['2,75', '13'],
  ['3,00', '12'],
  ['3,25', '11'],
  ['3,50', '10'],
  ['3,75', '9'],
  ['4,00', '8'],
  ['4,25', '7'],
  ['4,50', '6'],
  ['4,75', '5'],
  ['5,00', '4'],
  ['5,25', '3'],
  ['5,50', '2'],
  ['5,75', '1'],
  ['6,00', '0']
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
    <template v-if="!unlocked">
      <header><p class="eyebrow">ADOBE INDESIGN</p><h1>Klassenarbeit 01</h1></header>
      <section class="practice" aria-labelledby="access-title">
        <h2 id="access-title">Code eingeben</h2>
        <p>Gib den Code ein, um die Klassenarbeit zu öffnen.</p>
        <form class="access-form" @submit.prevent="unlock">
          <label for="access-code">Zugangscode</label>
          <InputText id="access-code" v-model="accessCode" type="password" autocomplete="off" required :aria-invalid="!!accessError" :aria-describedby="accessError ? 'access-error' : undefined" @input="accessError = ''" />
          <p v-if="accessError" id="access-error" class="access-error" role="alert">{{ accessError }}</p>
          <Button type="submit" label="Klassenarbeit öffnen" />
        </form>
      </section>
    </template>
    <template v-else>
    <header><p class="eyebrow">KLASSENARBEIT 01 · SCHRITT {{ step }} VON {{ steps.length }}</p><h1 ref="heading" tabindex="-1">{{ steps[step - 1] }}</h1></header>
    <nav class="step-links" aria-label="Die sechs Schritte"><RouterLink v-for="(title, index) in steps" :key="title" :to="link(index + 1)" :aria-current="step === index + 1 ? 'step' : undefined" :aria-label="`Schritt ${index + 1}: ${title}`">{{ index + 1 }}</RouterLink></nav>

    <template v-if="step === 1">
      <section class="practice" aria-labelledby="document-title"><h2 id="document-title">Dokumentvorgaben</h2><ol>
        <li>Erstelle einen Ordner <strong>Klassenarbeit_01_Nachname</strong>. Lade die Vorlage und das Bild unten herunter und speichere beide darin.</li>
        <li>Wähle <strong>Datei → Neu → Dokument</strong>: <strong>A4, Hochformat, 210 × 297 mm</strong> in InDesign.</li>
        <li>Stelle <strong>2 Seiten</strong> ein, aktiviere <strong>Doppelseiten</strong> und setze <strong>Startseitennummer auf 2</strong>. So stehen die beiden Seiten direkt als linke und rechte Seite nebeneinander.</li>
        <li>Lege <strong>15 mm Ränder</strong> an allen Seiten und <strong>3 mm Anschnitt</strong> rundum fest.</li>
        <li>Speichere als <strong>Klassenarbeit_01_Nachname.indd</strong> in deinem Ordner.</li>
      </ol></section>
    </template>

    <template v-if="step === 2">
      <p class="intro">Richte zuerst deine Arbeitsoberfläche ein. Öffne die Werkzeugleiste und die folgenden Bedienfelder, bevor du mit dem Nachbau beginnst.</p>
      <section class="practice" aria-labelledby="panels-title"><h2 id="panels-title">Diese Bedienfelder brauchst du</h2>
        <div class="table-scroll" tabindex="0" role="region" aria-labelledby="panels-title"><table><thead><tr><th scope="col">Bedienfelder</th><th scope="col">Menüweg</th></tr></thead><tbody><tr v-for="panel in panels" :key="panel[0]"><th scope="row">{{ panel[0] }}</th><td>{{ panel[1] }}</td></tr></tbody></table></div>
        <ol><li>Blende über <strong>Fenster → Werkzeuge</strong> die Werkzeugleiste links ein.</li><li>Docke die Bedienfelder rechts an und gruppiere zusammengehörige Felder.</li><li>Mache einen Screenshot von deiner Arbeitsoberfläche. Drücke dazu <strong>⌘ + Umschalt + 4</strong> und ziehe mit gedrückter Maustaste einen Auswahlrahmen um das gesamte InDesign-Fenster. Benenne den Screenshot <strong>Arbeitsflaeche.png</strong> und lege ihn anschließend in dem Ordner mit deinem Namen ab.</li></ol>
      </section>
    </template>

    <template v-if="step === 3">
      <p class="intro">Baue jetzt die Vorlage nach. Verwende das bereitgestellte Bild und die deutschen Texte unten. Der Spieltitel und die Eigennamen bleiben unverändert. Passe die Textrahmen an die Länge der Übersetzung an; der Fließtext beginnt mit einem D als Initial. Wähle verfügbare Schriften, die der Vorlage möglichst nahekommen; eine exakt identische Schrift ist nicht erforderlich.</p>
      <figure class="document-image">
        <a :href="`${base}Doppelseite_Magazin.png`" target="_blank" rel="noopener noreferrer"><img :src="`${base}Doppelseite_Magazin.png`" alt="Magazin-Doppelseite zu Dishonored 2: links Titel, Infospalte und zwei Textspalten; rechts ein großes Bild, das über den Bund reicht."></a>
        <figcaption>Klicke auf die Vorlage, um sie in voller Größe zu öffnen.</figcaption>
      </figure>
      <section class="practice" aria-labelledby="layout-title"><h2 id="layout-title">Dein Arbeitsauftrag</h2><ol>
        <li>Baue alle Elemente der Seite nach. Beachte Positionen, Größenverhältnisse, freie Flächen, Schriftwirkung und Farben. Vergiss nicht, zwischendurch zu speichern.</li>
        <li>Exportiere die fertige Doppelseite als <strong>PDF (Druck)</strong>. Beide Seiten sollen nebeneinander erscheinen. Speichere die PDF als <strong>Klassenarbeit_01_Nachname.pdf</strong> im Ordner <strong>Klassenarbeit_01_Nachname</strong>.</li>
      </ol><p>Hinweis: Die Texte unten wurden aus dem Türkischen ins Deutsche übersetzt.</p></section>
      <section class="practice" aria-labelledby="texts-title"><h2 id="texts-title">Texte zum Kopieren</h2>
        <h3>Titel</h3><p class="copy-text">DISHONORED 2</p>
        <h3>Untertitel</h3><p class="copy-text">Nach der Pestepidemie<br>Ein diktatorisches Regime</p>
        <h3>Infospalte</h3><div class="copy-text"><p>Entwicklung<br>Arkane Studios</p><p>Vertrieb<br>Bethesda Studios</p><p>Genre<br>Ego-Shooter</p><p>Plattform<br>PC, PS4, Xbox One</p><p>Erscheinungsdatum<br>11. November 2016</p></div>
        <h3>Einleitung · erste Textspalte</h3><p class="copy-text">Es war einmal eine kleine Stadt im Süden. Die Menschen dort lebten glücklich, denn der Herzog, der die Stadt regierte, war ein gerechter Herrscher, der sich für Gleichberechtigung einsetzte.</p>
        <h3>Fließtext · beide Textspalten verketten</h3><div class="copy-text"><p>Diese Stadt war zugleich ein beliebtes Reiseziel. Darüber hinaus brachte sie dem Kaiserreich beträchtliche Einnahmen ein: Die Silberminen etwas außerhalb der Stadt schufen viele Arbeitsplätze und sorgten für Wohlstand. Auch der Mann, der die Minen leitete, war gerecht. Er ließ die Arbeiter nicht zu lange arbeiten und achtete ihre Rechte. Doch während alles so schön wie im Märchen weiterging, starb der Herzog natürlich – oder wurde er ermordet? Auch der gutherzige Leiter der Mine verschwand. Der neue Herrscher nutzte sämtliche Einnahmen für seine eigenen Interessen, um seinen Reichtum weiter zu vergrößern. Die Leitung der Mine übertrug er einem Mann, der die Arbeiter quälte. Gerechtigkeit gab es nur noch in Büchern. Während der Herzog immer reicher wurde, litt die Bevölkerung, die an der Hungergrenze lebte, zunehmend. Das erinnert zwar an die Ereignisse in Venezuela, bildet aber zugleich den Hintergrund von Dishonored 2. Und wir befinden uns mitten im Geschehen.</p></div>
        <h3>Zwischenüberschrift</h3><p class="copy-text">Die Geschichte von Emily und Corvo</p>
        <h3>Text unter der Zwischenüberschrift</h3><p class="copy-text">Ihr erinnert euch bestimmt alle an die Pestepidemie im ersten Spiel. (Wer den ersten Teil noch nicht gespielt hat, sollte das unbedingt nachholen. Er ist eine gute Vorbereitung auf Dishonored 2. Auch der Preis auf Steam ist sehr günstig.) Seit jener Epidemie, die die Stadt Dunwall verwüstete, ist einige Zeit vergangen: Inzwischen sind es sogar 15 Jahre. Die kleine Emily, die Thronerbin aus Dishonored, ist zu einer liebenswerten jungen Frau herangewachsen. Ihrem Vater Corvo, dem Helden des ersten Spiels, hat die Zeit meiner Meinung nach allerdings weniger gutgetan …</p><p>Der letzte Satz ist am unteren Rand der Vorlage abgeschnitten. Die Übersetzung endet deshalb an dieser Stelle.</p>
        <h3>Bildunterschrift</h3><div class="copy-text"><p>Sprachausgabe</p><p>Verabschiedet euch vom schweigsamen Corvo: Im neuen Spiel sind sowohl Emily als auch Corvo vollständig vertont. Wenn sie auf Situationen im Spiel reagieren, können wir ihre Kommentare mit ihren eigenen Stimmen hören.</p></div>
      </section>
    </template>

    <template v-if="step === 4">
      <section class="check" aria-labelledby="check-title"><h2 id="check-title">Checkliste vor der Abgabe</h2><p>Kontrolliere dein Dokument und hake die Punkte ab. Die Häkchen gelten für diese geöffnete Seite.</p>
        <div v-for="(check, index) in checks" :key="check" class="check-row"><Checkbox v-model="checked" :input-id="`check-${index}`" :value="index" /><label :for="`check-${index}`">{{ check }}</label></div>
      </section>

    </template>

    <template v-if="step === 5">
      <section class="practice" aria-labelledby="submission-title"><h2 id="submission-title">Abgabe</h2><p>Speichere die bearbeitbare <strong>InDesign-Datei</strong> und gib deinen Ordner einschließlich des verwendeten Bildes ab. Lege auch die <strong>exportierte PDF</strong> und den Screenshot deiner Arbeitsoberfläche in den Abgabeordner.</p></section>
      <section class="practice" aria-labelledby="names-title"><h2 id="names-title">Dateinamen</h2><p>Ersetze <strong>Nachname</strong> durch deinen eigenen Nachnamen.</p><ul><li>InDesign-Datei: <strong>Klassenarbeit_01_Nachname.indd</strong></li><li>PDF: <strong>Klassenarbeit_01_Nachname.pdf</strong></li><li>Screenshot: <strong>Arbeitsflaeche.png</strong></li><li>Verwendetes Bild: <strong>Bild_1.png</strong></li></ul><p>Gib alles im Ordner <strong>Klassenarbeit_01_Nachname</strong> ab.</p></section>
    </template>

    <template v-if="step === 6">
      <section class="practice" aria-labelledby="criteria-title"><h2 id="criteria-title">Punkteverteilung · insgesamt 20 Punkte</h2>
        <div class="table-scroll" tabindex="0" role="region" aria-labelledby="criteria-title"><table><thead><tr><th scope="col">Kriterium</th><th scope="col">Max. Punkte</th></tr></thead><tbody><tr v-for="criterion in criteria" :key="criterion.title"><th scope="row">{{ criterion.title }}</th><td>{{ criterion.points }}</td></tr></tbody><tfoot><tr><th scope="row">Gesamt</th><td><strong>{{ criteria.reduce((sum, criterion) => sum + criterion.points, 0) }}</strong></td></tr></tfoot></table></div>
      </section>
      <section class="practice" aria-labelledby="grades-title"><h2 id="grades-title">Notenschlüssel</h2><p>20 Punkte entsprechen der Note 1,00. Jeder Punkt weniger erhöht die Note um 0,25; 0 Punkte entsprechen der Note 6,00.</p><table><thead><tr><th scope="col">Note</th><th scope="col">Erreichte Punkte</th></tr></thead><tbody><tr v-for="grade in grades" :key="grade[1]"><th scope="row">{{ grade[0] }}</th><td>{{ grade[1] }}</td></tr></tbody></table></section>
    </template>

    <section v-if="step === 1 || step === 3 || step === 4" aria-labelledby="reference-title"><h2 id="reference-title">Die Vorlage</h2><figure class="document-image"><a :href="`${base}Doppelseite_Magazin.png`" target="_blank" rel="noopener noreferrer"><img :src="`${base}Doppelseite_Magazin.png`" alt="Magazin-Doppelseite zu Dishonored 2: links Titel, Infospalte und zwei Textspalten; rechts ein großes farbiges Bild, das über den Bund reicht."></a><figcaption>Klicke auf die Vorlage, um sie in voller Größe zu öffnen.</figcaption></figure><div class="downloads"><a :href="`${base}Doppelseite_Magazin.png`" download>Vorlage herunterladen</a><a :href="`${base}Bild_1.png`" download>Bild für den Nachbau herunterladen</a></div></section>
    <nav class="pager" aria-label="Vorwärts und zurück"><RouterLink v-if="step > 1" :to="link(step - 1)">← Zurück</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">← Zur Übersicht</RouterLink><span>{{ step }} / {{ steps.length }}</span><RouterLink v-if="step < steps.length" :to="link(step + 1)">Weiter →</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">Zur Übersicht →</RouterLink></nav>
    </template>
  </div></main>
</template>

<style scoped>
@import './indesignTutorial.css';
.access-form { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
.access-form :deep(.p-inputtext) { width: 100%; max-width: 360px; }
.access-error { color: #b42318; margin: 0; }
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
