<script setup>
import { computed, ref, watch } from 'vue'
import titleImage from '../../../assets/layouts/title.png'
import subtitleImage from '../../../assets/layouts/subtitle.png'
import portraitImage from '../../../assets/layouts/portrait.png'
import stripeImage from '../../../assets/layouts/stripe.png'
import columnImage from '../../../assets/layouts/text-column.png'
import wideImage from '../../../assets/layouts/text-wide.png'
import exampleImage from '../../../assets/layouts/example.png'

const layoutDialog = ref(null)

const elements = [
  { key: 'title', label: 'Überschrift', src: titleImage, w: 570, h: 97 },
  { key: 'subtitle', label: 'Unterzeile', src: subtitleImage, w: 570, h: 97 },
  { key: 'portrait', label: 'Porträt', src: portraitImage, w: 400, h: 372 },
  { key: 'stripe', label: 'Grüner Streifen', src: stripeImage, w: 70, h: 625 },
  { key: 'column', label: 'Text als Spalte', src: columnImage, w: 270, h: 270 },
  { key: 'wide', label: 'Text als Block', src: wideImage, w: 570, h: 148 }
]
const moods = ['gedrängt', 'seriös', 'verspielt', 'modern', 'klassisch', 'laut', 'ruhig', 'elegant', 'aggressiv', 'freundlich', 'düster', 'minimalistisch', 'chaotisch', 'dynamisch', 'provokant']
const drafts = ref(Array.from({ length: 3 }, () => ({ mood: '', items: [] })))
try {
  const saved = JSON.parse(localStorage.getItem('bfd1-layouts-v1'))
  if (Array.isArray(saved) && saved.length === 3 && saved.every(d => typeof d.mood === 'string' && Array.isArray(d.items) && d.items.every(i => elements.some(e => e.key === i.key) && ['x', 'y', 'scale', 'angle'].every(k => Number.isFinite(i[k]))))) drafts.value = saved
} catch { /* A fresh editor also works when browser storage is unavailable. */ }
const slot = ref(0)
const draft = computed(() => drafts.value[slot.value])
const selectedId = ref(null)
const selected = computed(() => draft.value.items.find(i => i.id === selectedId.value))
const svg = ref(null)
const busy = ref(false)
const message = ref('')
let drag = null
watch(drafts, () => {
  try { localStorage.setItem('bfd1-layouts-v1', JSON.stringify(drafts.value)) } catch { /* Editing remains available. */ }
}, { deep: true })
watch(slot, () => { selectedId.value = null; message.value = '' })
const asset = item => elements.find(e => e.key === item.key)
function add(element) {
  const item = { id: crypto.randomUUID(), key: element.key, x: 397, y: 560, scale: 1, angle: 0 }
  draft.value.items.push(item)
  selectedId.value = item.id
}
function point(event) {
  return new DOMPoint(event.clientX, event.clientY).matrixTransform(svg.value.getScreenCTM().inverse())
}
function startDrag(event, item) {
  if (event.button !== 0) return
  selectedId.value = item.id
  const p = point(event)
  drag = { id: item.id, dx: p.x - item.x, dy: p.y - item.y }
  svg.value.setPointerCapture(event.pointerId)
  event.preventDefault()
}
function move(event) {
  if (!drag) return
  const item = draft.value.items.find(i => i.id === drag.id)
  if (!item) return
  const p = point(event)
  item.x = Math.round(Math.max(0, Math.min(794, p.x - drag.dx)))
  item.y = Math.round(Math.max(100, Math.min(1123, p.y - drag.dy)))
}
function remove() {
  draft.value.items = draft.value.items.filter(i => i.id !== selectedId.value)
  selectedId.value = null
}
function layer(front) {
  const i = draft.value.items.indexOf(selected.value)
  if (i < 0) return
  const [item] = draft.value.items.splice(i, 1)
  front ? draft.value.items.push(item) : draft.value.items.unshift(item)
}
function nudge(event, item) {
  const moves = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }
  if (!moves[event.key]) return
  event.preventDefault()
  const [x, y] = moves[event.key]
  item.x = Math.max(0, Math.min(794, item.x + x * (event.shiftKey ? 20 : 5)))
  item.y = Math.max(100, Math.min(1123, item.y + y * (event.shiftKey ? 20 : 5)))
}
async function download() {
  if (busy.value) return
  const snapshots = JSON.parse(JSON.stringify(drafts.value))
  busy.value = true
  message.value = ''
  try {
    const { jsPDF } = await import('jspdf')
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true })
    const template = svg.value.cloneNode(true)
    for (const [index, snapshot] of snapshots.entries()) {
    const copy = template.cloneNode(true)
    const heading = copy.querySelectorAll('text')[1]
    heading.textContent = snapshot.mood || `Entwurf ${index + 1}`
    heading.setAttribute('font-size', snapshot.mood.length > 30 ? '21' : '30')
    const content = copy.querySelector('g[clip-path]')
    content.replaceChildren()
    for (const item of snapshot.items) {
      const element = asset(item)
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      group.setAttribute('transform', `translate(${item.x} ${item.y}) rotate(${item.angle}) scale(${item.scale})`)
      const image = document.createElementNS('http://www.w3.org/2000/svg', 'image')
      for (const [key, value] of Object.entries({ href: element.src, x: -element.w / 2, y: -element.h / 2, width: element.w, height: element.h })) image.setAttribute(key, value)
      group.append(image)
      content.append(group)
    }
    copy.querySelectorAll('[data-selection]').forEach(el => el.remove())
    copy.setAttribute('width', '1588')
    copy.setAttribute('height', '2246')
    for (const img of copy.querySelectorAll('image')) {
      const response = await fetch(img.getAttribute('href'))
      if (!response.ok) throw new Error('Bild konnte nicht geladen werden')
      const blob = await response.blob()
      const data = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      })
      img.setAttribute('href', data)
    }
    const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(copy)], { type: 'image/svg+xml;charset=utf-8' }))
    try {
      const image = new Image()
      image.src = url
      await image.decode()
      const canvas = document.createElement('canvas')
      canvas.width = 1588; canvas.height = 2246
      canvas.getContext('2d').drawImage(image, 0, 0)
      if (index > 0) pdf.addPage('a4', 'portrait')
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)

    } finally { URL.revokeObjectURL(url) }
    }
    pdf.save('Layouts-und-Wirkung-3-Entwuerfe.pdf')
    message.value = 'Dein PDF mit allen drei Entwürfen wurde erstellt.'
  } catch (error) {
    console.error(error)
    message.value = 'Der Download hat nicht geklappt. Bitte versuche es noch einmal.'
  } finally { busy.value = false }
}
</script>

<template>
  <main class="layout-lesson">
    <router-link class="back" :to="{ name: '1bfd1' }">← Zur Übersicht 1BFD1</router-link>
    <header class="intro">
      <p class="eyebrow">1BFD1 · Gestaltung</p>
      <h1>Layouts und Wirkung</h1>
      <h2>Was ist Wirkung?</h2>
      <p>Wirkung ist das, was ein Bild oder ein <button class="term" aria-haspopup="dialog" @click="layoutDialog.showModal()">Layout</button> bei dir auslöst. Es kann zum Beispiel ruhig, laut oder freundlich wirken.</p>
      <p>Im Design wollen wir eine bestimmte Wirkung beim Betrachter erzeugen. Dafür ordnen wir Bilder, Texte und Formen bewusst an. Ihre Größe, ihre Position und die Abstände verändern die Wirkung.</p>
      <h2>Deine Aufgabe</h2>
      <p>Arbeitet zu zweit oder zu dritt. Ihr habt 20 Minuten Zeit.</p>
      <ol class="task">
        <li>Wählt drei verschiedene Wirkungen aus und gestaltet dazu drei Layouts mit den vorgegebenen Elementen. Tragt die gewünschte Wirkung jeweils über dem Entwurf ein.</li>
        <li>Ladet die Entwürfe als PDF herunter und sagt eurem Lehrer oder eurer Lehrerin Bescheid.</li>
        <li>Präsentiert eure Ergebnisse vor der Klasse.</li>
      </ol>
      <section class="example" aria-labelledby="example-title"><h2 id="example-title">Ein Beispiel</h2><img :src="exampleImage" alt="Beispiellayout mit James Dean, Überschrift, Textspalte und grünem Streifen" loading="lazy" /></section>
    </header>

    <section class="workshop" aria-labelledby="editor-title">
      <h2 id="editor-title">Dein Layout</h2>
      <div class="drafts" aria-label="Entwurf wählen">
        <button v-for="(_, index) in drafts" :key="index" :aria-pressed="slot === index" @click="slot = index">Entwurf {{ index + 1 }}</button>
      </div>
      <label class="mood-label" for="mood">Welche Wirkung willst du zeigen?</label>
      <input id="mood" v-model="draft.mood" maxlength="50" placeholder="Zum Beispiel: ruhig" />
      <div class="moods" aria-label="Wirkung auswählen"><button v-for="mood in moods" :key="mood" @click="draft.mood = mood">{{ mood }}</button></div>
      <div class="editor-grid">
        <aside class="tools" aria-label="Elemente und Werkzeuge">
          <h3>Elemente</h3><p>Antippen fügt ein Element hinzu.</p>
          <div class="palette"><button v-for="element in elements" :key="element.key" @click="add(element)"><img :src="element.src" alt="" /><span>{{ element.label }}</span></button></div>
          <div v-if="selected" class="controls">
            <h3>{{ asset(selected).label }} bearbeiten</h3>
            <label>Größe: {{ Math.round(selected.scale * 100) }} %<input v-model.number="selected.scale" type="range" min="0.15" max="2.5" step="0.05" /></label>
            <label>Drehung: {{ selected.angle }}°<input v-model.number="selected.angle" type="range" min="-180" max="180" step="1" /></label>
            <div class="buttons"><button @click="layer(true)">Nach vorne</button><button @click="layer(false)">Nach hinten</button><button @click="remove">Element entfernen</button></div>
          </div>
          <p v-else>Tippe auf ein Element auf dem Blatt, um es zu bearbeiten.</p>
          <p class="hint">Mit den Pfeiltasten kannst du ein ausgewähltes Element verschieben.</p>
        </aside>
        <div class="paper-wrap">
          <p class="paper-label">DIN A4 · Hochformat</p>
          <div class="paper-viewport">
          <svg ref="svg" class="paper" viewBox="0 0 794 1123" xmlns="http://www.w3.org/2000/svg" aria-label="Layoutfläche im DIN-A4-Hochformat" @pointermove="move" @pointerup="drag = null" @pointercancel="drag = null" @lostpointercapture="drag = null" @pointerdown.self="selectedId = null">
            <defs><clipPath id="layout-content"><rect x="0" y="100" width="794" height="1023" /></clipPath></defs>
            <rect width="794" height="1123" fill="white" @pointerdown="selectedId = null" />
            <text x="30" y="32" fill="#555" font-family="Arial, sans-serif" font-size="14">MEINE WIRKUNG</text>
            <text x="30" y="70" fill="#111" font-family="Arial, sans-serif" :font-size="draft.mood.length > 30 ? 21 : 30">{{ draft.mood || 'Welche Wirkung willst du zeigen?' }}</text>
            <path d="M30 90 H764" stroke="#ddd" />
            <g clip-path="url(#layout-content)">
              <g v-for="item in draft.items" :key="item.id" :transform="`translate(${item.x} ${item.y}) rotate(${item.angle}) scale(${item.scale})`" tabindex="0" role="button" :aria-label="`${asset(item).label} verschieben`" class="placed" @pointerdown.stop="startDrag($event, item)" @focus="selectedId = item.id" @keydown="nudge($event, item)">
                <image :href="asset(item).src" :x="-asset(item).w / 2" :y="-asset(item).h / 2" :width="asset(item).w" :height="asset(item).h" />
                <rect v-if="selectedId === item.id" data-selection="true" :x="-asset(item).w / 2" :y="-asset(item).h / 2" :width="asset(item).w" :height="asset(item).h" fill="none" stroke="#2448e8" stroke-width="2" vector-effect="non-scaling-stroke" stroke-dasharray="6 4" />
              </g>
            </g>
          </svg>
          </div>
          <button class="download" :disabled="busy" @click="download">{{ busy ? 'PDF wird erstellt …' : 'Alle drei Entwürfe als PDF herunterladen' }}</button>
          <p role="status">{{ message }}</p>
        </div>
      </div>
    </section>
    <dialog ref="layoutDialog" class="term-dialog" aria-labelledby="layout-definition-title" aria-describedby="layout-definition" @click="($event.target === layoutDialog) && layoutDialog.close()">
      <h2 id="layout-definition-title">Was ist ein Layout?</h2>
      <p id="layout-definition">Ein Layout ist die Anordnung von Bildern, Texten und Formen auf einer Seite. Du legst fest, was wo steht, wie groß es ist und wie viel Platz dazwischen bleibt.</p>
      <button autofocus @click="layoutDialog.close()">Schließen</button>
    </dialog>
  </main>
</template>

<style scoped>
.layout-lesson { max-width: 1400px; margin: auto; padding: 32px clamp(16px, 4vw, 64px) 70px; color: #191919; font-family: 'Jost', sans-serif; }
.back { color: inherit; text-underline-offset: 4px; }
.intro { max-width: 900px; margin: 48px auto; font-size: 21px; line-height: 1.6; }
.eyebrow { text-transform: uppercase; font-size: 15px; letter-spacing: .14em; }
h1 { font-size: clamp(36px, 6vw, 64px); line-height: 1.1; margin: 16px 0 40px; }
h2 { font-size: 30px; margin: 32px 0 12px; }
h3 { margin: 0 0 12px; }
.task { padding-left: 28px; }.task li { padding-left: 8px; margin-bottom: 14px; }
.example { border-top: 1px solid #ccc; padding: 20px 0; }.example img { display: block; width: min(100%, 420px); margin: 24px auto; }
.workshop { border-top: 2px solid #191919; }
button, input { font: inherit; }button { cursor: pointer; border: 1px solid #bbb; border-radius: 6px; background: white; color: #191919; padding: 10px 14px; }button:hover { background: #eee; }button:focus-visible, input:focus-visible, summary:focus-visible { outline: 3px solid #2448e8; outline-offset: 3px; }
button[aria-pressed="true"], .download { background: #191919; color: white; }.download:hover { background: #333; }button:disabled { opacity: .6; cursor: wait; }
.drafts, .moods, .buttons { display: flex; flex-wrap: wrap; gap: 8px; }.drafts { margin: 20px 0; }
.mood-label { display: block; font-size: 22px; margin-bottom: 8px; }#mood { box-sizing: border-box; width: 100%; padding: 14px; border: 1px solid #999; border-radius: 6px; font-size: 24px; }.moods { margin: 12px 0 28px; }.moods button { font-size: 15px; padding: 6px 12px; }
.editor-grid { display: grid; grid-template-columns: 290px minmax(0, 1fr); gap: 32px; align-items: start; }.tools { background: #f4f4f1; padding: 20px; border-radius: 10px; }.tools p { line-height: 1.5; }.palette { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }.palette button { padding: 10px 6px; font-size: 14px; }.palette img { display: block; width: 100%; height: 65px; object-fit: contain; margin-bottom: 8px; }.controls { margin-top: 24px; }.controls label { display: block; margin: 18px 0; }.controls input { display: block; width: 100%; margin-top: 12px; }.hint { font-size: 14px; color: #555; }
.paper-wrap { min-width: 0; }.paper-label { margin: 0 0 10px; color: #555; }.paper-viewport { height: 100vh; height: 100dvh; width: 100%; display: grid; place-items: center; background: #e9e9e5; overflow: hidden; }
.paper { display: block; width: 100%; height: 100%; touch-action: none; user-select: none; }.placed { cursor: grab; outline: none; }.placed:active { cursor: grabbing; }.download { width: 100%; margin-top: 24px; padding: 16px; font-size: 20px; }
@media (max-width: 800px) { .editor-grid { grid-template-columns: 1fr; }.palette { grid-template-columns: repeat(3, 1fr); }.tools { padding: 16px; }.intro { font-size: 19px; }.controls { margin-top: 16px; } }
.term { padding: 0; border: 0; border-radius: 0; background: transparent; color: #2448e8; text-decoration: underline dotted; text-underline-offset: 4px; }
.term-dialog { box-sizing: border-box; width: min(520px, calc(100% - 32px)); max-height: 85dvh; padding: 28px; border: none; border-radius: 12px; color: #191919; box-shadow: 0 16px 60px #0003; }
.term-dialog::backdrop { background: #0008; }
.term-dialog h2 { margin: 0 0 16px; }
.term-dialog p { font-size: 21px; line-height: 1.6; }
</style>
