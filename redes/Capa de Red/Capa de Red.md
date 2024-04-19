---
dia: 2024-04-15
materia: redes
capitulo: 4
---
### Definición
---
Responsable de trasladar los [[Paquete|paquetes]] de la capa de red, conocidos como datagramas, de un [[Host|host]] a otro

El [[Protocolo|protocolo]] de la [[Capa de transporte|capa de transporte]] ([[Transmission Control Protocol (TCP)|TCP]] o [[User Datagram Protocol (UDP)|UDP]]) de un host de origen pasa un [[Paquete|segmento]] de la capa de transporte y una dirección de destino a la capa de red. Luego, la capa de red proporciona el servicio de suministrar el segmento a la capa de transporte del host de destino

La capa de red incluye el conocido [[Internet Protocol Address (IP address)|protocolo IP]], que define los capos del datagrama, así como la forma en que actúan lo hosts y los [[Router|routers]] sobre estos campos. La capa de red también contiene [[Enrutamiento|protocolos de enrutamiento]], que determinan las rutas que los datagramas siguen entre los orígenes y los destinos 