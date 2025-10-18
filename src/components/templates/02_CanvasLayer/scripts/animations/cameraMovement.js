// cameraMovement.js

import { CatmullRomCurve3, Vector3 } from 'three';

export function moveCameraAlongPath(camera, cameraPathPoints, callback) {
    if (!cameraPathPoints) {
        console.error('Path not loaded yet!');
        return;
    }

    const pathCurve = new CatmullRomCurve3(cameraPathPoints);
    const duration = 20000; // Total duration for the entire path in milliseconds
    const points = pathCurve.getPoints(100); // Get 100 points along the curve

    const initialLookAtPoint = new Vector3(0, 0, 2.5);
    let startTime = null;

    const animateCamera = (time) => {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;

        const t = elapsed / duration; // Normalized time (0 to 1)
        const pointIndex = Math.min(Math.floor(t * points.length), points.length - 1);
        const nextPointIndex = Math.min(pointIndex + 1, points.length - 1);
        const lerpT = (t * points.length) % 1;

        const currentPosition = points[pointIndex].clone().lerp(points[nextPointIndex], lerpT);

        camera.position.copy(currentPosition);
        camera.lookAt(initialLookAtPoint);

        if (t < 1) {
            requestAnimationFrame(animateCamera);
        } else {
            camera.position.copy(points[points.length - 1]); // Ensure the camera ends at the last point
            if (callback) callback();
        }
    };

    requestAnimationFrame(animateCamera);
}
