import nipplejs from 'nipplejs';
import * as CANNON from 'cannon-es';

export function deactivateJoystick(context) {
    console.log('Deactivating joysticks...');
    if (context.joystickMove) {
        context.joystickMove.destroy();
        context.joystickMove = null;
    }
    if (context.joystickRotate) {
        context.joystickRotate.destroy();
        context.joystickRotate = null;
    }

    // Remove joystick containers from the DOM
    removeJoystickContainers();

    context.joystickActive = false;
}

export function activateJoystick(context) {
    console.log('Activating dual joysticks...');

    // Ensure joystick containers exist in the DOM
    createJoystickContainers();

    // LEFT JOYSTICK → Movement (Forward / Backward)
    context.joystickMove = nipplejs.create({
        zone: document.getElementById('joystick-left'),
        mode: 'static',
        position: { left: '70%', bottom: '25%' },
        size: 180,
        color: 'blue',
    });

    // RIGHT JOYSTICK → Rotation (Turn Left / Right)
    context.joystickRotate = nipplejs.create({
        zone: document.getElementById('joystick-right'),
        mode: 'static',
        position: { right: '70%', bottom: '25%' },
        size: 180,
        color: 'blue',
    });

    // 🏎 MOVEMENT: Handle forward/backward motion
    context.joystickMove.on('move', (evt, data) => {
        if (!context.joystickActive) return;

        const distance = Math.min(1, data.distance / 100); // Normalize 0-1
        const angle = data.angle.degree;
        context.impulse = calculateMovement(angle, distance);
    });

    context.joystickMove.on('end', () => {
        context.impulse = 0; // Stop movement when joystick is released
    });

    // 🔄 ROTATION: Handle turning left/right
    context.joystickRotate.on('move', (evt, data) => {
        if (!context.joystickActive) return;

        const distance = Math.min(1, data.distance / 100); // Normalize 0-1
        const angle = data.angle.degree;
        context.impulseRot = calculateRotation(angle, distance);
    });

    context.joystickRotate.on('end', () => {
        context.impulseRot = 0; // Stop rotation when joystick is released
    });

    context.joystickActive = true;
    startJoystickUpdateLoop(context);
}

// ✅ Ensures joystick UI is properly separated
function createJoystickContainers() {
    if (!document.getElementById('joystick-left')) {
        const leftContainer = document.createElement('div');
        leftContainer.id = 'joystick-left';
        leftContainer.style.position = 'absolute';
        leftContainer.style.left = '0px';
        leftContainer.style.bottom = '0px';
        leftContainer.style.width = '50%';
        leftContainer.style.height = '100%';
        leftContainer.style.zIndex = '1000';
        document.body.appendChild(leftContainer);

        document.body.appendChild(leftContainer);
    }

    if (!document.getElementById('joystick-right')) {
        const rightContainer = document.createElement('div');
        rightContainer.id = 'joystick-right';
        rightContainer.style.position = 'absolute';
        rightContainer.style.right = '0px';
        rightContainer.style.bottom = '0px';
        rightContainer.style.width = '50%';
        rightContainer.style.height = '100%';
        rightContainer.style.zIndex = '1000';
        document.body.appendChild(rightContainer);
    }
}

// ✅ Function to remove joystick containers from the DOM
function removeJoystickContainers() {
    const leftContainer = document.getElementById('joystick-left');
    const rightContainer = document.getElementById('joystick-right');

    if (leftContainer) {
        leftContainer.remove();
        console.log('Removed joystick-left container');
    }
    if (rightContainer) {
        rightContainer.remove();
        console.log('Removed joystick-right container');
    }
}

// 🚀 Improved movement handling
function calculateMovement(angle, distance) {
    if (distance === 0 || angle === null) {
        context.impulse = 0;
        context.impulseRot = 0;
        return;
    }

    let forward = 0;

    if (angle >= 60 && angle <= 120) {
        forward = -1; // Move Forward
    } else if (angle >= 240 && angle <= 300) {
        forward = 1; // Move Backward
    }

    return forward;
}

// 🔄 Improved rotation handling
function calculateRotation(angle, distance) {

    if (distance === 0 || angle === null) {
        context.impulse = 0;
        context.impulseRot = 0;
        return;
    }

    let rotation = 0;

    if (angle > 315 || angle < 45) {
        rotation = - 1;
    } else if (angle > 135 && angle < 225) {
        rotation = 1; // Turn Left
    }

    return rotation;
}

// 🔁 Keeps updating movement in Three.js
export function startJoystickUpdateLoop(context) {
    if (context.joystickUpdateRunning) return;

    context.joystickUpdateRunning = true;

    const updateLoop = () => {
        if (context.joystickActive) {
            applyJoystickMovement(context);
        }

        if (!context.joystickActive) {
            context.joystickUpdateRunning = false;
            return;
        }

        requestAnimationFrame(updateLoop);
    };
    updateLoop();
}

// 🚗 Apply movement impulses
function applyJoystickMovement(context) {

        context.player.position.copy(context.playerCannon.position)
        context.player.quaternion.copy(context.playerCannon.quaternion)

        if (context.impulse == 1) {
            var localForce = new CANNON.Vec3(0, 0, 1);
            var worldForce = context.playerCannon.quaternion.vmult(localForce);
            context.playerCannon.force.copy(worldForce);
        }

        if (context.impulse == -1) {
            var localForce = new CANNON.Vec3(0, 0, -1);
            var worldForce = context.playerCannon.quaternion.vmult(localForce);
            context.playerCannon.force.copy(worldForce);
        }

        if (context.impulseRot == 1) {
            context.playerCannon.angularVelocity.y = 0.3;
        }

        if (context.impulseRot == - 1) {
            context.playerCannon.angularVelocity.y = -0.3;
        }

        if (context.impulse == 0) {
            var localForce = new CANNON.Vec3(0, 0, 0);
            var worldForce = context.playerCannon.quaternion.vmult(localForce);
            context.playerCannon.force.copy(worldForce);
        }

        if (context.impulseRot == 0) {
            context.playerCannon.angularVelocity.y = 0;
        }
}
