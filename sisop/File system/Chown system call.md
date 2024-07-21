---
dia: 2023-11-08
capitulo: 6
tags:
  - sisop/File-system
  - nota
---
### Definición
---
La [[System call]] `chown()` cambia el id del propietario del [[Archivo]] y el grupo de un archivo

```c
#include <unistd.h>

int chown(const char *pathname, uid_t owner, gid_t group);
int fchown(int fd, uid_t owner, gid_t group);
```
