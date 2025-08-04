---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/File-system-system-calls
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system/System-call
  - nota/facultad
  - nota/investigacion
aliases:
  - Fchdir system call
vinculoFacultad:
  - "[[ingeniería en informática/sisop/File system/Resumen.md]]"
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `chdir()`

```c
#include <unistd.h>

int chdir(const char *path);
int fchdir(int fd);
```