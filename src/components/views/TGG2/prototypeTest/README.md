# Phase 5.1 – Test dreier Klickdummys

Lokale Grundlage: `004_Projektmanagement.zip`, vom Nutzer bereitgestellte Projektabgaben.
Die Originalabgaben bleiben außerhalb von `public/`; die Prototypen veröffentlichen keine Scans oder Namen der Schüler. Die Versionen A/B/C sind keine Rangfolge und keine Benotung.

## Auswahl

Alle Problemanalysen und Story-Mappings wurden als Text gelesen; alle sieben Entwurfsabgaben (PDF-Seiten und JPEGs) visuell verglichen. Maßgeblich für den aktuellen gemeinsamen Auftrag sind Phase 3 und 4: fünf Schulmittagessen mit 25 € planen.

| Version | Quelle im Ordner `04 Entwurf` | Übernommener Ansatz | Begründung |
| --- | --- | --- | --- |
| A – Woche im Blick | `Alexis, Maria-Subtasks.pdf` | Budgeteingabe, Kostenübersicht, Kalender, Tagesauswahl, Gericht bestätigen und ändern | Gut nachvollziehbare Rückmeldungen und konkrete Tageszuordnung. |
| B – Liste und Zuordnung | `Micha, David - Subtasks.pdf` | Essen zunächst in einer Liste sammeln, hinzufügen/entfernen, dann Tagen zuordnen | Eigenständiger, listenbasierter Ablauf statt einer zweiten Tagesauswahl wie in A. |
| C – Entdecken und planen | `Markos, Nisa-Subtasks.jpeg` | Rezeptkarten, Vorlieben/Favoriten, Wochenplan, abhakbare Einkaufsliste | Ein eigenständiger visueller Zugang als sinnvoller Vergleich zu A und B. |

Die übrigen Entwürfe enthalten ebenfalls brauchbare Ideen. Ausgewählt wurden drei überzeugende, unterscheidbare Ansätze; es gibt keinen objektiven Gesamtsieger. Die Ansichten bleiben auf allen Bildschirmgrößen mobile Wireframes (maximal 390 px breit) mit Navigation am unteren Rand. Die äußere Bedienleiste ist kompakt; innerhalb des Wireframes passen Container-Höhenabfragen Schriftgrößen, Zeilenhöhen, Abstände, Bildplatzhalter und Bedienelemente an. Referenz ist ein iPad im Querformat (1024 × 768 sowie eine reduzierte Browserhöhe von 650 px). A startet mit einem Wochenkalender; B beginnt mit einer Essensliste und hat eine eigene Zuordnungsansicht; C beginnt mit Bildkarten und Favoriten. Bildflächen sind neutrale Platzhalter. Auf ausdrücklichen Nutzerwunsch heißen die sieben Angebote ausschließlich „Essen 1“ bis „Essen 7“ und kosten 3,50 € bis 10 €. Es gibt keine erfundenen Rezepte, Zutaten, Zubereitungszeiten oder Ernährungseigenschaften. Die Einkaufsliste zählt die gewählten Essen. Eine einheitliche Budgetprüfung sowie fehlende Übergänge ergänzen die Entwürfe zu testbaren Abläufen. Kein KI-Empfehlungssystem, keine echten Angebote oder Bestellungen.

## Test und Feedback

- Drei öffentliche Unterrouten `/3tgg2/entwicklung-einer-app-design-thinking/klickdummy/a` bis `/c`.
- Testdaten werden je Version getrennt in localStorage gespeichert; Neustart betrifft nur die aktuelle Version.
- Derselbe Testauftrag und dieselben nummerierten Essen für alle Versionen, wechselnde Startreihenfolge empfohlen.
- Drei Kriterien: Bedienbarkeit, Übersichtlichkeit, Wochen- und Budgetplanung. Team, neun Kriterienfelder, Favorit und Begründung können auch unvollständig als PDF exportiert werden. Der Downloadbutton ist unabhängig vom Ausfüllstand verfügbar.
- Feedback ist ein lokaler Entwurf. PDF herunterladen und in Teams abgeben; keine automatische Online-Abgabe oder klassenweite Abstimmung.
- Der Lehrkraft-PDF-Export enthält Phase 5.1 mit leeren Arbeitsfeldern.

## Prüfung

`node --test src/components/views/TGG2/prototypeTest/model.test.js`

`npm run build` (bei Bedarf mit temporärem `--outDir`, um vorhandene Build-Artefakte nicht zu verändern).
