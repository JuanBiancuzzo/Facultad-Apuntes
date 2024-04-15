---
dia: 2024-04-14
materia: redes
capitulo: 3
---
### Definición
---
QUIC # datazo
* app sobre udp creada por google que usa con sus programas
* Es de la capa de transporte aunque use una, y no se considera que este en la capa de aplicación, a pesar que este sobre ella
* No crea una capa de transporte nueva porque necesita que el sistema operativo lo ejecute, por lo que necesita una actualización de los sistemas operativos de los usuarios que puede ser muy lento

#### TCP
---
* Segmentos (equivalente de datagramas para udp)
	* Segment number (SN) empiezan en un número aleatorio
		* Se usa la mitad del espacio de valores posibles
		* Si se tiene 8 bits para enviar el SN (256 valores) entonces solo se puede usar los primeros 7 bits
	* Confirmación (ACK) devuelve SN + tamaño del payload/1 (a veces es solo 1, para pedir el siguiente)
	* Son simétricos, porque no se puede diferenciar quien estableció la conexión después de haberla establecido
* Timeout
	* 
* Transmisión confiable
	* 

Estado
* Número de recepción o del ack -> Nr
* Número de segmento -> Ns

MSS (Maximum segment size)
* Se separa el payload en varios paquetes para que entren en el MSS porque no se puede mandar más que esa cantidad

* Siempre que no se recibe un ACK antes del RTO, se reenvia el mensaje
	* Puede ser que se haya perdido el mensaje o el ACK

![[Clase 22-3#Tipos de flujo]]

* Se puede aceptar que falte un ACK, por ejemplo si se envía 5 paquetes, y se envía un ACK por el último paquete y entonces validando los anteriores 4
	* Se intenta mandar varios por si alguno se pierde
	* Se puede aceptar un ACK perdido si hay uno de un paquete posterior que lo valide

* Si se repite el ACK, le esta indicando al que lo recibe, que falta un dato en el medio
	* Ns = 1, Nr = 1 -> 
	* <- Ns = 0, Nr = 2
	* Ns = 2, Nr = 1 ->
	* <- Ns = 0, Nr = 3
	* Ns = 3, Nr = 1 -> x
		* y no llega
	* Ns = 4, Nr = 1 -> 
	* <- Ns = 0, Nr = 3 
		* confirma que no le llego el anterior
	* Ns = 5, Nr = 1 ->
	* <- Ns = 0, Nr = 3 
		* confirma que no le llego el paquete 3
		* Al recibir un segundo ACK repetido, se podría entender que se perdió
		* También puede ser que se adelantó el 4 y 5
	* Ns = 6, Nr = 1 ->
	* <- Ns = 0, Nr = 3 
		* confirma que no le llego el paquete 3
		* Al recibir un tercer ACK repetido, se podría entender que se perdió
			* TCP en este caso reenvía el Ns = 3, Nr = 1
		* También puede ser que se adelantó el 4, 5 y 6
	* Ns = 3, Nr = 1 ->
	* <- Ns = 0, Nr = 7 
		* Porque ya recibiste hasta el 6 y por lo tanto Nr = 6 + 1

RTO
* Usa el RRT (que se calcula cuando se envía un paquete y recibe un ACK de ese paquete)
* El $T$ es una medida del valor esperado (Esperanza) $$ T_{i} = RTT_i \cdot \alpha + T_{i - 1} \cdot (1 - \alpha) $$
	* En general se usa $\alpha = \frac{1}{8} = 0.125$
* Para calcular la varianza se calcula $$ DT_i = | RTT_i - T_i | \cdot \beta + DT_{i - 1} \cdot (1 - \beta) $$
	* En general se usa $\beta = \frac{1}{4} = 0.25$
* Para calcular RTO $$ RTO = T_i + 4 ~ DT_i $$
* Estamos suponiendo que la red esta regido por un [[Proceso puntual de Poisson]], aunque realmente no lo sea

Ventana de transmisión
* Depende del RTT, Throughput, MSS, ventana de congestion
* W = Min ( ventana de recepción (rwind)  y ventaja de congestión (cwind))
	* rwind es un múltiplo de MSS del otro extremo
	* si es 1 MSS, fuerza a un stop & wait, porque solo se puede enviar un solo segmento
* Es una forma de control de flujo
* RENO (asi se llama el método que mencionamos abajo) con fast recovery y fast retransmisión es la forma actual que usa TCP
	* Fast recovery, después de $n$ ACK repetidos, agrega $n$ paquetes, es decir $Cwind_i = \frac{Cwind_{i - 1}}{2} + n$ y después vuelve al $\frac{Cwind_{i - 1}}{2}$
* Esto permite un uso equitativo de la red
	* QUIC demostró que si la mantenía a pesar que crece más rápido después de la perdida de un paquete

Ventana de congestión
* Cwind = 1 MSS
* Si (Cwind < SSThes)
	* Estamos en slow start
	* Por cada ACK que se recibe confirmando que se recibió todos los paquetes que se envió, duplica Cwind $Cwind_i = 2 ~ Cwind_{i-1}$
* Si (Cwind >= SSThes)
	* Estamos en congestion avoidance
	* Para cada ACK que se recibe confirmando que se recibió todos los paquetes que se envió, se aumenta linealmente (agregándole 1 al Cwind) $Cwind_i = Cwind_{i-1} + 1$

En caso de RTO 
* Cwind = 0
* SSThes = 2 (2 MSS)
* Por un RTT esta en slow start, pero después esta en congestion avoidance

SSThes (slow start threshold)
* Se inicializa en el valor más grande posible 
* tiene 16 bit por ende en $65535$
* Cuando aparece 3 ACK repetidos (TCP supone que ya para este punto se perdió un paquete) por lo que se divide a la mitad el Cwind, seteo SSThes = Cwind (cuando ya esta divido por 2) $Cwind_i = \frac{Cwind_{i - 1}}{2} = SSThes$
	* Se entra en Congestion avoidance


Establecer conexión
* 3 way handshake
	* General
		* Syn, también manda su seq num, win, len y mss
		* Syn, Ack, también manda su seq num, win, len y mss
		* Ack
	* Ns = 3000 (cliente)
	* Ns = 6 (servidor)
	* Ns = 3000 ->
		* Sin payload
		* Sin ACK
		* SIK = 1
		* Envía MSS
	* <- Ns = 6, Nr = 3001 (el servidor setea su Nr)
		* Sin payload
		* Cuando el cliente recibe este paquete, ya asume que ya se estableció la conexión
		* SIK =  1
		* Envía MSS
	* Ns = 3000, Nr = 7 -> (el cliente setea su Nr)
		* Ya puede tener payload 
			* depende de la implementación
			* Si tiene payload, si un router esta congestionado es más probable que se dropee y por lo tanto se pone en una situación difícil, por lo que en general no se manda payload en este paquete
				* La situación difícil es que el cliente piensa que se estableció la conexión, pero el servidor no
		* Cuando el servidor recibe este paquete, ya asume que ya se estableció la conexión
		* SIK = 0
* En el caso que ambos envían un pedido de conexión al mismo tiempo, y en ese caso se requiere 4 paquetes

Establecer desconexión
* FIN -> 
	* El que envía el paquete FIN, ya no envía más datos
* <- ACK
* <- Datos
* <- FIN
	* El que envío el paquete FIN originalmente, entiende que ya terminó la conexión
* ACK ->
	* El que lo recibe ya sabe que se terminó la conexión

##### Estructura TCP
---
* Flags
	* FIN
		* Para establecer la desconexión
	* SIK
		* Para establecer la conexión
	* RST
		* Es una forma de finalizar de forma extrema, donde se espera que el que lo envía no tiene tiempo para finalizar de forma correcta, como apagar la compu de forma forzosa 
	* URG
	* ACK
		* Para avisar que tiene información en el campo de Acknowledgment number
	* PSH
		* Si rwind recibido es 0, se envía (después de un tiempo sin recibir ningún paquete) un PSH = 1, para que envía de nuevo rwind (puede ser 0 todavía o positivo)

* Campo options se puede usar para mandar el MSS
* Campo Data es hasta de $2 GB$ 