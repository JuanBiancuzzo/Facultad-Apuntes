---
dia: 2025-05-21
etapa: ampliar
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
  > [!teorema]+ Teorema 5.3.7 (Vector aleatorio degenerado) 
  > Sea $X$ un [[Vector aleatorio|vector aleatorio]]. Su [[Covarianza cruzada#^def-5-3-2|matriz de covarianza]] $Cov(X)$ es una [[Matriz singular|singular]] si y solo si existe un vector $v \ne 0$ tal que $$ \mathbb{P}\left[ v^T (X - E[X]) = 0 \right] = 1 $$
> 
> En ese caso decimos que $X$ es un vector aleatorio degenerado
> 
> > [!demostracion]- Demostración
> > $(\implies)$ Quiero probar que si $Cov(X)$ es singular por lo tanto $\exists v \ne 0$ entonces $\mathbb{P}\left[ v^T (X - E[X]) = 0 \right] = 1$
> > 
> > Entonces $v^T Cov(X) v = 0$, por ser una matriz singular. Ahora definimos $Y = v^T (X - E[X])$. Para cualquier $a > 0$, la [[Desigualdad de Markov|cota de Markov]] establece que $$ \mathbb{P}\left( Y^2 \ge a \right) \le \frac{E\left[ Y^2 \right]}{a} = \frac{v^T Cov(X) v}{a} = 0 $$
> > Luego, $\mathbb{P}\left( Y^2 = 0 \right) = 1$, y por ende
> > 
> > $(\impliedby)$ Quiero probar que $\exists v \ne 0$ entonces $\mathbb{P}\left[ v^T (X - E[X]) = 0 \right] = 1$, y por lo tanto $Cov(X)$ es singular
> > 
> > Definimos $Y = v^T(X - E[X]) \in \mathbb{R}$ una [[Variable aleatoria|variable aleatoria]], de [[Varianza|varianza]] nula y por lo tanto $\mathbb{Y = 0} = 1$. Entonces $$ \sigma^2_Y = E[Y^2] = v^T Cov(X) v = 0 $$
> > Esto implica que $Cov(X)$ es singular
^teo-5-3-7

Este teorema nos permite ver, que si se da el caso que nuestro vector aleatorio es degenerado, entonces podemos hacer un cambio de base, y reducir la dimensión del vector aleatorio 


