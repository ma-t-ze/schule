<script setup>
import { computed, ref, watch, onMounted, onActivated, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import RadioButton from 'primevue/radiobutton'
import Message from 'primevue/message'
import { criteria, variants, prototypeBase, createFeedback, restoreFeedback } from './prototypeTest/model'
const props = defineProps({ pdfMode: { type: Boolean, default: false } })
const route = useRoute()
const root = ref(null)
async function openLinkedSection() {
  if (!props.pdfMode && route.hash === '#phase-five-test') {
    await nextTick()
    if (root.value) root.value.open = true
  }
}
onMounted(openLinkedSection)
onActivated(openLinkedSection)
watch(() => route.hash, openLinkedSection)
const feedback = ref(createFeedback())
const notice = ref('')
const exporting = ref(false)
const error = ref('')
const downloaded = ref(false)
const storageKey = '3tgg2-phase51-feedback-v1'
if (!props.pdfMode) {
  try { feedback.value = restoreFeedback(JSON.parse(localStorage.getItem(storageKey) || 'null')) }
  catch { notice.value = 'Automatisches Speichern ist auf diesem Gerät nicht verfügbar. Lasst diese Seite bis zum PDF-Download geöffnet.' }
}
watch(feedback, value => {
  downloaded.value = false
  if (props.pdfMode) return
  try { localStorage.setItem(storageKey, JSON.stringify(value)) }
  catch { notice.value = 'Euer Feedback konnte nicht auf diesem Gerät gespeichert werden. Sichert es als PDF, bevor ihr die Seite schließt.' }
}, { deep: true })
const completed = computed(() => variants.reduce((sum, v) => sum + criteria.filter(c => feedback.value.reviews[v.id][c.id].trim()).length, 0))
async function download() {
  if (exporting.value) return
  exporting.value = true; error.value = ''; downloaded.value = false
  try {
    const { exportFeedback, collectFeedbackContent } = await import('./prototypeTest/exportFeedback')
    await exportFeedback(JSON.parse(JSON.stringify(feedback.value)), collectFeedbackContent(root.value))
    downloaded.value = true
  } catch { error.value = 'Das PDF konnte nicht erstellt werden. Eure Eingaben bleiben erhalten. Bitte erneut versuchen.' }
  finally { exporting.value = false }
}
</script>

<template>
  <details ref="root" id="phase-five-test" class="blue-card phase-five" aria-labelledby="phase-five-title">
    <summary><span class="block-heading"><span class="eyebrow">PHASE 5.1</span><h2 id="phase-five-title">Testen und optimieren</h2></span></summary>
    <section class="assignment">
      <h3>Arbeitsauftrag</h3>
      <ol>
        <li>Geht wieder in eure <strong>bisherigen Teams aus drei bis vier Personen</strong>.</li>
        <li>Testet alle drei Versionen der unten zur Verfügung stehenden Essensplan-App in Form von <strong>klickbaren Wireframes</strong>.</li>
        <li>Wählt die beste Idee aus und <strong>begründet eure Entscheidung anhand nachvollziehbarer Kriterien</strong>.</li>
      </ol>
    </section>

    <section aria-labelledby="phase51-versions"><h3 id="phase51-versions">Drei Ideen aus euren Entwürfen</h3><p>Die Klickdummys übertragen drei gute Ansätze eurer Wireframes in bedienbare Versionen.</p>
      <div class="prototype-links"><article v-for="version in variants" :key="version.id" :class="`version-${version.id}`"><span class="version-badge">{{ version.label }}</span><RouterLink :to="`${prototypeBase}/${version.id}`" target="_blank" rel="noopener noreferrer">{{ version.label }} testen ↗</RouterLink></article></div>

    </section>


    <form class="feedback-form" @submit.prevent="download">
      <h3>Euer Teamfeedback</h3><label class="field-label" for="phase51-team">Teamname und Namen der Mitglieder</label><InputText id="phase51-team" v-model="feedback.team" required maxlength="200" placeholder="Unser Team …" />
      <p class="save-note">Entwurf wird auf diesem Gerät gespeichert, nicht automatisch an die Lehrkraft gesendet. Bei einem Gerätewechsel nehmt eure Notizen mit. Gebt das vollständige PDF in Teams ab.</p><Message v-if="notice" severity="warn" :closable="false">{{ notice }}</Message>
      <fieldset v-for="version in variants" :key="version.id" class="version-feedback"><legend>{{ version.label }}</legend><div v-for="criterion in criteria" :key="criterion.id"><label class="field-label" :for="`feedback-${version.id}-${criterion.id}`">{{ criterion.title }} – Beobachtung und Verbesserung</label><Textarea :id="`feedback-${version.id}-${criterion.id}`" v-model="feedback.reviews[version.id][criterion.id]" rows="3" autoResize required maxlength="1500" placeholder="Wir haben beobachtet … Deshalb würden wir … ändern." /></div></fieldset>
      <fieldset class="favorite-choice"><legend>Unser Favorit</legend><p>Entscheidet euch nach dem Test aller drei Versionen für genau eine. Die beste Idee wird im nächsten Schritt weiter optimiert.</p><div class="favorite-options"><div v-for="version in variants" :key="version.id"><RadioButton v-model="feedback.favorite" name="favorite" :inputId="`favorite-${version.id}`" :value="version.id" /><label :for="`favorite-${version.id}`">{{ version.label }}</label></div></div><label class="field-label" for="phase51-reason">Warum ist das euer Favorit? Bezieht euch auf die drei Kriterien.</label><Textarea id="phase51-reason" v-model="feedback.reason" rows="4" autoResize required maxlength="1500" placeholder="Wir wählen Version …, weil … Besonders verbessern würden wir noch …" /></fieldset>
      <p class="completion" role="status">{{ completed }} / 9 Kriterienfelder ausgefüllt · {{ feedback.favorite ? 'Favorit gewählt' : 'Favorit noch offen' }}</p>

      <div class="download-area"><Button type="button" label="Analyse und Auswahl als PDF downloaden" :loading="exporting" :disabled="exporting" @click="download" /></div><Message v-if="error" severity="error" :closable="false">{{ error }}</Message><Message v-if="downloaded" severity="success" :closable="false">PDF erstellt. Ladet „5_1_Teamfeedback_Klickdummys.pdf“ jetzt im Teams-Abgabeordner hoch. Erst damit ist euer Feedback abgegeben.</Message>
    </form>

  </details>
</template>

<style scoped>
@import './designThinking.css';
.phase-five { scroll-margin-top: 24px; }.prototype-links { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 24px 0; }.prototype-links article { background: white; border: 1px solid #adc6e2; border-radius: 12px; padding: 18px; display: flex; flex-direction: column; gap: 14px; }.prototype-links h4 { font-size: 22px; font-weight: 500; line-height: 1.2; margin: 18px 0 12px; }.prototype-links p { font-size: 15px; flex: 1; }.prototype-links a { display: block; text-align: center; background: #2156a0; color: white; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: 500; }.version-badge { font-size: 12px; text-transform: uppercase; letter-spacing: .1em; color: #2156a0; }.prototype-links .version-b .version-badge { color: #6347a8; }.prototype-links .version-c .version-badge { color: #2f634a; }.selection-note { padding: 14px 18px; border: 1px solid #adc6e2; border-radius: 8px; }.selection-note summary,.missing summary { cursor: pointer; }.selection-note p,.selection-note li { font-size: 15px; }.criteria-list { padding-left: 25px; }.criteria-list>li { margin: 16px 0; }.criteria-list p { margin-top: 4px; }.feedback-example { background: #fff8da; padding: 18px; border-radius: 10px; }.feedback-form { margin-top: 32px; }.feedback-form :deep(input),.feedback-form :deep(textarea) { width: 100%; }.version-feedback,.favorite-choice { min-width: 0; background: white; border: 1px solid #adc6e2; border-radius: 12px; padding: 16px 20px 22px; margin: 25px 0; }.version-feedback legend,.favorite-choice legend { padding: 0 10px; font-size: 20px; font-weight: 500; }.favorite-options { display: grid; gap: 15px; margin: 20px 0; }.favorite-options>div { display: flex; align-items: center; gap: 12px; }.favorite-options label { cursor: pointer; }.completion { font-size: 15px; color: #2156a0; }.missing { font-size: 14px; margin-bottom: 20px; }.missing li { font-size: 14px; }.test-schedule li { margin: 8px 0; }select { width: 100%; padding: 12px; font: inherit; border-radius: 8px; border: 1px solid #8daacb; background: white; color: #172b44; }.order-label { font-size: 16px; }
@media(max-width: 650px) { .prototype-links { grid-template-columns: 1fr; }.version-feedback,.favorite-choice { padding: 14px; } }
</style>
