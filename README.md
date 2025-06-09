# GitHub PR Checker

Esta es una extensión para Chrome que te recuerda que los Pull Requests deben hacerse en base a la rama `staging` y no a `main` en GitHub.

## Descripción
Cuando visitas la página de comparación de ramas (Pull Request) en GitHub, la extensión muestra un mensaje animado recordándote que el Pull Request debe hacerse en base a `staging`.

## Archivos principales
- `manifest.json`: Define los permisos, scripts y configuración de la extensión.
- `content.js`: Script que se inyecta en las páginas de GitHub para mostrar el recordatorio.

## Instalación
1. Clona este repositorio o descarga los archivos.
2. Ve a `chrome://extensions/` en tu navegador Chrome.
3. Activa el "Modo de desarrollador" (arriba a la derecha).
4. Haz clic en "Cargar descomprimida" y selecciona la carpeta de este proyecto.
5. ¡Listo! Ahora, cuando vayas a crear un Pull Request en GitHub, verás el recordatorio.

## ¿Cómo funciona?
- La extensión observa los cambios de ruta en GitHub.
- Cuando detecta que estás en la página de comparación de ramas (`/compare`), inyecta un mensaje animado sobre el selector de ramas.
- El mensaje dice: `🔪 Recuerda hacer el pull request en base a staging. 🚧`

## Permisos
- `scripting`: Necesario para inyectar el script en las páginas de GitHub.

## Icono
Incluye un icono de 48x48 píxeles (`icon.png`).

---

¡Contribuciones y sugerencias son bienvenidas! 