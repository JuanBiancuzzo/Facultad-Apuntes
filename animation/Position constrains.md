---
dia: 2024-10-08
etapa: sin-empezar
referencias:
  - "154"
tags:
  - animation
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Dado dos puntos, se limita los ángulos en los que se puede estar. En muy pocas ocasiones se tiene un único punto para satisfacer la limitación, por lo que aparece un calculo especifico a la situación para determinar que punto tomar 



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```