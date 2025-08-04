---
dia: 2023-11-12
tags:
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/sisop/Concurrencia/Resumen.md]]"
---
# Definición
---
Los estados de un [[Thread]] son

## Init
---
Un [[Thread]] se encuentra en estado INIT mientras se está inicializando el [[Threads Control Block|estado per-thread]] y se está reservando el espacio de [[Memoria]] necesario para estas estructuras. Una vez que esto se ha realizado el estado del thread se setea en [[Estados de un thread#Ready|READY]]. Además se lo pone en una lista llamada `ready list` en la cual están esperando todos los thread listos para ser ejecutados por el [[Microprocesadores|procesador]]

## Ready
---
Un [[Thread]] en este estado está listo para ser ejecutado pero no está siendo ejecutado en ese instante. La [[Threads Control Block|TCB]] esta en la `ready list` y los valores de los [[Registro|registros]] está en la TCB.

En cualquier momento el [[Thread scheduler]] puede transicional al estado [[Estados de un thread#Running|RUNNING]]

## Running
---
Un [[Thread]] en este estado está siendo ejecutado en este mismo instante por el [[Microprocesadores|procesador]]. En este mismo instante los valores de los [[Registro|registros]] están en el procesador. En este estado un RUNNING THREAD puede pasar a [[Estados de un thread#Ready|READY]] de dos formas
1. El [[Thread scheduler|scheduler]] puede pasar un thread de su estado RUNNING a READ mediante el desalojo o preemption del mismo mediante el guardado de los valores de los registros y cambiando el thread que se está ejecutando por el próximo de la lista
2. Voluntariamente un thread puede solicitar abandonar la ejecución mediante la utilización de `thead_yield`, por ejemplo

## Waiting
---
En este estado el [[Thread]] está esperando que algún determinado evento suceda. Dado que un thread en WAITING no puede pasar a [[Estados de un thread#Running|RUNNING]] directamente, estos thread se almacenan en la lista llamada `waiting list`. Una vez que el evento ocurre el scheduler se encarga de pasar el thread del estado WAITING a RUNNING, moviendo la [[Threads Control Block|TCB]] desde el `waiting list` a la ready list

## Finished
---
Un [[Thread]] que se encuentra en estado FINISHED nunca más podrá volver a ser ejecutado. Existe una lista llamada `finished list` en la que se encuentran las [[Threads Control Block|TCB]] de los threads que han terminado.