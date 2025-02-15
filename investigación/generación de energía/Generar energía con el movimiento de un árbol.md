---
dia: 2024-09-03
etapa: sin-empezar
referencias:
  - "214"
tags:
  - nota/investigacion
  - investigación/generación-de-energía
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---




# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```