---
dia: 2023-01-23
tags:
  - proba/Variables-aleatorias-condicionadas
  - nota/facultad
---
# Definición
---
Sea $X$ e $Y$ [[Variable aleatoria continua|variable aleatoria continua]] haciendo un [[Vector aleatorio|vector aleatorio]], con [[Función de densidad conjunta|función de densidad conjunta]] $f_{X,Y}(x, y)$ y [[Función de densidad marginal|función de densidad marginal]] $f_X(x)$, entonces para cualquier valor de $X$ con el cual $f_X(x) > 0$, la [[Función de densidad|función de densidad]] de la variable condicional de $Y$ dado que $X = x$ es   $$ f_{Y | X = x}(y) = \frac{f_{X,Y}(x, y)}{f_X(x)} $$
Se define como $f_{X,Y}(x, y) = 0$ cuando $f_X(x) = 0$.

# Propiedades
---
Con esto, podemos calcular la [[Función de densidad conjunta|función de densidad conjunta]] de la siguiente forma $$\begin{align}
f_{X,Y}(x, y) &= f_{Y|X = x}(y) \cdot f_X(x) \\
f_{X,Y}(x, y) &= f_{X|Y = y}(x) \cdot f_Y(y)
\end{align}$$

