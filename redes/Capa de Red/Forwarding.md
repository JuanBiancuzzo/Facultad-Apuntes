---
dia: 2024-06-07
tags:
  - redes/Capa-de-Red
  - nota/facultad
---
# Definición
---
Cuando un [[Paquete|paquete]] llega a un [[Router|router]], este debe mover el paquete al output link adecuado. Este puede ser bloqueado de salir del router, debido a que fue originado por un host malicioso o la [[Internet Protocol Address|dirección]] de destino está prohibida   ^baf6a6

## Para un link-layer switch
---
Vemos tres posibles escenarios en la llegada de un [[Frame|frame]]

* No hay una entrada en la tabla para la dirección especificada, en ese caso el switch envía el paquete a todas las interfaces excepto a la de llegada
* Hay una entrada en la tabla asociada la dirección especificada, pero esta interfaz coincide con la interfaz de llegada, en ese caso el switch realiza la función de filtering y descarta el paquete
* Hay una entrada en la tabla asociada a la dirección especificada y es distinta a la de la interfaz de llegada, en ese caso el [[Link-layer switches|switch]] realiza la función de forwarding y reenvía el paquete a la interfaz determinada