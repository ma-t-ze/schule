<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import newDocumentImage from './indesign-neues-dokument.png'
import workspaceImage from './indesign-arbeitsoberflaeche.png'
import shapeToolImage from './indesign-formwerkzeug-markiert.svg'
import directSelectionImage from './indesign-direktauswahl.png'
import textFramesImage from './indesign-textrahmen.png'
import typographyImage from './indesign-plakat-typografie.png'
import posterReference from './plakat-vorlage.png'
import bauhausInspirationTwo from './bauhaus-inspiration-2.png'
const props = defineProps({ step: { type: Number, required: true } })
const heading = ref(null)
const steps = [
  {
    title: 'Ein neues Dokument anlegen',
    goal: 'Du legst eine passende Seite für dein Plakat an.',
    intro: 'Ein typografisches Plakat wirkt vor allem durch Schrift. In diesem Beispiel gestaltest du ein Plakat für einen „DESIGN TAG“. Zuerst legst du Größe und Ausrichtung fest.',
    terms: [['Format', 'Die Breite und Höhe deiner Seite.'], ['Ausrichtung', 'Hochformat ist höher als breit. Querformat ist breiter als hoch.'], ['Ränder', 'Hilfslinien für Abstand zum Seitenrand. Sie werden nicht mitgedruckt.'], ['Anschnitt', 'Ein zusätzlicher Bereich außerhalb der Seite. Hintergründe reichen bis hierhin, damit beim Zuschneiden keine weißen Kanten entstehen.']],
    actions: ['Wähle Datei → Neu → Dokument.', 'Lege für diese Übung A3 im Hochformat an: 297 × 420 mm.', 'Stelle eine Seite ein und schalte Doppelseiten aus.', 'Wähle für diese Übung 15 mm Ränder und 3 mm Anschnitt an allen Seiten. Für echte Druckaufträge gelten die Vorgaben der Druckerei.', 'Erstelle auf dem Desktop einen neuen Ordner mit deinem Vor- und Nachnamen.', 'Erstelle das Dokument. Speichere es über Datei → Speichern unter als „Typografisches-Plakat.indd“ in dem neu erstellten Ordner.'],
    check: 'Du siehst eine einzelne Seite im Hochformat mit Rand- und Anschnittlinien.'
  },
  {
    title: 'Die Arbeitsoberfläche kennenlernen',
    goal: 'Du findest die Werkzeuge und Bedienfelder, die du brauchst.',
    intro: 'In der Mitte liegt deine Seite. Rundherum findest du Werkzeuge und Einstellungen. Du musst noch nicht jedes Symbol kennen.',
    terms: [['Werkzeugleiste', 'Hier wählst du zum Beispiel den Auswahlpfeil oder das Textwerkzeug.'], ['Bedienfelder', 'Hier stellst du Eigenschaften ein, zum Beispiel Schrift oder Farbe.'], ['Seitenbedienfeld', 'Es zeigt die Seiten deines Dokuments.'], ['Zoom', 'Du vergrößerst die Ansicht. Die echte Seitengröße bleibt gleich.']],
    actions: ['Suche die Werkzeugleiste. Fahre mit der Maus über ein Symbol, um seinen Namen zu lesen.', 'Öffne Fenster → Seiten. Dein Dokument enthält eine Seite.', 'Öffne Fenster → Eigenschaften. Hier findest du Einstellungen passend zur aktuellen Auswahl.', 'Wähle das Zoomwerkzeug mit dem Lupensymbol und vergrößere einen Bereich.', 'Wähle Ansicht → Seite in Fenster einpassen, um die ganze Seite wieder zu sehen.'],
    check: 'Du findest Werkzeugleiste und Seitenbedienfeld und kannst zwischen Detailansicht und ganzer Seite wechseln.'
  },
  {
    title: 'Einfache Formen und Rahmen erstellen',
    goal: 'Du ergänzt eine Form als Gestaltungselement.',
    intro: 'Ein Rechteck kann eine Fläche hinter einer Überschrift oder ein schmaler Balken sein. Ein Rahmen ist dagegen zunächst ein Platzhalter, etwa für ein späteres Bild.',
    terms: [['Rechteckwerkzeug', 'Zeichnet eine rechteckige Form.'], ['Rechteckrahmenwerkzeug', 'Zeichnet einen Platzhalter. Du erkennst ihn am Kreuz im Rahmen.'], ['Fläche', 'Die Farbe im Inneren einer Form.'], ['Kontur', 'Die Linie um eine Form.']],
    actions: ['Wähle das Rechteckwerkzeug und ziehe einen schmalen Balken im unteren Bereich deiner Seite auf.', 'Öffne Fenster → Farbe → Farbfelder. Wähle für die Fläche Schwarz und für die Kontur „Ohne“. Achte darauf, ob Fläche oder Kontur aktiv ist.', 'Zeichne testweise einen Rechteckrahmen. Vergleiche ihn mit der Form und lösche den leeren Platzhalter danach wieder.'],
    check: 'Auf deiner Seite steht ein einfacher Balken. Du erkennst den Unterschied zwischen Fläche, Kontur und leerem Rahmen.'
  },
  {
    title: 'Objekte auswählen und verändern',
    goal: 'Du unterscheidest den schwarzen und den weißen Auswahlpfeil.',
    intro: 'Texte und Formen liegen als Objekte auf der Seite. Zum Verschieben musst du das passende Objekt zuerst auswählen. Du hast bereits einen Balken gezeichnet. An ihm probierst du jetzt die beiden Auswahlwerkzeuge aus.',
    terms: [['Auswahlwerkzeug · schwarzer Pfeil', 'Wählt einen ganzen Rahmen aus. Damit verschiebst du ihn oder änderst seine Größe.'], ['Direktauswahlwerkzeug · weißer Pfeil', 'Wählt einzelne Punkte einer Form oder den Inhalt eines Bildrahmens aus.']],
    actions: ['Wähle den schwarzen Pfeil in der Werkzeugleiste. Klicke auf deinen Balken und verschiebe ihn.', 'Dein Balken zeigt einen Rahmen mit Griffen. Ziehe an einem Griff, um seine Breite oder Höhe zu ändern. Bei Textrahmen verändert das die Rahmenfläche, nicht automatisch die Schriftgröße.', 'Für genaues Skalieren nutzt du die Skalierungswerte im Eigenschaftenbedienfeld. Verknüpfe Breite und Höhe, wenn die Proportionen gleich bleiben sollen.', 'Wähle den weißen Pfeil. Klicke auf einen Eckpunkt deines Balkens und verschiebe ihn. Mache die Änderung anschließend mit Bearbeiten → Rückgängig rückgängig.', 'Merke dir für dein Plakat: Zum Anordnen ganzer Formen und Textrahmen verwendest du den schwarzen Pfeil.'],
    check: 'Du hast den Balken verschoben und seine Größe verändert. Du kannst erklären, welcher Pfeil das ganze Objekt und welcher einzelne Punkte auswählt.'
  },
  {
    title: 'Text in Textrahmen setzen',
    goal: 'Du platzierst Überschrift und Informationen auf deinem Plakat.',
    intro: 'Text steht in InDesign immer in einem Textrahmen. Jeder Rahmen lässt sich unabhängig anordnen. So kannst du eine große Überschrift und einen kleinen Infotext getrennt gestalten.',
    terms: [['Textwerkzeug · T', 'Erstellt Textrahmen und bearbeitet ihren Text.'], ['Textrahmen', 'Ein Bereich auf der Seite, in dem Text steht.']],
    actions: ['Wähle das Textwerkzeug mit dem T-Symbol.', 'Ziehe im oberen Bereich einen großen Textrahmen auf und schreibe „DESIGN TAG“.', 'Erstelle einen zweiten Textrahmen und schreibe zum Beispiel „Ausstellung · Workshops · Austausch“.', 'Erstelle einen dritten Textrahmen für „Freitag, 10–16 Uhr · Schule“. Ordne ihn oberhalb des Balkens an.', 'Wähle den schwarzen Pfeil zum Verschieben der Rahmen. Zum Ändern der Wörter klickst du mit dem Textwerkzeug in den Text.', 'Ein rotes Plus am Rahmen bedeutet: Nicht der ganze Text passt hinein. Vergrößere den Rahmen, bis alles sichtbar ist.'],
    check: 'Alle drei Texte sind vollständig sichtbar und haben eigene Textrahmen.',
    source: 'https://helpx.adobe.com/de/indesign/desktop/add-and-manage-text/add-and-manage-text-frames/create-position-text-frames.html'
  },
  {
    title: 'Die Schrift gestalten',
    goal: 'Du machst wichtige Informationen groß und hältst dein Plakat gut lesbar.',
    intro: 'Die Überschrift soll zuerst auffallen. Zusatzinformationen folgen danach. Unterschiedliche Schriftgrößen helfen beim Lesen. Beginne mit einer Schriftfamilie und höchstens zwei Schriftschnitten.',
    terms: [['Schriftart', 'Bestimmt, wie die Buchstaben aussehen.'], ['Schriftgröße', 'Bestimmt die Größe der Buchstaben; sie wird in Punkt (pt) angegeben.'], ['Zeilenabstand', 'Der Abstand von einer Textzeile zur nächsten.'], ['Ausrichtung', 'Zum Beispiel linksbündig oder zentriert.'], ['Laufweite', 'Verändert die Abstände zwischen den Buchstaben eines markierten Textes.']],
    actions: ['Markiere „DESIGN TAG“ mit dem Textwerkzeug. Öffne Fenster → Schrift und Tabellen → Zeichen.', 'Wähle eine gut lesbare Schrift. Probiere für die Überschrift etwa 80 pt und einen fetten Schriftschnitt. Passe Rahmen oder Schriftgröße an, wenn der Text nicht hineinpasst.', 'Gestalte die Zusatzinformationen zum Beispiel in 24 pt. Den langen Ausstellungstext stellst du nach dem Einfügen auf 12 pt ein.', 'Ersetze nun im dritten Textrahmen den Text „Freitag, 10–16 Uhr · Schule“ durch folgenden Text: „Am Freitag von 10 bis 16 Uhr lädt unsere Schule zu einer Ausstellung über Minimalismus und die Wirkung einfacher geometrischer Formen ein. Im Mittelpunkt stehen Kreis, Rechteck und Quadrat. Die ausgestellten Arbeiten zeigen, wie aus wenigen grundlegenden Elementen spannende Kompositionen entstehen können. Durch unterschiedliche Größen, Farben, Abstände und Anordnungen entwickeln sich vielfältige gestalterische Möglichkeiten. Dabei wird deutlich, dass eine reduzierte Gestaltung keineswegs langweilig sein muss. Vielmehr lenkt der bewusste Verzicht auf überflüssige Details den Blick auf das Wesentliche. Die Ausstellung lädt dazu ein, Formen neu zu entdecken, ihre Wirkung zu untersuchen und die besondere Ästhetik des Minimalismus selbst zu erleben.“', 'Markiere den langen Ausstellungstext und stelle die Schriftgröße auf 12 pt ein. Passe den Zeilenabstand so an, dass die Zeilen gut lesbar sind, und vergrößere bei Bedarf den Textrahmen, bis der gesamte Text sichtbar ist.', 'Stelle im Absatzbedienfeld alle Texte linksbündig ein. Richte die Rahmen am linken Seitenrand innerhalb der Ränder aus.', 'Stelle die Schrift in allen Textrahmen auf Helvetica um. Markiere dazu jeweils den Text mit dem Textwerkzeug und wähle im Zeichenbedienfeld Helvetica. Zeichne neben dem Rechteck einen Kreis: Wähle das Ellipsenwerkzeug und halte beim Aufziehen die Umschalttaste gedrückt. So bleiben Breite und Höhe gleich. Wenn du den Kreis später mit dem Auswahlwerkzeug an einem Eckgriff vergrößerst oder verkleinerst, halte ebenfalls die Umschalttaste gedrückt, damit die Proportionen erhalten bleiben.', 'Wähle Ansicht → Bildschirmmodus → Vorschau. Prüfe, ob alle Texte vollständig sichtbar sind und die Anordnung von Schrift, Rechteck und Kreis passt.', 'Speichere dein Dokument unter dem Namen „Design-Tag.indd“ in dem Ordner mit deinem Namen.'],
    check: 'Die Überschrift fällt zuerst auf. Alle Texte sind lesbar, haben genügend Abstand und passen vollständig in ihre Rahmen.',
    source: 'https://helpx.adobe.com/de/indesign/desktop/format-and-style-text/composition-and-text-wrapping/apply-and-manage-text-formatting.html'
  },
  {
    title: 'Ein Plakat nach Vorlage nachbauen',
    goal: 'Du wendest die Werkzeuge selbstständig auf ein neues Plakat an.',
    intro: 'Baue das Plakat „Neue Gestaltung 1920–1935“ möglichst genau nach. Lege dafür ein neues Dokument an. Dein bisheriges Plakat bleibt als eigene Datei erhalten.',
    terms: [['Vorlage', 'Das Bild unten zeigt dir, wo Texte und Formen stehen und wie groß sie im Verhältnis zueinander sind.'], ['Abstände und Proportionen', 'Vergleiche die Größen der Elemente und die freien Flächen dazwischen.']],
    actions: ['Wiederhole Schritt 1: Lege ein neues Dokument in A3 im Hochformat an, mit einer Seite, ohne Doppelseiten, 15 mm Rändern und 3 mm Anschnitt. Speichere es unter „Neue-Gestaltung-Plakat.indd“.', 'Stelle das Plakat so gut wie möglich nach und lege es unter dem Namen „Neue-Gestaltung.indd“ in dem Ordner mit deinem Namen ab.'],
    check: 'Du hast eine neue Datei erstellt. Texte, rote und schwarze Formen sowie ihre Anordnung entsprechen möglichst genau der Vorlage.'
  },
  {
    title: 'Ein eigenes Bauhaus-Plakat gestalten',
    goal: 'Du gestaltest selbstständig ein Plakat zum Thema „Ausstellung zum Staatlichen Bauhaus“.',
    intro: 'Entwickle eine eigene Gestaltung. Kombiniere die Überschrift und den langen Text mit verschiedenen grafischen Elementen, die vom Bauhaus-Stil inspiriert sind. Die Schrift kannst du frei wählen.',
    terms: [['Grafische Elemente', 'Nutze zum Beispiel Kreise, Rechtecke, Quadrate und Linien. Experimentiere mit Größen, Farben und ihrer Anordnung.'], ['Eigene Gestaltung', 'Entscheide selbst, wie Schrift, Formen und freie Flächen zusammenwirken. Achte darauf, dass die Texte gut lesbar bleiben.']],
    actions: ['Wiederhole Schritt 1 und lege ein neues Dokument an: A3 im Hochformat, eine Seite, keine Doppelseiten, 15 mm Ränder und 3 mm Anschnitt.', 'Erstelle einen Textrahmen für die Überschrift „Ausstellung zum Staatlichen Bauhaus“. Wähle selbst eine passende Schrift und Schriftgröße.', 'Setze den langen Text unten in einen eigenen Textrahmen. Gestalte ihn gut lesbar und prüfe, dass der gesamte Text sichtbar ist.', 'Ergänze verschiedene grafische Elemente im Bauhaus-Stil. Probiere Kreise, Rechtecke, Quadrate und Linien aus und entwickle eine eigene Komposition.', 'Prüfe dein Plakat über Ansicht → Bildschirmmodus → Vorschau. Speichere es unter „Bauhaus-Ausstellung.indd“ in dem Ordner mit deinem Namen.'],
    bodyText: 'Das Staatliche Bauhaus, inzwischen meist nur Bauhaus, war eine 1919 von Walter Gropius in Weimar gegründete Kunstschule. Nach Art und Konzeption war es damals etwas völlig Neues, nämlich eine Zusammenführung von Kunst und Handwerk. Ebenso stand es „jeder unbescholtenen Person“ offen; Frauen und Männer hatten gleiche Rechte, aber auch gleiche Pflichten. Das Bauhaus bestand zeitlich parallel mit und in der Weimarer Republik von 1919 bis 1933 und gilt heute weltweit als Heimstätte der Avantgarde der Klassischen Moderne auf allen Gebieten der freien und angewandten Architektur, der Kunst und des Designs. Die Resonanz des Bauhauses hält bis heute an und prägt wesentlich das Bild moderner Strömungen.',
    check: 'Dein Plakat enthält die Überschrift, den vollständigen langen Text und verschiedene grafische Elemente. Du hast eine eigene Gestaltung entwickelt und die Datei gespeichert.'
  }
]
const current = computed(() => steps[props.step - 1])
const link = step => ({ name: 'indesign-plakat-schritt', params: { step } })
watch(() => props.step, async () => { await nextTick(); heading.value?.focus() })
</script>

<template>
  <main class="lesson-page">
    <div class="shell">
      <RouterLink to="/medientechnik/adobe-indesign" class="back">← Adobe InDesign</RouterLink>
      <header><p class="eyebrow">1. TYPOGRAFISCHES PLAKAT · SCHRITT {{ step }} VON {{ steps.length }}</p><h1 ref="heading" tabindex="-1">{{ current.title }}</h1><p class="goal">{{ current.goal }}</p></header>
      <nav class="step-links" aria-label="Die acht Schritte"><RouterLink v-for="(item, index) in steps" :key="item.title" :to="link(index + 1)" :aria-current="step === index + 1 ? 'step' : undefined" :aria-label="`Schritt ${index + 1}: ${item.title}`">{{ index + 1 }}</RouterLink></nav>
      <p class="intro">{{ current.intro }}</p>
      <section aria-labelledby="terms-title"><h2 id="terms-title">Einfach erklärt</h2><dl><div v-for="term in current.terms" :key="term[0]"><dt>{{ term[0] }}</dt><dd>{{ term[1] }}</dd></div></dl></section>
      <figure v-if="step === 1" class="document-image">
        <a :href="newDocumentImage" target="_blank" rel="noopener noreferrer" aria-label="Screenshot in voller Größe öffnen (neuer Tab)"><img :src="newDocumentImage" width="3444" height="1980" alt="Adobe InDesign 2026: Dialog Neues Dokument mit Einstellungen für Breite, Höhe, Ausrichtung, Seiten und Ränder."></a>
        <figcaption>Hier legst du dein neues Dokument an. Für diese Übung stellst du A3 im Hochformat ein; die Werte im Screenshot sind ein anderes Beispiel. Klicke auf das Bild, um es zu vergrößern.</figcaption>
      </figure>
      <figure v-if="step === 2" class="document-image">
        <a :href="workspaceImage" target="_blank" rel="noopener noreferrer" aria-label="Arbeitsoberfläche in voller Größe öffnen (neuer Tab)"><img :src="workspaceImage" width="3884" height="2276" alt="Arbeitsoberfläche von Adobe InDesign 2026: Werkzeugleiste links, eine leere Plakatseite in der Mitte und das geöffnete Seitenbedienfeld rechts."></a>
        <figcaption>Links findest du die Werkzeugleiste, in der Mitte deine Seite und rechts die Bedienfelder. Klicke auf das Bild, um es zu vergrößern.</figcaption>
      </figure>
      <figure v-if="step === 3" class="document-image">
        <a :href="shapeToolImage" target="_blank" rel="noopener noreferrer" aria-label="Screenshot mit markiertem Ellipsenwerkzeug vergrößern (neuer Tab)"><img :src="shapeToolImage" width="3882" height="2272" alt="InDesign mit einem schwarzen Balken auf der Seite. Ein roter Kreis markiert das Ellipsenwerkzeug links in der Werkzeugleiste."></a>
        <figcaption>Halte die Maustaste auf dem rot markierten Ellipsenwerkzeug gedrückt. Im aufklappenden Menü wählst du das Rechteckwerkzeug. Klicke auf das Bild, um es zu vergrößern.</figcaption>
      </figure>
      <figure v-if="step === 4" class="document-image">
        <a :href="directSelectionImage" target="_blank" rel="noopener noreferrer" aria-label="Screenshot zur Direktauswahl vergrößern (neuer Tab)"><img :src="directSelectionImage" width="3452" height="1970" alt="Adobe InDesign: Eine schwarze Form mit verschobenen Eckpunkten ist mit dem Direktauswahlwerkzeug ausgewählt. Rechts ist das Eigenschaftenbedienfeld geöffnet."></a>
        <figcaption>Mit dem Direktauswahlwerkzeug kannst du einzelne Eckpunkte verschieben und dadurch die Form verändern. Klicke auf das Bild, um es zu vergrößern.</figcaption>
      </figure>
      <figure v-if="step === 5" class="document-image">
        <a :href="textFramesImage" target="_blank" rel="noopener noreferrer" aria-label="Screenshot zu Textrahmen vergrößern (neuer Tab)"><img :src="textFramesImage" width="3448" height="1980" alt="Adobe InDesign: Drei Textrahmen mit DESIGN TAG, Zusatzinformationen und Termin stehen über einem schwarzen Balken auf der Plakatseite."></a>
        <figcaption>Überschrift, Zusatzinformationen und Termin stehen jeweils in einem eigenen Textrahmen. Die Schrift gestaltest du im nächsten Schritt. Klicke auf das Bild, um es zu vergrößern.</figcaption>
      </figure>
      <figure v-if="step === 6" class="document-image">
        <a :href="typographyImage" target="_blank" rel="noopener noreferrer" aria-label="Screenshot zum gestalteten Plakat vergrößern (neuer Tab)"><img :src="typographyImage" width="3450" height="1970" alt="InDesign-Plakat mit der Überschrift DESIGN TAG, Zusatzinformationen, dem Ausstellungstext sowie einem schwarzen Rechteck und einem Kreis."></a>
        <figcaption>Das Beispiel zeigt die gestalteten Texte und die Kombination aus Rechteck und Kreis. Klicke auf das Bild, um es zu vergrößern.</figcaption>
      </figure>
      <figure v-if="step === 7" class="document-image poster-reference">
        <a :href="posterReference" target="_blank" rel="noopener noreferrer" aria-label="Plakatvorlage vergrößern (neuer Tab)"><img :src="posterReference" alt="Plakat Neue Gestaltung 1920–1935 des Museums für Gestaltung Zürich: links schwarze und rote Schrift, rechts ein rotes Rechteck, ein schwarzer Kreis und ein schwarzes Rechteck, unten ein schmaler roter Balken."></a>
        <figcaption>Baue dieses Plakat nach. Klicke auf die Vorlage, um sie zu vergrößern.</figcaption>
      </figure>
      <p v-if="step >= 7"><RouterLink :to="link(1)">Schritt 1: Dokument anlegen noch einmal ansehen →</RouterLink></p>
      <div v-if="step === 8" class="bauhaus-references">
      <figure class="document-image bauhaus-reference">
        <a :href="bauhausInspirationTwo" target="_blank" rel="noopener noreferrer" aria-label="Zweite Bauhaus-Vorlage vergrößern (neuer Tab)"><img :src="bauhausInspirationTwo" alt="Bauhaus-Plakat 1919–1933 mit roten, blauen und gelben Rechtecken, Kreisen, Halbkreisen und schwarzen Linien."></a>
      </figure>
      </div>
      <section class="practice" aria-labelledby="practice-title"><h2 id="practice-title">So gehst du vor</h2><ol><li v-for="action in current.actions" :key="action">{{ action }}</li></ol></section>
      <section v-if="current.bodyText" class="practice" aria-labelledby="body-text-title">
        <h2 id="body-text-title">Der lange Text für dein Plakat</h2>
        <p>{{ current.bodyText }}</p>
        <p class="source">Wenn du mehr erfahren möchtest: <a href="https://de.wikipedia.org/wiki/Bauhaus" target="_blank" rel="noopener noreferrer">Über das Bauhaus informieren ↗</a></p>
      </section>
      <section class="check" aria-labelledby="check-title"><h2 id="check-title">Prüfe dein Ergebnis</h2><p>{{ current.check }}</p></section>
      <p v-if="current.source" class="source"><a :href="current.source" target="_blank" rel="noopener noreferrer">Bei Adobe nachlesen ↗</a></p>
      <nav class="pager" aria-label="Vorwärts und zurück">
        <RouterLink v-if="step > 1" :to="link(step - 1)">← Zurück</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">← Zur Übersicht</RouterLink>
        <span>{{ step }} / {{ steps.length }}</span>
        <RouterLink v-if="step < steps.length" :to="link(step + 1)">Weiter →</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">Zur Übersicht →</RouterLink>
      </nav>
    </div>
  </main>
</template>

<style scoped>
@import './indesignTutorial.css';
</style>
