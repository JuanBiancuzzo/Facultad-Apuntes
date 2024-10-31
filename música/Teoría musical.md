---
dia: 2024-07-08
etapa: sin-empezar
referencias:
  - "58"
  - "59"
  - "60"
tags:
  - nota/investigacion
  - música
orden: 89
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