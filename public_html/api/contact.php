<?php
// CORS headers must come first before any potential errors
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Load Composer autoloader
require_once __DIR__ . '/../../vendor/autoload.php';

// Load email configuration
$emailConfig = require __DIR__ . '/../../Config/email-config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get POST data
$raw_input = file_get_contents('php://input');
$input = json_decode($raw_input, true);

// Debug logging
error_log('Raw input: ' . $raw_input);
error_log('Decoded input: ' . print_r($input, true));

// Check if JSON decode was successful
if ($input === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data', 'raw' => $raw_input]);
    exit;
}

// Validate required fields
$required_fields = ['name', 'email', 'message'];
foreach ($required_fields as $field) {
    if (!isset($input[$field]) || trim($input[$field]) === '') {
        http_response_code(400);
        echo json_encode([
            'error' => "Field '$field' is required",
            'received_data' => $input
        ]);
        exit;
    }
}

$name = htmlspecialchars($input['name'], ENT_QUOTES, 'UTF-8');
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($input['message'], ENT_QUOTES, 'UTF-8');

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Email configuration
$to = 'info@innosplet.si';
$subject = 'Nova kontaktna forma - InnoSplet';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $email,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

// HTML email template
$html_message = '
<!DOCTYPE html>
<html lang="sl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova kontaktna forma</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #e4e4e7;
            background-color: #09090b;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #18181b;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        .content {
            padding: 30px;
        }
        .field {
            margin-bottom: 25px;
        }
        .field-label {
            font-weight: 600;
            color: #3b82f6;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
            display: block;
        }
        .field-value {
            background-color: #27272a;
            padding: 14px 16px;
            border-radius: 8px;
            border-left: 3px solid #3b82f6;
            word-wrap: break-word;
            color: #fafafa;
        }
        .message-box {
            background-color: #27272a;
            padding: 16px;
            border-radius: 8px;
            border-left: 3px solid #3b82f6;
            white-space: pre-wrap;
            word-wrap: break-word;
            color: #fafafa;
            line-height: 1.7;
        }
        .footer {
            background-color: #18181b;
            padding: 20px;
            text-align: center;
            color: #a1a1aa;
            font-size: 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .timestamp {
            color: #a1a1aa;
            font-size: 13px;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Novo Povpraševanje</h1>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="field-label">Ime in Priimek</div>
                <div class="field-value">' . $name . '</div>
            </div>
            
            <div class="field">
                <div class="field-label">Email naslov</div>
                <div class="field-value">
                    <a href="mailto:' . $email . '" style="color: #3b82f6; text-decoration: none;">' . $email . '</a>
                </div>
            </div>
            
            <div class="field">
                <div class="field-label">Sporočilo</div>
                <div class="message-box">' . nl2br($message) . '</div>
            </div>
            
            <div class="timestamp">
                Sporočilo prejeto: ' . date('d.m.Y H:i:s') . '
            </div>
        </div>
        
        <div class="footer">
            <p>To sporočilo je bilo poslano preko kontaktne forme na spletni strani InnoSplet.</p>
        </div>
    </div>
</body>
</html>
';

// Send email with PHPMailer
try {
    $mail = new PHPMailer(true);
    
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $emailConfig['smtp']['host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $emailConfig['smtp']['username'];
    $mail->Password   = $emailConfig['smtp']['password'];
    $mail->SMTPSecure = $emailConfig['smtp']['secure'];
    $mail->Port       = $emailConfig['smtp']['port'];
    $mail->CharSet    = 'UTF-8';
    
    // SSL/TLS opcije za shared hosting (prepreči SSL certificate mismatch napake)
    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ];
    
    // Debug mode
    if ($emailConfig['debug']) {
        $mail->SMTPDebug = 2;
    }
    
    // Recipients
    $mail->setFrom($emailConfig['from']['email'], $emailConfig['from']['name']);
    $mail->addAddress($emailConfig['contact_email']);
    $mail->addReplyTo($email, $name);
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Nova kontaktna forma - InnoSplet';
    $mail->Body    = $html_message;
    $mail->AltBody = "Nova kontaktna forma\n\nIme: $name\nEmail: $email\nSporočilo:\n$message";
    
    // Send email
    $mail->send();
    
    // Also save to log file for backup
    $log_dir = __DIR__ . '/../../logs';
    if (!file_exists($log_dir)) {
        mkdir($log_dir, 0755, true);
    }
    
    $log_file = $log_dir . '/contact_messages.log';
    $log_entry = sprintf(
        "\n\n=== Message sent at %s ===\nFrom: %s <%s>\nMessage:\n%s\n%s",
        date('Y-m-d H:i:s'),
        $name,
        $email,
        $message,
        str_repeat('=', 50)
    );
    file_put_contents($log_file, $log_entry, FILE_APPEND);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email poslano uspešno!'
    ]);
    
} catch (Exception $e) {
    // Log error
    error_log("PHPMailer Error: {$mail->ErrorInfo}");
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Napaka pri pošiljanju emaila: ' . $mail->ErrorInfo
    ]);
}

