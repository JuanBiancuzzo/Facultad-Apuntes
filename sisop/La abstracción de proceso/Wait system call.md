---
dia: 2023-11-16
materia: sisop
capitulo: 2
---
### Definición
---
La [[System call]] `wait()` permite sincronizar [[Proceso|procesos]], esperando a que finalice el proceso hijo.

```c
#include <sys/types.h>
#include <sys/wait.h>

pid_t wait(int *_wstatus_);
```
