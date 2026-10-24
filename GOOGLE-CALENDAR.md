# Kalender auf der Startseite

Der Kalender bietet Woche und Monat ohne Google-Anbindung.
Die Wochenansicht enthält den regelmäßigen Stundenplan und datierte Upcoming-Notizen
der ganzen Woche. Die Monatsansicht enthält nur die datierten Notizen.
Notizen können angeklickt werden, um ihren vollständigen Text zu lesen.

Der Stundenplan ist in `src/components/views/MainApplication/SchoolCalendar.vue`
hinterlegt. Ferien und Vertretungen werden nicht automatisch berücksichtigt.
Zur Datenbank-Erweiterung siehe `server/UPCOMING-STRATO.md`, Abschnitt
„Erweiterung: Notizen mit Kalenderdatum“.
