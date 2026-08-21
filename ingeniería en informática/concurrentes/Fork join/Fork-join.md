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
Este [[ingeniería en informática/sisop/Concurrencia/Concurrencia#Modelos|modelo de concurrencia]] es un estilo de paralelización donde el cómputo (task) es partido en sub-cómputs (subtasks), con el resultado la unión (join) de las subtareas

Partir el cómputo se realiza en general de forma [[ingeniería en informática/algo 1/Introducción a la programación/Recursividad|recursiva]], donde es necesario que el sub-cómputo sean independientes entre sí

![[ingeniería en informática/concurrentes/Fork join/img/Modelo Fork-Join.png|600]]

Tiene como ventajas
* Un modelo sin [[ingeniería en informática/sisop/Concurrencia/Race condition|condición de carrera]]
* Genera programas determinísticos, ya que los [[ingeniería en informática/sisop/Concurrencia/Thread|threads]] están aislados, el programa produce el mismo resultado independientemente de las diferencias de velocidad de threads
Tiene como desventaja
* Requiere que las unidades de trabajo sean aisladas, que no siempre es el caso
