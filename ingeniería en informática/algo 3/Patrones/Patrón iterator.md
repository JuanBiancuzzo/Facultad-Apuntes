---
dia: 2026-07-01
etapa: empezado
referencias:
  - "1166"
aliases: []
tags:
  - carrera/ingeniería-en-informática/algo-3/Patrones
  - carrera/ingeniería-en-informática/ingenieria-software-1/Diseño-de-software
  - nota/facultad
vinculoFacultad:
  - tema: Patrones
    capitulo: 1
    materia: Algoritmos y programación 3
    carrera: Ingeniería en informática
  - tema: Diseño de software
    capitulo: 8
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este patrón se utiliza cuando se tiene el siguiente problema, se quiere iterar sobre un conjunto de elementos, el cual puede ser una [[colección/data structures/Lista enlazada|lista]], [[ingeniería en informática/discreta/Grafos/Árbol|árbol]] u una estructura totalmente arbitraria

El patrón resuelve el problema abstrayendo la idea de la estructura por debajo, creando una [[ingeniería en informática/taller/Sintaxis/Interfaz|interfaz]] la cual utilizando [[ingeniería en informática/ingenieria de software 1/Diseño de software/SOLID#Dependency inversion|dependency inversion principal]], la estructura utiliza esta interfaz para fijar la forma en la cual iterar

![[ingeniería en informática/algo 3/Patrones/img/Patrón iterator.png|500]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```