<?php
return function (PDO $db) {
    migrationSql($db, '005-bpk-exam-dates.sql');
};
