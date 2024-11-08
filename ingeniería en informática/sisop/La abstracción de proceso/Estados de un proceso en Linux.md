---
dia: 2023-11-15
tags:
  - ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - nota/facultad
---
# Definición
---
Dado que en [[Linux]] los [[Proceso|procesos]] son denominados tasks, los estados de una task pueden ser

## Task Running
---
El [[Proceso]] está ejecutándose o peleando por [[Procesador|Procesador]] en la cola de run del [[Scheduler|planificador]]

## Task Interruptible
---
El [[Proceso]] se encuentra en un estado de espera interrumpible, este queda en este estado hasta que la condición de espera eventualmente sea verdadera. 

Mientras el proceso está en este estado, cualquier señal ([[Signal system call|signal]]) generada para el proceso es entregada al mismo, causando que este se despierte antes que la condición de espera se cumpla. 

## Task Killable
---
Este estado es similar al [[Estados de un proceso en Linux#Task Interruptible|Task interruptible]], con la excepción que las interrupciones puede ocurrir en talas signals

## Task Uninterruptable
---
El [[Proceso]] está en un estado de ininterrupción, pero no podrá ser despertada por las señales que le lleguen. Este estado es raramente utilizado.

## Task Stopped
---
El [[Proceso]] recibió una señal de `STOP`. Volverá a [[Estados de un proceso en Linux#Task Running|Task running]] cuando reciba la señal para continuar (`SIGCONT`)

## Task Traced
---
Un [[Proceso]] se dice que esta en estado de trace, cuando está siendo revisado probablemente por un debugger

## Task Zombie
---
El [[Proceso]] está terminado, pero sus recursos aún no han sido solicitados

## Task Dead
---
El [[Proceso]] hijo ha terminado y todos los recursos que este mantenía para sí se han liberado, el padre posteriormente obtiene el estado de salida del hijo usando [[Wait system call|wait]]
