import { handleDayNightCycle } from './dayNightCycle.js';
import { generateCloud, generateAircraft } from '../3d_models/cloudAircraftGenerator.js';
import { switchAnimations } from './animationSwitcher.js';

export function updateDayNightCycle(context, delta) {
    if (context.nightSwitch === 1) {
        context.timeCounter = handleDayNightCycle(
            context.timeCounter,
            delta, // <- hier den fehlenden Parameter ergänzen
            {
                store: context.store,
                sceneObjects: {
                    blocksArray: context.blocksArray,
                    clonedModelsArray: context.clonedModelsArray,
                    blocksModel: context.blocksModel,
                    sizeSums: context.sizeSums,
                    iconicBuildingsModel: context.iconicBuildingsModel,
                    dayMeshes: context.dayMeshes,
                    nightMeshes: context.nightMeshes,
                    moonSprite: context.moonSprite,
                    camera: context.camera
                },
                lights: {
                    ambientLight: context.ambientLight,
                    directionalLight: context.directionalLight,
                    directionalLightMoon: context.directionalLightMoon,
                },
                dayDuration: 380,
                nightDuration: 120,
                transitionDuration: 10,
                previousModeSwitch: context,
                previousModeSwitchTwo: context,
            }
        );
    }
}


export function updateMixers(context, delta) {
    if (context.mixerRavenStanding) {
        context.mixerRavenStanding.update(delta);
    }
    if (context.mixerRavenFlying) {
        context.mixerRavenFlying.update(delta);
    }
    if (context.mixerFlockBirds) {
        context.mixerFlockBirds.update(delta);
    }
}

export function updateFlockBirds(context, delta) {
    if (context.flockBirds) {
        context.flockBirds.position.x -= context.flockBirdsSpeed;
        context.flockBirds.position.z -= context.flockBirdsSpeed * context.flockBirdsSpeedFactor;

        if (context.flockBirds.position.x < -3) {
            context.flockBirds.position.set(6, 0.8, 3);
            context.flockBirdsSpeedFactor = Math.random();

            const directionX = -context.flockBirdsSpeed;
            const directionZ = context.flockBirdsSpeed * context.flockBirdsSpeedFactor;
            context.flockBirds.rotation.y = Math.atan2(directionZ, directionX) + Math.PI;
        }
    }
}

export function updateClouds(context, currentTime) {
    if (currentTime - context.lastCloudGenerationTime > context.cloudGenerationInterval) {
        context.lastCloudGenerationTime = currentTime;
        generateCloud(context.scene, context.cloudsModel, context.cloudClones, context.cloudSpeed);
    }

    for (let i = context.cloudClones.length - 1; i >= 0; i--) {
        const cloud = context.cloudClones[i];
        cloud.position.x += context.cloudSpeed;
        if (cloud.position.x > 5) {
            context.scene.remove(cloud);
            context.cloudClones.splice(i, 1);
        }
    }
}

export function updateAircrafts(context, currentTime) {
    if (currentTime - context.lastAircraftGenerationTime > context.aircraftGenerationInterval) {
        context.lastAircraftGenerationTime = currentTime;
        generateAircraft(context.scene, context.aircraftModel, context.aircraftClones, context.aircraftSpeed);

        if (context.soundSwitch && !context.gameStateAudio) {
            setTimeout(() => {
                context.airplaneAudio.play();
            }, 5000);
        }
    }

    for (let i = context.aircraftClones.length - 1; i >= 0; i--) {
        const aircraft = context.aircraftClones[i];
        const aircraftSpeedFactor = aircraft.userData.aircraftSpeedFactor;

        aircraft.position.x -= context.aircraftSpeed;
        aircraft.position.z += context.aircraftSpeed * aircraftSpeedFactor;

        if (aircraft.position.x < -3 && aircraft.position.z < -1) {
            context.scene.remove(aircraft);
            context.aircraftClones.splice(i, 1);
        }
    }
}

export function updateSwitchAnimations(context) {
    context.animationCounter = switchAnimations({
        cloneAction1: context.cloneAction1,
        cloneAction2: context.cloneAction2,
        animationCounter: context.animationCounter,
        ravenFlyingAudio: context.ravenFlyingAudio,
    });
}
