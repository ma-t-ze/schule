<template>
  <main class="lesson-page"><div class="shell">
    <RouterLink to="/medientechnik/adobe-indesign/mini-tutorials" class="back">← Mini Tutorials</RouterLink>
    <header><p class="eyebrow">ADOBE INDESIGN · MINI TUTORIAL</p><h1>Textrahmen automatisch an Text anpassen</h1><p class="goal">Dein Textrahmen wächst mit, wenn du den Inhalt oder die Schriftgestaltung veränderst.</p></header>
    <section aria-labelledby="terms-title"><h2 id="terms-title">Einfach erklärt</h2><dl>
      <div><dt>Automatische Größenänderung</dt><dd>InDesign passt die Größe des Textrahmens an seinen Inhalt an. Du legst fest, welche Dimensionen sich ändern dürfen.</dd></div>
      <div><dt>Bezugspunkt</dt><dd>Dieser Punkt bleibt an seiner Position, wenn der Rahmen wächst oder schrumpft.</dd></div>
    </dl></section>
    <section class="practice" aria-labelledby="practice-title"><h2 id="practice-title">So gehst du vor</h2><ol>
      <li>Wähle deinen <strong>Textrahmen</strong> aus.</li>
      <li>Gehe zu <strong>Objekt → Textrahmenoptionen (⌘ + B)</strong>.</li>
      <li>Wechsle zum Reiter <strong>Automatisch Größe ändern</strong>.</li>
      <li>Wähle bei <strong>„Automatische Größenänderung“</strong> die Option <strong>Nur Höhe</strong>.</li>
      <li>Wähle als Bezugspunkt <strong>oben mittig</strong>, damit der Textrahmen nach unten wächst. Bestätige mit <strong>OK</strong>.</li>
    </ol><p>Jetzt passt sich die Höhe des Textrahmens automatisch an den Inhalt an – auch wenn du Schriftgröße oder Zeilenabstand veränderst.</p></section>
    <section class="practice" aria-labelledby="tip-title"><h2 id="tip-title">Praktischer Tipp</h2><p>Mit einem <strong>Doppelklick auf einen Anfasser</strong> des Textrahmens kannst du den Rahmen auch einmalig an den Text anpassen.</p><p>Ein Anfasser ist eines der <strong>acht kleinen Quadrate am Rand des ausgewählten Rahmens</strong>.</p></section>
    <section class="check" aria-labelledby="check-title"><h2 id="check-title">Prüfe dein Ergebnis</h2><p>Füge Text hinzu und verändere Schriftgröße oder Zeilenabstand. Wächst der Rahmen nach unten, während seine Breite und die obere Kante gleich bleiben?</p></section>
    <section class="practice" aria-labelledby="example-title"><h2 id="example-title">Beispieltext zum Ausprobieren</h2><p>Dieser Text dient dazu, verschiedene Funktionen der Textgestaltung in Adobe InDesign auszuprobieren. Dabei können Schriftgröße, Zeilenabstand, Absatzabstände und die automatische Größenanpassung von Textrahmen getestet werden.</p></section>
    <nav class="pager" aria-label="Tutorialnavigation"><RouterLink to="/medientechnik/adobe-indesign/mini-tutorials">← Zur Übersicht</RouterLink></nav>
  </div></main>
</template>

<style scoped>
@import './indesignTutorial.css';
</style>
