---
dia: 2024-05-28
aliases:
  - Principio de entrega confiable
  - Principles of reliable data transfer
  - reliable data transfer protocol
  - Acknowledgement
  - ACK
tags:
  - redes/Capa-de-Transporte
  - nota/facultad
---
# Definición
---
La abstracción del servicio provista por las capas superiores es la de un canal viable de comunicación por la cual se puede transferir datos. Con este canal, ningún bit puede ser corrompido o perdido. Es la responsabilidad de un protocolo de transferencia confiable de implementar este servicio

Asumiremos a lo largo de este discusión que los [[Paquete|paquetes]] serán recibidos en el orden que fueron enviados, con algunos posiblemente siendo perdidos. Por otro lado, únicamente consideraremos el caso de transferencia de datos unidireccional, si bien el caso bidireccional no es conceptual

Un [[Protocolo|protocolo]] de entrega confiable se caracteriza por
* Asegurar la entrega de todos los [[Paquete|paquetes]] serán entregados en orden
* Provee [[Detección de errores y corrección|detección de errores]] por la corrupción de paquetes
* Proporciona [[Control de flujo|control de flujo]]
* Proporciona [[Control de congestión|control de congestión]]

Para estos últimos dos utilizamos
* Recepción de feedback
	* El receptor deberá enviar positive (ACK) y negative (NAK) acknowledgements en respuesta a los paquetes recibidos para indicar que fueron recibidos correctamente
* Retransmisión de paquetes
	* Un paquete que fue recibido de forma errónea tendrá que ser retransmitido

