<template>
  <main class="document">
    <nav aria-label="Kursnavigation"><RouterLink :to="{ name: '3tgg12' }">← Zur Übersicht 3TGG1/2</RouterLink></nav>
    <h1>Die Linie und Linienportraits</h1>
    <div class="pages">
      <img v-for="page in 4" :key="page" :src="`/3tgg12/linienportraits-seiten/seite-${String(page).padStart(2, '0')}.jpg`" :alt="`Die Linie und Linienportraits – Dokumentseite ${page} von 4`" width="2200" height="1538" :loading="page === 1 ? 'eager' : 'lazy'">
    </div>
    <div class="download-area">
      <a class="download-button" href="/material/3tgg12/Die_Linie_und_Linienportraits.pdf" download="03 Die Linie und Linienportraits.pdf">PDF downloaden</a>
    </div>
  </main>
</template>

<style scoped>
.document { min-height: 100vh; background: #efefed; color: #111; font-family: 'Jost', Arial, sans-serif; }
nav { padding: 20px clamp(20px, 4vw, 64px); background: white; }
a { color: inherit; text-underline-offset: 4px; }
a:focus-visible { outline: 3px solid #1038ff; outline-offset: 4px; }
h1 { font-size: 28px; font-weight: 500; margin: 0; padding: 28px clamp(20px, 4vw, 64px); }
.pages { max-width: 1600px; margin: auto; padding-bottom: 24px; }
img { display: block; width: 100%; height: auto; margin-bottom: 24px; background: white; }
.download-area { padding: 8px 20px 48px; text-align: center; }
.download-button { display: inline-block; padding: 14px 24px; background: #1038ff; color: white; text-decoration: none; border-radius: 8px; font-size: 18px; }
.download-button:hover { background: #0927c9; }
</style>
