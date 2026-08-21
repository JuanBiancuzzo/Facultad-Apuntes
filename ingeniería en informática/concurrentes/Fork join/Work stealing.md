---
dia: 2026-08-21
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-en-informática/concurrentes/Fork-join
  - nota/facultad
vinculoFacultad:
  - tema: Fork join
    capitulo: 3
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este [[investigación/ciencias de la computación/algoritmos/Algoritmo|algoritmo]] permite hacer scheduling de tareas entre [[ingeniería en informática/sisop/Concurrencia/Thread|threads]], donde workers threads inactivos roban trabajo a threads ocupados, para realizar balanceo de carga

Cada thread tiene su propia [[colección/data structures/Deque|cola de dos extremos (deque)]] donde almacena las tareas listas por ejecutar. El worker agrega y saca tareas del final de la fila, y si no tiene más tareas a realizar, puede sacar, de otro worker, del inicio de su cola

Tiene como ventaja que se minimiza la sincronización entre threads, ya que solo se comunican cuando se necesita, pero el uso de deque agrega un nivel de overhead que aunque sea bajo sigue existiendo

