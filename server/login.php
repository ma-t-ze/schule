<?php
// Deploy this file and login-credentials.php to php/, outside visualizer/.
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
$secure = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
$directory = __DIR__ . '/sessions';
if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
    http_response_code(500);
    echo json_encode(['success' => false]);
    exit;
}
ini_set('session.use_strict_mode', '1');
ini_set('session.gc_maxlifetime', '2592000');
session_save_path($directory);
session_name('school_session');
session_set_cookie_params(['lifetime' => 0, 'path' => '/', 'secure' => $secure, 'httponly' => true, 'samesite' => 'Lax']);
session_start();
$method = $_SERVER['REQUEST_METHOD'];
if ($method === 'GET') {
    $valid = !empty($_SESSION['authenticated']) && ($_SESSION['expires_at'] ?? 0) > time();
    if (!$valid) $_SESSION = [];
    echo json_encode(['success' => $valid]);
    exit;
}
if ($method !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}
$request = json_decode(file_get_contents('php://input'), true);
if (($request['action'] ?? '') === 'logout') {
    $_SESSION = [];
    session_destroy();
    setcookie(session_name(), '', ['expires' => time() - 3600, 'path' => '/', 'secure' => $secure, 'httponly' => true, 'samesite' => 'Lax']);
    echo json_encode(['success' => true]);
    exit;
}
require __DIR__ . '/login-credentials.php';
$username = $request['username'] ?? null;
$password = $request['password'] ?? null;
$valid = is_string($username) && is_string($password)
    && hash_equals($valid_username, $username) && hash_equals($valid_password, $password);
if ($valid) {
    session_regenerate_id(true);
    $remember = ($request['remember'] ?? false) === true;
    $_SESSION['authenticated'] = true;
    $_SESSION['expires_at'] = time() + ($remember ? 2592000 : 43200);
    setcookie(session_name(), session_id(), ['expires' => $remember ? $_SESSION['expires_at'] : 0, 'path' => '/', 'secure' => $secure, 'httponly' => true, 'samesite' => 'Lax']);
}
echo json_encode(['success' => $valid]);
