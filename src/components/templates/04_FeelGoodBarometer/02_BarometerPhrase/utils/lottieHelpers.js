// utils/lottieHelpers.js
import lottie from 'lottie-web';

export function loadLottie(container, animationName, options = {}) {
  if (!container) return;

  container.innerHTML = '';
  return lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `/animation/${animationName}.json`,
    ...options,
  });
}

let coinAnimationVisible = false;

export function showSuccessAnimation(refs, missionMode) {
  if (!missionMode || coinAnimationVisible) return;

  const container = refs?.gameSuccessBox;
  if (!container) return;

  coinAnimationVisible = true;

  container.classList.remove('exit');
  container.classList.add('visible');

  loadLottie(refs.successCoinAnimationContainer, 'coin');

  setTimeout(() => {
    container.classList.remove('visible');
    container.classList.add('exit');
    coinAnimationVisible = false; // 🔁 nach 3s wieder erlauben
  }, 3000);
}


export function showWinningScreen(refs, missionMode) {
  if (!missionMode) return;
  const box = refs?.winningBox;
  if (!box) return;

  box.classList.remove('exit');
  box.classList.add('visible');

  loadLottie(refs.winningAnimationContainer, 'trophy');

  setTimeout(() => {
    box.classList.remove('visible');
    box.classList.add('exit');
  }, 10000);
}

export function getSuccessAnimation(tag) {
  const developed = parseFloat(tag.developed);
  const ideal = parseFloat(tag.ideal);
  const EPSILON = 0.1;
  return Math.abs(developed - ideal) < EPSILON ? 'coin' : 'shovel';
}

export function initTagAnimation(tag, container, currentAnimation, updateCacheFn) {
  const newAnimation = getSuccessAnimation(tag);
  if (currentAnimation !== newAnimation) {
    loadLottie(container, newAnimation);
    updateCacheFn(newAnimation);
  }
}
