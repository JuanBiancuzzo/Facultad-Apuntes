---
dia: 2024-04-16
capitulo: 4
tags:
  - redes/Capa-de-Red
---
### Definición
---
Objetivo (capa de red)
* Mover paquetes desde el src host hasta el dst host
* Como se logra
	* Forwarding
		* Pasar un paquete del input al output de un router
	* Routing
		* Decidir que ruta debería tomar
* Como funciona el proceso de ruteo? -> IMPORTANTEEE
* Destination based forwarding
	* Solo se usa la ip de destino para decidir
* Lookup
	* Consulta la tabla para saber por que puerto forwardear
	* Estructura de la tabla
		* `forwarding_table[dest_ip] => output_port`

| Prefijo     | Mask | Puerto         |
| ----------- | ---- | -------------- |
| 192.168.1.0 | 24   | 3              |
| ...         | ...  | ...            |
| 0.0.0.0     | 32   | puerto default |
* 
	* La forwarding table no mapea direcciones IP a output_port
		* No escala $2^{32}$
* Mascara de Red (mask)
	* 192.168.1.0/24
		* el /24 es la mascara y ese número representa la cantidad de unos de a la izquierda
	* Por que los bits de la izquierda (los que devuelve la ip o mask)
		* Jerarquía
	* una máscara define que bits nos interesan de un dado ip

#### Agregación de prefijos
---
Ejercicio del examen: Tenemos la siguiente tabla

| prefijo/mascara  | puerto |
| ---------------- | ------ |
| 192.168.0.0/24   | if0    |
| 192.168.1.0/24   | if0    |
| 200.34.22.0/30   | if1    |
| 192.168.0.128/25 | if2    |

Esta no es optima, las primeras dos salen por el mismo puerto, tienen la misma mascara. La solución optima es 

| prefijo/mascara  | puerto |
| ---------------- | ------ |
| 192.168.0.0/23   | if0    |
| 200.34.22.0/30   | if1    |
| 192.168.0.128/25 | if2    |
Se redujo la mascara para que mantenga todo a lo anterior.

Esto se llama agregación de prefijos, y es necesitamos
* Mismo puerto
* Redes contiguas
	* Prefijos de igual longitud
		* Tienen una cantidad N de bits q son iguales
	* El prefijo difiere solamente en el último bit
		* Difieren en el bit N + 1
	* La mascara tiene que ser igual (hay q tener cuidado si no tenemos la misma mascara)

Si se cumple esto, se juntan y se reduce la máscara en uno, para poder mantener ambas y las incluye

La tabla termina siendo equivalente

Para optimizar usar un diagrama de conjuntos con los puertos, para poder ver si se puede reducir algunas líneas

#### Fragmentación IPv4
---
MTU
* Maximum transmission unit
* Máximo tamaño de paquete de datos que se puede transferir en IP
* Depende de la [[Capa de enlace|capa de enlace]]
* Que hacemos con paquetes de tamaño X cuando debe enviarse por una red con MTU < X?
	* Podemos droppiarlo
	* Fragmentarlo
* $MSS + IP_{header} + TCP_{header}$

Fragmentamos el datagrama en partes
* Cada fragmento se transmite en un paquete IP diferente
* Fragmentación se hace en hosts y/o routers
* Ensamblado solo en el destino
	* IP es sin conexión
		* Cada paquete es tratado individualmente
	* No se puede reensamblar en el camino
		* Realmente depende de la topología de la red, pero como en general no se puede asegurar esta, no se hace
			* Si se sabe la topología, se podría determinar si algunos routers pueden ensamblar el paquete
		* También puede ser un gasto innecesario

* Info viaja en el header IP
	* Fragment offset
	* Flags
* Hay que ensamblarlos antes de dárselos a TCP/UDP
* Si uno o más no llegan, se descarta toda la secuencia

