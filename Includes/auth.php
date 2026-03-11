<?php

function startAdminSession(): void
{
    if (session_status() === PHP_SESSION_NONE) {
        session_set_cookie_params([
            'lifetime' => 0,
            'path' => '/',
            'httponly' => true,
            'samesite' => 'Lax',
            'secure' => false, // Set to true in production with HTTPS
        ]);
        session_start();
    }
}

function requireAuth(): void
{
    startAdminSession();
    if (!isset($_SESSION['user_id'])) {
        http_response_code(401);
        echo json_encode([
            'status' => 'error',
            'message' => 'Unauthorized',
        ]);
        exit;
    }
}
