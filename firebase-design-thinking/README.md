# Design-Thinking-Beiträge

Schülerseite: `/3tgg2/entwicklung-einer-app-design-thinking`
Admin: `/3tgg2/entwicklung-einer-app-design-thinking/admin`

## Einmalige Einrichtung in gestaltgesetze-ada34

1. Firebase Authentication → Sign-in method: Anonymous und Google aktivieren. Bei Google eine Support-E-Mail auswählen. Unter Settings → Authorized domains die Domain der Website eintragen.
2. In der Admin-Ansicht „Mit Google anmelden“ anklicken und das Lehrerkonto auswählen. Beim ersten Mal erscheint noch „nicht freigeschaltet“. Danach unter Firebase Authentication → Users die UID dieses Google-Kontos kopieren.
3. In Firestore `design_thinking_admins/{LEHRER-UID}` anlegen, Feld `enabled` als Boolean `true`. Nur über Firebase-Konsole/Admin SDK freischalten. Die Website erlaubt keine eigene Rollenvergabe.
4. `firestore.rules.fragment` innerhalb des vorhandenen documents-Blocks ergänzen und veröffentlichen. Alternativ enthält `../firebase-bkgd-quiz/firestore.rules.complete` die zuletzt bereitgestellten vollständigen Regeln einschließlich dieses Zusatzes. Spätere Änderungen in der Firebase-Konsole vor Ersetzen abgleichen.
5. Den gebauten Inhalt von `dist` auf den Webserver hochladen. Nach der Freischaltung die Admin-Seite neu laden oder erneut mit Google anmelden.

Der bestehende Website-Login über proxy.php kann keine Firestore-Berechtigung nachweisen. Daher nutzt die Admin-Ansicht eine Google-Anmeldung über Firebase. Ein separates Passwort für die Website ist nicht erforderlich. Die Google-Anmeldung allein verleiht keine Admin-Rechte: Dafür bleibt die UID-Freischaltung erforderlich. Schüler und Admin verwenden getrennte Firebase-App-Instanzen, damit der Lehrer-Login nicht die Schüler- oder Quiz-Identität ersetzt.

## Ablauf

Schüler geben ihren Text ein und senden ihn direkt, ohne Farbauswahl. Beiträge werden sofort für alle Besucher der Schülerseite öffentlich sichtbar – auch ohne Anmeldung zum Lesen. Die Listen für Briefing/Rebriefing und Problemfragen sind ausklappbar und aktualisieren sich live.

`design_thinking_posts` speichert UID (`uid`), Typ (`kind`: briefing/problem), Text (`text`) und Serverzeit (`createdAt`). Schreiben erfordert die automatische anonyme Anmeldung. Schüler können Beiträge weder ändern noch löschen. Wiederholte Übertragungen derselben Beitrags-ID vermeiden Duplikate.

Freigeschaltete Lehrkräfte melden sich mit Google an und können jeden Beitrag direkt bearbeiten, speichern oder nach Bestätigung vollständig löschen. Änderungen und Löschungen sind sofort auf der Schülerseite sichtbar. Die Regeln erlauben beim Bearbeiten ausschließlich Änderungen am Text (1–5.000 Zeichen); UID, Typ und Erstellungszeit bleiben unverändert. Bestehende Beiträge mit Farbfeld bleiben bearbeitbar.

Der bisherige Ablauf „Übernehmen → Ergebnisentwurf → Ergebnisse speichern“ entfällt. Bereits gespeicherte Sammelergebnisse in `design_thinking_results` bleiben in der Datenbank erhalten, werden aber nicht mehr angezeigt. Es gibt weiterhin einen gemeinsamen Arbeitsbereich für 3TGG2.

## Veröffentlichung des neuen Ablaufs

Den bisherigen Design-Thinking-Regelblock durch das aktuelle Fragment ersetzen oder die abgeglichene vollständige Regeldatei veröffentlichen. Danach die Website neu bauen und hochladen. Die neuen Regeln geben alle bestehenden und neuen Beiträge öffentlich zum Lesen frei. Admin-Freischaltungen bleiben unverändert. Ohne diese Regelaktualisierung funktionieren öffentliche Beitragslisten sowie Bearbeiten und Löschen nicht.

Die allgemeinen alten Regeln mit Ablaufdatum 2026-08-07 bleiben unverändert. Dieses Datum nicht verlängern: Eine pauschale Schreibfreigabe würde auch den Admin-Schutz umgehen.

## Aktualisierung nach Entfernen der Farbauswahl

- Den bisherigen Design-Thinking-Regelblock durch das aktuelle Fragment ersetzen (nicht zusätzlich daneben einfügen). Alternativ die abgeglichene vollständige Regeldatei verwenden.
- Regeln und aktualisierte Website gemeinsam in einer Unterrichtspause veröffentlichen: Die alten Regeln verlangen noch eine Farbe, die neuen Regeln erlauben bei neuen Beiträgen kein Farbfeld mehr. Anschließend die Schülerseite neu laden.
- Website mit `npm run build` im Ordner `schule` bauen und den Inhalt von `dist` hochladen.
- Bereits gespeicherte Beiträge mit Farbfeld bleiben lesbar und können weiterhin übernommen werden. Eine Datenmigration ist nicht erforderlich; die Admin-Ansicht zeigt alle Beiträge einheitlich an.

Die Dateien im Repository allein aktualisieren noch nicht die Regeln in Firebase.

## Umstellung auf Google-Anmeldung

Google wie oben aktivieren und die aktualisierte Website hochladen. Für ein bisheriges E-Mail/Passwort-Konto nach der Google-Anmeldung die tatsächliche UID unter Authentication prüfen und diese freischalten. Die Firestore-Regeln bleiben unverändert; sie prüfen weiterhin die UID und das Feld `enabled`.

## Abstimmung über Problemfragen

Unter den Problemfragen können Schüler maximal zwei unterschiedliche Fragen ankreuzen und mit „Stimme Abgeben“ bestätigen. Eine einzelne Auswahl ist ebenfalls erlaubt. Nach der Abgabe werden die live aktualisierten Stimmenzahlen sichtbar. Die Auswahl ist danach endgültig.

Die Sammlung `design_thinking_votes` speichert pro anonym angemeldeter UID ein Dokument mit `postIds` (ein oder zwei unterschiedliche vorhandene Problemfragen) und `createdAt`. Die Regeln verhindern weitere Abstimmungen und Änderungen derselben UID. Neue Browserprofile oder gelöschte Browserdaten können eine neue anonyme Identität erzeugen; eine Begrenzung pro realer Person erfordert persönliche Schülerkonten. Die Stimmenzahlen werden im Browser aus den lesbaren Abstimmungen berechnet; das Ausblenden vor Abgabe ist keine serverseitige Geheimhaltung.

Die aktualisierten Regeln vor Nutzung veröffentlichen. Es gibt eine gemeinsame Abstimmung. Über „Abstimmung zurücksetzen“ kann die Lehrkraft nach Bestätigung alle bisherigen Stimmen löschen. Die Problemfragen bleiben erhalten und bereits verbundene Schüler können ohne Neuladen erneut abstimmen. Während des Zurücksetzens kurz mit neuen Abgaben warten. Dafür müssen die aktualisierten Regeln veröffentlicht sein (Löschen von Stimmen nur für freigeschaltete Lehrkräfte). Gelöschte Fragen verschwinden aus der Anzeige; bereits abgegebene Stimmen werden dadurch nicht erneut verfügbar.
