---
dia: 2024-09-26
tags:
  - carrera/ingeniería-electrónica/embebidos/Estrategias-de-control-de-periféricos
  - investigación/placa-de-Desarrollo/placa-de-desarrollo-Nucleo-64/placa-STM32-F302R8
  - nota/facultad
  - nota/investigacion
aliases:
  - Temporizador GP
vinculoFacultad:
  - tema: Estrategias de control de periféricos
    capitulo: 4
    materia: Taller de sistemas embebidos
    carrera: Ingeniería electrónica
---
# Definición
---
Son [[Interrupción por temporizador|temporizadores]] de $16$ o $32$ bits con [[General Purpose Input Output|pines de entrada y salida]]

Pueden realizar todos las funciones que hace un [[Temporizador básico|temporizador básico]], y también pueden tener hasta $4$ canales programables, los cuales se pueden configurar de la siguiente manera
* Uno o dos canales
* Uno o dos canales con salida complementaria. La salida complementaria dispone de un generador de "tiempos muertos", que proporciona una base de tiempos independiente

## En la placa STM32-F302R8
---
Tiene $4$ temporizadores de propósito general, donde $3$ de ellos (`TIM15`, `TIM16`, `TIM17`) son de $16$ bits, y uno (`TIM2`) de $32$ bits