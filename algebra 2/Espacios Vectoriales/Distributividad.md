---
dia: 2023-04-08
tags:
  - algebra-2/Espacios-Vectoriales
  - nota/facultad
  - discreta/Álgebra-proposicional
---
### Definición
---
Sea $A$ un [[Conjunto|conjunto]] dado en el que se han definido dos operaciones binarias $(\circ, \star)$. Entonces:

* La operación $\circ$ es distributiva por la izquierda con respecto de la operación $\star$ si se cumple que dados tres elementos $a, b, c \in A$, entonces $$ a \circ (b \star c) = (a \circ b) \star (a \circ c) $$
* La operación $\circ$ es distributiva por la derecha con respecto de la operación $\star$ si se cumple que dados tres elementos $a, b, c \in A$, entonces $$ (b \star c) \circ a = (b \circ a) \star (c \circ a) $$
* La operación $\circ$ es distributiva respecto de la operación $\star$ si es distributiva por la derecha y distributiva por la izquierda.

#### Casos específicos
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ p ~ (q + r) = pq + pr, ~~~~ p + qr = (p + q)(p + r) $$ ^5d5bd9

Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ P \cap (Q \cup R) = (P \cap Q) \cup (P \cap R), ~~~~ P \cup (Q \cap R) = (P \cup Q) \cap (P \cup R) $$ ^2904a4

Para el [[Álgebra de Boole|álgebra de Boole]] $(B,~+,~\cdot,~',~0_B,~1_B)$ se tiene 

$$ \forall x, y, z \in B: ~~~~~ x (y + z) = xy + xz, ~~~ x + yz = (x + y)(x + z) $$ ^174ba9

Para un [[Espacio vectorial|espacio vectorial]] $V$, un [[Cuerpo|cuerpo]] $\mathbb{K}$ y la operación [[algebra 2/Espacios Vectoriales/Ley de composición externa.md|producto por escalar]] $\cdot$ respecto a los escalar, se tiene

$$ (\alpha + \beta) \cdot u = \alpha \cdot u + \beta \cdot u, ~~~ \forall u \in\mathbb{V}, ~~ \alpha, \beta \in\mathbb{K} $$ ^787267

Para un [[Espacio vectorial|espacio vectorial]] $V$, un [[Cuerpo|cuerpo]] $\mathbb{K}$ y la operación producto por escalar $\cdot$ respecto de la suma de vectores, se tiene

$$ \alpha \cdot (u + v) = \alpha \cdot u + \alpha \cdot v, ~~~ \forall u, v   \in\mathbb{V}, ~~ \alpha \in\mathbb{K} $$ ^cb49a0