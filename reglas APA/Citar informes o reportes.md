---
dia: 2024-07-08
etapa: sin-empezar
referencias:
  - "3"
aliases:
  - Citar reportes
  - Citar informes
tags:
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---




### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```