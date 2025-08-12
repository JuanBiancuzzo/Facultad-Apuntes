---
dia: 2023-11-15
aliases:
  - Política de planificación STCF
tags:
  - carrera/ingeniería-en-informática/sisop/Scheduling
  - nota/facultad
vinculoFacultad:
  - tema: Scheduling
    capitulo: 4
    materia: Sistemas operativos
    carrera: Ingeniería en informática
---
# Definición
---
Para poder solucionar este problema que aparecen con la [[Política de planificación First In, First Out|política FIFO]] y con la [[Política de planificación Shortest Job First|política SJF]], se necesita relajar la [[Suposiciones en la planificación|suposiciones]] que dice que los [[Proceso|procesos]] tienen que terminar hasta el final. La idea es que el [[Scheduler|planificador o scheduler]] pueda adelantarse y determinar qué proceso debe ser ejecutado. 

Suponiendo que A dura $100$, y B y C duran $10$, y A llegue en $t = 0$, y B y C llegan $10$ segundos después. El scheduler, al ver que llegan B y C puede desalojar al proceso A y poner a ejecutarse a los otros procesos, y cuando terminen, volver a ejecutar a A. $$ T_\text{around} = \frac{(120 - 0) + (20 - 10) + (30 - 10)}{3} = 50 $$
Esta política es [[Preemptive|preemptive]]