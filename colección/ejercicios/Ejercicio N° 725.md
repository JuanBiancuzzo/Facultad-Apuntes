---
dia: 2026-10-09
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 725
etapa: empezado
---
# Enunciado
---
Considere un [[Robot industrial redundante|manipulador redundante]] cuya velocidad articular se obtiene mediante $$ \dot{q} = J^+ \begin{bmatrix} v & w \end{bmatrix} + \left( \mathbb{I} - J^+ J \right) \nu $$ donde $$ \nu = -\nabla F(q) $$
Para cada una de las siguientes [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Función de costo|funciones de costo]] $F(q)$, describa qué comportamiento tenderá a adoptar el [[investigación/robótica/robótica industrial/Robótica industrial|robot]] durante el movimiento 
1. $$ F(q) = \sum_i \left( \frac{q_i - \frac{q_{i,~\text{max}} - q_{i,~\text{min}}}{2}}{q_{i,~\text{max}} - q_{i,~\text{min}}} \right)^2 $$ ^parte-1
2. $$ F(q) = -\text{det}\left( J J^T  \right) $$ ^parte-2

Justifique brevemente por qué estas tareas secundarias pueden ejecutarse simultáneamente con la tarea cartesiana principal

# Resolución
---
[[colección/ejercicios/Ejercicio N° 725#^parte-1|1.]] 

[[colección/ejercicios/Ejercicio N° 725#^parte-2|2.]] 
