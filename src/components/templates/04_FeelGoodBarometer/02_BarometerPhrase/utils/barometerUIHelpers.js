// utils/barometerUIHelpers.js

export function showFeelGoodBarometer($refs, $store) {
  if (!$store.state.missionMode) return;

  const previewContainer = $refs.previewContainer;
  const detailButton = $refs.detailButton;

  previewContainer.style.transition = "right 1s ease 1.5s";
  previewContainer.style.right = '0px';

  detailButton.style.transition = "right 1s ease 1.5s";
  detailButton.style.right = '0px';

  $refs.feelGoodText.style.transition = "right 1s ease 1.5s";
  $refs.feelGoodText.style.right = "50px";
}

export function hideFeelGoodBarometer($refs) {
  const previewContainer = $refs.previewContainer;
  const detailButton = $refs.detailButton;

  previewContainer.style.transition = "right 1s ease";
  previewContainer.style.right = '-400px';

  detailButton.style.transition = "right 1s ease";
  detailButton.style.right = '-400px';

  $refs.feelGoodText.style.transition = "right 1s ease";
  $refs.feelGoodText.style.right = "-100vw";
}

export function toggleContainerPosition(context) {
  const { $refs, $store, containerOffset } = context;

  if ($refs.background) {
    $refs.background.style.opacity = $refs.background.style.opacity === "0.9" ? "0" : "0.9";
  }

  context.containerOffset = containerOffset === 400 ? -1500 : 400;

  const currentBlockSelection = $store.state.blockSelection;
  $store.commit('setBlockSelection', !currentBlockSelection);

  if ($refs.expand) {
    const currentRotation = $refs.expand.style.transform || "rotate(0deg)";
    $refs.expand.style.transform = currentRotation === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
  }
}

export function getFillColor(scaledPercentage) {
  if (scaledPercentage > 140) {
    return 'red';
  } else if (scaledPercentage > 105) {
    return 'orange';
  } else {
    return 'linear-gradient(90deg, #087ade, #64bfff)';
  }
}
