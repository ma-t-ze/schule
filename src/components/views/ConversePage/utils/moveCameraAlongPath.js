import * as THREE from 'three'

export const moveCameraAlongPath = ({
    camera,
    cameraPathPoints,
    duration = 20000,
    callback,
}) => {
    if (!cameraPathPoints || cameraPathPoints.length < 2) {
        console.error('Path not loaded yet!')
        return
    }

    const pathCurve = new THREE.CatmullRomCurve3(cameraPathPoints)
    pathCurve.curveType = 'centripetal'

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