<template>
  <div class="header-type-animation" :aria-label="currentFullText">
    <span class="header-type-animation__text">{{ displayedText }}</span>
    <span class="header-type-animation__cursor" :class="{ 'is-hidden': !showCursor }">|</span>
  </div>
</template>

<script>
export default {
  name: "HeaderTypeAnimation",

  props: {
    texts: {
      type: Array,
      default: () => [
        "BKGD Berufskolleg Grafikdesign",
        "Gestaltungs- und Medientechnik | TG",
        "Berufskolleg Foto",
        "BF Druck- und Medientechnik"
      ]
    },
    typingSpeed: {
      type: Number,
      default: 56
    },
    deletingSpeed: {
      type: Number,
      default: 30
    },
    holdDelay: {
      type: Number,
      default: 1800
    },
    startDelay: {
      type: Number,
      default: 300
    },
    loop: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      textIndex: 0,
      charIndex: 0,
      displayedText: "",
      isDeleting: false,
      timerId: null,
      cursorTimerId: null,
      showCursor: true
    }
  },

  computed: {
    currentFullText() {
      return this.texts[this.textIndex] || ""
    }
  },

  mounted() {
    this.startCursorBlink()
    this.timerId = setTimeout(() => {
      this.tick()
    }, this.startDelay)
  },

  beforeUnmount() {
    this.clearTimers()
  },

  methods: {
    clearTimers() {
      if (this.timerId) {
        clearTimeout(this.timerId)
        this.timerId = null
      }

      if (this.cursorTimerId) {
        clearInterval(this.cursorTimerId)
        this.cursorTimerId = null
      }
    },

    startCursorBlink() {
      this.cursorTimerId = setInterval(() => {
        this.showCursor = !this.showCursor
      }, 500)
    },

    scheduleNext(delay) {
      this.timerId = setTimeout(() => {
        this.tick()
      }, delay)
    },

    tick() {
      const fullText = this.currentFullText

      if (!fullText) return

      if (!this.isDeleting) {
        this.charIndex += 1
        this.displayedText = fullText.slice(0, this.charIndex)

        if (this.charIndex >= fullText.length) {
          this.isDeleting = true
          this.scheduleNext(this.holdDelay)
          return
        }

        this.scheduleNext(this.typingSpeed)
        return
      }

      this.charIndex -= 1
      this.displayedText = fullText.slice(0, this.charIndex)

      if (this.charIndex <= 0) {
        this.isDeleting = false

        if (this.loop) {
          this.textIndex = (this.textIndex + 1) % this.texts.length
          this.scheduleNext(250)
          return
        }

        return
      }

      this.scheduleNext(this.deletingSpeed)
    }
  }
}
</script>

<style scoped lang="scss">
.header-type-animation {
  display: inline-flex;
  align-items: center;
  min-height: 1em;
  white-space: nowrap;
}

.header-type-animation__text {
  display: inline-block;
}

.header-type-animation__cursor {
  display: inline-block;
  margin-left: 4px;
  opacity: 1;
}

.header-type-animation__cursor.is-hidden {
  opacity: 0;
}
</style>