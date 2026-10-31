<script setup>
defineProps({ level: { type: String, default: 'overview' } })
const base = '/1bfd1/medientechnik'
const lessons = [
  ['Bild öffnen und als PSD speichern', 'Original erhalten und bearbeitbare Arbeitsdatei anlegen'],
  ['Retusche und Ebenen', 'Störungen entfernen und auf einer eigenen Ebene arbeiten'],
  ['Kopierstempel: Quelle aufnehmen und übertragen', 'Matschflecken mit passender Bildstruktur ersetzen'],
  ['Pinselgröße, Härte, Deckkraft und Ausgerichtet', 'Einstellungen vergleichen und gezielt einsetzen'],
  ['Vorher–Nachher-Vergleich und Export', 'Retusche kontrollieren und das Ergebnis als Bild ausgeben']
]
</script>
<template>
  <main class="media-page"><div class="page-shell">
    <nav class="breadcrumbs" aria-label="Seitennavigation">
      <RouterLink to="/">Schule</RouterLink><span aria-hidden="true">/</span><RouterLink to="/1bfd1">1BFD1 BPK</RouterLink>
      <template v-if="level !== 'overview'"><span aria-hidden="true">/</span><RouterLink :to="base">Medientechnik</RouterLink></template>
      <template v-if="['mini', 'lessons'].includes(level)"><span aria-hidden="true">/</span><RouterLink :to="`${base}/adobe-photoshop`">Adobe Photoshop</RouterLink></template>
    </nav>
    <header><p class="eyebrow">1BFD1 BPK · MEDIENTECHNIK</p><h1>{{ level === 'overview' ? 'Medientechnik' : level === 'photoshop' ? 'Adobe Photoshop' : level === 'mini' ? 'Mini Tutorials' : 'Übersicht Lerninhalte' }}</h1></header>
    <div v-if="level === 'overview'" class="topic-list">
      <RouterLink class="topic-link" :to="`${base}/adobe-photoshop`"><span>Adobe Photoshop</span><span aria-hidden="true">→</span></RouterLink>
    </div>
    <div v-else-if="level === 'photoshop'" class="topic-list">
      <RouterLink class="topic-link" :to="`${base}/adobe-photoshop/mini-tutorials`"><span>Mini Tutorials</span><span aria-hidden="true">→</span></RouterLink>
      <RouterLink class="topic-link" :to="`${base}/adobe-photoshop/lerninhalte`"><span>Übersicht Lerninhalte</span><span aria-hidden="true">→</span></RouterLink>
      <RouterLink class="topic-link" :to="`${base}/adobe-photoshop/mini-tutorials/kopierstempel`"><span>1. Retuschieren mit dem Kopierstempel-Werkzeug<small>Matschflecken entfernen, Einstellungen ausprobieren und das Original erhalten · ca. 30 Minuten.</small></span><span aria-hidden="true">→</span></RouterLink>
    </div>
    <div v-else-if="level === 'mini'" class="topic-list">
      <RouterLink class="topic-link" :to="`${base}/adobe-photoshop/mini-tutorials/kopierstempel`"><span>Retuschieren mit dem Kopierstempel-Werkzeug</span><span aria-hidden="true">→</span></RouterLink>
    </div>
    <section v-else aria-labelledby="learning-title"><h2 id="learning-title">Lernreihenfolge für die erste Photoshop-Übung</h2>
      <div class="table-scroll" tabindex="0" role="region" aria-labelledby="learning-title"><table><thead><tr><th scope="col">Schritt</th><th scope="col">Funktionen und Werkzeuge</th><th scope="col">Lernziel</th></tr></thead><tbody><tr v-for="(lesson, index) in lessons" :key="index"><th scope="row">{{ index + 1 }}</th><td>{{ lesson[0] }}</td><td>{{ lesson[1] }}</td></tr></tbody></table></div>
    </section>
  </div></main>
</template>
<style scoped>
@import './mediaPage.css';
</style>
