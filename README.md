# Batata Web

Repo del sitio web de Batata Cofi (batatacofi.com).

## Cómo funciona el deploy

Cada vez que se hace **push a la rama `main`**, GitHub Actions sube automáticamente
los archivos por FTP a Ferozo (carpeta `public_html/`). No hace falta tocar
el editor de archivos de Ferozo nunca más.

## Configuración necesaria (una sola vez)

En **Settings → Secrets and variables → Actions** de este repo, cargar:

- `FTP_HOST` → host FTP de Ferozo (ej: `a0041228.ferozo.com`)
- `FTP_USERNAME` → usuario FTP
- `FTP_PASSWORD` → contraseña FTP

## Estructura

```
index.html
css/styles-v25.css
js/app-v25.js
favicon.svg, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png
```

**Nota:** la carpeta `img/` (fotos de producto) NO está incluida en este repo
por su peso. Esas se siguen subiendo manualmente por Ferozo cuando cambian.
El deploy automático no las toca.
