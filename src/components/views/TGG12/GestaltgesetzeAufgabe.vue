<script setup>
import example10 from '../../../assets/gestaltgesetze/beispiel-10.png'
import example11 from '../../../assets/gestaltgesetze/beispiel-11.png'
import example12 from '../../../assets/gestaltgesetze/beispiel-12.png'
import example13 from '../../../assets/gestaltgesetze/beispiel-13.png'
const laws = [
  {
    "title": "Gesetz der Nähe",
    "text": "Elemente mit dem geringeren Abstand zueinander werden zwangsläufig als Einheit wahrgenommen. In der Gestaltung sollten wir dieses Gesetz immer im Hinterkopf behalten, um es als strukturierendes und gliederndes Element einzusetzen."
  },
  {
    "title": "Gesetz der Prägnanz",
    "text": "Das Gesetz der Prägnanz, auch bekannt als Prägnanzprinzip oder Gesetz der guten Gestalt, beschreibt, wie die menschliche Wahrnehmung komplexe oder mehrdeutige Reize automatisch auf die einfachste, klarste und am besten organisierte Weise interpretiert, um eine stabile und effiziente Erkennung zu ermöglichen. In der Praxis findet es breite Anwendung im Grafikdesign, der Medienpädagogik und Usability, wo klare Logos, Symbole oder Layouts intuitiv erfasst werden sollen, ohne kognitive Überlastung zu verursachen."
  },
  {
    "title": "Gesetz der Geschlossenheit",
    "text": "Geschlossene Flächen werden als Einheit erkannt. Aber das Gesetz besagt noch mehr: Unser Gehirn versucht laufend, Zusammenhänge und Beziehungen herzustellen. Aus diesem Grund vervollständigt es sogar unvollständige Elemente zu einer Einheit, bevorzugt zu geometrischen Formen."
  },
  {
    "title": "Gesetz der Gleichheit",
    "text": "Auch als Gesetz der Ähnlichkeit bezeichnet. Es besagt, dass Elemente aufgrund von Größe, Farbe, Form, Orientierung oder Textur als zusammengehörig wahrgenommen werden. Aber das Gesetz besagt noch mehr: Unser Gehirn gruppiert automatisch ähnliche Merkmale zu einheitlichen Gruppen, bevorzugt stabile und vertraute Muster, und überspielt sogar leichte Abweichungen zugunsten einer klaren Struktur."
  }
]
const examples = [example10, example11, example12, example13]
const captions = [
  "Was nah beieinanderliegt, wird als zusammengehörig wahrgenommen.",
  "Das Auge erkennt zwei einfache Grundformen: ein Rechteck und einen Kreis.",
  "Wir ergänzen die unvollständigen Formen zu einem weiteren, auf dem Kopf stehenden Dreieck.",
  "Was gleich erscheint, wird als zusammengehörig wahrgenommen."
]
</script>

<template>
  <main class="lesson">
    <nav class="lesson-nav" aria-label="Kursnavigation">
      <router-link :to="{ name: '3tgg12' }">← Zur Übersicht 3TGG12</router-link>
    </nav>
    <section class="slide" aria-labelledby="task-title">
      <header class="subject"><span>GESTALTUNGS- UND MEDIENTECHNIK</span><span>3TGG12</span></header>
      <h2 id="task-title">Arbeitsauftrag</h2>
      <p>Jede Schülerin und jeder Schüler bearbeitet selbstständig <strong>alle vier Gestaltgesetze</strong>: Nähe, Prägnanz, Geschlossenheit und Gleichheit. Gestalte zu jedem Gesetz ein eigenes Beispiel mit dem bunten Origamipapier.</p>
      <p>Entwickle für jedes der vier Gesetze ein eigenes Beispiel. Zeige das Prinzip in einer anderen Form als in der Vorlage. Deine Beispiele sollen deutlich machen, dass du das jeweilige Gestaltgesetz verstanden hast.</p>
      <p>Nutze für jedes Gesetz eine Doppelseite in deiner Kladde: <strong>Links schreibst du den Namen und den Erklärungstext ab. Rechts klebst du dein eigenes Beispiel aus Origamipapier ein.</strong> Insgesamt entstehen vier Doppelseiten. Arbeite sauber und ordentlich. Die praktische Arbeit wird bewertet.</p>
      <footer>CHS | Heckel</footer>
    </section>
    <section v-for="(law, index) in laws" :key="law.title" class="slide" :aria-labelledby="`law-${index}`">
      <header class="subject"><span>GESTALTUNGS- UND MEDIENTECHNIK</span><span>{{ index + 1 }} / 4 · ALLE VIER BEARBEITEN</span></header>
      <h2 :id="`law-${index}`">{{ law.title }}</h2>
      <div class="law-layout">
        <div class="law-copy"><p>{{ law.text }}</p></div>
        <figure class="law-example"><img :src="examples[index]" :alt="captions[index]" /><figcaption>{{ captions[index] }}</figcaption></figure>
      </div>
      <footer>CHS | Heckel</footer>
    </section>
    <section class="slide" aria-labelledby="assessment-title">
      <header class="subject"><span>GESTALTUNGS- UND MEDIENTECHNIK</span><span>3TGG12</span></header>
      <h2 id="assessment-title">Praktische Arbeit – Bewertungskriterien</h2>
      <div class="criterion">
        <h3>Eigene Verarbeitung <span>0–5 Punkte</span></h3>
        <p>Deine eigenen Beispiele zeigen, dass du die Prinzipien verstanden hast und sie in einer anderen Form als die Vorlagen darstellen kannst.</p>
      </div>
      <div class="criterion">
        <h3>Umsetzung <span>0–5 Punkte</span></h3>
        <p>Saubere und ordentliche Ausarbeitung.</p>
      </div>
      <p class="total">Insgesamt: 10 Punkte</p>
      <footer>CHS | Heckel</footer>
    </section>
    <section class="slide" aria-labelledby="layout-title">
      <header class="subject"><span>GESTALTUNGS- UND MEDIENTECHNIK</span><span>3TGG12</span></header>
      <h2 id="layout-title">Beispiel: So sieht es in deiner Kladde aus</h2>
      <div class="spread-scroll" tabindex="0" role="region" aria-label="Aufbau einer Doppelseite: links Text, rechts eigene Papierarbeit">
        <div class="notebook">
          <div class="book-page">
            <span class="page-label">LINKE SEITE · ABSCHREIBEN</span>
            <h3>Gesetz der Nähe</h3>
            <p>{{ laws[0].text }}</p>
          </div>
          <div class="book-page">
            <span class="page-label">RECHTE SEITE · SELBST GESTALTEN</span>
            <div class="proximity-paper" role="img" aria-label="Zwei Gruppen aus je vier bunten Papierquadraten. Innerhalb einer Gruppe liegen die Quadrate dicht zusammen, zwischen den Gruppen ist ein großer Abstand."><div v-for="group in 2" :key="group"><i v-for="piece in 4" :key="piece"></i></div></div>
            <h3>Nähe verbindet</h3>
            <p>Die nah beieinanderliegenden Papierquadrate wirken jeweils als Gruppe. Entwickle für deine Arbeit ein eigenes Beispiel.</p>
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
.criterion { border-top: 2px solid #111; padding-top: 24px; margin-top: 32px; }
.criterion h3 { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: clamp(22px, 2.6vw, 36px); margin: 0 0 20px; }
.criterion h3 span { font-weight: 400; }
.total { font-weight: 600; margin-top: 36px !important; }
.spread-scroll { overflow-x: auto; }
.spread-scroll:focus-visible { outline: 3px solid #1038ff; outline-offset: 4px; }
.notebook { display: grid; grid-template-columns: 1fr 1fr; min-width: 600px; background: #faf8ef; border: 1px solid #d6d1c3; border-radius: 14px; box-shadow: 0 6px 0 #d6d3ca; }
.book-page { padding: clamp(22px, 3vw, 48px); }
.book-page + .book-page { border-left: 1px solid #d6d1c3; box-shadow: inset 12px 0 14px -12px #0003; }
.page-label { font-size: 13px; letter-spacing: .08em; }
.book-page h3 { font-size: clamp(20px, 2vw, 30px); line-height: 1.4; margin: 28px 0; }
.book-page p { font-size: clamp(16px, 1.5vw, 22px); }
.writing-lines { height: 160px; background: repeating-linear-gradient(transparent 0 30px, #b8b5ab 31px 32px); margin-bottom: 28px; }
.paper-example { border: 1px solid #555; height: 230px; margin-top: 28px; display: grid; grid-template-columns: 1fr 1fr; align-content: center; justify-items: center; gap: 22px; }
.paper-example i { display: block; width: 56px; height: 56px; background: #e6452f; transform: rotate(-8deg); box-shadow: 2px 3px 3px #0002; }
.paper-example i:nth-child(2) { background: #197aa3; border-radius: 50%; }
.paper-example i:nth-child(3) { background: #e9b522; transform: rotate(12deg); }
.paper-example i:nth-child(4) { background: #409168; border-radius: 50%; }
.law-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; }
.law-layout h3 { font-size: clamp(20px, 2vw, 28px); margin-top: 0; }
.copy-text { background: #faf8ef; padding: 28px; border-left: 4px solid #1038ff; }
.law-layout p { font-size: clamp(19px, 1.8vw, 27px); }
.work-area { min-height: 250px; border: 1px solid #111; display: grid; place-items: center; padding: 24px; text-align: center; margin-bottom: 24px; }
.work-area span { max-width: 280px; color: #666; font-size: 18px; line-height: 1.6; }
@media (max-width: 700px) { .law-layout { grid-template-columns: 1fr; } }
.law-example { margin: 0; align-self: center; }
.law-example img { width: 100%; height: auto; display: block; }
.law-example figcaption { font-size: clamp(18px, 1.8vw, 26px); line-height: 1.5; margin-top: 20px; }
.proximity-paper { min-height: 280px; display: flex; justify-content: space-between; align-items: center; gap: 48px; padding: 28px; border: 1px solid #555; margin: 28px 0; }
.proximity-paper > div { display: grid; grid-template-columns: repeat(2, 34px); gap: 8px; }
.proximity-paper i { width: 34px; height: 34px; background: #ec593b; box-shadow: 2px 3px 3px #0002; transform: rotate(-2deg); }
.proximity-paper > div:nth-child(2) i { background: #218dac; }
</style>
