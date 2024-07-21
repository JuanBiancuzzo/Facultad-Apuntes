---
dia: 2024-01-13
capitulo: 1
tags:
  - proba/Teoría-de-probabilidades
---
### Definición
---
Para cada [[Sucesión|sucesión]] decreciente de [[Evento|eventos]] $$ A_1 \ge A_2 \ge A_3 \ge \cdots $$
tal que $$ \bigcap^{\infty}_{i=1} A_i = \emptyset $$ vale que $$ \lim_{n \to \infty} \mathbb{P}(A_n) = 0 $$
#### Propiedades
---
1. Si $\overline{A}$ es el [[Evento|evento]] complementario de $A$, entonces $$ \mathbb{P}(\overline{A}) = 1 - \mathbb{P}(A) $$
2. Sean $A$ y $B$ eventos pertenecientes a $\Omega$, entonces $$ \mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B) $$
3. Si $A_1, A_2, \cdots, A_n$ es una [[Sucesión|sucesión]] de elementos de $A$, mutuamente excluyentes $2$ a $2$ entonces $$ \mathbb{P}\left( \bigcup^{n}_{i=1} A_i \right) = \sum^{n}_{i=1} \mathbb{P}(A_i) $$