---
dia: 2023-11-18
tags:
  - sisop/La-abstracción-de-proceso
  - nota/facultad
---
### Definición
---
La [[System call]] `fork()` es la única forma que un usuario cree un [[Proceso|proceso]] en el [[Sistema operativo|sistema operativo]] [[Unix|UNIX]]. El proceso que invoca a `fork()` es llamado proceso padre, el nuevo proceso creado es llamado hijo.

```c
#include <sys/types.h>
#include <unistd.h>

pid_t fork(void);
```

#### Que hace?
---
1. Crea y asigna una nueva entrada en la Process table para el nuevo [[Proceso|proceso]]
2. Asigna un número de [[Getpid system call|ID]] único al proceso hijo
3. Crea una copia lógica del contexto del proceso padre, algunas de esas partes pueden ser compartidas como la sección [[Contexto del nivel del usuario|text]]
4. Realiza ciertas operaciones de [[Puerto Input-Output|I/O]] 
5. Devuelve el número de ID del hijo al  proceso padre, y un $0$ al proceso hijo

#### Características
---
* Una llamada dos valores de retorno
	* El fork se llama una vez desde el [[Proceso|proceso]] padre, pero devuelve dos valores un valor al proceso padre y otro valor al proceso hijo
* Ejecución [[Concurrencia|concurrente]]
	* Ambos procesos se ejecutan en forma concurrente por lo cual no hay determinismo en el orden de ejecución
* [[Espacio de direcciones|Address space]] duplicados pero separados
	* Si se pudiera ver el address space, del padre y el hijo, inmediatamente después de ejecutarse el fork, se vería que son identicos.
* Archivos compartidos
	* Los user [[File descriptor|file descriptor]] table es heredada con todos sus archivos en el mismo estado