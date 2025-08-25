Propósito
=======
Este repositorio es una web estática multi-página para un prototipo de inventario. Las páginas principales están en `Pages/` (por ejemplo `Login.html`, `Inicio.html`, `Products.html`, `Register.html`, `index.html`). El archivo JavaScript principal es `app.js` y contiene la inicialización por página.

Qué espera el mantenedor
========================
- Mantener compatibilidad con páginas estáticas (no hay servidor backend en el repo).
- Usar `localStorage` para demos y persistencia local cuando sea necesario.
- No introducir dependencias nuevas sin avisar; este proyecto es ligero y no usa bundlers ni npm por ahora.

Pautas concretas para el agente
================================
1. Detectar la página por `body[data-page]` o por el nombre del archivo (`Login.html` → `login`).
2. Colocar lógica específica de página en `app.js` como funciones `init<Login|Products|Register|Inicio>` y mapearlas en el router mínimo.
   - Ejemplo: `initProducts()` lee/escribe `localStorage.getItem('products')` y actualiza `#products-list`.
3. Evitar suposiciones sobre un API REST: no añadir llamadas fetch a endpoints remotos sin que el repositorio muestre configuraciones de servidor o variables de entorno.
4. Mantener DOM vanilla (no introducir jQuery u otros frameworks). Usa helpers `qs`/`qsa` y eventos nativos.
5. Formularios: validar en cliente y, para demo, persistir un objeto mínimo en `localStorage` (`user`, `products`). Redirigir usando `location.href` a las páginas dentro de `Pages/`.
6. Estilo de mensajes: usar `showMessage(msg, type)` que añade un contenedor `#app-message` y lo limpia tras unos segundos.

Archivos clave y qué contienen
===============================
- `Pages/*.html` — páginas estáticas. Añadir `data-page` en el `<body>` si necesitas un nombre lógico distinto al del archivo.
- `app.js` — punto de entrada del código cliente; contiene inits por página, helpers y un router mínimo.
- `estilos.css` — estilos globales; las modificaciones deben ser minimalistas y no romper el layout existente.

Patrones específicos observados
==============================
- No hay bundler, por tanto los cambios deben ser compatibles con carga directa en el navegador (ES5/ES6 sin módulos dinámicos si se quiere soporte amplio).
- Pequeñas cantidades de datos se guardan en `localStorage` y se renderizan en listas simples en el DOM.
- Nombres de archivos HTML usan mayúscula inicial (p. ej. `Login.html`). Normaliza los selectores a minúscula en `app.js` cuando crees el mapa de rutas.

Pruebas rápidas y verificación
==============================
- Abre `Pages/Login.html` en el navegador local (file:// o servido por un servidor estático) y prueba los formularios. El comportamiento esperado se basa en `app.js`:
  - Login: guarda `{email}` en `localStorage.user` y redirige a `Inicio.html`.
  - Register: guarda usuario simulado y redirige a `Login.html`.
  - Products: leer/escribir `localStorage.products` y re-renderizar `#products-list`.

Límites y qué no cambiar
=========================
- No crear dependencias npm o introducir compilación (webpack, vite) sin aprobación.
- No buscar o integrarse con APIs externas que no estén documentadas en el repo.

Si faltan detalles
===================
Si necesitas integrar un backend o añadir tests, pregunta primero sobre la intención y cómo el autor quiere desplegarlo. Para tareas UI pequeñas, realiza cambios en `Pages/` y `app.js` y documenta los cambios en el comentario superior de `app.js`.

Preguntas para el mantenedor (si hay incertidumbre)
==================================================
- ¿Deseas que las rutas se normalicen siempre a minúsculas? Actualmente `app.js` mapea `Products.html` → `products`.
- ¿Prefieres que el proyecto siga sin dependencias externas (vanilla) o que se permita una pequeña herramienta de bundling en el futuro?
