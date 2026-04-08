# Proyecto: Highland Bridge Co. Landing Pages
Última sesión de edición: [2026-04-07]

## 📌 Estado Actual
- **Optimización SEO:** Se han configurado todos los metatags críticos, títulos descriptivos y preloads de performance en `index.html`. El sistema está listo para indexación.
- **V1 (Hero Canvas):** Implementado un sistema de carga por lotes (`batch loading`) con `requestIdleCallback`. Los frames se cargan en segundo plano sin bloquear el hilo principal, asegurando una experiencia fluida desde el primer segundo.
- **V2 & V3 (Unificación):** Se ha estandarizado el uso de activos de video y consistencia visual entre las versiones de diseño, eliminando redundancias.
- **Repositorio:** Todos los cambios están sincronizados en el branch `main` de `lunacodeabit/highland-bridge-co`.

## 📝 Tareas Pendientes
- **Aprobación de Contenido:** Validar con el cliente si los textos de SEO requieren ajustes específicos de palabras clave de nicho.
- **Monitoreo de Core Web Vitals:** Una vez en staging/producción, verificar que el LCP y el CLS se mantengan en verde tras la implementación del preloading.
- **Elección de Versión Final:** El cliente debe decidir entre V1 (Interactive Canvas), V2 (Video Hero Industrial), o V3 (Modern Bold Red) para el lanzamiento final.
