---
dia: 2023-10-16
aliases:
  - API REST
  - REST
tags:
  - ingeniería-en-informática/aninfo/Diseño-de-software
  - nota/facultad
  - networking
---
# Definición
---
Es un estilo de [[Arquitectura de aplicaciones|arquitectura de software]] para sistemas hipermedia distribuidos como la [[World Wide Web|Web]]. Esta [[Aplicación Programming Interface|API]] tiene los métodos

| Nombre | Descripción                       | General  |
| ------ | --------------------------------- | -------- |
| Post   | No [[Idempotente]] y no es seguro | Crear    |
| Get    | Idempotente y seguro              | Leer     |
| Put    | Idempotente y no seguro           | Update   |
| Delete | Idempotente y no seguro           | Eliminar |

Existen dos tipos de mensajes [[Hypertext Transfer Protocol|HTTP]]. Los request messages y los response messages

## Request message
---
Un request message consiste en múltiples líneas separadas por un CRLF, organizadas en tres secciones. La primera línea se llama **request line** e indica el tipo de request (método), la URL con la cual debe interactuar y la versión de HTTP que se utiliza. Los métodos más comunes son: GET, utilizado para pedir un objeto, y POST, HEAD, PUT, DELETE

Luego, siguen una serie de header lines, cada una con el nombre del campo y su valor. Entre los campos más comunes se encuentran
* Connection: 
	* Utilizado para indicar si se quiere intentar tener una conexión persistente
* User-agent
	* Utilizado para indicar el tipo de navegador utilizado
* Accept-language:
	* Utilizado para indicar el lenguaje de preferencia de la página web. Para indicar la finalización de la sección de cabecera se utiliza un CRLF extra

Finalmente, está entity body. Este contiene el contenido del mensaje

## Response message
---
Un response message tiene una estructura similar a la del pedido. La primera línea se conoce como status line y contiene información acerca del resultado del pedido. Este tiene tres campos: la versión del protocolo, un código de estado, y el mensaje de estado correspondiente

Los códigos de error más comunes son
* 200 OK
	* Indicando que el pedido fue exitoso. 
* 301 Moved Permanently
	* Indicando que el objeto no está disponible en esa dirección e indicando la nueva URL en los headers
* 400 Bad Request
	* Es un código de error genérico para cualquier pedido que no fue entendido
	* 404 Not Found
		* Indicando que el documento no existe en el servidor
* 505 HTTP Version Not Supported, indicando que la versión del protocolo utilizada no es soportada por el servidor

A continuación, al igual que en el request, siguen las header lines y el entity body. Para el caso de una respuesta a un pedido de GET, esta sección contiene el objeto en sí

Para generar las líneas de cabecera adecuadas, el navegador genera estas líneas en función de la versión del protocolo utilizada, la configuración del usuario, y el caché del host. El servidor web se comporta de la misma forma, generando automáticamente header lines según la información disponible
