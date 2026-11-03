---
dia: 2026-11-03
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/robótica-industrial/Dinámica
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Dinámica
    capitulo: 5
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es el estudio de la relación entre el movimiento resultante y las [[Fuerza|fuerzas]] o [[Torque|torques]] aplicados. Esta se puede dividir entre
* Dinámica directa, donde a partir de posición, velocidades, fuerzas y torques aplicados, se obtiene la aceleraciones del mismo $$ \ddot{x} = f\left(x,~ \dot{x},~ F,~ \tau \right) $$ con estas se pueden predecir al evolución por medio de simuladores de integración
  
* Dinámica inversa, donde partiendo de la posición, velocidad y aceleración se obtiene las fuerzas y torques que se deben aplicar $$ (F,~ \tau) = f^{-1}\left( x,~ \dot{x},~ \ddot{x} \right) $$ que permite la implementación de técnicas de [[ingeniería electrónica/control/Respuesta dinámica/Controlador automático|control]]

## En Robótica Industrial 
---
Se puede dividir en 

