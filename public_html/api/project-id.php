<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/../../includes/Database.php';

try {
    $db = Database::getInstance();
    $pdo = $db->getConnection();

    $id = $_GET['id'] ?? null;
    if ($id === null) {
        http_response_code(400);
        echo json_encode([
            'status' => 'error',
            'message' => 'Missing project ID'
        ]);
        exit;
    }

    $stmt = $pdo->prepare("SELECT * FROM projects WHERE id = ? AND is_active = 1");
    $stmt->execute([$id]);
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
