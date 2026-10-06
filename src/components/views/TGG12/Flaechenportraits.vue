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
    <section class="slide" aria-labelledby="area-title">
      <header class="subject"><span>GESTALTUNGS- UND MEDIENTECHNIK</span><span>Eingangsklasse</span></header>
      <div class="area-copy">
        <h2 id="area-title">Die Fläche</h2>
        <p>Eine Fläche ist ein zweidimensionales Gestaltungselement mit Breite und Höhe. Sie entsteht durch eine Begrenzung und hebt sich dadurch von ihrer Umgebung ab.</p>
        <p>Flächen können geometrisch, organisch oder frei geformt sein. Durch ihre Größe, Form, Lage und Ausrichtung bestimmen sie wesentlich die Wirkung einer Komposition. Sie können beispielsweise ordnen, gliedern, verbinden, trennen oder Schwerpunkte bilden.</p>
        <div class="area" role="img" aria-label="Eine schwarze quadratische Fläche"></div>
      </div>
      <footer>CHS | Heckel</footer>
    </section>
    <section class="slide" aria-labelledby="task-title">
      <header class="subject"><span>GESTALTUNGS- UND MEDIENTECHNIK</span><span>Eingangsklasse</span></header>
      <div class="task-layout">
        <figure class="portrait">
          <img src="../../../assets/flaechenportraits/beispiel.jpg" alt="Beispiel eines reduzierten Flächenportraits mit schwarzen und weißen Flächen" loading="lazy" />
        </figure>
        <div class="task-copy">
          <h2 id="task-title">Aufgabe:</h2>
          <p>Erstelle zwei verschiedene Flächenportraits.</p>
          <h2>Vorgehen:</h2>
          <ul>
            <li>Mache ein Bild von dir mit dem iPad.</li>
            <li>Klebe mit Tesa Transparentpapier auf dein iPad.</li>
            <li>Gestalte zwei Varianten eines Flächenportraits.
              <ol type="a">
                <li>Ein Flächenportrait mit vielen Details.</li>
                <li>Ein sehr reduziertes Flächenportrait – dein Gesicht soll gerade noch erkennbar sein.</li>
              </ol>
            </li>
            <li>Klebe die Arbeiten im Anschluss in deine Kladde.</li>
          </ul>
        </div>
      </div>
      <footer>CHS | Heckel</footer>
    </section>
    <section class="slide" aria-labelledby="assessment-title">
      <header class="subject"><span>GESTALTUNGS- UND MEDIENTECHNIK</span><span>Eingangsklasse</span></header>
      <div class="task-copy">
        <h2 id="assessment-title">Praktische Arbeit – Bewertungskriterien</h2>
        <h3>Reduktion | 0–5 Punkte</h3>
        <ul>
          <li>Die beiden Varianten unterscheiden sich deutlich im Detailgrad – die Reduktion von einer detailreichen zu einer vereinfachten Darstellung ist klar erkennbar.</li>
        </ul>
        <h3>Umsetzung | 0–5 Punkte</h3>
        <ul>
          <li>Saubere und ordentliche Ausarbeitung</li>
        </ul>
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



.area-copy { max-width: 900px; margin: 48px auto 0; }
.area { width: clamp(90px, 10vw, 130px); aspect-ratio: 1; background: #000; margin: 60px auto 0; }
.task-layout { display: grid; grid-template-columns: minmax(160px, 1fr) minmax(0, 3fr); gap: 40px; align-items: center; margin-top: 48px; }
.portrait { margin: 0; }
.portrait img { display: block; width: 100%; height: auto; }
.task-copy {
  h2 { margin: 24px 0 8px; }
  h3 { font-size: clamp(20px, 2vw, 30px); line-height: 1.5; margin: 32px 0 12px; }
  ul, ol { padding-left: 1.4em; font-size: clamp(20px, 2vw, 30px); line-height: 1.5; }
  li { margin-bottom: 8px; }
  ol { margin-top: 8px; }
}
@media (max-width: 700px) {
  .slide { min-height: auto; margin-bottom: 12px; }
  .title-slide { min-height: 65svh; }
  .title-slide .eyebrow { margin-bottom: 40px; }
  .task-layout { grid-template-columns: 1fr; gap: 24px; margin-top: 24px; }
  .portrait { max-width: 260px; margin: auto; }
  .task-copy { grid-row: 1; }
}
</style>
