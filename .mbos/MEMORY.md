# HISTORIAL DE MEMORIA Y APRENDIZAJE (MBOS369)
*Regla Universal: Este archivo es solo para añadir, nunca para sobreescribir.*

## [2026-04-05]
- **Aprendizaje:** Al probar diseños superpuestos o intercambiadores de estado tipo "toolbar", los botones flotantes aislados en componentes hijos (`V1Landing`, `V2Landing`, etc.) causan colisiones visuales. Se deben concentrar en el componente padre (`App.tsx`).
- **Problema solucionado:** Video incorrecto siendo cargado en la versión 2. Se actualizó la ruta `src` desde `/cody_recording.mp4` hacia `/cody.mp4` reconociendo que los assets ya estaban cargados previamente en `public/`.
- **Estandarización:** Inicializamos el set `.mbos` para que este repositorio respete las normas de Neural Scan.

## [2026-04-07]
- **Aprendizaje:** Al manejar grandes volúmenes de datos en commits de GitHub (ej. 4 archivos grandes con lógica compleja), el LLM puede exceder el límite de tokens de salida. Solución: Dividir el push en batches lógicos para mantener la integridad de la sesión.
- **Performance:** El sistema de pre-carga de frames en `V1Landing` utiliza `requestIdleCallback` para no bloquear el hilo principal mientras se cargan los activos pesados, mejorando drásticamente el FCP (First Contentful Paint) y eliminando el flicker inicial.
- **SEO:** Se estandarizaron los metatags en `index.html` para mejorar el ranking de "Highland Bridge Co." y "Custom Steel Bridges". Se añadieron preloads para reducir el CLS (Cumulative Layout Shift) en móviles.
