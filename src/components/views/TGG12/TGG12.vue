<template>
  <main class="course-page">
    <h1>3TGG12</h1>
    <a class="qr-link" href="https://visualizer.matthiasheckel.com/3tgg12" aria-label="3TGG12-Übersicht öffnen">
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
