---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota/facultad
  - lenguajes-de-programación/lenguaje-c
---
# Definición
---
La [[System call]] `lseek()` reposiciona el desplazamiento (`offset`) de un [[Archivo]] abierto con el [[File descriptor|file descriptor]] `fd` de acuerdo con el parámetro `whence`:
* `SEEK_SET`: el desplazamiento
* `SEEK_CUR`: el desplazamiento es sumado a la posición actual del archivo
* `SEEK_END`: el desplazamiento se suma a partir del final del archivo

```c
#include <sys/types.h>
#include <unistd.h>

off_t lseek(int fd, off_t offset, int whence);
```