<script setup>
import { computed, ref, watch } from 'vue'
import { sections } from './worksheet'
import { exportWorksheet } from './exportWorksheet'
const storageKey = 'imac-photoshop-worksheet-v1'
const today = new Date()
const data = ref({ name: '', group: '', date: `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`, answers: {} })
const notice = ref('')
try {
 const saved = JSON.parse(localStorage.getItem(storageKey) || 'null')
 if (saved && typeof saved === 'object') {
  for (const key of ['name','group','date']) if (typeof saved[key] === 'string') data.value[key] = saved[key]
  for (const f of sections.flatMap(s=>s.fields)) if (typeof saved.answers?.[f.id] === 'string') data.value.answers[f.id] = saved.answers[f.id]
 }
} catch { notice.value = 'Automatisches Laden ist nicht verfügbar. Bitte sichert eure Antworten als PDF.' }
watch(data, value => { try { localStorage.setItem(storageKey, JSON.stringify(value)) } catch { notice.value = 'Automatisches Speichern ist nicht verfügbar. Bitte sichert eure Antworten als PDF.' } }, { deep: true })
const fields = sections.flatMap(s=>s.fields)
const completed = computed(()=>fields.filter(f=>data.value.answers[f.id]?.trim()).length)
const practice = ref('Hier könnt ihr schreiben, Text markieren und die Cursorbewegung ausprobieren.')
const exporting = ref(false)
const error = ref('')
async function download() {
 if (exporting.value) return
 exporting.value = true; error.value = ''
 const snapshot = JSON.parse(JSON.stringify(data.value))
 try { await exportWorksheet(sections, snapshot) } catch { error.value = 'Der PDF-Download ist fehlgeschlagen. Eure Eingaben bleiben erhalten. Bitte erneut versuchen.' } finally { exporting.value = false }
}
</script>
<template>
 <main class="lesson">
  <nav class="top"><router-link to="/">← Schule</router-link><span>90 MINUTEN · DIGITALE ARBEITSBLÄTTER</span></nav>
  <header><p class="eyebrow">ERST IMAC. DANN PHOTOSHOP.</p><h1>Einführung Photoshop</h1><p>Lernt euren Arbeitsplatz kennen – von der Tastatur bis zum neuen Bilddokument.</p><p>Bearbeitet alle Aufgaben direkt hier im Browser. Die Abbildungen stammen aus euren Arbeitsblättern. Für den Photoshop-Teil braucht ihr keinen Programmzugang. Zum Schluss ladet ihr eure Antworten mit den Abbildungen als PDF herunter.</p></header>
  <div class="content">
   <div class="identity"><label>Name<input v-model="data.name" autocomplete="name" /></label><label>Klasse<input v-model="data.group" /></label><label>Datum<input v-model="data.date" type="date" /></label></div>
   <div class="download"><span>{{ completed }} von {{ fields.length }} Antworten ausgefüllt</span><button :disabled="exporting" @click="download">{{ exporting ? 'PDF wird erstellt …' : 'Antworten als PDF herunterladen' }}</button></div>
   <p class="note">Euer Arbeitsstand wird in diesem Browser gespeichert. Auch unvollständige Antworten könnt ihr als PDF herunterladen.</p><p v-if="notice" role="status">{{ notice }}</p><p v-if="error" role="alert">{{ error }}</p>
   <nav class="schedule" aria-label="Arbeitsblätter"><a v-for="s in sections" :key="s.id" :href="'#'+s.id"><small>{{ s.time }}</small>{{ s.title }}</a></nav>
   <section v-for="(s,i) in sections" :id="s.id" :key="s.id">
    <p class="eyebrow">{{ String(i+1).padStart(2,'0') }} / {{ s.time }}</p><h2>{{ s.title }}</h2><p>{{ s.intro }}</p>
    <div v-if="s.info" class="info">{{ s.info }}</div>
    <div v-if="s.links" class="sources"><strong>Nachschlagen:</strong><a v-for="[title,url] in s.links" :key="url" :href="url" target="_blank" rel="noopener noreferrer">{{ title }} ↗</a></div>
    <figure v-if="s.image"><a :href="s.image" target="_blank" rel="noopener noreferrer" :aria-label="s.alt + ' in voller Größe öffnen'"><img :src="s.image" :alt="s.alt" /></a><figcaption>Abbildung aus der PDF-Vorlage · Zum Vergrößern anklicken. Darstellung und Funktionen können je nach Version abweichen.</figcaption></figure>
    <label v-if="s.id==='keys'" class="practice">Testfeld (wird nicht ins PDF übernommen)<textarea v-model="practice" rows="3" /></label>
    <div class="fields"><label v-for="f in s.fields" :key="f.id" :for="f.id"><span>{{ f.label }}</span><textarea :id="f.id" v-model="data.answers[f.id]" rows="3" placeholder="Eure Antwort …" /></label></div>
    <details v-if="s.solutions"><summary>Selbstkontrolle – nach dem Bearbeiten öffnen</summary><p>Vergleicht eure Antworten und ergänzt sie oben. Diese Hinweise werden nicht in euer Antwort-PDF übernommen.</p><ul><li v-for="solution in s.solutions" :key="solution">{{ solution }}</li></ul></details>
   </section>
   <div class="download"><p>Fertig? Sichert euren Arbeitsbogen als PDF.</p><button :disabled="exporting" @click="download">{{ exporting ? 'PDF wird erstellt …' : 'Antworten als PDF herunterladen' }}</button></div>
   <p v-if="error" role="alert">{{ error }}</p>
   <footer>Grundlage: die bereitgestellten iMac-Arbeitsblätter (Fritsch) sowie die Photoshop-Infoblätter und Lösungsvorlagen. Die Recherchelinks führen zu Apple und Adobe.<br /><router-link to="/">← Zurück zur Schule</router-link></footer>
  </div>
 </main>
</template>
<style scoped>
.lesson{font-family:'Jost',sans-serif;color:#172c42;background:#f1f5f8;font-size:19px;line-height:1.6;user-select:text}.top{display:flex;justify-content:space-between;gap:20px;padding:20px 5%;background:white}.top span,.eyebrow{font-size:14px;letter-spacing:.1em;font-weight:600}header{background:#09263e;color:white;padding:60px max(5%,calc((100% - 1120px)/2))}h1{font-size:clamp(38px,6vw,72px);line-height:1.1}header p{max-width:850px}.content{max-width:1120px;margin:auto;padding:32px 24px}.identity{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px}label{display:block;font-weight:500}input,textarea{display:block;box-sizing:border-box;width:100%;border:1px solid #aabacb;border-radius:5px;background:white;padding:12px;font:inherit;color:#172c42;margin-top:8px}textarea{resize:vertical;min-height:105px}a{color:#135fc7;text-underline-offset:4px}button{font:inherit;cursor:pointer;border:0;border-radius:5px;padding:12px 22px;color:white;background:#135fc7}button:disabled{opacity:.6;cursor:wait}a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible,summary:focus-visible{outline:3px solid #d57700;outline-offset:3px}.download{display:flex;align-items:center;justify-content:space-between;gap:20px;margin:28px 0}.note,figcaption,footer{font-size:15px;color:#536477}.schedule{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:32px 0}.schedule a{overflow-wrap:anywhere;background:white;padding:16px;text-decoration:none;border-bottom:3px solid #92bedc}.schedule small{display:block;color:#536477}section{scroll-margin-top:20px;padding:36px;background:white;margin:24px 0;border:1px solid #d8e2eb}h2{font-size:clamp(28px,4vw,40px);line-height:1.2}.info,.practice{background:#edf5fc;padding:22px;margin:22px 0}.sources{display:flex;gap:10px 24px;flex-wrap:wrap;margin:24px 0;font-size:16px}.sources strong{width:100%}figure{margin:30px 0}img{display:block;width:100%;height:auto}.fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}.fields label{min-width:0}details{margin-top:28px;border:1px solid #bdcddd;padding:18px}summary{cursor:pointer;font-weight:600}li{margin:10px 0}footer{padding:32px 0}footer a{display:inline-block;margin-top:16px}[role=alert]{color:#a32626}
@media(max-width:700px){.identity,.fields{grid-template-columns:1fr}.schedule{grid-template-columns:repeat(2,minmax(0,1fr))}.top span{display:none}.download{align-items:stretch;flex-direction:column}section{padding:22px}.content{padding:20px 14px}header{padding:36px 24px}}
</style>
