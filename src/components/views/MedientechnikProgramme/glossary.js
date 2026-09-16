const entries = [
  ['Pixel', 'Pixel|Pixeln|Bildpunkte|Bildpunkten', 'Ein Pixel ist ein einzelner farbiger Bildpunkt. Viele davon ergeben zusammen ein Foto auf dem Bildschirm. Wenn du stark hineinzoomst, erkennst du die kleinen Kästchen.'],
  ['Pixelbild', 'Pixelbild|Pixelbilder|Pixelbildern', 'Ein Bild aus vielen einzelnen farbigen Punkten, zum Beispiel ein digitales Foto. Seine vorhandenen Details hängen von der Anzahl dieser Punkte ab.'],
  ['Auflösung', 'Auflösung|Bildauflösung', 'Die Auflösung beschreibt, wie fein ein Bild durch Bildpunkte aufgeteilt ist. Ein Foto mit 3000 × 2000 Pixeln enthält mehr Bildpunkte als eines mit 300 × 200 Pixeln.'],
  ['Vektorgrafik', 'Vektorgrafik|Vektorgrafiken|Vektoren|Vektorformen|Vektorelemente', 'Eine Zeichnung aus berechneten Linien und Flächen. Ein Kreis wird beispielsweise durch seine Form und Größe beschrieben. Deshalb bleiben seine Kanten auch beim Vergrößern scharf.'],
  ['Pfad', 'Pfad|Pfade|Pfaden', 'Eine Linie, deren Verlauf durch Punkte festgelegt wird. Sie kann gerade oder gebogen sein. Ein geschlossener Pfad kann eine farbige Fläche umschließen.'],
  ['Ankerpunkt', 'Ankerpunkt|Ankerpunkte|Ankerpunkten', 'Ein bearbeitbarer Punkt auf einer gezeichneten Linie. Verschiebst du ihn, ändert sich die Form. Mit kleinen Griffen kannst du die Biegung einer Kurve einstellen.'],
  ['Grafik', 'Grafik|Grafiken', 'Eine gestaltete bildliche Darstellung, zum Beispiel ein Zeichen, eine Zeichnung oder ein Schaubild. Grafiken können aus Bildpunkten oder aus berechneten Formen bestehen.'],
  ['Logo', 'Logo|Logos|Vereinslogo', 'Ein Erkennungszeichen für eine Firma, einen Verein oder ein Projekt. Es kann aus Schrift, einem Bildzeichen oder beidem bestehen.'],
  ['Icon', 'Icon|Icons', 'Ein kleines Bildzeichen, das eine Sache oder eine Handlung darstellt. Ein Papierkorb-Symbol steht zum Beispiel häufig für Löschen.'],
  ['Illustration', 'Illustration|Illustrationen', 'Eine Zeichnung, die etwas erklärt oder eine Geschichte begleitet. Zum Beispiel eine gezeichnete Figur auf einem Plakat.'],
  ['Freistellen', 'freistellen|freigestellt', 'Ein Motiv vom Hintergrund trennen. Zum Beispiel bleibt die Person aus einem Foto übrig, während der Hintergrund ausgeblendet wird.'],
  ['Retusche', 'Retusche|Fotoretusche|retuschieren', 'Einzelne Bildstellen gezielt ausbessern oder verändern. Zum Beispiel einen Staubfleck auf einem Foto entfernen.'],
  ['Montage', 'Montage|Bildmontage', 'Mehrere Bilder oder Bildteile zu einem neuen Bild zusammensetzen. Zum Beispiel eine Person vor einen anderen Hintergrund setzen.'],
  ['Ebene', 'Ebene|Ebenen', 'Stell dir durchsichtige Folien übereinander vor: Auf jeder liegt ein eigener Bildteil. Du kannst eine Folie verändern, ohne die anderen direkt mitzuverändern.'],
  ['Transparent', 'transparent|transparente|transparenten', 'Durchsichtig: Was dahinter liegt, bleibt sichtbar. Ein transparenter Bildbereich hat keinen deckenden Hintergrund.'],
  ['Layout', 'Layout|Layouts|Seitenlayout|Print-Layout|Screen-Layout', 'Die bewusste Anordnung von Schrift, Bildern und freien Flächen. Print-Layout ist für gedruckte Seiten gedacht, Screen-Layout für Bildschirme.'],
  ['Broschüre', 'Broschüre|Broschüren', 'Ein meist dünnes Heft mit mehreren Seiten. Zum Beispiel ein Programmheft für ein Schulfest.'],
  ['Absatzformat', 'Absatzformat|Absatzformate|Absatzformaten', 'Gespeicherte Einstellungen für einen Textabsatz, etwa Schriftgröße, Zeilenabstand und Ausrichtung. So können alle Überschriften gleich aussehen.'],
  ['Typografie', 'Typografie', 'Die Gestaltung von Schrift: Welche Schrift passt? Wie groß ist sie? Wie viel Abstand brauchen Buchstaben und Zeilen, damit der Text gut lesbar ist?'],
  ['Text setzen', 'setzen', 'Text gestalten und anordnen: zum Beispiel Schrift auswählen, Zeilen umbrechen und Abstände festlegen.'],
  ['Bildrahmen', 'Bildrahmen', 'Ein Bereich im Seitenlayout, in den du ein Bild einfügst. Seine Größe und Form bestimmen, welcher Ausschnitt sichtbar ist.'],
  ['Doppelseite', 'Doppelseite', 'Zwei gegenüberliegende Seiten in einem geöffneten Heft oder Buch. Sie können gemeinsam gestaltet werden.'],
  ['Spalte', 'Spalte|Spalten', 'Ein senkrechter Bereich für Text oder Bilder. In Zeitungen steht Text oft in mehreren schmalen Spalten nebeneinander.'],
  ['Screen', 'Screen|Screens|Handy-Screen|Handy-Screens|Screen-Entwurf', 'Eine einzelne Bildschirmansicht einer Website oder App. Zum Beispiel die Startansicht oder die Seite mit der Ticketauswahl.'],
  ['Prototyp', 'Prototyp|Prototypen|Klick-Prototyp|Design-Prototyp|Prototyp-Link', 'Ein Modell zum Ausprobieren einer Idee. Ein Klick-Prototyp verbindet Bildschirmansichten, sodass du die Bedienung testen kannst, bevor alles fertig entwickelt ist.'],
  ['Interaktiv', 'interaktiv|interaktiven|interaktivem|Interaktionen', 'Etwas reagiert auf deine Eingabe. Du tippst zum Beispiel auf einen Knopf und eine andere Ansicht erscheint.'],
  ['Button', 'Button|Buttons', 'Eine anklickbare Schaltfläche. Ihre Beschriftung verrät, was sie auslöst, zum Beispiel „Weiter“ oder „Speichern“.'],
  ['Komponente', 'Komponente|Komponenten', 'Ein wiederverwendbarer Baustein eines Entwurfs, zum Beispiel ein einheitlicher Knopf. Änderungen am Hauptbaustein können auf seine verwendeten Kopien übertragen werden.'],
  ['Klickweg', 'Klickweg|Klickwege|Klickwegen', 'Die Folge von Klicks oder Tipps, mit der jemand ein Ziel erreicht. Zum Beispiel: Startseite → Programm → Veranstaltung auswählen.'],
  ['Oberfläche', 'Oberfläche|Oberflächen', 'Der sichtbare Teil eines Programms, den du bedienst: Texte, Bilder, Menüs und Schaltflächen.'],
  ['Website', 'Website|Websites|Schulfest-Website|Website-Entwurf', 'Zusammengehörige Seiten, die du im Browser aufrufen kannst. Ein Website-Entwurf zeigt zunächst, wie diese Seiten aussehen sollen.'],
  ['App', 'App|Apps', 'Ein Anwendungsprogramm, zum Beispiel zum Nachrichtenversenden oder Fahrkartenkaufen. Apps können auf Mobilgeräten, Computern oder im Browser laufen.'],
  ['Desktop', 'Desktop', 'Hier ist die Ansicht für einen Computerbildschirm gemeint. Sie bietet meist mehr Platz als ein Smartphone-Bildschirm.'],
  ['Skalieren', 'skalieren|skalierbare|Skalierbarkeit', 'Die Größe eines Elements ändern. Beim gleichmäßigen Skalieren bleiben seine Proportionen erhalten.'],
  ['Verpixeln', 'Verpixeln|verpixelt', 'Die einzelnen Bildpunkte werden als Kästchen sichtbar, etwa wenn ein kleines Foto stark vergrößert wird.'],
  ['PDF', 'PDF|Druck-PDF', 'Ein Dateiformat, das die gestaltete Anordnung einer Seite bewahrt. Ein Druck-PDF wird passend zu den Anforderungen der Druckerei ausgegeben.'],
  ['Banner', 'Banner', 'Eine große Werbefläche, zum Beispiel ein langes bedrucktes Tuch am Schuleingang. Auch längliche Werbeflächen auf Websites heißen Banner.'],
  ['Mindmap', 'Mindmap', 'Eine Gedankenkarte: In der Mitte steht ein Thema. Linien verbinden es mit Unterthemen, Stichwörtern und kleinen Zeichnungen.'],
  ['Visualisierung', 'Visualisierung', 'Wissen oder Zusammenhänge sichtbar machen, zum Beispiel durch eine Zeichnung, Symbole und beschriftete Pfeile.'],
  ['Konstruieren', 'konstruieren', 'Eine Form gezielt aufbauen, etwa aus Kreisen, Rechtecken und genau platzierten Punkten.'],
  ['Motiv', 'Motiv|Motive', 'Der Bildinhalt, auf den du dich konzentrierst, zum Beispiel eine Person, ein Tier oder ein Gebäude.'],
  ['Porträt', 'Porträt', 'Die Darstellung einer Person, oft mit dem Gesicht im Mittelpunkt. Das kann ein Foto oder eine Zeichnung sein.']
]
export const glossary = entries.map(([title, aliases, explanation]) => ({ title, aliases: aliases.split('|'), explanation }))
const lookup = new Map(glossary.flatMap(entry => entry.aliases.map(alias => [alias.toLocaleLowerCase('de'), entry])))
const alternatives = [...lookup.keys()].sort((a, b) => b.length - a.length).map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
export function splitTerms(text) {
  const regex = new RegExp(`(?<![\\p{L}\\p{N}])(${alternatives.join('|')})(?![\\p{L}\\p{N}])`, 'giu')
  const parts = []
  let start = 0
  for (const match of text.matchAll(regex)) {
    if (match.index > start) parts.push({ text: text.slice(start, match.index) })
    parts.push({ text: match[0], entry: lookup.get(match[0].toLocaleLowerCase('de')) })
    start = match.index + match[0].length
  }
  if (start < text.length) parts.push({ text: text.slice(start) })
  return parts
}
