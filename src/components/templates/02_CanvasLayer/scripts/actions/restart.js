// restart.js

// This function watches for changes in the 'backward' property in the store
export function watchForRestart(store, blocksArray, blocksModel, clonedModelsArray, blocksStatusHistory, constructionMappings, historyCounter) {

    store.watch(
        (state) => state.restart,
        (newValue, oldValue) => {
     
      
            if (newValue) {
                store.commit('setRestart', false);
                // Reset history counter
                historyCounter[0] = 1;

                blocksStatusHistory.length = 0;

                blocksArray.forEach(block => {
                    block.active = false;
                    block.construction = 'none';
                    block.color = 0xFFFFFF;
                });

                blocksStatusHistory.push(JSON.parse(JSON.stringify(blocksArray)));

                // Traverse blocksModel to change color of its child elements with the same name as active blocks in the blocksArray
                blocksModel.traverse((child) => {
                    if (child.isMesh && child.name.includes("block")) {
                        child.material.color.set(0xffffff);
                        child.material.opacity = 0;
                        child.material.needsUpdate = true;
                    }
                    if (child.isMesh && child.name.includes("outline")) {
                        child.material.opacity = 0;
                        child.material.needsUpdate = true;
                    }
                });

                 // Iterate over clonedModelsArray to change visibility of its child elements
                 clonedModelsArray.forEach((child) => {
                       child.visible = false;
                });

                // console.log(blocksStatusHistory)
                store.commit('resetState');
            }
        }
    );
}
