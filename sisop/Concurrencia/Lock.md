---
dia: 2023-11-12
capitulo: 5
tags:
  - sisop/Concurrencia
---
### Definición
---
Una forma menos compleja de alcanzar una solución para el problema de la heladera es mediante la utilización de locks. Un lock es una variable que permite la [[Sincronización de un programa multithreading|sincronización]] mediante la exclusión mutua, cuando un [[Thread]] tiene el candado o lock, ningún otro puede ternerlo.

La idea principal es que un [[Proceso]] asocia un lock a determinados estados o partes de código y requiere que el thread posea el lock para entrar en ese estado. Con esto se logra que sólo un thread acceda a un recurso compartido a la vez.

Esto permite la exclusión mutua, todo lo que se ejecuta en la región de código en la cual un thread tiene un lock, garantiza la [[Operación atómica|atomicidad]] de las operaciones.
