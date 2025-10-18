// defaultState.js

export function getDefaultState() {
    return {

        //Construct
        blocksStatusHistory: [],
        historyCounter: [1],
        sizeSums: [],

        CSP: [-0.5, 2, 0.85], // Camera start position
        CSL: [-0.3, 2, 0],    // Camera start look-at

        CEP: [0, 7.8, 7.6],   // Camera end position
        CEL: [0, 0, 2.5],     // Camera end look-at

        CWP: [0, 0.03, 2.81],   // Camera walk position
        CWL: [0, 0, 0],   // Camera walk look-at

        // Raven
        raven: null,
        flyingRaven: null,
        ravenFlyAway: null,
        mixerRavenStanding: null,
        mixerRavenFlying: null,
        animationCounter: null,

        //Clouds
        cloudsModel: null,
        cloudSpeed: 0.0015,
        cloudClones: [],
        cloudGenerationInterval: 16000,
        lastCloudGenerationTime: 0,

        // Aircraft
        aircraftModel: null,
        aircraftSpeed: 0.005,
        aircraftClones: [],
        aircraftGenerationInterval: 20000,
        lastAircraftGenerationTime: 0,

        // Flock birds
        flockBirds: null,
        action: null,
        flockBirdsSpeed: 0.0025,
        flockBirdsSpeedFactor: 0.2,

        //Sound
        soundSwitch: false,
        gameStateAudio: true,

        // day and night
        timeCounter: 10,
        nightSwitch: 1,

        // Fly through model
        cameraPathPoints: null,

        // Animation-related properties
        lastTime: 0,
        fps: 60,
        fpsInterval: 1000 / 60,
    };

}