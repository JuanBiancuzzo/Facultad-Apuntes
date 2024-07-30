---
dia: 2023-04-03
tags:
  - orga/Compresión
  - nota/facultad
---
### Definición
---
Se define la distancia entre dos cadena como $$ KD(x, y) = K(xy) - \min\Set{K(x), K(y)} $$
Donde $K(x)$ es la [[Complejidad de Kolmogorov]].

Cuando $x$ e $y$ son cadenas con la misma complejidad, y su concatenación es la misma que $x$ o $y$ esta distancia nos da $0$. En el caso de ser [[Cadena aleatorio|aleatorios]] entonces esta distancia nos da $\max\Set{K(x), K(y)}$.