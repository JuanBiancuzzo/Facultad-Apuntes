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
Dado dos puntos, se los limita a las posiciones donde ambos están a una cierta distancia. En general, a uno de los puntos se lo deja fijo en una posición y al otro se lo mueve para satisfacer la limitación

Ahí aparece la consideración de que punto tomar, ya que técnicamente hay multiples puntos determinados por una distancia



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```