---
dia: 2026-08-20
etapa: empezado
referencias: []
aliases:
  - Robot de cadena en serie
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
Este tipo de [[investigación/robótica/Robot|robot]] corresponden a un conjunto de [[colección/componentes/actuadores/Actuadores|actuadores]] en serie, donde el punto final del mismo es la suma de todos los acuadores 

![[ingeniería electrónica/robótica industrial/Introducción/img/Robot en cadena abierta.png|500]]

Tiene la ventaja de tener una mayor flexibilidad, con un sistema más simple mecánicamente, pero con una menor fuerza o un mayor peso para compensar por la fuerza