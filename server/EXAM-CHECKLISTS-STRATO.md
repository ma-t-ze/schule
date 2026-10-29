# Checklisten für Klassenarbeiten

1. In phpMyAdmin die bestehende Datenbank auswählen und `exam-checklists.sql` importieren. Die neue Tabelle verändert keine bestehenden Daten.
2. `server/exam-checklists.php` neben `login.php` und `database-config.php` in das private Verzeichnis `php/` hochladen.
3. Den neuen Build bereitstellen. `dist/exam-checklists.php` gehört in das öffentliche Verzeichnis neben `index.html`.

In Schule bei einer Klasse die Termine ausklappen, dann bei einer Klassenarbeit „Checkliste“ öffnen. Checkboxen und optionale Nachschreiber-Namen bearbeiten und **Speichern** drücken. Danach neu laden und den gespeicherten Stand prüfen. Jede Klassenarbeit hat eine eigene Checkliste für das Schuljahr 2026/27. Termine und Kalender bleiben unverändert.

Die API verwendet die bestehende PHP-Login-Sitzung, CSRF-Token, vorbereitete SQL-Abfragen und Versionsprüfung gegen versehentliches Überschreiben aus mehreren Fenstern. Ohne Anmeldung kein Zugriff. Die Nachschreiber-Namen werden ausschließlich in der STRATO-Datenbank gespeichert, nicht im Repository oder Browser-Speicher. Der lokale Dev-Modus verwendet wie Upcoming dieselbe STRATO-Datenbank; PHP-Datei, öffentlicher Einstieg und Tabelle müssen deshalb auch für lokale Tests hochgeladen sein.
