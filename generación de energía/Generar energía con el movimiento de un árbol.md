---
dia: 2024-09-03
etapa: sin-empezar
referencias: 
 - "214"
tags: 
 - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---




### Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```