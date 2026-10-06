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
    <section class="slide" aria-labelledby="task-title">
      <header class="subject"><span>GESTALTUNGS- UND MEDIENTECHNIK</span><span>Eingangsklasse</span></header>
      <h2 id="task-title">Arbeitsauftrag</h2>
      <div class="task-layout">
        <div class="task-text">
          <p>→ Zeichnet vier Quadrate über eine Doppelseite in eurer Kladde.</p>
          <p>→ Erzählt in <strong>vier Schritten als Bildfolge</strong> eine <strong>alternative Erklärung</strong> dafür, warum wir Farben sehen. Nutzt dabei Ironie, Witz, Erwartungsbrüche und Humor.</p>
        </div>
        <div class="drawing-grid" role="img" aria-label="Vorlage: vier leere Zeichenfelder in zwei Reihen">
          <div v-for="field in 4" :key="field"></div>
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




.task-layout { display: grid; grid-template-columns: 1fr 1.3fr; gap: clamp(28px, 4vw, 64px); }
.drawing-grid {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; align-self: start;
  div { aspect-ratio: 1; border: 1px solid #111; }
}
@media (max-width: 700px) {
  .task-layout { grid-template-columns: 1fr; }
  .slide { min-height: auto; margin-bottom: 12px; }
  .title-slide { min-height: 65svh; }
  .title-slide .eyebrow { margin-bottom: 40px; }
}
</style>
