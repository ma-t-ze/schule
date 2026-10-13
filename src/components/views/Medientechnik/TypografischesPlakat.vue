<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import newDocumentImage from './indesign-neues-dokument.png'
import workspaceImage from './indesign-arbeitsoberflaeche.png'
import shapeToolImage from './indesign-formwerkzeug-markiert.svg'
const props = defineProps({ step: { type: Number, required: true } })
const heading = ref(null)
const steps = [
  {
    title: 'Ein neues Dokument anlegen',
    goal: 'Du legst eine passende Seite für dein Plakat an.',
    intro: 'Ein typografisches Plakat wirkt vor allem durch Schrift. In diesem Beispiel gestaltest du ein Plakat für einen „DESIGN TAG“. Zuerst legst du Größe und Ausrichtung fest.',
    terms: [['Format', 'Die Breite und Höhe deiner Seite.'], ['Ausrichtung', 'Hochformat ist höher als breit. Querformat ist breiter als hoch.'], ['Ränder', 'Hilfslinien für Abstand zum Seitenrand. Sie werden nicht mitgedruckt.'], ['Anschnitt', 'Ein zusätzlicher Bereich außerhalb der Seite. Hintergründe reichen bis hierhin, damit beim Zuschneiden keine weißen Kanten entstehen.']],
    actions: ['Wähle Datei → Neu → Dokument.', 'Lege für diese Übung A3 im Hochformat an: 297 × 420 mm.', 'Stelle eine Seite ein und schalte Doppelseiten aus.', 'Wähle für diese Übung 15 mm Ränder und 3 mm Anschnitt an allen Seiten. Für echte Druckaufträge gelten die Vorgaben der Druckerei.', 'Erstelle das Dokument. Speichere es über Datei → Speichern unter als „Typografisches-Plakat.indd“.'],
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
    actions: ['Markiere „DESIGN TAG“ mit dem Textwerkzeug. Öffne Fenster → Schrift und Tabellen → Zeichen.', 'Wähle eine gut lesbare Schrift. Probiere für die Überschrift etwa 80 pt und einen fetten Schriftschnitt. Passe Rahmen oder Schriftgröße an, wenn der Text nicht hineinpasst.', 'Gestalte die Zusatzinformationen zum Beispiel in 24 pt und den Termin in 20 pt. Das sind Startwerte für diese A3-Übung.', 'Nutze für mehrzeiligen Text zum Beispiel 24 pt Schriftgröße und 30 pt Zeilenabstand. Prüfe, ob die Zeilen gut auseinanderzuhalten sind.', 'Stelle im Absatzbedienfeld alle Texte linksbündig ein. Richte die Rahmen am linken Seitenrand innerhalb der Ränder aus.', 'Probiere die Laufweite vorsichtig aus. Prüfe das ganze Plakat: Überschrift zuerst, Informationen danach. Speichere dein Dokument.'],
    check: 'Die Überschrift fällt zuerst auf. Alle Texte sind lesbar, haben genügend Abstand und passen vollständig in ihre Rahmen.',
    source: 'https://helpx.adobe.com/de/indesign/desktop/format-and-style-text/composition-and-text-wrapping/apply-and-manage-text-formatting.html'
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
      <header><p class="eyebrow">1. TYPOGRAFISCHES PLAKAT · SCHRITT {{ step }} VON 6</p><h1 ref="heading" tabindex="-1">{{ current.title }}</h1><p class="goal">{{ current.goal }}</p></header>
      <nav class="step-links" aria-label="Die sechs Schritte"><RouterLink v-for="(item, index) in steps" :key="item.title" :to="link(index + 1)" :aria-current="step === index + 1 ? 'step' : undefined" :aria-label="`Schritt ${index + 1}: ${item.title}`">{{ index + 1 }}</RouterLink></nav>
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
      <section class="practice" aria-labelledby="practice-title"><h2 id="practice-title">So gehst du vor</h2><ol><li v-for="action in current.actions" :key="action">{{ action }}</li></ol></section>
      <section class="check" aria-labelledby="check-title"><h2 id="check-title">Prüfe dein Ergebnis</h2><p>{{ current.check }}</p></section>
      <p v-if="current.source" class="source"><a :href="current.source" target="_blank" rel="noopener noreferrer">Bei Adobe nachlesen ↗</a></p>
      <nav class="pager" aria-label="Vorwärts und zurück">
        <RouterLink v-if="step > 1" :to="link(step - 1)">← Zurück</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">← Zur Übersicht</RouterLink>
        <span>{{ step }} / 6</span>
        <RouterLink v-if="step < 6" :to="link(step + 1)">Weiter →</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">Zur Übersicht →</RouterLink>
      </nav>
    </div>
  </main>
</template>

<style scoped>
.document-image { margin: 28px 0; }
.document-image img { display: block; width: 100%; height: auto; border-radius: 12px; }
.document-image figcaption { margin-top: 12px; font-size: 14px; line-height: 1.6; color: #526166; }
.lesson-page { min-height: 100vh; background: #f8f7f3; color: #202d32; font-family: 'Jost', Arial, sans-serif; user-select: text; }.shell { max-width: 960px; padding: 32px 28px 64px; margin: auto; }a { color: inherit; text-underline-offset: 4px; }.back,.source { font-size: 14px; color: #526166; }header { padding: 56px 0 24px; }.eyebrow { font-size: 12px; letter-spacing: .12em; color: #a02b62; }h1 { font-size: clamp(34px, 5vw, 56px); font-weight: 500; letter-spacing: -.03em; line-height: 1.12; margin: 20px 0; }h1:focus { outline: none; }.goal,.intro { font-size: 20px; line-height: 1.65; }.intro { margin: 32px 0; }h2 { font-size: 27px; font-weight: 500; margin: 0 0 20px; }section { margin-top: 36px; }p,li,dd { line-height: 1.7; }.step-links { display: flex; gap: 10px; flex-wrap: wrap; }.step-links a { display: grid; place-items: center; width: 44px; height: 44px; border: 1px solid #c8c7c0; border-radius: 9px; text-decoration: none; }.step-links a[aria-current] { background: #a02b62; color: white; border-color: #a02b62; }dl { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 20px; }dl div { border-top: 1px solid #d4d9d1; padding-top: 16px; }dt { font-weight: 600; }dd { margin: 8px 0 0; }.practice { padding: 28px; border: 1px solid #e0d8dc; border-radius: 16px; background: white; }ol { padding-left: 24px; margin-bottom: 0; }li { padding-left: 8px; margin-bottom: 16px; }li:last-child { margin-bottom: 0; }.check { padding: 24px; border-radius: 14px; background: #e8eee7; }.check h2 { font-size: 22px; }.check p { margin-bottom: 0; }.pager { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 40px; }.pager a { padding: 12px 18px; background: #ffedf5; border: 1px solid #dcb7c9; border-radius: 10px; text-decoration: none; }.pager span { color: #526166; white-space: nowrap; }a:focus-visible { outline: 3px solid #a02b62; outline-offset: 4px; }@media(max-width:600px) { .shell { padding: 24px 20px 40px; }dl { grid-template-columns: 1fr; }.practice { padding: 22px; }.pager a { padding: 12px; font-size: 14px; }.goal,.intro { font-size: 18px; } }
</style>
