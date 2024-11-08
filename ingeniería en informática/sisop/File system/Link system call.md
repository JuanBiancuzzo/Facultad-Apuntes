---
dia: 2023-11-08
tags:
  - ingeniería-en-informática/sisop/File-system
  - nota/facultad
  - lenguajes-de-programación/lenguaje-c
---
# Definición
---
La [[System call|system call]] `link()` crea un nuevo nombre para un [[Archivo|archivo]]. Esto también se conoce como un [[File system#Hard link|link (hard link)]]

```c
#include <unistd.h>

int link(const char *oldpath, const char *newpath);
```
