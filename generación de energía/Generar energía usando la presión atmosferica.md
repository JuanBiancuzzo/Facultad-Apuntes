---
dia: 2024-09-03
etapa: sin-empezar
referencias:
  - "218"
tags:
  - nota/investigacion
  - investigación/generación-de-energía
orden: 215
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