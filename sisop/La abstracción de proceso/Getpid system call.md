---
dia: 2023-11-18
tags:
  - sisop/La-abstracción-de-proceso
  - nota/facultad
aliases:
  - PID
---
### Definición
---
La [[System call|system call]] `getpid()` permite determinar el `PID` ([[Proceso|process]] identification). Originalmente en [[Unix|UNIX]] el `PID` era un número positivo hasta $32.768$, una vez alcanzado ese número se resetea a $300$ y se vuelve a asignar esos valores nuevamente. Esto pasaba en [[Linux|Linux]], hasta la versión 2.6 del [[Kernel|kernel]], en la cual dependiendo de la plataforma ese valor es ajustable

```c
#include <sys/types.h>
#include <unistd.h>

pid_t getpid(void);
```