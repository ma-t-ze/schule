import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const loadCameraPath = ({ onPathLoaded }) => {
    const loader = new GLTFLoader()

    loader.load(
        '/models/path_converse.glb',
        (gltf) => {
            const points = []

            gltf.scene.updateMatrixWorld(true)

            gltf.scene.traverse((child) => {
                if (!child.geometry?.attributes?.position) return

                const positions = child.geometry.attributes.position

                for (let i = 0; i < positions.count; i++) {
                    const point = new THREE.Vector3(
                        positions.getX(i),
                        positions.getY(i),
                        positions.getZ(i)
                    )

                    point.applyMatrix4(child.matrixWorld)

                    points.push(point)
                }
            })

            if (points.length < 2) {
                console.error(
                    'Path loaded, aber zu wenige Punkte gefunden:',
                    points.length
                )
                return
            }

            const startPoint = points[0]

            console.log('Path loaded:', points.length, points)
            console.log('Camera start point:', startPoint)

            if (onPathLoaded) {
                onPathLoaded({
                    points,
                    startPoint,
                })
            }
        },
        undefined,
        (error) => {
            console.error(
                'Fehler beim Laden von path_converse.glb:',
                error
            )
        }
    )
}