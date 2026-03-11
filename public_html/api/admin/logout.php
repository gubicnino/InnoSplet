<?php

require_once __DIR__ . '/../../../Includes/admin-cors.php';
require_once __DIR__ . '/../../../Includes/auth.php';

setAdminCorsHeaders();
handlePreflight();

startAdminSession();
session_destroy();

echo json_encode(['status' => 'success', 'message' => 'Logged out']);
