<script setup>
import { computed, nextTick, onActivated, onBeforeUnmount, onDeactivated, onMounted, reactive, ref, watch } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { PhCaretDown, PhCheckCircle } from '@phosphor-icons/vue'
import Checkbox from 'primevue/checkbox'
import Message from 'primevue/message'
import Panel from 'primevue/panel'
import RadioButton from 'primevue/radiobutton'
import Textarea from 'primevue/textarea'
import { classes, endings, templates, basicPreparationFields, basicPreparationContext, learningArrangements, socialForms, lessonDesignContext, makePrompt, initialForm, lessonDurations, distributeDuration } from './planning.js'
import { entryTemplates, perspectives, designPrompt, parseDesign, lessonText, reviewPrompt, parseReview } from './studio.js'
import { learningTheoryDocuments, theoryContext } from './learningTheories.js'
import { exampleDrafts, draftTitle, restoreHistory } from './draftHistory.js'
import { cognitiveGoalLevels, validCognitiveGoalIds, selectedCognitiveGoals, cognitiveGoalContext } from './cognitiveGoals.js'
import { affectiveGoalColumns, affectiveGoalRows, validAffectiveGoalIds, selectedAffectiveGoals, affectiveGoalContext } from './affectiveGoals.js'
import { outputDocuments, validOutputDocumentIds, outputDocumentContext, storyMappingTemplate, storyMappingInstruction, ensureStoryMappingPrompt } from './outputDocuments.js'
import MaterialsDialog from './MaterialsDialog.vue'
import StoryMappingBoard from './StoryMappingBoard.vue'
import { materialDocumentContext, restoreMaterialDocuments } from './materialDocuments.js'

const workflowStep = ref('goal')
const designMode = ref('new')
const arrangementDescriptions = {
  'Direkte Instruktion': 'Die Lehrkraft erklärt und demonstriert Inhalte; die Lernenden üben anschließend angeleitet und zunehmend selbstständig.',
  'Lernen durch Lehren': 'Lernende bereiten Inhalte auf und vermitteln sie anderen; dabei vertiefen sie ihr eigenes Verständnis.',
  'Selbstorganisiertes Lernen': 'Lernende planen und steuern ihre Arbeit innerhalb eines vorgegebenen Rahmens zunehmend selbstständig.',
  'Projektunterricht': 'Lernende bearbeiten über mehrere Schritte eine komplexe Fragestellung und erstellen ein Ergebnis oder Produkt.',
  'Planspiel': 'Lernende übernehmen Rollen und treffen Entscheidungen in einer nachgebildeten Situation.',
  'Fallstudie': 'Lernende untersuchen einen konkreten Fall, beurteilen ihn und entwickeln begründete Lösungen.',
  'Lernen aus Lösungsbeispielen': 'Lernende untersuchen ausgearbeitete Lösungswege und übertragen deren Prinzipien auf eigene Aufgaben.',
  'Angeleitetes Experimentieren': 'Lernende erkunden eine Fragestellung durch Versuche, die durch Hinweise oder Arbeitsaufträge unterstützt werden.'
}
const activeTheory = ref(null)
const theoryDialogOpen = ref(false)
const affectiveDialogOpen = ref(false)
const epaDialogOpen = ref(false)
const selectedAffectiveGoalIds = ref([])
const affectiveSelection = computed(() => selectedAffectiveGoals(selectedAffectiveGoalIds.value))
const cognitiveDialogOpen = ref(false)
const selectedCognitiveGoalIds = ref([])
const cognitiveSelection = computed(() => selectedCognitiveGoals(selectedCognitiveGoalIds.value))
const materialsDialogOpen = ref(false)
const materialDocuments = ref([])
function saveMaterials(value) { form.mediaMaterials = value.text; materialDocuments.value = value.documents }
const selectedOutputDocumentIds = ref([])
const selectedTheoryIds = ref([])
const theoryDocuments = computed(() => learningTheoryDocuments.map(item => ({ ...item, selected: selectedTheoryIds.value.includes(item.id) })))
const learningTheoryText = computed(() => theoryContext(theoryDocuments.value))
const storageKey = 'school-lesson-builder-v1'
const form = reactive(initialForm())

const classIds = ref([])
const entryIds = ref(['problem'])
const skillOverride = ref(null)
const activityOverride = ref(null)
const promptDialogOpen = ref(false)
const promptOverride = ref(null)
const promptStale = ref(false)
const phases = reactive({ entry: null, main: null, end: null })
const notes = ref('')
const lessonDraft = ref('')
const draftHistory = ref(exampleDrafts())
const activeDraftId = ref('')
const legacyDraft = ref('')
const rawResponse = ref('')
const selectedPerspectives = ref(['students'])
const expandedPerspectives = ref([])
function togglePerspective(id) {
  expandedPerspectives.value = expandedPerspectives.value.includes(id)
    ? expandedPerspectives.value.filter(item => item !== id)
    : [...expandedPerspectives.value, id]
}
const reviews = reactive({})
const reviewSources = reactive({})
const jobId = ref('')
const jobType = ref('design')
const jobPerspectives = ref([])
const jobSource = ref('')
const busy = ref(false)
const error = ref('')
const storageError = ref('')
const service = ref('checking')
const centerHeading = ref(null)
let pollTimer
let disposed = false
let ready = false
let pollInFlight = false
const apiRoot = '/__local-unterricht/'
watch(classIds, ids => { form.classId = ids[0] || '' }, { flush: 'sync' })
watch(entryIds, ids => { form.entry = ids[0] || 'problem' }, { flush: 'sync' })
const zienernInstructions = `Zienere das folgende Lernziel. Leite daraus ab, welche konkreten Teilfähigkeiten jemand benötigt, um das übergeordnete Lernziel zu erreichen. Formuliere jeden Punkt als kurzen Satz nach dem Muster „Jemand, der … kann, muss …“. Zerlege unterschiedliche Anforderungen des Hauptziels getrennt. Beschreibe die benötigten Fähigkeiten, keine Aufgaben oder Lernnachweise. Erhalte alle Anforderungen des Hauptziels und passe den Inhalt an das aktuelle Lernziel an.\n\nBeispiele für die Form:\n- Jemand, der vier Kontrasttypen nennen kann, muss ihre Bezeichnungen kennen und aus dem Gedächtnis abrufen können.\n- Jemand, der vier Kontrasttypen auf die Gestaltung von Mode anwenden kann, muss die Wirkung der einzelnen Kontraste erklären und passende Farben für eine beabsichtigte Wirkung auswählen können.\n\nGib ausschließlich die Merkmale als bearbeitbare Liste aus.`
const automaticPrompt = computed(() => {
  if (workflowStep.value === 'goal') return `Formuliere ein konkretes, überprüfbares Lernziel auf Deutsch. Gib ausschließlich das Lernziel aus.\n\n${basicPreparationContext(form)}\nKlasse: ${classes.filter(item => classIds.value.includes(item.id)).map(item => item.label).join(', ') || 'nicht angegeben'}`
  if (workflowStep.value === 'features') return `Zienere das folgende Lernziel und gib die Merkmale als bearbeitbare Liste aus.\n\n${basicPreparationContext(form)}\nLernziel: ${form.goal}`
  if (workflowStep.value === 'lesson') return `Schlage passend zu den folgenden Vorgaben jeweils genau einen Einstieg, ein Lehr-Lern-Arrangement und eine Sozialform vor. Erstelle kein Storymapping. Antworte ausschließlich mit einem JSON-Objekt ohne Markdown: {"entry": "ID", "arrangement": "Name", "socialForm": "ID"}. Wähle entry ausschließlich aus ${entryTemplates.map(item => `${item.id} (${item.label}: ${item.description})`).join('; ')}; arrangement ausschließlich aus ${learningArrangements.join(', ')}; socialForm ausschließlich aus ${socialForms.map(item => `${item.id} (${item.label})`).join(', ')}.\n\n${basicPreparationContext(form)}\nKlasse: ${classes.filter(item => classIds.value.includes(item.id)).map(item => item.label).join(', ') || 'nicht angegeben'}\nLernziel: ${form.goal}\nMerkmale: ${form.evidence || 'keine angegeben'}\nVorgaben: ${form.requirements || 'keine angegeben'}${cognitiveGoalContext(selectedCognitiveGoalIds.value)}${affectiveGoalContext(selectedAffectiveGoalIds.value)}${learningTheoryText.value}\nUnterrichtsdauer: ${totalMinutes.value} Minuten.`
  return designPrompt(makePrompt({ ...form, zienern: false }) + (form.evidence.trim() ? `\nZu berücksichtigende Merkmale des Lernziels:\n${form.evidence.trim()}\n` : '') + materialDocumentContext(materialDocuments.value) + cognitiveGoalContext(selectedCognitiveGoalIds.value) + affectiveGoalContext(selectedAffectiveGoalIds.value) + outputDocumentContext(selectedOutputDocumentIds.value).replace(storyMappingInstruction, '').trim() + learningTheoryText.value + (designMode.value === 'adapt' && lessonDraft.value.trim() ? `\n\nPasse das folgende bestehende Storymapping anhand der aktuellen Vorgaben an. Erhalte passende Inhalte und gib das vollständige aktualisierte Storymapping aus:\n${lessonDraft.value}` : ''), classIds.value, entryIds.value)
})
const prompt = computed({ get: () => workflowStep.value === 'design' ? (promptOverride.value ?? automaticPrompt.value).replace(storyMappingInstruction, '').trim() : (promptOverride.value ?? automaticPrompt.value), set: value => { promptOverride.value = value } })
const totalMinutes = computed(() => Number(form.entryMinutes) + Number(form.mainMinutes) + Number(form.endMinutes))
const validTimes = computed(() => [form.entryMinutes, form.mainMinutes, form.endMinutes].every(value => Number.isInteger(value) && value > 0 && value <= 240))
const hasDesign = computed(() => Boolean(lessonDraft.value.trim()))
const currentSource = computed(() => JSON.stringify({ classes: classIds.value, topic: form.topic, priorKnowledge: form.priorKnowledge, connections: form.connections, topicScope: form.topicScope, goal: form.goal, evidence: form.evidence, requirements: form.requirements, zienern: form.zienern, arrangement: form.arrangement, mediaMaterials: form.mediaMaterials, materialDocuments: materialDocuments.value, socialForm: form.socialForm, cognitiveGoals: selectedCognitiveGoalIds.value, affectiveGoals: selectedAffectiveGoalIds.value, outputDocuments: selectedOutputDocumentIds.value, theories: learningTheoryText.value, times: [form.entryMinutes, form.mainMinutes, form.endMinutes], draft: lessonDraft.value }))
const fullPrompt = computed(() => workflowStep.value === 'features' ? `${prompt.value}\n\n${zienernInstructions}` : workflowStep.value === 'design' ? ensureStoryMappingPrompt(prompt.value) : prompt.value)
const promptTooLarge = computed(() => new TextEncoder().encode(fullPrompt.value).length > 60_000)
const canSend = computed(() => (workflowStep.value === 'goal' ? form.topic.trim() : ['features', 'lesson'].includes(workflowStep.value) ? form.goal.trim() : classIds.value.length && form.goal.trim() && validTimes.value) && !promptTooLarge.value && prompt.value.trim() && !promptStale.value && !busy.value && !jobId.value && service.value === 'ready')
const canReview = computed(() => hasDesign.value && selectedPerspectives.value.length && !busy.value && !jobId.value && service.value === 'ready')
const phasesLocked = computed(() => busy.value && jobType.value === 'design')
watch(automaticPrompt, () => { if (promptOverride.value !== null) promptStale.value = true })
function chooseDuration(minutes) {
  const times = distributeDuration(minutes, [form.entryMinutes, form.mainMinutes, form.endMinutes])
  if (times) [form.entryMinutes, form.mainMinutes, form.endMinutes] = times
}
function setStep(step) { if (busy.value || jobId.value) return; workflowStep.value = step; refreshPrompt() }
function chooseDesignMode(mode) { if (busy.value || jobId.value) return; designMode.value = mode; setStep('design') }
function startNewGoal() {
  if (busy.value || jobId.value) return
  archiveDraft()
  form.evidence = ''
  form.zienern = false
  lessonDraft.value = ''
  activeDraftId.value = ''
  rawResponse.value = ''
  designMode.value = 'new'
  setStep('goal')
}
function startLessonSuggestion() {
  if (busy.value || jobId.value) return
  archiveDraft()
  lessonDraft.value = ''
  activeDraftId.value = ''
  rawResponse.value = ''
  designMode.value = 'new'
  setStep('lesson')
}
function refreshPrompt() { promptOverride.value = null; promptStale.value = false }
function isReviewStale(id) { return Boolean(reviews[id]) && reviewSources[id] !== currentSource.value }
function save() {
  if (!ready) return
  try {
    localStorage.setItem(storageKey, JSON.stringify({
      version: 2, draftHistory: draftHistory.value, activeDraftId: activeDraftId.value, materialDocuments: materialDocuments.value, selectedOutputDocumentIds: selectedOutputDocumentIds.value, selectedAffectiveGoalIds: selectedAffectiveGoalIds.value, selectedCognitiveGoalIds: selectedCognitiveGoalIds.value, selectedTheoryIds: selectedTheoryIds.value, form: { ...form }, workflowStep: workflowStep.value, classIds: classIds.value, entryIds: entryIds.value,
      skills: skillOverride.value, activity: activityOverride.value, prompt: promptOverride.value, promptStale: promptStale.value,
      lessonDraft: lessonDraft.value, phases: { ...phases }, notes: notes.value, legacyDraft: legacyDraft.value, rawResponse: rawResponse.value,
      selectedPerspectives: selectedPerspectives.value, reviews: { ...reviews }, reviewSources: { ...reviewSources },
      jobId: jobId.value, jobType: jobType.value, jobPerspectives: jobPerspectives.value, jobSource: jobSource.value
    }))
    storageError.value = ''
  } catch { storageError.value = 'Die Eingaben können in diesem Browser nicht gespeichert werden. Kopiere deinen Entwurf vor dem Schließen, um ihn zu sichern.' }
}
watch([workflowStep, materialDocuments, selectedOutputDocumentIds, selectedAffectiveGoalIds, selectedCognitiveGoalIds, draftHistory, activeDraftId, selectedTheoryIds, form, classIds, entryIds, skillOverride, activityOverride, promptOverride, promptStale, lessonDraft, phases, notes, legacyDraft, rawResponse, selectedPerspectives, reviews, reviewSources, jobId, jobType, jobPerspectives, jobSource], save, { deep: true })
const draftToDelete = ref(null)
const deleteDraftDialogOpen = ref(false)
function requestDeleteDraft(record) {
  draftToDelete.value = record
  deleteDraftDialogOpen.value = true
}
function deleteDraft() {
  if (busy.value || !draftToDelete.value) return
  const record = draftToDelete.value
  if (activeDraftId.value === record.id) {
    lessonDraft.value = ''
    activeDraftId.value = ''
    rawResponse.value = ''
  }
  if (legacyDraft.value.trim() === record.text.trim()) legacyDraft.value = ''
  draftHistory.value = draftHistory.value.filter(item => item.id !== record.id)
  deleteDraftDialogOpen.value = false
  draftToDelete.value = null
  save()
}
function archiveDraft() {
  if (!ready || !lessonDraft.value.trim()) return
  if (!activeDraftId.value) activeDraftId.value = crypto.randomUUID()
  const existing = draftHistory.value.find(item => item.id === activeDraftId.value)
  if (existing?.text === lessonDraft.value) return
  const record = {
    id: activeDraftId.value, title: draftTitle(lessonDraft.value, form.goal), text: lessonDraft.value,
    isExample: false, form: { ...form }, classIds: [...classIds.value], entryIds: [...entryIds.value],
    selectedTheoryIds: [...selectedTheoryIds.value], selectedCognitiveGoalIds: [...selectedCognitiveGoalIds.value], selectedAffectiveGoalIds: [...selectedAffectiveGoalIds.value], selectedOutputDocumentIds: [...selectedOutputDocumentIds.value], materialDocuments: materialDocuments.value.map(item => ({ ...item })), updatedAt: new Date().toISOString()
  }
  if (existing) Object.assign(existing, record)
  else draftHistory.value.unshift(record)
}
watch(lessonDraft, archiveDraft, { flush: 'sync' })
async function openDraft(record) {
  if (busy.value) return
  archiveDraft()
  // Restore the selected draft before enabling automatic updates of its history entry.
  ready = false
  activeDraftId.value = record.id
  Object.assign(form, initialForm())
  if (record.form) for (const key of Object.keys(form)) if (typeof record.form[key] === typeof form[key]) form[key] = record.form[key]
  classIds.value = (record.classIds || []).filter(id => classes.some(item => item.id === id))
  entryIds.value = (record.entryIds || []).filter(id => entryTemplates.some(item => item.id === id))
  selectedTheoryIds.value = (record.selectedTheoryIds || []).filter(id => learningTheoryDocuments.some(item => item.id === id))
  materialDocuments.value = restoreMaterialDocuments(record.materialDocuments)
  selectedOutputDocumentIds.value = validOutputDocumentIds(record.selectedOutputDocumentIds)
  selectedAffectiveGoalIds.value = validAffectiveGoalIds(record.selectedAffectiveGoalIds)
  selectedCognitiveGoalIds.value = validCognitiveGoalIds(record.selectedCognitiveGoalIds)
  lessonDraft.value = record.text
  promptOverride.value = null
  await nextTick()
  promptStale.value = false
  ready = true
  save()
}
async function request(endpoint, options = {}) {
  const response = await fetch(apiRoot + endpoint, { ...options, signal: AbortSignal.timeout(15_000) })
  const type = response.headers.get('content-type') || ''
  if (!type.includes('application/json')) throw new Error('Der lokale Dienst ist nicht erreichbar. Starte die Schulwebsite mit „npm run serve“ im Ordner „schule“.')
  const data = await response.json()
  if (!response.ok) throw Object.assign(new Error(data.error || 'Die Anfrage konnte nicht verarbeitet werden.'), { status: response.status })
  return data
}
async function checkService() {
  service.value = 'checking'
  try { service.value = (await request('status')).available ? 'ready' : 'missing' }
  catch { service.value = 'offline' }
}
function schedulePoll() { clearTimeout(pollTimer); if (!disposed) pollTimer = setTimeout(poll, 1500) }
async function poll() {
  if (disposed || !jobId.value || pollInFlight) return
  pollInFlight = true
  try {
    const job = await request(`jobs/${jobId.value}`)
    if (disposed) return
    if (job.status === 'running') return
    busy.value = false
    jobId.value = ''
    if (job.status !== 'completed') { error.value = job.error || 'Codex konnte den Auftrag nicht abschließen.'; return }
    try {
      if (jobType.value === 'goal') {
        form.goal = job.result.trim(); refreshPrompt()
      } else if (jobType.value === 'features') {
        form.evidence = job.result.trim(); form.zienern = true; refreshPrompt()
      } else if (jobType.value === 'lesson') {
        const result = JSON.parse(job.result.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, ''))
        if (!entryTemplates.some(item => item.id === result.entry) || !learningArrangements.includes(result.arrangement) || !socialForms.some(item => item.id === result.socialForm)) throw new Error('Ungültiger Unterrichtsvorschlag')
        entryIds.value = [result.entry]
        form.arrangement = result.arrangement
        form.socialForm = result.socialForm
        refreshPrompt()
      } else if (jobType.value === 'review') {
        const result = parseReview(job.result, jobPerspectives.value)
        Object.assign(reviews, result)
        for (const id of Object.keys(result)) reviewSources[id] = jobSource.value
      } else {
        activeDraftId.value = job.id || crypto.randomUUID()
        // Accept an in-flight response from the previous format without losing its content.
        try { const old = parseDesign(job.result); lessonDraft.value = lessonText(form, old, old.notes) }
        catch { lessonDraft.value = job.result }
        await nextTick()
        centerHeading.value?.focus()
      }
      rawResponse.value = ''; error.value = ''
    } catch {
      rawResponse.value = job.result
      error.value = 'Die Antwort konnte nicht automatisch aufgeteilt werden. Deine bisherigen Texte bleiben erhalten; die vollständige Antwort findest du in der Mitte unter „Antwort im Original“.'
    }
  } catch (cause) {
    if (disposed) return
    busy.value = false
    if (cause.status === 404) { jobId.value = ''; error.value = cause.message }
    else error.value = `${cause.message} Du kannst den laufenden Auftrag erneut abrufen.`
  } finally { pollInFlight = false; if (!disposed && jobId.value && busy.value) schedulePoll() }
}
async function resumeJob() { if (jobId.value) { busy.value = true; error.value = ''; await poll() } }
async function submit(type) {
  if ((type !== 'review' && !canSend.value) || (type === 'review' && !canReview.value)) return
  jobType.value = type
  jobPerspectives.value = [...selectedPerspectives.value]
  jobSource.value = currentSource.value
  const submittedPrompt = type === 'review' ? reviewPrompt(form, classIds.value, lessonDraft.value, '', jobPerspectives.value) + '\n\n' + basicPreparationContext(form) + '\n' + lessonDesignContext(form) + materialDocumentContext(materialDocuments.value) + cognitiveGoalContext(selectedCognitiveGoalIds.value) + affectiveGoalContext(selectedAffectiveGoalIds.value) + outputDocumentContext(selectedOutputDocumentIds.value, { review: true }) + learningTheoryText.value : fullPrompt.value
  if (new TextEncoder().encode(submittedPrompt).length > 60_000) { error.value = 'Der Auftrag ist zu lang. Bitte weniger Dokumente auswählen oder kürzere Auszüge verwenden.'; return }
  busy.value = true; error.value = ''
  try {
    const job = await request('jobs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: submittedPrompt }) })
    jobId.value = job.id
    save(); schedulePoll()
  } catch (cause) { busy.value = false; error.value = cause.message }
}
const promptInput = ref(null)
async function resizePrompt() {
  await nextTick()
  const element = promptInput.value?.$el
  if (!element?.offsetParent) return
}
watch(prompt, resizePrompt, { flush: 'post' })
onMounted(async () => {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null')
    if (saved?.form) {
      workflowStep.value = ['goal', 'features', 'lesson', 'design'].includes(saved.workflowStep) ? saved.workflowStep : (saved.form.goal ? 'design' : 'goal')
      materialDocuments.value = restoreMaterialDocuments(saved.materialDocuments)
      selectedOutputDocumentIds.value = validOutputDocumentIds(saved.selectedOutputDocumentIds)
      selectedAffectiveGoalIds.value = validAffectiveGoalIds(saved.selectedAffectiveGoalIds)
      selectedCognitiveGoalIds.value = validCognitiveGoalIds(saved.selectedCognitiveGoalIds)
      draftHistory.value = restoreHistory(saved.draftHistory)
      activeDraftId.value = typeof saved.activeDraftId === 'string' && draftHistory.value.some(item => item.id === saved.activeDraftId) ? saved.activeDraftId : ''
      selectedTheoryIds.value = Array.isArray(saved.selectedTheoryIds)
        ? saved.selectedTheoryIds.filter(id => learningTheoryDocuments.some(item => item.id === id))
        : []
      const defaults = initialForm()
      for (const key of Object.keys(defaults)) if (typeof saved.form[key] === typeof defaults[key]) form[key] = saved.form[key]
      classIds.value = (Array.isArray(saved.classIds) ? saved.classIds : [form.classId]).filter(id => classes.some(item => item.id === id))
      entryIds.value = (Array.isArray(saved.entryIds) ? saved.entryIds : [form.entry]).filter(id => entryTemplates.some(item => item.id === id))
      if (!endings.some(item => item.value === form.ending)) form.ending = 'return'
      if (!templates.some(item => item.value === form.template)) form.template = 'auto'
      skillOverride.value = typeof saved.skills === 'string' ? saved.skills : null
      activityOverride.value = typeof saved.activity === 'string' ? saved.activity : null
      // Keep the former full draft and old manual prompt available after the layout migration.
      legacyDraft.value = typeof saved.legacyDraft === 'string' ? saved.legacyDraft : typeof saved.draft === 'string' ? saved.draft : ''
      if (saved.version === 2) {
        for (const id of ['entry', 'main', 'end']) phases[id] = typeof saved.phases?.[id] === 'string' ? saved.phases[id] : null
        promptOverride.value = typeof saved.prompt === 'string' && !/Teilfähigkeiten, die in der Stunde|Ausgabeformat für die drei bearbeitbaren Bereiche|Unterrichtsstruktur \(/.test(saved.prompt) ? saved.prompt : null
        notes.value = typeof saved.notes === 'string' ? saved.notes : ''
        lessonDraft.value = typeof saved.lessonDraft === 'string' ? saved.lessonDraft : ['entry', 'main', 'end'].every(id => typeof phases[id] === 'string' && phases[id].trim()) ? lessonText(form, phases, notes.value) : ''
        rawResponse.value = typeof saved.rawResponse === 'string' ? saved.rawResponse : ''
        selectedPerspectives.value = Array.isArray(saved.selectedPerspectives) ? saved.selectedPerspectives.filter(id => perspectives.some(item => item.id === id)) : ['students']
        for (const item of perspectives) {
          if (typeof saved.reviews?.[item.id] === 'string') reviews[item.id] = saved.reviews[item.id]
          if (typeof saved.reviewSources?.[item.id] === 'string') reviewSources[item.id] = saved.reviewSources[item.id]
        }
      } else if (typeof saved.prompt === 'string') {
        legacyDraft.value += `\n\n## Bisheriger manueller Prompt\n\n${saved.prompt}`
      }
      jobId.value = /^[a-f0-9-]{36}$/.test(saved.jobId) ? saved.jobId : ''
      jobType.value = ['review', 'goal', 'features', 'lesson'].includes(saved.jobType) ? saved.jobType : 'design'
      jobPerspectives.value = Array.isArray(saved.jobPerspectives) ? saved.jobPerspectives.filter(id => perspectives.some(item => item.id === id)) : []
      jobSource.value = typeof saved.jobSource === 'string' ? saved.jobSource : ''
      await nextTick(); promptStale.value = promptOverride.value !== null && Boolean(saved.promptStale)
    }
  } catch { storageError.value = 'Die gespeicherten Eingaben konnten nicht vollständig geladen werden.' }
  ready = true
  archiveDraft()
  if (legacyDraft.value.trim() && !draftHistory.value.some(item => item.text === legacyDraft.value)) {
    draftHistory.value.push({ id: crypto.randomUUID(), title: 'Bisheriger Unterrichtsentwurf', text: legacyDraft.value, isExample: false })
  }
  save()
  await checkService()
  if (jobId.value) await resumeJob()
})
onActivated(() => { disposed = false; if (ready && jobId.value) resumeJob() })
onDeactivated(() => { disposed = true; clearTimeout(pollTimer); save() })
onBeforeUnmount(() => { disposed = true; clearTimeout(pollTimer); save() })
</script>

<template>
  <main class="builder-page">
    <div class="builder-shell">
      <RouterLink to="/" class="back">← Unterricht planen</RouterLink>
      <header class="page-header"><div><p class="eyebrow">UNTERRICHT PLANEN</p><h1>Unterrichtsbaukasten</h1></div></header>
      <Message v-if="storageError" severity="warn" :closable="false">{{ storageError }}</Message>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
      <div v-if="busy" class="job-status" role="status">{{ jobType === 'review' ? 'Codex prüft den aktuellen Unterrichtsentwurf aus den ausgewählten Sichtweisen …' : 'Codex bearbeitet deinen aktuellen Auftrag …' }}</div>
      <Button v-if="jobId && !busy" label="Auftrag erneut abrufen" outlined @click="resumeJob" />

      <div class="builder-columns">
        <section class="prerequisites column"><div class="column-heading"><p class="eyebrow">01 · GRUNDLAGE</p><h2>Grundsätzliches klären</h2></div>
          <Panel header="Lehrpläne" toggleable collapsed class="choice-panel">
            <nav class="lesson-plan-links" aria-label="Lehrpläne">
              <a href="/lehrplaene/Lehrplan_GMT.pdf" target="_blank" rel="noopener noreferrer">Lehrplan GMT (PDF) ↗</a>
              <a href="/lehrplaene/Lehrplan_BKGD.pdf" target="_blank" rel="noopener noreferrer">Lehrplan BKGD (PDF) ↗</a>
              <a href="/lehrplaene/Lehrplan_BFS_Drucktechnik_Medientechnik.pdf" target="_blank" rel="noopener noreferrer">Lehrplan BFS – Drucktechnik / Medientechnik (PDF) ↗</a>
            </nav>
          </Panel>
          <Panel header="Klasse" toggleable collapsed class="choice-panel">
            <div class="choice-list"><div v-for="item in classes" :key="item.id" class="checkbox-row"><Checkbox v-model="classIds" :input-id="`class-${item.id}`" :value="item.id" /><label :for="`class-${item.id}`">{{ item.label }}</label></div></div>
          </Panel>
          <p class="selection-note">{{ classes.filter(item => classIds.includes(item.id)).map(item => item.label).join(', ') || 'Noch keine Klasse ausgewählt' }}</p>
          <div v-for="field in basicPreparationFields" :key="field.key" class="field">
            <label :for="`preparation-${field.key}`">{{ field.label }}</label>
            <Textarea :id="`preparation-${field.key}`" v-model="form[field.key]" rows="3" auto-resize />
          </div>
          <Button label="Lernziel vorschlagen" class="goal-suggestion-button" @click="startNewGoal" />
        </section>
        <section class="prerequisites column"><div class="column-heading"><p class="eyebrow">02 · LERNZIEL</p><h2>Didaktisch vorbereiten</h2></div>
            <div class="field"><label for="learning-goal">Was sollen die SuS am Ende können?</label><Textarea id="learning-goal" v-model="form.goal" rows="5" auto-resize /><Button label="Merkmale vorschlagen" class="goal-suggestion-button" @click="setStep('features')" /></div>
            <div class="field"><label for="lesson-requirements">Vorgaben</label><Textarea id="lesson-requirements" v-model="form.requirements" rows="4" auto-resize /></div>
              <div class="field cognitive-choice">
                <Button label="Kognitive Lernziele" text class="theory-trigger" aria-haspopup="dialog" @click="cognitiveDialogOpen = true" />
                <ul v-if="cognitiveSelection.length" class="cognitive-selection"><li v-for="goal in cognitiveSelection" :key="goal.id">{{ goal.level }} – {{ goal.text }}</li></ul>
              </div>
              <div class="field cognitive-choice">
                <Button label="Affektive Lernziele" text class="theory-trigger" aria-haspopup="dialog" @click="affectiveDialogOpen = true" />
                <ul v-if="affectiveSelection.length" class="cognitive-selection"><li v-for="goal in affectiveSelection" :key="goal.id">{{ goal.category }} – {{ goal.text }}</li></ul>
              </div>
              <div class="field cognitive-choice"><Button label="EPA Anforderungsbereiche" text class="theory-trigger" aria-haspopup="dialog" @click="epaDialogOpen = true" /></div>
          <div class="field"><label for="goal-features">Merkmale des Lernziels</label><Textarea id="goal-features" v-model="form.evidence" rows="5" auto-resize placeholder="Merkmale vorschlagen lassen oder selbst bearbeiten" /></div>
          <div class="actions"><Button label="Unterricht vorschlagen" class="goal-suggestion-button" @click="startLessonSuggestion" /></div>
        </section>
        <section class="prerequisites column"><div class="column-heading"><p class="eyebrow">03 · GESTALTUNG</p><h2>Unterricht gestalten</h2></div>
            <Panel header="Lerntheorien" toggleable collapsed class="choice-panel">
              <div v-for="document in learningTheoryDocuments" :key="document.id" class="theory-document">
                <div class="checkbox-row">
                  <Checkbox v-model="selectedTheoryIds" :input-id="`theory-${document.id}`" :value="document.id" :aria-label="`${document.name} bei der Planung verwenden`" />
                  <Button v-if="document.summary" :label="document.name" text class="theory-trigger" @click="activeTheory = document; theoryDialogOpen = true" />
                  <a v-else :href="document.href" target="_blank" rel="noopener noreferrer">{{ document.name }}</a>
                </div>
              </div>
            </Panel>
            <Panel header="Unterrichtsdauer" toggleable collapsed class="choice-panel">
              <div class="choice-list">
                <div v-for="minutes in lessonDurations" :key="minutes" class="checkbox-row">
                  <Checkbox :input-id="`duration-${minutes}`" :model-value="totalMinutes === minutes" binary @update:model-value="selected => { if (selected) chooseDuration(minutes) }" />
                  <label :for="`duration-${minutes}`">{{ minutes }} Minuten</label>
                </div>
              </div>
              <p class="help">Die Zeit wird anteilig auf die drei Phasen verteilt.</p>
            </Panel>
            <p class="selection-note">{{ totalMinutes }} Minuten</p>
            <Panel header="Einstieg" toggleable collapsed class="choice-panel">
              <div v-for="item in entryTemplates" :key="item.id" class="entry-choice"><div class="checkbox-row"><Checkbox v-model="entryIds" :input-id="`entry-${item.id}`" :value="item.id" :aria-label="`${item.label} auswählen`" /><Button :label="item.label" text class="theory-trigger" @click="activeTheory = { title: item.title, summary: item.description, custom: true }; theoryDialogOpen = true" /></div></div>
            </Panel>
            <p class="selection-note">{{ entryTemplates.filter(item => entryIds.includes(item.id)).map(item => item.label).join(', ') || 'Einstieg frei vorschlagen lassen' }}</p>
            <Panel header="Lehr-Lern-Arrangement" toggleable collapsed class="choice-panel">
              <div class="choice-list"><div v-for="(arrangement, index) in learningArrangements" :key="arrangement" class="checkbox-row">
                <Checkbox :input-id="`arrangement-${index}`" :model-value="form.arrangement === arrangement" binary :aria-label="`${arrangement} auswählen`" @update:model-value="selected => { form.arrangement = selected ? arrangement : '' }" />
                <Button :label="arrangement" text class="theory-trigger" aria-haspopup="dialog" @click="activeTheory = { title: arrangement, summary: arrangementDescriptions[arrangement], custom: true }; theoryDialogOpen = true" />
              </div></div>
            </Panel>
            <p class="selection-note">{{ form.arrangement || 'Noch kein Arrangement ausgewählt' }}</p>
            <div class="field"><div class="preparation-action"><Button label="Medien/Material" outlined class="preparation-button" aria-haspopup="dialog" @click="materialsDialogOpen = true" /><PhCheckCircle v-if="form.mediaMaterials.trim() || materialDocuments.length" :size="20" weight="fill" class="preparation-complete" aria-label="Medien/Material hinterlegt" role="img" /></div></div>
            <Panel header="Sozialform" toggleable collapsed class="choice-panel">
              <div class="choice-list"><div v-for="item in socialForms" :key="item.id" class="checkbox-row"><RadioButton v-model="form.socialForm" :input-id="`social-${item.id}`" name="social-form" :value="item.id" /><label :for="`social-${item.id}`">{{ item.label }}</label></div></div>
            </Panel>
            <p class="selection-note">{{ socialForms.find(item => item.id === form.socialForm)?.label || 'Noch keine Sozialform ausgewählt' }}</p>
          <Panel header="Ausgabedokumente" toggleable collapsed class="choice-panel">
            <p class="help">Der Unterricht wird immer als Storymapping ausgegeben. Dokumente und Links werden direkt in der jeweiligen Subtask verlinkt.</p>
            <p class="help"><a :href="storyMappingTemplate.href" target="_blank" rel="noopener noreferrer">Vorlage Storymapping</a></p>
            <div class="choice-list">
              <div v-for="document in outputDocuments" :key="document.id" class="checkbox-row theory-document">
                <Checkbox v-model="selectedOutputDocumentIds" :input-id="`output-${document.id}`" :value="document.id" :aria-label="`${document.name} erstellen`" />
                <a :href="document.href" target="_blank" rel="noopener noreferrer">{{ document.name }}</a>
              </div>
            </div>
          </Panel>
          <p class="selection-note">{{ outputDocuments.filter(document => selectedOutputDocumentIds.includes(document.id)).map(document => document.name).join(', ') || 'Keine zusätzlichen Ausgabedokumente ausgewählt' }}</p>
          <div class="actions"><Button label="Storymapping vorschlagen" class="goal-suggestion-button" @click="chooseDesignMode('new')" /></div>
        </section>
        <aside class="proposal column"><div class="column-heading"><p class="eyebrow">AKTUELLER AUFTRAG</p><div class="prompt-heading"><h2>Prompt</h2><Button label="› Prompt öffnen" outlined size="small" aria-haspopup="dialog" @click="promptDialogOpen = true" /></div></div>
          <Dialog v-model:visible="promptDialogOpen" header="Aktueller Prompt" modal dismissable-mask :style="{ width: 'min(780px, calc(100vw - 32px))' }">
            <label for="lesson-prompt" class="sr-only">Bearbeitbarer Prompt für Codex</label><Textarea id="lesson-prompt" ref="promptInput" v-model="prompt" rows="12" class="prompt-input" style="width: 100%; box-sizing: border-box; min-height: 240px; max-height: 50vh; overflow-y: auto; resize: vertical;" />
            <details v-if="workflowStep === 'features'" class="zienern-details"><summary>Vorgaben zum Zienern anzeigen</summary><p>{{ zienernInstructions }}</p><p class="help">Diese Vorgaben werden zusammen mit dem Prompt gesendet.</p></details>
            <details v-if="workflowStep === 'design'" class="zienern-details"><summary>Story Mapping</summary><p>{{ storyMappingInstruction }}</p><p class="help">Diese Vorgaben werden zusammen mit dem Prompt gesendet.</p></details>
            <Message v-if="promptStale" severity="warn" :closable="false">Die Vorgaben haben sich geändert. Aktualisiere den Prompt (ersetzt manuelle Änderungen) oder prüfe und behalte deinen manuellen Prompt.</Message>
            <div class="actions"><Button v-if="promptOverride !== null" label="Aus Eingaben aktualisieren" size="small" outlined @click="refreshPrompt" /><Button v-if="promptStale" label="Manuellen Prompt beibehalten" size="small" outlined @click="promptStale = false" /></div>
          </Dialog>
          <Message v-if="promptStale" severity="warn" :closable="false">Die Vorgaben haben sich geändert. Bitte öffne und prüfe den Prompt.</Message>
          <div class="prompt-actions"><Button :label="workflowStep === 'goal' ? 'Lernziel vorschlagen' : workflowStep === 'features' ? 'Merkmale vorschlagen' : workflowStep === 'lesson' ? 'Unterricht vorschlagen' : (designMode === 'adapt' ? 'Storymapping anpassen' : 'Storymapping erzeugen')" :loading="busy && jobType === workflowStep" :disabled="!canSend" @click="submit(workflowStep)" />
              <div class="design-status"><p v-if="workflowStep === 'goal' && !form.topic.trim()" class="help">Ergänze zuerst das Thema.</p><p v-else-if="(workflowStep === 'features' || workflowStep === 'lesson') && !form.goal.trim()" class="help">Ergänze zuerst das Lernziel.</p><p v-else-if="workflowStep === 'design' && (!classIds.length || !form.goal.trim())" class="help">Wähle mindestens eine Klasse und ergänze das Lernziel.</p><Message v-if="!validTimes" severity="warn" :closable="false">Je Phase sind 1 bis 240 ganze Minuten möglich.</Message><span v-if="service === 'ready'" class="service-status">Lokaler Dienst bereit</span><template v-else><p class="help">{{ service === 'checking' ? 'Verbindung wird geprüft …' : service === 'missing' ? 'Codex wurde lokal nicht gefunden.' : 'Für die Generierung die Website lokal mit „npm run serve“ öffnen.' }}</p><Button label="Verbindung prüfen" text size="small" @click="checkService" /></template></div>
            </div>
        </aside>
      </div>
      <section class="mapping-section" aria-labelledby="proposal-heading"><div class="column-heading"><p class="eyebrow">STUNDENENTWURF</p><h2 id="proposal-heading" ref="centerHeading" tabindex="-1">Aktuelles Storymapping</h2></div>
        <p v-if="!lessonDraft" class="help">Hier erscheint dein Storymapping, sobald es erzeugt wurde.</p>
          <Panel header="Vergangene Unterrichtsentwürfe" toggleable collapsed class="history-panel">
            <p v-if="!draftHistory.length" class="help">Keine gespeicherten Unterrichtsentwürfe vorhanden.</p>
            <div class="history-list">
              <div v-for="record in draftHistory" :key="record.id" class="history-entry">
                <div><h3>{{ record.title }}</h3><p v-if="record.isExample" class="history-caption">Beispiel · Platzhalter</p><p v-else class="history-caption">Gespeicherter Unterrichtsentwurf</p></div>
                <div class="history-actions">
                <Button :label="activeDraftId === record.id ? 'Geöffnet' : 'Öffnen'" :disabled="busy || activeDraftId === record.id" outlined size="small" :aria-label="`${record.title} öffnen`" @click="openDraft(record)" />
                  <Button label="Löschen" severity="danger" text size="small" :disabled="busy" :aria-label="`${record.title} löschen`" @click="requestDeleteDraft(record)" />
                </div>
              </div>
            </div>
          </Panel>
          <StoryMappingBoard v-if="lessonDraft" v-model:text="lessonDraft" :readonly="phasesLocked" />
          <Panel v-if="rawResponse" header="Antwort im Original" toggleable class="notes-panel"><label for="raw-response" class="sr-only">Vollständige Antwort bearbeiten</label><Textarea id="raw-response" v-model="rawResponse" rows="12" /></Panel>
          <Panel v-if="legacyDraft" header="Bisheriger vollständiger Entwurf" toggleable collapsed class="notes-panel"><p class="help">Dein Entwurf aus der vorherigen Ansicht bleibt hier erhalten.</p><label for="legacy-draft" class="sr-only">Bisherigen Entwurf bearbeiten</label><Textarea id="legacy-draft" v-model="legacyDraft" rows="12" /></Panel>
          
      </section>
      <details class="review-details"><summary>Unterricht aus verschiedenen Sichtweisen prüfen</summary>
        <aside class="review column" aria-labelledby="review-heading">
          <div class="column-heading"><p class="eyebrow">03 · UNTERRICHT PRÜFEN</p><h2 id="review-heading">Unterricht aus bestimmten Sichtweisen prüfen</h2></div>
          <div v-for="item in perspectives" :key="item.id" class="perspective-card">
            <div class="perspective-header">
              <div class="checkbox-row"><Checkbox v-model="selectedPerspectives" :input-id="`perspective-${item.id}`" :value="item.id" /><label :for="`perspective-${item.id}`">{{ item.label }}</label></div>
              <Button text rounded size="small" :aria-label="`${item.label}: ${expandedPerspectives.includes(item.id) ? 'zuklappen' : 'aufklappen'}`" :aria-expanded="expandedPerspectives.includes(item.id)" :aria-controls="`perspective-content-${item.id}`" @click="togglePerspective(item.id)"><PhCaretDown :size="16" :class="{ 'caret-open': expandedPerspectives.includes(item.id) }" /></Button>
            </div>
            <div v-if="expandedPerspectives.includes(item.id)" :id="`perspective-content-${item.id}`">
              <p class="perspective-question">{{ item.question }}</p>
              <template v-if="reviews[item.id]"><p v-if="isReviewStale(item.id)" class="stale-note">Der Entwurf wurde seit dieser Prüfung geändert.</p><label :for="`review-${item.id}`" class="sr-only">{{ item.label }}: Prüfung bearbeiten</label><Textarea :id="`review-${item.id}`" v-model="reviews[item.id]" rows="7" auto-resize /></template>
            </div>
          </div>
          <Button label="Ausgewählte Sichtweisen prüfen" :loading="busy && jobType === 'review'" :disabled="!canReview" @click="submit('review')" /><p v-if="!hasDesign" class="help">Entwirf zuerst die Stunde.</p><p v-else-if="!selectedPerspectives.length" class="help">Wähle mindestens eine Sichtweise aus.</p>
        </aside>
      </details>
    </div>
    <MaterialsDialog v-model:visible="materialsDialogOpen" :text="form.mediaMaterials" :documents="materialDocuments" @save="saveMaterials" />
    <Dialog v-model:visible="deleteDraftDialogOpen" header="Unterrichtsentwurf löschen" modal :style="{ width: 'min(480px, calc(100vw - 32px))' }">
      <p>„{{ draftToDelete?.title }}“ endgültig löschen?</p>
      <template #footer>
        <Button label="Abbrechen" outlined @click="deleteDraftDialogOpen = false" />
        <Button label="Löschen" severity="danger" :disabled="busy" @click="deleteDraft" />
      </template>
    </Dialog>
    <Dialog v-model:visible="affectiveDialogOpen" header="Affektive Lernziele" modal dismissable-mask :style="{ width: 'min(1280px, calc(100vw - 32px))' }">
      <p class="cognitive-intro">Affektive Lernziele beschreiben, welche Einstellungen, Interessen und Werte die Schülerinnen und Schüler entwickeln oder reflektieren sollen.</p>
      <div class="cognitive-table-scroll" tabindex="0" role="region" aria-label="Affektive Lernziele auswählen">
        <table class="cognitive-table affective-table"><thead><tr><th v-for="column in affectiveGoalColumns" :key="column.id" scope="col">{{ column.name }}</th></tr></thead><tbody>
          <tr v-for="(row, rowIndex) in affectiveGoalRows" :key="rowIndex"><td v-for="(goal, columnIndex) in row" :key="columnIndex"><div v-if="goal" class="checkbox-row cognitive-option"><Checkbox v-model="selectedAffectiveGoalIds" :input-id="`affective-${goal.id}`" :value="goal.id" /><label :for="`affective-${goal.id}`">{{ goal.text }}</label></div></td></tr>
        </tbody></table>
      </div>
      <template #footer><Button label="Fertig" @click="affectiveDialogOpen = false" /></template>
    </Dialog>
    <Dialog v-model:visible="epaDialogOpen" header="EPA Anforderungsbereiche" modal dismissable-mask :style="{ width: 'min(920px, calc(100vw - 32px))' }">
      <p>EPA (<strong>Einheitliche Prüfungsanforderungen in der Abiturprüfung</strong>) Anforderungsbereiche</p>
      <h3>Die drei Anforderungsbereiche (AFB)</h3>
      <div class="cognitive-table-scroll" tabindex="0" role="region" aria-label="EPA Anforderungsbereiche">
        <table class="cognitive-table"><thead><tr><th scope="col">Bereich</th><th scope="col">Bedeutung</th><th scope="col">Beispiel aus GMT</th></tr></thead><tbody>
          <tr><th scope="row">AFB I – Reproduktion</th><td>Gelerntes Wissen wiedergeben</td><td>Drei Gestaltungsprinzipien nennen</td></tr>
          <tr><th scope="row">AFB II – Reorganisation und Transfer</th><td>Wissen auf eine Aufgabe anwenden und Zusammenhänge untersuchen</td><td>Ein Plakat hinsichtlich seiner Gestaltungsprinzipien analysieren</td></tr>
          <tr><th scope="row">AFB III – Reflexion und Problemlösung</th><td>Eigenständig Lösungen entwickeln und begründet beurteilen</td><td>Ein Plakat anhand definierter Anforderungen bewerten und Verbesserungen entwickeln</td></tr>
        </tbody></table>
      </div>
      <template #footer><Button label="Fertig" @click="epaDialogOpen = false" /></template>
    </Dialog>
    <Dialog v-model:visible="cognitiveDialogOpen" header="Kognitive Lernziele" modal dismissable-mask :style="{ width: 'min(1040px, calc(100vw - 32px))' }">
      <p class="cognitive-intro">Die sechs <strong>Taxonomiestufen nach Anderson und Krathwohl</strong> mit typischen <strong>Operatoren</strong>:</p>
      <div class="cognitive-table-scroll" tabindex="0" role="region" aria-label="Kognitive Lernziele nach Taxonomiestufen">
        <table class="cognitive-table"><thead><tr><th scope="col">Stufe</th><th scope="col">Taxonomiestufe</th><th scope="col">Typische Operatoren</th></tr></thead><tbody>
          <tr v-for="level in cognitiveGoalLevels" :key="level.id"><td>{{ level.level }}</td><th scope="row">{{ level.name }}</th><td><div class="cognitive-operators"><div v-for="goal in level.goals" :key="goal.id" class="checkbox-row cognitive-option"><Checkbox v-model="selectedCognitiveGoalIds" :input-id="`cognitive-${goal.id}`" :value="goal.id" /><label :for="`cognitive-${goal.id}`">{{ goal.text }}</label></div></div></td></tr>
        </tbody></table>
      </div>
      <p><strong>Merksatz:</strong> Die kognitiven Anforderungen steigen vom einfachen Wiedergeben von Wissen bis zum eigenständigen Entwickeln neuer Lösungen.</p>
      <template #footer><Button label="Fertig" @click="cognitiveDialogOpen = false" /></template>
    </Dialog>
    <Dialog v-model:visible="theoryDialogOpen" :header="activeTheory?.title || activeTheory?.name" modal dismissable-mask :style="{ width: 'min(640px, calc(100vw - 32px))' }">
      <div v-if="activeTheory" class="theory-overlay">
        <template v-if="activeTheory.sections">
          <section v-for="(section, index) in activeTheory.sections" :key="index" class="method-section">
            <h3 v-if="section.heading">{{ section.heading }}</h3>
            <p v-if="section.paragraph">{{ section.paragraph }}</p>
            <div v-if="section.rows" class="cognitive-table-scroll" tabindex="0" role="region" aria-label="Arten der Leistungsdiagnostik"><table class="cognitive-table"><thead><tr><th v-for="column in section.columns" :key="column" scope="col">{{ column }}</th></tr></thead><tbody><tr v-for="row in section.rows" :key="row[0]"><th scope="row">{{ row[0] }}</th><td v-for="(cell, index) in row.slice(1)" :key="index">{{ cell }}</td></tr></tbody></table></div>
            <component :is="section.ordered ? 'ol' : 'ul'" v-if="section.items"><li v-for="item in section.items" :key="item.prefix || item.text"><strong v-if="item.prefix">{{ item.prefix }} </strong>{{ item.text }}<template v-if="item.label"> → <strong>{{ item.label }}</strong></template><ul v-if="item.children"><li v-for="child in item.children" :key="child">{{ child }}</li></ul></li></component>
          </section>
        </template>
        <p v-else>{{ activeTheory.summary }}</p>
        <p v-if="!activeTheory.custom" class="help">Zusammenfassung aus „Unterrichtsplanung“, PDF-Seiten {{ activeTheory.pages }}.</p>
      </div>
    </Dialog>
  </main>
</template>

<style scoped>
.builder-page { min-height: 100vh; background: #f8f7f3; color: #202d32; font-family: 'Jost', Arial, sans-serif; }
.builder-shell { width: 100%; max-width: 1920px; box-sizing: border-box; padding: 28px 24px 60px; margin: auto; }
.back { color: #526166; font-size: 14px; text-underline-offset: 4px; }
.page-header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 22px 0 28px; }
.eyebrow { font-size: 11px; font-weight: 500; letter-spacing: .12em; color: #536c5a; margin: 0 0 10px; }
h1 { font-size: clamp(30px, 3vw, 44px); font-weight: 500; letter-spacing: -.03em; margin: 0; }
h2 { font-size: 23px; font-weight: 500; line-height: 1.3; margin: 0 0 12px; }
h3 { font-size: 21px; font-weight: 500; margin: 0; }
p { line-height: 1.6; }
.page-header p:last-child { margin-bottom: 0; }
.builder-columns { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(280px, 1.1fr); gap: 20px; align-items: start; }
.mapping-section { margin-top: 36px; }
.review-details { margin-top: 24px; }
.review-details summary { cursor: pointer; font-weight: 500; }
.column { min-width: 0; }
.column-heading { margin-bottom: 22px; }
.prerequisites, .review { padding: 20px 16px; border: 1px solid #dce3d9; border-radius: 14px; background: #eef2eb; }
.review { background: #f0f1ed; }
.proposal { padding: 4px 0; }
.choice-panel, .prompt-panel, .notes-panel { margin-top: 16px; }
.lesson-plan-links { display: grid; gap: 12px; }
.lesson-plan-links a { color: #202d32; line-height: 1.5; overflow-wrap: anywhere; text-underline-offset: 3px; }
:deep(.p-panel-header) { padding: 14px; font-size: 16px; }
:deep(.p-panel-content) { padding: 0 14px 16px; }
.goal-suggestion-button { width: 100%; margin-top: 20px; background: #385d46; border-color: #385d46; color: #fff; }
.goal-suggestion-button:hover { background: #294b36; border-color: #294b36; }
.preparation-action { display: flex; align-items: center; gap: 10px; }
.preparation-button { flex: 1; justify-content: flex-start; text-align: left; min-width: 0; }
.preparation-button :deep(.p-button-label) { white-space: normal; overflow-wrap: anywhere; }
.preparation-complete { flex-shrink: 0; color: #16803d; }
.choice-list { display: grid; gap: 16px; }
.checkbox-row { display: flex; align-items: flex-start; gap: 10px; min-width: 0; }
.checkbox-row :deep(.p-checkbox) { flex-shrink: 0; margin-top: 2px; }
.checkbox-row label { cursor: pointer; }
label { font-weight: 500; font-size: 14px; line-height: 1.5; overflow-wrap: anywhere; }
.theory-document + .theory-document { margin-top: 18px; }
.theory-trigger { padding: 0; color: inherit; text-align: left; font-size: 14px; line-height: 1.5; text-decoration: underline; text-underline-offset: 3px; }
.theory-trigger :deep(.p-button-label) { font-weight: 400; }
.cognitive-choice > .p-button { align-self: flex-start; }
.cognitive-selection { margin: 0; padding-left: 18px; font-size: 13px; line-height: 1.6; overflow-wrap: anywhere; }
.cognitive-selection li + li { margin-top: 6px; }
.cognitive-intro { line-height: 1.6; margin-top: 0; }
.cognitive-table-scroll { max-width: 100%; overflow-x: auto; }
.cognitive-table { width: 100%; min-width: 640px; border-collapse: collapse; font-size: 14px; line-height: 1.6; }
.cognitive-table th, .cognitive-table td { padding: 16px; border-bottom: 1px solid #dce3d9; text-align: left; vertical-align: top; }
.cognitive-table thead { background: #edf2e9; }
.cognitive-table tbody th { width: 20%; }
.cognitive-table td:last-child { width: 48%; }
.cognitive-source-table { min-width: 1100px; table-layout: fixed; }
.cognitive-source-table th, .cognitive-source-table td, .cognitive-source-table td:last-child { width: 16.66%; padding: 12px; }
.affective-table { min-width: 1000px; table-layout: fixed; }
.affective-table th, .affective-table td, .affective-table td:last-child { width: 20%; padding: 12px; }
.cognitive-operators { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; align-items: start; }
.cognitive-option + .cognitive-option { margin-top: 12px; }
.cognitive-operators .cognitive-option + .cognitive-option { margin-top: 0; }
.cognitive-option label { font-weight: 400; }
.theory-overlay { line-height: 1.75; }
.method-section + .method-section { margin-top: 22px; }
.method-section h3 { font-size: 17px; font-weight: 600; margin: 0 0 8px; }
.method-section p, .method-section ul, .method-section ol { margin: 8px 0; }
.method-section ul, .method-section ol { padding-left: 24px; }
.method-section li { margin: 5px 0; }
.theory-overlay .help { font-size: 13px; color: #526166; }
.theory-document a { font-size: 14px; line-height: 1.5; overflow-wrap: anywhere; text-underline-offset: 3px; }
.entry-choice + .entry-choice { margin-top: 22px; border-top: 1px solid #e0e5dc; padding-top: 18px; }
.help, .save-note, .selection-note { font-size: 13px; color: #526166; }
.selection-note { margin: 8px 2px 18px; overflow-wrap: anywhere; }
.field { display: flex; flex-direction: column; gap: 8px; margin-top: 20px; min-width: 0; }
.field .help { margin: -2px 0 0; }
:deep(.p-textarea), :deep(.p-inputtext), :deep(.p-select) { width: 100%; min-width: 0; box-sizing: border-box; }
:deep(.p-textarea) { line-height: 1.65; resize: vertical; font-size: 14px; }
:deep(.p-select-label) { white-space: normal; }
.worksheet-choice { margin-top: 20px; }
.design-status { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 180px; }
.design-status .help { margin: 0; }
.design-status :deep(.p-button-label), .review > :deep(.p-button .p-button-label) { white-space: normal; line-height: 1.45; }
.service-status { font-size: 12px; color: #386146; }
.history-panel { margin-top: 20px; }
.history-actions { display: flex; flex-wrap: wrap; gap: 6px; }
.history-list { display: grid; gap: 14px; }
.history-entry { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px; border: 1px solid #dce3d9; border-radius: 10px; }
.history-entry h3 { font-size: 16px; overflow-wrap: anywhere; }
.history-caption { margin: 6px 0 0; color: #526166; font-size: 12px; }
.history-entry :deep(.p-button) { flex-shrink: 0; }
.draft-section { margin-top: 20px; }
.phase-card { background: white; padding: 22px; border: 1px solid #dce3d9; border-radius: 14px; margin-top: 20px; }
.phase-heading { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 18px; }
.phase-heading > div:first-child { display: flex; align-items: center; gap: 12px; }
.phase-number { width: 30px; height: 30px; flex-shrink: 0; display: grid; place-items: center; border-radius: 50%; background: #e7ede2; font-size: 14px; }
.time-field { width: 90px; flex-shrink: 0; display: grid; gap: 5px; }
.time-field label { font-size: 12px; color: #526166; }
.time-field :deep(.p-inputnumber) { width: 100%; }
.duration { border-radius: 20px; padding: 8px 14px; background: #e7ede2; font-size: 14px; white-space: nowrap; }
.activity-options { border: 1px solid #dce3d9; border-radius: 8px; padding: 12px; margin-bottom: 18px; font-size: 14px; }
.activity-options summary { cursor: pointer; font-weight: 500; }
.option-list { display: grid; gap: 16px; padding-top: 16px; }
.option-list label { font-weight: 400; }
.actions { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-top: 16px; }
.zienern-details { margin-top: 14px; font-size: 14px; }
.zienern-details summary { cursor: pointer; font-weight: 500; }
.zienern-details p { white-space: pre-wrap; }
.prompt-actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; margin-top: 16px; }
.prompt-actions > :deep(.p-button) { width: 100%; justify-content: center; }
.prompt-actions :deep(.p-button-label) { white-space: normal; }
.prompt-heading { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; }
.prompt-heading h2 { margin: 0; }
.prompt-input { max-height: none; overflow-y: hidden; resize: none; }
.perspective-card { background: white; border: 1px solid #dce3d9; border-radius: 10px; padding: 14px; margin-bottom: 14px; }
.perspective-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.perspective-header .checkbox-row { flex: 1; }
.perspective-header :deep(.p-button) { flex-shrink: 0; width: 28px; height: 28px; padding: 4px; }
.caret-open { transform: rotate(180deg); }
.perspective-question { font-size: 13px; margin-bottom: 0; color: #526166; }
.perspective-card :deep(.p-textarea) { margin-top: 12px; font-size: 13px; }
.stale-note { font-size: 12px; color: #96520b; }
.review > :deep(.p-button) { width: 100%; }
.job-status { padding: 14px 18px; border-radius: 10px; margin-bottom: 20px; background: #e5eee0; font-size: 14px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (max-width: 1100px) {
  .builder-columns { grid-template-columns: minmax(230px, 1fr) minmax(0, 2fr); }
  .review { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
  .review .column-heading, .review > .p-button, .review > .help { grid-column: 1 / -1; }
  .perspective-card { margin-bottom: 0; }
}
@media (max-width: 700px) {
  .builder-shell { padding: 24px 14px 40px; }
  .page-header { align-items: flex-start; flex-direction: column; }
  .builder-columns { grid-template-columns: minmax(0, 1fr); }
  .review { display: block; }
  .perspective-card { margin-bottom: 14px; }
  .phase-card { padding: 18px 14px; }
  .phase-heading { gap: 10px; }
  .phase-heading > div:first-child { gap: 8px; }
  h3 { font-size: 18px; }
  .time-field { width: 70px; }
}
</style>
