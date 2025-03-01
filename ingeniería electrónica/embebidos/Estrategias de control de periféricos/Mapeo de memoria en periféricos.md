---
dia: 2024-09-15
tags:
  - carrera/ingeniería-electrónica/embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
  - investigación/placa-de-Desarrollo/placa-de-desarrollo-Nucleo-64/placa-STM32-F302R8
aliases:
  - Memory-Mapped Peripherals
---
# Definición
---

## Placa de desarrollo Nucleo-64
---
Los periféricos STM MCU se controlan y los datos se transfieren utilizando direcciones dentro de un rango de $32$ bits

Esto se conoce como [[Virtualización de memoria|mapeo de memoria]], porque desde la perspectiva del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] no hay diferencia si se comunica con una ubicación de [[Memoria|memoria]] o con un [[Registro|registro]] periférico

![[Mapeo de memoria en periféricos.png|500]]

Acá se muestra los bloques principales que constituyen todo el rango de direcciones de $32$ bits. También se muestran los dos bloques ampliados, que detallan las ubicaciones de la memoria del core, así como las ubicaciones de los periféricos/[[Bus|bus]]

### Placa de desarrollo STM32-F302R8
---
Veamos las direcciones de memoria asignadas a los periféricos

![[Pasted image 20240915111513.png]]

El rango de [[General Purpose Input Output|GPIO]] total de `0x4002 0000` a `0x4002 1FFFF`, que se divide en seis bloques más pequeños de $1$ KB

Cinco de los seis bloques de $1$ KB están asignados a los puertos GPIO A, B, C, D y F, respectivamente

Hay un bloque no utilizado en el rango `0x4800 1000` a `0x4800 13FF`, que no tiene un impacto significativo en las asignaciones de puertos

Veamos los periféricos conectados al bus interno de periféricos avanzados $1$ (`APB1`)

![[Pasted image 20240915112305.png]]

Los periféricos conectados al bus son los siguientes
* Timers (`TIMxx`)
* Universal Synchronous/Asynchronous Receiver/Transmitters
* `USARTx`
* Serial peripheral interfaces (`SPIx`)
* Inter-integrated interfaces (`I2Cx`)
* [[Universal Serial Bus (USB)|Universal Serial Bus]] (`USB`)
* Integrated sound interface (`I2S`)
* [[Conversor Digital-Analógico|Digital-to-analog converter]] (`DAC`) 
* Controller area network interface (`CAN`)
* Real-time clock (`RTC`)
* Watch dog timers (`IWDG`, `WWDG`)