-- Zuerst die bestehende Schul-Datenbank in phpMyAdmin auswählen.
-- Ordnet vorhandene Namen und PDFs der Klasse zu. IDs, PDFs und Namen bleiben
-- unverändert erhalten. Auch mehrere Einträge derselben Person bleiben erhalten.
-- Die bestehende Spalte exam_key wird als Klassenschlüssel weiterverwendet.
UPDATE school_exam_accommodations
SET exam_key = LEFT(exam_key, CHAR_LENGTH(exam_key) - 2), revision = revision + 1
WHERE exam_key REGEXP '^2026-27-(3bkgd1-1-grd-[1-4]|3tgg1-2-[1-5]|3tgg2-[1-2])$';
