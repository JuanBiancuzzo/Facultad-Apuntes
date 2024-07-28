---
dia: 2023-01-22
tags:
  - analisis-2/Capitulo-4
  - nota
---
### Definición
---
Sea $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$ una funcion definida en el conjunto abierto $U$ de $\mathbb{R}$, tal que las [[Derivada parcial de orden superior]], (de segundo orden) son continuas en alguna [[Disco abierto]] $B$ con centro en $\vec{x} \in U$

Entonces, para todo $x \in \mathbb{R}^n$ tal que $\vec{x} + x \in U$ se tiene la formula

$$ f(\vec{x} + x) = f(\vec{x}) + \nabla f(\vec{x}) \cdot x + \frac{1}{2} \cdot x \cdot H(\vec{x}) \cdot x^t $$

Donde $H(\vec{x})$ seria la [[Matriz hessiana]] en el punto $\vec{x}$, y $x^t$ siendo el transpuesto

#### Caso especifico
Con $f(x, y)$ en un [[Entorno]] del punto $\vec{A} = (x_0, y_0)$, resulta

$$ f(x, y) \approx f(\vec{A}) + df(\vec{A}, \vec{X} - \vec{A}) + \frac{1}{2} d^2f(\vec{A}, \vec{X} - \vec{A}) $$

Donde 

$$ df(\vec{A}, \vec{X} - \vec{A}) = f'_x(\vec{A})(x-x_0) + f'_y(\vec{A})(y - y_0) $$

$$ d^2f(\vec{A}, \vec{X} - \vec{A}) = f''_{xx}(\vec{A})(x - x_0)^2 + 2 f''_{xy}(\vec{A})(x-x_0)(y - y_0) + f''_{yy}(\vec{A})(y - y_0)^2 $$

Resultando en

$$ \begin{matrix} f(x, y) \approx f(\vec{A}) + f'_x(\vec{A})(x-x_0) + f'_y(\vec{A})(y - y_0) \\ + \frac{1}{2} f''_{xx}(\vec{A})(x - x_0)^2 + f''_{xy}(\vec{A})(x-x_0)(y - y_0) + \frac{1}{2} f''_{yy}(\vec{A})(y - y_0)^2 \end{matrix}$$