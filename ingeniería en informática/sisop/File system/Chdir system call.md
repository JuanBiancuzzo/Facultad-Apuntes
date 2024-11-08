---
dia: 2023-11-08
tags:
  - ingeniería-en-informática/sisop/File-system
  - nota/facultad
  - lenguajes-de-programación/lenguaje-c
aliases:
  - Fchdir system call
---
# Definición
---
La [[System call|system call]] `chdir()`

```c
#include <unistd.h>

int chdir(const char *path);
int fchdir(int fd);
```