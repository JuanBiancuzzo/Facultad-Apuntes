---
dia: 2023-02-27
---
# [[Distribución Beta]] y [[Distribución uniforme]]
---
Dada $X$ con distribución Beta de parámetros $1$ y $1$, $X \sim \beta(1, 1)$ es equivalente a una distribución uniforme de parámetros $0$ y $1$, $X \sim U(0, 1)$.

# [[Distribución Chi cuadrado]]
---
Si $X_1, \cdots, X_n$ son [[Variables independientes|independientes]] con $X_i \sim \chi_{v_i}^2$, $i =1, \cdots, n$, entonces $Y = \sum_{i = 1}^n X_i$ tendrá distribución $\chi_v^2$, con $v = \sum_{i = 1}^n v_i$

# [[Distribución Chi cuadrado]] y [[Distribución Normal]]
---
Si $X_1, \cdots, X_n$ son [[Variables independientes|independientes]] con $X_i \sim N(0,1)$ distribución normal, y $U = \sum_{i = 1}^n X_i^2$ entonces $U \sim \chi_n^2$.

Sean $X_1, \cdots, X_n$ son [[Variables independientes|independientes]] con $X_i \sim N(\mu, \sigma^2)$, entonces $W = \displaystyle\sum_{i = 1}^n \frac{(X_i - \overline{X})}{\sigma^2} \sim \chi_{n  - 1}^2$.

Sean $X_1, \cdots, X_n$ son [[Variables independientes|independientes]] con $X_i \sim N(\mu, \sigma^2)$, entonces $W = \displaystyle\sum_{i = 1}^n \frac{(X_i - \mu)^2}{\sigma^2} \sim \chi_{n}^2$.


# [[Distribución Chi cuadrado]] y [[Distribución Gamma]]
---
Dado $X$ con distribución Gamma de parametros $\frac{k}{2}$ y $\frac{1}{2}$, con $k \in \mathbb{N}$, $X \sim \Gamma(\frac{k}{2}, \frac{1}{2})$ es equivalente a una distribución Chi cuadrado.


# [[Distribución Chi cuadrado]], [[Distribución Normal]] y [[Distribución t-Student]]
---
Sean $Z \sim N(0, 1)$ una distribución normal y $U \sim \chi_n^2$ una distribución chi cuadrado, entonces si $Z$ y $U$ son [[Variables independientes|independientes]] $$ T = \frac{Z}{\sqrt{\displaystyle\frac{U}{n}}} \sim t_n $$ donde $\lim_{n \to \infty} t_n \sim N(0, 1)$ una distribución t-student.

# [[Distribución Normal]]
---
Sean $X_1, \cdots, X_n$ son [[Variables independientes|independientes]] con $X_i \sim N(\mu, \sigma^2)$ entonces $Z = \sqrt{n} \frac{\overline{X} - \mu}{\sigma} \sim N(\mu = 0, \sigma^2 = 1)$.


# [[Distribución exponencial]]
---
Siendo $X_1, X_2, \cdots, X_n$ independientes y $X_i \sim \varepsilon(\lambda_i)$ entonces podemos definir: $$U = \min_{i \in \Set{1, \cdots, n}} X_i \sim \varepsilon\left(\sum_{i = 1}^n \lambda_i \right)$$y $$ \mathbb{P}(U = x_j) = \frac{\lambda_j}{\displaystyle\sum_{i = 1}^{n} \lambda_i}, j = 1, 2, 3, \cdots,  n $$


# [[Distribución exponencial]] y [[Distribución Gamma]]
---
Si $X_1, \cdots X_n \sim Exp(\lambda)$, [[Variables independientes|independientes]] entre si, entonces $\displaystyle \sum_{i = 1}^{n} X_i \sim \Gamma(n, \lambda)$ su suma es una distribución gamma.

Dado $X$ con distribución Gamma de parametros $1$ y $\lambda$, $X \sim \Gamma(1, \lambda)$ es equivalente a una Distribución exponencial $X \sim \varepsilon(\lambda)$.


# [[Distribución exponencial]] y [[Distribución Chi cuadrado]]
---
Si $X_1, \cdots X_n \sim Exp(\lambda)$, [[Variables independientes|independientes]] entre si, entonces $2 \cdot \lambda \displaystyle \sum_{i = 1}^{n} X_i \sim \chi_{2n}^2$ su suma es una distribución chi cuadrado.


# [[Distribución Gamma]] y [[Distribución Weibull]]
---
Dado $X$ con distribución Gamma de parametros $1$ y $\lambda$, $X \sim \Gamma(1, \lambda)$ es equivalente a una distribución Weibull de parametros $1$ y $\frac{1}{\lambda}$, $X \sim Wei(1, \frac{1}{\lambda})$. 


# [[Distribución t-Student]] y [[Distribución Normal]]
---
Sean $X_1, \cdots, X_n$ son [[Variables independientes|independientes]] con $X_i \sim N(\mu, \sigma^2)$, si definimos $$S^2 = \frac{1}{n - 1} \sum_{i = 1}^n (X_i - \overline{X})^2  $$ entonces $T = \sqrt{n} \frac{(\overline{X} - \mu)}{S} \sim t_{n-1}$.


# [[Distribución Weibull]] y [[Distribución exponencial]]
---
Cuando se tiene una [[Variable aleatoria]] $X \sim Wei(c, 2)$ entonces $X^2 \sim Exp(\frac{1}{c^2})$ tiene una distribución exponencial.


# [[Distribución de Bernoulli]] y [[Distribución Binomial]]
---
Sean $X_1, \cdots, X_n$ son [[Variables independientes|independientes]] con $X_i \sim Ber(p)$, si definimos $$ Y = \sum_{i = 0}^n X_i $$ entonces $Y \sim B(n, p)$ con distribución binomial.


Dado $X$ con distribución binomial de parametros $1$ y $p$, $X \sim B(1, p)$ es equivalente a una [[Distribución de Bernoulli]].


# [[Distribución de Bernoulli]] y [[Distribución Geométrica]]
---
Sea $N$ la cantidad de ensayos de Bernoulli, con probabilidad $p$, hasta el primer exito, por lo tanto $N \sim G(p)$.


# [[Distribución Geométrica]] y [[Distribución de Pascal]]
---
Si $X_1, \cdots X_n \sim G(p)$, [[Variables independientes|independientes]] entre si, y definimos $$ Y = \displaystyle \sum_{i = 1}^{n} X_i \sim Pas(n, p)$$ entonces $Y \sim Pas(n, p)$ es una distribución de Pascal.


Dado $X$ con Distribución de Pascal de parametros $1$ y $p$, $X \sim Pas(1, p)$ es equivalente a una [[Distribución Geométrica]]. 


# [[Distribución de Poisson]]
---
Sea $X_n$ un [[Vector aleatorio]] donde $X_i  \sim Poi(\mu_i)$, y los [[Variables independientes|intependiente]] entre si. Entonces $$ \sum^n X_i \sim Poi\left(\sum^n \mu_i \right) $$