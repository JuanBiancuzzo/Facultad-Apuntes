---
dia: 2024-08-01
tags:
  - ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
  - ingeniería-electrónica/redes/Capa-de-Red
aliases:
  - CIDR
  - Mask of an IP Address
  - Mascara de una dirección IP
  - Prefijo de una dirección IP
  - Prefix of an IP Address
---
# Definición
---
La estrategia de asignación de [[Internet Protocol Versión 4|direcciones de internet]] se conoce como Classless Interdomain Routing. La [[Internet Protocol Address|dirección IP]] se divide en dos secciones y tiene la forma `a.b.c.d/x`, donde `x` indica el número de bits en la primera parte de la dirección, esta sección se la conoce como el mascara. La sección de `a.b.c.d` se la conoce como prefijo.

Este número esta guardado como un [[Número binario|número binario]] de $32$ bits, donde los primeros `x` bits tienen valor $1$ mientras que los restantes tienen valor $0$

