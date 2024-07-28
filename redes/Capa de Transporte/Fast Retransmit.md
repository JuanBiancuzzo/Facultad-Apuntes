---
dia: 2024-06-03
tags:
  - redes/Capa-de-Transporte
  - nota
---
### Definición
---
Retransmitir puede detectar perdidas de [[Paquete|paquetes]] incluso antes de que ocurra el timer interrupt, a partir de la llagada de [[Protocolo de entrega confiable|ACK]] duplicados

Cuando un receptor recibe un segmento fuera de orden, este detecta un salto en el data stream. Esto puede ser causado por perdida de información o un reordenamiento de la red. El receptor envía inmediatamente una confirmación para el último paquete recibido en orden, indicando al remitente que se perdió un paquete

Cuando el receptor recibe tres ACK duplicados, entonces realiza un fast retransmit, retransmitiendo el segmento perdido antes del [[Recovery time objective|timer interrupt]]