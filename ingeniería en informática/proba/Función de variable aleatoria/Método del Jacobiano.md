---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Función-de-variable-aleatoria
  - carrera/ingeniería-en-informática/proba/Función-de-variable-aleatoria
  - nota/facultad
aliases:
  - Método del Jacobiano generalizado#Método del Jacobiano
vinculoFacultad:
  - tema: Función de variable aleatoria
    capitulo: 4
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
# Definición
---
Suponga que $Y_1$ e $Y_2$ son [[Variable aleatoria continua|variable aleatoria continua]] con una [[Función de densidad de probabilidad|función de densidad conjunto]] y que para todo $(y_1, y_2)$ tal que $f_{Y_1, Y_2}(y_1, y_2) > 0$, $u_1 = h_2(y_1, y_2)$, $u_2 = h_2(y_1, y_2)$ es una transformación $1$ a $1$ de $(y_1, y_2)$ y $(u_1, u_2)$ con inversa $y_1 = h_1^{-1}(u_1, u_2)$, $y_2 = h_2^{-1}(u_1, u_2)$.

Si las inversas tienen derivadas parciales continuas respecto de $u_1$ y $u_2$ con [[Jacobiana|jacobiano]] $J$, entonces 
$$ f_{U_1, U_2}(u_1, u_2) = \frac{f_{Y_1, Y_2}(y_1, y_2)}{|J|}\Bigg|_{y_1 = h_1^{-1}, y_2 = h_2^{-1}} $$

## Generalización
---
Sea $X$  es un [[Vector aleatorio|vector aleatorio]], $Y = g(X)$, dado una [[Partición|partición]] $A_1, A_2, \cdots, A_n$ del [[Soporte|soporte]] de $X$, con $g$ tal que $g|_{A_i} = g_i$ es [[Función biyectiva|biyectiva]], [[Función continua|continua]] y con [[Continuidad de las derivables|derivada continua]]. Entonces $$ f_Y(y) = \sum_{i = 1}^n \frac{f_X(x) \cdot \mathbb{1} \set{x \in A_i} }{|J_{g_i}(x)|}\Bigg|_{x=g_i^{-1}(y)} $$

En el caso de ser una [[Transformación afín|transformación afín]], se simplifica la ecuación a $$ f_Y(y) = \frac{f_X\left( A^{-1} ~ (x - b) \right)}{| \det A |} $$