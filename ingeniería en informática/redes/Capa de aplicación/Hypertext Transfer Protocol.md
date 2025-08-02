---
dia: 2024-03-19
aliases:
  - HTTP
  - Hypertext Transfer Protocolo Secure#HTTPS
  - HTTPS#HTTPS
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-aplicación
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - carrera/ingeniería-en-informática/redes/Capa-de-aplicación
  - investigación/ciencias-de-la-computación/Networking/Protocolos
  - investigación/networking/Protocolos
  - investigación/protocolos/protocolo-de-internet
  - nota/facultad
  - nota/investigacion
---
# Definición
---
Este [[Protocolo|protocolo]] de la [[Capa de aplicación|capa de aplicación]] utiliza el protocolo de transporte [[Transmission Control Protocol|TCP]]

El navegador implementa el lado del cliente del protocolo HTTP, mientras que los [[Servidor|servidores web]] implementan el lado del servidor del protocolo. Estos almacenan objetos direccionables por una URL

Cuando un usuario pide una página web, envía un HTTP request para los objetos en esa página web, el servidor recibe los requests y reenvía los objetos en HTTP responses

El protocolo HTTP es stateless. El servidor no almacena ninguna información de la conexión con los clientes, esto permite que sea más simple de implementar

## Persistencia de la conexión
---
En las conexiones no persistentes, se debe establecer y mantener una conexión por cada objeto a pedir. En las conexiones persistentes, el servidor deja la conexión TCP abierta luego de enviar la respuesta, esto permite que los siguientes llamados se envían a través de esta misma conexión

Además, múltiples pedidos pueden ser pedidos al mismo tiempo sin esperar a las respuestas de cada uno (pipelining), el servidor enviará las respuestas en cuanto pueda. Aunque actualmente la mayoría de los servidores utilizan conexiones persistentes, son sin pipelining

## Cookies
---
Muchas veces, es necesario que una [[Página web|página web]] pueda identificar usuarios. Para esto, se utilizan las cookies. Estos se utilizan para los servidores web para llevar un registro de los usuarios

Estas tecnologías utiliza cuatro componentes principales. Una línea de cabecera en la respuesta HTTP. Una línea de cabecera en el pedido HTTP. Un archivo de cookies que se almacena en el host del usuario y es manejado por el navegador. Y una base de datos del servidor utilizada para almacenar la información de los usuarios

Cuando un usuario se conecta a una página a la que nunca se había conectado, el servidor crea un identificador único y crea una entrada en una base de datos de los clientes, indexada por el identificador. Luego, envía este identificador en los _headers_ de la respuesta al cliente a través del header Set-cookie

El usuario recibe el identificador en la respuesta y lo guarda en su navegador. La próxima vez que el usuario se conecte a la página web, enviará este identificador en uno de los headers para que el servidor pueda identificar al usuario. De esta forma, el servidor puede llevar un registro de los mensajes que envía un usuario al servidor web.

Las cookies pueden usarse para crear una capa de use session por encima del HTTP. Aunque pueden simplificar algunos aspectos de la web para los usuarios, son controversiales debido a que se consideran una invasión a la privacidad.

## Web caching
---
Un web cache, también conocido como un servidor proxy, es una entidad que satisface pedidos HTTP en nombre del servidor de origen. Usualmente, estos web caches son instalados por los [[Internet Service Provider|ISP]]. El navegador puede ser configurado para que los pedidos HTTP se dirijan directamente el caché

A través del uso de [[Redes de distribución de contenido|CDN]], los web caches cada vez cumplen un rol más importante en el [[Internet|internet]]. Estas compañías instalan múltiples caches distribuidos geográficamente para localizar el tráfico de internet

## RFC
---
Existen 3 [[Request For Comments|RFCs]]
* 1945
* 7230
* 7540

## HTTPS
---
%% Ampliar