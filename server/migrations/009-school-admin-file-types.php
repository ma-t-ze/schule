<?php
return function (PDO $db) {
    foreach (['filename' => 'VARCHAR(255) NULL', 'mime_type' => 'VARCHAR(150) NULL'] as $column => $definition) {
        $query = $db->query("SHOW COLUMNS FROM school_admin_materials LIKE '" . $column . "'");
        if (!$query->fetch()) $db->exec('ALTER TABLE school_admin_materials ADD COLUMN ' . $column . ' ' . $definition);
    }
};
