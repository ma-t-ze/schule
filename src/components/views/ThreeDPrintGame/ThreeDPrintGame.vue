<template>
  <div class="print-game">
    <div class="header">
      <div>
        <h1>3D-Druck Spiel</h1>
        <p>{{ statusText }}</p>
      </div>

      <div class="display">
        <div>Düse: {{ nozzleTemp }} °C</div>
        <div>Bett: {{ bedTemp }} °C</div>
        <div>Genauigkeit: {{ accuracy }} %</div>
      </div>
    </div>

    <div class="steps">
      <button
        v-for="step in steps"
        :key="step.id"
        :class="{ active: currentStep === step.id, done: step.done }"
        @click="runStep(step.id)"
      >
        {{ step.label }}
      </button>
    </div>

    <div ref="threeContainer" class="three-container"></div>

    <div
      ref="touchArea"
      class="touch-area"
      @pointerdown="handlePointer"
      @pointermove="handlePointer"
    >
      <svg class="path-svg" viewBox="0 0 500 300">
        <polyline
          :points="pathString"
          fill="none"
          stroke="rgba(0,0,0,0.18)"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div
        class="nozzle-dot"
        :style="{ left: nozzle2D.x + 'px', top: nozzle2D.y + 'px' }"
      />

      <div
        v-if="isPrinting"
        class="finger-dot"
        :style="{ left: finger.x + 'px', top: finger.y + 'px' }"
      />
    </div>

    <div class="bottom-controls">
      <button
        class="main-button"
        :disabled="currentStep !== 'ready' || isPrinting"
        @click="startPrint"
      >
        Druck starten
      </button>

      <button @click="resetGame">
        Neu starten
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import * as THREE from 'three'
import TWEEN from 'tween.js/src/tween.js'

const threeContainer = ref(null)
const touchArea = ref(null)

let scene = null
let camera = null
let renderer = null
let animationId = null

let printerGroup = null
let shoeGroup = null
let nozzleMesh = null

const currentStep = ref('export')
const statusText = ref('Starte mit dem Export der STL-Datei.')
const nozzleTemp = ref(24)
const bedTemp = ref(22)
const accuracy = ref(100)
const isPrinting = ref(false)

const nozzle2D = reactive({ x: 80, y: 160 })
const finger = reactive({ x: 80, y: 160 })

let pathIndex = 0
let scoreSum = 0
let scoreCount = 0
let activeTween = null

const steps = reactive([
  { id: 'export', label: 'STL exportieren', done: false },
  { id: 'slice', label: 'Modell slicen', done: false },
  { id: 'filament', label: 'Filament einlegen', done: false },
  { id: 'heat', label: 'Aufheizen', done: false },
  { id: 'ready', label: 'Bereit', done: false }
])

const printPath = [
  { x: 80, y: 165 },
  { x: 120, y: 135 },
  { x: 185, y: 120 },
  { x: 265, y: 125 },
  { x: 345, y: 150 },
  { x: 410, y: 190 },
  { x: 390, y: 225 },
  { x: 300, y: 238 },
  { x: 200, y: 232 },
  { x: 120, y: 208 },
  { x: 80, y: 165 }
]

const pathString = computed(() => {
  return printPath.map(point => `${point.x},${point.y}`).join(' ')
})

onMounted(async () => {
  await nextTick()
  initThree()
  createPrinter()
  createShoe()
  animate()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)

  if (animationId) {
    cancelAnimationFrame(animationId)
  }

  if (activeTween) {
    activeTween.stop()
  }

  TWEEN.removeAll()

  if (renderer) {
    renderer.dispose()
  }

  if (renderer?.domElement?.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement)
  }
})

function initThree() {
  const width = threeContainer.value.clientWidth
  const height = threeContainer.value.clientHeight

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf4f4ef)

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.set(0, 4.2, 7)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  threeContainer.value.appendChild(renderer.domElement)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.4)
  directionalLight.position.set(4, 6, 5)
  scene.add(directionalLight)
}

function createPrinter() {
  printerGroup = new THREE.Group()

  const lightMaterial = new THREE.MeshStandardMaterial({ color: 0xd8d8d8 })
  const darkMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 })
  const redMaterial = new THREE.MeshStandardMaterial({ color: 0xff4d3d })

  const bed = new THREE.Mesh(
    new THREE.BoxGeometry(5.4, 0.16, 3.2),
    lightMaterial
  )
  bed.position.y = -1
  printerGroup.add(bed)

  const rail = new THREE.Mesh(
    new THREE.BoxGeometry(5.4, 0.08, 0.08),
    darkMaterial
  )
  rail.position.set(0, 1.25, 0)
  printerGroup.add(rail)

  const leftPost = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 2.5, 0.1),
    darkMaterial
  )
  leftPost.position.set(-2.6, 0.2, 0)
  printerGroup.add(leftPost)

  const rightPost = leftPost.clone()
  rightPost.position.x = 2.6
  printerGroup.add(rightPost)

  nozzleMesh = new THREE.Mesh(
    new THREE.ConeGeometry(0.18, 0.45, 32),
    redMaterial
  )
  nozzleMesh.rotation.x = Math.PI
  nozzleMesh.position.set(-2, 0.9, 0)
  printerGroup.add(nozzleMesh)

  scene.add(printerGroup)
}

function createShoe() {
  shoeGroup = new THREE.Group()

  const soleMaterial = new THREE.MeshStandardMaterial({ color: 0xf2f0e6 })
  const fabricMaterial = new THREE.MeshStandardMaterial({ color: 0x2563eb })
  const darkFabricMaterial = new THREE.MeshStandardMaterial({ color: 0x1e40af })
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })

  const sole = new THREE.Mesh(
    new THREE.BoxGeometry(3.5, 0.35, 1.1),
    soleMaterial
  )
  sole.position.y = -0.75
  shoeGroup.add(sole)

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(2.3, 0.75, 1),
    fabricMaterial
  )
  body.position.set(-0.2, -0.36, 0)
  shoeGroup.add(body)

  const toe = new THREE.Mesh(
    new THREE.SphereGeometry(0.65, 32, 16),
    whiteMaterial
  )
  toe.scale.set(1.15, 0.45, 0.85)
  toe.position.set(1.25, -0.38, 0)
  shoeGroup.add(toe)

  const ankle = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 1.25, 1),
    fabricMaterial
  )
  ankle.position.set(-1.15, 0.1, 0)
  shoeGroup.add(ankle)

  const tongue = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 1, 0.08),
    darkFabricMaterial
  )
  tongue.position.set(-0.35, 0.05, 0.55)
  tongue.rotation.z = -0.25
  shoeGroup.add(tongue)

  for (let i = 0; i < 4; i++) {
    const lace = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 0.045, 0.045),
      whiteMaterial
    )

    lace.position.set(-0.45 + i * 0.2, -0.25 + i * 0.13, 0.62)
    lace.rotation.z = i % 2 === 0 ? 0.45 : -0.45
    shoeGroup.add(lace)
  }

  shoeGroup.position.set(0, -0.48, 0)
  shoeGroup.scale.set(0.01, 0.01, 0.01)
  shoeGroup.visible = false

  scene.add(shoeGroup)
}

function runStep(id) {
  if (isPrinting.value) return

  currentStep.value = id

  if (id === 'export') {
    statusText.value = 'Die 3D-Datei wird als STL exportiert.'
    markDone('export')
    goNext('slice')
  }

  if (id === 'slice') {
    statusText.value = 'Der Slicer zerlegt das Schuhmodell in Schichten.'
    shoeGroup.visible = true

    new TWEEN.Tween(shoeGroup.rotation)
      .to({ y: Math.PI * 2 }, 1200)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start()

    markDone('slice')
    goNext('filament')
  }

  if (id === 'filament') {
    statusText.value = 'Filament wird eingelegt und in den Druckkopf geführt.'
    markDone('filament')
    goNext('heat')
  }

  if (id === 'heat') {
    statusText.value = 'Düse und Druckbett heizen auf.'
    heatPrinter()
  }

  if (id === 'ready') {
    statusText.value = 'Der Drucker ist bereit. Starte den Druck.'
    markDone('ready')
  }
}

function markDone(id) {
  const step = steps.find(item => item.id === id)

  if (step) {
    step.done = true
  }
}

function goNext(id) {
  window.setTimeout(() => {
    runStep(id)
  }, 700)
}

function heatPrinter() {
  const values = {
    nozzle: nozzleTemp.value,
    bed: bedTemp.value
  }

  activeTween = new TWEEN.Tween(values)
    .to({ nozzle: 210, bed: 60 }, 1600)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate(() => {
      nozzleTemp.value = Math.round(values.nozzle)
      bedTemp.value = Math.round(values.bed)
    })
    .onComplete(() => {
      markDone('heat')
      runStep('ready')
    })
    .start()
}

function startPrint() {
  if (currentStep.value !== 'ready') return

  isPrinting.value = true
  statusText.value = 'Folge dem roten Druckkopf mit dem Finger.'
  accuracy.value = 100

  pathIndex = 0
  scoreSum = 0
  scoreCount = 0

  finger.x = printPath[0].x
  finger.y = printPath[0].y
  nozzle2D.x = printPath[0].x
  nozzle2D.y = printPath[0].y

  shoeGroup.visible = true
  shoeGroup.scale.set(0.05, 0.05, 0.05)

  moveToNextPoint()
}

function moveToNextPoint() {
  if (pathIndex >= printPath.length - 1) {
    finishPrint()
    return
  }

  const start = printPath[pathIndex]
  const end = printPath[pathIndex + 1]

  const position = {
    x: start.x,
    y: start.y
  }

  const duration = Math.max(260, 950 - pathIndex * 65)

  activeTween = new TWEEN.Tween(position)
    .to({ x: end.x, y: end.y }, duration)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate(() => {
      nozzle2D.x = position.x
      nozzle2D.y = position.y

      updateNozzle3D(position)
      updateShoeProgress()
      checkAccuracy()
    })
    .onComplete(() => {
      pathIndex += 1
      moveToNextPoint()
    })
    .start()
}

function updateNozzle3D(position) {
  if (!nozzleMesh) return

  const normalizedX = (position.x - 250) / 95
  const normalizedZ = (position.y - 160) / 95

  nozzleMesh.position.x = normalizedX
  nozzleMesh.position.z = normalizedZ
}

function updateShoeProgress() {
  if (!shoeGroup) return

  const progress = pathIndex / (printPath.length - 1)
  const scale = 0.05 + progress * 0.65

  shoeGroup.scale.set(scale, scale, scale)
}

function handlePointer(event) {
  if (!isPrinting.value) return

  const rect = touchArea.value.getBoundingClientRect()

  finger.x = event.clientX - rect.left
  finger.y = event.clientY - rect.top
}

function checkAccuracy() {
  const distanceX = finger.x - nozzle2D.x
  const distanceY = finger.y - nozzle2D.y
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

  const currentScore = Math.max(0, 100 - distance * 1.3)

  scoreSum += currentScore
  scoreCount += 1

  accuracy.value = Math.round(scoreSum / scoreCount)
}

function finishPrint() {
  isPrinting.value = false

  shoeGroup.scale.set(0.7, 0.7, 0.7)

  if (accuracy.value >= 85) {
    statusText.value = 'Sehr sauberer Druck. Der Schuh ist gelungen.'
    shoeGroup.rotation.z = 0
  } else if (accuracy.value >= 60) {
    statusText.value = 'Der Druck ist brauchbar, hat aber kleine Fehler.'
    shoeGroup.rotation.z = 0.08
  } else {
    statusText.value = 'Fehldruck. Der Druckkopf wurde zu ungenau verfolgt.'
    shoeGroup.rotation.z = 0.25
  }
}

function resetGame() {
  if (activeTween) {
    activeTween.stop()
  }

  TWEEN.removeAll()

  steps.forEach(step => {
    step.done = false
  })

  currentStep.value = 'export'
  statusText.value = 'Starte mit dem Export der STL-Datei.'

  nozzleTemp.value = 24
  bedTemp.value = 22
  accuracy.value = 100
  isPrinting.value = false

  pathIndex = 0
  scoreSum = 0
  scoreCount = 0

  nozzle2D.x = printPath[0].x
  nozzle2D.y = printPath[0].y
  finger.x = printPath[0].x
  finger.y = printPath[0].y

  if (shoeGroup) {
    shoeGroup.visible = false
    shoeGroup.position.set(0, -0.48, 0)
    shoeGroup.rotation.set(0, 0, 0)
    shoeGroup.scale.set(0.01, 0.01, 0.01)
  }

  if (nozzleMesh) {
    nozzleMesh.position.set(-2, 0.9, 0)
  }
}

function handleResize() {
  if (!renderer || !camera || !threeContainer.value) return

  const width = threeContainer.value.clientWidth
  const height = threeContainer.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
}

function animate(time) {
  animationId = requestAnimationFrame(animate)

  TWEEN.update(time)

  if (shoeGroup && shoeGroup.visible && !isPrinting.value) {
    shoeGroup.rotation.y += 0.006
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}
</script>

<style scoped>
.print-game {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 24px;
  background: #ecebe6;
  color: #202020;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  touch-action: none;
  user-select: none;
}

.header {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: 18px;
}

h1 {
  margin: 0 0 6px;
  font-size: 34px;
  line-height: 1.1;
}

p {
  margin: 0;
  font-size: 19px;
}

.display {
  min-width: 220px;
  display: grid;
  gap: 7px;
  padding: 16px 20px;
  border-radius: 16px;
  background: #111;
  color: #73ff94;
  font-family: monospace;
  font-size: 18px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-bottom: 18px;
}

button {
  border: 0;
  border-radius: 16px;
  padding: 15px 16px;
  background: white;
  color: #202020;
  font-size: 17px;
  font-weight: 650;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

button:disabled {
  opacity: 0.4;
}

button.active {
  background: #2563eb;
  color: white;
}

button.done {
  background: #18a45f;
  color: white;
}

.three-container {
  width: 100%;
  height: 380px;
  border-radius: 24px;
  overflow: hidden;
  background: #f4f4ef;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.06);
  margin-bottom: 18px;
}

.touch-area {
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 24px;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
    linear-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px),
    #ffffff;
  background-size: 40px 40px;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.08);
  touch-action: none;
}

.path-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.nozzle-dot,
.finger-dot {
  position: absolute;
  width: 36px;
  height: 36px;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  pointer-events: none;
}

.nozzle-dot {
  background: #ff4d3d;
  box-shadow: 0 0 0 9px rgba(255, 77, 61, 0.2);
}

.finger-dot {
  background: rgba(37, 99, 235, 0.5);
  box-shadow: 0 0 0 13px rgba(37, 99, 235, 0.18);
}

.bottom-controls {
  display: flex;
  gap: 12px;
  margin-top: 18px;
}

.main-button {
  background: #111;
  color: white;
}

@media (max-width: 900px) {
  .header {
    flex-direction: column;
  }

  .display {
    width: 100%;
    box-sizing: border-box;
  }

  .steps {
    grid-template-columns: 1fr;
  }

  .three-container {
    height: 320px;
  }
}
</style>