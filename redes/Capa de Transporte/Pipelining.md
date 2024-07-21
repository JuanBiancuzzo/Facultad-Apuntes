---
dia: 2024-06-02
capitulo: 3
tags:
  - redes/Capa-de-Transporte
  - nota
---
### Definición
---
Se ve que para el [[Protocolo stop-and-wait|protocolo stop-and-wait]], tiene el problema de la velocidad y donde hay tiempo donde ambos, tanto el receptor como el emisor, están esperando sin hacer nada, entre otras [[Protocolo stop-and-wait#Desventajas|desventajas]]

La solución a estos problemas, es permitir que el remitente envíe múltiples paquetes sin esperar a sus [[Protocolo de entrega confiable|acknowledgement]]. Esta técnica se conoce como pipelining, tiene las siguientes consecuencias

* El rango de números de secuencia debe incrementarse, ya que puede haber múltiples [[Paquete|paquetes]] en tránsito sin haber recibido su acknowledment
* Tanto el emisor deberá bufferear los paquetes que aún no fueron confirmados. Esto también es necesario del lado del receptor
* El rango de números de secuencia y los requerimientos del buffer dependerán de la forma en la que el protocolo responden a los paquetes perdidos. Existen principalmente dos protocolos
	* [[Protocolo Go-Back-N|Go-Back-N]]
	* [[Protocolo Selective Repeat|Selective Repeat]]