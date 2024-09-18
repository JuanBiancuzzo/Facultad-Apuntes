---
dia: 2023-01-23
tags:
  - proba/Representación-de-variables-aleatorias
  - nota/facultad
---
# Definición
---
Dada una [[Variable aleatoria]] $X$, si se quiere calcular la [[Esperanza]] pero cuando $X$ es una variable truncada ([[Truncamiento]]), en el conjunto $B$

$$ E[X | X \in B] = \frac{E[X \cdot \mathbb{1} \{ X \in B \}]}{\mathbb{P}(X \in B)} $$

Por lo tanto, podemos definir el conjunto $A$ siendo el conjunto de [[Átomo de una distribución|átomos]], la [[Función de distribución]] $F_X(x)$, y la [[Función de variable aleatoria]] $h(x)$

$$ E[X | X \in B] = \frac{1}{\mathbb{P}(X \in B)} \Bigg(\sum_{x \in A, x \in B}  h(x) \cdot \mathbb{P}(X = x) + \int_{x \in \mathbb{R} - A, x \in B} h(x) \cdot F_{X}'(x) \cdot dx \Bigg)$$
