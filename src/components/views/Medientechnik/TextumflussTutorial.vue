<script setup>
import screenshot from './textumfluss-screenshot.png'
</script>

<template>
  <main class="lesson-page"><div class="shell">
    <RouterLink to="/medientechnik/adobe-indesign/mini-tutorials" class="back">← Mini Tutorials</RouterLink>
    <header><p class="eyebrow">ADOBE INDESIGN · MINI TUTORIAL</p><h1>Text um einen Kreis fließen lassen</h1><p class="goal">Du lässt einen Text automatisch um einen Kreis laufen.</p></header>
    <p class="intro">Probiere den Textumfluss an einer Kopie deines Café-Flyers aus. Die Form verdrängt den Text. Verschiebst du sie, passt sich der Text an.</p>
    <section aria-labelledby="terms-title"><h2 id="terms-title">Einfach erklärt</h2><dl>
      <div><dt>Textumfluss</dt><dd>Eine Einstellung am Objekt, um das der Text herumfließen soll.</dd></div>
      <div><dt>Abstand</dt><dd>Freier Platz zwischen Form und Text für bessere Lesbarkeit.</dd></div>
    </dl></section>
    <figure class="document-image"><a :href="screenshot" target="_blank" rel="noopener noreferrer" aria-label="Screenshot zum Textumfluss vergrößern (neuer Tab)"><img :src="screenshot" width="3622" height="2072" alt="Café-Florale-Flyer in Adobe InDesign: Der Fließtext läuft um einen runden Bereich. Rechts ist das Textumfluss-Bedienfeld geöffnet."></a></figure>
    <section class="practice" aria-labelledby="practice-title"><h2 id="practice-title">So gehst du vor</h2><ol>
      <li>Öffne deinen Flyer und speichere eine Kopie als <strong>„Textumfluss.indd“</strong> in deinem Namensordner.</li>
      <li>Verwende einen ausreichend großen Textrahmen mit mehreren Zeilen, zum Beispiel mit deinem Café-Fließtext.</li>
      <li>Zeichne mit dem <strong>Ellipsenwerkzeug (L)</strong> einen Kreis über einen Teil des Textes. Halte beim Aufziehen die Umschalttaste gedrückt, damit ein gleichmäßiger Kreis entsteht.</li>
      <li>Wähle den Kreis mit dem schwarzen Auswahlpfeil aus. Öffne <strong>Fenster → Textumfluss</strong>.</li>
      <li>Aktiviere <strong>„Umfließen der Objektform“</strong> (drittes Symbol). Der Text folgt nun der runden Kontur. „Umfließen des Begrenzungsrahmens“ (zweites Symbol) würde dagegen einen rechteckigen Bereich freihalten.</li>
      <li>Stelle im Textumfluss-Bedienfeld bei <strong>Versatz</strong> zunächst <strong>3 mm</strong> ein. Je nach Bedienfeldansicht musst du dieses zunächst vergrößern oder über das Bedienfeldmenü <strong>„Optionen anzeigen“</strong> aufrufen. Beim Umfließen der Objektform wird der Abstand zur Kreiskontur über das Versatzfeld eingestellt, nicht über vier einzelne Abstandsfelder. Achte darauf, dass der Kreis ausgewählt ist.</li>
      <li><strong>Andere Textrahmen vom Textumfluss ausnehmen:</strong> Der Kreis beeinflusst zunächst auch andere Textrahmen in seinem Bereich. Wähle einen Textrahmen aus, der nicht reagieren soll. Öffne <strong>Objekt → Textrahmenoptionen (⌘ + B)</strong> und aktiviere <strong>„Textumfluss ignorieren“</strong>. Wiederhole das bei Bedarf für weitere Textrahmen.</li>
      <li>Verschiebe den Kreis und beobachte, wie sich der Fließtext verändert. Lass genügend Platz für gut lesbare Zeilen. Vergrößere bei Textüberlauf den Textrahmen.</li>
      <li>Prüfe über <strong>Ansicht → Bildschirmmodus → Vorschau</strong> das Ergebnis. Speichere <strong>„Textumfluss.indd“</strong>.</li>
    </ol></section>
    <section class="check" aria-labelledby="check-title"><h2 id="check-title">Prüfe dein Ergebnis</h2><p>Der Text läuft um den Kreis, hat genügend Abstand und bleibt vollständig sichtbar.</p></section>
    <section class="practice" aria-labelledby="help-title"><h2 id="help-title">Der Text fließt noch nicht um die Form?</h2><ul>
      <li>Wähle die Form aus, wenn du den Textumfluss einstellst.</li>
      <li>Prüfe die Ebenen: Lege die Form für diese Übung über den Text.</li>
      <li>Wähle den Textrahmen und öffne <strong>Objekt → Textrahmenoptionen</strong>. „Textumfluss ignorieren“ muss ausgeschaltet sein.</li>
    </ul></section>
    <p class="source"><a href="https://www.adobe.com/de/learn/indesign/web/wrap-text-layout" target="_blank" rel="noopener noreferrer">Bei Adobe nachlesen: Textumfluss ↗</a></p>
    <nav class="pager" aria-label="Tutorialnavigation"><RouterLink to="/medientechnik/adobe-indesign/mini-tutorials">← Zur Übersicht</RouterLink></nav>
  </div></main>
</template>

<style scoped>
@import './indesignTutorial.css';
</style>
