<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import placingImage from './flyer-bild-platzieren.png'
import alignImage from './flyer-objekte-ausrichten.png'
import gridImage from './flyer-gestaltungsraster.png'
import clientReference from './flyer-kundenvorlage.png'
defineOptions({ name: 'VeranstaltungsflyerTutorial' })
const props = defineProps({ step: { type: Number, required: true } })
const heading = ref(null)
const steps = [
  {
    number: 1, title: 'Bilder platzieren und beschneiden',
    goal: 'Du gestaltest einen Flyer für die Neueröffnung des Café Florale und wählst einen passenden Bildausschnitt.',
    intro: 'Gestalte einen Flyer zur Neueröffnung des Café Florale in Karlsruhe. Das Café verbindet Jugendstil mit modernem Kaffeegenuss. Verwende das florale Bild „William Morris.png“. Die Texte ergänzt du in Schritt 2. Du entwickelst deinen Flyer in dieser Anleitung weiter.',
    terms: [['Bildrahmen', 'Bestimmt, welcher Bereich eines Bildes auf der Seite sichtbar ist.'], ['Bildinhalt', 'Das Foto innerhalb des Rahmens. Du kannst es unabhängig vom Rahmen verschieben.'], ['Beschneiden', 'Teile des Bildes werden durch den Rahmen ausgeblendet. Die ursprüngliche Bilddatei bleibt erhalten.']],
    actions: ['Lege ein neues A5-Dokument im Hochformat an: 148 × 210 mm, eine Seite, keine Doppelseiten, 10 mm Ränder und 3 mm Anschnitt. Speichere es als „Veranstaltungsflyer.indd“ in deinem Namensordner.', 'Zeichne mit dem Rechteckrahmenwerkzeug einen breiten Bildrahmen im oberen Bereich der Seite.', 'Lade das Foto „William Morris.png“ über den Downloadlink herunter und speichere es in einem Ordner mit deinem Namen.', 'Wähle den Rahmen aus. Öffne Datei → Platzieren, wähle das Bild „William Morris.png“ und bestätige mit Öffnen.', 'Wähle Objekt → Anpassen → Rahmen proportional füllen. Das Bild füllt den Rahmen ohne Verzerrung; überstehende Bereiche sind ausgeblendet.', 'Wähle mit dem Direktauswahlwerkzeug den Bildinhalt aus und verschiebe ihn im Rahmen. Achte darauf, dass das wichtigste Motiv sichtbar bleibt.', 'Verändere zum Vergleich die Größe des Rahmens mit dem Auswahlwerkzeug. Passe den Bildausschnitt danach erneut an.', 'Speichere dein Dokument. Die Texte ergänzt du im nächsten Schritt.'],
    check: 'Das florale Bild füllt den Rahmen ohne Verzerrung. Die Gestaltung passt zum Jugendstil des Café Florale.',
    source: 'https://helpx.adobe.com/at/indesign/desktop/add-graphics-and-media/manage-frames-and-objects/fit-object-to-frame.html'
  },
  {
    number: 2, title: 'Objekte ausrichten und anordnen',
    goal: 'Du ordnest Bild, Texte und Formen mit klaren Kanten und gleichmäßigen Abständen an.',
    intro: 'Ergänze deinen Flyer um eine Überschrift, einen kurzen Infotext und die Veranstaltungsdaten. Statt alles nach Augenmaß zu verschieben, nutzt du das Ausrichten-Bedienfeld.',
    terms: [['Ausrichten', 'Bringt die Kanten oder Mittelpunkte mehrerer Objekte auf dieselbe Linie.'], ['Verteilen', 'Ordnet mehrere Objekte mit gleichmäßigen Abständen an.'], ['Gruppieren', 'Verbindet ausgewählte Objekte zu einer Gruppe, die du gemeinsam verschieben kannst.'], ['Ebenen', 'Helfen dir, Bestandteile eines Layouts zu ordnen und gezielt zu sperren oder auszublenden.']],
    actions: ['Erstelle eigene Textrahmen für „Café Florale“, „Neueröffnung“, „Samstag, 14. November 2026“, „Blumenstraße 18, 76133 Karlsruhe“ und den Fließtext unten. Ergänze eine einfache Form als Gestaltungselement.', 'Wähle die Textrahmen mit dem Auswahlwerkzeug bei gedrückter Umschalttaste aus. Öffne Fenster → Objekt und Layout → Ausrichten.', 'Wähle im Ausrichten-Bedienfeld „An Auswahl ausrichten“ und richte die linken Kanten der Textrahmen aus.', 'Probiere bei drei ausgewählten Rahmen das gleichmäßige Verteilen der vertikalen Abstände aus. Prüfe die Lesereihenfolge und korrigiere bei Bedarf.', 'Wähle zusammengehörige Elemente aus und nutze Objekt → Gruppieren. Verschiebe die Gruppe und hebe sie bei Bedarf über Objekt → Gruppierung aufheben wieder auf.', 'Öffne Fenster → Ebenen. Lege eine Ebene für Bilder und Formen sowie eine für Text an. Verschiebe die Objekte im Ebenenbedienfeld auf die passende Ebene. Speichere dein Dokument.'],
    check: 'Die Textkanten stimmen überein. Die Abstände wirken bewusst gewählt, und wichtige Informationen werden nicht verdeckt.',
    source: 'https://helpx.adobe.com/de/indesign/desktop/add-graphics-and-media/transform-and-arrange-objects/align-distribute-objects.html'
  },
  {
    number: 3, title: 'Ein Gestaltungsraster einsetzen',
    goal: 'Du nutzt Hilfslinien und Spalten, um deinen Flyer systematisch aufzubauen.',
    intro: 'Ein Raster gibt deinem Layout eine Ordnung. Bilder und Texte orientieren sich an gemeinsamen Linien. Diese Hilfslinien werden nicht mitgedruckt.',
    terms: [['Hilfslinien', 'Waagerechte oder senkrechte Linien zum Positionieren von Objekten.'], ['Spalten', 'Teilen die verfügbare Seitenbreite in Bereiche ein.'], ['Grundlinienraster', 'Ein System waagerechter Linien, an denen Textzeilen ausgerichtet werden können.']],
    actions: ["Öffne Layout → Ränder und Spalten. Lege zwei Spalten mit 5 mm Abstand an. Die Seitenränder bleiben bei 10 mm.", "Blende über Ansicht → Lineale einblenden die Lineale ein. Ziehe eine waagerechte Hilfslinie aus dem oberen Lineal auf die Seite, zum Beispiel unter das Foto.", "Aktiviere Ansicht → Raster und Hilfslinien → An Hilfslinien ausrichten. Ordne die Rahmen entlang der Ränder, Spalten und Hilfslinien an. Die Rahmen rasten beim Verschieben automatisch an den Hilfslinien ein.", "Lass das Foto über beide Spalten laufen. Setze den Fließtext zum Café in die linke Spalte und die Eröffnungsdaten in die rechte. Passe die Schriftgrößen an, bis alles gut lesbar ist.", "Probiere das Grundlinienraster aus: Öffne auf dem Mac InDesign → Voreinstellungen → Raster. Stelle im Abschnitt Grundlinienraster bei „Einteilung alle“ einen Wert von 6 pt ein. Blende anschließend über Ansicht → Raster und Hilfslinien → Grundlinienraster einblenden das Raster ein. Falls es nicht sichtbar ist, vergrößere die Ansicht oder überprüfe den Anzeigeschwellenwert in den Voreinstellungen.", "Markiere einen mehrzeiligen Text mit dem Textwerkzeug (T). Öffne Fenster → Schrift und Tabellen → Absatz. Aktiviere dort die Schaltfläche „An Grundlinienraster ausrichten“ (Symbol mit horizontalen Linien). Prüfe das Ergebnis und passe bei Textüberlauf die Rahmenhöhe an.", "Prüfe über Ansicht → Bildschirmmodus → Vorschau den Flyer ohne Hilfslinien. Sind Motiv, Überschrift und Termin gut erkennbar? Speichere das Dokument unter dem Namen „Veranstaltungsflyer.indd“ in deinem Namensordner."],
    check: 'Deine Texte und Bilder folgen einem erkennbaren Raster. Alle Texte sind vollständig sichtbar, und der Flyer ist auch ohne Hilfslinien übersichtlich.',
    source: 'https://helpx.adobe.com/de/indesign/using/grids.html'
  },
  {
    number: 4, title: 'Den Flyer nach Kundenwunsch überarbeiten',
    goal: 'Du entwickelst einen neuen Entwurf nach den Änderungswünschen des Kunden.',
    intro: 'Der Kunde ist mit dem bisherigen Entwurf unzufrieden. Er hat ein Plakat von William Morris gesehen und möchte den Flyer nun in diesem Stil gestalten lassen. Statt „William Morris“ soll oben „Café Florale“ stehen. Verwende dafür das Bild „Strawberry.jpg“ und den kürzeren Text unten. Die restlichen Informationen bleiben gleich. Der Kunde freut sich auf deinen Entwurf.',
    terms: [['Kundenvorlage', 'Orientiere dich an Schrift, Farben, Bildwirkung und Anordnung der Vorlage. Setze die Inhalte des Café Florale ein.'], ['Überarbeitung', 'Passe deinen bisherigen Entwurf an die neuen Wünsche an und speichere die neue Fassung als eigene Datei.']],
    actions: ['Öffne deinen bisherigen Flyer und speichere über Datei → Speichern unter eine neue Fassung als „Flyer_final.indd“ in deinem Namensordner.', 'Lade „Strawberry.jpg“ über den Downloadlink herunter und speichere das Bild in deinem Namensordner.', 'Orientiere dich an der Vorlage: Setze oben den Namen „Café Florale“ anstelle von „William Morris“. Verwende „Strawberry.jpg“ für die große Bildfläche und passe den Bildausschnitt an.', 'Ersetze den bisherigen langen Fließtext durch den kurzen Text unten. Behalte den Anlass Neueröffnung, das Datum Samstag, 14. November 2026 und die Adresse Blumenstraße 18, 76133 Karlsruhe bei.', 'Gestalte Schrift, Farben, Abstände und Bildanordnung passend zur Vorlage. Achte darauf, dass alle Informationen gut lesbar bleiben.', 'Prüfe den Flyer über Ansicht → Bildschirmmodus → Vorschau und speichere deinen fertigen Entwurf als „Flyer_final.indd“ in deinem Namensordner.'],
    check: 'Oben steht Café Florale. Dein Entwurf orientiert sich an der Vorlage und enthält Strawberry.jpg, den kurzen Text und alle Eröffnungsdaten. Die Datei ist als Flyer_final.indd gespeichert.'
  }
]
const current = computed(() => steps[props.step - 1])
const link = step => ({ name: 'indesign-flyer-schritt', params: { step } })
watch(() => props.step, async () => { await nextTick(); heading.value?.focus() })
</script>

<template>
  <main class="lesson-page"><div class="shell">
    <RouterLink to="/medientechnik/adobe-indesign" class="back">← Adobe InDesign</RouterLink>
    <header><p class="eyebrow">2. VERANSTALTUNGSFLYER · SCHRITT {{ step }} VON {{ steps.length }}</p><h1 ref="heading" tabindex="-1">{{ current.title }}</h1><p class="goal">{{ current.goal }}</p></header>
    <nav class="step-links" aria-label="Schritte dieser Anleitung"><RouterLink v-for="item in steps" :key="item.number" :to="link(item.number)" :aria-current="step === item.number ? 'step' : undefined" :aria-label="`Schritt ${item.number}: ${item.title}`">{{ item.number }}</RouterLink></nav>
    <p class="intro">{{ current.intro }}</p>
    <section aria-labelledby="terms-title"><h2 id="terms-title">Einfach erklärt</h2><dl><div v-for="term in current.terms" :key="term[0]"><dt>{{ term[0] }}</dt><dd>{{ term[1] }}</dd></div></dl></section>
    <template v-if="step === 1">
      <figure class="document-image">
        <a :href="placingImage" target="_blank" rel="noopener noreferrer" aria-label="Screenshot zum Platzieren des Bildes vergrößern (neuer Tab)"><img :src="placingImage" width="3448" height="1984" alt="Adobe InDesign: Das grüne William-Morris-Blattmuster ist in einem breiten Bildrahmen oben auf der A5-Seite platziert."></a>
      </figure>
      <p><a class="asset-download" href="/medientechnik/indesign/william-morris.png" download="William Morris.png">William Morris.png herunterladen</a></p>
    </template>
    <figure v-if="step === 2" class="document-image">
      <a :href="alignImage" target="_blank" rel="noopener noreferrer" aria-label="Screenshot zum Ausrichten der Flyer-Elemente vergrößern (neuer Tab)"><img :src="alignImage" width="3462" height="1990" alt="Adobe InDesign: Café-Florale-Flyer mit floralem Bild, grünem Hintergrund und Textrahmen. Rechts ist das Ausrichten-Bedienfeld geöffnet."></a>
    </figure>
    <figure v-if="step === 3" class="document-image">
      <a :href="gridImage" target="_blank" rel="noopener noreferrer" aria-label="Screenshot zum Gestaltungsraster vergrößern (neuer Tab)"><img :src="gridImage" width="3634" height="2070" alt="Adobe InDesign: Café-Florale-Flyer mit floralem Bild und Titel oben, Fließtext links und Eröffnungsdaten rechts. Blaue Grundlinien und Spaltenhilfslinien zeigen das Gestaltungsraster. Rechts ist das Absatzbedienfeld geöffnet."></a>
    </figure>
    <template v-if="step === 4">
      <figure class="document-image client-reference">
        <a :href="clientReference" target="_blank" rel="noopener noreferrer" aria-label="Kundenvorlage vergrößern (neuer Tab)"><img :src="clientReference" alt="William-Morris-Plakat als Kundenvorlage: großer Titel oben, florales Muster als große Bildfläche, cremefarbener Rand und kleine Beschriftung unten."></a>
      </figure>
      <p><a class="asset-download" href="/medientechnik/indesign/Strawberry.jpg" download="Strawberry.jpg">Strawberry.jpg herunterladen</a></p>
    </template>
    <section class="practice" aria-labelledby="practice-title">
      <h2 id="practice-title">{{ step === 3 ? 'Aufgabe: Layout mit Spalten, Hilfslinien und Grundlinienraster gestalten' : 'So gehst du vor' }}</h2>
      <ol>
        <li v-for="(action, index) in current.actions" :key="action">
          {{ action }}
          <aside v-if="step === 3 && index === 5" class="layer-hint" aria-label="Zeilenabstand und Grundlinienraster">
            <p><strong>Was ist der Unterschied zum Zeilenabstand?</strong> Der Zeilenabstand bestimmt den Abstand zwischen den Textzeilen innerhalb eines Absatzes. Das Grundlinienraster legt dagegen feste horizontale Linien über das Dokument. Werden Texte daran ausgerichtet, stehen ihre Zeilen auch in unterschiedlichen Textrahmen auf gleicher Höhe. Das sorgt besonders bei mehrspaltigen Layouts für ein einheitliches Schriftbild.</p>
            <p><strong>Hinweis:</strong> Bei einer Rastereinteilung von 6 pt und einem Zeilenabstand von 12 pt liegt jede Textzeile auf jeder zweiten Rasterlinie. Ist der Zeilenabstand kleiner als die Rastereinteilung, kann sich der tatsächliche Abstand beim Ausrichten vergrößern.</p>
          </aside>
          <aside v-if="step === 2 && index === 5" class="layer-hint" aria-label="Hinweis zum Verschieben auf eine andere Ebene">
            <p>Am einfachsten verschiebst du Objekte direkt im Ebenenbedienfeld von InDesign:</p>
            <ol>
              <li>Öffne Fenster → Ebenen.</li>
              <li>Wähle mit dem schwarzen Pfeil ein oder mehrere Objekte auf der Seite aus.</li>
              <li>Im Ebenenbedienfeld erscheint rechts neben der aktuellen Ebene ein kleines farbiges Quadrat.</li>
              <li>Ziehe dieses Quadrat auf die gewünschte Ebene.</li>
            </ol>
            <p>Damit werden alle ausgewählten Objekte auf die andere Ebene verschoben.</p>
            <p><strong>Tipp:</strong> Mit gedrückter Umschalttaste kannst du mehrere Objekte auswählen und gemeinsam verschieben.</p>
          </aside>
        </li>
      </ol>
    </section>
    <section v-if="step === 2" class="practice" aria-labelledby="cafe-copy-title">
      <h2 id="cafe-copy-title">Texte für deinen Flyer</h2>
      <dl class="event-details">
        <div><dt>Name</dt><dd>Café Florale</dd></div>
        <div><dt>Anlass</dt><dd>Neueröffnung</dd></div>
        <div><dt>Datum</dt><dd>Samstag, 14. November 2026</dd></div>
        <div><dt>Adresse</dt><dd>Blumenstraße 18, 76133 Karlsruhe</dd></div>
      </dl>
      <h3>Fließtext</h3>
      <p>Willkommen im Café Florale, einem besonderen Ort, an dem die Eleganz des Jugendstils auf modernen Kaffeegenuss trifft. Geschwungene Formen, florale Ornamente und warme Farben schaffen eine Atmosphäre voller Charme und Gemütlichkeit. Genieße frisch gebrühten Kaffee, hausgemachte Kuchen und französische Köstlichkeiten in einem einzigartigen Ambiente. Zur feierlichen Eröffnung laden wir dich herzlich ein, unser Café kennenzulernen. Freue dich auf ein Glas Sekt zur Begrüßung, musikalische Begleitung und viele kleine Überraschungen. Entdecke deinen neuen Lieblingsplatz mitten in der Stadt Karlsruhe und lass dich verzaubern.</p>
    </section>
    <section v-if="step === 4" class="practice" aria-labelledby="short-copy-title">
      <h2 id="short-copy-title">Texte für den neuen Entwurf</h2>
      <p>Willkommen im Café Florale! Genieße Kaffee, hausgemachte Kuchen und französische Köstlichkeiten in stilvollem Jugendstil-Ambiente.</p>
      <dl class="event-details"><div><dt>Name</dt><dd>Café Florale</dd></div><div><dt>Anlass</dt><dd>Neueröffnung</dd></div><div><dt>Datum</dt><dd>Samstag, 14. November 2026</dd></div><div><dt>Adresse</dt><dd>Blumenstraße 18, 76133 Karlsruhe</dd></div></dl>
    </section>
    <section class="check" aria-labelledby="check-title"><h2 id="check-title">Prüfe dein Ergebnis</h2><p>{{ current.check }}</p></section>
    <p v-if="current.source" class="source"><a :href="current.source" target="_blank" rel="noopener noreferrer">Bei Adobe nachlesen ↗</a></p>
    <nav class="pager" aria-label="Vorwärts und zurück"><RouterLink v-if="step > 1" :to="link(step - 1)">← Zurück</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">← Zur Übersicht</RouterLink><span>{{ step }} / {{ steps.length }}</span><RouterLink v-if="step < steps.length" :to="link(step + 1)">Weiter →</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">Zur Übersicht →</RouterLink></nav>
  </div></main>
</template>

<style scoped>
@import './indesignTutorial.css';
.client-reference { max-width: 580px; margin-left: auto; margin-right: auto; }
.layer-hint { margin-top: 18px; padding: 18px; border-left: 3px solid #a02b62; border-radius: 0 10px 10px 0; background: #ffedf5; }
.layer-hint > p:first-child { margin-top: 0; }
.layer-hint > p:last-child { margin-bottom: 0; }
.asset-download { display: inline-block; padding: 12px 18px; border: 1px solid #dcb7c9; border-radius: 10px; background: #ffedf5; text-decoration: none; }
</style>
