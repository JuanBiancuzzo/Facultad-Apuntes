---
dia: 2023-11-18
tags:
  - sisop/La-abstracción-de-proceso
  - nota/facultad
---
### Definición
---
La [[System call|system call]] `getppid()` permite obtener el `PID` ([[Proceso|process]] identification) del proceso padre.

```c
#include <sys/types.h>
#include <unistd.h>

pid_t getppid(void);
```