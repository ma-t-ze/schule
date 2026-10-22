# Website-Login mit Sitzung

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
PHP-Dateien manuell nach `php/` hochladen, nicht nach `visualizer/`. Der Ordner
`php/` muss für PHP beschreibbar sein, damit dort `sessions/` angelegt werden kann.
Die vorherige serverseitige login.php vor dem Ersetzen sichern.

Danach den aktuellen Inhalt von `dist/` inklusive proxy.php hochladen.
Frontend und Backend gehören zusammen: Der Login erwartet jetzt reines JSON.
Der GitHub-Workflow überträgt ausschließlich dist, nicht diesen privaten Ordner.

Mit „30 Tage angemeldet bleiben“ wird ein HttpOnly-Cookie mit fester Laufzeit
gesetzt. Ohne Häkchen gilt die Sitzung höchstens 12 Stunden und das Cookie endet
mit der Browsersitzung. Passwort und Anmeldestatus werden nicht im localStorage
gespeichert. PHP prüft die Sitzung beim erneuten Aufruf geschützter Routen.

Prüfen: Login mit und ohne Häkchen, falsches Passwort, Neuladen von `/`, neuer
Browserstart mit Häkchen sowie öffentliche Unterrichtsseiten ohne Anmeldung.
Der Schutz der Vue-Seite bleibt clientseitig; vertrauliche APIs benötigen ihre
eigene serverseitige Berechtigungsprüfung. Firebase-Logins sind davon unabhängig.
