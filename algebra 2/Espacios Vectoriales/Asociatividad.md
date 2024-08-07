---
dia: 2023-04-08
tags:
  - algebra-2/Espacios-Vectoriales
  - nota/facultad
  - discreta/Álgebra-proposicional
---
### Definición
---
Sea $A$ un [[Conjunto]] en el cual se definió una operación binaria [[Ley de composición interna|interna]] $\circ$ tal que $$\begin{matrix} 
	\circ: A \times A \to A \\ 
	(a, b) \to c = a \circ b
\end{matrix}$$
Se dice que la operación $\circ$ es asociativa si cumple que $$ \forall a, b, c \in A : ~ a \circ (b \circ c) = (a \circ b) \circ c $$
#### Casos específicos
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ (p + q) + r = p + (r + q), ~~~~ (pq)r = p(qr) $$ ^ce342d

Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ (P \cup Q) \cup R = P \cup (R \cap Q) , ~~~~ (P \cap Q) \cap R = P \cap (Q \cup R) $$ ^28e538

Para un [[Espacio vectorial|espacio vectorial]] $V$, y la [[Ley de composición interna|operación suma]] $+$, se tiene

$$ (u + v) + w = u + (v + w), ~~~ \forall u, v, w \in\mathbb{V} $$ ^70b300

Para un [[Espacio vectorial|espacio vectorial]] $V$, un [[Cuerpo|cuerpo]] $\mathbb{K}$ y la operación [[algebra 2/Espacios Vectoriales/Ley de composición externa.md|producto por escalar]] $\cdot$ respecto a los escalar, se tiene

$$ (\alpha \cdot \beta) \cdot u = \alpha \cdot ( \beta \cdot u ), ~~~ \forall u \in\mathbb{V}, ~~ \alpha, \beta \in\mathbb{K} $$ ^21d576