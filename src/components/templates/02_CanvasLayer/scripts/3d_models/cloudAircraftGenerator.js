// modelGenerators.js

export function generateCloud(scene, cloudsModel, cloudClones, cloudSpeed) {
    if (cloudsModel) {
        const cloudClone = cloudsModel.clone();
        cloudClone.visible = true;

         // Traverse the clone to set visibility of children
         cloudClone.traverse((child) => {
            if (child.isMesh && child.name.includes("night")) {
                // Only make children with "night" in their name visible
                child.visible = false;
            }
        });

        cloudClone.position.set(
            -5,
            0.7,
            -2 + Math.random() * 8
        );

        const scale = Math.random() * 0.7 + 0.3;

        cloudClone.scale.set(scale, scale, scale);

        cloudClone.rotation.set(0, Math.random() * Math.PI * 2, 0);

        cloudClones.push(cloudClone);
        scene.add(cloudClone);
    }
}

export function generateAircraft(scene, aircraftModel, aircraftClones, aircraftSpeed) {
    if (aircraftModel) {
        const aircraftClone = aircraftModel.clone();
        aircraftClone.visible = true;

        const scale = 0.9;
        aircraftClone.scale.set(scale, scale, scale);

        // Set a unique aircraftSpeedFactor for each clone
        aircraftClone.userData.aircraftSpeedFactor = Math.random() * 1 + 1;

        // Update rotation to face the movement direction using aircraftSpeedFactor
        const directionX = aircraftSpeed;
        const directionZ = aircraftSpeed * aircraftClone.userData.aircraftSpeedFactor;
        aircraftClone.rotation.y = Math.atan2(directionZ, directionX);

        aircraftClone.position.set(
            Math.random() * 10 - 5,
            1.2,
            -1
        );

        aircraftClones.push(aircraftClone);
        scene.add(aircraftClone);
    }
}
