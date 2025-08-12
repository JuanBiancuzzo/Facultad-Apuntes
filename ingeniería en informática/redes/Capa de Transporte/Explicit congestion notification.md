---
dia: 2024-06-03
aliases:
  - ECN
  - Control de congestión asistida por la red
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Transporte
  - carrera/ingeniería-en-informática/redes/Capa-de-Transporte
  - nota/facultad
vinculoFacultad:
  - tema: Capa de Transporte
    capitulo: 3
    materia: Redes
    carrera: Ingeniería en informática
---
# Definición
---
En este enfoque, de [[Control de congestión|control de congestión]], los [[Router|router]] proveen feedback explícito a los [[Host|hosts]] respecto al estado de congestión de la [[Red|red]]. Existen dos formas para un router de comunicarse con los hosts
* Consiste en enviar notificaciones en la forma de un choke packet
* Consiste en actualizar un campo en los paquetes que viajan entre los hosts para indicar congestión

Recientemente, fueron surgiendo extensiones de [[Internet Protocol Address|IP]] y [[Transmission Control Protocol|TCP]] para permitir a la red señalar congestión en la red de forma explícita, a través de dos bits en el campo Type of Service del [[Paquete|datagramas de IP]]. Este tipo de control de congestión se conoce como explicit congestion notification

Uno de los bits es utilizado para indicar que el router está experimentando congestión, mientras que el otro se utiliza para indicarle a los routers que los senders y receivers son capaces de entender el mensaje

Si bien el [[Request For Comments|RFC]] no provee una definición para cuando el router está congestionado, se recomienda que únicamente lo indique ante congestión persistente

Existen otros protocolos de transporte además de TCP que hacen uso de este mecanismo
* [[Datagram Congestion Control Protocol (DCCP)|DCCP (Datagram Congestion Control Protocol)]] provee un servicio similar a UDP que utiliza control de congestión.
* [[Data Center Transmission Control Protocol (DCTCP)|DCTCP (Data Center TCP)]] es una versión de TCP diseñada específicamente para redes de [[Data center|data center]], que hace uso de ECN