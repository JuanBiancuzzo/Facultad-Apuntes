---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-electrónica/analisis-2/Propiedades-de-funciones
  - carrera/ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-en-informática/analisis-2/Propiedades-de-funciones
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/analisis 2/Funciones de varias variables/Resumen.md]]"
  - "[[ingeniería en informática/analisis 2/Propiedades de funciones/Resumen.md]]"
---
# Definición
---
Dado un campo escalar $f : D \subset \mathbb{R}^n \to \mathbb{R}$ con $n > 1$ con $f \in C^k(E(\vec{A}))$, para todo $\vec{A} + \vec{H} \in E(\vec{A})$ puede expresarse 

$$ f(\vec{A} + \vec{H}) \approx f(\vec{A}) + \bigg[ \sum_{i = 1}^k \frac{d^if(\vec{A}, \vec{H})}{i!} \bigg] \text{ con } \vec{H} \in E(\vec{0}) $$

Donde interpretamos $\vec{H}$ cerca de $\vec{0}$, pero si reemplazamos:

$$ \vec{X} = \vec{A} + \vec{H} \to \vec{H} = \vec{X} - \vec{A},  \text{ con } \vec{X} \text{ cercano a } \vec{A} $$

Esto hace que lo escribamos como

$$ f(\vec{X}) \approx f(\vec{A}) + \bigg[ \sum_{i = 1}^k \frac{d^if(\vec{A}, \vec{X} - \vec{A})}{i!} \bigg] \text{ con } \vec{X} \in E(\vec{A}) $$

Donde $d^if(\vec{A}, \vec{X} - \vec{A})$, con $\vec{A} = (a_1, \cdots, a_n)$, $\vec{X} = (x_1, \cdots, x_n)$, se calcula 

$$ d^if(\vec{A}, \vec{X} - \vec{A}) = \bigg[ \frac{\partial}{\partial x_1} (x_1 - a_1) + \cdots + \frac{\partial}{\partial x_n} (x_n - a_n) \bigg]_{f(\vec{A})}^{(i)} \text{ con } i = 1, \cdots, k $$

# Caso especifico
---
### Polinomio de Taylor de 2º orden
---
Sea $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$ una función definida en el [[Conjunto abierto|conjunto abierto]] $U$ de $\mathbb{R}$, tal que las [[Derivada parcial de orden superior|derivada parcial de segundo orden]] son continuas en alguna [[Disco abierto|disco abierto]] $B$ con centro en $\vec{x} \in U$

Entonces, para todo $x \in \mathbb{R}^n$ tal que $\vec{x} + x \in U$ se tiene la formula

$$ f(\vec{x} + x) = f(\vec{x}) + \nabla f(\vec{x}) \cdot x + \frac{1}{2} \cdot x \cdot H(\vec{x}) \cdot x^t $$

Donde $H(\vec{x})$ seria la [[Matriz Hessiana|matriz Hessiana]] en el punto $\vec{x}$, y $x^t$ siendo el transpuesto

### Ejemplo
---
Con $f(x, y)$ en un [[Entorno|entorno]] del punto $\vec{A} = (x_0, y_0)$, resulta

$$ f(x, y) \approx f(\vec{A}) + df(\vec{A}, \vec{X} - \vec{A}) + \frac{1}{2} d^2f(\vec{A}, \vec{X} - \vec{A}) $$

Donde 

$$ df(\vec{A}, \vec{X} - \vec{A}) = f'_x(\vec{A})(x-x_0) + f'_y(\vec{A})(y - y_0) $$

$$ d^2f(\vec{A}, \vec{X} - \vec{A}) = f''_{xx}(\vec{A})(x - x_0)^2 + 2 f''_{xy}(\vec{A})(x-x_0)(y - y_0) + f''_{yy}(\vec{A})(y - y_0)^2 $$

Resultando en

$$ \begin{matrix} f(x, y) \approx f(\vec{A}) + f'_x(\vec{A})(x-x_0) + f'_y(\vec{A})(y - y_0) \\ + \frac{1}{2} f''_{xx}(\vec{A})(x - x_0)^2 + f''_{xy}(\vec{A})(x-x_0)(y - y_0) + \frac{1}{2} f''_{yy}(\vec{A})(y - y_0)^2 \end{matrix}$$

### Propiedad
---
El polinomio $p_j(\vec{X})$ que permite expresar $f(\vec{X}) \approx p_j(\vec{X})$ con $\vec{X} \in E(\vec{A})$ 

 * $p_j(\vec{A}) = f(\vec{A})$
 * Hasta el orden $j$ inclusive, las [[Derivada parcial]] de $p_j$ en $\vec{A}$ son iguales a las correspondientes derivadas parciales de $f$ en dicho punto