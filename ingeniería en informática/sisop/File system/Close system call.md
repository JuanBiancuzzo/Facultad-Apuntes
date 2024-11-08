---
dia: 2023-11-08
tags:
  - ingeniería-en-informática/sisop/File-system
  - nota/facultad
  - lenguajes-de-programación/lenguaje-c
---
# Definición
---
La [[System call|system call]] `close()` cierra un [[File descriptor|file descriptor]]. Si este ya está cerrado devuelve un error

```c
#include <unistd.h>

int close(int fd);
```

Devuelve $0$ si salió bien, y $-1$ si hubo un error