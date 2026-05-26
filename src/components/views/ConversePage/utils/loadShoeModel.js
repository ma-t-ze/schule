import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import TWEEN from "tween.js/src/tween.js"

const extractDataFromPath = (texturePath) => {
    const fileName = texturePath.split('/').pop()
    const nameWithoutExtension = fileName.replace('.png', '')
    const parts = nameWithoutExtension.split('_')

    return {
        name: `${parts[0]} ${parts[1]}`,
        title: parts[2],
        color1: `#${parts[3]}`,
        color2: `#${parts[4]}`,
    }
}

export const loadShoeModel = ({ scene, onModelLoaded }) => {
    const loader = new GLTFLoader()
    const textureLoader = new THREE.TextureLoader()

    loader.load(
        '/models/shoes.glb',
        (gltf) => {
            const shoeGroup = new THREE.Group()
            const shoes = []
            const shoeNames = []
            const shoeTitles = []
            const shoeColors1 = []
            const shoeColors2 = []

            const texturePaths = [
                '/textures/shoes/Antal_Alexandra_Gachiakuta - Verse Rudo Edition_D6B4B4_802626_01.png',
                '/textures/shoes/Apostoloska_Mirela_VicVerse_FFE0EC_FFBDDA_02.png',
                '/textures/shoes/Bluschke_Sofia_The SWAGers_4E6291_9C2323_05.png',
            ]

            const baseShoe = gltf.scene

            const prepareShoeMaterials = (shoe, texture) => {
                shoe.traverse((child) => {
                    if (!child.isMesh) return

                    child.castShadow = true
                    child.receiveShadow = true

                    const materials = Array.isArray(child.material)
                        ? child.material
                        : [child.material]

                    const clonedMaterials = materials.map((material) => {
                        if (!material) return material

                        const clonedMaterial = material.clone()

                        if (clonedMaterial.map) {
                            clonedMaterial.map = texture
                        }

                        clonedMaterial.side = THREE.DoubleSide
                        clonedMaterial.needsUpdate = true

                        return clonedMaterial
                    })

                    child.material = Array.isArray(child.material)
                        ? clonedMaterials
                        : clonedMaterials[0]
                })
            }

            texturePaths.forEach((texturePath, index) => {
                const shoe = baseShoe.clone(true)
                const shoeData = extractDataFromPath(texturePath)

                shoe.scale.set(1, 1, 1)
                shoe.position.set(index * 40, 0, 0)

                const texture = textureLoader.load(texturePath)
                texture.flipY = false
                texture.colorSpace = THREE.SRGBColorSpace

                prepareShoeMaterials(shoe, texture)

                shoeGroup.add(shoe)
                shoes.push(shoe)

                shoeNames.push(shoeData.name)
                shoeTitles.push(shoeData.title)
                shoeColors1.push(shoeData.color1)
                shoeColors2.push(shoeData.color2)
            })

            scene.add(shoeGroup)

            const moveShoesLeft = () => {
                new TWEEN.Tween(shoeGroup.position)
                    .to(
                        {
                            x: shoeGroup.position.x - 40,
                            y: shoeGroup.position.y,
                            z: shoeGroup.position.z,
                        },
                        5000
                    )
                    .easing(TWEEN.Easing.Elastic.Out)
                    .start()
            }

            if (onModelLoaded) {
                onModelLoaded({
                    shoes,
                    shoeNames,
                    shoeTitles,
                    shoeColors1,
                    shoeColors2,
                    shoeGroup,
                    moveShoesLeft,
                })
            }
        },
        undefined,
        (error) => {
            console.error('Fehler beim Laden von shoes.glb:', error)
        }
    )
}