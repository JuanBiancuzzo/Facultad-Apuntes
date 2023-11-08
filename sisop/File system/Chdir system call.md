---
dia: 2023-11-08
materia: sisop
capitulo: 6
---
### Definición
---
La [[System call]] `chdir()`
```c
#include <unistd.h>

int chdir(const char *path);
int fchdir(int fd);
```