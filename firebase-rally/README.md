# Eine gemeinsame Rally

FreeCreatures (`/freecreatures`) und Rally (`/rally`) verwenden immer denselben
Firebase-Stand: `rally_games/current` im bestehenden Projekt `gestaltgesetze-ada34`.
Spielcodes, Steuerungslinks und die frühere Auswahl per `?game=` entfallen.

## Benutzung

1. FreeCreatures öffnen und **Neue Rally starten** drücken.
2. Auf dem Tablet die normale Rally-Seite öffnen. Alle Geräte sind automatisch verbunden.
3. Die acht **Creature freilassen**-Buttons geben die jeweilige Kreatur frei.
   Eine noch nicht gescannte Kreatur erscheint erst nach ihrem passenden QR-Code.
4. **Neue Rally starten** setzt den gemeinsamen Stand auf leere Sammlung und
   100 % Energie zurück. Verbundene Rally-Seiten kehren zum Startbildschirm zurück.

Die interne `roundId` verhindert, dass verspätete Befehle einer alten Runde die
neue Runde verändern. Sie ist kein Spielcode und wird nicht eingegeben oder angezeigt.
Spielstand und Freigaben bleiben bis zur nächsten neuen Rally gespeichert.
Alte Dokumente mit individuellen Spiel-IDs werden nicht mehr verwendet.

## Firebase-Regeln aktualisieren

In der Firebase Console von **gestaltgesetze-ada34** unter Firestore Database →
Regeln den bisherigen Rally-Block durch `firestore.rules.fragment` ersetzen.
Der Block gehört **in** `match /databases/{database}/documents`.
Die vorhandenen Quiz-Regeln beibehalten und die Regeln veröffentlichen.
Danach bei Bedarf **Erneut verbinden** drücken.

Ohne diese Aktualisierung verweigern die bisherigen Regeln den Zugriff auf `current`.
Das Fragment ist keine vollständige Regeldatei. Das Schulrecht-Projekt bleibt unverändert.
Wie gewünscht steuert FreeCreatures eine gemeinsame Runde ohne Anmeldung; jeder mit
Zugriff auf diese Seite kann Freigaben erteilen und eine neue Runde starten.

## Audio und Prüfung

Die Audio-Umstellung auf einen gemeinsamen Web-Audio-Kontext wurde zurückgenommen.
Fragen und Effekte verwenden wieder normale HTML-Audio-Elemente. Rechts unter
**Alle Sounds einzeln abspielen** lassen sich sämtliche Dateien über die nativen
Audio-Bedienelemente direkt starten, pausieren und erneut abspielen.

`node --test src/components/views/Rally/*.test.js`

`npm run build`

Nach Veröffentlichung der Regeln die Freigabe und den Neustart auf zwei Geräten
prüfen. Die Audiowiedergabe muss zusätzlich auf dem betroffenen iPad geprüft werden.
