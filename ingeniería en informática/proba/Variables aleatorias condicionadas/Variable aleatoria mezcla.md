---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Variables-aleatorias-condicionadas
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Variables-aleatorias-condicionadas
---
# Definición
---
Dado una [[Variable aleatoria|variable aleatoria]] $X$ se dice que es una variable aleatoria mezcla, si para una [[Partición|partición]] $A_1, \cdots, A_n$ del [[Espacio muestral|espacio muestral]] $\Omega$, su [[Función de distribución|función de distribución]] es $$ F_X(x) = \mathbb{P}(X \leq x) = \sum_{k = 1}^n F_{X|A_k}(x) \cdot \mathbb{P}(A_k) $$ donde $F_{X|A_k}(x)$ es la función de distribución de una [[Variable aleatoria condicional|variable aleatoria condicional]]

Teniendo una [[Variable aleatoria mezcladora|variable aleatoria mezcladora]] $M$, se define su función de distribución es $$ F_X(x) = \sum_{m \in R_M} F_{X | M = m}(x) \cdot \mathbb{P}(M = m) $$ donde $R_M$ es el [[Rango de una variable aleatoria|rango]] de $M$

El calculo de la [[Esperanza|esperanza]] esta dado por $$ E[X] = \sum_{m \in R_M} E[X|M=m] \cdot \mathbb{P}(M = m) $$

## Con una variable aleatoria discreta
---
* Entonces la [[Función de probabilidad|función de probabilidad]] se puede calcular como $$ p_X(x) = \sum_{m \in R_M} p_{X | M = m}(x) \cdot \mathbb{P}(M = m) $$ donde se usa una [[Variable discreta condicional|variable discreta condicional]]

## Con una variable aleatoria continua
---
* Entonces la [[Función de densidad|función de densidad]] se puede calcular como $$ f_X(x) = \sum_{m \in R_M} f_{X | M = m}(x) \cdot \mathbb{P}(M = m) $$ donde se usa una [[Variable continua condicional|variable continua condicional]]
