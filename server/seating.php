<?php
// Private implementation: deploy alongside login.php, never into visualizer/.
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function respond($status, $body) {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}
$secure = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
$directory = __DIR__ . '/sessions';
if (!is_dir($directory)) respond(503, ['error' => 'Die Login-Sitzung ist nicht verfügbar.']);
ini_set('session.use_strict_mode', '1');
ini_set('session.gc_maxlifetime', '2592000');
session_save_path($directory);
session_name('school_session');
session_set_cookie_params(['lifetime' => 0, 'path' => '/', 'secure' => $secure, 'httponly' => true, 'samesite' => 'Lax']);
if (!session_start()) respond(503, ['error' => 'Die Login-Sitzung ist nicht verfügbar.']);
if (empty($_SESSION['authenticated']) || ($_SESSION['expires_at'] ?? 0) <= time()) {
    respond(401, ['error' => 'Bitte melde dich erneut an.']);
}
$method = $_SERVER['REQUEST_METHOD'];
if (!in_array($method, ['GET', 'POST'], true)) {
    header('Allow: GET, POST');
    respond(405, ['error' => 'Methode nicht erlaubt.']);
}
if (empty($_SESSION['seating_csrf'])) $_SESSION['seating_csrf'] = bin2hex(random_bytes(32));
$csrf = $_SESSION['seating_csrf'];
if ($method === 'POST') {
    if (!hash_equals($csrf, $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '')) respond(403, ['error' => 'Bitte lade den Sitzplan neu und versuche es erneut.']);
    if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) respond(415, ['error' => 'JSON erforderlich.']);
}
session_write_close();
// Only an opaque board key and a permutation of original seat numbers are accepted.
$input = [];
if ($method === 'POST') {
    $raw = file_get_contents('php://input', false, null, 0, 4097);
    if (strlen($raw) > 4096) respond(413, ['error' => 'Anfrage zu groß.']);
    $input = json_decode($raw, true);
    if (!is_array($input) || array_diff(array_keys($input), ['board', 'positions', 'columns', 'rows', 'revision'])) respond(422, ['error' => 'Es sind nur Platznummern erlaubt.']);
}
$board = $method === 'GET' ? ($_GET['board'] ?? null) : ($input['board'] ?? null);
if (!is_string($board) || !preg_match('/^[a-f0-9]{32}$/D', $board)) respond(422, ['error' => 'Ungültiger Sitzplan-Schlüssel.']);
function validLayout($columns, $rows) {
    return is_int($columns) && is_int($rows) && $columns >= 1 && $columns <= 20 && $rows >= 1 && $rows <= 20;
}
function validPositions($positions) {
    if (!is_array($positions) || count($positions) < 1 || count($positions) > 400 || array_keys($positions) !== range(0, count($positions) - 1)) return false;
    $seen = [];
    foreach ($positions as $position) {
        if ($position === null) continue;
        if (!is_int($position) || $position < 0 || $position >= 400 || isset($seen[$position])) return false;
        $seen[$position] = true;
    }
    return true;
}
if ($method === 'POST') {
    $columns = $input['columns'] ?? 6;
    $rows = $input['rows'] ?? 5;
    if (!validLayout($columns, $rows) || !validPositions($input['positions'] ?? null) || !is_int($input['revision'] ?? null) || $input['revision'] < 0 || $input['revision'] > 2147483646 || count($input['positions']) !== $columns * $rows) respond(422, ['error' => 'Ungültige Platzanordnung.']);
}
try {
    if (!is_file(__DIR__ . '/database-config.php')) respond(503, ['error' => 'Die Datenbank ist noch nicht eingerichtet.']);
    $config = require __DIR__ . '/database-config.php';
    $db = new PDO('mysql:host=' . $config['host'] . ';port=' . (int)($config['port'] ?? 3306) . ';dbname=' . $config['name'] . ';charset=utf8mb4', $config['user'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    if ($method === 'GET') {
        $query = $db->prepare('SELECT positions_json, revision FROM school_seating WHERE board_key = ?');
        $query->execute([$board]);
        $row = $query->fetch();
        $stored = $row ? json_decode($row['positions_json'], true) : null;
        // Read the former 30-place array without requiring a database migration.
        $positions = $stored !== null && isset($stored['positions']) ? $stored['positions'] : $stored;
        $columns = is_array($stored) && isset($stored['columns']) ? $stored['columns'] : 6;
        $rows = is_array($stored) && isset($stored['rows']) ? $stored['rows'] : 5;
        if ($row && (!validPositions($positions) || !validLayout($columns, $rows) || count($positions) !== $columns * $rows)) respond(503, ['error' => 'Die gespeicherte Anordnung ist ungültig.']);
        respond(200, ['positions' => $positions, 'columns' => $columns, 'rows' => $rows, 'revision' => $row ? (int)$row['revision'] : 0, 'csrf' => $csrf]);
    }
    $json = json_encode(['positions' => $input['positions'], 'columns' => $columns, 'rows' => $rows]);
    if ($input['revision'] === 0) {
        try {
            $query = $db->prepare('INSERT INTO school_seating (board_key, positions_json) VALUES (?, ?)');
            $query->execute([$board, $json]);
        } catch (PDOException $error) {
            if ($error->getCode() === '23000') respond(409, ['error' => 'Der Sitzplan wurde bereits gespeichert. Bitte den Serverstand laden.']);
            throw $error;
        }
    } else {
        $query = $db->prepare('UPDATE school_seating SET positions_json = ?, revision = revision + 1 WHERE board_key = ? AND revision = ?');
        $query->execute([$json, $board, $input['revision']]);
        if ($query->rowCount() !== 1) respond(409, ['error' => 'Der Sitzplan wurde auf einem anderen Gerät geändert. Bitte den Serverstand laden.']);
    }
    respond(200, ['revision' => $input['revision'] + 1]);
} catch (Throwable $error) {
    error_log('Seating database operation failed: ' . get_class($error));
    respond(503, ['error' => 'Sitzplan konnte nicht geladen oder gespeichert werden. Bitte die PHP-Dateien und Datenbanktabelle auf STRATO prüfen.']);
}
