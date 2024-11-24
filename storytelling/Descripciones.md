---
dia: 2024-07-08
etapa: sin-empezar
referencias:
  - "72"
tags:
  - nota/investigacion
  - investigación/storytelling
orden: 90
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