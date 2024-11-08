---
dia: 2023-01-23
tags:
  - ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
---
# Definición
---
Sea $h : \mathbb{R} \to \mathbb{R}^+$, una [[Función de variable aleatoria|función de variable aleatoria]], tal que $h$ es $par$, y restringida a $\mathbb{R}^+$ es creciente, y sea $X$ una [[Variable aleatoria|variable aleatoria]] tal que la [[Esperanza|esperanza]] ($E[h(X)]$) existe, entonces $$ \forall t \in \mathbb{R}, ~~~ \mathbb{P}(|X| \geq t) \leq \frac{E[h(X)]}{h(t)} $$ si además $X$ es no negativa$$ \forall a > 0 ,~~~ \mathbb{P}(X \geq a) \leq \frac{E[X]}{a} $$
