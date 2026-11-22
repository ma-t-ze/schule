const directory = '/material/unterrichtsbaukasten/ausgabedokumente'
export const outputDocuments = [
  { id: 'verlaufsplan', name: 'Verlaufsplan', href: `${directory}/verlaufsplan.pdf`, source: `public${directory}/verlaufsplan.txt` },
  { id: 'langform', name: 'Langform', href: `${directory}/langform.pdf`, source: `public${directory}/langform.txt` },
  { id: 'arbeitsauftrag', name: 'Arbeitsauftrag', href: `${directory}/arbeitsauftrag.pdf`, source: `public${directory}/arbeitsauftrag.txt` }
]
export const storyMappingTemplate = {
  name: 'Vorlage Storymapping',
  href: `${directory}/storymapping.png`,
  source: `public${directory}/storymapping.png`
}
export const storyMappingInstruction = `Verbindliches Ausgabeformat: Storymapping.
Die Unterrichtsplanung wird immer als Storymapping nach der verlinkten Vorlage ausgegeben.
Schlage einen kurzen, passenden Titel für den Unterricht vor. Verwende diesen Unterrichtstitel zugleich als Titel des Storymappings und gib ihn als Markdown-Überschrift der ersten Ebene (# Titel) vor der Tabelle aus.
Vorlage: [Storymapping](${storyMappingTemplate.href})
Bildvorlage im lokalen Projekt: ${storyMappingTemplate.source}
Planungsstand: Zunächst nur ein grober Entwurf der Unterrichtsarchitektur. Wir gehen vom Groben ins Detail; die Feinplanung folgt erst auf ausdrückliche Anforderung.
Jede inhaltlich ausgefüllte Aktivitäts- und Subtask-Karte enthält genau einen kurzen Satz in dieser Form: „Als Schüler will ich …“. Formuliere aus Schülersicht und beschreibe jeweils nur eine Absicht oder Handlung. Keine langen Texte, Absätze, verschachtelten Aufträge oder Lehrkraftbeschreibungen.
Nummeriere die Tasks über alle Phasen hinweg fortlaufend mit 1, 2, 3 usw. Die Subtasks erhalten die Nummer ihres Tasks und eine fortlaufende Unternummer: 1.1, 1.2, 2.1, 2.2 usw. Jede Subtask bleibt dabei ein einzelner kurzer Satz.
Verwende genau vier dramaturgische Tasks: Exposition unter Einleitung, Steigende Handlung (Erarbeitung) und Höhepunkt unter Hauptteil sowie Lösung: Abschluss & Ausblick unter Schluss. Verwende höchstens zwei kurze Subtasks pro Task. Keine kleinschrittigen Abläufe, ausformulierten Arbeitsaufträge, Minutentakte, ausführlichen Begründungen oder Zusatztexte. Ausgewählte Lerntheorien und Lernziele beeinflussen die Architektur, werden aber nicht nochmals als lange Erklärungen ausgegeben.
Orientiere dich an der Vorlage: Aktivitäten sind die Unterrichtsphasen Einleitung, Hauptteil und Schluss. Die zeitliche Reihenfolge verläuft von links nach rechts. Unter jeder Aktivität stehen die Tasks (Aufgaben innerhalb der Phase); darunter stehen die zugehörigen Subtasks (konkrete Handlungsschritte).
Dokumente oder Links müssen direkt in der jeweils passenden Subtask verlinkt sein. Binde vorhandene Links knapp in den einen Satz ein: [Bezeichnung](URL). Keine bloßen Dateinamen oder lokalen Dateisystempfade. Erfinde keine Dokumente oder URLs. Fehlt ein verfügbarer Link, spare ihn aus.
Ausgewählte Ausgabedokumente werden zunächst nur als zugehörige Materialien oder geplante Ergebnisse in der passenden Subtask verlinkt, nicht vollständig ausgearbeitet. Das Storymapping bleibt die übergeordnete Darstellung.
Liefere eine Markdown-Tabelle mit den Spalten Aktivität, Einleitung, Hauptteil und Schluss. Ergänze jede Phasenüberschrift um die kurze Dauer in Minuten, z. B. „Einleitung · 5 Min.“, und anschließend um genau einen kurzen Satz „Als Schüler will ich …“. Die drei Phasenzeiten müssen zusammen der gewählten Unterrichtsdauer entsprechen. Zeitangaben gehören ausschließlich in die Phasenüberschriften, niemals in den Satz auf einer Karte. Die erste Inhaltszeile heißt Tasks und enthält ausschließlich die nummerierten Begriffe: „1. Exposition: Der Einstieg“ in Einleitung, „2. Steigende Handlung: Erarbeitung<br>3. Höhepunkt: Sicherung & Erkenntnisgewinn“ im Hauptteil und „4. Lösung: Abschluss & Ausblick“ im Schluss. Die konkreten kurzen Sätze stehen in den zugehörigen Subtasks. Für jeden Task folgt eine Zeile Subtasks zu Task N. Nur die passende Phasenspalte enthält die kurzen Handlungssätze, getrennt durch <br><br>; die anderen Phasenspalten bleiben leer. Verwende keine Codeblöcke um die Tabelle und keine zusätzlichen Begründungs- oder Detailzeilen in der Tabelle.`

export function ensureStoryMappingPrompt(prompt) {
  return prompt.includes(storyMappingInstruction) ? prompt : `${prompt}\n\n${storyMappingInstruction}`
}
export function validOutputDocumentIds(ids) {
  return Array.isArray(ids) ? [...new Set(ids.filter(id => outputDocuments.some(item => item.id === id)))] : []
}
export function outputDocumentContext(ids, { review = false } = {}) {
  const selected = outputDocuments.filter(item => validOutputDocumentIds(ids).includes(item.id))
  return `\n\n${review ? 'Prüfkriterium: Der vorliegende Unterricht soll als Storymapping mit Aktivitäten, Tasks und Subtasks aufgebaut sein. Dokumente und Links gehören direkt in die passende Subtask. Bewerte die Darstellung als groben Architekturentwurf: Die Tasks tragen die Begriffe Exposition, Steigende Handlung (Erarbeitung), Höhepunkt und Lösung: Abschluss & Ausblick. Jede inhaltliche Aktivitäts- und Subtask-Karte soll einen kurzen Satz in der Form „Als Schüler will ich …“ enthalten. Fehlende Feinplanung ist in diesem Stadium kein Fehler. Prüfe diese Vorgaben, ohne den Entwurf umzuschreiben; das angeforderte Ausgabeformat der Prüfung bleibt maßgeblich.' : storyMappingInstruction}${selected.length ? `\n\nAusgewählte Ausgabedokumente:\n${selected.map(item => `- ${item.name}\n  Originalvorlage im lokalen Projekt: public${item.href}\n  Lesbarer Vorlagentext: ${item.source}\n  Link für die passende Subtask: [${item.name}](${item.href})`).join('\n')}\n${review ? 'Vergleiche den Entwurf mit Aufbau, Gliederung, Tabellen und Gestaltung der ausgewählten Vorlagen sowie ihrer Verlinkung in den passenden Subtasks. Ändere den Entwurf nicht.' : 'Lies die ausgewählten Vorlagen als Grundlage. Berücksichtige ihren Aufbau bei der groben Unterrichtsarchitektur und verlinke die Dokumente in der passenden Subtask. Arbeite die Dokumente in diesem ersten Entwurf noch nicht vollständig aus.'} Nutze die Vorlagen als Muster; Angaben und Beispielinhalte daraus sind keine Fakten zur aktuell zu planenden Stunde. Unbekannte Angaben nicht erfinden und keine Platzhalter ergänzen.` : ''}`
}
