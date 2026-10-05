---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Intercomunicación-entre-procesos-system-call
  - carrera/ingeniería-en-informática/concurrentes/Channels-y-Actors
  - nota/facultad
  - nota/investigacion
aliases:
  - Message queue (System V)
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
  - tema: Channels y Actors
    capitulo: 6
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este tipo de [[Comunicación entre procesos|IPC]] permite a los [[Proceso|procesos]] escribir y recibir bloques de bytes, usando la variable `mtype`

El campo `mtype`
* Identifica el tipo de mensaje
* El sender debe enviar un mensaje con `mtype` $> 0$
* El receptor con `mtype` $= 0$

Los mensajes enviados se guardan en una [[Queue|queue]] que puede ser con [[cursos/introduction to algorithms/Sorting and Trees/Priority Queue|queue con prioridad]]
