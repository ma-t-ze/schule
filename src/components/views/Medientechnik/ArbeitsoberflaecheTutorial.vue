<script setup>
import { nextTick, ref, watch } from 'vue'
const props = defineProps({ step: { type: Number, default: 1 } })
const heading = ref(null)
const steps = [
  'Mit einem übersichtlichen Arbeitsbereich starten',
  'Die Bedienfelder für Lerninhalte 1–15 öffnen',
  'Bedienfelder sinnvoll anordnen',
  'Die wichtigsten Werkzeuge finden',
  'Raster, Textverkettung und Ausgabe vorbereiten',
  'Deinen Arbeitsbereich speichern'
]
const link = step => ({ name: 'indesign-arbeitsoberflaeche-einrichten', params: { step } })
watch(() => props.step, async () => { await nextTick(); heading.value?.focus() })
const panels = [
  ['Seiten', 'Fenster → Seiten', '1, 2, 11', 'Seiten überblicken, hinzufügen und übergeordnete Seiten für Seitenzahlen bearbeiten.'],
  ['Eigenschaften und Steuerung', 'Fenster → Eigenschaften; Fenster → Steuerung', '3–7, 12', 'Je nach Auswahl Position, Größe, Text und Rahmen einstellen. Die Steuerung liegt oben.'],
  ['Kontur und Farbfelder', 'Fenster → Kontur; Fenster → Farbe → Farbfelder', '4, 13', 'Linienstärken sowie Flächen- und Konturfarben festlegen; CMYK-, RGB- und Volltonfarbfelder verwalten.'],
  ['Zeichen und Absatz', 'Fenster → Schrift und Tabellen → Zeichen / Absatz', '5, 6', 'Schriftart, Schriftgröße, Zeilenabstand, Laufweite und Absatzausrichtung einstellen.'],
  ['Ausrichten und Ebenen', 'Fenster → Objekt und Layout → Ausrichten; Fenster → Ebenen', '8', 'Objekte ausrichten, verteilen und auf Ebenen organisieren. Gruppieren findest du unter Objekt → Gruppieren.'],
  ['Absatzformate und Zeichenformate', 'Fenster → Formate → Absatzformate / Zeichenformate', '10', 'Wiederverwendbare Textgestaltung anlegen und anwenden.'],
  ['Verknüpfungen und Preflight', 'Fenster → Verknüpfungen; Fenster → Ausgabe → Preflight', '14, 15', 'Fehlende oder veränderte Bilder und Ausgabefehler vor dem Export erkennen.']
]
const tools = [
  ['Auswahl', 'v', 'Rahmen und Objekte auswählen, verschieben und skalieren (3, 7, 8).'],
  ['Direktauswahl', 'a', 'Bildinhalt im Rahmen oder einzelne Ankerpunkte auswählen (3, 7).'],
  ['Text', 't', 'Textrahmen aufziehen und Text bearbeiten (5, 6, 10, 12).'],
  ['Rechteckrahmen', 'f', 'Bildplatzhalter aufziehen (4, 7).'],
  ['Rechteck', 'm', 'Farbflächen zeichnen; für Ellipsen die Werkzeuggruppe öffnen (4, 13).'],
  ['Linie', '–', 'Linien zeichnen und anschließend die Kontur einstellen (4).'],
  ['Hand und Zoom', 'h / z', 'Den sichtbaren Ausschnitt verschieben und Details vergrößern (2).']
]
</script>

<template>
  <main class="lesson-page"><div class="shell">
    <RouterLink to="/medientechnik/adobe-indesign/mini-tutorials" class="back">← Mini Tutorials</RouterLink>
    <header><p class="eyebrow">INDESIGN-ARBEITSOBERFLÄCHE EINRICHTEN · SCHRITT {{ step }} VON {{ steps.length }}</p><h1 ref="heading" tabindex="-1">{{ steps[step - 1] }}</h1><p class="goal">Richte dir einen eigenen Arbeitsbereich ein, in dem du die Werkzeuge und Bedienfelder für die Lerninhalte 1–15 schnell findest.</p></header>
    <nav class="step-links" aria-label="Die sechs Schritte"><RouterLink v-for="(title, index) in steps" :key="title" :to="link(index + 1)" :aria-current="step === index + 1 ? 'step' : undefined" :aria-label="`Schritt ${index + 1}: ${title}`">{{ index + 1 }}</RouterLink></nav>

    <section v-if="step === 1" aria-labelledby="terms-title"><h2 id="terms-title">Was stellst du zusammen?</h2><dl>
      <div><dt>Werkzeugleiste links</dt><dd>Hier wählst du Werkzeuge zum Zeichnen, Auswählen und Schreiben. Gedrückthalten eines Symbols öffnet weitere Werkzeuge seiner Gruppe. Die Reihenfolge der Werkzeuge ist fest.</dd></div>
      <div><dt>Bedienfelder rechts</dt><dd>Hier stellst du zum Beispiel Schrift, Farben und Seiten ein. Du kannst diese Felder öffnen, gruppieren und als eigenen Arbeitsbereich speichern.</dd></div>
    </dl></section>

    <section v-if="step === 1" class="practice" aria-labelledby="start-title"><h2 id="start-title">So gehst du vor</h2><ol>
      <li>Öffne InDesign und lege über <strong>Datei → Neu → Dokument</strong> ein leeres A4-Dokument zum Ausprobieren an.</li>
      <li>Wähle <strong>Fenster → Arbeitsbereich → Erweitert</strong> als Ausgangspunkt. Die verfügbaren Vorgaben können je nach Version abweichen.</li>
      <li>Blende über <strong>Fenster → Werkzeuge</strong> die Werkzeugleiste ein. Über den Doppelpfeil oben an der Leiste wechselst du zwischen einer und zwei Spalten.</li>
      <li>Öffne <strong>Fenster → Eigenschaften</strong> und <strong>Fenster → Steuerung</strong>. Dort findest du Einstellungen, die du häufig brauchst: im Eigenschaftenbedienfeld rechts und im Steuerungsbedienfeld oberhalb des Dokuments.</li>
    </ol><p>Falls plötzlich alle Bedienfelder fehlen: Drücke <strong>Tab</strong>, während du keinen Text bearbeitest. Mit <strong>W</strong> wechselst du außerhalb der Texteingabe zwischen Normalansicht und Vorschau.</p></section>

    <section v-if="step === 2" class="practice" aria-labelledby="panels-title"><h2 id="panels-title">So gehst du vor</h2><p>Öffne die folgenden Felder über das Menü <strong>Fenster</strong>. Die Zahlen beziehen sich auf die <RouterLink to="/medientechnik/adobe-indesign/lerninhalte">Übersicht Lerninhalte</RouterLink>. Je nach Version können einzelne Bezeichnungen leicht abweichen.</p>
      <div class="table-scroll" tabindex="0" role="region" aria-labelledby="panels-title"><table><thead><tr><th scope="col">Bedienfelder</th><th scope="col">Menüweg</th><th scope="col">Lerninhalt</th><th scope="col">Wofür?</th></tr></thead><tbody><tr v-for="panel in panels" :key="panel[0]"><th scope="row">{{ panel[0] }}</th><td>{{ panel[1] }}</td><td>{{ panel[2] }}</td><td>{{ panel[3] }}</td></tr></tbody></table></div>
    </section>

    <section v-if="step === 3" class="practice" aria-labelledby="arrange-title"><h2 id="arrange-title">So gehst du vor</h2><ol>
      <li>Ziehe ein Bedienfeld an seiner <strong>Registerkarte mit dem Namen</strong> zum rechten Fensterrand. Lass los, sobald die Andockmarkierung erscheint.</li>
      <li>Ziehe zusammengehörige Registerkarten in dieselbe Gruppe: <strong>Seiten / Ebenen / Verknüpfungen</strong>, <strong>Zeichen / Absatz</strong>, <strong>Absatzformate / Zeichenformate</strong> sowie <strong>Farbfelder / Kontur</strong>.</li>
      <li>Halte <strong>Eigenschaften</strong> gut erreichbar. Ordne <strong>Ausrichten</strong> und <strong>Preflight</strong> darunter oder in einer zweiten schmalen Spalte an.</li>
      <li>Klappe Gruppen über den Doppelpfeil zu Symbolen zusammen, wenn dein Bildschirm wenig Platz bietet. Ein Klick auf ein Symbol öffnet das jeweilige Feld.</li>
    </ol><p>Dein Ziel: links die Werkzeuge, in der Mitte möglichst viel Platz für die Seite und rechts die gruppierten Bedienfelder.</p></section>

    <section v-if="step === 4" class="practice" aria-labelledby="tools-title"><h2 id="tools-title">So gehst du vor</h2><p>Suche diese Werkzeuge in der linken Leiste. Halte das jeweilige Symbol gedrückt, wenn ein Werkzeug in einer Gruppe verborgen ist. Drücke die Buchstabentasten ohne Umschalttaste. Tastenkürzel funktionieren, wenn du gerade keinen Text eingibst; drücke vorher <strong>Esc</strong>.</p>
      <div class="table-scroll" tabindex="0" role="region" aria-labelledby="tools-title"><table><thead><tr><th scope="col">Werkzeug</th><th scope="col">Taste</th><th scope="col">Aufgabe und Lerninhalt</th></tr></thead><tbody><tr v-for="tool in tools" :key="tool[0]"><th scope="row">{{ tool[0] }}</th><td>{{ tool[1] }}</td><td>{{ tool[2] }}</td></tr></tbody></table></div>
      <p>Die Farbfelder <strong>Fläche und Kontur</strong> unten in der Werkzeugleiste bestimmen, welchen Teil eines ausgewählten Objekts du einfärbst. Für wiederverwendbare Farben nutzt du dein Bedienfeld <strong>Farbfelder</strong>.</p>
    </section>

    <section v-if="step === 5" class="practice" aria-labelledby="layout-title"><h2 id="layout-title">So gehst du vor</h2><ul>
      <li><strong>Raster (9):</strong> Blende unter <strong>Ansicht → Lineale einblenden</strong> die Lineale ein und ziehe Hilfslinien daraus auf die Seite. Spalten stellst du unter <strong>Layout → Ränder und Spalten</strong> ein. Das Grundlinienraster aktivierst du unter <strong>Ansicht → Raster und Hilfslinien → Grundlinienraster einblenden</strong>; den Abstand legst du in den <strong>Voreinstellungen → Raster</strong> fest (macOS: Menü InDesign; Windows: Bearbeiten).</li>
      <li><strong>Textverkettung (12):</strong> Aktiviere <strong>Ansicht → Extras → Textverkettungen einblenden</strong>. Mit dem Auswahlwerkzeug erkennst du Ein- und Ausgang eines Textrahmens. Ein rotes Plus am Ausgang zeigt Textüberlauf an.</li>
      <li><strong>Ausgabe (14–15):</strong> Aktiviere im Bedienfeld <strong>Preflight</strong> die Prüfung und kontrolliere die Verknüpfungen. Den PDF-Export öffnest du später über <strong>Datei → Exportieren</strong>; dort wählst du Adobe PDF (Druck) oder Adobe PDF (Interaktiv) passend zur Aufgabe. Anschnitt und Schnittmarken stellst du beim Druck-PDF im Exportdialog ein.</li>
    </ul></section>

    <section v-if="step === 6" class="practice" aria-labelledby="save-title"><h2 id="save-title">So gehst du vor</h2><ol>
      <li>Wähle <strong>Fenster → Arbeitsbereich → Neuer Arbeitsbereich</strong>.</li>
      <li>Vergib den Namen <strong>Unterricht – InDesign 1–15</strong>. Aktiviere <strong>Bedienfeldpositionen</strong> und bestätige mit <strong>OK</strong>.</li>
      <li>Wenn du später etwas verschiebst: Wähle unter <strong>Fenster → Arbeitsbereich</strong> deinen Arbeitsbereich und anschließend <strong>„Unterricht – InDesign 1–15“ zurücksetzen</strong>.</li>
    </ol><p>Der Arbeitsbereich speichert deine Bedienfeldanordnung. Dokumentformat, Ränder, Rastereinstellungen und PDF-Exportvorgaben prüfst du für jede Aufgabe gesondert.</p></section>

    <section v-if="step === 6" aria-labelledby="sources-title"><h2 id="sources-title">Zum Nachschlagen</h2><p class="source">Adobe-Hilfe: <a href="https://helpx.adobe.com/lu_de/indesign/desktop/get-started/settings-and-preferences/create-and-manage-workspaces.html">Arbeitsbereiche erstellen und verwalten</a>, <a href="https://helpx.adobe.com/lu_de/indesign/desktop/get-started/settings-and-preferences/customize-panels.html">Bedienfelder anpassen</a> und <a href="https://helpx.adobe.com/de/indesign/desktop/get-started/toolbox/change-the-toolbox-layout.html">Werkzeugleiste anpassen</a>.</p></section>
    <nav class="pager" aria-label="Vorwärts und zurück">
      <RouterLink v-if="step > 1" :to="link(step - 1)">← Zurück</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign/mini-tutorials">← Zur Übersicht</RouterLink>
      <span>{{ step }} / {{ steps.length }}</span>
      <RouterLink v-if="step < steps.length" :to="link(step + 1)">Weiter →</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign/mini-tutorials">Zur Übersicht →</RouterLink>
    </nav>
  </div></main>
</template>

<style scoped>
@import './indesignTutorial.css';
.table-scroll { overflow-x: auto; margin: 24px 0; }
table { width: 100%; min-width: 650px; border-collapse: collapse; font-size: 15px; line-height: 1.6; }
th, td { padding: 14px 12px; border-bottom: 1px solid #e0d8dc; text-align: left; vertical-align: top; }
thead { background: #f8f7f3; }
th[scope='row'] { font-weight: 600; }
.table-scroll:focus-visible { outline: 3px solid #a02b62; outline-offset: 4px; }
</style>
