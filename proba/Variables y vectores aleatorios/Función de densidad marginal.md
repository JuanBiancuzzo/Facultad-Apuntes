---
dia: 2023-01-23
tags:
  - proba/Variables-y-vectores-aleatorios
  - nota/facultad
---
# Definición
---
Dada una [[Función de densidad conjunta|función de densidad conjunta]], con $X$, $Y$ dos [[Variable aleatoria continua|variable aleatoria continua]] que forman un [[Vector aleatorio|vector aleatorio]], se define la función de densidad marginal como $$ \begin{align} 
    f_X(x) &= \int_{y \in \mathbb{R}} f_{X, Y}(x, y) dy \\
    f_Y(y) &= \int_{x \in \mathbb{R}} f_{X, Y}(x, y) dx
\end{align} $$
