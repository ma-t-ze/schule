import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import TWEEN from "tween.js/src/tween.js"

export const loadShoeModel = ({ scene, onModelLoaded }) => {
    const loader = new GLTFLoader()
    const textureLoader = new THREE.TextureLoader()

    loader.load(
        '/models/shoes.glb',
        (gltf) => {
            const shoeGroup = new THREE.Group()
            const shoes = []

            const texturePaths = [
                '/textures/shoes/texture_1.png',
                '/textures/shoes/texture_2.png',
                '/textures/shoes/texture_3.png',
                '/textures/shoes/texture_4.png',
            ]

            const baseShoe = gltf.scene
            baseShoe.scale.set(1, 1, 1)
            baseShoe.position.set(0, 0, 0)

            const prepareShoeMaterials = (shoe, texture = null) => {
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

                        if (texture && clonedMaterial.map) {
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

            prepareShoeMaterials(baseShoe)

            shoeGroup.add(baseShoe)
            shoes.push(baseShoe)

            texturePaths.forEach((texturePath, index) => {
                const clonedShoe = baseShoe.clone(true)

                clonedShoe.position.set((index + 1) * 40, 0, 0)

                const texture = textureLoader.load(texturePath)
                texture.flipY = false
                texture.colorSpace = THREE.SRGBColorSpace

                prepareShoeMaterials(clonedShoe, texture)

                shoeGroup.add(clonedShoe)
                shoes.push(clonedShoe)
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
                        2500
                    )
                    .easing(TWEEN.Easing.Elastic.Out)
                    .start()
            }

            if (onModelLoaded) {
                onModelLoaded({
                    shoes,
                    shoeGroup,
                    moveShoesLeft,
                })
            }

            console.log('Original und 4 geklonte Schuhe geladen')
        },
        undefined,
        (error) => {
            console.error('Fehler beim Laden von shoes.glb:', error)
        }
    )
}