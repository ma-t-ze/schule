# Upcoming-Notizen mit STRATO MySQL/MariaDB

## Datenbank einrichten

1. Im STRATO-Kundenbereich eine MySQL-/MariaDB-Datenbank anlegen oder eine bestehende auswählen.
2. Hostname, Datenbankname und Benutzer aus STRATO übernehmen. Das Datenbankpasswort
   ausschließlich lokal in `server/database-config.php` eintragen. Die Datei ist
   von Git ausgeschlossen; sie darf nicht ins öffentliche Webverzeichnis.
3. In STRATO phpMyAdmin die richtige Datenbank auswählen und `server/upcoming.sql`
   importieren. Die Datei legt ausschließlich die neue Tabelle `school_upcoming`
   an; vorhandene Tabellen werden nicht verändert.
4. Die privaten Dateien `server/upcoming.php` und `server/database-config.php`
   neben der bereits eingerichteten `login.php` nach `php/` hochladen:

   ```text
   php/                          (außerhalb des öffentlichen Webverzeichnisses)
     login.php
     login-credentials.php
     upcoming.php
     database-config.php
     sessions/
   visualizer/                   (öffentlich)
     upcoming.php                (aus public/ bzw. dist/)
     proxy.php
     index.html
     assets/...
   ```

5. Den aktuellen Build aus `dist/` bereitstellen. Das normale Deployment überträgt
   den öffentlichen PHP-Einstieg automatisch, aber **keine privaten PHP-Dateien**.
   Die bisherige Login-Implementierung bleibt unverändert.
6. Anmelden, „Klassenarbeiten“ öffnen und unter „Upcoming“ eine Notiz anlegen.
   Nach Neuladen muss sie erhalten bleiben. Titel und Text bearbeiten, erneut
   laden und dann eine Testnotiz löschen. Ohne gültige Anmeldung muss die API
   HTTP 401 liefern. Nicht eingerichtete Datenbank: HTTP 503 und eine Fehlermeldung.

## Lokal entwickeln

Den Vite-Server nach dieser Proxy-Änderung neu starten (`npm run serve`).
`/site-auth/upcoming.php` wird wie der Login an STRATO weitergeleitet. Die privaten
PHP-Dateien und die Tabelle müssen deshalb auch für den Dev-Modus auf STRATO
vorhanden sein. **Dev und Produktion verwenden dieselbe Datenbank.** Lokale
Änderungen an Notizen ändern somit die echten Daten.

## Verhalten

- Jede Karte hat Titel (max. 160 Zeichen) und optionaler Notiz (max. 5000 Zeichen).
- Neue Karten erscheinen oben. Keine automatische Termininterpretation.
- Zugriff nur mit der vorhandenen, serverseitig geprüften Website-Login-Sitzung.
- Schreibzugriffe benötigen zusätzlich ein sitzungsgebundenes CSRF-Token.
- SQL-Abfragen verwenden PDO und gebundene Parameter; Inhalte werden als Text angezeigt.
- Konflikte bei Änderungen aus mehreren Tabs werden angezeigt. Vor erneutem
  Bearbeiten die Liste neu laden. Ein vorhandener Entwurf bleibt bis zum Schließen erhalten.
- Die Notizen gehören zum bestehenden gemeinsamen Website-Login; es gibt keine
  getrennten Benutzerkonten. Firebase wird nicht verwendet oder verändert.

Die Live-Datenbankverbindung lässt sich erst nach Eintrag der Zugangsdaten,
Tabellenimport und Upload der privaten PHP-Dateien prüfen. PHP/PDO-MySQL müssen
beim Hosting verfügbar sein; lokal ist aktuell kein PHP-Interpreter installiert.

## Erweiterung: Notizen mit Kalenderdatum

Bei einer bereits vorhandenen Tabelle **einmal** `server/upcoming-date-migration.sql`
in phpMyAdmin ausführen. Dabei wird `event_date` ergänzt; vorhandene Notizen bleiben
erhalten und haben zunächst kein Datum. Bei einer neuen Datenbank enthält
`upcoming.sql` die Spalte bereits.

Danach die aktualisierte private Datei `server/upcoming.php` nach `php/upcoming.php`
hochladen und den neuen Frontend-Build bereitstellen. Der öffentliche Einstieg
`visualizer/upcoming.php` bleibt unverändert. Kein Datenbankpasswort ändern.

Im Notizformular ist das Datum optional und kann über das Kreuz wieder entfernt
werden. Notizen ohne Datum bleiben ausschließlich bei Upcoming. Datierte Notizen
erscheinen im Monatskalender am gewählten Tag und in der Wochen-Terminliste,
inklusive Wochenenden. Änderungen und Löschen werden sofort im Kalender übernommen.
Die Wochenansicht enthält zusätzlich den regelmäßigen Stundenplan; die Monatsansicht
zeigt ausschließlich die datierten Notizen. Keine Google-Synchronisation.

## Mehrtägige Zeiträume

Für bestehende Tabellen nach der Datumsmigration zusätzlich
`upcoming-range-migration.sql` in phpMyAdmin ausführen und die aktuelle
`server/upcoming.php` nach `php/upcoming.php` hochladen. Neue Tabellen enthalten
beide Datumsspalten bereits in `upcoming.sql`.

Ein optionales Enddatum macht die Notiz zum Zeitraum. Start- und Endtag zählen
beide mit; ohne Enddatum bleibt es ein einzelner Tag. Ein Enddatum vor dem Start
ist ungültig. Beim Entfernen des Startdatums wird auch das Enddatum entfernt.
Der Kalender zeigt die Notiz an allen Tagen des Zeitraums, auch über Wochen-
und Monatsgrenzen hinweg.

## Notizablauf

Upcoming zeigt nur Notizen ohne Startdatum. Sobald ein Datum gespeichert wird,
ist die Notiz ausschließlich im Kalender sichtbar. Ein Klick auf den Balken
öffnet die Details mit Bearbeiten und Löschen. Wird das Startdatum beim Bearbeiten
entfernt, erscheint die Notiz nach erfolgreichem Speichern wieder unter Upcoming.
Für diesen Ablauf ist keine weitere Datenbankänderung nötig.

Der Notiztext ist optional. Für diese Änderung die aktuelle `server/upcoming.php`
nach `php/upcoming.php` hochladen; die Datenbanktabelle muss nicht geändert werden.
