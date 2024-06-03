---
dia: 2024-06-03
materia: redes
capitulo: 3
aliases:
  - ECN
  - Control de congestión asistida por la red
---
### Definición
---
En este enfoque, de [[Control de congestión|control de congestión]], los [[Router|router]] proveen feedback explícito a los [[Host|hosts]] respecto al estado de congestión de la [[Red|red]]. Existen dos formas para un router de comunicarse con los hosts
* Consiste en enviar notificaciones en la forma de un choke packet
* Consiste en actualizar un campo en los paquetes que viajan entre los hosts para indicar congestión