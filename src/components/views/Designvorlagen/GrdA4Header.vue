<template>
  <header class="worksheet-header">
    <div class="header-left"><h2>BERUFSKOLLEG GRAFIKDESIGN</h2><p>Grafikdesign Schuljahr 1 | chs</p></div>
    <img src="/designvorlagen/chs.svg" alt="CHS-Logo" />
    <p class="teacher">Heckel</p>
  </header>
</template>
<style scoped>
.worksheet-header { position: relative; height: 12mm; border-bottom: 1px solid #000; box-sizing: border-box; color: #000; }
.header-left { position: absolute; left: 0; bottom: 1.3mm; }
.header-left h2 { font-family: 'Anton', sans-serif; font-size: 14pt; font-weight: 400; line-height: 1.12; margin: 0 0 1mm; white-space: nowrap; }
.header-left p, .teacher { font-family: 'Times New Roman', Times, serif; font-size: 9pt; font-weight: bold; line-height: 1; margin: 0; white-space: nowrap; }
.worksheet-header img { position: absolute; width: 20mm; height: auto; left: 50%; top: 1.8mm; transform: translateX(-50%); }
.teacher { position: absolute; right: 0; bottom: 1.3mm; }
</style>
