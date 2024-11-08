---
dia: 2023-04-03
tags:
  - ingeniería-en-informática/orga/Compresión
  - nota/facultad
---
# Definición
---
Dado un método de compresión $C$, y basandonos en la [[Distancia de Kolmogorov normalizada]], asumimos que ese compresor $C$ es el mejor posible, por lo tanto, se define la distancia de compresión como: $$ NCD(x, y) = \frac{C(xy) - \min\Set{C(x), C(y)}}{\max\Set{C(x), C(y)}} $$
Donde mientras mejor sea la compresión $C$ más se acercará al la distancia de kolmogorov normalizada.