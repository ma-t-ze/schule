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
