---
dia: 2023-11-15
tags:
  - sisop/La-abstracción-de-proceso
  - nota/facultad
---
### Definición
---
La virtualización de [[Procesador|procesamiento]] es la forma de virtualización más primitiva, consiste en dar la ilusión de la existencia de un único [[Procesador|procesador]] para cualquier [[Programa]] que requiera de su uso. De esta forma, se provee

##### Simplicidad en la programación
* Cada [[Proceso]] cree que tiene toda la [[Procesador|Procesador]]
* Cada proceso cree que todos los dispositivos le pertenecen
* Distintos dispositivos parecen tener el mismo nivel de interaces
* Las interfaces con los dispositivos son más potentes que el [[Hardware|bere metal]]

##### Aislamiento frente a Fallas
* Los [[Proceso|procesos]] no pueden directamente afectar a otros procesos
* Los errores no colapsan toda la máquina

El [[Sistema operativo|S.O.]] crea esta ilusión mediante la [[Virtualización del procesador|virtualización de la CPU]]  a través del [[Kernel]].

#### Interfaz de [[Proceso|procesos]]
---
![[Proceso#API's]]