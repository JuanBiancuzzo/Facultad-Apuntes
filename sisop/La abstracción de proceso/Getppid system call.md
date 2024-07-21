---
dia: 2023-11-18
capitulo: 2
tags:
  - sisop/La-abstracción-de-proceso
---
### Definición
---
La [[System call]] `getppid()` permite obtener el `PID` ([[Proceso|process]] identification) del proceso padre.

```c
#include <sys/types.h>
#include <unistd.h>

pid_t getppid(void);
```