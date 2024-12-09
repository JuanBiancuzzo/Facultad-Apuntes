---
dia: 2024-06-03
aliases:
  - SR
tags:
  - ingeniería-en-informática/redes/Capa-de-Transporte
  - nota/facultad
  - investigación/protocolos/protocolo-de-internet
  - ingeniería-electrónica/redes/Capa-de-Transporte
---
# Definición
---
Este [[Protocolo|protocolo]] consiste en repetir selectivamente únicamente aquellos [[Paquete|paquetes]] que se perdieron. Se utiliza una ventana de tamaño $n$ tanto para el receptor como para el remitente

Un receptor debe confirmar todos los paquetes que recibe ya sea en orden o no, aquellos paquetes fuera de orden deberán ser guardados para ser entregados a la capa superior en cuanto reciba los paquetes faltantes

Un SR sender debe responder a tres tipos de eventos
* Invocation from above
	* Cuando se trata de enviar un paquete, el remitente debe primero verificar que la ventana no está completa, si no lo está entonces se actualizan los valores y se envía el paquete a través del canal subyacente. Si la ventana está completa, usualmente se bufferea el paquete para enviarlo posteriormente
* Receipt of an ACK
	* Cuando llega un [[Protocolo de entrega confiable|ACK]] del paquete con número de secuencia $n$, entonces se marca el paquete como confirmado. Si el número del paquete coincide con la base, entonces esta se avanza hasta el siguiente paquete sin confirmación. Al moverse la ventana, se envía los paquetes que habían sido previamente guardados
* A timeout event
	* Cada paquete deberá tener su propio timer, por lo que el paquete correspondiente al evento de [[Recovery time objective|timeout]] será reenviado 

Si un RC receiver recibe un paquete que se encuentra dentro de su ventana, entonces se envía un ACK y se almacena (en caso de no haberlo recibido previamente). Si el número del paquete coincide con la base, entonces este paquete y los consecuentes (si ya fueron recibidos) se envían a la capa superior. La ventana se avanza hasta el primer número de secuencia que aún no fue recibido

Si el paquete recibido no pertenece a la ventana, entonces se genera un ACK aunque este paquete ya haya sido confirmado (y entregado a la capa superior). En cualquier otro caso, se ignora el paquete

Es importante notar que el remitente y el receptor no tendrán una vista idéntica de lo que fue recibido y lo que no. Las ventanas de cada uno no siempre coincidirán. Esta falta de sincronización tendrá importantes consecuencias cuando nos enfrentamos con el rango finito de números de secuencia. Para el receptor no hay forma de distinguir entre la retransmisión de un paquete y la original transmisión de un paquete (si sus números de secuencia coinciden). Para solucionar esto, se necesitará un tamaño de ventana de a lo sumo la mitad del espacio de los números de secuencia