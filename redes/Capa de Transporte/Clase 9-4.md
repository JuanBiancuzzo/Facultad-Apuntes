---
dia: 2024-04-14
materia: redes
capitulo: 3
---
### Definición
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


