// aircraft.js

export function aircraft(GLTFLoader) {
    return new Promise((resolve, reject) => {
        // Instantiate a loader
        const loader = new GLTFLoader();

        // Load a glTF resource
        loader.load(
            // resource URL
            '/models/aircraft.glb',
            // called when the resource is loaded
            (gltf) => {
                const aircraft = gltf.scene;
                aircraft.visible = false;

                  // Traverse the scene graph to set shadows
                  aircraft.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = false;
                        child.receiveShadow = true;
                    }
                
                // Resolve with the loaded model
                resolve(aircraft);

                });
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
