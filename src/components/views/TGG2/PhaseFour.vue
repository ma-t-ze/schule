<template>
  <details class="blue-card phase-four" aria-labelledby="phase-four-title">
    <summary><span class="block-heading"><span class="eyebrow">PHASE 4</span><h2 id="phase-four-title">Entwerfen</h2></span></summary>
    <section aria-labelledby="phase4-story-mapping">
      <h3 id="phase4-story-mapping">Euer Story Mapping</h3>
      <p>Story Mapping ist eine Methode, um die Funktionen einer Anwendung aus Sicht der Nutzer zu strukturieren.</p>
      <ul>
        <li><strong>Aktivitäten:</strong> Übergeordnete Schritte der Nutzerreise.</li>
        <li><strong>User Tasks:</strong> Aufgaben, die der Nutzer erledigen möchte. Sie werden horizontal in der Reihenfolge ihrer Nutzung angeordnet.</li>
        <li><strong>Subtasks:</strong> Konkrete Handlungsschritte und Funktionen, die den jeweiligen User Tasks zugeordnet werden.</li>
      </ul>
      <figure class="phase4-figure">
        <div class="phase4-image-scroll" tabindex="0" role="region" aria-label="Story-Mapping-Beispiel, horizontal scrollbar">
          <img class="phase4-mapping-image" src="/material/3tgg2/phase4-story-mapping.jpg" width="1568" height="658" alt="Story Mapping für den Essensplan: Aktivitäten Budget verwalten, Essen auswählen, Woche planen und Einkauf vorbereiten mit zugeordneten User Tasks und Subtasks." />
        </div>
        <figcaption>Aktivitäten, User Tasks und Subtasks im Story Mapping.</figcaption>
      </figure>
    </section>
    <section class="assignment" aria-labelledby="phase4-assignment">
      <h3 id="phase4-assignment">Aufgabe – Erster Entwurf eurer App</h3>
      <p>Entwickelt auf Grundlage des Story Mappings einen ersten Entwurf eurer App in euren Gruppen.</p>
      <h4>1.1 Screenflows zeichnen</h4>
      <p>Zeichnet für jeden Subtask einen Screenflow auf Papier, der aus einem oder mehreren Screens bestehen kann.</p>
      <ul>
        <li>Schreibt die Nummer des jeweiligen Subtasks zum Screenflow, den ihr entwerft.</li>
        <li>Entwerft den Screenflow mit Screens in der Größe 6 × 12 cm.</li>
        <li>Überlegt, welche Bedienelemente benötigt werden.</li>
        <li>Zeigt, wie die Nutzer durch die Screens navigieren.</li>
        <li>Verbindet die Screens mit Pfeilen, um den Bedienablauf darzustellen.</li>
      </ul>
      <h4>1.2 Wireframes gestalten</h4>
      <ul>
        <li>Stellt Texte, Bilder, Schaltflächen und Eingabefelder vereinfacht dar.</li>
        <li>Achtet auf eine übersichtliche und verständliche Bedienung.</li>
        <li>Konzentriert euch auf Aufbau und Funktion, nicht auf die grafische Gestaltung.</li>
      </ul>
      <h4>2. Entwürfe überprüfen und abgeben</h4>
      <ul>
        <li>Überprüft, ob alle Subtasks umgesetzt wurden.</li>
        <li>Haltet eure Entwürfe mit Fotos fest.</li>
        <li>Ladet eure Ergebnisse in den Abgabeordner auf Teams hoch. Der Abgabeordner sollte alle Teamnamen enthalten.</li>
      </ul>
    </section>
    <section aria-labelledby="phase4-examples">
      <h3 id="phase4-examples">Beispiele</h3>
      <figure class="phase4-figure">
        <img src="/material/3tgg2/phase4-screenflows-wireframes.png" width="1064" height="958" alt="Beispiele: Screenflow zum Eingeben und Bestätigen eines Wochenbudgets, Wireframe zur Gerichtesuche mit Eingabefeld, Buttons, Bildern, Liste und Navigation." />
        <figcaption>Beispiele für Screenflows und Wireframes.</figcaption>
      </figure>
    </section>
  </details>
</template>

<style scoped>
@import './designThinking.css';
.phase4-figure { margin: 20px 0; min-width: 0; }
.phase4-figure img { display: block; width: 100%; height: auto; border-radius: 8px; }
.phase4-image-scroll { max-width: 100%; overflow-x: auto; border-radius: 8px; }
.phase4-image-scroll .phase4-mapping-image { min-width: 760px; }
.phase4-figure figcaption { font-size: 14px; color: #52677e; margin-top: 8px; }
.phase-four h4 { font-size: 19px; margin: 24px 0 12px; }
</style>
