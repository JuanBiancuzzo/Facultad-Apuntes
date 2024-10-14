---
dia: 2024-08-30
tags:
  - redes/Capa-Física-Inalámbrica
  - nota/facultad
  - protocolos
aliases:
  - Agente Discovery in Mobile IP
  - Care-of address#^COA
  - COA#^COA
---
# Definición
---
Con agent advertisement, un nodo extranjero o local publicita sus servicios a partir una extensión del existing [[Router|router]] discovery protocol. El agente periódicamente envía mensajes [[Internet Control Message Protocol|ICMP]] con el type field en 9, a todos los links a los que está conectado. Esto permite a los nodos móviles, aprender la dirección de los agentes. Los campos más 
importantes en la extensión, son

* Home agent bit (H)
    * Indica que es un agente local para la red en la cual reside
* Foreign agent bit (F)
    * Indica que es un agente externo a la red en la cual reside
* Registration required bit (R)
    * Indica que un usuario local debe registrarse con el agente externo. No puede simplemente obtener la COF y sumir la funcionalidad del agente externo por sí mismo
* M, G encapsulation bits
    * Indica si una forma de encapsulación que no sea IP-in-IP es utilizada
* Care-of address (COA) fields ^COA
    * Una lista de uno o más COA provista por el agente externo. El agente externo seleccionará una de las direcciones cuando se registra con su agente local

Con agent solicitation, un nodo móvil que quiere descubrir agentes puede realizarlo sin necesidad de esperar un [[Internet Protocol Versión 4|broadcast]] de los mismos. Para hacerlo, realiza un broadcast de un agent solicitation message. Este es un [[Paquete|paquete]] ICMP con un `type value` de $10$. Cuando un agente recibe la solicitud, este envía un agent advertisement directamente al nodo móvil ([[Unicast|unicast]])