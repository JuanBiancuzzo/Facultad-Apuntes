---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/File-system-system-calls
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system/System-call
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: File system
    capitulo: 6
    materia: Sistemas operativos
    carrera: Ingeniería en informática
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `link()` crea un nuevo nombre para un [[Archivo|archivo]]. Esto también se conoce como un [[File system#Hard link|link (hard link)]]

```c
#include <unistd.h>

int link(const char *oldpath, const char *newpath);
```
