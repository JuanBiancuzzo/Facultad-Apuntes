---
dia: 2024-06-14
aliases:
  - IPv6
tags:
  - redes/Capa-de-Red
  - nota/facultad
  - protocolos/protocolo-de-internet
---
# Definición
---
La motivación para el desarrollo de la dirección IPv6 es la realización de que el espacio de direcciones de [[Internet Protocol Versión 4|IPv4]] se estaba utilizando. Los desarrolladores tomaron esta oportunidad para mejorar algunos aspectos de IPv4, basados en la experiencia ganada por IPv4
* Expanded addressing capabilities
	* Se aumenta el tamaño de una [[Internet Protocol Address|dirección IP]] de $32$ bits a $128$ bits. Ahora cada grano de arena del planeta puede tener una dirección única
* Streamlines 40-byte header
	* Algunos campos de IPv4 fueron eliminados o marcados como opcionales, disminuyendo el tamaño del header fijo a $40$ bytes
* Flow labeling
	* Permite etiquetar los [[Paquete|paquetes]] como proviniendo de un flujo particular al cual el remitente pide un manejo especial, como servicio de calidad no por defecto o un servicio en tiempo real

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version| Traffic Class |           Flow Label                  |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Payload Length        |  Next Header  |   Hop Limit   |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                         Source Address                        +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                      Destination Address                      +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

Los campos clave de un [[Paquete|datagrama]] son
* Versión
	* Este campo de $4$ bits identifica el número de versión IP. Para la IPv6 se utiliza el valor $6$
* Traffic class
	* Este campo de $8$ bits es usado para dar más prioridad a ciertos datagramas dentro de un flujo
* Flow label
	* Campo de $20$ bits que permite identificar un flujo de datagramas
* Payload length
	* Valor de $16$ bits que muestra el tamaño en bytes del payload del paquete
* Next header
	* Identifica el [[Protocolo|protocolo]] al cual los datos del paquete serán entregados
	* Por ejemplo
		* [[User Datagram Protocol|UDP]]
		* [[Transmission Control Protocol|TCP]]
* Hop limit
	* Indica la cantidad de saltos que permite el paquete. Por cada [[Router|router]] que atraviesa se reduce en uno el número, hasta finalmente descartar el paquete
* Source and destination addresses
	* Direcciones de origen y destino en formato IPv6 de $128$ bits
* Data
	* El payload del paquete IPv6

El header, a diferencia de IPv4, no tienen el [[Fragmentación de Internet Protocol|flag de fragmentación]], ni el [[Internet Protocol Versión 4#^93d41c|checksum]], ni el [[Internet Protocol Versión 4#^d6224c|campo de opciones]]. Este último se reemplaza por el campo de `next header`

## Transición de IPv4 a IPv6
---
El problema es que mientras que los sistemas IPv6 son backward-compatible, los sistemas IPv6 no soportan el envío de datagramas IPv6. La mayoría de los sistemas utilizan IPv4 y la transición es un proceso muy costoso

Para solucionar esto se utiliza la estrategia de tunneling. Esta estrategia consiste en que si dos nodos IPv6 se quieren comunicar a través de una serie de routers que implementan únicamente IPv6, entonces el paquete se encapsula dentro de un paquete IPv4. Este es enviado a través de los routers intermedios hasta que llegan al otro nodo IPv6, el cual extrae el paquete IPv6 del payload del paquete IPv4. Para identificarlo, observa el valor en el campo del número de protocolo