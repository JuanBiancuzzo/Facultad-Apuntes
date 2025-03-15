---
dia: 2025-03-15
tags:
  - proyecto-práctico/Trabajo-Profesional-de-Ingeniería-Informática
  - nota/proyecto
---
# Progreso
---
Investigando sobre el [kernel de linux](https://github.com/torvalds/linux/tree/master), se puede reemplazar el [[File system|file system]] usando la abstracción del [[Virtual File System|VFS]], pero para asegurarnos que es el default, se tiene que registrar lo antes posible. Por lo tanto vamos a tener que investigar como registrar un VFS y como asegurarnos que sea el primero en registrarse

Por otro lado, para reemplazar el [[Scheduler|scheduler]] se ve como una tarea más difícil ya que no hay una [[Interfaz|interfaz]] o [[Virtualización|virtualización]] de este [[Sistema|sistema]]. Vamos a tener que investigar como sacar el que se usa actualmente e integrar el nuestro, registrándolo en el lugar que sea correcto e implementando lo necesario para este, que se puede ver en el [[POSIX|volumen 1, capítulo 13 Headers, en la página 321]] donde impone una [[Header file|header]] para el scheduler

Por último también necesitamos ver como implementar el [[Protocolo|protocolo]] que vamos a usar tanto en el file system como en el scheduler. De forma similar en el volumen 1, capítulo 13 Headers, en la página 304, tenemos la interfaz `netinet/in.h` la cual menciona la selección del protocolo, ya sea [[User Datagram Protocol|UDP]] como [[Transmission Control Protocol|TCP]], y entonces este es el lugar donde tiene la interfaz que tienen los protocolos

Similar pero más simple al file system, se tiene que registrar un protocolo al kernel, y ese va a pasar a ser un posible protocolo que se puede usar
