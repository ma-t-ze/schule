<script setup>
defineProps({ level: { type: String, default: 'overview' } })
const lessons = [
  ['Figma und InDesign im Vergleich, Anmeldung mit der Schul-E-Mail-Adresse', 'Figma einordnen und sich mit dem Schulkonto anmelden'],
  ['Designdatei anlegen, Oberfläche und Navigation', 'Eine Datei erstellen und sich auf der Arbeitsfläche orientieren'],
  ['Frames: Bildschirmformate und eigene Größen', 'Einen Arbeitsbereich für ein Bildschirmdesign anlegen'],
  ['Formen, Füllungen, Konturen und Ecken', 'Einfache Gestaltungselemente erstellen'],
  ['Auswählen, verschieben, skalieren und duplizieren', 'Objekte gezielt bearbeiten'],
  ['Textwerkzeug und Typografie', 'Lesbare Überschriften und Texte gestalten'],
  ['Bilder einfügen, zuschneiden und anpassen', 'Bilder in ein Layout integrieren'],
  ['Ebenen, Reihenfolge, Gruppen und Benennung', 'Eine Datei übersichtlich organisieren'],
  ['Ausrichten, Abstände und Layout-Hilfen', 'Elemente präzise anordnen'],
  ['Farben, Kontraste und Gestaltungsregeln', 'Eine konsistente Farbgestaltung entwickeln'],
  ['Auto Layout: Abstände und Ausrichtung', 'Elemente flexibel zusammenstellen'],
  ['Komponenten und Instanzen', 'Wiederverwendbare Elemente erstellen'],
  ['Mehrere Ansichten und Seiten', 'Ein zusammenhängendes Bildschirmkonzept aufbauen'],
  ['Prototyping: Verbindungen und Interaktionen', 'Ansichten zu einem klickbaren Prototyp verbinden'],
  ['Präsentieren, testen und Feedback', 'Den Prototyp prüfen und verbessern'],
  ['Exportieren und Teilen', 'Gestaltungsergebnisse passend ausgeben und weitergeben']
]
</script>

<template>
  <main class="media-page"><div class="page-shell">
    <nav class="breadcrumbs" aria-label="Seitennavigation"><RouterLink to="/">Schule</RouterLink><span aria-hidden="true">/</span><RouterLink to="/medientechnik">3BKGD1_1_MET</RouterLink><template v-if="level === 'lessons'"><span aria-hidden="true">/</span><RouterLink to="/medientechnik/figma">Figma</RouterLink></template></nav>
    <header><p class="eyebrow">MEDIENTECHNIK</p><h1>{{ level === 'overview' ? 'Figma' : 'Übersicht Lerninhalte' }}</h1></header>
    <div v-if="level === 'overview'" class="topic-list">
      <RouterLink class="topic-link" to="/medientechnik/figma/lerninhalte"><span>Übersicht Lerninhalte<small>Figma für Anfängerinnen und Anfänger in 16 Schritten.</small></span><span aria-hidden="true">→</span></RouterLink>
      <RouterLink class="topic-link" to="/medientechnik/figma/tutorial/1"><span>1. Figma kennenlernen und anmelden<small>Figma einordnen und sich mit der Schul-E-Mail-Adresse anmelden.</small></span><span aria-hidden="true">→</span></RouterLink>
      <RouterLink class="topic-link" to="/medientechnik/figma/tutorial/2"><span>2. Designdatei, Oberfläche und Navigation<small>Teams und Ordner kennenlernen und eine Designdatei anlegen.</small></span><span aria-hidden="true">→</span></RouterLink>
    </div>
    <section v-else aria-labelledby="learning-title">
      <h2 id="learning-title">Lernreihenfolge für Figma</h2>
      <p>Das Tutorial entsteht Schritt für Schritt. Die ersten beiden Schritte sind bereits verfügbar.</p>
      <div class="table-scroll" tabindex="0" role="region" aria-labelledby="learning-title"><table>
        <thead><tr><th scope="col">Schritt</th><th scope="col">Funktionen und Werkzeuge</th><th scope="col">Lernziel</th></tr></thead>
        <tbody><tr v-for="(lesson, index) in lessons" :key="index"><th scope="row">{{ index + 1 }}</th><td><RouterLink v-if="index < 2" :to="`/medientechnik/figma/tutorial/${index + 1}`">{{ lesson[0] }}</RouterLink><template v-else>{{ lesson[0] }}</template></td><td>{{ lesson[1] }}</td></tr></tbody>
      </table></div>
    </section>
  </div></main>
</template>
<style scoped>
@import './mediaPage.css';
.media-page { background: #fff7f6; }
.eyebrow { color: #82413f; }
.topic-link { background: #ffe9e7; border-color: #f4b7b4; border-top-color: #ee7d7a; }
.topic-link:hover, thead { background: #fbd2cf; }
thead, tbody th { color: #703633; }
tbody tr:nth-child(even) { background: #fff4f2; }
.table-scroll { border-color: #f1c3c0; }
:is(a,.table-scroll):focus-visible { outline-color: #a34b48; }
</style>
