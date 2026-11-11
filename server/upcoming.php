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
    $examKey = $input['exam_key'] ?? null;
    if ($action === 'create' && $examKey !== null) {
        $examCounts = ['3bkgd1-1-met' => 4, '3bkgd1-1-grd' => 4, '3tgg1-2' => 5, '3tgg2' => 2, '1bfd1-bpk' => 2];
        if (!is_string($examKey) || !preg_match('/^2026-27-(3bkgd1-1-met|3bkgd1-1-grd|3tgg1-2|3tgg2|1bfd1-bpk)-([1-5])$/D', $examKey, $examParts) || (int)$examParts[2] > $examCounts[$examParts[1]]) respond(422, ['error' => 'Ungültige Klassenarbeit.']);
    }
    if ($action !== 'create') {
        if (!is_int($input['id'] ?? null) || $input['id'] < 1 || !is_int($input['revision'] ?? null) || $input['revision'] < 1) respond(400, ['error' => 'Ungültige Notiz-ID.']);
    }
    if ($action !== 'delete') {
        $eventColor = $input['event_color'] ?? null;
        if ($eventColor !== null && (!is_string($eventColor) || !in_array($eventColor, ['red', 'orange', 'green'], true))) respond(422, ['error' => 'Bitte wähle eine gültige Terminfarbe.']);
        $important = array_key_exists('is_important', $input) ? $input['is_important'] : false;
        if (!is_bool($important)) respond(422, ['error' => 'Die Wichtig-Markierung muss ein Wahrheitswert sein.']);
        $eventDate = $input['event_date'] ?? null;
        if ($eventDate !== null) {
            if (!is_string($eventDate) || !preg_match('/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/', $eventDate, $parts) || (int)$parts[1] < 1000 || !checkdate((int)$parts[2], (int)$parts[3], (int)$parts[1])) respond(422, ['error' => 'Bitte wähle ein gültiges Datum.']);
        }
        $endDate = $input['end_date'] ?? null;
        if ($endDate !== null) {
            if (!is_string($endDate) || !preg_match('/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/', $endDate, $endParts) || (int)$endParts[1] < 1000 || !checkdate((int)$endParts[2], (int)$endParts[3], (int)$endParts[1]) || $eventDate === null || $endDate < $eventDate) respond(422, ['error' => 'Das Enddatum muss ein gültiges Datum ab dem Startdatum sein.']);
        }
        $title = $input['title'] ?? null;
        $note = $input['note'] ?? '';
        if (!is_string($title) || !is_string($note) || !preg_match('//u', $title) || !preg_match('//u', $note)) respond(422, ['error' => 'Titel und Notiz müssen Text sein.']);
        $title = trim($title);
        $note = trim($note);
        $titleLength = preg_match_all('/./us', $title);
        $noteLength = preg_match_all('/./us', $note);
        if ($titleLength < 1 || $titleLength > 160 || $noteLength > 5000) respond(422, ['error' => 'Titel: 1–160 Zeichen. Notiz: maximal 5000 Zeichen (optional).']);
    }
}
try {
    if (!is_file(__DIR__ . '/database-config.php')) respond(503, ['error' => 'Die Datenbank ist noch nicht eingerichtet.']);
    $config = require __DIR__ . '/database-config.php';
    $db = new PDO('mysql:host=' . $config['host'] . ';port=' . (int)($config['port'] ?? 3306) . ';dbname=' . $config['name'] . ';charset=utf8mb4', $config['user'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    if ($method === 'GET') {
        $items = $db->query('SELECT id, title, note, event_date, end_date, exam_key, event_color, is_important, revision FROM school_upcoming ORDER BY id DESC')->fetchAll();
        foreach ($items as &$item) { $item['id'] = (int)$item['id']; $item['revision'] = (int)$item['revision']; $item['is_important'] = (bool)$item['is_important']; $item['category'] = $item['exam_key'] ? 'exam' : null; }
        unset($item);
        respond(200, ['items' => $items, 'csrf' => $csrf]);
    }
    if ($action === 'create') {
        $statement = $db->prepare('INSERT INTO school_upcoming (title, note, event_date, end_date, exam_key, event_color, is_important) VALUES (?, ?, ?, ?, ?, ?, ?)');
        $statement->execute([$title, $note, $eventDate, $endDate, $examKey, $eventColor, (int)$important]);
        respond(201, ['item' => ['id' => (int)$db->lastInsertId(), 'title' => $title, 'note' => $note, 'event_date' => $eventDate, 'end_date' => $endDate, 'exam_key' => $examKey, 'event_color' => $eventColor, 'is_important' => $important, 'category' => $examKey ? 'exam' : null, 'revision' => 1]]);
    }
    // The checklist association remains immutable when editing an existing entry.
    $lookup = $db->prepare('SELECT exam_key, title, note, event_color, is_important FROM school_upcoming WHERE id = ? AND revision = ?');
    $lookup->execute([$input['id'], $input['revision']]);
    $existing = $lookup->fetch();
    if (!$existing) respond(409, ['error' => 'Die Notiz wurde inzwischen geändert oder gelöscht. Bitte lade die Liste neu.']);
    // Older clients can still edit dates without clearing saved appearance settings.
    if ($action === 'update') {
        if (!array_key_exists('event_color', $input)) $eventColor = $existing['event_color'];
        if (!array_key_exists('is_important', $input)) $important = (bool)$existing['is_important'];
    }
    if ($action === 'delete' && $existing['exam_key']) {
        // Remove only the calendar appointment; keep its checklist association.
        $statement = $db->prepare('UPDATE school_upcoming SET event_date = NULL, end_date = NULL, revision = revision + 1 WHERE id = ? AND revision = ?');
        $statement->execute([$input['id'], $input['revision']]);
        if ($statement->rowCount() !== 1) respond(409, ['error' => 'Der Termin wurde inzwischen geändert. Bitte neu laden.']);
        respond(200, ['item' => ['id' => $input['id'], 'title' => $existing['title'], 'note' => $existing['note'], 'event_date' => null, 'end_date' => null, 'exam_key' => $existing['exam_key'], 'event_color' => $existing['event_color'], 'is_important' => (bool)$existing['is_important'], 'category' => 'exam', 'revision' => $input['revision'] + 1]]);
    }
    if ($action === 'update') {
        $statement = $db->prepare('UPDATE school_upcoming SET title = ?, note = ?, event_date = ?, end_date = ?, event_color = ?, is_important = ?, revision = revision + 1 WHERE id = ? AND revision = ?');
        $statement->execute([$title, $note, $eventDate, $endDate, $eventColor, (int)$important, $input['id'], $input['revision']]);
    } else {
        $statement = $db->prepare('DELETE FROM school_upcoming WHERE id = ? AND revision = ?');
        $statement->execute([$input['id'], $input['revision']]);
    }
    if ($statement->rowCount() !== 1) respond(409, ['error' => 'Die Notiz wurde inzwischen geändert oder gelöscht. Bitte lade die Liste neu.']);
    respond(200, $action === 'update' ? ['item' => ['id' => $input['id'], 'title' => $title, 'note' => $note, 'event_date' => $eventDate, 'end_date' => $endDate, 'exam_key' => $existing['exam_key'], 'event_color' => $eventColor, 'is_important' => $important, 'category' => $existing['exam_key'] ? 'exam' : null, 'revision' => $input['revision'] + 1]] : ['success' => true]);
} catch (Throwable $error) {
    if ($error instanceof PDOException && (int)($error->errorInfo[1] ?? 0) === 1062) {
        respond(409, ['error' => 'Die Klassenarbeit wurde inzwischen angelegt. Bitte lade die Liste neu und öffne sie erneut.']);
    }
    if ($error instanceof PDOException && (int)($error->errorInfo[1] ?? 0) === 1054) {
        respond(503, ['error' => 'Eine Kalender-Datenbankspalte fehlt. Bitte die Kalender-Migrationen einschließlich 004-upcoming-appearance.php ausführen.']);
    }
    error_log('Upcoming database operation failed: ' . get_class($error));
    respond(503, ['error' => 'Die Notizen konnten nicht gespeichert oder geladen werden. Bitte prüfe die Datenbank-Einrichtung oder versuche es später erneut.']);
}
