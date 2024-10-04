---
dia: 2023-01-23
tags:
  - proba/Representación-de-variables-aleatorias
  - nota/facultad
---
# Definición
---
Sea $X$ una [[Variable aleatoria|variable aleatoria]], definimos la varianza de $X$ (usando la [[Esperanza|esperanza]]) como $$ Var(X) = E[(X - E[X])^2] $$donde podemos pensar que se usa la [[Función|función]] $h(x) = ( x - E[X] )^2$, por lo tanto podemos plantear el calculo de la varianza $$\begin{matrix}
	Var(X) =\sum_{x \in A} h(x) \cdot \mathbb{P}(X = x) + \int_{x \in \mathbb{R} - A} h(x) \cdot F_{X}'(x) \cdot dx
	\\ \\
	Var(X) =\sum_{x \in A} ( x - E[X] )^2 \cdot \mathbb{P}(X = x) + \int_{x \in \mathbb{R} - A} ( x - E[X] )^2 \cdot F_{X}'(x) \cdot dx
\end{matrix}$$
Tambien se puede calcular más simple $$ Var(X) = E[X^2] - E[X]^2 $$
## Propiedades
---
* $Var(a \cdot X) = a^2 \cdot Var(X)$
* $Var(X + Y) = Var(X) + Var(Y) + 2 \cdot Cov(X, Y)$ donde $Cov(X, Y)$ es la [[Covarianza|covarianza]], recordemos que si $X$ e $Y$ son [[Variables aleatorias independientes|independientes]] entonces $Cov(X, Y) = 0$
