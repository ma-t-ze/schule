<script setup>
defineProps({ src: { type: String, required: true }, title: { type: String, required: true } })
</script>

<template>
  <iframe :src="src" :title="`PDF: ${title}`" class="pdf-viewer" />
</template>

<style scoped>
.pdf-viewer { display: block; width: 100%; height: 80vh; min-height: 450px; box-sizing: border-box; border: 1px solid var(--school-border); background: var(--school-background); }
</style>
