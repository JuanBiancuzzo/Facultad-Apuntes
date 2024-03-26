---
dia: 2023-11-08
materia: sisop
capitulo: 6
---
### Definición
---
La [[System call]] `close()` cierra un [[File descriptor|file descriptor]]. Si este ya está cerrado devuelve un error.

```c
#include <unistd.h>

int close(int fd);
```

Devuelve $0$ si salió bien, y $-1$ si hubo un error.