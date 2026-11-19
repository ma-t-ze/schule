<script setup>
import Panel from 'primevue/panel'
import Message from 'primevue/message'
const law = 'https://www.landesrecht-bw.de/bsbw/document/jlr-SchulBesVBWV7P2'
const grades = 'https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007BBDNN00000000038'
const schoolForm = 'https://www.carl-hofer-schule.de/wp-content/uploads/2021/07/Entschuldigung_Beurlaubung.pdf'
</script>

<template>
  <main class="wiki-page">
    <div class="wiki-shell">
      <RouterLink to="/" class="back">← Zur Startseite</RouterLink>
      <header><p class="eyebrow">SCHULWIKI</p><h1>Krank bei Klassenarbeiten</h1><p class="intro">Wann muss die Entschuldigung vorliegen – und wie klärt die Fachlehrkraft den Status?</p><p class="updated">Baden-Württemberg · geprüft am 18. November 2026 · reguläre Klassenarbeiten</p></header>

      <Panel header="Wann und an wen?" class="wiki-panel">
        <p>Die Krankheit <strong>unverzüglich der Schule melden, spätestens am zweiten Tag der Verhinderung</strong>. Grund und voraussichtliche Dauer angeben. Bei Minderjährigen melden die Erziehungsberechtigten, Volljährige entschuldigen sich selbst. Möglich sind mündliche, telefonische, elektronische oder schriftliche Mitteilungen. <a :href="law" target="_blank" rel="noopener noreferrer">§ 2 Abs. 1 Schulbesuchsverordnung</a></p>
        <p>Für die Abgabe ist die <strong>Klassenleitung bzw. der von der Schule festgelegte Meldeweg</strong> die erste Anlaufstelle. Das veröffentlichte CHS-Formular sieht vor, dass die Klassenleitung den Eingang mit Datum und Handzeichen festhält. Bei einer versäumten Klassenarbeit die betroffene Fachlehrkraft zusätzlich zeitnah informieren – das ist eine sinnvolle Abstimmung, keine zusätzliche Frist aus § 2. <a :href="schoolForm" target="_blank" rel="noopener noreferrer">CHS-Entschuldigungsformular</a></p>
      </Panel>

      <Panel header="Schriftliche Entschuldigung und Attest" class="wiki-panel">
        <p>Seit <strong>5. Februar 2025</strong> muss nach einer telefonischen oder elektronischen Meldung nicht automatisch binnen drei Tagen eine schriftliche Entschuldigung nachgereicht werden. Die Schule kann eine schriftliche Mitteilung verlangen; dann ist sie unverzüglich nachzureichen. Eine versäumte Klassenarbeit allein begründet keine allgemeine Attestpflicht. Ein ärztlicher Nachweis kann unter den Voraussetzungen von § 2 Abs. 2 verlangt werden; eine wirksam angeordnete individuelle Attestpflicht ist zu beachten. <a :href="law" target="_blank" rel="noopener noreferrer">§ 2 Schulbesuchsverordnung</a></p>
        <Message severity="warn" :closable="false">Ältere CHS-Formulare enthalten noch die frühere Drei-Tage-Regel. Für die Rechtslage gilt die aktuelle Verordnung; den aktuellen schulischen Meldeweg mit der Klassenleitung oder Schulleitung klären.</Message>
      </Panel>

      <Panel header="Wie erfährt es die Fachlehrkraft?" class="wiki-panel">
        <ol>
          <li><strong>Fehlen dokumentieren:</strong> festhalten, wer die Klassenarbeit versäumt hat. Solange die Klärung läuft, den Entschuldigungsstatus als offen behandeln.</li>
          <li><strong>Status prüfen:</strong> den freigegebenen Entschuldigungsstatus im schulischen Klassenbuch prüfen, soweit dort gepflegt. Andernfalls bei der Klassenleitung nachfragen: „Ist die Fehlzeit am … fristgerecht und ordnungsgemäß entschuldigt?“</li>
          <li><strong>Rückmeldung festhalten:</strong> Status und Bestätigung der zuständigen Stelle dokumentieren. Eine fehlende Nachricht an die Fachlehrkraft beweist noch kein unentschuldigtes Fehlen.</li>
        </ol>
        <p class="local-note"><strong>An der CHS gibt es keinen festgelegten Meldeweg an die Fachlehrkräfte.</strong> Deshalb den Entschuldigungsstatus bei der Klassenleitung direkt erfragen und die Rückmeldung festhalten. Eine bloße Krankmeldung im System und ein abschließend geprüfter Entschuldigungsstatus müssen unterscheidbar sein.</p>
      </Panel>

      <Panel header="Nachschreiben oder Note 6?" class="wiki-panel">
        <p><strong>Entschuldigt versäumt:</strong> Die Fachlehrkraft entscheidet, ob eine entsprechende Arbeit nachgeschrieben wird. <strong>Unentschuldigt versäumt:</strong> Die Arbeit wird mit „ungenügend“ bewertet. Deshalb vor einer Bewertung den Eingang und die Ordnungsmäßigkeit der Entschuldigung klären. Für Abschlussprüfungen gelten gegebenenfalls besondere Prüfungsordnungen. <a :href="grades" target="_blank" rel="noopener noreferrer">§ 8 Abs. 4, 5 und 7 Notenbildungsverordnung</a></p>
      </Panel>
    </div>
  </main>
</template>

<style scoped>
.wiki-page { min-height: 100vh; background: #f8f7f3; color: #202d32; font-family: 'Jost', Arial, sans-serif; }
.wiki-shell { max-width: 940px; padding: 32px 28px 64px; margin: auto; }
.back { color: #526166; font-size: 14px; }
header { padding: 42px 0 16px; }
.eyebrow { font-size: 12px; letter-spacing: .12em; color: #536c5a; }
h1 { font-size: clamp(32px, 5vw, 48px); line-height: 1.15; font-weight: 500; letter-spacing: -.025em; margin: 16px 0; }
.intro { font-size: 20px; }
.updated { font-size: 13px; color: #526166; }
p, li { line-height: 1.75; }
a { color: inherit; text-underline-offset: 3px; }
.wiki-panel { margin-top: 22px; }
:deep(.p-panel-header) { padding: 20px 24px; font-size: 21px; }
:deep(.p-panel-content) { padding: 0 24px 24px; }
:deep(.p-panel-content) > p:first-child { margin-top: 0; }
:deep(.p-panel-content) > p:last-child { margin-bottom: 0; }
li { margin-bottom: 14px; padding-left: 4px; }
ol { padding-left: 22px; }
.local-note { background: #edf2e9; border-radius: 10px; padding: 16px; font-size: 14px; }
@media (max-width: 600px) {
  .wiki-shell { padding: 24px 16px 48px; }
  :deep(.p-panel-header) { padding: 18px; font-size: 19px; }
  :deep(.p-panel-content) { padding: 0 18px 18px; }
}
</style>
