---
dia: 2023-11-16
tags:
  - carrera/ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Procesos-system-calls
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/sisop/La abstracción de proceso/Resumen.md]]"
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `wait()` permite sincronizar [[Proceso|procesos]], esperando a que finalice el proceso hijo.

```c
#include <sys/types.h>
#include <sys/wait.h>

pid_t wait(int *_wstatus_);
```
