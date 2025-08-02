---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/File-system-system-calls
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system/System-call
  - nota/facultad
  - nota/investigacion
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `umask()` setea la máscara con el modo de permisos para la creación de [[Archivo|archivos]]. La máscara por defecto es la $022$

```c
#include <sys/types.h>
#include <sys/stat.h>

mode_t umask(mode_t mask);
```
 
 