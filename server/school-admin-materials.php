<?php
ini_set('display_errors', '0');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function respond($status, $body) { http_response_code($status); header('Content-Type: application/json; charset=utf-8'); echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE); exit; }
$secure = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
$directory = __DIR__ . '/sessions';
if (!is_dir($directory)) respond(503, ['error' => 'Die Sitzung ist nicht verfügbar.']);
ini_set('session.use_strict_mode', '1');
ini_set('session.gc_maxlifetime', '2592000');
session_save_path($directory);
session_name('school_session');
session_set_cookie_params(['lifetime' => 0, 'path' => '/', 'secure' => $secure, 'httponly' => true, 'samesite' => 'Lax']);
if (!session_start()) respond(503, ['error' => 'Die Sitzung ist nicht verfügbar.']);
$authenticated = !empty($_SESSION['authenticated']) && ($_SESSION['expires_at'] ?? 0) > time();
if (!$authenticated) respond(401, ['error' => 'Bitte anmelden.']);
$method = $_SERVER['REQUEST_METHOD'];
if (!in_array($method, ['GET', 'POST'], true)) respond(405, ['error' => 'Methode nicht erlaubt.']);
if ($authenticated && empty($_SESSION['course_materials_csrf'])) $_SESSION['course_materials_csrf'] = bin2hex(random_bytes(32));
$csrf = $authenticated ? $_SESSION['course_materials_csrf'] : null;
if ($method === 'POST' && (!$authenticated || !hash_equals($csrf, $_SERVER['HTTP_X_CSRF_TOKEN'] ?? ''))) respond($authenticated ? 403 : 401, ['error' => 'Bitte erneut anmelden und die Seite neu laden.']);
session_write_close();
try {
    $config = require __DIR__ . '/database-config.php';
    $db = new PDO('mysql:host=' . $config['host'] . ';port=' . (int)($config['port'] ?? 3306) . ';dbname=' . $config['name'] . ';charset=utf8mb4', $config['user'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    if ($method === 'GET') {
        $id = filter_var($_GET['id'] ?? null, FILTER_VALIDATE_INT);
        if ($id !== false && $id !== null && $id > 0) {
            $query = $db->prepare('SELECT pdf_data, title, filename, mime_type FROM school_admin_materials WHERE id = ?');
            $query->execute([$id]); $row = $query->fetch();
            if (!$row) respond(404, ['error' => 'Datei nicht gefunden.']);
            $isPdf = ($row['mime_type'] ?? 'application/pdf') === 'application/pdf';
            $filename = $row['filename'] ?: $row['title'] . '.pdf';
            header('Content-Type: ' . ($isPdf ? 'application/pdf' : 'application/octet-stream'));
            header('Content-Disposition: ' . ($isPdf ? 'inline' : 'attachment') . "; filename=\"download\"; filename*=UTF-8''" . rawurlencode($filename));
            header('Content-Length: ' . strlen($row['pdf_data'])); echo $row['pdf_data']; exit;
        }
        $items = $db->query('SELECT id, title, section, filename, mime_type FROM school_admin_materials ORDER BY id')->fetchAll();
        foreach ($items as &$item) $item['id'] = (int)$item['id'];
        respond(200, ['items' => $items, 'csrf' => $csrf, 'sections_supported' => true, 'files_supported' => true, 'class_sections_supported' => true]);
    }
    if (($_POST['action'] ?? '') === 'delete') {
        $id = filter_var($_POST['id'] ?? null, FILTER_VALIDATE_INT);
        if (!$id || $id < 1) respond(422, ['error' => 'Ungültiges Material.']);
        $query = $db->prepare('DELETE FROM school_admin_materials WHERE id = ?');
        $query->execute([$id]);
        if ($query->rowCount() !== 1) respond(404, ['error' => 'Das Material wurde nicht gefunden.']);
        respond(200, ['success' => true]);
    }
    $section = $_POST['section'] ?? '';
    if (!is_string($section) || !in_array($section, ['schuladministration', 'schulwiki', 'pruefungen', 'klasse-3bkgd-met', 'klasse-3bkgd-grd', 'klasse-1bfd1-bpk', 'klasse-3tgg12', 'klasse-3tgg2'], true)) respond(422, ['error' => 'Ungültiger Bereich.']);
    $file = $_FILES['file'] ?? null;
    if (!$file || $file['error'] !== UPLOAD_ERR_OK || $file['size'] < 1 || $file['size'] > 5 * 1024 * 1024 || !is_uploaded_file($file['tmp_name'])) respond(422, ['error' => 'Datei-Upload fehlgeschlagen. Maximal 5 MB.']);
    $filename = trim(basename(str_replace('\\', '/', $file['name'])));
    if (!$filename || !preg_match('//u', $filename) || preg_match('/[\x00-\x1f\x7f]/', $filename) || preg_match_all('/./us', $filename) > 200) respond(422, ['error' => 'Bitte einen Dateinamen mit höchstens 200 Zeichen verwenden.']);
    $data = file_get_contents($file['tmp_name']);
    $mime = ((new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']) === 'application/pdf' && substr($data, 0, 5) === '%PDF-') ? 'application/pdf' : 'application/octet-stream';
    $query = $db->prepare('INSERT INTO school_admin_materials (title, pdf_data, section, filename, mime_type) VALUES (?, ?, ?, ?, ?)');
    $query->execute([$filename, $data, $section, $filename, $mime]);
    respond(201, ['item' => ['id' => (int)$db->lastInsertId(), 'title' => $filename, 'section' => $section, 'filename' => $filename, 'mime_type' => $mime]]);
} catch (Throwable $error) { respond(503, ['error' => 'Die Materialspeicherung ist noch nicht verfügbar.']); }
