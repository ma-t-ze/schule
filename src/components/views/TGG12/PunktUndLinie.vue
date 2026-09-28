<template>
  <main class="lesson">
    <nav class="lesson-nav" aria-label="Kursnavigation">
      <router-link :to="{ name: '3tgg12' }">← Zur Übersicht 3TGG12</router-link>
    </nav>

    <section class="slide title-slide" aria-labelledby="lesson-title">
      <p class="eyebrow">GRUNDLAGEN</p>
      <h1 id="lesson-title">VISUELLE<br />KOMMUNIKATION</h1>
      <footer>CHS | Heckel</footer>
    </section>

    <section class="slide" aria-labelledby="definition-title">
      <header class="subject"><span>GESTALTUNGS UND MEDIENTECHNIK</span><span>Eingangsklasse</span></header>
      <h2 id="definition-title" class="question">Was versteht man unter <strong>visueller Kommunikation?</strong></h2>
      <div class="definition-copy">
        <p><strong>Visuelle Kommunikation</strong> ist die <strong>Übermittlung von Informationen</strong> über <strong>visuelle Zeichen</strong> - also über <strong>Bilder, Symbole, Zeichen, Formen</strong> und <strong>Gestaltung.</strong></p>
        <p><strong>Zeichen</strong> in der <strong>Kommunikations- und Zeichentheorie</strong> = alles, was auf etwas anderes verweist und Bedeutung trägt.</p>
      </div>
      <footer>CHS | Heckel</footer>
    </section>

    <section class="slide" aria-labelledby="task-title">
      <header class="subject"><span>GESTALTUNGS UND MEDIENTECHNIK</span><span>Eingangsklasse</span></header>
      <h2 id="task-title">Aufgabe</h2>
      <p>Zeichne vier Quadrate in deine Kladde (7 x 7 cm). Verwende in jedem Quadrat nur einen Punkt und einen Strich. Ordne Punkt und Strich jeweils so an, dass vier unterschiedliche kleine Geschichten entstehen. <strong>(Bearbeitungszeit 45 Min.)</strong></p>
      <p>Anschließend stellt jede Person ihre vier Geschichten kurz vor.<br /><strong>( Präsentationszeit etwa 3 Min. pro Person)</strong></p>
      <p>→ Ziel ist es zu erkennen, dass allein durch die Position der Grundelemente Punkt und Linie sehr viel Bedeutung transportiert werden kann.</p>
      <footer>CHS | Heckel</footer>
    </section>

    <section class="slide sketch-slide" aria-label="Beispiele im DIN-A5-Skizzenbuch">
      <header class="subject"><span>GESTALTUNGS UND MEDIENTECHNIK</span><span>Eingangsklasse</span></header>
      <div class="book-surround">
        <div class="sketchbook" role="group" aria-label="Aufgeschlagenes DIN-A5-Skizzenbuch mit zwei Hochformatseiten">
          <h2>#1 Visuelle Kommunikation mit Punkt und Linie</h2>
          <div class="book-page left-page">
            <figure>
              <svg viewBox="0 0 200 200" role="img" aria-label="Ein Punkt schwebt über einer waagerechten Linie">
                <circle cx="100" cy="92" r="15" />
                <path d="M66 130 H132" stroke="currentColor" stroke-width="9" />
              </svg>
              <figcaption>Punkt schwebt auf Linie</figcaption>
            </figure>
            <div class="empty-square" aria-label="Freies Quadrat für eine weitere Geschichte"></div>
          </div>
          <div class="book-page right-page">
            <figure>
              <svg viewBox="0 0 200 200" role="img" aria-label="Eine schräge Linie steht auf einem Punkt und kippt nach rechts">
                <circle cx="96" cy="130" r="15" />
                <path d="M97 113 L132 56" stroke="currentColor" stroke-width="9" />
              </svg>
              <figcaption>Linie steht auf Punkt und kippt um</figcaption>
            </figure>
            <div class="empty-square" aria-label="Freies Quadrat für eine weitere Geschichte"></div>
          </div>
        </div>
      </div>
      <footer>CHS | Heckel</footer>
    </section>
  </main>
</template>

<style scoped lang="scss">
.lesson {
  color: #111;
  background: #efefed;
  font-family: 'Jost', sans-serif;
  user-select: text;
}

.lesson-nav {
  padding: 18px clamp(20px, 4vw, 64px);
  background: white;

  a { color: inherit; text-underline-offset: 4px; }
  a:focus-visible { outline: 3px solid #123cff; outline-offset: 5px; }
}

.slide {
  position: relative;
  box-sizing: border-box;
  max-width: 1600px;
  min-height: min(900px, 100svh);
  margin: 0 auto 24px;
  padding: clamp(24px, 4vw, 64px);
  padding-bottom: 80px;
  background: white;

  h2, p { font-size: clamp(21px, 2.35vw, 34px); line-height: 1.5; }
  h2 { margin: 32px 0 44px; }
  p { margin: 0 0 36px; }
  strong { font-weight: 600; }
  footer { position: absolute; bottom: 28px; right: clamp(24px, 4vw, 64px); font-size: 13px; }
}

.subject {
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;

  span:first-child { font-family: 'Anton', sans-serif; font-size: clamp(20px, 2.3vw, 32px); }
  span:last-child { font-family: 'Anton', sans-serif; font-size: 18px; font-weight: 400; }
  &::after { content: ''; width: 32px; height: 2px; background: currentColor; margin-top: 8px; }
}

.title-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  background: #1038ff;

  .eyebrow { font-family: 'Graphit', sans-serif; font-weight: 600; letter-spacing: .35em; font-size: clamp(18px, 2.5vw, 34px); margin-bottom: 72px; }
  h1 { font-family: 'Graphit', sans-serif; font-weight: 600; font-size: clamp(28px, 7.4vw, 112px); line-height: 1.15; letter-spacing: .015em; margin: 0; }
}

.question { font-weight: 400; }
.definition-copy { margin-top: 80px; }
.definition-copy p + p { margin-top: 60px; }

.book-surround { padding: 32px 12px; }
.sketchbook {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1100px;
  margin: auto;
  // Two facing DIN A5 pages, each 148 × 210 mm.
  aspect-ratio: 296 / 210;
  background: #faf8f0;
  border: 1px solid #d0ccc1;
  border-radius: 3px 9px 9px 3px;
  box-shadow: 0 3px 0 #dedbd2, 0 6px 0 #f7f4ea, 0 9px 0 #333, 0 18px 32px #0002;

  &::after { content: ''; position: absolute; inset: 0 auto 0 50%; width: 5%; transform: translateX(-50%); background: linear-gradient(90deg, transparent, #00000012 45%, #00000024 50%, #ffffff60 55%, transparent); pointer-events: none; }
  h2 { position: absolute; top: 5%; left: 7%; right: 5%; margin: 0; font-size: clamp(12px, 2.2vw, 30px); font-weight: 400; z-index: 1; }
}

.book-page {
  min-width: 0;
  padding: 22% 14% 9%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  figure { margin: 0; }
  svg, .empty-square { display: block; width: 66%; aspect-ratio: 1; border: 1px solid #111; box-sizing: border-box; }
  svg { height: auto; }
  figcaption { margin-top: 8px; font-size: clamp(10px, 1.65vw, 23px); line-height: 1.25; }
}

@media (max-width: 600px) {
  .slide { min-height: auto; margin-bottom: 12px; }
  .title-slide { min-height: 65svh; }
  .title-slide .eyebrow { margin-bottom: 40px; }
  .definition-copy { margin-top: 40px; }
  .definition-copy p + p { margin-top: 32px; }
  .sketch-slide { padding-inline: 12px; }
  .book-surround { padding: 24px 0; }
  .book-page { padding-inline: 12%; }
  .book-page figcaption { margin-top: 4px; }
}
</style>
