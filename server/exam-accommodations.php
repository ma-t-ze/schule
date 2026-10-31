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

}
session_write_close();
$input = $method === 'POST' ? $_POST : $_GET;
$key = $input['exam_key'] ?? '';
$keys = ['3bkgd1-1-grd' => 4, '3tgg1-2' => 5, '3tgg2' => 2];
if (!is_string($key) || !preg_match('/^2026-27-(3bkgd1-1-grd|3tgg1-2|3tgg2)-([1-5])$/D', $key, $parts) || (int)$parts[2] > $keys[$parts[1]]) respond(422, ['error' => 'Ungültige Klassenarbeit.']);
$id = filter_var($input['id'] ?? 0, FILTER_VALIDATE_INT);
if ($id === false || $id < 0) respond(422, ['error' => 'Ungültiger Eintrag.']);
try {
    $config = require __DIR__ . '/database-config.php';
    $db = new PDO('mysql:host=' . $config['host'] . ';port=' . (int)($config['port'] ?? 3306) . ';dbname=' . $config['name'] . ';charset=utf8mb4', $config['user'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    if ($method === 'GET') {
        if ($id) {
            $query = $db->prepare('SELECT pdf_data FROM school_exam_accommodations WHERE id = ? AND exam_key = ?');
            $query->execute([$id, $key]);
            $row = $query->fetch();
            if (!$row || $row['pdf_data'] === null) respond(404, ['error' => 'PDF nicht gefunden.']);
            header('Content-Type: application/pdf');
            header('Content-Disposition: attachment; filename="Nachteilsausgleich.pdf"');
            header('Content-Length: ' . strlen($row['pdf_data']));
            echo $row['pdf_data']; exit;
        }
        $query = $db->prepare('SELECT id, student_name, (pdf_data IS NOT NULL) AS has_pdf, revision FROM school_exam_accommodations WHERE exam_key = ? ORDER BY id');
        $query->execute([$key]);
        $items = $query->fetchAll();
        foreach ($items as &$item) { $item['id'] = (int)$item['id']; $item['revision'] = (int)$item['revision']; $item['has_pdf'] = (bool)$item['has_pdf']; }
        unset($item);
        respond(200, ['items' => $items, 'csrf' => $csrf]);
    }
    $revision = filter_var($input['revision'] ?? 0, FILTER_VALIDATE_INT);
    if ($revision === false || $revision < 0 || $revision > 2147483646) respond(422, ['error' => 'Ungültige Version.']);
    if (($input['action'] ?? '') === 'delete') {
        $query = $db->prepare('DELETE FROM school_exam_accommodations WHERE id = ? AND exam_key = ? AND revision = ?');
        $query->execute([$id, $key, $revision]);
        if ($query->rowCount() !== 1) respond(409, ['error' => 'Eintrag geändert. Bitte neu laden.']);
        respond(200, ['success' => true]);
    }
    $name = $input['student_name'] ?? '';
    if (!is_string($name) || !preg_match('//u', $name) || strlen(trim($name)) < 1 || preg_match_all('/./us', $name) > 150) respond(422, ['error' => 'Bitte einen Namen mit maximal 150 Zeichen eingeben.']);
    $pdf = null;
    if (isset($_FILES['pdf']) && $_FILES['pdf']['error'] !== UPLOAD_ERR_NO_FILE) {
        $file = $_FILES['pdf'];
        if ($file['error'] !== UPLOAD_ERR_OK || $file['size'] > 5 * 1024 * 1024 || !is_uploaded_file($file['tmp_name'])) respond(422, ['error' => 'PDF-Upload fehlgeschlagen. Maximal 5 MB.']);
        if ((new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']) !== 'application/pdf') respond(422, ['error' => 'Bitte eine PDF-Datei auswählen.']);
        $pdf = file_get_contents($file['tmp_name']);
        if (substr($pdf, 0, 5) !== '%PDF-') respond(422, ['error' => 'Ungültige PDF-Datei.']);
    }
    if ($id) {
        $query = $db->prepare('UPDATE school_exam_accommodations SET student_name = ?, pdf_data = COALESCE(?, pdf_data), revision = revision + 1 WHERE id = ? AND exam_key = ? AND revision = ?');
        $query->execute([trim($name), $pdf, $id, $key, $revision]);
        if ($query->rowCount() !== 1) respond(409, ['error' => 'Eintrag geändert. Bitte neu laden.']);
    } else {
        $query = $db->prepare('INSERT INTO school_exam_accommodations (exam_key, student_name, pdf_data) VALUES (?, ?, ?)');
        $query->execute([$key, trim($name), $pdf]);
    }
    respond(200, ['success' => true]);
} catch (Throwable $error) {
    error_log('Exam accommodation operation failed: ' . get_class($error));
    respond(503, ['error' => 'Nachteilsausgleich konnte nicht geladen oder gespeichert werden. Bitte STRATO-Einrichtung prüfen.']);
}
