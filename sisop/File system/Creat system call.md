---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota/facultad
  - lenguajes-de-programación/lenguaje-c
---
# Definición
---
La [[System call|system call]] `creat()` equivale a llamar a `open()` con los flags `O_CREAT | O_WRONGLY | O_TRUNC`

```c
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int creat(const char *pathname, mode_t mode);
```