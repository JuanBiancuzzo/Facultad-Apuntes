---
dia: 2024-08-05
tags:
  - ingeniería-en-informática/analisis-2/Nomenclatura
  - nota/facultad
  - ingeniería-en-informática/discreta/Grafos
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
aliases:
  - Producto cartesiano entre grafos#Entre grafos
---
# Definición
---
Se define el producto cartesiano entre dos [[Conjunto|conjuntos]] $A$ y $B$ se representa con $A \times B$ y es el conjunto de pares ordenados cuyo primer elemento pertenece a $A$ y el segundo a $B$ $$ A \times B \doteq \Set{ (a, b) : a \in A \land b \in B } $$
Si se trata del producto cartesiano de $n$ conjuntos $A_1, \cdots, A_n$ $$ A_1 \times \cdots \times A_n \doteq \Set{ (a_1, \cdots, a_n) : a_k \in A_K, k = 1, \cdots, n } $$ donde $(a_1, \cdots, a_n)$ se denomina $n$-upla ordenada de los elementos que se indican en ella

## Entre grafos
---
Definimos la operación del producto cartesiano entre $G$ y $H$ como $G \times H$, donde $$ V(G \times H) = V(G) \times V(H) $$ donde se usa el producto cartesiano para todos los pares generados

Luego, $\forall v,~w \in V(G)$, $\forall v, h \in V(H)$, entonces $$ (u,~v)(w,~h) \in E(G \times H) $$
Observemos que el [[Orden de un grafo|orden]] es $n(G \times) = n(G) \cdot n(H)$, y que el [[Tamaño de un grafo|tamaño]] es $m = n(H)~m(G) + n(G) ~ m(H)$