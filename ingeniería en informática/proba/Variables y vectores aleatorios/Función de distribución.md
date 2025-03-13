---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
aliases:
  - Función de distribución para vector aleatorio#Para variable aleatoria
  - Función de distribución acumulada#Para variable aleatoria
  - CDF
etapa: ampliar
---
# Definición
---
Sea $(\Omega, \mathbb{A}, \mathbb{P})$ un [[Espacio de probabilidad|espacio de probabilidad]] y $X$ una [[Variable aleatoria|variable aleatoria]], definimos su función de distribución $F_X : \mathbb{R} \to [0, 1]$ dada por 
$$ F_X(x) = P(X \leq x), \forall x \in \mathbb{R} $$

### Propiedades
---
* $F_X(x) \in [0, 1], \forall x \in \mathbb{R}$
* $F_X(x)$ es [[Función monótona|monótona]] no decreciente
* $F_X(x)$ es continua por derecha
* $\lim_{x \to -\infty} F_X(x) = 0$ y $\lim_{x \to \infty} F_X(x) = 1$
* $\mathbb{P}(X \in I) = \mathbb{P}(a < X \leq b) = F_X(b) - F_X(a) ~~~ I = (a, b]$
* $\mathbb{P}(X \in I) = \mathbb{P}(a < X < b) = (F_X(b) - \mathbb{P}(b)) - F_X(a) ~~~ I = (a, b)$
* $\mathbb{P}(X \in I) = \mathbb{P}(a \leq X < b) = F_X(b) - \mathbb{P}(b) - (F_X(a) - \mathbb{P}(a)) ~~~ I = [a, b)$
* $\mathbb{P}(X \in I) = \mathbb{P}(a \leq X \leq b) = F_X(b) - (F_X(a) - \mathbb{P}(a)) ~~~ I = [a, b]$

## Para variable aleatoria
---
Sea $X = (X_1,~ \cdots,~ X_n)$ un [[Vector aleatorio|vector aleatorio]] de [[Dimensión|dimensión]] $n$, definimos una [[Función de distribución|función de distribución]] de $X$ como $$ F_X(x) = \mathbb{P}(X_1 \leq x_1, \cdots, X_n \leq x_n) $$

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