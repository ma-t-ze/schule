<template>
  <main class="course-page">
    <h1>3TGG1/2</h1>
    <a class="qr-link" href="https://visualizer.matthiasheckel.com/3tgg12" aria-label="3TGG1/2-Übersicht öffnen">
      <img src="/3tgg12/qr-code.svg" width="240" height="240" alt="QR-Code zur Seite https://visualizer.matthiasheckel.com/3tgg12" />
    </a>
    <nav class="topic-links" aria-label="Unterrichtsthemen">
      <router-link class="topic-link" :to="{ name: '3tgg12-punkt-und-linie' }">
        #1 Visuelle Kommunikation mit Punkt und Linie
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-punktportraits' }">
        #2 Visuelle Kommunikation: der Punkt und Punktportraits
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-linienportraits' }">
        #3 Visuelle Kommunikation: die Linie und Linienportraits
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-flaechenportraits' }">
        #4 Visuelle Kommunikation: Die Fläche und Flächenportraits
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-sehvorgang' }">
        #5 Visuelle Kommunikation: Sehvorgang
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-andere-geschichte-farbensehen' }">
        #6 Visuelle Kommunikation: Eine andere Geschichte des Farbensehens
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-gestaltgesetze' }">
        #7 Gestaltgesetze
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-rueckblick' }">
        #8 Rückblick
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-semiotik' }">
        #9 Semiotik Einführung
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-semiotische-analyse' }">
        #10 Semiotische Analyse
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-farbe' }">
        #11 Farbe
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-helligkeit-und-saettigung' }">
        #12 Helligkeit und Sättigung
      </router-link>
      <router-link class="topic-link" :to="{ name: '3tgg12-projektion-schritt', params: { step: 1 } }">#13 Projektion nach DIN ISO 5456</router-link>
      <a class="topic-link" href="/material/3tgg12/3TGG1_2_Zeichen_Objekt_Interpretant.pdf">#14 Zeichen_Objekt_Interpretant</a>
      <a class="topic-link" href="/material/3tgg12/3TGG1_2_Ikon_Index_Symbol.pdf">#15 Ikon, Index und Symbol</a>
      <a class="topic-link" href="/material/3tgg12/3TGG1_2_Plakatwettbewerb_Zeichenanalyse.pdf">#16 Plakatwettbewerb Zeichenanalyse</a>
    </nav>
  </main>
</template>

<style scoped lang="scss">
@import './style.scss';


.qr-link {
  display: block;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto 32px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  &:focus-visible {
    outline: 3px solid #555;
    outline-offset: 5px;
  }
}
</style>
