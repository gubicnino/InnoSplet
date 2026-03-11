<?php

require_once __DIR__ . '/../../../Includes/admin-cors.php';
require_once __DIR__ . '/../../../Includes/auth.php';

setAdminCorsHeaders();
handlePreflight();
requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

$prefix = $_POST['prefix'] ?? '';
if (empty($prefix)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Prefix is required']);
    exit;
}

if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'No file uploaded or upload error']);
    exit;
}

$file = $_FILES['file'];

// Validate file type by extension
$allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
$extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

if (!in_array($extension, $allowedExtensions)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid file type. Allowed: jpg, png, gif, webp']);
    exit;
}

// Validate that it's actually an image
$imageInfo = getimagesize($file['tmp_name']);
if ($imageInfo === false) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'File is not a valid image']);
    exit;
}

// Validate file size (max 10MB)
if ($file['size'] > 10 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'File too large. Max 10MB']);
    exit;
}

// Sanitize prefix (alphanumeric, hyphens, underscores only)
$safePrefix = preg_replace('/[^a-zA-Z0-9_-]/', '', $prefix);
if (empty($safePrefix)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid prefix']);
    exit;
}

// Sanitize filename
$originalName = pathinfo($file['name'], PATHINFO_FILENAME);
$safeName = strtolower(preg_replace('/[^a-zA-Z0-9_-]/', '-', $originalName));
$safeName = preg_replace('/-+/', '-', trim($safeName, '-'));
$filename = $safeName . '.' . $extension;

// Create directory if needed
$uploadDir = __DIR__ . '/../../images/projects/' . $safePrefix;
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// If file already exists, append a number
$destPath = $uploadDir . '/' . $filename;
if (file_exists($destPath)) {
    $counter = 1;
    while (file_exists($uploadDir . '/' . $safeName . '-' . $counter . '.' . $extension)) {
        $counter++;
    }
    $filename = $safeName . '-' . $counter . '.' . $extension;
    $destPath = $uploadDir . '/' . $filename;
}

if (!move_uploaded_file($file['tmp_name'], $destPath)) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to save file']);
    exit;
}

echo json_encode(['status' => 'success', 'data' => ['filename' => $filename]]);
