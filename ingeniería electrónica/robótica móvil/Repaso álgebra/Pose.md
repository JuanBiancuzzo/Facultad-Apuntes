---
dia: 2026-08-20
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/robótica-móvil/Repaso-álgebra
  - nota/facultad
vinculoFacultad:
  - tema: Repaso álgebra
    capitulo: 1
    materia: Robótica móvil
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La pose (posición y orientación) de un [[investigación/robótica/Robot|robot]] es la [[ingeniería en informática/algebra 2/Transformaciones lineales/Transformación lineal|transformación]] [[Rototranslación|rototranslacional]] dada por la posición y orientación del robot en el espación 

Esta pose es una transformación que toma elementos en coordenadas del robot y los devuelve en coordenadas del mundo

## Ejemplo
---
Dado el [[ingeniería electrónica/robótica móvil/Repaso álgebra/Vector|vector]] posición $W_p$ y la [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|matriz de orientación]] $W_{O_B}$ del robot $B$ en el munto $W$, notamos la pose como $W_{\xi_B}$ $$ W_{\xi_B} = \begin{bmatrix}
	W_{O_B} & W_P \\
	0 & 1 \\
\end{bmatrix} $$