---
dia: 2023-10-16
tags:
  - carrera/ingeniería-en-informática/aninfo/Diseño-de-software
  - nota/facultad
  - investigación/networking
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
aliases:
  - API REST
  - REST
  - Error 200#^error-200
  - Error 300#^error-300
  - Error 400#^error-400
  - Error 500#^error-500
  - RESTful#RESTful
etapa: ampliar
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

Existen dos tipos de mensajes [[Hypertext Transfer Protocol|HTTP]]. Los request messages y los response messages, y los mensajes usan [[Javascript Object Notation (JSON)|JSON]] o [[Lenguaje de marcado extensible|XML]]

Tiene un equivalente con [[Structured Query Language|SQL]]
* POST $\iff$ [[Sentencia INSERT INTO|INSERT]]
* GET $\iff$ [[Sentencia SELECT|SELECT]]
* PUT $\iff$ [[Sentencia UPDATE|UPDATE]]
* DELETE $\iff$ [[Sentencia DELETE|DELETE]]

## RESTful
---
Este [[Protocolo de internet|protocolo]] tiene como objetivo ser eficiente, escalable y confiable. Tiene como principio esta [[Arquitectura de aplicaciones|arquitectura]]
* [[Arquitectura cliente servidor|Arquitectura cliente-servidor]]
* [[Cache|Cacheabilidad]]
* [[Interfaz|Interfaces]] uniformes
    * Una forma de verlo es como en [[Hypermedia as the engine of application state|HATEOAS]]
* Statelessness
* Una estructura orientada a [[Arquitectura por layers|capas]]

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

Finalmente, está entity body. Este contiene el contenido del [[Paquete|mensaje]]

## Response message
---
Un response message tiene una estructura similar a la del pedido. La primera línea se conoce como status line y contiene información acerca del resultado del pedido. Este tiene tres campos: la versión del [[Protocolo|protocolo]], un código de estado, y el mensaje de estado correspondiente

Los códigos de error más comunes son
* 200 OK ^error-200
    * Indicando que el pedido fue exitoso. 
* 201 Created
    * El POST request fue exitoso y el recurso es mandado por JSON
* 204 No content
    * El servicio fue completado exitosamente y no hay información adicional que mandar
* 301 Moved Permanently ^error-300
    * Indicando que el objeto no está disponible en esa dirección e indicando la nueva URL en los headers
* 304 Not Modified
    * Indica que el recurso no fue modificado desde la última request
* 400 Bad Request ^error-400
    * Es un código de error genérico para cualquier pedido que no fue entendido
* 401 Unauthorized
    * El usuario no tiene la autentificación necesaria
* 403 Forbidden
    * El request no esta permitido
* 404 Not Found
    * Indicando que el documento no existe en el [[Servidor|servidor]]
* 405 Not Allowed
    * El request no es compatible
* 409 Conflict
    * Hay un conflicto con un recurso que ya existe
* 412
    * Indica que el request fue denegado
* 422 Unprocessable
    * No se puede procesar
* 505 HTTP Version Not Supported, indicando que la versión del protocolo utilizada no es soportada por el servidor ^error-500

A continuación, al igual que en el request, siguen las header lines y el entity body. Para el caso de una respuesta a un pedido de GET, esta sección contiene el objeto en sí

Para generar las líneas de cabecera adecuadas, el navegador genera estas líneas en función de la versión del protocolo utilizada, la configuración del usuario, y el caché del [[Host|host]]. El servidor web se comporta de la misma forma, generando automáticamente header lines según la información disponible