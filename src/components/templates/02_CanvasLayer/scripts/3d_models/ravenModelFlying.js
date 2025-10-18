import { AnimationMixer, LoopOnce, Audio, AudioLoader, AudioListener } from 'three';

export async function ravenModelFlying(GLTFLoader, THREE, scene) {
    const loader = new GLTFLoader();
    const audioLoader = new AudioLoader();

    return new Promise((resolve, reject) => {
        loader.load(
            '/models/raven.glb',
            (gltf) => {
                if (!gltf || !gltf.scene) {
                    console.error('GLTF scene is undefined.');
                    reject(new Error('GLTF scene is undefined.'));
                    return;
                }

                const flyingRaven = gltf.scene;
                flyingRaven.visible = true;
                flyingRaven.position.set(0, 0.8, -2);
                flyingRaven.scale.set(0.15, 0.15, 0.15);
                flyingRaven.rotation.set(0, -Math.PI / 2, 0); // Adjust position as needed

                // Traverse the clone scene graph to set shadows
                flyingRaven.traverse((child) => {
                    if (child.isMesh && (child.name === "Object_4" || child.name === "Object_6" || child.name === "Object_7")) {
                        child.visible = false;
                    }
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        child.frustumCulled = false;
                    }
                });

                // Create a new AnimationMixer for the flying raven
                const mixerRavenFlying = new THREE.AnimationMixer(flyingRaven);

                // Get animations from the GLB file
                const animations = gltf.animations;

                let cloneAction1, cloneAction2;

                // Assuming you have at least two animations in the array
                if (animations.length >= 2) {

                    // Create AnimationActions for each clip
                    cloneAction1 = mixerRavenFlying.clipAction(animations[6]);
                    cloneAction2 = mixerRavenFlying.clipAction(animations[2]);

                    // Play the first action initially
                    cloneAction1.play();
                    cloneAction2.stop();

                    // Monitor when action1 finishes
                    cloneAction1.clampWhenFinished = true; // Ensure it stops at the end
                    cloneAction1.loop = LoopOnce; // Play only once
                }

                // Create an audio listener and add it to the raven model
                const listener = new AudioListener();
                flyingRaven.add(listener);

                const audio = new Audio(listener);
                const audioLoader = new AudioLoader();

                // Load the audio file
                audioLoader.load('/audio/raven_fly.mp3', (buffer) => {
                    audio.setBuffer(buffer);
                    audio.setLoop(true);
                    audio.setVolume(0);

                    // Play the audio when the first animation starts
                    cloneAction1.play();
                    audio.play();
                });

                scene.add(flyingRaven);

                resolve({ flyingRaven, mixerRavenFlying, cloneAction1, cloneAction2, audio });
            },
            undefined,
            (error) => {
                console.error('An error happened while loading the model.', error);
                reject(error);
            }
        );
    });
}
