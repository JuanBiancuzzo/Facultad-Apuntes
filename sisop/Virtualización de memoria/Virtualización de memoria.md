---
dia: 2023-11-12
materia: sisop
capitulo: 3
---
### Definición
---
Esta es una abstracción por la cual la [[Memoria]] física puede ser compartida por diversos porcesos.

Un comportamiento clave de la memoria virtual son las [[Dirección de memoria virtual|direcciones virtuales]]. 

La virtualización de memoria le hace creer al [[Proceso]] que este tiene toda la memoria disponible para ser reservada y usada como si este estuviera siendo ejecutado sólo en la computadora. Todos los procesos en [[Linux]], están divididos en 4 segmentos:
* Text: Instrucciones del programa
* Data: Variables Globales
* [[Heap]]: Memoria dinámica alocable
* [[Stack]]: Variables locales y trace de llamadas

Todas estas secciones pertenecientes a un proceso se denominan espacio de direcciones del proceso.
