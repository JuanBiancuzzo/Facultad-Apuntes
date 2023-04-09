---
dia: 2023-01-22
materia: analisis 2
capitulo: 3
---
### Definición
---
Considere la funcion $z = F(x, y)$. Sea $(x_0, y_0) \in \mathbb{R}^2$ un punto tal que $F(x_0, y_0) = 0$

Supongamos que la funcion $F$ tiene [[Derivadas parciales]] continuas en alguna [[Disco abierto]] $B$ con centro en $(x_0, y_0)$ y que $\frac{\partial F}{\partial y}(x_0, y_0) \ne 0$ 

Entonces $F(x, y) = 0$ se puede resolver para $y$ en terminos de $x$ y definir asi una funcion $y = f(x)$ con dominio en una vecinidad de $x_0$, tal que $y_0 = f(x_0)$, la cual tiene derivadas continuas que pueden calcularse como

$$ y' = f'(x) = - \text{ } \frac{\frac{\partial F}{\partial x}(x, y)}{\frac{\partial F}{\partial y}(x, y)} $$

Visualmente, esto se veria como 

![[Pasted image 20211102165652.png]]

En este caso, se aplica el [[Teorema Cauchy-Dini para ecuaciones escalares]]

## Aplicaciones
![[Curva plana dada de forma implicita]] ![[Superficie dada en forma implicita]] ![[Curva definida como interseccion de dos superficies implicitas]]