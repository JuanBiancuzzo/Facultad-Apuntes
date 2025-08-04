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
  - File lock
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
```c
int flock(int fd, int operation);
```

Controla el acceso a un [[File descriptor|file descriptor]]

Existen dos tipos
* Shared lock
    * Real only lock
    * Múltiples read locks permitidos
* Exclusive lock
    * Read and write lock
    * Sólo un exclusive lock a la vez por [[Archivo|File]]

