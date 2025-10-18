import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export function colliderModel(GLTFLoader, cannonBodies) {
    return new Promise((resolve, reject) => {
        // Instantiate a loader
        const loader = new GLTFLoader();

        // Load the GLTF model
        loader.load(
            '/models/collider.glb', // The GLTF file path
            (gltf) => {
                const collider = gltf.scene;
                collider.visible = false;

                // Traverse the scene and create colliders
                traverseAndCreateColliders(collider, cannonBodies);

                resolve({ collider, cannonBodies });
            },
            // Called while loading is progressing
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            // Called when loading has errors
            (error) => {
                console.error('An error occurred while loading the collider model:', error);
                reject(error);
            }
        );

        function traverseAndCreateColliders(object, cannonBodies) {
            object.traverse((child) => {
                if (child.isMesh) {
                    // Update world matrix to apply transformations
                    child.updateWorldMatrix(true, false);

                    // Get the cube dimensions (scale)
                    const dimensions = new THREE.Vector3();
                    dimensions.setFromMatrixScale(child.matrixWorld);

                    // Get the world position of the cube
                    const position = new THREE.Vector3();
                    child.getWorldPosition(position);

                    // Get the rotation of the cube
                    const quaternion = new THREE.Quaternion();
                    child.getWorldQuaternion(quaternion);

                    // Create a Cannon.js box shape using the exact dimensions
                    const halfExtents = new CANNON.Vec3(dimensions.x, dimensions.y, dimensions.z);
                    const shape = new CANNON.Box(halfExtents);

                    // Create a Cannon.js body with the position, shape, and rotation
                    const body = new CANNON.Body({
                        mass: 0, // Static object (mass = 0)
                        position: new CANNON.Vec3(position.x, position.y, position.z),
                        shape: shape,
                    });

                    // Apply the rotation (quaternion) to the Cannon.js body
                    body.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);

                    // Add the body to the array
                    cannonBodies.push(body);
                }
            });
        }
    });
}
