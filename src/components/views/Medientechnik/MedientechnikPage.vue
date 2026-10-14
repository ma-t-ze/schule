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
  <main class="media-page">
    <div class="page-shell">
      <nav class="breadcrumbs" aria-label="Seitennavigation">
        <RouterLink to="/">Schule</RouterLink>
        <template v-if="level !== 'overview'"><span aria-hidden="true">/</span><RouterLink to="/medientechnik">Medientechnik</RouterLink></template>
        <template v-if="level === 'lessons'"><span aria-hidden="true">/</span><RouterLink to="/medientechnik/adobe-indesign">Adobe InDesign</RouterLink></template>
      </nav>
      <header>
        <p class="eyebrow">{{ level === 'overview' ? 'SCHULE' : 'MEDIENTECHNIK' }}</p>
        <h1>{{ level === 'overview' ? 'Medientechnik' : level === 'indesign' ? 'Adobe InDesign' : 'Übersicht Lerninhalte' }}</h1>
      </header>
      <RouterLink v-if="level === 'overview'" class="topic-link" to="/medientechnik/adobe-indesign"><span>Adobe InDesign</span><span aria-hidden="true">→</span></RouterLink>
      <div v-else-if="level === 'indesign'" class="topic-list">
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/lerninhalte"><span>Übersicht Lerninhalte</span><span aria-hidden="true">→</span></RouterLink>
        <RouterLink class="topic-link" to="/medientechnik/adobe-indesign/typografisches-plakat/1"><span>1. Typografisches Plakat<small>Schritte 1–8: Dokument anlegen, Textrahmen verwenden, Schrift gestalten, einfache Formen einsetzen ein Plakat nach Vorlage nachbauen und ein eigenes Bauhaus-Plakat gestalten.</small></span><span aria-hidden="true">→</span></RouterLink>
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
.media-page { background: #f8f7f3; color: #202d32; min-height: 100vh; font-family: 'Jost', Arial, sans-serif; user-select: text; }
.media-page * { box-sizing: border-box; }
.page-shell { max-width: 1180px; padding: 32px 28px 64px; margin: auto; }
.breadcrumbs { display: flex; flex-wrap: wrap; gap: 12px; font-size: 14px; color: #435355; }
a { color: inherit; text-underline-offset: 4px; }
header { padding: 64px 0 36px; }
.eyebrow { font-size: 12px; letter-spacing: .14em; color: #526166; margin: 0 0 18px; }
h1 { font-size: clamp(36px, 6vw, 72px); line-height: 1.08; letter-spacing: -.04em; font-weight: 500; margin: 0; }
h2 { font-size: clamp(25px, 3vw, 36px); font-weight: 500; margin: 0 0 24px; }
.topic-link { display: flex; justify-content: space-between; align-items: center; gap: 24px; max-width: 680px; padding: 28px; background: white; border: 1px solid #dce0db; border-top: 4px solid #a02b62; border-radius: 16px; font-size: 24px; text-decoration: none; }
.topic-link:hover { background: #ffedf5; }
.topic-list { display: grid; gap: 20px; }
.topic-link small { display: block; font-size: 16px; line-height: 1.6; margin-top: 12px; color: #526166; }
:is(a,.table-scroll):focus-visible { outline: 3px solid #a02b62; outline-offset: 4px; }
.table-scroll { overflow-x: auto; border: 1px solid #dce0db; border-radius: 14px; background: white; }
table { border-collapse: collapse; width: 100%; min-width: 660px; line-height: 1.6; }
th,td { text-align: left; vertical-align: top; padding: 18px 20px; border-bottom: 1px solid #e3e7e1; }
thead { background: #ffedf5; color: #762048; }
tbody th { color: #a02b62; font-weight: 500; width: 90px; }
td:nth-child(2) { width: 55%; }
tbody tr:nth-child(even) { background: #f8f9f6; }
tbody tr:last-child :is(th,td) { border-bottom: 0; }
@media (max-width: 700px) { .page-shell { padding: 24px 20px 40px; }header { padding-top: 40px; }th,td { padding: 14px; }.topic-link { padding: 22px; font-size: 21px; } }
</style>
