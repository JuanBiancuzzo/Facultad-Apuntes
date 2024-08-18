---
dia: 2024-08-18
tags:
  - redes/Capa-de-Red
  - nota/facultad
aliases:
  - SDN Controller
---
### Definición
---
La funcionalidad de un controlador puede ser separada en tres capas

* A Communication Layer
    * Los controladores deberán poder transferir información a los dispositivos del [[Plano de datos|plano de datos]] para poder administrarlos. Por el otro lado, los dispositivos deberán poder comunicar eventos observados localmente al controlador, para que tengan una visión actualizada del estado de la [[Red|red]]
* A Network-wide State-management Layer
    * Para poder tomar las decisiones de control, los valores de las flow tables deberán estar disponibles para las aplicaciones. Debido a esto, el controlador puede mantener una copia de estas tablas para su fácil acceso
* The interface to the Network-control Application Layer
    * El controlador provee una [[Aplicación Programming Interface|API]] mediante la cual las aplicaciones de control de red pueden leer y actualizar el estado de la red y sus tablas de flujo. Las aplicaciones a su vez pueden querer ser notificadas cuando ocurrió un cambio de estado, para poder tomar decisiones en respuesta

Debido a que los controladores suelen ser implementados en múltiples servidores, la semántica de las operaciones debe ser considerada (se debe mantener consistencia entre los servidores). Existen controladores que colocaron su énfasis en proveer un controlador lógicamente centralizado y físicamente distribuido