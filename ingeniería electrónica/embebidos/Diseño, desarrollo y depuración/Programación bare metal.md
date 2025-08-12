---
dia: 2024-08-29
tags:
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - nota/facultad
aliases:
  - Super-loop
  - Polling & interrupts
vinculoFacultad:
  - tema: Diseño, desarrollo y depuración
    capitulo: 1
    materia: Taller de sistemas embebidos
    carrera: Ingeniería electrónica
---
# Definición
---
La [[Aplicación|aplicación]] se escribe accediendo directamente al [[Hardware|hardware]] sin utilizar una interfaz de programación externa (sin [[Sistema operativo|sistema operativo]])
* La aplicación accede directamente a los registros de hardware del [[Microcontrolador|microcontrolador]]
* En un [[Camino#Ciclo (Cicle)|bucle]]/[[Lazo|lazo sin fin]], que ejecuta tareas con un tiempo de ejecución fijo
* Esta ejecución secuencial sólo se desvía cuando ocurre un [[Interrupción|evento de interrupción]]
* Este enfoque de desarrollo bare metal para [[Sistema embebido|sistemas embebidos]] se conoce como Super-loop, con modelado de tareas ([[Unified modelling language#Diagrama de estado|diagrama de estado]])