---
dia: 2023-11-18
materia: sisop
capitulo: 2
---
### Definición
---
La [[System call]] `getppid()` permite obtener el `PID` ([[Proceso|process]] identification) del proceso padre.

```c
#include <sys/types.h>
#include <unistd.h>

pid_t getppid(void);
```