<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
const dialogOpen = ref(false)
const saved = ref(false)
const topic = ref('Visuelle Kommunikation')
const grade = ref('3TGG1/2')
const tab = ref('Übersicht')
const classes = [
  { name: '3TGG1/2', subject: 'Gestaltungs- und Medientechnik', tasks: 12, color: 'mint' },
  { name: '3TGG2', subject: 'Projekt- und Designmanagement', tasks: 4, color: 'lavender' },
  { name: '1BFD1 BPK', subject: 'Bild- und Produktionstechnik', tasks: 7, color: 'peach' }
]
</script>

<template>
  <main class="preview-page">
    <div class="shell">
      <RouterLink to="/" class="back">← Zur Startseite</RouterLink>
      <div class="notice"><strong>Designentwurf</strong><span>Visuelle Vorschau im Stil von Nuxt UI. Die Nuxt-UI-Bibliothek ist noch nicht installiert.</span></div>
      <div class="app-layout">
        <aside class="sidebar">
          <div class="brand"><span class="brand-mark">S</span><div><strong>Schule</strong><small>Dein Arbeitsbereich</small></div></div>
          <p class="nav-heading">ARBEITSBEREICH</p>
          <nav aria-label="Beispielnavigation">
            <button v-for="item in ['Übersicht', 'Klassen', 'Unterricht planen', 'Arbeitsaufträge']" :key="item" :class="{ active: tab === item }" @click="tab = item"><span class="nav-dot" />{{ item }}</button>
          </nav>
          <div class="sidebar-bottom"><span class="avatar">MH</span><div><strong>Mein Bereich</strong><small>Schuljahr 2026/27</small></div></div>
        </aside>
        <section class="content">
          <div class="topline"><span>Arbeitsbereich <span class="slash">/</span> {{ tab }}</span><span class="status"><i /> Schuljahr 2026/27</span></div>
          <div class="page-heading"><div><p class="eyebrow">DEIN ARBEITSBEREICH</p><h1>Unterricht im Überblick</h1><p>Plane deine Stunden und behalte deine Klassen im Blick.</p></div><button class="primary" @click="dialogOpen = true">＋ Neuer Arbeitsauftrag</button></div>
          <div class="section-heading"><div><h2>Meine Klassen</h2><p>Alles Wichtige auf einen Blick</p></div><span class="count">3 Klassen</span></div>
          <div class="class-grid">
            <article v-for="item in classes" :key="item.name" class="class-card">
              <div class="card-top"><span :class="['class-icon', item.color]">{{ item.name.slice(0, 1) }}</span><span class="more">···</span></div>
              <h3>{{ item.name }}</h3><p>{{ item.subject }}</p>
              <div class="card-footer"><span>{{ item.tasks }} Arbeitsaufträge</span><span aria-hidden="true">↗</span></div>
            </article>
          </div>
          <div class="lower-grid">
            <article class="panel form-panel"><div class="panel-title"><div><h2>Stunde vorbereiten</h2><p>Deine nächsten Schritte</p></div><span class="tag">Entwurf</span></div>
              <form @submit.prevent="saved = true"><label for="preview-class">Klasse</label><select id="preview-class" v-model="grade"><option>3TGG1/2</option><option>3TGG2</option><option>1BFD1 BPK</option></select><label for="preview-topic">Thema</label><input id="preview-topic" v-model="topic" placeholder="Thema eingeben" /><div class="form-actions"><button class="primary" type="submit">Entwurf speichern</button><button class="secondary" type="button" @click="dialogOpen = true">Vorschau öffnen</button></div><p v-if="saved" class="success" role="status">Beispiel gespeichert – nur für diese Vorschau.</p></form>
            </article>
            <article class="panel"><div class="panel-title"><div><h2>Zuletzt bearbeitet</h2><p>Deine Unterrichtsmaterialien</p></div></div><div class="recent"><span class="file-icon">▤</span><div><strong>Zeichen und Bedeutung</strong><small>3TGG1/2 · Arbeitsauftrag</small></div><span>→</span></div><div class="recent"><span class="file-icon lavender">▤</span><div><strong>Design Thinking</strong><small>3TGG2 · Projekt</small></div><span>→</span></div><div class="recent"><span class="file-icon peach">▤</span><div><strong>Bildbearbeitung</strong><small>1BFD1 BPK · Unterricht</small></div><span>→</span></div></article>
          </div>
        </section>
      </div>
    </div>
    <Dialog v-model:visible="dialogOpen" modal header="Neuer Arbeitsauftrag" :style="{ width: 'min(440px, calc(100vw - 32px))' }"><p>Hier könnte ein neuer Arbeitsauftrag für deine Klasse entstehen.</p><template #footer><button class="secondary" @click="dialogOpen = false">Abbrechen</button><button class="primary" @click="dialogOpen = false">Erstellen</button></template></Dialog>
  </main>
</template>

<style scoped>
.preview-page { min-height: 100vh; padding: 28px; background: #f5f7f6; color: #1d2932; font-family: Inter, system-ui, sans-serif; } .shell { max-width: 1500px; margin: auto; } .back { color: #49625a; font-size: .9rem; text-decoration: none; } .notice { margin: 18px 0; display: flex; gap: 10px; flex-wrap: wrap; color: #596b64; font-size: .85rem; } .notice strong { color: #207b5e; }
.app-layout { display: grid; grid-template-columns: 225px minmax(0,1fr); background: #fff; border: 1px solid #e1e8e5; border-radius: 16px; min-height: 720px; overflow: hidden; box-shadow: 0 10px 35px #244a3a0d; }
.sidebar { padding: 24px 16px; border-right: 1px solid #e9efec; display: flex; flex-direction: column; } .brand, .sidebar-bottom { display: flex; align-items: center; gap: 10px; padding: 0 8px; } .brand-mark, .avatar { display: grid; place-items: center; width: 37px; height: 37px; border-radius: 11px; background: #1c8060; color: white; font-weight: 700; } .brand strong, .sidebar-bottom strong { display: block; font-size: .9rem; } .brand small, .sidebar-bottom small { display: block; color: #87938e; font-size: .72rem; margin-top: 3px; } .nav-heading { margin: 42px 8px 12px; font-size: .65rem; letter-spacing: .1em; font-weight: 700; color: #9aa9a1; } nav { display: grid; gap: 4px; } nav button { display: flex; align-items: center; gap: 12px; border: 0; text-align: left; border-radius: 8px; background: transparent; color: #64736d; font: inherit; font-size: .87rem; padding: 11px; cursor: pointer; } nav button.active { background: #eaf7f1; color: #14744f; font-weight: 650; } .nav-dot { width: 9px; height: 9px; border: 1.5px solid currentColor; border-radius: 3px; } .sidebar-bottom { margin-top: auto; padding-top: 25px; } .avatar { width: 35px; height: 35px; background: #e7edea; color: #466257; font-size: .7rem; }
.content { padding: 24px 32px 40px; min-width: 0; } .topline { display: flex; justify-content: space-between; gap: 12px; padding-bottom: 22px; border-bottom: 1px solid #edf1ef; color: #73827c; font-size: .78rem; } .slash { margin: 0 8px; color: #c2cdc7; } .status { background: #f1f6f3; color: #526e60; border-radius: 999px; padding: 6px 10px; white-space: nowrap; } .status i { display: inline-block; width: 7px; height: 7px; background: #32a776; border-radius: 50%; margin-right: 5px; } .page-heading { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin: 36px 0; } .eyebrow { font-size: .68rem; letter-spacing: .1em; font-weight: 750; color: #299471; margin: 0 0 9px; } h1 { margin: 0; font-size: clamp(1.7rem,3vw,2.15rem); letter-spacing: -.035em; } .page-heading p:not(.eyebrow), .section-heading p, .panel-title p { color: #84928b; font-size: .85rem; margin: 8px 0 0; } button { font-family: inherit; } .primary,.secondary { border-radius: 8px; padding: 10px 15px; font-weight: 650; font-size: .8rem; cursor: pointer; } .primary { color: #fff; background: #19835f; border: 1px solid #19835f; } .secondary { color: #425c50; background: #fff; border: 1px solid #dce6e0; } .primary:hover { background: #126c4d; } .section-heading, .panel-title { display: flex; justify-content: space-between; align-items: start; gap: 12px; } h2 { margin: 0; font-size: 1rem; } .count,.tag { padding: 5px 9px; border-radius: 6px; background: #f1f5f3; color: #71847a; font-size: .72rem; white-space: nowrap; }
.class-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 16px; margin: 18px 0 30px; } .class-card,.panel { border: 1px solid #e8eeea; border-radius: 12px; background: #fff; padding: 20px; box-shadow: 0 3px 12px #203b2d08; } .card-top { display: flex; justify-content: space-between; align-items: start; } .class-icon,.file-icon { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 10px; background: #e5f6ee; color: #1d9870; font-weight: 700; } .lavender { background: #f0ebfc; color: #8863c7; } .peach { background: #fdf0e6; color: #c7864d; } .more { color: #a5b3ab; font-size: 1.3rem; } h3 { font-size: .95rem; margin: 20px 0 7px; } .class-card p { min-height: 2.4em; color: #87958d; font-size: .78rem; margin: 0; } .card-footer { display: flex; justify-content: space-between; border-top: 1px solid #edf1ef; padding-top: 14px; margin-top: 18px; color: #788a80; font-size: .75rem; }
.lower-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; } .panel-title { margin-bottom: 22px; } form { display: grid; gap: 8px; } label { margin-top: 7px; font-weight: 600; font-size: .75rem; } input,select { width: 100%; box-sizing: border-box; padding: 10px 12px; font: inherit; font-size: .85rem; border: 1px solid #dbe5df; border-radius: 7px; background: #fff; color: #42564b; } input:focus,select:focus { outline: 2px solid #9bdcc0; } .form-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; } .success { color: #19835f; font-size: .78rem; } .recent { display: flex; align-items: center; gap: 12px; padding: 13px 0; border-bottom: 1px solid #edf1ef; font-size: .8rem; } .recent:last-child { border-bottom: 0; } .recent div { flex: 1; } .recent strong,.recent small { display: block; } .recent small { color: #93a097; margin-top: 5px; } .file-icon { width: 36px; height: 36px; }
@media(max-width:900px) { .app-layout { grid-template-columns: 1fr; } .sidebar { border-right: 0; border-bottom: 1px solid #e9efec; } .nav-heading,.sidebar-bottom { display:none; } nav { display: flex; flex-wrap: wrap; margin-top: 15px; } .class-grid { grid-template-columns: repeat(auto-fit,minmax(170px,1fr)); } } @media(max-width:600px) { .preview-page { padding: 16px; } .content { padding: 20px; } .page-heading { align-items: start; flex-direction: column; } .lower-grid { grid-template-columns: 1fr; } .status { display: none; } }
</style>
