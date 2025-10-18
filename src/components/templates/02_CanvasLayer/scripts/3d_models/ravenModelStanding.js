import { AnimationMixer, LoopRepeat, Audio, AudioListener, AudioLoader } from 'three';

export async function ravenModelStanding(GLTFLoader, THREE, scene) {
    const loader = new GLTFLoader();

    // Load the standing raven model
    return new Promise((resolve, reject) => {
        loader.load(
            '/models/raven.glb',
            (gltf) => {
                const raven = gltf.scene;
                raven.visible = true;
                raven.position.set(-0.53, 1.96, -0.4);
                raven.scale.set(0.13, 0.13, 0.13);
                raven.rotation.set(0, -Math.PI / 6, 0);

                // Traverse the scene graph to set shadows
                raven.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                // Create an AnimationMixer instance
                const mixerRavenStanding = new AnimationMixer(raven);

                // Get animations from the GLB file
                const animations = gltf.animations;

                let action1, action2;

                // Assuming you have at least two animations in the array
                if (animations.length >= 2) {
                    // Create actions for each animation clip
                    action1 = mixerRavenStanding.clipAction(animations[0]); // First animation
                    action2 = mixerRavenStanding.clipAction(animations[1]); // Second animation

                    // Play the first animation in a loop by default
                    action1.loop = LoopRepeat; // Loop the animation
                    action1.setEffectiveWeight(1); // Full weight

                    // Stop the second animation initially
                    action2.stop();
                }

                // Create an audio listener and add it to the raven model
                const listener = new AudioListener();
                scene.add(listener);

                const sound = new Audio(listener);
                const audioLoader = new AudioLoader();

                audioLoader.load('/audio/raven.mp3', (buffer) => {
                    sound.setBuffer(buffer);
                    sound.setLoop(false); // No need to loop the audio, as we sync with the animation loop
                    sound.setVolume(0);

                    // Function to play audio with delay
                    const playSoundWithDelay = () => {
                        setTimeout(() => sound.play(), 9000); // Delay of 3 seconds
                    };

                    // Align the audio to play with the animation action1
                    action1.play();
                    playSoundWithDelay();

                    // Listen for the animation loop event to restart the audio
                    action1._loopCount = 0;
                    action1.loopEvent = () => {
                        if (action1._loopCount > 0) {
                            sound.stop();
                            playSoundWithDelay();
                        }
                        action1._loopCount++;
                    };

                    action1.loop = LoopRepeat; // Loop the animation
                    action1.clampWhenFinished = true;
                    action1.repetitions = Infinity;
                    action1._mixer.addEventListener('loop', action1.loopEvent);
                });

                // Attach the sound to the raven model
                raven.add(sound);

                resolve({ raven, mixerRavenStanding, action1, action2, sound });
            },
            undefined,
            (error) => {
                console.error('An error occurred while loading the standing raven model:', error);
                reject(error);
            }
        );
    });
}

