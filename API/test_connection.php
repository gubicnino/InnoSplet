<?php

$config = require_once __DIR__ . '/../Config/config.php';

echo "Testiram povezavo z bazo...\n\n";

try {
    $dsn = "mysql:host={$config['db_host']};port={$config['db_port']};dbname={$config['db_name']};charset=utf8mb4";
    $pdo = new PDO($dsn, $config['db_user'], $config['db_pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "✓ Povezava z bazo je uspešna!\n";
    echo "Host: {$config['db_host']}\n";
    echo "Port: {$config['db_port']}\n";
    echo "Database: {$config['db_name']}\n";
    echo "User: {$config['db_user']}\n\n";
    
    // Testiraj verzijo MySQL
    $stmt = $pdo->query('SELECT VERSION()');
    $version = $stmt->fetchColumn();
    echo "MySQL verzija: $version\n";
    
} catch (PDOException $e) {
    echo "✗ Napaka pri povezavi z bazo!\n";
    echo "Error: " . $e->getMessage() . "\n";
    exit(1);
}
