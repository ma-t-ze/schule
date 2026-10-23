<script setup>
import screenshot from './bild-und-rahmen-screenshot.png'
</script>

<template>
  <main class="lesson-page"><div class="shell">
    <RouterLink to="/medientechnik/adobe-indesign/mini-tutorials" class="back">← Mini Tutorials</RouterLink>
    <header><p class="eyebrow">ADOBE INDESIGN · MINI TUTORIAL</p><h1>Bilder skalieren und beschneiden</h1><p class="goal">Entdecke, was der schwarze und der weiße Pfeil mit Bild und Rahmen machen.</p></header>
    <section aria-labelledby="terms-title"><h2 id="terms-title">Einfach erklärt</h2><dl>
      <div><dt>Rahmen</dt><dd>Wie ein Fenster: Er bestimmt, welcher Teil des Bildes sichtbar ist. Verkleinerst du nur den Rahmen, wird das Bild beschnitten, aber nicht gelöscht.</dd></div>
      <div><dt>Schwarzer Pfeil (V) · Auswahlwerkzeug</dt><dd>Damit wählst du den Rahmen aus. Du kannst ihn mit dem Bild verschieben, nur den Rahmen verkleinern oder mit einer Tastenkombination beides skalieren.</dd></div>
      <div><dt>Weißer Pfeil (A) · Direktauswahlwerkzeug</dt><dd>Klicke damit auf das Bild im Rahmen, um den Bildinhalt auszuwählen. Du kannst dann das Bild im festen Rahmen verschieben oder seine Größe ändern. An Rahmenkanten und Ankerpunkten bearbeitet der weiße Pfeil dagegen die Rahmenform.</dd></div>
    </dl></section>
    <figure class="document-image"><a :href="screenshot" target="_blank" rel="noopener noreferrer" aria-label="Screenshot zu Bild und Rahmen vergrößern (neuer Tab)"><img :src="screenshot" alt="Strawberry-Motiv auf einer A4-Seite in Adobe InDesign als Beispiel zum Skalieren und Beschneiden."></a></figure>
    <section class="practice" aria-labelledby="practice-title"><h2 id="practice-title">So gehst du vor</h2><ol>
      <li>Lege über <strong>Datei → Neu → Dokument</strong> eine einzelne Seite im Format <strong>A4, Hochformat</strong> an. Deaktiviere „Doppelseite“. Speichere das Dokument als <strong>„Bild_und_Rahmen.indd“</strong> in deinem Namensordner.</li>
      <li><a href="/medientechnik/indesign/Strawberry.jpg" download="Strawberry.jpg">Strawberry.jpg herunterladen</a>: Speichere das Bild ebenfalls in deinem Namensordner.</li>
      <li><strong>Bild direkt platzieren:</strong> Öffne <strong>Datei → Platzieren (⌘ + D)</strong>, wähle <strong>Strawberry.jpg</strong> und bestätige mit „Öffnen“. Ziehe mit dem geladenen Mauszeiger auf der leeren Seite das Bild in einer passenden Größe auf. InDesign legt den Bildrahmen dabei automatisch an.</li>
      <li><strong>Rahmen und Bild verschieben:</strong> Aktiviere den <strong>schwarzen Pfeil (V)</strong>. Klicke auf den Rahmenrand und ziehe ihn an eine andere Stelle. Rahmen und Bild bewegen sich gemeinsam. Klicke für diese Übung nicht auf den kreisförmigen Inhaltsauswahlgriff in der Bildmitte: Er wählt den Bildinhalt aus.</li>
      <li><strong>Beschneiden – nur den Rahmen kleiner ziehen:</strong> Bleibe beim schwarzen Pfeil. Ziehe einen seitlichen oder unteren Griff des ausgewählten Rahmens nach innen, <strong>ohne Zusatztaste</strong>. Das Bild bleibt gleich groß, aber du siehst einen kleineren Ausschnitt. Ziehe den Griff wieder nach außen: Die verdeckten Bildteile erscheinen wieder. Mit <strong>Umschalt + Ziehen an einem Eckgriff</strong> behält nur der Rahmen seine Proportionen.</li>
      <li><strong>Den Bildausschnitt verschieben:</strong> Wähle den <strong>weißen Pfeil (A)</strong> und klicke auf das Bild innerhalb des Rahmens. Ziehe das Bild so, dass einer der Vögel im Ausschnitt zu sehen ist. Der Rahmen bleibt an seiner Position. Mit gedrückter <strong>Umschalttaste</strong> verschiebst du das Bild waagerecht oder senkrecht.</li>
      <li><strong>Nur das Bild proportional skalieren:</strong> Wähle den Bildinhalt mit dem weißen Pfeil aus. Halte <strong>Umschalt</strong> gedrückt und ziehe an einem <strong>Eckgriff der Bildbegrenzung</strong>. Das Muster wird größer oder kleiner, der Rahmen bleibt gleich groß. Achte darauf, einen Griff des Bildes und keinen Rahmenpunkt zu ziehen. Verkleinere das Bild nicht so weit, dass leere Stellen im Rahmen entstehen.</li>
      <li><strong>Rahmen und Bild gemeinsam proportional skalieren:</strong> Wähle mit dem <strong>schwarzen Pfeil</strong> den Rahmen aus. Halte auf dem Mac <strong>⌘ + Umschalt</strong> gedrückt und ziehe an einem <strong>Eckgriff</strong>. Unter Windows verwendest du <strong>Strg + Umschalt</strong>. Lasse zuerst die Maustaste und dann die Tasten los. Bild und Rahmen ändern gemeinsam ihre Größe, ohne verzerrt zu werden.</li>
      <li>Probiere nochmals den Unterschied: Beschneide den Rahmen, verschiebe darin das Bild und skaliere anschließend beides gemeinsam. Speichere <strong>„Bild_und_Rahmen.indd“</strong>.</li>
    </ol><p><strong>Tipp:</strong> Mit <strong>⌘ + Z</strong> (Windows: Strg + Z) machst du einen Versuch rückgängig. Die Werkzeugkürzel V und A funktionieren, wenn du gerade keinen Text bearbeitest.</p></section>
    <section class="check" aria-labelledby="check-title"><h2 id="check-title">Prüfe dein Ergebnis</h2><p>Kannst du den sichtbaren Ausschnitt verändern, ohne das Muster zu skalieren? Kannst du anschließend Bild und Rahmen gemeinsam verkleinern, ohne die Vögel zu verzerren?</p></section>
    <p class="source">Bei Adobe nachlesen: <a href="https://www.adobe.com/learn/indesign/web/add-work-with-graphics" target="_blank" rel="noopener noreferrer">Bilder und Rahmen skalieren ↗</a> · <a href="https://helpx.adobe.com/gr_en/indesign/desktop/add-graphics-and-media/manage-frames-and-objects/crop-objects.html" target="_blank" rel="noopener noreferrer">Bilder beschneiden ↗</a></p>
    <nav class="pager" aria-label="Tutorialnavigation"><RouterLink to="/medientechnik/adobe-indesign/mini-tutorials">← Zur Übersicht</RouterLink></nav>
  </div></main>
</template>

<style scoped>
@import './indesignTutorial.css';
</style>
