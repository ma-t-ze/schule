// pointerUtils.js

export function getPointerPosition(event) {
    // Determine client coordinates
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;

    // Calculate normalized device coordinates
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;

    return { x, y };
}

export function updatePointerAndRaycaster(pointer, raycaster, camera, x, y) {
    // Set the pointer position
    pointer.set(x, y);

    // Set the raycaster's origin and direction based on the camera and mouse position
    raycaster.setFromCamera(pointer, camera);
}