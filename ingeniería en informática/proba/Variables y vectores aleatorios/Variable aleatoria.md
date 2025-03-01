---
dia: 2023-01-23
tags:
  - ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
---
# Definición
---
Sea $(\Omega, \mathbb{A}, \mathbb{P})$ un [[Espacio de probabilidad|espacio de probabilidad]] y $X : \Omega \to \mathbb{R}$ una [[Función|función]], diremos que $X$ es una variable aleatoria si $X^{-1}(B) \in \mathbb{A}$

## Proposición
---
Sea $(\Omega, \mathbb{A}, \mathbb{P})$ un espacio de probabilidad y $X$ una variable aleatoria, entonces $X^{-1}(B) \in \mathbb{A}$. Luego, se puede calcular la probabilidad, es decir $$ \mathbb{P}(X^{-1}(B)) = \mathbb{P}(X \in B) $$
Observemos que $$ X^{-1}(B) = \{ \omega \in \Omega : X(\omega) \in B \} $$
