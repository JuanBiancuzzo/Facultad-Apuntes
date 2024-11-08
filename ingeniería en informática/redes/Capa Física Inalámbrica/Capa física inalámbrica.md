---
dia: 2024-08-26
tags:
  - ingeniería-en-informática/redes/Capa-Física-Inalámbrica
  - nota/facultad
aliases:
  - Wireless host
---
# Definición
---
En una red inalámbrica, podremos identificar los siguientes elementos

* Wireless Hosts ^wireless-host
    * Al igual que en las redes tradicionales, los hosts son los end-systems que ejecutan aplicaciones
* Wireless Links
    * ![[Wireless link#^4cfb60]]
* Base Station
    * Es una parte clave de la infraestructura. Es la responsable de leer y recibir paquetes desde y hacia los hosts. Se encargará de coordinar la transmisión de múltiples hosts con los cuales está asociado. Este se conecta con una red mayor, funcionando como un relay entre los hosts y el resto del mundo
    * Los hosts asociados con una estación base suelen ser referidos como operando en infrastructure mode. En las redes ad hoc, o descentralizadas, los hosts inalámbricos no tienen dicha infraestructura con la cual conectarse, por lo que ellos mismos deben proveer servicio como [[Routing|routing]], address assignment, y otros
    * Cuando un host móvil se mueve fuera del rango de una estación base y dentro de otra, entonces cambiara su punto de unión con la red mayor. Este proceso es conocido como handoff
* Network Infrastructure
    * Esta es la red mayor a la cual un host inalámbrico puede desear conectarse

## Clasificación
---
Una vez descritas las piezas de una red inalámbrica, podremos clasificarlas según dos criterios

* Single-hop, Infrastructure-based
    * Estas redes tienen una estación base conectada de forma cableada a una red mayor (el [[Internet|internet]]). Todas las comunicaciones entre los hosts y la estación base se hace a través de un único salto inalámbrico. Las redes 802.11 y las redes de celular como 4G LTE utilizan esta tecnología
* Single-hop, Infrastructure-less
    * En estas redes, no hay una estación base. Uno de los nodos actúa como coordinador con los otros nodos. Las conexiones Bluetooth y las redes 802.11 ad hoc pertenecen a esta categoría
* Multi-hop, Infrastructure-based
    * En estas redes, existe una estación base que se conectan con el internet, pero puede haber nodos inalámbricos intermedios entre los hosts y la estación base
* Multi-hop Infrastructure-less
    * En estas redes, no existe una estación base que coordine las conexiones, y los paquetes pueden tener que llegar a atravesar múltiples nodos antes de llegar al destino deseado. Las [[Mobile ad hoc networks (MANET)|mobile ad hoc networks (MANET)]] pertenecen a esta categoría. Si los dispositivos son vehículos, entonces la red está una [[Vehicular ad hoc network (VANET)|vehicular ad hoc network (VANET)]]