<?php

require_once __DIR__ . '/../../../Includes/admin-cors.php';
require_once __DIR__ . '/../../../Includes/auth.php';
require_once __DIR__ . '/../../../Includes/Database.php';

setAdminCorsHeaders();
handlePreflight();
startAdminSession();

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['status' => 'success', 'data' => ['authenticated' => false]]);
    exit;
}

try {
    $db = Database::getInstance()->getConnection();
    $stmt = $db->prepare("SELECT id, username, email, role FROM users WHERE id = ? AND is_active = 1");
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch();

    if (!$user) {
        session_destroy();
        echo json_encode(['status' => 'success', 'data' => ['authenticated' => false]]);
        exit;
    }

    echo json_encode([
        'status' => 'success',
        'data' => [
            'authenticated' => true,
            'user' => $user,
        ],
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Server error']);
}
