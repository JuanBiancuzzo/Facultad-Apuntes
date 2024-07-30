---
dia: 2024-06-03
aliases:
  - GBN
  - Sliding-window protocol
  - Protocolo de ventana desplizante
tags:
  - redes/Capa-de-Transporte
  - nota/facultad
---
### Definición
---
Este [[Protocolo|protocolo]] consiste en permitir que el remitente tenga un número máximo de $n$ [[Paquete|paquetes]] sin confirmación en el pipeline. Este número suele ser denominado window size, y el protocolo como sliding-window protocol. Este número es limitado debido a que el campo del header tiene un tamaño fijo

En [[Transmission Control Protocol|TCP]] tiene un [[Transmission Control Protocol#Estructura del protocolo|campo]] para el número de secuencia de $32$ bits, pero cuenta los bytes en el byte stream en lugar de los paquetes

Un GBN sender debe responder a tres tipos de eventos
* Invocation from above
	* Cuando se trata de enviar un paquete, el remitente debe primero verificar que la ventana no está completa, si no lo está entonces se actualizan los valores y se envía el paquete a través del canal subyacente
	  
	  Si la ventana está completa, usualmente se bufferea el paquete para enviarlo posteriormente. Si aún no hay paquetes enviándose, entonces se inicia el timer
* Receipt of an ACK
	* Cuando llega un [[Protocolo de entrega confiable|ACK]] del paquete con números de secuencia $n$, entonces se toma como un acknowledgment acumulativo, indicando que todos los paquetes hasta ese número de secuencia (incluido) fueron entregados correctamente
	  
	  En este punto se mueve la base de la ventana. Si no quedan paquetes por recibir, entonces se frena el timer
* A timeout event
	* Cuando ocurre un [[Recovery time objective|timeout]], entonces todos los paquetes que aún no fueron confirmados serán reenviados

Desde el lado del receptor, es simple. Si un paquete con número de secuencia $n$ es recibido correctamente y en orden, entonces este envía un ACK para el paquete $n$, y le entrega la porción de datos a la entrada superior. En otro caso, se envía un ACK con el último paquete recibido y se descarta la información

Como todos los datos deben ser entregados en orden, un receptor podría guardar los paquetes correctos que están fuera de orden, pero esto es innecesario, ya que en la implementación actual el remitente reenvía todos los mensajes a partir del que se perdió. Este enforque tiene la ventaja de ser simple, ya que el receptor no debe guardar los paquetes recibidos, únicamente el del último paquete recibido en orden

La implementación de este protocolo usualmente utiliza [[Event-based programming|event-based programming]], puesto que los distintos procedimientos son invocados según el resultado de distintos eventos asincrónicos

Tiene la desventaja de que en redes con mucho [[Delay in packet switches|delay]], puede llegar a retransmitirse un gran número de paquetes de forma innecesaria