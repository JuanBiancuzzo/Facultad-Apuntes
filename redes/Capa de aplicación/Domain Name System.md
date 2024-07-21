---
dia: 2024-03-19
capitulo: 2
aliases:
  - DNS
tags:
  - redes/Capa-de-aplicación
---
### Definición
---
Para identificar un [[Host|host]] en la [[Red|red]], utilizamos [[Internet Protocol Address|IP addresses]]. Estas tienen una estructura jerárquica y consisten en cuatro secciones de separadas por puntos, cada una contenido un número de $4$ bits. Estas direcciones se escanean de izquierda a derecha, obteniendo información acerca del host

#### Servicios provistos
---
Necesitamos un servicio que permita traducir hostnames en direcciones IP. El sistema DNS es una base de datos distribuidas implementada con una jerarquía de servidores, con un [[Protocolo|protocolo]] de [[Capa de aplicación|capa de aplicación]] que permite a los hosts consultar a la [[Base de datos|base de datos]]

Este sistema DNS provee algunos servicios importantes
* Host aliasing
	* Un host con un hostname complicado puede tener uno o múltiples aliases. Al hostname original se lo denomina canónico
* Mail server aliasing
	* Similar al anterior, permite tener múltiples aliases para un único servidor de mails
* Load distribution
	* Se puede utilizar este sistema para redirigir a los usuarios a los [[Servidor|servidores]] a otros servidores, a partir de un hostname común. Para hacer esto, el DNS devuelve todas las direcciones OP asociadas al hostname, pero rotando el orden cada vez

#### Jerarquía distribuida
---
El sistema DNS utiliza un gran número de servidores organizados de forma jerárquica y [[Sistema distribuido|distribuidos]] a lo largo del mundo. Se puede separar en las siguientes

##### Root
---
Es una base de datos distribuida, todos los servidores comparten la misma información y están gestionados por $13$ organizaciones distintas

##### Top-Level Domain (TLD)
---
Por cada top-level domain, tendremos un servidor (o múltiples). Son los que están al final de la URL, como `com`, `ar`, etc.

##### Authoritative
---
Cada organización con host públicos tiene que proveer registros públicos para conectar sus hostnames con la dirección IP

##### Local
---
Los servidores locales DNS no pertenecen estrictamente a la jerarquía, pero son centrales en la arquitectura. Cada [[Internet Service Providers|ISP]] tiene uno. Cuando un host hace una [[Domain Name System Message|consulta DNS]], esta se le envía a su DNS local, el cual se encarga de hacer la consulta

#### Caching
---
Es una característica importante del sistema DNS. Cuando un servidor recibe una [[Domain Name System Message|respuesta DNS]], entonces puede guardarla en su [[Memoria|memoria local]]. Cuando otro cliente le pregunta por ese mismo hostname, puede devolver el valor guardado. Estos valores son descartados después de un tiempo

Además, permiten que las consultas no atraviesen los servidores [[Domain Name System#Root|root]], almacenando las direcciones de los servidores [[Domain Name System#Top-Level Domain (TLD)|TLD]] 