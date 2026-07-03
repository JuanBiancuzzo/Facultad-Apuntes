---
dia: 2026-07-01
etapa: empezado
referencias:
  - "1162"
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
Este patrón está relacionado a las [[ingeniería electrónica/embebidos/Diseño, desarrollo y depuración/Máquina de estado|máquina de estados finitos]], el problema a resolver es como crear un objeto que tiene diferentes estados únicos los cuales definen una funcionalidad, y el objeto puede ir cambiando dependiendo de lo que ocurre

El patrón lo resuelve utilizando una [[ingeniería en informática/taller/Sintaxis/Interfaz|interfaz]] que representa todo lo que puede hacer un estado, e implementaciones concretas del mismo. Las mismas van cambiando el estado del objeto

![[ingeniería en informática/algo 3/Patrones/img/Patrón state.png|500]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```