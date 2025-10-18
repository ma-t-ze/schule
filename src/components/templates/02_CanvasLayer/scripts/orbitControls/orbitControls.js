// orbitControls.js

export function orbitControls(camera, renderer, OrbitControls) {

    // Create a new instance of OrbitControls
    var controls = new OrbitControls(camera, renderer.domElement);

    // Optional: Set control properties, such as damping factor, zoom speed, etc.
    // controls.enableDamping = true; // Enables inertia/smooth movement
    // controls.dampingFactor = 0.25; // Damping factor (default is 0.25)
    // controls.enableZoom = true;    // Enables zooming

    return controls;
}