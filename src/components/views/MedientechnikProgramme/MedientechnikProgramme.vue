<script setup>
import { computed, ref, provide, nextTick, onDeactivated, onBeforeUnmount } from 'vue'
import GlossaryText from './GlossaryText.vue'
const termDialog = ref(null)
const activeTerm = ref(null)
let termTrigger = null
let previousOverflow = ''
const closeTerm = () => termDialog.value?.close()
const afterClose = () => {
  document.body.style.overflow = previousOverflow
  termTrigger?.focus()
}
provide('explainMediaTerm', async (entry, trigger) => {
  activeTerm.value = entry
  termTrigger = trigger
  await nextTick()
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  termDialog.value.showModal()
})
onDeactivated(closeTerm)
onBeforeUnmount(() => { if (termDialog.value?.open) { closeTerm(); document.body.style.overflow = previousOverflow } })
const programmes = [
  { id: 'ps', short: 'Ps', name: 'Photoshop', company: 'Ein Programm der Firma Adobe.', productUrl: 'https://www.adobe.com/de/products/photoshop.html', field: 'Bild', verb: 'Bilder bearbeiten', color: '#176baf', tint: '#e9f3ff', symbol: '▦', intro: 'Du veränderst Fotos und setzt Bilder neu zusammen. Im Mittelpunkt stehen Pixel: viele kleine Bildpunkte, die gemeinsam ein Bild ergeben.', strengths: ['Helligkeit und Farben korrigieren', 'Motive freistellen und retuschieren', 'Mehrere Bilder zu einer Montage verbinden'], terms: 'Ebenen trennen Bildbestandteile. Mit einer Maske blendest du Bereiche aus, ohne sie zu löschen.', example: 'Für ein Schulfest entfernst du den Hintergrund eines Bandfotos und passt seine Farben an.', result: 'Ein bearbeitetes Foto oder eine Bildmontage', formats: 'PSD zum Weiterarbeiten · JPEG oder PNG zur Ausgabe', limit: 'Für ein Logo, das vom Sticker bis zum großen Banner scharf bleiben soll, sind Vektoren in Illustrator meist besser geeignet.', draw: 'Ein Foto mit sichtbaren Pixeln.', memory: 'Ich verändere das Bild.' },
  { id: 'ai', short: 'Ai', name: 'Illustrator', company: 'Ein Programm der Firma Adobe.', productUrl: 'https://www.adobe.com/de/products/illustrator.html', field: 'Grafik', verb: 'Formen konstruieren', color: '#9a480c', tint: '#fff0df', symbol: '◇', intro: 'Du zeichnest Logos, Icons und Illustrationen aus Vektoren. Ihre Formen werden durch Pfade und Ankerpunkte beschrieben.', strengths: ['Logos und Symbole entwickeln', 'Präzise Formen und Kurven zeichnen', 'Vektorgrafiken ohne Verpixeln vergrößern'], terms: 'Ein Pfad ist eine Linie oder Kontur. Ankerpunkte bestimmen ihren Verlauf; Fläche und Kontur bestimmen ihr Aussehen.', example: 'Du zeichnest ein Logo für das Schulfest.', result: 'Eine skalierbare Grafik', formats: 'AI zum Weiterarbeiten · SVG oder PDF zur Weitergabe', limit: 'Die Skalierbarkeit gilt für Vektorelemente. Ein platziertes Foto bleibt ein Pixelbild. Für Fotoretusche ist Photoshop geeigneter.', draw: 'Ein Logo mit scharfen Kanten.', memory: 'Ich zeichne die Grafik.' },
  { id: 'id', short: 'Id', name: 'InDesign', company: 'Ein Programm der Firma Adobe.', productUrl: 'https://www.adobe.com/de/products/indesign.html', field: 'Print-Layout', verb: 'Seiten gestalten', color: '#a02b62', tint: '#ffedf5', symbol: '▤', intro: 'Du bringst Texte, Bilder und Grafiken auf Seiten zusammen. Layout bedeutet, diese Elemente bewusst anzuordnen und eine klare Lesereihenfolge zu schaffen.', strengths: ['Broschüren, Magazine und Bücher gestalten', 'Texte mit Absatzformaten einheitlich setzen', 'Mehrseitige Dokumente für den Druck vorbereiten'], terms: 'Text- und Bildrahmen nehmen Inhalte auf. Raster helfen beim Ausrichten. Absatzformate speichern wiederkehrende Texteinstellungen.', example: 'Du platzierst Bandfoto, Logo und Programmtexte in einer mehrseitigen Broschüre für das Schulfest.', result: 'Ein gestaltetes Seitendokument', formats: 'INDD zum Weiterarbeiten · PDF für die Druckausgabe', limit: 'Das Foto bearbeitest du vorher in Photoshop, das Logo zeichnest du in Illustrator. Beim Druck-PDF müssen Vorgaben wie Beschnitt und Bildauflösung stimmen.', draw: 'Eine Doppelseite mit Spalten, Textlinien, Bildrahmen und Seitenzahlen.', memory: 'Ich ordne Inhalte auf Seiten.' },
  { id: 'fi', short: 'Fi', name: 'Figma', company: 'Entwickelt von Figma, einer eigenständigen Firma.', productUrl: 'https://www.figma.com/design/', field: 'Screen-Layout & Prototyp', verb: 'Oberflächen entwerfen', color: '#6244a5', tint: '#f1edff', symbol: '▣', intro: 'Du gestaltest Oberflächen für Websites und Apps. Du kannst Screens miteinander verknüpfen und so einen anklickbaren Ablauf ausprobieren.', strengths: ['Screens für Smartphone, Tablet und Desktop entwerfen', 'Wiederverwendbare Buttons und Komponenten anlegen', 'Klickwege testen und gemeinsam am Entwurf arbeiten'], terms: 'Ein Frame ist ein Gestaltungsbereich, etwa ein Handy-Screen. Ein Prototyp simuliert Interaktionen, zum Beispiel einen Klick auf einen Button.', example: 'Du entwirfst die mobile Schulfest-Website. Ein Klick auf „Programm“ führt im Prototyp zur Programmübersicht.', result: 'Ein Screen-Entwurf mit testbaren Klickwegen', formats: 'Figma-Design und geteilter Prototyp-Link · z. B. SVG/PNG für einzelne Elemente', limit: 'Ein Design-Prototyp zeigt Aussehen und Bedienabläufe. Eine echte Buchung oder Datenbank ist dadurch noch nicht umgesetzt.', draw: 'Ein Handy-Screen.', memory: 'Ich gestalte und teste die Bedienung.' }
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
      <RouterLink to="/" class="back"><GlossaryText text="← Zur Startseite" /></RouterLink>
      <header class="hero">
        <p class="eyebrow"><GlossaryText text="MEDIENTECHNIK / ERSTES JAHR" /></p>
        <h1><GlossaryText text="Vier Programme." /><br><span><GlossaryText text="Vier Schwerpunkte." /></span></h1>
        <p class="lead"><GlossaryText text="Ein Foto bearbeiten, ein Logo zeichnen, eine Broschüre setzen oder eine App entwerfen: Welches Werkzeug passt zu welcher Aufgabe?" /></p>
        <p class="goal"><GlossaryText text="Dein Ziel: Du kannst die Programme unterscheiden und ihre Stärken in einer eigenen Zeichnung erklären." /></p>
      <p class="glossary-hint">Gepunktet unterstrichene Begriffe kannst du antippen. Dann öffnet sich eine kurze Erklärung.</p></header>
      <div class="programme-nav" role="group" aria-label="Programme im Überblick">
        <div v-for="p in programmes" :key="p.id" class="programme-overview" :style="{ '--accent': p.color, '--tint': p.tint }"><span class="badge">{{ p.short }}</span><span><strong>{{ p.name }}</strong><small><GlossaryText :text="p.field" /></small></span></div>
      </div>
      <section class="basics" aria-labelledby="basics-title">
        <p class="eyebrow"><GlossaryText text="01 / DIE GRUNDIDEE" /></p>
        <h2 id="basics-title"><GlossaryText text="Bild und Grafik sind Bausteine." /><br><GlossaryText text="Ein Layout bringt sie zusammen." /></h2>
        <div class="concept-grid">
          <article><div class="pixel-demo" aria-hidden="true">▦ → ▦</div><h3><GlossaryText text="Pixelbild" /></h3><p><GlossaryText text="Ein Foto besteht aus Bildpunkten. Bei starker Vergrößerung werden sie sichtbar; die vorhandene Auflösung begrenzt die Details." /></p></article>
          <article><div class="vector-demo" aria-hidden="true">◇ → ◇</div><h3><GlossaryText text="Vektorgrafik" /></h3><p><GlossaryText text="Mathematisch beschriebene Linien und Flächen werden für jede Größe neu berechnet. Ihre Kanten bleiben scharf." /></p></article>
          <article><div class="layout-demo" aria-hidden="true"><span>Bild</span><span>Text<br>Text</span><span>Grafik</span></div><h3><GlossaryText text="Layout" /></h3><p><GlossaryText text="Texte, Bilder und Grafiken erhalten ihren Platz: auf einer gedruckten Seite oder auf einem Bildschirm." /></p></article>
        </div>
      </section>
      <section aria-labelledby="programmes-title">
        <p class="eyebrow"><GlossaryText text="02 / DEINE WERKZEUGE" /></p>
        <h2 id="programmes-title"><GlossaryText text="Was macht welches Programm?" /></h2>
        <div class="programme-grid">
          <article v-for="p in programmes" :id="p.id" :key="p.id" class="programme" :style="{ '--accent': p.color, '--tint': p.tint }">
            <div class="card-top"><span class="badge">{{ p.short }}</span><span><GlossaryText :text="p.field" /></span></div>
            <h3>{{ p.name }}</h3><p class="company">{{ p.company }}</p><p class="verb"><GlossaryText :text="p.verb" /></p><p><GlossaryText :text="p.intro" /></p>
            <h4><GlossaryText text="Besonders stark darin" /></h4><ul><li v-for="s in p.strengths" :key="s"><GlossaryText :text="s" /></li></ul>
            <div class="example"><strong><GlossaryText text="Beispiel: unser Schulfest" /></strong><p><GlossaryText :text="p.example" /></p></div>
            <div class="sketch"><span aria-hidden="true">{{ p.symbol }}</span><p><strong><GlossaryText text="So könntest du es zeichnen" /></strong><br><GlossaryText :text="p.draw" /></p></div>
            <p class="memory">„<GlossaryText :text="p.memory" />“</p>
            <a class="product-link" :href="p.productUrl" target="_blank" rel="noopener noreferrer" :aria-label="`Offizielle Produktseite von ${p.name} (neuer Tab)`">Offizielle Produktseite ↗</a>
          </article>
        </div>
        <p class="footnote"><GlossaryText text="Die Programme haben Überschneidungen. Die Zuordnung zeigt ihre typischen Schwerpunkte – zum Beispiel kann InDesign auch digitale Dokumente ausgeben." /></p>
      </section>
      <section class="workflow" aria-labelledby="workflow-title">
        <p class="eyebrow">03 / ZUSAMMENARBEIT</p>
        <h2 id="workflow-title">So arbeiten die Programme zusammen</h2>
        <div class="scenario-grid">
          <article class="scenario">
            <p class="scenario-label">BEISPIEL 1 · DRUCK</p>
            <h3><GlossaryText text="Eine Broschüre gestalten" /></h3>
            <ul class="scenario-parts">
              <li><strong>Photoshop</strong><GlossaryText text="Du bearbeitest ein Foto." /></li>
              <li><strong>Illustrator</strong><GlossaryText text="Du zeichnest ein Logo." /></li>
              <li><strong>InDesign</strong><GlossaryText text="Du setzt Foto, Logo und Texte auf die Seiten." /></li>
            </ul>
            <p class="scenario-result"><strong>Das Ergebnis:</strong><br><GlossaryText text="Eine Broschüre, die gedruckt werden kann." /></p>
          </article>
          <article class="scenario">
            <p class="scenario-label">BEISPIEL 2 · BILDSCHIRM</p>
            <h3><GlossaryText text="Eine Website zum Anklicken entwerfen" /></h3>
            <ul class="scenario-parts">
              <li><strong>Photoshop</strong><GlossaryText text="Du bearbeitest ein Foto." /></li>
              <li><strong>Illustrator</strong><GlossaryText text="Du zeichnest ein Logo." /></li>
              <li><strong>Figma</strong><GlossaryText text="Du ordnest Foto, Logo und Texte auf dem Bildschirm an. Du verknüpfst einen Button mit der nächsten Ansicht." /></li>
            </ul>
            <p class="scenario-result"><strong>Das Ergebnis:</strong><br><GlossaryText text="Ein anklickbarer Website-Entwurf, mit dem du die Bedienung ausprobieren kannst." /></p>
          </article>
        </div>
      </section>
      <section aria-labelledby="check-title">
        <p class="eyebrow"><GlossaryText text="04 / KURZER SELBSTCHECK" /></p><h2 id="check-title"><GlossaryText text="Welches Programm würdest du wählen?" /></h2>
        <p><GlossaryText text="Wähle den passenden Schwerpunkt. Du kannst deine Antwort jederzeit ändern." /></p>
        <div class="quiz-grid"><fieldset v-for="(task, i) in tasks" :key="task.correct"><legend>{{ i + 1 }}. <GlossaryText :text="task.text" /></legend><div class="options"><button v-for="p in programmes" :key="p.id" type="button" :aria-pressed="answers[i] === p.id" @click="answers[i] = p.id">{{ p.name }}</button></div><p v-if="answers[i]" class="feedback" role="status">{{ answers[i] === task.correct ? 'Richtig. ' : 'Noch nicht die passendste Wahl. ' }}<GlossaryText :text="task.why" /></p></fieldset></div>
        <p class="score" role="status">{{ correctCount }} von {{ tasks.length }} richtig zugeordnet</p>
      </section>
      <section class="assignment" aria-labelledby="assignment-title">
        <p class="eyebrow">05 / DEINE VISUALISIERUNG</p>
        <h2 id="assignment-title">Visualisiere zeichnerisch die vier Programme, die du dieses Jahr lernen wirst.</h2>
        <p>Gestalte auf einer DIN-A3-Seite eine zeichnerische Darstellung von Photoshop, Illustrator, InDesign und Figma. Stelle die Einsatzbereiche der einzelnen Programme und ihr Zusammenspiel dar. Ergänze deine Zeichnungen durch kurze Beschriftungen und Pfeile, um die Zusammenhänge zu verdeutlichen.</p>
      </section>
      <footer><h2>Weiterlesen bei den Herstellern</h2><a href="https://www.adobe.com/learn/photoshop/web/raster-vector" target="_blank" rel="noopener">Adobe: Pixel und Vektoren ↗</a><a href="https://pages.adobe.com/business/expand-what-you-can-create-illustrator-x-indesign" target="_blank" rel="noopener">Adobe: Illustrator und InDesign ↗</a><a href="https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma" target="_blank" rel="noopener">Figma: Prototyping ↗</a></footer>
    </div>
    <dialog ref="termDialog" class="term-dialog" aria-labelledby="term-title" @close="afterClose" @click="event => { if (event.target === termDialog) { const r = termDialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeTerm() } }">
      <template v-if="activeTerm">
        <button type="button" class="close-term" autofocus @click="closeTerm">Schließen ×</button>
        <p class="eyebrow">EINFACH ERKLÄRT</p>
        <h2 id="term-title">{{ activeTerm.title }}</h2>
        <p class="term-explanation">{{ activeTerm.explanation }}</p>
      </template>
    </dialog>
  </main>
</template>

<style scoped>
.company { font-size: 14px; color: #526166; margin: 6px 0 14px; }
.product-link { display: inline-flex; align-items: center; min-height: 44px; margin-top: 18px; color: var(--accent); text-underline-offset: 4px; font-weight: 500; }
.glossary-hint { font-size: 14px; color: #526166; margin-top: 24px; }
.term-dialog { position: fixed; inset: 0; margin: auto; width: min(540px, calc(100% - 32px)); max-height: calc(100dvh - 48px); overflow-y: auto; padding: 28px; border: 1px solid #c9d3cb; border-radius: 18px; background: #f8f7f3; color: #202d32; box-shadow: 0 20px 80px #102a3040; }
.term-dialog::backdrop { background: #12221dcc; }
.close-term { display: block; margin: 0 0 24px auto; }
.term-explanation { font-size: 18px; line-height: 1.7; }

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
.programme-overview { display: flex; align-items: center; gap: 10px; padding: 16px 12px; border: 1px solid #d8ddd6; border-radius: 12px; text-decoration: none; background: white; }

.programme-nav small, .programme-nav strong { display: block; }
.programme-nav small { font-size: 12px; }

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
.scenario-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.scenario { padding: 24px; background: white; border-radius: 12px; }
.scenario-label { font-size: 12px; letter-spacing: .08em; color: #526166; margin: 0; }
.scenario h3 { font-size: 24px; line-height: 1.3; margin: 12px 0 24px; }
.scenario-parts { list-style: none; padding: 0; margin: 0; }
.scenario-parts li { padding: 14px 0; margin: 0; border-top: 1px solid #dce0db; }
.scenario-parts strong { display: block; margin-bottom: 4px; }
.scenario-result { background: #edf2eb; padding: 16px; border-radius: 8px; margin: 20px 0 0; }
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
@media (max-width: 600px) { .page-shell { padding: 24px 18px 40px; } .hero { padding-top: 40px; } section { margin-top: 48px; } .programme-grid, .concept-grid, .quiz-grid, .scenario-grid { grid-template-columns: 1fr; } .programme, .workflow, .assignment { padding: 22px; } .programme-overview { flex-wrap: wrap; }  .badge { width: 36px; height: 36px; font-size: 18px; } }
</style>
