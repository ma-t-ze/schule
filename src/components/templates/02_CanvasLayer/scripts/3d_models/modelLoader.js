import { loadAndAddModels } from './building_possibilities_loader.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { blocks } from './blocks.js';
import { background } from './background.js';
import { clouds } from './clouds.js';
import { aircraft } from './aircraft.js';
import { iconicBuildings } from './iconicBuildings.js';
import { ravenModelStanding } from './ravenModelStanding.js';
import { ravenModelFlying } from './ravenModelFlying.js';
import { flockBirdsModel } from './flockBirds.js';
import { clonedModels } from './modelCloning.js';

export async function callModels(scene, THREE, flockBirdsSpeed, flockBirdsSpeedFactor) {
    // Declare an array to store the loaded models
    let argsModels = [];

    // Load models and assign them to the array
    argsModels = await loadAndAddModels(GLTFLoader, scene);

    // Load the background model
    const backgroundModel = await background(GLTFLoader);
    scene.add(backgroundModel);

    // Load the cloud model
    const cloudsModel = await clouds(GLTFLoader);
    scene.add(cloudsModel);

    // Load the aircraft model
    const aircraftModel = await aircraft(GLTFLoader);
    scene.add(aircraftModel);

    // Load the iconicBuildings
    const iconicBuildingsModel = await iconicBuildings(GLTFLoader);
    scene.add(iconicBuildingsModel);

    // Load blocksModel
    const { blocksModel, blocksArray } = await blocks(GLTFLoader, THREE);
    scene.add(blocksModel);

    // Load ravenModelStanding and store its sound
    const { raven, mixerRavenStanding, action1, action2, sound: ravenSound } = await ravenModelStanding(GLTFLoader, THREE, scene);
    scene.add(raven);

    // Load ravenModelFlying
    const { flyingRaven, mixerRavenFlying, cloneAction1, cloneAction2, audio: ravenFlyingAudio } = await ravenModelFlying(GLTFLoader, THREE, scene);
    scene.add(flyingRaven);

    // Load flockBirds
    const { flockBirds, mixerFlockBirds, action } = await flockBirdsModel(
        GLTFLoader,
        THREE,
        scene,
        flockBirdsSpeed,
        flockBirdsSpeedFactor
    );
    scene.add(flockBirds);

    // Call the function to clone models from blocksLibrariesModel
    const clonedModelsArray = clonedModels([...argsModels], scene);

    return {
        blocksArray,
        blocksModel,
        clonedModelsArray,
        cloudsModel,
        aircraftModel,
        iconicBuildingsModel,
        raven,
        mixerRavenStanding,
        action1,
        action2,
        ravenSound,
        flyingRaven,
        mixerRavenFlying,
        cloneAction1,
        cloneAction2,
        ravenFlyingAudio,
        flockBirds,
        mixerFlockBirds,
    };
}
