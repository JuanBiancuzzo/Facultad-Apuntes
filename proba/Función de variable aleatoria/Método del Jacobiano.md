---
dia: 2023-01-23
tags:
  - proba/Función-de-variable-aleatoria
  - nota/facultad
aliases:
  - Método del Jacobiano generalizado#Método del Jacobiano
---
# Definición
---
Suponga que $Y_1$ e $Y_2$ son [[Variable aleatoria continua|variable aleatoria continua]] con una [[Función de densidad conjunta|función de densidad conjunto]] y que para todo $(y_1, y_2)$ tal que $f_{Y_1, Y_2}(y_1, y_2) > 0$, $u_1 = h_2(y_1, y_2)$, $u_2 = h_2(y_1, y_2)$ es una transformación $1$ a $1$ de $(y_1, y_2)$ y $(u_1, u_2)$ con inversa $y_1 = h_1^{-1}(u_1, u_2)$, $y_2 = h_2^{-1}(u_1, u_2)$.

Si las inversas tienen derivadas parciales continuas respecto de $u_1$ y $u_2$ con jacobiano $J$, entonces 
$$ f_{U_1, U_2}(u_1, u_2) = \frac{f_{Y_1, Y_2}(y_1, y_2)}{|J|}\Bigg|_{y_1 = h_1^{-1}, y_2 = h_2^{-1}} $$

## Generalización
---
Sea $\underline{X}$  es un [[Vector aleatorio|vector aleatorio]], $\underline{Y} = g(\underline{X})$, dado una [[Partición|partición]] $A_1, A_2, \cdots, A_n$ del [[Soporte|soporte]] de $\underline{X}$, con $g$ tal que $g|_{A_i} = g_i$ es biyectiva, continua y con [[Continuidad de las derivables|derivada continua]]. Entonces $$ f_{\underline{Y}}(\underline{y}) = \sum_{i = 1}^n \frac{f_{\underline{X}}(\underline{x}) \cdot \mathbb{1} \{\underline{x} \in A_i\} }{|J_{g_i}(\underline{x})|}\Bigg|_{\underline{x}=g_i^{-1}(\underline{y})} $$