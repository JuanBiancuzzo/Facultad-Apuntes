---
dia: 2024-11-15
etapa: sin-empezar
orden: 435
referencias:
  - "528"
tags:
  - nota/investigacion
  - investigación/mecánica
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