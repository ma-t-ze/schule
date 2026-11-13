<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Message from 'primevue/message'

const tab = ref('intro')
const slide = ref(0)
const slides = [
  { tag: '01 / Einstieg', title: 'Ein Fahrrad. Zwei Wege.', text: 'Eine Zeichnung mit zwei Rädern und einem Rahmen kann ein Fahrrad darstellen. Das Wort „Fahrrad“ bezeichnet dasselbe – sieht aber ganz anders aus. Warum verstehen wir beides?', left: '🚲', right: 'Fahrrad', foot: 'Tauscht euch zu zweit aus: Was erkennt ihr durch Ähnlichkeit? Was musstet ihr erst lernen?' },
  { tag: '02 / Ikon', title: 'Ich erkenne eine Ähnlichkeit.', text: 'Ein Ikon ähnelt dem, was es darstellt. Eine vereinfachte Zeichnung einer Tasse steht für eine Tasse, weil ihre Form wiedererkennbar ist.', left: '☕', right: 'Tasse', foot: 'Merksatz: Das Zeichen sieht dem Gemeinten ähnlich. Es muss keine naturgetreue Zeichnung sein.' },
  { tag: '03 / Symbol', title: 'Ich kenne die Vereinbarung.', text: 'Ein Symbol bekommt seine Bedeutung durch eine gelernte Vereinbarung. Ein Herz steht für Liebe. Das Gefühl Liebe selbst hat keine Herzform.', left: '♥', right: 'Liebe', foot: 'Merksatz: Ich muss wissen, wofür das Zeichen steht. Auch Wörter beruhen auf gelernten Vereinbarungen.' },
  { tag: '04 / Zeichenkette', title: 'Ein Zeichen allein reicht nicht immer.', text: 'Eine gezeichnete Person, ein Herz und ein gezeichnetes Fahrrad können zusammen „Ich liebe Fahrradfahren“ bedeuten. Andere lesen vielleicht „Eine Person liebt Fahrräder“. Mehrere Deutungen sind möglich.', left: '🧍 ♥ 🚲', right: 'Wörter', foot: 'Ordnet jedes Zeichen einzeln zu: Person und Fahrrad als Abbildungen → Ikon. Herz für Liebe → Symbol.' },
  { tag: '05 / Spielregeln', title: 'Übersetzen. Weitergeben. Entschlüsseln.', text: 'Spielt zu zweit an einem Gerät. Person A liest den geheimen Auftrag und zeichnet. Person B schaut dabei weg. Dann wird der Auftrag verdeckt, B liest die Zeichnung und ordnet die Zeichen zu.', left: 'WORT', right: 'ZEICHEN', foot: 'Keine Buchstaben, Zahlen oder gesprochenen Tipps beim Zeichnen. Nach jeder Runde tauscht ihr die Rollen. Zeichnerisches Können wird nicht bewertet.' }
]
const schedule = [ ['0–5', 'Zeichen entdecken', 'Fahrradbild und Wort vergleichen. Vermutungen sammeln.'], ['5–12', 'Ikon & Symbol', 'Einführung gemeinsam durchgehen; Ähnlichkeit und Vereinbarung unterscheiden.'], ['12–17', 'Proberunde', 'Ein Paar spielt am Beamer. Die Klasse entschlüsselt und begründet.'], ['17–35', 'Drei Spielrunden', 'Pro Runde 6 Minuten: Auftrag und Zeichnen 2 Min., Entschlüsseln 1 Min., Zuordnen und Begründen 2 Min., Vergleichen 1 Min.'], ['35–42', 'Gemeinsam auswerten', 'Zwei Zeichenketten vergleichen: Wo änderte sich die Bedeutung? Welche Vereinbarung fehlte?'], ['42–45', 'Exit-Ticket', 'Ein Ikon und ein Symbol nennen und den Unterschied in einem Satz erklären.'] ]
const missions = [
  { word: 'Fahrrad', mode: 'Ein Wort → ein Zeichen', task: 'Zeichne ein Fahrrad so vereinfacht, dass dein Gegenüber es erkennt.', hint: 'Eine Fahrradzeichnung ähnelt einem Fahrrad: Ikon. Ob das Wort exakt getroffen wurde, entscheidet ihr gemeinsam.' },
  { word: 'Liebe', mode: 'Ein Wort → ein Zeichen', task: 'Stelle Liebe mit einem bekannten, vereinbarten Zeichen dar. Nutze keine Schrift.', hint: 'Ein Herz für Liebe ist ein Symbol: Seine Bedeutung ist gelernt. Entscheidend ist eure tatsächliche Zeichnung und das, wofür sie steht.' },
  { word: 'Ich liebe Fahrradfahren', mode: 'Mehrere Wörter → eine Zeichenkette', task: 'Übersetze die Aussage in zwei bis vier Zeichen. Nutze mindestens ein Ikon und ein Symbol.', hint: 'Zum Beispiel: Person + Herz + Fahrrad. Die Abbildungen stehen durch Ähnlichkeit für Person und Fahrrad, das Herz durch Vereinbarung für Liebe. „Eine Person liebt Fahrräder“ ist eine plausible Lesart.' }
]
const round = ref(0)
const phase = ref('ready')
const mission = computed(() => missions[round.value])
const strokes = ref([])
const drawing = ref(false)
const guess = ref('')
const entries = ref([{ type: '', reason: '' }])
const matched = ref(null)
const records = ref([])
const seconds = ref(120)
const running = ref(false)
let timer
const clock = computed(() => `${Math.floor(seconds.value / 60).toString().padStart(2, '0')}:${(seconds.value % 60).toString().padStart(2, '0')}`)
function stopTimer() { clearInterval(timer); running.value = false }
function toggleTimer() {
  if (running.value) return stopTimer()
  if (!seconds.value) seconds.value = 120
  running.value = true
  timer = setInterval(() => { if (seconds.value > 0) seconds.value--; if (!seconds.value) stopTimer() }, 1000)
}
onBeforeUnmount(stopTimer)
function point(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  return `${Math.max(0, Math.min(800, (event.clientX - rect.left) * 800 / rect.width))},${Math.max(0, Math.min(420, (event.clientY - rect.top) * 420 / rect.height))}`
}
function begin(event) { if (phase.value !== 'draw') return; event.currentTarget.setPointerCapture(event.pointerId); drawing.value = true; strokes.value.push([point(event)]) }
function move(event) { if (drawing.value && phase.value === 'draw') strokes.value[strokes.value.length - 1].push(point(event)) }
const canReveal = computed(() => guess.value.trim() && entries.value.every(e => e.type && e.reason.trim()))
function handOver() { stopTimer(); drawing.value = false; phase.value = 'handover' }
function finishRound() {
  const score = Number(matched.value) + Number(entries.value.every(e => e.type && e.reason.trim()))
  records.value.push({ word: mission.value.word, guess: guess.value, score })
  if (round.value === missions.length - 1) { phase.value = 'done'; return }
  round.value++; phase.value = 'ready'; strokes.value = []; guess.value = ''; entries.value = [{ type: '', reason: '' }]; matched.value = null; seconds.value = 120
}
const total = computed(() => records.value.reduce((n, r) => n + r.score, 0))
function restart() { stopTimer(); round.value = 0; phase.value = 'ready'; records.value = []; strokes.value = []; guess.value = ''; entries.value = [{ type: '', reason: '' }]; matched.value = null; seconds.value = 120 }
const exitAnswer = ref('')
const exitShow = ref(false)
</script>

<template>
  <main class="sign-game">
    <div class="game-shell">
      <RouterLink class="back" :to="{ name: '3tgg12' }">← 3TGG1/2</RouterLink>
      <header class="hero">
        <div><p class="eyebrow">ZEICHENLABOR / 45 MINUTEN / ZU ZWEIT</p><h1>Lost in<br /><em>Translation?</em></h1><p class="lead">Vom Wort zum Zeichen. Und wieder zurück.<br />Wie viel Bedeutung kommt wirklich an?</p></div>
        <div class="hero-art" aria-label="Wort wird Bild wird Bedeutung"><span class="art-label">SENDEN</span><span class="word-sticker">Fahrrad</span><span class="bike">🚲</span><span class="heart">♥</span><span class="art-label bottom">VERSTEHEN?</span></div>
      </header>
      <nav class="mode-nav" aria-label="Spielbereiche"><Button v-for="[key, label] in [['intro', '01 Einführung'], ['game', '02 Spielen'], ['lesson', '03 Stundenplan']]" :key="key" :label="label" :class="{ active: tab === key }" :aria-pressed="tab === key" @click="tab = key" /></nav>

      <section v-if="tab === 'intro'" class="intro-panel" aria-label="Einführung">
        <div class="section-top"><span class="eyebrow">{{ slides[slide].tag }}</span><span>{{ slide + 1 }} / {{ slides.length }}</span></div>
        <h2>{{ slides[slide].title }}</h2><p class="explain">{{ slides[slide].text }}</p>
        <div class="translation"><span>{{ slides[slide].left }}</span><span class="arrow">→</span><span>{{ slides[slide].right }}</span></div>
        <p class="note">{{ slides[slide].foot }}</p>
        <div class="slide-actions"><Button label="Zurück" outlined :disabled="slide === 0" @click="slide--" /><div class="slide-dots"><button v-for="(_, i) in slides" :key="i" :class="{ selected: i === slide }" :aria-label="`Einführung Schritt ${i + 1}`" :aria-current="i === slide ? 'step' : undefined" @click="slide = i"></button></div><Button v-if="slide < slides.length - 1" label="Weiter →" @click="slide++" /><Button v-else label="Spiel starten →" @click="tab = 'game'" /></div>
      </section>

      <section v-if="tab === 'game'" class="play-panel" aria-label="Zeichenspiel">
        <div class="section-top"><span class="eyebrow">{{ phase === 'done' ? 'GESCHAFFT' : `RUNDE ${round + 1} / 3` }}</span><span>Ein Gerät · zwei Personen · Rollen wechseln</span></div>
        <div class="round-track"><span v-for="(m, i) in missions" :key="m.word" :class="{ current: i === round, complete: i < records.length }">{{ i + 1 }}<small>{{ m.mode }}</small></span></div>
        <template v-if="phase === 'ready'"><div class="curtain"><span class="big-mark">↔</span><h2>{{ round % 2 ? 'Person B zeichnet.' : 'Person A zeichnet.' }}</h2><p>Die andere Person schaut jetzt weg. Öffne den Auftrag erst, wenn nur die zeichnende Person den Bildschirm sieht.</p><Button label="Geheimen Auftrag öffnen" @click="phase = 'draw'" /></div></template>
        <template v-if="phase === 'draw'">
          <div class="secret-card"><span class="eyebrow">NUR FÜR DIE ZEICHNENDE PERSON</span><h2>{{ mission.word }}</h2><p>{{ mission.task }}</p></div>
          <div class="drawing-toolbar"><span>Keine Schrift. Keine mündlichen Tipps.</span><div class="timer"><strong role="timer" :aria-label="`Verbleibend: ${clock}`">{{ clock }}</strong><Button :label="running ? 'Pause' : '2-Min.-Timer'" size="small" outlined @click="toggleTimer" /></div></div>
          <Message v-if="seconds === 0" severity="info" :closable="false">Zeichenzeit vorbei. Beende deine Zeichnung und gib das Gerät weiter.</Message>
        </template>
        <div v-if="['draw', 'decode', 'reveal'].includes(phase)" class="drawing-wrap">
          <svg class="drawing-surface" :class="{ editable: phase === 'draw' }" viewBox="0 0 800 420" role="img" :aria-label="phase === 'draw' ? 'Zeichenfläche: mit Maus, Stift oder Finger zeichnen' : 'Gezeichnetes Zeichen zum Entschlüsseln'" @pointerdown="begin" @pointermove="move" @pointerup="drawing = false" @pointercancel="drawing = false" @lostpointercapture="drawing = false"><polyline v-for="(stroke, i) in strokes" :key="i" :points="stroke.length === 1 ? `${stroke[0]} ${stroke[0]}` : stroke.join(' ')" fill="none" stroke="#17251f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" /></svg>
          <span v-if="!strokes.length" class="drawing-placeholder">Deine Zeichen kommen hierhin.</span>
        </div>
        <div v-if="phase === 'draw'" class="actions"><Button label="Letzten Strich zurück" outlined :disabled="!strokes.length" @click="strokes.pop()" /><Button label="Zeichnung verdecken & weitergeben →" :disabled="!strokes.length" @click="handOver" /></div>
        <div v-if="phase === 'handover'" class="curtain"><span class="big-mark">✦</span><h2>Jetzt wird entschlüsselt.</h2><p>Gib das Gerät weiter. Der geheime Auftrag bleibt verdeckt. Die andere Person sieht gleich nur deine Zeichnung.</p><Button label="Ich bin bereit zum Entschlüsseln" @click="phase = 'decode'" /></div>
        <template v-if="phase === 'decode'">
          <h2>Was liest du?</h2><label for="guess">Übersetze die Zeichen in ein Wort oder mehrere Wörter.</label><InputText id="guess" v-model="guess" class="wide-input" placeholder="Ich lese …" autocomplete="off" />
          <h3>Ikon oder Symbol? Begründe jedes Zeichen.</h3><p>Bei einer Zeichenkette gehst du von links nach rechts vor. Füge für jedes Zeichen eine Zeile hinzu.</p>
          <div v-for="(entry, i) in entries" :key="i" class="classification"><span class="entry-number">{{ i + 1 }}</span><div><label :for="`type-${i}`">Zeichen {{ i + 1 }} ist überwiegend …</label><select :id="`type-${i}`" v-model="entry.type"><option value="" disabled>Bitte auswählen</option><option>Ikon</option><option>Symbol</option></select></div><div><label :for="`reason-${i}`">Warum? Worauf bezieht es sich?</label><InputText :id="`reason-${i}`" v-model="entry.reason" placeholder="Es ähnelt … / Die Bedeutung … ist gelernt." /></div><Button v-if="entries.length > 1" label="Entfernen" text size="small" @click="entries.splice(i, 1)" /></div>
          <div class="actions"><Button label="+ Weiteres Zeichen" outlined :disabled="entries.length >= 4" @click="entries.push({ type: '', reason: '' })" /><Button label="Auftrag aufdecken →" :disabled="!canReveal" @click="phase = 'reveal'" /></div>
        </template>
        <template v-if="phase === 'reveal'">
          <div class="reveal-grid"><div><span class="eyebrow">GESENDET</span><h2>{{ mission.word }}</h2></div><div><span class="eyebrow">ANGEKOMMEN</span><h2>{{ guess }}</h2></div></div>
          <div class="note"><strong>Vergleicht eure Zuordnung.</strong><p>{{ mission.hint }}</p><p v-for="(entry, i) in entries" :key="i">Zeichen {{ i + 1 }}: <strong>{{ entry.type }}</strong> – {{ entry.reason }}</p></div>
          <h3>Passt die Bedeutung?</h3><p>Entscheidet gemeinsam. Eine sinngemäße Übersetzung zählt auch. Eure Zuordnungen bewertet ihr anhand der Zeichnung: Ähnlichkeit oder gelernte Vereinbarung?</p><div class="actions"><Button label="Ja, sinngemäß getroffen" :outlined="matched !== true" :aria-pressed="matched === true" @click="matched = true" /><Button label="Anders verstanden" :outlined="matched !== false" :aria-pressed="matched === false" @click="matched = false" /></div><p class="scoring">Teamwertung: 1 Punkt für eine passende Übersetzung + 1 Punkt für vollständige Zuordnungen mit Begründung. Das sind Übungspunkte, keine automatische fachliche Bewertung.</p><Button :label="round === 2 ? 'Zur Auswertung →' : 'Runde abschließen & Rollen tauschen →'" :disabled="matched === null" @click="finishRound" />
        </template>
        <template v-if="phase === 'done'"><div class="finish"><span class="eyebrow">EURE ÜBERSETZUNGSBILANZ</span><h2>{{ total }} / 6 Teampunkte</h2><p>Welche Zeichen waren leicht zu verstehen? Wo brauchtet ihr gemeinsames Vorwissen?</p></div><ul class="results"><li v-for="(record, i) in records" :key="i"><strong>{{ record.word }}</strong><span>→ {{ record.guess }}</span><b>{{ record.score }} / 2</b></li></ul><div class="note"><strong>Für die gemeinsame Auswertung</strong><p>„Unser Zeichen für … ist ein Ikon / Symbol, weil …“</p><p>Vergleicht mindestens ein Ikon und ein Symbol. Wenn ihr euch uneinig seid, zeigt die Zeichnung der Klasse und erklärt die beabsichtigte Bedeutung.</p></div><Button label="Noch einmal spielen" outlined @click="restart" /></template>
      </section>

      <section v-if="tab === 'lesson'" class="lesson-panel"><span class="eyebrow">DIE 45-MINUTEN-MISSION</span><h2>Ein Zeichen. Viele Lesarten.</h2><p class="explain">Lernziel: Du übersetzt Wörter in Zeichen, entschlüsselst Zeichenketten und unterscheidest Ikon und Symbol mit einer Begründung.</p><div class="setup"><strong>Vorbereitung</strong><p>Paare bilden, ein Gerät pro Paar mit Touchscreen oder Maus. Alternativ auf Papier zeichnen und für das Entschlüsseln weiterreichen; die digitalen Aufträge können dabei geöffnet bleiben, solange nur die zeichnende Person sie sieht. Für die Einführung genügt ein Beamer.</p><p>Keine Anmeldung im Spiel, kein gemeinsamer Online-Raum. Eure Einträge bleiben in dieser geöffneten Ansicht; beim Neuladen beginnt ihr neu.</p></div><ol class="timeline"><li v-for="[time, title, text] in schedule" :key="time"><span>{{ time }}<small>MIN</small></span><div><h3>{{ title }}</h3><p>{{ text }}</p></div></li></ol><div class="exit"><span class="eyebrow">EXIT-TICKET</span><h3>Was macht den Unterschied?</h3><label for="exit">Nenne ein Ikon und ein Symbol mit ihrer Bedeutung. Erkläre den Unterschied.</label><Textarea id="exit" v-model="exitAnswer" rows="3" autoResize class="wide-input" /><Button label="Mit dem Merksatz vergleichen" outlined :disabled="!exitAnswer.trim()" @click="exitShow = true" /><Message v-if="exitShow" severity="success" :closable="false">Ikon: Eine Tassenzeichnung steht für eine Tasse durch Ähnlichkeit. Symbol: Ein Herz steht für Liebe durch eine gelernte Vereinbarung. Prüfe, ob du in deiner Antwort beide Beziehungen erklärst.</Message></div></section>
      <footer class="game-footer"><span>MERKEN → Ikon: Ähnlichkeit. Symbol: Vereinbarung.</span><a href="https://www-cse.ucsd.edu/~goguen/courses/271/tutorial/peirce.php" target="_blank" rel="noopener noreferrer">Fachlicher Hintergrund ↗</a></footer>
    </div>
  </main>
</template>

<style scoped>
.sign-game { --ink: #17251f; --green: #214d3c; --lime: #dbfc82; background: #f0f0e9; color: var(--ink); min-height: 100vh; font-family: 'Jost', sans-serif; padding: 28px 24px 60px; }
.game-shell { max-width: 1120px; margin: auto; }.back { color: var(--ink); text-underline-offset: 5px; }.hero { display: grid; grid-template-columns: 1.4fr 1fr; gap: 32px; padding: 55px 0 40px; align-items: center; }.eyebrow { font-size: 12px; font-weight: 600; letter-spacing: .12em; }.hero h1 { font-size: clamp(48px, 7.5vw, 96px); line-height: .98; font-weight: 500; letter-spacing: -.06em; margin: 24px 0; }.hero em { font-weight: 400; color: var(--green); }.lead { font-size: 20px; line-height: 1.6; }.hero-art { height: 310px; position: relative; background: var(--green); border-radius: 28px; overflow: hidden; transform: rotate(3deg); color: white; }.art-label { position: absolute; top: 24px; left: 25px; font-size: 12px; letter-spacing: .16em; }.art-label.bottom { top: auto; bottom: 24px; left: auto; right: 25px; }.word-sticker { position: absolute; top: 70px; left: 30px; padding: 10px 24px; background: var(--lime); color: var(--ink); font-size: 30px; transform: rotate(-12deg); }.bike { position: absolute; bottom: 35px; left: 55px; font-size: 100px; }.heart { position: absolute; top: 80px; right: 35px; font-size: 100px; color: #ffbaa2; transform: rotate(15deg); }.mode-nav { display: flex; gap: 8px; border-bottom: 1px solid #cad1c7; padding-bottom: 18px; margin-bottom: 28px; }.mode-nav :deep(.p-button) { background: transparent; color: var(--ink); border-color: transparent; border-radius: 100px; }.mode-nav :deep(.p-button.active) { background: var(--ink); color: white; }.intro-panel,.play-panel,.lesson-panel { background: #fffefa; border: 1px solid #dce0d5; border-radius: 24px; padding: clamp(22px, 4vw, 48px); }.section-top { display: flex; justify-content: space-between; gap: 16px; color: #536257; font-size: 13px; }h2 { font-size: clamp(27px, 4vw, 43px); letter-spacing: -.035em; font-weight: 500; line-height: 1.15; margin: 26px 0 16px; }h3 { font-size: 21px; font-weight: 500; }.explain { max-width: 800px; font-size: 20px; line-height: 1.65; }.translation { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 30px; padding: 34px 20px; margin: 24px 0; background: #edf1e6; border-radius: 16px; font-size: clamp(27px, 5vw, 56px); }.translation .arrow { color: #708465; }.note { background: #eaf2df; border-left: 4px solid #73934e; padding: 18px 22px; font-size: 17px; line-height: 1.6; margin: 24px 0; }.slide-actions,.actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; margin-top: 24px; }.slide-actions { justify-content: space-between; }.slide-dots { display: flex; gap: 8px; }.slide-dots button { border: 0; width: 12px; height: 12px; background: #cbd3c2; border-radius: 50%; cursor: pointer; }.slide-dots button.selected { background: var(--green); }.sign-game :deep(.p-button) { font-family: inherit; }.sign-game :deep(.p-button:not(.p-button-outlined):not(.p-button-text)) { background: var(--green); border-color: var(--green); }.sign-game :deep(.p-button-outlined) { color: var(--green); border-color: #7e9b8c; }.round-track { display: flex; margin: 28px 0; gap: 12px; }.round-track>span { flex: 1; background: #f0f1eb; padding: 14px; border-radius: 12px; font-size: 22px; border: 1px solid transparent; }.round-track small { display: block; font-size: 12px; margin-top: 5px; }.round-track .current { border-color: var(--green); }.round-track .complete { background: #e5f0d5; }.curtain { text-align: center; padding: 35px 10px; max-width: 650px; margin: auto; }.curtain p { font-size: 19px; line-height: 1.6; margin-bottom: 28px; }.big-mark { font-size: 70px; color: var(--green); }.secret-card { background: var(--ink); color: white; border-radius: 16px; padding: 24px; }.secret-card h2 { color: var(--lime); margin: 15px 0; }.secret-card p { font-size: 18px; }.drawing-toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 15px; margin: 20px 0; }.timer { display: flex; align-items: center; gap: 12px; }.timer strong { font-size: 28px; font-variant-numeric: tabular-nums; }.drawing-wrap { position: relative; margin: 20px 0; }.drawing-surface { width: 100%; display: block; border: 2px solid #c6d0be; border-radius: 16px; background-color: white; background-image: radial-gradient(#dce0d5 1px, transparent 1px); background-size: 20px 20px; }.drawing-surface.editable { touch-action: none; cursor: crosshair; }.drawing-placeholder { position: absolute; left: 0; top: 45%; width: 100%; text-align: center; color: #73816e; pointer-events: none; }label { display: block; margin-bottom: 8px; }.wide-input { width: 100%; margin: 8px 0 20px; }.classification { display: flex; gap: 14px; align-items: center; background: #f0f1eb; padding: 18px; border-radius: 12px; margin: 12px 0; }.classification>div:last-of-type { flex: 1; }.classification :deep(input),.classification select { width: 100%; }.classification select { border: 1px solid #c5ccc3; border-radius: 6px; padding: 9px; font: inherit; background: white; }.entry-number { font-size: 24px; }.reveal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-top: 32px; }.reveal-grid>div { background: #eff1e9; padding: 22px; border-radius: 16px; overflow-wrap: anywhere; }.scoring { font-size: 14px; color: #526253; margin: 24px 0; }.finish { text-align: center; padding: 20px; }.results { list-style: none; padding: 0; }.results li { display: flex; justify-content: space-between; gap: 20px; padding: 16px 0; border-bottom: 1px solid #dce0d5; }.results li span { flex: 1; }.setup { border: 1px solid #d5ddcb; padding: 20px; border-radius: 12px; line-height: 1.6; }.timeline { list-style: none; padding: 0; margin: 30px 0; }.timeline li { display: flex; gap: 28px; border-bottom: 1px solid #dce0d5; padding: 22px 0; }.timeline li>span { flex: 0 0 80px; font-size: 26px; color: var(--green); }.timeline small { display: block; font-size: 11px; letter-spacing: .1em; }.timeline h3 { margin: 0 0 8px; }.timeline p { margin: 0; line-height: 1.6; }.exit { background: #eff2e7; padding: 24px; border-radius: 16px; }.game-footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 18px; padding-top: 26px; color: #526253; font-size: 13px; }.game-footer a { color: inherit; }button:focus-visible,a:focus-visible,select:focus-visible { outline: 3px solid #6a8c36; outline-offset: 4px; }
@media(max-width: 680px) { .sign-game { padding: 20px 14px 40px; }.hero { grid-template-columns: 1fr; padding-top: 30px; }.hero-art { height: 220px; transform: none; }.bike { font-size: 75px; left: 45%; bottom: 20px; }.heart { font-size: 70px; top: 30px; right: 25px; }.mode-nav { flex-wrap: wrap; }.mode-nav :deep(.p-button) { font-size: 13px; padding: 10px 12px; }.classification { flex-wrap: wrap; }.classification>div { flex: 1 1 100%; }.round-track small { font-size: 10px; }.round-track>span { padding: 10px; }.reveal-grid { grid-template-columns: 1fr; }.results li { flex-wrap: wrap; }.timeline li { gap: 12px; }.timeline li>span { flex-basis: 65px; }.slide-actions { gap: 18px; }.slide-dots { order: 3; justify-content: center; width: 100%; } }
</style>
