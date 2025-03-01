---
dia: 2024-03-19
aliases:
  - UDP
tags:
  - carrera/ingeniería-en-informática/redes/Capa-de-Transporte
  - nota/facultad
  - investigación/protocolos/protocolo-de-internet
  - carrera/ingeniería-electrónica/redes/Capa-de-Transporte
  - investigación/networking/Protocolos
  - investigación/ciencias-de-la-computación/Networking/Protocolos
---
# Definición
---
Es un [[Protocolo|protocolo]] de [[Capa de transporte|capa de transporte]] que en general se usa para aplicaciones de tiempo real
* Aplicaciones sensibles a la latencia
* Permite perdida de paquetes
* Los que se mande audio (específicamente voz) que no agrega overhead no deseada

## Estructura
---
Los datos de la aplicación ocupan el dato field del segmento. El UDP header tiene únicamente cuatro campos

```
  0      7 8     15 16    23 24    31
 +--------+--------+--------+--------+
 |     Source      |   Destination   |
 |      Port       |      Port       |
 +--------+--------+--------+--------+
 |                 |                 |
 |     Length      |    Checksum     |
 +--------+--------+--------+--------+
 |
 |          data octets ...
 +---------------- ...
```

Los primeros dos son las direcciones y puerto de origen, y destino. Luego, sigue el length field el cual tiene el largo explícito del segmento. Este es importante, ya que puede variar entre un segmento y otro. El último campo, [[Checksumming method|checksum]], es utilizado para verificar si hubo algún error durante el envío del segmento

## Beneficios
---
Hay múltiples razones por las cuales una [[Aplicación|aplicación]] puede preferir este protocolo por sobre el método [[Protocolo de entrega confiable|confiable]] [[Transmission Control Protocol|TCP]]
* Control fino de la información que se envía y cuando se envía
	* En UDP, tan pronto como el [[Proceso|proceso de aplicación]] pasa la información a UDP, este crea un [[Paquete|segmento]] y lo envía a través de la [[Red|red]]. Por el otro lado, TCP puede retrasar el envió debido a su [[Control de congestión|mecanismo de control de congestión]]. Las aplicaciones de tiempo real utilizan UDP, ya que pueden aceptar cierto grado de pérdida de información
* Comunicación sin establecer una conexión
	* TCP utiliza un [[Transmission Control Protocol#Three-Way Handshake|three-way handshake]] antes de empezar a transferir información, por lo que puede generar [[Delay in packet switches|delay]] adicional en el envió de información
* Comunicación sin el estado de la conexión
	* TCP mantiene un estado de la conexión en los [[Host|hosts]], incluye buffers, y una numerosa cantidad de parámetros, por lo que puede ser más pesada que la utilización de un protocolo minimalista como UDP
* Pequeño header overhead
	* El segmento TCP tiene $20$ bytes de header, a diferencia del segmento UDP, que contiene únicamente $8$ bytes

Existen múltiples razones por las cuales una aplicación preferiría utilizar UDP, en especial aquellas aplicaciones de multimedia. Aunque es común, la utilización de UDP es controversial y a que no contiene un mecanismo de control de congestión

Cuando la tasa de pérdida de paquetes es baja, y con algunas organizaciones bloqueando el tráfico UDP por razones de seguridad, el protocolo TCP es cada vez más atractivo para el transporte de streaming media

## Socket programming 
---
Para poder utilizar UDP, debemos añadir la [[Internet Protocol Address|dirección]] y el puerto de destino al paquete antes de enviarlo a través del [[Socket|socket]]. Este viaje a través de la red y llegará a destino sin ningún tipo de seguridad. Cuando este llega a destino, este inspeccionará sus contenidos y tomará la acción correcta

Cuando se crea un socket, se asocia a un identificador conocido como port number, Al enviar un [[Paquete|paquete]], la dirección y el puerto del emisor también será aclarada en el mismo. Esto permite al receptor del paquete poder comunicarse con el emisor