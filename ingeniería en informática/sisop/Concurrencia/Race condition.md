---
dia: 2023-03-29
tags:
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
vinculoFacultad:
  - tema: Concurrencia
    capitulo: 5
    materia: Sistemas operativos
    carrera: Ingeniería en informática
etapa: empezado
referencias: []
aliases:
  - Condición de carrera
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Una race condition se da cuando el resultado de un [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] depende en como se intercalaron las operaciones de los [[Thread|threads]] que se ejecutan dentro de ese [[Proceso]]. Se dice que los threads juegan una carrera entre sus operaciones, y el resultado del programa dependen de quién gane esa carrera.