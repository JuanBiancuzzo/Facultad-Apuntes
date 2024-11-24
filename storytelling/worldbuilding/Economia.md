---
dia: 2024-07-09
etapa: sin-empezar
referencias:
  - "123"
tags:
  - nota/investigacion
  - investigación/storytelling/worldbuilding
orden: 33
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