import{j as x,w as l,t as e,J as D,bz as w,I as p,bB as u,bq as g,bC as f,F as m,aR as b,b5 as d,v,aT as z,aK as L,aH as y,aG as a}from"./index-DFAJi-Qz.js";const A={name:"ResultsPage",data(){return{code:"",message:"",teacherCode:"",unlocked:{fdm:!1,sla:!1,sls:!1},features:[{key:"material",label:"Ausgangsmaterial"},{key:"principle",label:"Funktionsprinzip"},{key:"detail",label:"Detailgenauigkeit"},{key:"surface",label:"Oberflächenqualität"},{key:"support",label:"Stützstrukturen"},{key:"costs",label:"Kosten"},{key:"application",label:"Typische Anwendung"}],results:{fdm:{material:"Kunststoffdraht",principle:"Material wird geschmolzen und abgelegt",detail:"mittel",surface:"sichtbare Schichten",support:"meist erforderlich",costs:"vergleichsweise gering",application:"Prototypen und Hobbybereich"},sla:{material:"flüssiges Photopolymer",principle:"Material wird mit Licht ausgehärtet",detail:"sehr hoch",surface:"sehr glatt",support:"meist erforderlich",costs:"mittel",application:"Präsentationsmodelle und detailreiche Modelle"},sls:{material:"Kunststoffpulver",principle:"Pulver wird mit Laser verschmolzen",detail:"hoch",surface:"leicht rau",support:"durch Pulver gestützt",costs:"hoch",application:"industrielle Funktionsbauteile"}},showSolutions:!1,transferQuestions:[{id:1,text:"Eine Schule verfügt über ein begrenztes Budget und möchte sich einen 3D-Drucker anschaffen, um Prototypen kostengünstig herzustellen. Welches Verfahren empfehlt ihr? Begründet eure Entscheidung.",solution:"FDM – Das Schmelzschichtverfahren ist die kostengünstigste Option. Die Geräte- und Materialkosten sind vergleichsweise gering, und das Verfahren eignet sich gut für einfache Prototypen. Für eine Schule mit begrenztem Budget ist FDM daher die sinnvollste Wahl.",answer:""},{id:2,text:"Ein Ersatzteil soll stabil sein und in kleiner Stückzahl hergestellt werden. Welches Verfahren ist besonders geeignet? Begründet eure Auswahl.",solution:"SLS – Das Lasersintern eignet sich besonders für funktionale Bauteile mit hoher Stabilität. Das Pulver stützt das Bauteil während des Drucks, sodass keine Stützstrukturen nötig sind. Die hohe Detailgenauigkeit und die Materialstärke machen SLS ideal für industrielle Ersatzteile in kleiner Stückzahl.",answer:""},{id:3,text:"Ein Zahnarzt möchte ein hochpräzises Modell eines Gebisses mit sehr glatter Oberfläche herstellen. Welches Verfahren empfehlt ihr? Begründet eure Entscheidung.",solution:"SLA – Die Stereolithografie erreicht eine sehr hohe Detailgenauigkeit und erzeugt sehr glatte Oberflächen. Für ein präzises Zahnmodell, bei dem es auf feine Details ankommt, ist SLA das geeignetste Verfahren.",answer:""}]}},methods:{printTeacherView(){if(this.teacherCode.trim()!=="4793")return;const i=window.location.origin,s=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Lehrkraft – Vollständige Übersicht</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; color: #222; font-size: 14px; }
    h1 { font-size: 26px; margin-bottom: 8px; }
    h2 { font-size: 20px; margin-top: 36px; margin-bottom: 12px; border-bottom: 2px solid #222; padding-bottom: 4px; }
    h3 { font-size: 16px; margin-top: 20px; margin-bottom: 8px; }
    p { line-height: 1.5; margin-bottom: 10px; }
    .page-break { page-break-before: always; }
    .section { margin-bottom: 32px; }
    .verfahren { display: flex; gap: 24px; align-items: flex-start; }
    .verfahren-text { flex: 1; }
    .verfahren img { width: 38%; flex-shrink: 0; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; margin-bottom: 16px; }
    th, td { border: 1px solid #999; padding: 9px 12px; text-align: left; }
    th { background: #f0f0f0; font-weight: bold; }
    td:first-child { font-weight: bold; }
    .code-table td { font-family: monospace; }
    .correct { color: #166534; font-weight: bold; }
    .step { padding: 6px 10px; background: #f0f0f0; border-radius: 4px; margin-bottom: 6px; }
    .step-correct { background: #dcfce7; }
    .option { display: inline-block; padding: 4px 10px; background: #f0f0f0; border-radius: 4px; margin: 3px; }
    .option-correct { background: #dcfce7; color: #166534; font-weight: bold; }
    .question { margin-top: 16px; }
    .question-text { font-weight: bold; margin-bottom: 6px; }
    .solution { padding: 10px 12px; background: #dcfce7; border-left: 4px solid #16a34a; border-radius: 4px; font-size: 13px; }
    .hint { background: #fefce8; border-left: 4px solid #ca8a04; padding: 10px 12px; border-radius: 4px; margin-bottom: 16px; font-size: 13px; }
  </style>
</head>
<body>

  <h1>Lehrkraft – Vollständige Übersicht</h1>
  <p>Gruppenpuzzle: 3D-Druckverfahren</p>

  <h2>Alle Codes auf einen Blick</h2>
  <table class="code-table">
    <thead><tr><th>Seite</th><th>Code</th><th>Funktion</th></tr></thead>
    <tbody>
      <tr><td>Login</td><td>gmt</td><td>Startet das Bildpuzzle (Game)</td></tr>
      <tr><td>Login</td><td>uebersicht</td><td>Springt direkt zur Themenübersicht</td></tr>
      <tr><td>Game</td><td>gmt2</td><td>Weiter zur Themenübersicht</td></tr>
      <tr><td>Game</td><td>solve</td><td>Löst das Puzzle automatisch</td></tr>
      <tr><td>Gruppenerstellung</td><td>gmt59</td><td>Weiter zur Themenübersicht</td></tr>
      <tr><td>FDM-Seite</td><td>gmt33</td><td>Lösung überprüfen</td></tr>
      <tr><td>FDM-Seite</td><td>gmt-solve</td><td>Alle Antworten automatisch eintragen</td></tr>
      <tr><td>SLA-Seite</td><td>gmt34</td><td>Lösung überprüfen</td></tr>
      <tr><td>SLA-Seite</td><td>gmt-solve</td><td>Alle Antworten automatisch eintragen</td></tr>
      <tr><td>SLS-Seite</td><td>gmt89</td><td>Lösung überprüfen</td></tr>
      <tr><td>SLS-Seite</td><td>gmt-solve</td><td>Alle Antworten automatisch eintragen</td></tr>
      <tr><td>Ergebnisse</td><td>gmt solve all</td><td>Alle drei Verfahren freischalten</td></tr>
      <tr><td>Ergebnisse</td><td>gmt solve all lehrer</td><td>Lösungshorizont Transferfragen anzeigen</td></tr>
      <tr><td>Ergebnisse</td><td>4793</td><td>Dieses Lehrkraft-Dokument drucken</td></tr>
    </tbody>
  </table>

  <div class="page-break"></div>

  <h2>Expertenseite: Schmelzschichtverfahren (FDM)</h2>
  <div class="verfahren">
    <div class="verfahren-text">
      <p>Bei der Schmelzschichtung (Fused Deposition Modeling) wird im Extruder des Druckkopfs ein Kunststoffdraht (Thermoplast) geschmolzen und durch die Düse gepresst. Der Druckkopf verfährt in der x- und y-Richtung. So entsteht eine Schicht des Bauteils. Anschließend fahren der Druckkopf und die Bauplatte um eine Schichtstärke auseinander. Der 3D-Druck entsteht Schicht für Schicht in senkrechter Richtung.</p>
      <p>Die erreichbare Detailgenauigkeit liegt im mittleren Bereich. Überhänge benötigen meist Stützstrukturen. Die vergleichsweise geringen Kosten machen FDM zur bevorzugten Wahl für Prototypen und den Hobbybereich.</p>
    </div>
    <img src="${i}/images/3dprint/process/fdm.png" alt="FDM" />
  </div>
  <h3>Aufgabe 1 – Richtige Reihenfolge</h3>
  <div class="step step-correct">1. Kunststoffdraht wird im Extruder geschmolzen</div>
  <div class="step step-correct">2. Material wird durch die Düse gepresst</div>
  <div class="step step-correct">3. Druckkopf verfährt in x- und y-Richtung</div>
  <div class="step step-correct">4. Eine Schicht des Bauteils entsteht</div>
  <div class="step step-correct">5. Druckkopf und Bauplatte bewegen sich um eine Schichtstärke auseinander</div>
  <h3>Aufgabe 2 – Richtige Merkmale</h3>
  <table>
    <tbody>
      <tr><td>Ausgangsmaterial</td><td class="correct">Kunststoffdraht</td></tr>
      <tr><td>Funktionsprinzip</td><td class="correct">Material wird geschmolzen und abgelegt</td></tr>
      <tr><td>Detailgenauigkeit</td><td class="correct">mittel</td></tr>
      <tr><td>Oberflächenqualität</td><td class="correct">sichtbare Schichten</td></tr>
      <tr><td>Stützstrukturen</td><td class="correct">meist erforderlich</td></tr>
      <tr><td>Kosten</td><td class="correct">vergleichsweise gering</td></tr>
      <tr><td>Typische Anwendung</td><td class="correct">Prototypen und Hobbybereich</td></tr>
    </tbody>
  </table>

  <div class="page-break"></div>

  <h2>Expertenseite: Lichthärtungsverfahren (SLA)</h2>
  <div class="verfahren">
    <div class="verfahren-text">
      <p>Die Stereolithografie ist das älteste 3D-Druckverfahren. Das Objekt entsteht aus einem lichtempfindlichen Polymer (Photopolymer), das Schicht für Schicht mit UV-Licht ausgehärtet wird.</p>
      <p>Das Verfahren erreicht eine sehr hohe Detailgenauigkeit und sehr glatte Oberflächen. Für Überhänge sind meist Stützstrukturen erforderlich. Die Kosten liegen im mittleren Bereich. SLA eignet sich besonders für Präsentationsmodelle und detailreiche Modelle.</p>
    </div>
    <img src="${i}/images/3dprint/process/sla.png" alt="SLA" />
  </div>
  <h3>Aufgabe 1 – Richtige Reihenfolge</h3>
  <div class="step step-correct">1. Die Bauplattform wird in das flüssige Photopolymer abgesenkt</div>
  <div class="step step-correct">2. Der Laser härtet die erste Schicht des Polymers aus</div>
  <div class="step step-correct">3. Die Bauplattform bewegt sich um eine Schichtstärke</div>
  <div class="step step-correct">4. Die nächste Schicht wird mit dem Laser ausgehärtet</div>
  <div class="step step-correct">5. Das Bauteil wird nach dem Druck gereinigt und mit UV-Licht nachgehärtet</div>
  <h3>Aufgabe 2 – Richtige Merkmale</h3>
  <table>
    <tbody>
      <tr><td>Ausgangsmaterial</td><td class="correct">flüssiges Photopolymer</td></tr>
      <tr><td>Funktionsprinzip</td><td class="correct">Material wird mit Licht ausgehärtet</td></tr>
      <tr><td>Detailgenauigkeit</td><td class="correct">sehr hoch</td></tr>
      <tr><td>Oberflächenqualität</td><td class="correct">sehr glatt</td></tr>
      <tr><td>Stützstrukturen</td><td class="correct">meist erforderlich</td></tr>
      <tr><td>Kosten</td><td class="correct">mittel</td></tr>
      <tr><td>Typische Anwendung</td><td class="correct">Präsentationsmodelle und detailreiche Modelle</td></tr>
    </tbody>
  </table>

  <div class="page-break"></div>

  <h2>Expertenseite: Laserverschmelzung von Pulver (SLS)</h2>
  <div class="verfahren">
    <div class="verfahren-text">
      <p>Beim selektiven Lasersintern wird eine dünne Pulverschicht auf eine Trägerplatte aufgebracht. Ein Laserstrahl verschmilzt das Pulver an den gewünschten Stellen. Anschließend wird die Trägerplatte abgesenkt und eine neue Schicht aufgebracht – Schicht für Schicht.</p>
      <p>Das ungebundene Pulver stützt das Bauteil, sodass keine Stützstrukturen nötig sind. Das Verfahren erreicht hohe Detailgenauigkeit bei leicht rauer Oberfläche. Aufgrund der hohen Kosten eignet sich SLS vor allem für industrielle Funktionsbauteile.</p>
    </div>
    <img src="${i}/images/3dprint/process/sls.png" alt="SLS" />
  </div>
  <h3>Aufgabe 1 – Richtige Reihenfolge</h3>
  <div class="step step-correct">1. Eine dünne Pulverschicht wird auf die Trägerplatte aufgebracht</div>
  <div class="step step-correct">2. Der Laser verschmilzt das Pulver an den gewünschten Stellen</div>
  <div class="step step-correct">3. Die Trägerplatte wird um eine Schichtstärke abgesenkt</div>
  <div class="step step-correct">4. Eine neue Pulverschicht wird aufgetragen</div>
  <div class="step step-correct">5. Der Laser verschmilzt die nächste Schicht mit dem Bauteil</div>
  <h3>Aufgabe 2 – Richtige Merkmale</h3>
  <table>
    <tbody>
      <tr><td>Ausgangsmaterial</td><td class="correct">Kunststoffpulver</td></tr>
      <tr><td>Funktionsprinzip</td><td class="correct">Pulver wird mit Laser verschmolzen</td></tr>
      <tr><td>Detailgenauigkeit</td><td class="correct">hoch</td></tr>
      <tr><td>Oberflächenqualität</td><td class="correct">leicht rau</td></tr>
      <tr><td>Stützstrukturen</td><td class="correct">durch Pulver gestützt</td></tr>
      <tr><td>Kosten</td><td class="correct">hoch</td></tr>
      <tr><td>Typische Anwendung</td><td class="correct">industrielle Funktionsbauteile</td></tr>
    </tbody>
  </table>

  <div class="page-break"></div>

  <h2>Ergebnisseite – Merkmale im Vergleich</h2>
  <table>
    <thead><tr><th>Merkmal</th><th>FDM</th><th>SLA</th><th>SLS</th></tr></thead>
    <tbody>
      <tr><td>Ausgangsmaterial</td><td>Kunststoffdraht</td><td>flüssiges Photopolymer</td><td>Kunststoffpulver</td></tr>
      <tr><td>Funktionsprinzip</td><td>Material wird geschmolzen und abgelegt</td><td>Material wird mit Licht ausgehärtet</td><td>Pulver wird mit Laser verschmolzen</td></tr>
      <tr><td>Detailgenauigkeit</td><td>mittel</td><td>sehr hoch</td><td>hoch</td></tr>
      <tr><td>Oberflächenqualität</td><td>sichtbare Schichten</td><td>sehr glatt</td><td>leicht rau</td></tr>
      <tr><td>Stützstrukturen</td><td>meist erforderlich</td><td>meist erforderlich</td><td>durch Pulver gestützt</td></tr>
      <tr><td>Kosten</td><td>vergleichsweise gering</td><td>mittel</td><td>hoch</td></tr>
      <tr><td>Typische Anwendung</td><td>Prototypen und Hobbybereich</td><td>Präsentationsmodelle und detailreiche Modelle</td><td>industrielle Funktionsbauteile</td></tr>
    </tbody>
  </table>

  <h2>Transferfragen – Lösungshorizont</h2>
  <div class="question">
    <div class="question-text">1. Eine Schule verfügt über ein begrenztes Budget und möchte sich einen 3D-Drucker anschaffen, um Prototypen kostengünstig herzustellen. Welches Verfahren empfehlt ihr? Begründet eure Entscheidung.</div>
    <div class="solution">FDM – Das Schmelzschichtverfahren ist die kostengünstigste Option. Die Geräte- und Materialkosten sind vergleichsweise gering, und das Verfahren eignet sich gut für einfache Prototypen. Für eine Schule mit begrenztem Budget ist FDM daher die sinnvollste Wahl.</div>
  </div>
  <div class="question">
    <div class="question-text">2. Ein Ersatzteil soll stabil sein und in kleiner Stückzahl hergestellt werden. Welches Verfahren ist besonders geeignet? Begründet eure Auswahl.</div>
    <div class="solution">SLS – Das Lasersintern eignet sich besonders für funktionale Bauteile mit hoher Stabilität. Das Pulver stützt das Bauteil während des Drucks, sodass keine Stützstrukturen nötig sind. Die hohe Detailgenauigkeit und Materialstärke machen SLS ideal für industrielle Ersatzteile in kleiner Stückzahl.</div>
  </div>
  <div class="question">
    <div class="question-text">3. Ein Zahnarzt möchte ein hochpräzises Modell eines Gebisses mit sehr glatter Oberfläche herstellen. Welches Verfahren empfehlt ihr? Begründet eure Entscheidung.</div>
    <div class="solution">SLA – Die Stereolithografie erreicht eine sehr hohe Detailgenauigkeit und erzeugt sehr glatte Oberflächen. Für ein präzises Zahnmodell, bei dem es auf feine Details ankommt, ist SLA das geeignetste Verfahren.</div>
  </div>

</body>
</html>`,c=new Blob([s],{type:"text/html"}),o=URL.createObjectURL(c),r=window.open(o,"_blank");r.addEventListener("load",()=>{r.print(),URL.revokeObjectURL(o)})},downloadPDF(){const i=window.location.origin,s=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>3D-Druckverfahren – Ergebnisse</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; color: #222; font-size: 14px; }
    h1 { font-size: 26px; margin-bottom: 24px; }
    h2 { font-size: 20px; margin-top: 36px; margin-bottom: 12px; border-bottom: 2px solid #222; padding-bottom: 4px; }
    p { line-height: 1.5; margin-bottom: 10px; }
    .verfahren { display: flex; gap: 24px; align-items: flex-start; margin-bottom: 8px; }
    .verfahren-text { flex: 1; }
    .verfahren img { width: 38%; flex-shrink: 0; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; }
    th, td { border: 1px solid #999; padding: 9px 12px; text-align: left; }
    th { background: #f0f0f0; font-weight: bold; }
    td:first-child { font-weight: bold; }
    .code-table td { font-family: monospace; }
    .question { margin-top: 20px; }
    .question-text { font-weight: bold; margin-bottom: 8px; }
    .answer { padding: 10px 12px; background: #f9f9f9; border: 1px solid #ddd; min-height: 50px; white-space: pre-wrap; }
    .solution { margin-top: 6px; padding: 10px 12px; background: #dcfce7; border-left: 4px solid #16a34a; border-radius: 4px; font-size: 13px; }
    .solution-label { font-size: 11px; color: #166534; font-weight: bold; text-transform: uppercase; margin-bottom: 4px; }
    @media print { .verfahren { page-break-inside: avoid; } }
  </style>
</head>
<body>
  <h1>3D-Druckverfahren – Ergebnisse</h1>

  <h2>Alle Codes auf einen Blick</h2>
  <table class="code-table">
    <thead><tr><th>Seite</th><th>Code</th><th>Funktion</th></tr></thead>
    <tbody>
      <tr><td>Login</td><td>gmt</td><td>Startet das Bildpuzzle</td></tr>
      <tr><td>Login</td><td>uebersicht</td><td>Springt direkt zur Themenübersicht</td></tr>
      <tr><td>Game</td><td>gmt2</td><td>Weiter zur Themenübersicht</td></tr>
      <tr><td>Gruppenerstellung</td><td>gmt59</td><td>Weiter zur Themenübersicht</td></tr>
      <tr><td>FDM-Seite</td><td>gmt33</td><td>Lösung überprüfen</td></tr>
      <tr><td>SLA-Seite</td><td>gmt34</td><td>Lösung überprüfen</td></tr>
      <tr><td>SLS-Seite</td><td>gmt89</td><td>Lösung überprüfen</td></tr>
      <tr><td>Ergebnisse</td><td>gmt solve all</td><td>Alle drei Verfahren freischalten</td></tr>
    </tbody>
  </table>

  <h2>Schmelzschichtverfahren (FDM)</h2>
  <div class="verfahren">
    <div class="verfahren-text">
      <p>Bei der Schmelzschichtung (Fused Deposition Modeling) wird im Extruder des Druckkopfs ein Kunststoffdraht (Thermoplast) geschmolzen und durch die Düse gepresst. Der Druckkopf verfährt in der x- und y-Richtung. So entsteht eine Schicht des Bauteils. Anschließend fahren der Druckkopf und die Bauplatte um eine Schichtstärke auseinander. Der 3D-Druck entsteht Schicht für Schicht in senkrechter Richtung.</p>
      <p>Die erreichbare Detailgenauigkeit liegt im mittleren Bereich. Überhänge benötigen meist Stützstrukturen. Die vergleichsweise geringen Kosten machen FDM zur bevorzugten Wahl für Prototypen und den Hobbybereich.</p>
    </div>
    <img src="${i}/images/3dprint/process/fdm.png" alt="FDM" />
  </div>

  <h2>Lichthärtungsverfahren (SLA)</h2>
  <div class="verfahren">
    <div class="verfahren-text">
      <p>Die Stereolithografie ist das älteste 3D-Druckverfahren. Das Objekt entsteht aus einem lichtempfindlichen Polymer (Photopolymer), das Schicht für Schicht mit UV-Licht ausgehärtet wird.</p>
      <p>Das Verfahren erreicht eine sehr hohe Detailgenauigkeit und sehr glatte Oberflächen. Für Überhänge sind meist Stützstrukturen erforderlich. Die Kosten liegen im mittleren Bereich. SLA eignet sich besonders für Präsentationsmodelle und detailreiche Modelle.</p>
    </div>
    <img src="${i}/images/3dprint/process/sla.png" alt="SLA" />
  </div>

  <h2>Laserverschmelzung von Pulver (SLS)</h2>
  <div class="verfahren">
    <div class="verfahren-text">
      <p>Beim selektiven Lasersintern wird eine dünne Pulverschicht auf eine Trägerplatte aufgebracht. Ein Laserstrahl verschmilzt das Pulver an den gewünschten Stellen. Anschließend wird die Trägerplatte abgesenkt und eine neue Schicht aufgebracht – Schicht für Schicht.</p>
      <p>Das ungebundene Pulver stützt das Bauteil, sodass keine Stützstrukturen nötig sind. Das Verfahren erreicht hohe Detailgenauigkeit bei leicht rauer Oberfläche. Aufgrund der hohen Kosten eignet sich SLS vor allem für industrielle Funktionsbauteile.</p>
    </div>
    <img src="${i}/images/3dprint/process/sls.png" alt="SLS" />
  </div>

  <h2>Merkmale im Vergleich</h2>
  <table>
    <thead>
      <tr><th>Merkmal</th><th>FDM</th><th>SLA</th><th>SLS</th></tr>
    </thead>
    <tbody>
      <tr><td>Ausgangsmaterial</td><td>Kunststoffdraht</td><td>flüssiges Photopolymer</td><td>Kunststoffpulver</td></tr>
      <tr><td>Funktionsprinzip</td><td>Material wird geschmolzen und abgelegt</td><td>Material wird mit Licht ausgehärtet</td><td>Pulver wird mit Laser verschmolzen</td></tr>
      <tr><td>Detailgenauigkeit</td><td>mittel</td><td>sehr hoch</td><td>hoch</td></tr>
      <tr><td>Oberflächenqualität</td><td>sichtbare Schichten</td><td>sehr glatt</td><td>leicht rau</td></tr>
      <tr><td>Stützstrukturen</td><td>meist erforderlich</td><td>meist erforderlich</td><td>durch Pulver gestützt</td></tr>
      <tr><td>Kosten</td><td>vergleichsweise gering</td><td>mittel</td><td>hoch</td></tr>
      <tr><td>Typische Anwendung</td><td>Prototypen und Hobbybereich</td><td>Präsentationsmodelle und detailreiche Modelle</td><td>industrielle Funktionsbauteile</td></tr>
    </tbody>
  </table>

  <h2>Transferfragen</h2>
  ${this.transferQuestions.map(n=>`
  <div class="question">
    <div class="question-text">${n.id}. ${n.text}</div>
    <div class="answer">${n.answer||""}</div>
  </div>`).join("")}

</body>
</html>`,c=new Blob([s],{type:"text/html"}),o=URL.createObjectURL(c),r=window.open(o,"_blank");r.addEventListener("load",()=>{r.print(),URL.revokeObjectURL(o)})},unlockResult(){const i=this.code.trim().toLowerCase();i==="gmt solve all lehrer"?(this.showSolutions=!0,this.message="Lösungshorizont freigeschaltet."):i==="gmt solve all"?(this.unlocked.fdm=!0,this.unlocked.sla=!0,this.unlocked.sls=!0,this.message="Alle Verfahren wurden freigeschaltet."):i==="gmt33"?(this.unlocked.fdm=!0,this.message="FDM wurde freigeschaltet."):i==="gmt34"?(this.unlocked.sla=!0,this.message="SLA wurde freigeschaltet."):i==="gmt89"?(this.unlocked.sls=!0,this.message="SLS wurde freigeschaltet."):this.message="Der Code ist nicht korrekt.",this.code=""}}},h=i=>(L("data-v-f709208e"),i=i(),y(),i),P={class:"page"},M={class:"content"},F=h(()=>e("section",{class:"task"},[e("h2",null,"Arbeitsauftrag"),e("ol",{class:"task-list"},[e("li",null,"Erklärt euch gegenseitig die Verfahren – nutzt dazu am besten die schematische Darstellung auf den Expertenseiten."),e("li",null,"Beantwortet gemeinsam auf Basis eures erlernten Wissens die Transferfragen.")])],-1)),B=h(()=>e("h1",null,"Ergebnisse",-1)),E={class:"code-area"},V=h(()=>e("h2",null,"Merkmale",-1)),T=h(()=>e("thead",null,[e("tr",null,[e("th",null,"Merkmal"),e("th",null,"FDM"),e("th",null,"SLA"),e("th",null,"SLS")])],-1)),R={key:0,class:"message"},_={class:"transfer"},K=h(()=>e("h2",null,"Transferfragen",-1)),O=["for"],C=["id","onUpdate:modelValue"],U={key:0,class:"solution"},W=h(()=>e("strong",null,"Lösungshorizont:",-1)),q={class:"teacher-area"};function G(i,s,c,o,r,n){const k=z("RouterLink");return a(),l("div",P,[e("main",M,[D(k,{to:"/3dprint?overview=true",class:"back-button"},{default:w(()=>[p(" Zurück ")]),_:1}),F,B,e("div",E,[u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>r.code=t),type:"text",placeholder:"Code eingeben",autocomplete:"off",autocorrect:"off",autocapitalize:"none",spellcheck:"false",onKeyup:s[1]||(s[1]=f((...t)=>n.unlockResult&&n.unlockResult(...t),["enter"]))},null,544),[[g,r.code]]),e("button",{onClick:s[2]||(s[2]=(...t)=>n.unlockResult&&n.unlockResult(...t))}," Freischalten ")]),V,e("table",null,[T,e("tbody",null,[(a(!0),l(m,null,b(r.features,t=>(a(),l("tr",{key:t.key},[e("td",null,d(t.label),1),e("td",null,d(r.unlocked.fdm?r.results.fdm[t.key]:""),1),e("td",null,d(r.unlocked.sla?r.results.sla[t.key]:""),1),e("td",null,d(r.unlocked.sls?r.results.sls[t.key]:""),1)]))),128))])]),r.message?(a(),l("p",R,d(r.message),1)):v("",!0),e("section",_,[K,(a(!0),l(m,null,b(r.transferQuestions,t=>(a(),l("div",{key:t.id,class:"question"},[e("label",{for:`question-${t.id}`},d(t.id)+". "+d(t.text),9,O),u(e("textarea",{id:`question-${t.id}`,"onUpdate:modelValue":S=>t.answer=S,rows:"4",placeholder:"Antwort eingeben"},null,8,C),[[g,t.answer]]),r.showSolutions?(a(),l("div",U,[W,p(" "+d(t.solution),1)])):v("",!0)]))),128))]),e("button",{class:"download-button",onClick:s[3]||(s[3]=(...t)=>n.downloadPDF&&n.downloadPDF(...t))}," Als PDF downloaden "),e("div",q,[u(e("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>r.teacherCode=t),class:"teacher-input",placeholder:"Code",autocomplete:"off",autocorrect:"off",autocapitalize:"none",spellcheck:"false",onKeyup:s[5]||(s[5]=f((...t)=>n.printTeacherView&&n.printTeacherView(...t),["enter"]))},null,544),[[g,r.teacherCode]]),e("button",{class:"download-button",onClick:s[6]||(s[6]=(...t)=>n.printTeacherView&&n.printTeacherView(...t))}," Für Lehrkraft ")])])])}const H=x(A,[["render",G],["__scopeId","data-v-f709208e"]]);export{H as default};
