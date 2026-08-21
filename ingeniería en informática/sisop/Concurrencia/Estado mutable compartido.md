---
dia: 2026-08-21
etapa: empezado
referencias: []
aliases:
  - Estado compartido
  - Modelo de concurrencia por estado mutable compartido
tags:
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
vinculoFacultad:
  - tema: Concurrencia
    capitulo: 5
    materia: Sistemas operativos
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este [[ingeniería en informática/sisop/Concurrencia/Concurrencia#Modelos|modelo de concurrencia]] es el más simple, en el cual se serializa el acceso al estado compartido entre distintos [[ingeniería en informática/sisop/Concurrencia/Thread|threads]] 

Los [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|procesos]] se ejecutan al mismo tiempo, pero habrá ciertos conjuntos de procedimientos tales que solo uno suceda a la vez. Si multiples procesos compiten por utilizarlo, el primero podrá ejecutarlo y el resto esperará su turno para ejecutarse cuando nadie más lo esté ejecutando

