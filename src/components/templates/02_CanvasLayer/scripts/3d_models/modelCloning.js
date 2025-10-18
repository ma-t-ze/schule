// modelCloning.js

export function clonedModels(modelsArray, scene) {

    const clonedModelsArray = [];

    // Process specific model groups
    // processModels(1, "parkingLots", clonedModelsArray); // Process parkingLots
    processModels(3, "commercials", clonedModelsArray); // Process commercials
    processModels(4, "apartments", clonedModelsArray); // Process apartments

    // Generic function to process models
    function processModels(modelsArrayIndex, keyword, clonedModelsArray) {
        modelsArray[modelsArrayIndex].traverse((child) => {
            if (child.isMesh) {
                // Set visibility to false for all meshes
                child.visible = false;

                // if (child.name.includes("apartments") && !child.name.includes("night")){
                //     child.visible = true;
                // }

                // If the child matches the keyword, process it
                if (child.name.includes(keyword)) {
                    clonedModelsArray.push(child);
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            }
        });
    }
    // --------------------- parkingLots ---------------------
    const modelParkingLotsMap = new Map();
    mapModels(1, "parkingLot", modelParkingLotsMap);
    // --------------------- parkingLots ---------------------
    // --------------------- greenAreaTrees ---------------------
    const modelGreenAreaTreesMap = new Map();
    mapModels(2, "greenAreaTree", modelGreenAreaTreesMap);
    // --------------------- greenAreaTrees ---------------------
    // --------------------- housesOfGod ---------------------
    const modelHousesOfGodMap = new Map();
    mapModels(8, "houseOfGod", modelHousesOfGodMap);
    // --------------------- housesOfGod ---------------------
    // --------------------- Museums ---------------------
    const modelMuseumsMap = new Map();
    mapModels(6, "museum", modelMuseumsMap);
    // --------------------- Museums ---------------------
    // --------------------- publicNurseries ---------------------
    const modelPublicNurseryMap = new Map();
    mapModels(7, "publicNursery", modelPublicNurseryMap);
    // --------------------- publicNurseries ---------------------
    // --------------------- Library ---------------------
    const modelLibraryMap = new Map();
    mapModels(0, "library", modelLibraryMap);
    // --------------------- Library ---------------------
    // --------------------- PublicSchools ---------------------
    const modelPublicSchoolMap = new Map();
    mapModels(5, "publicSchool", modelPublicSchoolMap);
    // --------------------- PublicSchools ---------------------

    // Generic function to map models
    function mapModels(modelsArrayIndex, prefix, modelMap) {
        const parts = ["big", "medium", "small", "tree", "play", "gardenOfReligions"];
        const variants = ["day", "night"];

        // Traverse and map models dynamically
        modelsArray[modelsArrayIndex].traverse((child) => {
            parts.forEach((part) => {
                variants.forEach((variant) => {
                    if (child.name.includes(`${prefix}_${part}_${variant}`)) {
                        modelMap.set(`${part}_${variant}`, child);
                    }
                });
            });

            // Ensure shadows are enabled for all children
            child.castShadow = true;
            child.receiveShadow = true;
        });
    }

    cloneAndProcessModels(modelsArray[1], modelParkingLotsMap, "ground_parkingLots", "streets_parkingLots", "parkingLots");

    cloneAndProcessModels(modelsArray[0], modelLibraryMap, "ground_libraries", "streets_libraries", "libraries");

    cloneAndProcessModels(modelsArray[2], modelGreenAreaTreesMap, "ground_greenAreaTrees", "streets_greenAreaTrees", "greenAreaTrees");

    cloneAndProcessModels(modelsArray[5], modelPublicSchoolMap, "ground_publicSchools", "streets_publicSchools", "publicSchools");

    cloneAndProcessModels(modelsArray[6], modelMuseumsMap, "ground_museums", "streets_museums", "museums");

    cloneAndProcessModels(modelsArray[7], modelPublicNurseryMap, "ground_publicNurseries", "streets_publicNurseries", "publicNurseries");

    cloneAndProcessModels(modelsArray[8], modelHousesOfGodMap, "ground_housesOfGod", "streets_housesOfGod", "housesOfGod");

    // Function to clone and process models
    function cloneAndProcessModels(model, modelMap, groundKeyword, streetKeyword, keyword) {
        model.traverse((child) => {
            let clonedModel = null;

            // Hide the original mesh
            if (child.isMesh) {
                child.visible = false;
            }

            // Log only if the name contains "greenAreaTrees"
            // if (child.name.includes("publicNursery") && child.name.includes("night")) {
            //     child.visible = true;
            // }

            // Check and handle groundKeyword matches
            if (child.isMesh && child.name.includes(groundKeyword)) {
                clonedModelsArray.push(child);
            }

            // Check and handle streetKeyword matches
            if (child.isMesh && child.name.includes(streetKeyword)) {
                clonedModelsArray.push(child);
            }

            // Process templates in modelMap
            for (const [key, templateModel] of modelMap) {

                // Extract the "part" dynamically from the key (e.g., "big" from "big_day")
                const part = key.split("_")[0];

                if (child.name.includes(`${part}_${keyword}`)) {
                    // Clone the corresponding template model
                    clonedModel = templateModel.clone();

                    // Copy position and rotation from the target child
                    clonedModel.position.copy(child.position);
                    clonedModel.rotation.copy(child.rotation);

                    // Assign the name of the target child and append "day" or "night"
                    if (key.includes(`${part}_night`)) {
                        clonedModel.name = `${child.name}_night`;
                    } else if (key.includes(`${part}_day`)) {
                        clonedModel.name = `${child.name}_day`;
                    }

                    // Add the cloned model to the scene
                    scene.add(clonedModel);
                    clonedModel.visible = false;
                    clonedModelsArray.push(clonedModel);

                    // // Log only if the name contains "greenAreaTrees"
                    // if (clonedModel.name.includes("publicNurseries") && clonedModel.name.includes("day")) {
                    //     clonedModel.visible = true;
                    //     console.log(clonedModel.name)
                    // }


                    // Enable shadows for the cloned model
                    clonedModel.traverse((subChild) => {
                        if (subChild.isMesh) {
                            subChild.castShadow = true;
                            subChild.receiveShadow = true;
                        }
                    });
                }
            }

        });
    }

    return clonedModelsArray;
}

