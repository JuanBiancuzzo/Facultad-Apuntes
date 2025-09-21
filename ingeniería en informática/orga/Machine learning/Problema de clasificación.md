---
dia: 2023-08-12
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
etapa: empezado
referencias: []
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Son aquellos problemas que se logran resolver estableciendo una relación entre valores dados para llegar a un valor categórico, donde ese valor categórico no tiene una [[ingeniería en informática/discreta/Relaciones/Relación de orden|relación de orden]] clara

## Reducción a problema de optimización
---
En el caso de que la variable categórica tenga una relación de orden clara, como ejemplo los talles de una prenda de ropa, este problema se puede reducir a un [[Problema de optimización|problema de optimización]] donde se redefine la variable categórica como numérica interpretándose su valor como la categoría 