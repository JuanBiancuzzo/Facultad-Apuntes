---
dia: 2024-04-18
tags:
  - redes/Capa-de-Transporte
  - nota
---
### Definición
---
Transporta los mensajes de la [[Capa de aplicación|capa de aplicación]] entre los [[Host|host]] de la aplicación. En [[Internet|internet]], existen dos [[Protocolo|protocolos]] de transporte
* [[Transmission Control Protocol|Transmission Control Protocol (TCP)]]
* [[User Datagram Protocol|User Datagram Protocol (UDP)]]

En esta capa, denominaremos a los [[Paquete|paquetes]] como segmentos

La extensión de la entrega host-to-host a una entrega process-to-process se llama transport-layer [[Multiplexación y demultiplexación|multiplexing]]. Además de este servicio, UDP y UTP ofrecen integrity checking con campos de detección de error. Estos dos servicios minimales son los únicos que ofrece UDP. Así como el [[Internet Protocol Address|protocolo IP]], UDP es un [[Protocolo de entrega confiable|unreliable service]]

TCP, por el otro lado, ofrece servicios adicionales a sus aplicaciones. En primer lugar, ofrece reliable data transfer. Utilizando control de flujo, números de secuencia, acknowledgments y timers, este protocolo asegura que la información se enviará exitosamente y en el orden correcto. Por otro lado, también ofrece congestion control. Este no es un servicio para la aplicación que lo usa, sino para el bien de todo el internet. Previene que una conexión TCP inunda los links y routers entre los hosts con una excesiva cantidad de tráfico