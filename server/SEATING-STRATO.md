# Sitzordnung: ausschließlich Platznummern auf STRATO

## Einmalig einrichten

1. In phpMyAdmin die vorhandene STRATO-Datenbank auswählen und `server/seating.sql`
   ausführen. Die neue Tabelle `school_seating` verändert keine bestehenden Tabellen.
2. `server/seating.php` nach **`php/seating.php`** hochladen, neben `login.php`,
   `database-config.php` und dem Ordner `sessions/`.
3. `public/seating.php` nach **`visualizer/seating.php`** hochladen. Dieser kurze
   öffentliche Einstieg ist auch im Build enthalten und wird bei einem späteren
   normalen Deployment mit übertragen.
4. Mit der vorhandenen Website-Anmeldung den lokalen Dev-Sitzplan öffnen.
   Beim ersten Laden wird die bisherige Browser-Anordnung übernommen, sofern es
   noch keinen Datenbankstand gibt. Einmal **Auf STRATO speichern** klicken.
   Weitere Verschiebungen werden automatisch gespeichert.

Die bestehende Datenbank-Konfiguration und der Login bleiben unverändert.
Die echte Verbindung kann erst nach dem Upload und Tabellenimport getestet werden.

## Welche Daten übertragen werden

Die API akzeptiert ausschließlich:
- `board`: zufälliger 32-stelliger Schlüssel zur Unterscheidung der Sitzpläne,
- `positions`: eine Liste in Leserichtung mit eindeutigen ursprünglichen Platznummern
  (0–399) und `null` für freie Plätze,
- `columns` und `rows`: Spalten- und Reihenanzahl (jeweils 1–20),
- `revision`: Versionsnummer zum Schutz vor konkurrierenden Änderungen.

Listenindex = aktueller Platz, Listenwert = ursprünglicher Platz.
Beispiel: Der Listenwert 7 an Index 12 bedeutet, dass der ursprünglich achte
Eintrag jetzt am 13. Platz in Leserichtung sitzt. Freie Plätze enthalten `null`. Keine Personen-IDs, Namen, Fotos, Klassennamen oder Dateinamen
werden übertragen. Die Anzeige ordnet die Positionen ausschließlich lokal zu.

Die Tabelle enthält diese Anordnung, den zufälligen Schlüssel, eine Versionsnummer
und den Änderungszeitpunkt. Sitzungsgebundene CSRF-Prüfung und Login schützen
Lese-/Schreibzugriffe. Die API lehnt zusätzliche POST-Felder und ungültige oder
mehrfach verwendete belegte Platznummern ab.

## Lokale Daten und andere Browser

Namen, Fotos und die ursprüngliche Zuordnung bleiben im ignorierten Ordner
`src/local-sitzplaene/`. In `klasse.json` liegt zusätzlich `boardKey`, der bei
anderen lokalen Kopien identisch sein muss. Diesen lokalen Ordner für denselben
Sitzplan unverändert übernehmen, damit ein anderer Browser/Rechner die gleiche
Zuordnung darstellen kann. Die Reihenfolge der lokalen Schülerliste ist die
ursprüngliche Platzzuordnung und darf nicht nachträglich umsortiert werden.
Bei einer neuen Klasse einen neuen Schlüssel verwenden.

Die Sitzplan-Seite existiert weiterhin nur im Dev-Modus und Fotos/Namen fehlen im
Produktionsbuild. Nur die generische PHP-API ist auf STRATO verfügbar. Die lokale
Browserablage enthält künftig nur Platznummern; der alte Browsercache bleibt als
Migrationsquelle unverändert erhalten.

## Fehler und Konflikte

Bei einem Speicherfehler bleibt die Anordnung lokal erhalten. Mit **Auf STRATO
speichern** erneut versuchen. Der Status bestätigt eine Server-Speicherung erst
nach erfolgreicher Antwort. Ohne Verbindung kann lokal weitergearbeitet werden.
Bei konkurrierenden Änderungen wird ein Konflikt angezeigt. **Serverstand laden**
übernimmt dann bewusst die Anordnung vom Server und ersetzt lokale Änderungen.
Während Laden/Speichern sind Verschiebungen gesperrt.

Nach der Einrichtung: Anordnung speichern, Seite neu laden und in einem zweiten
Browser mit denselben lokalen Dateien öffnen. Unangemeldete API-Aufrufe müssen
abgelehnt werden. Die Backend-Datei erfordert PHP mit PDO-MySQL.

## Variable Raster (Spalten × Reihen)

Die aktuelle `server/seating.php` nach `php/seating.php` hochladen.
**Keine SQL-Änderung nötig:** In `positions_json` werden jetzt die geordnete Liste
und die Rastermaße als JSON-Objekt gespeichert. Alte 30-Platz-Listen werden
weiterhin gelesen und als 6 × 5 interpretiert.

Die Liste läuft von links nach rechts, danach in der nächsten Reihe weiter.
Ein Eintrag ist die ursprüngliche lokale Person-Position (numerisch) oder `null`
für einen freien Platz. Damit bleibt die Reihenfolge vom Raster unabhängig.
Beim Vergrößern werden leere Plätze angehängt. Beim Verkleinern werden freie
Lücken nur dann entfernt, wenn sonst belegte Plätze abgeschnitten würden; die
Reihenfolge der Personen bleibt dabei erhalten. Ein Raster mit weniger Plätzen
als Personen wird abgelehnt. Je Dimension sind 1–20 Plätze möglich.

Die API akzeptiert zusätzlich `columns` und `rows` als ganze Zahlen und prüft,
dass die Listenlänge der Kapazität entspricht und jede belegte Ursprungsposition
nur einmal vorkommt. Es bleiben reine Zahlen und leere Plätze, ohne Namen/Fotos.
