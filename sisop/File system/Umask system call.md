---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota
---
### Definición
---
La [[System call]] `umask()` setea la máscara con el modo de permisos para la creación de [[Archivo|archivos]]. La máscara por defecto es la $022$

```c
#include <sys/types.h>
#include <sys/stat.h>

mode_t umask(mode_t mask);
```
 
 