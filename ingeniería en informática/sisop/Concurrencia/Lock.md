---
dia: 2023-11-12
etapa: empezado
referencias: []
aliases:
  - Lock de lectura#^lock-lectura
  - Shared lock#^lock-lectura
  - Lock de escritura#^lock-escritura
  - Exclusive lock#^lock-escritura
  - Mutex#^lock-escritura
  - Algoritmo de exclusión mutua centralizada#Algoritmo centralizado
  - Algoritmo de exclusión mutua descentralizada#Algoritmo descentralizado
  - Algoritmo Token Ring#Token Ring
tags:
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Sincronización
vinculoFacultad:
  - tema: Concurrencia
    capitulo: 5
    materia: Sistemas operativos
    carrera: Ingeniería en informática
  - tema: Sincronización
    capitulo: 4
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Una forma menos compleja de alcanzar una solución para el problema de la heladera es mediante la utilización de locks. Un lock es una variable que permite la [[ingeniería en informática/sisop/Concurrencia/Sincronización de un programa concurrente|sincronización]] mediante la exclusión mutua, cuando un [[ingeniería en informática/sisop/Concurrencia/Thread|thread]] tiene el candado o lock, ningún otro puede ternerlo

La idea principal es que un [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|proceso]] asocia un lock a determinados estados o partes de código y requiere que el thread posea el lock para entrar en ese estado. Con esto se logra que sólo un thread acceda a un recurso compartido a la vez

Esto permite la exclusión mutua, todo lo que se ejecuta en la región de código en la cual un thread tiene un lock, garantiza la [[Operación atómica|atomicidad]] de las operaciones

Existen $2$ tipos de locks
* Locks de lectura o shared locks ^lock-lectura
	* Más de un proceso a la vez puede tener el lock
	* Para poder tomar un shared lock, el proceso debe esperar hasta que sean liberados todos los exlusive locks
* Locks de escritura, exclusive locks o mutex ^lock-escritura
	* Sólo un proceso a la vez puede tener cualquier tipo de lock
	* Para poder tomar un exclusive lock, el proceso debe esperar hasta que sean liberados todos los locks 

## Implementación distribuida
---
En un [[ingeniería en informática/distribuidos/Introduccion/Sistema distribuido|sistema distribuido]], se puede implementar la exclusión mutua donde se utiliza un coordinador por lo que centraliza la decisión, o entre todos los nodos toman la decisión de forma distribuida

### Algoritmo centralizado
---
Para este algoritmo, se necesita inicialmente [[Algoritmo de elección de Lider|elige un coordinador]], el cual va a ser el que centraliza la decisión

Cuando un proceso quiere entrar a la [[ingeniería en informática/concurrentes/Sincronización/Sección critica|sección critica]], envía un mensaje al coordinador. El coordinador recibe el mensaje y decide según el caso
1. Si no hay ningún otro proceso en la sección critica, le envía `Ok` para poder entrar 
2. Si hay algún otro proceso en la sección critica, le enviar un `NoDisponible` o simplemente no enviar nada para que bloquee la respuesta

### Algoritmo descentralizado
---
El algoritmo descentralizado lo podemos plantear de $2$ formas distintas, con la relación de compromiso de la cantidad de conexiones y la simplicidad

#### Completo
---
En el lado más simple está una conexión completa entre los nodos, donde todos tienen que estar conectados entre sí 

Cuando un proceso quiere entrar a la sección critica, construye un mensaje con el nombre de la sección crítica, el identificador del proceso y un timestamp 

Los otros procesos cuando reciben este mensajes y decide que envíar según el caso
1. Si no está en la sección critica y no quiere entrar a esta, envía `Ok`, notificando que este proceso no tiene problema con que el otro proceso entre a la sección critica
2. Si no está en la sección critica, pero quiere entrar, compara con el timestamp
	1. Si es menor su propio timestamp, entonces cae en el caso siguiente
	2. Si es mayor envía `Ok` y luego empieza todo este proceso desde el inicio
3. Si está en la sección critica, envía `NoDisponible` o simplemente no enviar nada para que bloquee la respuesta, y cuando sale de la sección critica envía el `Ok`

Finalmente, cuando recibe el `Ok` de todos, entra a la sección critica

#### Token Ring
---
Por el otro lado, tenemos una menor cantidad de conexiones ya que se conforma un anillo, por lo que independientemente de la cantidad de nodos, cada uno solo necesita mantener $2$ conexiones punto a punto

Al iniciar el proceso $0$ recibe un token que va circulando por el anillo. Sólo el proceso que tiene el token puede entrar a la sección critica

Por lo tanto, si un proceso quiere entrar, espera a recibir el token y lo mantiene hasta salir de la sección critica. Para evitar [[ingeniería en informática/sisop/Concurrencia/Deadlock|deadlocks]], el proceso no puede entrar a otra sección critica con el mismo token

### Lock y unlock en C
---
```c
int pthread_mutex_lock(pthread_mutex_t* mutex);
int pthread_mutex_unlock(pthread_mutex_t* mutex);
```

Las rutinas son bastante intuitivas, donde uno se imagina que puede haber una sección crítica, y por ende debe ser protegida, se utilizan los locks para ello

También se puede utilizar
```c
int pthread_mutex_trylock(pthread_mutex_t* mutex);
```
donde intenta bloquearlo, y devuelve error si el lock solicitado está todavía captado

Como también utilizarlo
```c
int pthread_mutex_timedlock(pthread_mutex_t* mutex, struct timespec* abb_timeout);
```
si en un timeslice no consigue el mutex, devuelve error, o $0$ si lo bloquea

### Lock y unlock en Rust
---
```rust
impl RwLock<T> {
	fn read(&self) -> LockResult<RwLockReadGuard<T>>
	
	fn write(&self) -> LockResult<RwLockWriteGuard<T>>
}
```

Como también se puede utilizar
```rust
impl RwLock<T> {
	fn try_write(&self) -> Result<LockResult<RwLockWriteGuard<T>>>
}
```