---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - nota/facultad
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call]] `opendir()` abre y devuelve un stream que corresponde al [[Directorio]] que se está leyendo en `dirname`. El stream es de tipo `Dir *`.

```c
#include <sys/types.h>
#include <dirent.h>

DIR *opendir(const char *dirname);
```
 