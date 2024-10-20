---
dia: 2024-09-16
etapa: terminado
referencias:
  - "251"
tags:
  - placa-de-Desarrollo
  - nota/investigacion
  - placa-de-Desarrollo/placa-de-desarrollo-Nucleo-64
aliases:
  - MCU
  - Microcontroller Unit
orden: 113
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Un microcontrolador es un [[Circuito integrado|circuito integrado]] programable, capaz de ejecutar las órdenes grabadas en su [[Memoria|memoria]]. Está compuesto de varios bloques funcionales que cumplen una tarea específica. Un microcontrolador incluye en su interior las tres principales unidades funcionales de una [[Computadora|computadora]]
* [[Procesador|Unidad central de procesamiento]]
* Memoria
* [[Mapeo de memoria en periféricos|Periféricos de entrada/salida]]

Algunos microcontroladores pueden utilizar palabras de cuatro bits y funcionan a velocidad de reloj con frecuencias tan bajas como 4 kHz, con un consumo de baja [[Potencia|potencia]] (mW o microwatts). Por lo general, tendrá la capacidad de mantenerse a la espera de un evento como pulsar un botón o de otra interrupción; así, el consumo de [[Energía|energía]] durante el estado de reposo (reloj de la CPU y los periféricos de la mayoría) puede ser solo de nanowatts, lo que hace que muchos de ellos sean muy adecuados para aplicaciones con batería de larga duración. Otros microcontroladores pueden servir para roles de rendimiento crítico, donde sea necesario actuar más como un [[Procesador digital de señal (DSP)|procesador digital de señal]], con velocidades de reloj y consumo de energía más altos

Cuando es fabricado el microcontrolador, no contiene datos en la [[Read Only Memory|memoria ROM]]. Para que pueda controlar algún proceso es necesario generar o crear y luego grabar en la [[Electrically Erasable Programmable Read Only Memory|EEPROM]] o equivalente del microcontrolador algún [[Programa|programa]], el cual puede ser escrito en [[Lenguaje assembler|lenguaje ensamblador]] u otro [[Lenguaje de programación|lenguaje]] para microcontroladores; sin embargo, para que el programa pueda ser grabado en la memoria del microcontrolador, debe ser codificado en sistema numérico hexadecimal que es finalmente el sistema que hace trabajar al microcontrolador cuando este es alimentado con el voltaje adecuado y asociado a dispositivos analógicos y discretos para su funcionamiento<sup><a href="#ref-251" style="color: inherit; text-decoration: none;">[251]</a></sup> 

## Para las placas de desarrollo Nucleo-64
---
El diagrama de bloques de la MCU de la placa de desarrollo Nucleo-64 es el siguiente

![[MCU de la placas de desarrollo Nucleo-64.png]]

Tenga en cuenta que hay seis bancos de puertos [[General Purpose Input Output|GPIO]] que se muestran en el lado izquierdo que están conectados al [[Bus|bus]] bidireccional avanzado de alta velocidad $1$ (`AHB1`). Este bus transfiere datos digitales internamente a una velocidad de hasta un máximo de $100 ~ Mbps$

La [[Hardware Abstraction Layer|HAL]] gestiona eficazmente las transferencias de datos desde los puertos GPIO, así como desde muchos otros componentes periféricos que se muestran 


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```