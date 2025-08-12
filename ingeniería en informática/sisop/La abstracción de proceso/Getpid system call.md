---
dia: 2023-11-18
tags:
  - carrera/ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Procesos-system-calls
  - nota/facultad
  - nota/investigacion
aliases:
  - PID
vinculoFacultad:
  - tema: La abstracción de proceso
    capitulo: 2
    materia: Sistemas operativos
    carrera: Ingeniería en informática
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `getpid()` permite determinar el `PID` ([[Proceso|process]] identification). Originalmente en [[Unix|UNIX]] el `PID` era un número positivo hasta $32.768$, una vez alcanzado ese número se resetea a $300$ y se vuelve a asignar esos valores nuevamente. Esto pasaba en [[Linux|Linux]], hasta la versión 2.6 del [[Kernel|kernel]], en la cual dependiendo de la plataforma ese valor es ajustable

```c
#include <sys/types.h>
#include <unistd.h>

pid_t getpid(void);
```