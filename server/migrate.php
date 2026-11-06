<?php
// CLI only: never expose database maintenance through the website.
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
ini_set('display_errors', '0');

function migrationSql(PDO $db, $name) {
    $sql = file_get_contents(__DIR__ . '/migrations/' . $name);
    if ($sql === false) throw new RuntimeException('Missing migration SQL.');
    $db->exec($sql);
}

function migrationColumn(PDO $db, $table, $column, $definition) {
    $query = $db->prepare('SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?');
    $query->execute([$table, $column]);
    if (!(int)$query->fetchColumn()) {
        // Identifiers and definitions come exclusively from versioned migrations.
        $db->exec("ALTER TABLE `$table` ADD COLUMN `$column` $definition");
    }
}

$db = null;
$locked = false;
try {
    if (!is_file(__DIR__ . '/database-config.php')) throw new RuntimeException('Missing database configuration.');
    $config = require __DIR__ . '/database-config.php';
    $db = new PDO('mysql:host=' . $config['host'] . ';port=' . (int)($config['port'] ?? 3306) . ';dbname=' . $config['name'] . ';charset=utf8mb4', $config['user'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false]);
    $query = $db->prepare('SELECT GET_LOCK(?, 30)');
    $lockName = 'school-migrations-' . substr(hash('sha256', $config['name']), 0, 32);
    $query->execute([$lockName]);
    $locked = (int)$query->fetchColumn() === 1;
    if (!$locked) throw new RuntimeException('Another migration is running.');
    $db->exec('CREATE TABLE IF NOT EXISTS school_schema_migrations (version VARCHAR(100) NOT NULL PRIMARY KEY, applied_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');
    $files = glob(__DIR__ . '/migrations/[0-9]*.php');
    if ($files === false || !$files) throw new RuntimeException('Missing migrations.');
    sort($files, SORT_STRING);
    foreach ($files as $file) {
        $version = basename($file, '.php');
        $query = $db->prepare('SELECT COUNT(*) FROM school_schema_migrations WHERE version = ?');
        $query->execute([$version]);
        if ((int)$query->fetchColumn()) { echo "Already applied: $version\n"; continue; }
        echo "Applying: $version\n";
        $migration = require $file;
        $migration($db);
        // MySQL DDL commits implicitly. Migrations must tolerate partial retries.
        $query = $db->prepare('INSERT INTO school_schema_migrations (version) VALUES (?)');
        $query->execute([$version]);
        echo "Applied: $version\n";
    }
    echo "Database is up to date.\n";
} catch (Throwable $error) {
    // Never print connection credentials or SQL containing personal data in CI.
    fwrite(STDERR, 'Database migration failed (' . get_class($error) . '). Check database-config.php, database permissions and the last migration listed above.' . PHP_EOL);
    exit(1);
} finally {
    if ($locked && $db) {
        $query = $db->prepare('SELECT RELEASE_LOCK(?)');
        $query->execute([$lockName]);
    }
}
