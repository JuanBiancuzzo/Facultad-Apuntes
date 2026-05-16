---
dia: 2026-05-16
etapa: empezado
referencias: []
aliases:
  - Ley de Dalton
tags:
  - carrera/ingeniería-electrónica/quimica/Estados-de-la-materia
  - nota/facultad
vinculoFacultad:
  - tema: Estados de la materia
    capitulo: 7
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Una mezcla de [[ingeniería electrónica/quimica/Estados de la materia/Gas|gases]] que no reacciona entre sí, se comporta como un único gas puro

Por lo que se puede definir la presión parcial de cada gas en la mezcla como la [[Presión|presión]] que ejercería si estuviera solo en el recipiente, es decir, con la [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Ley de Gases Ideales|Ecuación de los gases ideales]] $$ P_j = \frac{n_j ~ R ~ T}{V} $$
Por lo tanto, la presión total de una mezcla de gases es la suma de las presiones parciales de sus componentes $$ \begin{align} 
	P &= \sum_j P_j \\
	 &= \sum_j n_j ~ \frac{R ~ T}{V} \\
	 &= n ~ \frac{R ~ T}{V}
\end{align} $$