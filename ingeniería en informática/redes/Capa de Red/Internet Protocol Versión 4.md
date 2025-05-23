---
dia: 2024-06-14
aliases:
  - IPv4
  - TTL
tags:
  - carrera/ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
  - investigación/protocolos/protocolo-de-internet
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
  - investigación/networking/Protocolos
  - investigación/ciencias-de-la-computación/Networking/Protocolos
---
# Definición
---
Es una tecnología [[Internet Protocol Address|IP]], cuya versión es la 4

## Formatos
---
El formato que tiene IPv4

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version|  IHL  |Type of Service|          Total Length         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Identification        |Flags|      Fragment Offset    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Time to Live |    Protocol   |         Header Checksum       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       Source Address                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Destination Address                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

Los campos clave de un [[Paquete|datagrama]] son
* Version number
	* Especifican la versión del [[Internet Protocol Address|protocolo IP]] del datagrama
* Total length
	* Debido a que el datagrama puede contener un número variable de opciones, este campo determina dónde comienza el payload
* Type of service
	* Permiten distinguir los paquetes según el tipo de servicio que ofrecen, permitiendo a las redes detectar paquetes de tiempo real del resto
* Identifier, flags, fragmentation offset
	* Estos tres campos son utilizados en el conocido [[Fragmentación de Internet Protocol|fragmentación de IP]] 
* Time-to-live ^b40fdb
	* Se usa para indicar cuándo tiempo podrá circular un datagrama en la red, este número es decrementado por cada [[Router|router]] que atraviesa el datagrama
* Protocol
	* Este campo es típicamente utilizado una vez el paquete llega a destino, para determinar que protocolo de [[Capa de transporte|capa de transporte]] específico se está utilizando
* Header checksum ^93d41c
	* Permite al router detectar errores a nivel de bit dentro del paquete. El segmento es tratado como un arreglo de números de dos bytes y sumándolos con [[Complemento a la base|complemento a uno]]. Este valor deberá ser recalculado y actualizado luego de cada router, ya que usualmente se actualizan valores (como el TTL)
* Source y destination IP addresses
	* Cuando una fuente crea un datagrama, inserta la dirección de destino y de origen para que el internet conduzca el paquete correctamente
* Options ^d6224c
	* Se utilizan raramente y permiten que el protocolo IP se extienda
* Data
	* Este campo contiene el segmento de cada de transporte que debe ser entregado a destino

## Addressing 
---
Un host típicamente tiene un único enlace para conectarse a la red. Cuando el protocolo de red del host quiere enviar un [[Paquete|datagrama]], lo hace a través de este link. La frontera entre el host y el enlace es conocida como [[Router interface|interfaz]]

## Broadcast
---
La IP de [[Topología de comunicación#^broadcast|broadcast]] `255.255.255.255` es utilizada cuando un host quiere enviar un mensaje a todos los hosts de la misma [[Subnetting|subnet]]