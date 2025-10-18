// construct_blocks.js

export const applyConstruction = (blocksArray, clonedModelsArray, blocksModel, sizeSums, store) => {
    return new Promise((resolve) => {

        // Watch the lightSwitch state dynamically
        const lightSwitch = store.state.lights ? 1 : 0;
        const isDaytime = store.state.dayTime ? 1 : 0;

        const setModelVisibility = (blocks, models, keyword) => {

            // Skip rendering undeveloped
            if (keyword === 'undeveloped') return;

            const filteredBlocks = blocks.filter(block => block.construction.includes(keyword));
            const filteredModels = models.filter(model => model.name.includes(keyword));

            filteredModels.forEach(model => {
                const modelNameParts = model.name.split('_');
                const modelNameSliced = modelNameParts.slice(1, 3).join('_');
                const matchingBlock = filteredBlocks.find(block => block.construction === modelNameSliced);

                if (isDaytime === 0) {
                    model.visible = !!matchingBlock && model.name.includes("night");
                } else if (isDaytime === 1) {
                    model.visible = !!matchingBlock && !model.name.includes("night");
                }
            });
        };

        // Update visibility for each keyword
        setModelVisibility(blocksArray, clonedModelsArray, "greenAreaTrees");
        setModelVisibility(blocksArray, clonedModelsArray, "parkingLots");
        setModelVisibility(blocksArray, clonedModelsArray, "libraries");
        setModelVisibility(blocksArray, clonedModelsArray, "commercials");
        setModelVisibility(blocksArray, clonedModelsArray, "apartments");
        setModelVisibility(blocksArray, clonedModelsArray, "publicSchools");
        setModelVisibility(blocksArray, clonedModelsArray, "museums");
        setModelVisibility(blocksArray, clonedModelsArray, "publicNurseries");
        setModelVisibility(blocksArray, clonedModelsArray, "housesOfGod");

        // Clear the existing array (sizeSums)
        sizeSums.length = 0;

        // Sum up the size values for each construction type using only the first part of the construction type
        const sizeSumsMap = {};
        blocksArray.forEach(block => {
            const constructionType = block.construction.split('_')[0]; // Use only the first value
            if (!sizeSumsMap[constructionType]) {
                sizeSumsMap[constructionType] = 0;
            }
            sizeSumsMap[constructionType] += parseFloat(block.size) || 0;
        });

        // Convert the sizeSumsMap to an array of objects with name and size properties
        Object.entries(sizeSumsMap).forEach(([name, size]) => {
            sizeSums.push({ name, size: Number.parseFloat(size).toString() });
        });

        resolve(); // Immediately resolve the promise
    });
};
