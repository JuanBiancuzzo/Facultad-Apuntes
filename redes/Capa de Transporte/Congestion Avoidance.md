---
dia: 2024-06-05
capitulo: 3
tags:
  - redes/Capa-de-Transporte
---
### Definición
---
A diferencia de [[Slow Start|slow start]], el valor de `cwnd` (Congestion window), por cada [[Round trip time|RTT]], [[Transmission Control Protocol|TCP]] adopta un enfoque más conservativo, y aumenta uno por cada ráfaga que se envía

Cuando ocurre un [[Recovery time objective|timer interrupt]], se realiza lo mismo que en el estado de slow start. Ante la llegada de $3$ [[Protocolo de entrega confiable|ACK]] duplicados, se toma un enfoque menos drástico, en lugar de restablecer `cwnd`, se reduce a la mitad. Ante cualquier loss event, se ingresa al estado de [[Fast Recovery|fast recovery]]