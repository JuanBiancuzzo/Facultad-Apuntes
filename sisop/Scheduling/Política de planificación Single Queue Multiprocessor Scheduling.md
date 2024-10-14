---
dia: 2023-11-19
tags:
  - sisop/Scheduling
  - nota/facultad
aliases:
  - SQMS
---
# Definición
---
La forma más fácil para tener un [[Scheduler|planificador]] para un sistema [[Arquitectura multiprocesador|multiprocesador]] es la de reutilizar el marco de trabajo básico para un [[Políticas de planificación#Mono-Procesador|planificador de monoprocesador]].

Entonces se ponen todos los trabajos que tienen que ser planificados en una única [[Cola|cola]], que se llamara Single Queue Multiprocessor Scheduling.

Esta forma de plantear la planificación tiene la ventaja de la simplicidad, ya que no requiere mucho trabajo tomar la política existente que agarra la major tarea y la pone a ejecutar y adaptarla para que trabaje con más de una [[Procesador|Procesador]], sin embargo tiene sus limitaciones
* No es escalable
* Tiene problemas con la [[Afinidad de cache|afinidad del cache]]