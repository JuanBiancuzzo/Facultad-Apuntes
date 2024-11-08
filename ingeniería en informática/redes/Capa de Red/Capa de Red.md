---
dia: 2024-04-15
tags:
  - ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
  - ingeniería-electrónica/redes/Capa-de-Red
---
# Definición
---
Responsable de trasladar los [[Paquete|paquetes]] de la capa de red, conocidos como [[Paquete|datagramas]], de un [[Host|host]] a otro

El [[Protocolo|protocolo]] de la [[Capa de transporte|capa de transporte]] ([[Transmission Control Protocol|TCP]] o [[User Datagram Protocol|UDP]]) de un host de origen pasa un [[Paquete|segmento]] de la capa de transporte y una dirección de destino a la capa de red. Luego, la capa de red proporciona el servicio de suministrar el segmento a la capa de transporte del host de destino

La capa de red incluye el conocido [[Internet Protocol Address|protocolo IP]], que define los capos del datagrama, así como la forma en que actúan lo hosts y los [[Router|routers]] sobre estos campos. La capa de red también contiene [[Enrutamiento|protocolos de enrutamiento]], que determinan las rutas que los datagramas siguen entre los orígenes y los destinos 

El [[Internet Protocol Address|protocolo IP]] provee comunicación lógica entre hosts, ofrece un [[Servicio de best-effort delivery|servicio de best-effort delivery]]. Debido a esto se dice que el protocolo IP es un unreliable service

## Funcionalidades
---
Podemos identificar dos funciones de capa de red importantes
* [[Forwarding|Forwarding]] ![[Forwarding#^baf6a6]]
* [[Routing|Routing]] ![[Routing#^dd8320]]

Un elemento clave para la capa de red es la [[Forwarding table|forwarding table]]. El router examina algunos campos del [[Paquete|datagrama]] recibidos y los utiliza para indexar esa tabla, la cual le indica a cuál output link deberá enviar el paquete

Existen dos tipos principales de packet switches
* Los [[Link-layer switches|link-layer switches]] basarán las decisiones de envío a partir de los valores del link-layer-frame
* Los [[Packet switches|packet switches]] basarán las decisiones en los campos de cabecera del datagrama

## Servicios
---
El modelo de servicio de red define las características del envío end-to-end entres dos hosts, estos pueden incluir
* Guaranteed delivery
	* Garantiza que un paquete enviado llegue eventualmente a destino
* Guaranteed delivery with bounded delay
	* El paquete enviado llegará a destino dentro de un rango de [[Delay in packet switches|delay]] especificado
* In-order packet delivery
	* Los paquetes llegarán a destino en el orden que fueron enviados
* Guaranteed minimal [[Bandwidth|bandwidth]]
	* Asegurará un ancho de banda mínimo, mientras que la aplicación envíe los datos a por lo menos ese ancho de banda
* Security
	* La capa de red podría encriptar los datagramas y proveer confidencialidad de los paquetes

La capa de red del [[Internet|internet]] provee un único servicio, conocido como [[Servicio de best-effort delivery|best-effort service]]. Hará el mayor esfuerzo posible para cumplir con el envío, aunque no puede garantizar nada. Este servicio combinado con un ancho de banda han proado ser más que suficientes para habilitar un amplio rango de [[Aplicación|aplicaciones]]