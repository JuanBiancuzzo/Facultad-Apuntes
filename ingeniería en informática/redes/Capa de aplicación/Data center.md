---
dia: 2024-03-19
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-aplicación
  - carrera/ingeniería-electrónica/redes/Redes-de-computadoras
  - carrera/ingeniería-en-informática/redes/Capa-de-aplicación
  - carrera/ingeniería-en-informática/redes/Redes-de-computadoras
  - nota/facultad
aliases:
  - Top of Rack switch
  - Blades
  - TOR switch
vinculoFacultad:
  - "[[ingeniería en informática/redes/Capa de aplicación/Resumen.md]]"
  - "[[ingeniería en informática/redes/Redes de computadoras/Resumen.md]]"
---
# Definición
---
Los data centers tiene miles de [[Servidor|servidores]] que en general las utilizan las [[Redes de distribución de contenido|CDN]] como un centro de computo. Este [[Servicio|servicio]] que proveen se paga las conexiones y el [[Bandwidth|bandwidth]] de mandar información al data center.

Establece un grupo de conveniencias
* Elimina el tiempo de configurar un servidor propio
* Una cercanía geográfica en varios lugares del mundo
* Estrategia de polling
	* Consultar por nuevo contenido al datacenter

## Implementación
---
* Enter deep
	* Dentro de los [[Internet Service Provider|ISPs]]
	* Muchos lugares
	* Más dificultad y costos de mantenimiento
* Bring home
	* Cerca de [[Internet exchange Point|Internet exchange Point]]
	* [[Cluster|Cluster]] grandes en lugares estratégicos

## Networking
---
Recientemente, muchas grandes compañías han construido data centers masivos que utilizan para almacenar mucha información y soportar de forma concurrente muchas aplicaciones nube. Cada data center tiene su propia data center network

Los hosts dentro de un data center, llamados blades, son hosts que incluyen [[Microprocesadores|CPU]], [[Memoria|memoria]], y almacenamiento de disco. Estos son apilados en racks. Por encima de los racks, hay un switch, comúnmente llamado Top of Rack (TOR) Switch, que interconecta los hosts en el rack con el resto de hosts del data center. Los hosts tienen tarjeta de interfaces de red que se conectan con el TOR switch, y cada TOR Switch tiene puertos adicionales para conectarse con otros switches. Cada [[Host|host]] tiene asignada su propio [[Internet Protocol Address|IP]] interna del data center

En los data centers hay dos tipos de tráfico. El primero es entre clientes externos y hosts internos, para manejar este tráfico se incluyen border routers que conectan los data centers con el [[Internet|internet]]. Los racks conectan a los hosts con los border routers. El segundo tipo de tráfico es entre los hosts internos y se resuelve a partir de la red de switches que conectan los racks

## Arquitectura
---
Para data centers grandes, se emplea una estructura jerárquica para la red. Por encima de todo, están los border routers, que se conectan con los access routers. Cada access [[Router|router]] se conecta con un top tier switch, los cuales a su vez se conectan con múltiples second-tier-switch y un load balancer. Cada second tier switch a su vez se conecta con múltiples racks a través de los TOR switches. Típicamente, todos los links utilizan [[Ethernet]] para la [[Capa de Enlace|capa de enlace]] y la [[Capa física|capa física]]

Debido a la importancia de proveer servicio de alta disponibilidad, los data centers suelen contar con equipamiento y enlaces redundantes en sus diseños. Cada TOR switch se puede conectar con dos tier-2 switches, y cada access router, tier-1 switch y tier-2 switch puede ser duplicado e integrado en el diseño.

Para localizar el tráfico de broadcast, cada [[Subnetting|subnet]] es particionada en pequeñas redes [[Virtual Local Area Networks|VLAN]], cada uno con algunos cientos de hosts

Esta arquitectura sufre de limitada capacidad host-to-host, y es todavía más evidente si deben conectarse más arriba en la jerarquía. Una posible solución podría ser mejorar la velocidad de los switches y routers, pero es una solución muy cara

Soportar un gran ancho de banda es un requerimiento clave para los data centers, ya que se centran en la alta coordinación y comunicación entre sus hosts para resolver los pedidos