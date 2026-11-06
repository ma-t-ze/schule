# Checklisten für Klassenarbeiten

1. In phpMyAdmin die bestehende Datenbank auswählen und `exam-checklists.sql` importieren. Die neue Tabelle verändert keine bestehenden Daten.
2. `server/exam-checklists.php` neben `login.php` und `database-config.php` in das private Verzeichnis `php/` hochladen.
3. Den neuen Build bereitstellen. `dist/exam-checklists.php` gehört in das öffentliche Verzeichnis neben `index.html`.

In Schule bei einer Klasse die Termine ausklappen, dann bei einer Klassenarbeit „Checkliste“ öffnen. Checkboxen und optionale Nachschreiber-Namen bearbeiten und **Speichern** drücken. Danach neu laden und den gespeicherten Stand prüfen. Jede Klassenarbeit hat eine eigene Checkliste für das Schuljahr 2026/27. Termine und Kalender bleiben unverändert.

Die API verwendet die bestehende PHP-Login-Sitzung, CSRF-Token, vorbereitete SQL-Abfragen und Versionsprüfung gegen versehentliches Überschreiben aus mehreren Fenstern. Ohne Anmeldung kein Zugriff. Die Nachschreiber-Namen werden ausschließlich in der STRATO-Datenbank gespeichert, nicht im Repository oder Browser-Speicher. Der lokale Dev-Modus verwendet wie Upcoming dieselbe STRATO-Datenbank; PHP-Datei, öffentlicher Einstieg und Tabelle müssen deshalb auch für lokale Tests hochgeladen sein.

## Nachteilsausgleich

Bei bestehender Tabelle einmal `exam-checklists-accommodation-migration.sql` in der ausgewählten Datenbank ausführen. Bereits gespeicherte Checklisten bleiben erhalten; die neue Checkbox beginnt leer. Bei einer neuen Tabelle genügt die aktuelle `exam-checklists.sql`.

Danach die aktuelle private `server/exam-checklists.php` nach `php/` hochladen und den neuen Build bereitstellen. Checkbox aktivieren, speichern und nach Neuladen prüfen.

## Namen und PDFs im Frontend verwalten

Zusätzlich `exam-accommodations.sql` in der bestehenden Datenbank importieren. `server/exam-accommodations.php` neben `login.php` ins private Verzeichnis `php/` hochladen und die aktualisierte `server/exam-checklists.php` ebenfalls hochladen. Den neuen Build inklusive öffentlichem `exam-accommodations.php` bereitstellen.

Unter „Nachteilsausgleich berücksichtigt“ mit „Name hinzufügen“ einen oder mehrere Namen erfassen, optional je eine PDF auswählen und „Name und PDF speichern“ drücken. Eine erneute Auswahl ersetzt die PDF; ohne neue Datei bleibt die bisherige erhalten. „Entfernen“ löscht den Namen samt PDF. Die Checkboxen werden weiterhin separat mit „Speichern“ gespeichert. Der vorher fest eingetragene Name wird nicht automatisch übernommen.

PDFs (maximal 5 MB) liegen als BLOB in der Datenbank und sind ausschließlich nach Website-Anmeldung über den PHP-Endpunkt herunterladbar. Es gibt keine öffentlichen Datei-URLs. PHP muss Uploads von 5 MB erlauben (`upload_max_filesize` mindestens 5M, `post_max_size` größer als 5M); Datenbank `max_allowed_packet` muss größer als 5 MB sein. Nach Einrichtung Name/PDF speichern, neu laden, herunterladen und Ersatz sowie Entfernen prüfen. Nicht angemeldet müssen auch PDF-Aufrufe HTTP 401 liefern. Lokal ist kein PHP-Interpreter vorhanden; die Live-Funktion muss nach Upload geprüft werden.

Der Bereich „Namen und PDFs“ ist zunächst eingeklappt. „PDF anzeigen“ öffnet die geschützte PDF in einem neuen Browser-Tab. Dafür auch die aktuelle private `server/exam-accommodations.php` hochladen (Content-Disposition: inline). Keine Datenbankänderung nötig.

## Nachteilsausgleich: Namen und PDFs pro Klasse

Namen und PDFs werden direkt unter jeder Klasse verwaltet. Die Checkbox „Nachteilsausgleich berücksichtigt“ bleibt separat in jeder Klassenarbeit. Nachschreiber bleiben unverändert je Klassenarbeit.

1. In phpMyAdmin die bestehende Schul-Datenbank auswählen und `exam-accommodations-class-migration.sql` ausführen. Die vorhandenen Namen und PDFs werden verlustfrei der Klasse zugeordnet. Mehrere bisherige Einträge derselben Person bleiben erhalten und können im Frontend bereinigt werden. Erneutes Ausführen verändert bereits überführte Einträge nicht.
2. Die aktualisierte `server/exam-accommodations.php` im privaten `php/`-Verzeichnis neben `login.php` hochladen.
3. Den neuen Build aus `dist/` hochladen. Die öffentliche PHP-Einstiegsdatei bleibt unverändert.
4. Bei einer Klasse „Nachteilsausgleich · Namen und PDFs“ öffnen. Bestehende Einträge und PDF-Vorschau prüfen; Namen/PDFs lassen sich dort weiterhin hinzufügen, bearbeiten und entfernen. In den einzelnen Checklisten sind nur noch die zugehörigen Checkboxen, keine Namen oder PDF-Verwaltung.

Die bestehende Tabelle und deren Spalte `exam_key` werden weiterverwendet; dort steht für diese Einträge nun der Klassenschlüssel. Anmeldung, CSRF-Schutz und Versionsprüfung bleiben erhalten.

## Kommentare im Nachteilsausgleich

Das N-Overlay zeigt pro Person ein dreizeiliges, bei längerem Text vertikal
scrollbares Kommentarfeld. Name und Kommentar werden gemeinsam gespeichert und
können später geändert werden. Neue PDF-Uploads werden nicht mehr angeboten;
bereits gespeicherte PDFs bleiben über „PDF anzeigen“ verfügbar.

Migration `003-accommodation-comments.php` ergänzt beim nächsten GitHub-Deploy
die optionale Kommentarspalte automatisch. Die bestehenden Namen und PDFs bleiben
erhalten. Die aktuelle `exam-accommodations.sql` enthält die Spalte auch für eine
manuelle Neuinstallation.
