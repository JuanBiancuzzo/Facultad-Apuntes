---
dia: 2024-08-18
tags: 
 - redes/Capa-de-Red
 - nota/facultad
---
# Definición
---
En este [[Protocolo|protocolo]], se elige la ruta que tenga menor costo hasta el [[Router|router]] [[Border Gateway Protocol#^755087|NEXT-HOP]]. Una vez determinado el mejor [[Camino|camino]], se lo agrega a la [[Forwarding table|forwarding table]] del router aclarando el prefijo y la interfaz que está en el mejor camino. Se utiliza tanto el protocolo inter-AS como el intra-AS para agregar un camino a una [[Autonomous system|AS]] externa. Puede suceder que dos routers elijan caminos distintos para el mismo prefijo

La idea detrás de este protocolo es sacarte el [[Paquete|paquete]] de encima lo antes posible (por esto, la analogía con una papa caliente), sin preocuparse por el costo de las demás porciones del sistema. Es un [[Algoritmo|algoritmo]] egoísta