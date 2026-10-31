<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Button from 'primevue/button'
import logo from './chs-logo.svg'
const props = defineProps({ step: { type: Number, required: true } })
const image = '/medientechnik/photoshop/Kopierstempel_Matschflecken.png'
const overview = '/1bfd1/medientechnik/adobe-photoshop'
const link = step => ({ name: '1bfd1-photoshop-kopierstempel-schritt', params: { step } })
const frame = ref(null)
const sheets = ref(null)
const heading = ref(null)
const scale = ref(1)
const exporting = ref(false)
const exportError = ref('')
const frameStyle = computed(() => ({ height: `${1123 * scale.value}px` }))
let observer
onMounted(() => {
  observer = new ResizeObserver(([entry]) => { scale.value = Math.min(1, entry.contentRect.width / 794) })
  observer.observe(frame.value)
})
onBeforeUnmount(() => observer?.disconnect())
watch(() => props.step, async () => { await nextTick(); heading.value?.focus() })
async function downloadPdf() {
  exporting.value = true; exportError.value = ''
  try {
    const { exportPhotoshopWorksheet } = await import('./exportPhotoshopWorksheet')
    await exportPhotoshopWorksheet([...sheets.value.querySelectorAll('.a4-page')])
  } catch { exportError.value = 'Die PDF konnte nicht erstellt werden. Bitte versuche es erneut.' }
  finally { exporting.value = false }
}
const pages = [
  { title: 'Arbeitsdatei anlegen, Zoomen und Scrollen', part: 'Teil 1 · Die beste Technik entdecken', minutes: 7 },
  { title: 'Die richtige Einstellung für den Kopierstempel finden', part: 'Teil 1 · Technik entdecken', minutes: 9 },
  { title: 'Steffi und den Helm retuschieren', part: 'Teil 2 · Einstellungen wählen und anwenden', minutes: 9 },
  { title: 'Kontrollieren und sichern', part: 'Teil 2 · Einstellungen wählen und anwenden', minutes: 3 }
]
</script>
<template>
  <main class="worksheet-view">
    <div class="screen-tools">
      <RouterLink :to="overview">← Adobe Photoshop</RouterLink>
      <h1 ref="heading" tabindex="-1">Retuschieren mit dem Kopierstempel-Werkzeug</h1>
      <p>Zwei Teile · 30 Minuten · vier A4-Hochformatseiten. Die PDF enthält alle Seiten in derselben Gestaltung.</p>
      <div class="tool-actions"><Button label="Arbeitsblatt als PDF" :loading="exporting" outlined @click="downloadPdf" /><Button as="a" :href="image" download="Kopierstempel_Matschflecken.png" label="Übungsbild herunterladen" text /></div>
      <p v-if="exportError" role="alert">{{ exportError }}</p>
      <nav class="page-nav" aria-label="Seiten des Arbeitsblatts"><RouterLink v-for="(page, index) in pages" :key="page.title" :to="link(index + 1)" :aria-current="step === index + 1 ? 'page' : undefined" :aria-label="`Seite ${index + 1}: ${page.title}`">{{ index + 1 }}</RouterLink></nav>
    </div>
    <div ref="frame" class="paper-frame" :style="frameStyle">
      <div ref="sheets" class="paper-stage" :style="{ transform: `scale(${scale})` }">
        <article v-for="(page, index) in pages" v-show="step === index + 1" :key="page.title" class="a4-page" :aria-label="`Arbeitsblatt Seite ${index + 1}`">
          <header class="sheet-header"><img :src="logo" width="128" height="44" alt="CHS Logo"><p class="subject">BF DRUCKTECHNIK MEDIENTECHNIK</p><p class="byline">Berufspraktische Kompetenz | CHS | Heckel</p></header>
          <div class="sheet-body">
            <p class="part">{{ page.part }} · {{ page.minutes }} Minuten</p>
            <h2 v-if="index !== 1 && index !== 2">{{ index === 0 ? 'Retuschieren mit dem Kopierstempel-Werkzeug' : `${index + 1}. ${page.title}` }}</h2>
                        <template v-if="index === 0">
              <h3>Schritt 1: Arbeitsdatei anlegen</h3><ol>
                <li>Erstelle auf dem Desktop einen Ordner mit deinem Namen.</li>
                <li>Lade das Übungsbild aus Teams herunter. Du findest es unter <strong>Heckel → 02 Photoshop Kopierstempel → Vorlage.png</strong>. Speichere es in deinem Namensordner und öffne es in Photoshop über <strong>Datei → Öffnen</strong>.</li>
                <li>Speichere eine Arbeitsdatei als <strong>Kopierstempel_Retusche.psd</strong> in deinem Namensordner. Das Original-PNG bleibt erhalten.</li>
                <li>Öffne <strong>Fenster → Ebenen</strong>. Erstelle über das Plus eine leere Ebene über dem Foto. Nenne sie <strong>„Retusche“</strong>.</li>
              </ol>
              <h3>Schritt 2: Zoomen und Scrollen</h3>
              <p>Unten sind zwei Wege zum Zoomen und Scrollen in Photoshop beschrieben. Teste beide aus und schreibe kurz auf, welche Variante deiner Meinung nach fürs Retuschieren besser geeignet ist.</p>
              <h4>Der einfache, aber beschwerliche Weg ohne Tastenkürzel</h4><ol>
                <li>Wähle das <strong>Lupensymbol</strong> in der Werkzeugleiste.</li>
                <li>Wähle oben die <strong>Lupe mit Plus</strong> zum Einzoomen oder die <strong>Lupe mit Minus</strong> zum Auszoomen. Klicke dann ins Bild.</li>
                <li>Verschiebe bei vergrößerter Ansicht den Ausschnitt mit den <strong>Balken am Rand der Arbeitsfläche</strong>: unten nach links und rechts, rechts nach oben und unten.</li>
              </ol>
              <h4>Der schnelle Weg mit Tastenkürzeln</h4><ol>
                <li>Halte die <strong>Optiontaste (⌥)</strong> gedrückt und drehe das <strong>Scrollrad</strong>, um hinein- oder herauszuzoomen.</li>
                <li>Halte die <strong>Leertaste</strong> gedrückt und ziehe mit <strong>gedrückter linker Maustaste</strong>, um die Ansicht zu verschieben. Lasse danach Maustaste und Leertaste los.</li>
              </ol>
              <div class="writing-lines" aria-label="Platz für deine Rückmeldung"><span></span><span></span><span></span><span></span><span></span></div>
            </template>
            <template v-else-if="index === 1">
              <h3>Schritt 3: Die richtige Einstellung für den Kopierstempel finden</h3>
              <ol>
                <li>Speichere über <strong>Datei → Speichern unter</strong> eine neue Datei <strong>„Kopierstempel Einstellungen.psd“</strong> in dem Ordner mit deinem Namen auf dem Schreibtisch.</li>
                <li>Wähle den <strong>Kopierstempel</strong> in der Werkzeugleiste. Stelle oben <strong>Größe: 20 px · Fluss: 100 % · Deckkraft: 100 %</strong> ein. Nutze <strong>Modus: Normal</strong>, <strong>Ausgerichtet: an</strong> und <strong>Aufnehmen: Aktuell</strong>. Wähle im Ebenenbedienfeld die <strong>Fotoebene</strong> aus, damit du von ihr Pixel aufnehmen kannst.</li>
                <li>Halte die <strong>Optiontaste (⌥)</strong> gedrückt und klicke auf eine saubere Hautstelle nahe am Fleck. Lasse die Taste los. Jetzt kannst du mit den aufgenommenen Pixeln den Fleck überdecken. Beobachte dabei das Quellenkreuz.</li>
              </ol>
              <p>Teste die folgenden Varianten am selben Matschfleck. Mache nach Variante 1 und 2 deine Stempelstriche mit <strong>⌘ + Z</strong> rückgängig, bis der Fleck wieder sichtbar ist. Nimm vor jeder Variante dieselbe saubere Quelle erneut auf.</p>
              <div class="variant"><h3>1. Härte 100 %</h3><p>Stelle in der Pinselwahl oben <strong>Härte: 100 %</strong> ein. Größe bleibt 20 px, Fluss und Deckkraft bleiben 100 %. Entferne den Fleck und beobachte den Rand.</p></div>
              <div class="variant"><h3>2. Härte 10 %</h3><p>Stelle <strong>Härte: 10 %</strong> ein. Größe bleibt 20 px, Fluss und Deckkraft bleiben 100 %. Entferne denselben Fleck und achte auf den Übergang zur umgebenden Haut.</p></div>
              <div class="variant"><h3>3. Zusätzlich Deckkraft 10 %</h3><p>Nutze <strong>20 px · Härte 10 % · Fluss 100 % · Deckkraft 10 %</strong>. Nimm eine Quelle auf und <strong>klicke mehrfach auf den Fleck</strong>. Lasse die Maustaste nach jedem Klick los. Wiederhole, bis der Fleck weg ist; nimm bei Bedarf eine neue Quelle auf.</p></div>
              <p>Was hast du beobachtet? Welche Variante hat deiner Meinung nach am besten funktioniert?</p>
              <div class="writing-lines"><span></span><span></span><span></span><span></span></div>
            </template>
            <template v-else-if="index === 2">
              <h3>Schritt 4: Steffi und den Helm retuschieren</h3>
              <p>Nutze deine Beobachtungen aus Teil 1: <strong>Wähle passende Einstellungen und begründe deine Wahl.</strong> Entferne anschließend die Matschflecken im Gesicht und am Helm. Passe deine Einstellungen an, wenn eine andere Stelle es erfordert.</p>
              <h3>So gehst du vor</h3><ol>
                <li>Wähle die leere Ebene <strong>„Retusche“</strong>. Prüfe: <strong>Aufnehmen → Aktuell und darunter</strong>. Übernimm deine gewählten Einstellungen.</li>
                <li><strong>Gesicht:</strong> Entferne die Matschflecken auf Wange und Kinn. Nimm häufig eine neue Quelle mit ähnlicher Helligkeit, Farbe und Hautstruktur auf. Arbeite in kleinen Schritten.</li>
                <li>Prüfe zwischendurch: Entstehen wiederholte Muster, helle Flecken oder auffällige Übergänge? Korrigiere Quelle und Einstellungen.</li>
              </ol>
              <p><strong>Speichere dein Ergebnis:</strong> Speichere die Photoshop-Datei mit Ebenen als <strong>Steffi_final.PSD</strong>. Exportiere zusätzlich über <strong>Datei → Exportieren → Exportieren als</strong> eine PNG-Datei namens <strong>Steffi final.png</strong>. Speichere beide Dateien im Ordner mit deinem Namen auf dem Desktop.</p>
            </template>
            <template v-else>
              <h3>Vorher und nachher vergleichen</h3><ol>
                <li>Blende „Retusche“ mit dem Augensymbol aus und wieder ein. Die Fotoebene bleibt eingeblendet.</li>
                <li>Prüfe Gesicht <strong>und</strong> Helm in der Detailansicht und als Gesamtbild. Die Matschflecken sollen entfernt sein; Form, Struktur und wichtige Details bleiben erhalten.</li>
              </ol>
              <h3>Ergebnischeck</h3><ul class="checklist"><li>Die Matschflecken im Gesicht sind entfernt.</li><li>Der Helm ist ebenfalls von Matsch befreit.</li><li>Hautstruktur, Gesichtszüge und Helmdetails sind erhalten.</li><li>Ich sehe keine auffälligen Stempelmuster oder Übergänge.</li><li>Das Originalbild ist unverändert erhalten.</li></ul>
              <h3>Speichern</h3><ol>
                <li>Speichere die Photoshop-Datei mit Ebenen als <strong>Steffi_final.PSD</strong> im Ordner mit deinem Namen auf dem Desktop.</li>
                <li>Exportiere über <strong>Datei → Exportieren → Exportieren als</strong> zusätzlich eine PNG-Datei namens <strong>Steffi final.png</strong> in denselben Ordner.</li>
              </ol>
              <h3>Kurze Rückmeldung</h3><p>Meine beste Einstellung war …, weil …</p><div class="writing-lines"><span></span><span></span></div><p>Am Helm musste ich besonders darauf achten, dass …</p><div class="writing-lines"><span></span><span></span></div>
            </template>
          </div>
          <footer class="sheet-footer"><span>Adobe Photoshop · Kopierstempel</span><span>{{ index + 1 }} / {{ pages.length }}</span></footer>
        </article>
      </div>
    </div>
    <nav class="screen-tools pager" aria-label="Vorwärts und zurück"><RouterLink v-if="step > 1" :to="link(step - 1)">← Zurück</RouterLink><RouterLink v-else :to="overview">← Zur Übersicht</RouterLink><span>{{ step }} / {{ pages.length }}</span><RouterLink v-if="step < pages.length" :to="link(step + 1)">Weiter →</RouterLink><RouterLink v-else :to="overview">Zur Übersicht →</RouterLink></nav>
  </main>
</template>
<style scoped>
.worksheet-view { background: #eeefed; color: #202d32; min-height: 100vh; padding: 24px 16px 48px; font-family: 'Jost', Arial, sans-serif; user-select: text; }
.screen-tools { max-width: 794px; margin: 0 auto 20px; }
.screen-tools h1 { font-size: clamp(25px, 4vw, 36px); line-height: 1.2; font-weight: 500; }
a { color: inherit; text-underline-offset: 4px; }
.tool-actions, .page-nav { display: flex; flex-wrap: wrap; gap: 10px; }
.tool-actions .p-button { text-decoration: none; }
.page-nav { margin-top: 20px; }
.page-nav a { display: grid; place-items: center; width: 40px; height: 40px; border: 1px solid #b6c0bd; border-radius: 8px; text-decoration: none; background: white; }
.page-nav a[aria-current] { background: #a02b62; color: white; border-color: #a02b62; }
.paper-frame { max-width: 794px; margin: auto; position: relative; overflow: hidden; }
.paper-stage { width: 794px; transform-origin: top left; }
.a4-page { display: flex; flex-direction: column; box-sizing: border-box; width: 794px; height: 1123px; padding: 38px 53px 30px; background: white; box-shadow: 0 2px 12px #00000012; font-size: 14px; line-height: 1.43; }
.sheet-header { text-align: center; border-bottom: 1px solid #abb3b5; padding-bottom: 13px; margin-bottom: 20px; }
.sheet-header img { display: block; width: 128px; height: 44px; margin: 0 auto 9px; }
.subject { font-size: 15px; font-weight: 600; letter-spacing: .05em; margin: 0 0 3px; }
.byline { font-size: 12px; margin: 0; }
.part { font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: #526166; margin-top: 0; }
h2 { font-size: 25px; line-height: 1.2; font-weight: 500; margin: 0 0 18px; }
h4 { font-size: 14px; margin: 14px 0 6px; font-weight: 600; }
h3 { font-size: 16px; line-height: 1.3; margin: 20px 0 8px; font-weight: 600; }
p { margin: 0 0 11px; }
.screen-tools p { margin: 12px 0; }
ol, ul { padding-left: 22px; margin: 8px 0 14px; }
li { margin-bottom: 8px; padding-left: 3px; }
.exercise-photo { display: block; width: 100%; height: 242px; object-fit: contain; margin: 14px 0 18px; }
.note, .task { background: #f1f3f2; border-left: 3px solid #7a8c86; padding: 12px 14px; margin-top: 16px; }
.task h3 { margin-top: 0; }
.task p { margin-bottom: 0; }
.variant { border-top: 1px solid #d3dad6; margin-top: 13px; }
.variant h3 { margin-top: 12px; }
.writing-lines span { display: block; height: 25px; border-bottom: 1px solid #a7b0ad; }
.checklist { list-style: none; padding-left: 0; }
.checklist li::before { content: '□'; margin-right: 10px; }
.sheet-footer { display: flex; justify-content: space-between; margin-top: auto; padding-top: 12px; border-top: 1px solid #d3dad6; font-size: 10px; }
.pager { display: flex; justify-content: space-between; align-items: center; margin-top: 20px; }
a:focus-visible, button:focus-visible { outline: 3px solid #a02b62; outline-offset: 3px; }
@page { size: A4 portrait; margin: 0; }
@media print {
  .worksheet-view { padding: 0; background: white; }
  .screen-tools { display: none; }
  .paper-frame { overflow: visible; height: auto !important; margin: 0; max-width: none; }
  .paper-stage { transform: none !important; }
  .a4-page { display: flex !important; box-shadow: none; break-after: page; page-break-after: always; }
  .a4-page:last-child { break-after: auto; page-break-after: auto; }
}
</style>
