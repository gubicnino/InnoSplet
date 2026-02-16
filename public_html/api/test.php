<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/../../includes/Database.php';

try {
    $db = Database::getInstance();
    $pdo = $db->getConnection();
    
    // Testni response
    echo json_encode([
        'status' => 'success',
        'message' => 'API works!',
        'database' => 'Connected successfully'
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
