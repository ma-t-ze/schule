# Kalender auf der Startseite

Die Startseite zeigt den regelmäßigen Wochenstundenplan aus `Stundenplan.png`.
Es gibt keine Google-Kalender-Anbindung und keine Google-Anmeldung.

Die Unterrichtsblöcke und Zeiten sind in
`src/components/views/MainApplication/SchoolCalendar.vue` hinterlegt.
Die Wochenansicht umfasst Montag bis Freitag; die Tagesüberschriften zeigen nur die Wochentage ohne Datum.
Der regelmäßige Stundenplan wiederholt sich wöchentlich.
Ferien und Vertretungen werden nicht automatisch berücksichtigt.
