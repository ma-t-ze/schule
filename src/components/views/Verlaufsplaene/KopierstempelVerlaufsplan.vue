<script setup>
import { objectives, phases } from './kopierstempelKurzplan'
</script>
<template>
  <div class="doc"><div class="page">
    <table class="header-table"><thead><tr><th>Name</th><th>Klasse</th><th>Fach</th><th>Datum</th><th>Stunde</th><th>Ausbilder/-in</th><th>Mentor</th><th>Lernziele</th></tr></thead><tbody><tr><td>Matthias<br>Heckel</td><td>1BFD1<br>GrB</td><td>BPK</td><td>04.11.2026</td><td>09:50–<br>10:35</td><td>Thorsten<br>Schäfer</td><td>Steffen<br>Bittmann</td><td><ul><li v-for="goal in objectives" :key="goal">{{ goal }}</li></ul></td></tr></tbody></table>
    <table class="verlauf-table"><thead><tr><th class="col-phase">Phase / Zeit</th><th class="col-sus">Schüler-Aktivität</th><th class="col-lk">Lehrer-Aktivität</th><th class="col-methode">Methode</th><th class="col-medien">Medien</th></tr></thead><tbody><tr v-for="phase in phases" :key="phase.time"><td><strong>{{ phase.phase }}</strong><br>{{ phase.time.split('–')[0] }}<br>({{ phase.minutes }} Min.)</td><td>{{ phase.students }}</td><td>{{ phase.teacher }}</td><td>{{ phase.method }}</td><td>{{ phase.media }}</td></tr></tbody></table>
  </div></div>
</template>
<style scoped>
@import './kopierstempelVerlauf.css';
</style>
