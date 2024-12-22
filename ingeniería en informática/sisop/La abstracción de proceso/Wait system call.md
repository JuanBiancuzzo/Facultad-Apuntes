---
dia: 2023-11-16
tags:
  - ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Procesos-system-calls
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `wait()` permite sincronizar [[Proceso|procesos]], esperando a que finalice el proceso hijo.

```c
#include <sys/types.h>
#include <sys/wait.h>

pid_t wait(int *_wstatus_);
```
