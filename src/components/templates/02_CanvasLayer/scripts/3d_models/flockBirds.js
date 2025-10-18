// flockBirds.js

import { AnimationMixer, LoopRepeat } from 'three';

export async function flockBirdsModel(GLTFLoader, THREE, scene, flockBirdsSpeed, flockBirdsSpeedFactor) {
    const loader = new GLTFLoader();

    // Load the flock birds model
    return new Promise((resolve, reject) => {
        loader.load(
            '/models/flockBirds.glb',
            (gltf) => {
                const flockBirds = gltf.scene;
                flockBirds.visible = true;
                flockBirds.position.set(6, 0.8, 3);

                // Update rotation to face the movement direction using aircraftSpeedFactor
                const directionX = - flockBirdsSpeed;
                const directionZ = flockBirdsSpeed * flockBirdsSpeedFactor;
                flockBirds.rotation.y = Math.atan2(directionZ, directionX) + Math.PI;

                // Traverse the scene graph to set shadows
                flockBirds.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                // Create an AnimationMixer instance
                const mixerFlockBirds = new AnimationMixer(flockBirds);

                // Get animations from the GLB file
                const animations = gltf.animations;

                let action;

                // Assuming you have at least one animation in the array
                if (animations.length >= 1) {
                    // Create action for the animation clip
                    action = mixerFlockBirds.clipAction(animations[0]); // First animation

                    // Play the animation in a loop by default
                    action.play();
                    action.loop = LoopRepeat; // Loop the animation
                    action.setEffectiveWeight(1); // Full weight
                }

                resolve({ flockBirds, mixerFlockBirds, action });
            },
            undefined,
            (error) => {
                console.error('An error occurred while loading the flock birds model:', error);
                reject(error);
            }
        );
    });
}


