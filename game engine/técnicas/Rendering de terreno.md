---
dia: 2024-07-09
etapa: sin-empezar
referencias:
  - "132"
tags:
  - nota/investigacion
  - game-engine/técnicas
orden: 210
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este usa un [[Árbol binario|árbol binario]]



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```