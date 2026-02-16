# Lokalno Razvojno Okolje - cPanel Simulacija

## Struktura
```
public_html/          # Simulira cPanel public_html
├── api/              # API endpoints
│   ├── test.php      # Test API
│   └── projects.php  # Projekti API
└── ...               # Ostale datoteke
```

## Kako pognati

### 1. Zaženi PHP server (simulira cPanel)
```bash
php -S localhost:8000 -t public_html
```

### 2. Zaženi React dev server (v drugi konzoli)
```bash
cd React
npm run dev
```

## Kako uporabljati v React

Vite proxy avtomatsko preusmeri `/api` klice na PHP server:

```tsx
// Lokalno in produkcijsko enako!
fetch('/api/projects.php')
  .then(res => res.json())
  .then(data => console.log(data));

fetch('/api/test.php')
  .then(res => res.json())
  .then(data => console.log(data));
```

## Na produkciji (cPanel)

- Datoteke so že v `public_html/api/`
- URL-ji so enaki: `/api/projects.php`
- Ničesar ni treba spreminjati! ✓

## Prednosti

✓ Identična struktura lokalno in na produkciji  
✓ Brez spreminjanja URL-jev med okolji  
✓ Vite proxy simulira produkcijsko routing  
✓ Enostavno deployment - samo upload `public_html/`
