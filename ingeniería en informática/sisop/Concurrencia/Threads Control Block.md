---
dia: 2023-11-12
aliases:
  - TCB
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
Cada [[Thread]] debe tener una estructura que represente su estado. Esta estructura se denomina Thread Control Block. Se crea una entrada por cada thread. La TCB almacena el [[Thread#Estados de un thread|estado per-thread de un thread]]:
* El estado del Cómputo que debe ser realizado por el thread.

Para poder crear múltiples threads, pararlos y rearrancarlos. El [[Sistema operativo|sistema operativo]] debe poder almacenar en el TCB el estado actual del bloque de ejecución:
* El puntero al [[ingeniería en informática/sisop/Virtualización de memoria/Stack]] del thread
* Una copia de sus registros en el procesador