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
            $query = $db->prepare('SELECT pdf_data FROM school_admin_materials WHERE id = ?');
            $query->execute([$id]); $row = $query->fetch();
            if (!$row) respond(404, ['error' => 'PDF nicht gefunden.']);
            header('Content-Type: application/pdf'); header('Content-Disposition: inline; filename="material.pdf"'); header('Content-Length: ' . strlen($row['pdf_data'])); echo $row['pdf_data']; exit;
        }
        $items = $db->query('SELECT id, title, section FROM school_admin_materials ORDER BY id')->fetchAll();
        foreach ($items as &$item) $item['id'] = (int)$item['id'];
        respond(200, ['items' => $items, 'csrf' => $csrf, 'sections_supported' => true]);
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
    if (!is_string($section) || !in_array($section, ['schuladministration', 'schulwiki', 'pruefungen'], true)) respond(422, ['error' => 'Ungültiger Bereich.']);
    $file = $_FILES['pdf'] ?? null;
    if (!$file || $file['error'] !== UPLOAD_ERR_OK || $file['size'] < 1 || $file['size'] > 5 * 1024 * 1024 || !is_uploaded_file($file['tmp_name'])) respond(422, ['error' => 'PDF-Upload fehlgeschlagen. Maximal 5 MB.']);
    if ((new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']) !== 'application/pdf') respond(422, ['error' => 'Bitte ein gültiges PDF auswählen.']);
    $pdf = file_get_contents($file['tmp_name']);
    if (substr($pdf, 0, 5) !== '%PDF-') respond(422, ['error' => 'Ungültige PDF-Datei.']);
    $title = trim(preg_replace('/\.pdf$/i', '', basename($file['name'])));
    if (!$title || !preg_match('//u', $title) || preg_match_all('/./us', $title) > 200) respond(422, ['error' => 'Bitte einen Dateinamen mit höchstens 200 Zeichen verwenden.']);
    $query = $db->prepare('INSERT INTO school_admin_materials (title, pdf_data, section) VALUES (?, ?, ?)');
    $query->execute([$title, $pdf, $section]);
    respond(201, ['item' => ['id' => (int)$db->lastInsertId(), 'title' => $title, 'section' => $section]]);
} catch (Throwable $error) { respond(503, ['error' => 'Die Materialspeicherung ist noch nicht verfügbar.']); }
