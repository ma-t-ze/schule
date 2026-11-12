<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
const solutions = ref(false)
const busy = ref(false)
const error = ref('')
const container = ref(null)
const scale = ref(1)
let observer
onMounted(() => {
  observer = new ResizeObserver(() => { scale.value = Math.min(1, container.value.clientWidth / 793.7) })
  observer.observe(container.value)
})
onBeforeUnmount(() => observer?.disconnect())
async function downloadPdf() {
  if (busy.value) return
  busy.value = true; error.value = ''
  try {
    await document.fonts.ready
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    pdf.setProperties({ title: `${solutions.value ? 'Lösungsschlüssel' : 'Klassenarbeit 01'} · 3TGG1/2` })
    const papers = container.value.querySelectorAll('.a4-paper')
    for (let i = 0; i < papers.length; i++) {
      const canvas = await html2canvas(papers[i], { scale: 2, backgroundColor: '#ffffff', onclone(doc) {
        doc.querySelectorAll('.a4-paper').forEach(p => { p.style.transform = 'none'; p.style.boxShadow = 'none' })
      } })
      if (i) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    }
    pdf.save(`3TGG1_2_Klassenarbeit_01${solutions.value ? '_Loesungen' : ''}.pdf`)
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>

<template><main class="design-template-page"><div class="screen-only"><RouterLink to="/">← Zur Startseite</RouterLink><h1>3TGG1/2 · Klassenarbeit 01</h1><p>Visuelle Gestaltung und Wahrnehmung · 40 Punkte</p><div class="actions"><Button :label="solutions ? 'Aufgaben anzeigen' : 'Lösungsschlüssel anzeigen'" outlined :disabled="busy" @click="solutions = !solutions" /><Button :label="solutions ? 'Lösungsschlüssel als PDF' : 'Aufgaben als PDF'" :loading="busy" @click="downloadPdf" /></div><Message v-if="error" severity="error" :closable="false">{{ error }}</Message><p class="preview-label">{{ solutions ? 'Lösungsschlüssel' : 'Aufgaben' }} · 3 Seiten · DIN A4</p></div><div ref="container" class="papers"><div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }"><article class="a4-paper" :style="{ transform: `scale(${scale})` }"><header class="worksheet-header"><img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" /><h2>GESTALTUNGS- UND MEDIENTECHNIK</h2><p>Eingangsklasse | CHS | Heckel</p></header><div class="worksheet-body page-1"><h2>Klassenarbeit 01</h2>
<div class="assessment"><span>Name: ___________________________</span><span>Punkte: ____ / 40</span><span>Note: ____</span></div>
<h3>1. Begriffe zuordnen <span>6 Punkte</span></h3>
<p>Trage den passenden Buchstaben ein. Jeder Begriff wird genau einmal verwendet. Je richtige Zuordnung: 1 Punkt.</p>
<p class="word-bank">A Absorption · B Reflexion · C Stäbchen · D Zäpfchen · E Netzhaut · F Sehnerv</p>
<table class="match-table"><thead><tr><th>Beschreibung</th><th>Buchstabe</th></tr></thead><tbody><tr><td>Licht wird von einem Gegenstand zurückgeworfen.</td><td class="solution-answer">{{ solutions ? 'B' : '' }}</td></tr><tr><td>Diese Sinneszellen ermöglichen das Hell-Dunkel-Sehen.</td><td class="solution-answer">{{ solutions ? 'C' : '' }}</td></tr><tr><td>Er leitet die Signale vom Auge zum Gehirn.</td><td class="solution-answer">{{ solutions ? 'F' : '' }}</td></tr><tr><td>Licht wird von einem Gegenstand aufgenommen.</td><td class="solution-answer">{{ solutions ? 'A' : '' }}</td></tr><tr><td>Diese Sinneszellen ermöglichen das Farbensehen.</td><td class="solution-answer">{{ solutions ? 'D' : '' }}</td></tr><tr><td>Auf ihr befinden sich die lichtempfindlichen Sinneszellen.</td><td class="solution-answer">{{ solutions ? 'E' : '' }}</td></tr></tbody></table><h3>2. Lückentext: Licht und Gestaltung <span>8 Punkte</span></h3>
<p>Ordne die Begriffe den Lücken zu. Verwende jeden Begriff genau einmal. Je richtige Lücke: 1 Punkt.</p>
<p class="word-bank">Rhythmus · Gehirn · Wellenlängen · Reduktion · elektrische · Komposition · elektromagnetischen · reflektierten</p><div class="cloze"><p>Licht besteht aus <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'elektromagnetischen' : '' }}</span> Wellen mit unterschiedlichen <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'Wellenlängen' : '' }}</span>. Die Farbe eines Gegenstands hängt von den <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'reflektierten' : '' }}</span> Wellenlängen ab. Sinneszellen wandeln Lichtreize in <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'elektrische' : '' }}</span> Signale um. Der bewusste Farbeindruck entsteht im <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'Gehirn' : '' }}</span>.</p><p>Die bewusste Anordnung gestalterischer Elemente heißt <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'Komposition' : '' }}</span>. Wiederholungen und Abstände erzeugen einen <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'Rhythmus' : '' }}</span>. Die Beschränkung auf das Wesentliche nennt man <span class="blank long-blank" :class="{ filled: solutions }">{{ solutions ? 'Reduktion' : '' }}</span>.</p></div><h3>3. Multiple Choice <span>6 Punkte</span></h3><p>Kreuze pro Frage genau eine Antwort an. Je richtige Antwort: 1 Punkt. Mehrere Kreuze ergeben für diese Frage 0 Punkte.</p><div class="compact-mc"><strong>a) Was gehört zu den grundlegenden Gestaltungselementen?</strong><div><span :class="{ 'solution-answer': solutions && true }">{{ solutions ? '☒' : '□' }} Punkt, Linie, Fläche und Raum</span><span :class="{ 'solution-answer': solutions && false }">□ Sehnerv, Netzhaut und Gehirn</span><span :class="{ 'solution-answer': solutions && false }">□ Absorption und Reflexion</span></div></div><div class="compact-mc"><strong>b) Was beschreibt Komposition?</strong><div><span :class="{ 'solution-answer': solutions && false }">□ Nur die Wahl einer Farbe</span><span :class="{ 'solution-answer': solutions && true }">{{ solutions ? '☒' : '□' }} Die bewusste Anordnung und das Zusammenspiel von Elementen</span><span :class="{ 'solution-answer': solutions && false }">□ Das Aufnehmen von Licht</span></div></div><div class="compact-mc"><strong>c) Wodurch entsteht visueller Rhythmus?</strong><div><span :class="{ 'solution-answer': solutions && false }">□ Nur durch identische Farben</span><span :class="{ 'solution-answer': solutions && false }">□ Durch das Weglassen aller Elemente</span><span :class="{ 'solution-answer': solutions && true }">{{ solutions ? '☒' : '□' }} Durch Wiederholung und Anordnung von Elementen</span></div></div><div class="compact-mc"><strong>d) Was bewirkt Reduktion?</strong><div><span :class="{ 'solution-answer': solutions && true }">{{ solutions ? '☒' : '□' }} Klarheit durch Beschränkung auf das Wesentliche</span><span :class="{ 'solution-answer': solutions && false }">□ Möglichst viele zusätzliche Details</span><span :class="{ 'solution-answer': solutions && false }">□ Immer eine unübersichtliche Gestaltung</span></div></div><div class="compact-mc"><strong>e) Was zeigen optische Täuschungen?</strong><div><span :class="{ 'solution-answer': solutions && false }">□ Das Auge nimmt kein Licht auf</span><span :class="{ 'solution-answer': solutions && true }">{{ solutions ? '☒' : '□' }} Das Gehirn interpretiert visuelle Informationen</span><span :class="{ 'solution-answer': solutions && false }">□ Wahrnehmung bildet die Wirklichkeit immer exakt ab</span></div></div><div class="compact-mc"><strong>f) Was kann die Wirkung einer Komposition beeinflussen?</strong><div><span :class="{ 'solution-answer': solutions && false }">□ Nur die Anzahl der Farben</span><span :class="{ 'solution-answer': solutions && false }">□ Nur das Papierformat</span><span :class="{ 'solution-answer': solutions && true }">{{ solutions ? '☒' : '□' }} Größe, Position, Ausrichtung und Gewichtung der Elemente</span></div></div></div><footer class="worksheet-footer"><span>3TGG1/2 · Klassenarbeit 01</span><span>1 / 3</span></footer></article></div><div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }"><article class="a4-paper" :style="{ transform: `scale(${scale})` }"><header class="worksheet-header"><img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" /><h2>GESTALTUNGS- UND MEDIENTECHNIK</h2><p>Eingangsklasse | CHS | Heckel</p></header><div class="worksheet-body page-2"><p>Name: __________________________________________</p><h2>Gestaltgesetze</h2><h3>4. Nenne und beschreibe 4 Gestaltgesetze. <span>12 Punkte</span></h3><p>Trage in jeden Abschnitt den Titel eines Gestaltgesetzes ein und beschreibe seine Wirkung in eigenen Worten. Verwende vier unterschiedliche Gesetze.</p><p>Je Gesetz: 1 Punkt für die richtige Benennung und 2 Punkte für eine fachlich richtige Beschreibung.</p><section class="law-answer"><h3>1. Gestaltgesetz</h3><div class="law-title">Titel Gestaltgesetz: <span class="solution-answer">{{ solutions ? 'Gesetz der Prägnanz' : '' }}</span></div><strong>Beschreibung:</strong><div class="law-description"><p v-if="solutions" class="solution-answer">Komplexe oder mehrdeutige Formen werden bevorzugt als einfache, klare und geordnete Gestalten wahrgenommen.</p></div></section><section class="law-answer"><h3>2. Gestaltgesetz</h3><div class="law-title">Titel Gestaltgesetz: <span class="solution-answer">{{ solutions ? 'Gesetz der Nähe' : '' }}</span></div><strong>Beschreibung:</strong><div class="law-description"><p v-if="solutions" class="solution-answer">Elemente mit geringem räumlichem Abstand werden als zusammengehörige Gruppe wahrgenommen.</p></div></section><section class="law-answer"><h3>3. Gestaltgesetz</h3><div class="law-title">Titel Gestaltgesetz: <span class="solution-answer">{{ solutions ? 'Gesetz der Ähnlichkeit (Gleichheit)' : '' }}</span></div><strong>Beschreibung:</strong><div class="law-description"><p v-if="solutions" class="solution-answer">Elemente mit ähnlicher Form, Farbe oder Größe werden als zusammengehörig wahrgenommen.</p></div></section><section class="law-answer"><h3>4. Gestaltgesetz</h3><div class="law-title">Titel Gestaltgesetz: <span class="solution-answer">{{ solutions ? 'Gesetz der Geschlossenheit' : '' }}</span></div><strong>Beschreibung:</strong><div class="law-description"><p v-if="solutions" class="solution-answer">Das Gehirn ergänzt fehlende Teile und nimmt auch unvollständige Formen als geschlossene Einheiten wahr.</p></div></section><p v-if="solutions" class="criteria">Die Reihenfolge ist frei. Sinngemäß richtige Beschreibungen und die Bezeichnung „Gesetz der guten Gestalt“ für Prägnanz werden anerkannt.</p></div><footer class="worksheet-footer"><span>3TGG1/2 · Klassenarbeit 01</span><span>2 / 3</span></footer></article></div><div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }"><article class="a4-paper" :style="{ transform: `scale(${scale})` }"><header class="worksheet-header"><img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" /><h2>GESTALTUNGS- UND MEDIENTECHNIK</h2><p>Eingangsklasse | CHS | Heckel</p></header><div class="worksheet-body page-3"><p>Name: __________________________________________</p><h2>Komposition und Stimmung</h2>
<h3>5. Gestalten mit Punkten <span>8 Punkte</span></h3>
<p>Gestalte zwei unterschiedliche Kompositionen frei Hand. Verwende ausschließlich Punkte. Setze Größe, Position und Abstände gezielt ein, um die jeweilige Stimmung zu vermitteln.</p>
<div class="composition-grid">
<section><h3>a) Leichtigkeit und Schweben</h3>
<div class="composition-box" aria-label="Zeichenfeld: Leichtigkeit und Schweben">
<svg v-if="solutions" viewBox="0 0 300 300" role="img" aria-label="Mögliche Lösung: kleine, locker verteilte Punkte mit viel freiem Raum"><g fill="#176746"><circle cx="55" cy="100" r="4" /><circle cx="115" cy="65" r="6" /><circle cx="190" cy="90" r="4" /><circle cx="245" cy="45" r="5" /><circle cx="85" cy="165" r="5" /><circle cx="165" cy="145" r="3" /><circle cx="240" cy="185" r="4" /><circle cx="140" cy="235" r="4" /></g></svg>
</div>
<p>Gestalte eine Komposition, die Leichtigkeit und Schweben vermittelt. Verwende dafür ausschließlich Punkte gleicher oder unterschiedlicher Größe.</p><p class="criteria">4 Punkte</p>
</section>
<section><h3>b) Schwere und Bedrängnis</h3>
<div class="composition-box" aria-label="Zeichenfeld: Schwere und Bedrängnis">
<svg v-if="solutions" viewBox="0 0 300 300" role="img" aria-label="Mögliche Lösung: große, dicht gedrängte Punkte im unteren Bildbereich"><g fill="#176746"><circle cx="43" cy="250" r="35" /><circle cx="117" cy="253" r="37" /><circle cx="194" cy="250" r="36" /><circle cx="266" cy="253" r="32" /><circle cx="77" cy="183" r="31" /><circle cx="146" cy="184" r="34" /><circle cx="217" cy="185" r="32" /><circle cx="118" cy="124" r="26" /><circle cx="177" cy="123" r="27" /></g></svg>
</div>
<p>Gestalte eine Komposition, die Schwere und Bedrängnis vermittelt. Verwende dafür ausschließlich Punkte gleicher oder unterschiedlicher Größe.</p><p class="criteria">4 Punkte</p>
</section>
</div>
<div class="drawing-criteria"><h3>Bewertung</h3>
<p>Je Komposition: ausschließlich Punkte (1 P), klar erkennbare geforderte Stimmung (3 P).</p>
</div>
<p v-if="solutions" class="solution-answer">Die Abbildungen zeigen mögliche Lösungen. Andere Punktkompositionen mit nachvollziehbarer Wirkung sind ebenso richtig. Leichtigkeit kann beispielsweise durch kleine, locker verteilte Punkte und viel freien Raum entstehen; Schwere und Bedrängnis durch große, dicht gedrängte Punkte und eine Gewichtung im unteren Bildbereich.</p></div><footer class="worksheet-footer"><span>3TGG1/2 · Klassenarbeit 01</span><span>3 / 3</span></footer></article></div></div></main></template>
<style scoped>
@font-face { font-family: 'ExamHeading'; src: url('../../../assets/fonts/Anton-Regular.ttf') format('truetype'); font-style: normal; font-weight: 400; font-display: swap; }
.design-template-page { max-width: 1080px; margin: auto; padding: 32px; color: #202d32; font-family: 'Jost', sans-serif; }
.design-template-page a { color: #176746; }
h1 { font-size: 28px; font-weight: 500; margin: 24px 0; }
.template-actions { display: flex; gap: 12px; margin: 20px 0; }
.preview-label { font-size: 14px; color: #647168; margin: 24px 0 12px; }
.papers { width: 100%; max-width: 210mm; }
.paper-frame { position: relative; }
.a4-paper { display: flex; flex-direction: column; width: 210mm; height: 297mm; padding: 10mm 12mm 8mm; box-sizing: border-box; transform-origin: top left; background: #fff; color: #202d32; box-shadow: 0 2px 18px #0002; font-family: 'Jost', sans-serif; }
.worksheet-header { text-align: center; border-bottom: 1px solid #abb3b5; padding-bottom: 13px; }
.worksheet-header img { display: block; width: 128px; height: 44px; margin: 0 auto 9px; }
.worksheet-header h2 { font-family: 'ExamHeading', sans-serif; font-size: 21px; font-weight: 400; letter-spacing: .025em; line-height: 1.25; color: #111; margin: 0 0 5px; }
.worksheet-header p { font-size: 12px; margin: 0; }
.worksheet-body { flex: 1; }
.worksheet-footer { display: flex; justify-content: space-between; gap: 12px; padding-top: 12px; border-top: 1px solid #d3dad6; font-size: 10px; }
@media (max-width: 700px) { .design-template-page { padding: 16px; } }

.papers { margin-top: 24px; }
.paper-frame { margin-bottom: 24px; }
.worksheet-body { padding-top: 14px; font-size: 12px; line-height: 1.4; }
.worksheet-body h2 { font-size: 22px; font-weight: 500; letter-spacing: -.02em; line-height: 1.2; color: #111; margin: 0 0 10px; }

.worksheet-body p { margin: 5px 0; }
.worksheet-body ul, .worksheet-body ol { margin: 6px 0; padding-left: 22px; }
.worksheet-body li { margin: 5px 0; padding-left: 3px; }
table { width: 100%; border-collapse: collapse; margin: 8px 0; }
th, td { border: 1px solid #d3dad6; padding: 4px 8px; text-align: left; }
@media print {
  .screen-only { display: none; }
  .design-template-page { padding: 0; }
  .papers { margin: 0; }
  .paper-frame { height: auto !important; margin: 0; break-after: page; }
  .paper-frame:last-child { break-after: auto; }
  .a4-paper { transform: none !important; box-shadow: none; }
}

.actions { display: flex; flex-wrap: wrap; gap: 12px; margin: 20px 0; }
.worksheet-body { font-size: 12px; line-height: 1.4; }
.worksheet-body h3 { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; font-size: 13px; font-weight: 500; line-height: 1.4; color: #111; margin: 10px 0 6px; }
.worksheet-body h3 span { white-space: nowrap; font-size: 11px; font-weight: 400; color: #555; font-variant-numeric: tabular-nums; }
.assessment { display: flex; justify-content: space-between; gap: 20px; margin: 14px 0; }
.assessment span:first-child { flex: 1; }
.instructions { padding: 9px 12px; background: #f1f2ef; }
.match-table td { height: 25px; }
.word-bank { border: 1px solid #abb3b5; padding: 8px; }
.cloze { line-height: 2.6; }
.mc { margin: 8px 0 9px; }
.mc p { margin: 3px 0; }
.answer-line { height: 25px; border-bottom: 1px solid #abb3b5; }
.drawing-box { height: 46mm; border: 1px solid #abb3b5; margin: 12px 0 5px; }
.criteria { color: #526257; font-size: 11px; }
.key-table td, .key-table th { padding: 5px; }
.worksheet-body .topic-heading { font-family: 'ExamHeading', sans-serif; font-size: 15px; font-weight: 400; text-transform: uppercase; letter-spacing: .045em; line-height: 1.25; color: #111; margin: 12px 0 8px; padding-bottom: 5px; border-bottom: 1px solid #111; }
.blank { display: inline-block; width: 108px; height: 20px; line-height: 20px; vertical-align: baseline; border-bottom: 1px solid #abb3b5; text-align: center; }
.long-blank { width: 156px; }
.solution-answer, .blank.filled { color: #176746; font-weight: 500; }
.dot-rhythm { display: flex; align-items: center; justify-content: center; height: 100%; padding: 0 20px; }
.dot-position { display: flex; align-items: center; justify-content: center; width: 48px; flex: 0 0 48px; }
.rhythm-dot { display: block; background: #176746; border-radius: 50%; }
@page { size: A4; margin: 0; }

.worksheet-header h2 { font-family: 'Jost', sans-serif; font-size: 15px; font-weight: 600; letter-spacing: .05em; }
.page-1 { font-size: 11px; line-height: 1.3; }
.page-1 h3 { margin: 9px 0 4px; }
.page-1 .match-table td { height: auto; padding: 4px 7px; }
.page-1 .word-bank { padding: 6px; }
.page-1 .cloze { line-height: 2.15; }
.page-1 .blank { width: 132px; height: 18px; font-size: 11px; }
.compact-mc { margin: 6px 0; }
.compact-mc div { display: flex; flex-wrap: wrap; column-gap: 12px; row-gap: 2px; margin-top: 2px; }
.law-answer { margin: 14px 0 0; }
.law-title { border-bottom: 1px solid #abb3b5; padding: 5px 0 9px; margin-bottom: 8px; min-height: 28px; }
.law-description { height: 23mm; background: repeating-linear-gradient(to bottom, transparent 0, transparent 25px, #d3dad6 25px, #d3dad6 26px); }
.law-description p { padding: 2px 6px; background: white; }
.composition-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12mm; margin-top: 15px; }
.composition-grid h3 { min-height: 22px; }
.composition-box { aspect-ratio: 1; border: 1.5px solid #202d32; margin: 10px 0 16px; }
.composition-box svg { display: block; width: 100%; height: 100%; }
.composition-grid p { font-size: 14px; line-height: 1.6; }
.drawing-criteria { margin-top: 20mm; padding: 12px; border: 1px solid #d3dad6; }
</style>
