<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { createCreature, disposeCreature } from './creatures'
const props = defineProps({ station: { type: Object, required: true } })
const host = ref(null)
const failed = ref(false)
let renderer, creature, observer, frame
onMounted(() => {
  try {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 30)
    camera.position.set(0, 0, 5.3)
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearColor(0, 0)
    host.value.appendChild(renderer.domElement)
    scene.add(new THREE.HemisphereLight(0xffffff, 0x506655, 2.4))
    const lamp = new THREE.DirectionalLight(0xffffff, 3)
    lamp.position.set(3, 4, 5); scene.add(lamp)
    creature = createCreature(props.station); scene.add(creature)
    observer = new ResizeObserver(() => {
      const width = host.value.clientWidth
      renderer.setSize(width, width)
    })
    observer.observe(host.value)
    function animate(time) {
      creature.rotation.y = Math.sin(time / 1700) * 0.3
      creature.position.y = Math.sin(time / 650) * 0.065
      renderer.render(scene, camera)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
  } catch {
    failed.value = true
  }
})
onBeforeUnmount(() => {
  cancelAnimationFrame(frame); observer?.disconnect()
  if (creature) disposeCreature(creature)
  renderer?.dispose(); renderer?.forceContextLoss()
})
</script>
<template>
  <div ref="host" class="creature" :style="{ width: `${station.size}px` }" role="img" :aria-label="`3D-Wesen ${station.name}`">
    <p v-if="failed">Die 3D-Ansicht ist auf diesem Gerät nicht verfügbar.</p>
  </div>
</template>
<style scoped>
.creature { aspect-ratio: 1; max-width: 85vw; pointer-events: none; }
.creature :deep(canvas) { display: block; }
.creature p { color: white; padding: 24px; background: #162f2b; border-radius: 16px; }
</style>
