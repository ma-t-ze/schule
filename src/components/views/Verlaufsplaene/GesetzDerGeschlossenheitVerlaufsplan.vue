<template>
  <div class="doc">
    <div class="page">

      <!-- Kopftabelle -->
      <table class="header-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Klasse</th>
            <th>Fach</th>
            <th>Datum</th>
            <th>Stunde</th>
            <th>Ausbilder/-in</th>
            <th>Mentor</th>
            <th>Lernziele</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matthias<br />Heckel</td>
            <td>1BFD1<br />GrB</td>
            <td>BPK</td>
            <td>24.04.2026</td>
            <td>09:55 –<br />10:40</td>
            <td>Andreas<br />Lorenschat</td>
            <td>Steffen<br />Bittmann</td>
            <td>
              <ul>
                <li>Die SuS beschreiben die Grundlage der Gestaltgesetze der Wahrnehmung.</li>
                <li>können das Gestaltgesetz der Geschlossenheit nennen.</li>
                <li>können das Gestaltgesetz der Geschlossenheit als gestalterisches Prinzip nennen.</li>
                <li>können das Gestaltgesetz der Geschlossenheit auf eine eigene gestalterische Aufgabe anwenden.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colspan="8" class="hinweis">Hinweis: Die Texte wurden mit KI optimiert.</td>
          </tr>
        </tbody>
      </table>

      <!-- Verlaufsplanung -->
      <table class="verlauf-table">
        <thead>
          <tr>
            <th class="col-phase">Phase / Zeit</th>
            <th class="col-sus">Schüler-Aktivität</th>
            <th class="col-lk">Lehrer-Aktivität</th>
            <th class="col-methode">Methode</th>
            <th class="col-medien">Medien</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Einstieg/ Video<br />09:55<br />7 min.</td>
            <td>Die SuS sehen ein kurzes Video und beantworten Transferfragen der L.</td>
            <td>Die Lehrkraft zeigt zum Einstieg ein kurzes Video, das mithilfe einer Analogie aus dem Film „Die Matrix" zu den Gestaltgesetzen der Wahrnehmung hinführt.</td>
            <td>L/S Interaktion</td>
            <td>Video, Präsentation</td>
          </tr>
          <tr>
            <td>Erarbeitungsphase I<br />10:02<br />4 min.</td>
            <td>Die SuS hören aufmerksam zu.</td>
            <td>
              L erklärt das Gesetz der Geschlossenheit und kündigt an, dass die SuS dieses zur Gestaltung eines einprägsamen Logos für das Sommerprojekt anwenden.<br /><br />
              L zeigt Beispiele von Logos aus der Industrie, die das Gesetz der Geschlossenheit anwenden.<br /><br />
              L erläutert, dass er ausgehend von den Produktentwürfen der letzten Stunde passende Firmennamen entwickelt hat, die als Grundlage für die Logoentwürfe dienen.
            </td>
            <td>Lehrervortrag</td>
            <td>Präsentation</td>
          </tr>
          <tr>
            <td>Erarbeitungsphase II<br />10:06<br />4 min.</td>
            <td>Ein bis zwei ausgewählte SuS lesen den Arbeitsauftrag vor.</td>
            <td>
              L gibt Arbeitsauftrag aus und bittet ein bis zwei SuS diesen vorzulesen.<br />
              L klärt zusammen mit SuS offene Fragen.<br /><br />
              Die Lehrkraft verteilt Scheren und Klebstoff zur weiteren Bearbeitung des Arbeitsauftrags.
            </td>
            <td>L/S Interaktion</td>
            <td>Arbeitsblätter</td>
          </tr>
          <tr>
            <td>Durchführungsphase<br />10:10<br />25 min.</td>
            <td>Die SuS beantworten die Multiple-Choice-Fragen und entwerfen ein Logo auf Grundlage des Gesetzes der Geschlossenheit.</td>
            <td>Die Lehrkraft gibt adaptive Hilfestellung.</td>
            <td>Einzelarbeit</td>
            <td>Arbeitsblätter, Schere, Papier, Kleber</td>
          </tr>
          <tr>
            <td>Ergebnissicherung<br />10:35<br />5 min.</td>
            <td>Ausgewählte SuS präsentieren ihre Ergebnisse.</td>
            <td>Die Lehrkraft moderiert die Präsentation.</td>
            <td>L/S Interaktion</td>
            <td>Präsentation</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<style scoped>
.doc { user-select: text; }
.doc, .doc :deep(*) { box-sizing: border-box; }
@media print {
  @page {
    size: A4 landscape;
    margin: 12mm 15mm;
  }
}

* {
  box-sizing: border-box;
}

.doc {
  font-family: Arial, sans-serif;
  font-size: 9pt;
  color: #000;
  background: white;
}

.page {
  width: 277mm;
  margin: 12mm auto;
  padding: 0;
}

/* Kopftabelle */
.header-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 0;
}

.header-table th,
.header-table td {
  border: 1px solid #000;
  padding: 5px 7px;
  vertical-align: top;
}

.header-table th {
  font-weight: bold;
  background: white;
}

.header-table ul {
  margin: 0;
  padding-left: 14px;
  list-style: none;
}

.header-table ul li::before {
  content: "– ";
}

.header-table li {
  margin-bottom: 2px;
}

.hinweis {
  font-size: 8.5pt;
  padding: 4px 7px !important;
  border-top: none !important;
}

/* Verlaufsplanung */
.verlauf-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.verlauf-table th,
.verlauf-table td {
  border: 1px solid #000;
  padding: 6px 8px;
  vertical-align: top;
  line-height: 1.4;
}

.verlauf-table th {
  font-weight: bold;
  background: white;
}

.col-phase   { width: 11%; }
.col-sus     { width: 22%; }
.col-lk      { width: 42%; }
.col-methode { width: 12%; }
.col-medien  { width: 13%; }
</style>
