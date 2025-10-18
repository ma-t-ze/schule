// backAndForth.js
import _ from 'lodash';
import { applyConstruction } from './construct_blocks.js';

// This function watches for changes in the 'backward' and 'forward' properties in the store
export function watchForBackwardChange(store, blocksArray, blocksModel, clonedModelsArray, blocksStatusHistory, constructionMappings, historyCounter, sizeSums) {

    store.watch(
        (state) => state.backward,
        async (newValue) => {
            if (newValue) {
                try {
                    if (blocksStatusHistory.length > historyCounter[0]) {
                        store.dispatch('updateFeelGoodBarometer', true);
                        // Increment the history counter
                        historyCounter[0]++;

                        blocksModel.traverse(child => {
                            if (child.isMesh && child.name.includes("outline")) {
                                blocksArray.forEach(block => {
                                    const blockNumber = block.name.split('_').pop();
                                    const childNumber = child.name.split('_').pop();
                                    if (childNumber === blockNumber) {
                                        if (block.construction === 'none') {
                                            child.material.opacity = 0;
                                            child.material.transparent = true;
                                        } else {
                                            child.material.opacity = 0;
                                            child.material.transparent = true;
                                        }
                                    }
                                });
                            }
                        });

                        if (blocksStatusHistory.length > 1) {
                            // Get the previous status from the history
                            // Restore previous state
                            const previousStatus = _.cloneDeep(
                                blocksStatusHistory[blocksStatusHistory.length - historyCounter[0]]
                            );
                            blocksArray.length = 0;
                            Array.prototype.push.apply(blocksArray, previousStatus);

                            // Apply the visibility filter function
                            await applyConstruction(blocksArray, clonedModelsArray, blocksModel, sizeSums, store);
                        }
                    }
                } catch (error) {
                    console.error('Error during backward action:', error);
                } finally {
                    // Reset the backward state
                    store.commit('setBackward', false);
                }
            }
        }
    );

    // Watch for forward action
    store.watch(
        (state) => state.forward,
        async (newValue) => {
            if (newValue) {
                try {
                    if (historyCounter[0] > 1) {
                         store.dispatch('updateFeelGoodBarometer', true);
                        // Decrement the history counter
                        historyCounter[0]--;
                        console.log('historyCounter:', historyCounter[0]);

                        blocksModel.traverse(child => {
                            if (child.isMesh && child.name.includes("outline")) {
                                blocksArray.forEach(block => {
                                    const blockNumber = block.name.split('_').pop();
                                    const childNumber = child.name.split('_').pop();
                                    if (childNumber === blockNumber) {
                                        if (block.construction === 'none') {
                                            child.material.opacity = 0;
                                            child.material.transparent = true;
                                        } else {
                                            child.material.opacity = 0;
                                            child.material.transparent = true;
                                        }
                                    }
                                });
                            }
                        });

                        if (blocksStatusHistory.length > 1) {
                            // Get the next status from the history
                            // Restore previous state
                            const previousStatus = _.cloneDeep(
                                blocksStatusHistory[blocksStatusHistory.length - historyCounter[0]]
                            );
                            blocksArray.length = 0;
                            Array.prototype.push.apply(blocksArray, previousStatus);


                            // Apply the visibility filter function
                            await applyConstruction(blocksArray, clonedModelsArray, blocksModel, sizeSums, store);
                        }
                    }
                } catch (error) {
                    console.error('Error during forward action:', error);
                } finally {
                    // Reset the forward state
                    store.commit('setForward', false);
                }
            }
        }
    );
}
