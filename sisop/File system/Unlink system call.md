---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota/facultad
---
# Definición
---
La [[System call|system call]] `unlink()` elimina un nombre de un [[Archivo|archivo]] del [[File system|sistema de archivos]]. Si además ese nombre era el último nombre o link del archivo y no hay nadie que tenga el archivo abierto, lo borra completamente del sistema de archivos.

```c
#include <unistd.h>

int unlink(const char *pathname);
```