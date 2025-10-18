// castle.js

export function iconicBuildings(GLTFLoader) {
    return new Promise((resolve, reject) => {
        // Instantiate a loader
        const loader = new GLTFLoader();

        // Load a glTF resource
        loader.load(
            // resource URL
            '/models/iconic_buildings.glb',
            // called when the resource is loaded
            (gltf) => {
                const iconicBuildingsModel = gltf.scene;
                iconicBuildingsModel.visible = true;

                // // Traverse the scene graph and apply new color to objects with name containing "block"
                traverseAndApplyColor(iconicBuildingsModel);

                // castleModel.position.set(0, 0, -2.2);

                // Resolve with the loaded model
                resolve(iconicBuildingsModel);
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

        function traverseAndApplyColor(object) {
            // Traverse the object and its children
            object.traverse((child) => {
                if (child.isMesh && child.name.includes("asphalt")) {
                    child.position.set(0, -0.001, 0);
                }
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            // Explicitly handle visibility as a second pass
            object.traverse((child) => {
                if (child.isMesh) {
                    if (child.isMesh && child.name.includes("night")) {
                        child.visible = false; // Make "street" objects visible
                    } else {
                        child.visible = true; // Hide all other objects
                    }
                    // console.log(child.name, child.visible);
                }
            });
        }
    });
}
