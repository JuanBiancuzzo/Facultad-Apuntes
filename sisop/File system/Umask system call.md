---
dia: 2023-11-08
capitulo: 6
tags:
  - sisop/File-system
---
### Definición
---
La [[System call]] `umask()` setea la máscara con el modo de permisos para la creación de [[Archivo|archivos]]. La máscara por defecto es la $022$

```c
#include <sys/types.h>
#include <sys/stat.h>

mode_t umask(mode_t mask);
```
 
 