---
dia: 2023-11-08
capitulo: 6
tags:
  - sisop/File-system
---
### Definición
---
La [[System call]] `mkdir()`
```c
#include <sys/stat.h>
#include <sys/types.h>

int mkdir(const char *pathname, mode_t mode);
```