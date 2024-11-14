---
dia: 2024-11-14
etapa: sin-empezar
orden: 433
referencias: 
 - "527"
tags: 
 - generación-de-energía
 - nota/investigacion
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