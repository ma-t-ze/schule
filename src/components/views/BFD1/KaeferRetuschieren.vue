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
    pdf.setProperties({ title: 'Photoshop: Käfer vom Blatt retuschieren · 1BFD1 BPK' })
    const papers = container.value.querySelectorAll('.a4-paper')
    for (let i = 0; i < papers.length; i++) {
      const canvas = await html2canvas(papers[i], { scale: 2, backgroundColor: '#ffffff', onclone(doc) {
        doc.querySelectorAll('.a4-paper').forEach(p => { p.style.transform = 'none'; p.style.boxShadow = 'none' })
      } })
      if (i) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    }
    pdf.save('Anleitung_Kaefer_retuschieren_1BFD1_BPK.pdf')
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>

<template>
  <main class="design-template-page">
    <div class="screen-only">
      <RouterLink to="/">← Zur Startseite</RouterLink>
      <h1>Photoshop: Käfer vom Blatt retuschieren</h1>
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

            <h2>Käfer vom Blatt retuschieren</h2>
            <p><strong>Ziel:</strong> Entferne den Käfer aus dem Bild. Das Blatt soll danach möglichst natürlich aussehen. Arbeite die Schritte der Reihe nach ab.</p>
            <h3>1. Eigenen Ordner anlegen</h3>
            <ol>
              <li>Wechsle zum Schreibtisch (Desktop) deines Macs.</li>
              <li>Klicke auf eine freie Stelle und drücke <strong>⇧ + ⌘ + N</strong>, um einen neuen Ordner anzulegen.</li>
              <li>Benenne den Ordner mit deinem <strong>Vor- und Nachnamen</strong>.</li>
            </ol>
            <h3>2. Bild aus Microsoft Teams herunterladen</h3>
            <ol>
              <li>Öffne in Teams das von der Lehrkraft bereitgestellte Bild mit dem Käfer auf dem Blatt.</li>
              <li>Wähle <strong>Herunterladen</strong>. Falls das Bild im Ordner „Downloads“ landet, verschiebe es anschließend in deinen eigenen Ordner auf dem Schreibtisch.</li>
              <li>Prüfe im Finder, ob die Bilddatei in deinem Ordner liegt.</li>
            </ol>
            <h3>3. Bild in Photoshop öffnen und vorbereiten</h3>
            <ol>
              <li>Öffne Adobe Photoshop. Wähle <strong>Datei → Öffnen</strong> und öffne das Bild aus deinem Ordner.</li>
              <li>Vergrößere die Ansicht mit dem Zoom-Werkzeug (Lupe), bis du den Käfer und seine Umgebung gut erkennst.</li>
            </ol>
            <p><strong>Zwischenkontrolle:</strong> Dein Bild liegt im eigenen Ordner und ist in Photoshop geöffnet.</p>
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

            <h2>Käfer entfernen und Arbeit abgeben</h2>
            <h3>4. Käfer mit dem Kopierstempel entfernen</h3>
            <ol>
              <li>Wähle in der Werkzeugleiste den <strong>Kopierstempel</strong> (Stempel-Symbol). Falls ein anderes Stempel-Werkzeug erscheint, halte das Symbol gedrückt und wähle „Kopierstempel“.</li>
              <li>Stelle oben eine <strong>weiche Pinselspitze</strong> ein. Wähle eine Größe, mit der du kleine Teile des Käfers gezielt übermalen kannst. Stelle die Deckkraft auf <strong>100 %</strong> und die Aufnahme auf <strong>„Aktuelle Ebene“</strong>.</li>
              <li>Suche direkt neben dem Käfer eine saubere Blattstelle mit ähnlicher Farbe, Helligkeit und Struktur. Halte <strong>⌥ (Option/Alt)</strong> gedrückt und klicke dort, um die Kopierquelle festzulegen. Lasse die Taste danach los.</li>
              <li>Übermale den Käfer mit kurzen Strichen. Nimm zwischendurch mit <strong>⌥ + Klick</strong> neue, passende Blattstellen auf. Achte darauf, keine Teile des Käfers mitzukopieren und Blattadern möglichst passend fortzuführen.</li>
              <li>Entferne auch Beine, Fühler und Schatten des Käfers. Bei einem Fehler: <strong>⌘ + Z</strong>. Wähle eine neue Quelle und versuche es erneut.</li>
              <li>Prüfe das Ergebnis aus der Nähe und in der Gesamtansicht. Vergleiche das Ergebnis mit dem ursprünglichen Bild aus deinem Ordner.</li>
            </ol>
            <p><strong>Abgabe:</strong> Speichere dein Ergebnis als PSD-Datei und lade sie in Teams in den Abgabeordner hoch.</p>
            <p class="source">Werkzeughilfe: <a href="https://helpx.adobe.com/de/photoshop/using/tool-techniques/clone-stamp-tool.html">Adobe: Kopierstempel</a></p>
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
.source { font-size: 10px; color: #647168; }
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
