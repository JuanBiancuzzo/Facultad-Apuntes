---
dia: 2024-03-28
materia: redes
capitulo: 2
---
### Definición
---
Es un comando donde te permite obtener más información sobre las queries a un [[Domain Name System|DNS]]. Esta herramienta interroga a los [[Domain Name System|DNS]] name servers. Haciendo una [[DNS Query|query DNS]] y muestra las respuesta a su respuesta

#### Uso general
---
```bash
dig @server name type
```

Donde
* `server` es el nombre o la [[Internet Protocol Address (IP address)|IP address]] del name server al que se le quiere hacer la query
	* Si se usa [[Internet Protocol Versión 4 (IPv4)|IPv4]] se separa los números con un punto
		* Ejemplo: `127.0.0.1`
	* Si se usa [[Internet Protocol Versión 6 (IPv6)|IPv6]] se los separa con doble punto
		* Ejemplo: `2001:db8:85a3:0:0:8a2e:370:7334`
	Si no hay una provee un servidor, se consulta `/etc/resolv.conf`, si se encuentra una dirección y se usa alguna de las opciones `-4` o `-6` fue usada, entonces las que cumplan con la versión del IP se usaran, en cualquier caso que no encuentre ninguna opción entonces se hace la query al local host
*  `name` es el nombre del [[Resource record|resource record]] que se quiere buscar
* `type` indica que tipo de query se requiere
	* `ANY`
	* `A`
	* `MX`
	* `SIG`
	* etc
	El tipo puede ser cualquier tipo valido de query, y en el caso que no se le agregue ningún tipo se asume que el tipo es `A`

##### Opción
---
* `-4`: Indica que solo se usen direcciones IPv4
* `-6`: Indica que solo se usen direcciones IPv6
* `-b address[#port]`: determina la dirección IP de la query, la cual tiene que ser valida. Es opcional agregar al final el puerto de la forma \#puerto
* `-c class`: determina el tipo de clase de la query, donde el default es la clase `IN`

##### Flags
---
* `+recurse`, `+norecurse`: Esta flag setea el bit de búsqueda recursiva, el cual el default es que sea recursivo y el cual se desactiva en el caso que se usen las flags `+nssearch` o `+trace` 
* `+nssearch`, `+nonssearch`: Esta flag es usada, dig intenta encontrar los name servers autoritativos
* `+authority`, `+noauthority`: Muestra o no sección de autorización de la respuesta
* `+short`, `+noshort`: Esta flag alterna entre una respuesta breve y verborrágica (larga)