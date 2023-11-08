---
dia: 2023-11-08
materia: sisop
capitulo: 6
---
### Definición
---
La [[System call]] `dup()` crea una copia del [[File descriptor|file descriptor]] del [[Archivo]] cuyo nombre es `oldfld`

```c
#include <unistd.h>

int dup(int oldfd);
int dup2(int oldfd, int newfd);
```

Después de que retorna en forma exitosa, el viejo y nuevo file descriptor pueden ser usados de forma intercambiable. Estos se refieren al mismo archivo abierto y por ende comparten el offset y los flags de estado.

`dup2()` hace lo mismo pero en vez de usar la política de seleccionar el file descriptor más pequeño utiliza e `newfd` como nuevo file descriptor.
