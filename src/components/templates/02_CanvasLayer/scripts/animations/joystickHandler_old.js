import nipplejs from 'nipplejs';

export function deactivateJoystick(context) {
    console.log('Deactivating joystick...');
    if (context.joystickManager) {
        context.joystickManager.destroy();
        context.joystickManager = null;
        context.joystickActive = false;
    }
}

export function activateJoystick(context) {
    console.log('Activating joystick...');
    const options = {
        zone: document.body,
        mode: 'dynamic',
        position: { left: '50%', bottom: '20%' },
        color: 'blue',
    };

    context.joystickManager = nipplejs.create(options);

    context.joystickManager.on('move', (evt, data) => {
        if (!context.joystickActive) return;
        context.joystickDirection = data.angle.degree;
        context.joystickDistance = data.distance;
    });

    context.joystickManager.on('end', () => {
        context.joystickDirection = null;
        context.joystickDistance = 0;
    });

    context.joystickActive = true;
    startJoystickUpdateLoop(context);
}

export function startJoystickUpdateLoop(context) {
    if (context.joystickUpdateRunning) return; // Avoid creating multiple loops

    context.joystickUpdateRunning = true;

    const updateLoop = () => {
        if (context.joystickActive) {
            updateCameraPosition(context, context.joystickDirection, context.joystickDistance);
            console.log("Camera updated");
        }

        if (!context.joystickActive) {
            context.joystickUpdateRunning = false;
            return; // Stop the loop if joystick is inactive
        }

        requestAnimationFrame(updateLoop);
    };
    updateLoop();
}

export function updateCameraPosition(context, angle, distance) {

    if (distance === 0 || angle === null) {
        context.impulse = 0;
        context.impulseRot = 0;
        return;
    }

    const forward = 10;

    if (angle > 90 - forward && angle <= 90 + forward) {
        // Forward movement
        context.impulse = -1;
    } else if (angle > 270 - forward && angle <= 270 + forward) {
        // Backward movement
        context.impulse = 1;
    } else {
        context.impulse = 0;
    }

    if (angle > 270 + forward || angle <= 90 - forward) {
        // Rotate right
        context.impulseRot = -1;
    } else if (angle > 90 + forward && angle <= 270 - forward) {
        // Rotate left
        context.impulseRot = 1;
    } else {
        context.impulseRot = 0;
    }
} 
