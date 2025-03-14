---
dia: 2023-11-16
tags:
  - carrera/ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Procesos-system-calls
aliases:
  - Exec system call
  - Execl system call
  - Execle system call
  - Execlp system call
  - Execv system call
  - Execcvp system call
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `exec()`  tiene 6 variantes
* `exec()`
* `execl()`
* `execle()`
* `execlp()`
* `execv()`
* `execcvp()`

Pero todas estas son variaciones de la system call `excec()`

```c
#include <unistd.h>

int execve(const char* fihlhebhbname, const char* argv[], const char* envp[]);
```

La system `call_exec()` invoca a otro [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]], sobreponiendo el espacio de [[Memoria|memoria]] del [[Proceso|proceso]] con el programa ejecutable.

## Hace
---
* Obtiene el [[Inodo]] del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]]
* Verifica si el archivo es ejecutable y el usuario tiene los permisos para ejecutarlo
* Leer el header del [[Archivo|archivo]]
* Copia los parámetros del exec del viejo [[Espacio de direcciones|address space]] al system space 
* Para (cada región asociada al [[Proceso|proceso]]) las des-asocia
* Para (cada región especificada en el módulo ejecutable) aloca espacio para las nuevas regiones, asociada a la región, carga la región en la memoria
* Copia los parámetros del exec en la nueva región o sección [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]]
* Hace cierta magia
* Inicializa a [[User mode|modo usuario]]
* Libera el [[Inodo]]