//PopUpLayer.vue

<template>
  <div class="background-container" ref="backgroundContainer"></div>
  <div class="pop-up-container" ref="popUpContainer">
    <div class="pop-up-container-inner">
      <div class="pop-up-header">{{ headerText }}</div>
      <div class="pop-up-text">{{ bodyText }}</div>
      <div class="content">
        <div class="print" v-if="action === 'print'">
          <!-- <div class="print-content">dsfsdasfawsefd</div> -->
        </div>
        <div class="statistics" v-if="action === 'statistics'">
          <div class="statistics-content">
            <StatisticsLayer ref="statisticsLayer" />
          </div>
        </div>
        <div class="information" v-if="action === 'information'">
          <div class="information-content">
            <div class="imprint-section">
              <p>KarlsVision ist eine Städtebausimulation, mit der Karlsruher Bürger*innen einzelne Baublöcke der Innenstadt mit Flächen und Gebäuden virtuell gestalten können.</p>
            </div>
            <div class="imprint-section">
              <h2>Herausgeber</h2>
              <p>Stadtarchiv Karlsruhe</p>
            </div>
            <div class="imprint-section">
              <h2>Kooperation & Leihgeber Technik</h2>
              <p>ZKM | Zentrum für Kunst und Medien Karlsruhe</p>
            </div>
            <div class="imprint-section">
              <h2>Kooperation 3D-Produktion</h2>
              <p>Liegenschaftsamt Stadt Karlsruhe</p>
            </div>
            <div class="imprint-section">
              <h2>Idee & Konzept</h2>
              <p>Eric Wychlacz (Stadt Karlsruhe, Kulturamt, Stadtarchiv & Historische Museen)</p>
            </div>
            <div class="imprint-section">
              <h2>Design, Softwareentwicklung & 3D Modeling</h2>
              <p>Matthias Heckel (https://www.matthiasheckel.com)</p>
            </div>
            <div class="imprint-section">
              <h2>3D Modelle und Assets dritter Personen</h2>
              <ul>
                <li> 3D-Modelle: Raven (https://sketchfab.com/benmonor)/ Tree Branch (https://sketchfab.com/angelinart)/ Grunge vintage old paper background (https://www.freepik.com/author/aopsan)/ Playground (https://sketchfab.com/lucascsar)/ Animated flock birds lowpoly art style (https://sketchfab.com/olegshuldiakov)/ Dubai Clouds (https://sketchfab.com/etribe)/ A380 (https://sketchfab.com/manilov.ap)</li>
                <li> Sound: The Wind Blowing (https://audiojungle.net/user/tr-sound)/ Passender Airplane Fly Over (https://audiojungle.net/user/spacelabstudio)/ Raven (https://audiojungle.net/user/magicsoundflower)/ Ravens (https://audiojungle.net/user/sounddivision)/ Birds in Park (https://audiojungle.net/user/marcin_kaneda)</li>
                <li>Animierte Emojis basieren auf dem Noto Emoji Projekt von Google und stehen unter der SIL Open Font License 1.1 sowie der Apache License 2.0.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="help" v-if="action === 'help'">
          <div class="help-content">
            <div class="navigation-section">
              <h2>Bebauung</h2>
              <p>Berühren Sie auf dem Touchscreen die Baublöcke, die Sie bebauen möchtent, wählen Sie anschließend einen Flächen- oder Gebäudetyp aus.</p>
            </div>
            <div class="navigation-section">
              <h2>Funktionen in der Menüleiste</h2>
              <ul>
                <li><strong>Neustart:</strong> Das Spiel wird neu gestartet, alle Eingaben gehen verloren.</li>
                <li><strong>Zurück:</strong> Einen Schritt zurück in der Bebauungshistorie.</li>
                <li><strong>Vorwärts:</strong> Einen Schritt vorwärts in der Bebauungshistorie.</li>
                <li><strong>Drucken:</strong> Druckt den aktuellen Stand des Spiels aus.</li>
                <li><strong>Informationen:</strong> Impressum zum Spiel.</li>
                <li><strong>Hilfe:</strong> Navigationshinweise.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="pop-up-button">
        <button class="approve" @click="approve">{{ approveButtonText }}</button>
        <button class="cancel" @click="cancel">{{ cancelButtonText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import StatisticsLayer from '@/components/templates/03_ToolbarSection/04_StatisticsLayer/StatisticsLayer.vue';

import { nextTick } from 'vue';

export default {
  name: 'PopUpLayer',
  components: {
    StatisticsLayer
  },
  mounted() {
    // Watch for changes in the 'statistics' state
    this.$store.watch(
      (state) => state.statistics,
      (newValue, oldValue) => {
        if (newValue) {
          // Commit a mutation to reset 'statistics' state to false
          this.$store.commit('setStatistics', false);
          // Update tags based on updated data
        }
      }
    );
  },
  props: {
    headerText: {
      type: String,
      required: true
    },
    bodyText: {
      type: String,
      required: true
    },
    approveButtonText: {
      type: String,
      default: 'APPROVE'
    },
    cancelButtonText: {
      type: String,
      default: 'CANCEL'
    },
    action: {
      type: String,
      required: true
    }
  },
  emits: ['approve'],
  methods: {
    showPopUp() {
      this.$store.commit('setBlockSelection', true);
      this.$store.commit('setShowFeelGoodBarometer', false);

      nextTick(() => {
        const popUpContainer = this.$refs.popUpContainer;
        const backgroundContainer = this.$refs.backgroundContainer;

        popUpContainer.style.transition = "top 0.8s ease 0.2s";
        const height = window.innerHeight;
        const popUpContainerHeight = popUpContainer.offsetHeight;
        popUpContainer.style.top = height - popUpContainerHeight - 220 - 20 + 'px';

        backgroundContainer.style.pointerEvents = "auto";
        backgroundContainer.style.transition = "opacity 0.8s ease 0.2s";
        backgroundContainer.style.opacity = 0.9;

        // Call updateTags only if action is 'statistics'
        if (this.action === 'statistics') {
          this.$refs.statisticsLayer.updateTags();
        }
      });
    },
    approve() {
      this.$emit('approve');
    },
    cancel() {
      const popUpContainer = this.$refs.popUpContainer;
      const backgroundContainer = this.$refs.backgroundContainer;
      this.$store.commit('setBlockSelection', false);
      this.$store.commit('setShowFeelGoodBarometer', true);
      console.log("cancel");

      popUpContainer.style.transition = "top 0.5s ease 0s";
      const height = window.innerHeight;
      popUpContainer.style.top = height + 'px';

      backgroundContainer.style.pointerEvents = "none";
      backgroundContainer.style.transition = "opacity 0.5s ease 0s";
      backgroundContainer.style.opacity = 0;
    },
    initialState() {
      const popUpContainer = this.$refs.popUpContainer;
      const backgroundContainer = this.$refs.backgroundContainer;
      this.$store.commit('setBlockSelection', false);

      popUpContainer.style.transition = "top 0.5s ease 0s";
      const height = window.innerHeight;
      popUpContainer.style.top = height + 'px';

      backgroundContainer.style.pointerEvents = "none";
      backgroundContainer.style.transition = "opacity 0.5s ease 0s";
      backgroundContainer.style.opacity = 0;
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
