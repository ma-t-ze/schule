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
if (empty($_SESSION['upcoming_csrf'])) $_SESSION['upcoming_csrf'] = bin2hex(random_bytes(32));
$csrf = $_SESSION['upcoming_csrf'];
if ($method === 'POST') {
    if (!hash_equals($csrf, $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '')) respond(403, ['error' => 'Bitte lade die Notizen neu und versuche es erneut.']);
    if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) respond(415, ['error' => 'JSON erforderlich.']);
}
session_write_close();
$input = [];
if ($method === 'POST') {
    $raw = file_get_contents('php://input', false, null, 0, 30001);
    if (strlen($raw) > 30000) respond(413, ['error' => 'Die Notiz ist zu lang.']);
    $input = json_decode($raw, true);
    if (!is_array($input)) respond(400, ['error' => 'Ungültige Anfrage.']);
    $action = $input['action'] ?? '';
    if (!is_string($action) || !in_array($action, ['create', 'update', 'delete'], true)) respond(400, ['error' => 'Ungültige Aktion.']);
    if ($action !== 'create') {
        if (!is_int($input['id'] ?? null) || $input['id'] < 1 || !is_int($input['revision'] ?? null) || $input['revision'] < 1) respond(400, ['error' => 'Ungültige Notiz-ID.']);
    }
    if ($action !== 'delete') {
        $title = $input['title'] ?? null;
        $note = $input['note'] ?? null;
        if (!is_string($title) || !is_string($note) || !preg_match('//u', $title) || !preg_match('//u', $note)) respond(422, ['error' => 'Titel und Notiz müssen Text sein.']);
        $title = trim($title);
        $note = trim($note);
        $titleLength = preg_match_all('/./us', $title);
        $noteLength = preg_match_all('/./us', $note);
        if ($titleLength < 1 || $titleLength > 160 || $noteLength < 1 || $noteLength > 5000) respond(422, ['error' => 'Titel: 1–160 Zeichen. Notiz: 1–5000 Zeichen.']);
    }
}
try {
    if (!is_file(__DIR__ . '/database-config.php')) respond(503, ['error' => 'Die Datenbank ist noch nicht eingerichtet.']);
    $config = require __DIR__ . '/database-config.php';
    $db = new PDO('mysql:host=' . $config['host'] . ';port=' . (int)($config['port'] ?? 3306) . ';dbname=' . $config['name'] . ';charset=utf8mb4', $config['user'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    if ($method === 'GET') {
        $items = $db->query('SELECT id, title, note, revision FROM school_upcoming ORDER BY id DESC')->fetchAll();
        foreach ($items as &$item) { $item['id'] = (int)$item['id']; $item['revision'] = (int)$item['revision']; }
        unset($item);
        respond(200, ['items' => $items, 'csrf' => $csrf]);
    }
    if ($action === 'create') {
        $statement = $db->prepare('INSERT INTO school_upcoming (title, note) VALUES (?, ?)');
        $statement->execute([$title, $note]);
        respond(201, ['item' => ['id' => (int)$db->lastInsertId(), 'title' => $title, 'note' => $note, 'revision' => 1]]);
    }
    if ($action === 'update') {
        $statement = $db->prepare('UPDATE school_upcoming SET title = ?, note = ?, revision = revision + 1 WHERE id = ? AND revision = ?');
        $statement->execute([$title, $note, $input['id'], $input['revision']]);
    } else {
        $statement = $db->prepare('DELETE FROM school_upcoming WHERE id = ? AND revision = ?');
        $statement->execute([$input['id'], $input['revision']]);
    }
    if ($statement->rowCount() !== 1) respond(409, ['error' => 'Die Notiz wurde inzwischen geändert oder gelöscht. Bitte lade die Liste neu.']);
    respond(200, $action === 'update' ? ['item' => ['id' => $input['id'], 'title' => $title, 'note' => $note, 'revision' => $input['revision'] + 1]] : ['success' => true]);
} catch (Throwable $error) {
    error_log('Upcoming database operation failed: ' . get_class($error));
    respond(503, ['error' => 'Die Notizen konnten nicht gespeichert oder geladen werden. Bitte prüfe die Datenbank-Einrichtung oder versuche es später erneut.']);
}
