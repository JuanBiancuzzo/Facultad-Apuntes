---
dia: 2024-08-18
etapa: sin-empezar
referencias:
  - "197"
tags:
  - nota/investigacion
orden: 106
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