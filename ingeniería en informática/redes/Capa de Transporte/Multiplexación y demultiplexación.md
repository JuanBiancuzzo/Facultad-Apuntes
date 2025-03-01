---
dia: 2024-06-01
aliases:
  - Multiplexación
  - Multiplexing
  - Demultiplexación
  - Demultiplexing
tags:
  - ingeniería-en-informática/redes/Capa-de-Transporte
  - nota/facultad
  - carrera/ingeniería-electrónica/redes/Capa-de-Transporte
---
# Definición
---
Recordemos que un proceso puede tener uno o más [[Socket|socket]], debido a esto, la [[Capa de transporte|capa de transporte]] no tiene que enviar información directamente a los [[Proceso|procesos]], sino a un socket intermediario

Cada [[Paquete|segmento]] de capa de transporte tiene un conjunto de campos para este propósito. La capa de transporte del receptor debe examinar estos campos para identificar al socket adecuado y enviarle los segmentos. Este trabajo es conocido como demultiplexing, El trabajo de juntar data chunks en el [[Host|host]] de fuente de distintos sockets, encapsularlos con información de cabecera para crear segmentos y enviar estos segmentos a la [[Capa de Red|capa de red]] se conoce como multiplexing

## Sin establecer una conexión
---
Cuando un socket [[User Datagram Protocol|UDP]] es creado, la capa de transporte automáticamente asigna un número de puerto a este socket. Alternativamente, el desarrollador de la aplicación puede asociarlo a un puerto específico

Un socket UDP se identifica pr una dupla conteniendo una [[Internet Protocol Address|dirección IP]] de destino y un número de puerto de destino. Esto implica que si dos segmentos tienen distinta dirección de envío, pero misma dirección de destino, serán direccionados al mismo socket

## Orientado a la conexión
---
Un socket [[Transmission Control Protocol|TCP]] es identificado por una tupla de cuatro valores, conteniendo
* Dirección IP del remitente
* Número de puerto del remitente
* Dirección IP de destino
* Número de puerto de destino

Cuando un segmento llega a un host, este utiliza estos cuatro valores para direccionar el segmento al socket apropiado

Un [[Servidor|servidor]] TCP tiene un welcoming socket que espera a nuevas conexiones en un número de puerto determinado. Un cliente TCP crea un socket y envía un pedido de establecimiento de conexión al servidor. Cuando el servidor TCP recibe segmento de pedido de establecimiento de la conexión, entonces crea un nuevo socket por el cual se llevará a cabo esta comunicación. Un servidor host puede soportar múltiples sockets de conexión TCP simultáneos (asociados al mismo puerto), cada uno asignado a un proceso. Para determinar esto, se utiliza la dirección y el puerto de envío
