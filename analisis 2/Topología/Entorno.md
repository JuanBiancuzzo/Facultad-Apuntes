---
dia: 2023-01-22
tags:
  - nota/facultad
  - analisis-2/Topología/1
  - discreta/Grafos
aliases:
  - Entorno abierto de un vértice
  - Entorno cerrado de un vértice
---
# Definición
---
El entorno de un punto $a \in \mathbb{R}^n$, es todo [[algebra 2/Espacios Vectoriales/Conjunto.md|conjunto]] capaz de incluir una [[Disco abierto|disco abierto]] con centro en el punto $a$. Denotado como $E(a)$

## Entorno abierto de un vértice
---
Dado un [[Grafo|grafo]] $G = \big( V(G),~E(G),~\Psi_G \big)$, se define el entorno abierto de un vértice es el conjunto de vértices que se conectan con él directamente, y se define $$ \Gamma(v) = \Set{ x \in V(G),~ x \ne v:~~~ \exists e \in E(G):~~ \Psi_G(e) = \set{x,~ v} } $$
## Entorno cerrado de un vértice
---
Dado un grafo $G = \big( V(G),~E(G),~\Psi_G \big)$, se define el entorno cerrado de un vértice es el conjunto de vértices que se conectan con él directamente incluyendo el [[Camino|camino]] trivial propio, y se define $$ \Gamma[v] = \Gamma(v) \cup \Set{ v,~ v } $$
