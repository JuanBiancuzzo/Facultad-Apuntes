---
dia: 2024-07-08
etapa: sin-empezar
referencias:
  - "86"
  - "87"
  - "88"
  - "89"
tags:
  - nota/investigacion
  - investigación/storytelling
orden: 305
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