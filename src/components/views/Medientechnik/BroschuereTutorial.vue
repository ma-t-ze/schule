<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
const props = defineProps({ step: { type: Number, required: true } })
const heading = ref(null)
const base = '/medientechnik/indesign/broschuere/'
const link = step => ({ name: 'indesign-broschuere-schritt', params: { step } })
const references = [
 ['Deckblatt.png', 'Seite 1 · Cover', 'Schwarzes RUMOR-Cover mit weißem Schriftzug, orangefarbener Collage und blauen Akzenten.'],
 ['Doppelseite_2.png', 'Seiten 2–3 · Bildstrecke und Einstieg', 'Links kleine Pixelbilder auf hellem Grund, rechts LOW-RES AESTHETICS und ein Vorspann auf blauem Grund.'],
 ['Soppelseite_1.png', 'Seiten 4–5 · Artikel und Typografie', 'Zweispaltiger Artikel, kleine Aussagen, blaue Quadrate und große, teilweise gedrehte Typografie.'],
 ['Rueckseite.png', 'Seite 6 · Rückseite', 'Blaue geometrische Linien auf schwarzem Grund und eine kleine Ausgabenangabe.']
]
const steps = [
  {
    "number": 1,
    "title": "Das Dokument anlegen",
    "goal": "Du bereitest das mehrseitige Dokument für deine Broschüre vor.",
    "intro": "Du baust RUMOR von vorne nach hinten nach. Zuerst legst du das Dokument an. Die Vorlage zeigt das Cover, mit dem du im nächsten Schritt beginnst.",
    "reference": 0,
    "terms": [
      [
        "Doppelseiten",
        "Zeigt gegenüberliegende Seiten gemeinsam. Cover und Rückseite stehen einzeln."
      ],
      [
        "Anschnitt",
        "Zusätzliche Fläche außerhalb des Endformats für randabfallende Bilder und Hintergründe."
      ]
    ],
    "actions": [
      "Lade das Arbeitsmaterial unten herunter. Entpacke die ZIP in einen Ordner mit deinem Namen. Lass die Bilder während der gesamten Arbeit in diesem Ordner.",
      "Wähle Datei → Neu → Dokument. Stelle A5 im Hochformat ein: 148 × 210 mm. Aktiviere Doppelseiten und beginne mit einer Seite.",
      "Stelle die Ränder auf 10 mm und den Anschnitt an allen Seiten auf 3 mm. Das sind Übungswerte für den Nachbau.",
      "Erstelle das Dokument und öffne Fenster → Seiten. Wähle im Bedienfeldmenü „Seiten einfügen“ und füge fünf Seiten nach Seite 1 ein.",
      "Prüfe die Anordnung im Seitenbedienfeld: Seite 1 einzeln, Seiten 2–3 gemeinsam, Seiten 4–5 gemeinsam und Seite 6 einzeln. Lass die automatische Seitenanordnung eingeschaltet.",
      "Speichere über Datei → Speichern unter als RUMOR_Nachname.indd in deinem Namensordner."
    ],
    "check": "Dein Dokument enthält sechs A5-Seiten, zwei Innendoppelseiten und 3 mm Anschnitt."
  },
  {
    "number": 2,
    "title": "Das Cover gestalten",
    "goal": "Du baust die schwarze Titelseite mit Collage und Schrift nach.",
    "intro": "Arbeite auf Seite 1. Die Collage ist bereits als einzelne Grafik vorhanden. Den Titel und die kleinen Informationen setzt du selbst.",
    "reference": 0,
    "terms": [
      [
        "Bildrahmen",
        "Bestimmt Größe und sichtbaren Ausschnitt der platzierten Grafik."
      ],
      [
        "Farbfeld",
        "Speichert eine Farbe, die du mehreren Objekten zuweisen kannst."
      ]
    ],
    "actions": [
      "Öffne Seite 1 durch Doppelklick im Seitenbedienfeld. Zeichne mit dem Rechteckwerkzeug eine Fläche über die ganze Seite bis zu den roten Anschnittlinien.",
      "Öffne Fenster → Farbe → Farbfelder. Weise der Fläche [Schwarz] und der Kontur [Ohne] zu. Lege sie über Objekt → Anordnen → In den Hintergrund.",
      "Ziehe mit dem Rechteckrahmenwerkzeug einen großen Rahmen in der Seitenmitte auf. Wähle Datei → Platzieren (⌘ + D) und lade Grafik_Deckblatt.png. Nutze Objekt → Anpassen → Inhalt proportional anpassen, damit die ganze Collage sichtbar bleibt.",
      "Erstelle oben einen breiten Textrahmen mit RUMOR. Wähle eine verfügbare dünne, dekorative Schrift und vergrößere sie, bis der Titel fast die gesamte Seitenbreite einnimmt. Weise dem Text [Papier] zu. Die Schrift ist eine Annäherung an die Vorlage.",
      "Lege über das Menü des Farbfelder-Bedienfelds „Neues Farbfeld“ an: Name RUMOR Blau, Farbart Prozess, Farbmodus CMYK, C 85 / M 60 / Y 0 / K 0. Der Farbwert ist ein Vorschlag für den Nachbau.",
      "Setze unter den Titel vier kleine Textrahmen mit independent, culture, in und motion. Färbe sie mit RUMOR Blau und verteile sie über die Seitenbreite.",
      "Ergänze unten links 01, unten mittig ARCHIVES OF THE PRESENT und unten rechts den kurzen Covertext aus der Textsammlung. Vergleiche Abstände und Größen mit der Vorlage und speichere."
    ],
    "check": "Das Cover enthält den weißen Titel, die vollständig sichtbare Collage und die kleinen blauen und weißen Texte."
  },
  {
    "number": 3,
    "title": "Die Bildstrecke aufbauen",
    "goal": "Du gestaltest die linke Seite der ersten Innendoppelseite.",
    "intro": "Öffne Seiten 2–3. Beginne links mit den kleinen Bildern, Bildtexten und blauen Formen. Die rechte Seite folgt im nächsten Schritt.",
    "reference": 1,
    "terms": [
      [
        "Prozessfarbe",
        "Wird im Druck aus CMYK aufgebaut. Eine Volltonfarbe würde separat gedruckt."
      ],
      [
        "Kontur",
        "Die Linie um einen Rahmen. Sie kann zum Beispiel gepunktet sein."
      ],
      [
        "Absatz",
        "Ein Textabschnitt, der mit der Eingabetaste (Enter) endet. Ein Absatz kann aus einer oder mehreren Zeilen bestehen."
      ],
      [
        "Absatzformat",
        "Eine gespeicherte Gestaltungsvorlage für ganze Absätze, zum Beispiel mit Schriftart, Schriftgröße und Zeilenabstand. Du weist mehreren Bildtexten dasselbe Format zu. Änderst du später dieses Format, werden alle damit verbundenen Absätze gemeinsam angepasst."
      ]
    ],
    "actions": [
      "Öffne die Doppelseite 2–3. Lege auf Seite 2 ein Rechteck bis in den Anschnitt an und schiebe es in den Hintergrund.",
      "Erstelle das Prozessfarbfeld Papier warm im Modus CMYK: C 3 / M 3 / Y 8 / K 0. Weise es dem Hintergrund zu. Die Papierstruktur und den Falzschatten der fotografierten Vorlage musst du nicht nachbauen.",
      "Ziehe links mehrere kleine quadratische und rechteckige Bildrahmen auf. Orientiere dich an den Positionen der Vorlage: oben, mittig und unten, mit viel freiem Raum dazwischen.",
      "Platziere Bild_1.png bis Bild_7.png über Datei → Platzieren in die Rahmen. Wiederhole einzelne Bilder für weitere Bildfelder. Wähle Objekt → Anpassen → Rahmen proportional füllen und passe den Ausschnitt mit dem weißen Pfeil an.",
      "Erstelle unten rechts ein kleines Quadrat mit RUMOR Blau und ohne Kontur. Für die punktierten Quadrate zeichnest du Rahmen ohne Fläche und mit blauer Kontur. Wähle im Kontur-Bedienfeld eine gepunktete Linie mit etwa 3 pt.",
      "Ergänze drei kleine Textrahmen mit den Bildtexten aus der Textsammlung. Verwende etwa 7 pt Schrift mit 9 pt Zeilenabstand. Setze die Texte nah an die zugehörigen Bilder.",
      "Erstelle das Absatzformat: Öffne Fenster → Formate → Absatzformate. Klicke mit dem Textwerkzeug (T) in einen fertig gestalteten Bildtext. Der Cursor muss im Absatz stehen; du musst nicht den ganzen Text markieren. InDesign übernimmt beim Erstellen die Gestaltung dieses Absatzes.",
      "Öffne das Menü oben rechts im Absatzformate-Bedienfeld und wähle „Neues Absatzformat“. Trage bei Formatname „Bildtext“ ein. Kontrolliere unter „Grundlegende Zeichenformate“ Schriftfamilie, Schriftschnitt, Schriftgröße und Zeilenabstand. Aktiviere „Format auf Auswahl anwenden“ und bestätige mit OK. Falls du diese Option nicht aktiviert hast, klicke anschließend im Absatzformate-Bedienfeld einmal auf „Bildtext“, während der Cursor noch im Absatz steht.",
      "Weise das Format den anderen Bildtexten zu: Klicke mit dem Textwerkzeug in den nächsten Bildtext und danach im Absatzformate-Bedienfeld einmal auf den Namen „Bildtext“. Wiederhole das bei jedem weiteren Bildtext. Enthält ein Rahmen mehrere Absätze, markiere diese gemeinsam und klicke auf „Bildtext“. Ein einfacher Klick weist das Format zu.",
      "Ändere die Schrift für alle Bildtexte: Doppelklicke im Absatzformate-Bedienfeld auf den Namen „Bildtext“. In den Absatzformatoptionen wählst du links „Grundlegende Zeichenformate“. Ändere dort beispielsweise die Schriftfamilie oder Schriftgröße. Aktiviere „Vorschau“, um die Wirkung zu sehen, und bestätige mit OK. Alle Absätze, denen „Bildtext“ zugewiesen wurde, übernehmen die Änderung automatisch – auch in anderen Textrahmen.",
      "Probiere es aus: Stelle im Absatzformat „Bildtext“ die Schriftgröße kurz von 7 pt auf 8 pt um und kontrolliere alle Bildtexte. Stelle anschließend wieder 7 pt oder eine passende Größe ein. Für eine gemeinsame Änderung bearbeitest du das Absatzformat; eine direkte Schriftänderung im einzelnen Text erzeugt nur eine lokale Abweichung.",
      "Falls ein Bildtext die Änderung nicht übernimmt: Klicke mit dem Textwerkzeug hinein. Ein Plus neben „Bildtext“ im Absatzformate-Bedienfeld weist auf lokale Abweichungen hin. Entferne sie über „Abweichungen löschen“ im Bedienfeld. Prüfe außerdem, ob ein Zeichenformat die Schrift vorgibt; wähle für diesen Bildtext im Zeichenformate-Bedienfeld [Ohne], wenn keine besondere Hervorhebung beabsichtigt ist. Speichere."
    ],
    "check": "Die linke Innenseite zeigt versetzte Pixelbilder, kleine Bildtexte und blaue Akzente. Alle Bildtexte verwenden das Absatzformat Bildtext. Wenn du die Schrift in dessen Absatzformatoptionen änderst, werden alle Bildtexte gemeinsam angepasst."
  },
  {
    "number": 4,
    "title": "Die blaue Einstiegsseite gestalten",
    "goal": "Du setzt Titel, Vorspann und Initiale auf der rechten Innenseite.",
    "intro": "Bleibe auf Doppelseite 2–3 und arbeite jetzt rechts. Du nutzt das blaue Farbfeld und legst für den Vorspann ein eigenes Absatzformat an.",
    "reference": 1,
    "terms": [
      [
        "Absatzformat",
        "Speichert die Gestaltung eines ganzen Absatzes. Änderungen wirken auf alle Absätze mit diesem Format."
      ],
      [
        "Zeichenformat",
        "Gestaltet nur markierte Zeichen oder Wörter."
      ],
      [
        "Initiale",
        "Ein vergrößerter Anfangsbuchstabe über mehrere Textzeilen."
      ]
    ],
    "actions": [
      "Zeichne auf Seite 3 ein Rechteck bis in den Anschnitt. Weise RUMOR Blau zu, entferne die Kontur und lege die Fläche in den Hintergrund.",
      "Setze oben TOPICS OF TODAY klein und weiß. Ergänze darunter LOW-RES AESTHETICS in schwarzer, kantiger Schrift, beispielsweise Courier New Bold, mit etwa 28 pt. Verteile den Titel auf zwei Zeilen wie in der Vorlage.",
      "Erstelle mittig einen Textrahmen und füge den Vorspann aus der Textsammlung ein. Gestalte ihn zunächst mit einer serifenlosen Schrift, etwa Arial, 13 pt Schriftgröße und 16 pt Zeilenabstand.",
      "Öffne Fenster → Formate → Absatzformate. Erstelle aus dem gestalteten Absatz das Format Vorspann und weise es zu. Passe bei Bedarf Rahmenbreite und Schriftgröße an, damit der Text vollständig sichtbar bleibt.",
      "Öffne die Optionen von Vorspann. Stelle unter „Initialen und verschachtelte Formate“ eine Initiale über vier Zeilen für ein Zeichen ein. Der erste Buchstabe A wird dadurch groß. Wähle ihn mit dem Textwerkzeug aus und färbe ihn mit [Papier].",
      "Ergänze unten „& the politics of imperfection“ in großer Serifenschrift, ein weiß gepunktetes Quadrat unten links und ein helles Quadrat oben rechts. Vergleiche mit der Vorlage und speichere."
    ],
    "check": "Die rechte Innenseite hat einen blauen Hintergrund, Titel, vollständigen Vorspann mit großer Initiale und einen Abschluss unten rechts."
  },
  {
    "number": 5,
    "title": "Den Artikel in zwei Spalten setzen",
    "goal": "Du verkettst die Artikelrahmen auf der zweiten Innendoppelseite.",
    "intro": "Öffne Seiten 4–5. Links steht der lange Artikel in zwei Spalten. Du fügst den Text einmal ein und lässt ihn durch verbundene Rahmen fließen.",
    "reference": 2,
    "terms": [
      [
        "Textverkettung",
        "Verbindet Textrahmen zu einem gemeinsamen Textfluss."
      ],
      [
        "Textüberlauf",
        "Nicht sichtbarer Text, der nicht mehr in die Rahmen passt. Ein rotes Plus am Ausgang warnt davor."
      ]
    ],
    "actions": [
      "Lege auf Seiten 4 und 5 helle Hintergrundflächen mit Papier warm an und ordne sie im Hintergrund an.",
      "Öffne auf Seite 4 Layout → Ränder und Spalten. Stelle zwei Spalten mit 5 mm Abstand ein. Ziehe in der oberen linken Spalte einen Textrahmen auf und in der oberen rechten einen zweiten. Lass die untere Zone für die große Überschrift frei.",
      "Kopiere den gesamten Artikel aus der Textsammlung ausschließlich in den ersten Rahmen. Wähle als Startwert Times New Roman, 10 pt Schriftgröße und 12 pt Zeilenabstand.",
      "Erstelle in Fenster → Formate → Absatzformate das Format Artikel und weise es dem Text zu. Passe später die Werte über dieses Format an, damit der Artikel einheitlich bleibt.",
      "Wähle den ersten Rahmen mit dem schwarzen Pfeil. Klicke auf das Ausgangsfeld unten rechts am Rahmen. Bei Überlauf zeigt es ein rotes Plus. Klicke mit dem geladenen Textcursor in den zweiten Rahmen. Der Text fließt automatisch weiter.",
      "Aktiviere Ansicht → Extras → Textverkettungen einblenden. Verändere testweise die Höhe des ersten Rahmens: Der nachfolgende Text soll sich im zweiten Rahmen verschieben."
    ],
    "check": "Der Artikel fließt durch verbundene Rahmen. Es gibt keine doppelten Textkopien und keinen Textüberlauf."
  },
  {
    "number": 6,
    "title": "Die Artikel-Doppelseite fertig gestalten",
    "goal": "Du ergänzt große Typografie, kleine Aussagen und automatische Seitenzahlen.",
    "intro": "Bleibe auf Seiten 4–5. Der Artikel ist gesetzt. Jetzt ergänzt du die grafischen Elemente der Vorlage und richtest die wiederkehrenden Seitenzahlen ein.",
    "reference": 2,
    "terms": [
      [
        "Übergeordnete Seite",
        "Vorlage für wiederkehrende Elemente, früher Musterseite genannt."
      ],
      [
        "Seitenzahlmarke",
        "Zeigt auf jeder Dokumentseite automatisch deren Nummer."
      ]
    ],
    "actions": [
      "Erstelle in der unteren Zone einen breiten Textrahmen über die Doppelseite. Setze IMPERFECTION HAS BECOME LEGIBLE AGAIN. in einer kantigen Schrift auf zwei Zeilen. Nutze als Startwert etwa 28 pt und passe die Größe an die Vorlage an.",
      "Dupliziere den Titelrahmen, drehe die Kopie über das Eigenschaftenbedienfeld um 180° und verschiebe sie an den unteren Rand. Achte darauf, den Artikel und die Seitenzahlen nicht zu verdecken.",
      "Ergänze auf Seite 5 kleine Aussagen aus der Textsammlung in eigenen Rahmen. Weise ihnen das bereits angelegte Absatzformat Bildtext zu. Dupliziere blaue Quadrate und punktierte Rahmen aus der vorherigen Doppelseite und ordne sie nach der Vorlage an.",
      "Ändere testweise den Zeilenabstand im Absatzformat Bildtext. Prüfe, dass die Bildtexte auf beiden Doppelseiten reagieren, und stelle danach einen passenden Wert ein.",
      "Öffne Fenster → Seiten und doppelklicke oben auf die übergeordnete Doppelseite A. Erstelle unten außen links und rechts je einen kleinen Textrahmen innerhalb des Randes.",
      "Setze den Cursor in einen Rahmen und wähle Schrift → Sonderzeichen einfügen → Marken → Aktuelle Seitenzahl. Wiederhole das im anderen Rahmen. Auf der übergeordneten Seite erscheint ein Buchstabe.",
      "Weise die übergeordnete Seite A im Seitenbedienfeld den Seiten 2–5 zu. Weise Seite 1 und 6 [Ohne] zu. Prüfe auf den Dokumentseiten die automatisch angezeigten Zahlen 2–5. Die abgebildeten Originalzahlen 8–11 werden nicht abgetippt. Speichere."
    ],
    "check": "Die zweite Doppelseite enthält Artikel, große Typografie und blaue Akzente. Alle vier Innenseiten besitzen automatische Seitenzahlen."
  },
  {
    "number": 7,
    "title": "Die Rückseite nachbauen",
    "goal": "Du schließt die Gestaltung mit der schwarzen Rückseite ab.",
    "intro": "Öffne Seite 6. Hier nutzt du die mitgelieferte blaue Grafik und ergänzt unten die Ausgabenangabe.",
    "reference": 3,
    "terms": [
      [
        "Verknüpfung",
        "InDesign verweist auf die gespeicherte Bilddatei. Sie muss weiterhin erreichbar sein."
      ]
    ],
    "actions": [
      "Öffne Seite 6 und zeichne eine schwarze Hintergrundfläche bis in den Anschnitt. Entferne ihre Kontur und lege sie in den Hintergrund.",
      "Erstelle einen großen Bildrahmen über die Seite. Platziere Grafik_Rueckseite.png über Datei → Platzieren.",
      "Passe die Grafik proportional ein und verschiebe den Inhalt mit dem weißen Pfeil, bis die blauen Linien wie in der Vorlage auf der Seite stehen. Vermeide Verzerrungen.",
      "Setze unten rechts RUMOR issue #1 und darunter 2026 in kleine weiße Textrahmen. Hebe #1 bei Bedarf mit einem orangefarbenen Prozessfarbfeld hervor.",
      "Vergleiche Abstand und Position mit der Vorlage. Prüfe, dass keine automatische Seitenzahl auf der Rückseite steht. Speichere.",
      "Blättere durch die gesamte Broschüre: Cover, Bildstrecke links und blaue Seite rechts, Artikel-Doppelseite, Rückseite. Kontrolliere, dass alle Seiten fertig gestaltet sind."
    ],
    "check": "Die Rückseite zeigt blaue Linien auf schwarzem Grund und die kleine Ausgabenangabe unten rechts."
  },
  {
    "number": 8,
    "title": "Die fertige Broschüre prüfen",
    "goal": "Du kontrollierst alle Seiten und behebst technische Fehler.",
    "intro": "Die Gestaltung ist fertig. Vergleiche jetzt jede Seite mit ihrer Vorlage und prüfe anschließend Verknüpfungen, Schriften und Textüberlauf.",
    "reference": null,
    "terms": [
      [
        "Preflight",
        "Prüft nach einem gewählten Profil. Ein grüner Status gilt nur für die dort aktivierten Prüfungen."
      ],
      [
        "Effektive Auflösung",
        "Bildauflösung in der tatsächlichen Ausgabegröße. Starkes Vergrößern senkt sie."
      ]
    ],
    "actions": [
      "Öffne Fenster → Ausgabe → Preflight und aktiviere die Prüfung. Kontrolliere unter „Profile definieren“, ob fehlende Verknüpfungen, fehlende Schriften und Textüberlauf erfasst werden.",
      "Klicke die Fehlermeldungen auf. Vergrößere bei Textüberlauf den betroffenen Rahmen oder verbessere den Textfluss. Ersetze fehlende Schriften in den Absatz- und Zeichenformaten.",
      "Prüfe deine eigenen Farbfelder: RUMOR Blau und Papier warm sind CMYK-Prozessfarben. RGB ist für Bildschirmfarben gedacht; eine Volltonfarbe wäre eine separat gedruckte Sonderfarbe. Für diese Übung benötigst du keine Volltonfarbe.",
      "Speichere die korrigierte Datei. Wähle Datei → Verpacken, um Dokument und verknüpfte Bilder in einem Abgabeordner zu sammeln."
    ],
    "check": "Keine fehlenden Bilder, fehlenden Schriften oder Textüberläufe bleiben übrig. Alle Seiten wurden mit den Vorlagen verglichen."
  },
  {
    "number": 9,
    "title": "Die Broschüre als PDF ausgeben",
    "goal": "Du erstellst eine Druckfassung und eine Bildschirmfassung.",
    "intro": "Exportiere erst nach der Prüfung. Öffne anschließend beide PDFs und vergleiche ihre Seiten mit den Vorlagen.",
    "reference": null,
    "terms": [
      [
        "Druck-PDF",
        "Enthält für diese Übung den Anschnitt. Weitere Vorgaben bestimmt die Druckerei."
      ],
      [
        "Bildschirm-PDF",
        "Benötigt keine Druckmarken und keinen Anschnitt."
      ]
    ],
    "actions": [
      "Wähle Datei → Exportieren, Dateiname RUMOR_Nachname_Druck.pdf und Format Adobe PDF (Druck). Exportiere alle sechs Seiten als Einzelseiten in Lesereihenfolge, nicht als Druckbögen.",
      "Nutze für die Übung PDF/X-4, sofern verfügbar. Aktiviere unter „Marken und Anschnitt“ die Anschnitteinstellungen des Dokuments: 3 mm. Aktiviere Schnittmarken nur, wenn sie gefordert sind; der Versatz soll mindestens dem Anschnitt entsprechen.",
      "Prüfe unter „Ausgabe“ Farbkonvertierung und Zielprofil. Bei einem echten Druckauftrag gelten die Vorgaben der Druckerei. PDF/X-4 allein garantiert keine passende CMYK-Ausgabe.",
      "Exportiere ein zweites Mal als RUMOR_Nachname_Bildschirm.pdf. Nutze eine kleinere Dateigröße und eine Konvertierung nach sRGB. Deaktiviere Druckmarken und Anschnitt und exportiere wieder alle Einzelseiten.",
      "Öffne beide PDFs außerhalb von InDesign. Kontrolliere auf jeder Seite Bilder, Schriften, Texte und Reihenfolge. Prüfe den Anschnitt der Druckfassung und die sauberen Seitenränder ohne Druckmarken in der Bildschirmfassung.",
      "Lege beide PDFs und deine Prüfnotiz zum verpackten Projektordner. Gib diesen Ordner ab."
    ],
    "check": "Beide PDFs sind geöffnet und geprüft. INDD-Datei, verknüpfte Bilder, PDFs und Prüfnotiz liegen im Abgabeordner."
  }
]
const current = computed(() => steps.find(item => item.number === props.step) || steps[0])
watch(() => props.step, async () => { await nextTick(); heading.value?.focus() })
const intro = 'At a moment when cameras promise ultra-high definition and software offers seamless correction, degraded images continue to circulate with unexpected intensity. Blurred photographs, scanned textures, compression artifacts and low-resolution graphics persist across independent visual culture, not as nostalgia, but as language.'
const article = [
'This return is not accidental. It reflects a growing awareness of how visual technologies shape perception. High-resolution imagery often suggests neutrality and control, hiding the process that produced it. Low-resolution images, by contrast, reveal mediation. Pixels become visible. Noise becomes structure. Surfaces show their history.',
'In independent design and publishing, degradation often functions as a form of resistance to visual standardization. Templates promise efficiency but produce similarity. Algorithms reward clarity but discourage ambiguity. Imperfect images interrupt these expectations by refusing seamlessness.',
'Scanning plays a central role in this aesthetic vocabulary. Flyers, photographs, handwritten notes and printed matter are digitized not to preserve their original state, but to transform it. Dust, shadows and distortions become part of the composition. The scanner becomes both archive and instrument.',
'Collage operates in a similar way. By combining materials from different temporal and technological contexts, collage exposes the layered nature of visual culture. Analog fragments coexist with digital typography. Archival images meet contemporary documentation. Time becomes visible through texture.',
'These strategies are often misunderstood as retro gestures. In reality, they are responses to contemporary image economies. When visual production becomes frictionless, friction itself gains expressive value. Marks of use, reproduction and circulation signal presence in a system that tends toward invisibility.',
'Low-resolution imagery also changes the relationship between viewer and image. Instead of offering immediate clarity, it requires interpretation. The eye must complete missing information. Attention slows down. Looking becomes active again.',
'Independent publications frequently adopt these aesthetics not simply for stylistic coherence, but because they align with available tools and resources. Desktop scanners, reused photographs and accessible printing methods shape visual decisions. Material limitations become conceptual frameworks.',
'The persistence of imperfect images suggests that visual culture is not moving toward greater realism, but toward greater awareness of mediation. What circulates is not only the image itself, but the trace of how it was produced, copied and shared.',
'In this sense, degradation does not signal loss of quality. It signals movement. Images change as they circulate. And circulation leaves marks.'
]
const captions = ['Why degraded images continue to circulate in digital culture.', 'Instead of offering immediate clarity, it requires interpretation.', 'Archival images meet contemporary documentation.', 'The eye must complete missing information. Attention slows down. Looking becomes active again.', 'Imperfect images interrupt these expectations by refusing seamlessness.']
</script>

<template>
 <main class="lesson-page"><div class="shell">
  <RouterLink to="/medientechnik/adobe-indesign" class="back">← Adobe InDesign</RouterLink>
  <header><p class="eyebrow">3. MAGAZINBROSCHÜRE RUMOR · SCHRITT {{ step }} VON {{ steps.length }}</p><h1 ref="heading" tabindex="-1">{{ current.title }}</h1><p class="goal">{{ current.goal }}</p></header>
  <nav class="step-links" aria-label="Schritte dieser Anleitung"><RouterLink v-for="item in steps" :key="item.number" :to="link(item.number)" :aria-current="step === item.number ? 'step' : undefined" :aria-label="`Schritt ${item.number}: ${item.title}`">{{ item.number }}</RouterLink></nav>
  <p class="intro">{{ current.intro }}</p>
  <section v-if="step === 1" class="materials" aria-labelledby="material-title"><h2 id="material-title">Arbeitsmaterial</h2><p>Alle Bilder und Vorlagen für deine Broschüre:</p><Button as="a" :href="base + 'RUMOR-Arbeitsmaterial.zip'" download label="Arbeitsmaterial herunterladen (ZIP)" icon="pi pi-download" /><p>Format, Schriften und Farbwerte sind Vorschläge für den Nachbau. Die Papierstruktur und die Schatten der fotografierten Vorlage musst du nicht nachbauen.</p><Message severity="info" :closable="false">Wir bauen die sechs vorgegebenen Seiten als Layoutübung nach. Für eine rückstichgeheftete Druckbroschüre müsste der Umfang auf ein Vielfaches von vier erweitert werden.</Message></section>
  <section aria-labelledby="terms-title"><h2 id="terms-title">Einfach erklärt</h2><dl><div v-for="term in current.terms" :key="term[0]"><dt>{{ term[0] }}</dt><dd>{{ term[1] }}</dd></div></dl></section>
  <figure v-if="current.reference !== null" class="document-image" :class="{ 'single-page-reference': [0,3].includes(current.reference) }"><a :href="base + references[current.reference][0]" target="_blank" rel="noopener noreferrer"><img :src="base + references[current.reference][0]" :alt="references[current.reference][2]"></a><figcaption>{{ references[current.reference][1] }} · Deine Vorlage für diesen Schritt. Zum Vergrößern anklicken.</figcaption></figure>
  <div v-else class="reference-grid"><figure v-for="item in references" :key="item[0]"><a :href="base + item[0]" target="_blank" rel="noopener noreferrer"><img :src="base + item[0]" :alt="item[2]"></a><figcaption>{{ item[1] }} · zum Vergrößern anklicken</figcaption></figure></div>
  <section class="practice" aria-labelledby="practice-title"><h2 id="practice-title">So gehst du vor</h2><ol><li v-for="action in current.actions" :key="action">{{ action }}</li></ol></section>
  <section v-if="step >= 2 && step <= 7" class="materials" aria-labelledby="assets-title"><h2 id="assets-title">Material für diesen Schritt</h2><div class="asset-links"><a v-if="step === 2" :href="base + 'Grafik_Deckblatt.png'" download>Covergrafik herunterladen</a><template v-if="step === 3"><a v-for="n in 7" :key="n" :href="`${base}Bild_${n}.png`" :download="`Bild_${n}.png`">Bild {{ n }} ↓</a></template><a v-if="step === 7" :href="base + 'Grafik_Rueckseite.png'" download>Rückseitengrafik herunterladen</a></div>
   <template v-if="step === 2"><h3>Texte für das Cover</h3><p>RUMOR<br>independent · culture · in · motion<br>01<br>ARCHIVES OF THE PRESENT</p><p>Today, documentation happens almost simultaneously with creation. Why is that?</p></template>
   <template v-if="step === 3"><h3>Bildtexte zum Kopieren</h3><p v-for="caption in captions.slice(0,3)" :key="caption">{{ caption }}</p></template>
   <template v-if="step === 4"><h3>Texte für die blaue Seite</h3><p>TOPICS OF TODAY<br>LOW-RES AESTHETICS</p><p>{{ intro }}</p><p>&amp; the politics of imperfection</p></template>
   <template v-if="step === 5"><h3>Artikel zum Kopieren</h3><p>Die Texte sind aus der lesbaren Vorlage übertragen und für die Übung aufbereitet. Kopiere alle folgenden Absätze zusammen in den ersten Rahmen.</p><div class="copy-text"><p v-for="paragraph in article" :key="paragraph">{{ paragraph }}</p></div></template>
   <template v-if="step === 6"><h3>Titel und Aussagen zum Kopieren</h3><p>IMPERFECTION HAS BECOME LEGIBLE AGAIN.</p><p v-for="caption in captions.slice(3)" :key="caption">{{ caption }}</p></template>
   <template v-if="step === 7"><h3>Ausgabenangabe</h3><p>RUMOR issue #1<br>2026</p></template>
  </section>
  <section class="check" aria-labelledby="check-title"><h2 id="check-title">Prüfe dein Ergebnis</h2><p>{{ current.check }}</p></section>
  <nav class="pager" aria-label="Vorwärts und zurück"><RouterLink v-if="step > 1" :to="link(step-1)">← Zurück</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">← Zur Übersicht</RouterLink><span>{{ step }} / {{ steps.length }}</span><RouterLink v-if="step < steps.length" :to="link(step+1)">Weiter →</RouterLink><RouterLink v-else to="/medientechnik/adobe-indesign">Zur Übersicht →</RouterLink></nav>
 </div></main>
</template>

<style scoped>
@import './indesignTutorial.css';
.single-page-reference { max-width: 580px; margin-left: auto; margin-right: auto; }
.document-image + .practice { margin-top: 20px; }
.materials { padding: 26px; background: white; border: 1px solid #ddd7df; border-radius: 16px; margin-bottom: 24px; }
.reference-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; margin-top: 32px; align-items: start; }
.reference-grid figure { margin: 0; }.reference-grid img { width: 100%; height: 250px; object-fit: contain; background: #ecebe7; border-radius: 8px; }
figcaption { font-size: 14px; margin-top: 8px; line-height: 1.5; color: #526166; }
.asset-links { display: flex; gap: 16px; flex-wrap: wrap; }.copy-text { user-select: text; background: #f8f7f3; padding: 20px; border-radius: 8px; }h3 { font-size: 19px; font-weight: 600; }.p-button { white-space: normal; }
@media(max-width:600px) { .materials { padding: 20px; }.reference-grid { grid-template-columns: 1fr; }.reference-grid img { height: auto; max-height: 380px; } }
</style>
