<script setup>
import { computed, ref } from 'vue'
import { useLearningProgress } from './useLearningProgress'
import clusters from './pruefung-cluster.json'

const questionIds = new Set(clusters.flatMap(c => c.topics.flatMap(t => t.questions.map(q => q.id))))
const { user, ready, loaded, busy, pending, progress, message, today, learned, review, plan, login, logout, setStatus, notes, noteDrafts, noteMessages, editNote, saveNote } = useLearningProgress(questionIds)

const search = ref('')
const sourceFilter = ref('')
const revealed = ref(new Set())
const questionCount = clusters.reduce((sum, cluster) => sum + cluster.topics.reduce((n, topic) => n + topic.questions.length, 0), 0)
const filteredClusters = computed(() => {
  const term = search.value.trim().toLocaleLowerCase('de')
  return clusters.map((cluster) => ({
    ...cluster,
    topics: cluster.topics.map((topic) => ({
      ...topic,
      questions: topic.questions.filter((question) =>
        (!sourceFilter.value || question.document === sourceFilter.value) &&
        (!term || `${cluster.title} ${topic.title} ${question.question} ${question.context || ''}`.toLocaleLowerCase('de').includes(term))
      )
    })).filter((topic) => topic.questions.length)
  })).filter((cluster) => cluster.topics.length)
})
const visibleCount = computed(() => filteredClusters.value.reduce((sum, cluster) => sum + countQuestions(cluster), 0))
const filtering = computed(() => Boolean(search.value.trim() || sourceFilter.value))
const countQuestions = (cluster) => cluster.topics.reduce((sum, topic) => sum + topic.questions.length, 0)
const clusterStats = computed(() => Object.fromEntries(clusters.map(cluster => {
  const stats = { secure: 0, open: 0, review: 0 }
  for (const topic of cluster.topics) {
    for (const question of topic.questions) {
      const status = progress.value[question.id]
      stats[status === 'secure' || status === 'review' ? status : 'open'] += 1
    }
  }
  return [cluster.id, stats]
})))
const toggleAnswer = (id) => {
  if (revealed.value.has(id)) revealed.value.delete(id)
  else revealed.value.add(id)
}
</script>

<template>
  <main class="study-page">
    <RouterLink to="/" class="back">← Zur Startseite</RouterLink>
    <header>
      <p class="eyebrow">Dein Lernraum · Prüfungsvorbereitung</p>
      <h1>Schulrecht und Schulorganisation</h1>
      <p class="intro">Wähle ein Cluster, beantworte die Fragen zunächst selbst und blende anschließend die Antwort aus der PDF ein.</p>
      <p class="meta">{{ clusters.length }} Hauptcluster · {{ questionCount }} Fragen und Aufgaben · 2 Lernunterlagen</p>
    </header>

    <section class="learning-dashboard" aria-label="Dein Lernfortschritt">
      <div class="account-row">
        <h2>Dein Lernplan bis zum 12.10.2026</h2>
        <button v-if="!user" type="button" :disabled="!ready || busy" @click="login">{{ busy ? 'Anmeldung läuft …' : 'Mit Google anmelden' }}</button>
        <div v-else class="account-row"><span>{{ user.displayName || user.email }}</span><button type="button" :disabled="busy || pending.size > 0" @click="logout">Abmelden</button></div>
      </div>
      <p>10.09.–04.10.: Fragen lernen · 05.–11.10.: Wiederholung · 12.10.: Prüfung</p>
      <p v-if="!user">Melde dich an, um deinen Lernstand auf deinen Geräten zu speichern. Zum Start: 8 neue Fragen täglich plus Wiederholung.</p>
      <template v-if="user && loaded && plan">
        <div class="plan-stats">
          <div><strong>{{ learned }} / {{ questionCount }}</strong><span>Fragen sicher</span></div>
          <div><strong>{{ review }}</strong><span>zum Wiederholen markiert</span></div>
          <div><strong>{{ plan.days ? plan.daily : plan.remaining }}</strong><span>{{ plan.days ? 'Fragen pro Tag eingeplant' : 'Fragen noch offen' }}</span></div>
          <div><strong>{{ plan.todayRemaining }}</strong><span>noch bis zum heutigen Planziel</span></div>
        </div>
        <progress :value="learned" :max="questionCount" :aria-label="`${learned} von ${questionCount} Fragen sicher`"></progress>
        <p v-if="today >= '2026-10-12'">{{ today === '2026-10-12' ? 'Heute ist Prüfungstag.' : 'Der Prüfungstermin ist vorbei.' }} {{ plan.remaining }} Fragen sind noch nicht als sicher markiert.</p>
        <p v-else-if="today < '2026-09-10'">Dein Lernplan startet am 10.09.2026.</p>
        <p v-else-if="!plan.remaining">Alle Fragen sind als sicher markiert. Nutze die restliche Zeit zum Wiederholen.</p>
        <p v-else-if="plan.behind" class="question-note">{{ plan.behind }} Fragen hinter dem Plan. Bis heute Morgen waren {{ plan.expected }} sichere Fragen vorgesehen.</p>
        <p v-else>Du liegst im Plan. Bis heute Abend sind {{ plan.target }} sichere Fragen vorgesehen.</p>
        <p class="meta">Der Plan rechnet ab dem 10.09. mit 8 Fragen täglich, bis alle Fragen erreicht sind. Ein negativer Wert bei „noch bis zum heutigen Planziel“ zeigt deinen Vorsprung, der für die nächsten Tage zählt. Nur „Sicher“ zählt zum Lernziel. „Wiederholen“ nimmt eine Frage wieder aus dem sicheren Bestand.</p>
      </template>
      <p role="status">{{ message }}</p>
    </section>

    <details class="source-note">
      <summary>Über die Lernunterlagen</summary>
      <p>Fragen und Antworten stammen aus deinen PDFs. Zeilenumbrüche und Abstände sind für die Bildschirmansicht angepasst. Ähnliche Fragen aus beiden Dokumenten bleiben mit ihrer jeweiligen Antwort erhalten.</p>
      <p>Die Antworten geben den Stand der Vorlagen wieder; sie wurden nicht auf den aktuellen Rechtsstand geprüft. Offene Angaben der Vorlage sind gekennzeichnet. Seitenangaben beziehen sich auf die PDF-Seitenzählung.</p>
      <div class="source-links">
        <a href="/lernmaterial/Schulrecht.pdf" target="_blank" rel="noopener">Schulrecht.pdf öffnen ↗</a>
        <a href="/lernmaterial/Schulorganisation.pdf" target="_blank" rel="noopener">Schulorganisation.pdf öffnen ↗</a>
      </div>
    </details>

    <section class="study-tools" aria-label="Fragen filtern">
      <label>Fragen und Themen suchen
        <input v-model="search" type="search" placeholder="Zum Beispiel Aufsicht, Noten oder Berufskolleg" />
      </label>
      <label>Unterlage
        <select v-model="sourceFilter">
          <option value="">Beide PDFs</option>
          <option>Schulrecht</option>
          <option>Schulorganisation</option>
        </select>
      </label>
      <button type="button" class="reset-button" :disabled="!revealed.size" @click="revealed.clear()">Alle Antworten verbergen</button>
    </section>
    <p class="results" role="status">{{ visibleCount }} von {{ questionCount }} Fragen</p>
    <p v-if="!visibleCount" class="empty-state">Keine passenden Fragen gefunden. Ändere den Suchbegriff oder wähle beide PDFs.</p>

    <section class="clusters" aria-label="Lerncluster">
      <details v-for="cluster in filteredClusters" :key="`${cluster.id}-${filtering}`" class="cluster" :open="filtering">
        <summary>
          <span class="number">{{ cluster.id.split('-')[1].padStart(2, '0') }}</span>
          <span class="cluster-heading">
            <span class="cluster-title">{{ cluster.title }}</span>
            <span class="count">{{ cluster.topics.length }} Unterthemen · {{ countQuestions(cluster) }} Fragen</span>
            <span v-if="user && loaded" class="cluster-stats" aria-label="Lernstand des gesamten Hauptthemas">
              <span class="stat-secure">{{ clusterStats[cluster.id].secure }} Sicher</span>
              <span class="stat-open">{{ clusterStats[cluster.id].open }} Offen</span>
              <span class="stat-review">{{ clusterStats[cluster.id].review }} Wiederholen</span>
              <span v-if="filtering" class="stats-scope">Gesamtes Hauptthema</span>
            </span>
            <span v-else class="count">{{ user ? 'Lernstatistik wird geladen …' : 'Für deine Lernstatistik bitte anmelden.' }}</span>
          </span>
        </summary>
        <div class="topics">
          <details v-for="topic in cluster.topics" :key="topic.title" class="topic" :open="filtering">
            <summary>{{ topic.title }} <span class="count inline-count">{{ topic.questions.length }} Fragen</span></summary>
            <div class="topic-content">
              <article v-for="question in topic.questions" :key="question.id" class="question-card">
                <a class="question-source" :href="`/lernmaterial/${question.document}.pdf#page=${question.page}`" target="_blank" rel="noopener">{{ question.document }} · PDF-S. {{ question.page }} ↗</a>
                <p v-if="question.context" class="case-context">{{ question.context }}</p>
                <h2 :id="`question-${question.id}`">{{ question.question }}</h2>
                <p v-if="question.note" class="question-note">{{ question.note }}</p>
                <button type="button" class="answer-button" :aria-expanded="revealed.has(question.id)" :aria-controls="`answer-${question.id}`" @click="toggleAnswer(question.id)">
                  {{ revealed.has(question.id) ? 'Antwort verbergen' : 'Antwort anzeigen' }}
                </button>
                <label v-if="user" class="learning-status">Mein Lernstand
                  <select :value="progress[question.id] || 'open'" :disabled="!loaded || pending.has(question.id)" @change="setStatus(question.id, $event.target.value)">
                    <option value="open">Offen</option>
                    <option value="review">Wiederholen</option>
                    <option value="secure">Sicher</option>
                  </select>
                </label>
                <div v-if="revealed.has(question.id)" :id="`answer-${question.id}`" class="answer" role="region" :aria-labelledby="`question-${question.id}`">
                  <p class="answer-label">Antwort aus der PDF</p>
                  <p v-for="(paragraph, index) in question.answer.split('\n\n')" :key="index">{{ paragraph }}</p>
                </div>
                <div class="note-editor">
                  <label :for="`note-${question.id}`">Bemerkungen</label>
                  <textarea :id="`note-${question.id}`" :value="noteDrafts[question.id] ?? notes[question.id] ?? ''" :disabled="!user || !loaded || pending.has(question.id)" rows="3" maxlength="10000" placeholder="Eigene Merksätze, Beispiele oder offene Fragen …" @input="editNote(question.id, $event.target.value)"></textarea>
                  <button type="button" :disabled="!user || !loaded || pending.has(question.id) || noteDrafts[question.id] === undefined" @click="saveNote(question.id)">Speichern</button>
                  <p v-if="!user">Melde dich an, um Bemerkungen zu speichern.</p>
                  <p role="status">{{ noteMessages[question.id] }}</p>
                </div>
              </article>
            </div>
          </details>
        </div>
      </details>
    </section>
  </main>
</template>

<style scoped>
.note-editor { display: grid; gap: 10px; margin-top: 24px; }
.note-editor label { font-size: 14px; font-weight: 500; }
.note-editor textarea { box-sizing: border-box; width: 100%; min-width: 0; resize: vertical; padding: 12px; border: 1px solid #c8d2cb; border-radius: 8px; font: inherit; font-size: 16px; line-height: 1.5; }
.note-editor textarea:focus-visible { outline: 2px solid #315e4c; outline-offset: 2px; }
.note-editor button { justify-self: start; }
.note-editor p { margin: 0; font-size: 13px; color: #526557; }

.learning-dashboard { padding: 24px; margin: 28px 0; border: 1px solid #c8d8cc; border-radius: 12px; background: #f4f8f5; }
.account-row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
.account-row h2 { margin: 0; }
.learning-dashboard p { line-height: 1.6; }
.plan-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 18px; margin: 24px 0; }
.plan-stats strong, .plan-stats span { display: block; }
.plan-stats strong { font-size: 28px; color: #315e4c; }
.plan-stats span { font-size: 13px; }
progress { width: 100%; height: 14px; accent-color: #315e4c; }
.learning-status { display: inline-flex; gap: 10px; align-items: center; flex-wrap: wrap; margin: 12px 0 0 12px; font-size: 14px; }

.study-page { user-select: text; max-width: 1000px; margin: 0 auto; padding: 64px 32px; color: #222; }
.back { display: inline-block; margin-bottom: 36px; color: #666; text-decoration: none; }
.eyebrow { color: #66746e; font-size: 14px; margin-bottom: 12px; }
h1 { font-size: clamp(28px, 4vw, 44px); line-height: 1.15; margin-bottom: 20px; }
.intro { max-width: 760px; line-height: 1.65; color: #555; }
.meta { margin-top: 20px; font-size: 14px; color: #66746e; }
.source-note { margin: 28px 0 32px; padding: 20px; background: #f0f4f1; border-radius: 8px; font-size: 14px; line-height: 1.6; }
.source-note p + p { margin-top: 8px; }
.source-links, .references { display: flex; flex-wrap: wrap; gap: 10px 20px; }
.source-links { margin-top: 14px; }
a { color: #315e4c; text-underline-offset: 3px; }
.clusters { display: grid; gap: 14px; }
.cluster { border: 1px solid #dce3de; border-radius: 10px; background: white; overflow: hidden; }
summary { cursor: pointer; line-height: 1.5; }
.cluster > summary { padding: 22px; }
.number { display: inline-block; margin: 0 14px 0 6px; color: #718478; font-size: 14px; vertical-align: top; padding-top: 4px; }
.cluster-heading { display: inline-block; width: calc(100% - 76px); vertical-align: top; }
.cluster-stats { display: flex; flex-wrap: wrap; gap: 6px 10px; margin-top: 12px; font-size: 13px; font-weight: 400; }
.cluster-stats > span { padding: 3px 9px; border-radius: 6px; }
.stat-secure { background: #e1f0e5; color: #245137; }
.stat-open { background: #ecefed; color: #48534d; }
.stat-review { background: #fff0cb; color: #75500e; }
.stats-scope { color: #647367; }
.cluster-title { display: block; font-size: 19px; font-weight: 600; }
.count { display: block; margin-top: 5px; color: #777; font-size: 13px; }
.cluster[open] > summary { background: #f6f8f6; border-bottom: 1px solid #e3e8e4; }
.topics { padding: 8px 22px 16px; }
.topic + .topic { border-top: 1px solid #e8ece9; }
.topic > summary { padding: 16px 4px; font-weight: 500; }
.topic-content { padding: 0 8px 22px 24px; }
h2 { font-size: 18px; line-height: 1.6; color: #222; font-weight: 500; margin: 14px 0 20px; }
.study-tools { display: flex; align-items: end; flex-wrap: wrap; gap: 16px; }
.study-tools label { display: grid; gap: 8px; font-size: 13px; color: #526557; }
.study-tools label:first-child { flex: 1 1 300px; }
input, select, button { font: inherit; box-sizing: border-box; }
input, select { padding: 12px; background: white; border: 1px solid #c8d2cb; border-radius: 8px; min-height: 46px; }
input { width: 100%; min-width: 0; }
button { cursor: pointer; border-radius: 7px; padding: 11px 16px; border: 1px solid #315e4c; }
.answer-button { background: #315e4c; color: white; }
.answer-button:hover { background: #214a39; }
.reset-button { background: white; color: #315e4c; min-height: 46px; }
button:disabled { opacity: .4; cursor: default; }
input:focus-visible, select:focus-visible, button:focus-visible { outline: 2px solid #315e4c; outline-offset: 3px; }
.results { color: #647367; font-size: 14px; margin: 20px 0; }
.empty-state { padding: 24px; background: #f0f4f1; border-radius: 8px; }
.inline-count { display: inline; margin-left: 8px; }
.question-card { padding: 22px 0; }
.question-card + .question-card { border-top: 1px solid #e0e7e2; }
.question-source { font-size: 13px; }
.case-context { color: #526557; line-height: 1.6; padding: 12px; background: #f6f8f6; }
.question-note { padding: 12px; background: #fff5d7; font-size: 14px; line-height: 1.5; }
.answer { margin-top: 20px; padding: 20px; border-left: 3px solid #648672; border-radius: 0 8px 8px 0; background: #f3f7f4; overflow-wrap: anywhere; }
.answer p { line-height: 1.65; margin: 0 0 10px; }
.answer p:last-child { margin-bottom: 0; }
.answer .answer-label { color: #526557; font-size: 12px; font-weight: 500; margin-bottom: 20px; }
ul { padding-left: 20px; margin: 0 0 20px; }
li { line-height: 1.6; margin-bottom: 8px; }
.references { font-size: 13px; }
summary:hover { background: #f6f8f6; }
summary:focus-visible, a:focus-visible { outline: 2px solid #315e4c; outline-offset: -2px; }
@media (max-width: 600px) {
  .study-page { padding: 36px 16px; }
  .cluster > summary { padding: 16px 10px; }
  .cluster-title { font-size: 17px; }
  .topics { padding: 6px 12px 10px; }
  .topic-content { padding-left: 8px; }
}
</style>
