# UI-Gestaltung

- Bei neuen Gestaltungsaufträgen in diesem Projekt grundsätzlich PrimeVue verwenden, soweit passende Komponenten vorhanden sind.
- PrimeVue 4 ist in `src/main.js` mit dem Aura-Theme aus `@primeuix/themes` eingerichtet. Komponenten lokal in der jeweiligen Vue-Datei importieren (z. B. `import Button from 'primevue/button'`), damit nur benötigte Komponenten eingebunden werden.
- Eigene Layouts und ergänzendes CSS/SCSS sind weiterhin möglich. Kein zusätzliches UI-Framework ohne konkreten Bedarf einführen.
- Bestehende Seiten nur auf ausdrücklichen Auftrag auf PrimeVue umstellen. Bei kleinen Inhaltsänderungen die vorhandene Gestaltung beibehalten.
- Der Dark Mode wird explizit über `.prime-dark` aktiviert und folgt nicht automatisch der Systemeinstellung.
- Änderungen lokal mit `npm run build` prüfen; ohne Auftrag weder pushen noch veröffentlichen.

## Projektübergreifende Konsistenz

Bei allen Arbeitsaufträgen innerhalb eines Projekts sollen die anderen bestehenden Projekte als Orientierung dienen.

- **Aufbau:** Orientiere dich an der Struktur und Organisation vergleichbarer Projekte. Vor allem wenn ein carousel mit klickbaren Schritten vorkommt übernehme das.
- **Design:** Übernimm bestehende Gestaltungsprinzipien, insbesondere Layout, Typografie, Farben, Abstände und Komponenten.
- **Codequalität:** Verwende vorhandene Konventionen, Architekturen und bewährte Lösungen.
- **Arbeitsweise:** Prüfe vor jeder Umsetzung, wie vergleichbare Aufgaben in anderen Projekten gelöst wurden.

**Grundregel:** Vermeide unnötige Abweichungen von bestehenden Projekten. Einheitlichkeit und Wiederverwendbarkeit haben Vorrang vor neuen individuellen Lösungen.

Falls andere Projekte nicht zugänglich sind, frage nach, anstatt deren Aufbau oder Design zu vermuten.
