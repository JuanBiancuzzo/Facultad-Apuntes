---
dia: 2024-08-18
tags:
  - ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
  - investigación/protocolos/protocolo-de-internet
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
  - investigación/networking/Protocolos
  - investigación/ciencias-de-la-computación/Networking/Protocolos
aliases:
  - ICMP
---
# Definición
---
El protocolo internet control message protocol es utilizado por [[Host|hosts]] y [[Router|routers]] para comunicar [[Información|información]] de [[Capa de Red|capa de red]] entre ellos. Uno de los usos más típicos es el de reporte de errores, como el conocido [[Paquete|mensaje]] "Destination Network Unreachable". En algún punto del recorrido, un router no pudo encontrar un paquete, por lo que el [[Internet Protocol Address|protocolo IP]] envía un mensaje de error al host

Suele ser considerado como una parte de IP, pero arquitectónicamente yace por encima de IP, ya que sus mensajes están contenidos en el payload de los [[Paquete|datagramas]]. Los mensajes contienen un campo de `type`, un campo de `code`, y los headers y los primeros $8$ bytes del datagram que ocasionó el error

Un mensaje de ping envía un mensaje ICMP de type 8, code 0. La respuesta es un type 0, code 0. Usualmente, las implementaciones de [[Modelo Transmission Control Protocol, Internet Protocol|TCP/IP]] soportan el ping directamente en el [[Sistema operativo|sistema operativo]]

Otro mensaje interesante es el source quench message. Es utilizado por un router congestionado para forzar a un host a que reduzca su taza de envío, aunque en la práctica no es utilizado debido al propio mecanismo de [[Control de congestión de Transmission Control Protocol|control de congestión de TCP]]

El comando Traceroute es implementado con mensajes ICMP. Es envían múltiples mensajes con puertos poco probables con crecientes [[Internet Protocol Versión 4#^b40fdb|TTL]] desde $1$ hasta $n$, siendo $n$ la cantidad de routers intermedios (esta cantidad es desconocida inicialmente). Los routers recibirán estos mensajes, eliminándolos si su TTL llega a $0$ y enviando un mensaje de advertencia al host con `type 11`, `code 0`

A partir del [[Round trip time|round trip time]], se calcula el tiempo acorde a cada router. El número de routers  es determinado cuando finalmente llega un paquete al host. Debido a que el [[Socket|puerto]] no estará usado, recibirá una advertencia de puerto inalcanzable (`type 3`, `code 3`). Esto será interpretado por Traceroute como que se alcanzó la dirección de destino

Existe una nueva versión de ICMP, definida para [[Internet Protocol Versión 6|IPv6]]. Esta agrega definiciones necesarias para el funcionamiento de IPv6