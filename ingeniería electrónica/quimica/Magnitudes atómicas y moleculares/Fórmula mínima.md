---
dia: 2026-03-15
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/quimica/Magnitudes-atómicas-y-moleculares
  - nota/facultad
vinculoFacultad:
  - tema: Magnitudes atómicas y moleculares
    capitulo: 4
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es la mínima relación entre los diferentes [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomos]] que forman un compuesto, representado por cantidades [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Números enteros|enteras]]

## Ejemplo
---
Un análisis del propeno gaseoso arrojó los siguientes resultados
* Elementos que lo componen: C, H
* Composición centesimal: $\text{C} = 85.71 \%$, $\text{H} = 14.29 \%$

Recordemos que tienen [[ingeniería electrónica/quimica/Modelo atómico/Unidad de masa atómica#^ar|masas atómicas relativas]] de $\text{C} = 12$ y $\text{H} = 1$. Con esto datos podemos calcular los [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro|moles]] de átomos de cada elemento que hay en $100 ~ \text{g}$ de compuesto $$ \begin{align}
	x_\text{C} &= \frac{85.71 ~ \text{g} \cdot 1 ~ \text{mol}}{12 ~ \text{g}} & x_\text{H} &= \frac{14.29 ~ \text{g} \cdot 1 ~ \text{mol}}{1 ~ \text{g}} \\
	&= 7.14 ~ \text{mol} & &= 14.29 ~ \text{mol}
\end{align} $$
Lo que nos dice una relación de los elementos en el propone es $$ \text{C}_{7.14} \text{H}_{14.29} $$ pero como no son número enteros, tomaremos el elemento con el menor valor, que en este caso es el carbono, y dividimos a los demás elementos por esa cantidad, obteniendo $$ \text{C} \text{H}_2 $$ y esta es la fórmula mínima del propeno