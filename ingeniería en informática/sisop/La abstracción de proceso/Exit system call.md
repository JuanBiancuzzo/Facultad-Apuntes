---
dia: 2023-11-16
tags:
  - carrera/ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Procesos-system-calls
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/sisop/La abstracción de proceso/Resumen.md]]"
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `exit()` permite terminar el [[Proceso|proceso]]. 
* Ignora todas las [[Signal system call|signal]]
* Cierra todos los [[Archivo|archivos]] abiertos
* En consecuencia se libera todos los locks mantenidos por este proceso sobre esos archivos
* Libera el [[Directorio|directorio]] actual
* Los segmentos de memoria compartida de los procesos se separan.
* Los contadores de los semáforos son actualizados
* Libera todas las secciones y [[Memoria|memoria]] asociada al proceso
* Registra información sobre el proceso 
* Pone el [[Estados de un proceso|estado]] del proceso en [[Estados de un proceso en Linux#Task Zombie|"zombie"]]
* Le asigna el parent [[Getpid system call|PID]] de los procesos hijos al PID de `init`
* Le manda una signal o señal de [[Estados de un proceso en Linux#Task Dead|muerte]] al proceso padre
* Context switch

```c
#include <stdlib.h>

void exit(int status);
```