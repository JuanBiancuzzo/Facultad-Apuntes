---
dia: 2024-08-18
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
  - carrera/ingeniería-en-informática/redes/Capa-de-Red
  - investigación/ciencias-de-la-computación/Networking/Protocolos
  - investigación/networking/Protocolos
  - investigación/protocolos/protocolo-de-internet
  - nota/facultad
  - nota/investigacion
aliases:
  - PDU
---
# Definición
---
Este [[Protocolo|protocolo]] define $7$ tipos de mensajes

* Get Request, Get Next Request, y Get Bulk Request
    * Son utilizados por el [[Servidor|servidor]] para consultar uno o más [[Management information base|objetos MIB]] al dispositivo. Estos difieren en la granularidad de las consultas. El primero puede consultar uno o más objetos, el segundo consulta el siguiente objeto en una lista, y el último consulta grandes cantidades de información, por ejemplo de una gran tabla
* Set Request
    * Es utilizado por un servidor para establecer uno o más valores del dispositivo
* Inform Request
     * Es utilizado por el servidor para notificar otro servidor información MIB
* Response PDU
    * Es típicamente utilizado por el dispositivo en respuesta a una consulta del servidor.
* Trap Message
    * Es utilizado para notificar al servidor de algún evento excepcional

Usualmente, el protocolo es implementado a través de [[User Datagram Protocol|UDP]]. Hay un campo de ID utilizado por el servidor para detectar consultas o respuestas perdidas. No hay ningún procedimiento de reenvío implementado, o siquiera si debe realizarse en primer lugar

El protocolo evolucionó a tres versiones
 * SNMPv1
 * SNMPv2
 * SNMPv3
 
 Se puede pensar a la tercera versión como una versión con más capacidades de seguridad y administración