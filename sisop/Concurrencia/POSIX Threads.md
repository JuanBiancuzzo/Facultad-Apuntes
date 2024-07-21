---
dia: 2023-11-12
capitulo: 5
tags:
  - sisop/Concurrencia
  - nota
---
### Definición
---
Es una API de [[Thread|threads]], dada por la biblioteca pthread. Esta API es muy completa y la iremos viendo a medida que se la necesite.

#### Creación de [[Thread|thread]]
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

##### Ejemplo
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

#### Terminación de un [[Thread|thread]]
---
Muchas veces es necesario esperar a que un determinado thread finalice su ejecución, para ello se utiliza la función `pthread_join()` que toma dos argumentos

```c
#include <pthread.h>

int pthread_join(pthread_t thread, void** value_ptr);
```

1. `thread`: es el thread por el que hay que esperar y es de tipo `pthread_t`
2. `value_ptr`: es el puntero al valor esperado de retorno

##### Ejemplo
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

#### [[Lock|Locks]]
---

##### Lock y unlock
---
```c
int pthread_mutex_lock(pthread_mutex_t* mutex);
int pthread_mutex_unlock(pthread_mutex_t* mutex);
```

Las rutinas son bastante intuitivas, donde uno se imagina que puede haber una sección crítica, y por ende debe ser protegida, se utilizan los locks para ello.

##### Manejo de lock
---
```c
int pthread_mutex_trylock(pthread_mutex_t* mutex);
```

Donde intenta bloquearlo, y devuelve error si el lock solicitado está todavía captado.

```c
int pthread_mutex_timedlock(pthread_mutex_t* mutex, struct timespec* abb_timeout);
```

Si en un timeslice no consigue el mutex, devuelve error, o $0$ si lo bloquea.

##### Wait
---
```c
int pthread_cond_wait(pthread_con_t* cond, pthread_mutex_t* mutex);
```

 Esta llamada en forma [[Operación atómica|atómica]]
 1. Suelta el mutex haciendo unlock
 2. Suspende la ejecución del [[Thread]] que lo llama poniéndolo en la [[Estados de un thread#Waiting|lista de espera]]
 3. Se vuelve a hacer lock del mutex antes de volver del wait

##### Signal
---
```c
int pthread_cond_signal(pthread_cond_t* cond);
```

Toma a un thread de la [[Estados de un thread#Waiting|lista de espera]] y lo marca como potencialmente seleccionable por el [[Thread scheduler|planificador]] para correr, lo pone en la [[Estados de un thread#Ready|ready list]].

##### Broadcast
---
```c
int pthread_cond_broadcast(pthread_cond_t* cond);
```

Este toma a todos los thread de la lista y los marca como seleccionables para correr.