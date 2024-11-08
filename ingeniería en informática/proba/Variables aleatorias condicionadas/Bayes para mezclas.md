---
dia: 2023-01-23
tags:
  - ingeniería-en-informática/proba/Variables-aleatorias-condicionadas
  - nota/facultad
---
# Definición
---
Sea $M$ una [[Variable aleatoria mezcladora|variable aleatoria mezcladora]] y $X$ una [[Variable aleatoria mezcla|variable aleatoria mezcla]], de manera que conozco la [[Función de probabilidad|función de probabilidad]] de $M$ y la [[Función de densidad|función de densidad]] de las variables aleatorias $X|M = m, \forall m \in R_M$.

La [[Función de probabilidad|función de probabilidad]] de $M$ dado que $X = x$ será $$ p_{M|X = x}(m) = \frac{f_{X|M = m}(x) \cdot \mathbb{P}(M = m)}{\displaystyle\sum_{i \in R_M} f_{X|M = i}(x) \cdot \mathbb{P}(M = i)} $$

# Observación
---
Es el equivalente a la [[Formula de Bayes|formula de Bayes]], utilizando [[Probabilidad condicional|probabilidad condicional]]. No se puede usar la definición ya que $\mathbb{P}(X = x) = 0$ ya que sabemos que $X$ es una [[Variable aleatoria continua|variable aleatoria continua]]