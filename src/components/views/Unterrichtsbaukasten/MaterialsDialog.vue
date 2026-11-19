<script setup>
import { ref, watch } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import Message from 'primevue/message'
import Textarea from 'primevue/textarea'
import { readMaterialDocument } from './materialDocuments.js'
const props = defineProps({ visible: Boolean, text: { type: String, default: '' }, documents: { type: Array, default: () => [] } })
const emit = defineEmits(['update:visible', 'save'])
const text = ref('')
const documents = ref([])
const reading = ref(false)
const error = ref('')
let session = 0
watch(() => props.visible, visible => {
  session++
  if (!visible) return
  text.value = props.text
  documents.value = props.documents.map(item => ({ ...item }))
  error.value = ''; reading.value = false
})
async function upload(event) {
  const files = [...(event.target.files || [])]
  const current = session
  reading.value = true; error.value = ''
  const errors = []
  try {
    for (const file of files) {
      if (current !== session) break
      if (documents.value.length >= 10) { errors.push('Es sind höchstens zehn Dokumente möglich.'); break }
      try {
        const content = await readMaterialDocument(file)
        if (current !== session) break
        const size = documents.value.reduce((sum, item) => sum + new TextEncoder().encode(item.text).length, 0)
        if (size + new TextEncoder().encode(content).length > 200_000) throw new Error('Der Materialspeicher ist voll. Bitte zuerst ein Dokument entfernen.')
        documents.value.push({ id: crypto.randomUUID(), name: file.name, text: content, selected: true })
      } catch (cause) { errors.push(`${file.name}: ${cause.message}`) }
    }
  } finally {
    event.target.value = ''
    if (current === session) { reading.value = false; error.value = errors.join(' ') }
  }
}
function save() {
  if (reading.value) return
  emit('save', { text: text.value.trim(), documents: documents.value.map(item => ({ ...item })) })
  emit('update:visible', false)
}
</script>
<template>
  <Dialog :visible="visible" header="Medien/Material" modal dismissable-mask :style="{ width: 'min(720px, calc(100vw - 32px))' }" @update:visible="emit('update:visible', $event)">
    <div class="materials-editor">
      <label for="material-description">Medien und Materialien beschreiben</label>
      <Textarea id="material-description" v-model="text" rows="5" auto-resize />
      <label for="material-files">Dokumente hinzufügen</label>
      <input id="material-files" type="file" accept=".pdf,.docx,.txt,.md" multiple :disabled="reading" @change="upload">
      <p class="help">PDF mit Text, Word (.docx), TXT oder Markdown. Bis zu 10 MB pro Datei; längere Dokumente bitte als Auszug verwenden. Gespeichert und für die Planung verwendet wird der gelesene Text.</p>
      <p v-if="reading" role="status">Dokumente werden eingelesen …</p>
      <Message v-if="error" severity="warn" :closable="false">{{ error }}</Message>
      <div v-for="document in documents" :key="document.id" class="material-document">
        <div class="document-row"><Checkbox v-model="document.selected" :input-id="`material-${document.id}`" binary /><label :for="`material-${document.id}`">{{ document.name }}</label><Button label="Entfernen" text size="small" :disabled="reading" @click="documents = documents.filter(item => item.id !== document.id)" /></div>
        <details><summary>Gelesenen Text ansehen</summary><p class="document-text">{{ document.text }}</p></details>
      </div>
    </div>
    <template #footer><Button label="Speichern" :disabled="reading" @click="save" /></template>
  </Dialog>
</template>
<style scoped>
.materials-editor { display: grid; gap: 12px; line-height: 1.6; }
.materials-editor > label { font-weight: 500; }
.materials-editor textarea, input { width: 100%; min-width: 0; box-sizing: border-box; }
.help { font-size: 13px; color: #526166; margin: 0; }
.material-document { padding-top: 14px; border-top: 1px solid #dce3d9; }
.document-row { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; }
.document-row label { overflow-wrap: anywhere; flex: 1; min-width: 100px; }
.document-row :deep(.p-checkbox) { flex-shrink: 0; }
summary { cursor: pointer; font-size: 13px; margin-top: 10px; }
.document-text { max-height: 200px; overflow: auto; white-space: pre-wrap; overflow-wrap: anywhere; font-size: 13px; }
</style>
