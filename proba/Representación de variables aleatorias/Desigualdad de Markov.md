---
dia: 2023-01-23
capitulo: 3
tags:
  - proba/Representación-de-variables-aleatorias
---
### Definición
---
Sea $h : \mathbb{R} \to \mathbb{R}^+$, una [[Función de variable aleatoria]], tal que $h$ es $par$, y restringida a $\mathbb{R}^+$ es creciente, y sea $X$ una [[Variable aleatoria]] tal que la [[Esperanza]] ($E[h(X)]$) existe, entonces 
$$ \begin{align} 
	\forall t \in \mathbb{R} && \mathbb{P}(|X| \geq t) \leq \frac{E[h(X)]}{h(t)}
\end{align} $$
si además $X$ es no negativa
$$ \begin{align} 
	\forall a > 0 && \mathbb{P}(X \geq a) \leq \frac{E[X]}{a}
\end{align} $$
