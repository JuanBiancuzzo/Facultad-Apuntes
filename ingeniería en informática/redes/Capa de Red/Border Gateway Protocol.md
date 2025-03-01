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
  - BGP
---
# Definición
---
En BGP es un [[Protocolo|protocolo]] [[Algoritmo de ruteo descentralizado|descentralizado]] y asincrónico que utiliza [[Distance-Vector Routing Algorithm|distance-vector routing]] donde los [[Paquete|paquetes]] no son enviados a una dirección específica de destino, sino a CIDRized prefixes. Cada uno de ellos puede representar una [[Subnetting|subred]] o una colección de subredes. Las entradas de la tabla de envío serán de la forma `(x, l)` donde `x` es un prefijo `138.16.68/22` y l es el número de interfaz de una de las interfaces del [[Router|router]]

El protocolo BGP provee una forma para que cada router
1. Obtenga información de accesibilidad de un prefijo de sus [[Autonomous system|AS]] vecinos. Cada subred puede anunciar su existencia en el [[Internet|internet]]
2. Determine las mejores rutas a los prefijos. Para realizarlo, ejecuta localmente un procedimiento de selección de BGP

## Anunciar información de rutas
---
Por cada AS, cada router puede ser un gateway router o un internal router. El primero está en el borde del AS y puede comunicarse con uno o más routers externos, mientras que el segundo se conecta únicamente a hosts y routers dentro del AS

Para anunciar la información de ruteo, los routers intercambian información a través de una conexión semipermanente de [[Transmission Control Protocol|TCP]] a través del [[Socket|puerto]] 179. Este es conocida como una BGP connection

Aquellas conexiones entre dos AS distintos se denominan external BGP connection (eGBP), mientras que las conexiones entre routers de un mismo AS se denominan internal BGP connection (iGBP). Generalmente, hay una conexión eGBP por cada enlace que conecta de forma directa gateway routers en los distintos AS, y una conexión iBGP entre cada router dentro del AS

Los mensajes intercambiados son propagados a través de toda la red y contienen información de la ruta de AS a tomar para llegar desde cualquier router a un prefijo cualquiera

## Determinar la mejor ruta
---
Pueden existir múltiples caminos a una misma subred de destino, a través de distintos AS. Para decidir un [[Camino|camino]], cuando un router se anuncia a través de una conexión, BGP incluye una serie de atributos
* AS-PATH es una lista de AS por el cual el mensaje atravesó, la cual es actualizada cada vez que el mensaje llega a un nuevo AS. La lista también sirve para detectar y prevenir anuncios en loops; si un router ve que su AS ya está en la lista, ignora el anuncio. ^2aa4d2
* NEXT-HOP tiene el valor de la [[Internet Protocol Address|dirección IP]] de la interfaz del router que comenzó el AS-PATH. ^755087

### Hot Potato Routing
---
![[Hot Potato Routing Protocol#Definición]]

### Route-selection algorithm
---
![[Route-Selection Algorithm#Definición]]

## Política de enrutamiento
---
Usualmente, los puntos de acceso no permiten el tráfico externo (paquetes que atraviesan el punto sin tener ni origen ni destino en algún [[Host|host]] de la subnet asociada). Para realizarlo, estos puntos de acceso no anuncian sus conexiones externas con otros AS, sino únicamente las conexiones internas. Nótese que únicamente es necesaria esta distinción para los multi-homed access point

Los backbone provider networks no suelen querer gastar recursos en envíos de paquetes externos a su red, entonces por regla general solo se permite el manejo de tráfico de un flujo si el destino o el remitente se encuentran en esa red