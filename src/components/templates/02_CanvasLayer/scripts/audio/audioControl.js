// audioControl.js

export function createAudioControl(context) {
    const speakerHigh = document.createElement('img');
    speakerHigh.src = '/images/SpeakerSlash.svg';
    speakerHigh.style.position = 'absolute';
    speakerHigh.style.top = '40px';
    speakerHigh.style.left = '40px';  // Changed from left to right
    speakerHigh.style.zIndex = '1000';
    speakerHigh.style.width = '80px';
    speakerHigh.style.cursor = 'pointer';

    const speakerSlash = document.createElement('img');
    speakerSlash.src = '/images/SpeakerHigh.svg';
    speakerSlash.style.position = 'absolute';
    speakerSlash.style.top = '40px';
    speakerSlash.style.left = '40px';  // Changed from left to right
    speakerSlash.style.zIndex = '1000';
    speakerSlash.style.width = '80px';
    speakerSlash.style.cursor = 'pointer';
    speakerSlash.style.display = 'none';

    speakerHigh.addEventListener('click', () => {
        context.startAudio();
        speakerHigh.style.display = 'none';
        speakerSlash.style.display = 'block';
    });

    speakerSlash.addEventListener('click', () => {
        context.stopAudio();
        speakerHigh.style.display = 'block';
        speakerSlash.style.display = 'none';
    });

    document.body.appendChild(speakerHigh);
    document.body.appendChild(speakerSlash);
}

export function startAudio(context) {

    if (context.gameStateAudio) {
        context.backgroundAudio.play();
        if (context.ravenSound) {
            context.ravenSound.setVolume(0.03);
        }
        if (context.ravenFlyingAudio) {
            context.ravenFlyingAudio.play();
        }
    }

    if (!context.gameStateAudio) {
        context.windAudio.play();
    }

    context.soundSwitch = true;
}

export function stopAudio(context) {

    context.backgroundAudio.pause();
    context.windAudio.pause();
    context.airplaneAudio.pause();

    if (context.ravenSound) {
        context.ravenSound.setVolume(0);
    }
    if (context.ravenFlyingAudio) {
        context.ravenFlyingAudio.pause();
    }
    context.soundSwitch = false;
}
