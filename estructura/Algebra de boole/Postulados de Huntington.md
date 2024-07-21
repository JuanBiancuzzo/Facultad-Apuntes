---
dia: 2023-04-08
capitulo: 3
tags:
  - estructura/Algebra-de-boole
---
### Definición
---
Diremos que este [[Conjunto]] y las operaciones así definidas: $\left(B, ', \oplus, \odot \right)$ son un [[Álgebra de Boole]], si cumple los siguiente axiomas:

1) Ley [[Asociatividad|asociativa]] con respecto a la suma: $$ \forall a, b, c \in B: ~ (a \oplus b) \oplus c = a \oplus (b \oplus c) $$
2) Ley [[Asociatividad|asociativa]] con respecto al producto: $$ \forall a, b, c \in B: ~ (a \odot b) \odot c = a \odot (b \odot c) $$
3) Existencia del [[Elemento neutro]] para la suma: $$ \forall a, b \in B: ~ a \oplus \emptyset = a $$
4) Existencia del [[Elemento neutro]] para el producto: $$ \forall a, b \in B: ~ a \oplus U = a $$ donde $U$ es el conjunto de todos los elementos
5) Ley [[Conmutatividad|conmutativa]] para la suma: $$ \forall a, b, c \in B: ~ (a \oplus b) = (b \oplus a) $$
6) Ley [[Conmutatividad|conmutativa]] para el producto: $$$ \forall a, b, c \in B: ~ (a \odot b) = (b \odot a) $$
7) Ley [[Distributividad|distributiva]] de la suma con respecto al producto: $$ \forall a, b, c \in B: ~ a \oplus (b \odot c) = (a \oplus b) \odot (a \oplus c) $$
8) Ley [[Distributividad|distributiva]] del producto con respecto a la suma: $$ \forall a, b, c \in B: ~ a \odot (b \oplus c) = (a \odot b) \oplus (a \odot c) $$
9) Existencia del [[Complementario]] para la suma: $$ \forall a \in B: ~ \exists a' \in B: ~ a \oplus a' = U $$ donde $U$ es el conjunto de todos los elementos.
10) Existencia del [[Complementario]] para el producto: $$ \forall a \in B: ~ \exists a' \in B: ~ a \odot a' = \emptyset $$