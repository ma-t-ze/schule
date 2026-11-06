<?php
// Bootstrap new databases and adopt already installed tables without replacing data.
return function (PDO $db) {
    foreach (['upcoming', 'exam-checklists', 'exam-accommodations', 'seating', 'lesson-documents'] as $table) {
        migrationSql($db, '001-' . $table . '.sql');
    }
    migrationColumn($db, 'school_upcoming', 'event_date', 'DATE NULL AFTER note');
    migrationColumn($db, 'school_upcoming', 'end_date', 'DATE NULL AFTER event_date');
    migrationColumn($db, 'school_upcoming', 'exam_key', 'VARCHAR(60) NULL');
    $query = $db->query("SELECT COUNT(*) FROM (SELECT INDEX_NAME FROM information_schema.STATISTICS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'school_upcoming' AND NON_UNIQUE = 0 GROUP BY INDEX_NAME HAVING COUNT(*) = 1 AND MAX(COLUMN_NAME) = 'exam_key' AND MAX(SUB_PART) IS NULL) AS exam_indexes");
    if (!(int)$query->fetchColumn()) {
        $db->exec('ALTER TABLE school_upcoming ADD UNIQUE KEY school_upcoming_exam_key (exam_key)');
    }
    migrationColumn($db, 'school_exam_checklists', 'accommodation', 'BOOLEAN NOT NULL DEFAULT FALSE AFTER handed_out');
    $db->exec("UPDATE school_exam_accommodations SET exam_key = LEFT(exam_key, CHAR_LENGTH(exam_key) - 2), revision = revision + 1 WHERE exam_key REGEXP '^2026-27-(3bkgd1-1-grd-[1-4]|3tgg1-2-[1-5]|3tgg2-[1-2])$'");
};
