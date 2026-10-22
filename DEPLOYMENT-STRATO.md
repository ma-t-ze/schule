# Vue-Routen auf STRATO

`npm run build` kopiert `public/.htaccess` nach `dist/.htaccess`.
Der GitHub-Workflow baut vor dem Upload und prüft, dass beide Dateien identisch sind.

Beim manuellen Upload den Inhalt von `dist/` einschließlich der versteckten
`.htaccess` direkt in das Webverzeichnis der Subdomain hochladen. `index.html`,
`.htaccess` und `assets/` müssen nebeneinander liegen; keinen zusätzlichen
`dist/`-Unterordner anlegen. Im bestehenden Workflow ist das Ziel `visualizer/`.
Falls auf dem Server zusätzliche, hier nicht versionierte `.htaccess`-Regeln
existieren, diese vor dem Upload sichern und mit den Ergänzungen zusammenführen.

## Nach dem Upload testen

1. Im privaten Browserfenster `/medientechnik/adobe-indesign` direkt öffnen und
   neu laden: Die InDesign-Seite muss ohne Login erscheinen.
2. Ebenso `/3tgg2`, `/medientechnik` und `/3tgg12` direkt öffnen und neu laden.
3. `/` ohne Anmeldung öffnen: Die bestehende Vue-Login-Weiterleitung muss greifen.
4. `/login` direkt öffnen und anschließend die Navigation innerhalb der App prüfen.
5. `/medientechnik/indesign/william-morris.png` und
   `/3tgg12/gestaltgesetze.pdf` öffnen: Es müssen Bild bzw. PDF erscheinen.

Apache liefert für Vue-Routen intern `index.html`. Vorhandene Dateien und
Verzeichnisse werden weiterhin normal ausgeliefert. Nur die Kursübersichten
`/3tgg12` und `/medientechnik`, deren Namen auch Asset-Ordner bezeichnen, haben
gezielte Ausnahmen. Apaches normale Weiterleitung zum abschließenden Slash bei
Verzeichnisnamen kann weiterhin auftreten.

Der Apache-Fallback ändert keine Vue-Zugriffsregeln. Der Schutz von `/` bleibt
die bestehende clientseitige Login-Logik. Ein Zertifikatsfehler wie
`NET::ERR_CERT_AUTHORITY_INVALID` ist ein separates HTTPS-Problem und wird durch
diese Rewrite-Regeln nicht behoben.
