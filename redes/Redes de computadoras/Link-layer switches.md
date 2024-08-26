---
dia: 2024-08-26
tags: 
 - redes/Redes-de-computadoras
 - nota/facultad
---
### Definición
---
Los switches son transparentes. Los adaptadores de [[Red|red]] direccionan frames directamente a otros hosts de la [[Subnetting|subred]], sin conocer los switches intermedios. La tasa de llegada puede ser mayor a la tasa de salida, por lo que los switches utilizan buffers para no descartar información

Se lo usa para [[Forwarding#Para un link-layer switch|forwarding]] de [[Frame|frames]], y self learning

#### Self-Learning
---
Para configurar la tabla del switch, se utiliza un mecanismo de autoaprendizaje

1. La tabla inicialmente estará vacía
2. Por cada frame que recibe, almacena en su tabla la [[Media Access Control Address|dirección MAC]] del remitente del frame con la interfaz de llegada
3. El switch elimina automáticamente una tabla si no recibe paquetes de esa dirección en un tiempo determinado

Debido a estas reglas, los switches son dispositivos plug-and-play, ya que no requieren intervención del administrador de red o del usuario

#### Propiedades
---
Podremos identificar múltiples ventajas de los switches por sobre las topologías hub-based

* Eliminación de colisiones
    * Debido a que las conexiones son punto a punto y los switches manejan el intercambio de información, no hay colisiones entre los paquetes. Nunca se envía más de un frame a la vez a través de un determinado enlace
* Links heterogéneos
    * Como los switches aíslan unos enlaces de otros, los diferentes links pueden operar a diferentes velocidades e incluso en distintos medios
* Manejo
    * Además de proveer seguridad avanzada, los switches también facilitan el manejo de la red. Por ejemplo, si un adaptador falla y empieza a mandar paquetes continuamente, el switch puede detectar esto y desconectar internamente el adaptador fallado. Por otro lado, si un cable se desconecta, solo se perjudica aquel [[Host|host]] conectado con ese enlace

#### Comparación con un router
---
Tanto los switches como los [[Router|routers]] realizan store-and-forward packet switching, pero tienen diferencias fundamentales. Los routers operan con direcciones de [[Capa de Red|capa de red]], mientras que los switches operan con direcciones de [[Capa de Enlace|capa de enlace]]

Como vimos anteriormente, también existen dispositivos con estándar [[OpenFlow]] que utilizan la operación [[OpenFlow|match plus action]] para funcionar como ambos (examinan 11 headers de distintas capas)

Un administrador debe decidir entre cuál de estos dispositivos utilizar para gestionar su red. Veremos algunas ventajas y desventajas de los switches

* Los switches tienen tasas de filtrado y envío relativamente altas, ya que solo deben procesar frames hasta la capa de enlace
* Para prevenir envíos de broadcast cíclicos, la topología está limitada a un [[Árbol|spanning tree]] ([[Grafo conexo|grafo conexo]] acíclico)
* Una gran red necesitaría grandes tablas de [[Address Resolution Protocol|ARP]] y esto generaría un gran número de tráfico y procesamiento de ARP
* Los switches son susceptibles a broadcast storms

Por el otro lado, analizaremos algunas ventajas y desventajas de routers

* Debido a que las estructuras son jerárquicas, los paquetes no atraviesan ciclos a lo largo del [[Camino#Recorrido (Trail)|recorrido]] (a menos que haya una tabla mal configurada)
* Las redes no están restringidas a un spanning tree y pueden utilizar el mejor [[Camino|camino]] entre dirección de envío y dirección de destino
* Debido a que las redes no están restringidas a un spanning tree, se pueden construir topologías complejas y de alta eficiencia
* Proveen protección de [[Firewall|firewall]] ante ataque de broadcast de capa de enlace
* No son plug-and-play, y requieren ser configurados por los administradores de red
* Usualmente tienen mayor tiempo de procesamiento por [[Paquete|paquete]] que los switches

En general, para redes pequeñas, los switches suelen ser suficientes. A medida que crece el tamaño de nuestra red, nos resultara conveniente optar por la utilización de routers