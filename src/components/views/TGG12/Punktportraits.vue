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
    <section class="slide" aria-labelledby="point-title">
      <header class="subject"><span>GESTALTUNGS- UND MEDIENTECHNIK</span><span>Eingangsklasse</span></header>
      <div class="point-copy">
        <h2 id="point-title">Der Punkt</h2>
        <p>Die formalen Grundelemente der visuellen Sprache sind die Grundeinheiten Punkt, Linie, Fläche und Raum. Sie sind die Basis jeder Figur.</p>
        <p>Der Punkt ist die kleinste grafische Einheit, die der Gestalter zur Verfügung hat. Schon durch die Platzierung eines einfachen Elements auf einem Format entstehen Wirkungen auf die Wahrnehmung, die gesetzmäßig über kulturelle Grenzen hinaus gültig sind.</p>
        <div class="point" role="img" aria-label="Ein schwarzer Punkt"></div>
      </div>
      <footer>CHS | Heckel</footer>
    </section>
    <section class="slide task-slide" aria-labelledby="task-title">
      <header class="subject"><span>GESTALTUNGS- UND MEDIENTECHNIK</span><span>Eingangsklasse</span></header>
      <h2 id="task-title">Aufgabe:</h2>
      <p>Erstelle drei verschiedene Punktporträts von dir.</p>
      <h2>Vorgehen:</h2>
      <ul>
        <li>Mache ein Bild von dir mit dem iPad.</li>
        <li>Klebe mit Tesa Transparentpapier auf dein iPad.</li>
        <li>Gestalte drei Varianten des Punktporträts (13 x 13 cm):
          <ul>
            <li>Ein Porträt aus vielen kleinen Punkten.</li>
            <li>Ein Porträt aus großen und kleinen Punkten gemischt.</li>
            <li>Ein Porträt mit so großen Punkten, dass das Bild gerade noch als Gesicht erkennbar ist.</li>
          </ul>
        </li>
        <li>Klebe die Arbeiten im Anschluss in deine Kladde.</li>
      </ul>
      <div class="portraits" aria-label="Drei Beispiele für Punktporträts">
        <img src="../../../assets/punktportraits/kleine-punkte.jpg" alt="Porträt aus vielen kleinen Punkten" width="1596" height="1678" loading="lazy" />
        <img src="../../../assets/punktportraits/gemischte-punkte.jpg" alt="Porträt aus großen und kleinen Punkten gemischt" width="1578" height="1666" loading="lazy" />
        <img src="../../../assets/punktportraits/grosse-punkte.jpg" alt="Porträt aus großen Punkten, gerade noch als Gesicht erkennbar" width="1574" height="1674" loading="lazy" />
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


.point-copy { max-width: 900px; margin: 48px auto 0; }
.point { width: clamp(90px, 10vw, 150px); aspect-ratio: 1; border-radius: 50%; background: #000; margin: 60px auto 0; }
.task-slide {
  h2 { margin: 32px 0 0; }
  ul { padding-left: 1.4em; font-size: clamp(20px, 2vw, 30px); line-height: 1.5; }
  li { margin-bottom: 8px; }
}
.portraits {
  display: flex;
  justify-content: space-around;
  gap: 24px;
  margin-top: 40px;
  img { width: 23%; height: auto; object-fit: contain; align-self: start; border: 1px solid #111; }
}
@media (max-width: 600px) {
  .slide { min-height: auto; margin-bottom: 12px; }
  .title-slide { min-height: 65svh; }
  .title-slide .eyebrow { margin-bottom: 40px; }
  .portraits { flex-wrap: wrap; }
  .portraits img { width: min(100%, 260px); }
}
</style>
