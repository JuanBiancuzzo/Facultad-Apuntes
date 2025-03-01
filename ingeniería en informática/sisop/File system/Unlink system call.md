---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/File-system-system-calls
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system/System-call
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `unlink()` elimina un nombre de un [[Archivo|archivo]] del [[File system|sistema de archivos]]. Si además ese nombre era el último nombre o link del archivo y no hay nadie que tenga el archivo abierto, lo borra completamente del sistema de archivos.

```c
#include <unistd.h>

int unlink(const char *pathname);
```