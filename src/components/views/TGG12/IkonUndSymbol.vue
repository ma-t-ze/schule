<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
import { PhBicycle, PhCar, PhAirplane, PhSailboat, PhHouse, PhBed, PhChair, PhCoffee, PhForkKnife, PhOrange, PhCarrot, PhFish, PhBird, PhCat, PhDog, PhHorse, PhTree, PhLeaf, PhFlower, PhUmbrella, PhKey, PhScissors, PhCamera, PhEyeglasses, PhGuitar, PhHeart, PhPeace, PhInfinity, PhPlus, PhMinus, PhEquals, PhDivide, PhPercent, PhAt, PhHash, PhCopyright, PhTrademark, PhTrademarkRegistered, PhCurrencyEur, PhCurrencyDollar, PhCurrencyJpy, PhCurrencyGbp, PhQuestion, PhExclamationMark, PhCheck, PhX, PhProhibit, PhPower, PhPlay, PhPause } from '@phosphor-icons/vue'
const signs = [
  { icon: PhBicycle, meaning: 'Fahrrad', kind: 'Ikon' },
  { icon: PhCar, meaning: 'Auto', kind: 'Ikon' },
  { icon: PhAirplane, meaning: 'Flugzeug', kind: 'Ikon' },
  { icon: PhSailboat, meaning: 'Segelboot', kind: 'Ikon' },
  { icon: PhHouse, meaning: 'Haus', kind: 'Ikon' },
  { icon: PhBed, meaning: 'Bett', kind: 'Ikon' },
  { icon: PhChair, meaning: 'Stuhl', kind: 'Ikon' },
  { icon: PhCoffee, meaning: 'Tasse', kind: 'Ikon' },
  { icon: PhForkKnife, meaning: 'Besteck', kind: 'Ikon' },
  { icon: PhOrange, meaning: 'Orange', kind: 'Ikon' },
  { icon: PhCarrot, meaning: 'Karotte', kind: 'Ikon' },
  { icon: PhFish, meaning: 'Fisch', kind: 'Ikon' },
  { icon: PhBird, meaning: 'Vogel', kind: 'Ikon' },
  { icon: PhCat, meaning: 'Katze', kind: 'Ikon' },
  { icon: PhDog, meaning: 'Hund', kind: 'Ikon' },
  { icon: PhHorse, meaning: 'Pferd', kind: 'Ikon' },
  { icon: PhTree, meaning: 'Baum', kind: 'Ikon' },
  { icon: PhLeaf, meaning: 'Blatt', kind: 'Ikon' },
  { icon: PhFlower, meaning: 'Blume', kind: 'Ikon' },
  { icon: PhUmbrella, meaning: 'Regenschirm', kind: 'Ikon' },
  { icon: PhKey, meaning: 'Schlüssel', kind: 'Ikon' },
  { icon: PhScissors, meaning: 'Schere', kind: 'Ikon' },
  { icon: PhCamera, meaning: 'Kamera', kind: 'Ikon' },
  { icon: PhEyeglasses, meaning: 'Brille', kind: 'Ikon' },
  { icon: PhGuitar, meaning: 'Gitarre', kind: 'Ikon' },
  { icon: PhHeart, meaning: 'Liebe', kind: 'Symbol' },
  { icon: PhPeace, meaning: 'Frieden', kind: 'Symbol' },
  { icon: PhInfinity, meaning: 'Unendlichkeit', kind: 'Symbol' },
  { icon: PhPlus, meaning: 'Addition', kind: 'Symbol' },
  { icon: PhMinus, meaning: 'Subtraktion', kind: 'Symbol' },
  { icon: PhEquals, meaning: 'Gleichheit', kind: 'Symbol' },
  { icon: PhDivide, meaning: 'Division', kind: 'Symbol' },
  { icon: PhPercent, meaning: 'Prozent', kind: 'Symbol' },
  { icon: PhAt, meaning: 'E-Mail-Trennzeichen', kind: 'Symbol' },
  { icon: PhHash, meaning: 'Hashtag', kind: 'Symbol' },
  { icon: PhCopyright, meaning: 'Urheberrecht', kind: 'Symbol' },
  { icon: PhTrademark, meaning: 'Markenkennzeichen', kind: 'Symbol' },
  { icon: PhTrademarkRegistered, meaning: 'Registrierte Marke', kind: 'Symbol' },
  { icon: PhCurrencyEur, meaning: 'Euro', kind: 'Symbol' },
  { icon: PhCurrencyDollar, meaning: 'Dollar', kind: 'Symbol' },
  { icon: PhCurrencyJpy, meaning: 'Yen', kind: 'Symbol' },
  { icon: PhCurrencyGbp, meaning: 'Pfund Sterling', kind: 'Symbol' },
  { icon: PhQuestion, meaning: 'Frage / Hilfe', kind: 'Symbol' },
  { icon: PhExclamationMark, meaning: 'Achtung', kind: 'Symbol' },
  { icon: PhCheck, meaning: 'Bestätigung', kind: 'Symbol' },
  { icon: PhX, meaning: 'Schließen / Abbrechen', kind: 'Symbol' },
  { icon: PhProhibit, meaning: 'Verbot', kind: 'Symbol' },
  { icon: PhPower, meaning: 'Ein- / Ausschalten', kind: 'Symbol' },
  { icon: PhPlay, meaning: 'Wiedergabe starten', kind: 'Symbol' },
  { icon: PhPause, meaning: 'Wiedergabe pausieren', kind: 'Symbol' }
]
const orderedSigns = Array.from({ length: 50 }, (_, i) => signs[(i * 17) % 50])
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
    const canvas = await html2canvas(container.value.querySelector('.a4-paper'), { scale: 3, backgroundColor: '#ffffff', onclone(doc) {
      doc.querySelectorAll('.a4-paper').forEach(p => { p.style.transform = 'none'; p.style.boxShadow = 'none' })
    } })
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    pdf.setProperties({ title: 'Ikon und Symbol · 3TGG1/2' })
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    pdf.save(`3TGG1_2_Ikon_und_Symbol${solutions.value ? '_Loesung' : ''}.pdf`)
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>
<template>
  <main class="sheet-page">
    <div class="screen-only">
      <RouterLink :to="{ name: '3tgg12' }">← Zur Übersicht 3TGG1/2</RouterLink>
      <h1>Ikon und Symbol</h1>
      <p>50 Phosphor-Zeichen · 25 Ikone und 25 Symbole · DIN A4</p>
      <div class="actions"><Button :label="solutions ? 'Lösung ausblenden' : 'Lösung anzeigen'" outlined :disabled="busy" @click="solutions = !solutions" /><Button :label="solutions ? 'Lösungsblatt als PDF' : 'Arbeitsblatt als PDF'" :loading="busy" @click="downloadPdf" /></div>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <p class="context-note">Die Bedeutung unter jedem Zeichen legt den Bezug fest: Ein Ikon stellt durch Ähnlichkeit dar; ein Symbol durch gelernte Vereinbarung. Dieselbe Form kann je nach Bedeutung anders eingeordnet werden.</p>
    </div>
    <div ref="container" class="papers"><div class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
      <article class="a4-paper" :style="{ transform: `scale(${scale})` }" aria-label="Arbeitsblatt mit 50 Zeichen">
        <header class="worksheet-header"><img src="/designvorlagen/chs.svg" width="100" height="34" alt="CHS-Logo" /><div><p>GESTALTUNGS- UND MEDIENTECHNIK</p><span>Eingangsklasse | CHS | Heckel</span></div></header>
        <div class="worksheet-title"><h2>Ikon und Symbol</h2><span>{{ solutions ? 'LÖSUNG' : '50 ZEICHEN' }}</span></div>
        <p class="instructions">Ordne zu: <strong>I = Ikon</strong> (Ähnlichkeit), <strong>S = Symbol</strong> (Vereinbarung).<br />Gemeint ist jeweils die angegebene Bedeutung. Schreibe I oder S in das kleine Feld.</p>
        <div class="sign-grid"><div v-for="(sign, i) in orderedSigns" :key="sign.meaning" class="sign-cell"><span class="number">{{ String(i + 1).padStart(2, '0') }}</span><component :is="sign.icon" :size="40" weight="regular" color="#111111" :aria-label="sign.meaning" role="img" /><span class="meaning">{{ sign.meaning }}</span><span class="answer" :aria-label="solutions ? sign.kind : 'Antwortfeld'">{{ solutions ? (sign.kind === 'Ikon' ? 'I' : 'S') : '' }}</span></div></div>
        <footer class="worksheet-footer"><span>3TGG1/2 · Phosphor Icons (MIT) · 25 Ikone / 25 Symbole</span><span>1 / 1</span></footer>
      </article>
    </div></div>
    <p class="screen-only sources">Zeichen: <a href="https://github.com/phosphor-icons/vue" target="_blank" rel="noopener noreferrer">Phosphor Icons</a> · <a href="https://www-cse.ucsd.edu/~goguen/courses/271/tutorial/peirce.php" target="_blank" rel="noopener noreferrer">Semiotischer Hintergrund</a></p>
  </main>
</template>
<style scoped>
.sheet-page { max-width: 1080px; margin: auto; padding: 32px; color: #202d32; font-family: 'Jost', sans-serif; }
a { color: #176746; }h1 { font-size: 30px; font-weight: 500; }.actions { display: flex; flex-wrap: wrap; gap: 12px; margin: 20px 0; }.context-note { max-width: 780px; line-height: 1.6; }.papers { width: 100%; max-width: 210mm; margin-top: 24px; }.paper-frame { position: relative; overflow: hidden; }.a4-paper { display: flex; flex-direction: column; width: 210mm; height: 297mm; padding: 10mm 12mm 8mm; box-sizing: border-box; transform-origin: top left; background: white; color: #111; box-shadow: 0 2px 18px #0002; }.worksheet-header { display: flex; align-items: center; gap: 7mm; border-bottom: 1px solid #abb3b5; padding-bottom: 3mm; }.worksheet-header img { object-fit: contain; }.worksheet-header p { font-size: 12px; font-weight: 600; letter-spacing: .04em; margin: 0 0 3px; }.worksheet-header span { font-size: 10px; }.worksheet-title { display: flex; align-items: center; justify-content: space-between; margin-top: 3mm; }.worksheet-title h2 { font-size: 23px; font-weight: 500; margin: 0; }.worksheet-title>span { font-size: 9px; letter-spacing: .12em; }.instructions { font-size: 10px; line-height: 1.5; margin: 2mm 0 3mm; }.sign-grid { display: grid; grid-template-columns: repeat(5, 1fr); grid-template-rows: repeat(10, 1fr); flex: 1; min-height: 0; border-top: 1px solid #d3dad6; border-left: 1px solid #d3dad6; }.sign-cell { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; border-right: 1px solid #d3dad6; border-bottom: 1px solid #d3dad6; padding: 4px 10px; }.number { position: absolute; left: 5px; top: 4px; color: #666; font-size: 7px; }.sign-cell svg { width: 36px; height: 36px; flex-shrink: 0; }.meaning { font-size: 9px; line-height: 1.2; text-align: center; max-width: 110px; }.answer { position: absolute; right: 4px; top: 4px; width: 12px; height: 12px; border: 1px solid #9fa7a1; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 600; }.worksheet-footer { display: flex; justify-content: space-between; gap: 12px; padding-top: 3mm; font-size: 8px; }.sources { margin-top: 24px; font-size: 12px; }
@media(max-width: 700px) { .sheet-page { padding: 16px; } }
@page { size: A4; margin: 0; }
@media print { .screen-only { display: none; }.sheet-page { padding: 0; margin: 0; }.papers { margin: 0; }.paper-frame { height: auto !important; }.a4-paper { transform: none !important; box-shadow: none; } }
</style>
