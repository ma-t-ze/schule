<script setup>
import { onMounted, ref, watch } from 'vue'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { checklistFields as fields } from './examChecklistFields'
const props = defineProps({ examKey: { type: String, required: true } })
const emit = defineEmits(['change'])
const item = ref(null)
watch(item, value => emit('change', value ? { ...value } : null), { deep: true })
const busy = ref(false)
const error = ref('')
const status = ref('')
const endpoint = import.meta.env.DEV ? '/site-auth/exam-checklists.php' : '/exam-checklists.php'
let csrf = ''
async function request(options = {}) {
  const response = await fetch(endpoint + (options.method ? '' : `?exam_key=${encodeURIComponent(props.examKey)}`), { credentials: 'include', cache: 'no-store', ...options })
  let data
  try { data = await response.json() } catch { throw new Error('Die Klassenarbeiten-API ist noch nicht verfügbar. Bitte die PHP-Dateien auf STRATO einrichten.') }
  if (!response.ok) throw new Error(data.error || 'Speichern oder Laden fehlgeschlagen.')
  return data
}
async function load() {
  busy.value = true; error.value = ''; status.value = ''
  try {
    const data = await request()
    if (!data.item || typeof data.csrf !== 'string') throw new Error('Ungültige API-Antwort.')
    item.value = data.item; csrf = data.csrf
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
async function save() {
  busy.value = true; error.value = ''; status.value = ''
  try {
    const data = await request({ method: 'POST', headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf }, body: JSON.stringify({ exam_key: props.examKey, ...item.value }) })
    item.value.revision = data.revision; status.value = 'Gespeichert.'
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
onMounted(load)
</script>
<template>
  <div class="exam-checklist">
    <p v-if="error" role="alert">{{ error }}</p>
    <p v-if="busy && !item" role="status">Wird geladen …</p>
    <fieldset v-if="item" :disabled="busy">
      <template v-for="[key, label] in fields" :key="key">
      <label class="check-row">
        <Checkbox v-model="item[key]" binary :disabled="busy" @update:model-value="status = ''" />
        <span>{{ label }}</span>
      </label>
      </template>
      <label :for="`makeup-${examKey}`">Nachschreiber</label>
      <Textarea :id="`makeup-${examKey}`" v-model="item.makeup_names" rows="2" auto-resize placeholder="Namen eintragen (optional)" maxlength="1000" :disabled="busy" @input="status = ''" />
      <Button label="Speichern" size="small" :loading="busy" @click="save" />
      <span role="status">{{ status }}</span>
    </fieldset>
    <Button v-if="error" label="Neu laden" text size="small" :disabled="busy" @click="load" />
  </div>
</template>
<style scoped>
.exam-checklist { margin: .6rem 0 1rem; font-size: .9rem; }
fieldset { border: 0; padding: 0; margin: 0; display: flex; flex-direction: column; align-items: flex-start; gap: .6rem; min-width: 0; }
.check-row { display: flex; align-items: center; gap: .6rem; cursor: pointer; }
textarea { width: 100%; box-sizing: border-box; }
[role="alert"] { color: #b42318; }
[role="status"] { font-size: .85rem; }
</style>
