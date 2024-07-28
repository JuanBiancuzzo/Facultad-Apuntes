---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota
---
### Definición
---
La [[System call]] `mkdir()`
```c
#include <sys/stat.h>
#include <sys/types.h>

int mkdir(const char *pathname, mode_t mode);
```