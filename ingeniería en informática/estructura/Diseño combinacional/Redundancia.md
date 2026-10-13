---
dia: 2023-04-23
tags:
  - carrera/ingeniería-electrónica/estructura/Diseño-combinacional
  - carrera/ingeniería-en-informática/estructura/Diseño-combinacional
  - nota/facultad
vinculoFacultad:
  - tema: Diseño combinacional
    capitulo: 4
    materia: Estructura del computador
    carrera: Ingeniería en informática
  - tema: Cinemática y estática
    capitulo: 3
    materia: Robótica industrial
    carrera: Ingeniería electrónica
etapa: empezado
ejercicios:
  - 725
referencias: []
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Redundancia se entiende como el concepto de llegar de varias maneras al mismo resultado, y esto se ve reflejado como se llega a este concepto por varios puntos de vista

## En diseño combinacional
---
Dado una [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] de [[Álgebra de Boole|boole]], se establece la redundancia como un valor no especificado por la función. Esto puede aparecer cuando esta función intenta representar una situación física, y una configuración no es físicamente posible por lo tanto no tiene un valor lógico

## En robótica
---
Se tiene tiene más ejes $n$ que [[investigación/animation/Grado de libertad|grados de libertad]], entonces se tiene rendundancia en la [[ingeniería electrónica/robótica industrial/Cinemática y estática/Cinemática|cinemática]] del [[investigación/robótica/robótica industrial/Robótica industrial|robot]] y esto permite tener la libertad de mejorar las velocidades de las [[ingeniería electrónica/robótica industrial/Cinemática y estática/Articulación|articulaciones]] buscando mejorarlas con un fin práctico

Entonces el [[ingeniería en informática/analisis 2/Funciones de varias variables/Jacobiana|Jacobiano]] $J$ deja de ser cuadrado, y si se desea hacer un movimiento en línea recta los incremento sse pueden calcular como $$ \dot{q} = J^\dagger ~ \dot{x} + \left( \mathbb{I} - J^\dagger J \right) \nu $$ donde $J^\dagger$ es la [[Matriz psudoinversa|pseudoinversa]], $J^\dagger ~ \dot{x}$ es la solución particular, y $\dot{x}$ define la trayectoria deseada

El vector $\nu$ está multiplicada con la solución homogénea, por lo tanto este vector puede ser cualquier valor de $\mathbb{R}^n$ dandonos la libertad de modificar las velocidades sin alterar la trayectoria, y podemos plantear una [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Función de costo|función de costo]] tal que $$ \nu = -\nabla F(q) $$
Como ejemplo se puede 
* Hacer que los ejes se mantengan lejos de los topes utilizando la función de costo $$ F(q) = \sum_i \left( \frac{q_i - \frac{q_{i,~\text{max}} - q_{i,~\text{min}}}{2}}{q_{i,~\text{max}} - q_{i,~\text{min}}} \right)^2 $$
* Hacer que los ejes se muevan a la menor velocidad posible $$ F(q) = 0 $$
* Hacer que el mecanismo se mantengan lejos de las [[ingeniería electrónica/analisis 3/Series de Laurent/Singularidad|singularidades]] $$ F(q) = -\text{det}\left( J J^T  \right) $$
