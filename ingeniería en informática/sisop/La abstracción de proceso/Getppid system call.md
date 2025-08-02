---
dia: 2023-11-18
tags:
  - carrera/ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Procesos-system-calls
  - nota/facultad
  - nota/investigacion
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `getppid()` permite obtener el `PID` ([[Proceso|process]] identification) del proceso padre.

```c
#include <sys/types.h>
#include <unistd.h>

pid_t getppid(void);
```