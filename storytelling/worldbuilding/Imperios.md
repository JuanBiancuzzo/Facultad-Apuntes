---
dia: 2024-07-09
etapa: sin-empezar
referencias:
  - "110"
  - "111"
  - "112"
tags:
  - nota/investigacion
  - storytelling/worldbuilding
orden: 92
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---




# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```