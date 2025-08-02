---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - nota/facultad
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call]] `closedir()` cierra el stream de tipo `DIR *` cuyo nombre es `dirstream`

```c
#include <sys/types.h>
#include <dirent.h>

int closedir(DIR *dirstream);
```
 