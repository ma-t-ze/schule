<template>

  <div class="winning-container" ref="winningBox">
    <div class="winning-containr-inner">
      <div class="winning" ref="winningAnimationContainer"></div>
      <div class="text">
        Glückwunsch, du hast alle Ziele erreicht!
      </div>
    </div>
  </div>

  <div class="game-success-container" :class="{ visible: showSuccessBox }" ref="gameSuccessBox">
    <div class="successCoin" ref="successCoinAnimationContainer"></div>
  </div>

  <div class="game-info-container" :style="{ top: infoBoxLeft, transition: infoBoxTransition }" ref="infoBox">
    <div class="game-info-container-inner">
      <div class="coin" ref="coinAnimationContainer"></div>
      <div class="text">
        Bebaue die Stadt im Gleichgewicht und erreiche die vorgegebenen Ziele - das wird mit Gold belohnt.
      </div>
      <button @click="hideInfoBox" class="game-info-ok">SPIEL BEGINNEN</button>
    </div>
  </div>

  <div class="preview-container" ref="previewContainer">
    <div class="preview-container-inner">
      <div class="icon-container-outer">
        <div class="icon-container" ref="buttonIconContainer"></div>

      </div>
      <div class="percentage">{{ progressPercent }}%</div>
      <div class="barometer-container">

        <div class="progress-vertical" :style="{ height: progressPercent + '%' }"></div>
        <div class="marks">
          <div class="mark" v-for="n in 11" :key="n" :style="{ top: ((n - 1) * 10) + '%' }"></div>
        </div>
        <div class="marks-right">
          <div class="mark-right" v-for="n in 11" :key="n" :style="{ top: ((n - 1) * 10) + '%' }"></div>
        </div>

      </div>
      <div class="description">Bebaute Fläche</div>

    </div>

  </div>

  <div class="detail-button" ref="detailButton" @click="toggleContainerPosition">
    <img class="expand" ref="expand" src="/images/expand.svg" alt="" />
    <div class="detail-button-text"> Ziele </div>
  </div>

  <div class="background" ref="background"></div>

  <div class="feel-good-text" ref="feelGoodText">
    <div class="phrase-text">{{ selectedPhrase }}</div>
  </div>

  <div class="feedback-detail-container" ref="feedbackDetailContainer" :style="{ right: `${containerOffset}px` }"
    @click="toggleContainerPosition">



    <table>
      <tr v-for="tag in tags" :key="tag.id">
        <td>
          <div class="tag-image-container">
            <img :src="`/images/${tag.image}.png`" :alt="tag.name" class="tag-icon" />
            <div class="tag-label">{{ tag.name }}</div>
          </div>
        </td>
        <td class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{
              width: Math.min(tag.developed / tag.ideal * 100, 100) + '%',
              background: getFillColor(tag.developed / tag.ideal * 100)
            }"></div>
          </div>
        </td>
        <td class="developed-info">{{ tag.developed }} von {{ tag.ideal }}</td>
        <td class="success">
          <div :ref="el => animationRefs[tag.id] = el" class="success-animation"></div>
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
import { mapState } from 'vuex';
import { ref, onMounted } from 'vue';
import { nextTick } from 'vue';
import lottie from 'lottie-web';

import { phrases } from './utils/phrases.js';
import { tags as initialTags } from './utils/tags.js';

import {
  showFeelGoodBarometer,
  hideFeelGoodBarometer,
  toggleContainerPosition,
  getFillColor
} from './utils/barometerUIHelpers.js';

import {
  showSuccessAnimation,
  showWinningScreen,
  initTagAnimation,
  getSuccessAnimation,
  loadLottie
} from './utils/lottieHelpers.js';

export default {
  name: 'BarometerPhraseSection',
  computed: {
    ...mapState(['sizeSums', 'missionMode']),
  },
  data() {
    return {
      phrases,
      tags: JSON.parse(JSON.stringify(initialTags)),
      animateProgress: false,
      containerOffset: -2000,
      progressPercent: 0,
      mostExceededTag: null,
      currentAnimation: 'hug-face',
      phraseAnimationInstance: null,
      buttonAnimationInstance: null,
      animationRefs: {},
      animationsLoaded: {},
      infoBoxLeft: '100vw',
      infoBoxTransition: 'top 0.7s ease 3s',
      hasShownInfoBox: false,
      showSuccessBox: false,
      hasWon: false,
      selectedPhrase: "",
      selectedPhraseMaxLow: "",
      totalPercentage: 0,
    };
  },
  setup() {
    const buttonIconContainer = ref(null);
    const phraseAnimationContainer = ref(null);
    return { buttonIconContainer, phraseAnimationContainer };
  },
  mounted() {
    this.$store.watch(
      (state) => state.missionMode,
      (enabled) => {
        if (enabled) {

          this.updateTags();
          this.updatePhrase();

        }
      },
      { immediate: true }
    );

    if (this.$refs.coinAnimationContainer) {
      const coinAnimation = lottie.loadAnimation({
        container: this.$refs.coinAnimationContainer,
        renderer: 'svg',
        loop: false, // 🔴 turn off loop
        autoplay: true,
        path: '/animation/coin.json',
      });

      // 🔁 When animation ends, wait and play again
      coinAnimation.addEventListener('complete', () => {
        setTimeout(() => {
          coinAnimation.goToAndPlay(0, true); // replay from beginning
        }, 3000); // ⏱️ 1000ms = 1 second pause
      });
    }

    document.addEventListener('click', this.handleOutsideClick);

    this.$watch(
      () => this.sizeSums,
      (newSizeSums) => {
        this.updateTags();
        this.updatePhrase();
      },
      { deep: true, immediate: true } // Ensure it reacts to deep changes and runs on mount
    );

    this.$store.watch(
      (state) => state.showFeelGoodBarometer,
      (newValue) => {
        if (newValue && this.missionMode) {
          this.showFeelGoodBarometer();

          nextTick(() => {
            this.tags.forEach(tag => this.initTagAnimation(tag));

            if (!this.hasShownInfoBox) {
              this.infoBoxLeft = '0vw';
              this.$store.commit('setBlockSelection', true);
              this.hasShownInfoBox = true;
            }
          });
        } else {
          this.hideFeelGoodBarometer();
        }
      }
    );

    this.$store.watch(
      (state) => state.updateFeelGoodBarometer,
      (newValue, oldValue) => {
        if (newValue) {
          this.$store.commit('setUpdateFeelGoodBarometer', false);
          this.updatePhrase();
          this.updateTags();
        }
      }
    );

    this.$store.watch(
      (state) => state.restart,
      (newVal) => {
        if (newVal === true) {
          this.hasShownInfoBox = false;
          this.hasWon = false;
          this.infoBoxTransition = 'top 0.7s ease 3s';

          // 👉 NEU: Reset perfectDisplayed für alle Tags
          this.tags.forEach(tag => {
            tag.perfectDisplayed = false;
          });
        }
      }
    );


    // 🔁 Warte, bis das DOM mit den refs gerendert ist:
    nextTick(() => {
      this.tags.forEach(tag => {
        this.initTagAnimation(tag);
      });
    });

  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    showFeelGoodBarometer() {
      showFeelGoodBarometer(this.$refs, this.$store);
    },
    hideFeelGoodBarometer() {
      hideFeelGoodBarometer(this.$refs);
    },
    toggleContainerPosition() {
      toggleContainerPosition(this);
    },
    getFillColor(scaledPercentage) {
      return getFillColor(scaledPercentage);
    },
    updateTags() {
      if (!this.sizeSums || this.sizeSums.length === 0) {
        this.tags.forEach(tag => tag.developed = 0);
        this.progressPercent = 0;
        return;
      }

      this.tags.forEach(tag => {
        const tagData = this.sizeSums.find(item => item.name === tag.id);
        tag.developed = tagData ? parseFloat(tagData.size) : 0;
      });

      const totalDeveloped = this.tags.reduce((sum, tag) => sum + tag.developed, 0);
      const idealTotal = this.tags.reduce((sum, tag) => sum + tag.ideal, 0);
      this.progressPercent = idealTotal
        ? Math.min(Math.round((totalDeveloped / idealTotal) * 100), 100)
        : 0;

      this.tags.forEach(tag => {
        this.initTagAnimation(tag);
      });
    },
    updatePhrase() {
      if (!Array.isArray(this.sizeSums) || this.sizeSums.length === 0) {
        this.selectedPhrase = "Starte den Bau, um die Stadt zum Leben zu erwecken!";
        this.currentAnimation = 'hug-face';
        this.loadCurrentAnimation();
        return;
      }

      const totalSize = this.sizeSums.reduce((sum, item) => sum + parseFloat(item.size), 0);

      if (totalSize < 10) {
        this.selectedPhrase = this.phrases.none.prompt;
        this.currentAnimation = 'hug-face';
        this.loadCurrentAnimation();
        return;
      }

      if (this.checkForPerfectTag()) {
        return;
      }

      if (this.checkForExceededTag()) {
        return;
      }

      this.selectedPhrase = "Die Stadt wächst - achte auf das Gleichgewicht!";
      this.currentAnimation = 'hug-face';
      this.loadCurrentAnimation();
    },
    checkForPerfectTag() {
      let perfectMessageShown = false;
      const EPSILON = 0.01;
      let allPerfect = true;
      let successTriggered = false; // 👈 Neue Variable

      this.tags.forEach(tag => {
        const isPerfect = Math.abs(tag.developed - tag.ideal) < EPSILON;

        if (isPerfect && !tag.perfectDisplayed) {
          this.selectedPhrase = this.phrases[tag.id]?.positive || `Perfekt: ${tag.name}`;
          this.currentAnimation = this.phrases[tag.id]?.animationPerfect || 'hug-face';
          this.loadCurrentAnimation();

          successTriggered = true; // 👈 nur merken, nicht sofort ausführen
          perfectMessageShown = true;

          nextTick(() => {
            tag.perfectDisplayed = true;
          });
        }

        if (!isPerfect) {
          allPerfect = false;
          tag.perfectDisplayed = false;
        }
      });

      // 👉 Nur einmal Coin anzeigen, falls ein neuer perfekter Tag gefunden wurde
      if (successTriggered) {
        this.showSuccessAnimation();
      }

      // ✅ alle Tags perfekt → Win-Screen zeigen
      if (allPerfect && !this.hasWon) {
        this.hasWon = true;
        this.showWinningScreen();
      }

      return perfectMessageShown;
    },
    checkForExceededTag() {
      let currentMostExceededTag = null;
      let currentMaxExceedAmount = 0;

      this.tags.forEach(tag => {
        const exceedAmount = tag.developed - tag.ideal;

        if (exceedAmount > 6) {
          if (!this.mostExceededTag || exceedAmount > currentMaxExceedAmount) {
            currentMostExceededTag = tag;
            currentMaxExceedAmount = exceedAmount;
          }
        }
      });

      if (currentMostExceededTag) {
        if (this.mostExceededTag !== currentMostExceededTag) {
          this.selectedPhrase = this.phrases[currentMostExceededTag.id]?.negativeHigh || `Zu viel von: ${currentMostExceededTag.name}`;
          this.currentAnimation = this.phrases[currentMostExceededTag.id]?.animationHigh || 'hug-face';
          this.loadCurrentAnimation();
          this.mostExceededTag = currentMostExceededTag;
        }
        return true;
      } else {
        this.mostExceededTag = null;
        return false;
      }
    },
    loadCurrentAnimation() {
      const animationPath = `/animation/${this.currentAnimation}.json`;

      // Destroy old phrase animation if exists
      if (this.phraseAnimationInstance) {
        this.phraseAnimationInstance.destroy();
        this.phraseAnimationInstance = null;
      }

      // Destroy old button animation if exists
      if (this.buttonAnimationInstance) {
        this.buttonAnimationInstance.destroy();
        this.buttonAnimationInstance = null;
      }

      if (this.phraseAnimationContainer) {
        this.phraseAnimationContainer.innerHTML = '';
        this.phraseAnimationInstance = lottie.loadAnimation({
          container: this.phraseAnimationContainer,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: animationPath,
        });
      }

      if (this.buttonIconContainer) {
        this.buttonIconContainer.innerHTML = '';
        this.buttonAnimationInstance = lottie.loadAnimation({
          container: this.buttonIconContainer,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: animationPath,
        });
      }
    },
    hideInfoBox() {
      this.infoBoxTransition = 'top 0.7s ease 0s';
      this.infoBoxLeft = '100vh'; // ⬅️ Slide it back out when clicked
      this.$store.commit('setUpdateFeelGoodBarometer', true);

      // Toggle blockSelection in Vuex store
      const currentBlockSelection = this.$store.state.blockSelection;
      this.$store.commit('setBlockSelection', !currentBlockSelection);
    },
    showSuccessAnimation() {
      showSuccessAnimation(this.$refs, this.missionMode);
    },
    showWinningScreen() {
      showWinningScreen(this.$refs, this.missionMode);
    },
    initTagAnimation(tag) {
      const container = this.animationRefs[tag.id];
      if (!container) return;

      const currentAnimation = this.animationsLoaded[tag.id];
      initTagAnimation(tag, container, currentAnimation, (newAnim) => {
        this.animationsLoaded[tag.id] = newAnim;
      });
    },
    getSuccessAnimation(tag) {
      return getSuccessAnimation(tag);
    }

  },
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>