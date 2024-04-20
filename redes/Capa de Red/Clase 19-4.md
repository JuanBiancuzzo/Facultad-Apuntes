---
dia: 2024-04-19
materia: redes
capitulo: 4
---
### Definición
---
Resumen
* Enrutamiento sin clases
	* Subredes
* DHCP (dynamic host configuration protocol)
* NAT (Network address translation)
* IPv6 
* SDN (Software defined networks)

#### Subredes
---
Los routers necesitan al menos pertenecer a dos redes LAN (local area network), pero generalmente tienen muchas redes

Multi-host son host con multiples conexiones como un router, pero la gran diferencia es que el router permite trafico mientras que el host simplemente esta conectado a multiples redes.

DIBUJO

En cada LAN hay host que puede repetir nombre con otras LAN, por ejemplo host a en la LAN A, y host a en la LAN B

A.b & máscara A = A
B.c & máscara B = B

Tabla de enrutamiento del router A

|     | Prefijo         | Próximo salto |
| --- | --------------- | ------------- |
| 1   | A               | A.a           |
| 2   | B               | B.a           |
| 3   | 157.92.192.0/18 | F.b           |
| 4   | 157.92.0.0/16   | B.b           |

```tikz
\usetikzlibrary {arrows.meta}

\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\filldraw[arrows={-Circle[open, fill=red]}] (0, 0) -- (1, 0);
	\end{tikzpicture}
\end{document}
```




#### DHCP
---
Configuración minima capa de red
* Dirección IP
* Mascara
	* dir red
	* dir host
	* dir broadcast
* Tabla de ruteo
	* (opcional) default gateway

Nombre
* DNS
	* Primario
	* Secundario
* Dominio
* Nombre del host

Física
* MTU (maximum transfer unit) - Reduciéndolo

> [!important]
> Ver el [[Request For Comments (RFC)|RFC]] 1531 DHCP (octubre 1993)

#### NAT una middlebox
---
Sea una tabla donde dado una ip de origen (privada) y su correspondiente puerto, y cambia el ip origen publica en el paquete y un puerto que nadie lo este usando

De esta forma podemos identificar los distintos host en una red local, sin tener que especificar la ip privada

Se pierde el paradigma de end to end, y tenemos un man in the middle o middlebox que puede incluir vulnerabilities

También permite una aislación de la red publica que puede producir problemas con host no muy seguros

Aparece el NAT por diversos motivos
* Hay una limitación en la cantidad de ips
* La cantidad de hosts en casas y empresas aumentó, y la cantidad de ips asignadas por las ISP era muy limitada, por lo que ayudó a tener multiples hosts

#### IPv6 (Agosto de 2014)
---
Características
* Tiene 128 bits
* Encabezados modulares
	* No es muy bueno
	* Next header 
		* el código (no un puntero) del header que se acopla
		* Esto puede ser "infinito"
		* Puede producir un [[Denial of Service (DoS)|DoS]]
			* Se soluciona que en cada router se dropea el paquete si este no encuentra el header de capa de transporte en el next header
* Fragmentación prohibido en routers 
	* Sólo los extremos pueden hacerlo
* Auto-configuración
	* Cuando un host se conecta a una red, obtiene un ip, una mascara, un default gateway
		* Como una DHCP pero implementada en el mismo protocolo
* Tratamiento diferenciados de flujos
	* No es muy bueno
	* Porque cada host puede ponerse la prioridad más alta y aprovechándose de la red 
* Sin checksum
	* Porque en general se lo releva para la capa de transporte ese chequeo
* Tiene el problema de ser caro


IANA (Internet address number association)
* Maneja las dir ip y mascaras de forma centralizada, y estos a los niks?
* Cuando se empezó a acabar las IPv4, no podrían entregar esas ips entonces empezaron a dar IPv6

#### SDN
---
Lugar centralizada donde se puede tomar la decisión de como controlar el flujo

Data plane
* Es el proceso que estuvimos viendo, local al router

Control plane
* Se encarga de escribir la tabla de ruteo, esto es SDN


Open Flows
* Capa de transporte
	* TCP/UPD: puerto origen
	* TCP/UPD: puerto destino
* Capa de Red
	* IP: origen
	* IP: destino
	* IP: protocolo
	* IP:  
* Capa de Enlace
	* VLAN: id
	* VLAN: priority
	* Ether: type
	* Ether: origen
	* Ether: destino
* Capa física
	* Ingress port

TCAM (Ternary Contente Addressable Memory)
* Circuits and architectures

#### Middle boxes
---
* NAT 
* Firewalls
	* Permite tomar decisiones si alguien puede entrar a un puerto reservado 
	* Puede permitir por ips o negarlas
	* Filtrar por conexiones establecidas
		* Por ejemplo dejar pasar si se inicio la conexión de forma interna
* DPI (Deep packet inspection)
	* Suelen estar en una red importante, y miran los paquetes que generen una vulnerabilidad 
		* Buscando patrones de los tipos de ataque
* IDS (Intrusion detection system)
	* Intentan detectar a los atacantes y bloquearlo, dado por un patrón 
		* Tiene problemas para cuando un host legitimo intenta hacer una consulta que tiene un patrón similar a los del atacante, entonces se lo bloquea


