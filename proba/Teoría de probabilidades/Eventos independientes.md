---
dia: 2024-01-13
tags:
  - proba/Teoría-de-probabilidades
  - nota
---
### Definición
---
Sea $(\Omega, \mathscr{A}, \mathbb{P})$ un [[Espacio de probabilidad|e.p.]], $A$ y $B \in \mathscr{A}$, $A$ y $B$ serán dos [[Evento|eventos]] independientes sii $$ \mathbb{P}(A \cap B) = \mathbb{P}(A) ~ \mathbb{P}(B) $$

#### Propiedades
---
1. Si $A$ y $B$ son independientes, también la son $A$ y $\overline{B}$, $\overline{A}$ y $B$, $\overline{A}$ y $\overline{B}$
2. $A_1, \cdots, A_n$ son independientes sii para cada [[Sucesión|sucesión]] de $k$ [[Conjunto|conjuntos]] $2 \le k \le n$, la [[Probabilidad|probabilidad]] de la intersección de los $k$ sucesos coincide con el producto de las probabilidades
3. Si $\mathbb{P}(B) > 0$, cuando $A$ y $B$ son independientes, la [[Probabilidad condicional|probabilidad condicional]] se simplifica $$ \mathbb{P}(A | B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} = \frac{\mathbb{P}(A) ~ \mathbb{P}(B)}{\mathbb{P}(B)} = \mathbb{P}(A) $$