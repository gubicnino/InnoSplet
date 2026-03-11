<?php

require_once __DIR__ . '/../../../Includes/admin-cors.php';
require_once __DIR__ . '/../../../Includes/auth.php';
require_once __DIR__ . '/../../../Includes/Database.php';

setAdminCorsHeaders();
handlePreflight();
requireAuth();

$db = Database::getInstance()->getConnection();

try {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // List ALL projects (including inactive) for admin
        $stmt = $db->query("SELECT * FROM projects ORDER BY order_position ASC");
        $projects = $stmt->fetchAll();

        echo json_encode(['status' => 'success', 'data' => $projects]);

    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $input = json_decode(file_get_contents('php://input'), true);

        if (empty($input['title']) || empty($input['slug']) || empty($input['prefix'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Title, slug and prefix are required']);
            exit;
        }

        $stmt = $db->prepare("
            INSERT INTO projects (
                title, slug, short_description, long_description, industry, category,
                thumbnail_url, gallery, client_name, project_url,
                technologies, completion_date, duration_days, challenge, solution,
                results, is_active, featured, order_position, prefix
            ) VALUES (
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
            )
        ");

        $stmt->execute([
            $input['title'],
            $input['slug'],
            $input['short_description'] ?? '',
            $input['long_description'] ?? null,
            $input['industry'] ?? '',
            $input['category'] ?? null,
            $input['thumbnail_url'] ?? null,
            isset($input['gallery']) && is_array($input['gallery']) ? json_encode($input['gallery']) : null,
            $input['client_name'] ?? null,
            $input['project_url'] ?? null,
            isset($input['technologies']) && is_array($input['technologies']) ? json_encode($input['technologies']) : null,
            $input['completion_date'] ?? null,
            $input['duration_days'] ?? null,
            $input['challenge'] ?? null,
            $input['solution'] ?? null,
            $input['results'] ?? null,
            $input['is_active'] ?? 1,
            $input['featured'] ?? 0,
            $input['order_position'] ?? 0,
            $input['prefix'],
        ]);

        $newId = $db->lastInsertId();
        echo json_encode(['status' => 'success', 'data' => ['id' => (int) $newId]]);

    } else {
        http_response_code(405);
        echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
