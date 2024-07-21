---
dia: 2023-11-08
capitulo: 6
tags:
  - sisop/File-system
  - nota
---
### Definición
---
La [[System call]] `creat()` equivale a llamar a `open()` con los flags `O_CREAT | O_WRONGLY | O_TRUNC`

```c
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int creat(const char *pathname, mode_t mode);
```