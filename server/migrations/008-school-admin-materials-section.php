<?php
return function (PDO $db) {
    $query = $db->query("SHOW COLUMNS FROM school_admin_materials LIKE 'section'");
    if (!$query->fetch()) {
        $db->exec("ALTER TABLE school_admin_materials ADD COLUMN section VARCHAR(30) NOT NULL DEFAULT 'schuladministration'");
    }
};
