<?php

return [
    // SMTP Server Settings
    'smtp' => [
        'host'     => 'sh29.neoserv.si',           // Pravi SMTP server (iz error loga)
        'port'     => 587,                         // Port 587 (TLS) ali 465 (SSL)
        'secure'   => 'tls',                       // 'tls' ali 'ssl'
        'username' => 'info@innosplet.com',        // Cel email naslov
        'password' => 'password',            // Email geslo iz cPanel-a
    ],
    
    // Email From Settings
    'from' => [
        'email' => 'info@innosplet.com',     // Pošiljatelj email
        'name'  => 'InnoSplet',                // Ime pošiljatelja
    ],
    
    // Contact Form Recipient
    'contact_email' => 'info@innosplet.com',
    
    'debug' => false,
];
