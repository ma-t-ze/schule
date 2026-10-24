<script setup>
defineOptions({ name: "StoffverteilungsplaeneOverview" })
</script>

<template>
  <div class="page">
    <RouterLink to="/" class="back">Zur Startseite</RouterLink>

    <header class="header">
      <p class="eyebrow">Übersicht</p>
      <h1>Stoffverteilungspläne</h1>
      <p class="subtitle">Jahresplanung und Verteilung der Unterrichtsinhalte</p>
    </header>

    <nav class="plan-list" aria-label="Stoffverteilungspläne">
      <RouterLink to="/stoffverteilungsplaene/3tgg1-2" class="plan-link">
        <span>3TGG1/2</span>
        <span class="plan-meta">Schuljahr 2026/27</span>
      </RouterLink>
      <RouterLink to="/stoffverteilungsplaene/3tgg2" class="plan-link">
        <span>3TGG2</span>
        <span class="plan-meta">Schuljahr 2026/27</span>
      </RouterLink>
      <RouterLink to="/stoffverteilungsplaene/3bkgd1-1" class="plan-link">
        <span>3BKGD1/1 GRD</span>
        <span class="plan-meta">Schuljahr 2026/27</span>
      </RouterLink>
      <RouterLink to="/stoffverteilungsplaene/3bkgd1-1-met" class="plan-link">
        <span>3BKGD1/1 MET</span>
        <span class="plan-meta">Schuljahr 2026/27</span>
      </RouterLink>
      <RouterLink to="/stoffverteilungsplaene/1bfd1-bpk" class="plan-link">
        <span>1BFD1 BPK</span>
        <span class="plan-meta">Schuljahr 2026/27</span>
      </RouterLink>
      <RouterLink to="/stoffverteilungsplaene/pruefungszeitraeume" class="plan-link">
        <span>Prüfungszeiträume</span><span class="plan-meta">Schuljahr 2026/27</span>
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.page { user-select: text; color: #111; }
.page, .page :deep(*) { box-sizing: border-box; }
.page {
  min-height: 100vh;
  padding: 64px 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.back {
  display: inline-block;
  font-size: 13px;
  color: #888;
  text-decoration: none;
  margin-bottom: 32px;
}

.back:hover {
  color: #333;
}

.header {
  margin-bottom: 32px;
}

.eyebrow {
  color: #888;
  font-size: 14px;
  margin-bottom: 8px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
}

.subtitle {
  color: #888;
  font-size: 16px;
}

.plan-list {
  display: grid;
  gap: 16px;
  max-width: 520px;
}

.plan-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 22px;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
}

.plan-link:hover {
  border-color: #999;
  transform: translateY(-2px);
}

.plan-link span:first-child {
  font-size: 24px;
  font-weight: bold;
}

.plan-meta {
  color: #888;
  font-size: 14px;
}

@media (max-width: 700px) {
  .page {
    padding: 48px 20px;
  }

  .plan-link {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
