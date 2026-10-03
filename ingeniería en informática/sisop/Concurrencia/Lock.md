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