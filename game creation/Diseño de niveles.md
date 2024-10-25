---
dia: 2024-07-08
etapa: sin-empezar
referencias:
  - "47"
  - "114"
  - "180"
  - "181"
  - "301"
tags:
  - nota/investigacion
  - game-creation
orden: 135
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