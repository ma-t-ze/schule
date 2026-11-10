<?php
return function (PDO $db) {
    migrationColumn($db, 'school_upcoming', 'event_color', 'VARCHAR(10) NULL AFTER exam_key');
    migrationColumn($db, 'school_upcoming', 'is_important', 'BOOLEAN NOT NULL DEFAULT FALSE AFTER event_color');
};
