---
dia: 2023-11-16
materia: sisop
capitulo: 2
---
### Definición
---
La [[System call]] `exec()`  tiene 6 variantes
* `exec()`
* `execl()`
*  `execle()`
* `execlp()`
* `execv()`
* `execcvp()`

Pero todas estas son variaciones de la system call `excec()`

```c
#include <unistd.h>

int execve(const char* fihlhebhbname, const char* argv[], const char* envp[]);
```

La system `call_exec()` invoca a otro [[Programa|programa]], sobreponiendo el espacio de [[Memoria|memoria]] del [[Proceso|proceso]] con el programa ejecutable.

#### Hace
---
* Obtiene el [[Inodo]] del [[Programa|programa]]
* Verifica si el archivo es ejecutable y el usuario tiene los permisos para ejecutarlo
* Leer el header del [[Archivo|archivo]]
* Copia los parámetros del exec del viejo [[Espacio de direcciones|address space]] al system space 
* Para (cada región asociada al [[Proceso|proceso]]) las des-asocia
* Para (cada región especificada en el módulo ejecutable) aloca espacio para las nuevas regiones, asociada a la región, carga la región en la memoria
* Copia los parámetros del exec en la nueva región o sección [[Stack|stack]]
* Hace cierta magia
* Inicializa a [[User mode|modo usuario]]
* Libera el [[Inodo]]