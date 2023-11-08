---
dia: 2023-11-08
materia: sisop
capitulo: 6
---
### Definición
---
La [[System call]] `creat()` equivale a llamar a `open()` con los flags `_CREAT | O_WRONGLY | O_TRUNC`

```c
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int creat(const char *pathname, mode_t mode);
```