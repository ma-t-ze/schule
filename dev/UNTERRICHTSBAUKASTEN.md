# Lokaler Unterrichtsbaukasten

Der Link steht auf der Startseite unter „Unterricht planen“. Direkte Route:
`http://localhost:5173/unterricht-planen/unterrichtsbaukasten`.
Die Seite verwendet die bestehende Website-Anmeldung.

## Starten

Im Projektordner `schule`:

```sh
npm run serve
```

Der lokale Dienst startet automatisch als Vite-Middleware. Es sind weder ein
separater Server noch neue npm-Abhängigkeiten nötig. Er benötigt einen lokal
installierten und angemeldeten Codex-CLI (`codex login status`, gegebenenfalls
`codex login`). Die vorhandene Anmeldung wird verwendet, kein API-Schlüssel im
Browser. Der Dienst findet `codex` im PATH oder in der installierten
VS-Code-Erweiterung. Bei Bedarf lässt sich der Pfad explizit setzen:

```sh
CODEX_BIN=/absoluter/pfad/zu/codex npm run serve
```

## Ablauf

Der Baukasten verwendet drei Spalten: links die Voraussetzungen, in der Mitte
etwa 60 % der verfügbaren Spaltenbreite für den Entwurf, rechts die
Prüfung. Auf schmalen Bildschirmen werden die Spalten untereinander angeordnet.

1. Links unter „Voraussetzungen“ die Klassen und Einstiegsvorlagen aufklappen
   und per Checkbox auswählen. Mehrere Klassen bzw. Einstiegsvorlagen sind
   möglich. Mindestens eine Klasse und ein Lernziel werden benötigt.
2. Unter „Lernziel“ das Lernziel und eigene Vorgaben eintragen. Unter
   „Unterrichtsdauer“ 45, 90, 135 oder 180 Minuten auswählen.
3. Der Prompt enthält ausschließlich diese Voraussetzungen, die ausgewählten
   Einstiegskategorien und gegebenenfalls ausgewählte fachliche Dokumente.
   Es gibt keine automatisch vorgeschriebenen Teilfähigkeiten, Phasenzeiten,
   Sozialformen, Arbeitsblätter oder Ausgabeformate.
4. Oben in der Mitte kann der Prompt aufgeklappt und bearbeitet werden.
   Manuelle Änderungen werden nicht still überschrieben.
5. „Unterricht mit Vorgaben entwerfen“ übergibt den sichtbaren Prompt an Codex.
   Die vollständige Antwort erscheint als ein zusammenhängender, bearbeitbarer
   Entwurf. Ein vorhandener Entwurf aus dem früheren Drei-Phasen-Format wird
   beim Laden ohne Inhaltsverlust zusammengeführt.
6. Rechts die gewünschten Sichtweisen auswählen und die Prüfung starten.
   Geprüft wird der aktuell bearbeitete vollständige Entwurf. Änderungen
   kennzeichnen ältere Prüfungen als nicht mehr aktuell. Eingaben, Entwurf
   und Prüfungen bleiben im Browser gespeichert.

Die bisher gespeicherten Eingaben werden übernommen. Ein alter vollständiger
Entwurf bleibt unter „Bisheriger vollständiger Entwurf“ erhalten. Wenn eine
Codex-Antwort nicht dem erwarteten Format entspricht, bleiben die vorhandenen
Texte unverändert und die Originalantwort wird zusätzlich angezeigt.

## Lerntheorien

Unter „Voraussetzungen → Lerntheorien“ steht die feste Quelle
„Unterrichtsplanung“ mit Checkbox und Link zum bereitgestellten PDF.
Ein eigener Upload ist nicht vorhanden. Weitere Quellen werden über die
Projektbearbeitung ergänzt, nicht über ein Uploadformular.

Die Auswahl wird im Browser gespeichert. Nur ausgewählte Dokumente werden im
Entwurfs- und Prüfauftrag genannt, mit der ausdrücklichen Anweisung, sie vor der
Planung zu lesen und ihre Inhalte konkret anzuwenden. Das Original liegt unter
`public/pruefungen/paedagogik-quellen/d25-grundkurs-1-unterrichtsplanung-skript.pdf`.
Da große Teile im PDF keine lesbare Textebene haben, gibt es zusätzlich den
lokal mit Texterkennung erzeugten Text unter
`public/material/unterrichtsbaukasten/unterrichtsplanung.txt`. Er enthält
PDF-Seitenmarkierungen für Quellenbezüge. Bei Erkennungsfehlern gilt das Original.

## Storymapping-Darstellung

Der Entwurf wird auf der Seite als Kartenansicht dargestellt: grüne Aktivitäten
(Einleitung, Hauptteil, Schluss), blaue Tasks und gelbe Subtasks. Die zeitliche
Reihenfolge läuft von links nach rechts. „Großansicht“ öffnet eine breite Ansicht;
auf kleinen Bildschirmen scrollt nur das Board horizontal.

Vorhandene Markdown-Storymapping-Tabellen werden direkt gelesen, ohne einen
neuen Codex-Aufruf. Zusätzliche Tabellenzeilen bleiben unter „Ergänzende Angaben“
zugänglich. Der vollständige Originaltext bleibt unter „Storymapping-Text
bearbeiten“ erhalten; Änderungen aktualisieren die Kartenansicht und den Verlauf.
Dokumentlinks in Subtasks sind anklickbar. Markdown wird über Vue-Textknoten
und kontrollierte Linkelemente dargestellt, nicht als beliebiges HTML ausgeführt.
Für neue Entwürfe fordert der Prompt das unterstützte Tabellenformat an.

## Dienst und Grenzen

- `GET /__local-unterricht/status`: Ist ein ausführbarer Codex-CLI vorhanden?
  Dies prüft noch nicht die Anmeldung oder die Netzwerkverbindung.
- `POST /__local-unterricht/jobs` mit JSON `{ "prompt": "…" }`: Auftrag starten.
- `GET /__local-unterricht/jobs/<id>`: Status, Ergebnis oder Fehlermeldung.

Nur Loopback-Clients mit lokalem Hostnamen und Anfragen derselben Origin werden
angenommen; schreibende Anfragen benötigen die passende Origin und JSON.
Clientseitige Pfade, Befehle und CLI-Optionen werden nicht übernommen. Der
Projektordner ist serverseitig festgelegt. Der Prompt wird ohne Shell über stdin
an `codex exec --sandbox read-only --ephemeral` übergeben. Die finale Antwort
wird im Arbeitsspeicher des Dienstes gehalten, nicht als Projektänderung
angewendet. Projektdateien werden dabei nicht bearbeitet. Nur ein Auftrag läuft
gleichzeitig, mit Größenlimit und fünf Minuten Zeitlimit. Abgeschlossene
Aufträge bleiben maximal eine Stunde abrufbar, solange der Dienst läuft.

Die Anfrage nutzt die vorhandene Codex-Konfiguration und Anmeldung und wird zur
Generierung an den konfigurierten Codex-Anbieter übermittelt. Schülernamen,
Noten oder andere personenbezogene Angaben sind für die Planung nicht nötig.
Das öffentliche statische Hosting enthält den Baukasten, führt aber keinen
lokalen Codex-Prozess aus. „Losschicken“ ist dort nicht verfügbar; der Prompt
kann weiterhin kopiert werden.

Offizielle Grundlage: https://learn.chatgpt.com/docs/non-interactive-mode

## Prüfen

```sh
node --test dev/localLessonPlugin.test.js src/components/views/Unterrichtsbaukasten/planning.test.js
npm run build
```
