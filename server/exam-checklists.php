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
if (empty($_SESSION['exam_csrf'])) $_SESSION['exam_csrf'] = bin2hex(random_bytes(32));
$csrf = $_SESSION['exam_csrf'];
if ($method === 'POST') {
    if (!hash_equals($csrf, $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '')) respond(403, ['error' => 'Bitte lade die Klassenarbeiten neu und versuche es erneut.']);
    if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) respond(415, ['error' => 'JSON erforderlich.']);
}
session_write_close();
$keys = ['3bkgd1-1-grd' => 4, '3tgg1-2' => 5, '3tgg2' => 2];
$input = $method === 'POST' ? json_decode(file_get_contents('php://input', false, null, 0, 20001), true) : $_GET;
if (!is_array($input)) respond(422, ['error' => 'Ungültige Anfrage.']);
$key = $input['exam_key'] ?? '';
if (!is_string($key) || !preg_match('/^2026-27-(3bkgd1-1-grd|3tgg1-2|3tgg2)-([1-5])$/D', $key, $parts) || (int)$parts[2] > $keys[$parts[1]]) respond(422, ['error' => 'Ungültige Klassenarbeit.']);
$fields = ['announced', 'materials', 'teams_announced', 'handed_out', 'accommodation'];
if ($method === 'POST') {
    foreach ($fields as $field) if (!is_bool($input[$field] ?? null)) respond(422, ['error' => 'Ungültige Checkbox.']);
    $names = $input['makeup_names'] ?? null;
    if (!is_string($names) || !preg_match('//u', $names) || strlen($names) > 5000) respond(422, ['error' => 'Nachschreiber: maximal 5000 Bytes.']);
    if (!is_int($input['revision'] ?? null) || $input['revision'] < 0 || $input['revision'] > 2147483646) respond(422, ['error' => 'Ungültige Version.']);
}
try {
    $config = require __DIR__ . '/database-config.php';
    $db = new PDO('mysql:host=' . $config['host'] . ';port=' . (int)($config['port'] ?? 3306) . ';dbname=' . $config['name'] . ';charset=utf8mb4', $config['user'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    if ($method === 'GET') {
        $query = $db->prepare('SELECT announced, materials, teams_announced, handed_out, accommodation, makeup_names, revision FROM school_exam_checklists WHERE exam_key = ?');
        $query->execute([$key]);
        $item = $query->fetch() ?: ['announced' => false, 'materials' => false, 'teams_announced' => false, 'handed_out' => false, 'accommodation' => false, 'makeup_names' => '', 'revision' => 0];
        foreach ($fields as $field) $item[$field] = (bool)$item[$field];
        $item['revision'] = (int)$item['revision'];
        respond(200, ['item' => $item, 'csrf' => $csrf]);
    }
    $values = array_map(function ($field) use ($input) { return (int)$input[$field]; }, $fields);
    $values[] = trim($names);
    $values[] = $key;
    if ($input['revision'] === 0) {
        try {
            $query = $db->prepare('INSERT INTO school_exam_checklists (announced, materials, teams_announced, handed_out, accommodation, makeup_names, exam_key) VALUES (?, ?, ?, ?, ?, ?, ?)');
            $query->execute($values);
        } catch (PDOException $error) {
            if ($error->getCode() === '23000') respond(409, ['error' => 'In einem anderen Fenster geändert. Bitte neu laden.']);
            throw $error;
        }
    } else {
        $values[] = $input['revision'];
        $query = $db->prepare('UPDATE school_exam_checklists SET announced = ?, materials = ?, teams_announced = ?, handed_out = ?, accommodation = ?, makeup_names = ?, revision = revision + 1 WHERE exam_key = ? AND revision = ?');
        $query->execute($values);
        if ($query->rowCount() !== 1) respond(409, ['error' => 'In einem anderen Fenster geändert. Bitte neu laden.']);
    }
    respond(200, ['revision' => $input['revision'] + 1]);
} catch (Throwable $error) {
    error_log('Exam checklist operation failed: ' . get_class($error));
    respond(503, ['error' => 'Klassenarbeiten konnten nicht geladen oder gespeichert werden. Bitte PHP-Datei und Datenbanktabelle auf STRATO prüfen.']);
}
