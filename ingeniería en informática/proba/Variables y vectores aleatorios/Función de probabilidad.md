---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
---
# Definición 
---
Sea $X$ una [[Variable aleatoria discreta|variable aleatoria discreta]], se llama función de probabilidad de $X$ a una [[Función|función]] $p_X : \mathbb{R} \to [0, 1]$ tal que $p_X(x) = \mathbb{P}(X = x)$ 

Cada resultado posible $x_i$ asociamos un numero $p_X(x_i) = \mathbb{P}(X = x_i)$ que debe cumplir:
1) $p_X(x_i) \geq 0, \forall i$ 
2) $\sum_{x \in R_X} p_X(x) = 1$
Donde $R_X$ es el [[Rango de una variable aleatoria|rango]]


## Calculo de probabilidad de un punto
---
Sea $X$ una variable aleatoria discreta la probabilidad de un punto, con la función de la función de forma que:
$$ p_X(x_j) = \mathbb{P}(X = x_j) = F_{X^-}(x_j) - F_{X^+}(x_j) $$
Es la [[Función de distribución|función de distribución]] por izquierda menos la [[Función de distribución|función de distribución]] por derecha.


## Calculo de probabilidad en un intervalo
--- 
Dado un [[Conjunto|conjunto]] $A \subseteq R_X$ donde $R_X$ es el [[Rango de una variable aleatoria|rango]], entonces se puede calcular la probabilidad como:
$$ \mathbb{P}(X \in A) = \sum_{x \in A} P_X(x) $$
