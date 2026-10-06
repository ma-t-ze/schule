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
      <h2 id="task-title">Zusatzaufgabe</h2>
      <p>Wähle deine bevorzugte Technik aus dem Punkt-, Linien- oder Flächenporträt aus.</p>
      <p>Suche dir eine Mitschülerin oder einen Mitschüler, die/der ebenfalls fertig ist, und porträtiert euch gegenseitig live – ohne Foto als Vorlage.</p>
      <p>Ob du das Ergebnis in deine Kladde aufnimmst, entscheidest du selbst.</p>
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




@media (max-width: 700px) {
  .slide { min-height: auto; margin-bottom: 12px; }
  .title-slide { min-height: 65svh; }
  .title-slide .eyebrow { margin-bottom: 40px; }
}
</style>
