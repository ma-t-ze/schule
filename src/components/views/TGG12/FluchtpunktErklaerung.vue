<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Button from 'primevue/button'

const canvasHost = ref(null)
const farDistance = ref(7)
const rotationY = ref(0)
const rotationX = ref(0)
const running = ref(true)
const showRays = ref(true)
const showVanishing = ref(true)
const rotateAutomatically = ref(false)
const vanishingStates = ref([])
const error = ref('')
const nearDistance = 4
const planeDistance = 2
let renderer, scene, camera, controls, observer, animation, lastTime
let changingGeometry, rayGroup, vanishingGroup
let vanishingLabels = []
let rotationDirection = 1
let direction = 1

const point = (x, y, z) => new THREE.Vector3(x, y, z)
function projectToPlane(position) {
  // The eye is at (0, 0, 0), and the image plane is z = -2.
  return position.clone().multiplyScalar(planeDistance / -position.z)
}
function lineBetween(a, b, color, options = {}) {
  const geometry = new THREE.BufferGeometry().setFromPoints([a, b])
  const material = options.dashed
    ? new THREE.LineDashedMaterial({ color, dashSize: .12, gapSize: .07, transparent: true, opacity: .8, depthWrite: false, depthTest: options.depthTest !== false })
    : new THREE.LineBasicMaterial({ color, depthWrite: false, depthTest: options.depthTest !== false })
  const line = new THREE.Line(geometry, material)
  if (options.dashed) line.computeLineDistances()
  if (options.depthTest === false) line.renderOrder = 5
  return line
}
function makeLabel(text, background, color = '#ffffff') {
  const canvas = document.createElement('canvas')
  canvas.width = 512; canvas.height = 128
  const context = canvas.getContext('2d')
  context.fillStyle = background
  context.beginPath(); context.roundRect(4, 16, 504, 96, 18); context.fill()
  context.fillStyle = color; context.font = '600 46px sans-serif'; context.textAlign = 'center'; context.textBaseline = 'middle'; context.fillText(text, 256, 64)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false }))
  sprite.scale.set(1.6, .4, 1); sprite.renderOrder = 8
  return sprite
}
function disposeGroup(group) {
  if (!group) return
  group.traverse(object => { object.geometry?.dispose(); if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => { material.map?.dispose(); material.dispose() }) })
}
function rebuildGeometry() {
  if (!scene) return
  if (changingGeometry) { scene.remove(changingGeometry); disposeGroup(changingGeometry) }
  changingGeometry = new THREE.Group()
  rayGroup = new THREE.Group()
  changingGeometry.add(rayGroup)
  rayGroup.visible = showRays.value
  vanishingGroup = new THREE.Group()
  vanishingGroup.visible = showVanishing.value
  changingGeometry.add(vanishingGroup)
  const far = farDistance.value
  const vertices = [
    point(-1, .45, -nearDistance), point(1, .45, -nearDistance), point(1, -.85, -nearDistance), point(-1, -.85, -nearDistance),
    point(-1, .45, -far), point(1, .45, -far), point(1, -.85, -far), point(-1, -.85, -far)
  ]
  const center = point(0, -.2, -(nearDistance + far) / 2)
  const rotation = new THREE.Euler(THREE.MathUtils.degToRad(rotationX.value), THREE.MathUtils.degToRad(rotationY.value), 0, 'YXZ')
  for (const vertex of vertices) vertex.sub(center).applyEuler(rotation).add(center)
  const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]]
  const body = new THREE.Mesh(new THREE.BoxGeometry(2, 1.3, far - nearDistance), new THREE.MeshBasicMaterial({ color: 0x99b8ce, transparent: true, opacity: .19, depthWrite: false, side: THREE.DoubleSide }))
  body.position.copy(center)
  body.rotation.copy(rotation)
  changingGeometry.add(body)
  for (const [a, b] of edges) {
    const depthEdge = (a === 0 && b === 4) || (a === 1 && b === 5)
    changingGeometry.add(lineBetween(vertices[a], vertices[b], depthEdge ? 0x208044 : 0x425464))
    const p1 = projectToPlane(vertices[a]); const p2 = projectToPlane(vertices[b])
    // Offset the drawn projection slightly towards the observer to keep it distinct from the transparent plane.
    p1.z += .01; p2.z += .01
    changingGeometry.add(lineBetween(p1, p2, depthEdge ? 0x208044 : 0x264c86, { depthTest: false }))
  }
  const dotGeometry = new THREE.SphereGeometry(.035, 10, 8)
  const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xe3791c, depthTest: false })
  for (const vertex of vertices) {
    rayGroup.add(lineBetween(point(0, 0, 0), vertex, 0xe3791c, { dashed: true }))
    const intersection = projectToPlane(vertex); intersection.z += .012
    const dot = new THREE.Mesh(dotGeometry, dotMaterial); dot.position.copy(intersection); dot.renderOrder = 6
    changingGeometry.add(dot)
  }
  // A vanishing point is the intersection of the image plane with a line
  // through the eye parallel to the corresponding family of edges.
  const families = [
    { label: 'F₁', edges: [[0, 4], [1, 5], [3, 7], [2, 6]], color: 0x208044 },
    { label: 'F₂', edges: [[0, 1], [4, 5], [3, 2], [7, 6]], color: 0x264c86 }
  ]
  const states = []
  families.forEach((family, index) => {
    const directionVector = vertices[family.edges[0][1]].clone().sub(vertices[family.edges[0][0]]).normalize()
    if (Math.abs(directionVector.z) < .005) {
      states.push({ label: family.label, state: 'im Unendlichen (parallel zur Bildebene)' })
      if (vanishingLabels[index]) vanishingLabels[index].visible = false
      return
    }
    const target = directionVector.multiplyScalar(-planeDistance / directionVector.z)
    if (Math.abs(target.x) > 8 || Math.abs(target.y) > 8) {
      states.push({ label: family.label, state: 'außerhalb des dargestellten Bereichs' })
      if (vanishingLabels[index]) vanishingLabels[index].visible = false
      return
    }
    target.z += .018
    const dot = new THREE.Mesh(new THREE.SphereGeometry(.055, 12, 8), new THREE.MeshBasicMaterial({ color: family.color, depthTest: false }))
    dot.position.copy(target); dot.renderOrder = 7; vanishingGroup.add(dot)
    for (const [a, b] of family.edges) {
      const start = projectToPlane(vertices[b]); start.z += .018
      vanishingGroup.add(lineBetween(start, target, family.color, { dashed: true, depthTest: false }))
    }
    if (vanishingLabels[index]) { vanishingLabels[index].position.copy(target).add(point(0, .22, 0)); vanishingLabels[index].visible = showVanishing.value }
    states.push({ label: family.label, state: Math.abs(target.x) > 1.35 || Math.abs(target.y) > 1 ? 'auf der gedachten Verlängerung der Bildebene' : 'auf der Bildebene' })
  })
  vanishingStates.value = states
  scene.add(changingGeometry)
}
function resetView() {
  if (!camera || !controls) return
  camera.position.set(7.7, 5.5, 7.8)
  controls.target.set(0, -.15, -3.9)
  controls.update()
}
function animate(time) {
  animation = requestAnimationFrame(animate)
  if (!renderer) return
  if (running.value && lastTime != null) {
    farDistance.value += direction * Math.min((time - lastTime) / 1000, .05) * .48
    if (farDistance.value >= 9) { farDistance.value = 9; direction = -1 }
    if (farDistance.value <= 4.5) { farDistance.value = 4.5; direction = 1 }
  }
  if (rotateAutomatically.value && lastTime != null) {
    rotationY.value += rotationDirection * Math.min((time - lastTime) / 1000, .05) * 12
    if (rotationY.value >= 60) { rotationY.value = 60; rotationDirection = -1 }
    if (rotationY.value <= -60) { rotationY.value = -60; rotationDirection = 1 }
  }
  lastTime = time
  controls.update()
  renderer.render(scene, camera)
}
function changeDistance(event) { running.value = false; farDistance.value = Number(event.target.value) }
watch([farDistance, rotationX, rotationY], rebuildGeometry)
watch(showRays, visible => { if (rayGroup) rayGroup.visible = visible })
watch(showVanishing, () => rebuildGeometry())
onMounted(() => {
  try {
    scene = new THREE.Scene(); scene.background = new THREE.Color('#f5f7f6')
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); renderer.outputColorSpace = THREE.SRGBColorSpace
    canvasHost.value.appendChild(renderer.domElement)
    camera = new THREE.PerspectiveCamera(42, 1, .1, 100)
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true; controls.enablePan = true; controls.minDistance = 3; controls.maxDistance = 30
    resetView()
    const eye = new THREE.Mesh(new THREE.SphereGeometry(.12, 20, 12), new THREE.MeshBasicMaterial({ color: 0x23384f }))
    scene.add(eye)
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(2.7, 2), new THREE.MeshBasicMaterial({ color: 0x68aade, side: THREE.DoubleSide, transparent: true, opacity: .22, depthWrite: false }))
    plane.position.z = -planeDistance; scene.add(plane)
    const planeFrame = new THREE.LineSegments(new THREE.EdgesGeometry(plane.geometry), new THREE.LineBasicMaterial({ color: 0x4287bb }))
    planeFrame.position.copy(plane.position); scene.add(planeFrame)
    for (const [label, color, x, y, z] of [['Auge', '#263c50', 0, .38, 0], ['Bildebene', '#377cae', 0, 1.25, -2], ['Quader', '#4e6d81', 0, .8, -5.2]]) {
      const marker = makeLabel(label, color); marker.position.set(x, y, z); scene.add(marker)
    }
    vanishingLabels = [makeLabel('F₁', '#208044'), makeLabel('F₂', '#264c86')]
    for (const label of vanishingLabels) { label.scale.set(.65, .2, 1); label.visible = false; scene.add(label) }
    rebuildGeometry()
    observer = new ResizeObserver(() => { if (!renderer || !canvasHost.value) return; const w = canvasHost.value.clientWidth, h = canvasHost.value.clientHeight; if (!w || !h) return; camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h, false) })
    observer.observe(canvasHost.value)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) running.value = false
    animation = requestAnimationFrame(animate)
  } catch { error.value = 'Die 3D-Szene konnte nicht gestartet werden. Bitte prüfe, ob WebGL im Browser aktiviert ist.' }
})
onBeforeUnmount(() => { cancelAnimationFrame(animation); observer?.disconnect(); controls?.dispose(); disposeGroup(scene); renderer?.dispose(); renderer?.domElement.remove() })
</script>

<template>
  <section class="explainer" aria-labelledby="vanishing-explainer-title">
    <div class="heading"><div><p class="eyebrow">PROJEKTION VERSTEHEN</p><h2 id="vanishing-explainer-title">Warum entsteht ein Fluchtpunkt?</h2><p>Drehe die Szene und verfolge, wie die Kanten des Quaders auf die Bildebene projiziert werden.</p></div><div class="actions"><Button :label="running ? 'Animation pausieren' : 'Animation abspielen'" outlined size="small" @click="running = !running" /><Button label="Ansicht zurücksetzen" outlined size="small" @click="resetView" /></div></div>
    <div class="scene-controls"><label for="far-distance">Entfernung des hinteren Quaderendes <strong>{{ farDistance.toFixed(1).replace('.', ',') }} Einheiten</strong></label><input id="far-distance" type="range" min="4.5" max="9" step="0.05" :value="farDistance" @input="changeDistance" /><label for="cube-yaw">Quader seitlich drehen <strong>{{ rotationY }}°</strong></label><input id="cube-yaw" v-model.number="rotationY" type="range" min="-60" max="60" step="1" /><label for="cube-pitch">Quader neigen <strong>{{ rotationX }}°</strong></label><input id="cube-pitch" v-model.number="rotationX" type="range" min="-45" max="45" step="1" /><Button label="Quader zurücksetzen" outlined size="small" @click="rotationY = 0; rotationX = 0" /><label class="checkbox"><input v-model="showRays" type="checkbox" /> Projektionsstrahlen anzeigen</label><label class="checkbox"><input v-model="showVanishing" type="checkbox" /> Fluchtpunkte und Verlängerungen anzeigen</label><label class="checkbox"><input v-model="rotateAutomatically" type="checkbox" /> Quader automatisch drehen</label></div>
    <div ref="canvasHost" class="three-scene" role="img" aria-label="Drehbare 3D-Szene mit Auge, Bildebene, Quader und Projektionsstrahlen" />
    <p v-if="showVanishing" class="vanishing-status" role="status"><span v-for="item in vanishingStates" :key="item.label">{{ item.label }}: {{ item.state }}<br /></span></p>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <p class="gesture">Mit der Maus oder einem Finger drehen · mit Mausrad oder zwei Fingern zoomen · mit rechter Maustaste verschieben</p>
    <div class="legend" aria-label="Farblegende"><span><i class="green" /> Parallele Kanten im Raum und ihre Abbildung</span><span><i class="orange" /> Projektionsstrahlen und Schnittpunkte</span><span><i class="blue" /> Bildebene und abgebildeter Quader</span><span><i class="green" /> F₁: Fluchtpunkt der Längskanten</span><span><i class="dark-blue" /> F₂: Fluchtpunkt der Querkanten</span></div>
    <div class="explanation"><strong>Beobachte:</strong> Jeder orange Projektionsstrahl verläuft vom Auge durch einen Eckpunkt des Quaders. Wo er die blaue Bildebene schneidet, entsteht der zugehörige Bildpunkt. Die blauen und grünen Linien auf der Ebene verbinden diese Punkte zum perspektivischen Bild.</div>
    <p class="detail">Die grünen Kanten sind im Raum parallel. Ihre Abbildungen auf der Bildebene laufen aufeinander zu. Verlängert man die Bildkanten derselben Richtung, treffen sie sich in ihrem Fluchtpunkt. Die markierten Punkte können auch auf der gedachten Verlängerung der Bildebene liegen. Ist eine Richtung parallel zur Bildebene, liegt ihr Fluchtpunkt im Unendlichen. Drehe den Quader und beobachte, wie die Fluchtpunkte mitwandern.</p>
  </section>
</template>

<style scoped>
.explainer { margin-top: 24px; padding: 24px; background: var(--school-surface); border: 1px solid var(--school-border); border-radius: var(--school-panel-radius); }.heading { display: flex; justify-content: space-between; align-items: start; gap: 20px; }.heading h2 { font-size: 1.45rem; font-weight: 500; margin: 6px 0; }.heading p:not(.eyebrow),.gesture,.detail { color: var(--school-text); opacity: .75; line-height: 1.5; }.eyebrow { color: var(--school-primary); font-size: .75rem; letter-spacing: .1em; font-weight: 600; margin: 0; }.actions { display: flex; gap: 8px; flex-wrap: wrap; }.scene-controls { display: grid; gap: 10px; max-width: 570px; margin: 18px 0; }.scene-controls > label:first-child { display: flex; justify-content: space-between; gap: 12px; }.scene-controls input[type=range] { width: 100%; accent-color: var(--school-primary); }.checkbox { display: flex; align-items: center; gap: 8px; }.checkbox input { accent-color: var(--school-primary); }.three-scene { width: 100%; height: clamp(380px, 48vw, 600px); border: 1px solid var(--school-border); background: #f5f7f6; overflow: hidden; touch-action: none; }.three-scene :deep(canvas) { display: block; width: 100%; height: 100%; }.gesture { font-size: .85rem; }.legend { display: flex; gap: 10px 24px; flex-wrap: wrap; font-size: .9rem; }.legend span { display: flex; align-items: center; gap: 7px; }.legend i { width: 18px; height: 4px; display: inline-block; }.green { background: #208044; }.orange { background: #e3791c; }.dark-blue { background: #264c86; }.vanishing-status { font-size: .9rem; line-height: 1.5; color: var(--school-text); }.blue { background: #4287bb; }.explanation { margin-top: 20px; padding: 16px; background: color-mix(in srgb, var(--school-primary) 8%, var(--school-surface)); border-left: 4px solid var(--school-primary); line-height: 1.6; }.detail { font-size: .9rem; margin-bottom: 0; }.error { color: #b42318; } @media(max-width: 850px) { .heading { flex-direction: column; } } @media(max-width: 480px) { .explainer { padding: 16px; }.three-scene { height: 340px; } }
</style>
