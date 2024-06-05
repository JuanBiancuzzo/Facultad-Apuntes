---
dia: 2024-06-05
materia: redes
capitulo: 3
---
### Definición
---
Cuando se inicia una conexión [[Transmission Control Protocol|TCP]], se inicializa el valor de `cwnd` (Congestion window) con el valor de `lwnd` (Loss window) que suele ser `1 MSS`. En el estado de slow start el `cwnd` es aumentado en uno por cada [[Protocolo de entrega confiable|ACK]] recibido, esencialmente duplicando la tasa de envió cada [[Round trip time|RTT]]

Si ocurre un [[Recovery time objective|time interrupt]], se asigna `sstresh` a la mitad de la ventana de congestión $$ sstresh(n + 1) = \frac{cwnd(n)}{2} $$
Y se vuelve a establecer la `cwnd` al valor inicial, reiniciando el proceso. Cuando `cwnd` alcanza o sobrepasa a `sstresh`, se avanza al estado de [[Congestion Avoidance|congestion avoidance]]. Si se reciben tres ACK duplicados, entonces TCP ingresa al estado de [[Fast Recovery|fast recovery]]