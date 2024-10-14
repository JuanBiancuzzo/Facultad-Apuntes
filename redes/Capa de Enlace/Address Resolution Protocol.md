---
dia: 2024-08-26
tags:
  - redes/Capa-de-Enlace
  - nota/facultad
  - protocolos
aliases:
  - ARP
---
# Definición
---
Debido a que existen tanto [[Internet Protocol Address|direcciones IP]] como [[Media Access Control Address|direcciones MAC]], existe una necesidad de traducir entre ellas. Para esto se utiliza el Address Resolution Protocol

Este [[Protocolo|protocolo]] es similar al [[Domain Name System|DNS]], pero con la salvedad de que ARP únicamente resuelve direcciones IP de los hosts y las interfaces que pertenecen a la misma [[Subnetting|subnet]]

Todos los hosts tienen una tabla ARP que contiene mapeos entre direcciones IP y MAC. Además, las entradas de la tabla contienen un [[Internet Protocol Versión 4#^b40fdb|campo TTL]] para definir cuanto actualizar el valor, debido a que los mapeos no son permanentes

Cuando un [[Host|host]] quiere definir una dirección MAC, el adaptador enviara un [[Paquete|paquete]] ARP conteniendo la petición y la enviara en [[Internet Protocol Versión 4#Broadcast|broadcast]] a toda la subred

Los hosts que contiene la dirección IP referida enviara en respuesta un paquete conteniendo el mapeo solicitado. La respuesta no se enviará en un paquete broadcast, sino dirigido al que realizo la petición

Las tablas son configuradas automáticamente (plug and play) y no deben mantenidas por un administrador de [[Red|red]]

Este es un protocolo que se encuentra entre la [[Capa de Red|capa de red]] y la [[Capa de Enlace|capa de enlace]], ya que contiene información relacionada con ambas capas

## Mandando un datagrama fuera de la subnet
---
Cuando enviamos un [[Paquete|datagrama]] a través de múltiples routers hacia un destino externo, debemos incluir la dirección MAC del [[Router|router]] inmediato ([[Border Gateway Protocol#^755087|next-hop]]). Si incluimos la dirección MAC del host de destino, ningún adaptador de la red tomará el paquete y este será descartado. Para conocer la dirección IP del próximo router inmediato, se utiliza el protocolo ARP