import { applyConstruction } from '../actions/construct_blocks.js';
import * as THREE from 'three';

function precalculateCycleValues(dayDuration, transitionDuration, nightDuration) {
    const totalCycleDuration = dayDuration + 2 * transitionDuration + nightDuration;
    const effectiveDayEnd = dayDuration + transitionDuration;
    const effectiveNightStart = dayDuration + 2 * transitionDuration;

    return {
        totalCycleDuration,
        effectiveDayEnd,
        effectiveNightStart,
        nightCycleDuration: nightDuration,
        radius: 20
    };
}

function precalculateLightPositions(totalCycleDuration, effectiveDayEnd, effectiveNightStart, nightCycleDuration, radius, transitionDuration, resolution = 6000) {
    const positions = {
        sun: [],
        moon: [],
        intensityFactors: []
    };

    for (let i = 0; i < resolution; i++) {
        const cycleTime = (i / resolution) * totalCycleDuration;

        // Sun
        if (cycleTime <= effectiveNightStart) {
            const angle = (Math.PI * cycleTime) / effectiveNightStart;
            positions.sun.push({
                x: radius * Math.cos(angle),
                y: radius * Math.sin(angle),
                z: radius
            });
        } else {
            positions.sun.push({ x: 0, y: 0, z: radius });
        }

        // Moon
        if (cycleTime > effectiveNightStart && cycleTime <= effectiveNightStart + nightCycleDuration) {
            const nightCycleTime = cycleTime - effectiveNightStart;
            const angle = (Math.PI * nightCycleTime) / nightCycleDuration;

            positions.moon.push({
                x: radius * Math.cos(angle),
                y: radius * Math.sin(angle),
                z: radius
            });
        } else {
            positions.moon.push({ x: 0, y: 0, z: radius });
        }
    }

    // Intensity
    for (let i = 0; i < resolution; i++) {
        const cycleTime = (i / resolution) * totalCycleDuration;
        let amb = 0, dir = 0, dirMoon = 0;

        if (cycleTime <= transitionDuration) {
            const factor = Math.cos((Math.PI * cycleTime) / transitionDuration);
            amb = dir = 0.5 - 0.5 * factor;
        } else if (cycleTime <= effectiveDayEnd) {
            amb = dir = 1;
        } else if (cycleTime <= effectiveDayEnd + transitionDuration) {
            const t = cycleTime - effectiveDayEnd;
            const factor = Math.cos((Math.PI * t) / transitionDuration);
            amb = dir = 0.5 + 0.5 * factor;
        }

        positions.intensityFactors.push({
            intensityFactorAmb: amb,
            intensityFactorDir: dir,
            intensityFactorDirMoon: dirMoon
        });
    }

    return positions;
}

function precalculateMoonImagePath(totalCycleDuration, effectiveNightStart, nightDuration, startX = 3.2, endX = -3.5, baseY = 2, baseZ = 4.2, resolution = 6000) {
    const path = [];
    for (let i = 0; i < resolution; i++) {
        const cycleTime = (i / resolution) * totalCycleDuration;

        if (cycleTime >= effectiveNightStart && cycleTime <= effectiveNightStart + nightDuration) {
            const nightProgress = (cycleTime - effectiveNightStart) / nightDuration;
            const x = startX + (endX - startX) * nightProgress;
            const z = baseZ - Math.sin(Math.PI * nightProgress);
            const y = baseY + 0.4 * Math.sin(Math.PI * nightProgress);
            path.push({ x, y, z });
        } else {
            path.push({ x: -1000, y: -200, z: 0 });
        }
    }
    return path;
}

let currentPhase = null;

export function handleDayNightCycle(timeCounter, delta, { store, sceneObjects, lights, dayDuration, nightDuration, transitionDuration, previousModeSwitch, previousModeSwitchTwo }) {
    const { blocksArray, clonedModelsArray, blocksModel, sizeSums, dayMeshes, nightMeshes, moonSprite, camera } = sceneObjects;
    const { ambientLight, directionalLight, directionalLightMoon } = lights;

    if (!store.state.precalculatedValues) {
        store.state.precalculatedValues = precalculateCycleValues(dayDuration, transitionDuration, nightDuration);
    }

    const { totalCycleDuration, effectiveDayEnd, effectiveNightStart, nightCycleDuration, radius } = store.state.precalculatedValues;

    if (!store.state.precalculatedPositions) {
        store.state.precalculatedPositions = precalculateLightPositions(
            totalCycleDuration, effectiveDayEnd, effectiveNightStart, nightCycleDuration, radius, transitionDuration
        );
    }

    if (!store.state.precalculatedMoonImagePath) {
        store.state.precalculatedMoonImagePath = precalculateMoonImagePath(
            totalCycleDuration, effectiveNightStart, nightCycleDuration
        );
    }

    const resolution = store.state.precalculatedPositions.sun.length;
    timeCounter = (timeCounter + delta) % totalCycleDuration;

    const cycleFraction = (timeCounter / totalCycleDuration) * resolution;
    const index = Math.floor(cycleFraction);
    const t = cycleFraction - index;

    // Interpolate sun and moon positions
    const sunCurrent = store.state.precalculatedPositions.sun[index];
    const sunNext = store.state.precalculatedPositions.sun[(index + 1) % resolution];

    const moonCurrent = store.state.precalculatedPositions.moon[index];
    const moonNext = store.state.precalculatedPositions.moon[(index + 1) % resolution];

    const sunPos = interpolate(sunCurrent, sunNext, t);
    const moonPos = interpolate(moonCurrent, moonNext, t);

    directionalLight.position.set(sunPos.x, sunPos.y, sunPos.z);
    directionalLightMoon.position.set(moonPos.x, moonPos.y, moonPos.z);

    // Interpolate moon sprite
    const moonImgCurrent = store.state.precalculatedMoonImagePath[index];
    const moonImgNext = store.state.precalculatedMoonImagePath[(index + 1) % resolution];
    const moonImg = interpolate(moonImgCurrent, moonImgNext, t);
    moonSprite.position.set(moonImg.x, moonImg.y, moonImg.z);
    moonSprite.lookAt(camera.position);
    moonSprite.material.opacity = 1;

    const { intensityFactorAmb, intensityFactorDir, intensityFactorDirMoon } = store.state.precalculatedPositions.intensityFactors[index];

    const lightSwitch = store.state.lights ? 1 : 0;

    // Day phases logic
    if (timeCounter <= transitionDuration) {
        ambientLight.intensity = 0.04 + 2 * intensityFactorAmb;
        directionalLight.intensity = 2.4 * intensityFactorDir;
        directionalLightMoon.intensity = intensityFactorDirMoon;

        if (store.state.lights) store.commit('setLights', false);
        if (!store.state.dayTime) {
            store.commit('setDayTime', true);
            applyConstruction(blocksArray, clonedModelsArray, blocksModel, sizeSums, store);
            dayMeshes.forEach(mesh => mesh.visible = true);
            nightMeshes.forEach(mesh => mesh.visible = false);
        }

    } else if (timeCounter <= transitionDuration + dayDuration) {
        if (currentPhase !== 'fullDay') {
            ambientLight.intensity = 0.04 + 2;
            directionalLight.intensity = 2.4;
            directionalLightMoon.intensity = 0;
            currentPhase = 'fullDay';
        }

        if (!store.state.dayTime) {
            store.commit('setDayTime', true);
        }

    } else if (timeCounter <= transitionDuration + dayDuration + transitionDuration) {
        ambientLight.intensity = 0.04 + 2 * intensityFactorAmb;
        directionalLight.intensity = 2.4 * intensityFactorDir;
        directionalLightMoon.intensity = intensityFactorDirMoon;

    } else {
        if (lightSwitch === 0 && currentPhase !== 'lightSwitch_0') {
            ambientLight.intensity = 0.04;
            directionalLight.intensity = 0;
            directionalLightMoon.intensity = 0.2;
            store.dispatch('setLights', true);
            currentPhase = 'lightSwitch_0';
        } else if (lightSwitch === 1 && currentPhase !== 'lightSwitch_1') {
            ambientLight.intensity = 1;
            directionalLight.intensity = 0;
            directionalLightMoon.intensity = 10;
            currentPhase = 'lightSwitch_1';
        }

        if (lightSwitch === 0 && previousModeSwitch.previousModeSwitch === 0) {
            if (!store.state.dayTime) {
                store.commit('setDayTime', true);
            }
            applyConstruction(blocksArray, clonedModelsArray, blocksModel, sizeSums, store);
            previousModeSwitch.previousModeSwitch = 1;
            previousModeSwitchTwo.previousModeSwitchTwo = 0;
            dayMeshes.forEach(mesh => mesh.visible = true);
            nightMeshes.forEach(mesh => mesh.visible = false);
        }

        if (lightSwitch === 1 && previousModeSwitch.previousModeSwitch === 1) {
            if (store.state.dayTime) {
                store.commit('setDayTime', false);
            }
            applyConstruction(blocksArray, clonedModelsArray, blocksModel, sizeSums, store);
            previousModeSwitch.previousModeSwitch = 0;
            dayMeshes.forEach(mesh => mesh.visible = false);
            nightMeshes.forEach(mesh => mesh.visible = true);
        }
    }

    return timeCounter;
}

// Simple linear interpolation helper
function interpolate(a, b, t) {
    return {
        x: a.x + (b.x - a.x) * t,
        y: a.y + (b.y - a.y) * t,
        z: a.z + (b.z - a.z) * t
    };
}
