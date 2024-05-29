---
dia: 2024-03-11
materia: redes
capitulo: 3
aliases:
  - TCP
---
### Definición
---
Es un [[Protocolo|protocolo]] de [[Capa de transporte|capa de transporte]] que implementa un [[Protocolo de entrega confiable|protocolo de entrega confiable]]

Para proveer una entrega confiable, utiliza
* Un [[Paquete|segmento]] ACK para indicarle al otro extremo de la conexión que recibió correctamente el segmento
* Un [[Transmission Control Protocol#Three-Way Handshake|handshake]]
* Una [[Transmission Control Protocol#Secuencia de cierre|secuencia de cierre]]

#### Estructura del protocolo
---
El protocolo TCP tiene la siguiente estructura

``` 
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 |     Puerto de origen          |      Puerto de destino        |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 |                     Número de secuencia                       |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 |                   Número de acknowledgment                    |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 | Posic |           |U|A|P|R|S|F|                               |
 | de los| Reservado |R|C|S|S|Y|I|           Ventana             |
 | datos |           |G|K|H|T|N|N|                               |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 |            Checksum           |        Puntero urgente        |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 |                    Opciones                   |    Relleno    |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 |                            Datos                              |
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```


#### Parámetros del protocolo
---
El protocolo TCP tiene los siguientes parámetros
* `size`: Que indica el tamaño del archivo que se debe enviar
* `MSS`: Es el tamaño máximo de los segmentos. Se usa este valor como unidad para el análisis
* `LW`: Es el valor que toma la ventana de congestión luego de una perdida, al volver a la etapa de slow start. En general toma un valor de `1 MSS`.
* `IW`: Es el valor que toma la ventana de congestión al inicio del protocolo
* `RTO`: Es el tiempo establecido para los timer interrupts del ACK de los paquetes
* `ssthresh`: Es el valor en el que el protocolo pasa a la etapa de congestion avoidance
* `cwnd`: Es el valor de la ventana de congestión. Representa la cantidad de paquetes que puede a lo sumo tener en vuelo
* `rwnd`: Es el valor de la ventana de recepción del host del otro lado de la conexión. Representa la cantidad de paquetes que puede a lo sumo tener en vuelo
* `version`: Puede ser [[Tahoe|Tahoe]] o [[Reno|Reno]]



#### Three-Way Handshake
---

#### Secuencia de cierre
---