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
async function downloadPdf(expectations = false) {
  exporting.value = true; exportError.value = ''
  try {
    const { exportPhotoshopWorksheet } = await import('./exportPhotoshopWorksheet')
    await exportPhotoshopWorksheet([...sheets.value.querySelectorAll('.a4-page')], { expectations })
  } catch { exportError.value = 'Die PDF konnte nicht erstellt werden. Bitte versuche es erneut.' }
  finally { exporting.value = false }
}
const pages = [
  { title: 'Arbeitsdatei anlegen, Zoomen und Scrollen', part: 'Teil 1 · Die beste Technik entdecken' },
  { title: 'Die richtige Größe und Härte für den Kopierstempel finden', part: 'Teil 1 · Die beste Technik entdecken' },
  { title: 'Marlene retuschieren', part: 'Teil 2 · Das Gelernte anwenden' },
  { title: 'Zusatzaufgaben: Helm, Deckkraft und Fluss', part: 'Zusatzaufgaben · Für Schnelle' },
  { title: 'Ein Schwarz-Weiß-Porträt restaurieren', part: 'Zusatzaufgabe · Bildrestaurierung' }
]
</script>
<template>
  <main class="worksheet-view">
    <div class="screen-tools">
      <RouterLink :to="overview">← Adobe Photoshop</RouterLink>
      <h1 ref="heading" tabindex="-1">Retuschieren mit dem Kopierstempel-Werkzeug</h1>
      <p>Zwei Teile · drei A4-Hochformatseiten und zwei Extrablätter mit Zusatzaufgaben. Die PDF enthält alle Seiten in derselben Gestaltung.</p>
      <div class="tool-actions"><Button label="Arbeitsblatt als PDF" :loading="exporting" outlined @click="downloadPdf(false)" /><Button label="Mit Erwartungshorizont als PDF" :loading="exporting" outlined @click="downloadPdf(true)" /><Button as="a" :href="image" download="Kopierstempel_Matschflecken.png" label="Übungsbild herunterladen" text /></div>
      <p v-if="exportError" role="alert">{{ exportError }}</p>
      <nav class="page-nav" aria-label="Seiten des Arbeitsblatts"><RouterLink v-for="(page, index) in pages" :key="page.title" :to="link(index + 1)" :aria-current="step === index + 1 ? 'page' : undefined" :aria-label="`Seite ${index + 1}: ${page.title}`">{{ index + 1 }}</RouterLink></nav>
    </div>
    <div ref="frame" class="paper-frame" :style="frameStyle">
      <div ref="sheets" class="paper-stage" :style="{ transform: `scale(${scale})` }">
        <article v-for="(page, index) in pages" v-show="step === index + 1" :key="page.title" class="a4-page" :aria-label="`Arbeitsblatt Seite ${index + 1}`">
          <header class="sheet-header"><img :src="logo" width="128" height="44" alt="CHS Logo"><p class="subject">BF DRUCKTECHNIK MEDIENTECHNIK</p><p class="byline">Berufspraktische Kompetenz | CHS | Heckel</p></header>
          <div class="sheet-body">
            <p class="part">{{ page.part }}</p>
            <h2 v-if="index === 0">{{ index === 0 ? 'Retuschieren mit dem Kopierstempel-Werkzeug' : `${index + 1}. ${page.title}` }}</h2>
                        <template v-if="index === 0">
              <h3>Schritt 1: Arbeitsdatei anlegen</h3><ol>
                <li>Erstelle auf dem Desktop einen Ordner mit deinem Namen.</li>
                <li>Lade das Übungsbild aus Teams herunter. Du findest es unter <strong>Heckel → 02 Photoshop Kopierstempel → Vorlage.png</strong>. Speichere es in deinem Namensordner und öffne es in Photoshop über <strong>Datei → Öffnen</strong>.</li>
                <li>Speichere eine Arbeitsdatei als <strong>Kopierstempel_Retusche.psd</strong> in deinem Namensordner.</li>
              </ol>
              <h3>Schritt 2: Das Arbeitsprinzip üben – nah heranzoomen zum Bearbeiten und weit herauszoomen zum Überprüfen</h3>
              <h4>Der einfache, aber beschwerliche Weg ohne Tastenkürzel</h4><ol>
                <li class="icon-step"><div class="icon-instruction" data-step="1"><span>Wähle das <strong>Lupensymbol</strong> in der Werkzeugleiste links.</span><img class="tool-icon" src="/medientechnik/photoshop/Lupensymbol.png" width="46" height="31" alt="Lupensymbol in der Photoshop-Werkzeugleiste"></div></li>
                <li>Wähle oben die <strong>Lupe mit Plus</strong> zum Einzoomen oder die <strong>Lupe mit Minus</strong> zum Auszoomen. Klicke dann ins Bild. <img class="zoom-controls" src="/medientechnik/photoshop/Lupe_Plus_Minus.png" width="140" height="74" alt="Photoshop: Lupe mit Plus und Lupe mit Minus"></li>
                <li>Verschiebe bei vergrößerter Ansicht den Ausschnitt mit den <strong>Balken am Rand der Arbeitsfläche</strong>: unten nach links und rechts, rechts nach oben und unten.</li>
              </ol>
              <h4>Der schnelle Weg mit Tastenkürzeln</h4><ol>
                <li>Halte die <strong>Optiontaste (⌥)</strong> gedrückt und drehe das <strong>Scrollrad</strong>, um hinein- oder herauszuzoomen.</li>
                <li>Halte die <strong>Leertaste</strong> gedrückt und ziehe mit <strong>gedrückter linker Maustaste</strong>, um die Ansicht zu verschieben. Lasse danach Maustaste und Leertaste los.</li>
              </ol>
            </template>
            <template v-else-if="index === 1">
              <h3>Schritt 3: Die richtige Größe und Härte für den Kopierstempel finden</h3>
              <ol>
                <li>Speichere über <strong>Datei → Speichern unter</strong> eine neue Datei <strong>„Kopierstempel Einstellungen.psd“</strong> in dem Ordner mit deinem Namen auf dem Schreibtisch.</li>
                <li class="icon-step"><div class="icon-instruction" data-step="2"><span>Wähle den <strong>Kopierstempel</strong> in der Werkzeugleiste.</span><img class="tool-icon" src="/medientechnik/photoshop/Kopierstempel_Symbol.png" width="46" height="35" alt="Kopierstempel-Symbol in der Photoshop-Werkzeugleiste"></div></li>
                <li class="icon-step"><div class="icon-instruction" data-step="3"><span>Wähle das Symbol für <strong>„Auswahl für Pinselvorgaben“</strong> und gib dort eine <strong>Größe von 30 px</strong> und eine <strong>Härte von 100 %</strong> ein.</span><img class="tool-icon" src="/medientechnik/photoshop/Pinselvorgaben_Symbol.png" width="46" height="39" alt="Auswahl für Pinselvorgaben in Photoshop mit Größe 30 px"></div>
              <p><strong>Hinweis:</strong> Bitte überprüfe kurz, ob bei den übrigen Einstellungen die Standardeinstellungen eingestellt sind.</p>
              <img class="settings-screenshot" src="/medientechnik/photoshop/Kopierstempel_Standardeinstellungen.png" width="1608" height="88" alt="Kopierstempel-Optionen: Modus Normal, Deckkraft 100 %, Fluss 100 %, Winkel 0°, Ausgerichtet aktiviert und Aufnehmen: Aktuelle Ebene.">
                </li>
                <li>Halte die <strong>Optiontaste (⌥)</strong> gedrückt und klicke auf eine saubere Hautstelle nahe an einem Matschfleck. Lasse die Taste los.</li>
                <li>Klicke jetzt auf den Matschfleck.</li>
              </ol>

              <p><strong>Kurze Reflexion:</strong> Was habt ihr beobachtet? Fällt die Bearbeitung auf?</p>
              <div class="writing-lines" aria-label="Platz für eure Reflexion"><span v-for="line in 8" :key="line"></span></div>
              <ol start="6" class="settings-task">
                <li>Reduziere nun die Härte deines Pinsels auf einen Wert zwischen 10-30 % und passe die Größe nach Bedarf an, um deiner Meinung nach das beste Ergebnis zu erreichen. Notiere die Einstellungen für <strong>Größe und Härte</strong> und begründe deine Entscheidung.</li>
              </ol>
              <div class="writing-lines" aria-label="Platz für die Einstellungen für Größe und Härte"><span></span><span></span><span></span></div>
            </template>
            <template v-else-if="index === 2">
              <h3>Schritt 4: Marlene retuschieren</h3>
              <ol>
                <li>Schließe <strong>„Kopierstempel Einstellungen.psd“</strong> und öffne die Datei <strong>Kopierstempel_Retusche.psd</strong>.</li>
                <li><strong>Gesicht:</strong> Entferne die Matschflecken im Gesicht mit den Erfahrungen und Einstellungen aus Schritt 3. Zoome zum Bearbeiten nah an die Haut heran und zum Prüfen der Wirkung wieder heraus.</li>
                <li>Speichere die PSD-Datei als <strong>Kopierstempel_Retusche.psd</strong> in deinem Namensordner.</li>
                <li>Lade den Ordner mit deinem Namen in den Abgabeordner <strong>Heckel → 02 Photoshop Kopierstempel → Abgabeordner</strong> hoch.</li>
              </ol>
              <p><strong>Kurze Reflexion:</strong> Welche Art zu zoomen habt ihr benutzt? Was ist euch schwergefallen, was war einfach?</p>
              <div class="writing-lines" aria-label="Platz für eure Reflexion zu Schritt 4"><span v-for="line in 8" :key="line"></span></div>
            </template>
            <template v-else-if="index === 3">
              <h3>Zusatzaufgabe · Schritt 5: Den Helm retuschieren</h3>
              <p>Falls du schnell bist und das Gesicht fertig hast, retuschiere zusätzlich den Helm in <strong>Kopierstempel_Retusche.psd</strong>.</p>
              <ol>
                <li>Speichere die Datei und lade die aktualisierte Version in deinen Namensordner im Abgabeordner auf Teams hoch.</li>
              </ol>
              <h3>Zusatzaufgabe · Schritt 6: Mit Deckkraft und Fluss experimentieren</h3>
              <ol>
                <li>Öffne wieder <strong>„Kopierstempel Einstellungen.psd“</strong>. Wähle den Kopierstempel und nimm mit der <strong>Optiontaste (⌥)</strong> eine saubere Quelle nahe an einem Matschfleck auf.</li>
                <li>Teste <strong>Deckkraft: 20 % · Fluss: 100 %</strong>. Ziehe mit gedrückter Maustaste mehrmals über den Fleck. Lasse danach die Maustaste los und setze erneut an. Was verändert sich?</li>
                <li>Mache den Versuch mit <strong>⌘ + Z</strong> rückgängig. Teste am selben Fleck <strong>Deckkraft: 100 % · Fluss: 20 %</strong>. Bewege die Maus bei gedrückter Taste mehrmals hin und her.</li>
              </ol>
              <h4>Was ist der Unterschied?</h4>
              <p><strong>Deckkraft</strong> begrenzt die Stärke eines gesamten Pinselstrichs. Bei niedriger Deckkraft scheint das ursprüngliche Bild durch. Erst wenn du die Maustaste loslässt und neu ansetzt, kannst du die Wirkung weiter aufbauen.</p>
              <p><strong>Fluss</strong> bestimmt, wie viel pro Pinselabdruck aufgetragen wird. Bei niedrigem Fluss baut sich die Wirkung durch wiederholtes Überstreichen langsam auf – auch ohne die Maustaste loszulassen, bis zur eingestellten Deckkraft.</p>
              <p><strong>Kurze Reflexion:</strong> Was hast du beobachtet? Erzielst du bessere Ergebnisse, wenn du den Fluss oder die Deckkraft reduzierst? Begründe deine Einschätzung.</p>
              <div class="writing-lines" aria-label="Platz für deine Reflexion zu Fluss und Deckkraft"><span v-for="line in 8" :key="line"></span></div>
            </template>
            <template v-else-if="index === 4">
              <h3>Zusatzaufgabe · Schritt 7: Ein Schwarz-Weiß-Porträt restaurieren</h3>
              <p>Ein altes Schwarz-Weiß-Porträt ist durch Risse beschädigt. Entferne die Risse mit dem <strong>Kopierstempel</strong>. Erhalte dabei die Gesichtszüge, die feine Bildstruktur und die unterschiedlichen Grautöne.</p>
              <ol>
                <li>Öffne das von der Lehrkraft bereitgestellte Schwarz-Weiß-Porträt in Photoshop.</li>
                <li>Speichere es über <strong>Datei → Speichern unter</strong> als <strong>Kopierstempel_Portraet_Restaurierung.psd</strong> in deinem Namensordner auf dem Desktop.</li>
                <li>Entferne die Risse mit dem Kopierstempel und speichere das retuschierte Bild.</li>
              </ol>
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
.zoom-controls { display: block; width: 112px; height: auto; margin-top: 8px; }
.icon-step { list-style: none; }
.icon-instruction { display: grid; grid-template-columns: minmax(0, 1fr) 46px; align-items: center; gap: 6px; position: relative; }
.icon-instruction::before { content: attr(data-step) "."; position: absolute; right: calc(100% + 6px); }
.icon-instruction[data-step="3"]::before { top: 0; }
.tool-icon { display: block; width: 46px; height: auto; }
.settings-screenshot { display: block; width: 100%; height: auto; margin: 0 0 14px; }
.exercise-photo { display: block; width: 100%; height: 242px; object-fit: contain; margin: 14px 0 18px; }
.note, .task { background: #f1f3f2; border-left: 3px solid #7a8c86; padding: 12px 14px; margin-top: 16px; }
.task h3 { margin-top: 0; }
.task p { margin-bottom: 0; }
.variant { border-top: 1px solid #d3dad6; margin-top: 13px; }
.variant h3 { margin-top: 12px; }
.settings-task { margin-top: 30px; }
.writing-lines { background: #f2f2f2; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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
