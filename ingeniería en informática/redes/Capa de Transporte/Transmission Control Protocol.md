---
dia: 2024-03-11
aliases:
  - TCP
tags:
  - carrera/ingeniería-en-informática/redes/Capa-de-Transporte
  - nota/facultad
  - carrera/ingeniería-en-informática/redes/Capa-Física-Inalámbrica
  - investigación/protocolos/protocolo-de-internet
  - carrera/ingeniería-electrónica/redes/Capa-de-Transporte
  - carrera/ingeniería-electrónica/redes/Capa-Física-Inalámbrica
  - investigación/networking/Protocolos
  - investigación/ciencias-de-la-computación/Networking/Protocolos
---
# Definición
---
Es un [[Protocolo|protocolo]] de [[Capa de transporte|capa de transporte]] que implementa un [[Protocolo de entrega confiable|protocolo de entrega confiable]]

Para proveer una [[Protocolo de entrega confiable|entrega confiable]], utiliza
* Un [[Paquete|segmento]] [[Protocolo de entrega confiable|ACK]] para indicarle al otro extremo de la conexión que recibió correctamente el segmento
* Un [[Transmission Control Protocol#Three-Way Handshake|handshake]]
* Una [[Transmission Control Protocol#Secuencia de cierre|secuencia de cierre]]

Además suma un [[Control de congestión de Transmission Control Protocol|control de congestión]]

## Estructura del protocolo
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

Como el [[User Datagram Protocol|protocolo UDP]], el header de TCP contiene los puertos de origen y destino, y un campo de [[Checksumming method|checksum]]. Además, contiene los siguientes campos
* Número de secuencia
* Número de acknowledgment
* Campo de receive window
* Campo de header length 
* Campos opcionales
* Campo de flags
	* [[Protocolo de entrega confiable|ACK]] bit
		* Indica que el valor almacenado en el campo de acknowledgment es válido
	* RST, SYN, FIN bit
		* Utilizamos en la [[Transmission Control Protocol#Three-Way Handshake|secuencia de inicio]] y la [[Transmission Control Protocol#Secuencia de cierre|secuencia de cierre]] de la conexión 
	* CWR, ECE bit
		* Utilizados en las [[Explicit congestion notification|notificaciones explícitas de congestión]]
	* PSH bit
		* Indica que el receptor de enviar los datos de la capa de arriba de forma inmediata
	* URG bit
		* Indica que hay información en el [[Paquete|segmento]] que es marcada como segmento. La dirección del último [[Información#Bit|bit de información]] urgente es indicado en el urgent data pointer field

## Parámetros del protocolo
---
El protocolo TCP tiene los siguientes parámetros
* `size`: Que indica el tamaño del archivo que se debe enviar
* `MSS (Maximum segment size)`: Es el tamaño máximo de los segmentos. Se usa este valor como unidad para el análisis
* `LW`: Es el valor que toma la ventana de congestión luego de una perdida, al volver a la etapa de slow start. En general toma un valor de `1 MSS`.
* `IW`: Es el valor que toma la ventana de congestión al inicio del protocolo
* `RTO`: Es el tiempo establecido para los timer interrupts del ACK de los paquetes
* `ssthresh`: Es el valor en el que el protocolo pasa a la etapa de congestion avoidance
* `cwnd`: Es el valor de la ventana de congestión. Representa la cantidad de paquetes que puede a lo sumo tener en vuelo
* `rwnd`: Es el valor de la ventana de recepción del host del otro lado de la conexión. Representa la cantidad de paquetes que puede a lo sumo tener en vuelo
* `version`: Puede ser [[Tahoe|Tahoe]] o [[Reno|Reno]]

## Entrega confiable
---
TCP entonces crea un servicio confiable de transferencia de datos encima del [[Servicio de best-effort delivery|servicio best-effort]] del [[Internet Protocol Address|IP]]

Si bien conceptualmente podemos asumir la utilización de un timer por paquete, en la práctica esto es muy costoso, por lo que se suele utilizar un único timer de retransmisión para múltiples paquetes transmitidos no todavía confirmados

Usa alguno de los siguientes métodos para asegurar este servicio
* Retransmisión después de un [[Recovery time objective|timeout]]
* Duplicar el timeout por cada perdida, y reducirla cuando lleguen más rápido
* El uso de [[Fast Retransmit|fast retransmit]]
* El uso de [[Protocolo Go-Back-N|Go-Back N]]
* El uso de [[Protocolo Selective Repeat|Selective Repeat]]

## Three-Way Handshake
---
Debido a que se envían tres segmentos de información al establecer la conexión, se refiere usualmente como three-way handshake. Los primeros dos segmentos no contienen información de la aplicación, mientras que el último puede hacerlo

En el primer mensaje tiene la flag de SYN prendido, por eso se lo llama mensaje SYN, y también se manda el número de secuencia, el tamaño de la ventana, el MSS, entre otras cosas.

El recibe el segundo mensaje, el flag de SYN y de ACK están prendido, por eso se lo llama mensaje SYN ACK, y el receptor envía la información necesaria, los mencionados anteriormente 

El último mensaje de los tres, el flag de ACK está prendido, y este se llama mensaje ACK ACK

## Secuencia de cierre
---
Cualquiera de los dos [[Proceso|procesos]] puede elegir terminar la conexión, al ocurrir esto, se liberan los recursos utilizados en la misma
1. El emisor envía un close command, con el FIN bit prendido
2. El receptor lo recibe y envía un ACK para el segmento recibido
3. El receptor envía su propio segmento de cierre, con el Fin bit prendido
4. Finalmente, el cliente envía el ACK para el segmento de cierre y ambos hosts liberan los recursos utilizados

## Diagrama de estado del emisor
---
```tikz
\usetikzlibrary{shapes, shapes.geometric, arrows.meta, automata, positioning}

\begin{document} 
	\begin{tikzpicture}[
		shorten >=1pt,
		node distance=4cm,
		on grid,>={Stealth[round]},
		every state/.style={draw, ellipse},
		accepting/.style=accepting by arrow,
		scale=1.1, transform shape,
		ultra thick
	]
	
	\node[state] (closed)                                  {CLOSED};
	\node[state] (syn_sent)    [below right=of closed]     {SYN\_SENT};
	\node[state] (established) [below=of syn_sent]         {ESTABLISHED};
	\node[state] (fin_wait_1)  [below left=of established] {FIN\_WAIT\_1};
	\node[state] (fin_wait_2)  [above left=of fin_wait_1]  {FIN\_WAIT\_2};
	\node[state] (time_wait)   [above=of fin_wait_2]       {TIME\_WAIT};

	\path[->] (closed) edge[bend left]
			node[pos=0.3, above right=2pt] {Inicia la conexión}
			node[pos=0.8, right=2pt] {Enviar mensaje SYN}  
			(syn_sent)
		(syn_sent) edge
			node[align=center, right=2pt] {Recibe SYN ACK\\Envia ACK ACK}
			(established)
		(established) edge[bend left] 
			node[pos=0.3, right=2pt] {Envia FIN}
			node[pos=0.8, below right=2pt] {Se inicial el cierre} 
			(fin_wait_1)
		(fin_wait_1) edge[bend left]
			node[align=center, below left=2pt] {Recibe ACK\\No se envia nada}
			(fin_wait_2)
		(fin_wait_2) edge
			node[align=center, left=2pt] {Recibe FIN\\Envia ACK}
			(time_wait)
		(time_wait) edge[bend left]
			node[above left=2pt] {Espera 30 segundos}
			(closed);
	  
	\end{tikzpicture}
\end{document}
```

El último estado del cliente se utiliza para reenviar un ACK en caso de que este se haya perdido en la red

Cuando un cliente envía un SYN SEGMENT a una dirección y puerto en el que no hay ningún [[Socket|listening socket]], este le reenviará un segmento especial de reset con el RST bit prendido

## Diagrama de estado del receptor
---
```tikz
\usetikzlibrary{shapes, shapes.geometric, arrows.meta, automata, positioning}

\begin{document} 
	\begin{tikzpicture}[
		shorten >=1pt,
		node distance=4cm,
		on grid,>={Stealth[round]},
		every state/.style={draw, ellipse},
		accepting/.style=accepting by arrow,
		scale=1.1, transform shape,
		ultra thick
	]
	
	\node[state] (closed)                                  {CLOSED};
	\node[state] (listen)      [below right=of closed]     {LISTEN};
	\node[state] (syn_rcvd)    [below=of listen]           {SYN\_RCVD};
	\node[state] (established) [below left=of syn_rcvd]    {ESTABLISHED};
	\node[state] (close_wait)  [above left=of established] {CLOSE\_WAIT};
	\node[state] (last_ack)    [above=of close_wait]       {LAST\_ACK};

	\path[->] (closed) edge[bend left] 
			node[above right=2pt] {Se crea un listen socket}
			(listen)
		(listen) edge
			node[align=center, right=2pt] {Recibe SYN\\Envia SYN ACK}
			(syn_rcvd)
		(syn_rcvd) edge[bend left] 
			node[align=center, below right=2pt] {Recibe ACK\\No se envia nada} 
			(established)
		(established) edge[bend left]
			node[align=center, below left=2pt] {Recibe FIN\\Envia ACK}
			(close_wait)
		(close_wait) edge
			node[left=2pt] {Envia FIN}
			(last_ack)
		(last_ack) edge[bend left]
			node[align=center, above left=2pt] {Recibe ACK\\No se envia nada}
			(closed);
	  
	\end{tikzpicture}
\end{document}
```


## Control de flujo
---
Cuando una conexión TCP recibe información correcta y en secuencia, la coloca en el receive buffer. Si la aplicación es relativamente lenta en leer esta información, el receptor puede fácilmente causar un [[Overflow|overflow]] en el buffer de lectura. El servicio de [[Control de flujo|control de flujo]] elimina la posibilidad de que esto ocurra, provee un servicio de speed-matching para emparejar la velocidad de lectura con la velocidad de bajada. Este servicio el distinto al de [[Control de congestión|control de congestión]], ambos producen el mismo efecto, pero por razones distintas

Para implementar este mecanismo, un [[Host|host]] mantener la siguiente información
* `LastByteRead`
	* El número del último byte que fue leído por la aplicación
* `LastByteRcvd`
	* El número del último byte que fue recibido a través de la red
* `rwnd`
	* También conocida como receiver window. Definida a partir de las anteriores variables como el espacio libre en el buffer

El host agregará este último campo a los paquetes transferidos a través de la red, para comunicarle al otro host del estado actual del buffer. Este a su vez deberá mantener las siguientes variables
* `LastByteSend`
	* El número del último byte que fue enviado a través de [[Internet|internet]]
* `LastByteAck`
	* El número del último byte que fue confirmado por el host

A partir de estos dos valores, podremos calcular la cantidad de datos sin verificar que fueron enviados. El protocolo tratará de que esta cantidad nunca sea mayor al tamaño de la ventana del receptor

Para permitir que un host que únicamente recibe información le comunique al otro host su window, entonces este valor también se agregara a los mensajes de ACK

## Socket programming
---
El protocolo TCP, por otro lado, es orientado a conexiones. Antes de que dos [[Host|hosts]] pueden comunicarse entre sí, está la fase de handshake

Cuando se crea una conexión TCP, debe indicarse la dirección y el puerto de destino. De esta forma, para enviar información una vez creado el socket no es necesario indicar el destinatario 

Una vez creado el [[Socket|socket]], el cliente inicia un handshake de tres pasos y establece una conexión con el [[Servidor|servidor]]. Primero el cliente le envía un mensaje a un servidor, que contiene un listening socket esperando a establecer conexiones con los clientes. Este, al recibir el mensaje, creará una conexión TCP particular para este cliente

Desde el punto de vista de la aplicación, los sockets están directamente conectados a través de una tubería

## Impacto con redes inalámbricas
---
Si bien los protocolos de [[Capa de transporte|capa de transporte]] como TCP pueden operar en redes inalámbricas, experimentan diferencias en el rendimiento de las redes inalámbricas de las redes cableadas

Recordemos que la ventana de congestión de TCP disminuye cuando se pierden paquetes, esto se debe a que asume que la perdida ocurre debido a la congestión de la red, y no debido a un handoff o corrupción de bits. Cuando ocurre esto, no hay una razón real para disminuir la ventana de congestión

Existen tres tipos de enfoques distintos para lidiar con este problema

* Local recovery: Estos protocolos se encargan de recuperar los errores de bits donde ocurren. En estos enfoques, TCP no está al tanto de que los segmentos que atraviesan los paquetes son inalámbricos
* TCP sender awareness of wireless links: Otro enfoque es que TCP pueda distinguir entre estos enlaces y únicamente invocar [[Control de congestión|control de congestión]] cuando se pierda un paquete debido a la congestión
* Split-connection approaches: En estos enfoques, la conexión punto a punto entre un usuario móvil y otro punto se separa en dos conexiones de capa de transporte. Una desde el móvil hasta el wireless access point, y otra desde allí al otro end point.

Por otro lado, consideremos la movilidad desde la [[Capa de aplicación|capa de aplicación]]. Aquellas aplicaciones que operan sobre enlaces inalámbricos deben tratar el ancho de banda como un recurso escaso. Aunque la movilidad ofrece desafíos, ofrece la posibilidad de aplicaciones dependientes de la localización del contexto, como aplicaciones de navegabilidad