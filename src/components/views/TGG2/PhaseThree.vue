<script setup>
import { ref, watch } from 'vue'
const maxColumns = 12, maxStories = 12
const story = () => ({ id: crypto.randomUUID(), text: '' })
const column = () => ({ id: crypto.randomUUID(), activity: '', stories: Array.from({ length: 2 }, story) })
const draft = ref({ version: 2, team: '', columns: Array.from({ length: 4 }, column) })
const notice = ref(''), exporting = ref(false), exportError = ref('')
try {
  const saved = JSON.parse(localStorage.getItem('3tgg2-phase3-story-mapping') || 'null')
  if (saved && typeof saved.team === 'string' && Array.isArray(saved.columns) && saved.columns.length > 0 && saved.columns.length <= maxColumns) {
    const columns = saved.columns.map(c => {
      if (typeof c.activity !== 'string' || !Array.isArray(c.stories) || !c.stories.length || c.stories.length > maxStories) throw new Error('Ungültiges Mapping')
      return { id: crypto.randomUUID(), activity: c.activity.slice(0, 120), stories: c.stories.filter((_, index) => saved.version === 2 || (index !== 2 && index !== 3)).map(s => {
        if (typeof s.text !== 'string') throw new Error('Ungültige Story')
        return { id: crypto.randomUUID(), text: s.text.slice(0, 600) }
      }) }
    })
    draft.value = { version: 2, team: saved.team.slice(0, 160), columns }
    localStorage.setItem('3tgg2-phase3-story-mapping', JSON.stringify(draft.value))
  }
} catch { notice.value = 'Gespeicherte Eingaben konnten nicht geladen werden. Bitte sichert euer Mapping als PDF.' }
watch(draft, value => {
  try { localStorage.setItem('3tgg2-phase3-story-mapping', JSON.stringify(value)) }
  catch { notice.value = 'Automatisches Speichern ist nicht verfügbar. Ladet euer Mapping vor dem Schließen als PDF herunter.' }
}, { deep: true })
function moveColumn(index, direction) {
  const target = index + direction
  if (target < 0 || target >= draft.value.columns.length) return
  const columns = draft.value.columns
  ;[columns[index], columns[target]] = [columns[target], columns[index]]
}
function moveStory(columnIndex, storyIndex, direction) {
  const columns = draft.value.columns
  const target = columnIndex + direction
  if (!columns[target] || columns[target].stories.length >= maxStories || columns[columnIndex].stories.length <= 1) return
  columns[target].stories.push(columns[columnIndex].stories.splice(storyIndex, 1)[0])
}
function moveRow(stories, index, direction) {
  const target = index + direction
  if (target < 0 || target >= stories.length) return
  ;[stories[index], stories[target]] = [stories[target], stories[index]]
}
async function download() {
  if (exporting.value) return
  exporting.value = true; exportError.value = ''
  try {
    const snapshot = JSON.parse(JSON.stringify(draft.value))
    const { exportStoryMapping } = await import('./exportStoryMapping')
    await exportStoryMapping(snapshot)
  } catch { exportError.value = 'Der PDF-Download hat nicht funktioniert. Eure Eingaben bleiben erhalten. Bitte versucht es erneut.' }
  finally { exporting.value = false }
}
</script>

<template>
  <details class="blue-card phase-three" aria-labelledby="phase-three-title">
    <summary><span class="block-heading"><span class="eyebrow">PHASE 3</span><h2 id="phase-three-title">Anforderungen festlegen</h2></span></summary>
    <section aria-labelledby="phase3-next-step">
      <h3 id="phase3-next-step">Der nächste Schritt: Vom Lastenheft zum Pflichtenheft</h3>
      <p>Nun geht es darum, die entwickelte App-Idee weiter auszuarbeiten und die nächsten Schritte der Produktentwicklung zu planen.</p>
      <p>Dafür erstellt das Unternehmen EduVision ein <strong>Lastenheft</strong>. Darin beschreibt der Auftraggeber, welche Ziele die App erreichen soll.</p>
      <p>Auf Grundlage dieses Lastenhefts erstellt dein Team anschließend ein <strong>Pflichtenheft</strong>. Dieses macht aus den Zielen konkrete Anforderungen wie zum Beispiel alle konkreten Funktionen der App. Die Anforderungen definierst du mithilfe der Methode des <strong>Story Mappings</strong>.</p>
    </section>
    <section class="assignment" aria-labelledby="phase3-remember">
      <h3 id="phase3-remember">Merke</h3>
      <p><strong>Lastenheft:</strong> Wird vom Auftraggeber erstellt. Es hält fest, was der Auftraggeber möchte.</p>
      <p><strong>Pflichtenheft:</strong> Wird vom Auftragnehmer erstellt. Es beschreibt möglichst konkret, was der Auftragnehmer liefern wird.</p>
    </section>
    <section class="assignment" aria-labelledby="phase3-scenario">
      <h3 id="phase3-scenario">User Story Mapping</h3>
      <p>Beim <strong>User Story Mapping</strong> versetzt du dich in die Lage der Nutzer und überlegst, welche Funktionen die App benötigt. Diese beschreibst du in kurzen <strong>User Stories</strong>. Anschließend ordnest du die Stories in einer sinnvollen Reihenfolge und gruppierst sie nach übergeordneten Aktivitäten (siehe Beispiel unten). So definierst du nach und nach alle Anforderungen an die App. Alle Anforderungen zusammen bilden den Funktionsumfang.</p>
      <h3>Aufgabe</h3>
      <p>Erstelle ein User Story Mapping für eine vereinfachte Version unserer App-Idee.</p>
      <p><strong>Ausgangssituation:</strong></p>
      <p>Ein Schüler möchte mithilfe einer App einen Essensplan für <strong>fünf Schultage</strong> erstellen, ohne sein Wochenbudget von <strong>25 €</strong> zu überschreiten.</p>
      <p>Überlege, welche Funktionen die App benötigt, um den Schüler bei diesem Ziel zu unterstützen.</p>
    </section>
    <section class="assignment" aria-labelledby="phase3-individual">
      <div class="step-title"><h3 id="phase3-individual">Arbeitsauftrag 1 – Einzelarbeit</h3><span>20 Minuten</span></div>
      <ol><li>Überlege, welche Handlungsschritte notwendig sind, um das beschriebene Ziel zu erreichen.</li><li>Formuliere zu jedem Handlungsschritt eine kurze User Story aus Sicht des Nutzers, zum Beispiel: „Als Schüler möchte ich mein Wochenbudget eingeben können.“</li><li>Schreibe jede User Story auf eine eigene Karteikarte.</li><li>Ordne die Karteikarten von links nach rechts in einer zeitlich sinnvollen Reihenfolge an. Frühe Handlungsschritte stehen links, spätere rechts. Außerdem sollen thematisch ähnliche Handlungsschritte zusammengefasst werden.</li></ol>
    </section>
    <section class="assignment" aria-labelledby="phase3-group">
      <div class="step-title"><h3 id="phase3-group">Arbeitsauftrag 2 – Gruppenarbeit</h3><span>30 Minuten</span></div>
      <ol><li>Vergleicht eure User Stories innerhalb der Gruppe.</li><li>Ergänzt fehlende Stories und entfernt doppelte oder sehr ähnliche Einträge.</li><li>Einigt euch auf die wichtigsten Funktionen, die eine erste, einfache Version der App enthalten soll.</li><li>Übertragt eure ausgewählten User Stories in das Online-Board unten und ordnet sie in einer sinnvollen Reihenfolge an. Fasst ähnliche Stories zusammen und findet Begriffe für die Aktivitäten – wie im Beispiel.</li><li>Exportiert euer User Story Mapping als PDF und sendet es an die Lehrkraft.</li><li>Wir besprechen die Story Mappings anschließend im Plenum.</li></ol>
      <p><strong>Ergebnis:</strong> Ein gemeinsames User Story Mapping, das die Handlungsschritte aus Nutzersicht darstellt und den Funktionsumfang einer ersten, einfachen Version der App beschreibt.</p>
    </section>
    <section class="mapping-workspace" aria-labelledby="phase3-board-title">
      <h3 id="phase3-board-title">Euer User Story Mapping</h3>
      <label class="field-label" for="phase3-team">Namen eurer Gruppenmitglieder</label><input id="phase3-team" v-model="draft.team" maxlength="160">
      <p class="example-note">Oben stehen die Aktivitäten, darunter die passenden User Stories. Mit den Pfeilen könnt ihr Spalten und Karten verschieben.</p>
      <div class="mapping-scroll" tabindex="0" role="region" aria-label="Story-Mapping-Board, horizontal scrollbar">
        <div class="mapping-grid" :style="{ gridTemplateColumns: `repeat(${draft.columns.length}, minmax(190px, 1fr))` }">
          <section v-for="(col, c) in draft.columns" :key="col.id" class="mapping-column" :aria-label="`Aktivität ${c + 1}`">
            <div class="activity-card"><label class="field-label" :for="`activity-${col.id}`">{{ c + 1 }}. Aktivität</label><input :id="`activity-${col.id}`" v-model="col.activity" maxlength="120" placeholder="Aktivität benennen">
              <div class="card-actions"><button type="button" :disabled="c === 0" :aria-label="`Aktivität ${c + 1} nach links`" @click="moveColumn(c, -1)">←</button><button type="button" :disabled="c === draft.columns.length - 1" :aria-label="`Aktivität ${c + 1} nach rechts`" @click="moveColumn(c, 1)">→</button><button type="button" :disabled="draft.columns.length === 1" :aria-label="`Aktivität ${c + 1} mit ihren Karten entfernen`" @click="draft.columns.splice(c, 1)">Entfernen</button></div>
            </div>
            <article v-for="(item, i) in col.stories" :key="item.id" class="story-card">
              <label class="field-label" :for="`story-${item.id}`">User Story {{ i + 1 }}</label><textarea :id="`story-${item.id}`" v-model="item.text" rows="4" maxlength="600" placeholder="Als Schüler möchte ich …"></textarea>
              <div class="card-actions"><button type="button" :disabled="c === 0 || col.stories.length <= 1 || draft.columns[c - 1]?.stories.length >= maxStories" :aria-label="`Story ${i + 1} aus Aktivität ${c + 1} nach links`" @click="moveStory(c, i, -1)">←</button><button type="button" :disabled="c === draft.columns.length - 1 || col.stories.length <= 1 || draft.columns[c + 1]?.stories.length >= maxStories" :aria-label="`Story ${i + 1} aus Aktivität ${c + 1} nach rechts`" @click="moveStory(c, i, 1)">→</button><button type="button" :disabled="i === 0" :aria-label="`Story ${i + 1} in Aktivität ${c + 1} nach oben`" @click="moveRow(col.stories, i, -1)">↑</button><button type="button" :disabled="i === col.stories.length - 1" :aria-label="`Story ${i + 1} in Aktivität ${c + 1} nach unten`" @click="moveRow(col.stories, i, 1)">↓</button><button type="button" :disabled="col.stories.length === 1" :aria-label="`Story ${i + 1} aus Aktivität ${c + 1} entfernen`" @click="col.stories.splice(i, 1)">Entfernen</button></div>
            </article>
            <button type="button" class="add-story" :disabled="col.stories.length >= maxStories" :aria-label="`User Story zu Aktivität ${c + 1} hinzufügen`" @click="col.stories.push(story())">+ User Story</button>
          </section>
        </div>
      </div>
      <div class="mapping-actions"><button type="button" :disabled="draft.columns.length >= maxColumns" @click="draft.columns.push(column())">+ Spalte hinzufügen</button><button type="button" class="download-button" :disabled="exporting" @click="download">{{ exporting ? 'PDF wird erstellt …' : 'Als PDF herunterladen' }}</button></div>
      <p class="save-note">Eingaben werden nur in diesem Browser gespeichert. Ladet die PDF herunter und sendet sie anschließend an die Lehrkraft.</p>
      <p v-if="notice" role="status">{{ notice }}</p><p v-if="exportError" role="alert">{{ exportError }}</p>
    </section>
    <section class="mapping-example" aria-labelledby="phase3-example">
      <h3 id="phase3-example">Beispiel: User Story Mapping</h3><p>Ein vereinfachtes Beispiel für die Funktion „Wochenplan erstellen“. Es zeigt die Orientierung; im Workshop entwickelt ihr euer eigenes Mapping.</p>
      <div class="example-scroll"><div class="example-grid"><div v-for="(activity, i) in ['Budget festlegen', 'Gerichte ansehen', 'Woche planen', 'Budget prüfen']" :key="activity"><strong>{{ i + 1 }} {{ activity }}</strong><p v-if="i === 1">Als Schüler möchte ich eine Auswahl an möglichen Gerichten sehen, die ich zu Hause vorbereiten oder an einem Imbiss oder in einem Restaurant essen kann.</p><p>{{ i === 0 ? 'Als Schüler möchte ich mein Wochenbudget eingeben, damit ich meine Ausgabenlimite kenne.' : i === 1 ? 'Als Schüler möchte ich die Preise der Gerichte sehen, damit ich vergleichen kann.' : '…' }}</p></div></div></div>
      <h4>Kernfunktionen der ersten Version</h4><p>Budget setzen · Preise vergleichen · Gerichte zuordnen · Kosten kontrollieren</p>
      <h4>So wird das Mapping gelesen</h4><p>Die dunkle Reihe beschreibt die wesentlichen Handlungsschritte. Die gelben Karten enthalten beispielhafte User Stories. Die letzten beiden Karten sind bewusst offen gelassen. Aus den Stories werden Bildschirme und Interaktionen für den Figma-Prototyp abgeleitet.</p>
    </section>
    <section aria-labelledby="phase3-documents"><h3 id="phase3-documents">Beispiel für Lastenheft und Pflichtenheft</h3><div class="document-links"><a href="/material/3tgg2/EduVision_Lastenheft.pdf" target="_blank" rel="noopener noreferrer">Lastenheft – EduVision (PDF) ↗</a><a href="/material/3tgg2/EduVision_Pflichtenheft.pdf" target="_blank" rel="noopener noreferrer">Pflichtenheft – EduVision (PDF) ↗</a></div><p class="example-note">Die Dokumente beziehen sich auf das Schulessen-Beispiel dieser Übung.</p></section>
  </details>
</template>

<style scoped>
@import './designThinking.css';
.phase-three, .phase-three * { box-sizing: border-box; }
.phase-three { color: #172b44; }
h4 { font-size: 18px; margin: 20px 0 8px; font-weight: 600; }
button { padding: 12px 18px; min-height: 44px; border: 0; border-radius: 9px; background: #2156a0; color: white; font: inherit; font-size: 17px; cursor: pointer; }
button:disabled { opacity: .5; cursor: default; }
.mapping-scroll, .example-scroll { overflow-x: auto; max-width: 100%; margin-top: 20px; }
.mapping-grid { display: grid; gap: 12px; padding-bottom: 12px; align-items: start; }
.mapping-column { min-width: 0; display: grid; gap: 12px; }
.activity-card { background: #d1e7ff; border: 1px solid #8daed6; border-radius: 10px; padding: 12px; }
.story-card { background: #fff6d2; border: 1px solid #dfcb75; border-radius: 10px; padding: 12px; }
.activity-card .field-label, .story-card .field-label { margin-top: 0; }
.story-card textarea, .activity-card input { font-size: 16px; padding: 9px; }
.card-actions { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; }
.card-actions button { background: white; border: 1px solid #8daed6; color: #172b44; padding: 5px 9px; font-size: 13px; min-height: 34px; }
.mapping-actions, .document-links { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 20px; }
.mapping-example { margin-top: 32px; padding: 20px; background: white; border: 1px solid #8daed6; border-radius: 10px; }
.example-grid { display: grid; grid-template-columns: repeat(4, minmax(160px, 1fr)); gap: 10px; }
.example-grid strong { display: block; background: #172b44; color: white; border-radius: 9px; padding: 12px; font-size: 15px; min-height: 70px; }
.example-grid p { background: #fff1be; border-radius: 9px; padding: 12px; font-size: 15px; min-height: 140px; margin: 10px 0; }
.document-links a { display: block; padding: 14px 18px; border: 1px solid #8daed6; border-radius: 9px; background: white; font-size: 17px; }
[role=alert] { color: #9b2323; }
</style>
