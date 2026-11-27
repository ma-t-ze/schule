<script setup>
import Button from 'primevue/button'
defineProps({ section: { type: String, required: true }, items: { type: Array, required: true }, endpoint: { type: String, required: true }, busy: Boolean, error: { type: String, default: '' } })
const emit = defineEmits(['upload', 'delete'])
</script>

<template>
  <div class="admin-pdfs">
    <div v-for="item in items.filter(item => item.section === section)" :key="item.id" class="pdf-row">
      <a :href="`${endpoint}?id=${item.id}`" :download="item.mime_type && item.mime_type !== 'application/pdf' ? (item.filename || item.title) : undefined" target="_blank" rel="noopener noreferrer">{{ item.title }}{{ item.filename ? '' : ' (PDF)' }} ↗</a>
      <Button label="×" text rounded size="small" :disabled="busy" :aria-label="`${item.title} löschen`" title="Datei löschen" @click="emit('delete', item)" />
    </div>
    <label class="admin-upload">＋ Datei hochladen<input type="file" :disabled="busy" @change="emit('upload', $event, section)" /></label>
    <p v-if="error" class="admin-upload-error" role="alert">{{ error }}</p>
  </div>
</template>

<style scoped>
.pdf-row { display: flex; align-items: center; gap: 8px; min-height: 32px; }
.pdf-row a, .admin-upload { color: var(--p-primary-color); font-size: 16px; line-height: 1.5; }
.pdf-row a { text-decoration: none; overflow-wrap: anywhere; }
.pdf-row a:hover, .admin-upload:hover { text-decoration: underline; }
.admin-upload { display: inline-block; padding: 5px 0; cursor: pointer; }
.admin-upload input { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
.admin-upload:focus-within { outline: 2px solid currentColor; outline-offset: 2px; }
.admin-upload-error { color: #b42318; font-size: 14px; margin: 4px 0; }
</style>
