---
dia: 2023-11-12
tags:
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
vinculoFacultad:
  - tema: Concurrencia
    capitulo: 5
    materia: Sistemas operativos
    carrera: Ingeniería en informática
---
# Definición
---
Una forma menos compleja de alcanzar una solución para el problema de la heladera es mediante la utilización de locks. Un lock es una variable que permite la [[Sincronización de un programa multithreading|sincronización]] mediante la exclusión mutua, cuando un [[Thread]] tiene el candado o lock, ningún otro puede ternerlo.

La idea principal es que un [[Proceso]] asocia un lock a determinados estados o partes de código y requiere que el thread posea el lock para entrar en ese estado. Con esto se logra que sólo un thread acceda a un recurso compartido a la vez.

Esto permite la exclusión mutua, todo lo que se ejecuta en la región de código en la cual un thread tiene un lock, garantiza la [[Operación atómica|atomicidad]] de las operaciones

### Lock y unlock
---
```c
int pthread_mutex_lock(pthread_mutex_t* mutex);
int pthread_mutex_unlock(pthread_mutex_t* mutex);
```

Las rutinas son bastante intuitivas, donde uno se imagina que puede haber una sección crítica, y por ende debe ser protegida, se utilizan los locks para ello.

### Manejo de lock
---
```c
int pthread_mutex_trylock(pthread_mutex_t* mutex);
```

Donde intenta bloquearlo, y devuelve error si el lock solicitado está todavía captado.

```c
int pthread_mutex_timedlock(pthread_mutex_t* mutex, struct timespec* abb_timeout);
```

Si en un timeslice no consigue el mutex, devuelve error, o $0$ si lo bloquea.