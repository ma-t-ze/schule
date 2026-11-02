# Verlaufspläne direkt bearbeiten

## Einrichten auf STRATO

1. In phpMyAdmin die bestehende Schul-Datenbank auswählen und `lesson-documents.sql` ausführen. Bestehende Tabellen bleiben erhalten.
2. `server/lesson-documents.php` in das private `php/`-Verzeichnis neben `login.php` und `database-config.php` hochladen. Der bestehende Session-Ordner wird verwendet.
3. `npm run build` ausführen und den Inhalt von `dist/` hochladen. `public/lesson-documents.php` wird dabei automatisch als öffentlicher Einstieg übernommen.

## Arbeiten

In einem Verlaufsplan den gewünschten Reiter öffnen und **Text bearbeiten** wählen. Absätze, Überschriften und Tabellenzellen lassen sich direkt anklicken. Bestehende Hervorhebungen bleiben erhalten; eingefügte Inhalte werden als Text übernommen. **Speichern** sichert den aktuellen Reiter in der Datenbank. **Abbrechen** verwirft den Entwurf. Während der Bearbeitung sind Reiterwechsel und PDF-Export gesperrt. Nach dem Speichern verwenden die Kopierstempel-PDF-Downloads die bearbeiteten Inhalte. Sehr lange Texte können mehr PDF-Seiten erzeugen.

Die Textstände sind je Thema und Dokumenttyp getrennt. Es werden Kopierstempel, 3D Druck und Gesetz der Geschlossenheit unterstützt. Eine Anmeldung und ein CSRF-Token sind erforderlich. Gleichzeitige Änderungen in zwei Fenstern führen zu einer Konfliktmeldung statt stiller Überschreibung. Ein fehlgeschlagenes Speichern lässt den Entwurf im Browser stehen; vor dem Neuladen **Textstand herunterladen** verwenden.

## Gemeinsam mit dem Chat arbeiten

**Textstand herunterladen** erzeugt eine JSON-Datei mit den Textänderungen und einem lesbaren Gesamtext. Diese Datei im Chat anhängen. Sie ermöglicht es, auf Basis deines aktuellen Stands zu arbeiten; der Chat hat keinen direkten Zugriff auf die private Datenbank.

Eine entsprechend überarbeitete Datei lässt sich mit **Textstand importieren** wieder öffnen, prüfen und speichern. Nur Dateien für dasselbe Thema und denselben Reiter werden angenommen. Auch vor größeren Änderungen empfiehlt sich eine solche Sicherung. Import ersetzt den Textstand des aktuellen Reiters; Abbrechen kehrt zum zuletzt gespeicherten Stand zurück.

## Verhalten bei Codeänderungen

Browsertexte liegen in STRATO und werden bei einem Build nicht gelöscht. Änderungen werden an den ursprünglichen Textblock gebunden. Ändert eine spätere Codeüberarbeitung genau diesen ursprünglichen Block, wird der alte Browsertext nicht blind darübergeschrieben. Die Seite meldet nicht mehr passende Textstellen; sie bleiben in der Sicherungsdatei erhalten und können gemeinsam abgeglichen werden. Der Import eines Textstands ersetzt keine Vue-Dateien und ändert keine Tabellenstruktur oder Druckstile.

## Prüfen

Text ändern und speichern, Seite neu laden, denselben Reiter öffnen. Den anderen Reiter auf Unabhängigkeit prüfen. Für Kopierstempel beide PDFs exportieren. Einen Textstand herunterladen, ändern/importieren und erst nach Kontrolle speichern. In zwei Fenstern denselben Stand öffnen und nacheinander speichern: Das zweite Fenster muss den Konflikt melden und seinen Entwurf erhalten.
