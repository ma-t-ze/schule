<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as THREE from 'three'
import Button from 'primevue/button'
import SelectButton from 'primevue/selectbutton'
import Slider from 'primevue/slider'
import FluchtpunktErklaerung from './FluchtpunktErklaerung.vue'

const modes = [
  { label: 'Dimetrie', value: 'dimetric' },
  { label: 'Isometrie', value: 'isometric' },
  { label: 'Zentralperspektive', value: 'one' },
  { label: 'Zwei-Punkt-Perspektive', value: 'two' }
]
const mode = ref('isometric')
const mount = ref(null)
const sceneElement = ref(null)
const width = ref(900)
const height = ref(560)
const leftPoint = ref(0.15)
const rightPoint = ref(0.85)
const centralX = ref(0.5)
const horizon = ref(0.42)
const objectX = ref(0)
const objectY = ref(0)
const showGuides = ref(true)
const problem = ref('')
const description = computed(() => ({
  dimetric: { title: 'Dimetrie', text: 'Parallele Kanten bleiben parallel. Zwei Raumachsen werden gleich stark verkürzt; die dritte erhält eine andere Verkürzung.', detail: 'In dieser Ansicht sind die beiden waagerechten Achsen gleich verkürzt. Ihre Neigung lässt sich an den Achsenlinien ablesen.' },
  isometric: { title: 'Isometrie', text: 'Alle drei Raumachsen sind gleich stark verkürzt. Parallele Kanten bleiben parallel und die Achsen liegen jeweils 120° auseinander.', detail: 'Die beiden nach hinten laufenden Achsen erscheinen hier jeweils um 30° zur Waagerechten geneigt.' },
  one: { title: 'Zentralperspektive', text: 'Die Vorderseite ist parallel zur Bildebene. Die in die Tiefe verlaufenden Kanten treffen sich in einem Fluchtpunkt.', detail: 'Ziehe den Fluchtpunkt, um seine Lage und die Augenhöhe zu verändern.' },
  two: { title: 'Zwei-Punkt-Perspektive', text: 'Die beiden waagerechten Kantenrichtungen fluchten jeweils zu einem eigenen Punkt. Senkrechte Kanten bleiben parallel.', detail: 'Ziehe einen der beiden Fluchtpunkte. Beide liegen auf demselben Horizont. Ziehe die Punkte für den Horizont und den Würfel unabhängig davon direkt im Bild.' }
})[mode.value])
const points = computed(() => mode.value === 'one'
  ? [{ id: 'center', label: 'F', x: centralX.value * width.value, y: horizon.value * height.value }]
  : mode.value === 'two' ? [{ id: 'left', label: 'F₁', x: leftPoint.value * width.value, y: horizon.value * height.value }, { id: 'right', label: 'F₂', x: rightPoint.value * width.value, y: horizon.value * height.value }] : [])
const lines = ref([])
const silhouette = ref('')
const maskId = `cube-mask-${Math.random().toString(36).slice(2)}`
function convexHull(points) {
  const sorted = [...points].sort((a, b) => a.x - b.x || a.y - b.y)
  const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)
  const lower = [], upper = []
  for (const p of sorted) { while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop(); lower.push(p) }
  for (const p of sorted.slice().reverse()) { while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop(); upper.push(p) }
  lower.pop(); upper.pop()
  return lower.concat(upper).map(p => `${p.x},${p.y}`).join(' ')
}
const measurements = ref([])
const formatNumber = value => new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2 }).format(value)
const perspectiveInsight = computed(() => {
  if (mode.value !== 'two') return null
  const left = (0.5 - leftPoint.value) * width.value
  const right = (rightPoint.value - 0.5) * width.value
  const focal = Math.sqrt(left * right)
  const angle = THREE.MathUtils.radToDeg(2 * Math.atan(width.value / (2 * focal)))
  const ratio = rightPoint.value - leftPoint.value
  const symmetric = Math.abs(left - right) / Math.max(left, right) < 0.02
  const impression = angle < 60 ? 'Meist natürlich' : angle < 90 ? 'Zunehmend verzerrt' : 'Starke Verzerrung'
  return { angle, ratio, symmetric, impression }
})
let renderer, scene, cube, cubeGroup, camera, observer
let cameraYaw = 0
let projectionFocal = 1
let objectDrag = null
let dragging = null

function projectPoint(point) {
  const p = point.clone().project(camera)
  return { x: (p.x + 1) * width.value / 2, y: (1 - p.y) * height.value / 2 }
}
function updateView() {
  if (!renderer || !scene) return
  const w = width.value, h = height.value
  if (mode.value === 'isometric' || mode.value === 'dimetric') {
    const extent = 2.4
    camera = new THREE.OrthographicCamera(-extent * w / h, extent * w / h, extent, -extent, 0.1, 100)
    const elevation = mode.value === 'isometric' ? Math.atan(1 / Math.sqrt(2)) : Math.atan(1 / (2 * Math.sqrt(2)))
    camera.position.set(6 * Math.cos(elevation) / Math.sqrt(2), 6 * Math.sin(elevation), 6 * Math.cos(elevation) / Math.sqrt(2))
    camera.lookAt(0, 0, 0)
  } else if (mode.value === 'one') {
    camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100)
    const focal = h / (2 * Math.tan(THREE.MathUtils.degToRad(42) / 2))
    // Keep the cube near the image centre while moving the projection centre.
    // Translating the eye changes the visible depth faces without rotating the front face.
    const eyeX = (centralX.value * w - w / 2) * 6 / focal
    const eyeY = (h / 2 - horizon.value * h) * 6 / focal
    camera.position.set(eyeX, eyeY, 6)
    camera.lookAt(eyeX, eyeY, 0)
    camera.setViewOffset(w, h, w / 2 - centralX.value * w, h / 2 - horizon.value * h, w, h)
  } else {
    // Both horizontal vanishing points are on the horizon and straddle the optical centre.
    const left = leftPoint.value * w - w / 2
    const right = rightPoint.value * w - w / 2
    const focal = Math.sqrt(Math.max(1, -left * right))
    const yaw = Math.atan2(focal, -left)
    cameraYaw = yaw
    projectionFocal = focal
    const fov = THREE.MathUtils.radToDeg(2 * Math.atan(h / (2 * focal)))
    camera = new THREE.PerspectiveCamera(fov, w / h, 0.1, 100)
    const eyeY = (h / 2 - horizon.value * h) * 6 / focal
    camera.position.set(6 * Math.sin(yaw), eyeY, 6 * Math.cos(yaw))
    camera.lookAt(0, eyeY, 0)
    camera.setViewOffset(w, h, 0, h / 2 - horizon.value * h, w, h)
  }
  if (mode.value === 'two') {
    const factor = 6 / projectionFocal
    const dx = objectX.value * w * factor
    const dy = -objectY.value * h * factor
    cubeGroup.position.set(Math.cos(cameraYaw) * dx, dy, -Math.sin(cameraYaw) * dx)
  } else cubeGroup.position.set(0, 0, 0)
  cubeGroup.updateMatrixWorld(true)
  camera.updateProjectionMatrix()
  camera.updateMatrixWorld()
  renderer.render(scene, camera)
  if (mode.value === 'one' || mode.value === 'two') {
    const projectCube = (x, y, z) => projectPoint(cubeGroup.localToWorld(new THREE.Vector3(x, y, z)))
    const vertices = [-1, 1].flatMap(x => [-1, 1].flatMap(y => [-1, 1].map(z => projectCube(x, y, z))))
    silhouette.value = convexHull(vertices)
    const makeLine = (start, target) => ({ x1: start.x, y1: start.y, x2: target.x, y2: target.y })
    lines.value = mode.value === 'one'
      ? [-1, 1].flatMap(x => [-1, 1].map(y => makeLine(projectCube(x, y, 1), points.value[0])))
      : [-1, 1].map(y => makeLine(projectCube(-1, y, 1), points.value[0]))
        .concat([-1, 1].map(y => makeLine(projectCube(1, y, -1), points.value[1])))
    measurements.value = []
  } else {
    const origin = projectPoint(new THREE.Vector3(0, 0, 0))
    const axes = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)].map(projectPoint)
    const lengths = axes.map(p => Math.hypot(p.x - origin.x, p.y - origin.y))
    const largest = Math.max(...lengths)
    measurements.value = lengths.map((length, index) => ({ name: ['X', 'Y', 'Z'][index], value: length / largest }))
    lines.value = []
  }
}
function setHorizontalPoint(id, x) {
  if (id === 'center') centralX.value = Math.max(.04, Math.min(.96, x))
  if (id === 'left') leftPoint.value = Math.max(-1.5, Math.min(.49, x))
  if (id === 'right') rightPoint.value = Math.max(.51, Math.min(2.5, x))
}
function setPoint(event, id) {
  const box = sceneElement.value.getBoundingClientRect()
  const x = (event.clientX - box.left) / box.width
  horizon.value = Math.max(0.1, Math.min(0.9, (event.clientY - box.top) / box.height))
  setHorizontalPoint(id, x)
}
function startDrag(event, id) {
  event.preventDefault()
  dragging = id
  event.currentTarget.setPointerCapture(event.pointerId)
  setPoint(event, id)
}
function startObjectDrag(event) {
  if (mode.value !== 'two') return
  event.preventDefault()
  objectDrag = { x: event.clientX, y: event.clientY, startX: objectX.value, startY: objectY.value }
  event.currentTarget.setPointerCapture(event.pointerId)
}
function moveDrag(event) {
  if (dragging) setPoint(event, dragging)
  if (objectDrag) {
    const box = sceneElement.value.getBoundingClientRect()
    objectX.value = Math.max(-.4, Math.min(.4, objectDrag.startX + (event.clientX - objectDrag.x) / box.width))
    objectY.value = Math.max(-.4, Math.min(.4, objectDrag.startY + (event.clientY - objectDrag.y) / box.height))
  }
}
function stopDrag() { dragging = null; objectDrag = null }
function nudge(event, id) {
  const d = 0.01
  if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return
  event.preventDefault()
  if (event.key === 'ArrowUp') horizon.value = Math.max(.1, horizon.value - d)
  if (event.key === 'ArrowDown') horizon.value = Math.min(.9, horizon.value + d)
  const delta = event.key === 'ArrowLeft' ? -d : event.key === 'ArrowRight' ? d : 0
  const current = id === 'center' ? centralX.value : id === 'left' ? leftPoint.value : rightPoint.value
  setHorizontalPoint(id, current + delta)
}
function setSymmetricDistance(distance) {
  leftPoint.value = 0.5 - distance / 2
  rightPoint.value = 0.5 + distance / 2
}
function reset() { leftPoint.value = .15; rightPoint.value = .85; centralX.value = .5; horizon.value = .42; objectX.value = 0; objectY.value = 0 }
onMounted(async () => {
  await nextTick()
  try {
    scene = new THREE.Scene()
    scene.background = new THREE.Color('#f5f7f6')
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.value.appendChild(renderer.domElement)
    const faces = [0x8eb6dd, 0x719cc6, 0xa8c9e5, 0x638bb2, 0xc4ddf0, 0x759fc8].map(color => new THREE.MeshBasicMaterial({ color }))
    cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), faces)
    cubeGroup = new THREE.Group()
    cubeGroup.add(cube)
    cubeGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(cube.geometry), new THREE.LineBasicMaterial({ color: 0x26374d })))
    scene.add(cubeGroup)
    observer = new ResizeObserver(() => {
      if (!sceneElement.value || !renderer) return
      width.value = Math.max(1, sceneElement.value.clientWidth)
      height.value = Math.max(1, sceneElement.value.clientHeight)
      renderer.setSize(width.value, height.value, false)
      updateView()
    })
    observer.observe(sceneElement.value)
  } catch { problem.value = 'Die 3D-Ansicht konnte nicht gestartet werden. Bitte prüfe, ob WebGL im Browser aktiviert ist.' }
})
watch([mode, leftPoint, rightPoint, centralX, horizon, objectX, objectY], updateView)
onBeforeUnmount(() => { observer?.disconnect(); cube?.geometry.dispose(); cube?.material.forEach(material => material.dispose()); scene?.traverse(object => { if (object.isLineSegments) { object.geometry.dispose(); object.material.dispose() } }); renderer?.dispose(); renderer?.domElement.remove() })
</script>

<template>
  <main class="page"><div class="shell">
    <RouterLink :to="{ name: '3tgg12-admin' }" class="back">← Zur Lehreransicht 3TGG1/2</RouterLink>
    <header><p class="eyebrow">LEHRERANSICHT · BPE 8.2 UND 8.3</p><h1>Räumliche Darstellung</h1><p>Vergleiche die Darstellungsarten an einem Würfel und verschiebe die Fluchtpunkte direkt im Bild.</p></header>
    <section class="controls" aria-label="Darstellungsart"><label>Darstellungsart</label><SelectButton v-model="mode" :options="modes" option-label="label" option-value="value" :allow-empty="false" aria-label="Darstellungsart" /></section>
    <div class="layout"><section class="visual-panel"><div class="visual-heading"><div><h2>{{ description.title }}</h2><p>{{ description.detail }}</p></div><Button v-if="mode === 'one' || mode === 'two'" label="Zurücksetzen" size="small" outlined @click="reset" /></div>
      <div ref="sceneElement" class="scene" @pointermove="moveDrag" @pointerup="stopDrag" @pointercancel="stopDrag">
        <div ref="mount" class="canvas-host" :class="{ movable: mode === 'two' }" aria-label="Dreidimensionale Würfeldarstellung" @pointerdown="startObjectDrag" />
        <svg v-if="mode === 'one' || mode === 'two'" class="overlay" :viewBox="`0 0 ${width} ${height}`" aria-label="Horizont und Fluchtpunkte">
          <defs><mask :id="maskId" maskUnits="userSpaceOnUse" x="0" y="0" :width="width" :height="height"><rect x="0" y="0" :width="width" :height="height" fill="white" /><polygon :points="silhouette" fill="black" stroke="black" stroke-width="2" /></mask></defs>
          <g :mask="`url(#${maskId})`"><line x1="0" :y1="horizon * height" :x2="width" :y2="horizon * height" class="horizon" /><g v-if="showGuides"><line v-for="(line, index) in lines" :key="index" v-bind="line" class="guide" /></g></g>
          <text x="12" :y="horizon * height - 8" class="horizon-label">Horizont</text>
          <g v-for="point in points" :key="point.id" class="point" role="slider" tabindex="0" :aria-label="`Fluchtpunkt ${point.label}. Mit Pfeiltasten verschieben.`" :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="Math.round(point.x / width * 100)" :aria-valuetext="`Horizontal ${Math.round(point.x / width * 100)} Prozent, Horizont ${Math.round(horizon * 100)} Prozent`" @pointerdown="startDrag($event, point.id)" @keydown="nudge($event, point.id)"><circle :cx="point.x" :cy="point.y" r="15" /><text :x="point.x" :y="point.y + 5" text-anchor="middle">{{ point.label }}</text></g>
        </svg>
      </div>
      <div v-if="mode === 'two'" class="point-controls"><label>F₁ horizontal <span>{{ formatNumber(leftPoint * 100) }} %</span><input type="range" min="-150" max="49" step="1" :value="Math.round(leftPoint * 100)" @input="setHorizontalPoint('left', Number($event.target.value) / 100)" /></label><label>F₂ horizontal <span>{{ formatNumber(rightPoint * 100) }} %</span><input type="range" min="51" max="250" step="1" :value="Math.round(rightPoint * 100)" @input="setHorizontalPoint('right', Number($event.target.value) / 100)" /></label><p>0 % und 100 % markieren den linken und rechten Bildrand. Außerhalb des Bildes kannst du die Fluchtpunkte mit den Reglern verschieben.</p></div>
      <p v-if="problem" class="error" role="alert">{{ problem }}</p>
      <div class="visual-options"><label v-if="mode === 'one' || mode === 'two'"><input v-model="showGuides" type="checkbox" /> Fluchtlinien anzeigen</label><span v-if="mode === 'two'">Würfel ziehen · Fluchtpunkte mit Maus, Finger oder Pfeiltasten verschieben</span><span v-else-if="mode === 'one'">Fluchtpunkt mit Maus, Finger oder Pfeiltasten verschieben</span><span v-else>Würfel mit gleich langen Kanten</span></div>
    </section>
    <aside class="explanation"><p class="eyebrow">ERKLÄRUNG</p><h2>{{ description.title }}</h2><p>{{ description.text }}</p><div v-if="measurements.length" class="measurement"><h3>Verkürzung der Raumachsen</h3><p>Vergleich der dargestellten Achsenlängen bei gleich langen Kanten:</p><div v-for="axis in measurements" :key="axis.name" class="axis-row"><strong>{{ axis.name }}</strong><div class="track"><span :style="{ width: `${axis.value * 100}%` }" /></div><span>{{ Math.round(axis.value * 100) }} %</span></div><p class="small">Relativ zur längsten dargestellten Achse; gerundet.</p></div><div v-else class="measurement"><h3>Horizont und Fluchtpunkte</h3><p>Der Horizont entspricht der Augenhöhe. Ziehe die markierten Punkte oder verändere ihre Position mit den Pfeiltasten.</p><label for="horizon">Höhe des Horizonts</label><Slider input-id="horizon" :model-value="Math.round(horizon * 100)" :min="10" :max="90" @update:model-value="horizon = $event / 100" /></div><div v-if="perspectiveInsight" class="measurement insight"><h3>Wie wirkt die Perspektive?</h3><p>Wähle einen symmetrischen Fluchtpunktabstand und vergleiche die Wirkung am Würfel:</p><div class="distance-presets" role="group" aria-label="Symmetrischer Fluchtpunktabstand"><Button label="1 ×" size="small" outlined @click="setSymmetricDistance(1)" /><Button label="1,73 ×" size="small" outlined @click="setSymmetricDistance(Math.sqrt(3))" /><Button label="2 ×" size="small" outlined @click="setSymmetricDistance(2)" /></div><dl><div><dt>Fluchtpunktabstand</dt><dd>{{ formatNumber(perspectiveInsight.ratio) }} × Bildbreite</dd></div><div><dt>Horizontaler Bildwinkel</dt><dd>{{ formatNumber(perspectiveInsight.angle) }}°</dd></div><div><dt>Gestalterische Einschätzung</dt><dd>{{ perspectiveInsight.impression }}</dd></div></dl><p v-if="!perspectiveInsight.symmetric" class="small">Die Fluchtpunkte liegen nicht symmetrisch zur Bildmitte. Für die Orientierung ist deshalb der tatsächliche Bildwinkel aussagekräftiger als das Abstandsverhältnis allein.</p><p v-else class="small">Die Fluchtpunkte liegen annähernd symmetrisch zur Bildmitte. Vergleiche deine Werte mit den Beispielen:</p><table><thead><tr><th>Abstand F₁–F₂</th><th>Wirkung bei Symmetrie</th></tr></thead><tbody><tr><td>2 × Bildbreite</td><td>Meist natürlich</td></tr><tr><td>ca. 1,73 × Bildbreite</td><td>Bildwinkel 60°</td></tr><tr><td>1 × Bildbreite</td><td>Bildwinkel 90°, starke Verzerrung</td></tr><tr><td>Unter 1 × Bildbreite</td><td>Sehr starke Verzerrung</td></tr></tbody></table><p><strong>Zeichenregel:</strong> Bei symmetrischer Anordnung ist ein Abstand von mindestens etwa 1,7 Bildbreiten ein nützlicher Ausgangspunkt.</p><p class="small">Das ist eine gestalterische Faustregel, keine mathematische Grenze. Auch stärkere Verzerrungen können geometrisch korrekt sein.</p></div></aside></div>
    <FluchtpunktErklaerung />
  </div></main>
</template>

<style scoped>
.page { min-height: 100vh; padding: 32px; box-sizing: border-box; background: var(--school-background); color: var(--school-text); font-family: 'Jost', sans-serif; } .shell { max-width: 1400px; margin: auto; } .back { color: var(--school-primary); text-decoration: none; } .back:hover { text-decoration: underline; } header { margin: 28px 0; } h1 { margin: 6px 0; font-size: clamp(2rem, 4vw, 3rem); font-weight: 500; } header p:not(.eyebrow), .visual-heading p { opacity: .75; line-height: 1.5; } .eyebrow { color: var(--school-primary); font-weight: 600; letter-spacing: .1em; font-size: .75rem; margin: 0; } .controls { display: grid; gap: 10px; margin-bottom: 20px; } .controls label { font-weight: 600; } .controls :deep(.p-selectbutton) { display: flex; flex-wrap: wrap; } .layout { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 20px; align-items: start; } .visual-panel,.explanation { padding: 20px; background: var(--school-surface); border: 1px solid var(--school-border); border-radius: var(--school-panel-radius); } .visual-heading { display: flex; justify-content: space-between; align-items: start; gap: 15px; } h2 { font-size: 1.2rem; font-weight: 500; margin: 0; } .visual-heading p { margin: 5px 0 16px; } .scene { height: clamp(380px, 53vw, 570px); position: relative; overflow: hidden; border: 1px solid var(--school-border); background: #f5f7f6; touch-action: none; } .canvas-host,.canvas-host :deep(canvas),.overlay { position: absolute; inset: 0; width: 100%; height: 100%; display: block; } .canvas-host.movable { cursor: grab; touch-action: none; } .canvas-host.movable:active { cursor: grabbing; } .overlay { pointer-events: none; } .horizon { stroke: #7e8a94; stroke-width: 1.5; stroke-dasharray: 7 5; } .horizon-label { font: 13px 'Jost', sans-serif; fill: #66737e; } .guide { stroke: var(--school-primary); stroke-width: 1.5; stroke-dasharray: 5 4; opacity: .75; } .point { pointer-events: all; cursor: grab; touch-action: none; } .point:active { cursor: grabbing; } .point circle { fill: var(--school-primary); stroke: white; stroke-width: 3; } .point text { fill: white; font: 600 13px 'Jost', sans-serif; pointer-events: none; } .point:focus-visible circle { stroke: #273a50; stroke-width: 4; } .visual-options { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 14px; font-size: .9rem; color: #64756d; } .visual-options label { display: flex; align-items: center; gap: 8px; color: var(--school-text); } .visual-options input { accent-color: var(--school-primary); } .explanation { line-height: 1.55; } .explanation h2 { margin-top: 8px; } .measurement { border-top: 1px solid var(--school-border); margin-top: 20px; padding-top: 16px; } .measurement h3 { font-size: 1rem; font-weight: 500; } .measurement label { display: block; margin: 22px 0 14px; } .axis-row { display: grid; grid-template-columns: 18px 1fr 40px; gap: 9px; align-items: center; margin: 12px 0; font-size: .9rem; } .track { height: 8px; background: var(--school-background); border-radius: 8px; } .track span { display: block; height: 100%; border-radius: inherit; background: var(--school-primary); } .insight dl { margin: 0; } .insight dl div { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; padding: 7px 0; border-bottom: 1px solid var(--school-border); font-size: .88rem; } .insight dt { opacity: .8; } .insight dd { margin: 0; text-align: right; font-weight: 500; white-space: nowrap; } .distance-presets { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0 16px; } .point-controls { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 20px; padding: 16px 0 4px; } .point-controls label { display: grid; gap: 6px; font-size: .9rem; } .point-controls label span { font-weight: 600; } .point-controls input { width: 100%; accent-color: var(--school-primary); } .point-controls p { grid-column: 1 / -1; margin: 0; font-size: .8rem; opacity: .7; } .insight table { width: 100%; border-collapse: collapse; font-size: .82rem; } .insight th,.insight td { padding: 8px 4px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--school-border); } .small { font-size: .8rem; opacity: .7; } .error { color: #b42318; } @media(max-width: 850px) { .page { padding: 20px 16px; } .layout { grid-template-columns: 1fr; } .scene { height: 420px; } } @media(max-width: 480px) { .scene { height: 340px; } .visual-panel,.explanation { padding: 14px; } }
</style>
