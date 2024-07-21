---
dia: 2023-11-08
capitulo: 6
tags:
  - sisop/File-system
---
### Definición
---
La [[System call]] `link()` crea un nuevo nombre para un [[Archivo]]. Esto también se conoce como un [[File system#Hard link|link (hard link)]]

```c
#include <unistd.h>

int link(const char *oldpath, const char *newpath);
```
