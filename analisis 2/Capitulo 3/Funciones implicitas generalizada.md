---
dia: 2023-01-22
tags:
  - analisis-2/Capitulo-3
  - nota/facultad
---
### Definición
---
Partiendo de la definicion de [[Funciones implicitas]], plantearemos los siguientes

Consideremos la funcion $z = F(x_1, x_2, \cdots, x_n, y)$. Sea $p = (x'_1, x'_2, \cdots, x'_n, y') \in \mathbb{R}^{n + 1}$ un punto tal que $F(p) = 0$

Supongamos que la funcion $F$ tiene derivadas parciales $\frac{\partial F}{\partial x_i}, i = 1, 2, \cdots, n$ y $\frac{\partial F}{\partial y}$ continuas en alguna [[Disco abierto]] B con centro en $p$ y que $\frac{\partial F}{\partial y}(p) \ne 0$. 

Entonces $F(x_1, x_2, \cdots, x_n, y) = 0$ puede resolverse para $y$ en terminos de $x$ y definir asi una vecindad $V$ (de $\mathbb{R}^n$) del punto $(x'_1, x'_2, \cdots, x'_n, y')$, una funcion $y = f(x_1, x_2, \cdots, x_n)$ la cual tiene derivadas parciales continuas en $V$ que se puede calcular con las formulas

$$ \frac{\partial f}{\partial x_i}(x_1, x_2, \cdots, x_n) = - ~~ \frac{\frac{\partial F}{\partial x_i}(x_1, x_2, \cdots, x_n, y)}{\frac{\partial F}{\partial y}(x_1, x_2, \cdots, x_n, y)}, ~~ (x_1, x_2, \cdots, x_n) \in V $$