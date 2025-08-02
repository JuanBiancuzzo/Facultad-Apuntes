---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/estoca/Repaso
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
aliases:
  - PDF
  - Función de densidad conjunta#Para vector aleatoria
  - PDF conjunta#Para vector aleatoria
etapa: ampliar
---
# Definición
---
Una [[Función|función]] $f_X : \mathbb{R} \to \mathbb{R}$, para $X$ siendo una [[Variable aleatoria continua|variable aleatoria continua]], que satisface las siguientes condiciones
* $f_X(x) \geq 0, \forall x \in \mathbb{R}$
* $\displaystyle \int_{-\infty}^{\infty} f_X(x) dx = 1$
* Dado una variable aleatoria continua $X$ se calcula la [[Probabilidad|probabilidad]] en un intervalo $(a, b)$ como  $$ \mathbb{P}(a < X < b) = \int_a^b f_X(x) dx $$ para cualquier $a$ y $b$ tales que $-\infty < a < b < \infty$ tenemos 
* Sea $F_X(x)$ la [[Función de distribución|función de distribución]] de una variable aleatoria continua, luego $$ f_X(x) = \frac{d}{dx} F_X(x) $$
## Para vector aleatoria
---
Sea $X$ un [[Vector aleatorio|vector aleatorio]], con sus componentes [[Variable aleatoria continua|continuas]], si $F_X$ es continua y existen sus [[Derivada parcial de orden superior|derivadas parciales]] de orden $n$. Su función de función de densidad de [[Probabilidad|probabilidad]] resulta $$ f_X(x) = f_{X_1,~ \cdots,~ X_n}(x_1,~ \cdots,~ x_n) = \frac{\partial^n}{\partial x_1 \cdots \partial x_n} F_{X_1,~ \cdots,~ X_n}(x_1,~ \cdots,~ x_n) $$
### Propiedades
---
La $f_X$ satisface las siguientes propiedades
* $f_{X_1,~ \cdots,~ X_n}(x_1,~ \cdots,~ x_n) \ge 0,~ \forall x \in \mathbb{R}^n$
* $\displaystyle F_X(x) = \int_{-\infty}^{x_1} \cdots \int_{-\infty}^{x_n} f_X(u) ~ du, ~~ \text{para} ~ x = [x_1,~ \cdots,~ x_n]^T$
* Probabilidad de una región $$ \mathbb{P}(X \in A) = \int_{u \in A} f_X(u) ~ du $$
* Probabilidad de un punto
    * Si $X$ es un vector aleatorio continuo, entonces $$ P(X = x_0) = 0,~ \forall x_0 \in \mathbb{R}^n $$
