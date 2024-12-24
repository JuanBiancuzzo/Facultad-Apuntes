---
dia: 2023-11-09
tags:
  - ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
  - ingeniería-en-informática/taller/Concurrencia
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - ingeniería-electrónica/taller/Concurrencia
  - ingeniería-en-informática/concurrentes/Introducción
aliases:
  - Multithreading
  - Multihilos
  - POSIX Threads#Representación en C
---
# Definición
---
Los threads comparten los recursos del [[Proceso|proceso]], entre ellos, el [[Espacio de direcciones|espacio de memoria]]. Cada thread mantiene su propia información de estado como
* Thread id
* Un conjunto de los valores de los [[Registro|registros]] 
* [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]] propio
* Un propio `errno`
* Prioridad de [[Thread scheduler|scheduling]]
* Status

Es una secuencia de [[Operación atómica|ejecución atómica]] que representa una tarea planificable de ejecución. Donde
 * Secuencia de ejecución atómica
	 * Cada thread ejecuta una secuencia de instrucciones como lo hace un bloque de código en el [[Modelo]] de programación secuencial
 * Tarea planificable de ejecución
	 * El [[Sistema operativo]] tiene injerencia sobre el mismo en cualquier momento y puede ejecutarlo, suspenderlo y continuarlo cuando él desee

En la actualidad hay dos formas de que los threads se relacionen entre sí:
1. Multi-threading cooperativo
	* No hay [[Interrupción]] a menos que se solicite
2. Multi-threading Preemptivo
	* Es el más usado en la actualidad. Consiste en que un thread en estado de [[Estados de un thread#Running|running]] puede ser movido en cualquier momento.

## Thread vs. proceso
---
Tenemos varios casos de comparación
1. Un thread por proceso
	* Un proceso con una única secuencia de instrucciones ejecutándose de inicio a fin. Esto es equivalente a un bloque de instrucción delimitado por `{` y `}`. Lo que todos los programadores de [[Modelo secuencial|modelo secuencial]] conocemos
2. Muchos thread por proceso
	* Un [[Programa|programa]] es visto como thread ejecutándose dentro de un proceso con derechos restringidos. En dado un $t_i$ algunos threads pueden estar corriendo y otros estar suspendidos. 
	  Cuando se detecta por ejemplo una operación de I/O por alguna [[Interrupción|interrupción]], el [[Kernel|Kernel]] desaloja ([[Preempt|preempt]]) a algunos de los threads que están corriendo, atiende la interrupción y al terminar de manejar la interrupción vuelve a correr el thread nuevamente.
3. Muchos proceso con un solo thread cada uno
	* Limitación de algunos [[Sistema operativo|sistemas operativos]] que permitían varios procesos, pero cada uno con un único thread, lo que implica que puede haber varios thread ejecutándose en [[Kernel mode|kernel mode]]
4. Muchos [[Kernel|kernel]] thread
	* Para aprovechar recursos, también el kernel puede ejecutar varios threads en kernel mode


## Ciclo de vida de un thread
---
Cada thread tiene dos estados
* El estado per thread
* El estado compartido entre varios thread

### El estado per-thread
---
[[Threads Control Block#Definición]]

### Shared state o Estado compartido
---
[[Thread Shared State#Definición]]


## Representación en C
---
Es una API de [[Thread|threads]], dada por la biblioteca pthread. Esta API es muy completa y la iremos viendo a medida que se la necesite.

## Creación de thread
---
```c
#include <pthread.h>

int pthread_create(pthread_t* thread, const pthread_att_t* att, void* (start_routine) (void*), void* arg);
```

Esta función tiene cuatro argumentos:
1. `thread`: Es un puntero a la estructura de tipo `pthread_t` que se utiliza para interactuar con los [[Thread|threads]]
2. `attr`: Se utiliza para especificar los ciertos atributos que el thread debería tener, por ejemplo, el tamaño del stack, o la prioridad del [[Thread scheduler|scheduling del thread]]. En la mayoría de los casos es `NULL`
3. `start_routine`: Sea tal vez el argumento más complejo, pero no es más que un puntero a una función, en este caso que devuelve `void`
4. `arg`: Es un puntero a void que debe apuntar a los argumentos de la función.

Devuelve $0$ si se ha creado el thread con éxito, si hubo error devuelve otro valor.

### Ejemplo
---
```c
#include <pthread.h>
typedef struct __myarg_t { 
	int a; 
	int b; 
} myarg_t; 

void *mythread(void *arg) { 
	myarg_t *m = (myarg_t *) arg; 
	printf("%d %d\n", m->a, m->b); 
	return NULL; 
} 

int main(int argc, char *argv[]) { 
	pthread_t p; 
	int rc; 
	
	myarg_t args; 
	args.a = 10; 
	args.b = 20; 
	rc = pthread_create(&p, NULL, mythread, &args); 
}
```

## Terminación de un thread
---
Muchas veces es necesario esperar a que un determinado thread finalice su ejecución, para ello se utiliza la función `pthread_join()` que toma dos argumentos

```c
#include <pthread.h>

int pthread_join(pthread_t thread, void** value_ptr);
```

1. `thread`: es el thread por el que hay que esperar y es de tipo `pthread_t`
2. `value_ptr`: es el puntero al valor esperado de retorno

### Ejemplo
---
```c
#include <stdio.h>
#include <pthread.h>
#include <assert.h>
#include <stdlib.h>

typedef struct __myarg_t { 
	int a; 
	int b; 
} myarg_t; 

typedef struct __myret_t { 
	int x; 
	int y; 
} myret_t; 

void *mythread(void *arg) { 
	myarg_t *m = (myarg_t *) arg; 
	printf("%d %d\n", m->a, m->b); 
	myret_t *r = Malloc(sizeof(myret_t)); 
	r->x = 1; 
	r->y = 2; 
	return (void *) r; 
} 

int main(int argc, char *argv[]) { 
	int rc; 
	pthread_t p; 
	myret_t *m; 
	myarg_t args; 
	
	args.a = 10; 
	args.b = 20; 
	Pthread_create(&p, NULL, mythread, &args); 
	Pthread_join(p, (void **) &m); 
	printf("returned %d %d\n", m->x, m->y); 
	free(m); 
	return 0; 
}
```

Algunas cosas:
* Si solo devuelve un valor no hay que hacer el empaquetado de los puntero
* Nunca devolver nada que se encuentre alocado dentro del thread
* `pthread_exit(status`
* `pthread_cancel(thread)`
* `pthread_detach(threadid)`

### Wait
---
```c
int pthread_cond_wait(pthread_con_t* cond, pthread_mutex_t* mutex);
```

 Esta llamada en forma [[Operación atómica|atómica]]
 1. Suelta el mutex haciendo unlock
 2. Suspende la ejecución del thread que lo llama poniéndolo en la [[Estados de un thread#Waiting|lista de espera]]
 3. Se vuelve a hacer lock del mutex antes de volver del wait

### Signal
---
```c
int pthread_cond_signal(pthread_cond_t* cond);
```

Toma a un thread de la [[Estados de un thread#Waiting|lista de espera]] y lo marca como potencialmente seleccionable por el [[Thread scheduler|planificador]] para correr, lo pone en la [[Estados de un thread#Ready|ready list]]

### Broadcast
---
```c
int pthread_cond_broadcast(pthread_cond_t* cond);
```

Este toma a todos los thread de la lista y los marca como seleccionables para correr.

## Representación en Rust
---
Para crear un [[Thread|thread]] es utilizando el [[Crate|create]] de la `std`, creando un [[JoinHandle|JoinHandle]] de la siguiente forma 
``` rust
let join_handle: thread::JoinHandle<T> = thread::spawn(|| {
	// codigo del thread hijo
});
```

Donde `T` es nuestro tipo de retorno. Es un [[Generic]].

