---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - colección/distribuciones/distribución
  - distribuciones/multivariada
  - nota/colección
  - nota/facultad
nombreDistribucion: Normal multivariada
tipoDistribucion: multivariada
aliases:
  - Vector aleatorio normal
  - Vector aleatorio gaussiano
---
# Definición
---
Se dice que el [[Vector aleatorio|vector aleatorio]] $X = [X_1, X_2, \cdots, X_p]^T$ tiene distribución normal multivariada de dimensión $p$, de parámetros $\mu \in \mathbb{R}^p$ y $\Sigma \in \mathbb{R}^{p \times p}$ que es la [[Covarianza cruzada#^def-5-3-4|matriz de autocovarianza]] la cual tiene que ser inversible, si su [[Función de densidad de probabilidad|función de densidad conjunta]] esta dada por $$ f_X(x) = \frac{1}{\sqrt{(2 \pi)^p ~ \det(\Sigma)}} \cdot \exp\left( -\frac{1}{2} \cdot (x - \mu)^T \cdot \Sigma^{-1} \cdot (x - \mu) \right) $$ donde $X$ y $x$ son vectores en $\mathbb{R}^p$

También se puede definir de la siguiente forma, se dice que $X$ es un vector aleatorio normal de [[Esperanza#Para vector aleatorio|media]] $\mu_X$ y matriz de autocovarianza $C_X$ si y sólo si su [[Función característica|función característica]] es $$ \Phi_X(\omega) =  \exp\left( j\omega^T \mu_X \right) ~ \exp\Bigg( -\frac{ \omega^T C_X \omega }{2} \Bigg)  $$
### Notación
$$ X \sim \mathcal{N}_p(\mu, \Sigma) $$

## Notas
---
Se define $\mu = (E[X_1], E[X_2], \cdots, E[X_p])$ y $$ \Sigma = \begin{bmatrix} 
    Var(X_1) && Cov(X_1, X_2) && \cdots && Cov(X_1, X_p) \\ 
    Cov(X_2, X_1) && Var(X_2) && \cdots && Cov(X_2, X_p) \\ 
    \vdots && \vdots && \ddots && \vdots \\ 
    Cov(X_p, X_1) && Cov(X_p, X_2) && \cdots && Var(X_p)
\end{bmatrix}$$

> [!proposicion]+ Proposición 5.3.5 (Dependencia lineal) 
> Un [[Vector aleatorio|vector aleatorio]] normal $X = AZ + b$ es degenerado si y sólo si con probabilidad $1$ alguna(s) de las componentes del vector centrado $$ \tilde{X} = X - b = AZ \sim \mathcal{N}(0,~ AA^T) $$ son [[Combinación lineal|combinación lineal]] de las demás
^prop-5-3-5

En este caso, se tiene que eliminar las componentes linealmente dependientes para obtener un vector no degenerado

# Propiedades
---
Si $X \sim \mathcal{N}_p(0, diag(\lambda_1, \cdots, \lambda_p))$ entonces $X_1, \cdots, X_p$ son [[Variables aleatorias independientes|independientes]] y $X_i \sim \mathcal{N}(0, \lambda_i)$

> [!proposicion]+ Proposición 5.3.6 (Transformación lineal) 
> Cualquier [[Transformación lineal|transformación lineal]] de un [[Vector aleatorio|vector aleatorio]] normal, tiene también distribución normal
> 
> Si $X \sim \mathcal{N}_p(\mu, \Sigma)$ y $A \in \mathbb{R}^{p \times n}$ entonces $A \cdot X + b \sim \mathcal{N}_n(\mu = A \cdot \mu + b, \Sigma = A \cdot \Sigma \cdot A^T)$
> 
> > [!demostracion]- Demostración
> > Si $X = [X_1,~ \cdots,~ X_n]$ es normal, entonces, podemos expresarlo como $$ X = AZ + \mu_X $$ para cierta matriz $A$ y $Z$ un vector normal estándar
> > 
> > Si definimos otro vector como $Y = [Y_1,~ \cdots,~ Y_m]$ como una transformación lineal de $X$ $$ Y = BX + b $$ con $B$ de $m \times n$ y $b \in \mathbb{R}^m$, entonces $$ Y = BA Z + B \mu_X + b $$ será un vector aleatorio normal $m$-dimensional
^prop-5-3-6

Sea $Y = \displaystyle\sum_{i = 1}^{n} a_i \cdot X_i$ entonces $Y \sim \mathcal{N}\bigg(\mu = \displaystyle\sum_{i = 1}^{n} a_i \cdot \mu_i, \sigma^2 = \sum_{i = 1}^{n} a_i^2 \cdot \sigma_i^2 \bigg)$ tiene una [[Distribución Normal|distribución normal]]

Por la [[Distribución Normal multivariada#^prop-5-3-6|proposición 5.3.6]] podemos decir que cualquier subvector del vector aleatorio normal es, a su vez, un vector normal, la cual incluye a las [[Función de densidad marginal|marginales]]

Para la distribución normal multivariada se tiene que sus variables son [[Covarianza cruzada#^def-5-2-5|descorrelacionadas]] entonces sus componentes son independientes

Para encontrar la función característica de la normal multivariada $Z \sim \mathcal{N}_p(0,~ \mathbb{I}_p)$, usando la [[Distribución Normal#^funcion-caracteristica-normal-estandar|función característica para la normal estándar]] y las propiedades de las funciones características para componentes independientes obtenemos $$ \Psi_Z(\omega) = \exp\left( -\frac{\lVert \omega \rVert^2}{2} \right) $$ donde $\lVert \cdot \rVert$ es la [[Norma|norma]], y como en el caso uni-dimensional, que salvo por un factor de escala, la función característica del vector aleatoria estándar tiene su misma forma y en cierto sentido podemos pensar que la distribución normal estándar es una [[Autovector|autofunción]] de esta transformación

Teniendo $X \sim N_p(\mu_X,~ C_X)$, usando las propiedades sobre transformaciones afín donde tenemos $$ X = AZ + b $$ donde $C_X = A A^T$ y $b = \mu_X$

Aplicando la transformación obtenemos $$ \begin{align} 
    \Psi_X(\omega) &= \exp\left( j\omega^T \mu_X \right) ~ \Psi_Z\left( A^T \omega \right) \\
     &= \exp\left( j\omega^T \mu_X \right) ~ \exp\left( -\frac{\left\lVert A^T \omega \right\rVert^2}{2} \right) \\
     &= \exp\left( j\omega^T \mu_X \right) ~ \exp\Bigg( -\frac{ \omega^T ~ \overbrace{A A^T}^{C_X} ~\omega }{2} \Bigg) \\
     &= \exp\left( j\omega^T \mu_X \right) ~ \exp\Bigg( -\frac{ \omega^T C_X \omega }{2} \Bigg) \\
\end{align} $$
Como para la función característica no aparece, a diferencia de la función de densidad, $C_X^{-1}$ entonces existe para cualquiera sea su $C_X$, sin importar si es un [[Vector aleatorio degenerado|vector aleatorio degenerado]] o no

### Simulación
---
Se desea generar $m$ muestras independientes del vector normal $$ X = [X_1,~ \cdots,~ X_n]^T \sim \mathcal{N}(\mu_X,~ C_X) $$
1. Generar $m$ muestras independientes del vector $Z = \mathcal{N}(0,~ \mathbb{I}_m)$
2. Obtener la matriz $A$ por algún método como 
    * Se puede usar la [[Factorización de Cholesky|factorización de Cholesky]] 
    * Se puede hacer [[Diagonalización de una matriz|diagonalizando]] la matriz de autocovarianza
3. Para cada realización $z_i$, $1 \le i \le m$, hacer $$ x_i = A ~ z_i + \mu_X $$