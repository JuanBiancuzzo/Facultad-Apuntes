---
dia: 2024-08-18
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
  - carrera/ingeniería-en-informática/redes/Capa-de-Red
  - investigación/ciencias-de-la-computación/Networking/Protocolos
  - investigación/networking/Protocolos
  - investigación/protocolos/protocolo-de-internet
  - nota/facultad
  - nota/investigacion
aliases:
  - IP Anycast
---
# Definición
---
El servicio de anycast de [[Internet Protocol Address|IP]], utilizado comúnmente en [[Domain Name System|DNS]], donde es útil para replicar el mismo contenido en múltiples servidores esparcidos geográficamente y que los usuarios accedan al [[Servidor|servidor]] más cercano

Durante el estado de [[Configuración|configuración]] del anycast, la compañía [[Redes de distribución de contenido|CDN]] asigna la misma dirección IP a cada uno de sus servidores, y utiliza [[Border Gateway Protocol|BGP]] para anunciar esa dirección desde cada servidor. Cuando un [[Router|router]] recibe los múltiples anuncios para esa dirección, los toma como provenientes de distintos caminos de la misma dirección física, por lo que cuando configura su tabla de envío va a elegir la mejor ruta a esa dirección, efectivamente eligiendo el servidor más cercano

En la práctica, los CDN eligen no usar IP-anycast, ya que los cambios en el ruteo de BGP pueden resultar en distintos paquetes de la misma conexión [[Transmission Control Protocol|TCP]] llegando a distintas instancias del servidor. Sin embargo, es utilizado por el sistema DNS para dirigir consultas DNS al [[Domain Name System#Root|servidor root DNS]] más cercano