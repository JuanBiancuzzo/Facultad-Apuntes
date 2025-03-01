---
dia: 2024-08-23
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
Este [[Protocolo|protocolo]] requiere que uno de los nodos del canal sea el master node. Este será el encargado de seleccionar cada uno de los nodos utilizando [[Política de planificación Round Robin|round-robin]]. El master node le indicará a cada uno de los nodos del canal, la máxima cantidad de frames que puede enviar y en qué momento, de forma cíclica y continua

Este protocolo permite aprovechar los nodos inactivos, permitiendo una eficiencia mucho mayor, pero con algunas desventajas. La primera es que se debe introducir un polling delay, necesario para notificar al próximo nodo que puede enviar [[Información|información]]. Una segunda desventaja importante es que si falla el nodo maestro, el canal entero se vuelve inoperante