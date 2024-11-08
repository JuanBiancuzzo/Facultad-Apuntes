---
dia: 2024-06-14
aliases:
  - NAT
tags:
  - ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
---
# Definición
---
Para enviar [[Paquete|paquetes]] a través de la red local, se utiliza las direcciones correspondientes a una [[Red privada|red privada]]

Una NAT-enable [[Router|router]] luce, ante el mundo exterior, como un único dispositivo con una única [[Internet Protocol Address|dirección IP]]. Este esconde los detalles de la red interna del mundo externo. Para decidir a qué dispositivo de la red enviar los paquetes entrantes, se utiliza una NAT translation table

Veamos el escenario en el que un [[Host|host]] quiere conectarse con un [[Servidor|servidor web]]. Cuando el host crea un [[Socket|socket]] en un puerto arbitrario y envía el [[Paquete|datagrama]] a la red local, el router NAT recibe el datagrama, genera un nuevo puerto local para este datagrama y reemplaza la dirección de fuente con la dirección público, router y el nuevo puerto. También genera una entrada en la tabla para corresponder el nuevo puerto con el host local y puerto indicado. Cuando el router NAT recibe la respuesta del servidor, indexa en la tabla para descubrir a qué dirección local debe enviar este paquete

Algunos pueden argumentar que los números de puerto deben ser utilizados para indexar [[Proceso|procesos]] y no host, y sus correspondientes procesos. Esto puede traer problemas, por ejemplo, a la hora de bindear servidores a puertos conocidos. Para solucionar esto, es utilizan las herramientas de [[Network Address Translation traversal|NAT traversal]] y [[Universal Plug and Play|UPnP]]