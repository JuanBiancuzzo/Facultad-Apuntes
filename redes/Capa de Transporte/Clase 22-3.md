---
dia: 2024-04-14
materia: redes
capitulo: 3
---
### Definición
---
La capa de transporte permite a las aplicaciones comunicarse
* [[Multiplexación y demultiplexación]]
	* Mandar todos los mensajes al mismo socket 
* [[Multiplexación y demultiplexación]] 
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