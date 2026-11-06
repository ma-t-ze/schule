<?php
return function (PDO $db) {
    // Only missing entries are inserted; edited or cleared dates remain untouched.
    migrationSql($db, '002-exam-dates.sql');
};
