<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/../../includes/Database.php';

try {
    $db = Database::getInstance();
    $pdo = $db->getConnection();
    
    // Pridobi samo 3 featured projekte (za homepage)
    $stmt = $pdo->query("SELECT * FROM projects WHERE is_active = 1 AND featured = 1 ORDER BY order_position LIMIT 3");
    $projects = $stmt->fetchAll();
    
    echo json_encode([
        'status' => 'success',
        'data' => $projects
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
