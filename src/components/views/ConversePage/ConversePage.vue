```vue
<template>
    <div ref="backgroundCurrent" class="background background-current"></div>
    <div ref="backgroundWhite" class="background background-white"></div>

    <div ref="textContainer" class="text">
        <div class="top">{{ currentTitle }}</div>
        <div class="by">von</div>
        <div class="name">{{ currentName }}</div>
    </div>

    <div ref="infoContainer" class="infoContainer">
        <img src="/images/logo.svg" alt="Logo" class="info-logo" />

        <div class="info-text">
            Die Schülerinnen und Schüler der Eingangsklasse des Berufskollegs Grafikdesign entwarfen einen individuell gestalteten Converse-Schuh zum Thema Farbe.


        <br/>Lehrkraft: M. Heckel | Carl-Hofer-Schule Karlsruhe
        </div>
    </div>

    <div ref="canvasContainer" class="canvas-container"></div>
</template>

<script>
import * as THREE from 'three'
import TWEEN from 'tween.js/src/tween.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { loadShoeModel } from './utils/loadShoeModel'
import { loadCameraPath } from './utils/loadCameraPath'
import { moveCameraAlongPath } from './utils/moveCameraAlongPath'

export default {
    name: 'ConversePage',

    setup() {
        const canvasContainer = ref(null)
        const backgroundCurrent = ref(null)
        const backgroundWhite = ref(null)
        const textContainer = ref(null)

        const currentName = ref('')
        const currentTitle = ref('')

        const timeBeforeCameraFlight = 3000
        const timeAfterCameraFlight = 3000

        const backgroundFadeDuration = 3000
        const whiteHoldDuration = 2000

        const textMoveDuration = 500
        const textHiddenDuration = 3000

        const shoeDistance = 40
        const manualMoveDuration = 400
        const autoMoveDuration = 5000

        let scene
        let camera
        let renderer
        let animationId

        let shoes = []
        let shoeNames = []
        let shoeTitles = []
        let shoeColors1 = []
        let shoeColors2 = []
        let currentShoeIndex = 0

        let shoeGroup = null
        let cameraPathPoints = null
        let sequenceTimeout = null

        let isDestroyed = false
        let isSequenceRunning = false

        const wait = (duration) => {
            return new Promise((resolve) => {
                sequenceTimeout = setTimeout(resolve, duration)
            })
        }

        const getCurrentGradient = () => {
            const color1 = shoeColors1[currentShoeIndex] || '#fde002'
            const color2 = shoeColors2[currentShoeIndex] || '#e40a6f'

            return `linear-gradient(to top, ${color1} 0%, ${color2} 100%)`
        }

        const updateTextAndBackground = () => {
            currentName.value = shoeNames[currentShoeIndex] || ''
            currentTitle.value = shoeTitles[currentShoeIndex] || ''

            if (backgroundCurrent.value) {
                backgroundCurrent.value.style.background = getCurrentGradient()
            }
        }

        const moveToCurrentShoe = (duration = autoMoveDuration) => {
            if (!shoeGroup) return

            new TWEEN.Tween(shoeGroup.position)
                .to(
                    {
                        x: -currentShoeIndex * shoeDistance,
                        y: shoeGroup.position.y,
                        z: shoeGroup.position.z,
                    },
                    duration
                )
                .easing(TWEEN.Easing.Elastic.Out)
                .start()
        }

        const setInitialBackground = () => {
            if (!backgroundCurrent.value || !backgroundWhite.value) return

            backgroundCurrent.value.style.background = getCurrentGradient()
            backgroundCurrent.value.style.opacity = '1'

            backgroundWhite.value.style.background = '#DDDDDD'
            backgroundWhite.value.style.opacity = '0'
            backgroundWhite.value.style.transition = `opacity ${backgroundFadeDuration}ms ease`
        }

        const showText = async () => {
            if (!textContainer.value) return

            textContainer.value.style.transition =
                `transform ${textMoveDuration}ms ease, opacity ${textMoveDuration}ms ease`

            textContainer.value.style.transform = 'translateX(-50%) translateY(0)'
            textContainer.value.style.opacity = '1'

            await wait(textMoveDuration)
        }

        const hideText = async () => {
            if (!textContainer.value) return

            textContainer.value.style.transition =
                `transform ${textMoveDuration}ms ease, opacity ${textMoveDuration}ms ease`

            textContainer.value.style.transform = 'translateX(-50%) translateY(-160%)'
            textContainer.value.style.opacity = '0'

            await wait(textMoveDuration)
        }

        const fadeToWhite = async () => {
            if (!backgroundWhite.value) return

            backgroundWhite.value.style.transition = `opacity ${backgroundFadeDuration}ms ease`
            backgroundWhite.value.style.opacity = '1'

            await wait(backgroundFadeDuration)
        }

        const holdWhite = async () => {
            await wait(whiteHoldDuration)
        }

        const switchShoeUnderWhite = () => {
            if (!shoeNames.length) return

            currentShoeIndex += 1

            if (currentShoeIndex >= shoeNames.length) {
                currentShoeIndex = 0
            }

            moveToCurrentShoe(autoMoveDuration)
            updateTextAndBackground()
        }

        const fadeWhiteOut = async () => {
            if (!backgroundWhite.value) return

            backgroundWhite.value.style.transition = `opacity ${backgroundFadeDuration}ms ease`
            backgroundWhite.value.style.opacity = '0'

            await wait(backgroundFadeDuration)
        }

        const runCameraFlight = () => {
            return new Promise((resolve) => {
                moveCameraAlongPath({
                    camera,
                    cameraPathPoints,
                    callback: resolve,
                })
            })
        }

        const runSequence = async () => {
            if (isSequenceRunning) return
            isSequenceRunning = true

            while (!isDestroyed) {
                await wait(timeBeforeCameraFlight)
                if (isDestroyed) return

                await runCameraFlight()
                if (isDestroyed) return

                await wait(timeAfterCameraFlight)
                if (isDestroyed) return

                await fadeToWhite()
                if (isDestroyed) return

                await holdWhite()
                if (isDestroyed) return

                await hideText()
                if (isDestroyed) return

                switchShoeUnderWhite()
                if (isDestroyed) return

                await wait(textHiddenDuration)
                if (isDestroyed) return

                await fadeWhiteOut()
                if (isDestroyed) return

                await showText()
            }
        }

        const goToShoe = (direction) => {
            if (!shoeNames.length || !shoeGroup) return

            currentShoeIndex += direction

            if (currentShoeIndex < 0) {
                currentShoeIndex = shoeNames.length - 1
            }

            if (currentShoeIndex >= shoeNames.length) {
                currentShoeIndex = 0
            }

            TWEEN.removeAll()
            moveToCurrentShoe(manualMoveDuration)
            updateTextAndBackground()
        }

        const onKeyDown = (event) => {
            if (event.code === 'ArrowRight') {
                event.preventDefault()
                goToShoe(1)
            }

            if (event.code === 'ArrowLeft') {
                event.preventDefault()
                goToShoe(-1)
            }
        }

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

            const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
            scene.add(ambientLight)

            const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
            directionalLight.position.set(1, 1, 1)
            scene.add(directionalLight)

            loadShoeModel({
                scene,
                onModelLoaded: (loadedData) => {
                    shoes = loadedData.shoes
                    shoeNames = loadedData.shoeNames
                    shoeTitles = loadedData.shoeTitles
                    shoeColors1 = loadedData.shoeColors1
                    shoeColors2 = loadedData.shoeColors2
                    shoeGroup = loadedData.shoeGroup

                    currentShoeIndex = 0
                    updateTextAndBackground()

                    if (shoeGroup) {
                        shoeGroup.position.x = 0
                    }

                    setInitialBackground()
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
            window.addEventListener('keydown', onKeyDown)
        }

        const animate = () => {
            animationId = requestAnimationFrame(animate)

            if (!renderer || !scene || !camera) return

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
        })

        onBeforeUnmount(() => {
            isDestroyed = true

            if (animationId) {
                cancelAnimationFrame(animationId)
            }

            if (sequenceTimeout) {
                clearTimeout(sequenceTimeout)
            }

            window.removeEventListener('resize', onWindowResize)
            window.removeEventListener('keydown', onKeyDown)

            TWEEN.removeAll()

            if (renderer) {
                renderer.dispose()
            }

            if (renderer?.domElement?.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement)
            }
        })

        return {
            canvasContainer,
            backgroundCurrent,
            backgroundWhite,
            textContainer,
            currentName,
            currentTitle,
        }
    },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
```
