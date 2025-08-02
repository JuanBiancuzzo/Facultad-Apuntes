---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/File-system-system-calls
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system/System-call
  - nota/facultad
  - nota/investigacion
aliases:
  - Dup2 system call
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `dup()` crea una copia del [[File descriptor|file descriptor]] del [[Archivo|archivo]] cuyo nombre es `oldfld`

```c
#include <unistd.h>

int dup(int oldfd);
int dup2(int oldfd, int newfd);
```

Después de que retorna en forma exitosa, el viejo y nuevo file descriptor pueden ser usados de forma intercambiable. Estos se refieren al mismo archivo abierto y por ende comparten el offset y los flags de estado

`dup2()` hace lo mismo pero en vez de usar la política de seleccionar el file descriptor más pequeño utiliza e `newfd` como nuevo file descriptor