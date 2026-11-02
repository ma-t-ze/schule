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
if (empty($_SESSION['lesson_text_csrf'])) $_SESSION['lesson_text_csrf'] = bin2hex(random_bytes(32));
$csrf = $_SESSION['lesson_text_csrf'];
if ($method === 'POST') {
    if (!hash_equals($csrf, $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '')) respond(403, ['error' => 'Bitte lade das Dokument neu und versuche es erneut.']);
    if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) respond(415, ['error' => 'JSON erforderlich.']);
}
session_write_close();
$input = $_GET;
if ($method === 'POST') {
    $raw = file_get_contents('php://input', false, null, 0, 1500001);
    if (strlen($raw) > 1500000) respond(413, ['error' => 'Dokument zu groß.']);
    $input = json_decode($raw, true);
}
if (!is_array($input)) respond(422, ['error' => 'Ungültige Anfrage.']);
$key = $input['document_key'] ?? '';
if (!is_string($key) || !preg_match('/^(kopierstempel|3d-druck|gesetz-der-geschlossenheit)-(verlauf|langform)$/D', $key)) respond(422, ['error' => 'Ungültiges Dokument.']);
function validBlocks($blocks) {
    if (!is_array($blocks) || count($blocks) > 1000 || ($blocks && array_keys($blocks) !== range(0, count($blocks) - 1))) return false;
    $seen = [];
    foreach ($blocks as $block) {
        if (!is_array($block) || !is_string($block['key'] ?? null) || !preg_match('/^[a-f0-9]{8}-[0-9]+$/D', $block['key']) || isset($seen[$block['key']])) return false;
        $seen[$block['key']] = true;
        foreach (['base', 'html'] as $field) if (!is_string($block[$field] ?? null) || strlen($block[$field]) > 120000 || !preg_match('//u', $block[$field])) return false;
        if (array_diff(array_keys($block), ['key', 'base', 'html'])) return false;
    }
    return true;
}
if ($method === 'POST') {
    if (!validBlocks($input['blocks'] ?? null)) respond(422, ['error' => 'Ungültige Textstellen.']);
    if (!is_int($input['revision'] ?? null) || $input['revision'] < 0 || $input['revision'] > 2147483646) respond(422, ['error' => 'Ungültige Version.']);
}
try {
    $config = require __DIR__ . '/database-config.php';
    $db = new PDO('mysql:host=' . $config['host'] . ';port=' . (int)($config['port'] ?? 3306) . ';dbname=' . $config['name'] . ';charset=utf8mb4', $config['user'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    if ($method === 'GET') {
        $query = $db->prepare('SELECT blocks_json, revision FROM school_lesson_documents WHERE document_key = ?');
        $query->execute([$key]); $row = $query->fetch();
        $blocks = $row ? json_decode($row['blocks_json'], true) : [];
        if (!validBlocks($blocks)) respond(503, ['error' => 'Der gespeicherte Textstand ist ungültig.']);
        respond(200, ['blocks' => $blocks, 'revision' => $row ? (int)$row['revision'] : 0, 'csrf' => $csrf]);
    }
    $json = json_encode($input['blocks'], JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
    if (strlen($json) > 1400000) respond(413, ['error' => 'Dokument zu groß.']);
    if ($input['revision'] === 0) {
        try {
            $query = $db->prepare('INSERT INTO school_lesson_documents (document_key, blocks_json) VALUES (?, ?)');
            $query->execute([$key, $json]);
        } catch (PDOException $error) {
            if ($error->getCode() === '23000') respond(409, ['error' => 'In einem anderen Fenster geändert. Lade zuerst deinen Entwurf als Textstand herunter und anschließend die Seite neu.']);
            throw $error;
        }
    } else {
        $query = $db->prepare('UPDATE school_lesson_documents SET blocks_json = ?, revision = revision + 1 WHERE document_key = ? AND revision = ?');
        $query->execute([$json, $key, $input['revision']]);
        if ($query->rowCount() !== 1) respond(409, ['error' => 'In einem anderen Fenster geändert. Lade zuerst deinen Entwurf als Textstand herunter und anschließend die Seite neu.']);
    }
    respond(200, ['revision' => $input['revision'] + 1]);
} catch (Throwable $error) {
    if ($error instanceof PDOException && (int)($error->errorInfo[1] ?? 0) === 1146) respond(503, ['error' => 'Bitte lesson-documents.sql in der ausgewählten STRATO-Datenbank ausführen.']);
    error_log('Lesson text operation failed: ' . get_class($error));
    respond(503, ['error' => 'Dokument konnte nicht geladen oder gespeichert werden. Bitte STRATO-Einrichtung prüfen.']);
}
