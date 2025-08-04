---
dia: 2024-08-23
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Enlace
  - carrera/ingeniería-en-informática/redes/Capa-de-Enlace
  - investigación/ciencias-de-la-computación/Networking/Protocolos
  - investigación/networking/Protocolos
  - investigación/protocolos/protocolo-de-internet
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/redes/Capa de Enlace/Resumen.md]]"
---
# Definición
---
Este [[Protocolo|protocolo]] requiere que uno de los nodos del canal sea el master node. Este será el encargado de seleccionar cada uno de los nodos utilizando [[Política de planificación Round Robin|round-robin]]. El master node le indicará a cada uno de los nodos del canal, la máxima cantidad de frames que puede enviar y en qué momento, de forma cíclica y continua

Este protocolo permite aprovechar los nodos inactivos, permitiendo una eficiencia mucho mayor, pero con algunas desventajas. La primera es que se debe introducir un polling delay, necesario para notificar al próximo nodo que puede enviar [[Información|información]]. Una segunda desventaja importante es que si falla el nodo maestro, el canal entero se vuelve inoperante