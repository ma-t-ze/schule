# UI-Gestaltung

- Bei neuen Gestaltungsaufträgen in diesem Projekt grundsätzlich PrimeVue verwenden, soweit passende Komponenten vorhanden sind.
- PrimeVue 4 ist in `src/main.js` mit dem Aura-Theme aus `@primeuix/themes` eingerichtet. Komponenten lokal in der jeweiligen Vue-Datei importieren (z. B. `import Button from 'primevue/button'`), damit nur benötigte Komponenten eingebunden werden.
- Eigene Layouts und ergänzendes CSS/SCSS sind weiterhin möglich. Kein zusätzliches UI-Framework ohne konkreten Bedarf einführen.
- Bestehende Seiten nur auf ausdrücklichen Auftrag auf PrimeVue umstellen. Bei kleinen Inhaltsänderungen die vorhandene Gestaltung beibehalten.
- Der Dark Mode wird explizit über `.prime-dark` aktiviert und folgt nicht automatisch der Systemeinstellung.
- Änderungen lokal mit `npm run build` prüfen; ohne Auftrag weder pushen noch veröffentlichen.
