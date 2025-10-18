// background.js

export function background(GLTFLoader) {
    return new Promise((resolve, reject) => {
        // Instantiate a loader
        const loader = new GLTFLoader();

        // Load a glTF resource
        loader.load(
            // resource URL
            '/models/background.glb',
            // called when the resource is loaded
            (gltf) => {
                const backgroundModel = gltf.scene;
                backgroundModel.visible = true;

                // // Traverse the scene graph and apply new color to objects with name containing "block"
                traverseAndApplyColor(backgroundModel);

                // backgroundModel.position.set(0, 0, -2.2);

                // Resolve with the loaded model
                resolve(backgroundModel);
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
                if (child.isMesh && child.name.includes("outlines")) {
                    child.material.color.set(0xFFFFFF);
                    child.material.opacity = 0;
                }
            });
        }
    });
}
