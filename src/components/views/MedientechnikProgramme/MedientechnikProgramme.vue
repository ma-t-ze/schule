<script setup>
import { computed, ref } from 'vue'
const programmes = [
  { id: 'ps', short: 'Ps', name: 'Photoshop', field: 'Bild', verb: 'Bilder bearbeiten', color: '#176baf', tint: '#e9f3ff', symbol: '▦', intro: 'Du veränderst Fotos und setzt Bilder neu zusammen. Im Mittelpunkt stehen Pixel: viele kleine Bildpunkte, die gemeinsam ein Bild ergeben.', strengths: ['Helligkeit und Farben korrigieren', 'Motive freistellen und retuschieren', 'Mehrere Bilder zu einer Montage verbinden'], terms: 'Ebenen trennen Bildbestandteile. Mit einer Maske blendest du Bereiche aus, ohne sie zu löschen.', example: 'Für ein Schulfest entfernst du den Hintergrund eines Bandfotos und passt seine Farben an.', result: 'Ein bearbeitetes Foto oder eine Bildmontage', formats: 'PSD zum Weiterarbeiten · JPEG oder PNG zur Ausgabe', limit: 'Für ein Logo, das vom Sticker bis zum großen Banner scharf bleiben soll, sind Vektoren in Illustrator meist besser geeignet.', draw: 'Ein Foto mit sichtbaren Pixeln und darüber zwei transparente Ebenen.', memory: 'Ich verändere das Bild.' },
  { id: 'ai', short: 'Ai', name: 'Illustrator', field: 'Grafik', verb: 'Formen konstruieren', color: '#9a480c', tint: '#fff0df', symbol: '◇', intro: 'Du zeichnest Logos, Icons und Illustrationen aus Vektoren. Ihre Formen werden durch Pfade und Ankerpunkte beschrieben.', strengths: ['Logos und Symbole entwickeln', 'Präzise Formen und Kurven zeichnen', 'Vektorgrafiken ohne Verpixeln vergrößern'], terms: 'Ein Pfad ist eine Linie oder Kontur. Ankerpunkte bestimmen ihren Verlauf; Fläche und Kontur bestimmen ihr Aussehen.', example: 'Du entwirfst das Logo für das Schulfest. Dasselbe Logo funktioniert auf einem kleinen Ticket und einem großen Banner.', result: 'Eine skalierbare Grafik', formats: 'AI zum Weiterarbeiten · SVG oder PDF zur Weitergabe', limit: 'Die Skalierbarkeit gilt für Vektorelemente. Ein platziertes Foto bleibt ein Pixelbild. Für Fotoretusche ist Photoshop geeigneter.', draw: 'Ein kleines und ein großes identisches Logo, verbunden durch einen Pfeil. Markiere seine Ankerpunkte.', memory: 'Ich zeichne die Grafik.' },
  { id: 'id', short: 'Id', name: 'InDesign', field: 'Print-Layout', verb: 'Seiten gestalten', color: '#a02b62', tint: '#ffedf5', symbol: '▤', intro: 'Du bringst Texte, Bilder und Grafiken auf Seiten zusammen. Layout bedeutet, diese Elemente bewusst anzuordnen und eine klare Lesereihenfolge zu schaffen.', strengths: ['Broschüren, Magazine und Bücher gestalten', 'Texte mit Absatzformaten einheitlich setzen', 'Mehrseitige Dokumente für den Druck vorbereiten'], terms: 'Text- und Bildrahmen nehmen Inhalte auf. Raster helfen beim Ausrichten. Absatzformate speichern wiederkehrende Texteinstellungen.', example: 'Du platzierst Bandfoto, Logo und Programmtexte in einer mehrseitigen Broschüre für das Schulfest.', result: 'Ein gestaltetes Seitendokument', formats: 'INDD zum Weiterarbeiten · PDF für die Druckausgabe', limit: 'Das Foto bearbeitest du vorher in Photoshop, das Logo zeichnest du in Illustrator. Beim Druck-PDF müssen Vorgaben wie Beschnitt und Bildauflösung stimmen.', draw: 'Eine Doppelseite mit Spalten, Textlinien, Bildrahmen und Seitenzahlen.', memory: 'Ich ordne Inhalte auf Seiten.' },
  { id: 'fi', short: 'Fi', name: 'Figma', field: 'Screen-Layout & Prototyp', verb: 'Oberflächen entwerfen', color: '#6244a5', tint: '#f1edff', symbol: '▣', intro: 'Du gestaltest Oberflächen für Websites und Apps. Du kannst Screens miteinander verknüpfen und so einen anklickbaren Ablauf ausprobieren.', strengths: ['Screens für Smartphone, Tablet und Desktop entwerfen', 'Wiederverwendbare Buttons und Komponenten anlegen', 'Klickwege testen und gemeinsam am Entwurf arbeiten'], terms: 'Ein Frame ist ein Gestaltungsbereich, etwa ein Handy-Screen. Ein Prototyp simuliert Interaktionen, zum Beispiel einen Klick auf einen Button.', example: 'Du entwirfst die mobile Schulfest-Website. Ein Klick auf „Programm“ führt im Prototyp zur Programmübersicht.', result: 'Ein Screen-Entwurf mit testbaren Klickwegen', formats: 'Figma-Design und geteilter Prototyp-Link · z. B. SVG/PNG für einzelne Elemente', limit: 'Ein Design-Prototyp zeigt Aussehen und Bedienabläufe. Eine echte Buchung oder Datenbank ist dadurch noch nicht umgesetzt.', draw: 'Zwei Handy-Screens mit einem Button und einem Verbindungspfeil zum nächsten Screen.', memory: 'Ich gestalte und teste die Bedienung.' }
]
const tasks = [
  { text: 'Auf einem Porträt sollen Hautunreinheiten entfernt werden.', correct: 'ps', why: 'Photoshop ist für die Bearbeitung von Fotodetails und Retusche geeignet.' },
  { text: 'Ein Vereinslogo soll auf einem Stift und auf einer Hauswand scharf aussehen.', correct: 'ai', why: 'Illustrator erzeugt Vektorformen, die sich ohne Verpixeln skalieren lassen.' },
  { text: 'Ein 24-seitiges Programmheft braucht einheitliche Überschriften und Seitenzahlen.', correct: 'id', why: 'InDesign unterstützt mehrseitige Layouts, Typografie und wiederkehrende Seitenelemente.' },
  { text: 'Vor der Umsetzung soll getestet werden, wie man in einer App ein Ticket auswählt.', correct: 'fi', why: 'In Figma lassen sich Screens zu einem interaktiven Prototyp verbinden.' }
]
const answers = ref({})
const correctCount = computed(() => tasks.filter((task, i) => answers.value[i] === task.correct).length)
</script>

<template>
  <main class="media-page">
    <div class="page-shell">
      <RouterLink to="/" class="back">← Zur Startseite</RouterLink>
      <header class="hero">
        <p class="eyebrow">MEDIENTECHNIK / ERSTES JAHR</p>
        <h1>Vier Programme.<br><span>Vier Schwerpunkte.</span></h1>
        <p class="lead">Ein Foto bearbeiten, ein Logo zeichnen, eine Broschüre setzen oder eine App entwerfen: Welches Werkzeug passt zu welcher Aufgabe?</p>
        <p class="goal">Dein Ziel: Du kannst die Programme unterscheiden und ihre Stärken in einer eigenen Zeichnung erklären.</p>
      </header>
      <nav class="programme-nav" aria-label="Programme entdecken">
        <a v-for="p in programmes" :key="p.id" :href="`#${p.id}`" :style="{ '--accent': p.color, '--tint': p.tint }"><span class="badge">{{ p.short }}</span><span><strong>{{ p.name }}</strong><small>{{ p.field }}</small></span><span aria-hidden="true">↗</span></a>
      </nav>
      <section class="basics" aria-labelledby="basics-title">
        <p class="eyebrow">01 / DIE GRUNDIDEE</p>
        <h2 id="basics-title">Bild und Grafik sind Bausteine.<br>Ein Layout bringt sie zusammen.</h2>
        <div class="concept-grid">
          <article><div class="pixel-demo" aria-hidden="true">▦ → ▦</div><h3>Pixelbild</h3><p>Ein Foto besteht aus Bildpunkten. Bei starker Vergrößerung werden sie sichtbar; die vorhandene Auflösung begrenzt die Details.</p></article>
          <article><div class="vector-demo" aria-hidden="true">◇ → ◇</div><h3>Vektorgrafik</h3><p>Mathematisch beschriebene Linien und Flächen werden für jede Größe neu berechnet. Ihre Kanten bleiben scharf.</p></article>
          <article><div class="layout-demo" aria-hidden="true"><span>Bild</span><span>Text<br>Text</span><span>Grafik</span></div><h3>Layout</h3><p>Texte, Bilder und Grafiken erhalten ihren Platz: auf einer gedruckten Seite oder auf einem Bildschirm.</p></article>
        </div>
      </section>
      <section aria-labelledby="programmes-title">
        <p class="eyebrow">02 / DEINE WERKZEUGE</p>
        <h2 id="programmes-title">Was macht welches Programm?</h2>
        <div class="programme-grid">
          <article v-for="p in programmes" :id="p.id" :key="p.id" class="programme" :style="{ '--accent': p.color, '--tint': p.tint }">
            <div class="card-top"><span class="badge">{{ p.short }}</span><span>{{ p.field }}</span></div>
            <h3>{{ p.name }}</h3><p class="verb">{{ p.verb }}</p><p>{{ p.intro }}</p>
            <h4>Besonders stark darin</h4><ul><li v-for="s in p.strengths" :key="s">{{ s }}</li></ul>
            <div class="example"><strong>Beispiel: unser Schulfest</strong><p>{{ p.example }}</p></div>
            <details><summary>Drei Dinge für den Einstieg</summary><p>{{ p.terms }}</p><p><strong>Ergebnis:</strong> {{ p.result }}</p><p><strong>Dateien:</strong> {{ p.formats }}</p><p>{{ p.limit }}</p></details>
            <div class="sketch"><span aria-hidden="true">{{ p.symbol }}</span><p><strong>So könntest du es zeichnen</strong><br>{{ p.draw }}</p></div>
            <p class="memory">„{{ p.memory }}“</p>
          </article>
        </div>
        <p class="footnote">Die Programme haben Überschneidungen. Die Zuordnung zeigt ihre typischen Schwerpunkte – zum Beispiel kann InDesign auch digitale Dokumente ausgeben.</p>
      </section>
      <section class="workflow" aria-labelledby="workflow-title">
        <p class="eyebrow">03 / ZUSAMMENARBEIT</p><h2 id="workflow-title">Ein Fest. Mehrere Medien.</h2>
        <p>Photoshop liefert das bearbeitete Foto. Illustrator liefert das Logo. Beide Bausteine können anschließend in zwei verschiedene Gestaltungswege fließen:</p>
        <div class="flow-assets"><span>Photoshop → Foto</span><b>+</b><span>Illustrator → Logo</span></div>
        <div class="flow-outputs"><div><span aria-hidden="true">↓</span><h3>InDesign → Broschüre</h3><p>Foto + Logo + Texte → Seitenlayout → Druck-PDF</p></div><div><span aria-hidden="true">↓</span><h3>Figma → Website-Entwurf</h3><p>Foto + Logo + Texte → Screens → Klick-Prototyp</p></div></div>
        <p class="footnote">Du musst also nicht alle vier Programme nacheinander verwenden. Das gewünschte Ergebnis bestimmt deinen Weg.</p>
      </section>
      <section aria-labelledby="check-title">
        <p class="eyebrow">04 / KURZER SELBSTCHECK</p><h2 id="check-title">Welches Programm würdest du wählen?</h2>
        <p>Wähle den passenden Schwerpunkt. Du kannst deine Antwort jederzeit ändern.</p>
        <div class="quiz-grid"><fieldset v-for="(task, i) in tasks" :key="task.correct"><legend>{{ i + 1 }}. {{ task.text }}</legend><div class="options"><button v-for="p in programmes" :key="p.id" type="button" :aria-pressed="answers[i] === p.id" @click="answers[i] = p.id">{{ p.name }}</button></div><p v-if="answers[i]" class="feedback" role="status">{{ answers[i] === task.correct ? 'Richtig. ' : 'Noch nicht die passendste Wahl. ' }}{{ task.why }}</p></fieldset></div>
        <p class="score" role="status">{{ correctCount }} von {{ tasks.length }} richtig zugeordnet</p>
      </section>
      <section class="assignment" aria-labelledby="assignment-title">
        <p class="eyebrow">05 / DEINE VISUALISIERUNG</p><h2 id="assignment-title">Mach aus Wissen ein Bild.</h2>
        <p>Zeichne auf einem Blatt eine Werkzeugkarte für das Schulfest. Nutze vier Bereiche oder eine Mindmap. Die Zeichnung soll auch jemand verstehen, der die Programme noch nicht kennt.</p>
        <ol><li><strong>Vier Programme, vier Symbole:</strong> Beschrifte die Bereiche mit Programmname und Schwerpunkt.</li><li><strong>Zeige die Arbeitsweise:</strong> Zeichne Pixel bei Photoshop, Pfade bei Illustrator, Seiten bei InDesign und verknüpfte Screens bei Figma.</li><li><strong>Mach die Stärken sichtbar:</strong> Ergänze je zwei Tätigkeiten und ein typisches Ergebnis.</li><li><strong>Verbinde die Werkzeuge:</strong> Zeige mit Pfeilen, wie Foto und Logo in eine Broschüre oder einen Screen gelangen.</li></ol>
        <details><summary>Prüfe deine Zeichnung</summary><ul><li>Sind alle vier Programme und Schwerpunkte erkennbar?</li><li>Kann man Pixel und Vektoren unterscheiden?</li><li>Ist der Unterschied zwischen Druckseite und interaktivem Screen sichtbar?</li><li>Hat jedes Programm mindestens zwei Stärken und ein Beispiel?</li><li>Sind die Verbindungspfeile sinnvoll beschriftet?</li></ul></details>
        <p><strong>Zum Schluss:</strong> Erkläre einer anderen Person deine Zeichnung in einer Minute. Begründe dabei, welches Programm du für welches Ergebnis wählst.</p>
      </section>
      <footer><h2>Weiterlesen bei den Herstellern</h2><a href="https://www.adobe.com/learn/photoshop/web/raster-vector" target="_blank" rel="noopener">Adobe: Pixel und Vektoren ↗</a><a href="https://pages.adobe.com/business/expand-what-you-can-create-illustrator-x-indesign" target="_blank" rel="noopener">Adobe: Illustrator und InDesign ↗</a><a href="https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma" target="_blank" rel="noopener">Figma: Prototyping ↗</a></footer>
    </div>
  </main>
</template>

<style scoped>
.media-page { background: #f8f7f3; color: #202d32; min-height: 100vh; user-select: text; font-family: 'Jost', sans-serif; }
.media-page * { box-sizing: border-box; }
.page-shell { max-width: 1180px; padding: 32px 28px 64px; margin: auto; }
.back { color: #435355; font-size: 14px; text-underline-offset: 4px; }
.hero { padding: 64px 0 36px; max-width: 860px; }
.eyebrow { font-size: 12px; font-weight: 500; letter-spacing: .14em; color: #526166; margin: 0 0 18px; }
h1 { font-size: clamp(38px, 6.5vw, 76px); line-height: 1.04; letter-spacing: -.04em; margin: 0 0 28px; font-weight: 500; }
h1 span { color: #68766c; }
.lead { font-size: clamp(18px, 2.5vw, 23px); max-width: 720px; }
p, li { line-height: 1.65; }
.goal { font-size: 15px; max-width: 650px; }
h2 { font-size: clamp(25px, 3.2vw, 38px); font-weight: 500; line-height: 1.2; margin: 0 0 24px; letter-spacing: -.02em; }
h3 { font-weight: 500; }
a { color: inherit; }
.programme-nav { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
.programme-nav a { display: flex; align-items: center; gap: 10px; padding: 16px 12px; border: 1px solid #d8ddd6; border-radius: 12px; text-decoration: none; background: white; }
.programme-nav a:hover { border-color: var(--accent); }
.programme-nav small, .programme-nav strong { display: block; }
.programme-nav small { font-size: 12px; }
.programme-nav a > span:last-child { margin-left: auto; }
.badge { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; flex-shrink: 0; border-radius: 10px; background: var(--tint); color: var(--accent); font-weight: 500; font-size: 22px; }
section { margin-top: 72px; scroll-margin-top: 20px; }
.concept-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; }
.concept-grid article { border-top: 1px solid #bbc7bf; padding-top: 24px; }
.pixel-demo, .vector-demo, .layout-demo { height: 78px; color: #4c695d; font-size: 42px; }
.layout-demo { display: flex; gap: 8px; padding: 8px 0; }
.layout-demo span { border: 1px solid #4c695d; padding: 8px; font-size: 14px; }
.programme-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.programme { padding: 28px; border: 1px solid #dce0db; background: white; border-radius: 18px; border-top: 5px solid var(--accent); scroll-margin-top: 20px; }
.card-top { display: flex; align-items: center; gap: 14px; font-size: 14px; color: var(--accent); }
.programme h3 { font-size: 34px; margin: 20px 0 0; }
.verb { margin: 0 0 20px; color: var(--accent); font-size: 19px; }
h4 { margin-bottom: 10px; font-size: 15px; font-weight: 500; }
ul, ol { padding-left: 22px; }
li { margin-bottom: 8px; }
.example { padding: 18px; background: var(--tint); border-radius: 10px; margin: 22px 0; }
.example p { margin-bottom: 0; }
details { border-top: 1px solid #dce0db; border-bottom: 1px solid #dce0db; padding: 16px 0; }
summary { cursor: pointer; font-weight: 500; line-height: 1.5; min-height: 28px; }
.sketch { display: flex; gap: 16px; margin-top: 16px; font-size: 14px; }
.sketch > span { font-size: 42px; color: var(--accent); }
.memory { color: var(--accent); font-size: 20px; font-weight: 500; margin-bottom: 0; }
.footnote { font-size: 14px; color: #526166; }
.workflow { padding: 32px; background: #e8eee7; border-radius: 18px; }
.flow-assets { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 16px; margin-top: 28px; }
.flow-assets span { padding: 14px 20px; background: white; border-radius: 8px; }
.flow-outputs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; text-align: center; }
.flow-outputs span { font-size: 36px; }
.quiz-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
fieldset { min-width: 0; margin: 0; border: 1px solid #c9d3cb; padding: 20px; border-radius: 12px; }
legend { padding: 0 8px; font-weight: 500; line-height: 1.5; }
.options { display: flex; flex-wrap: wrap; gap: 8px; }
button { font: inherit; padding: 10px 14px; min-height: 44px; border: 1px solid #8c9b90; background: white; border-radius: 8px; cursor: pointer; color: #263b30; }
button[aria-pressed='true'] { background: #263b30; color: white; }
.feedback { margin-bottom: 0; font-size: 14px; }
.score { font-weight: 500; }
.assignment { background: #263b30; color: #f5f7ee; border-radius: 18px; padding: 36px; }
.assignment .eyebrow { color: #c9d5bd; }
.assignment li { margin-bottom: 18px; }
.assignment details { border-color: #64755e; }
footer { margin-top: 56px; border-top: 1px solid #c9d3cb; padding-top: 24px; }
footer h2 { font-size: 16px; }
footer a { display: inline-block; margin: 0 24px 14px 0; font-size: 13px; text-underline-offset: 3px; }
a:focus-visible, button:focus-visible, summary:focus-visible { outline: 3px solid #3680b6; outline-offset: 4px; }
@media (max-width: 900px) { .programme-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 600px) { .page-shell { padding: 24px 18px 40px; } .hero { padding-top: 40px; } section { margin-top: 48px; } .programme-grid, .concept-grid, .quiz-grid, .flow-outputs { grid-template-columns: 1fr; } .programme, .workflow, .assignment { padding: 22px; } .programme-nav a { flex-wrap: wrap; } .programme-nav a > span:last-child { display: none; } .badge { width: 36px; height: 36px; font-size: 18px; } }
</style>
