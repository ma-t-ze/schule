// watchHandlers.js

import { Audio, AudioLoader, AudioListener } from 'three';

export function initializeWatchHandlers(store, THREE, renderer, updateLoadingSpinner, context) {
    store.watch(
        (state) => state.startGame,
        (newValue) => {
            if (newValue) {
                store.commit('setStartGame', false);
                store.commit('setPlayMode', true);
                context.gameStateAudio = false;

                if (context.soundSwitch) {
                    context.ravenAudio.play();
                    context.windAudio.play();
                }

                context.startDayNightCycle();

                context.ravenTweenAway();
                context.flyingRavenTweenAway();
                context.action1.stop();
                context.action2.play();
                context.animationCounter = 3;

                setTimeout(() => {
                    context.backgroundAudio.pause();
                }, 3000);

                if (context.ravenSound) {
                    context.ravenSound.setVolume(0);
                }
                if (context.ravenFlyingAudio) {
                    context.ravenFlyingAudio.pause();
                }

                setTimeout(() => {
                    context.action2.stop();
                    context.cloneAction1.stop();
                    context.cloneAction2.stop();
                    context.raven.visible = false;
                    context.flyingRaven.visible = false;
                    // context.windAudio.setVolume(0.2);
                }, 3000);
                context.cameraTweenGame();
            }
        }
    );

    store.watch(
        (state) => state.initialCam,
        async (newValue) => {
            if (newValue) {
                console.log("test");
                store.commit('setInitialCam', false);
                context.animationCounter = 0;
                context.stopDayNightCycle();
                context.raven.visible = true;
                context.flyingRaven.visible = true;
                context.ravenTweenBack();
                context.flyingRavenTweenBack();
                context.action2.stop();
                context.action1.play();
                context.action1.loop = THREE.LoopRepeat;
                context.cameraTweenStart();
                context.gameStateAudio = true;
                if (context.soundSwitch) {
                    context.backgroundAudio.play();
                    context.windAudio.pause();
                    if (context.ravenSound) {
                        context.ravenSound.setVolume(0.03);
                    }
                    if (context.ravenFlyingAudio) {
                        context.ravenFlyingAudio.play();
                    }
                }
            }
        }
    );

    store.watch(
        (state) => state.statistics,
        (newValue) => {
            if (newValue) {
                store.commit('setStatistics', false);
            }
        }
    );

    store.watch(
        (state) => state.print,
        async (newValue) => {
            if (newValue) {
                store.commit('setPrint', false);

                updateLoadingSpinner(true);

                // Wait for the screenshot capture to complete
                if (context.imgContainerRef) {
                    await context.captureAndPrintScreenshot();
                    await context.captureAndDownloadScreenshot();
                    updateLoadingSpinner(false);
                }

            }
        }
    );

    store.watch(
        (state) => state.fly,
        (newValue) => {
            if (newValue) {
                store.commit('setFly', false);
                context.moveCameraAlongPathAction()
           
            }
        }
    );

    store.watch(
        (state) => state.walk,
        (newValue) => {
            if (newValue) {
                // When walk is true
                context.cameraTweenWalk();
                context.activateJoystick();
                store.commit('setShowActionBar', false);

                context.playerCannon.position.set(0, 0.03, 2.8);
                context.playerCannon.quaternion.set(0, 0, 0, 1);
                context.followCamera.position.copy(context.player.position);
                context.camera = context.followCamera;
            }
        }
    );

    store.watch(
        (state) => state.stopWalking,
        (newValue) => {
            if (newValue) {
           
                context.cameraTweenStopWalk();
                context.deactivateJoystick();

                context.camera = context.standardCamera;
                store.commit('setStopWalking', false);
           
            }
        }
    );

    store.watch(
        (state) => state.lights,
        (newValue) => {
            if (newValue === true) {
                context.lightSwitch = 1;
                console.log('Lights are ON:', context.lightSwitch); // Logs 1 when lights are turned on
            } else if (newValue === false) {
                context.lightSwitch = 0;
                console.log('Lights are OFF:', context.lightSwitch); // Logs 0 when lights are turned off
            } else {
                console.log('Unhandled state:', newValue); // Optional: Handles null, undefined, or unexpected values
            }
        }
    );
}
