// blocks.js

export function blocks(GLTFLoader, THREE) {
    return new Promise((resolve, reject) => {

        // Instantiate a loader
        const loader = new GLTFLoader();

        // Array to store objects with the name "block"
        const blocksArray = [];

        // Load a glTF resource
        loader.load(
            // resource URL
            '/models/blocks.glb',
            // called when the resource is loaded
            (gltf) => {
                const blocksModel = gltf.scene;

                // Traverse the scene graph and apply new color to objects with name containing "block"
                traverseAndApplyColor(blocksModel);

                blocksModel.position.set(0, 0, 0);

                // Resolve with the array once all objects are loaded and processed
                resolve({ blocksModel, blocksArray });
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
                if (child.isMesh && child.name.includes("block")) {
                    // Push only filtered name to name and push size to another property
                    // Push the object into the blocksArray
                    blocksArray.push({ name: child.name, active: false, construction: 'none', color: 0xFFFFFF });
                    child.material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 });
                    child.material.color.set(0x4D72AE);
                    // child.visible = false;
                }
                if (child.isMesh && child.name.includes("outline")) {
                    child.material = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.0 });
                    child.position.y = 0.005;
                    // child.material.color.set(0x4D72AE);
                    // child.visible = false;
                }
                if (child.isMesh && child.name.includes("size")) {
                    // Split the name of the child containing "size"
                    const childNameParts = child.name.split('_');
                    const childSecondValue = childNameParts[1];
                    const childLastValue = childNameParts[childNameParts.length - 1];

                    // Find the corresponding block in blocksArray and update its size
                    const matchingBlock = blocksArray.find(block => {
                        const blockNameParts = block.name.split('_');
                        const blockSecondValue = blockNameParts[1];
                        return blockSecondValue === childSecondValue;
                    });

                    if (matchingBlock) {
                        matchingBlock.size = childLastValue;
                    }

                    child.visible = false;
                }
            });
        }
    });
}
