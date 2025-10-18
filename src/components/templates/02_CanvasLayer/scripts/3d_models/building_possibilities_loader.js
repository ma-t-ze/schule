// libraryLoader.js

export function loadAndAddModels(GLTFLoader, scene) {
    // Define an array of model paths
    const modelPaths = [
        // models_0
        '/models/libraries.glb',
        // models_1
        '/models/parkingLots.glb',
        // models_2
        '/models/greenAreaTrees.glb',
        // models_3
        '/models/commercials.glb',
        // models_4
        '/models/apartments.glb',
        // models_5
        '/models/publicSchools.glb',
        // models_6
        '/models/museums.glb',
        // models_7
        '/models/publicNurseries.glb',
        // models_8
        '/models/housesOfGod.glb',
    ];

    // Define an array to store the promises for loading each model
    const modelPromises = modelPaths.map(path => loadModel(GLTFLoader, path));

    // Return a Promise that resolves with an array of loaded models
    return Promise.all(modelPromises)
        .then(loadedModels => {
            // Add each loaded model to the scene
            loadedModels.forEach(model => {
                scene.add(model);
            });
            // Return the array of loaded models
            return loadedModels;
        })
        .catch(error => {
            console.error('Error loading library models:', error);
            throw error; // Rethrow the error to propagate it further
        });
}

function loadModel(GLTFLoader, modelPath) {
    return new Promise((resolve, reject) => {
        // Instantiate a loader
        const loader = new GLTFLoader();

        // Load a glTF resource
        loader.load(
            // resource URL
            modelPath,
            // called when the resource is loaded
            (gltf) => {
                const model = gltf.scene;

                // Resolve with the loaded model
                resolve(model);
            },
            // called while loading is progressing
            function (xhr) {
                // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            // called when loading has errors
            function (error) {
                console.log('An error happened:', error);
                reject(error);
            }
        );
    });
}
