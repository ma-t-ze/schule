// basicSettings.js
import * as THREE from 'three';
import { lights } from '../lights/lights.js';

export function initializeBasicSettings(canvas, CSP, CSL) {
    // Create a new scene
    const scene = new THREE.Scene();

    // Initialize the camera
    // const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.01, 1000);
    //  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.001, 1000);

    // Cameras
    const standardCamera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
    standardCamera.name = 'standardCamera';

    // Set initial camera position and look-at
    standardCamera.position.set(CSP[0], CSP[1], CSP[2]);
    standardCamera.lookAt(new THREE.Vector3(CSL[0], CSL[1], CSL[2]));

    // followCamera.position.set(0, 0, 0.01);

    // Initialize the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Append the renderer to the canvas
    canvas.appendChild(renderer.domElement);

    // Add lights to the scene
    const { ambientLight, directionalLight, directionalLightMoon, spotLight } = lights(scene, THREE, renderer);

    // Return the initialized components and a function to update the camera dynamically
    return {
        scene,
        standardCamera,
        renderer,
        ambientLight,
        directionalLight,
        directionalLightMoon,
        spotLight,
        updateCamera: (newCSP, newCSL) => {
            standardCamera.position.set(newCSP[0], newCSP[1], newCSP[2]);
            standardCamera.lookAt(new THREE.Vector3(newCSL[0], newCSL[1], newCSL[2]));
        },
    };
}
