<script setup>
defineProps({ important: Boolean })
</script>

<template>
  <span v-if="important" class="appointment-marker" role="img" aria-label="Wichtiger Termin">!</span>
</template>

<style scoped>
.appointment-marker { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: system-ui, sans-serif; font-size: 2rem; font-weight: 900; line-height: 1; min-width: .65em; }
</style>
