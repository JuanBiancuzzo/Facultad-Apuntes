---
dia: 2024-11-11
etapa: sin-empezar
orden: 414
referencias:
  - "499"
tags:
  - testing
  - nota/investigacion
aliases:
  - DST
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