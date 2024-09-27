---
dia: 2024-09-26
tags:
  - embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
  - placa-de-Desarrollo/placa-de-desarrollo-Nucleo-64/placa-STM32-F302R8
---
# Definición
---
El [[Interrupción por temporizador|temporizador]] simples de $16$ bits, que no tiene [[General Purpose Input Output|pines de entrada ni de salida]]

Se utilizan 
* Como "maestros" para otros cronómetros
* Como fuente de reloj del [[Conversor Digital-Analógico|DAC]]
* Para generar una base de tiempo como puede hacer todos los temporizadores STM

## En la placa STM32-F302R8
---
Tiene un temporizador básico, que tiene de nombre `TIM6`