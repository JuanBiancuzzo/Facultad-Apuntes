---
dia: 2026-08-20
etapa: empezado
referencias: []
aliases:
  - Robot de cadena en paralelo
tags:
  - carrera/ingeniería-electrónica/robótica-industrial/Introducción
  - nota/facultad
vinculoFacultad:
  - tema: Introducción
    capitulo: 1
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este tipo de [[investigación/robótica/Robot|robot]] corresponden a un conjunto de [[colección/componentes/actuadores/Actuadores|actuadores]] que actuan de manera conjunta para mover el punto final del robot

![[ingeniería electrónica/robótica industrial/Introducción/img/Robot de cadena cerrada.png|500]]

Tiene la ventaja de tener mayor fuerza, o reducción de tamaño, al utilizar multples actuadores para mover el cabezal. Esto viene con la desventaja de una mayor complejidad mecánica y menor flexibilidad