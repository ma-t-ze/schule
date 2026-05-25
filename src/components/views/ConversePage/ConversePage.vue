<template>
    <div class="text">
        <div class="top">Chuck 70</div>
        <div class="by">von</div>
        <div class="name">Juna Keller</div>
    </div>

    <div ref="canvasContainer" class="canvas-container"></div>
</template>

<script>
import * as THREE from 'three'
import TWEEN from "tween.js/src/tween.js"
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { loadShoeModel } from './utils/loadShoeModel'
import { loadCameraPath } from './utils/loadCameraPath'

export default {
    name: 'ConversePage',
    setup() {
        const canvasContainer = ref(null)

        let scene
        let camera
        let renderer
        let animationId

        let shoes = []
        let moveShoesLeft
        let cameraPathPoints = null

        const initThree = () => {
            scene = new THREE.Scene()

            camera = new THREE.PerspectiveCamera(
                30,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            )

            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            })

            const container = canvasContainer.value

            renderer.setSize(container.clientWidth, container.clientHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            container.appendChild(renderer.domElement)

            camera.position.set(0, 10, 35)
            camera.lookAt(new THREE.Vector3(0, 2, 0))

            const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
            scene.add(ambientLight)

            const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5)
            directionalLight.position.set(1, 1, 1)
            scene.add(directionalLight)

            loadShoeModel({
                scene,
                onModelLoaded: (loadedData) => {
                    shoes = loadedData.shoes
                    moveShoesLeft = loadedData.moveShoesLeft
                },
            })

            loadCameraPath({
                onPathLoaded: ({ points, startPoint }) => {
                    cameraPathPoints = points

                    camera.position.copy(startPoint)
                    camera.lookAt(new THREE.Vector3(0, 2, 0))

                    runSequence()
                },
            })

            animate()

            window.addEventListener('resize', onWindowResize)
        }

        const moveCameraAlongPath = (camera, cameraPathPoints, callback) => {
            if (!cameraPathPoints) {
                console.error('Path not loaded yet!')
                return
            }

            const pathCurve = new THREE.CatmullRomCurve3(cameraPathPoints)
            pathCurve.curveType = 'centripetal'

            const duration = 20000
            const lookAtPoint = new THREE.Vector3(0, 2, 0)

            let startTime = null

            const animateCamera = (time) => {
                if (!startTime) startTime = time

                const elapsed = time - startTime
                const t = Math.min(elapsed / duration, 1)

                const position = pathCurve.getPointAt(t)

                camera.position.copy(position)
                camera.lookAt(lookAtPoint)

                if (t < 1) {
                    requestAnimationFrame(animateCamera)
                } else if (callback) {
                    callback()
                }
            }

            requestAnimationFrame(animateCamera)
        }

        const onKeyDown = (event) => {
            if (event.code === 'Space') {
                event.preventDefault()

                if (moveShoesLeft) {
                    moveShoesLeft()
                }

                setTimeout(() => {
                    startCameraFlight()
                }, 1000)
            }
        }

        const startCameraFlight = () => {
            moveCameraAlongPath(camera, cameraPathPoints, () => {
                console.log('Kameraflug beendet')
            })
        }

        const animate = () => {
            animationId = requestAnimationFrame(animate)

            TWEEN.update()

            shoes.forEach((shoe) => {
                shoe.rotation.y += 0.003
            })

            renderer.render(scene, camera)
        }

        const onWindowResize = () => {
            const container = canvasContainer.value
            if (!container || !camera || !renderer) return

            camera.aspect = container.clientWidth / container.clientHeight
            camera.updateProjectionMatrix()
            renderer.setSize(container.clientWidth, container.clientHeight)
        }

        onMounted(() => {
            initThree()
            window.addEventListener('keydown', onKeyDown)
        })

        onBeforeUnmount(() => {
            if (animationId) cancelAnimationFrame(animationId)

            window.removeEventListener('resize', onWindowResize)
            window.removeEventListener('keydown', onKeyDown)

            if (renderer) {
                renderer.dispose()
            }

            if (renderer?.domElement?.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement)
            }
        })

        const runSequence = () => {
            if (moveShoesLeft) {
                moveShoesLeft()
            }

            setTimeout(() => {
                moveCameraAlongPath(
                    camera,
                    cameraPathPoints,
                    () => {
                        setTimeout(() => {
                            runSequence()
                        }, 1000)
                    }
                )
            }, 1000)
        }

        return {
            canvasContainer,
            startCameraFlight,
        }
    },
}
</script>

<style lang="scss">
@import './style.scss';
</style>