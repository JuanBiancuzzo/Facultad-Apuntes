---
dia: 2023-11-08
capitulo: 6
tags:
  - sisop/File-system
  - nota
---
### Definición
---
La [[System call]] `close()` cierra un [[File descriptor|file descriptor]]. Si este ya está cerrado devuelve un error.

```c
#include <unistd.h>

int close(int fd);
```

Devuelve $0$ si salió bien, y $-1$ si hubo un error.