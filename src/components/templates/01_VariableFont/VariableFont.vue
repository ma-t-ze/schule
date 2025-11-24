<!-- VariableFont.vue -->
<template>
  <div class="container">
    <button class="button" type="button" aria-label="Variable font example">
      abcde
    </button>
  </div>
</template>

<script>
export default {
  name: 'VariableFont',

  data() {
    return {
    };
  },

  mounted() {
  },

  beforeUnmount() {
  },

  methods: {

  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: white;
  /* or: 100vh, depending on layout */
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 80px;
  padding: 10px 20px;
  color: black;
  cursor: pointer;
  font-family: Gabonza;
  font-size: 40px;
  border: 1px solid black;
  border-radius: 40px;
  background-color: white;
  /* Startwert */
  font-variation-settings: "wght" 1;

 /* sanfte Animation: font + border-width + border-color */
  transition: font-variation-settings 0.6s ease,
              border-width 0.25s ease
  
}

/* Hover: Gewicht fährt hoch auf 1000, Border wird dicker */
.button:hover {
  font-variation-settings: "wght" 1000;
  border-width: 6px;            /* wird animiert */
}
</style>
