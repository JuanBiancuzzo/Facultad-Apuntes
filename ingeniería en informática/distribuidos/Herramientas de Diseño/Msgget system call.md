---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Intercomunicación-entre-procesos-system-call
  - nota/facultad
  - nota/investigacion
aliases:
  - Message queue (System V)
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
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

Los mensajes que fueron recibidos son eliminados de la [[Queue|queue]]
