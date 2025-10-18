// raycaster.js

import { getPointerPosition, updatePointerAndRaycaster } from './utils/pointerUtils.js';

export default class RaycasterHandler {
    constructor(camera, scene, Raycaster, Vector2, store, blocksArray, blocksModel) {
        this.camera = camera;
        this.scene = scene;
        this.blocksArray = blocksArray;
        this.store = store;
        this.blocksModel = blocksModel;
        this.nonSelectableBlocks = ['block_98', 'block_81', 'block_65'];


        this.raycaster = new Raycaster();
        this.pointer = new Vector2();

        window.addEventListener('touchstart', this.onPointerStart, false);
        window.addEventListener('touchmove', this.onPointerMove, false);
    }

    toggleBlockActivation(intersectedBlock, outlineObject) {
        if (intersectedBlock.active) {
            intersectedBlock.active = false;
            if (outlineObject) {
                outlineObject.material.opacity = 0;
            }
        } else {
            intersectedBlock.active = true;
            if (outlineObject) {
                outlineObject.material.opacity = 1;
            }
        }
    }

    onPointerStart = (event) => {
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;
        // Check if the element at the pointer is within the .detail-button element.
        const elementAtPoint = document.elementFromPoint(clientX, clientY);
        if (elementAtPoint && elementAtPoint.closest('.detail-button')) {

            return; // Skip raycasting if the event originated within .detail-button
        }

        const { x, y } = getPointerPosition(event);

        // Convert normalized device coordinates to screen coordinates
        const screenY = (1 - y) / 2 * window.innerHeight;

        // Check if pointer position is within the last 100px seen from top to bottom
        if (screenY >= window.innerHeight - window.innerHeight * 0.1) {
            return; // Skip raycasting
        }

        // Check the status of blockSelection and skip raycasting if true
        if (this.store.state.blockSelection) {
            return;
        }

        updatePointerAndRaycaster(this.pointer, this.raycaster, this.camera, x, y);

        const intersects = this.raycaster.intersectObjects(this.scene.children, true)
            .filter(intersect => intersect.object.name.includes("block"));

        if (intersects.length > 0) {
            intersects.forEach((intersect) => {
                const intersectedBlock = this.blocksArray.find(block => block.name === intersect.object.name);
                if (intersectedBlock) {
                    
                    if (this.nonSelectableBlocks.includes(intersectedBlock.name)) {
                        console.log('Skipping non-selectable block:', intersectedBlock.name);
                        return;
                    }
                    // Extract the index from the name of the intersected "block" object
                    const blockNameParts = intersect.object.name.split("_");
                    if (blockNameParts.length > 1) {
                        const index = blockNameParts[1];

                        // Find the corresponding "outlines_[index]" object within blocksModel
                        const outlineName = `outline_${index}`;
                        let outlineObject = null;
                        this.blocksModel.traverse((child) => {
                            if (child.name === outlineName) {
                                outlineObject = child;
                            }
                        });

                        // Toggle block activation and outline opacity
                        this.toggleBlockActivation(intersectedBlock, outlineObject);
                    }
                }
            });
        }
    }

    onPointerMove = (event) => {
        const { x, y } = getPointerPosition(event);

        // Convert normalized device coordinates to screen coordinates
        const screenY = (1 - y) / 2 * window.innerHeight;

        // Check if pointer position is within the last 100px seen from top to bottom
        if (screenY >= window.innerHeight - window.innerHeight * 0.1) {
            return; // Skip raycasting
        }

        // Check the status of blockSelection and skip raycasting if true
        if (this.store.state.blockSelection) {
            // console.log("blockSelection is true");
            return;
        }

        updatePointerAndRaycaster(this.pointer, this.raycaster, this.camera, x, y);

        const intersects = this.raycaster.intersectObjects(this.scene.children, true)
            .filter(intersect => intersect.object.name.includes("block"));

        if (intersects.length > 0) {
            intersects.forEach((intersect) => {
                const intersectedBlock = this.blocksArray.find(block => block.name === intersect.object.name);
                if (intersectedBlock) {
                    if (this.nonSelectableBlocks.includes(intersectedBlock.name)) {
                        console.log('Skipping non-selectable block:', intersectedBlock.name);
                        return;
                    }
                    intersectedBlock.active = true;

                    // Extract the index from the name of the intersected "block" object
                    const blockNameParts = intersect.object.name.split("_");
                    if (blockNameParts.length > 1) {
                        const index = blockNameParts[1];

                        // Find the corresponding "outlines_[index]" object within blocksModel
                        const outlineName = `outline_${index}`;
                        let outlineObject = null;
                        this.blocksModel.traverse((child) => {
                            if (child.name === outlineName) {
                                outlineObject = child;
                            }
                        });

                        if (outlineObject) {
                            outlineObject.material.opacity = 1;
                        }
                    }
                }
            });
        }
    }
}
