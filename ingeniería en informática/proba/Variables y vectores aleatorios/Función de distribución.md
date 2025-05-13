---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/estoca/Repaso-probabilidad
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
aliases:
  - Función de distribución para vector aleatorio#Para vector aleatoria
  - Función de distribución acumulada#Para vector aleatoria
  - CDF
  - Función de distribución conjunta#Para vector aleatorio
  - Función de distribución para un proceso estocástico#Para un proceso estocástico
  - Distribución finito dimensional#^FIDI
  - FIDI#^FIDI
etapa: ampliar
referencias: []
---
# Definición
---
Sea $(\Omega, \mathcal{A}, \mathbb{P})$ un [[Espacio de probabilidad|espacio de probabilidad]] y $X$ una [[Variable aleatoria|variable aleatoria]], definimos su función de distribución $F_X : \mathbb{R} \to [0, 1]$ dada por $$ F_X(x) = P(X \leq x), \forall x \in \mathbb{R} $$ que satisface lo siguiente
 * $F_X(x)$ es [[Función monótona|monótona]] no decreciente
* $F_X(x)$ es continua por derecha
* $\displaystyle \lim_{x \to -\infty} F_X(x) = 0$ 
* $\displaystyle \lim_{x \to \infty} F_X(x) = 1$


> [!teorema]+ Teorema 5.2.2  
> Toda [[Variable aleatoria|variable aleatoria]] admite una [[Función|función]] de distribución que nos permite calcular la [[Probabilidad|probabilidad]] de cualquier [[Evento|evento]] que la involucre
^teo-5-2-2


> [!teorema]+ Teorema 5.2.3  
> Para cualquier [[Función|función]] $F$ que sea una función de distribución existe una [[Variable aleatoria|variable aleatoria]] $X$ que la tiene como una función de distribución, es decir, tal que $F_X(x) = F$ y en particular un $(\Omega,~ \mathcal{A},~ \mathbb{P})$ asociado
^teo-5-2-3

### Propiedades
---
* $\mathbb{P}(X \in I) = \mathbb{P}(a < X \leq b) = F_X(b) - F_X(a) ~~~ I = (a, b]$
* $\mathbb{P}(X \in I) = \mathbb{P}(a < X < b) = (F_X(b) - \mathbb{P}(b)) - F_X(a) ~~~ I = (a, b)$
* $\mathbb{P}(X \in I) = \mathbb{P}(a \leq X < b) = F_X(b) - \mathbb{P}(b) - (F_X(a) - \mathbb{P}(a)) ~~~ I = [a, b)$
* $\mathbb{P}(X \in I) = \mathbb{P}(a \leq X \leq b) = F_X(b) - (F_X(a) - \mathbb{P}(a)) ~~~ I = [a, b]$

## Para vector aleatoria
---
Sea $X = (X_1,~ \cdots,~ X_n)$ un [[Vector aleatorio|vector aleatorio]] de [[Dimensión|dimensión]] $n$, definimos una [[Función de distribución|función de distribución]] de $X$ como $$ F_X(x) = \mathbb{P}(X_1 \leq x_1, \cdots, X_n \leq x_n) $$
Notemos que cada subvector de $X$ va a ser a su vez un vector aleatorio, con su propia función de distribución, y esta se la puede encontrar al [[Función de distribución marginal|marginalizar]] la función de distribución conjunta

### Propiedades
---
* Límite inferior
    * Si algún $x_i$ toma el valor $-\infty$, la función se anula $$ \begin{align} 
          \lim_{x_i \to -\infty} F_{X_1,~ \cdots,~ X_n}(x_1,~ \cdots,~ x_i,~ \cdots,~ x_n) &= \\
          \lim_{x_i \to -\infty} \mathbb{P}(X_1 \le x_1,~ \cdots,~ X_i \le x_i,~ \cdots,~ X_n \le x_n) &= 0
      \end{align} $$
* Límite superior
    * Si todos los $x_i$ toma el valor $\infty$, la función llega a $1$ $$ \begin{align} 
          \lim_{x_1,~ \cdots,~ x_n \to \infty} F_{X_1,~ \cdots,~ X_n}(x_1,~ \cdots,~ x_n) &= \\
          \lim_{x_1,~ \cdot,~ x_n \to \infty} \mathbb{P}(X_1 \le x_1,~ \cdots,~ X_n \le x_n) &= 1
      \end{align} $$
* $F_\mathbb{X_1,~ \cdots,~ X_n}(x_1,~ \cdots,~ x_n)$ es [[Función monótona|monótona]] no decreciente en cada variable
* Dado una vector aleatorio $\mathbb{X}$, se puede calcular la [[Probabilidad|probabilidad]] de que $\mathbb{X}$ este en un intervalo $(a_1, b_1) \times (a_2, b_2)$  $$\mathbb{P}((X, Y) \in (a_1, b_1) \times (a_2, b_2)) = F_\mathbb{X}(b_1, b_2) - F_\mathbb{X}(a_1, b_2) - F_\mathbb{X}(b_1, a_2) + F_\mathbb{X}(a_1, a_2)$$
## Para un proceso estocástico
---
Dado un [[Proceso estocástico|proceso]] $X(t)$, donde notemos que es una colección de variables aleatorias indexadas $$ \Set{ X(t) : t \in \mathcal{T} } $$ entonces si elegimos $n \in \mathbb{N}$ tiempos: $t_1 < t_2 < \cdots < t_n$ podemos definir un vector aleatorio $$ X(t_1,~ t_2,~ \cdots,~ t_n) = [X(t_1),~ X(t_2),~ \cdots,~ X(t_n)]^T $$ que está formado por las variables aleatorias del proceso en esos tiempos

Dicho vector tendrá una función de distribución $$ F_{X(t_1,~ \cdots,~ t_n)}(x_1,~ \cdots,~ x_n) = \mathbb{P}(X(t_1) \le x_1,~ \cdots,~ X(t_n) \le x_n) $$ y esta caracteriza al vector $X(t_1,~ \cdots,~ t_n)$ porque nos dice cómo se relacionan las variables que lo componentes, relacionando los tiempos indicados. Diremos que es una distribución finito dimensional (FIDI) de orden $n$ del proceso, porque involucra a $n$ tiempos ^FIDI

Siempre que se tenga una FIDI de orden $n$ se pueden obtener las FIDI de ordenes inferiores [[Función de distribución marginal|marginalizando]], pero para tener toda la información posible, tenemos que definir para todo $n \in \mathbb{N}$, para todo $(t_1,~ \cdots,~ t_n) \in \mathcal{T}^n$ con $t_1 < t_2 < \cdots < t_n$ debemos conocer las funciones $$ F_{X(t_1,~ \cdots,~ t_n)}(x_1,~ \cdots,~ x_n) = \mathbb{P}(X(t_1) \le x_1,~ \cdots,~ X(t_n) \le x_n) $$ donde este [[Conjunto|conjunto]] es el [[Conjunto de partes|conjunto partes]] de $\mathcal{T}$, el cual es muy grande


> [!teorema]+ Teorema 6.2.1 (Teorema de consistencia de Kolmogorov) 
> Dado un [[Conjunto|conjunto]] $\mathcal{T}$, sea una familia de funciones de distribución $$ \mathcal{F} = \Set{ F_{t_1,~ \cdots,~ t_n} : t_1 < \cdots < t_n,~ n \ge 1,~ t_i \in \mathcal{T} } $$ 
> Tal que
>  * Para cada $n \ge 1$, la función $F_{t_1,~ \cdots,~ t_n} : \mathbb{R}^n \to [0,~ 1]$ es una función de distribución ($F_X(x)$ es [[Función monótona|monótona]] no decreciente, $F_X(x)$ es continua por derecha, $\lim_{x \to -\infty} F_X(x) = 0$  y $\lim_{x \to \infty} F_X(x) = 1$) 
>  * Es consistente, es decir, si elijo $\set{ t_{k_1},~ \cdots,~ t_{k_m} } \subseteq \set{t_1,~ \cdots,~ t_n}$, entonces: $F_{t_{k_1},~ \cdots,~ t_{k_m}}$ es la [[Función de distribución marginal|marginal]] de $F_{t_1,~ \cdots,~ t_n}$ correspondientes a los indices $k_1,~ \cdots,~ k_m$
> 
> Entonces existe un [[Proceso estocástico|proceso estocástico]] con los tiempos $\mathcal{T}$ que tiene a $\mathcal{F}$ como su conjunto de FIDIs
^teo-6-2-1
