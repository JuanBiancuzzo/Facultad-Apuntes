---
dia: 2024-08-09
tags:
  - discreta/Grafos
  - nota/facultad
aliases:
  - Grafo casi regular
---
### Definición
---
Sea el [[Grafo|grafo]] $G = \big( V(G),~E(G),~\Psi_G \big)$, se define este como un grafo regular si y solo si $$ \forall v \in V(G): ~~~ d(v) = c, ~~ c \in \mathbb{N} $$
Donde $d(v)$ es el [[Grado de un vértice|Grado del vértice]] $v$

#### Grafo casi regular
---
Si todos los vértices del grafo, excepto uno, tienen de [[Grado de un vértice|grado]] igual al [[Grafo#^647b10|grado mínimo]] $\delta(G)$  $$ \forall v \in \Set{v_1,~ \cdots,~ v_{k-1},~ v_{k+1},~ \cdots,~ v_{n(G)} } : ~~~ d(v) = \delta(G) $$
Donde la excepción $v_k$ tenga grado uno mayor al mínimo (haciéndolo el [[Grafo#^8663e2|máximo]]) $$ v_k \in V(G): ~~~ d(v_k) = \delta(G) + 1 = \Delta(G) $$
Entonces $G$ es un grafo casi regular
