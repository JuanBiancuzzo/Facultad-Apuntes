---
dia: 2024-08-29
tags:
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - nota/facultad
aliases:
  - Sistema Operativo de Tiempo Real
  - RTOS
vinculoFacultad:
  - tema: Diseño, desarrollo y depuración
    capitulo: 1
    materia: Taller de sistemas embebidos
    carrera: Ingeniería electrónica
---
# Definición
---
En la programación con RTOS se utiliza un Núcleo de [[Sistema operativo|Sistema Operativo]] ([[Kernel]]) con un [[Scheduler|Planificador (Scheduler)]] y [[Device Driver|Controladores de dispositivos (Device Drivers)]] entre el [[Hardware|hardware]] y el código de la aplicación
* Posibilita lo siguiente
    * Multitasking
    * [[Thread|Multithreading]]
    * [[Arquitectura multiprocesador|Multiprocesamiento]]
* En lugar de pocas tareas claramente definidas y definibles en términos de recursos, se pueden ejecutar muchas tareas en uno o varios núcleos de [[Microprocesadores|CPU]] (donde las tareas individuales puede priorizarse cómodamente y agruparse según el rendimiento de los núcleos de CPU disponibles)
* Los sistemas operativos de tiempo real con sus planificadores permiten ejecutar [[Proceso|procesos]] en [[Concurrencia|concurrencia]]/[[Paralelo|paralelo]], de forma flexible y priorizada, asumiendo la responsabilidad de la funcionalidad del sistema. Tanto de forma cooperativa como [[Preemptive|apropiativa (preemptive)]]