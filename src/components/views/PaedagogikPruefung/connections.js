// Selbst entwickelte Transferfälle auf Basis beider Materialsammlungen.
export const connections = [
  {
    id: 'planung-gedaechtnis', title: 'Unterrichtsplanung × Lernen und Gedächtnis', paed: ['planung'], psych: ['beobachtung', 'gedaechtnis'],
    case: 'Du erklärst in einer Stunde zehn neue Gestaltungsbegriffe. Die Lernenden können deine Sätze wiederholen, aber keine Gestaltungsentscheidung begründen.',
    theory: 'Pädagogisch passen Ziel, Lernaktivität und Überprüfung noch nicht zusammen. Psychologisch reicht kurzfristige Wiedergabe nicht als Nachweis vernetzten, anwendbaren Wissens. Das Angebots-Nutzungs-Modell lenkt den Blick darauf, was die Lernenden tatsächlich tun.',
    action: 'Wenige Kernbegriffe an bekannten Beispielen unterscheiden lassen. Die Lernenden begründen anschließend eine eigene Entscheidung und wenden die Kriterien später auf einen neuen Entwurf an.',
    evaluation: 'Vergleiche nicht nur die Zahl genannter Begriffe, sondern die Qualität der Begründungen und die Übertragung nach einer zeitlichen Pause.',
    question: 'Welche Änderung betrifft dein Lernziel, welche die Verarbeitung und welche die Erfolgskontrolle?'
  },
  {
    id: 'auftrag-klassenfuehrung', title: 'Arbeitsaufträge × Klassenführung', paed: ['methoden', 'planung'], psych: ['klassenfuehrung', 'motivation'],
    case: 'Nach „Bearbeitet das Thema in Gruppen“ entsteht Unruhe. Du deutest das als fehlende Disziplin und kündigst strengere Konsequenzen an.',
    theory: 'Ein unklarer Auftrag erschwert Orientierung und selbstständiges Handeln. Unterrichtsgestaltung ist neben Beziehung und Verhaltenssteuerung eine Dimension der Klassenführung. Verstehbarkeit und wahrgenommene Bewältigbarkeit können den Arbeitsbeginn beeinflussen.',
    action: 'Produkt, Zeit, Rollen bzw. Zusammenarbeit und Kriterien klären. Ein kurzes Zwischenziel setzen und Rückfragen ermöglichen. Erst dann prüfen, wo ein eigenständiges Regelproblem verbleibt.',
    evaluation: 'Beobachte Zeit bis zum Arbeitsbeginn, Art der Rückfragen und individuelle Arbeitsergebnisse. Weniger Lautstärke allein beweist noch kein Lernen.',
    question: 'Wie unterscheidest du eine Störung durch fehlende Orientierung von einem bewussten Regelverstoß?'
  },
  {
    id: 'feedback-motivation', title: 'Leistungsbewertung × Motivation', paed: ['leistung-grundlagen', 'leistung-praxis'], psych: ['motivation', 'kommunikation'],
    case: 'Eine Schülerin verbessert ihren Flyer deutlich, erreicht aber weiterhin nur eine mittlere Note. Sie folgert: „Üben bringt bei mir nichts.“',
    theory: 'Die Sachnorm beschreibt die erreichte fachliche Qualität; die Individualnorm macht Lernfortschritt sichtbar. Weiners Attribution und Heckhausens Einflussfrage helfen zu verstehen, warum ein Ergebnis die weitere Motivation schwächen kann.',
    action: 'Die sachbezogene Bewertung nachvollziehbar erläutern und den konkreten Fortschritt zusätzlich benennen. Eine wirksame Strategie zeigen und einen erreichbaren nächsten Schritt vereinbaren. Die Sicht der Schülerin aktiv erfragen.',
    evaluation: 'Prüfe an der nächsten Aufgabe, ob die Strategie eingesetzt wird und sich die Qualität verändert. Hole auch eine Rückmeldung zur eigenen Einflussüberzeugung ein.',
    question: 'Wie würdigst du den Fortschritt, ohne eine andere fachliche Note zu versprechen?'
  },
  {
    id: 'sprache-arbeitsgedaechtnis', title: 'Textoptimierung × Gedächtnis und Kompetenzerleben', paed: ['sprache'], psych: ['gedaechtnis', 'motivation'],
    case: 'Eine fachlich interessante Gestaltungsaufgabe scheitert schon am langen, verschachtelten Auftrag. Ein Kollege befürchtet bei einer einfacheren Fassung Niveauverlust.',
    theory: 'Sprachliche Hürden können zusätzliche Verarbeitung verlangen, bevor die fachliche Aufgabe begonnen wird. Textoptimierung verändert den Zugang; die angestrebte kognitive Anforderung muss dadurch nicht sinken. Verständliche Schritte können Orientierung und Kompetenzerleben unterstützen.',
    action: 'Den Auftrag gliedern, Fachbegriffe erklären und ein Beispiel geben. Die fachliche Beurteilungsaufgabe und deren Kriterien beibehalten. Hilfen mit zunehmender Sicherheit reduzieren.',
    evaluation: 'Vergleiche fachliche Begründungen statt bloßer Bearbeitungsgeschwindigkeit. Prüfe später, ob auch die Fachsprache selbstständiger verwendet wird.',
    question: 'Woran erkennst du eine sprachliche Erleichterung im Unterschied zu einer fachlichen Vereinfachung?'
  },
  {
    id: 'arrangement-modell', title: 'Lehr-Lern-Arrangements × Modelllernen und Motivation', paed: ['arrangements'], psych: ['modelllernen', 'motivation', 'klassenfuehrung'],
    case: 'Bei einer Gruppenaufgabe gestaltet eine Person den kompletten Flyer. Du möchtest nun stärkere Lernendenbeteiligung erreichen.',
    theory: 'Kooperatives Lernen verlangt gemeinsame Abhängigkeit und individuelle Verantwortung. Kompetenzerleben, Mitbestimmung und soziale Eingebundenheit können Beteiligung unterstützen. Ein geeignetes Mitschülermodell hilft, ersetzt aber nicht die eigene Ausführung.',
    action: 'Mit einer individuellen Idee beginnen, Entscheidungen begründet vergleichen und jede Person einen Teil erproben und erklären lassen. Bei fehlenden Grundlagen zuerst einen kurzen modellierenden Input anbieten.',
    evaluation: 'Alle bearbeiten anschließend eine kurze individuelle Transferaufgabe. Zusätzlich reflektiert die Gruppe Zusammenarbeit und Arbeitsverteilung.',
    question: 'Wann würdest du direkte Instruktion vor die kooperative Phase stellen und warum?'
  },
  {
    id: 'erziehung-modell-kommunikation', title: 'Erziehungsauftrag × Vorbild und Kommunikation', paed: ['erziehung'], psych: ['modelllernen', 'kommunikation', 'gfk'],
    case: 'Du forderst respektvolle Entwurfskritik, kommentierst einen Schülerbeitrag aber selbst mit einer spöttischen Bemerkung.',
    theory: 'Werteerziehung erfolgt auch durch dein tatsächliches Handeln. Modelllernen erklärt die Bedeutung des Vorbilds; Kommunikation und GfK helfen, Beobachtung, Bewertung, eigene Gefühle und eine konkrete Bitte zu trennen.',
    action: 'Die eigene Bemerkung korrigieren und Verantwortung übernehmen. Eine fachliche Rückmeldung formulieren und mit der Klasse eine respektvolle Feedbackform praktizieren.',
    evaluation: 'Beobachte künftige Besprechungen: Werden Aussagen am Entwurf begründet und Personen respektiert? Frage auch nach, ob die vereinbarten Regeln als glaubwürdig erlebt werden.',
    question: 'Wie hältst du eine fachlich klare Grenze, ohne eine Person abzuwerten?'
  },
  {
    id: 'inklusion-teilhabe', title: 'Inklusion × Lernbedingungen und soziale Sicherheit', paed: ['inklusion', 'erziehung'], psych: ['gedaechtnis', 'motivation', 'mobbing'],
    case: 'Ein Schüler benötigt zusätzliche Strukturierung der Arbeitsschritte. Andere lachen über die Hilfekarte und er nimmt sie nicht mehr in Anspruch.',
    theory: 'Eine fachlich passende Hilfe kann an sozialer Unsicherheit scheitern. Inklusion betrifft Zugang und Teilhabe; Autonomie, Kompetenzerleben und soziale Eingebundenheit betreffen die Nutzung. Wiederholte Abwertung muss auf eine mögliche Mobbingdynamik geprüft werden.',
    action: 'Die Abwertung begrenzen, geschützt die Perspektive des Schülers klären und Hilfen möglichst selbstverständlich verfügbar machen. Fachliche Anforderungen und individuelle Barrieren getrennt betrachten.',
    evaluation: 'Prüfe sowohl die fachliche Nutzung der Unterstützung als auch das soziale Erleben. Eine erledigte Aufgabe allein zeigt noch keine sichere Teilhabe.',
    question: 'Welche zusätzliche Information brauchst du, bevor du das konkrete Verhalten theoretisch einordnest?'
  },
  {
    id: 'schulentwicklung-gesundheit', title: 'Schulentwicklung × Lehrergesundheit', paed: [], psych: ['gesundheit', 'fallberatung', 'beobachtung'],
    case: 'Mehrere Lehrkräfte berichten, dass unklare Abläufe bei Vertretungen zu Mehrarbeit und wiederkehrenden Konflikten führen. Vorgeschlagen wird nur ein Entspannungskurs.',
    theory: 'Individuelle Bewältigungsressourcen sind wichtig, aber nicht die einzige Ebene. IEGL unterscheidet persönliche Ressourcen und Arbeitsbedingungen. Schulentwicklung richtet Veränderungen auf die Organisation; kollegiale Beratung unterstützt zusätzlich die einzelne Lehrperson.',
    action: 'Belastungen anhand konkreter Situationen erfassen, einen gemeinsamen Vertretungsablauf entwickeln und Zuständigkeiten klären. Freiwillige individuelle Unterstützung kann ergänzen.',
    evaluation: 'Nach einer Erprobungsphase Aufwand, Rückfragen und erlebte Entlastung prüfen. Das Verfahren anhand der Rückmeldung nachbessern.',
    question: 'Was gehört zur Verhaltensprävention, was zur Verhältnisprävention und wer kann darüber entscheiden?'
  }
]
