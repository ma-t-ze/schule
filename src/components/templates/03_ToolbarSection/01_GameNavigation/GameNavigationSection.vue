// GameNavigationSection.vue

<template>
  <div>
    <div class="container-toolbar">
      <div class="action restart" @touchstart="handleAction('restart')">
        <img src="/images/restart.svg" alt="" />
      </div>
      <div class="action backward" @touchstart="backward">
        <img src="/images/back.svg" alt="" />
      </div>
      <div class="action forward" @touchstart="forward">
        <img src="/images/forward.svg" alt="" />
      </div>
      <div class="action print" @touchstart="handleAction('print')">
        <img src="/images/print.svg" alt="" />
      </div>
      <div class="action statistics" @touchstart="handleAction('statistics')">
        <img src="/images/statistiks.svg" alt="" />
      </div>
      <div class="action info" @touchstart="handleAction('information')">
        <img src="/images/info.svg" alt="" />
      </div>
      <div class="action nav" @touchstart="handleAction('help')">
        <img src="/images/nav.svg" alt="" />
      </div>
      <div class="action fly" @touchstart="handleAction('fly')">
        <img src="/images/fly.svg" alt="" />
      </div>
      <div class="action walk" @touchstart="handleAction('walk')">
        <img src="/images/walk.svg" alt="" />
      </div>
    </div>

    <PopUpLayer ref="popUpLayer" :headerText="popUpHeader" :bodyText="popUpText" :approveButtonText="approveButtonText"
      :cancelButtonText="cancelButtonText" :action="currentAction" @approve="handleApprove" />
  </div>
</template>

<script>
import PopUpLayer from '@/components/templates/03_ToolbarSection/03_PopUpLayer/PopUpLayer.vue';

export default {
  name: 'NavigationItems',
  components: {
    PopUpLayer
  },
  data() {
    return {
      currentAction: '',
    };
  },
  computed: {
    popUpHeader() {
      switch (this.currentAction) {
        case 'restart':
          return 'Spiel neu starten';
        case 'print':
          return 'Drucken';
        case 'statistics':
          return 'Ihre Statistik';
        case 'information':
          return 'Informationen';
        case 'help':
          return 'Navigation';
        case 'fly':
          return 'Kameraflug';
        case 'walk':
          return 'VIRTUELLER SPAZIERGANG';
        default:
          return 'Aktion bestätigen';
      }
    },
    popUpText() {
      switch (this.currentAction) {
        case 'restart':
          return 'Wollen Sie das Spiel wirklich neu starten? Durch den Neustart gehen alle Eingaben verloren.';
        case 'print':
          return 'Drucken Sie ihre Vision von Karlsruhe als Andenken im Postkartenformat aus! Den Ausdruck finden Sie nach wenigen Minuten rechts in der Öffnung im Podest.';
        case 'statistics':
          return 'Die Statistik zeigt an, wieviel Fläche mit welchem Flächen- oder Gebäudetyp bebaut wurde.';
        case 'information':
          return '';
        case 'help':
          return '';
        case 'fly':
          return 'Wollen Sie einen Flug über Ihr Modell unternehmen?';
        case 'walk':
          return 'Erleben Sie Ihre Planung von Karlsruhe bei einem Spaziergang – die Steuerung erfolgt über zwei Joysticks auf der Benutzeroberfläche.';
        default:
          return 'Möchten Sie diese Aktion bestätigen?';
      }
    },
    approveButtonText() {
      switch (this.currentAction) {
        case 'restart':
          return 'NEU STARTEN';
        case 'print':
          return 'DRUCKEN';
        case 'statistics':
          return 'ZURÜCK ZUM SPIEL';
        case 'information':
          return 'ZURÜCK ZUM SPIEL';
        case 'help':
          return 'ZURÜCK ZUM SPIEL';
        case 'fly':
          return 'FLUG STARTEN';
        case 'walk':
          return 'STARTEN';
        default:
          return 'DEFAULT';
      }
    },
    cancelButtonText() {
      switch (this.currentAction) {
        case 'restart':
          return 'ABBRECHEN';
        case 'print':
          return 'ABBRECHEN';
        case 'statistics':
          return '';
        case 'information':
          return '';
        case 'help':
          return '';
        case 'fly':
          return 'ABBRECHEN';
        case 'walk':
          return 'ABBRECHEN';
        default:
          return 'DEFAULT';
      }
    }
  },
  mounted() {
    this.$store.watch(
      (state) => state.endInTimer,
      (newValue, oldValue) => {
        if (newValue) {
          this.approveRestart();
        }
      }
    );
    
  },
  methods: {
    handleAction(action) {
      this.currentAction = action;
      if (action === 'information') {
        this.$store.commit('setLegend', true);
      }
      this.$store.dispatch('setStatistics', true);
      this.showPopUp();
      // this.$store.commit('setStopWalking', false);
    },
    showPopUp() {
      this.$refs.popUpLayer.showPopUp();
    },
    handleApprove() {
      switch (this.currentAction) {
        case 'restart':
          this.approveRestart();
          break;
        case 'print':
          this.approvePrint();
          break;
        case 'statistics':
          this.approveStatistics();
          break;
        case 'information':
          this.approveInfo();
          break;
        case 'help':
          this.approveNav();
          break;
        case 'fly':
          this.approveFly();
          break;
        case 'walk':
          this.approveWalk();
          break;
        default:
          break;
      }
    },
    approveRestart() {
      this.$store.commit('setShowActionBar', false);
      this.$store.dispatch('setInitialCam', true);
      this.$store.dispatch('setRestart', true);
      this.$store.dispatch('setEndInTimer', true);
     setTimeout(() => {
      this.$store.commit('setShowFeelGoodBarometer', false);
      }, 1200);
      setTimeout(() => {
        this.$refs.popUpLayer.initialState();
      }, 1000);
    },
    approvePrint() {
      this.$store.dispatch('setPrint', true);
        this.$store.commit('setShowFeelGoodBarometer', true);
      setTimeout(() => {
        this.$refs.popUpLayer.initialState();
      }, 1000);
    },
    approveStatistics() {
      this.$refs.popUpLayer.initialState();
        this.$store.commit('setShowFeelGoodBarometer', true);
    },
    approveInfo() {
      this.$refs.popUpLayer.initialState();
        this.$store.commit('setShowFeelGoodBarometer', true);
      this.$store.commit('setLegend', false);
    },
    approveNav() {
      this.$refs.popUpLayer.initialState();
        this.$store.commit('setShowFeelGoodBarometer', true);
    },
    backward() {
      this.$store.dispatch('setBackward', true);
    },
    forward() {
      this.$store.dispatch('setForward', true);
    },
    approveFly() {
      this.$store.dispatch('setFly', true);
        this.$store.commit('setShowFeelGoodBarometer', false);
      // this.$store.commit('setPauseDayAndNightCycle', true);

      setTimeout(() => {
        this.$refs.popUpLayer.initialState();
        this.$store.commit('setBlockSelection', true);
      }, 500);
    },
    approveWalk() {
      this.$store.dispatch('setWalk', true);
      this.$store.commit('setPauseDayAndNightCycle', true);
        this.$store.commit('setShowFeelGoodBarometer', false);

      setTimeout(() => {
        this.$refs.popUpLayer.initialState();
        this.$store.commit('setBlockSelection', true);
      }, 500);
    }
  }
};
</script>

<style scoped>
@import './style.scss';
</style>
