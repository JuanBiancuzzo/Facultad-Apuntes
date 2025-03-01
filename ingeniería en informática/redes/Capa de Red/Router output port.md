---
dia: 2024-06-14
tags:
  - carrera/ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
---
# Definición
---
Almacena los [[Paquete|paquetes]] recibidos por el [[Switching fabric|switching fabric]], y los envía al enlace de salida asociado, realizando las funciones de [[Capa de Red|capa de red]] y capa física necesarias. Para los casos de enlaces bidireccionales, usualmente se asocia un [[Router input port|input port]] al mismo enlace ^57d3e6

El procesamiento de output ports toma paquetes almacenados en el buffer correspondiente y los transmite a través del link

## Delay
---
Si el output port no es suficiente rápido como para enviar todos los paquetes que llegaron a su buffer, entonces se produjera encolamiento en los output ports. Eventualmente, esta cola puede crecer lo suficiente como para ocupar todo espacio disponible, produciendo pérdida de paquetes

Llegada a esta situación, se puede elegir eliminar el paquete reciente (política conocida como drop-tail), o eliminar uno o más paquetes ya llegados. En algunos casos, será útil eliminar paquetes antes de que llegue al límite para indicar la congestión de la [[Red|red]]

Por muchos años, se creyó que una buena regla para la capacidad del buffer es de $$ RTT \cdot C $$ donde $C$ es la capacidad del link y [[Round trip time|RTT]] es el round trip time promedio. Estudiamos más recientes sugieren que para conexiones con una gran cantidad de flujos, la necesidad de una gran capacidad del buffer disminuye considerablemente
 