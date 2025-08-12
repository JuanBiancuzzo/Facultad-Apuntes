---
dia: 2025-03-21
etapa: ampliar
referencias: []
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
Sea $A \in \mathbb{R}^{n \times n}$, se define la [[Matriz|matriz]] $A$ como matriz semidefinida positiva si $$ \forall v \in \mathbb{R}^n : v^T A v \ge 0 $$
También se puede ver si todos los [[Autovalor|autovalores]] de $A$ son positivos

También es una ecuación convexa