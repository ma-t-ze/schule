<template>
  <div class="page">
    <main class="content">
      <RouterLink to="/3dprint" class="button back-button">Zurück</RouterLink>

      <h1>Puzzle</h1>

      <p>
        Bringe die Streifen durch Verschieben in die richtige Reihenfolge.
      </p>

      <section class="puzzle">
        <draggable
          v-model="middleSlices"
          item-key="id"
          class="slice-list"
          ghost-class="ghost"
          animation="200"
          :scroll="false"
          @change="checkSolution"
        >
          <template #item="{ element }">
            <div class="slice draggable-slice">
              <img :src="element.src" :alt="`Schicht ${element.id}`" />
            </div>
          </template>
        </draggable>
      </section>

      <div v-if="solved" class="questions">
        <p>1. Schaue dir die Struktur des Schuhes an, erkennst du wie er gemacht wurde?</p>
        <p>2. Was hat das mit dem Thema Modellbau zu tun?</p>
      </div>

      <div class="actions" style="margin-bottom:0">
        <input
          v-model="exitCode"
          class="code-input"
          placeholder="Code"
          @keyup.enter="goNext"
        />
        <button v-if="solved" class="button" @click="goNext">
          Weiter
        </button>
      </div>

      <div v-if="solved" style="height: 100px"></div>

      <transition name="success">
        <div v-if="showSuccess" class="success-overlay">
          <div class="success-title">Gut gemacht!</div>
          <div class="success-hint">Mache dir nun Gedanken zu den Fragen unter dem Bild.</div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'GamePage',

  components: {
    draggable
  },

  data() {
    return {
      middleSlices: [
        { id: 6,  src: '/images/3dprint/sneakergame/sneaker_6.png' },
        { id: 11, src: '/images/3dprint/sneakergame/sneaker_11.png' },
        { id: 3,  src: '/images/3dprint/sneakergame/sneaker_3.png' },
        { id: 8,  src: '/images/3dprint/sneakergame/sneaker_8.png' },
        { id: 1,  src: '/images/3dprint/sneakergame/sneaker_1.png' },
        { id: 5,  src: '/images/3dprint/sneakergame/sneaker_5.png' },
        { id: 12, src: '/images/3dprint/sneakergame/sneaker_12.png' },
        { id: 2,  src: '/images/3dprint/sneakergame/sneaker_2.png' },
        { id: 9,  src: '/images/3dprint/sneakergame/sneaker_9.png' },
        { id: 4,  src: '/images/3dprint/sneakergame/sneaker_4.png' },
        { id: 7,  src: '/images/3dprint/sneakergame/sneaker_7.png' },
        { id: 10, src: '/images/3dprint/sneakergame/sneaker_10.png' }
      ],

      showSuccess: false,
      successTimeout: null,
      solved: false,
      exitCode: ''
    }
  },


  mounted() {
    this.$el.scrollTop = 0
    this.$nextTick(() => { this.$el.scrollTop = 0 })
    if (this.$route.query.solved) {
      this.middleSlices = [
        { id: 1,  src: '/images/3dprint/sneakergame/sneaker_1.png' },
        { id: 2,  src: '/images/3dprint/sneakergame/sneaker_2.png' },
        { id: 3,  src: '/images/3dprint/sneakergame/sneaker_3.png' },
        { id: 4,  src: '/images/3dprint/sneakergame/sneaker_4.png' },
        { id: 5,  src: '/images/3dprint/sneakergame/sneaker_5.png' },
        { id: 6,  src: '/images/3dprint/sneakergame/sneaker_6.png' },
        { id: 7,  src: '/images/3dprint/sneakergame/sneaker_7.png' },
        { id: 8,  src: '/images/3dprint/sneakergame/sneaker_8.png' },
        { id: 9,  src: '/images/3dprint/sneakergame/sneaker_9.png' },
        { id: 10, src: '/images/3dprint/sneakergame/sneaker_10.png' },
        { id: 11, src: '/images/3dprint/sneakergame/sneaker_11.png' },
        { id: 12, src: '/images/3dprint/sneakergame/sneaker_12.png' }
      ]
      this.solved = true
      this.exitCode = 'adidas'
    }
  },

  beforeUnmount() {
    clearTimeout(this.successTimeout)
  },

  methods: {
    goNext() {
      if (this.exitCode === 'solve') {
        this.middleSlices = [
          { id: 1,  src: '/images/3dprint/sneakergame/sneaker_1.png' },
          { id: 2,  src: '/images/3dprint/sneakergame/sneaker_2.png' },
          { id: 3,  src: '/images/3dprint/sneakergame/sneaker_3.png' },
          { id: 4,  src: '/images/3dprint/sneakergame/sneaker_4.png' },
          { id: 5,  src: '/images/3dprint/sneakergame/sneaker_5.png' },
          { id: 6,  src: '/images/3dprint/sneakergame/sneaker_6.png' },
          { id: 7,  src: '/images/3dprint/sneakergame/sneaker_7.png' },
          { id: 8,  src: '/images/3dprint/sneakergame/sneaker_8.png' },
          { id: 9,  src: '/images/3dprint/sneakergame/sneaker_9.png' },
          { id: 10, src: '/images/3dprint/sneakergame/sneaker_10.png' },
          { id: 11, src: '/images/3dprint/sneakergame/sneaker_11.png' },
          { id: 12, src: '/images/3dprint/sneakergame/sneaker_12.png' }
        ]
        this.exitCode = ''
        this.$nextTick(() => this.checkSolution())
        return
      }
      if (this.exitCode === 'adidas') {
        window.location.href = '/3dprint?overview=true&gruppenpuzzle=true'
      }
    },

    checkSolution() {
      const correctOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

      const isCorrect = this.middleSlices.every(
        (slice, index) => slice.id === correctOrder[index]
      )

      if (!isCorrect) return

      this.showSuccess = true
      this.solved = true

      clearTimeout(this.successTimeout)

      this.successTimeout = setTimeout(() => {
        this.showSuccess = false
      }, 4000)
    }
  }
}
</script>

<style scoped>
.page {
  position: fixed;
  inset: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  display: flex;
  justify-content: center;
}

.content {
  width: min(100%, 1000px);
  padding-bottom: 100px;
}

.back-button {
  margin-top: 24px;
}

h1 {
  margin-bottom: -20px;
  user-select: none;
}

p {
  font-size: 20px;
  line-height: 1.4;
}

.puzzle {
  margin-top: 5px;
}

.slice-list {
  display: flex;
  flex-direction: column;
  width: 77%;
  background: #f5f5f5;
  border-radius: 12px;
}

.slice img {
  display: block;
  width: 100%;
}

.draggable-slice {
  cursor: grab;
  touch-action: none;
}

.fixed {
  opacity: 0.7;
}

.ghost {
  opacity: 0.3;
}

.questions {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.questions p {
  margin: 0;
  font-size: 20px;
  line-height: 1.4;
}

.actions {
  margin-top: 30px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.code-input {
  width: 160px;
  padding: 12px 16px;
  font-size: 18px;
  color: #999;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
}

.code-input::placeholder {
  color: #bbb;
}

.code-input:focus {
  border-color: #999;
  color: #222;
}

.button {
  display: inline-block;
  padding: 12px 20px;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 18px;

  background: #222;
  color: white;

  text-decoration: none;
  cursor: pointer;
}

.success-overlay {
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  padding: 24px 40px;

  background: #22c55e;
  color: white;

  border-radius: 12px;
  text-align: center;

  z-index: 1000;
}

.success-title {
  font-size: 28px;
  font-weight: bold;
}

.success-hint {
  margin-top: 8px;
  font-size: 16px;
  opacity: 0.9;
}

.success-enter-active,
.success-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.success-enter-from,
.success-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}
</style>