import _ from 'lodash';
import { applyConstruction } from './construct_blocks.js';

export const constructionWatcher = (store, blocksArray, blocksModel, clonedModelsArray, blocksStatusHistory, constructionMappings, historyCounter, sizeSums) => {
    // Watch for changes in multiple store variables
    const unwatchers = constructionMappings.map(mapping => {
        return store.watch(
            (state) => state[mapping.storeVariable],
            async (newValue, oldValue) => { // Declare the callback as async
                // Turning store variable back to false
                store.commit(mapping.mutationToFalse, false);
                store.commit('updateSizeSums', sizeSums);
                store.dispatch('updateFeelGoodBarometer', true);

                // If statement checking if "newValue=true" and if some "active" properties in blocksArray returning true as well
                if (newValue && blocksArray.some(block => block.active === true)) {
                    // If not the latest state, update history
                    if (historyCounter[0] !== 1 && historyCounter[0] <= blocksStatusHistory.length) {
                        // Delete the last historyCounter[0] values of blocksStatusHistory
                        blocksStatusHistory.splice(-historyCounter[0]);
                        blocksStatusHistory.push(JSON.parse(JSON.stringify(blocksArray)));
                        historyCounter[0] = 1; // Update the counter value
                    }

                    // Filter blocksArray based on the active property
                    const activeBlocks = blocksArray.filter(block => block.active);

                    // Traverse blocksModel to update the construction property in blocksArray
                    blocksModel.traverse((child) => {
                        if (child.isMesh && child.name.includes("block")) {
                            // Compare active blocks in blocksArray
                            const hasSameName = activeBlocks.some(block => block.name === child.name);
                            if (hasSameName) {
                                // Extract the value after the last underscore in child.name
                                const lastUnderscoreIndex = child.name.lastIndexOf('_');
                                const suffix = child.name.substring(lastUnderscoreIndex + 1);

                                // Update construction property of blocksArray elements
                                const blockToUpdate = blocksArray.find(block => block.name === child.name);
                                if (blockToUpdate) {
                                    blockToUpdate.construction = mapping.name + '_' + suffix;
                                }

                                // Find and update the corresponding "outlines_[index]" object
                                const outlineName = `outline_${suffix}`;
                                blocksModel.traverse((outlineChild) => {
                                    if (outlineChild.isMesh && outlineChild.name === outlineName) {
                                        try {
                                            outlineChild.material.opacity = 0;
                                            outlineChild.material.needsUpdate = true;
                                        } catch (error) {
                                            console.error('Error updating outline material:', error);
                                        }
                                    }
                                });
                            }
                        }
                    });

                    // Set all values of the active property in blocksArray to false
                    blocksArray.forEach(block => {
                        block.active = false;
                    });

                    // Call the visibility filter function and await it
                    await applyConstruction(blocksArray, clonedModelsArray, blocksModel, sizeSums, store);

                    // Store blocksArray in blocksStatusHistory
                    blocksStatusHistory.push(_.cloneDeep(blocksArray));
                    // console.log('blocksStatusHistory:', blocksStatusHistory.length);
                }
            }
        );
    });

    return unwatchers;
};
