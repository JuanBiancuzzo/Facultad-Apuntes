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
La planificación de trayectorias es un término bastante generico dependiente del contexto que se use, y se entiende que se tiene un estado inicial en el cual se parte, un estado final que se quiere llegar y se busca establecer que secuencia de movimientos se necesita realizar para llegar del estado inicial al final

## En robótica industrial
---
El contexto es utilizando [[investigación/robótica/robótica industrial/Robótica industrial|robots industriales]], con una [[ingeniería electrónica/robótica móvil/Repaso álgebra/Pose|pose]] inicial y pose final, donde se tiene distintas maneras de llegar a la pose final, dadas por
* [[ingeniería electrónica/robótica industrial/Generación de trayectorias/Interpolación Joint|Interpolación Joint]] donde se busca tener un movimiento de velocidad constante de las [[ingeniería electrónica/robótica industrial/Cinemática y estática/Articulación|articulaciones]]
* [[ingeniería electrónica/robótica industrial/Generación de trayectorias/Interpolación Cartesiana|Interpolación Cartesiana]] donde se busca que la translación en un [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|sistema cartesiano]] su velocidad sea constante
