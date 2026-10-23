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

- Jede Karte hat Titel (max. 160 Zeichen) und Notiz (max. 5000 Zeichen).
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
