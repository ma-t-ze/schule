<?php
return function (PDO $db) {
    migrationColumn($db, 'school_exam_accommodations', 'comment', 'TEXT NULL AFTER student_name');
};
