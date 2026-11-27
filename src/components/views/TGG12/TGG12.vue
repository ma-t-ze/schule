<script setup>
import Panel from 'primevue/panel'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import PdfVorschau from './PdfVorschau.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({ admin: { type: Boolean, default: false } })
const selectedPdf = ref(null)
const router = useRouter()
function selectPage(item) { selectedPdf.value = { ...item, href: router.resolve(item.to).href, embeddedPage: true } }
const materialsEndpoint = import.meta.env.DEV ? '/site-auth/course-materials.php' : '/course-materials.php'
const uploadedMaterials = ref([])
const uploadError = ref('')
const uploadBusy = ref(false)
const deleteTarget = ref(null)
const deleteError = ref('')
let uploadCsrf = ''
async function loadMaterials() {
  try {
    const response = await fetch(materialsEndpoint, { credentials: 'include', cache: 'no-store' })
    if (!response.ok) throw new Error('Die PDF-Speicherung ist noch nicht verfügbar.')
    const data = await response.json()
    if (!Array.isArray(data.items)) throw new Error('Die Materialliste ist ungültig.')
    uploadedMaterials.value = data.items
    uploadCsrf = data.csrf || ''
    uploadError.value = ''
  } catch (error) { if (props.admin) uploadError.value = error.message }
}
async function uploadPdf(event, topic) {
  const input = event.target
  const file = input.files?.[0]
  if (!file) return
  if (file.size > 5 * 1024 * 1024 || !file.name.toLowerCase().endsWith('.pdf')) { uploadError.value = 'Bitte ein PDF mit höchstens 5 MB auswählen.'; input.value = ''; return }
  uploadBusy.value = true
  uploadError.value = ''
  try {
    if (!uploadCsrf) throw new Error('Upload nicht verfügbar. Bitte anmelden oder die Seite neu laden.')
    const data = new FormData(); data.append('topic', topic); data.append('pdf', file)
    const response = await fetch(materialsEndpoint, { method: 'POST', credentials: 'include', headers: { 'X-CSRF-Token': uploadCsrf }, body: data })
    const result = await response.json()
    if (!response.ok) throw new Error(result.error || 'Das PDF konnte nicht hochgeladen werden.')
    uploadedMaterials.value.push(result.item)
  } catch (error) { uploadError.value = error.message || 'Das PDF konnte nicht hochgeladen werden.' }
  finally { uploadBusy.value = false; input.value = '' }
}
async function deleteMaterial() {
  if (!deleteTarget.value || uploadBusy.value) return
  uploadBusy.value = true
  deleteError.value = ''
  try {
    if (!uploadCsrf) throw new Error('Bitte erneut anmelden und die Seite neu laden.')
    const data = new FormData(); data.append('action', 'delete'); data.append('id', String(deleteTarget.value.id))
    const response = await fetch(materialsEndpoint, { method: 'POST', credentials: 'include', headers: { 'X-CSRF-Token': uploadCsrf }, body: data })
    const result = await response.json()
    if (!response.ok) throw new Error(result.error || 'Das PDF konnte nicht gelöscht werden.')
    if (selectedPdf.value?.href === `${materialsEndpoint}?id=${deleteTarget.value.id}`) selectedPdf.value = null
    uploadedMaterials.value = uploadedMaterials.value.filter(item => item.id !== deleteTarget.value.id)
    deleteTarget.value = null
  } catch (error) { deleteError.value = error.message || 'Das PDF konnte nicht gelöscht werden.' }
  finally { uploadBusy.value = false }
}
function selectMaterial(item) { selectedPdf.value = { title: item.title, href: `${materialsEndpoint}?id=${encodeURIComponent(item.id)}` } }
onMounted(loadMaterials)
const spatialGroups = [
  { id: '8.1', title: 'Technisches Zeichnen' },
  { id: '8.2', title: 'Axonometrie' },
  { id: '8.3', title: 'Fluchtpunktperspektive' },
  { id: '8.4', title: 'Scribbles und Entwurfsskizzen' }
]
const teacherItems = [
  { title: 'Räumliche Darstellung', href: '/3tgg12_Admin/raeumliche-darstellung' },
  { title: 'Klassenarbeit 01', href: '/3tgg12/klassenarbeit-01' },
  { title: 'Designvorlage Klassenarbeit', href: '/designvorlagen/klassenarbeiten/3tgg1-2' },
  { title: 'Designvorlage Arbeitsblatt (A4)', href: '/designvorlagen/a4' }
]

const groups = [
  { id: '2.1', title: 'Visuelle Wahrnehmung', description: 'Sehvorgang; Wahrnehmungs- und Gestaltgesetze', links: [
    { number: 5, title: 'Visuelle Kommunikation: Sehvorgang', href: '/material/3tgg12/Sehvorgang.pdf' },
    { number: 7, title: 'Gestaltgesetze', href: '/material/3tgg12/Gestaltgesetze_und_Kunst_VS_Design.pdf' }
  ] },
  { id: '2.2', title: 'Farbwahrnehmung', description: 'Farbreiz; Farbvalenz; Farbempfindung; Farbeigenschaften: Farbton, Helligkeit, Sättigung; Farbwirkung', links: [
    { number: 6, title: 'Eine andere Geschichte des Farbensehens', href: '/material/3tgg12/Eine_andere_Geschichte_des_Farbensehens.pdf' },
    { number: 12, title: 'Helligkeit und Sättigung', to: { name: '3tgg12-helligkeit-und-saettigung' } }
  ] },
  { id: '2.3', title: 'Grafische Grundformen', description: 'Linie, Kontur, Fläche, Archetypen; visuelles Gewicht; Komposition', links: [
    { number: 1, title: 'Visuelle Kommunikation mit Punkt und Linie', href: '/material/3tgg12/Visuelle_Kommunikation_mit_Punkt_und_Linie.pdf' },
    { number: 2, title: 'Der Punkt und Punktportraits', href: '/material/3tgg12/Der_Punkt_und_Punktportraits.pdf' },
    { number: 3, title: 'Die Linie und Linienportraits', href: '/material/3tgg12/Die_Linie_und_Linienportraits.pdf' },
    { number: 4, title: 'Die Fläche und Flächenportraits', href: '/material/3tgg12/Die_Flaeche_und_Flaechenportraits.pdf' }
  ] },
  { id: '2.4', title: 'Visuelle Kommunikation und Zeichen', description: 'Kommunikationsmodell; Ikon, Index, Symbol; semiotische Analyse: Syntaktik, Semantik, Pragmatik', links: [
    { number: 9, title: 'Semiotik Einführung', href: '/material/3tgg12/Semiotik.pdf' },
    { number: 10, title: 'Semiotische Analyse', to: { name: '3tgg12-semiotische-analyse' } },
    { number: 14, title: 'Zeichen, Objekt und Interpretant', href: '/material/3tgg12/3TGG1_2_Zeichen_Objekt_Interpretant.pdf' },
    { number: 15, title: 'Ikon, Index und Symbol', href: '/material/3tgg12/3TGG1_2_Ikon_Index_Symbol.pdf' },
    { number: 16, title: 'Plakatwettbewerb Zeichenanalyse', inactive: true }
  ] }
]
</script>

<template>
  <main class="course-page">
    <div class="course-layout">
      <section class="content-column" aria-label="Inhaltsvorschau">
        <header class="course-header"><div><p class="eyebrow">GESTALTUNGS- UND MEDIENTECHNIK</p><h1>{{ props.admin ? '3TGG1/2 · Admin' : '3TGG1/2' }}</h1><p class="intro">Unterrichtsinhalte und Materialien</p></div><a v-if="!props.admin" class="qr-link" href="https://visualizer.matthiasheckel.com/3tgg12" aria-label="3TGG1/2-Übersicht öffnen"><img src="/3tgg12/qr-code.svg" width="96" height="96" alt="QR-Code zur 3TGG1/2-Übersicht" /></a></header>
        <Panel v-if="selectedPdf" class="preview-panel" :header="`${selectedPdf.number ? `#${selectedPdf.number} ` : ''}${selectedPdf.title}`"><template #icons><a :href="selectedPdf.href" target="_blank" rel="noopener noreferrer" class="open-link" aria-label="Inhalt in neuem Tab öffnen">↗</a><button class="close-preview" type="button" aria-label="Vorschau schließen" @click="selectedPdf = null">×</button></template><iframe v-if="selectedPdf.teacher || selectedPdf.embeddedPage" :key="selectedPdf.href" class="teacher-preview" :src="selectedPdf.href" :title="`Vorschau: ${selectedPdf.title}`" /><PdfVorschau v-else :src="selectedPdf.href" :title="selectedPdf.title" /></Panel>
        <Panel v-else header="Materialien" class="preview-panel"><p class="empty-preview">Wähle links ein Thema aus. PDF-Dokumente werden hier angezeigt.</p></Panel>
      </section>
      <aside id="course-topics" class="topics-column" aria-label="Unterrichtsthemen">
        <h2 v-if="props.admin" class="sidebar-heading">Schüleransicht</h2>
        <p v-if="props.admin && uploadError" class="upload-error" role="alert">{{ uploadError }}</p>
        <div class="topics-box">
        <Panel :header="props.admin ? 'BPE 2 · Grundlagen der visuellen Kommunikation' : 'Grundlagen der visuellen Kommunikation'" toggleable>
          <Panel v-for="group in groups" :key="group.id" :header="props.admin ? `${group.id} · ${group.title}` : group.title" toggleable collapsed class="class-subpanel">
            <nav class="topic-links" :aria-label="`Materialien zu ${group.title}`"><template v-for="link in group.links" :key="link.number"><span v-if="link.inactive" class="topic-inactive" aria-disabled="true">#{{ link.number }} {{ link.title }} <small>· derzeit nicht verfügbar</small></span><button v-else-if="link.href" type="button" :aria-pressed="selectedPdf?.number === link.number" @click="selectedPdf = link">#{{ link.number }} {{ link.title }}</button><button v-else type="button" :aria-pressed="selectedPdf?.number === link.number" @click="selectPage(link)">#{{ link.number }} {{ link.title }}</button></template><div v-for="item in uploadedMaterials.filter(material => material.topic === group.id)" :key="item.id" class="uploaded-row"><button type="button" class="uploaded-title" :aria-pressed="selectedPdf?.href === `${materialsEndpoint}?id=${item.id}`" @click="selectMaterial(item)">{{ item.title }}</button><button v-if="props.admin" type="button" class="delete-material" :disabled="uploadBusy" :aria-label="`${item.title} löschen`" title="PDF löschen" @click="deleteError = ''; deleteTarget = item">×</button></div><label v-if="props.admin" class="upload-link">＋ PDF hochladen<input type="file" accept="application/pdf,.pdf" :disabled="uploadBusy" @change="uploadPdf($event, group.id)" /></label></nav>
          </Panel>
          <Panel header="Klausurvorbereitung" toggleable collapsed class="class-subpanel"><Panel header="Klassenarbeit 01" toggleable collapsed class="class-subpanel"><nav class="topic-links" aria-label="Klassenarbeit 01"><button type="button" :aria-pressed="selectedPdf?.number === 8" @click="selectedPdf = { number: 8, title: 'Klausurvorbereitung - Grundlagen der visuellen Gestaltung und Wahrnehmung', href: '/material/3tgg12/Rueckblick.pdf' }">#8 Klausurvorbereitung - Grundlagen der visuellen Gestaltung und Wahrnehmung</button><div v-for="item in uploadedMaterials.filter(material => material.topic === 'rueckblick')" :key="item.id" class="uploaded-row"><button type="button" class="uploaded-title" :aria-pressed="selectedPdf?.href === `${materialsEndpoint}?id=${item.id}`" @click="selectMaterial(item)">{{ item.title }}</button><button v-if="props.admin" type="button" class="delete-material" :disabled="uploadBusy" :aria-label="`${item.title} löschen`" title="PDF löschen" @click="deleteError = ''; deleteTarget = item">×</button></div><label v-if="props.admin" class="upload-link">＋ PDF hochladen<input type="file" accept="application/pdf,.pdf" :disabled="uploadBusy" @change="uploadPdf($event, 'rueckblick')" /></label></nav></Panel></Panel>
        </Panel>
        <Panel :header="props.admin ? 'BPE 8 · Räumliche Darstellung' : 'Räumliche Darstellung'" toggleable collapsed>
          <Panel v-for="group in spatialGroups" :key="group.id" :header="props.admin ? `${group.id} · ${group.title}` : group.title" toggleable collapsed class="class-subpanel">
            <nav class="topic-links" :aria-label="group.title">
              <button v-if="group.id === '8.1'" type="button" :aria-pressed="selectedPdf?.number === 13" @click="selectPage({ number: 13, title: 'Projektion nach DIN ISO 5456', to: { name: '3tgg12-projektion-schritt', params: { step: 1 } } })">#13 Projektion nach DIN ISO 5456</button>
              <div v-for="item in uploadedMaterials.filter(material => material.topic === group.id)" :key="item.id" class="uploaded-row"><button type="button" class="uploaded-title" :aria-pressed="selectedPdf?.href === `${materialsEndpoint}?id=${item.id}`" @click="selectMaterial(item)">{{ item.title }}</button><button v-if="props.admin" type="button" class="delete-material" :disabled="uploadBusy" :aria-label="`${item.title} löschen`" title="PDF löschen" @click="deleteError = ''; deleteTarget = item">×</button></div>
              <span v-if="group.id !== '8.1' && !uploadedMaterials.some(material => material.topic === group.id) && !props.admin" class="topic-inactive">Noch keine Materialien vorhanden.</span>
              <label v-if="props.admin" class="upload-link">＋ PDF hochladen<input type="file" accept="application/pdf,.pdf" :disabled="uploadBusy" @change="uploadPdf($event, group.id)" /></label>
            </nav>
          </Panel>
        </Panel>
        </div>
        <div v-if="props.admin" class="topics-box teacher-box"><Panel header="Lehreransicht" toggleable collapsed><nav class="topic-links" aria-label="Lehreransicht"><button v-for="item in teacherItems" :key="item.href" type="button" :aria-pressed="selectedPdf?.href === item.href" @click="selectedPdf = { ...item, teacher: true }">{{ item.title }}</button></nav></Panel></div>
      </aside>
    </div>
    <Dialog :visible="!!deleteTarget" modal header="PDF löschen?" :style="{ width: 'min(440px, calc(100vw - 32px))' }" :closable="!uploadBusy" @update:visible="value => { if (!value && !uploadBusy) deleteTarget = null }"><p>„{{ deleteTarget?.title }}“ dauerhaft löschen? Das PDF verschwindet auch aus der Schüleransicht.</p><p v-if="deleteError" class="delete-error" role="alert">{{ deleteError }}</p><template #footer><Button label="Abbrechen" severity="secondary" outlined :disabled="uploadBusy" @click="deleteTarget = null" /><Button label="Löschen" severity="danger" :loading="uploadBusy" @click="deleteMaterial" /></template></Dialog>
  </main>
</template>

<style scoped>
.course-page { min-height: 100vh; box-sizing: border-box; padding: 32px; background: var(--school-background); color: var(--school-text); font-family: 'Jost', sans-serif; }
.course-layout { display: grid; grid-template-columns: minmax(270px, 340px) minmax(0, 1fr); gap: 24px; max-width: 1500px; margin: auto; align-items: start; }
.content-column,.topics-column { min-width: 0; }
.topics-column { grid-column: 1; grid-row: 1; }
.topics-column { align-self: start; display: flex; flex-direction: column; gap: 16px; }
.sidebar-heading { font-size: 17px; font-weight: 500; margin: 0 0 -8px; }
.topics-box { padding: 4px 8px; background: var(--school-surface); border: 1px solid var(--school-border); border-radius: var(--school-panel-radius); }
.topics-column :deep(.p-panel) { background: transparent; border: 0; border-radius: 0; box-shadow: none; }
.topics-box > :deep(.p-panel:not(:first-child)) { border-top: 1px solid var(--school-border); }
.topics-column :deep(.p-panel-header) { padding: 10px 12px; gap: 6px; }
.topics-column :deep(.p-panel-title) { font: 500 17px 'Jost', sans-serif; }
.topics-column :deep(.p-panel-content) { padding: 0 12px 12px; }
.topics-column :deep(.p-panel-toggle-button.p-button) { width: 32px; height: 32px; min-width: 32px; padding: 0; color: var(--school-primary); }
.topics-column :deep(.p-panel-toggle-button .p-button-icon) { width: 12px; height: 12px; }
.topics-column :deep(.class-subpanel .p-panel-header) { padding: 7px 9px; }
.topics-column :deep(.class-subpanel .p-panel-content) { padding: 0 9px 9px; }

.content-column { grid-column: 2; grid-row: 1; }
.course-header { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-bottom: 24px; }
.eyebrow { color: var(--school-primary); font-size: .78rem; font-weight: 600; letter-spacing: .12em; margin: 0 0 8px; }
h1 { font-size: clamp(2.2rem, 5vw, 3.25rem); font-weight: 500; line-height: 1.1; margin: 0; }
.intro { margin: 10px 0 0; opacity: .75; font-size: 1.1rem; }
.qr-link { flex: none; padding: 8px; background: #fff; border: 1px solid var(--school-border); border-radius: var(--school-panel-radius); }.qr-link img { display: block; width: 80px; height: 80px; }
.preview-panel,.topics-panel { background: var(--school-surface); border: 1px solid var(--school-border); border-radius: var(--school-panel-radius); }
.preview-panel :deep(.p-panel-header),.topics-panel :deep(.p-panel-header) { padding: 16px; gap: 10px; }
.preview-panel :deep(.p-panel-title),.topics-panel :deep(.p-panel-title) { font: 500 17px 'Jost', sans-serif; }
.preview-panel :deep(.p-panel-content),.topics-panel :deep(.p-panel-content) { padding: 0 16px 16px; }
.teacher-preview { display: block; width: 100%; height: 80vh; min-height: 500px; border: 1px solid var(--school-border); }
.open-link,.close-preview { color: var(--school-primary); font: inherit; font-size: 1.2rem; border: 0; background: transparent; text-decoration: none; cursor: pointer; padding: 4px 8px; }
.empty-preview { color: color-mix(in srgb, var(--school-text) 70%, var(--school-surface)); margin: 0; padding: 20px 0; }
.bpe-title { font-size: 1rem; line-height: 1.4; font-weight: 600; margin: 16px 0 4px; }
.topic-group { padding: 14px 0; border-bottom: 1px solid var(--school-border); }
h3 { font-size: 1rem; line-height: 1.35; font-weight: 500; margin: 0; }
.topic-group p { color: color-mix(in srgb, var(--school-text) 70%, var(--school-surface)); font-size: .88rem; line-height: 1.45; margin: 5px 0 10px; }
.topic-links { display: flex; flex-direction: column; align-items: stretch; gap: 2px; line-height: 1.5; }
.topic-links a,.topic-links button { display: block; padding: 6px 0; font-size: 16px; border: 0; background: none; text-align: left; font-family: inherit; color: var(--school-primary); text-decoration: none; overflow-wrap: anywhere; cursor: pointer; }
.topic-links a:hover,.topic-links button:hover { text-decoration: underline; text-underline-offset: 4px; }
.topic-links button[aria-pressed="true"] { font-weight: 600; }
.topic-links a:focus-visible,.topic-links button:focus-visible,.qr-link:focus-visible { outline: 2px solid var(--school-primary); outline-offset: 3px; }
.uploaded-row { display: flex; align-items: flex-start; gap: 8px; min-width: 0; }
.uploaded-row .uploaded-title { flex: 1; min-width: 0; }
.topic-links .delete-material { flex: none; padding: 4px 8px; color: var(--school-text); font-size: 20px; line-height: 1; }
.topic-links .delete-material:hover { color: #b42318; }
.delete-error { color: #b42318; }
.upload-link { color: var(--school-primary); cursor: pointer; padding: 6px 0; font-size: 16px; }
.upload-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.upload-link:focus-within { outline: 2px solid var(--school-primary); outline-offset: 3px; }
.upload-link input { position: absolute; width: 1px; height: 1px; opacity: 0; }
.upload-error { color: #a22c25; background: var(--school-surface); border: 1px solid var(--school-border); padding: 10px; margin: 0; font-size: .9rem; }
.topic-inactive { display: block; padding: 6px 0; font-size: 16px; color: color-mix(in srgb, var(--school-text) 48%, var(--school-surface)); overflow-wrap: anywhere; }.topic-inactive small { font-size: .85em; }
@media(max-width: 760px) { .course-page { padding: 20px 16px; } .course-layout { display: flex; flex-direction: column; } .content-column,.topics-column { width: 100%; } .topics-column { order: -1; } .course-header { margin-top: 8px; } }
</style>
