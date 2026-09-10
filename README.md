# CHS Schülerarbeiten

Frontend-Prototyp für eine Plattform der Carl-Hofer-Schule Karlsruhe, auf der Schülerarbeiten aus verschiedenen Fachbereichen und Jahrgängen präsentiert werden.

Die aktuelle Umsetzung basiert auf Vue 3, Vite und Vue Router. Die Inhalte in `BKGDPage.vue`, `PortfolioPage.vue` und `WuesteProjectPage.vue` sind derzeit noch Mockdaten und statische Assets. Ziel ist, diese Inhalte später über WordPress und GraphQL zu pflegen.

## Systemarchitektur

```txt
Redaktion / Lehrkraft
        |
        v
WordPress CMS
        |
        | verwaltet Schülerarbeiten, Portfolios, Projekte, Medien und FAQs
        v
GraphQL API
        |
        | liefert strukturierte Daten an das Frontend
        v
Vue / Vite Frontend
        |
        | wird statisch gebaut
        v
frontend.chs-grafik.design
```

### WordPress

WordPress ist das redaktionelle Backend. Dort werden die Inhalte gepflegt, zum Beispiel Schülerarbeiten, Vorschaubilder, Projektbeschreibungen, Galerien, Fachbereiche, Jahrgänge und FAQ-Einträge.

Der WordPress-Entwickler erstellt daraus das Datenmodell, legt Custom Post Types und Custom Fields an und definiert die endgültigen GraphQL-Feldnamen.

### GraphQL

GraphQL ist die Schnittstelle zwischen WordPress und Frontend. Das Frontend fragt nur die Daten ab, die es für die jeweilige Ansicht benötigt.

Benötigt werden vom WordPress-Entwickler:

- GraphQL-Adresse
- Beispielabfrage für die Übersichtsseite
- Beispielabfrage für eine Portfolioseite
- Beispielabfrage für eine Projekt-/Detailseite
- finale Feldnamen und Datentypen

### Frontend

Das Frontend rendert die Daten als statische Vue-Anwendung. Die Hauptansicht ist aktuell `BKGDPage.vue`.

Aktuelle Funktionen:

- Splashscreen mit Titel "Schülerarbeiten"
- Header mit Schule, Seitentitel und animierten Fachbereichsnamen
- Filter nach Jahrgang
- Filter nach Fachbereich
- Grid mit Schülerarbeiten
- Hover-Label mit Namen
- "Mehr laden"-Button
- FAQ-Overlay
- Back-to-top-Button
- Footer mit Datenschutz, Impressum und CHS-Logo
- Portfolioseite pro Schüler/in
- Projekt-Detailseite mit Beschreibung und Bildgalerie

## Datenmodell der Schülerarbeiten

Die finalen Feldnamen legt der WordPress-Entwickler fest. Das folgende Modell beschreibt, welche Inhalte das Frontend benötigt.

### Schülerarbeit

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `id` | ID/String | Eindeutige ID der Arbeit |
| `slug` | String | URL-freundlicher Name |
| `title` | String | Titel der Arbeit |
| `description` | RichText/String | Beschreibung der Arbeit |
| `studentName` | String | Name der Schülerin oder des Schülers |
| `className` | String | Klasse, zum Beispiel `BK Grafikdesign 2` |
| `schoolYear` | String/Number | Schuljahr oder Jahrgang, zum Beispiel `2025/26` |
| `department` | String | Fachbereich, zum Beispiel `Berufskolleg Grafikdesign` |
| `previewImage` | Media/Image | Vorschaubild für das Grid |
| `gallery` | Media[] | Bilder für die Detailseite |
| `portfolio` | Relation | Zugehöriges Portfolio |
| `projectType` | String | Optional: Art der Arbeit, zum Beispiel Illustration, Fotografie, Plakat |
| `order` | Number | Optional: manuelle Sortierung |
| `isFeatured` | Boolean | Optional: hervorgehobene Arbeit |

### Portfolio

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `id` | ID/String | Eindeutige ID |
| `slug` | String | URL-freundlicher Portfolio-Name |
| `studentName` | String | Name der Schülerin oder des Schülers |
| `bio` | RichText/String | Kurzbeschreibung für die Portfolioseite |
| `portrait` | Media/Image | Optionales Portrait oder Profilbild |
| `works` | Schülerarbeit[] | Zugehörige Arbeiten |

### FAQ

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `question` | String | Frage |
| `answer` | RichText/String | Antworttext |
| `order` | Number | Sortierung |

### Taxonomien / Filter

| Taxonomie | Beispielwerte | Verwendung |
| --- | --- | --- |
| `schoolYear` | `2023`, `2024`, `2025`, `2026` | Filter "Jahrgang" |
| `department` | `Berufskolleg Grafikdesign`, `Berufskolleg Foto`, `Gestaltungs- und Medientechnik | TG`, `BF Druck- und Medientechnik` | Filter "Fachbereich" |

## GraphQL-Beispielstruktur

Die konkrete Query hängt von der WordPress-GraphQL-Konfiguration ab. Als Orientierung benötigt das Frontend Daten in dieser Form:

```graphql
query StudentWorks($year: String, $department: String, $first: Int, $after: String) {
  studentWorks(
    first: $first
    after: $after
    where: {
      schoolYear: $year
      department: $department
    }
  ) {
    nodes {
      id
      slug
      title
      description
      studentName
      className
      schoolYear
      department
      previewImage {
        url
        altText
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

Für Portfolio- und Detailseiten werden zusätzlich die Galerie und die verknüpften Arbeiten benötigt.

## Seitenstruktur

```txt
/
  Geschützte Hauptanwendung / Startseite

/login
  Login

/bkgdpage
  Übersicht "CHS Schülerarbeiten"
  - Splashscreen
  - Header
  - Filter
  - Arbeiten-Grid
  - FAQ-Overlay
  - Footer

/bkgdpage/portfolio/:name
  Portfolio einer Schülerin oder eines Schülers
  - Zurück zur Übersicht
  - Name
  - Beschreibung/Bio
  - Liste der Projekte

/bkgdpage/portfolio/:name/illustration-wueste
  Projekt-Detailseite
  - Zurück zur Portfolioübersicht
  - Projekttitel
  - Beschreibung
  - Galerie/Bilder

/datenschutz
  Datenschutz, aktuell im Footer verlinkt

/impressum
  Impressum, aktuell im Footer verlinkt
```

Weitere vorhandene Projektseiten:

- `/conversepage`
- `/gestaltgesetze`
- `/variablefont`
- `/bridgepage`
- `/3dprint`

## Benutzerfluss

1. Nutzer/in öffnet `/bkgdpage`.
2. Der Splashscreen zeigt "Schülerarbeiten" und die Carl-Hofer-Schule Karlsruhe.
3. Die Übersichtsseite zeigt ein responsives Raster mit Schülerarbeiten.
4. Über die Filter kann nach Jahrgang und Fachbereich eingegrenzt werden.
5. Beim Hover über eine Arbeit erscheint der Name.
6. Ein Klick auf eine Arbeit öffnet das zugehörige Portfolio.
7. Auf der Portfolioseite werden Name, Beschreibung und Projekte angezeigt.
8. Ein Klick auf ein Projekt öffnet die Detailseite mit Beschreibung und Galerie.
9. Über die Zurück-Links gelangt man zur Portfolio- oder Übersichtsseite zurück.
10. FAQs sind über den Header erreichbar und schließen per Button, Overlay-Klick oder Escape-Taste.
11. Datenschutz und Impressum sind im Footer verlinkt.

## Deployment-Prozess

### Lokale Entwicklung

```sh
npm install
npm run serve
```

### Produktionsbuild

```sh
npm run build
```

Der Build erzeugt statische Dateien im Ordner:

```txt
dist/
```

### Upload per SFTP

1. Lokalen Build mit `npm run build` erzeugen.
2. Inhalt von `dist/` prüfen.
3. Per SFTP mit dem Server verbinden.
4. Dateien aus `dist/` nach `frontend.chs-grafik.design` hochladen.
5. Nach dem Upload die Seite im Browser testen.

Zu testen:

- Lädt die Startseite ohne Fehler?
- Werden GraphQL-Daten geladen?
- Funktionieren Filter nach Jahrgang und Fachbereich?
- Funktionieren Portfolio- und Projektseiten nach direktem Seitenaufruf?
- Werden Bilder und Galerien korrekt angezeigt?
- Funktionieren Datenschutz- und Impressum-Links?

## Abstimmung mit WordPress-Entwicklung

Der genaue Ablauf:

1. Inhalte gemeinsam festlegen: Titel, Beschreibung, Klasse, Schuljahr, Vorschaubild, Galerie, Fachbereich, Portfolio und FAQs.
2. WordPress-Entwickler erstellt Datenmodell und finale GraphQL-Feldnamen.
3. WordPress-Entwickler stellt GraphQL-Adresse und Beispielabfragen bereit.
4. Frontend bindet die GraphQL-Daten in die Vue-Komponenten ein.
5. Beide Seiten testen, ob alle Inhalte korrekt im Frontend ankommen.
6. Fehlende oder ungeeignete Felder werden im WordPress-Datenmodell angepasst.
7. Frontend wird statisch gebaut.
8. Build-Dateien werden per SFTP auf `frontend.chs-grafik.design` hochgeladen.
