---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
etapa: ampliar
aliases:
  - Momento cruzado central
  - Momento cruzado#^momento-cruzado
  - Correlación cruzada#^momento-cruzado
  - Variables aleatorias ortogonales#^def-5-2-4
  - Variables aleatorias descorrelacionadas#^def-5-2-5
  - Matriz de covarianza cruzada#^def-5-3-2
  - Matriz de autocovarianza#^def-5-3-4
  - Autocovarianza para un proceso estocástico#Para un proceso estocástico
referencias: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $X$ e $Y$ dos [[Variable aleatoria|variable aleatoria]], donde se define la covarianza (en [[Función|función]] de la [[Esperanza|esperanza]]) como $$ \begin{align} 
    Cov(X,~ Y) &= E\Big[ (X - E[X]) ~ (Y - E[Y]) \Big] \\ 
    Cov(X,~ Y) &= E[X Y] - E[X] ~ E[Y] 
\end{align} $$donde $E[X Y]$ es la [[Correlación cruzada|correlación cruzada]]

### Propiedades
---
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


> [!definicion]+ Definición 5.2.5 (Variables descorrelacionadas) 
> Si $Cov(X)$ es una [[Matriz diagonal|matriz diagonal]], $Cov(X_1,~ X_2) = \delta_{i,~ j} ~ Var(X_i)$ y decimos que las componentes de $X$ están descorrelacionadas de a dos
> 
> En este caso, podemos decir que la [[Correlación cruzada|correlación cruzada]] esta dada por $$ R(X,~ Y) = E[X~Y] = E[X] ~ E[Y] $$
^def-5-2-5

> [!proposicion]+ Proposición 5.2.6  
> Si dos [[Variable aleatoria|variables aleatorias]] $X$ e $Y$ son [[Variables aleatorias independientes|independientes]], entonces son descorrelacionadas $Cov(X,~ Y) = 0$. Notar que esto no implica la opuesta
> 
> > [!demostracion]- Demostración
> > Para demostrarlo basta con observar que si son dos independientes, entonces $$ E[XY] = E[X] ~ E[Y] $$ por lo tanto $$ Cov(X,~ Y) = E[X Y] - E[X] ~ E[Y] = 0 $$
^prop-5-2-6

## Para vector aleatorio
---
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
Tiene la relación con la [[Correlación cruzada|correlación cruzada]] $$ Cov(X,~ Y) = R(X,~ Y) - E[X] ~ E[Y]^T $$

Dada una [[Transformación afín|transformación afín]] $Y = AX + b$ entonces $$ Cov(Y) = A Cov(X) A^T $$

La autocovarianza es una [[Matriz semidefinida positiva|matriz semidefinida positiva]] y [[Matriz simétrica|simétrica]] 
    * Al ser simétrica, es [[Diagonalización de una matriz|diagonalizable]], y en este caso diagonalizable ortogonalmente es decir que lo vamos a poder descomponer de la siguiente forma $$ Cov(X) = PD_1P^T $$
## Para un proceso estocástico
---
Dado un [[Proceso estocástico|proceso estocástico]] $X$ definimos su autocovarianza (si existe) como $$ C_X(t_1,~ t_2) = E[(X(t_1) - \mu_X(t_1)) ~ (X(t_2) - \mu_X(t_2))] $$

Si se considera $t_1 = t_2 = t$ tengo la varianza en función del tiempo $$ Var(X)(t) = \sigma_X^2(t) = C_X(t,~ t) = Var(X(t)) $$
Trabajando con dos procesos podemos definir la correlación cruzada $$ C_{X,~ Y}(t_1,~ t_2) = Cov\left( X(t_1) ~ Y^T(t_2) \right) $$
### Propiedades
---
Tiene la relación con la [[Correlación cruzada#Para un proceso estocástico|autocorrelación]] $$ C_X(t_1,~ t_2) = R_X(t_1,~ t_2) - \mu_X(t_1) ~ \mu_X(t_2) $$

Para la correlación cruzada, los procesos son [[Procesos conjuntamente estacionarios en sentido estricto|conjuntamente ESE]], entonces depende de la diferencia de los tiempos $$ C_{X,~ Y}(t,~ t + \tau) \equiv C_{X,~ Y}(\tau) $$