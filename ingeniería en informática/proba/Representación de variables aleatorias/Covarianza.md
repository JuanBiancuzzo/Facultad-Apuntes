---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
etapa: ampliar
aliases:
  - Momento cruzado central
  - Covarianza cruzada
  - Momento cruzado#^momento-cruzado
  - Correlación cruzada#^momento-cruzado
  - Matriz de covarianza#Para variables aleatorias
  - Matriz de correlación#Para variables aleatorias
  - Variables aleatorias ortogonales#^variables-ortogonales
  - Variables aleatorias descorrelacionadas#^variables-descorrelacionadas
  - Vector aleatorio degenerado#^teo-4-1-1
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $X$ e $Y$ dos [[Variable aleatoria|variable aleatoria]], donde se define la covarianza (en [[Función|función]] de la [[Esperanza|esperanza]]) como $$\begin{align} 
    Cov(X, Y) &= E\bigg[ (X - E[X]) \cdot (Y - E[Y]) \bigg] \\ 
    Cov(X, Y) &= E[X \cdot Y] - E[X] \cdot E[Y] 
\end{align}$$
Donde $E[XY]$ también es conocido como momento cruzado o correlación cruzada ^momento-cruzado

## Para variables aleatorias
---
Sea $X \in \mathbb{R}^n$ un [[Vector aleatorio|vector aleatorio]]. La [[Matriz|matriz]] de covarianza de $X$ es $$ Cov(X) = E\bigg[ (X - E[X]) \cdot (X - E[X])^T \bigg] $$ donde $$ X - E[X] = \begin{bmatrix} X_1 - E[X_1] \\ \vdots \\ X_n - E[X_n] \end{bmatrix} $$
Lo podemos plantear como $$ Cov(X) = \begin{bmatrix} 
    Var(X_1) & Cov(X_1,~ X_2) & \cdots & Cov(X_1,~ X_n) \\
    Cov(X_2,~ X_1) & Var(X_2) & \cdots & Cov(X_2,~ X_n) \\
    \vdots & \vdots & \ddots & \vdots \\
    Cov(X_n,~ X_1) & Cov(X_n,~ X_2) & \cdots & Var(X_n) \\
\end{bmatrix} $$
De forma similar, podemos obtener la matriz de correlación de $X$, la cual es $$ R(X) = E\left[ X \cdot X^T \right] $$
Considerando la [[Función de densidad generalizada|PDF generalizada]] $f_X$ tenemos $$ R(X) = \int_{\mathbb{R}^n} x ~ x^T ~ f_X(x) ~ dx = \begin{bmatrix} 
    E[X_1^2] & E[X_1,~ X_2] & \cdots & E[X_1,~ X_n] \\
    E[X_2,~ X_1] & E[X_2^2] & \cdots & E[X_2,~ X_n] \\
    \vdots & \vdots & \ddots & \vdots \\
    E[X_n,~ X_1] & E[X_n,~ X_2] & \cdots & E[X_n^2] \\
\end{bmatrix} $$
Notemos que si $E[X_i] = 0$ para todo $i \in [1,~ \cdots,~ n]$, entonces $Cov(X) = R(X)$

## Propiedades
---
* Si $X$ e $Y$ son [[Variables aleatorias independientes|variables independientes]], entonces $Cov(X, Y) = 0$ recordando que $E[X \cdot Y] = E[X] \cdot E[Y]$ en este caso
    * Si $X,~ Y \sim \mathcal{N}(\mu, \sigma^2)$ y $Cov(X,~ Y) = 0$ entonces $X$ e $Y$ son independientes
    * Lo mismo para [[Distribución de Bernoulli|Bernoulli]]
    * Para todo las demás no se puede deducir si son independientes o no
* $Cov(a + b \cdot X, c + d \cdot Y) = b \cdot d \cdot Cov(X, Y)$
* $\begin{align} Cov(a_1 \cdot X_1 + a_2 \cdot X_2, a_3 \cdot X_3 + a_4 \cdot X_4) &= a_1 \cdot a_3 \cdot Cov(X_1, X_3) \\&+ a_2 \cdot a_3 \cdot Cov(X_2, X_3) \\&+ a_1 \cdot a_4 \cdot Cov(X_1, X_4) \\&+ a_2 \cdot a_4 \cdot Cov(X_2, X_4)\end{align}$ 
* $Cov(X + Y, Z) = Cov(X, Z) + Cov(Y, Z)$ 
* $Var(X + Y) = Var(X) + Var(Y) + 2 \cdot Cov(X, Y)$ (usando la [[Varianza|varianza]])


Para las matrices $Cov(X)$ y $R(X)$
* Estas matrices son [[Matriz simétrica|matrices simétricas]] 
* Son [[Matriz semidefinida positiva|matrices semidefinidas positivas]]
* $Cov(X) = R(X) - E[X] ~ E[X]^T$
* Si $R(X)$ es una [[Matriz diagonal|matriz diagonal]], $E[X_i ~ E_j] = \delta_{i,~ j} ~ E[X_i^2]$ (donde $\delta_{i,~ j}$ es la [[Delta de Kronecker|delta de Kronecker]]) y decimos que las componentes de $X$ son ortogonales de a dos ^variables-ortogonales
    * En este caso, $C(X,~Y) = -E[X] ~ E[Y]$
* Si $Cov(X)$ es una matriz diagonal, $Cov(X_1,~ X_2) = \delta_{i,~ j} ~ Var(X_i)$ y decimos que las componentes de $X$ están descorrelacionadas de a dos ^variables-descorrelacionadas
    * En este caso, $R(X,~ Y) = E[X~Y] = E[X] ~ E[Y]$
* Dada una [[Transformación afín|transformación afín]] $Y = AX + b$ entonces 
    * $E[Y] = A ~ E[X] + b$
    * $Cov(Y) = A Cov(X) A^T$

Hay que tener cuidado, que si $X$ e $Y$ son independientes, entonces $X$ e $Y$ están descorrelacionadas, pero no se puede decir la opuesta

### Vector aleatorio degenerado
---
  > [!teorema]+ Teorema 4.1.1 (Vector aleatorio degenerado) 
  > Sea $X$ un [[Vector aleatorio|vector aleatorio]]. Su [[Covarianza#Para variables aleatorias|matriz de covarianza]] $Cov(X)$ es una [[Matriz singular|singular]] si y solo si existe un vector $v \ne 0$ tal que $$ \mathbb{P}\left[ v^T (X - E[X]) = 0 \right] = 1 $$
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
^teo-4-1-1

Este teorema nos permite ver, que si se da el caso que nuestro vector aleatorio es degenerado, entonces podemos hacer un cambio de base, y reducir la dimensión del vector aleatorio 


## Observación
---
Lo importante de la covarianza es el signo
* Si $Cov(X, Y) > 0$ entonces cuando crece $X$, crece $Y$ y si decrece $X$, decrece $Y$.
* Si $Cov(X, Y) < 0$ entonces cuando crece $X$, decrece $Y$ y si decrece $X$, crece $Y$.