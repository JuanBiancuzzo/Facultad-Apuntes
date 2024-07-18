---
abreviacion: de la Ley de Navegación
grupos:
  - Título
  - Capítulo
  - Sección
artConNombre: true
tags:
  - legal/documento
aliases:
  - Ley 20.094
---
```dataviewjs
	await dv.view("_scripts/dataview/legal/mostrarSubSecciones", { paginaActual: dv.current() });
```
### Artículos
---
```dataviewjs
	await dv.view("_scripts/dataview/legal/mostrarArticulos", { paginaActual: dv.current() });
```