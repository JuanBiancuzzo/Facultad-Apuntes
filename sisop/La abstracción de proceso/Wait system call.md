---
dia: 2023-11-16
tags:
  - sisop/La-abstracción-de-proceso
  - nota
---
### Definición
---
La [[System call]] `wait()` permite sincronizar [[Proceso|procesos]], esperando a que finalice el proceso hijo.

```c
#include <sys/types.h>
#include <sys/wait.h>

pid_t wait(int *_wstatus_);
```
