// Eigene Lernzusammenfassungen nach den D25-Unterlagen von Lutz Eisele.
// Verbindliche Eingrenzung: Hinweise zur Prüfung D25, S. 3–5.
export const topics = [
  {
    id: 'planung', title: 'Unterrichtsplanung', source: 'Grundkurs 1 Unterrichtsplanung, Skript; Prüfungshinweise S. 3',
    required: 'Einstieg begründen, drei Lernzieldimensionen unterscheiden, präzise Ziele formulieren, Aufbau einer Lernzieltaxonomie erklären und das eigene Planungsverfahren vertreten.',
    concepts: [
      ['Vom Ziel zur Stunde', 'Kläre Lerngruppe und Vorwissen, fachlichen Kern und Bedeutung des Inhalts. Formuliere dann die angestrebten Kompetenzen und woran du deren Erwerb erkennen kannst. Wähle erst daraufhin Aufgaben, Methoden, Medien und Zeitverteilung. Plane Ergebnissicherung und eine Reserve für Schwierigkeiten.'],
      ['Drei Dimensionen', 'Kognitiv betrifft Wissen und Denken, etwa Gestaltungsentscheidungen begründen. Affektiv betrifft Einstellungen und Werte, etwa respektvoll mit Entwürfen anderer umgehen. Psychomotorisch betrifft Bewegungsabläufe und praktische Fertigkeiten, etwa eine präzise manuelle Schneidetechnik. Ein Thema kann mehrere Dimensionen verbinden.'],
      ['Präzise Lernziele', 'Beschreibe beobachtbares Handeln statt nur „kennen“ oder „verstehen“. Beispiel: Die Lernenden begründen die Schriftwahl ihres Flyers anhand von zwei Lesbarkeitskriterien. Inhalt, Handlung und erwartete Qualität müssen zusammenpassen. Eine Tätigkeit wie „ein Arbeitsblatt ausfüllen“ beschreibt noch keinen Lernerfolg.'],
      ['Taxonomie und Einstieg', 'Anderson/Krathwohl ordnet kognitive Prozesse von Erinnern und Verstehen über Anwenden und Analysieren bis Bewerten und Erschaffen; zusätzlich gibt es unterschiedliche Wissensarten. Erkläre das Ordnungsprinzip und nutze es zur Aufgabenwahl. Ein informierender Einstieg benennt Thema, Nutzen, Ziel und Vorgehen; ein Problemimpuls muss in die folgende Lernarbeit führen.']
    ],
    situation: 'Eine Klasse soll einen Flyer gestalten. Nach einem aufwendigen Einstieg bleibt kaum Zeit zum Arbeiten. Einige lernen nur neue Softwarebefehle, andere gestalten bereits sicher.',
    answer: ['Zuerst klären, welche fachliche Kompetenz heute im Mittelpunkt steht und welche Vorkenntnisse fehlen.', 'Den Einstieg auf die Leitfrage reduzieren: Woran erkennen wir einen gut lesbaren Flyer? Ein gemeinsamer Kriterienvergleich aktiviert Vorwissen.', 'Einen verbindlichen Kernauftrag mit Hilfen sowie eine begründete Vertiefungsaufgabe anbieten. Softwarebedienung und Gestaltungsurteil als verschiedene Ziele behandeln.', 'Zum Schluss zwei Entscheidungen anhand der Kriterien erläutern lassen. Daran den Lernerfolg prüfen und die nächste Stunde anschließen.'],
    bridge: 'Psychologischer Anschluss: Mehrspeicher- und Netzwerkmodell sowie Angebots-Nutzungs-Modell. Erkläre, wie Vorwissen, begrenzte kurzfristige Verarbeitung und tatsächliche Lernaktivität bei deiner Planung berücksichtigt werden.',
    questions: ['Wie unterscheidest du Lernziel, Lernaktivität und Lernergebnis?', 'Wie würdest du denselben Inhalt auf unterschiedlichen Anforderungsniveaus prüfen?']
  },
  {
    id: 'methoden', title: 'Unterrichtsmethoden', source: 'Grundkurs 2 Unterrichtsmethoden, Skript, besonders S. 7–15; Prüfungshinweise S. 3',
    required: 'Regeln für Lehrerinput und Unterrichtsgespräch/FEU, klare Arbeitsaufträge sowie Chancen, Grenzen und Umgang mit schwierigen Gesprächssituationen. Visualisierung ist ausdrücklich ausgeschlossen.',
    concepts: [
      ['Lehrerinput', 'Ein Input vermittelt einen begrenzten, klar gegliederten Inhalt. Benenne das Ziel, knüpfe an Vorwissen an und erkläre an passenden Beispielen. Plane kurze Verarbeitungsphasen und überprüfe Verständnis durch eine Aufgabe. Die Frage „Alles verstanden?“ liefert allein kaum belastbare Informationen.'],
      ['Unterrichtsgespräch und FEU', 'Im Unterrichtsgespräch werden Beiträge gemeinsam entwickelt und geprüft. Beim fragend-entwickelnden Unterricht führt die Lehrperson mit Fragen auf einen fachlichen Zusammenhang hin. Das braucht passende Fragen, Denkzeit und ein erreichbares Ziel. Ein bloßes Erraten der von der Lehrkraft erwarteten Wörter erzeugt wenig eigenständiges Denken.'],
      ['Beiträge aufgreifen', 'Fragen verständlich und einzeln stellen, Denkzeit lassen und begründete Antworten einfordern. Unvollständige Beiträge als Ausgangspunkt nutzen. Falsche Aussagen fachlich klären, ohne die Person abzuwerten. Nicht nur mit den wenigen schnellen Lernenden sprechen.'],
      ['Arbeitsaufträge', 'Ein Auftrag klärt Handlung/Operator, Material, Sozialform, Zeit, erwartetes Produkt und Kriterien. Beispiel: Vergleicht zu zweit zwei Flyer. Notiert in sechs Minuten drei Unterschiede zur Lesbarkeit und begründet anschließend euren Vorschlag. Vor Beginn Rückfragen ermöglichen und den Auftrag verfügbar halten.']
    ],
    situation: 'Auf „Was fällt euch an diesem Plakat auf?“ antworten immer dieselben drei Personen. Die Lehrperson fragt immer enger, bis endlich das gewünschte Wort fällt.',
    answer: ['Prüfen, ob die Frage zu unbestimmt ist und ob alle über die nötigen Begriffe verfügen.', 'Eine konkrete Vergleichsfrage stellen und zunächst jede Person kurz eine begründete Beobachtung notieren lassen.', 'Beiträge paarweise besprechen, anschließend unterschiedliche Antworten sammeln und fachlich ordnen.', 'Wenn grundlegendes Wissen fehlt, einen kurzen Input geben, statt es mühsam erraten zu lassen. Danach eine Anwendungsaufgabe einsetzen.'],
    bridge: 'Möglicher Anschluss: Beteiligung, Motivation und Verarbeitungstiefe. Sichtbare Gesprächsaktivität ist noch kein Nachweis, dass die ganze Klasse gelernt hat.',
    questions: ['Wann ist ein kurzer Input geeigneter als FEU?', 'Was würdest du tun, wenn eine fachlich falsche Antwort von der ganzen Klasse unterstützt wird?']
  },
  {
    id: 'leistung-grundlagen', title: 'Grundlagen der Leistungsmessung', source: 'Leistungsmessung 1 – Skript, S. 2–15; Prüfungshinweise S. 3',
    required: 'Funktionen der Notengebung, Objektivität/Reliabilität/Validität, diagnostische/formative/summative Anlässe, Bezugsnormen und Beurteilungsfehler auf Fälle anwenden.',
    concepts: [
      ['Messen, beurteilen, benoten', 'Messen erhebt eine Leistung. Beurteilen beschreibt deren Qualität im Verhältnis zu Kriterien. Benoten verdichtet die Beurteilung zur Ziffer. Noten informieren, geben Rückmeldung, ermöglichen Auswahl und Berechtigungen und werden auch prognostisch genutzt. Förderung und Selektion können dabei in Spannung stehen.'],
      ['Drei Gütekriterien', 'Objektivität: Das Ergebnis soll möglichst wenig von der beurteilenden Person abhängen. Reliabilität: Die Messung soll hinreichend zuverlässig und wenig zufallsabhängig sein. Validität: Sie soll tatsächlich die angestrebte Kompetenz erfassen. Ein präzise korrigierbarer Wissenstest prüft noch nicht zwingend Gestaltungskompetenz.'],
      ['Anlässe und Bezugsnormen', 'Diagnostisch erhebst du Voraussetzungen und Lernstand; formativ nutzt du Informationen während des Lernens zur Anpassung; summativ beurteilst du den erreichten Stand am Ende. Die Individualnorm vergleicht mit früherer eigener Leistung, die Sozialnorm mit der Gruppe und die Sachnorm mit fachlich gesetzten Kriterien. Lernfortschritt und Abschlussanforderung sind nicht dasselbe.'],
      ['Fehler vermeiden', 'Ein positiver Gesamteindruck kann Einzelurteile überstrahlen (Halo-Effekt). Frühere Erwartungen oder die zuvor korrigierte Arbeit können weitere Urteile beeinflussen. Trenne Beobachtung und Interpretation, nutze Kriterienraster, mehrere Leistungsproben und möglichst aufgabenweise Korrektur. Prüfe strittige Bewertungen an konkreten Belegen.']
    ],
    situation: 'Ein besonders freundlich auftretender Schüler erhält für einen gestalterisch schwachen Entwurf eine bessere Note als eine zurückhaltende Schülerin mit einem fachlich stärkeren Ergebnis.',
    answer: ['Benennen, dass persönliche Sympathie und fachliche Leistung vermischt werden; ein Halo-Effekt ist eine mögliche Erklärung.', 'Die Arbeiten anhand vorher festgelegter Gestaltungskriterien erneut vergleichen. Beobachtbare Merkmale dokumentieren.', 'Soweit praktikabel anonymisiert und aufgabenweise bewerten; bei Unsicherheit eine zweite fachliche Einschätzung einholen.', 'Lernförderliches Feedback zum konkreten Entwurf geben. Persönliche Wertschätzung darf nicht von der Note abhängen.'],
    bridge: 'Möglicher Anschluss: Wahrnehmung und Urteilsbildung, Attribution und Motivation. Erkläre am Fall, wie Erwartungen die Beobachtung lenken können.',
    questions: ['Wie kann eine zuverlässige Messung trotzdem wenig valide sein?', 'Wie würdest du individuellen Fortschritt würdigen, ohne fachliche Anforderungen unklar werden zu lassen?']
  },
  {
    id: 'leistung-praxis', title: 'Schriftliche und mündliche Leistungsbewertung', source: 'Leistungsmessung 2 – Skript, S. 2–6; Ergänzung Schriftliche Leistungsmessung, S. 1–4; Prüfungshinweise S. 4',
    required: 'Eigene Bewertungspraxis erläutern und begründen, lernförderlich rückmelden und Fälle bearbeiten. Rechtliche Grundzüge anhand des Sitzungsskripts lernen; Nachteilsausgleich gehört zu Inklusion.',
    concepts: [
      ['Schriftlich: sechs Schritte', 'Planen → Erstellen → Durchführen → Korrigieren → Bewerten und Rückmelden → Zurückgeben und Weiterlernen. Sichere zuvor Ziele und behandelte Inhalte, geeignete Aufgaben, Bearbeitungszeit, Hilfsmittel und Erwartungshorizont. Gleiche Bewertungskriterien müssen bei der Korrektur verlässlich angewandt werden.'],
      ['Qualität mündlicher Leistungen', 'Beurteile fachliche Qualität wie sachliche Richtigkeit, begründete Zusammenhänge und Transfer. Die bloße Häufigkeit des Meldens beschreibt diese Qualität nicht. Plane verschiedene Gelegenheiten, damit auch zurückhaltende Lernende Leistung zeigen können, und dokumentiere zeitnah konkrete Beobachtungen.'],
      ['Transparenz und Gesamturteil', 'Im Sitzungsskript werden § 7 NVO und die Transparenz von Kriterien und Gewichtung behandelt. Erläutere, wie du diese Vorgaben in deiner Praxis umsetzt, und begründe dein pädagogisch-fachliches Urteil anhand von Leistungen. Achtung beim Nachschlagen: Die Prüfungshinweise nennen an dieser Stelle „§ 7 SchG“, das Sitzungsskript ausdrücklich „§ 7 NVO“; kläre die abweichende Quellenangabe im Seminar.'],
      ['Feedback, das weiterhilft', 'Ein Urteil wird lernförderlich, wenn es zeigt, was schon gelingt, wo das Problem liegt und was konkret als Nächstes zu tun ist. Beschränke dich auf wenige umsetzbare Schritte. Beispiel: „Deine Hierarchie ist erkennbar. Vergrößere nun den Kontrast des Datums und prüfe die Lesbarkeit aus einem Meter Abstand.“ Plane Zeit für die Überarbeitung.']
    ],
    situation: 'Nach der Klassenarbeit sagt eine Schülerin: „Ich weiß jetzt zwar meine Note, aber nicht, wie ich besser werden soll.“ Ein Mitschüler hält seine mündliche Note wegen seiner vielen Meldungen für ungerecht.',
    answer: ['Beide Anliegen trennen und ein ruhiges, individuelles Gespräch anbieten.', 'Bei der Klassenarbeit zwei typische Fehlerschwerpunkte erklären und dazu passende Übungs- oder Überarbeitungsaufgaben vereinbaren.', 'Bei der mündlichen Bewertung Kriterien und dokumentierte fachliche Beiträge erläutern. Meldungen und Leistungsqualität unterscheiden.', 'Anschließend prüfen, ob die Rückmeldung verstanden wurde und ob alle ausreichend Gelegenheit hatten, ihre Leistung zu zeigen.'],
    bridge: 'Möglicher Anschluss: Feedback, Selbstregulation und Selbstwirksamkeit. Konkrete nächste Schritte können hilfreicher sein als ein pauschales Personenlob.',
    questions: ['Wie machst du eine mündliche Note nachvollziehbar?', 'Wie wird aus der Rückgabe einer Klassenarbeit eine Lerngelegenheit?']
  },
  {
    id: 'sprache', title: 'Textoptimierung und sprachliche Vereinfachung', source: 'Online-Auftrag 1 Sprache – Skript, S. 1–7; Prüfungshinweise S. 4',
    required: 'Texte vereinfachen, Einsatz im eigenen Fach begründen und den Einwand eines Niveauverlusts diskutieren. Die Unterscheidung zwischen leichter und einfacher Sprache ist nicht verlangt.',
    concepts: [
      ['Zugang zum Fachinhalt', 'Sprachliche Hürden können verhindern, dass vorhandene fachliche Fähigkeiten sichtbar werden. Vereinfache deshalb die sprachliche Verpackung, ohne den fachlichen Kern oder automatisch das Anspruchsniveau der Aufgabe zu senken. Prüfe zuerst, welche Begriffe tatsächlich zum Lernziel gehören.'],
      ['Vier Ebenen', 'Inhalt/Gestaltung: Informationen schrittweise und übersichtlich anbieten. Wörter: Fachbegriffe erklären, gleiche Dinge gleich benennen, unnötige Nominalisierungen vermeiden. Sätze: kurze, klar verknüpfte Aussagen. Text: sinnvoll gliedern und wichtige Zusammenhänge erneut in anderem Kontext aufgreifen.'],
      ['Differenzierung', 'Du kannst einen optimierten Text für alle, zusätzliche Hilfen zur Wahl oder mehrere Sprachfassungen anbieten. Plane die Ausgabe so, dass Hilfe nicht beschämend wirkt. Die gemeinsame Sicherung muss den wesentlichen fachlichen Inhalt für alle zugänglich machen.'],
      ['Fachwortschatz aufbauen', 'Eine Vokabelliste enthält zentrale Begriffe und passende Beispielsätze. Nutze sie aktiv in Aufgaben und Gesprächen. Hilfen sind ein Gerüst: Mit zunehmender Sicherheit werden sie reduziert, damit die Lernenden selbstständiger mit Fachsprache umgehen.']
    ],
    situation: 'Eine Lerngruppe versteht den Arbeitsauftrag „Nehmen Sie eine Beurteilung der typografischen Hierarchisierung vor“ nicht. Ein Kollege lehnt einfachere Sprache als Niveauverlust ab.',
    answer: ['Das fachliche Ziel benennen: eine begründete Beurteilung der Informationshierarchie.', 'Den Auftrag sprachlich öffnen: „Prüfe die Reihenfolge der Informationen. Was liest du zuerst? Begründe, ob diese Reihenfolge sinnvoll ist.“ Den Fachbegriff zusätzlich erklären.', 'Die Denkanforderung beibehalten: Es bleibt eine Beurteilung mit Belegen, keine reine Benennung.', 'Am Ergebnis prüfen, ob die Lernenden den Begriff anschließend selbst fachlich angemessen verwenden können.'],
    bridge: 'Möglicher Anschluss: Arbeitsgedächtnis und Scaffolding. Unnötige Sprachhürden beanspruchen Ressourcen, die dann bei der fachlichen Aufgabe fehlen können.',
    questions: ['Was muss trotz Vereinfachung erhalten bleiben?', 'Wie gestaltest du Hilfen, ohne einzelne Lernende sichtbar abzuwerten?']
  },
  {
    id: 'arrangements', title: 'Lehr-Lern-Arrangements', source: 'LdL und DI – Skript, S. 1–6; Kooperatives Lernen, Projekt, SOL – Skript 2026, besonders S. 2–11; Prüfungshinweise S. 4',
    required: 'Ein Arrangement deiner Wahl an einem eigenen Beispiel sicher erläutern. Die fünf Alternativen helfen dir zunächst beim Vergleichen; die Wahl bleibt offen.',
    concepts: [
      ['Lernen durch Lehren', 'Lernende übernehmen Teile der Vermittlung einschließlich Erklären und gegebenenfalls Anleiten einer Übung. Die Lehrperson bereitet Material und Rahmen vor und sichert fachliche Qualität. Chance: intensive Verarbeitung und viele Sprechanlässe. Risiko: ungeprüfte Fehler oder Überforderung. Ein bloßes Referat nutzt das Potenzial noch nicht vollständig.'],
      ['Direkte Instruktion', 'Klare Zielorientierung, strukturierte Erklärung und Modellierung, angeleitetes Üben mit häufigem Feedback, anschließend selbstständiges Anwenden. Der nächste Schritt folgt dem beobachteten Lernstand. Das ist mehr als ein langer Vortrag. Chance: Sicherheit beim Aufbau von Grundlagen; Grenze: offene Entscheidungsräume müssen gegebenenfalls ergänzt werden.'],
      ['Kooperatives Lernen', 'Wichtig sind positive Abhängigkeit voneinander und zugleich individuelle Verantwortung, erklärender Austausch, soziale Fertigkeiten und Reflexion des Prozesses. Alle sollen das Ergebnis erklären können. Eine Sitzgruppe allein macht noch kein kooperatives Lernen. Plane gegen Trittbrettfahren und ungleiche Arbeitslast.'],
      ['Projektarbeit', 'Aus einer bedeutsamen Idee oder einem Problem entstehen Planung, Durchführung und Auswertung eines Produkts oder Vorhabens. Lernende entscheiden mit; die Lehrperson klärt Ziele, Ressourcen, Zwischenstände und Qualität. Chance: zusammenhängendes Handeln. Risiko: Das schöne Produkt verdeckt fehlenden individuellen Lernzuwachs.'],
      ['Selbstorganisiertes Lernen', 'Lernende übernehmen zunehmend Planung, Steuerung und Reflexion ihres Lernens. Ziele, Materialien, Zeitrahmen, Rückmeldung und Verbindlichkeit bleiben nötig. Selbstorganisation muss aufgebaut werden; „arbeitet einfach selbstständig“ kann gerade schwächere Lernende überfordern.']
    ],
    situation: 'Vier Lernende erstellen gemeinsam einen Flyer. Eine Person gestaltet alles, zwei schauen zu und eine präsentiert am Ende. Die Lehrkraft bezeichnet das als kooperatives Lernen.',
    answer: ['Am Konzept prüfen: Individuelle Verantwortung und lernförderliche Interaktion sind bisher kaum gesichert.', 'Eine gemeinsame Gestaltungsaufgabe stellen, die Austausch erfordert, und mit einer individuellen Ideenphase beginnen.', 'Aufgaben und Zwischenziele vereinbaren. Jede Person muss eine Gestaltungsentscheidung erläutern können; Rollen allein reichen nicht.', 'Produkt, individuellen Lernzuwachs und Zusammenarbeit reflektieren. Als Alternative eine kurze direkte Instruktion bei fehlenden Grundlagen begründen.'],
    bridge: 'Psychologischer Anschluss: Modelllernen und Grundbedürfnisse (Autonomie, Kompetenzerleben, soziale Eingebundenheit). Die Prüfungshinweise nennen außerdem Gruppenphasen; das konkrete Kursmodell ist in der Psychologie-ZIP nicht ausführlich dokumentiert.',
    questions: ['Welches Arrangement passt zu welchem Ziel in deinem Fach?', 'Wie erkennst du bei einem Gruppenprodukt den individuellen Lernzuwachs?']
  },
  {
    id: 'erziehung', title: 'Erziehungsauftrag und Werte', source: 'Erziehungsauftrag – Skript 2026 (D-Kurs), besonders Abschnitt „Erziehen“; Prüfungshinweise S. 4',
    required: 'Eigene Position zur Werteerziehung begründen: Vorbild, Unterricht, Kollegium, Schulleitung und Unterschiede zwischen Lerngruppen berücksichtigen.',
    concepts: [
      ['Bildung und Erziehung verbinden', 'Unterricht vermittelt neben fachlichen Kompetenzen auch Formen des Zusammenlebens und der Verantwortungsübernahme. Werte werden durch Entscheidungen, Regeln und Umgangsweisen erfahrbar, nicht nur durch eine zusätzliche Moralstunde.'],
      ['Vorbild und Verlässlichkeit', 'Fordere respektvolle Kritik und lebe sie selbst vor. Kläre Regeln und Konsequenzen nachvollziehbar und reagiere berechenbar. Eigene Fehler zu benennen zeigt, dass dieselben Maßstäbe auch für die Lehrperson gelten.'],
      ['Werte begründen', 'Begründe deine Position beispielsweise mit Menschenwürde, Teilhabe und respektvollem Zusammenleben. Unterscheide eine persönliche Vorliebe von einem tragfähigen gemeinsamen Maßstab. Ermögliche begründete Auseinandersetzung, ohne Abwertung von Personen als gleichwertige Position zu behandeln.'],
      ['Kontext beachten', 'Erwachsene Lernende benötigen andere Formen der Ansprache als Jugendliche. Beteilige die Klasse angemessen und stimme gemeinsame Regeln im Kollegium ab. Im Skript dienen unterschiedliche Erziehungsmuster als Anlass zur Selbstreflexion; sie sind kein Grund, eine Rolle unabhängig von der Situation starr anzuwenden.']
    ],
    situation: 'Bei einer Entwurfsbesprechung wird eine Schülerin wegen ihrer Gestaltung ausgelacht. Ein Kollege meint, dafür seien die Lernenden alt genug und das sei nicht deine Aufgabe.',
    answer: ['Die Abwertung unterbrechen und die Person schützen, ohne die ganze Klasse öffentlich anzuklagen.', 'Den Unterschied zwischen sachlicher Kritik und Herabsetzung klären; eine fachlich begründete Feedbackform einüben.', 'Mit den Beteiligten angemessene nächste Schritte vereinbaren und in der nächsten Besprechung auf Umsetzung achten.', 'Den Erziehungsauftrag mit dem Kollegen sachlich besprechen und für vergleichbare Situationen einen gemeinsamen Rahmen suchen.'],
    bridge: 'Möglicher Anschluss: Modelllernen, soziale Normen und Gruppenprozesse. Zeige, wie dein eigenes Verhalten die Glaubwürdigkeit vereinbarter Regeln beeinflusst.',
    questions: ['Wie legitimierst du die Werte, die du im Unterricht vertrittst?', 'Wie verändert sich deine Vorgehensweise bei einer erwachsenen Lerngruppe?']
  },
  {
    id: 'inklusion', title: 'Inklusion und Nachteilsausgleich', source: 'Inklusion Skript 2026, besonders S. 2–6 und 15; Leistungsmessung 2 – Skript, S. 5–6; Prüfungshinweise S. 4–5',
    required: 'Begriffe, Kernpunkte der Schulgesetzänderung 2015, Umsetzung in BW, Nachteilsausgleich und eine Beeinträchtigung deiner Wahl an Fällen erläutern. Autismus, AD(H)S oder Förderschwerpunkt Lernen stehen zur Auswahl.',
    concepts: [
      ['Vier Begriffe', 'Exklusion schließt aus. Separation organisiert getrennte Angebote. Integration nimmt einzelne Menschen in ein bestehendes System auf. Inklusion verändert Bedingungen so, dass unterschiedliche Menschen teilhaben können. Entscheidend ist die Frage, welche Barrieren das Lernen und Mitwirken behindern.'],
      ['BW und Unterrichtsziele', 'Das Skript erläutert als historische Kernpunkte der Änderung 2015 unter anderem die Aufhebung der Sonderschulpflicht und den Ausbau inklusiver Angebote. Unterscheide zielgleichen Unterricht mit gemeinsamem Abschlussziel von zieldifferentem Unterricht mit verschiedenen Bildungszielen. Die konkrete schulartspezifische Umsetzung gehört zur Fallanalyse.'],
      ['Nachteilsausgleich', 'Prüfe, welche Barriere eine Leistungserbringung erschwert und welche geeignete Anpassung die angestrebte Kompetenz sichtbar macht. Denkbar sind organisatorische Bedingungen oder zugängliche Materialien. Anforderungen, Zuständigkeiten und beschlossene Maßnahmen müssen geklärt sein. Eine individuelle Hilfestellung ersetzt keine transparente, abgestimmte Regelung.'],
      ['Wahlthema vorbereiten', 'Wähle zunächst eine der drei genannten Beeinträchtigungen. Lerne die Beschreibung aus dem Skript, typische mögliche Auswirkungen auf den Unterricht und passende Unterstützungsmaßnahmen. Leite Hilfen aus dem konkreten Bedarf ab; eine Diagnose allein beschreibt nicht die einzelne Person.'],
      ['Eigene Position', 'Beziehe die lernende Person, Klasse, Lehrkräfte und Unterstützungssysteme ein. Benenne Ressourcen und Grenzen, ohne das Recht auf Teilhabe auf eine reine Aufwandsfrage zu reduzieren. Kooperation und frühzeitige Absprachen sind Teil deiner Planung. Im Skript stehen auch historische Rechtsformulierungen; für genaue Rechtsbegriffe ist ein Abgleich mit der geltenden Fassung nötig.']
    ],
    situation: 'Für eine gestalterische Leistungsaufgabe wird mehr Bearbeitungszeit beantragt. Eine Kollegin findet jede abweichende Bedingung unfair gegenüber der Klasse.',
    answer: ['Zuerst Lernziel und konkrete Barriere klären: Geht es um Gestaltungskompetenz oder gerade um Geschwindigkeit?', 'Bedarf und zuständiges Verfahren mit den Beteiligten klären, statt spontan pauschal mehr Zeit zu versprechen.', 'Eine angemessene Maßnahme begründen, dokumentieren und so umsetzen, dass die fachliche Leistung bewertet werden kann.', 'Gegenüber der Klasse allgemein faire Teilhabe erklären, ohne persönliche Informationen offenzulegen. Wirkung der Maßnahme prüfen.'],
    bridge: 'Psychologischer Anschluss: Aufmerksamkeit, begrenzte Verarbeitung und Grundbedürfnisse. Die konkrete Zuordnung hängt von deinem gewählten Beispiel und den beobachteten Barrieren ab.',
    questions: ['Wie unterscheidest du gleiche Bedingungen von fairer Teilhabe?', 'Welche Barrieren und Hilfen wären in deinem eigenen Unterricht konkret relevant?']
  }
]

export const supplementary = {
  title: 'Schulentwicklung – ergänzend mitlernen',
  text: 'Schulentwicklung ist kein eigener Schwerpunkt in der Liste der Prüfungshinweise. Das zugehörige Skript nennt dennoch eigene Prüfungserwartungen. Deshalb nicht als ausgeschlossen behandeln: Gute Schule ermöglicht guten Unterricht; Kooperation, unterstützende Leitung und eine wirksame Feedbackkultur tragen dazu bei. Individualfeedback dient der einzelnen Lehrperson, Selbstevaluation der Schule als Organisation. Aus Daten müssen begründete Veränderungen und eine spätere Überprüfung ihrer Wirkung folgen.',
  question: 'Eine Schülerbefragung zeigt unklare Bewertungskriterien. Was änderst du selbst, was sollte die Fachschaft gemeinsam klären, und wie prüft ihr später die Wirkung?',
  source: 'Schulentwicklung Skript 2026, S. 2–8, besonders „Das erwarte ich in der Prüfung“. Abgrenzung bei Bedarf im Seminar klären.'
}
