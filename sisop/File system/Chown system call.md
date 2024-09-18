---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota/facultad
aliases:
  - Fchwn system call
---
# Definición
---
La [[System call|system call]] `chown()` cambia el id del propietario del [[Archivo|archivo]] y el grupo de un archivo

```c
#include <unistd.h>

int chown(const char *pathname, uid_t owner, gid_t group);
int fchown(int fd, uid_t owner, gid_t group);
```
