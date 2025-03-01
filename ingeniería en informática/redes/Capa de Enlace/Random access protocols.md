---
dia: 2024-08-22
tags:
  - carrera/ingeniería-en-informática/redes/Capa-de-Enlace
  - nota/facultad
  - investigación/protocolos/protocolo-de-internet
  - carrera/ingeniería-electrónica/redes/Capa-de-Enlace
  - investigación/networking/Protocolos
  - investigación/ciencias-de-la-computación/Networking/Protocolos
---
# Definición
---
En este tipo de protocolos, los nodos transmiten datos a tasa completa a través del canal. Si ocurre una colisión, entonces reenviarán el [[Paquete|paquete]], pero no inmediatamente. Si el tiempo de espera es el mismo, entonces ocurrirá una colisión nuevamente. Es por esto que los nodos esperarán tiempos aleatorios antes de reenviar el paquete.

Existen muchos protocolos de este estilo, en esta sección estudiaremos los más conocidos
* [[ALOHA|ALOHA]]
* [[Slotted ALOHA|Slotted ALOHA]]
* [[Carrier Sense Multiple Access|Carrier Sense Multiple Access (CSMA)]]
* [[Carrier Sense Multiple Access with collision detection|Carrier Sense Multiple Access with collision detection (CSMA/CD)]]