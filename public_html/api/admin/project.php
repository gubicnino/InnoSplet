<?php

require_once __DIR__ . '/../../../Includes/admin-cors.php';
require_once __DIR__ . '/../../../Includes/auth.php';
require_once __DIR__ . '/../../../Includes/Database.php';

setAdminCorsHeaders();
handlePreflight();
requireAuth();

$db = Database::getInstance()->getConnection();
$id = $_GET['id'] ?? null;

if (!$id) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Missing project ID']);
    exit;
}

try {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $stmt = $db->prepare("SELECT * FROM projects WHERE id = ?");
        $stmt->execute([$id]);
        $project = $stmt->fetch();

        if (!$project) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Project not found']);
            exit;
        }

        echo json_encode(['status' => 'success', 'data' => $project]);

    } elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $input = json_decode(file_get_contents('php://input'), true);

        if (empty($input['title']) || empty($input['slug'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Title and slug are required']);
            exit;
        }

        $stmt = $db->prepare("
            UPDATE projects SET
                title = ?, slug = ?, short_description = ?, long_description = ?,
                industry = ?, category = ?, thumbnail_url = ?,
                gallery = ?, client_name = ?, project_url = ?, technologies = ?,
                completion_date = ?, duration_days = ?, challenge = ?, solution = ?,
                results = ?, is_active = ?, featured = ?, order_position = ?, prefix = ?
            WHERE id = ?
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
            $input['prefix'] ?? null,
            $id,
        ]);

        echo json_encode(['status' => 'success', 'message' => 'Project updated']);

    } elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        // Fetch prefix before deleting so we can remove the image folder
        $stmt = $db->prepare("SELECT prefix FROM projects WHERE id = ?");
        $stmt->execute([$id]);
        $project = $stmt->fetch();

        $stmt = $db->prepare("DELETE FROM projects WHERE id = ?");
        $stmt->execute([$id]);

        // Delete the image folder if prefix exists
        if ($project && !empty($project['prefix'])) {
            $safePrefix = preg_replace('/[^a-zA-Z0-9_-]/', '', $project['prefix']);
            $imageDir = __DIR__ . '/../../images/projects/' . $safePrefix;
            if (is_dir($imageDir)) {
                $files = glob($imageDir . '/*') ?: [];
                foreach ($files as $file) {
                    if (is_file($file)) {
                        unlink($file);
                    }
                }
                rmdir($imageDir);
            }
        }

        echo json_encode(['status' => 'success', 'message' => 'Project deleted']);

    } else {
        http_response_code(405);
        echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
