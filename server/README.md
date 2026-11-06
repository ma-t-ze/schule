# Website-Login mit Sitzung

## Lokale Entwicklung

Nach Änderungen an `vite.config.js` den Dev-Server neu starten (`npm run serve`).
Die lokale Anmeldung läuft über `/site-auth/proxy.php` zum HTTPS-Login auf STRATO.
Es gelten dieselben Zugangsdaten wie online; der aktuelle PHP-Login muss dort
installiert sein. Lokal ist keine PHP-Installation nötig. Für den lokalen
HTTP-Zugriff entfernt nur der Dev-Proxy das Secure-Attribut des Sitzungscookies.
Die Produktionskonfiguration bleibt unverändert. Lokale und Online-Sitzungen
haben getrennte Browsercookies.

## Upload auf STRATO

Auf STRATO müssen diese Dateien außerhalb des öffentlichen Webordners liegen:

```text
php/
  login.php
  login-credentials.php
visualizer/
  proxy.php
  index.html
```

`login-credentials.php` wurde lokal aus der bereitgestellten Datei übernommen.
Sie enthält die bisherigen Zugangsdaten und ist von Git ausgeschlossen. Beide
Die versionierten PHP-Dateien werden durch `.github/workflows/deploy.yml` automatisch
nach `php/` hochgeladen. Zugangsdaten und `database-config.php` bleiben ausschließlich
auf dem Server und werden beim Deployment nicht überschrieben. Der Ordner
`php/` muss für PHP beschreibbar sein, damit dort `sessions/` angelegt werden kann.
Die vorherige serverseitige login.php vor dem Ersetzen sichern.

Der Workflow überträgt anschließend den aktuellen Inhalt von `dist/` inklusive proxy.php.
Frontend und Backend gehören zusammen: Der Login erwartet jetzt reines JSON.
Der GitHub-Workflow überträgt beide Bereiche getrennt und führt vor dem Frontend-Upload die Datenbankmigrationen aus.

Mit „30 Tage angemeldet bleiben“ wird ein HttpOnly-Cookie mit fester Laufzeit
gesetzt. Ohne Häkchen gilt die Sitzung höchstens 12 Stunden und das Cookie endet
mit der Browsersitzung. Passwort und Anmeldestatus werden nicht im localStorage
gespeichert. PHP prüft die Sitzung beim erneuten Aufruf geschützter Routen.

Prüfen: Login mit und ohne Häkchen, falsches Passwort, Neuladen von `/`, neuer
Browserstart mit Häkchen sowie öffentliche Unterrichtsseiten ohne Anmeldung.
Der Schutz der Vue-Seite bleibt clientseitig; vertrauliche APIs benötigen ihre
eigene serverseitige Berechtigungsprüfung. Firebase-Logins sind davon unabhängig.

## Automatisches Deployment nach STRATO

Ein Push nach `main` startet Tests, Build und Deployment. Unter GitHub Actions kann
„Deploy to Web Space“ auch manuell gestartet werden (`workflow_dispatch`).
Der bestehende Secret `SECRET_SSH` genügt. Die auf STRATO bereits vorhandenen
`php/database-config.php` und `php/login-credentials.php` bleiben Voraussetzung.
Der Workflow sucht über `.github/scripts/strato-php.sh` eine echte PHP-CLI
(PHP >= 7.4 mit PDO-MySQL), bevorzugt unter `/opt/RZphpXX/bin/php-cli`.
STRATOs Standardkommando `php` kann stattdessen auf PHP-CGI zeigen.

Ablauf:

1. Migrationen gegen eine separate, kurzlebige MariaDB in GitHub Actions testen.
2. Frontend bauen und private PHP-Dateien auf Syntaxfehler prüfen.
3. Die explizit aufgelisteten Backend-Dateien und `server/migrations/` nach `php/`
   übertragen. Kein Löschen im privaten Ordner; Konfiguration, Sitzungen und
   gespeicherte Dateien bleiben erhalten. Tests und lokale Schülerdaten werden
   nicht hochgeladen.
4. Über SSH die erkannte PHP-CLI mit `php/migrate.php` ausführen. Die Datenbank-Zugangsdaten werden nur
   auf STRATO gelesen. Bei Fehlern schlägt der Deploy fehl, bevor das Frontend
   hochgeladen wird; bereits übertragene Backend-Dateien bleiben dabei bestehen.
5. Den Build wie bisher nach `visualizer/` übertragen.

`school_schema_migrations` protokolliert erfolgreiche Migrationen. Der erste Lauf
legt fehlende Tabellen an und ergänzt die bisherigen Spalten/Indizes auch in
bestehenden Installationen. Er ergänzt fehlende Klassenarbeitseinträge, ohne
bearbeitete Titel, Notizen oder Termine zu überschreiben. Weitere Läufe überspringen
erledigte Migrationen. Ein Datenbank-Lock verhindert gleichzeitige Migrationen.

Neue Strukturänderungen als neue nummerierte PHP-Datei in `server/migrations/`
anlegen (Rückgabewert: Funktion mit PDO-Argument). Bereits ausgeführte Dateien
unverändert lassen. SQL-Snapshots gehören ebenfalls in diesen Ordner. MySQL-DDL
ist nicht vollständig transaktional; Migrationen müssen nach einem Teilfehler
gefahrlos wiederholt werden können. Kein automatischer Import beliebiger alter
`*-migration.sql`-Dateien und kein Zurücksetzen der Benutzerdaten bei Deploys.

Termine werden anschließend ausschließlich über die Website gepflegt. Für neue
Klassenarbeiten ist kein manueller Seed-Import mehr nötig. Die älteren Anleitungen
in den einzelnen STRATO-Dokumenten beschreiben die frühere manuelle Installation;
bei Nutzung dieses Workflows entfallen deren Upload- und SQL-Import-Schritte.
