---
dia: 2024-12-24
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/concurrentes/Introducción
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - Camino crítico#^camino-critico
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sistema compuesto por varios [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programas]] que se ejecutan simultáneamente en [[Microprocesadores|procesadores]] distintos

## Crea aplicaciones
---
La utilización del paralelismo para crear aplicaciones tiene el objetivo de
* Reducir el tiempo de cómputo de una tarea
* Incrementar la cantidad de tareas que se pueden realizar en paralelo
* Reducir la [[Potencia|potencia]] consumida al realizar todas las tareas

Pensando en la [[Ley de Amdahl|ley de Amdahl]], nos tenemos que concentrar, para conseguir lo propuesto, en lo que llamaremos camino crítico. Este camino crítico es la máxima longitud de tareas secuenciales a computar, y por lo tanto define el mejor rendimiento que se puede obtener al realizar un conjunto de tareas ^camino-critico