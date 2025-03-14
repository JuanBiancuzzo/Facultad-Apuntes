---
dia: 2023-04-03
tags:
  - carrera/ingeniería-en-informática/orga/Compresión
  - nota/facultad
---
# Definición
---
Sea $x$ una cadena, $K(x)$ es igual a la cantidad de [[Información#Bit|bits]] mínimo que debe tener un programa que genera $x$.

## Propiedades
---
* $0 \le K(x) \le |x|$
* $K(x) \le K(x) + K(y)$
* $K(xy) \ge K(x)$ y $K(xy) \ge K(y)$
* $K(xx) = K(x)$
* $K(xy) = K(yx)$
* $K(xy)+K(z) \le K(xz) + K(yz)$

Tiene el problema, que es imposible de calcular esta complejidad