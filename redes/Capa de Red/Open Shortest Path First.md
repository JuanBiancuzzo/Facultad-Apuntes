---
dia: 2024-08-18
tags:
  - redes/Capa-de-Red
  - nota/facultad
aliases:
  - OSPF
---
### Definición
---
OSPF routing es ampliamente usado para [[Intra-autonomous system routing|intra-AS routing]] en el [[Internet|internet]]. Open indica que el [[Protocolo|protocolo]] de rutina está públicamente disponible. Es un protocolo de link-state que utiliza broadcast y [[Algoritmo de Dijkstra|dijkstra]] para calcular el [[Camino|camino]] de menor costo en cada [[Router|router]]. Cada uno de ellos construye un mapa topológico completo del sistema. Los costos individuales son configurados por el administrador de [[Red|red]]

En este protocolo, los routers transmiten información a todos los routers del sistema autónomo, no solo hacia sus vecinos. Esta información se envía cuando cambia el estado de un line, y periódicamente (cada aproximadamente 30 minutos) incluso si el estado del link no cambió

#### Seguridad
---
Los [[Paquete|mensajes]] intercambiados por los routers pueden ser autenticados para permitir que únicamente los routers con confianza puedan participar en el protocolo, previniendo intrusos. Existen dos tipos de autenticación, aunque por defecto ninguna es configurada. La autenticación simple utiliza contraseñas en los routers, la cual es enviada a través de los mensajes de red. La autenticación MD5 utiliza claves secretas compartidas configuradas en los routers. Se agregan códigos de hash a los paquetes, los cuales serán luego verificados por los routers que lo reciben, asegurándose que el remitente también contenga la clave secreta

#### Multiples caminos de mismo costo
---
Cuando múltiples destinos tienen el mismo costo, el protocolo permite que múltiples caminos sean utilizados

#### Soporte para unicast y multicast
---
El Multicast OPSF provee extensiones simples a OSPF para proveer multicast routing

#### Soporte por jerarquía por dentro de un AS
---
Loas [[Autonomous system|AS]] pueden ser configurados jerárquicamente en áreas, donde cada área corre su propio [[Routing algorithms|algoritmo de ruteo]]. Dentro de cada área, se deben configurar area border routers responsables de redirigir paquetes fuera del área. Por último, debe existir un área configurada para ser la backbone área, la cual contiene todos los area border routers en el AS, pero puede contener algunos non-border routers también