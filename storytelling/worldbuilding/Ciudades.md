---
dia: 2024-07-09
etapa: sin-empezar
referencias:
  - "125"
  - "126"
  - "146"
  - "152"
  - "159"
aliases:
  - Town
  - Pueblo
tags:
  - nota/investigacion
  - storytelling/worldbuilding
orden: 300
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