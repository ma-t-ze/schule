<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'

const posters = ['D', 'A', 'B', 'C'].map(letter => ({ letter, image: `/material/3tgg12/plakatwettbewerb/plakat-${letter.toLowerCase()}.png`, pdf: `/material/3tgg12/plakatwettbewerb/plakat-${letter.toLowerCase()}.pdf` }))
const exampleSigns = {
  Ikon: 'Die abgebildeten Eintrittskarten ähneln echten Eintrittskarten.',
  Index: 'Ein eindeutiges grafisches Zeichen mit einem tatsächlichen Zusammenhang zum Bezeichneten ist hier nicht erkennbar.',
  Symbol: 'Die Eintrittskarte steht aufgrund einer erlernten Konvention für den Zugang zu einer Veranstaltung.'
}
const sampleSolutions = {
  A: { signs: { Ikon: 'Auge, Stuhl und Werkzeug sind erkennbar dargestellt und ähneln ihren jeweiligen Vorbildern.', Index: 'Ein unmittelbarer tatsächlicher Zusammenhang zum Bezeichneten ist in den gezeichneten Motiven nicht eindeutig erkennbar.', Symbol: 'Das Auge kann für einen Blickwinkel (Perspektive) stehen.' }, intention: 'Das Auge und der Stuhl könnten dazu einladen, Möbel und Schreinerhandwerk aus neuen Perspektiven zu betrachten.', interpretation: 'Das große Auge und die pinke Farbe könnten zunächst an Kosmetik oder eine Ausstellung über Wahrnehmung denken lassen. Der Stuhl im Auge ergibt in diesem Zusammenhang jedoch keinen Sinn.' },
  B: { signs: { Ikon: 'Die Zeichnung ähnelt Pumuckl: rote Haare, gelbes Oberteil und grüne Hose machen die Figur erkennbar.', Index: 'Kein Index sichtbar.', Symbol: 'Pumuckl steht durch erlerntes Wissen über die Geschichte für Meister Eders Schreinerei und kann Kindheitserinnerungen und Verspieltheit hervorrufen.' }, intention: 'Pumuckl könnte an Meister Eder und seine Schreinerei erinnern und das Handwerk durch eine vertraute Kindheitsfigur sympathisch und zugänglich machen.', interpretation: 'Wer Pumuckl erkennt, denkt vielleicht an Kindheit und Schreinerei; andere vermuten eine Kinderveranstaltung oder erkennen den Bezug zum Handwerk ohne Vorwissen nicht.' },
  C: { signs: { Ikon: 'Das zusammengefügte Motiv ähnelt einem Holzquerschnitt mit Jahresringen und einem Fingerabdruck.', Index: 'Jahresringe entstehen beim Wachstum; ein Fingerabdruck ist eine Berührungsspur. Die Grafik bildet diese Spuren ab.', Symbol: 'Der Fingerabdruck kann für Einzigartigkeit und persönliche Handschrift stehen, das Holz für das Schreinerhandwerk.' }, intention: 'Jahresringe und Fingerabdruck verbinden Werkstoff und Mensch: Jedes Stück Holz und jede handwerkliche Arbeit kann einzigartig sein.', interpretation: 'Das Motiv kann Individualität und handgefertigte Möbel vermitteln.' }
}
const solutions = ref(false)
const container = ref(null)
const pages = ref([])
const scale = ref(1)
const busy = ref(false)
const error = ref('')
let observer
onMounted(() => { observer = new ResizeObserver(() => { if (container.value && pages.value[0]) scale.value = Math.min(1, container.value.clientWidth / pages.value[0].offsetWidth) }); observer.observe(container.value) })
onBeforeUnmount(() => observer?.disconnect())
async function downloadPdf() {
  if (busy.value) return
  busy.value = true; error.value = ''
  try {
    await document.fonts.ready
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    for (let i = 0; i < pages.value.length; i++) {
      const canvas = await html2canvas(pages.value[i], { scale: 2, backgroundColor: '#fff', onclone(doc) { doc.querySelectorAll('.a4-paper').forEach(element => { element.style.transform = 'none'; element.style.boxShadow = 'none' }) } })
      if (i) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, 210, 297)
    }
    pdf.setProperties({ title: 'Plakatwettbewerb · Zeichenanalyse · 3TGG1/2' })
    pdf.save(`3TGG1_2_Plakatwettbewerb_Zeichenanalyse${solutions.value ? '_Loesung' : ''}.pdf`)
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>

<template>
  <main class="worksheet-page">
    <div class="screen-only">
      <RouterLink to="/">← Zur Startseite</RouterLink>
      <h1>Plakatwettbewerb · Zeichenanalyse</h1>
      <div class="actions"><Button :label="solutions ? 'Lösungen ausblenden' : 'Lösungen einblenden'" outlined :disabled="busy" :aria-pressed="solutions" @click="solutions = !solutions" /><Button :label="solutions ? 'Lösung als PDF speichern' : 'Arbeitsblatt als PDF speichern'" :loading="busy" @click="downloadPdf" /></div>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <p class="original-label">Plakate in Originalgröße öffnen:</p>
      <nav class="originals" aria-label="Originalplakate"><a v-for="poster in posters" :key="poster.letter" :href="poster.pdf">{{ poster.letter === 'D' ? 'Beispiel' : `Plakat ${poster.letter}` }}<span v-if="poster.letter === 'C'"> · drei Farbvarianten</span></a></nav>
      <p class="preview-label">Arbeitsblatt · 5 Seiten · DIN A4, Hochformat</p>
    </div>
    <div ref="container" class="paper-container">
      <div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article :ref="el => { if (el) pages[0] = el }" class="a4-paper" :style="{ transform: `scale(${scale})` }">
          <header class="worksheet-header"><img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo"><h2>GESTALTUNGS- UND MEDIENTECHNIK</h2><p>Eingangsklasse | CHS | Heckel</p></header>
          <div class="worksheet-body introduction">
            <h2>Plakatwettbewerb: Zeichen und Wirkung</h2>
            <p>Im vergangenen Jahr entwarfen Schülerinnen und Schüler des Technischen Gymnasiums Plakate für die Schreinerinnung. Die Plakate sollten für eine Ausstellung von Meister- und Gesellenstücken im Schreinerhandwerk werben. Vier Entwürfe aus dem Wettbewerb dienen als Grundlage für die Analyse.</p>
            <h3>Zeichen können mehrere Dimensionen haben</h3>
            <p>Ein Zeichen kann auf unterschiedliche Weise mit seinem Objekt verbunden sein. Es kann ihm <strong>ähneln</strong> (Ikon), durch einen <strong>tatsächlichen Zusammenhang</strong> auf es hinweisen (Index) oder durch eine <strong>erlernte Konvention</strong> für es stehen (Symbol). Dabei können mehrere dieser Dimensionen gleichzeitig zum Tragen kommen.</p>
            <p><strong>Beispiel:</strong> Anna sieht ein Plakat mit dem Titel <strong>„Schütze unsere Wälder vor Bränden!“</strong>. Darauf ist eine dunkle Rauchwolke abgebildet. Die Darstellung ist ein <strong>Ikon</strong> für Rauch, weil sie echtem Rauch ähnelt. Gleichzeitig nutzt der Designer Rauch als <strong>Index</strong> für Feuer, da zwischen Rauch und Verbrennung ein ursächlicher Zusammenhang besteht.</p>
            <p>Der Designer möchte auf die Gefahr von Waldbränden aufmerksam machen und zu verantwortungsvollem Verhalten aufrufen. Anna interpretiert die Rauchwolke jedoch zunächst als Hinweis auf Luftverschmutzung durch Fabriken. Ihr <strong>Interpretant</strong> weicht damit von der beabsichtigten Bedeutung des Designers ab.</p>
            <h3>Aufgaben</h3>
            <ol>
              <li><strong>Zeichen erkennen und zuordnen:</strong> Untersuche jedes Plakat. Welche grafischen Zeichen siehst du. Sind die Zeichen Ikone (Ähnlichkeit), Indizes (Zusammenhang) oder Symbole (erlernte Bedeutung) Begründe deine Zuordnung. Ein Zeichen kann mehrere Eigenschaften haben.</li>
              <li><strong>Absicht und Interpretation unterscheiden:</strong> Was wollte die gestaltende Person vermutlich ausdrücken? Könnten Betrachtende das Plakat auch anders verstehen?</li>
              <li><strong>Gewinner auswählen:</strong> Welches Plakat könnte den Wettbewerb gewonnen haben? Begründe deine Entscheidung.</li>
            </ol>
            <p class="hint">Plakat C liegt in drei Farbvarianten vor. Auf dem Arbeitsblatt ist die erste Variante abgebildet; alle Varianten sind im Original-PDF enthalten.</p>
          </div><footer class="worksheet-footer"><span>3TGG1/2 · Gestaltungs- und Medientechnik</span><span>1 / 5</span></footer>
        </article>
      </div>
      <div v-for="(poster, index) in posters" :key="poster.letter" class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article :ref="el => { if (el) pages[index + 1] = el }" class="a4-paper" :style="{ transform: `scale(${scale})` }">
          <header class="worksheet-header"><img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo"><h2>GESTALTUNGS- UND MEDIENTECHNIK</h2><p>Eingangsklasse | CHS | Heckel</p></header>
          <div class="worksheet-body analysis-page">
            <h2>{{ poster.letter === 'D' ? 'Beispiel' : `Plakat ${poster.letter}` }} · Zeichenanalyse</h2>
            <img class="analysis-poster" :src="poster.image" :alt="`Plakat ${poster.letter} zum Wettbewerb der Schreinerinnung`">
            <h3>1. Zeichen erkennen und zuordnen</h3>
            <p>Trage grafische Zeichen ein und begründe die Zuordnung. Ein Zeichen kann mehrere Eigenschaften haben; nicht jede Zeichenart muss vorkommen.</p>
            <table><thead><tr><th>Zeichenart</th><th>Grafisches Zeichen und Begründung</th></tr></thead><tbody><tr v-for="dimension in ['Ikon', 'Index', 'Symbol']" :key="dimension"><th>{{ dimension }}</th><td>{{ poster.letter === 'D' ? exampleSigns[dimension] : solutions ? sampleSolutions[poster.letter].signs[dimension] : '' }}</td></tr></tbody></table>
            <h3>2. Absicht und Interpretation unterscheiden</h3><p>Was wollte die gestaltende Person vermutlich ausdrücken? Wie könnten Betrachtende das Plakat anders verstehen?</p><div class="intention"><div><strong>Vermutete Absicht:</strong><p v-if="poster.letter === 'D'" class="example-answer">Die Eintrittskarten könnten zum Besuch einer Ausstellung mit Möbeln aus Holz und anderen Schreinerarbeiten einladen.</p><p v-else-if="solutions" class="example-answer">{{ sampleSolutions[poster.letter].intention }}</p><div v-else class="ruled" aria-hidden="true"></div></div><div><strong>Andere Interpretation:</strong><p v-if="poster.letter === 'D'" class="example-answer">Die Eintrittskarten könnten an eine Veranstaltung denken lassen, für die eine Karte gekauft werden muss, obwohl „Eintritt frei“ auf dem Plakat steht. Das Motiv der Eintrittskarten weckt zudem keine unmittelbare Vorstellung von Holz, Möbeln oder Schreinerhandwerk; dieser Bezug entsteht erst durch den Text.</p><p v-else-if="solutions" class="example-answer">{{ sampleSolutions[poster.letter].interpretation }}</p><div v-else class="ruled" aria-hidden="true"></div></div></div>
            <template v-if="index === posters.length - 1"><h3>3. Gewinner auswählen</h3><p>Welches Plakat könnte gewonnen haben? Begründe die Entscheidung.</p><p v-if="solutions" class="example-answer">Beispiel: Plakat C verbindet Holz und individuelle Handarbeit in einem einprägsamen Motiv. Auch andere begründete Entscheidungen sind möglich; das tatsächliche Wettbewerbsergebnis ist hier nicht bekannt.</p><div v-else class="ruled" aria-hidden="true"></div></template>
          </div><footer class="worksheet-footer"><span>3TGG1/2 · Gestaltungs- und Medientechnik</span><span>{{ index + 2 }} / 5</span></footer>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped>
.worksheet-page{max-width:1080px;margin:auto;padding:32px;color:#303030;font-family:Jost,sans-serif}.screen-only a{color:#444}.screen-only h1{font-size:30px;font-weight:500;margin:24px 0}.actions{display:flex;flex-wrap:wrap;gap:12px}.original-label{margin:24px 0 8px}.originals{display:flex;flex-wrap:wrap;gap:12px 24px}.preview-label{font-size:14px;color:#6b6b6b;margin:24px 0 16px}.paper-container{width:100%;max-width:210mm}.paper-frame{position:relative;overflow:hidden;margin-bottom:24px}.a4-paper{display:flex;flex-direction:column;width:210mm;height:297mm;padding:10mm 12mm 8mm;box-sizing:border-box;transform-origin:top left;background:#fff;color:#303030;box-shadow:0 2px 18px #0002;font-family:Jost,sans-serif}.worksheet-header{text-align:center;border-bottom:1px solid #b5b5b5;padding-bottom:13px}.worksheet-header img{display:block;width:128px;height:44px;margin:0 auto 9px}.worksheet-header h2{font-size:15px;font-weight:600;letter-spacing:.05em;line-height:1.4;margin:0 0 3px}.worksheet-header p{font-size:12px;margin:0}.worksheet-body{flex:1;padding-top:5mm;font-size:12px;line-height:1.43}.worksheet-body h2{font-size:24px;font-weight:500;line-height:1.15;margin:0 0 3mm;letter-spacing:-.03em}.worksheet-body h3{font-size:15px;margin:4mm 0 2mm}.worksheet-body p{margin:2mm 0}.introduction ol{padding-left:5mm;margin:2mm 0}.introduction li{margin-bottom:3mm}.hint{font-size:10px;color:#555}.analysis-poster{display:block;height:52mm;max-width:100%;object-fit:contain;object-position:left;margin:2mm 0 3mm}.analysis-page h2{font-size:20px}.analysis-page h3{font-size:13px;margin:2mm 0 1mm}.analysis-page p{font-size:11px;line-height:1.3;margin:1mm 0}.analysis-page table{width:100%;border-collapse:collapse;table-layout:fixed;margin-top:2mm}.analysis-page th,.analysis-page td{border:1px solid #aaa;padding:1.5mm;vertical-align:top;text-align:left}.analysis-page thead th{background:#eee;font-size:11px}.analysis-page th:first-child{width:24mm}.analysis-page tbody tr{height:15mm}.ruled{height:14mm;background:repeating-linear-gradient(to bottom,transparent 0,transparent calc(7mm - 1px),#bbb calc(7mm - 1px),#bbb 7mm)}.ruled.short{height:7mm}.intention{display:grid;grid-template-columns:1fr;gap:2mm;font-size:11px;margin-top:2mm}.intention .ruled{height:21mm}.worksheet-footer{display:flex;justify-content:space-between;padding-top:12px;border-top:1px solid #ddd;font-size:10px;color:#6b6b6b}@media(max-width:700px){.worksheet-page{padding:16px}}
</style>
