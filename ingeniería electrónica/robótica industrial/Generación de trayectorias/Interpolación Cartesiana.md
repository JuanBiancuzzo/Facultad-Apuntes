---
dia: 2026-10-13
etapa: empezado
referencias: []
aliases: []
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/robótica-industrial/Generación-de-trayectorias
ejercicios: []
vinculoFacultad:
  - tema: Generación de trayectorias
    capitulo: 5
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La interpolación Cartesiana busca, a diferencia de otros tipos de [[ingeniería electrónica/señales/Muestreo e Interpolación/Interpolador|interpoladores]], representar el movimiento de las [[ingeniería electrónica/robótica industrial/Cinemática y estática/Articulación|articulaciones]] de un [[investigación/robótica/robótica industrial/Robótica industrial|robot]] generando una trayectoria en el [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|sistema cartesiano]] lineal, recordando que se busca tener una [[Velocidad|velocidad]] constante el mayor tiempo posible, y que el movimiento tiene que ser realizable, es decir que la [[Aceleración|aceleración]] sea [[ingeniería electrónica/analisis 3/Derivabilidad y holomorfía/Derivable|derivable]] en todo punto

Utilizando el mismo planteo utilizado para la [[ingeniería electrónica/robótica industrial/Generación de trayectorias/Interpolación Joint|interpolación Joint]], se puede realizar una interpolación por medio de $2$ zonas, una a velocidad constante y otra donde se puede acelerar, para esto representamos la [[ingeniería electrónica/robótica móvil/Repaso álgebra/Pose|pose]] como un [[ingeniería electrónica/robótica móvil/Repaso álgebra/Vector|vector]] $$ \Theta(t) = \begin{bmatrix} 
	\bar{x} \\ \theta ~ \hat{k}
\end{bmatrix} $$ donde usamos como [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|orientación]] el eje de rotación $\hat{k}$ dado por un [[ingeniería electrónica/robótica móvil/Repaso álgebra/Vector|versor]] y el ángulo $\theta$