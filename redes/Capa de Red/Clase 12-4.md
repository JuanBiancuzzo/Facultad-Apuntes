---
dia: 2024-03-11
materia: redes
capitulo: 4
---
### Definición
---
Generalidades de la capa de red
* Best effort
	* Se pueden perder
	* Pueden llegar duplicados
	* No hay obligación de establecer un único camino
* Nos sirve para
	* Ayuda a determinar la ruta correcta
* Hay diferentes modalidades?
	* Había otras redes de datos (que todas usaban paquetes), pero ahora se usa [[Modelo TCP IP|TCP/IP]]
* Qué es lo que la caracteriza?
	* Se determina según la ip de destino
	* Puede haber rutas por default

Dirección IP: @IP
* Red y host
	* Donde red determina una ubicación general que ayuda para cuando se esta lejos del destino
	* Donde host determina con precisión el lugar pero en general no se tiene en todos los routers y por lo tanto se usa únicamente cuando se esta cerca
	* Esto depende de donde estés en la [[Red|red]] se determina cuanto es red y cuanto es host
* IPv4
	* largo: 32bit
```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape]
		\draw (0, 0) rectangle ++(1.8, 0.7)
			node[midway] {$157$};
		\draw (2, 0) rectangle ++(1.8, 0.7)
			node[midway] {$92$};
		\draw (4, 0) rectangle ++(1.8, 0.7)
			node[midway] {$48$};
		\draw (6, 0) rectangle ++(1.8, 0.7)
			node[midway] {$2$};
		
		\path (1.9, 0.35) 
			-- ++(2, 0) node[pos=0] {$\cdot$}
			-- ++(2, 0) node[pos=0] {$\cdot$}
			-- ++(2, 0) node[pos=0] {$\cdot$};
	\end{tikzpicture}
\end{document}
```
* .
	* Clase A
		* 0xxx xxxx -> los primero 8 bits de la ip
		* 0 - 126 red 
			* 127 reservado
			* mask 255.0.0.0
			* ip/8
		* 2^24 host posibles
	* Clase B
		* 10xx xxxx -> los primero 8 bits de la ip
		* 128-191 red
			* mask 255.255.0.0
			* ip/16
		* 2^16 host posibles
	* Clase C
		* 110x xxxx -> los primero 8 bits de la ip
		* 192-223 red
			* mask 255.255.255.0
			* ip/24
		* 2^8 host posibles
	* Clase D
		* 1110 xxxx
		* 224 - 239 red
		* 
	* Clase E
		* Clase reservada
	* Esto discretiza la red y host
	* Otra forma es que se puede reducir la parte de host para determinar una red para dividir más
	* Mask
		* Determina cual es la red y cual es el host, con 1 para la red y 0 para los host
		* Se puede poner ip(prefijo)/mask (anotación)
		* ip & mask = red con host con 0, borrando host
		* ip & not mask =  host con red con 0, borrando red
		* Por retrocompatibilidad las mask (que pueden tener cualquier valor) en cada clase siempre tiene un valor mayor a la mask de la misma clase
			* Ej para clase B se puede tener una mask de 20 > 16, pero no podría tener una mask de 10
	* Los host no terminan en 0
		* Ejemplo: 157.92.0.0 define a la clase
	* Comunicación general
		* la dir terminados en 0's -> este
		* la dir terminados en 255's -> todos
		* la dir red = 0, host = 0 -> esta red y este host
			* Cuando uno no tiene dir ip
		* la dir red = 0, host = max (todos 1's) -> esta red, todos los host
			* broadcast local
		* la dir red = max, host = 0 -> todas las redes, este host
			* No se usa (no sale más allá de la red local)
		* la dir red = max, host = max -> todas las redes, todos los host
			* broadcast global
			* El router filtra para el exterior, y es equivalente al broadcast local por ese filtro
			* Se usa para cuando no sabes la mask de tu red
	* subnetting 
		* se debería usar al menos 2 bits para q no se pueda confundir con lo dicho anteriormente de la comunicación general
	* Red privada
		* 127.0.0.0 local host
		* clase A
			* 10.0.0.0/8
		* clase B
			* 172.16 a 32.0.0/16
		* clase C
			* 192.168.0.0/32
* IPv6
	* largo: 128bit

Internet (para IP)
* Dividido en 5 regiones
	* Hay un org q se encarga de dividir
	* Esas regiones se divide en países
		* Ahí cada país se los divide en la población
			* Si una empresa esta en varias regiones, puede usar ips de una región en otra 
			* No necesariamente si esta registrado bajo un país, esa ip se usa en ese país

[[Router|Routers]]
* Routing (local) - Control plane
	* Tiene una tabla (tabla de ruteo) que dependiendo de la red/mask, se determina la salida
	* Siempre sale por la salida más especifica
		* Se ordena por el tamaño de la mask, de más grande a más chicas
		* LPM
			* Longest Prefix Match
	* Default = 0.0.0.0/0 que matchea con cualquier ip enviada
		* No siempre existe ruta por default (no suele pasar)
		* En caso de que no exista lo dropea
	* Switching/forwarding
		* Se puede [[Cache|cachear]] las ip usando un hash para obtener rápidamente las salidas
			* Tiene un tiempo de vida y se resetea cada vez que se usa
			* En el caso que el hash da [[NULL|null]] entonces significa que no lo tiene y hace el routing
* Data plane
	* Se encarga de construir la tabla de ruteo, entre otros
	* Arquitectura 
		* Input port (interfase de entrada)
			* Hace el routing
			* Verifica si esta cacheado -> se agrega header con el puerto encontrado y eso le sirve para el switching fabric
			* Head of line (HOL)
		* Switch fabric (conmutación)
			* Dado la salida, se lo pone en el output port correspondiente
				* Ver el libro para las diferentes formas -> determina la velocidad del router
		* Output port (interfase de salida)
			* 
		* Congestión y encolado de paquetes
			* 
		* Tipos de conmutación
			* 
		* Gestión de los paquetes encolados
	* Cuando los buffers esta cerca de llenarse (70/80%) empieza a descartar paquetes random
		* Poco probable que sean del mismo flujo
			* Asegura que cree 3 ACK por cada flujo y no time outs
	* Se puede dar prioridad 
		* WFQ
		* round robin

Datagramas IP
* fragmentación (ID, flags, off-set) 
	* Cuando se conectan dos routers, pueden enviar un máximo tamaño de paquete
		* MTU: Maximum Transfers Unit
	* Si se recibe un paquete mayor a MTU, se necesita fragmentar
	* parametros
		* ID para identificar el paquete
		* flags para saber si es el último
		* off-set para determinar en donde se cortó -> determina un orden
	* el host es el que rearma todos los fragmentos ya que no se puede asegurar que todos los fragmentos pasen por el mismo router
	* Permite diferentes tecnologías y se adapta a todo
* La fragmentación es costosa y puede producir ataques
	* Ataque al host
		* Un atacante envía un fragmento, pero no envía el resto
		* El receptor crea un buffer para almacenar los fragmentos para luego reconstruirlos
			* Gasta recursos
	* Ataque al routers
		* Un atacante envía un paquete para ser fragmentado, y explota la cantidad de fragmentación
	* IPv6 directamente no fragmenta para evitar estos problemas
	  
* Tamaño mínimo del header ip es 20, que es decir que no tenga opciones
	* Recomendable considerar el MTU = header + payload máximo
	  
* Encabezado
	* Versión 
		* 4 bits
	* IHL (header length)
		* 4 bits
	* Type of service
		* Ahora no se usa para lo que originalmente fue diseñado
		* Antes habia canales que aseguraban diferentes cosas
		* 8 bits
	* Total length
		* 16 bits
		* Es el largo del paquete o el fragmento
	* Id 
		* 16 bits
		* Es el mismo en todos los fragmentos y distinto a todos los paquetes
	* Flags
		* 3 bits
		* bit 0 (x) reservado (no se usa)
		* bit 1 (D) Do not fragment
			* Uno de los flags es que no se fragmente
		* bit 2 (M) More fragments
			* Identifica si hay más fragmentos y no es el último
			* Si esta en 1, los fragmentos tienen M = 1
			* Si es 0, el último fragmento tiene M = 0 y el resto tiene M = 1
	* Fragment offset
		* 13 bits
			* No se puede representar completamente una fragmentación total del paquete
			* Con un offset de N, tenemos que pensarlo como N + 3 bits en 1, porque se asume que son 1 esos 3 bits faltantes
			* Es múltiplo de 8, entonces el fragmento mínimo es de 8
				* Esto implica que el fragmento tiene que ser divisible por 8
		* Representa un offset del paquete original en el cual empieza este fragmento
	* TTL
		* 8 bits
		* TTL (time to live) -> muy importante
			* Cada vez q pasa por un router, se descuenta uno a ese valor
			* Puede haber un bucle, para que no haya paquetes que se queden se muere por TTL
				* los bucles son por la incoherencias de las tablas de ruteo
			* Tiene 8 bits, y generalmente se lo pone en 64 o 128
			* Fundamental para que funcione el internet!!!!
	* Protocol
		* 8 bits
		* TCP
		* UDP
	* Checksum
		* 16 bits
		* Por cada fragmentación se cambia el checksum
	* Source Address
		* 32 bits
	* Destination Address
		* 32 bits (ipv4)
	* Options
		* Max 10 opciones
		* 24 bits
	* Padding

ping (comando)
* Genera un paquete chico y lo manda al destino, y si el destino responde, puede calcular el tiempo

Tarea:
* Hacer bins para agrupar los resultados
* ping datos > salida.txt

