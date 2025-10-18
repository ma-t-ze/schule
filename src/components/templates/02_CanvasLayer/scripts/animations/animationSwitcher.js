// animationSwitcher.js
import * as THREE from 'three';

export function switchAnimations({
    cloneAction1,
    cloneAction2,
    animationCounter,
    ravenFlyingAudio
}) {
    if (cloneAction1 && !cloneAction1.isRunning() && animationCounter === 0) {
        // Check if action1 has completed one loop
        animationCounter = 1; // Set counter to indicate action1 has completed one loop
        // Play action2
        cloneAction2.play();
        cloneAction2.clampWhenFinished = true; // Ensure it stops at the end
        cloneAction2.loop = THREE.LoopRepeat;
        cloneAction2.repetitions = 2;

        ravenFlyingAudio.setVolume(0);
    }
    if (cloneAction1 && !cloneAction2.isRunning() && animationCounter === 1) {
        animationCounter = 0;
        cloneAction1.reset();
        cloneAction2.stop();
        cloneAction1.play();
        cloneAction1.clampWhenFinished = true;
        cloneAction1.loop = THREE.LoopOnce; // Play only once

        ravenFlyingAudio.setVolume(0.02);
    }

    return animationCounter; // Return updated counter
}
