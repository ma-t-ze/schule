import{a5 as d,bY as c,bH as u,ap as s,m as P,bW as m,an as f,cS as o,aw as l,cf as k,cp as b,ax as B}from"./index-D3e5u8gu.js";const p=[{label:"LP1",className:"1BFD1",subject:"GRD",source:"1bfd1-bpk",weeks:[2,3,4],dates:"11.–29.01.2027"},{label:"LP2",className:"3BKGD1/1",subject:"GRD",source:"3bkgd1-1",weeks:[5,7,8],dates:"01.–05.02. und 15.–26.02.2027"},{label:"LP3",className:"3TGG1/2",subject:"MET",source:"3tgg1-2",weeks:[9,10,11],dates:"01.–19.03.2027"},{label:"LP4",className:"3BKGD1/1",subject:"MET",examSubject:"Medientechnik",source:"3bkgd1-1-met",weeks:[14,15,16],dates:"05.–23.04.2027"}],g=(t,n)=>p.find(e=>e.source===t&&e.weeks.includes(Number(n==null?void 0:n[0])));function Z(t,n,e){const r=g(t,n);if(!r)return e;const i=`${r.label}: ${r.className} – ${r.subject}${r.examSubject?` (Prüfungsfach: ${r.examSubject})`:""}`;return e.includes(i)?e:[e,i].filter(Boolean).join("; ")}function K(t,n){return!!g(t,n)||t==="1bfd1-bpk"&&["03.03.27","10.03.27","17.03.27"].includes(n==null?void 0:n[1])}const F=`KW,Dienstag,BPE / Thema,Inhalt / Schwerpunkt,Std.,Bemerkungen / Änderungen\r
38,15.09.26,-,O-Phase CES,6,\r
39,22.09.26,-,"Kennenlernen, Notentransparenz, Jahresüberblick",6,\r
40,29.09.26,BPE 3.1 / 3.2,"Zeichenwerkzeuge und Papiere; Gestalten mit Linien und Flächen: Linie, Kontur, Schraffur, Textur, Struktur, Tonwerte",6,\r
41,06.10.26,BPE 3.3,"Gestalten mit Formen und Farben: Beziehungen, Wirkungen, Farbton, Sättigung, Helligkeit, Farbkontraste",6,\r
42,13.10.26,BPE 2.1,"Visuelle Wahrnehmung: Sehvorgang, Wahrnehmungs- und Gestaltgesetze, optische Täuschungen",6,Schulrecht/ Schulorganisation\r
43,20.10.26,BPE 2.2,"Farbwahrnehmung: Farbreiz, Farbvalenz, Farbempfindung, Farbeigenschaften und Farbwirkung",6,Schulrecht/ Schulorganisation\r
44,27.10.26,–,Herbstferien,–,\r
45,03.11.26,BPE 2.3,"Grafische Grundformen: Linie, Kontur, Fläche, Archetypen, visuelles Gewicht",6,\r
46,10.11.26,BPE 2.3,"Komposition: Rhythmus, Symmetrie, Asymmetrie, optisches Gleichgewicht, Dynamik, Kontrast",6,\r
47,17.11.26,BPE 2.4,"Visuelle Kommunikation und semiotische Analyse: Kommunikationsmodell, Ikon, Index, Symbol, Syntaktik, Semantik, Pragmatik",6,\r
48,24.11.26,-,Puffertermin,6,\r
49,01.12.26,BPE 7.1,"Hard- und Software für Medienproduktionen: Komponenten, Ein- und Ausgabegeräte, Netzwerke, Speichermedien",6,"Pädagogik, Psychologie"\r
50,08.12.26,BPE 7.1,"Datenmanagement und digitale Daten: Ordnerstruktur, Datensicherung, Dateinamen, Zahlensysteme, Speichereinheiten",6,"Pädagogik, Psychologie"\r
51,15.12.26,BPE 7.2,"Farbtechnik: additive und subtraktive Farbmischung, RGB, CMYK, HSB, HSL und LAB",6,\r
52,22.12.26,BPE 7.3,"Digitale Bildtechnik: Bildgröße, Farbtiefe, Pixeldichte, Datenmenge, Dateiformate und Kompression",6,\r
53,29.12.26,–,Weihnachtsferien,–,\r
1,05.01.27,–,Weihnachtsferien,–,\r
2,12.01.27,BPE 7.4,"Medienworkflow: Dateiformate, Datenerfassung, Datenimport, Datenbearbeitung und Dateiausgabe",6,1. LP-Zeitraum\r
3,19.01.27,BPE 8.1,"Technisches Zeichnen: Projektion nach DIN ISO 5456, Projektionsmethode 1, Linienarten und Hauptmaße",6,1. LP-Zeitraum\r
4,26.01.27,BPE 8.2,"Axonometrie: Dimetrie, Isometrie, Winkel, Verkürzung und manuelle Darstellung geometrischer Körper",6,1. LP-Zeitraum\r
5,02.02.27,BPE 8.3,Fluchtpunktperspektive: Zentralperspektive und Zwei-Punkt-Perspektive,6,2. LP-Zeitraum\r
6,09.02.27,–,Faschingsferien,–,\r
7,16.02.27,BPE 8.4,"Scribbles und Entwurfsskizzen: Konturzeichnung, räumliche Darstellung, Lichteinfall, Schatten, Detailskizzen",6,2. LP-Zeitraum\r
8,23.02.27,BPE 4.1,"Grafische Zeichen: Piktogramm, Logo, Icon, Merkmale, Funktionen und Einsatzgebiete",6,2. LP-Zeitraum\r
9,02.03.27,BPE 4.1,"Anforderungen grafischer Zeichen: technische Merkmale, Skalierbarkeit, Farbraum, Dateiformat, Reduktion",6,3. LP-Zeitraum\r
10,09.03.27,BPE 4.2 / BPE 1,"Grafikprojekt: Kreativitätstechniken, Scribbles, Entwurfsskizzen, Projektplanung",6,3. LP-Zeitraum\r
11,16.03.27,BPE 4.2,"Digitale Umsetzung grafischer Zeichen: Raster, Hilfslinien, Konturen, Füllungen, Farben und Dateiausgabe",6,3. LP-Zeitraum\r
12,23.03.27,BPE 5.1,"Digitale Fotografie: Kameratechnik, Sensor, Objektiv, Speichermedium, Schnittstellen, Dateiformate",6,\r
13,30.03.27,–,Osterferien,–,\r
14,06.04.27,BPE 5.2,"Fotografische Bildgestaltung: Blende, Verschlusszeit, Brennweite, Lichtempfindlichkeit, Motivwahl, Perspektive",6,4. LP-Zeitraum\r
15,13.04.27,BPE 5.3 / VIP,"Bildprojekt: Bildauswahl, Bildkorrekturen, Bildkomposition, Optimierung und Dateiausgabe",6,4. LP-Zeitraum\r
16,20.04.27,BPE 5.3 / VIP,"Bildprojekt: Bildauswahl, Bildkorrekturen, Bildkomposition, Optimierung und Dateiausgabe",6,4. LP-Zeitraum\r
17,27.04.27,BPE 6.2,"Schriftentwicklung und Schriftmerkmale: Bildschrift, Alphabet, Buchdruck, Vier-Linien-System, Strichstärke",6,\r
18,04.05.27,BPE 6.2,"Schriftkategorien und Schriftwirkung: Antiqua, serifenbetonte Schriften, Grotesk, Schreibschriften, Schriftfamilien",6,\r
19,11.05.27,BPE 6.3,"Schriftsatz und Lesbarkeit: Schriftwahl, Schriftmischung, Schriftgröße, Zeilenabstand, Zeilenlänge, Satzarten",6,\r
20,18.05.27,–,Pfingstferien,–,\r
21,25.05.27,–,Pfingstferien,–,\r
22,01.06.27,BPE 6.1,"Layoutgrundlagen: Formate, Formatwirkung, Satzspiegel, Spaltenraster, Grundlinienraster, Rasterzellen",6,FD Kolloquium\r
23,08.06.27,BPE 6.4 / VIP,"Layoutentwurf: Ideenfindung, Layoutskizzen, Format, Satzspiegel, Gestaltungsraster",6,FD Kolloquium\r
24,15.06.27,BPE 6.4 / VIP,"Layouterstellung: Schriftauswahl, Text-Bild-Komposition, Farben, Dateiausgabe",6,\r
25,22.06.27,BPE 6.4,"Präsentation und Reflexion: Layoutanalyse, Entscheidungen begründen, Ergebnis optimieren",6,\r
26,29.06.27,BPE 9.1,Additive Verfahren: Modellbauwerkstoffe und Materialeigenschaften,6,\r
27,06.07.27,BPE 9.1,"Additive Verfahren: Modellbauwerkzeuge, Modellbautechniken und praktische Anwendung",6,\r
28,13.07.27,BPE 9.2,"Subtraktive Verfahren: Modellbauwerkstoffe, Modellbauwerkzeuge und Modellbautechniken",6,\r
29,20.07.27,BPE 9.3,"Plastische Verfahren: Modellbauwerkstoffe, Modellbauwerkzeuge und Modellbautechniken",6,\r
30,27.07.27,-,Puffertermin,6,\r
31,29.11.27,,Sommerferien,,\r
`,E=`KW,UW,BPE,Geplanter Inhalt,Std.,Bemerkungen / Änderungen\r
38,1,BPE 10.1,"Einstieg Projekt- und Designmanagement: Projekt, Projektauftrag und Briefing",2,\r
39,2,BPE 10.1 / 10.2,Design Thinking: Problem verstehen und Zielgruppe definieren,2,\r
40,3,BPE 10.1 / 10.2,"Design Thinking: Ideen entwickeln, bewerten und auswählen",2,Sa. 03.10.\r
41,4,BPE 10.2,Storymapping: Funktionen und Aufbau einer App strukturieren,2,\r
42,5,BPE 10.2,App-Konzept: User Flow und Wireframes,2,Schulrecht\r
43,6,BPE 10.2,Figma: einfacher App-Entwurf / Prototyp,2,Schulrecht\r
44,–,–,Herbstferien,–,24.10.–01.11.\r
45,7,BPE 10.2 / 10.4,"Figma-Prototyp fertigstellen, präsentieren und Projekt reflektieren",2,\r
46,8,BPE 14.1,Werkstoffe: Eigenschaften und Einteilung,2,\r
47,9,BPE 14.1,Metalle und Legierungen,2,\r
48,10,BPE 14.1,Kunststoffe,2,\r
49,11,BPE 14.1,Holz und Holzwerkstoffe,2,"Pädagogik, Psychologie"\r
50,12,BPE 14.1,Verbundwerkstoffe und Werkstoffvergleich,2,"Pädagogik, Psychologie"\r
51,13,BPE 14.1,Werkstoffauswahl für Produkte: Eigenschaften und Einsatz,2,\r
52,14,BPE 14.2,Einführung Fertigungsverfahren nach DIN 8580,2,Ab Mi. 23.12. frei\r
53/1,–,–,Weihnachtsferien,–,23.12.–10.01.\r
2,15,BPE 14.2,Urformen und Umformen,2,1. LP-Zeitraum\r
3,16,BPE 14.2,Trennen,2,Noten besprechen\r
4,17,BPE 14.2,Fügen und Beschichten,2,1. LP-Zeitraum\r
5,18,BPE 14.2,Generative Fertigungsverfahren / 3D-Druck,2,2. LP-Zeitraum\r
6,–,–,Faschingsferien,–,06.02.–14.02.\r
7,19,BPE 14.2,Fertigungsablauf eines konkreten Produkts untersuchen und beschreiben,2,2. LP-Zeitraum\r
8,20,BPE 15.1,Entwurfsskizzen: Funktion und Darstellungsarten,2,2. LP-Zeitraum\r
9,21,BPE 15.1,Projektion nach DIN / Ansichten,2,3. LP-Zeitraum\r
10,22,BPE 15.1,Axonometrische Darstellung,2,3. LP-Zeitraum\r
11,23,BPE 15.1,Fluchtpunktperspektive,2,3. LP-Zeitraum\r
12,24,BPE 15.2,Räumliche Darstellung: Lichtführung und Schattierung,2,Ab Do. Ferien\r
13,–,–,Osterferien,–,25.03.–04.04.\r
14,25,BPE 15.2,"Oberflächen, Farben und Werkstoffe räumlich darstellen",2,4. LP-Zeitraum\r
15,26,BPE 13.1,"Projekt Schuh: Briefing, Recherche und Anforderungen",2,4. LP-Zeitraum\r
16,27,BPE 13.1 / 13.2,Ideenfindung: Scribbles und möglichst viele Varianten,2,4. LP-Zeitraum\r
17,28,BPE 13.2,Variantenbildung und begründete Auswahl,2,Sa. 01.05.\r
18,29,BPE 13.2,Ausgewählten Schuhentwurf weiterentwickeln und optimieren,2,\r
19,30,BPE 13.2 / 15.1 / 15.2,Finaler Schuhentwurf: Ansichten und räumliche Darstellung,2,\r
20/21,–,–,Pfingstferien,–,15.05.–30.05.\r
22,31,BPE 13.3,"Pappmodell: Modellplanung, Konstruktion und Materialversuche",2,FD Kolloquium\r
23,32,BPE 13.3,Pappmodell: Grundform entwickeln,2,FD Kolloquium\r
24,33,BPE 13.3,Pappmodell: Form und Konstruktion ausarbeiten,2,\r
25,34,BPE 13.3,Pappmodell: Details und formale Zusammenhänge,2,\r
26,35,BPE 13.3,Pappmodell: Ergonomie und Proportion überprüfen,2,\r
27,36,BPE 13.2 / 13.3,Modell anhand der Erkenntnisse optimieren,2,\r
28,37,BPE 13.3 / 10.3,Modell fertigstellen und dokumentieren,2,Noten besprechen\r
29,38,BPE 10.1 / 10.4,Schuhprojekt präsentieren und Projektverlauf reflektieren,2,Mi.–Fr. kein Unterricht\r
30,39,–,Puffer / Ausstellung / Abschluss,2,Ab Do. Ferien\r
`,L=`KW,UW,BPE,Geplanter Inhalt,Bemerkungen / Änderungen\r
38,1,-,Empfang der Klasse,\r
39,2,-,"Kennenlernen der Klasse, Notentransparenz, Übersicht Schuljahr",\r
40,3,BPE 1,Storytelling mit grafischen Grundelementen,Sa. 03.10.\r
41,4,BPE 1,Grafische Grundelemente – Punkt → Leporello,\r
42,5,BPE 1,"Punkt – Wirkung, Anordnung und Komposition in praktischer Gestaltungsübung ""Punktportrait"" - Präsentation → Leporello ",Schulrecht / Schulorganisation\r
43,6,BPE 1,Grafische Grundelemente – Linie → Leporello,Schulrecht / Schulorganisation\r
44,–,–,Herbstferien,\r
45,7,BPE 1,"Linie – Wirkung und Kompositionsübungen in praktischer Gestaltungsübung ""Linienportrait"" - Präsentation → Leporello ",\r
46,8,BPE 1,Grafische Grundelemente – Fläche → Leporello,\r
47,9,BPE 1,"Fläche – Wirkung und Kompositionsübungen in praktischer Gestaltungsübung ""Flächenportrait"" - Präsentation  → Leporello ",\r
48,10,BPE 1,Reduktion – Vereinfachung grafischer Formen → Leporello,\r
49,11,BPE 1,"Reduktion – praktische Gestaltungsübung ""Figur zu Punkt"" - Präsentation → Leporello ",Pädagogik / Psychologie\r
50,12,BPE 1,Puffertermin,\r
51,13,BPE 1,Format – Formatwirkung und Seitenverhältnisse,\r
52,14,BPE 1,"Format – Kompositionsübungen in praktischer Gestaltungsübung ""Flyer""",ab Mi 23.12. frei\r
53,–,–,Weihnachtsferien,\r
1,–,–,Weihnachtsferien,\r
2,15,BPE 1,Gestaltgesetze – Grundlagen der Wahrnehmung: Das Gesetz der Prägnanz → Interaktiver Webseitenentwurf,1. LP-Zeitraum\r
3,16,BPE 1,Gestaltgesetze – Grundlagen der Wahrnehmung: Das Gesetz der Nähe → Interaktiver Webseitenentwurf,1. LP-Zeitraum / Noten besprechen\r
4,17,BPE 1,Gestaltgesetze – Grundlagen der Wahrnehmung: Das Gesetz der Geschlossenheit → Interaktiver Webseitenentwurf,1. LP-Zeitraum\r
5,18,BPE 1,Gestaltgesetze – Grundlagen der Wahrnehmung: Das Gesetz der Gleichheit → Interaktiver Webseitenentwurf,2. LP-Zeitraum\r
6,–,–,Faschingsferien,\r
7,19,BPE 1,"Gestaltgesetze – praktischer Gestaltungsübung ""interaktive Website""→ Interaktiver Webseitenentwurf",2. LP-Zeitraum\r
8,20,BPE 1,"Gestaltgesetze – praktischer Gestaltungsübung ""interaktive Website"" → Interaktiver Webseitenentwurf",2. LP-Zeitraum\r
9,21,BPE 1,"Farbpsychologie – Wahrnehmung und Wirkung von Farben verbunden mit praktischer Gestaltungsübung ""Bildergeschichte"" → Leporello",3. LP-Zeitraum\r
10,22,BPE 1,Farbpsychologie – Wahrnehmung und Wirkung von Farben präsentation Bildergeschichte → Leporello ,3. LP-Zeitraum; BKGD-Aufnahmeprüfungen: 10.–12.03.2027\r
11,23,BPE 1,Psychologische Farbwirkung – Einführung → Leporello,3. LP-Zeitraum\r
12,24,BPE 1,Farbpsychologie – emotionale und assoziative Wirkung mit praktischer Gestaltungsübung  Visualisierung eines Textes→ Leporello,ab Do Ferien\r
13,–,–,Osterferien,\r
14,25,BPE 1,"Farbpsychologie – emotionale und assoziative Wirkung, Präsentation → Leporello",4. LP-Zeitraum\r
15,26,BPE 1,Farben - Gestaltungsübung Textur Converse → Leporello,4. LP-Zeitraum\r
16,27,BPE 1,Farben - Gestaltungsübung Textur Converse → Leporello,4. LP-Zeitraum\r
17,28,BPE 2,Farben - Präsentation Converse Projekt,01.05. Sa\r
18,29,BPE 2,Puffertermin,06.05. Himmelfahrt / 07.05. Brückentag?\r
19,30,BPE 2,,\r
20,–,–,Pfingstferien,\r
21,–,–,Pfingstferien,\r
22,31,BPE 2,,FD Kolloquium\r
23,32,BPE 2,,FD Kolloquium\r
24,33,BPE 2,,\r
25,34,BPE 2,,\r
26,35,BPE 2,,\r
27,36,BPE 2,Präsentation interaktive Website,\r
28,37,BPE 2,"Drucken und kleben Leporello, Präsentation",\r
29,38,BPE 1/2,Puffertermin,Noten besprechen\r
30,39,BPE 1/2,Schuzljahresabschluss,ab Do Ferien\r
`,S=`KW,UW,BPE,geplanter Inhalt,Bemerkungen / Änderungen\r
38,1,BPE 2,"Einführung Layoutsoftware – Programmoberfläche, Dokumentaufbau und Dokumenteigenschaften",\r
39,2,BPE 3,"Grundlagen Vektoren: Vektor- und Pixelgrafik, Aufbau von Vektorgrafiken, Pfade und Ankerpunkte",\r
40,3,BPE 4,"Grundlagen Pixelgrafik: Pixel, Auflösung, Bildgröße, Farbtiefe und Farbmodi",Sa 3.10.\r
41,4,BPE 2,"Textverarbeitung: Texteingabe, Textimport und Textformatierung",\r
42,5,BPE 2,Typografische Grundfunktionen und Schriftverwaltung,Schulrecht\r
43,6,BPE 2,"Layout: Text- und Bildrahmen, Bilder und Grafiken",Schulrecht\r
,,,Herbstferien 24.10.–01.11.,\r
45,7,BPE 2,Vollton- und Prozessfarben,\r
46,8,BPE 2,Tabellen und Formatvorlagen,\r
47,9,BPE 2,Musterseiten und automatisierbare Inhalte,\r
48,10,BPE 2,Grundlinien- und Gestaltungsraster,\r
49,11,BPE 2,Layoutübung – Anwendung und Vertiefung,"Pädagogik, Psychologie"\r
50,12,BPE 2,"Preflight, Verpacken und PDF-Export","Fr 11.12. Abgabe Themenverteilungsplan; Pädagogik, Psychologie"\r
51,13,BPE 4,"Dateiformate, Ebenen und Ebenenmodi",\r
52,14,BPE 4,Auswahlmöglichkeiten und Maskierung,ab Mi 23.12. frei\r
,,,Weihnachtsferien 23.12.–10.01.2027,\r
2,15,BPE 4,Freistellen – verschiedene Freistelltechniken,"Fr 15.01. Abgabe Themenverteilungsplan; 1. LP-Zeitraum, 1. Fach"\r
3,16,BPE 4,Pinsel und Retusche,Noten besprechen; 1. LP-Zeitraum\r
4,17,BPE 4,Farbkorrektur und Bildoptimierung,1. LP-Zeitraum\r
5,18,BPE 4,Bildbearbeitung – praktische Anwendung und Composing,"2. LP-Zeitraum, 2. Fach"\r
,,,Faschingsferien 06.02.–14.02.,Fr 12.02. Abgabe Themenverteilungsplan\r
7,19,BPE 4,Bildbearbeitung – Vertiefung und Abschluss,2. LP-Zeitraum\r
8,20,BPE 3,"Bézierkurven, Pfade und Ankerpunkte – Vertiefung der Grundlagen aus KW 39",2. LP-Zeitraum\r
9,21,BPE 3,Grundformen und Kombinieren von Objekten,"3. LP-Zeitraum, 1. Fach fremd"\r
10,22,BPE 3,Nachzeichnen von Vorlagen,Fr 12.03. Abgabe Themenverteilungsplan; 3. LP-Zeitraum; BKGD-Aufnahmeprüfungen: 10.–12.03.2027\r
11,23,BPE 3,Vollton- und Prozessfarben,3. LP-Zeitraum\r
12,24,BPE 3,Verläufe und Verlaufsgitter,ab Do Ferien\r
,,,Osterferien 25.03.–04.04.,\r
14,25,BPE 3,Vektorillustration – Anwendung und Vertiefung,"4. LP-Zeitraum, 2. Fach fremd"\r
15,26,BPE 3,Vektorillustration – komplexere Gestaltungsaufgabe,4. LP-Zeitraum\r
16,27,BPE 3,Vektorillustration – Vertiefung,4. LP-Zeitraum\r
17,28,BPE 3,Produktionsgerechte Ausgabe,01.05. Sa\r
18,29,BPE 1,"Computertechnik: Prinzip der Datenverarbeitung, Hardware-Architektur und Betriebssystem",Fr 07.05. Einstiegsthema FD; 06.05. Himmelfahrt; 07.05. Brückentag?\r
19,30,BPE 1,"Arbeitsumgebung: Programm- und Datenverwaltung, Peripherie, Speichermöglichkeiten und Backup",\r
20,31,BPE 1,"Vernetzung, Schnittstellen und Datenhygiene",Fr 21.05. Themenverteilungspläne für FD\r
,,,Pfingstferien 15.05.–30.05.,\r
22,32,BPE 1,Medienworkflow: Briefing → Gestaltung → Umsetzung → Produktion → Veröffentlichung,FD Kolloquium\r
23,33,BPE 1,"Druckverfahren: Hochdruck, Flachdruck, Tiefdruck, Durchdruck und Digitaldruck",FD Kolloquium\r
24,34,BPE 1,"Druckverfahren: Merkmale, Produkte und Anforderungen an die Druckvorstufe",\r
25,35,BPE 1,"Licht und Farbe: additive und subtraktive Farbmischung, RGB und CMYK",\r
26,36,BPE 1,"Farbseparation, autotypische Farbmischung und Sonderfarben",\r
27,37,BPE 1,Color-Management,\r
28,38,BPE 1,"Papier: Herstellung, Papier- und Kartonsorten, Nachhaltigkeit",Noten besprechen\r
29,39,–,Kein Unterricht,"Mi, Do, Fr kein Unterricht"\r
30,40,–,Schuljahresabschluss / Puffer,ab Do Ferien\r
`,D=`KW,Mittwoch,BPE / Thema,Inhalt / Schwerpunkt,Std.,Bemerkungen / Änderungen\r
38,16.09.26,–,"Kennenlernen, Notentransparenz, Jahresüberblick",2,\r
39,23.09.26,LF 1 / LF 3,"Kunst vs. Design: Grundlagen Gestaltung, Funktion von Design, Layoutanalyse",2,\r
40,30.09.26,LF 3,"Layoutanalyse: Gestaltungsgrundsätze, Komposition, Bild, Text und visuelle Hierarchie",2,\r
41,07.10.26,LF 1 / LF 4,"Einführung Photoshop: Benutzeroberfläche, Werkzeuge, Ebenen und Dateiformate",2,\r
42,14.10.26,LF 1 / LF 3,"Photoshop: Bildkorrekturen, Helligkeit, Kontrast, Farbe und Tonwerte",2,Schulrecht / Schulorganisation\r
43,21.10.26,LF 1 / LF 3,"Photoshop: Freistellen, Auswahlwerkzeuge und Masken",2,Schulrecht / Schulorganisation\r
44,28.10.26,–,Herbstferien,–,\r
45,04.11.26,LF 1 / LF 3,Photoshop: Bildretusche und Bildoptimierung,2,\r
46,11.11.26,LF 2 / LF 3,"Erstellung Werbeanzeige: Aufgabenanalyse, Zielgruppe, Bild, Text und Grafik",2,\r
47,18.11.26,LF 2 / LF 3,Werbeanzeige: Gestaltung und praktische Umsetzung,2,BFD-Praktikum: 16.–27.11.2026\r
48,25.11.26,–,Puffertermin,2,BFD-Praktikum: 16.–27.11.2026\r
49,02.12.26,LF 2 / LF 3,"Flyer Portrait: Bildbearbeitung, Typografie und Layout",2,"Pädagogik, Psychologie"\r
50,09.12.26,LF 1 / LF 3,Photoshop: Wiederholung und Übung zur Klassenarbeit,2,"Pädagogik, Psychologie"\r
51,16.12.26,LF 1 / LF 3,Photoshop: praktische Übung / Vorbereitung Klassenarbeit,2,\r
52,23.12.26,–,Weihnachtsferien,–,\r
53,30.12.26,–,Weihnachtsferien,–,\r
1,06.01.27,–,Weihnachtsferien,–,\r
2,13.01.27,LF 1 / LF 3,Praktische Klassenarbeit,2,1. LP-Zeitraum\r
3,20.01.27,LF 3,"Corporate Identity: Grundlagen, Logo, Farbe, Schrift und Erscheinungsbild",2,1. LP-Zeitraum\r
4,27.01.27,LF 3,"Schriftwirkung: Schriftwahl, Schriftmerkmale und typografische Wirkung",2,1. LP-Zeitraum\r
5,03.02.27,LF 1 / LF 4,"Einführung Figma: Oberfläche, Frames, Formen, Text und grundlegende Werkzeuge",2,2. LP-Zeitraum\r
6,10.02.27,–,Faschingsferien,–,\r
7,17.02.27,LF 3 / LF 5,"Einführung Webdesign: Aufbau von Webseiten, Screenlayout und Informationshierarchie",2,2. LP-Zeitraum\r
8,24.02.27,LF 3 / LF 5,"Webdesign: Raster, Typografie, Bild und Gestaltung digitaler Oberflächen",2,2. LP-Zeitraum\r
9,03.03.27,LF 2 / LF 3 / LF 5,Landingpage: Konzeption und Gestaltung in Figma,2,3. LP-Zeitraum; BFD-Praktikum: 01.–19.03.2027\r
10,10.03.27,LF 2 / LF 3 / LF 5,Landingpage: Ausarbeitung und Präsentation,2,3. LP-Zeitraum; BFD-Praktikum: 01.–19.03.2027\r
11,17.03.27,LF 3,"Schrift / Moodboard: Recherche, Schriftwirkung und visuelle Ideenfindung",2,3. LP-Zeitraum; BFD-Praktikum: 01.–19.03.2027\r
12,24.03.27,LF 2 / LF 3,"Jahresprojekt Plakatgestaltung: Aufgabenanalyse, Recherche, Konzeption und Ideenentwicklung",2,\r
13,31.03.27,–,Osterferien,–,\r
14,07.04.27,LF 2 / LF 3,"Jahresprojekt Plakatgestaltung: Produktentwurf, Scribbles und Ausarbeitung",2,4. LP-Zeitraum\r
15,14.04.27,LF 2 / LF 3,Jahresprojekt Plakatgestaltung: Produktentwurf und gestalterische Umsetzung,2,4. LP-Zeitraum\r
16,21.04.27,LF 2 / LF 3,"Jahresprojekt Plakatgestaltung: Logodesign, Ideenentwicklung und Varianten",2,4. LP-Zeitraum\r
17,28.04.27,LF 2 / LF 3,Jahresprojekt Plakatgestaltung: Logodesign und Ausarbeitung,2,\r
18,05.05.27,LF 2 / LF 3 / LF 5,Jahresprojekt Plakatgestaltung: Gestaltungsraster und Hintergrund,2,\r
19,12.05.27,LF 3,"Farbwirkung: Farbkontraste, Farbharmonie und kommunikative Wirkung",2,\r
20,19.05.27,–,Pfingstferien,–,\r
21,26.05.27,–,Pfingstferien,–,\r
22,02.06.27,LF 2 / LF 3 / LF 5,"Jahresprojekt Plakatgestaltung: Umsetzung, Bild, Text, Logo und Komposition",2,FD Kolloquium\r
23,09.06.27,LF 2 / LF 3 / LF 5,Jahresprojekt Plakatgestaltung: Umsetzung und Ausarbeitung,2,FD Kolloquium\r
24,16.06.27,LF 5 / LF 6,"Jahresprojekt Plakatgestaltung: Korrektur, Optimierung und Dateiausgabe",2,\r
25,23.06.27,LF 2 / LF 6,Präsentation und Reflexion: Gestaltungsentscheidungen begründen und Ergebnisse bewerten,2,\r
26,30.06.27,LF 1 / LF 3,Vertiefung: Überarbeitung und Optimierung ausgewählter Medienprodukte,2,\r
27,07.07.27,LF 1 / LF 3,Portfolio: Auswahl und Aufbereitung der entstandenen Arbeiten,2,\r
28,14.07.27,LF 2 / LF 6,Portfolio / Präsentation und Reflexion,2,\r
29,21.07.27,–,Puffertermin,2,\r
30,28.07.27,–,Puffertermin / Jahresabschluss,2,\r
`,G={"3tgg1-2":{name:"3TGG1/2",csv:F,hoursColumn:4},"3tgg2":{name:"3TGG2",csv:E,hoursColumn:4},"3bkgd1-1":{name:"3BKGD1/1 GRD",csv:L},"3bkgd1-1-met":{name:"3BKGD1/1 MET",csv:S},"1bfd1-bpk":{name:"1BFD1 BPK",csv:D,hoursColumn:4}},W=t=>{const n=[];let e="",r=!1;for(let i=0;i<t.length;i+=1){const a=t[i],h=t[i+1];if(a==='"'&&h==='"'){e+='"',i+=1;continue}if(a==='"'){r=!r;continue}if(a===","&&!r){n.push(e),e="";continue}e+=a}return n.push(e),n},v={class:"plan-tabs","aria-label":"Stoffverteilungspläne"},w={__name:"PlanTabs",setup(t){return(n,e)=>{const r=c("RouterLink");return u(),s("nav",v,[(u(!0),s(P,null,m(b(G),(i,a)=>(u(),f(r,{key:a,to:`/stoffverteilungsplaene/${a}`,"exact-active-class":"selected-plan"},{default:o(()=>[l(k(i.name),1)]),_:2},1032,["to"]))),128)),B(r,{to:"/stoffverteilungsplaene/pruefungszeitraeume","exact-active-class":"selected-plan"},{default:o(()=>[...e[0]||(e[0]=[l("Prüfungszeiträume",-1)])]),_:1})])}}},A=d(w,[["__scopeId","data-v-7cd75a51"]]);function y(t,n){const e=t.split(";").map(r=>r.trim()).find(r=>r.startsWith("BKGD-Aufnahmeprüfungen:"));return!e||n.includes(e)?n:[n,e].filter(Boolean).join("; ")}export{A as P,p as a,G as b,Z as e,K as i,y as m,W as p};
