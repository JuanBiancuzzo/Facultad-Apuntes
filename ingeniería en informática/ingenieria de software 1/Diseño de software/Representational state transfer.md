---
dia: 2023-10-16
tags:
  - carrera/ingeniería-en-informática/ingenieria-software-1/Diseño-de-software
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - investigación/networking
  - nota/facultad
  - nota/investigacion
aliases:
  - API REST
  - REST
  - Get Request
  - Put Request
  - Post Request
  - Delete Request
  - Error 200#^error-200
  - Error 300#^error-300
  - Error 400#^error-400
  - Error 500#^error-500
  - RESTful#RESTful
  - Basic Authentication#^basic-auth
  - Bearer Authentication#^bearer-auth
  - JSON Web Token#^bearer-auth
  - JWT#^bearer-auth
  - OAuth#^oauth
etapa: ampliar
vinculoFacultad:
  - tema: Diseño de software
    capitulo: 8
    materia: Análisis de la información
    carrera: Ingeniería en informática
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
# Definición
---
Es un estilo de [[ingeniería en informática/ingenieria de software 1/Diseño de software/Arquitectura de aplicaciones|arquitectura de software]] para sistemas hipermedia distribuidos como la [[World Wide Web|web]]. Esta [[Aplicación Programming Interface|API]] tiene los métodos

| Nombre | Descripción                                    | General  | Equivalente [[Structured Query Language\|SQL]] |
| ------ | ---------------------------------------------- | -------- | ---------------------------------------------- |
| Post   | No [[Idempotente\|idempotente]] y no es seguro | Crear    | [[Sentencia INSERT INTO\|INSERT]]              |
| Get    | Idempotente y seguro                           | Leer     | [[Sentencia SELECT\|SELECT]]                   |
| Put    | Idempotente y no seguro                        | Update   | [[Sentencia UPDATE\|UPDATE]]                   |
| Delete | Idempotente y no seguro                        | Eliminar | [[Sentencia DELETE\|DELETE]]                   |

Existen dos tipos de mensajes [[Hypertext Transfer Protocol|HTTP]]. Los request messages y los response messages, y los mensajes usan [[Javascript Object Notation (JSON)|JSON]] o [[Lenguaje de marcado extensible|XML]]

## RESTful
---
Este [[Protocolo de internet|protocolo]] tiene como objetivo ser eficiente, escalable y confiable. Tiene como principio esta [[ingeniería en informática/ingenieria de software 1/Diseño de software/Arquitectura de aplicaciones|arquitectura]]
* [[Arquitectura cliente servidor|Arquitectura cliente-servidor]]
* [[Cache|Cacheabilidad]]
* [[Interfaz|Interfaces]] uniformes
    * Una forma de verlo es como en [[Hypermedia as the engine of application state|HATEOAS]]
* Statelessness
* Una estructura orientada a [[ingeniería en informática/ingenieria de software 1/Diseño de software/Arquitectura por layers|capas]]

## Seguridad
---
Tiene los siguientes principios de seguridad
* Menor privilegio
	* Otorgar la menor cantidad de privilegios necesarios para hacer una acción
* Fallo default seguro 
	* Que por defecto no se pueda tener acceso a recursos o datos sensibles
* Mediación completa 
	* El sistema debe validar los permisos de acceso a todos los recursos
* No exponer información sensible en URLs
	* Nombre de usuarios, contraseñas, tokens o API keys deberían no aparecer en la URL para evitar ser logueadas en los logs de web server
* Monitorear transacciones sospechosas
	* Limitando la cantidad de request por [[investigación/protocolos/protocolo de internet/Protocolo de internet|IP]] o sesión
* Estandarizar las respuestas del servidor
	* Para saber siempre qué formato pueden tener las respuestas y donde se encontrarán los mensajes de error

Cabe aclarar que estos principios no los garantiza la estructura, sino que es responsabilidad del sistema tenerlas en cuenta

## Request message
---
Un request message consiste en múltiples líneas separadas por un CRLF, organizadas en tres secciones. La primera línea se llama request line e indica el tipo de request (método), la [[ingeniería en informática/ingenieria de software 1/Diseño de software/Uniform Resource Identifier#Uniform Resource Locator|URL]] con la cual debe interactuar y la versión de HTTP que se utiliza. Los métodos más comunes son: GET, utilizado para pedir un objeto, y POST, HEAD, PUT, DELETE

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
* 418 I'm a teapot
    * El servidor se convirtió en una tetera
* 422 Unprocessable
    * No se puede procesar
* 505 HTTP Version Not Supported, indicando que la versión del protocolo utilizada no es soportada por el servidor ^error-500

A continuación, al igual que en el request, siguen las header lines y el entity body. Para el caso de una respuesta a un pedido de GET, esta sección contiene el objeto en sí

Para generar las líneas de cabecera adecuadas, el navegador genera estas líneas en función de la versión del protocolo utilizada, la configuración del usuario, y el caché del [[Host|host]]. El servidor web se comporta de la misma forma, generando automáticamente header lines según la información disponible

## Autenticación
---
Existen distintas formas de autenticar, en todas se utiliza el body del request para pasar la información de la autenticación 
* Basic Authentication ^basic-auth
	* Esta autenticación utiliza [[Base 64 encoding|base 64 encoding]], el cual es fácilmente decodificable, por eso se debería utilizar en conjunto con otro mecanismo para asegurar su integridad
* Bearer Authentication (JWT) ^bearer-auth
	* Las credenciales del usuario viaja sólo una vez, y en la respuesta el servidor agrega un secreto que se utilizará para [[Encriptación|encriptar]] el Bearer token
	* El usuario en siguientes requests, envía el bearer token, y el servidor utilizando el secreto inicial puede desencriptar y obtener la información necesaria
	* Además, cuando se solicita un token de acceso también se suele obtener un "refresh token", los cuales permiten extender la validez del token de acceso
* OAuth ^oauth
	* Es un protocolo de autenticación
	* Consiste en delegar la autenticación de usuario al servicio que gestiona las cuentas, de modo que se éste quien otorgue el acceso para las aplicaciones de terceros
	* OAuth 2 provee un flujo de autorización para aplicaciones web, aplicaciones móviles e incluso programas de escritorio
