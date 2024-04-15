---
dia: 2024-04-14
materia: redes
capitulo: 2
---
### Definición
---
### DNS
---
* DNS -> domain name system
* directorio dónde se almacenan las direcciones ip para cada hostname
* crear aliasis
* es una base de datos distribuido jerarquica 
	* varios servidores alrededor dle mundo
* stack tcp/ip
	* capa de aplicación
	* usa udp
		* Es más rápido que tcp
	* puerto 53
* devuelve un resource record
	* tipos
		* A -> devuelve una ipv4
		* AAAA -> idrección ipv6
		* CNAME registro de nombre canónico (alias)
			* Ej: 
				* nombre: www.reddit.com 
				* class: in
				* type: cname
				* data: reddit.map.fastly.net
				* ttl: 30
			* otro
				* nombre: gmail.com
				* class in
				* type: MX
				* data: 30 alt3.gmail-smtp-in.l.google.com
				* ttl: 13
		* MX intercambio de emails
		* NS servidor de nombre
		* TXT registro de texto
		* (ver apuntes que hay un link con todos los tipos)
	* nombre
	* valores/data
	* Time to live
	* prioridad -> puede ayudar a definir en el caso de que se devuelve varios resource records, y ayude a definir entre dos servidores
* servicios
	* host aliasing
	* mail aliasing
	* load balancing
		* distribuir la carga tráfico de red de un servicio en más de un servidor
			* permite generar redundancia
				* si tengo 3 servidores y se cae uno, la app sigue funcionando
			* permite distribuir la carga
				* si mucha gente usa el servicio, hay varios servidores para dar mayor poder de procesamiento
		* Puede usar round robin
* infraestructura
	* descentralizada -> por qué?
		* single point of failure
		* latencia a todo el mundo
		* hardware costoso
	* jerárquica -> responsabilidad y db distribuida
		* root servers
		* top level domain servers (.com, .ar)
		* servidores autoritativos
	* Estructura de árbol n-ario
* Lcal resolver
	* tolos los isp / organizaciones tienen uno
	* es cercano a los usuarios
	* funcionamiento
		* el usuario realiza la query al resolver (comportamiento recursivo)
		* este inicia el proceso iterativo, comenzando con el servidor root
		* cuando el SA (servidores autoritativos) finalmente le contesta la IP, la envía al usuario
* Hay caches
	* se almacenan en memoria los resultados de las queries a los SA
	* Ante nuevas consultas para los mismos hostnames se devuelve la respuesta cacheada
		* reduce tiempo
		* reduce trafico
* delegación de zonas
	* para resolver se divide en zonas
		* hay de a hasta la m, y cada uno tiene varias replicas
		* cada letra representa una zona
* Seguridad
	* no es confidencial
	* no esta incriptado
	* porque esta sobre utp
	* se resuelve con
		* eDNS RFC 2671
			* extension DNS
			* limitaciones de DNS
				* tamaño de varios campos
				* códigos de retorno
				* tipos de etiquetas
				* mensajes e 512 bytes máximo
			* no hay cambios al header
			* Extiende y crea dos campos
				* pseudo-RR: OPT extiende el mensaje
				* permite agregar nuevos RR
			* aplicaciones
				* ecs
					* compartir información
				* dnssec 
					* extensiones de seguridad
						* autenticación encriptada
		* DOH RFC 8484
			* dns over https
				* GET o POST / dns-query
					* parametros:
						* dns: DNS resuest codificada en base64
						* que tipo
					* response MIME Type
						* application/dns-message
						* puede respnderse con json
			* implementaciones
				* Google DoH resolver
				* Cloudflare DoH resolver
			* se encriptan los mensajes
			* usa tcp
			* beneficios
				* seguridad
			* desventajas
				* tiempo 
					* en los tiempos de ahora no se nota para un persona
* header

| Identification          | Flags                |
| ----------------------- | -------------------- |
| number of questions     | number of answer RRs |
| number of authority RRs |                      |

### Dig
---
muestra el arbol de queries

dig fi.uba.ar
* HEADER: 
	* opcode: query
	* status: NOERROR
	* id
	* num query
	* num answer
	* num authority
	* num additional
	* flags
		* qr
			* indica que es una respuesta
		* rd, ra
			* indican de como se resolvio el pedido
		* aa 
			* respuesta autorizada
* OPT pseudosection
	* ends
		* version
		* flags
		* upd: 512
	* question section
		* fi.uba.ar. IN A
* ANSWER section -> resource record
	* fi.uba. ar. 770 in A 186.33.219.219
* query time: 
	* server
	* when
	* msg size


flags:
* trace
	* devuelve más info sobre el camino que se hizo
	* util
* @ip servidor
	* le obligas a que responda ese servidor
	* ejemplo 
		* dig google.com @8.8.8.8
			* consular google.com al servidor con ip 8.8.8.8
* answer -x ip
	* 