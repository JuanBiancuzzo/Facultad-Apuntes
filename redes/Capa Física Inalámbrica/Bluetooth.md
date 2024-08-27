---
dia: 2024-08-27
tags:
  - nota/facultad
  - redes/Capa-Física-Inalámbrica
aliases:
  - Wireless Personal Area Networks
  - WPAN
  - Frequency-hopping spread spectrum
  - FHSS
  - 802.15.1
---
### Definición
---
Es una tecnología de bajo alcance, costo, y consumo de energía. Se utiliza comúnmente para conectar periféricos con una [[Computadora|computadora]]. Estas redes, llamadas 802.15.1, a veces son conocidas como wireless personal area networks (WPAN)

Operan en el rango de los 2.4 GHz, con time slots de 625 ms. Durante cada uno de estos time slots, un remitente envía por uno de los 79 canales, siendo el canal elegido de forma pseudoaleatoria. Esta forma de cambio de canales se conoce como frequency-hopping spread spectrum (FHSS). Puede proveer tasas de hasta 4 Mbps ^FHSS

Las redes 802.15.1 son [[Red descentralizada|ad hoc]], sin una infraestructura necesaria para conectar los dispositivos. Primero son organizados en un piconet desde hasta 8 dispositivos activos. Uno de los dispositivos será el master, mientras que el resto serán slaves. Los masters pueden enviar en cada time slot impar, y los slaves solo pueden contestar al master cuando esté en el slot anterior se comunicó con ellos. Además de estos nodos activos, puede haber hasta 255 dispositivos estacionados que no pueden comunicarse hasta que se les cambie el estado a activo por el master node