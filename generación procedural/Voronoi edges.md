---
dia: 2024-07-19
etapa: sin-empezar
referencias:
  - "175"
  - "176"
tags:
  - nota/investigacion
  - generación-procedural
orden: 95
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---




# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```