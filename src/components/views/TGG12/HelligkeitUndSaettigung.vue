<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import Slider from 'primevue/slider'
import Button from 'primevue/button'

const hue = ref(24)
const saturation = ref(65)
const lightness = ref(55)
const canvas = ref(null)
const saturationCanvas = ref(null)
let animationFrame
const displayed = { hue: 24, saturation: 65, lightness: 55 }
const color = computed(() => `hsl(${hue.value} ${saturation.value}% ${lightness.value}%)`)
const gradients = computed(() => ({
  hue: 'linear-gradient(to top, hsl(0 100% 50%), hsl(60 100% 50%), hsl(120 100% 50%), hsl(180 100% 50%), hsl(240 100% 50%), hsl(300 100% 50%), hsl(360 100% 50%))',
  saturation: `linear-gradient(to top, hsl(${hue.value} 0% ${lightness.value}%), hsl(${hue.value} 100% ${lightness.value}%))`,
  lightness: `linear-gradient(to top, black, hsl(${hue.value} ${saturation.value}% 50%), white)`
}))
// Illustrative marker numbers, not manufacturer colour codes.
const markerGroups = [
  { hue: 25, prefix: '01' }, { hue: 145, prefix: '02' }, { hue: 220, prefix: '03' }
].map((group, groupIndex) => [
  { lightness: 80, saturation: 85 }, { lightness: 65, saturation: 20 },
  { lightness: 50, saturation: 65 }, { lightness: 35, saturation: 40 }
].map((values, index) => ({ ...values, hue: group.hue, number: String(groupIndex * 4 + index + 1).padStart(2, '0') })))
const notebookExamples = [
  { title: 'Helligkeit', description: 'Helligkeit beschreibt, wie hell oder dunkel eine Farbe wahrgenommen wird. Bei Körperfarben gilt: Je mehr Licht eine Farbe absorbiert, desto dunkler erscheint sie.', direction: 'Von hell nach dunkel →', groups: markerGroups.map(group => [...group].sort((a, b) => b.lightness - a.lightness)) },
  { title: 'Sättigung', description: 'Sättigung beschreibt, wie kräftig bunt oder graustichig eine Farbe ist.', direction: 'Von wenig nach stark gesättigt →', groups: markerGroups.map(group => [...group].sort((a, b) => a.saturation - b.saturation)) }
]
const sliderParts = { range: { style: { background: 'transparent' } } }
function reset() { hue.value = 24; saturation.value = 65; lightness.value = 55 }
function draw() {
  const { hue: h, saturation: s, lightness: l } = displayed
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, 600, 510)
  const cx = 280, radius = 195, depth = 112, top = 125, height = 225
  const point = (angle, y, r = 1) => [cx + Math.cos(angle) * radius * r, y + Math.sin(angle) * depth * r]
  function polygon(points, fill) {
    ctx.beginPath(); points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.fillStyle = fill; ctx.fill()
  }
  // The front half of the cylindrical surface: hue around the circumference,
  // HSL lightness from black at the bottom to white at the top.
  for (let row = 0; row < 50; row++) {
    const y1 = top + row / 50 * height, y2 = top + (row + 1) / 50 * height
    for (let col = 0; col < 120; col++) {
      const a = col / 120 * Math.PI, b = (col + 1) / 120 * Math.PI
      polygon([point(a, y1), point(b, y1), point(b, y2), point(a, y2)], `hsl(${(a + b) / 2 * 180 / Math.PI} 100% ${100 - (row + .5) * 2}%)`)
    }
  }
  ctx.beginPath(); ctx.ellipse(cx, top, radius, depth, 0, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill(); ctx.strokeStyle = '#a5a5a5'; ctx.stroke()
  const y = top + (100 - l) / 100 * height
  // A continuous radial gradient makes the neutral centre visible.
  function disc(context, x, y, r, verticalScale, selectedHue, light) {
    context.save(); context.translate(x, y); context.scale(1, verticalScale)
    for (let segment = 0; segment < 180; segment++) {
      const a = segment / 180 * Math.PI * 2, b = (segment + 1.2) / 180 * Math.PI * 2
      const gradient = context.createRadialGradient(0, 0, 0, 0, 0, r)
      gradient.addColorStop(0, `hsl(${segment * 2} 0% ${light}%)`)
      gradient.addColorStop(1, `hsl(${segment * 2} 100% ${light}%)`)
      context.beginPath(); context.moveTo(0, 0); context.arc(0, 0, r, a, b); context.closePath(); context.fillStyle = gradient; context.fill()
    }
    context.restore()
  }
  disc(ctx, cx, y, radius, depth / radius, h, l)
  ctx.strokeStyle = '#303030'; ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.ellipse(cx, y, radius, depth, 0, 0, Math.PI * 2); ctx.stroke()
  // Fixed saturation contours remain independent of the selected point.
  ctx.save(); ctx.setLineDash([3, 5]); ctx.strokeStyle = '#25233388'; ctx.lineWidth = 1
  for (const step of [25, 50, 75]) {
    ctx.beginPath(); ctx.ellipse(cx, y, radius * step / 100, depth * step / 100, 0, 0, Math.PI * 2); ctx.stroke()
  }
  ctx.restore()
  ctx.beginPath(); ctx.ellipse(cx, y, radius * s / 100, depth * s / 100, 0, 0, Math.PI * 2)
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 4; ctx.stroke(); ctx.strokeStyle = '#6041dc'; ctx.lineWidth = 2; ctx.stroke()
  const selected = point(h / 180 * Math.PI, y, s / 100)
  ctx.beginPath(); ctx.moveTo(cx, y); ctx.lineTo(...point(h / 180 * Math.PI, y)); ctx.strokeStyle = '#fff'; ctx.lineWidth = 3; ctx.stroke()
  ctx.beginPath(); ctx.arc(...selected, 9, 0, Math.PI * 2); ctx.fillStyle = `hsl(${h} ${s}% ${l}%)`; ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 4; ctx.stroke(); ctx.strokeStyle = '#222'; ctx.lineWidth = 2; ctx.stroke()

  const map = saturationCanvas.value?.getContext('2d')
  if (!map) return
  map.clearRect(0, 0, 340, 340)
  disc(map, 170, 170, 140, 1, h, l)
  const angle = h * Math.PI / 180
  const endpoint = [170 + Math.cos(angle) * 140, 170 + Math.sin(angle) * 140]
  const dot = [170 + Math.cos(angle) * 140 * s / 100, 170 + Math.sin(angle) * 140 * s / 100]
  map.beginPath(); map.arc(170, 170, 140 * s / 100, 0, Math.PI * 2); map.strokeStyle = '#fff'; map.lineWidth = 5; map.stroke(); map.strokeStyle = '#6041dc'; map.lineWidth = 2; map.stroke()
  map.beginPath(); map.moveTo(170, 170); map.lineTo(...endpoint); map.strokeStyle = '#fff'; map.lineWidth = 5; map.stroke(); map.strokeStyle = '#252333'; map.lineWidth = 2; map.stroke()
  map.beginPath(); map.arc(170, 170, 4, 0, Math.PI * 2); map.fillStyle = '#222'; map.fill()
  map.beginPath(); map.arc(...dot, 10, 0, Math.PI * 2); map.fillStyle = `hsl(${h} ${s}% ${l}%)`; map.fill(); map.strokeStyle = '#fff'; map.lineWidth = 5; map.stroke(); map.strokeStyle = '#252333'; map.lineWidth = 2; map.stroke()
}
function animate() {
  cancelAnimationFrame(animationFrame)
  const start = { ...displayed }, startTime = performance.now()
  const target = { hue: hue.value, saturation: saturation.value, lightness: lightness.value }
  const hueDistance = ((target.hue - start.hue + 540) % 360) - 180
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  function frame(now) {
    // A queued animation frame can carry a timestamp just before startTime.
    // Clamp both ends so interpolation cannot overshoot or create negative radii.
    const progress = reduced ? 1 : Math.max(0, Math.min(1, (now - startTime) / 180))
    const ease = 1 - (1 - progress) ** 3
    displayed.hue = start.hue + hueDistance * ease
    displayed.saturation = start.saturation + (target.saturation - start.saturation) * ease
    displayed.lightness = start.lightness + (target.lightness - start.lightness) * ease
    draw()
    if (progress < 1) animationFrame = requestAnimationFrame(frame)
  }
  animationFrame = requestAnimationFrame(frame)
}
onMounted(draw)
watch([hue, saturation, lightness], animate)
onBeforeUnmount(() => cancelAnimationFrame(animationFrame))
</script>

<template>
  <main class="hsl-page">
    <nav class="top"><RouterLink :to="{ name: '3tgg12' }">← 3TGG1/2</RouterLink><span>GESTALTUNG · FARBEN VERSTEHEN</span></nav>
    <header class="hero"><p class="eyebrow">#12 · HELLIGKEIT UND SÄTTIGUNG</p><h1>Hell und dunkel.<br><span>Kräftig und dezent.</span></h1><p>Untersuche deine Markerfarben und bringe sie in die beschriebene Reihenfolge und schule so deine Farbwahrnehmung.</p></header>
    <section id="arbeitsauftrag" class="task" aria-labelledby="task-title"><p class="eyebrow">01 · COPIC-MARKER &amp; KLADDE</p>
      <h2 id="task-title">Arbeitsauftrag</h2>
      <ol>
        <li>Nimm einen deiner Marker zur Hand und versuche, seine Farbe so gut wie möglich im Zylinder einzustellen. Nutze dafür die Regler für Farbton, Sättigung und Helligkeit.</li>
        <li>Nimm ein Konzeptpapier und male mit dem untersuchten Marker ein <strong>1 × 1 cm großes Quadrat</strong> vollständig aus. Notiere dazu die Markernummer beziehungsweise die Bezeichnung, falls vorhanden, sowie <strong>Helligkeit und Sättigung in Prozent</strong>.</li>
        <li>Gehe so für jeden deiner Marker vor.</li>
        <li>Sortiere die Farben nun <strong>von hell nach dunkel</strong> und <strong>von wenig gesättigt nach gesättigt</strong>. Gruppiere dabei gleiche Farbtöne.</li>
        <li>Nimm nun deine <strong>Kladde</strong> zur Hand und übertrage deine Sortierung dorthin. Zeichne auch hier für jeden Marker ein vollständig ausgefülltes Quadrat von 1 × 1 cm und ergänze die notierten Angaben. Siehe das Beispiel unten.</li>
      </ol>
    </section>
    <section id="hsl-labor" class="explorer" aria-labelledby="explorer-title">
      <div class="explorer-heading"><div><p class="eyebrow">02 · AUSPROBIEREN &amp; VERGLEICHEN</p><h2 id="explorer-title">Deine Farbe im HSL-Zylinder</h2></div><Button label="Zurücksetzen" text size="small" @click="reset" /></div>
      <div class="explorer-grid">
        <div class="model">
          <canvas ref="canvas" width="600" height="510" role="img" :aria-label="`HSL-Zylinder: Farbton ${hue} Grad, Sättigung ${saturation} Prozent, Helligkeit ${lightness} Prozent. Der markierte Punkt zeigt deine Farbe.`"></canvas>
          <div class="saturation-detail">
            <canvas ref="saturationCanvas" width="340" height="340" role="img" :aria-label="`Draufsicht: Sättigung ${saturation} Prozent, Abstand von der grauen Mitte zum bunten Rand.`"></canvas>
          </div>
          <p>Die aufgeklappte Farbebene zeigt die Sättigung: 0 % in der grauen Mitte, 25 %, 50 %, 75 % und 100 % am bunten Rand. Der violette Kreis markiert deine Einstellung. Die Höhe der Ebene zeigt die Helligkeit.</p>
        </div>
        <div class="settings">
          <div class="sliders">
            <div class="control"><label id="hue-label">Farbton</label><span class="scale-end">360°</span><div class="slider-rail"><Slider v-model="hue" orientation="vertical" :min="0" :max="360" aria-labelledby="hue-label" :pt="sliderParts" :style="{ background: gradients.hue }" /></div><span class="scale-end">0°</span><output>{{ hue }}°</output></div>
            <div class="control"><label id="saturation-label">Sättigung</label><span class="scale-end">bunt</span><div class="slider-rail"><Slider v-model="saturation" orientation="vertical" :min="0" :max="100" aria-labelledby="saturation-label" :pt="sliderParts" :style="{ background: gradients.saturation }" /></div><span class="scale-end">grau</span><output>{{ saturation }} %</output></div>
            <div class="control"><label id="lightness-label">Helligkeit</label><span class="scale-end">weiß</span><div class="slider-rail"><Slider v-model="lightness" orientation="vertical" :min="0" :max="100" aria-labelledby="lightness-label" :pt="sliderParts" :style="{ background: gradients.lightness }" /></div><span class="scale-end">schwarz</span><output>{{ lightness }} %</output></div>
          </div>
          <div class="color-preview" :style="{ backgroundColor: color }" role="img" :aria-label="`Eingestellte Farbe: ${color}`"></div>
          <p class="preview-caption">Deine eingestellte Markerfarbe</p>
        </div>
      </div>
    </section>
    <section class="notebook" aria-labelledby="notebook-title">
      <p class="eyebrow">03 · FESTHALTEN &amp; ORDNEN</p>
      <h2 id="notebook-title">So könnte deine Doppelseite aussehen</h2>
      <div class="book-scroll" tabindex="0" aria-label="Beispiel einer A5-Skizzenbuch-Doppelseite, auf kleinen Bildschirmen seitlich scrollbar">
        <div class="sketchbook">
          <header class="book-heading"><h3>#12 Helligkeit und Sättigung</h3><span>SKIZZENBUCH · A5</span></header>
          <article v-for="(example, pageIndex) in notebookExamples" :key="example.title" class="book-page" :aria-label="`Beispielseite ${example.title}`">
            <h4>{{ example.title }}</h4>
            <p class="book-explanation">{{ example.description }}</p>
            <p class="sort-direction">{{ example.direction }}</p>
            <div class="marker-rows">
              <div v-for="(group, groupIndex) in example.groups" :key="groupIndex" class="marker-row">
                <div v-for="marker in group" :key="marker.number" class="marker-entry">
                  <span class="book-swatch" :style="{ background: `hsl(${marker.hue} ${marker.saturation}% ${marker.lightness}%)` }"></span>
                  <span class="marker-number">Nr. {{ marker.number }}</span>
                  <span>H: {{ marker.lightness }} %</span>
                  <span>S: {{ marker.saturation }} %</span>
                </div>
              </div>
            </div>
            <p class="book-page-number">{{ pageIndex + 1 }}</p>
          </article>
        </div>
      </div>
      <p class="book-caption">Beispielwerte und Beispielnummern. Verwende deine eigenen Markerbezeichnungen. Jede Zeile bildet eine Farbton-Gruppe; lies von links nach rechts und dann von oben nach unten. Die ausgefüllten Quadrate zeichnest du in deiner Kladde jeweils 1 × 1 cm groß.</p>
    </section>
    <footer><RouterLink :to="{ name: '3tgg12' }">← Zurück zu 3TGG1/2</RouterLink><span>Farben vergleichen. Unterschiede erkennen. Bewusst gestalten.</span></footer>
  </main>
</template>

<style scoped>
.hsl-page { --ink: #171923; --accent: #6041dc; min-height: 100vh; padding: 0 max(20px, calc((100vw - 1180px)/2)); background: #f6f4ee; color: var(--ink); font-family: jost, Arial, sans-serif; }
.hsl-page * { box-sizing: border-box; } a { color: inherit; }.top, footer { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 26px 0; font-size: 13px; }.top { border-bottom: 1px solid #d8d6cf; }.top a, footer a { font-weight: 600; text-decoration: none; }.top span { letter-spacing: .12em; }
.hero { padding: 76px 0 72px; }.eyebrow { font-size: 12px; font-weight: 600; letter-spacing: .18em; margin: 0 0 20px; } h1 { font-size: clamp(54px, 8.5vw, 106px); line-height: .98; letter-spacing: -.06em; margin: 0 0 28px; font-weight: 700; } h1 span { color: var(--accent); }.hero > p:last-of-type { max-width: 640px; font-size: 21px; line-height: 1.6; }.jump { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }.jump a { padding: 12px 20px; border: 1px solid #b8b4ad; border-radius: 100px; text-decoration: none; }
h2 { font-size: clamp(28px, 4vw, 42px); line-height: 1.12; letter-spacing: -.03em; margin: 0 0 22px; } p, li { font-size: 16px; line-height: 1.7; } p { margin: 12px 0; }.task, .explorer { scroll-margin-top: 20px; }
.task { padding: 38px 42px; background: #e8e2fa; border-radius: 24px; margin-bottom: 32px; }.task .eyebrow { color: #6041dc; }ol { margin: 0; padding-left: 22px; }li { padding-left: 6px; margin-bottom: 18px; }.note { font-size: 14px; color: #555160; margin: 24px 0 0; padding-left: 18px; border-left: 3px solid #a68bff; }
.explorer { padding: 46px; border-radius: 28px; background: #171923; color: #f5f5ff; }.explorer-heading { display: flex; justify-content: space-between; align-items: center; gap: 20px; }.explorer-heading h2 { margin-bottom: 0; }.explorer-heading .eyebrow { color: #bca9ff; }.explorer-heading :deep(.p-button) { color: #ded4ff; border: 1px solid #8888; border-radius: 9px; padding: 10px 16px; }.explorer-heading :deep(.p-button:hover) { background: #9377ed33; }
.explorer-grid { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(280px, 1fr); gap: 32px; align-items: start; margin-top: 32px; padding-top: 32px; border-top: 1px solid #8885; }.model { min-width: 0; }.model canvas { display: block; width: 100%; height: auto; background: #f6f4ee; border-radius: 20px; }.model p { font-size: 13px; color: #ceccd8; line-height: 1.6; margin-top: 16px; }.settings { align-self: start; padding: 20px; background: #ffffff09; border: 1px solid #8885; border-radius: 20px; }.sliders { display: flex; justify-content: space-around; gap: 16px; }.control { display: flex; flex: 1; flex-direction: column; align-items: center; gap: 12px; min-width: 0; padding: 16px 5px 10px; background: #ffffff09; border: 1px solid #ffffff12; border-radius: 14px; }.control label { font-size: 13px; font-weight: 600; }.scale-end { font-size: 11px; color: #c5c0d5; }.slider-rail { padding: 8px 12px; }.control output { display: block; width: calc(100% - 6px); padding: 9px 0; border-radius: 8px; background: #b49aff20; color: #e6dbff; text-align: center; }.control :deep(.p-slider) { height: 240px; width: 24px; border-radius: 12px; box-shadow: inset 0 0 0 1px #ffffff30; }.control :deep(.p-slider-handle) { width: 40px; height: 22px; margin-left: -20px; margin-bottom: -11px; border: 3px solid #fff; border-radius: 7px; background: #252333; box-shadow: 0 2px 8px #0008; }.control :deep(.p-slider-handle:focus-visible) { outline: 3px solid #bca9ff; outline-offset: 4px; }.control output { font-size: 18px; font-variant-numeric: tabular-nums; }.color-preview { height: 160px; margin-top: 28px; border-radius: 18px; border: 1px solid #8886; }.preview-caption { font-size: 13px; color: #ceccd8; margin-bottom: 0; }
.notebook { padding: 46px; margin: 32px 0 40px; background: white; border: 1px solid #e4e0d8; border-radius: 28px; }.notebook h2 { max-width: 760px; }.example { display: flex; align-items: center; gap: 18px; padding: 24px; background: #f6f4ee; border-radius: 14px; }.marker-square { display: block; width: 1cm; height: 1cm; flex-shrink: 0; }.example small, .notebook > p:last-child { color: #62616a; font-size: 14px; }footer { border-top: 1px solid #d8d6cf; padding-bottom: 40px; }
a:focus-visible { outline: 3px solid #9871fa; outline-offset: 4px; }
@media(max-width: 760px) { .hero { padding: 48px 0; }h1 { font-size: clamp(44px, 9.5vw, 70px); }.top span, footer span { display: none; }.task, .explorer, .notebook { padding: 24px; }.explorer-grid { grid-template-columns: 1fr; gap: 24px; }.explorer-heading { align-items: start; flex-wrap: wrap; }.control :deep(.p-slider) { height: 190px; }.settings { padding: 20px 12px; }.sliders { gap: 8px; }.example { padding: 18px; } }
.saturation-detail { display: grid; grid-template-columns: 1fr; gap: 12px; align-items: center; margin-top: 18px; padding: 16px; border: 1px solid #b49aff55; border-radius: 20px; background: #f6f4ee; color: #171923; }.saturation-detail canvas { width: 100%; max-width: 340px; justify-self: center; background: transparent; border-radius: 0; }.detail-kicker { color: #6041dc; font-size: 10px; letter-spacing: .12em; font-weight: 700; }.saturation-detail h3 { font-size: 20px; line-height: 1.2; margin: 8px 0; }.saturation-detail p { color: #555160; font-size: 12px; margin: 8px 0; }.saturation-detail .saturation-reading { color: #6041dc; font-size: 16px; }
@media(max-width: 760px) { .settings { width: 100%; }.saturation-detail { padding: 10px; grid-template-columns: 1fr; }.sliders { gap: 6px; }.slider-rail { padding: 8px; }.control label { font-size: 12px; } }
.book-scroll { overflow-x: auto; padding: 18px 12px 28px; margin: 0 -12px; }
.sketchbook { position: relative; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto 1fr; min-width: 680px; aspect-ratio: 296 / 210; background: #fffcf5; border: 1px solid #d7cebc; border-radius: 5px 12px 12px 5px; box-shadow: 0 5px 0 -2px #eee6d5, 0 9px 0 -4px #d7cebc, 0 16px 28px #2820131c; color: #333029; }
.sketchbook::after { content: ''; position: absolute; inset: 0 auto 0 50%; width: 30px; transform: translateX(-50%); pointer-events: none; background: linear-gradient(90deg, transparent, #4030200c 35%, #40302026 49%, #fff8 53%, transparent); }
.book-heading { grid-column: 1 / -1; display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding: 28px 32px 16px; border-bottom: 1px solid #dfd8ca; }
.book-heading h3 { font-size: clamp(18px, 2.3vw, 26px); font-weight: 500; letter-spacing: -.025em; margin: 0; }.book-heading > span { font-size: 9px; letter-spacing: .14em; color: #8c8273; white-space: nowrap; }
.book-page { padding: 24px 30px 16px; display: flex; flex-direction: column; }.book-page h4 { font-size: 21px; font-weight: 500; margin: 0 0 8px; }.book-explanation { font-size: 13px; line-height: 1.5; min-height: 40px; margin: 0; }.sort-direction { font-size: 11px; color: #786d5f; margin: 14px 0 18px; }
.marker-rows { display: grid; gap: 22px; }.marker-row { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; padding-bottom: 14px; border-bottom: 1px solid #e6dfd2; }.marker-row:last-child { border-bottom: 0; }.marker-entry { display: flex; flex-direction: column; align-items: start; font-size: 10px; line-height: 1.5; font-variant-numeric: tabular-nums; }.book-swatch { display: block; width: 1cm; height: 1cm; max-width: 100%; margin-bottom: 8px; }.marker-number { font-weight: 600; margin-bottom: 2px; }.book-page-number { font-size: 10px; color: #9a8f7e; text-align: center; margin: auto 0 0; padding-top: 18px; }.notebook .book-caption { font-size: 13px; line-height: 1.6; color: #62616a; max-width: 850px; }
.book-scroll:focus-visible { outline: 3px solid #9871fa; outline-offset: 3px; }
@media(max-width: 760px) { .book-page { padding: 20px; }.book-heading { padding: 24px 20px 14px; }.sketchbook { min-width: 680px; }.book-heading h3 { font-size: 22px; } }
</style>
