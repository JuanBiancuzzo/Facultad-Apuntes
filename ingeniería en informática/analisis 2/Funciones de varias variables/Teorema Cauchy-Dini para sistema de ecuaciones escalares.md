---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/analisis 2/Funciones de varias variables/Resumen.md]]"
---
# Definición
---
Teorema de existencia y unicidad de las funciones definidas implícitamente por un sistema de ecuaciones escalares

Sea $\vec{F} : D \subset \mathbb{R}^{n + m} \to \mathbb{R}^m$ con $n \ge 1$ y $m \ge 1$, del tipo $\vec{F}(x_1, \cdots, x_n, y_1, \cdots, y_m)$ con $\vec{F} = (F_1, \cdots, F_m)$ y el punto $\vec{A} = (a_1, \cdots, a_n, b_1, \cdots, b_m)$ tal que

 1. $\vec{F}(\vec{A}) = \vec{0}$ o bien, $F_j(\vec{A}) = 0$ para $j = 1, \cdots, m$
 2. $\vec{F} \in C^1(E(\vec{A}))$, o bien $\nabla F_j$ continuo en el [[Entorno|entorno]] de $\vec{A}$ para $j = 1, \cdots, m$
 3. $\frac{\partial(F_1, \cdots, F_m)}{\partial (y_1, \cdots, y_m))}(\vec{A}) \ne 0$

donde $\frac{\partial(F_1, \cdots, F_m)}{\partial (y_1, \cdots, y_m))}(\vec{A})$ es el determinante de la matriz [[Jacobiana|Jacobiana]] de $\vec{F}$ en $\vec{A}$, suponiendo que $\vec{F}$ solo depende de las $m$ variables $y_j$

Entonces la ecuacion

$$\vec{F}(x_1, \cdots, x_n, y_1, \cdots, y_m) = \vec{0} $$

o su sistema de $m$ ecuaciones escalares equivalentes, define implícitamente a $y_j = f_j(x_1, \cdots, x_n)$ para todo $(x_1, \cdots, x_n) \in E(A_n)$ con $A_n = (a_1, \cdots, a_n)$ Cumpliéndose que

 * $f_j(A_n) = b_j$ con $j = 1, \cdots, m$
 * Cada $f_j$ es unica cuya grafica contiene al punto $(a_1, \cdots, a_n, b_j)$ con $j = 1, \cdots, m$
 * Cada $f_j$ es [[Diferenciable|diferenciable]] en $A_n = (a_1, \cdots, a_n)$ con $j = 1, \cdots, m$
 
 * Se puede calcular $$\frac{\partial f_i}{\partial x_j}(A_n) = -\frac{\frac{\partial(F_1, F_2, \cdots, F_n)}{\partial(y_1, \cdots, y_{i-1}, x_j, y_{i+1}, \cdots, y_n)}(\vec{A})}{\frac{\partial(F_1, F_2, \cdots, F_n)}{\partial(y_1, y_2, \cdots , y_n)}(\vec{A})}$$ con $i = 1, \cdots, n$ y $j = 1, \cdots, m$