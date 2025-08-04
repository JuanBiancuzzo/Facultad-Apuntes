---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/File-system-system-calls
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system/System-call
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/sisop/File system/Resumen.md]]"
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `close()` cierra un [[File descriptor|file descriptor]]. Si este ya está cerrado devuelve un error

```c
#include <unistd.h>

int close(int fd);
```

Devuelve $0$ si salió bien, y $-1$ si hubo un error