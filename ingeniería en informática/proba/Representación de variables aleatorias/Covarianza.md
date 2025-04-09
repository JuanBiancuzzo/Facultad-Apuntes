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
  - Variables aleatorias ortogonales#^def-5-2-4
  - Variables aleatorias descorrelacionadas#^def-5-2-5
  - Vector aleatorio degenerado#^teo-4-1-1
  - Matrix de correlación cruzada#^def-5-3-1
  - Matrix de covarianza cruzada#^def-5-3-2
  - Matriz de autocorrelación#^def-5-3-3
  - Matriz de autocovarianza#^def-5-3-4
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $X$ e $Y$ dos [[Variable aleatoria|variable aleatoria]], donde se define la covarianza (en [[Función|función]] de la [[Esperanza|esperanza]]) como $$ \begin{align} 
    Cov(X,~ Y) &= E\Big[ (X - E[X]) ~ (Y - E[Y]) \Big] \\ 
    Cov(X,~ Y) &= E[X Y] - E[X] ~ E[Y] 
\end{align} $$
Donde $E[X Y]$, denotado $R(X,~ Y)$, también es conocido como momento cruzado o correlación cruzada ^momento-cruzado

### Propiedades
---
Si $X$ e $Y$ son [[Variables aleatorias independientes|variables independientes]], entonces $Cov(X, Y) = 0$ recordando que $E[X ~ Y] = E[X] ~ E[Y]$ en este caso
* Si $X,~ Y \sim \mathcal{N}(\mu, \sigma^2)$ y $Cov(X,~ Y) = 0$ entonces $X$ e $Y$ son independientes
* Lo mismo para [[Distribución de Bernoulli|Bernoulli]]
* Para todo las demás no se puede deducir si son independientes o no

Dado una [[Combinación lineal|combinación lineal]] de variables aleatorias tenemos la siguiente expansión $$ \begin{align} 
    Cov(a \cdot X_1 + b \cdot X_2, c \cdot X_3 + d \cdot X_4) 
     &= a \cdot c \cdot Cov(X_1, X_3) \\
     &+ b \cdot c \cdot Cov(X_2, X_3) \\
     &+ a \cdot d \cdot Cov(X_1, X_4) \\
     &+ b \cdot d \cdot Cov(X_2, X_4) 
\end{align} $$ Es [[Distributividad|distributiva]] con respecto a la suma $$ Cov(X + Y,~ Z) = Cov(X,~ Z) + Cov(Y,~ Z) $$ 
Tiene una relación con la [[Varianza|varianza]] $$ Var(X + Y) = Var(X) + Var(Y) + 2 \cdot Cov(X,~ Y) $$
Si $Cov(X,~ Y) > 0$ entonces tienen más probabilidad valores donde ambas están arriba o abajo de sus medias al mismo tiempo 
* Crecen o decrecen juntas respecto de sus medias

Si $Cov(X,~ Y) < 0$ entonces tienen más probabilidad valores donde una esta por encima y la otra por debajo de su media
* Una crece y la otra decrece respecto de su media


> [!definicion]+ Defiinción 5.2.4 (Variables ortogonales) 
> Si $R(X)$ es una [[Matriz diagonal|matriz diagonal]], $E[X_i ~ E_j] = \delta_{i,~ j} ~ E[X_i^2]$ (donde $\delta_{i,~ j}$ es la [[Delta de Kronecker|delta de Kronecker]]) y decimos que las componentes de $X$ son ortogonales entre las dos
> 
> En este caso, $C(X,~Y) = -E[X] ~ E[Y]$
^def-5-2-4

> [!definicion]+ Definición 5.2.5 (Variables descorrelacionadas) 
> Si $Cov(X)$ es una matriz diagonal, $Cov(X_1,~ X_2) = \delta_{i,~ j} ~ Var(X_i)$ y decimos que las componentes de $X$ están descorrelacionadas de a dos
> 
> En este caso, $R(X,~ Y) = E[X~Y] = E[X] ~ E[Y]$
^def-5-2-5

> [!proposicion]+ Proposición 5.2.6  
> Si dos [[Variable aleatoria|variables aleatorias]] $X$ e $Y$ son [[Variables aleatorias independientes|independientes]], entonces son descorrelacionadas $Cov(X,~ Y) = 0$. Notar que esto no implica la opuesta
> 
> > [!demostracion]- Demostración
> > Para demostrarlo basta con observar que si son dos independientes, entonces $$ E[XY] = E[X] ~ E[Y] $$ por lo tanto $$ Cov(X,~ Y) = E[X Y] - E[X] ~ E[Y] = 0 $$
^prop-5-2-6

## Para vector aleatorio
---
Tenemos las siguientes definiciones

> [!definicion]+ Definición 5.3.1 (Matriz de correlación cruzada entre $X$ e $Y$) 
> Sean $X \in \mathbb{R}^n$ e $Y \in \mathbb{R}^m$ [[Vector aleatorio|vectores aleatorios]]. La [[Matriz|matriz]] de correlación es $$ R(X,~ Y) = E\left[ X \cdot Y^T \right] \in \mathbb{R}^{n \times m} $$
> 
> Notemos que podemos ver cada elemento de la matriz de la siguiente forma $$ [R(X,~ Y)]_{i,~ j} = E[X_i ~ Y_j] = R(X_i,~ X_j) $$
^def-5-3-1

> [!definicion]+ Definición 5.3.2 (Matriz de covarianza cruzada entre $X$ e $Y$) 
> Sean $X \in \mathbb{R}^n$ e $Y \in \mathbb{R}^m$ [[Vector aleatorio|vectores aleatorios]]. La [[Matriz|matriz]] de covarianza es $$ Cov(X,~ Y) = E\bigg[ (X - E[X]) \cdot (Y - E[Y])^T \bigg] \in \mathbb{R}^{n \times m} $$ donde $$ X - E[X] = \begin{bmatrix} X_1 - E[X_1] \\ \vdots \\ X_n - E[X_n] \end{bmatrix} $$ 
> 
> Donde lo podemos expresar como $$ Cov(X,~ Y) = \begin{bmatrix} 
>     Cov(X_1, Y_1) & Cov(X_1,~ Y_2) & \cdots & Cov(X_1,~ Y_n) \\
>     Cov(X_2,~ Y_1) & Cov(X_2, Y_2) & \cdots & Cov(X_2,~ Y_n) \\
>     \vdots & \vdots & \ddots & \vdots \\
>     Cov(X_n,~ Y_1) & Cov(X_n,~ Y_2) & \cdots & Var(Y_n) \\
> \end{bmatrix} $$
> 
> Notemos que podemos ver cada elemento de la matriz de la siguiente forma $$ [Cov(X,~ Y)]_{i,~ j} = Cov(X_i,~ X_j) $$
^def-5-3-2

> [!definicion]+ Definición 5.3.3 (Matriz de autocorrelación) 
> Sea $X \in \mathbb{R}^n$ un [[Vector aleatorio|vector aleatorio]]. La [[Matriz|matriz]] de autocorrelación es $$ R(X) = E[X \cdot Y^T] \in \mathbb{R}^n $$
> 
> Considerando la [[Función de densidad generalizada|PDF generalizada]] $f_X$ tenemos $$ R(X) = \int_{\mathbb{R}^n} x ~ x^T ~ f_X(x) ~ dx = \begin{bmatrix} 
>     E[X_1^2] & E[X_1,~ X_2] & \cdots & E[X_1,~ X_n] \\
>     E[X_2,~ X_1] & E[X_2^2] & \cdots & E[X_2,~ X_n] \\
>     \vdots & \vdots & \ddots & \vdots \\
>     E[X_n,~ X_1] & E[X_n,~ X_2] & \cdots & E[X_n^2] \\
> \end{bmatrix} $$
> 
> Notemos que si $E[X_i] = 0$ para todo $i \in [1,~ \cdots,~ n]$, entonces $Cov(X) = R(X)$
^def-5-3-3

> [!definicion]+ Definición 5.3.4 (Matriz de autocovarianza) 
> Sea $X \in \mathbb{R}^n$ un [[Vector aleatorio|vector aleatorio]]. La [[Matriz|matriz]] de autocovarianza es $$ Cov(X) = E\bigg[ (X - E[X]) \cdot (X - E[X])^T \bigg] \in \mathbb{R}^{n \times n} $$
> 
> Donde la podemos expresar como $$ Cov(X) = \begin{bmatrix} 
>     Var(X_1) & Cov(X_1,~ X_2) & \cdots & Cov(X_1,~ X_n) \\
>     Cov(X_2,~ X_1) & Var(X_2) & \cdots & Cov(X_2,~ X_n) \\
>     \vdots & \vdots & \ddots & \vdots \\
>     Cov(X_n,~ X_1) & Cov(X_n,~ X_2) & \cdots & Var(X_n) \\
> \end{bmatrix} $$
^def-5-3-4

### Propiedades
---
Para las matrices $Cov(X)$ y $R(X)$
* Estas matrices son [[Matriz simétrica|matrices simétricas]] 
    * Al ser así, es [[Diagonalización de una matriz|diagonalizable]], y en este caso diagonalizable ortogonalmente es decir que lo vamos a poder descomponer de la siguiente forma $$ \begin{array}{c} Cov(X) = PD_1P^T && R(X) = QD_2Q^T \end{array} $$
* Son [[Matriz semidefinida positiva|matrices semidefinidas positivas]]

Tienen la relación $$ Cov(X,~ Y) = R(X,~ Y) - E[X] ~ E[Y]^T $$
Dada una [[Transformación afín|transformación afín]] $Y = AX + b$ entonces 
* $Cov(Y) = A Cov(X) A^T$

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