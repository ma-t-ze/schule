<template>
  <div class="page">
    <main class="content">
      <h1>Puzzle</h1>

      <p>
        Bringe die Schichten des Sneakers in die richtige Reihenfolge.
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

      <div class="actions">
        <RouterLink to="/3dprint?overview=true&gruppenpuzzle=true" class="button" tabindex="-1">
          Weiter
        </RouterLink>
      </div>

      <transition name="success">
        <div v-if="showSuccess" class="success-overlay">
          Gut gemacht!
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
        { id: 6, src: '/images/sneakergame/sneaker_6.png' },
        { id: 5, src: '/images/sneakergame/sneaker_5.png' },
        { id: 9, src: '/images/sneakergame/sneaker_9.png' },
        { id: 8, src: '/images/sneakergame/sneaker_8.png' },
        { id: 2, src: '/images/sneakergame/sneaker_2.png' },
        { id: 4, src: '/images/sneakergame/sneaker_4.png' },
        { id: 7, src: '/images/sneakergame/sneaker_7.png' },
        { id: 3, src: '/images/sneakergame/sneaker_3.png' }
      ],

      showSuccess: false,
      successTimeout: null
    }
  },


  mounted() {
    this.$el.scrollTop = 0
    this.$nextTick(() => { this.$el.scrollTop = 0 })
  },

  beforeUnmount() {
    clearTimeout(this.successTimeout)
  },

  methods: {
    checkSolution() {
      const correctOrder = [2, 3, 4, 5, 6, 7, 8, 9]

      const isCorrect = this.middleSlices.every(
        (slice, index) => slice.id === correctOrder[index]
      )

      if (!isCorrect) return

      this.showSuccess = true

      clearTimeout(this.successTimeout)

      this.successTimeout = setTimeout(() => {
        this.showSuccess = false
      }, 2000)
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
}

h1 {
  margin-bottom: 5px;
}

p {
  font-size: 20px;
  line-height: 1.4;
}

.puzzle {
  margin-top: 5px;
  padding: 20px;

  background: #f5f5f5;
  border-radius: 12px;
}

.slice-list {
  display: flex;
  flex-direction: column;
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

.actions {
  margin-top: 30px;
}

.button {
  display: inline-block;
  padding: 12px 20px;

  border-radius: 8px;

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

  padding: 20px 40px;

  background: #22c55e;
  color: white;

  border-radius: 12px;

  font-size: 28px;
  font-weight: bold;

  z-index: 1000;
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