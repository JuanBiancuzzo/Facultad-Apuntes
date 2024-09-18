---
dia: 2024-06-05
aliases:
  - Control plane
tags:
  - redes/Capa-de-Red
  - nota/facultad
---
# Definición
---
El rol principal del control plane es el de coordinar estos envíos para que los [[Paquete|datagramas]] sean transferidos end-to-end, a lo largo de los caminos de [[Router|routers]] entre los [[Host|hosts]] en comunicación

## Control por cada Router
---
Los [[Routing algorithms|routing algorithms]] determinan el contenido de la [[Forwarding table|forwarding table]]. Para hacerlo, se comunican con los [[algo 1/Introducción a la programación/Algoritmo|algoritmos]] de otros routers intercambiando routing information de acuerdo a un [[Routing protocol|routing protocol]], computado así su propia tabla

## Control centralizado
---
Existen un [[Controlador|controlador]] lógico y centrado que computa y distribuye las [[Forwarding table|tablas]] de envío para cada router. El controlador interactúa con el [[Control agent|control agent]] de cada router a través de un protocolo definido

A pesar de que se lo trata como un controlador único, este puede ser un sistema distribuido