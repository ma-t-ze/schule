<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const props = defineProps({
  imprisoned: Boolean,
  spaceship: Boolean,
  collectAfterRelease: Boolean,
  released: Boolean,
  playing: Boolean,
  visible: Boolean,
  modelUrl: { type: String, default: '/rally/lava_monster.glb' },
  label: { type: String, default: 'Lava-Monster' }
})
const emit = defineEmits(['prison-ready', 'freed', 'collected', 'ship-departed'])
let prisonModel, prisonMixer, doorAction
function openDoor() {
  if (props.released && doorAction && !doorAction.isRunning() && doorAction.time === 0) doorAction.play()
}
watch(() => props.released, openDoor)
const host = ref(null)
const loading = ref(true)
const error = ref('')
let renderer, model, mixer, observer, frame, disposed = false
function disposeModel(root) {
  const geometries = new Set(), materials = new Set(), textures = new Set(), skeletons = new Set()
  root.traverse(node => {
    if (node.geometry) geometries.add(node.geometry)
    if (node.skeleton) skeletons.add(node.skeleton)
    for (const material of [node.material].flat().filter(Boolean)) {
      materials.add(material)
      Object.values(material).forEach(value => { if (value?.isTexture) textures.add(value) })
    }
  })
  geometries.forEach(item => item.dispose())
  materials.forEach(item => item.dispose())
  textures.forEach(item => { item.dispose(); item.source?.data?.close?.() })
  skeletons.forEach(item => item.dispose())
}
onMounted(async () => {
  try {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 100)
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearColor(0, 0)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.3
    host.value.appendChild(renderer.domElement)
    scene.add(new THREE.HemisphereLight(0xb3c9ec, 0x30120a, 2))
    const key = new THREE.DirectionalLight(0xffddbc, 4)
    key.position.set(3, 4, 5); scene.add(key)
    const rim = new THREE.DirectionalLight(0xff451b, 5)
    rim.position.set(-3, 2, -3); scene.add(rim)
    let distance = 5
    let framingRadius = 1.65
    function resize() {
      const { width, height } = host.value.getBoundingClientRect()
      if (!width || !height) return
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.zoom = props.imprisoned ? 3 : props.spaceship ? 1.2 : 1
      camera.updateProjectionMatrix()
      const vertical = THREE.MathUtils.degToRad(camera.fov / 2)
      const horizontal = Math.atan(Math.tan(vertical) * camera.aspect)
      distance = framingRadius / Math.sin(Math.min(vertical, horizontal))
    }
    observer = new ResizeObserver(resize); observer.observe(host.value); resize()
    const gltf = await new GLTFLoader().loadAsync(props.modelUrl)
    if (disposed) { disposeModel(gltf.scene); return }
    model = gltf.scene
    mixer = new THREE.AnimationMixer(model)
    if (gltf.animations.length) mixer.clipAction(gltf.animations[0]).play()
    mixer.update(0)
    model.updateMatrixWorld(true)
    const bounds = new THREE.Box3().setFromObject(model)
    const size = bounds.getSize(new THREE.Vector3())
    const center = bounds.getCenter(new THREE.Vector3())
    const wrapper = new THREE.Group()
    // Normalize with a parent so animation tracks cannot overwrite framing.
    wrapper.scale.setScalar(2.5 / Math.max(size.x, size.y, size.z))
    const offset = new THREE.Group(); offset.position.copy(center).negate()
    offset.add(model); wrapper.add(offset); scene.add(wrapper)
    let collectionProgress = -1
    let collectionReported = false
    const collectionStart = new THREE.Vector3()
    let collectionScale = 1
    if (props.imprisoned) {
      wrapper.scale.setScalar(1.6 / Math.max(size.x, size.y, size.z))
      wrapper.position.set(0, -0.3, -0.65)
      const prison = await new GLTFLoader().loadAsync('/rally/prison.glb')
      if (disposed) { disposeModel(prison.scene); return }
      prisonModel = prison.scene
      const facing = new THREE.Group()
      facing.add(prisonModel)
      let prisonBounds = new THREE.Box3().setFromObject(facing)
      const dimensions = prisonBounds.getSize(new THREE.Vector3())
      if (dimensions.x < dimensions.z) facing.rotation.y = Math.PI / 2
      facing.updateMatrixWorld(true)
      prisonBounds = new THREE.Box3().setFromObject(facing)
      const prisonSize = prisonBounds.getSize(new THREE.Vector3())
      const prisonCenter = prisonBounds.getCenter(new THREE.Vector3())
      const prisonOffset = new THREE.Group()
      prisonOffset.position.copy(prisonCenter).negate()
      prisonOffset.add(facing)
      const prisonFrame = new THREE.Group()
      prisonFrame.scale.setScalar(6 / Math.max(prisonSize.x, prisonSize.y))
      prisonFrame.position.z = 0.55
      prisonFrame.add(prisonOffset)
      scene.add(prisonFrame)
      prisonFrame.updateMatrixWorld(true)
      const framedBounds = new THREE.Box3().setFromObject(prisonFrame)
      framedBounds.union(new THREE.Box3().setFromObject(wrapper))
      // Fit the entire enlarged enclosure, with room for the opening door.
      framingRadius = framedBounds.getBoundingSphere(new THREE.Sphere()).radius * 1.12 + 0.55
      resize()
      prisonMixer = new THREE.AnimationMixer(prisonModel)
      if (!prison.animations.length) throw new Error('Missing door animation')
      // This asset closes the door again later in the same clip. End at its
      // maximum opening (measured from the door rotation keyframes).
      const openingClip = prison.animations[0].clone()
      openingClip.duration = 3.4583332538604736
      doorAction = prisonMixer.clipAction(openingClip)
      doorAction.setLoop(THREE.LoopOnce, 1)
      doorAction.clampWhenFinished = true
      prisonMixer.addEventListener('finished', () => {
        prisonFrame.visible = false
        if (props.collectAfterRelease) {
          collectionStart.copy(wrapper.position)
          collectionScale = wrapper.scale.x
          collectionProgress = 0
        }
        emit('freed')
      })
      emit('prison-ready')
      openDoor()
    }
    loading.value = false
    let previous = performance.now(), elapsed = 0, shipDeparted = false
    function animate(now) {
      const delta = Math.min((now - previous) / 1000, 0.05); previous = now
      if (props.visible) {
        if (props.playing) { mixer.update(delta); prisonMixer?.update(delta); elapsed += delta }
        // Travel visibly around the monster: left → right → left in 10 seconds.
        if (props.spaceship) wrapper.rotation.y = elapsed * Math.PI / 10
        const angle = props.imprisoned || props.spaceship ? 0 : Math.sin(elapsed * (Math.PI * 2 / 10)) * THREE.MathUtils.degToRad(28)
        camera.position.set(Math.sin(angle) * distance, 0.12, Math.cos(angle) * distance)
        camera.lookAt(0, 0, 0)
        if (collectionProgress >= 0) {
          collectionProgress = Math.min(1, collectionProgress + delta / 1.4)
          const ease = 1 - Math.pow(1 - collectionProgress, 3)
          camera.updateMatrixWorld()
          const rect = host.value.getBoundingClientRect()
          // Anchor in screen space just below the menu, including after resizing.
          const depth = collectionStart.clone().project(camera).z
          const target = new THREE.Vector3(
            (Math.min(68, rect.width / 2) / rect.width) * 2 - 1,
            1 - ((132 - rect.top) / rect.height) * 2,
            depth
          ).unproject(camera)
          const worldHeight = 2 * (distance - collectionStart.z) * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / camera.zoom
          const miniScale = Math.min(collectionScale, (worldHeight * 80 / rect.height) / Math.max(size.x, size.y, size.z))
          wrapper.position.lerpVectors(collectionStart, target, ease)
          wrapper.scale.setScalar(THREE.MathUtils.lerp(collectionScale, miniScale, ease))
        }
        if (props.spaceship && elapsed >= 5) {
          const flight = Math.min(1, (elapsed - 5) / 2)
          wrapper.position.x = flight * flight * distance * 2
          if (flight === 1) {
            wrapper.visible = false
            if (!shipDeparted) { shipDeparted = true; emit('ship-departed') }
          }
        }
        renderer.render(scene, camera)
        if (collectionProgress === 1 && !collectionReported) {
          collectionReported = true
          emit('collected')
        }
      }
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
  } catch {
    if (!disposed) { loading.value = false; error.value = `${props.label} konnte nicht geladen werden.` }
  }
})
onBeforeUnmount(() => {
  disposed = true; cancelAnimationFrame(frame); observer?.disconnect()
  prisonMixer?.stopAllAction()
  if (prisonModel) { prisonMixer?.uncacheRoot(prisonModel); disposeModel(prisonModel) }
  mixer?.stopAllAction()
  if (model) { mixer?.uncacheRoot(model); disposeModel(model) }
  renderer?.dispose(); renderer?.forceContextLoss()
})
</script>
<template>
  <div ref="host" class="monster-view" role="img" :aria-label="`Animiertes ${label}`">
    <p v-if="loading" class="model-status" role="status">{{ label }} wird geladen …</p>
    <p v-if="error" class="model-status" role="alert">{{ error }}</p>
  </div>
</template>
<style scoped>
.monster-view { width: 100%; height: 100%; min-height: 160px; position: relative; }
.monster-view :deep(canvas) { display: block; position: absolute; inset: 0; }
.model-status { position: absolute; inset: 0; display: grid; place-content: center; text-align: center; padding: 24px; color: #d7b5a5; }
</style>
