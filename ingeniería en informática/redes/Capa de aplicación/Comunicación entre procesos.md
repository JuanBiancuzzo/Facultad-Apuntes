---
dia: 2024-04-18
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-aplicación
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - carrera/ingeniería-en-informática/redes/Capa-de-aplicación
  - nota/facultad
aliases:
  - Inter-Process Communication
  - IPC
etapa: ampliar
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
  - "[[ingeniería en informática/redes/Capa de aplicación/Resumen.md]]"
---
# Definición
---
La comunicación entre [[Proceso|procesos]] en el mismo [[Host|host]], se resuelve por medio del [[Sistema operativo|sistema operativo]], y se puede ver más sobre esto en [[Sistemas operativos (7508)|abstracción de proceso]]. La comunicación entre diferentes host es mediante mensajes por medio de una [[Red|red]]

Como esta provisto por el sistema operativo, en general la creación y la destrucción exceden la vida del proceso

Como dato de color, en [[Linux|linux]] todos los IPCs son vistos como diferentes tipos de [[Archivo|archivos]]

## Categorías
---
Existen distintos mecanismos de comunicación entre procesos como
* [[Semáforo|Semáforo]]
* [[Shmget system call|Shared Memory]]
* [[Flock system call|File lock]]
* Hay multiples implementaciones del mecanismo de [[Rendezvous|rendezvous]]
    * [[Signal system call|Signal]]
    * [[Msgget system call|Queue]]
    * [[Pipe system call|Pipe]]
    * [[Socket|Sockets]]