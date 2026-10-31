<script setup>
import { onMounted, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
const props = defineProps({ examKey: { type: String, required: true } })
const endpoint = import.meta.env.DEV ? '/site-auth/exam-accommodations.php' : '/exam-accommodations.php'
const entries = ref([])
const busy = ref(false)
const error = ref('')
const status = ref('')
let csrf = ''
async function request(url, options = {}) {
  const response = await fetch(url, { credentials: 'include', cache: 'no-store', ...options })
  let data
  try { data = await response.json() } catch { throw new Error('Bitte die Nachteilsausgleich-API auf STRATO einrichten.') }
  if (!response.ok) throw new Error(data.error || 'Speichern fehlgeschlagen.')
  return data
}
async function load() {
  busy.value = true; error.value = ''
  try {
    const data = await request(`${endpoint}?exam_key=${encodeURIComponent(props.examKey)}`)
    if (!Array.isArray(data.items) || typeof data.csrf !== 'string') throw new Error('Ungültige API-Antwort.')
    entries.value = data.items.map(entry => ({ ...entry, file: null })); csrf = data.csrf
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function add() {
  entries.value.push({ id: 0, student_name: '', has_pdf: false, revision: 0, file: null })
  status.value = ''
}
function selectFile(entry, event) {
  const file = event.target.files[0]
  if (file && (file.size > 5 * 1024 * 1024 || !file.name.toLowerCase().endsWith('.pdf'))) {
    error.value = 'Bitte eine PDF mit maximal 5 MB auswählen.'; event.target.value = ''; entry.file = null; return
  }
  entry.file = file || null; status.value = ''; error.value = ''
}
async function save(entry, action = 'save') {
  if (action === 'delete' && !entry.id) { entries.value.splice(entries.value.indexOf(entry), 1); return }
  if (action === 'save' && !entry.student_name.trim()) { error.value = 'Bitte einen Namen eingeben.'; return }
  busy.value = true; error.value = ''; status.value = ''
  try {
    const body = new FormData()
    for (const [key, value] of Object.entries({ exam_key: props.examKey, id: entry.id, revision: entry.revision, student_name: entry.student_name, action })) body.append(key, String(value))
    if (entry.file) body.append('pdf', entry.file)
    await request(endpoint, { method: 'POST', headers: { 'X-CSRF-Token': csrf }, body })
    await load(); status.value = action === 'delete' ? 'Eintrag gelöscht.' : 'Name und PDF gespeichert.'
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
onMounted(load)
</script>
<template>
  <section class="accommodations" aria-label="Namen und PDFs zum Nachteilsausgleich">
    <p v-if="error" role="alert">{{ error }}</p>
    <div v-for="(entry, index) in entries" :key="entry.id || `new-${index}`" class="person">
      <label :for="`${examKey}-person-${index}`">Name</label>
      <InputText :id="`${examKey}-person-${index}`" v-model="entry.student_name" maxlength="150" :disabled="busy" @input="status = ''" />
      <label class="upload">PDF hochladen (max. 5 MB)<input type="file" accept="application/pdf,.pdf" :disabled="busy" @change="selectFile(entry, $event)"></label>
      <a v-if="entry.has_pdf" :href="`${endpoint}?exam_key=${encodeURIComponent(examKey)}&id=${entry.id}`">Hinterlegte PDF herunterladen</a>
      <div class="actions"><Button label="Name und PDF speichern" size="small" :disabled="busy" @click="save(entry)" /><Button label="Entfernen" text severity="danger" size="small" :disabled="busy" @click="save(entry, 'delete')" /></div>
    </div>
    <Button label="Name hinzufügen" text size="small" :disabled="busy || !!error" @click="add" />
    <Button v-if="error" label="Neu laden" text size="small" :disabled="busy" @click="load" />
    <span role="status">{{ busy ? 'Wird geladen / gespeichert …' : status }}</span>
  </section>
</template>
<style scoped>
.accommodations { width: 100%; padding-left: 1.8rem; box-sizing: border-box; }
.person { display: flex; flex-direction: column; gap: .5rem; border-left: 2px solid #d5ded9; padding-left: .65rem; margin-bottom: 1rem; }
input { max-width: 100%; min-width: 0; box-sizing: border-box; }
.upload { display: flex; flex-direction: column; gap: .3rem; }
.actions { display: flex; flex-wrap: wrap; gap: .4rem; }
[role="alert"] { color: #b42318; }
[role="status"] { display: block; font-size: .85rem; }
</style>
