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
            <td>3TGG2/2</td>
            <td>GMT</td>
            <td>22.06.2026</td>
            <td>13:45 –<br />14:30</td>
            <td>Thorsten<br />Schäfer</td>
            <td>Bernadette<br />Tshiang</td>
            <td>
              <ul>
                <li>Die SuS können das Prinzip der additiven Fertigung als schichtweisen Aufbau von dreidimensionalen
                  Objekten beschreiben.</li>
                <li>können die drei wichtigsten 3D-Druckverfahren (FDM, SLA oder SLS) nennen und beschreiben.</li>
                <li>können die drei Verfahren kriteriengeleitet miteinander vergleichen und daraus begründete
                  Empfehlungen für konkrete Anwendungsfälle ableiten.</li>
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
            <td>Einstieg<br />13:45<br />4 min.</td>
            <td>Die SuS lösen auf dem iPad ein interaktives Puzzle-Game und enthüllen das Bild eines 3D-gedruckten
              Sneakers. Im Anschluss beantworten Sie Fragen die zum Thema hinführen.</td>
            <td>Die Lehrkraft erklärt, dass die SuS heute mit einer Webanwendung (im Folgenden: Lernumgebung) arbeiten,
              und gibt den Arbeitsauftrag:
              Link in Teams öffnen, Anwendung mit Code starten.</td>
            <td>L/S Interaktion</td>
            <td>iPad, Beamer</td>
          </tr>
          <tr>
            <td>Gruppenbildung &amp; Rollen­verteilung<br />13:49<br />4 min.</td>
            <td>Ein SuS liest die Erklärung zum Gruppenpuzzle vor. Die SuS wählen ihre Expertenrolle in der Lernumgebung
              und finden sich anschließend in den Expertengruppen zusammen.</td>
            <td>Die Lehrkraft gibt Unterstüzung in der Lernumgebung.</td>
            <td>L/S Interaktion</td>
            <td>iPad, Beamer</td>
          </tr>
          <tr>
            <td>Expertenphase<br />13:53<br />15 min.</td>
            <td>Die SuS erarbeiten ihr Verfahren mithilfe der Lernumgebung.</td>
            <td>Die Lehrkraft begleitet die Gruppen beratend und gibt adaptive Hilfestellung bei
              Verständnisschwierigkeiten.</td>
            <td>Gruppenarbeit</td>
            <td>iPad</td>
          </tr>
          <tr>
            <td>Stammgruppen­phase<br />14:08<br />17 min.</td>
            <td>Die SuS kehren in die Stammgruppen zurück. Jedes Mitglied präsentiert sein Verfahren.</td>
            <td>Die Lehrkraft beobachtet und gibt bei Bedarf Unterstützung.</td>
            <td>Gruppenarbeit</td>
            <td>iPad</td>
          </tr>
          <tr>
            <td>Transfer &amp; Sicherung<br />14:25<br />5 min.</td>
            <td>Die SuS bearbeiten Transferfragen in der Lernumgebung: kriteriengeleiteter Verfahrensvergleich. Laden
              Ergebnisse als PDF herunter.</td>
            <td>Die Lehrkraft bespricht die Ergebnisse im Plenum, visualisiert am Beamer und fordert die SuS auf, ihre
              Ergebnisse abschließend als PDF herunterzuladen.</td>
            <td>EA / Plenum</td>
            <td>iPad, Beamer</td>
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
}

.col-phase {
  width: 11%;
}

.col-sus {
  width: 22%;
}

.col-lk {
  width: 42%;
}

.col-methode {
  width: 12%;
}

.col-medien {
  width: 13%;
}

</style>
