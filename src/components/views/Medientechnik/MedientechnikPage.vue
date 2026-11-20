<script setup>
defineProps({ level: { type: String, default: 'overview' } })
const lessons = [
  ['Neues Dokument: Format, Ausrichtung, Seitenanzahl, Ränder, Anschnitt', 'Dokument richtig anlegen'],
  ['Arbeitsoberfläche: Werkzeugleiste, Bedienfelder, Seitenbedienfeld, Zoom', 'Sich in InDesign orientieren'],
  ['Auswahlwerkzeuge: Auswahlwerkzeug, Direktauswahlwerkzeug', 'Objekte auswählen, verschieben und skalieren'],
  ['Rahmenwerkzeuge: Rechteckrahmen, Rechteck, Kontur, Fläche', 'Formen und Platzhalter erstellen'],
  ['Textrahmen: Textwerkzeug, Textrahmen erstellen und bearbeiten', 'Texte platzieren'],
  ['Textformatierung: Schriftart, Schriftgröße, Zeilenabstand, Ausrichtung, Laufweite', 'Texte lesbar gestalten'],
  ['Bilder platzieren: Platzieren, Bildrahmen, Einpassen, Zuschneiden', 'Bilder korrekt in Layouts einbauen'],
  ['Objekte anordnen: Ausrichten, Verteilen, Gruppieren, Ebenen', 'Saubere Kompositionen erstellen'],
  ['Gestaltungsraster: Hilfslinien, Spalten, Grundlinienraster', 'Systematische Layouts entwickeln'],
  ['Absatz- und Zeichenformate', 'Einheitliche Typografie effizient gestalten'],
  ['Mehrseitige Dokumente: Seiten hinzufügen, Musterseiten (übergeordnete Seiten), automatische Seitenzahlen', 'Broschüren aufbauen'],
  ['Textverkettung: Textrahmen verbinden, Textüberlauf', 'Längere Texte über mehrere Seiten verteilen'],
  ['Farben: Farbfelder, RGB, CMYK, Volltonfarben', 'Farben gezielt einsetzen'],
  ['Preflight und Verknüpfungen', 'Fehler und fehlende Bilder erkennen'],
  ['PDF-Export: Druck-PDF, Anschnitt, Schnittmarken, PDF für Bildschirm', 'Druckfähige und digitale Dokumente ausgeben']
]
</script>

<template>
  <main class="media-page" :class="{ 'overview-page': level === 'overview' }">
    <div class="page-shell">
      <nav class="breadcrumbs" aria-label="Seitennavigation">
        <RouterLink to="/">Schule</RouterLink>
        <template v-if="level !== 'overview'"><span aria-hidden="true">/</span><RouterLink to="/medientechnik">3BKGD1_1_MET</RouterLink></template>
        <template v-if="['lessons', 'mini'].includes(level)"><span aria-hidden="true">/</span><RouterLink to="/medientechnik/adobe-indesign">Adobe InDesign</RouterLink></template>
      </nav>
      <header>
        <p class="eyebrow">{{ level === 'overview' ? 'SCHULE' : 'MEDIENTECHNIK' }}</p>
        <h1>{{ level === 'overview' ? '3BKGD1_1_MET' : level === 'basics' ? 'Grundlagen' : level === 'indesign' ? 'Adobe InDesign' : level === 'mini' ? 'Mini Tutorials' : 'Übersicht Lerninhalte' }}</h1>
      </header>
      <div v-if="level === 'overview'" class="topic-list">
        <RouterLink class="topic-link basics-link" to="/medientechnik/grundlagen"><span>Grundlagen</span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link indesign-link" to="/medientechnik/adobe-indesign"><span>Adobe InDesign</span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link figma-link" to="/medientechnik/figma"><span>Figma</span><span aria-hidden="true">→</span></RouterLink>
      </div>
      <RouterLink v-else-if="level === 'basics'" class="topic-link" to="/medientechnik/grundlagen/imac"><span>iMac Grundlagen</span><span aria-hidden="true">→</span></RouterLink>
      <div v-else-if="level === 'indesign'" class="topic-list">
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/klassenarbeit-01"><span>Klassenarbeit 01</span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/probe-klassenarbeit"><span>Probe Klassenarbeit</span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/mini-tutorials"><span>Mini Tutorials</span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/lerninhalte"><span>Übersicht Lerninhalte</span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/typografisches-plakat/1"><span>1. Typografisches Plakat<small>1–6: Dokument anlegen, Textrahmen verwenden, Schrift gestalten und einfache Formen einsetzen.</small></span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/veranstaltungsflyer/1"><span>2. Veranstaltungsflyer<small>7–9: Bilder platzieren, beschneiden, Objekte ausrichten und Gestaltungsraster einsetzen.</small></span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/broschuere/1"><span>3. Magazinbroschüre RUMOR<small>Eine Broschüre Schritt für Schritt nachbauen: Cover, Innenseiten, Rückseite und PDF-Ausgabe.</small></span><span aria-hidden="true">→</span></RouterLink>
      </div>
      <div v-else-if="level === 'mini'" class="topic-list">
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/mini-tutorials/arbeitsoberflaeche-einrichten"><span>InDesign-Arbeitsoberfläche einrichten</span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/mini-tutorials/text-um-form"><span>Text um eine Form fließen lassen</span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/mini-tutorials/bild-und-rahmen"><span>Bilder skalieren und beschneiden – schwarzer und weißer Pfeil</span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/mini-tutorials/textrahmen-automatisch-anpassen"><span>Textrahmen automatisch an Text anpassen</span><span aria-hidden="true">→</span></RouterLink>
      </div>
      <section v-else aria-labelledby="learning-title">
        <h2 id="learning-title">Lernreihenfolge für InDesign</h2>
        <div class="table-scroll" tabindex="0" role="region" aria-labelledby="learning-title">
          <table>
            <thead><tr><th scope="col">Schritt</th><th scope="col">Funktionen und Werkzeuge</th><th scope="col">Lernziel</th></tr></thead>
            <tbody><tr v-for="(lesson, index) in lessons" :key="index"><th scope="row">{{ index + 1 }}</th><td>{{ lesson[0] }}</td><td>{{ lesson[1] }}</td></tr></tbody>
          </table>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
@import './mediaPage.css';
.overview-page { background: #f1f1f1; }
.topic-link.basics-link { background: #d9d9d9; border: 1px solid #bdbdbd; border-top: 4px solid #969696; color: #292929; }
.topic-link.basics-link:hover { background: #c8c8c8; }
.topic-link.figma-link { background: #fbd2cf; border: 1px solid #f2aaa6; border-top: 4px solid #ee7d7a; color: #361a1a; }
.topic-link.figma-link:hover { background: #f4aaa8; }
.topic-link.indesign-link { background: #f5d7e5; border: 1px solid #d8a5be; border-top: 4px solid #a02b62; color: #4b2034; }
.topic-link.indesign-link:hover { background: #ecc1d5; }
</style>
