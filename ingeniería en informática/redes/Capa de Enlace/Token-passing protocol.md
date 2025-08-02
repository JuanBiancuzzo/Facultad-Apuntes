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
---
# Definición
---
Consiste en la existencia de un [[Frame|frame]] de propósito especial que es intercambiado entre los nodos en un orden fijo y cíclico (cada nodo se lo envía al siguiente)

Los nodos pueden únicamente enviar [[Información|información]] si tienen el [[Token|token]], y puede enviar hasta un [[Máximo|máximo]] definido antes de tener que devolver el token. Si un nodo no tiene información a enviar, entonces únicamente reenvía el token

Algunas desventajas de este [[Protocolo|protocolo]] es que si un nodo falla, el canal completo falla. Además, si un nodo accidentalmente no libera el token, se debe invocar algún protocolo de recuperación para que vuelva a circulación

Esta tecnología sirve para tiempo real, pero no es utilizada de esta forma hoy en día. Por encima de [[Ethernet]], se utiliza el protocolo Token Bus para prevenir colisiones