---
dia: 2024-08-15
tags:
  - discreta/Grafos
  - nota/facultad
aliases:
  - Grado de una cara
---
# Definición
---
Definimos una cara de una [[Grafo planar|inmersión planar de un grafo]] como una [[Conjunto acotado|región acotada]] del mismo. Una inmersión es dividida en $f$ caras, todas excluyentes y completas. Toda inmersión tiene la cara externa, que rodea el [[Grafo|grafo]]

Toda [[Conjunto frontera|curva cerrada]] divide el plano en dos secciones, de la misma forma, definimos caras como secciones del plano, delimitadas por aristas. La frontera de una cara es el [[Camino#Ciclo (Cicle)|ciclo]] que recorre todos los vértices que la delimitan. Se observa que si una arista no separa dos caras, sino que está contenida en una, el [[Camino|camino]] debe recorrerla dos veces. Se define el grado de una cara, $d(f)$, como la [[Longitud de un camino|longitud de su frontera]]

Para todos as inmersiones, se cumple la fórmula de Euler $$ n - m + f = 2 $$ donde $n$ es el [[Orden de un grafo|orden]], y $m$ el [[Tamaño de un grafo|tamaño]] del grafo