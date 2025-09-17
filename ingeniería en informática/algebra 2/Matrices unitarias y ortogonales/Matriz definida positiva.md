---
dia: 2025-03-21
etapa: ampliar
referencias: []
aliases:
  - Matriz semidefinida positiva
tags:
  - carrera/ingeniería-electrónica/algebra-2/Matrices-unitarias-y-ortogonales
  - carrera/ingeniería-en-informática/algebra-2/Matrices-unitarias-y-ortogonales
  - nota/facultad
vinculoFacultad:
  - tema: Matrices unitarias y ortogonales
    capitulo: 6
    materia: Álgebra 2 A
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $A \in \mathbb{R}^{n \times n}$, se define la [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matriz]] $A$ como matriz definida positiva si $$ \forall v \in \mathbb{R}^n : v^T A v > 0 $$ también se puede verificar que todos sus [[ingeniería en informática/algebra 2/Autovalores y autovectores/Autovalor|autovalores]] son estrictamente positivos

Por otro lado, se puede decir que la matriz $A$ esta semidefinida positiva si $$ \forall v \in \mathbb{R}^n : v^T A v \ge 0 $$ donde también se puede verificar que todos sus autovalores son positivos o cero

En ambos casos, se da la situación donde la ecuación dada por una matriz definida/semidefinida positiva es una [[ingeniería en informática/analisis 2/Topología/Conjunto convexo|ecuación convexa]]