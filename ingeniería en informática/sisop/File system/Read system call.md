---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/File-system-system-calls
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system/System-call
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `read()` se utiliza para hacer intentos de lecturas hasta un número dado de bytes de un [[Archivo|archivo]]. La lectura comienza en la posición señalada por el [[File descriptor|file descriptor]], y tras ella se incrementa ésta en el número de bytes leídos

```c
#include <unistd.h>

ssize_t read(int fd, void *buf, size_t count);
```

Devuelve el número de bytes leídos si salió bien, $0$ si encuentra el End Of File (EOF) y $-1$ si hubo un error
