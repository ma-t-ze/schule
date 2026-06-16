import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import TWEEN from "tween.js/src/tween.js"

const extractDataFromPath = (texturePath) => {
    const fileName = texturePath.split('/').pop()
    const nameWithoutExtension = fileName.replace('.png', '')
    const parts = nameWithoutExtension.split('_').filter(part => part !== '')

    const color2 = parts.pop()
    const color1 = parts.pop()

    const firstName = parts.shift()
    const lastName = parts.shift()
    const title = parts.join(' ')

    return {
        name: `${firstName} ${lastName}`,
        title,
        color1: `#${color1}`,
        color2: `#${color2}`,
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
                '/textures/shoes/Alexandra_Antal_Gachiakuta Rudo Version_D6B4B4_802626.png',
                '/textures/shoes/Apostoloska_Mirela_VicVerse_FFE0EC_FFBDDA.png',
                '/textures/shoes/Bluschke_Sofia_Swagers_333F4B_AAAAAA.png',
                '/textures/shoes/Charmeyn_Ho_Berryse_DF3B3D_FFECB3.png',
                '/textures/shoes/Christin_Hoerschgen_Der Schatz der Karibik_1B1B1B_F0CFAD.png',
                '/textures/shoes/Daniel_Steblau_BapeVerse_A19EFF_302BE5.png',
                '/textures/shoes/Evelin_Frick_Tiger_EEE9CD_7AE9EF.png',
                '/textures/shoes/Helen_Ibrahim_Evil Mint Choco_7AE9EF_EFE998.png',
                '/textures/shoes/Lili_Bankos_Autismus_00A1FF_FF00D4.png',
                '/textures/shoes/Lucille_Badayei_Starfall_84659E_F7EFE0.png',
                '/textures/shoes/Marcel_Radtke_Aero_5663C4_5F50A9.png',
                '/textures/shoes/Rayen_Neubauer_Surebrec-verse_000000_FF0000.png',
                '/textures/shoes/Sayavong_Nalinthip_GreenShoe_849F6F_D4B415.png',
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