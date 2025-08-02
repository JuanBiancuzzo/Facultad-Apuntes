---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/estoca/Repaso
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
aliases:
  - PMF
  - Función de masa de probabilidad conjunta#Para vector aleatoria
  - Conjunto de discontinuidades de una variable aleatoria#^conjunto-discontinuidad
  - PMF conjunta#Para vector aleatoria
etapa: ampliar
---
# Definición 
---
Sea $X$ una [[Variable aleatoria discreta|variable aleatoria discreta]], se llama función de probabilidad de $X$ a una [[Función|función]] $p_X : \mathbb{R} \to [0, 1]$ tal que $p_X(x) = \mathbb{P}(X = x)$ 

Cada resultado posible $x_i$ asociamos un numero $p_X(x_i) = \mathbb{P}(X = x_i)$ que debe cumplir
* $p_X(x_i) \geq 0, \forall i$ 
* $\displaystyle \sum_{x \in R_X} p_X(x) = 1$
Donde $R_X$ es el [[Rango de una variable aleatoria|rango]]

### Propiedades
---
Sea $X$ una variable aleatoria discreta 
* La probabilidad de un punto, con la función de la función de forma que $$ p_X(x_j) = \mathbb{P}(X = x_j) = F_{X^-}(x_j) - F_{X^+}(x_j) $$es la [[Función de distribución|función de distribución]] por izquierda menos la [[Función de distribución|función de distribución]] por derecha
* Dado un [[Conjunto|conjunto]] $A \subseteq R_X$ donde $R_X$ es el [[Rango de una variable aleatoria|rango]], entonces se puede calcular la probabilidad como $$ \mathbb{P}(X \in A) = \sum_{x \in A} P_X(x) $$
## Para vector aleatorio
---
Sea $X$ un [[Vector aleatorio|vector aleatorio]] con todas sus componentes son [[Variable aleatoria discreta|discretas]] si $F_X$ es constante por regiones y tiene un número finito o [[Infinito numerable|infinito numerable]] de discontinuidades. Su función de masa de probabilidad resulta $$ p_X(x) = p_{X_1,~ \cdots,~ X_n}(x_1,~ \cdots,~ x_n) = \mathbb{P}(X = x) $$ donde $x$ es uno de los puntos de discontinuidad de $F_X$

Llamamos $\mathcal{X}$ al [[Conjunto|conjunto]] que contiene a todos los puntos de discontinuidad de $F_X$ ^conjunto-discontinuidad
### Propiedades
---
Sea $X$ una variable aleatoria discreta. Su PMF, $p_X(x)$, satisface las siguientes propiedades 
* $p_X(x) \ge 0$, $\forall x \in \mathcal{X}$
* $\displaystyle F_X(x) = \sum_{u \in \mathcal{X}: ~ u \le x} p_X(u)$
* Probabilidad de una región $$ \mathbb{P}(X \in A) = \sum_{u \in \mathcal{X} \cap A} p_X(u) $$
* Probabilidad de un punto $$ \mathbb{P}(X = x) = p_X(x), ~~~ \forall x \in \mathcal{X} $$ en este caso, $\mathbb{P}(X = x)$ puede ser no nula