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
