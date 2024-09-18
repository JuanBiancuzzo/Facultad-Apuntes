---
dia: 2024-06-05
tags:
  - redes/Capa-de-Transporte
  - nota/facultad
---
# Definición
---
En este estado la `cwnd` (Congestion window) se incrementa en `1 MSS` por cada [[Protocolo de entrega confiable|ACK]] duplicado recibido por un segmento perdido que causo el fast recovery. Eventualmente, cuando se recibe un ACK por el segmento perdido, [[Transmission Control Protocol|TCP]] entra en [[Congestion Avoidance|congestion avoidance]] luego de reducir `cwnd` a `sstresh`. Ante un [[Recovery time objective|timeout event]], se restablece `cwnd` y `sstresh` de la misma forma que antes y se pasa al estado de [[Slow Start|slow start]]