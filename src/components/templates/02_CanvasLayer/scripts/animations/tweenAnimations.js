// tweenAnimations.js

export function createTweenAnimations(THREE, TWEEN, context) {
    return {
        ravenTweenAway: () => {
            let targetPosition = { x: -2, y: 1.95, z: -0.4 };
            let startPosition = { x: context.raven.position.x, y: context.raven.position.y, z: context.raven.position.z };

            let tween = new TWEEN.Tween(startPosition)
                .to(targetPosition, 2000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.raven.position.set(startPosition.x, startPosition.y, startPosition.z);
                })
                .delay(1500)
                .start();
        },

        ravenTweenBack: () => {
            let targetPosition = { x: -0.53, y: 1.95, z: -0.4 };
            let startPosition = { x: context.raven.position.x, y: context.raven.position.y, z: context.raven.position.z };

            let tween = new TWEEN.Tween(startPosition)
                .to(targetPosition, 2000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.raven.position.set(startPosition.x, startPosition.y, startPosition.z);
                })
                .delay(500)
                .start();
        },

        flyingRavenTweenAway: () => {
            let targetPosition = { x: 4, y: 0.8, z: -2 };
            let startPosition = { x: context.flyingRaven.position.x, y: context.flyingRaven.position.y, z: context.flyingRaven.position.z };

            let tween = new TWEEN.Tween(startPosition)
                .to(targetPosition, 2000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.flyingRaven.position.set(startPosition.x, startPosition.y, startPosition.z);
                })
                .delay(1500)
                .start();
        },

        flyingRavenTweenBack: () => {
            let targetPosition = { x: 0, y: 0.8, z: -2 };
            let startPosition = { x: context.flyingRaven.position.x, y: context.flyingRaven.position.y, z: context.flyingRaven.position.z };

            let tween = new TWEEN.Tween(startPosition)
                .to(targetPosition, 2000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.flyingRaven.position.set(startPosition.x, startPosition.y, startPosition.z);
                })
                .delay(500)
                .start();
        },

        cameraTweenGame: () => {
            const initialPosition = { x: context.CSP[0], y: context.CSP[1], z: context.CSP[2] };
            const targetPosition = { x: context.CEP[0], y: context.CEP[1], z: context.CEP[2] };

            new TWEEN.Tween(initialPosition)
                .to(targetPosition, 2000)
                .easing(TWEEN.Easing.Bounce.Out)
                .onUpdate(() => {
                    context.camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);
                })
                .delay(4000)
                .start();

            const initialLookAt = new THREE.Vector3(context.CSL[0], context.CSL[1], context.CSL[2]);
            const targetLookAt = new THREE.Vector3(context.CEL[0], context.CEL[1], context.CEL[2]);

            new TWEEN.Tween(initialLookAt)
                .to(targetLookAt, 2000)
                .easing(TWEEN.Easing.Bounce.Out)
                .onUpdate(() => {
                    context.camera.lookAt(initialLookAt);
                })
                .delay(4000)
                .start();
        },

        cameraTweenStart: () => {
            const initialPosition = { x: context.CEP[0], y: context.CEP[1], z: context.CEP[2] };
            const targetPosition = { x: context.CSP[0], y: context.CSP[1], z: context.CSP[2] };

            new TWEEN.Tween(initialPosition)
                .to(targetPosition, 500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);
                })
                .start();

            const initialLookAt = new THREE.Vector3(context.CEL[0], context.CEL[1], context.CEL[2]);
            const targetLookAt = new THREE.Vector3(context.CSL[0], context.CSL[1], context.CSL[2]);

            new TWEEN.Tween(initialLookAt)
                .to(targetLookAt, 500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.camera.lookAt(initialLookAt);
                })
                .start();
        },

        cameraTweenWalk: () => {
            const initialPosition = { x: context.CEP[0], y: context.CEP[1], z: context.CEP[2] };
            const targetPosition = { x: context.CWP[0], y: context.CWP[1], z: context.CWP[2] };

            new TWEEN.Tween(initialPosition)
                .to(targetPosition, 2500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);
                })
                .start();

            const initialLookAt = new THREE.Vector3(context.CEL[0], context.CEL[1], context.CEL[2]);
            const targetLookAt = new THREE.Vector3(context.CWL[0], context.CWL[1], context.CWL[2]);

            new TWEEN.Tween(initialLookAt)
                .to(targetLookAt, 2500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.camera.lookAt(initialLookAt);
                })
                .start();

            // Tween the focal length (affects field of view)
            const focalLength = { fov: context.camera.fov }; // Start at the current fov
            const targetFocalLength = { fov: 55 }; // Target focal length (equivalent fov)

            new TWEEN.Tween(focalLength)
                .to(targetFocalLength, 2500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.camera.fov = focalLength.fov;
                    context.camera.updateProjectionMatrix(); // Required to apply fov changes
                })
                .start();
        },

        cameraTweenStopWalk: () => {
            const currentCameraPosition = {
                x: context.camera.position.x,
                y: context.camera.position.y,
                z: context.camera.position.z,
            };
        
            const initialPosition = { x: context.CEP[0], y: context.CEP[1], z: context.CEP[2] };
        
            new TWEEN.Tween(currentCameraPosition)
                .to(initialPosition, 2500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.camera.position.set(currentCameraPosition.x, currentCameraPosition.y, currentCameraPosition.z);
                })
                .start();
        
            const currentLookAt = new THREE.Vector3();
            context.camera.getWorldDirection(currentLookAt);
        
            const initialLookAt = new THREE.Vector3(context.CEL[0], context.CEL[1], context.CEL[2]);
        
            new TWEEN.Tween(currentLookAt)
                .to(initialLookAt, 2500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.camera.lookAt(currentLookAt);
                })
                .start();

                   // Tween the focal length (affects field of view)
            const focalLength = { fov: 55 }; // Start at the current fov
            const targetFocalLength = { fov: 25 }; // Target focal length (equivalent fov)

            new TWEEN.Tween(focalLength)
                .to(targetFocalLength, 2500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
                    context.camera.fov = focalLength.fov;
                    context.camera.updateProjectionMatrix(); // Required to apply fov changes
                })
                .start();
        },
        
    };
}
