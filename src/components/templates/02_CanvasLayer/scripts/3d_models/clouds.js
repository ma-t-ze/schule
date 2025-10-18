// clouds.js

export function clouds(GLTFLoader) {
    return new Promise((resolve, reject) => {
        // Instantiate a loader
        const loader = new GLTFLoader();

        // Load a glTF resource
        loader.load(
            // resource URL
            '/models/clouds.glb',
            // called when the resource is loaded
            (gltf) => {
                const cloudsModel = gltf.scene;
                cloudsModel.visible = false;
                

                // // Traverse the scene graph and apply new color to objects with name containing "block"
                // traverseAndApplyColor(cloudsModel);

                // Resolve with the loaded model
                resolve(cloudsModel);
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
                if (child.isMesh) {
                    child.position.set = (-3,0,-1)
                }
            });
        }
    });
}
