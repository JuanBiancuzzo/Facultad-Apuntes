---
dia: 2023-11-15
tags:
  - ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - nota/facultad
---
# Definición
---
La información de control sobre un [[Proceso]] es mantenida en dos per process data structures. La [[User Area]] y la estructura Proc. Estas estructuras dependen de la implementación del [[Kernel]] mismo.

La estructura proc es la parte del espacio del proceso, q se mapea y es visible por el proceso necesaria incluso cuando el proceso no esta siendo ejecutado.

El contenido de la estructura proc
* Identificación
	* Cada proceso tiene un identificador único o process ID (PID) y además pertenece a un determinado grupo de procesos (PGID)
* Ubicación del mapa de [[Dirección de memoria|direcciones]] del [[Kernel]] del [[User Area|u area]] del proceso
* Estado actual del proceso
* Un puntero hacia el siguiente proceso en el [[Scheduler|planificador]] y al anterior
* Prioridad
* Información para el manejo de señales
* Información para la administración de [[Memoria]] 