<script setup>
import { ref, nextTick, onActivated, onDeactivated, onBeforeUnmount } from 'vue'
import Button from 'primevue/button'
import DesignThinking from './DesignThinking.vue'
import { teachingSections } from './exportTeachingSection'
import { checkDesignAdmin, loginDesignAdmin, logoutDesignAdmin, watchDesignPosts, editDesignPost, deleteDesignPost, resetDesignVotes, designError } from '../../../services/designThinkingFirebase'
const user = ref(null), error = ref(''), status = ref(''), busy = ref(false)
const posts = ref([]), editing = ref(null), draft = ref('')
const pdfSection = ref(null), pdfError = ref(''), pdfStage = ref(null)
async function downloadSection(section) {
  if (pdfSection.value) return
  pdfSection.value = section.id; pdfError.value = ''
  try {
    await nextTick()
    const root = pdfStage.value?.querySelector(`[data-pdf-section="${section.id}"]`)
    const { downloadTeachingSection } = await import('./exportTeachingSection')
    await downloadTeachingSection(root, section)
  } catch { pdfError.value = 'Der PDF-Download hat nicht funktioniert. Bitte versuche es erneut.' }
  finally { pdfSection.value = null }
}
let unsubscribe, generation = 0
function stop() { generation++; unsubscribe?.(); unsubscribe = null }
function listen() {
  stop()
  unsubscribe = watchDesignPosts(value => {
    posts.value = value
    if (editing.value && !value.some(post => post.id === editing.value)) { editing.value = null; draft.value = '' }
  }, e => { error.value = designError(e, 'Beiträge laden') })
}
async function login() {
  if (busy.value) return
  const current = generation
  busy.value = true; error.value = ''
  try { const identity = await loginDesignAdmin(); if (current !== generation) return; user.value = identity; listen() }
  catch(e) { error.value = designError(e, 'Anmelden') }
  finally { busy.value = false }
}
function edit(post) {
  if (editing.value && !window.confirm('Aktuellen Entwurf verwerfen?')) return
  editing.value = post.id; draft.value = post.text; status.value = ''
}
async function save() {
  if (busy.value) return
  busy.value = true; error.value = ''
  try { await editDesignPost(editing.value, draft.value); editing.value = null; status.value = 'Änderung gespeichert und für alle sichtbar.' }
  catch(e) { error.value = designError(e, 'Beitrag speichern') }
  finally { busy.value = false }
}
async function remove(post) {
  if (busy.value || !window.confirm('Diesen Beitrag endgültig für alle löschen?')) return
  busy.value = true; error.value = ''
  try { await deleteDesignPost(post.id); if (editing.value === post.id) editing.value = null; status.value = 'Beitrag gelöscht.' }
  catch(e) { error.value = designError(e, 'Beitrag löschen') }
  finally { busy.value = false }
}
async function resetVotes(kind = 'problem') {
  if (busy.value || !window.confirm(kind === 'idea' ? 'Alle Stimmen für Ideen zurücksetzen? Die Ideen bleiben erhalten.' : 'Alle bisherigen Stimmen löschen? Danach können alle erneut abstimmen. Die Problemfragen bleiben erhalten.')) return
  busy.value = true; error.value = ''; status.value = ''
  try { await resetDesignVotes(kind); status.value = 'Die Abstimmung wurde zurückgesetzt. Alle können erneut abstimmen.' }
  catch(e) { error.value = designError(e, 'Abstimmung zurücksetzen') }
  finally { busy.value = false }
}
async function logout() {
  if (editing.value && !window.confirm('Entwurf verwerfen und abmelden?')) return
  try { await logoutDesignAdmin(); stop(); user.value = null; posts.value = []; editing.value = null }
  catch(e) { error.value = designError(e, 'Abmelden') }
}
onActivated(async () => {
  const current = ++generation
  try { const identity = await checkDesignAdmin(); if (current !== generation) return; user.value = identity; if (identity) listen() }
  catch(e) { if (current === generation) error.value = designError(e, 'Admin-Zugang prüfen') }
})
onDeactivated(stop); onBeforeUnmount(stop)
</script>
<template><main class="admin-page">
  <router-link :to="{ name: '3tgg2-design-thinking' }">← Zur Schülerseite</router-link>
  <h1>App-Projekt · Admin-Ansicht</h1>
  <p v-if="error" role="alert">{{ error }}</p><p v-if="status" role="status">{{ status }}</p>
  <form v-if="!user" @submit.prevent="login"><h2>Als Lehrkraft anmelden</h2><p>Nutze dein freigeschaltetes Google-Konto.</p><button :disabled="busy">{{ busy ? 'Anmeldung läuft …' : 'Mit Google anmelden' }}</button></form>
  <template v-else>
    <section class="pdf-downloads" aria-labelledby="teaching-pdfs">
      <h2 id="teaching-pdfs">Unterrichtsmaterial als PDF</h2>
      <p>Jeden Abschnitt einzeln herunterladen – mit den aktuellen Unterrichtstexten, leeren Arbeitsfeldern und dem blauen bzw. gelben Design der Schülerseite.</p>
      <div class="pdf-download-grid"><Button v-for="section in teachingSections" :key="section.id" :label="`${section.title} · PDF herunterladen`" :loading="pdfSection === section.id" :disabled="!!pdfSection" :class="{ 'terms-download': section.yellow }" @click="downloadSection(section)" /></div>
      <p v-if="pdfSection" role="status">PDF wird erstellt …</p><p v-if="pdfError" role="alert">{{ pdfError }}</p>
    </section>
    <div v-if="pdfSection" ref="pdfStage" class="pdf-stage" aria-hidden="true" inert><DesignThinking pdf-mode /></div>
    <button :disabled="busy" @click="logout">Abmelden</button>
    <button class="reset-votes" :disabled="busy" @click="resetVotes()">Abstimmung zurücksetzen</button>
    <p>Alle Beiträge sind direkt auf der Schülerseite sichtbar. Du kannst jeden Beitrag bearbeiten oder löschen.</p>
    <section v-for="kind in ['briefing', 'problem', 'idea']" :key="kind">
      <button v-if="kind === 'idea'" :disabled="busy" @click="resetVotes('idea')">Abstimmung Ideen zurücksetzen</button>
      <h2>{{ kind === 'briefing' ? 'Beiträge zum Briefing / Rebriefing' : kind === 'problem' ? 'Problemfragen' : 'Ideen' }}</h2>
      <p v-if="!posts.some(p => p.kind === kind)">Noch keine Beiträge eingegangen.</p>
      <article v-for="post in posts.filter(p => p.kind === kind)" :key="post.id">
        <template v-if="editing === post.id">
          <div class="edit-form">
            <label :for="'edit-' + post.id">Beitrag bearbeiten</label>
            <textarea :id="'edit-' + post.id" v-model="draft" rows="5" maxlength="5000" :disabled="busy"></textarea>
            <button :disabled="busy || !draft.trim() || draft.length > 5000" @click="save">Speichern</button>
            <button :disabled="busy" @click="editing = null">Abbrechen</button>
          </div>
        </template>
        <template v-else><p>{{ post.text }}</p><button :disabled="busy" @click="edit(post)">Bearbeiten</button></template>
        <button :disabled="busy" @click="remove(post)">Löschen</button>
      </article>
    </section>
  </template>
</main></template>
<style scoped>
.pdf-downloads { background:#e5effc; border:1px solid #bfd5ef; border-top:5px solid #3674b7; border-radius:16px; padding:24px; }
.pdf-downloads p { line-height:1.6; }
.pdf-download-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
.pdf-download-grid :deep(button) { margin:0; white-space:normal; justify-content:flex-start; text-align:left; }
.pdf-download-grid :deep(.terms-download) { background:#ffdf6b; border-color:#d8b23d; color:#3f3109; }
.pdf-stage { position:fixed; left:-100000px; top:0; width:1280px; height:1px; overflow:hidden; pointer-events:none; }
@media(max-width:600px) { .pdf-download-grid { grid-template-columns:1fr; } }
.reset-votes { margin-left:12px; }
.edit-form { flex:1; min-width:0; }
.admin-page { max-width:1000px; margin:auto; padding:32px 24px 80px; font-family:'Jost',sans-serif; color:#172b44; user-select:text; }section { margin-top:40px; }article { display:flex; align-items:center; gap:16px; padding:18px; background:#e5effc; border-left:8px solid #2156a0; border-radius:8px; margin:12px 0; }article p { flex:1; white-space:pre-wrap; overflow-wrap:anywhere; }.color { width:24px; height:24px; border:1px solid #0003; flex-shrink:0; }label { display:block; font-weight:600; margin:24px 0 10px; }input,textarea { width:100%; box-sizing:border-box; padding:14px; border:1px solid #8daacb; border-radius:8px; font:inherit; }textarea { resize:vertical; }button { padding:12px 20px; border:0; border-radius:8px; background:#2156a0; color:white; font:inherit; cursor:pointer; margin-top:12px; }button:disabled { opacity:.5; cursor:not-allowed; }form { max-width:500px; }a { color:inherit; }[role=alert] { color:#9b2323; }button:focus-visible,input:focus-visible,textarea:focus-visible { outline:3px solid #2156a0; outline-offset:3px; }@media(max-width:600px) { article { flex-wrap:wrap; }article p { flex-basis:70%; } }
</style>
