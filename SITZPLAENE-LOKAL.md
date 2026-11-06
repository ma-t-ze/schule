# Sitzpläne – ausschließlich lokal

Die Kachel unter „Prüfungen“ und die Route `/sitzplaene` gibt es ausschließlich
bei `npm run serve`. Sie verwenden weiterhin den bestehenden Website-Login.
Im Produktionsbuild werden Route, Ansicht und zugehörige Bilder nicht eingebunden.

Bilder lokal unter `src/local-sitzplaene/bilder/` ablegen (PNG, JPG, JPEG oder WebP).
Der Dateiname wird als Beschriftung verwendet. Der ganze Ordner ist über
`.gitignore` ausgeschlossen und wird nicht gepusht. Keine Schülerbilder in
`public/` oder anderen Quellordnern ablegen. Es gibt keinen Upload und keine
Datenbankspeicherung für diese Bilder. Nur Platznummern werden synchronisiert;
siehe `server/SEATING-STRATO.md`.

Der generische Code für die Dev-Ansicht darf in Git liegen; Bildinhalte bleiben
lokal. Nach dem Klonen den lokalen Bilderordner bei Bedarf neu anlegen.

„Lokal“ bedeutet hier: keine Veröffentlichung auf STRATO. Der bestehende Login
und andere Funktionen der Website verwenden im Dev-Modus weiterhin STRATO;
ein vollständig netzunabhängiger Offline-Login ist damit nicht eingerichtet.
Für einen nur am eigenen Rechner erreichbaren Dev-Server:
`npx vite --host 127.0.0.1`.

## Klassenraster

Unter `/sitzplaene` sind die lokal vorhandenen Klassen verlinkt. Eine Klasse
öffnet ein Raster mit 6 Spalten und 5 Reihen. Zum Verschieben eine Person auf
einen anderen Platz ziehen oder Ausgangs- und Zielplatz nacheinander anklicken.
Belegte Plätze werden getauscht; freie Plätze können ebenfalls Ziel sein.
Die Sitzordnung wird als Platznummern auf STRATO gespeichert und zusätzlich
im Browser zwischengespeichert. Namen und Fotos bleiben lokal.
Einrichtung: `server/SEATING-STRATO.md`.

Die extrahierten Namen und Bilder liegen ausschließlich unter
`src/local-sitzplaene/klassen/<klassen-id>/` (von Git ausgeschlossen).
`klasse.json` enthält die Namen und die Zuordnung zu den Bilddateien.
Die ursprüngliche PDF wurde nicht ins Projekt kopiert.

## Noten im festen Schule-Ordner

Der lokale Vite-Dev-Server speichert mündliche und schriftliche Noten direkt unter
`schule/local-noten/Noten_<klassen-id>.json`. Der Pfad wird aus dem Verzeichnis der
`vite.config.js` bestimmt und benötigt keinen Browser-Dateidialog. Der Ordner wird
bei der ersten Speicherung automatisch angelegt, ist von Git ausgeschlossen und
wird weder in den Build eingebunden noch auf STRATO hochgeladen. Vite verweigert
den direkten Abruf der Dateien über die Website.

Beim Öffnen einer Klasse wird die Datei automatisch geladen und mit der vorhandenen
Browserkopie zusammengeführt. Alte Notendateien können über „Notendatei importieren“
übernommen werden. „Speichern“ im Notendialog schreibt den Eintrag und aktualisiert
die Datei; „Entfernen“ speichert die Löschung ebenfalls direkt. Der übergeordnete
Button „Speichern“ sichert alle aktuellen Einträge der Klasse. Eine Browserkopie
bleibt als zusätzliche lokale Sicherung erhalten.

Die Speicherung läuft ausschließlich über `/__local-noten/<klassen-id>` auf dem
lokalen Dev-Server. Zugriff wird nur vom Loopback-Rechner und aus derselben lokalen
Webadresse erlaubt. Die API ist im Produktionsserver nicht vorhanden. STRATO erhält
keine Notendaten; die Sitzplan-API erhält weiterhin nur Platzanordnungen.

Dateien werden über eine temporäre Datei atomar ersetzt. Eine Dateiversion und ein
Schreib-Lock verhindern das unbeabsichtigte Überschreiben zwischen mehreren Tabs
bzw. Dev-Servern. Bei zwischenzeitlicher externer Änderung „Dateistand laden“ klicken,
um die Einträge zusammenzuführen, und anschließend erneut speichern. Einträge werden
anhand ihrer IDs und Änderungszeiten zusammengeführt; Löschmarkierungen verhindern,
dass ältere Sicherungen gelöschte Noten wiederherstellen. Ungültige Dateien werden
nicht überschrieben.

Für die Dateispeicherung muss `npm run serve` bzw. Vite auf diesem Rechner laufen.
Bei Zugriff über eine LAN-Adresse ist sie bewusst nicht verfügbar. Die Anmeldung
und Sitzplatz-Synchronisation verwenden weiterhin STRATO. Ein Neustart des Dev-Servers
ist nach der Umstellung erforderlich. Das Löschen der Browserdaten entfernt die
Dateien im Schule-Ordner nicht.

### Noten direkt in den Schülerkacheln

Unter dem Foto stehen getrennte Zeilen für mündliche und schriftliche Noten.
Alle aktiven Einträge erscheinen mit dem neuesten Datum zuerst; ein Strich
bedeutet, dass noch kein Eintrag vorhanden ist. Ein Klick auf eine Zeile öffnet
den Notendialog mit der passenden Notenart. Dort kann die Art auch geändert werden.
Alte Notendateien ohne Notenart werden weiterhin als mündliche Noten eingelesen.
Beide Arten werden gemeinsam in der lokalen Notendatei gesichert.

### Zusätzliche Sicherungskopie

„Sicherungskopie speichern“ öffnet in Chrome einen Speichern-Dialog für eine
zusätzliche JSON-Datei der aktuellen Klasse. Der vorgeschlagene Dateiname enthält
Datum und Uhrzeit. Gesichert werden beide Notenarten einschließlich Bemerkungen
und Löschmarkierungen. Die Kopie kann über „Notendatei importieren“ wieder eingelesen
werden. Die reguläre Datei im Schule-Ordner und deren Speicherstatus werden durch
den Export nicht verändert. Ohne Dateiauswahl-API wird ein Download gestartet.
