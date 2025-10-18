import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Vector3 } from 'three';

export async function loadPathModel(pathUrl) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(
            pathUrl,
            (gltf) => {
                const path = gltf.scene.children[0]; // Assuming the path is the first child
                const points = path.geometry.attributes.position.array;
                const cameraPathPoints = [];

                for (let i = 0; i < points.length; i += 3) {
                    cameraPathPoints.push(new Vector3(points[i], points[i + 1], points[i + 2]));
                }


                // Optionally visualize the path
                // const pathCurve = new CatmullRomCurve3(this.cameraPathPoints);
                // const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathCurve.getPoints(50));
                // const pathMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
                // const pathLine = new THREE.Line(pathGeometry, pathMaterial);
                // this.scene.add(path);

                resolve(cameraPathPoints);
            },
            undefined,
            (error) => reject(error)
        );
    });
}
