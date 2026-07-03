---
dia: 2026-07-01
etapa: empezado
referencias:
  - "1164"
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
Este patrón se utiliza cuando se tiene el siguiente problema, cuando se tiene un [[ingeniería en informática/discreta/Grafos/Árbol|árbol]] o jerarquía de objetos y lista de objetos, pero se quiere actuar sobre todos para realizar una acción

El patrón resuelve este problema creando una [[ingeniería en informática/taller/Sintaxis/Interfaz|interfaz]] para realizar esta acción, y mientas las hojas del árbol tienen un resultado fijo de esta acción, los nodos intermedios la realizar consultando su hijos que cumplen la interfaz

![[ingeniería en informática/algo 3/Patrones/img/Patrón composite.png|500]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```