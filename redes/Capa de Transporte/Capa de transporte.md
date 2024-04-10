---
dia: 2024-03-22
materia: redes
capitulo: 3
---
### Definición
---

### Clase 22/3
---
La capa de transporte permite a las aplicaciones comunicarse
* [[Multiplexar]]
	* Mandar todos los mensajes al mismo socket 
* [[Demultiplexar]] 
	* Agarrar todos los mensajes del socket y mandarlos a sus correspondientes procesos
esto permite tener varias comunicaciones por un mismo medio (cable o aire)

El transporte en internet es de "best effort" (intenta lo mejor que pueda para que llegue la información de un lugar a otro)
* Puede no llegar
* Puede llegar desordenada
* Puede llegar duplicados

Se intenta que los protocolos sean retrocompatibles, o lo más rectrocompatible posible
* Por lo tanto es la idea más simple posible ya que necesita correr en todos lados


Best effort: Es una propiedad heredada de la [[Capa de red]]
* Facilita en diseño de la red
	* Equipos más simples
	* Protocolos menos complejos
* Hizo crecer a internet, dominando la tecnología de redes de comunicaciones

Proporciona: multiplexado de las comunicaciones, y verificación de errores mínima

Puede proveer
* Confiabilidad de las comunicaciones
	* Que los paquetes llegue y en orden
	* Sin errores
	* Solo una única vez (sin duplicado)
* Control de flujo
	* En el extremo que recibe, se controla cuantos paquetes le llegan (pedir que frene si no se puede procesar a tiempo)
* Seguridad
	* Privacidad de la información
	* Estar seguro que nadie modificó la información enviada
	* Autentificación de extremos
* Control de congestión
	* Cuando la red tiene demasiados paquetes (congestionado) regular cuantos paquetes envía

Comando less
* Te deja controlar la salida 

netstat -an (recomendación usar `| less` al final)
* -a all
* -n que no resuelva los dns
Avisa que conexiones están abiertas

| Proto     | Recv-Q            | Send-Q           | Local Address   | Foreign Address                    | State                                                 |
| --------- | ----------------- | ---------------- | --------------- | ---------------------------------- | ----------------------------------------------------- |
| Protocolo | Cola de recibidos | Cola de enviados | dirección local | dirección a la que se conecta      | Estado de la conección                                |
| tcp4      | número            | número           | ipv4.puerto     | ipv4.puerto                        | ESTABLISHED/ LISTEN / CLOSED / TIME_WAIT / CLOSE_WAIT |
| tcp6      | número            | número           | \*.puerto       | \*.\*                              | ESTABLISHED/ LISTEN / CLOSED / TIME_WAIT / CLOSE_WAIT |
| tcp6      |                   |                  | ^Cualquier ip   | ^ cualquier ip, ^ cualquier puerto |                                                       |
| tcp6      |                   |                  | ipv6.puerto     | ipv6.puerto                        |                                                       |
| tcp46     | acepta ambas ip   |                  |                 |                                    |                                                       |
| udp4      | "                 | "                | "               | "                                  | "                                                     |
| udp6      | "                 | "                | "               | "                                  | "                                                     |
| udp46     | "                 | "                | "               | "                                  | "                                                     |


Wireshark

| No     | Time                          | Source   | Destination | Protocolo                | Length | Info                |
| ------ | ----------------------------- | -------- | ----------- | ------------------------ | ------ | ------------------- |
| número | tiempo desde inicio de la app | ip local | ip destino  | protocolo / aplicaciones | largo  | información general |

Se puede seleccionar una de las entries y aparece
* Puerto de Source y destino
* entre otros

QUIC (Quick UDP Internet Connections)
* Hecho por google

Puerto:
* 21: ftp -> file transfer proto
* 22 ssh
* 25 smtp
* 80 http
* 113 ident
* 143 imap segura
* 443 https
* 587 submission

Se puede poner en el mismo puerto diferentes protocolos 
* Tener cuidado con que algunos protocolos estan implementados sobre otros, por lo que no se podría usar si ya esta el caso base
	* Ej: QUIC esta basado sobre UDP por lo que si ya esta usado el puerto con UDP no se podría poner QUIC


nmap -v cnet.fi.uba.ar
* Cuidado hacer con un servidor propio
* Analiza q puertos están abiertos
* Se puede ver en toda una red (especificando...)

#### UDP
---
RFC -> reference for comment (?)

User Datagram Header Format - RFC 768

| 0 -- 15 bit       | 16 -- 31 bit        |
| ----------------- | ------------------- |
| Source port       | Destination port    |
| Length            | Checksum            |
| \|--- Data octets | -----------------\| |

$2^{16} = 65.536$ -> cantidad de puertos
* 0 -- 1024 puertos reservados
* /etc/services -> puerto: servicio
largo máximo -> 64 kbytes = $2^{10} \cdot 2^6 = 2^{10} \cdot 64$

* Se usa para aplicaciones de tiempo real
	* Aplicaciones sensibles a la latencia
	* Permite perdida de paquetes
	* Los que se mande audio (especificamente voz) que 
* Agrega overhead no deseada

#### Principios de las comunicaciones confiables
---
* Conectadas vs no-conectadas
	* Conectada: antes de empezar se necesita un handshake
	* No conectados: aceptar la info apenas aparezca, no necesita handshake
* Asegurar la entrada
* Asegurar el orden
* Asegurar la integridad
* Asegurar no duplicados
* Desempeño
	* Necesitamos que la info llegue rápido
	* Usar de forma equitativa pero optimizando la cantidad de paquetes que se envían
		* Se aumenta la tasa de transmisión hasta que se detecta que se congestiona y se empieza a bajar
* Control de flujo
* Compartir el canal equitativamente
	* Si hay mucha congestión se pierde muchos paquetes
	* Se intenta censar si se pierde o no info
		* Si se pierde muchos paquetes se vaya la tasa de transmisión
		* Se espera que los demás también bajen su tasa de transmisión, para que todos puedan tener equitativamente parte del canal

##### Tipos de flujo
---
* Stop & Wait
	* Forma
		* Mando paquete
		* Se recibe y devuelve una confirmación
		* Se espera recibir la confirmación (parado)
	* Bajo desempeño
		* Se esta haciendo nada hasta que no se recibe el acknowledge
* Continuo
	* Forma
		* Tiene una ventana para enviar, se enumera los paquetes
		* y se espera que llegue las confirmaciones (y mover la ventana)
	* Se espera q cuando se envia el último paquete se recibe la confirmación del primero de la ventana -> caso ideal
	* El largo de la ventana es la mitad de los número de secuencia (número máximo de numeración)
	* Estrategias
		* Go-Back-N
			* Si se pierde uno, se reenvía el que se perdió y los $n$ siguientes 
		* Selective Repeat
			* Si se envían solo los que se perdierón

#### Resumen
---
* Checksum ó CRC (Cyclical Redundancy Check) ambos son métodos de verificación de integridad
* Temporizador (timer)
	* Para detectar paquetes perdidos (puede haber duplicados)
	* Se puede esperar RTT + algo más que depende el tráfico y congestionamiento
* Número de secuencia
	* Para mantener un flujo de paquetes y detectar los perdidos
* Acuse de recibo (ACK): 
	* para avisar qué paquetes se han recibido
* Acuse negativo de recibo (NACK)
	* para avisar que le paquete llegó corrupto
* Ventana deslizante
	* para implementar el caso continuo mencionado antes


El flujo se identifica con los ip del origen y del destino con sus correspondientes puertos
* Para identificarlo tienen que ser todos iguales

### Clase 26/3
---
### Sockets
---
* que es un socket
	* es una interfaz entre las aplicaciones y la red
	* interfaz de programación
	* identificador único, file descript
* para que se usa un socket
	* puerta de entrada a la red
* hay distintos tipos de sockets
	* tcp
	* udp
* Un proceso puede tener más de un socket
	* se usa mediante

sockets tcp

| Servidor                   |                                                       | Cliente  |
| -------------------------- | ----------------------------------------------------- | -------- |
| Socket                     |                                                       |          |
| bindea (puerto con una ip) |                                                       |          |
| listen                     |                                                       |          |
| acepta                     |                                                       | socket   |
| \|   ------                | <-- se establece una conección three way handshake -> | connecta |
| v-- recv                   | <-   cliente manda info ---                           | send     |
| send  --^                  | -- enviando data al cliente -->                       | recv     |
| recv                       | <- cliente manda mensaje de close                     | close    |
| close                      |                                                       |          |

sockets udp

| Servidor                   |              | Cliente                    |
| -------------------------- | ------------ | -------------------------- |
| Socket                     |              | socket                     |
| bindea (puerto con una ip) |              | bindea (puerto con una ip) |
| recvfrom                   |              | V                          |
| (wait for data)            |              | V                          |
| V <--                      | <-- request  | sendto                     |
| (procesar request)         |              | V                          |
| sendto                     | response --> | recvfrom                   |

### Clase 5/4
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

![[Capa de transporte#Tipos de flujo]]

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

### Clase 9/4 - capa de transporte
---
Objetivo 
* comunicar procesos entre procesos de diferentes host

Desafíos
* Medio no confiable

Donde
* Solo se implementa en los host
	* Aunque como un router no deberían en general implementarlo como pueden tener un SO y sus aplicaciones, lo terminan implementando

#### UDP y TCP
---
* UDP:
	* servicios
		* demultiplexación y multiplexación
		* Control de integridad
			* Checksum
	* Header
		* Source port
		* Destination port
		* Length
			* Del payload
			* De tamaño variable
		* Checksum
* TCP
	* Servicios
		* demultiplexación y multiplexación
		* Control de integridad
		* RDT: Reliable data transfer
			* Que lleguen
			* Que lleguen en orden
			* Sin duplicados
			* Lo logra
				* Control de flujo
					* Controlar cuantos paquetes enviar dependiendo de cuanto espacio tiene, el receptos, para aceptar
				* Seq numb + ACKs
					* No necesariamente manda un ACK para cada paquete
					* Es acumulativo por lo que al mandar uno, se asegura que llegó todo lo anterior
				* Timers
		* Control de congestión
			* Evitar que se congestione la red
			* Intenta tener una parte igual de bandwidth a todos los otros
			* Se le dice justo

* lsof -i:3030 o nmap
	* Pregunta si ese puerto esta siendo usado

#### API
---
* Bind -> Reservar un puerto y un puerto
* Dial (conectar) ->Intenta crear una conexión
* Listen -> Esperar a que lleguen conexiones
* Accept -> Un cliente hace una conexión se acepta y se establece la conexión
* Read (recibir) -> Recibe una cadena de bytes
* Write (mandar) -> Manda una cadena de bytes
* Close -> Cerrar la conexión

### SYN Flood
---
* Ataque usando el handshake de TCP
* Esto es un DoS
	* El atacante busca hacer que un determinado servicio (por lo general en internet) no esté disponible para un usuario legítimo
	* Es un tipo de ataque de denegación de servicios distribuidos (DDoS) 
* Esto ocurre en los mensajes de SYN en el 3 way handshake
	* Cuando un cliente manda un SYN, el servidor reserva memoria y recursos de esa conexión
	* En la respuesta SYN + ACK el servidor puede reenviarte una nuevo puerto donde conectarte reservando esos recursos
	* De esta forma constantemente el servidor reserva recursos, por lo que no tiene recursos para clientes legítimos
* Forma de hacerlo
	* Ataque directo (una sola compu)
		* Se mandan muchos paquetes SYN desde una misma compu
		* Solución
			* Podemos dar un máximo de conexiones por un mismo ip y bloqueamos si se excede
			* Análisis de que hacer
	* Ataque con paquetes falsificados
		* Falsifica la dirección IP de cada paquete SYN que se envía al servidor
		* Solución
			* Se pueden hacer trace de los paquetes, e identificar los patrones de donde vienen los ip y ver que paquetes son legítimos y los que no
			* No es fácil y a mano (aprox)
	* Ataque distribuido (DDoS)
		* Utiliza una red de bots u otras computadoras para realizar el ataque
		* Solución
			* No podemos hacer trace, y lo único que podemos identificar es una cantidad de paquetes SYN grande 
			  
	* Resolución general: SYN cookies
		* Son una forma en particular de elegir los seq numbers
		* Para construir necesitamos
			* t = Un Timestamp
			* m = Encoded MSS
			* s = F(ip_serv, num_puerto_serv, ip_cliente, num_puerto_cliente, t)
				* F solo conoce el servidor
				* F es una función secreta de cifrado
		* Seq num (SVsqN)
			* Primero 5 bits: t mod 32
			* Próximos 3 bits: un valor codificado representado m
			* Finales 24 bit: s
		* Toda la información necesaria para reservar va a estar en ACK del cliente
			* El ACK del cliente es el SVsqN + 1
			* El servidor hace $F^{-1}$(SvsqN) y puede comprobar que sea valido el cliente y sabe que recursos reservar
			* Recién ahí se reserva recursos en el servidor y también en el cliente, y eso es lo importante
		* También el cliente tiene que reservar recursos
			* Entonces no puede escalar tanto y le cuesta a ambos
		* Desventajas
			* No se puede reenviar el el SYN ACK porque no reservó recursos
				* El cliente quedará esperando suponiendo que la conexión y ase estableció y el servidor no tiene nada para mandar
				* No es mucho problema para el cliente porque reintenta hacer la conexión si pasa un tiempo, y el servidor simplemente espera


