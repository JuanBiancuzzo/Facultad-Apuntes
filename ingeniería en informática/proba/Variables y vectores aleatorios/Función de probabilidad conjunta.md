---
dia: 2023-01-23
tags:
  - ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
---
# Definición
---
Sean $X$, $Y$ dos [[Variable aleatoria discreta|variable aleatoria discreta]] definidas en el [[Espacio muestral|espacio muestral]] $\Omega$ de un experimento. La [[Función de probabilidad|función de probabilidad]] conjunta se define para cada par de números $(x, y)$ como 
$$ p_{X, Y}(x, y) = \mathbb{P}(X = x, Y = y) $$
Donde debe cumplir
1. $p_{X, Y}(x, y) \geq 0$
2. $\sum_x \sum_y p_{X, Y}(x, y) = 1$


## Calculo de probabilidad de un intervalo
---
Dado un [[Conjunto|conjunto]] $A \subseteq R_{X, Y}$ es el [[Rango de un vector|rango]], entonces se puede calcular la [[Probabilidad|probabilidad]] como $$ \mathbb{P}((X, Y) \in A) = \sum \sum{}_{(x, y) \in A}p_{X, y}(x, y) $$
