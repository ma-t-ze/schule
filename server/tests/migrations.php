<?php
// Run only against the disposable MariaDB service in GitHub Actions.
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
$config = ['host' => '127.0.0.1', 'port' => 3306, 'name' => 'school_migration_test', 'user' => 'root', 'password' => 'migration-test-only'];
$db = new PDO('mysql:host=127.0.0.1;dbname=school_migration_test;charset=utf8mb4', $config['user'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
$directory = sys_get_temp_dir() . '/school-migration-test-' . bin2hex(random_bytes(8));
mkdir($directory);
mkdir($directory . '/migrations');
copy(__DIR__ . '/../migrate.php', $directory . '/migrate.php');
foreach (glob(__DIR__ . '/../migrations/*') as $file) copy($file, $directory . '/migrations/' . basename($file));
file_put_contents($directory . '/database-config.php', '<?php return ' . var_export($config, true) . ';');
function check($condition, $message) { if (!$condition) throw new RuntimeException($message); }
function runMigrations($directory) {
    passthru(escapeshellarg(PHP_BINARY) . ' ' . escapeshellarg($directory . '/migrate.php'), $code);
    check($code === 0, 'Migration process failed.');
}
function resetTestDatabase(PDO $db) {
    // Fixed test-only database and fixed table list; never use production config.
    foreach (['school_upcoming', 'school_exam_checklists', 'school_exam_accommodations', 'school_seating', 'school_lesson_documents', 'school_schema_migrations'] as $table) $db->exec("DROP TABLE IF EXISTS `$table`");
}
try {
    resetTestDatabase($db);
    runMigrations($directory);
    check((int)$db->query('SELECT COUNT(*) FROM school_upcoming')->fetchColumn() === 15, 'Missing initial exams.');
    check($db->query("SELECT event_date FROM school_upcoming WHERE exam_key = '2026-27-3bkgd1-1-met-1'")->fetchColumn() === '2026-11-20', 'Incorrect MET date.');
    $db->exec("UPDATE school_upcoming SET event_date = NULL, title = 'Edited', note = 'Keep me', revision = 7 WHERE exam_key = '2026-27-3bkgd1-1-met-1'");
    $before = $db->query('SELECT * FROM school_upcoming ORDER BY id')->fetchAll(PDO::FETCH_ASSOC);
    runMigrations($directory);
    check($before === $db->query('SELECT * FROM school_upcoming ORDER BY id')->fetchAll(PDO::FETCH_ASSOC), 'Repeat changed data.');
    // Simulate retry after DDL succeeded but before the ledger was written.
    $db->exec('DELETE FROM school_schema_migrations');
    runMigrations($directory);
    check($before === $db->query('SELECT * FROM school_upcoming ORDER BY id')->fetchAll(PDO::FETCH_ASSOC), 'Retry changed saved data.');

    resetTestDatabase($db);
    $db->exec('CREATE TABLE school_upcoming (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, title VARCHAR(160) NOT NULL, note TEXT NOT NULL, revision INT UNSIGNED NOT NULL DEFAULT 1, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP) ENGINE=InnoDB');
    $db->exec("INSERT INTO school_upcoming (title, note) VALUES ('Legacy note', 'Preserve text')");
    $db->exec(file_get_contents(__DIR__ . '/../migrations/001-exam-checklists.sql'));
    $db->exec('ALTER TABLE school_exam_checklists DROP COLUMN accommodation');
    $db->exec("INSERT INTO school_exam_checklists (exam_key, announced, makeup_names) VALUES ('2026-27-3bkgd1-1-grd-1', 1, 'Test student')");
    $db->exec(file_get_contents(__DIR__ . '/../migrations/001-exam-accommodations.sql'));
    $db->exec("INSERT INTO school_exam_accommodations (exam_key, student_name, pdf_data) VALUES ('2026-27-3bkgd1-1-grd-1', 'Test student', 'test PDF bytes')");
    runMigrations($directory);
    check($db->query('SELECT note FROM school_upcoming WHERE id = 1')->fetchColumn() === 'Preserve text', 'Legacy note lost.');
    check((int)$db->query('SELECT announced FROM school_exam_checklists')->fetchColumn() === 1, 'Checklist lost.');
    $row = $db->query('SELECT exam_key, pdf_data, revision, comment FROM school_exam_accommodations')->fetch(PDO::FETCH_ASSOC);
    check($row['exam_key'] === '2026-27-3bkgd1-1-grd' && $row['pdf_data'] === 'test PDF bytes' && (int)$row['revision'] === 2, 'Accommodation migration failed.');
    check($row['comment'] === null, 'Existing accommodation comment must be empty.');
    $comment = "First line\nSecond line with umlauts: äöü";
    $statement = $db->prepare('UPDATE school_exam_accommodations SET comment = ?');
    $statement->execute([$comment]);
    runMigrations($directory);
    check($db->query('SELECT comment FROM school_exam_accommodations')->fetchColumn() === $comment, 'Comment lost after repeated migrations.');
    check($db->query('SELECT pdf_data FROM school_exam_accommodations')->fetchColumn() === 'test PDF bytes', 'Existing PDF lost.');
    check((int)$db->query('SELECT revision FROM school_exam_accommodations')->fetchColumn() === 2, 'Accommodation migrated twice.');
    echo "Migration integration checks passed.\n";
} finally {
    foreach (glob($directory . '/migrations/*') as $file) unlink($file);
    rmdir($directory . '/migrations');
    unlink($directory . '/database-config.php');
    unlink($directory . '/migrate.php');
    rmdir($directory);
}
