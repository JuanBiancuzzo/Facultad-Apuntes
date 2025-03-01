---
dia: 2023-12-02
aliases:
  - TLB
  - Buffer de traducción adelantada
tags:
  - carrera/ingeniería-en-informática/sisop/Virtualización-de-memoria
  - nota/facultad
---
# Definición
---
Es un mecanismo de [[ingeniería en informática/sisop/Scheduling/Cache|cache]] de las [[Traslación de direcciones|traslaciones]] más utilizadas entre los pares virtuales a físicos. 

Por cada referencia a la [[Dirección de memoria virtual|memoria virtual]], el [[Hardware|hardware]] primero chequea la TLB para ver si esa traslación esta guardada ahí, si es así la traslación se hace rápidamente sin tener que consultar a la page table.

Este [[Buffer|buffer]] es una pequeña tabla a nivel [[Hardware|hardware]] que contiene los resultados de la recientes [[Traslación de direcciones|traslaciones de memoria]] realizadas. Cada entrada de la tabla mapea una virtual page a una physical page.

Normalmente se chequean todas las entradas del buffer contra la virtual page, si existe macheo el [[Procesador|procesador]] utiliza ese macheo para formar la physical address, ahorrándose todos los pasos de la translación. Esto se lo conoce como TLB hit.

Cuando, del proceso anterior, no existe macheo en el TLB, se dice que se tiene un TLB miss.

![[TBL hit y miss.webp]]

Para que sea útil, la búsqueda de la TLB necesita ser mucho más rápido que realizar una traslación completa de una [[Dirección de memoria|dirección de memoria]]. Por ende, las entradas de la tabla de la TLB son implementadas en una [[Memoria|memoria]] muy rápida, memoria estática on chip, situada muy cerca del [[Procesador|procesador]]. De hecho, para mantener esta búsqueda rápida, muchos [[Sistema|sistemas]] en la actualidad incluyen múltiples niveles de TLB. En general cuanto más pequeña es la memoria, más rápida es la búsqueda

![[TBL on chip.webp]]

## Consistencia de la TLB
---
Cada vez que se introduce un [[ingeniería en informática/sisop/Scheduling/Cache|cache]] en el [[Sistema|sistema]], se necesita considerar la forma de asegurar la consistencia del cache con los datos originales cuando las entradas en el mismo son modificadas. 

Para una ejecución correcta y [[Protección de memoria|segura]] de un [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]], el [[Sistema operativo|sistema operativo]] tiene que asegurarse que cada programa ve su propia [[Memoria|memoria]] y la de nadie más. Existen tres puntos a considerar

### [[Políticas de planificación|Context switch]]
---
Las [[Dirección de memoria virtual|direcciones virtuales]] del viejo [[Proceso|proceso]] ya no son más válidas, y no deben ser válidas, para el nuevo proceso. De otra forma, el nuevo proceso sería capaz de [[Read system call|leer]] las [[Dirección de memoria|direcciones]] del viejo proceso. 

Frente a un context switch, se necesita descartar el contenido de TLB. Este approach se denomina flush de TLB. Debido a que perder esta información no es útil, los [[Procesador|procesadores]] agregan el [[Getpid system call|id del proceso]] que produce cada traslación


### Reducción de permiso
---
Cuando el [[Sistema operativo|sistema operativo]] modifica una entrada en una page table, el TBL por hardware no provee ninguna consistencia, ya que el mismo sistema operativo tiene la responsabilidad de mantenerla.

### TLB Shutdown
---
En un [[Arquitectura multiprocesador|sistema multiprocesador]] cada uno puede tener [[ingeniería en informática/sisop/Scheduling/Cache|cacheada]] una copia de una translación en su TLB. Por ende, para [[Protección de memoria|seguridad]] y correctitud, cada vez que una entrada en la page table es modificada, la correspondiente entrada en todas las TLB de los [[Procesador|procesadores]] tiene que ser descartada antes que los cambios tomen efecto. 

Típicamente sólo el procesador actual puede invalidar su propia TLB, por ello, para eliminar una entrada en todos los procesadores del [[Sistema|sistema]], se requiere que el [[Sistema operativo|sistema operativo]] mande una interrupción a cada procesador y pida que esa entrada de la TLB sea eliminada. Esta es una operación muy costosa y por ende tiene su propio nombre y se denomina TLB shutdown

## Que contiene
---
Una TLB típica puede tener entre 32, 64 o 128 entradas y ser lo que se llama fully associative. Básicamente esto quiere decir que cualquier traslación puede encontrarse en cualquier lado de la TLB. Una entrada de la TLB contiene los siguientes datos
* Virtual page number (VPN)
* Page frame number (PFN)
* bit de validez
* bits de [[Protección de memoria|protección]] 
* dirty bit entre otros