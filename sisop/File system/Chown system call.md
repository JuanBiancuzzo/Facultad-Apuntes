---
dia: 2023-11-08
materia: sisop
capitulo: 6
---
### Definición
---
La [[System call]] `chown()` cambia el id del propietario del [[Archivo]] y el grupo de un archivo

```c
#include <unistd.h>

int chown(const char *pathname, uid_t owner, gid_t group);
int fchown(int fd, uid_t owner, gid_t group);
```
