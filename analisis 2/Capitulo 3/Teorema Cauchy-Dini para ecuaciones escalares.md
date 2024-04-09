---
dia: 2023-01-22
materia: analisis 2
capitulo: 3
---
### Definición
---
Teorema de existencia y unicidad de la [[Función|función]] definida implícitamente por una ecuación escalar

Sea $F : D \subset \mathbb{R}^{n + 1} \to \mathbb{R}$, del tipo $F(x_1, \cdots, x_n, y)$, el punto $\vec{A} = (a_1, \cdots, a_n, b)$ tal que:

 1. $F(\vec{A}) = 0$
 2. $F \in C^1(E(\vec{A}))$, o bien $\nabla F$ continuo en un [[Entorno]], alrededor de $\vec{A}$
 3. $F'_y(\vec{A}) \ne 0$

Entonces la ecuación

$$ F(x_1, \cdots, x_n, y) = 0 $$

Define implícitamente $y = f(x_1, \cdots, x_n)$ $\forall(x_1, \cdots, x_n) \in E(A_n)$ con $A_n = (a_1, \cdots, a_n)$. 

Cumpliéndose que
 * $f(a_1, \cdots, a_n) = b$
 * $f$ es unica cuya grafica contiene al punto $\vec{A} = (a_1, \cdots, a_n, b)$
 * $f$ es [[Diferenciable]] en  $A_n = (a_1, \cdots, a_n)$
 * Se puede calcular $f'_{x_j}(A_n)=-\frac{F'_{x_j}(\vec{A})}{F'_y(\vec{A})}$ con $j = 1, \cdots, n$