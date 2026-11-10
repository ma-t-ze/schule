<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
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
  busy.value = true; error.value = ''
  try {
    await document.fonts.ready
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    pdf.setProperties({ title: 'Farbe · Copic-Experimente' })
    const papers = container.value.querySelectorAll('.a4-paper')
    for (let i = 0; i < papers.length; i++) {
      const canvas = await html2canvas(papers[i], { scale: 2, backgroundColor: '#ffffff', onclone(doc) {
        doc.querySelectorAll('.a4-paper').forEach(p => { p.style.transform = 'none'; p.style.boxShadow = 'none' })
      } })
      if (i) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    }
    pdf.save('11_Farbe.pdf')
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>

<template>
  <main class="color-page">
    <div class="screen-only">
      <RouterLink to="/3tgg12">← Zur Themenübersicht</RouterLink>
      <h1>#11 Farbe</h1>
      <Button label="Als PDF herunterladen" :loading="busy" @click="downloadPdf" />
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
    </div>
    <div ref="container" class="papers">
      <div v-for="page in 3" :key="page" class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article class="a4-paper" :style="{ transform: `scale(${scale})` }" :aria-label="`Farbe – Arbeitsblatt ${page} von 3`">
          <header class="worksheet-header">
            <img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" />
            <h2>GESTALTUNGS- UND MEDIENTECHNIK</h2>
            <p>Eingangsklasse | CHS | Heckel</p>
          </header>
          <div class="worksheet-body" :class="{ 'properties-page': page === 2 }">
            <p class="eyebrow">#11 Farbe · Copic-Marker &amp; Skizzenbuch</p>
            <template v-if="page === 1">
              <h2>1. Farbwahrnehmung</h2>

              <h3>Wie entsteht Farbwahrnehmung?</h3>
              <p>Farbe entsteht im Zusammenspiel von Licht, Auge und Gehirn. Ein Markerstrich verändert, welche Anteile des auftreffenden Lichts das Papier zurückwirft.</p>
              <dl>
                <dt>Farbreiz</dt><dd>Das Licht, das ins Auge fällt. Bei deiner Zeichnung hängt es von der Beleuchtung, der Markerfarbe und dem Papier ab.</dd>
                <dt>Farbvalenz</dt><dd>Das Auge bewertet das einfallende Licht mit drei Zapfentypen, die auf unterschiedliche Wellenlängen reagieren. Ihr gemeinsames Antwortmuster bestimmt die Farbvalenz. Zum Beispiel können gelbes Licht und eine passende Mischung aus rotem und grünem Licht dieselbe Farbvalenz besitzen: Obwohl das Licht unterschiedlich zusammengesetzt ist, kann das Auge es beim direkten Vergleich unter gleichen Bedingungen nicht unterscheiden.</dd>
                <dt>Farbempfindung</dt><dd>Die Farbe, die du tatsächlich siehst: zum Beispiel ein helles, leuchtendes Gelb oder ein dunkles, stumpfes Gelb. Sie entsteht, wenn das Gehirn die Signale des Auges im Zusammenhang mit der Umgebung auswertet. Deshalb kann dasselbe gelbe Quadrat auf dunklem Grund heller wirken als auf hellem Grund – obwohl du denselben Marker verwendet hast.</dd>
              </dl>
              <div class="task">
                <h3>Aufgabe: Eine Farbe, viele Auftritte</h3>
              <p>Zeichne auf eine Doppelseite vier große Quadrate mit jeweils einem kleinen Quadrat in der Mitte – wie im Beispiel unten.</p>
              <p>Male alle kleinen Quadrate mit <strong>demselben Marker gleich oft</strong> aus. Färbe die Flächen darum mit unterschiedlichen Farben. Spare die kleinen Quadrate dabei aus.</p>
              <p>Vergleiche: Wo wirkt die Mitte heller, dunkler oder leuchtender? Notiere zwei Beobachtungen darunter.</p>
              </div>
              <p class="prompt">Wie unterschiedlich kannst du dieselbe Farbe aussehen lassen?</p>
              <div class="color-demo perception" aria-hidden="true"><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span></div>
            </template>
            <template v-else-if="page === 2">
              <h2>2. Farbeigenschaften</h2>

              <h3>Welche Eigenschaften beschreiben eine Farbe?</h3>
              <dl>
                <dt>Farbton</dt><dd>Die Farbrichtung, zum Beispiel Gelb, Rot, Blau oder ein Zwischenton wie Türkis.</dd>
                <dt>Helligkeit</dt><dd>Die Helligkeit beschreibt, wie hell oder dunkel eine Farbe erscheint.
                  <p><strong>Körperfarben:</strong> Mischst du einer Farbe weiße Pigmente bei, wird sie heller. Mischst du schwarze Pigmente hinzu, wird sie dunkler. Die Pigmente verändern, wie viel Licht die Oberfläche reflektiert.</p>
                  <p><strong>Lichtfarben:</strong> Die Helligkeit verändert sich mit der Lichtintensität. Je stärker eine Lichtquelle leuchtet, desto heller erscheint ihre Farbe.</p>
                </dd>
                <dt>Sättigung</dt><dd>Die Sättigung beschreibt, wie deutlich eine Farbe als bunt erscheint. Hohe Sättigung bedeutet eine kräftige Farbwirkung; geringe Sättigung bedeutet, dass sich die Farbe einem unbunten Ton nähert. <strong>Beispiel:</strong> Mischst du weißes Farbpulver mit rotem Farbpulver, wird die Mischung mit zunehmendem Rotanteil gesättigter.</dd>
              </dl>
              <figure class="hsv-example">
                <figcaption>
                  <strong>Beispiel: HSV-Farbraum als Farbzylinder</strong>
                  <ul>
                    <li><strong>Farbton (Hue):</strong> Der Winkel auf dem Farbkreis bestimmt den Farbton, beispielsweise Rot (0°), Gelb (60°) oder Blau (240°).</li>
                    <li><strong>Sättigung (Saturation):</strong> Der Abstand von der Mittelachse – innen unbunt, außen kräftig bunt.</li>
                    <li><strong>Hellwert (Value):</strong> Die vertikale Position – unten Schwarz (0 %), oben maximale Helligkeit (100 %).</li>
                  </ul>
                  <p>Farbton, Sättigung und Hellwert lassen sich im Modell getrennt einstellen.</p>
                </figcaption>
                <div class="hsv-image">
                  <img src="/3tgg12/farbe/hsv-farbzylinder.png" width="1600" height="1200" alt="Aufgeschnittener HSV-Farbzylinder: Farbton entlang des Umfangs, Sättigung von der unbunten Mittelachse zum bunten Rand und Hellwert von Schwarz unten zu maximalem Hellwert oben." />
                  <p class="hsv-source">Bild: <a href="https://commons.wikimedia.org/wiki/File:HSV_color_solid_cylinder_saturation_gray.png">SharkD · Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a></p>
                </div>
              </figure>
              <div class="task">
                <h3>Aufgabe: Dein Farblabor</h3>
                <p>Teile eine Seite in drei Felder ein. Gestalte in jedem Feld eine der folgenden Farbreihen:</p>
                <ol>
                  <li><strong>Farbton-Reise:</strong> Ordne mindestens sechs unterschiedliche Farbtöne zu einer Reihe an. Kombiniere sanfte Übergänge mit überraschenden Farbsprüngen.</li>
                  <li><strong>Hell–Dunkel:</strong> Gestalte innerhalb einer Farbfamilie mindestens fünf Helligkeitsstufen von hell bis dunkel. Nutze dafür helle und dunkle Marker. <strong>Tipp:</strong> Durch mehrmaliges Auftragen desselben Markers kannst du die Farbe schrittweise abdunkeln.</li>
                  <li><strong>Gesättigt–Ungesättigt:</strong> Gestalte ausgehend von einem Farbton mindestens fünf Abstufungen von kräftig und leuchtend bis graustichig. Nutze passende Graumarker oder überlagere die Farbe vorsichtig mit ihrer Gegenfarbe (Komplementärfarbe). Achte darauf, dass die Varianten möglichst ähnlich hell bleiben, damit du ihre Sättigung gut vergleichen kannst.</li>
                </ol>
                <p>Beschrifte die drei Felder mit „Farbton“, „Helligkeit“ und „Sättigung“.</p>
              </div>
            </template>
            <template v-else>
              <h2>3. Farbwirkung</h2>

              <h3>Was können Farben auslösen?</h3>
              <p><strong>Emotionale Wirkung:</strong> Farben können Stimmungen unterstützen, etwa Ruhe, Spannung, Freude oder Unbehagen. Dabei wirken Farbton, Helligkeit, Sättigung, Flächenanteile und Nachbarfarben zusammen.</p>
              <p><strong>Symbolische Wirkung:</strong> Farben können für etwas stehen. Rot kann beispielsweise Liebe, Gefahr oder ein Verbot bedeuten. Solche Zuordnungen werden gelernt und unterscheiden sich je nach Kultur und Zusammenhang.</p>
              <p>Es gibt deshalb keine feste Gleichung wie „Blau macht immer ruhig“. Entscheidend ist, wie du die Farben kombinierst und wo sie erscheinen.</p>
              <div class="task">
                <h3>Aufgabe: Eine Welt, zwei Stimmungen</h3>
                <p>Wähle ein einfaches Motiv: eine Stadt, einen Garten, ein Zimmer oder eine abstrakte Formenwelt. Zeichne es zweimal mit möglichst gleichen Formen auf eine Doppelseite.</p>
                <p>Gib den beiden Versionen mit Copic-Markern gegensätzliche Stimmungen, zum Beispiel <strong>geborgen und bedrohlich</strong>, <strong>still und explosiv</strong> oder <strong>verträumt und hektisch</strong>. Lass die Wirkung vor allem durch die Farben entstehen.</p>
              </div>

            </template>
          </div>
          <footer><span>3TGG1/2 · Gestaltungs- und Medientechnik</span><span>{{ page }} / 3</span></footer>
        </article>
      </div>
    </div>
    <p class="source">Fachlicher Hintergrund: <a href="https://www.ard.de/die-ard/Erlaeuterungen-zu-Farben-Farbraeume-und-Matching-fuer-unterschiedliche-Anwendungen-100.pdf" target="_blank" rel="noopener noreferrer">ARD · Farben und Farbräume</a></p>
  </main>
</template>

<style scoped>
.color-page { max-width: 1080px; margin: auto; padding: 32px; color: #202d32; font-family: 'Jost', sans-serif; }
a { color: #176746; }h1 { font-size: 28px; font-weight: 500; }
.papers { width: 100%; max-width: 210mm; }.paper-frame { margin: 24px 0; position: relative; }
.a4-paper { display: flex; flex-direction: column; width: 210mm; height: 297mm; padding: 10mm 12mm 8mm; box-sizing: border-box; transform-origin: top left; background: white; box-shadow: 0 2px 18px #0002; font-size: 14px; line-height: 1.5; }
.worksheet-header { text-align: center; border-bottom: 1px solid #abb3b5; padding-bottom: 13px; }.worksheet-header img { display: block; margin: 0 auto 9px; }.worksheet-header h2 { font-size: 15px; font-weight: 600; letter-spacing: .05em; margin: 0 0 3px; }.worksheet-header p { font-size: 12px; margin: 0; }
.worksheet-body { flex: 1; }.eyebrow { font-size: 11px; color: #56636a; margin: 20px 0 8px; }h2 { font-size: 27px; margin: 0 0 3px; }h3 { font-size: 17px; margin: 22px 0 8px; }p { margin: 8px 0 12px; }
dl { display: grid; grid-template-columns: 105px 1fr; gap: 12px 18px; margin: 18px 0 24px; }dt { font-weight: 600; }dd { margin: 0; } .task { border-top: 3px solid #47776b; margin-top: 24px; }.task h3 { margin-top: 14px; }ol { padding-left: 20px; }li { padding-left: 4px; margin: 12px 0; }.prompt { font-size: 18px; font-weight: 500; margin-top: 26px; }.marker-tip { font-size: 12px; color: #56636a; margin-top: 20px; }
.properties-page { font-size: 13px; line-height: 1.4; }
.properties-page h3 { margin-top: 16px; }
.properties-page dl { margin: 12px 0; gap: 9px 18px; }
.properties-page li { margin: 8px 0; }
.properties-page .task { margin-top: 16px; }
.properties-page .marker-tip { margin-top: 12px; }
.hsv-example { display: grid; grid-template-columns: 1fr 245px; align-items: center; gap: 16px; margin: 14px 0; font-size: 12px; }
.hsv-example ul { padding-left: 17px; margin: 8px 0; }
.hsv-example li { margin: 6px 0; }
.hsv-example img { display: block; width: 100%; height: auto; }
.hsv-source { font-size: 9px; margin: 0; }
.color-demo { display: flex; height: 65px; margin-top: 22px; }.color-demo span { flex: 1; }.perception { height: auto; gap: 12px; }.perception span { flex: 0 0 72px; height: 72px; }.perception span { display: grid; place-items: center; background: #e5e8dd; }.perception span:nth-child(2) { background: #273b49; }.perception span:nth-child(3) { background: #d86144; }.perception span:nth-child(4) { background: #3c6a62; }.perception i { width: 28px; height: 28px; background: #e7b453; }
.properties span:nth-child(1) { background: #f6cf57; }.properties span:nth-child(2) { background: #eb8650; }.properties span:nth-child(3) { background: #c94c66; }.properties span:nth-child(4) { background: #9d82b4; }.properties span:nth-child(5) { background: #697e9e; }.properties span:nth-child(6) { background: #465b69; }
.mood span:nth-child(1) { background: #e0d5ad; }.mood span:nth-child(2) { background: #9cbaa8; }.mood span:nth-child(3) { background: #6992a0; }.mood span:nth-child(4) { background: #292b48; }.mood span:nth-child(5) { background: #8d365e; }.mood span:nth-child(6) { background: #ee643d; }
footer { display: flex; justify-content: space-between; border-top: 1px solid #d3dad6; padding-top: 12px; font-size: 10px; }.source { font-size: 12px; }
@media(max-width:700px) { .color-page { padding: 16px; } }
</style>
