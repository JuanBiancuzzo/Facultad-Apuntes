---
dia: 2023-03-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/orga/Visualizaciones
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
etapa: ampliar
referencias: []
aliases:
  - Momento cruzado
  - Matriz de correlación cruzada#^def-5-3-1
  - Matriz de autocorrelación#^def-5-3-3
  - Autocorrelación de un proceso estocástico#Para un proceso estocástico
  - Correlación cruzada de un proceso estocástico#Para un proceso estocástico
vinculoFacultad:
  - tema: Distribuciones multivariables
    capitulo: 2
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
  - tema: Introducción a procesos aleatorios
    capitulo: 4
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
  - tema: Visualizaciones
    capitulo: 2
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Representación de variables aleatorias
    capitulo: 3
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Sean $X$ e $Y$ dos [[Variable aleatoria|variable aleatoria]], donde se define la correlación (en [[Función|función]] de la [[Esperanza|esperanza]]) como $$ R(X,~ Y) = E[X Y] $$también es conocido como momento cruzado o correlación cruzada

### Propiedades
---
Si $X$ e $Y$ son [[Variables aleatorias independientes|variables independientes]], entonces $Cov(X, Y) = 0$ recordando que $E[X ~ Y] = E[X] ~ E[Y]$ en este caso
* Si $X,~ Y \sim \mathcal{N}(\mu, \sigma^2)$ y $Cov(X,~ Y) = 0$ entonces $X$ e $Y$ son independientes
* Lo mismo para [[Distribución de Bernoulli|Bernoulli]]
* Para todo las demás no se puede deducir si son independientes o no


> [!definicion]+ Defiinción 5.2.4 (Variables ortogonales) 
> Si $R(X)$ es una [[Matriz diagonal|matriz diagonal]], $E[X_i ~ E_j] = \delta_{i,~ j} ~ E[X_i^2]$ (donde $\delta_{i,~ j}$ es la [[Delta de Kronecker|delta de Kronecker]]) y decimos que las componentes de $X$ son ortogonales entre las dos
> 
> En este caso, podemos decir que la [[Covarianza cruzada|covarianza cruzada]] esta dada por $$ Cov(X,~Y) = -E[X] ~ E[Y] $$
^def-5-2-4

## Para vector aleatorio
---
> [!definicion]+ Definición 5.3.1 (Matriz de correlación cruzada entre $X$ e $Y$) 
> Sean $X \in \mathbb{R}^n$ e $Y \in \mathbb{R}^m$ [[Vector aleatorio|vectores aleatorios]]. La [[Matriz|matriz]] de correlación es $$ R(X,~ Y) = E\left[ X \cdot Y^T \right] \in \mathbb{R}^{n \times m} $$
> 
> Notemos que podemos ver cada elemento de la matriz de la siguiente forma $$ [R(X,~ Y)]_{i,~ j} = E[X_i ~ Y_j] = R(X_i,~ X_j) $$
^def-5-3-1

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

### Propiedades
---
Tiene la relación con [[Covarianza cruzada#^def-5-3-2|covarianza cruzada]] $$ R(X,~ Y) = Cov(X,~ Y) + E[X] ~ E[Y]^T $$
La autocorrelación es una [[ingeniería en informática/algebra 2/Matrices unitarias y ortogonales/Matriz definida positiva|matriz semidefinida positiva]] y [[Matriz simétrica|simétrica]] 
    * Al ser simétrica, es [[Diagonalización de una matriz|diagonalizable]], y en este caso diagonalizable ortogonalmente es decir que lo vamos a poder descomponer de la siguiente forma $$ R(X) = QD_2Q^T $$

## Para un proceso estocástico
---
Dado un [[Proceso estocástico|proceso estocástico]] $X$ definimos su autocorrelación (si existe) como $$ R_X(t_1,~ t_2) = E[X(t_1) ~ X(t_2)] $$

Trabajando con dos procesos podemos definir la correlación cruzada $$ R_{X,~ Y}(t_1,~ t_2) = E\left[ X(t_1) ~ Y^T(t_2) \right] $$

### Propiedades
---
Tiene la relación con la [[Covarianza cruzada#Para un proceso estocástico|autocovarianza]] $$ R_X(t_1,~ t_2) = C_X(t_1,~ t_2) + \mu_X(t_1) ~ \mu_X(t_2) $$
Es una función simétrica, es decir $R_X(t_1,~ t_2) = R_X(t_2,~ t_1)$

Para la correlación cruzada, los procesos son [[Procesos conjuntamente estacionarios en sentido estricto|conjuntamente ESE]], entonces depende de la diferencia de los tiempos $$ R_{X,~ Y}(t,~ t + \tau) \equiv R_{X,~ Y}(\tau) $$


## Calculo para Python Pandas
---
En [[Pandas|Pandas]] el índice de [[Desvío estándar|correlación]] se puede calcular para todos los valores numéricos de un [[Data frame|data frame]] usando `dataFrame.cor`, dando otro data frame que es simétrico

Recordar que haya correlación no implica causalidad