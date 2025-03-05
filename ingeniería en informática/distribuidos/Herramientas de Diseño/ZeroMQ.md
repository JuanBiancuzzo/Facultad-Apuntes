---
dia: 2025-03-05
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta es una implementación de un [[Middleware|middleware]], el cual esta escrito en [[Lenguaje C|C]], es [[Broker|brokerless]], no se encarga de la [[Serialización|serialización]] y soporta diferentes tipos de patrones de mensajería

## Tipos de conexiones
---
Tiene $4$ tipos de conexiones que se pueden hacer

1. [[Transmission Control Protocol|TCP]]
    * Multiples [[Computadora|computadoras]]
    * [[Topología de comunicación#^unicast|unicast]]
2. [[Comunicación entre procesos|IPC]]
    * Multiples [[Proceso|procesos]]
    * Comunicación a través de [[Unix|Unix]] [[Socket|sockets]]
3. Inproc
    * [[Thread|Multithreading]]
    * [[Queue|Queue]] entre threads
4. Otras
    * [[Topología de comunicación#^muticast|Multicast]] a través del [[Pragmatic General Multicast Protocol (PGM Protocol) (Protocolo PGM)|PGM]]

## Patrones
---
Como se mencionó antes, este usa los siguientes patrones
* [[Patrón de mensajería request-reply|Request-Replay]]
* [[Patrón de mensajería producer-consumer|Producer-Consumer]]
* [[Patrón de mensajería publisher-subscriber|Publisher-Subscriber]]
* [[Patrón de mensajería pipeline|Pipeline]]
* [[Patrón de mensajería router-dealer|Router-Delear (Broker)]]