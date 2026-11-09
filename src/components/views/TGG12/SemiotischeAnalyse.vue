<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
import sections from './semiotischeAnalyse.json'
const busy = ref(false)
const error = ref('')
const container = ref(null)
const scale = ref(1)
let observer
onMounted(() => {
  observer = new ResizeObserver(() => { scale.value = Math.min(1, container.value.clientWidth / 793.7) })
  observer.observe(container.value)
})
onBeforeUnmount(() => observer?.disconnect())
async function downloadPdf() {
  busy.value = true; error.value = ''
  try {
    await document.fonts.ready
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
    pdf.setProperties({ title: 'Semiotische Analyse · Arbeitsblätter' })
    const papers = container.value.querySelectorAll('.a4-paper')
    for (let i = 0; i < papers.length; i++) {
      const canvas = await html2canvas(papers[i], { scale: 2, backgroundColor: '#ffffff', onclone(doc) {
        doc.querySelectorAll('.a4-paper').forEach(p => { p.style.transform = 'none'; p.style.boxShadow = 'none' })
      } })
      if (i) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297)
    }
    pdf.save('10_Semiotische_Analyse.pdf')
  } catch { error.value = 'Die PDF konnte nicht erstellt werden. Bitte erneut versuchen.' }
  finally { busy.value = false }
}
</script>

<template>
  <main class="analysis-page">
    <div class="screen-only">
      <RouterLink to="/3tgg12">← Zur Themenübersicht</RouterLink>
      <h1>#10 Semiotische Analyse</h1>
      <div class="actions">
        <Button label="Als PDF herunterladen" :loading="busy" @click="downloadPdf" />
      </div>
      <Message v-if="error" severity="error" :closable="false">{{ error }}</Message>
    </div>
    <div ref="container" class="papers">
      <div v-for="page in 4" :key="page" class="paper-frame" :style="{ height: `${1122.52 * scale}px` }">
        <article class="a4-paper" :style="{ transform: `scale(${scale})` }" :aria-label="`Arbeitsblatt ${page} von 4`">
          <header class="worksheet-header">
            <img src="/designvorlagen/chs.svg" width="128" height="44" alt="CHS-Logo" />
            <h2>GESTALTUNGS- UND MEDIENTECHNIK</h2>
            <p>Eingangsklasse | CHS | Heckel</p>
          </header>
          <div class="worksheet-body" :class="{ 'answer-page': page > 1, 'intro-page': page === 1 }">
            <template v-if="page === 1">
              <h2>Arbeitsauftrag: Semiotische Analyse</h2>
              <h3>Was ist eine semiotische Analyse?</h3>
              <p>Die <strong>Semiotik</strong> ist die Wissenschaft von den Zeichen. Eine semiotische Analyse untersucht Zeichen aus drei Perspektiven:</p>
              <ol class="perspectives">
                <li><strong>Syntax – Aufbau:</strong> Wie sind die Zeichen aufgebaut und angeordnet?</li>
                <li><strong>Semantik – Bedeutung:</strong> Was bedeuten die einzelnen Zeichen?</li>
                <li><strong>Pragmatik – Verwendung und Wirkung:</strong> Wie werden die Zeichen verwendet, verstanden und welche Reaktionen lösen sie aus?</li>
              </ol>
              <p class="assignment"><strong>Arbeitsauftrag:</strong> Analysiere die folgenden drei Beispiele. Beantworte zu jedem Bereich die Frage in ein bis zwei Sätzen.</p>
              <section class="intro-example">
                <h3>Semiotische Analyse: „Wir müssen reden“</h3>
                <h4>1. Syntax – Wie sind die Zeichen aufgebaut?</h4>
                <p>Die Syntax untersucht die Beziehungen der Zeichen untereinander, unabhängig von ihrer Bedeutung.</p>
                <p>Der Satz besteht aus drei Wörtern:</p>
                <ul>
                  <li>„Wir“: Subjekt</li>
                  <li>„müssen“: Modalverb</li>
                  <li>„reden“: Verb im Infinitiv</li>
                </ul>
                <p>Die grammatische Anordnung macht den Satz sprachlich verständlich.</p>
                <h4>2. Semantik – Was bedeuten die Zeichen?</h4>
                <p>Die Semantik untersucht die Beziehung zwischen Zeichen und ihrer Bedeutung.</p>
                <ul>
                  <li>„Wir“: Bezeichnet eine Gruppe von mindestens zwei Personen, zu der die sprechende Person gehört.</li>
                  <li>„müssen“: Drückt eine Notwendigkeit oder Verpflichtung aus.</li>
                  <li>„reden“: Bezeichnet eine sprachliche Verständigung.</li>
                </ul>
                <p><strong>Gesamtbedeutung:</strong> Die sprechende Person hält ein gemeinsames Gespräch für notwendig. Über den Anlass oder Inhalt sagt der Satz nichts aus.</p>
                <h4>3. Pragmatik – Wie werden die Zeichen verwendet und verstanden?</h4>
                <p>Die Pragmatik untersucht die Beziehung zwischen Zeichen und ihren Verwendern. Dabei spielen Situation, Erfahrungen, Erwartungen und Absichten eine Rolle.</p>
                <p><strong>Beispiel A – Partnerschaft:</strong> Nach einem Streit schreibt jemand „Wir müssen reden“. Die empfangende Person vermutet ein ernstes Beziehungsproblem, wird nervös und reagiert möglicherweise defensiv.</p>
                <p><strong>Beispiel B – Schulprojekt:</strong> Ein Mitschüler schreibt denselben Satz. Die empfangende Person denkt an eine notwendige Absprache und schlägt einen Termin vor.</p>
                <p>In beiden Fällen sind Syntax und grundlegende Semantik gleich. Die pragmatische Bedeutung und Wirkung unterscheiden sich jedoch.</p>
                <p class="example-conclusion"><strong>Fazit:</strong> Die Semiotik untersucht Zeichen aus drei Perspektiven: ihren Aufbau (Syntax), ihre Bedeutung (Semantik) und ihre Verwendung und Wirkung im jeweiligen Zusammenhang (Pragmatik).</p>
              </section>
            </template>
            <template v-else>
              <div class="questions-content">
              <div class="topic-heading">
                <h2>{{ page - 1 }}. {{ sections[page - 2].title }}</h2>
                <img v-if="page === 3" src="/3tgg12/semiotische-analyse/apple.jpg" alt="Apple-Logo" />
                <img v-if="page === 4" src="/3tgg12/semiotische-analyse/lichtschalter.jpg" alt="Weißer Lichtschalter mit Rahmen und Wippe" />
              </div>
              <section v-for="group in sections[page - 2].groups" :key="group.heading" class="group">
                <h3>{{ group.heading }}</h3>
                <p>{{ group.description }}</p>
                <p><strong>Frage:</strong> {{ group.question }}</p>
              </section>
              <h3 class="answer-heading">Antwortschema</h3>
              </div>
              <table class="answer-table">
                <thead><tr><th>Bereich</th><th>Deine Analyse</th></tr></thead>
                <tbody>
                  <tr v-for="area in ['Syntax', 'Semantik', 'Pragmatik']" :key="area">
                    <th>{{ area }}</th><td>
                      <p v-if="page === 2 && area === 'Syntax'" class="given-answer">Der Satz besteht aus dem Subjekt „Du“ und dem Prädikat „bist spät dran“. Das Subjekt steht an erster Stelle, das finite Verb „bist“ an zweiter Stelle; danach folgt „spät dran“.</p>
                      <template v-else-if="page === 3 && area === 'Syntax'">
                        <p class="given-answer partial-answer">Das Logo besteht aus einer vereinfachten Apfelform mit einer seitlichen Aussparung. Oberhalb der Apfelform …</p>
                        <div v-for="line in 2" :key="line" class="writing-line"></div>
                      </template>
                      <template v-else-if="page === 3 && area === 'Semantik'">
                        <p class="given-answer partial-answer">Die Apfelform und das Blatt stellen eine Frucht dar. Als Markenzeichen steht das Logo außerdem für …</p>
                        <div v-for="line in 2" :key="line" class="writing-line"></div>
                      </template>
                      <template v-else><div v-for="line in 4" :key="line" class="writing-line"></div></template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </template>
          </div>
          <footer><span>3TGG1/2 · Gestaltungs- und Medientechnik</span><span>{{ page }} / 4</span></footer>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped>
.analysis-page { max-width: 1080px; margin: auto; padding: 32px; font-family: 'Jost', sans-serif; color: #202d32; }
a { color: #176746; } h1 { font-size: 28px; font-weight: 500; }
.papers { width: 100%; max-width: 210mm; }
.paper-frame { position: relative; margin: 24px 0; }
.a4-paper { display: flex; flex-direction: column; width: 210mm; height: 297mm; padding: 10mm 12mm 8mm; box-sizing: border-box; transform-origin: top left; background: white; color: #202d32; box-shadow: 0 2px 18px #0002; font-size: 14px; line-height: 1.45; }
.worksheet-header { text-align: center; border-bottom: 1px solid #abb3b5; padding-bottom: 13px; }
.worksheet-header img { display: block; margin: 0 auto 9px; }
.worksheet-header h2 { font-size: 15px; font-weight: 600; letter-spacing: .05em; margin: 0 0 3px; }
.worksheet-header p { font-size: 12px; margin: 0; }
.worksheet-body { flex: 1; }
h2 { font-size: 22px; margin: 14px 0 20px; }
h3 { font-size: 15px; margin: 18px 0 6px; }
p { margin: 6px 0 10px; }
.perspectives { padding-left: 22px; }li { margin: 14px 0; }
.assignment { margin: 24px 0 30px; }
.intro-page { font-size: 13px; line-height: 1.35; }
.intro-page > h2 { font-size: 21px; margin: 14px 0; }
.intro-page > h3 { margin: 12px 0 6px; }
.intro-page .perspectives { margin: 10px 0; }
.intro-page .perspectives li { margin: 8px 0; }
.intro-page .assignment { margin: 16px 0; }
.intro-example { margin-top: 18px; border-top: 1px solid #abb3b5; padding-top: 12px; font-size: 12px; line-height: 1.35; }
.intro-example h3 { font-size: 16px; margin: 0 0 10px; }
.intro-example h4 { font-size: 13px; margin: 10px 0 4px; }
.intro-example p { margin: 5px 0; }
.intro-example ul { margin: 5px 0; padding-left: 20px; }
.intro-example li { margin: 2px 0; }
.intro-example .example-conclusion { margin-top: 10px; }
table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 13px; }
th, td { border: 1px solid #abb3b5; padding: 12px; text-align: left; vertical-align: top; }
th:first-child { width: 100px; }
thead { background: #f3f6f4; }
.topic-heading { display: flex; align-items: center; justify-content: space-between; gap: 20px; min-height: 72px; margin-bottom: 12px; }
.topic-heading h2 { margin: 0; }
.topic-heading img { width: 82px; height: 72px; object-fit: contain; flex-shrink: 0; }
.group { margin: 20px 0; }.group p { margin: 4px 0; }
.answer-heading { margin-top: 24px; }
.answer-page { display: flex; flex-direction: column; min-height: 0; padding-bottom: 16px; }
.questions-content { flex: 0 0 auto; }
.answer-table { display: flex; flex-direction: column; flex: 1; min-height: 0; border-top: 1px solid #abb3b5; border-left: 1px solid #abb3b5; }
.answer-table thead { flex-shrink: 0; }
.answer-table tbody { display: flex; flex-direction: column; flex: 1; min-height: 0; }
.answer-table tr { display: grid; grid-template-columns: 125px minmax(0, 1fr); }
.answer-table thead tr { flex: none; }
.answer-table tbody tr { flex: 1; min-height: 0; }
.answer-table th, .answer-table td { width: auto; border: 0; border-right: 1px solid #abb3b5; border-bottom: 1px solid #abb3b5; }
.answer-table td { display: flex; flex-direction: column; padding: 0 12px 10px; }
.given-answer { margin: 12px 0; }
.partial-answer { margin-bottom: 0; }
.writing-line { flex: 1; min-height: 0; border-bottom: 1px solid #d3dad6; }
footer { display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid #d3dad6; font-size: 10px; }
@media(max-width:700px) { .analysis-page { padding: 16px; } }
</style>
