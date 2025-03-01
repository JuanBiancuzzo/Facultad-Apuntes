---
dia: 2023-08-23
tags:
  - carrera/ingeniería-en-informática/sisop/Kernel
  - nota/facultad
---
# Definición
---
La ejecución directa de un [[ingeniería en informática/sisop/La abstracción de proceso/Programa]] significa correr un programa directamente en la [[Procesador|Procesador]]. 

#### Ventajas
La ejecución es rápida y simple

#### Desventajas
* No se puede asegurar que el programa no haga algo que el usuario no quiere hacer
* No puede pausar la ejecución del programa y permitir que otro programa pueda usarlo

## Limitar la ejecución directa
---
Para poder limitar la ejecución directa, para poder corregir las desventajas de la ejecución directa, se necesitan ciertos mecanismos de software
* [[Modo de operación del kernel]]
* [[Instrucción privilegiada]]
* [[Protección de memoria]]
* [[Interrupción por temporizador]]
