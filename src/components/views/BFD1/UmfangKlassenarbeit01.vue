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
  if (busy.value) return
  busy.value = true; error.value = ''
  try {
    await document.fonts.ready
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    pdf.setProperties({ title: 'Umfang Klassenarbeit 01 · 1BFD1 BPK' })
    const papers = container.value.querySelectorAll('.a4-paper')
    for (let i = 0; i < papers.length; i++) {
      const canvas = await html2canvas(papers[i], { scale: 2, backgroundColor: '#ffffff', onclone(doc) {
        doc.querySelectorAll('.a4-paper').forEach(p => { p.style.transform = 'none'; p.style.boxShadow = 'none' })
      } })
      if (i) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    }
    pdf.save('Umfang_Klassenarbeit_01_1BFD1_BPK.pdf')
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>

<template>
  <main class="design-template-page">
    <div class="screen-only">
      <RouterLink to="/">← Zur Startseite</RouterLink>
      <h1>Umfang Klassenarbeit 01</h1>
      <Button label="Als PDF herunterladen" :loading="busy" @click="downloadPdf" />
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
    </div>
    <div ref="container" class="papers">
      <div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article class="a4-paper" :style="{ transform: `scale(${scale})` }">
          <header class="worksheet-header">
            <img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" />
            <h2>BF DRUCKTECHNIK MEDIENTECHNIK</h2>
            <p>Berufspraktische Kompetenz | CHS</p>
          </header>
          <div class="worksheet-body">
            <h2>Umfang Klassenarbeit 01</h2>
            <p>Themen: Layout und Wirkung · Mac-Tastatur · Bildretusche in Photoshop</p>
            <h3>1. Layouts und Wirkung</h3>
            <ul>
              <li>Ich kann erklären, was mit der Wirkung eines Bildes oder Layouts gemeint ist.</li>
              <li>Ich kann mit einfachen grafischen Elementen wie Kreis, Rechteck und Quadrat eine vorgegebene Wirkung zeichnerisch darstellen.</li>
            </ul>
            <h3>2. Tastatur und Tastenkombinationen am Mac</h3>
            <ul>
              <li>Ich kann die Tasten Command (⌘ / Cmd), Control (⌃ / Ctrl), Shift (⇧) und Leertaste auf einer Mac-Tastatur erkennen und benennen.</li>
              <li>Ich kann die Tastenkombinationen für Kopieren, Einfügen, Ausschneiden, Rückgängig und Alles auswählen nennen.</li>
            </ul>
            <h3>3. Bildretusche</h3>
            <ul>
              <li>Ich kann den Begriff „retuschieren“ erklären.</li>
              <li>Ich kann mindestens ein Photoshop-Werkzeug nennen, mit dem ich ein Bild retuschieren kann.</li>
            </ul>
            <h3>4. Praktische Aufgabe in Photoshop</h3>
            <p>Ich kann folgende Arbeitsschritte selbstständig und in der richtigen Reihenfolge durchführen:</p>
            <ol>
              <li>Auf dem Schreibtisch (Desktop) einen Ordner mit meinem Vor- und Nachnamen anlegen.</li>
              <li>Ein Bild aus Microsoft Teams herunterladen und in diesem Ordner speichern.</li>
              <li>Das Bild in Adobe Photoshop öffnen.</li>
              <li>Eine vorgegebene Retusche am Bild durchführen.</li>
              <li>Die bearbeitete Datei als Photoshop-Datei (.psd) im eigenen Ordner speichern.</li>
              <li>Die fertige PSD-Datei im vorgesehenen Abgabeordner in Teams hochladen.</li>
            </ol>
          </div>
          <footer class="worksheet-footer"><span>1BFD1 BPK · Berufspraktische Kompetenz</span><span>1 / 2</span></footer>
        </article>
      </div>
      <div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article class="a4-paper" :style="{ transform: `scale(${scale})` }">
          <header class="worksheet-header">
            <img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" />
            <h2>BF DRUCKTECHNIK MEDIENTECHNIK</h2>
            <p>Berufspraktische Kompetenz | CHS</p>
          </header>
          <div class="worksheet-body">
            <h2>Lösungen und Erwartungshorizont</h2>
            <p>Zu „Umfang Klassenarbeit 01“</p>
            <h3>1. Layouts und Wirkung</h3>
            <p>Definition: Wirkung ist das, was ein Bild oder Layout bei einer betrachtenden Person auslöst, zum Beispiel Ruhe, Spannung oder Freundlichkeit. Größe, Position und Abstände der Gestaltungselemente beeinflussen die Wirkung.</p>
            <p>Zeichenaufgabe: Es gibt nicht nur eine richtige Lösung. Erwartet wird, dass einfache grafische Elemente wie Kreis, Rechteck und Quadrat bewusst gestaltet und angeordnet werden, sodass die geforderte Wirkung nachvollziehbar unterstützt wird. Beispiel: Viel freier Raum und deutliche Abstände können ruhig wirken; starke Nähe, unterschiedliche Größen oder eine unausgewogene Anordnung können Spannung erzeugen.</p>
            <h3>2. Mac-Tastatur</h3>
            <p>Tasten: Command = ⌘ (Cmd), Control = ⌃ (Ctrl), Shift = ⇧ (Umschalttaste), Leertaste = lange Taste unten zum Einfügen eines Leerzeichens.</p>
            <table><tr><th>Funktion</th><th>Tastenkombination am Mac</th></tr><tr><td>Kopieren</td><td>⌘ + C</td></tr><tr><td>Einfügen</td><td>⌘ + V</td></tr><tr><td>Ausschneiden</td><td>⌘ + X</td></tr><tr><td>Rückgängig</td><td>⌘ + Z</td></tr><tr><td>Alles auswählen</td><td>⌘ + A</td></tr></table>
            <h3>3. Bildretusche</h3>
            <p>Definition: Retuschieren bedeutet, ein Bild gezielt zu bearbeiten, um beispielsweise unerwünschte Bildstellen, Flecken oder kleine Störungen zu entfernen oder zu verbessern.</p>
            <p>Werkzeugbeispiel: Kopierstempel. Damit werden Bildinformationen aus einem ausgewählten Quellbereich auf einen anderen Bereich übertragen. Auch andere geeignete Retuschewerkzeuge, z. B. der Bereichsreparatur-Pinsel, sind richtig.</p>
            <h3>4. Praktische Photoshop-Aufgabe</h3>
            <p>Erwartetes Ergebnis: Ein Ordner mit Vor- und Nachnamen liegt auf dem Schreibtisch. Das Ausgangsbild wurde aus Teams dort gespeichert und in Photoshop geöffnet. Die vorgegebene Stelle wurde sinnvoll retuschiert. Die bearbeitete Datei liegt im Ordner im PSD-Format und wurde im richtigen Teams-Abgabeordner hochgeladen.</p>
            <p>Wichtige Kriterien: Vollständige Arbeitsschritte, erkennbare und möglichst saubere Retusche, korrektes PSD-Dateiformat, Benennung der Dateien nach Vorgabe und erfolgreiche Abgabe.</p>
          </div>
          <footer class="worksheet-footer"><span>1BFD1 BPK · Berufspraktische Kompetenz</span><span>2 / 2</span></footer>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped>
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
.worksheet-header h2 { font-size: 15px; font-weight: 600; letter-spacing: .05em; line-height: 1.4; margin: 0 0 3px; }
.worksheet-header p { font-size: 12px; margin: 0; }
.worksheet-body { flex: 1; }
.worksheet-footer { display: flex; justify-content: space-between; gap: 12px; padding-top: 12px; border-top: 1px solid #d3dad6; font-size: 10px; }
@media (max-width: 700px) { .design-template-page { padding: 16px; } }

.papers { margin-top: 24px; }
.paper-frame { margin-bottom: 24px; }
.worksheet-body { padding-top: 14px; font-size: 12px; line-height: 1.4; }
.worksheet-body h2 { font-size: 20px; line-height: 1.2; margin: 0 0 10px; }
.worksheet-body h3 { font-size: 14px; margin: 15px 0 6px; }
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
</style>
