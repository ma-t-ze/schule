# BKGD Live-Quiz

Route: `/kahoot-farbmischsysteme-programme-bkgd`

20 Fragen aus den lokalen Seiten „Farbmischsysteme“ und „Programme im ersten
Jahr Medientechnik“, zehn pro Thema. Pro Frage 30 Sekunden; richtige Antworten
geben 500 bis 1.000 Punkte: Je schneller die Antwort bei Firebase eingeht, desto
mehr Punkte. Falsche und fehlende Antworten geben 0 Punkte. Bei Gleichstand haben die
Teilnehmenden dieselbe Punktzahl; die Anzeige sortiert dann nach Spitznamen.

## Firebase einmalig vorbereiten

Die Anwendung nutzt die vorhandene Konfiguration in `src/services/firebase.js`
für **gestaltgesetze-ada34**. Es wird kein zweites Firebase-Projekt benötigt.

1. In Firebase Authentication unter „Anmeldemethode“ **Anonym** aktivieren.
   Die Geräte erhalten im Hintergrund eine Kennung. Für die Klasse genügt ein
   Spitzname; E-Mail und Passwort sind nicht nötig.
2. In Firestore Database → Regeln den Inhalt von `firestore.rules.fragment`
   **innerhalb** von `match /databases/{database}/documents` ergänzen.
   Bestehende Regeln für Gestaltgesetze, Rally und andere Anwendungen behalten.
   Das Fragment ist keine vollständige Regeldatei.
3. Regeln veröffentlichen und den aktuellen Inhalt von `dist/` hochladen.

Die neuen Sammlungen `bkgd_quiz_games` und `bkgd_quiz_clocks` entstehen bei der
Benutzung. Keine Dokumente oder Indizes müssen von Hand angelegt werden.
Keine bestehenden Quiz-Ergebnisse werden überschrieben.

## In der Klasse

1. Auf dem Beamer „Neues Quiz leiten“ öffnen. Die Spielleitung bleibt in diesem
   Browser. Ihr Steuerungslink enthält `mode=host` und funktioniert nur mit
   derselben anonymen Browserkennung, nicht für andere Geräte.
2. Die Klasse scannt den QR-Code oder öffnet die Quiz-Seite, gibt den
   sechsstelligen Spielcode ein und wählt einen Spitznamen.
3. Die Spielleitung startet das Quiz. Teilnehmende sehen während der Frage
   nur A–D, den Countdown und die Fragennummer, nicht den Fragetext.
4. Nach 30 Sekunden erscheinen auf dem Beamer Lösung, Erläuterung,
   Antwortverteilung und Anzahl richtiger Antworten. „Nächste Frage“ lässt
   Zeit für eine Besprechung. Nach Frage 20 erscheint das Endergebnis.
5. Eine neue Runde erhält einen neuen Spielcode. Die Klasse tritt erneut bei.

Die Teilnehmerliste schließt beim Start. Bereits angemeldete Geräte können
mit demselben Browser nach einem Neuladen wieder einsteigen. Ein Browserprofil
entspricht einer Person; zum Testen mehrerer Personen getrennte Browserprofile
oder isolierte Browserkontexte verwenden. Spitznamen müssen nicht eindeutig sein.

Die Firestore-Regeln erzwingen die 30-Sekunden-Frist anhand der Serverzeit,
verhindern Zweitantworten und lassen nur die Erstellerkennung das Spiel steuern.
Die Anzeige gleicht die Geräteuhr beim Verbinden mit einem Serverzeitstempel ab.
Antworten müssen vor Fristende bei Firebase angekommen sein. Bei einem Ausfall
der Moderationsverbindung endet die Antwortfrist trotzdem; nach Wiederverbindung
kann die Spielleitung die Runde fortsetzen. Die Fragensammlung samt Lösungen
liegt als Unterrichtsmaterial im Frontend; das ist kein prüfungssicheres System.

## Prüfungen

- `node --test src/components/views/BKGDQuiz/questions.test.js`
- `npm run build`
- Emulator-Regeltest: `rules.test.mjs` benötigt `@firebase/rules-unit-testing`
  und `firebase`, sowie den Firestore-Emulator auf Port 8080. Der Test nutzt
  ausschließlich das Projekt `demo-bkgd-quiz`.
- Für Browserprüfungen mit Auth- und Firestore-Emulator:
  `VITE_BKGD_QUIZ_EMULATOR=1` beim lokalen Vite-Start setzen und Firebase auf das
  Demo-Projekt konfigurieren. Dieses Flag wird ausschließlich im Entwicklungsmodus
  berücksichtigt. Niemals damit veröffentlichen.

Die Regeltests lassen sich auch mit außerhalb des Projekts installierten
Testpaketen starten:

```sh
BKGD_TEST_DEPENDENCIES=/tmp/bkgd-quiz-check node firebase-bkgd-quiz/rules.test.mjs
```

Geprüft: Emulator-Regeln einschließlich verspäteter/doppelter Antworten und
fremder Moderation; Browserrunde mit einer Moderation und zwei getrennten
Teilnehmerkontexten, Wiederaufnahme nach Neuladen, alle 20 Fragen, Statistik,
Endergebnis und mobile Teilnehmeransicht. Produktionsregeln und Authentication
müssen vor dem ersten echten Spiel wie oben beschrieben freigeschaltet werden.

## Neustart und Musik

„Spiel neu Starten“ ist während der gesamten Moderation erreichbar und öffnet
eine neue Lobby mit neuem Spielcode. Teilnehmende treten der neuen Runde erneut bei.
Die bereitgestellte `game_music.wav` liegt unter `public/audio/bkgd-quiz/`.
Sie läuft nur auf dem Moderationsgerät während der Antwortzeit mit 25 % Lautstärke,
bei Bedarf in Schleife. Bei Auflösung, Neustart und Verlassen der Seite stoppt sie.
Falls der Browser nach einem Neuladen Audio blockiert, kann die Spielleitung mit
„Musik einschalten“ die Wiedergabe während des Countdowns aktivieren.
Für diese Ergänzung müssen die Firestore-Regeln nicht geändert werden.

## Geschwindigkeitswertung

Den aktualisierten Regelblock vor dem Upload veröffentlichen. Antworten enthalten
jetzt zusätzlich `questionStartedAt`; die Regeln prüfen, dass dieser Wert exakt
dem Startzeitstempel der aktuellen Frage entspricht. `answeredAt` muss weiter
der Serverzeit entsprechen. Punkte: gerundet `1000 - 500 × Antwortzeit / 30 s`.
Die Rangliste steht dauerhaft unter der Auswertung. Bestehende Antworten ohne
Startzeitstempel behalten ihre früheren 1.000 Punkte; für eine einheitliche
Geschwindigkeitswertung nach dem Update eine neue Runde starten.
