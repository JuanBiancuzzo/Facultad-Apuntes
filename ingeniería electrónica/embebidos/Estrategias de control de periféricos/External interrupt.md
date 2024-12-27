---
dia: 2024-09-26
tags:
  - ingeniería-electrónica/embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
  - investigación/placa-de-Desarrollo/placa-de-desarrollo-Nucleo-64/placa-STM32-F302R8
aliases:
  - EXTI
  - Controlador de interrupciones externo
---
# Definición
---
Las interrupciones externas, como las que se obtienen a través de pines [[General Purpose Input Output|GPIO]], se conectan al [[Controlador de interrupción#Para ARM Cortex-M|NVIC]] mediante un controlador de interrupciones externo (EXTI)

![[EXTI.png]]

El uso de un EXTI permite la [[Multiplexor|multiplexación]] de muchos pones GPIO en las entradas de interrupción externas del NVIC

## Para la placa STM32F302R8
---
Maneja hasta $23$ eventos de [[Software|software]] separados y/o activadores de [[Hardware|hardware]] conectados a $16$ líneas externas de [[Interrupción|interrupción]]/evento
* Proporciona un bit de estado para cada línea
* Proporciona activadores y máscaras independientes para cada línea

Puede detectar pulsos externos con un período de reloj más corto que el reloj del [[Bus|bus]] APB, que impulsa el EXTI

Cualquiera de los pines GPIO de la STM, de los $51$ que tienen, hasta $23$ podrían estar activos en un momento dato. Esas interrupciones externas deberían poder manejar fácilmente cualquier diseño [[Embebido|embebido]] imaginable

También existen otros $5$ líneas EXTI que están conectadas de la siguiente manera
* Línea EXTI $16$ conectada a la salida PVD
* Línea EXTI $17$ conectada al evento de alarma RTC
* Línea EXTI $18$ conectada al evento de activación [[Universal Serial Bus (USB)|USB]] OTG FS
* Línea EXTI $21$ conectada a los eventos RTC Tamper y TimeStamp
* Línea EXTI $22$ conectada al RTC Wakeup

![[Multiplexión de EXTI.png]]

La figura muestra la relación entre los pines GPIO, las entradas del controlador de interrupciones externo y las [[Solicitud de interrupción|IRQ]] de [[Controlador de interrupción#Para ARM Cortex-M|NVIC]]

Debe tener en cuenta que el pin GPIO PC13 está agrupado junto con muchos otros pines en una IRQ NVIC común llamada EXTI15_10_IRQ. Esto es bastante importante en la demostración del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] de interrupción
