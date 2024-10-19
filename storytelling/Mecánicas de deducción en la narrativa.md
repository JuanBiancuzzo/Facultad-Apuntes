---
dia: 2024-07-08
etapa: sin-empezar
referencias:
  - "77"
  - "78"
tags:
  - nota/investigacion
  - storytelling
orden: 34
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