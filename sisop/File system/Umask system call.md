---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota/facultad
  - lenguajes-de-programación/lenguaje-c
---
# Definición
---
La [[System call|system call]] `umask()` setea la máscara con el modo de permisos para la creación de [[Archivo|archivos]]. La máscara por defecto es la $022$

```c
#include <sys/types.h>
#include <sys/stat.h>

mode_t umask(mode_t mask);
```
 
 