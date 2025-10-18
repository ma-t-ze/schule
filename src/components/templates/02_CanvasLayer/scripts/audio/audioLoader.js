// audioLoader.js

import { Audio, AudioLoader } from 'three';

export function loadAudio(listener, filePath, loop = true, volume = 1) {
    return new Promise((resolve) => {
        const audio = new Audio(listener);
        const audioLoader = new AudioLoader();

        audioLoader.load(filePath, (buffer) => {
            audio.setBuffer(buffer);
            audio.setLoop(loop);
            audio.setVolume(volume);
            audio.gain.gain.value = volume;
            resolve(audio);
        });
    });
}

// Function to load multiple audio files
export async function loadAllAudio(listener) {
    const backgroundAudio = await loadAudio(listener, '/audio/birds_in_park.mp3', true, 2.5);
    const windAudio = await loadAudio(listener, '/audio/wind_blowing.mp3', true, 0.4);
    const ravenAudio = await loadAudio(listener, '/audio/raven.mp3', false, 1);
    const airplaneAudio = await loadAudio(listener, '/audio/passenger_airplane.mp3', false, 0.2);

    return {
        backgroundAudio,
        windAudio,
        ravenAudio,
        airplaneAudio,
    };
}
