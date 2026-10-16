<template>
  <main class="document">
    <nav aria-label="Seitennavigation"><RouterLink to="/medientechnik/grundlagen">← Zurück zu Grundlagen</RouterLink></nav>
    <h1>iMac Grundlagen</h1>
    <div class="page"><img src="/medientechnik/grundlagen/imac-grundlagen.jpg" alt="iMac Grundfunktionen – Arbeitsblatt" width="1555" height="2200"></div>
    <div class="download"><a href="/medientechnik/grundlagen/imac-grundlagen.pdf" download="iMac Grundlagen.pdf">PDF Downloaden</a></div>
  </main>
</template>

<style scoped>
.document { min-height: 100vh; background: #f8f7f3; color: #202d32; font-family: 'Jost', Arial, sans-serif; }
nav { padding: 24px clamp(20px, 4vw, 64px); background: white; }
a { color: inherit; text-underline-offset: 4px; }
h1 { max-width: 1000px; margin: auto; padding: 32px 20px; font-size: 32px; font-weight: 500; }
.page { max-width: 1000px; margin: auto; }
img { display: block; width: 100%; height: auto; }
.download { padding: 32px 20px 48px; text-align: center; }
.download a { display: inline-block; padding: 14px 24px; background: #315e4c; color: white; text-decoration: none; border-radius: 8px; font-size: 18px; }
.download a:hover { background: #244738; }
a:focus-visible { outline: 3px solid #315e4c; outline-offset: 4px; }
</style>
