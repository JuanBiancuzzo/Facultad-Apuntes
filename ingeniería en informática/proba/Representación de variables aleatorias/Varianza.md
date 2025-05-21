---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
etapa: ampliar
aliases:
  - Variable discreta degenerada#^variable-degenerada
  - Variable degenerada#^variable-degenerada
referencias: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $X$ una [[Variable aleatoria|variable aleatoria]], definimos la varianza de $X$ (usando la [[Esperanza|esperanza]]) como $$ Var(X) = E[(X - E[X])^2] $$donde podemos pensar que se usa la [[Función|función]] $h(x) = ( x - E[X] )^2$, por lo tanto podemos plantear el calculo de la varianza $$\begin{matrix}
	Var(X) =\sum_{x \in A} h(x) \cdot \mathbb{P}(X = x) + \int_{x \in \mathbb{R} - A} h(x) \cdot F_{X}'(x) \cdot dx
	\\ \\
	Var(X) =\sum_{x \in A} ( x - E[X] )^2 \cdot \mathbb{P}(X = x) + \int_{x \in \mathbb{R} - A} ( x - E[X] )^2 \cdot F_{X}'(x) \cdot dx
\end{matrix}$$
Tambien se puede calcular más simple $$ Var(X) = E[X^2] - E[X]^2 $$ donde el termino $E[X^2]$ como la [[Esperanza#^def-5-2-8|energía de la variable]] $X$

La varianza mide la dispersión de la variable en torno de su [[Esperanza|media]]. Mayor varianza implica mayor dispersión y menor varianza implica que la variable está más concentrada cerca de su media

## Propiedades
---
* $Var(a \cdot X + b) = a^2 \cdot Var(X)$
* Si $Var(x) = 0$ existe un único $x$ tal que $\mathbb{P}(X = x) = 1$, es decir que es una variable discreta degenerada ^variable-degenerada
* $Var(X + Y) = Var(X) + Var(Y) + 2 \cdot Cov(X, Y)$ donde $Cov(X, Y)$ es la [[Covarianza cruzada|covarianza]], recordemos que si $X$ e $Y$ son [[Variables aleatorias independientes|independientes]] entonces $Cov(X, Y) = 0$
