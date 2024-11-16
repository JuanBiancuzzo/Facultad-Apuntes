---
dia: 2024-11-16
etapa: sin-empezar
orden: 454
referencias: 
 - "542"
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