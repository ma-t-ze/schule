// threeJSConstructor.js
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import _ from 'lodash';
import CannonDebugger from 'cannon-es-debugger';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import TWEEN from 'tween.js/src/tween.js';
import html2canvas from 'html2canvas';
import { windowresize } from './utils/windowresize.js';
//Stats
import { addStatsPanel } from './statsPanel/statsPanel.js';

import RaycasterHandler from './raycaster/raycaster.js';
//Construction
import constructionMappings from './actions/utils/constructionMappings.js';
import { constructionWatcher } from './actions/construct.js';
import { initializeBasicSettings } from './sceneSettings/basicSettings.js';
import { getDefaultState } from './utils/defaultState.js';
import { callModels } from './3d_models/modelLoader.js';
//Actions
import { watchForBackwardChange } from './actions/backAndForth.js';
import { watchForRestart } from './actions/restart.js';
import { initializeWatchHandlers } from './utils/watchHandlers.js';
import { captureAndDownloadScreenshot } from './actions/screenshot.js';
import { captureAndPrintScreenshot } from './actions/print.js';
//Animations
import { createTweenAnimations } from './animations/tweenAnimations.js';
import { moveCameraAlongPath } from './animations/cameraMovement.js';
import { loadPathModel } from './animations/pathLoader.js';
// Audio
import { createAudioControl, startAudio, stopAudio } from './audio/audioControl.js';
import { AudioListener } from 'three';
import { loadAllAudio } from './audio/audioLoader.js';
import { activateJoystick, deactivateJoystick } from './animations/joystickHandler.js';

import { colliderModel } from './3d_models/collider.js';

import {
    updateDayNightCycle,
    updateMixers,
    updateFlockBirds,
    updateClouds,
    updateAircrafts,
    updateSwitchAnimations,
} from './animations/animationUpdateHandlers.js';

export default class ThreeJSConstructor {
    constructor(canvas, store, showStats, imgContainerRef, logoRef, updateLoadingSpinner) {
        this.canvas = canvas;
        this.store = store;
        this.showStats = showStats;

        this.imgContainerRef = imgContainerRef;
        this.logoRef = logoRef;
        this.updateLoadingSpinner = updateLoadingSpinner;

        // Joystick state
        this.joystickActive = true; // Joystick inactive by default
        this.joystickDirection = null; // No direction
        this.joystickDistance = 0; // No movement

        // Assign default state properties
        Object.assign(this, getDefaultState());

        const { updateCamera, ...settings } = initializeBasicSettings(this.canvas, this.CSP, this.CSL);
        Object.assign(this, settings);
        // Store the updateCamera function for runtime updates
        this.updateCamera = updateCamera;

        // // Initialize Cannon.js physics world

        this.world = null;
        this.body = null;
        this.timeStep = 1 / 60
        this.lastCallTime = null;

        this.player = null;
        this.playerCannon = null;

        this.impulse = null;
        this.impulseRot = null;

        this.lightSwitch = 0;
        this.previousModeSwitch = 0;
        this.previousModeSwitchTwo = 0;

        this.nightMeshes = [];
        this.dayMeshes = [];

        this.isCircularMotionActive = 0;

        this.isDayNightCycleActive = false;

        this.initializeGameModeWatcher();

        // Default camera
        this.camera = this.standardCamera;

        this.followCamera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.01, 1000);
        this.followCamera.name = 'followCamera';

        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.get('start') === '1') {
            // Set camera to end position if `start=1`
            this.activateJoystick();
            this.camera = this.followCamera;
            this.CSP = [...this.CWP];
            this.CSL = [...this.CWL];
        }
        this.cannonBodies = [];

        this.clock = new THREE.Clock();
        this.listener = new AudioListener();
        this.camera.add(this.listener);
        // Initialize Three.js first
        this.initThree()
            .then(() => {
                // Then initialize Cannon.js
                this.initCannon();
                // Start the animation loop after everything is initialized
                this.animate(0);
            })
    }

    async initThree() {

        this.parameters();

        this.cameraPathPoints = await loadPathModel('/models/path_02.glb');

        // Call models and destructure returned values
        const models = await callModels(
            this.scene,
            THREE,
            this.flockBirdsSpeed,
            this.flockBirdsSpeedFactor
        );

        // Assign models to the instance
        Object.assign(this, models);

        // Initialize raycaster handler
        this.raycasterHandler = new RaycasterHandler(this.camera, this.scene, THREE.Raycaster, THREE.Vector2, this.store, this.blocksArray, this.blocksModel);

        const argsConstructionArray = [
            this.store,
            this.blocksArray,
            this.blocksModel,
            this.clonedModelsArray,
            this.blocksStatusHistory,
            constructionMappings,
            this.historyCounter,
            this.sizeSums,
        ];

        // ConstructionWatcher function is in construct.js
        constructionWatcher(...argsConstructionArray);
        watchForBackwardChange(...argsConstructionArray);
        watchForRestart(...argsConstructionArray);

        window.addEventListener('resize', () => windowresize(this.camera, this.renderer));

        // Initialize watch handlers
        initializeWatchHandlers(this.store, THREE, this.renderer, this.updateLoadingSpinner, this);

        // Initialize tween animations
        Object.assign(this, createTweenAnimations(THREE, TWEEN, this));

        // Load and assign all audio files
        Object.assign(this, await loadAllAudio(this.listener));

        this.store.dispatch('setLoading', true);

        if (this.iconicBuildingsModel) {
            this.iconicBuildingsModel.traverse((child) => {
                if (child.isMesh && child.name.includes("night")) {
                    this.nightMeshes.push(child);
                } else if (child.isMesh) {
                    this.dayMeshes.push(child);
                }
            });
        }

        // Create the button to start audio
        createAudioControl(this);

        // Initialize blocksStatusHistory
        this.blocksStatusHistory.push(_.cloneDeep(this.blocksArray));
        this.historyCounter[0] = 1;

        const { collider } = await colliderModel(GLTFLoader, this.cannonBodies);
        this.scene.add(collider); // Add the GLTF model to the scene

        // Avatar (Player)
        this.player = new THREE.Group();
        this.scene.add(this.player);

        const bodyGeometry = new THREE.SphereGeometry(0.05, 6, 6);
        const materialAvatar = new THREE.MeshBasicMaterial({ color: 'hsl(0, 0%, 100%)', transparent: true, opacity: 0 });
        const body = new THREE.Mesh(bodyGeometry, materialAvatar);
        this.player.add(body);

        this.followCam = new THREE.Object3D();
        // this.followCam.position.set(0, 0, 0); // Offset for the follow camera
        this.followCam.position.copy(this.followCamera.position);
        this.player.add(this.followCam);

        // 🌙 Add a moon sprite to follow moonlight
        const moonTexture = new THREE.TextureLoader().load('/images/moon.png');
        const moonMaterial = new THREE.SpriteMaterial({
            map: moonTexture,
            transparent: true,
            depthWrite: false
        });
        this.moonSprite = new THREE.Sprite(moonMaterial);
        this.moonSprite.scale.set(2, 2, 1); // Adjust size if needed
        this.scene.add(this.moonSprite);
    }

    initCannon() {
        // Initialize the physics world
        this.world = new CANNON.World({
            // gravity: new CANNON.Vec3(0, -9.82, 0), // Set gravity (adjust as needed)
        });

        // Tweak contact properties.
        // Contact stiffness - use to make softer/harder contacts
        this.world.defaultContactMaterial.contactEquationStiffness = 1e9;

        // Stabilization time in number of timesteps
        this.world.defaultContactMaterial.contactEquationRelaxation = 4;

        // Create a slippery material (friction coefficient = 0.0)
        const physicsMaterial = new CANNON.Material('physics');
        const physics_physics = new CANNON.ContactMaterial(physicsMaterial, physicsMaterial, {
            friction: 0.0,
            restitution: 0.3,
        });

        // Add the contact material to the world
        this.world.addContactMaterial(physics_physics);

        // Create the player physics body
        const playerShape = new CANNON.Sphere(0.005); // Radius of the sphere
        this.playerCannon = new CANNON.Body({
            mass: 1, // Mass of the player
            position: new CANNON.Vec3(0, 0.03, 2.8), // Initial position
            material: physicsMaterial,
        });
        this.playerCannon.linearDamping = 0.9999; // Damping to reduce speed over time
        this.playerCannon.angularDamping = 0.99; // Damping to reduce rotation over time
        this.playerCannon.addShape(playerShape); // Add the shape to the body

        // Add the player body to the physics world
        this.world.addBody(this.playerCannon);


        this.cannonBodies.forEach((body) => {
            body.material = physicsMaterial;
            this.world.addBody(body);
        });

        // console.log("Total Cannon.js bodies created:", this.cannonBodies.length);

        this.world.addEventListener('beginContact', (event) => {
            const { bodyA, bodyB } = event;

            if (bodyA === this.playerCannon || bodyB === this.playerCannon) {
                console.log('Collision detected with player!');
            }
        });

        // Initialize CannonDebugger
        this.cannonDebugger = new CannonDebugger(this.scene, this.world, {
            // Optional settings
            color: 0x00ff00, // Color of the wireframes
        });

    }


    animate = (currentTime) => {
        this.updatePhysics();

        // Update CannonDebugger
        // this.cannonDebugger.update();

        requestAnimationFrame(this.animate);

        this.player.position.copy(this.playerCannon.position)
        this.player.quaternion.copy(this.playerCannon.quaternion)

        if (this.impulse == 1) {
            var localForce = new CANNON.Vec3(0, 0, 1);
            var worldForce = this.playerCannon.quaternion.vmult(localForce);
            this.playerCannon.force.copy(worldForce);
        }

        if (this.impulse == -1) {
            var localForce = new CANNON.Vec3(0, 0, -1);
            var worldForce = this.playerCannon.quaternion.vmult(localForce);
            this.playerCannon.force.copy(worldForce);
        }

        if (this.impulseRot == 1) {
            this.playerCannon.angularVelocity.y = 0.6;
        }

        if (this.impulseRot == - 1) {
            this.playerCannon.angularVelocity.y = -0.6;
        }

        if (this.impulse == 0) {
            var localForce = new CANNON.Vec3(0, 0, 0);
            var worldForce = this.playerCannon.quaternion.vmult(localForce);
            this.playerCannon.force.copy(worldForce);
        }

        if (this.impulseRot == 0) {
            this.playerCannon.angularVelocity.y = 0;
        }

        // Follow camera updates
        if (this.camera === this.followCamera) {
            // Smoothly move the camera to followCam's position
            this.followCamera.position.lerp(this.followCam.getWorldPosition(new THREE.Vector3()), 0.1);

            // Smoothly update the camera's rotation to match followCam
            const followCamQuaternion = this.followCam.getWorldQuaternion(new THREE.Quaternion());
            this.followCamera.quaternion.slerp(followCamQuaternion, 0.1);
        }

        const elapsed = currentTime - this.lastTime;

        if (elapsed > this.fpsInterval) {
            this.lastTime = currentTime - (elapsed % this.fpsInterval);
            const delta = this.clock.getDelta();

            if (this.isDayNightCycleActive) {
                updateDayNightCycle(this, delta);
            }

            updateMixers(this, delta);
            updateFlockBirds(this, delta);
            updateClouds(this, currentTime);
            updateAircrafts(this, currentTime);
            updateSwitchAnimations(this);

            if (this.showStats) {
                this.stats.update();
            }

            TWEEN.update();
            this.renderer.render(this.scene, this.camera);
        }
    };

    updatePhysics() {
        const time = performance.now() / 1000
        if (!this.lastCallTime) {
            this.world.step(this.timeStep)
        } else {
            const dt = time - this.lastCallTime
            this.world.step(this.timeStep, dt)
        }
        this.lastCallTime = time
    }

    activateJoystick() {
        activateJoystick(this); // Pass `this` context

        this.blocksModel.traverse(child => {
            if (child.isMesh && child.name.includes("outline")) {
                this.blocksArray.forEach(block => {
                    const blockNumber = block.name.split('_').pop();
                    const childNumber = child.name.split('_').pop();
                    if (childNumber === blockNumber) {
                        if (block.construction === 'none') {
                            child.material.opacity = 0;
                            child.material.transparent = true;
                        } else {
                            child.material.opacity = 0;
                            child.material.transparent = true;
                        }
                    }
                });
            }
        });

        // Set all values of the active property in blocksArray to false
        this.blocksArray.forEach(block => {
            block.active = false;
        });

    }

    deactivateJoystick() {
        deactivateJoystick(this); // Pass `this` context
    }

    startAudio() {
        startAudio(this); // Use the function from the new module
    }

    stopAudio() {
        stopAudio(this); // Use the function from the new module
    }

    startDayNightCycle() {
        setTimeout(() => {
            this.isDayNightCycleActive = true;
        }, 2000);
    }

    stopDayNightCycle() {
        this.isDayNightCycleActive = false;

        setTimeout(() => {
            this.timeCounter = 10;
            this.lightSwitch = 0;
            const distance = 20;
            this.directionalLight.position.set(distance, distance, distance);
            this.ambientLight.intensity = 2;
            this.directionalLight.intensity = 3;
            this.directionalLightMoon.intensity = 0;
        }, 500);

    }

    async captureAndDownloadScreenshot() {
        await captureAndDownloadScreenshot(this.imgContainerRef, this.logoRef, this.canvas, html2canvas);
    }

    async captureAndPrintScreenshot() {
        await captureAndPrintScreenshot(this.imgContainerRef, this.logoRef, this.canvas, html2canvas);
    }

    parameters() {
        if (this.showStats) {
            this.stats = addStatsPanel();
        }
    }

    async initializePath() {
        this.cameraPathPoints = await loadPathModel('/models/path_02.glb');
    }

    moveCameraAlongPathAction() {

        this.store.commit('setShowActionBar', false);

        this.blocksModel.traverse(child => {
            if (child.isMesh && child.name.includes("outline")) {
                this.blocksArray.forEach(block => {
                    const blockNumber = block.name.split('_').pop();
                    const childNumber = child.name.split('_').pop();
                    if (childNumber === blockNumber) {
                        if (block.construction === 'none') {
                            child.material.opacity = 0;
                            child.material.transparent = true;
                        } else {
                            child.material.opacity = 0;
                            child.material.transparent = true;
                        }
                    }
                });
            }
        });

        // Set all values of the active property in blocksArray to false
        this.blocksArray.forEach(block => {
            block.active = false;
        });

        // Call moveCameraAlongPath with the callback
        moveCameraAlongPath(this.camera, this.cameraPathPoints, () => {
            // Show the action bar when the camera movement is complete
            this.store.dispatch('setShowActionBar', true);
            this.store.dispatch('setShowFeelGoodBarometer', true);
            this.store.commit('setBlockSelection', false);
            // this.store.commit('setPauseDayAndNightCycle', false);
        });
    }

    initializeGameModeWatcher() {
        this.store.watch(
            () => this.store.state.playMode,
            (gameMode) => {
                if (gameMode) {
                    setTimeout(() => {
                        this.registerPauseWatcher();
                    }, 2000);
                } else {
                    if (this.pauseWatcher) {
                        this.pauseWatcher(); // Unwatch
                        this.pauseWatcher = null;
                    }
                }
            },
            { immediate: true } // Ensures it runs on initialization
        );
    }

    registerPauseWatcher() {
        if (!this.pauseWatcher) {
            this.pauseWatcher = this.store.watch(
                () => this.store.state.pauseDayAndNightCycle,
                (newValue) => {
                    if (newValue) {
                        this.pauseDayNightCycle();
                    } else {
                        this.resumeDayNightCycle();
                    }
                },
                { immediate: true }
            );
        }
    }

    pauseDayNightCycle() {
        this.isDayNightCycleActive = false;
    }

    resumeDayNightCycle() {
        this.isDayNightCycleActive = true;
    }

}