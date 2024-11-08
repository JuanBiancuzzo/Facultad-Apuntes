---
dia: 2023-11-08
tags:
  - ingeniería-en-informática/sisop/File-system
  - nota/facultad
---
# Definición
---
La [[System call]] `opendir()` abre y devuelve un stream que corresponde al [[Directorio]] que se está leyendo en `dirname`. El stream es de tipo `Dir *`.

```c
#include <sys/types.h>
#include <dirent.h>

DIR *opendir(const char *dirname);
```
 