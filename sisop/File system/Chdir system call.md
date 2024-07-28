---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota
---
### Definición
---
La [[System call]] `chdir()`
```c
#include <unistd.h>

int chdir(const char *path);
int fchdir(int fd);
```