# Rally-Grundgerüst

Route: `/rally` (Link auf der Schule-Startseite).

## Ausprobieren

- Ein Wesen in der Liste anklicken: Vorschau ohne Kamera, zählt nicht als Entdeckung.
- „Stationscodes für die Rally“ öffnen und die acht Codes drucken oder auf einem zweiten Bildschirm anzeigen.
- Kamera starten und einen Code scannen. Die Erkennung findet lokal mit jsQR statt.
- Das Wesen bleibt bis „Nächste Station scannen“ sichtbar, unabhängig von Lage, Abstand und Sichtbarkeit des Codes.
- Scans bleiben lokal unter `rally-found-v1` gespeichert. Zusätzlich werden Kreaturen, Codeziffern, Scans, Freigaben, Heimflüge und Energie in Firebase abgelegt. Die Seite `/freecreatures` steuert die Freigaben live. Einrichtung und Spiel-Links: [Firebase-Rally](../../../../firebase-rally/README.md).

Für eine Handykamera muss die bereitgestellte Seite HTTPS verwenden. `localhost` funktioniert auf dem Entwicklungsgerät, eine unverschlüsselte LAN-IP auf einem anderen Gerät nicht. Der Browser fragt nach Kameraerlaubnis; Audio wird nicht angefordert.

## Erweiterung

`stations.js` definiert Namen, Modelltyp und Darstellungsgröße in CSS-Pixeln (auf kleinen Bildschirmen auf 85vw begrenzt). Gültige QR-Inhalte sind exakt `RALLY:STATION:1` bis `RALLY:STATION:8`. Fremde Inhalte werden nicht als Links geöffnet.

`creatures.js` baut acht prozedurale 3D-Startmodelle. Diese können später durch eigene GLB-Modelle ersetzt werden. `CreatureViewer.vue` rendert sie transparent über dem Kamerabild. Die 3D-Kamera ist fest; es gibt kein Markertracking, keine Weltverankerung und keine physische Größenmessung.

Kamera und Scan-Timer werden bei Navigation, Deaktivierung durch KeepAlive und beim Wechsel in den Hintergrund beendet. Ein verspätet erlaubter Kamerazugriff nach dem Verlassen wird sofort geschlossen. Die Kamera startet nach Rückkehr nur auf Knopfdruck neu.

## Prüfung

`node --test src/components/views/Rally/rally.test.js`

Die Tests prüfen die acht QR-Codes mit echtem Encoder und Decoder, ungültige Codes und die Modellabmessungen. `npm run build` prüft die Vue-Integration. Kamerafreigabe, Orientierung und Darstellung auf echten iOS-/Android-Geräten müssen zusätzlich praktisch getestet werden.
