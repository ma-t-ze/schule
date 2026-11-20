<script setup>
import { nextTick, ref, watch } from 'vue'
const props = defineProps({ step: { type: Number, default: 1 } })
const heading = ref(null)
watch(() => props.step, async () => { await nextTick(); heading.value?.focus() })
const link = step => ({ name: 'medientechnik-figma-tutorial-2', params: { step } })
</script>

<template>
  <main class="lesson-page"><div class="shell">
    <RouterLink to="/medientechnik/figma" class="back">← Figma</RouterLink>
    <header><p class="eyebrow">FIGMA · TEILTUTORIAL 2 · SCHRITT {{ step }} VON 11</p><h1 ref="heading" tabindex="-1">Designdatei, Oberfläche und Navigation</h1></header>
    <nav class="step-links" aria-label="Schritte dieses Tutorials"><RouterLink v-for="number in 11" :key="number" :to="link(number)" :aria-current="step === number ? 'step' : undefined" :aria-label="`Schritt ${number}`">{{ number }}</RouterLink></nav>
    <p v-if="step === 1" class="intro">Melde dich zunächst mit deiner <strong>Schul-E-Mail-Adresse</strong> an. In diesem Schritt lernst du die Dateiübersicht und den Design-Editor kennen. Die Oberfläche und englische oder deutsche Bezeichnungen können je nach Konto und Version etwas anders aussehen.</p>
    <figure v-if="step === 1" class="document-image"><a href="/medientechnik/figma/dateiuebersicht.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/dateiuebersicht.png" alt="Figma-Dateiübersicht mit Seitenleiste, Dateiübersicht und Profilbereich."></a></figure>
    <section v-if="step === 1" aria-labelledby="terms-title"><h2 id="terms-title">Einfach erklärt</h2><dl>
      <div><dt>Abo und Team</dt><dd>In Figma werden <strong>Teams inzwischen als „Abos“ bezeichnet</strong>. Jedes Abo bildet einen eigenen Arbeitsbereich, in dem Dateien und Projekte gemeinsam organisiert und bearbeitet werden können.</dd></div>
    </dl></section>
    <section class="practice" v-if="step === 1" aria-labelledby="browser-title"><h2 id="browser-title">1. Die Dateiübersicht kennenlernen</h2><ol>
      <li>Nach der Anmeldung siehst du die <strong>Dateiübersicht</strong> (File browser). Bist du bereits in einer Datei, öffne das Figma-Menü und wähle <strong>Back to files</strong>.</li>
      <li>Durch Klicken auf dein <strong>aktuelles Konto</strong> kommst du zur Startseite.<figure class="document-image account-image"><a href="/medientechnik/figma/aktuelles-konto.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/aktuelles-konto.png" alt="Figma-Menü mit hervorgehobenem aktuellen Konto."></a></figure></li>
      <li>Suche links den Bereich <strong>Abo</strong>. Unter <strong>Abo wechseln</strong> findest du alle verfügbaren Abos. Abos meint hier die Teams, die du erstellt hast oder zu denen du eingeladen bist.</li>
    </ol></section>
    <figure v-if="step === 2" class="document-image abo-image"><a href="/medientechnik/figma/abo-neu.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/abo-neu.png" alt="Figma-Menü mit hervorgehobenem Eintrag Neues Abo."></a></figure>
    <section class="practice" v-if="step === 2" aria-labelledby="team-title"><h2 id="team-title">2. Ein eigenes Abo erstellen</h2><ol>
      <li>Öffne in der Dateiübersicht das Menü beim Bereich <strong>Abo</strong> und wähle <strong>Neu erstellen</strong> (Create new).</li>
      <li>Gib deinem neuen Abo den Namen <strong>Eigene Projekte</strong> und folge den angezeigten Schritten.</li>
      <li>Lade zunächst <strong>niemanden ein</strong>. Überspringe die Einladung; du kannst später Personen hinzufügen.</li>
      <li>Wähle als Plan <strong>Educational</strong>, also den kostenlosen Bildungszugang. Falls diese Option nicht angezeigt wird oder Figma Zahlungsdaten verlangt, frage deine Lehrkraft, bevor du fortfährst.</li>
    </ol></section>
    <figure v-if="step === 3" class="document-image"><a href="/medientechnik/figma/ordner-erstellen.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/ordner-erstellen.png" alt="Dialog zum Erstellen des Ordners Einführung Figma im Abo Eigene Projekte."></a></figure>
    <section class="practice" v-if="step === 3" aria-labelledby="folder-title"><h2 id="folder-title">3. Ein Projekt als Ordner anlegen</h2><ol>
      <li>Wähle <strong>+ Folder</strong>, gib <strong>Einführung Figma</strong> als Namen ein und lade niemanden in den Ordner ein. Erstelle den Ordner.</li>
      <li>Öffne den Ordner. Hier kannst du zusammengehörige Dateien ablegen. Ob du Ordner erstellen und wer sie sehen oder bearbeiten darf, hängt von deinen Berechtigungen ab.</li>
    </ol></section>
    <figure v-if="step === 4" class="document-image"><a href="/medientechnik/figma/designdatei.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/designdatei.png" alt="Eine neu angelegte Figma-Designdatei mit leerer Arbeitsfläche und Bedienfeldern."></a></figure>
    <section class="practice" v-if="step === 4" aria-labelledby="file-title"><h2 id="file-title">4. Eine Designdatei anlegen</h2><ol>
      <li>Öffne deinen Übungsordner im Team oder für eine persönliche Übung den Bereich <strong>Drafts</strong>.</li>
      <li>Wähle oben <strong>+ Erstellen → Design</strong>. Es öffnet sich eine neue Figma-Design-Datei. Eine Datei im Teamordner können berechtigte Teammitglieder finden; prüfe vor dem Teilen die Zugriffsrechte.</li>
      <li>Klicke auf den Dateinamen und benenne die Datei <strong>Figma_Übung_Nachname</strong>. Ersetze „Nachname“ durch deinen eigenen Namen.</li>
      <li>Figma speichert Änderungen in der Datei automatisch. Kehre über <strong>Figma-Menü → Back to files</strong> zur Dateiübersicht zurück und öffne deine Datei erneut.</li>
    </ol></section>
    <template v-if="step === 5">
      <div class="navigation-images"><figure><a href="/medientechnik/figma/navigation-leiste.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/navigation-leiste.png" alt="Linke Navigationsleiste mit Datei, Assets, Tools und Variablen."></a></figure><figure><a href="/medientechnik/figma/navigation-menue.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/navigation-menue.png" alt="Geöffnetes Figma-Hauptmenü mit Datei- und Bearbeitungsbefehlen."></a></figure></div>
      <section class="practice" aria-labelledby="navigation-bar-title"><h2 id="navigation-bar-title">5. Die linke Navigationsleiste</h2><p>Über die Leiste ganz links wechselst du zwischen wichtigen Bereichen deiner Datei:</p><ul>
        <li><strong>Figma-Symbol:</strong> Öffnet das Hauptmenü mit Datei-, Bearbeitungs- und Ansichtsbefehlen sowie dem Weg zurück zur Dateiübersicht.</li>
        <li><strong>Datei:</strong> Zeigt die Seiten und Ebenen deiner aktuellen Designdatei.</li>
        <li><strong>Assets:</strong> Bietet Zugriff auf wiederverwendbare Gestaltungselemente.</li>
        <li><strong>Tools:</strong> Hier findest du zusätzliche Werkzeuge und Erweiterungen.</li>
        <li><strong>Variablen:</strong> Hier verwaltest du wiederverwendbare Werte für deine Gestaltung.</li>
      </ul></section>
    </template>
    <template v-if="step === 6">
      <figure class="document-image"><a href="/medientechnik/figma/seiten-ebenen-frames.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/seiten-ebenen-frames.png" alt="Figma-Seitenleiste mit zwei Seiten und Ebenen für zwei Frames; ein Frame enthält eine Ellipse."></a></figure>
      <section class="practice" aria-labelledby="pages-layers-title"><h2 id="pages-layers-title">6. Seiten, Ebenen und Frames</h2>
        <p>In der Seitenleiste rechts neben der Navigationsleiste organisierst du den Inhalt deiner Datei.</p>
        <ul><li><strong>Seiten:</strong> Über das Plus neben „Seiten“ kannst du weitere Seiten anlegen. Jede Seite besitzt eine eigene Arbeitsfläche (Canvas), auf der du unabhängig gestalten kannst. Klicke auf einen Seitennamen, um zwischen ihnen zu wechseln.</li>
        <li><strong>Ebenen:</strong> Hier siehst du die Elemente der ausgewählten Seite, zum Beispiel Texte, Formen, Bilder und Frames. Über die Einrückung erkennst du, welche Elemente zu einem Frame gehören. Du kannst Ebenen auswählen und ihre Reihenfolge verändern.</li>
        <li><strong>Frames:</strong> Ein Frame ist ein begrenzter Gestaltungsbereich und zugleich ein Behälter für Elemente. Du kannst ihn beispielsweise in der Größe eines DIN-A4-Blatts oder eines iPad-Bildschirms anlegen. Auf einer Seite können mehrere Frames nebeneinander liegen.</li></ul>
        <p>Im Screenshot enthält „Frame 2“ eine Ellipse. Sie ist in der Ebenenliste unter dem Frame eingerückt.</p>
      </section>
    </template>
    <template v-if="step === 7">
      <figure class="document-image properties-image"><a href="/medientechnik/figma/eigenschaften-rechts.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/eigenschaften-rechts.png" alt="Ausgewählte Ellipse auf einem Frame und das rechte Eigenschaftenbedienfeld in Figma."></a></figure>
      <section class="practice" aria-labelledby="properties-title"><h2 id="properties-title">7. Das rechte Eigenschaftenbedienfeld</h2>
        <p>Rechts bearbeitest du die Eigenschaften des ausgewählten Elements. Im Beispiel ist die Ellipse auf dem Frame angeklickt. Je nachdem, ob du eine Form, einen Text oder einen Frame auswählst, zeigt Figma unterschiedliche Einstellungen.</p>
        <p>Hier kannst du das ausgewählte Element bearbeiten und seine Eigenschaften einstellen.</p>
        <p>Probiere es aus: Wähle eine Form aus und ändere rechts ihre Größe und Füllfarbe. Beobachte, wie sich das Element auf der Arbeitsfläche verändert.</p>
      </section>
    </template>
    <template v-if="step === 8">
      <figure class="document-image"><a href="/medientechnik/figma/werkzeugleiste-unten.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/werkzeugleiste-unten.png" alt="Figma-Arbeitsfläche mit ausgewählter Ellipse und Werkzeugleiste am unteren Rand."></a></figure>
      <section class="practice" aria-labelledby="toolbar-title"><h2 id="toolbar-title">8. Die Werkzeugleiste unten</h2>
        <p>Mit der Werkzeugleiste am unteren Rand wählst du aus, was du auf der Arbeitsfläche tun möchtest. Ein kleiner Pfeil neben einem Symbol öffnet weitere Werkzeuge der jeweiligen Gruppe.</p>
        <ul><li><strong>Auswahlwerkzeug:</strong> Elemente anklicken, auswählen und verschieben. Mit dem Handwerkzeug bewegst du deine Ansicht der Arbeitsfläche.</li>
        <li><strong>Frame-Werkzeug:</strong> Einen begrenzten Gestaltungsbereich anlegen, zum Beispiel für einen Bildschirm oder ein Blatt.</li>
        <li><strong>Formwerkzeuge:</strong> Rechtecke, Ellipsen und weitere Formen erstellen. Das Symbol kann die zuletzt gewählte Form zeigen.</li>
        <li><strong>Zeichenstift:</strong> Eigene Linien und Vektorformen zeichnen.</li>
        <li><strong>Textwerkzeug:</strong> Texte auf der Arbeitsfläche hinzufügen und bearbeiten.</li>
        <li><strong>Weitere Werkzeuge:</strong> Über die übrigen Symbole erreichst du unter anderem Kommentare und weitere Funktionen. Rechts kannst du zwischen verfügbaren Arbeitsmodi wechseln.</li></ul>
      </section>
    </template>
    <figure v-if="step === 9" class="document-image"><a href="/medientechnik/figma/arbeitsoberflaeche-gesamt.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/arbeitsoberflaeche-gesamt.png" alt="Figma-Arbeitsoberfläche mit Seiten und Ebenen links, Arbeitsfläche in der Mitte, Eigenschaften rechts und Werkzeugleiste unten."></a></figure>
    <section v-if="step === 9" aria-labelledby="interface-title"><h2 id="interface-title">Zusammenfassung: Die Arbeitsoberfläche verstehen</h2><dl>
      <div><dt>Canvas – Arbeitsfläche</dt><dd>Die große Fläche in der Mitte. Hier platzierst du später Frames, Formen, Texte und Bilder. Du kannst dich auf ihr bewegen, ohne die Gestaltung selbst zu verschieben.</dd></div>
      <div><dt>Werkzeugleiste</dt><dd>Hier wählst du Werkzeuge zum Auswählen, Verschieben und Erstellen von Elementen. In der aktuellen Oberfläche befindet sie sich am unteren Rand; Position und Symbole können sich ändern.</dd></div>
      <div><dt>Navigation und linke Seitenleiste</dt><dd>Über die Navigation wechselst du zwischen Bereichen. In der Datei-Ansicht findest du links die Seiten und die Ebenen der aktuellen Seite. Dort lassen sich Elemente auswählen und ihre Reihenfolge erkennen.</dd></div>
      <div><dt>Rechtes Eigenschaftenbedienfeld</dt><dd>Wählst du ein Element aus, kannst du rechts seine Eigenschaften sehen und ändern, zum Beispiel Position, Größe und Farbe. Ohne Auswahl zeigt der Bereich andere Einstellungen.</dd></div>
    </dl></section>
    <section class="practice" v-if="step === 10" aria-labelledby="navigation-title"><h2 id="navigation-title">10. Navigation ausprobieren</h2><ol>
      <li><strong>Arbeitsfläche verschieben:</strong> Halte die <strong>Leertaste</strong> gedrückt und ziehe mit gedrückter Maustaste. Das verschiebt nur deinen Blick auf die Arbeitsfläche.</li>
      <li><strong>Zoomen:</strong> Halte <strong>⌘</strong> auf dem Mac beziehungsweise <strong>Strg</strong> unter Windows gedrückt und bewege das Mausrad.</li>
      <li><strong>Übersicht wiederfinden:</strong> Drücke <strong>Umschalt + 1</strong>, um vorhandene Inhalte in die Ansicht einzupassen. Mit ausgewähltem Objekt zeigt <strong>Umschalt + 2</strong> die Auswahl vergrößert.</li>
      <li><strong>Element und Ebene suchen:</strong> Drücke <strong>R</strong>, ziehe ein Rechteck auf und wähle es an. Suche die zugehörige Ebene links und die Eigenschaften rechts. Probiere anschließend das Auswahlwerkzeug mit <strong>V</strong> aus.</li>
      <li><strong>Zur Dateiübersicht zurückkehren:</strong> Nutze das Figma-Menü und <strong>Back to files</strong>. Öffne die Datei erneut und kontrolliere, ob dein Rechteck noch vorhanden ist.</li>
    </ol></section>
    <section v-if="step === 10" class="check" aria-labelledby="check-title"><h2 id="check-title">Prüfe dein Ergebnis</h2><p>Du findest dein Team und deinen Übungsordner, kannst deine benannte Designdatei erneut öffnen und Arbeitsfläche, Werkzeugleiste, Ebenenübersicht und Eigenschaftenbedienfeld zeigen. Du kannst die Ansicht verschieben und zoomen.</p></section>
    <p v-if="step === 10">Weiterführend: <a href="https://help.figma.com/hc/en-us/articles/14381406380183-Guide-to-the-file-browser" target="_blank" rel="noopener noreferrer">Figma: Dateiübersicht</a>, <a href="https://help.figma.com/hc/en-us/articles/360038006494-Create-and-manage-folders" target="_blank" rel="noopener noreferrer">Ordner erstellen</a>, <a href="https://help.figma.com/hc/en-us/articles/360039484194-Create-a-new-team" target="_blank" rel="noopener noreferrer">Team erstellen</a> und <a href="https://help.figma.com/hc/en-us/articles/15297425105303-Explore-design-files" target="_blank" rel="noopener noreferrer">Design-Editor kennenlernen</a> (englisch).</p>
    <section v-if="step === 11" class="practice" aria-labelledby="ipad-exercise-title"><h2 id="ipad-exercise-title">11. Übung: iPad-Frame und blauer Kreis</h2><ol>
      <li>Öffne deine Figma-Designdatei und wähle in der unteren Werkzeugleiste das <strong>Frame-Werkzeug</strong> oder drücke <strong>F</strong>.</li>
      <li>Wähle rechts bei den Frame-Vorlagen ein <strong>iPad</strong> aus. Stelle das Format auf <strong>Querformat</strong>, sodass der Frame breiter als hoch ist. Falls nötig, tausche rechts die Werte für Breite und Höhe.</li>
      <li>Wähle in der unteren Werkzeugleiste bei den Formen die <strong>Ellipse</strong>. Ziehe sie innerhalb des iPad-Frames auf und halte dabei die <strong>Umschalttaste</strong> gedrückt, damit ein Kreis entsteht.</li>
      <li>Wähle den Kreis aus. Klicke rechts unter <strong>Füllen</strong> auf das Farbfeld und wähle einen <strong>Blauton</strong>.</li>
      <li>Prüfe in der Ebenenliste, ob der Kreis innerhalb des iPad-Frames liegt.</li>
    </ol></section>
    <section v-if="step === 11" class="check" aria-labelledby="ipad-check-title"><h2 id="ipad-check-title">Prüfe dein Ergebnis</h2><p>Dein iPad-Frame ist im Querformat angelegt und enthält einen blau gefüllten Kreis.</p></section>
    <nav class="pager" aria-label="Tutorialnavigation"><RouterLink v-if="step > 1" :to="link(step - 1)">← Zurück</RouterLink><RouterLink v-else to="/medientechnik/figma">← Zur Übersicht</RouterLink><span>{{ step }} / 11</span><RouterLink v-if="step < 11" :to="link(step + 1)">Weiter →</RouterLink><RouterLink v-else to="/medientechnik/figma">Zur Übersicht →</RouterLink></nav>
  </div></main>
</template>
<style scoped>
@import './indesignTutorial.css';
@import './figmaTutorial.css';
.properties-image { max-width: 720px; }
.abo-image { max-width: 240px; }
.account-image { width: 30%; max-width: 144px; }
.navigation-images { display: flex; align-items: flex-start; gap: 20px; margin-top: 28px; }
.navigation-images figure { margin: 0; }
.navigation-images figure:first-child { flex: 0 1 134px; }
.navigation-images figure:last-child { flex: 0 1 480px; }
.navigation-images img { display: block; width: 100%; height: auto; border-radius: 12px; }
</style>
