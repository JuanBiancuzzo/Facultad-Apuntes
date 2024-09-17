---
dia: 2024-09-17
tags:
  - embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
  - placa-de-Desarrollo/placa-de-desarrollo-Nucleo-64/placa-STM32-F302R8
aliases:
  - Hardware Abstraction Layer for a GPIO
  - HAL for a General Purpose Input Output
  - HAL for a GPIO
  - Capa de abstracción de hardware para un entrada-salida de propósito general
  - Capa de abstracción de hardware para un GPIO
  - HAL para un entrada-salida de propósito general
  - HAL para un GPIO
---
### Definición
---
Es una [[Hardware Abstraction Layer|HAL]] específica para la conexión de periféricos a partir de un [[General Purpose Input Output|GPIO]]

##### Para la placa STM32
---
El formato del [[Registro|registro]] de modo de puerto GPIO para los puertos `A`, ..., `E` y `H`

![[HAL para un GPIO.png]]

Se accedería a este registro mediante programación utilizando el símbolo `GPIOxMODER` donde `x` puede ser `A`, ..., `E` y `H` para el puerto de destino. Los valores de reinicio de encendido (power-on reset) colocados automáticamente en todos los registros GPIO son los siguientes
* `0x0C00 0000` para el puerto `A`
* `0x0000 0280` para el puerto `B`
* `0x0000 0000` para todos los demás puertos

Los valores de di-bit o $2$ bits que se pueden almacenar en un registro tienen los siguientes significados
* `00` modo de input
* `01` modo de output
* `10` modo de función alternativa (alternate function mode)
* `11` modo analógico 

Los registros GPIO adicionales configuran otros comportamientos más asociados con los pines del puerto, incluidos los siguientes
* Enabling push-pull, open-drain, o none
* Enabling pull-up, pull-down o none
* Velocidad de operación
