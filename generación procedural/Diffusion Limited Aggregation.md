---
dia: 2024-10-05
etapa: sin-empezar
referencias:
  - "318"
tags:
  - generación-procedural
  - nota/investigacion
aliases:
  - DLA
orden: 296
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---




# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```