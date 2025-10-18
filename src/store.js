import { createStore } from 'vuex';

const initialState = {
  // Buildings
  undeveloped: false,
  greenAreaTrees: false,
  parkingLots: false,
  apartments: false,
  commercials: false,
  museums: false,
  culturalLibrary: false,
  publicSchool: false,
  publicNurseries: false,
  housesOfGod: false,
  sizeSums: null,
  // Actions
  restart: false,
  backward: false,
  forward: false,
  print: false,
  statistics: false,
  info: false,
  fly: null,
  walk: null,
  lights: null,
  dayTime: null,
  powerPlant: false,
  legend: null,
  // Start Game
  startGame: false,
  showActionBar: false,
  initialCam: false,
  playMode: false,
  // Login
  isAuthenticated: false,
  loading: false,
  // blockSelection
  blockSelection: false,
  // timer
  endInTimer: false,
  startInTimer: false,
  // audiox
  audio: false,
  updateFeelGoodBarometer: false,
  pauseDayAndNightCycle: false,
  // FeelGoodBarometer
  showFeelGoodBarometer: false,
  stopWalking: false,
  missionMode: false,
};

const store = createStore({
  state: { ...initialState },
  mutations: {
    resetState(state) {
      Object.assign(state, initialState);
    },
    setUndeveloped(state, value) {
      state.undeveloped = value;
    },
    setGreenAreaTrees(state, value) {
      state.greenAreaTrees = value;
    },
    setParkingLots(state, value) {
      state.parkingLots = value;
    },
    setApartments(state, value) {
      state.apartments = value;
    },
    setCommercials(state, value) {
      state.commercials = value;
    },
    setMuseums(state, value) {
      state.museums = value;
    },
    setCulturalLibrary(state, value) {
      state.culturalLibrary = value;
    },
    setPublicSchool(state, value) {
      state.publicSchool = value;
    },
    setPublicNurseries(state, value) {
      state.publicNurseries = value;
    },
    setHousesOfGod(state, value) {
      state.housesOfGod = value;
    },
    // Actions mutations
    setRestart(state, value) {
      state.restart = value;
    },
    setBackward(state, value) {
      state.backward = value;
    },
    setForward(state, value) {
      state.forward = value;
    },
    setPrint(state, value) {
      state.print = value;
    },
    setStatistics(state, value) {
      state.statistics = value;
    },
    setInfo(state, value) {
      state.info = value;
    },
    setLights(state, value) {
      state.lights = value;
    },
    setDayTime(state, value) {
      state.dayTime = value;
    },
    setPowerPlant(state, value) {
      state.powerPlant = value;
    },
    setLegend(state, value) {
      state.legend = value;
    },
    // Start Game
    setStartGame(state, value) {
      state.startGame = value;
    },
    setShowActionBar(state, value) {
      state.showActionBar = value;
    },
    setPlayMode(state, value) {
      state.playMode = value;
    },
    //test
    setInitialCam(state, value) {
      state.initialCam = value;
    },
    // Login
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
      // console.log('isAuthenticated state updated:', isAuthenticated); 
    },
    updateSizeSums(state, sizeSums) {
      state.sizeSums = sizeSums;
    },
    // blockSelection
    setBlockSelection(state, value) {
      state.blockSelection = value;
    },
    //loading
    setLoading(state, value) {
      state.loading = value;
    },
    // Game State mutations
    setFly(state, value) {
      state.fly = value;
    },
    // walk
    setWalk(state, value) {
      state.walk = value;
    },
    // timer
    setEndInTimer(state, value) {
      state.endInTimer = value;
    },
    setStartInTimer(state, value) {
      state.startInTimer = value;
    },
    setAudio(state, value) {
      state.audio = value;
    },
    setUpdateFeelGoodBarometer(state, value) {
      state.updateFeelGoodBarometer = value;
    },
    setPauseDayAndNightCycle(state, value) {
      state.pauseDayAndNightCycle = value;
    },
    setShowFeelGoodBarometer(state, value) {
      state.showFeelGoodBarometer = value;
    },
    setStopWalking(state, value) {
      state.stopWalking = value;
    },
    setMissionMode(state, value) {
      state.missionMode = value;
    }
  },
  actions: {
    setUndeveloped({ commit }) {
      commit('setUndeveloped', true);
    },
    setGreenAreaTrees({ commit }) {
      commit('setGreenAreaTrees', true);
    },
    setParkingLots({ commit }) {
      commit('setParkingLots', true);
    },
    setApartments({ commit }) {
      commit('setApartments', true);
    },
    setCommercials({ commit }) {
      commit('setCommercials', true);
    },
    setMuseums({ commit }) {
      commit('setMuseums', true);
    },
    setCulturalLibrary({ commit }) {
      commit('setCulturalLibrary', true);
    },
    setPublicSchool({ commit }) {
      commit('setPublicSchool', true);
    },
    setPublicNurseries({ commit }) {
      commit('setPublicNurseries', true);
    },
    setHousesOfGod({ commit }) {
      commit('setHousesOfGod', true);
    },
    // Actions actions
    setRestart({ commit }) {
      commit('setRestart', true);
    },
    setBackward({ commit }) {
      commit('setBackward', true);
    },
    setForward({ commit }) {
      commit('setForward', true);
    },
    setPrint({ commit }) {
      commit('setPrint', true);
    },
    setStatistics({ commit }) {
      commit('setStatistics', true);
    },
    setInfo({ commit }) {
      commit('setInfo', true);
    },
    setLights({ commit }, value) {
      commit('setLights', value);
    },
    setDayTime({ commit }, value) {
      commit('setDayTime', value);
    },
    setPowerPlant({ commit }, value) {
      console.log(`🟡 Dispatching setPowerPlant with value: ${value}`);
      commit('setPowerPlant', value);
    },
    setLegend({ commit }, value) {
      commit('setLegend', value);
    },
    // Start Game
    setStartGame({ commit }) {
      commit('setStartGame', true);
    },
    setShowActionBar({ commit }) {
      commit('setShowActionBar', true);
    },
    setPlayMode({ commit }, value) {
      commit('setPlayMode', value);
    },
    //test
    setInitialCam({ commit }) {
      commit('setInitialCam', true);
    },
    // Action to set isAuthenticated state
    setIsAuthenticated({ commit }) {
      commit('setIsAuthenticated', true);
    },
    updateSizeSums({ commit }, sizeSums) {
      commit('updateSizeSums', sizeSums);
    },
    // blockSelection
    setBlockSelection({ commit }) {
      console.log(`🟡 Dispatching setBlockSelection with value: ${value}`);
      commit('setBlockSelection', true);
    },
    //loading
    setLoading({ commit }, value) {
      commit('setLoading', value);
    },
    // fly
    setFly({ commit }, value) {
      commit('setFly', value);
    },
    // walk
    setWalk({ commit }, value) {
      commit('setWalk', value);
    },
    // Other actions...
    setEndInTimer({ commit }, value) {
      commit('setEndInTimer', value);
    },
    setStartInTimer({ commit }, value) {
      commit('setStartInTimer', value);
    },
    // audio
    setAudio({ commit }) {
      commit('setAudio', true);
    },
    updateFeelGoodBarometer({ commit }, value) {
      commit('setUpdateFeelGoodBarometer', value);
    },
    setPauseDayAndNightCycle({ commit }, value) {
      commit('setPauseDayAndNightCycle', value);
    },
    setShowFeelGoodBarometer({ commit }, value) {
      commit('setShowFeelGoodBarometer', value);
    },
    setStopWalking({ commit }, value) {
      commit('setStopWalking', value);
    },
    setMissionMode({ commit }, value) {
      commit('setMissionMode', value);
    }
  },
  getters: {
    isUndeveloped: (state) => state.undeveloped,
    isGreenAreaTrees: (state) => state.greenAreaTrees,
    isParkingLots: (state) => state.parkingLots,
    isApartments: (state) => state.apartments,
    isCommercials: (state) => state.commercials,
    isMuseum: (state) => state.museums,
    isCulturalLibrary: (state) => state.culturalLibrary,
    isPublicSchool: (state) => state.publicSchool,
    isPublicNurseries: (state) => state.publicNurseries,
    isHousesOfGod: (state) => state.housesOfGod,
    isCallDeselectBlocks: (state) => state.callDeselectBlocks,
    // Actions getters
    isRestart: (state) => state.restart,
    isBackward: (state) => state.backward,
    isForward: (state) => state.forward,
    isPrint: (state) => state.print,
    isStatistics: (state) => state.statistics,
    isInfo: (state) => state.info,
    isLights: (state) => state.lights,
    isDayTime: (state) => state.dayTime,
    isPowerPlant: (state) => state.powerPlant,
    isLegend: (state) => state.legend,
    // Start game
    isStartGame: (state) => state.startGame,
    isShowActionBar: (state) => state.showActionBar,
    isPlayMode: (state) => state.playMode,
    // test
    isInitialCam: (state) => state.initialCam,
    // Actions getters
    isAuthenticated: (state) => state.isAuthenticated,
    getSizeSums: (state) => state.sizeSums,
    // blockSelection
    isBlockSelection: (state) => state.blockSelection,
    //loading
    isLoading: (state) => state.loading,
    // Getter for gameState
    getFly: (state) => state.fly,
    // fly
    getWalk: (state) => state.walk,
    // Other getters...
    getEndInTimer: (state) => state.endInTimer,
    getStartInTimer: (state) => state.startInTimer,
    // Audio
    isAudio: (state) => state.audio,
    isUpdateFeelGoodBarometer: (state) => state.updateFeelGoodBarometer,
    isPauseDayAndNightCycle: (state) => state.pauseDayAndNightCycle,
    isShowFeelGoodBarometer: (state) => state.showFeelGoodBarometer,
    isStopWalking: (state) => state.stopWalking,
    isMissionMode: (state) => state.missionMode,
  },
});

export default store;
