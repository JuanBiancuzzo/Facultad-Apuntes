---
dia: 2023-01-22
tags:
  - nota/facultad
  - ingeniería-en-informática/analisis-2/Propiedades-de-funciones
  - carrera/ingeniería-electrónica/analisis-2/Propiedades-de-funciones
---
# Definición
---
Sea $g : V \subseteq \mathbb{R}^m \to \mathbb{R}^n$ una [[Función|función]] definida en el [[Conjunto abierto|conjunto abierto]] $V$ de $\mathbb{R}^m$, [[Diferenciable|diferenciable]] en $x_0 \in V$.

Sea $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$ una función definida en el conjunto abierto $U$ de $\mathbb{R}^n$, tal que $g(V) \subseteq U$, diferenciable en el punto $g(x_0) \in U$.

Entonces la [[Composición de relaciones#Funciones|composición de funciones]] $f \circ g: V \subseteq \mathbb{R}^m \to \mathbb{R}$ es diferenciable en $x_0$ y sus [[Derivada parcial|derivadas parciales]] son

$$ \frac{\partial}{\partial x_j}(f \circ g)(x_0) = \prod_{i = 1}^n \frac{\partial f}{\partial y_i}(g(x_0))\frac{\partial g_i}{\partial x_j}(x_0),~~~ j = 1, 2, \cdots, m $$

Y este proceso, es el que llamamos la regla de la cadena

También podemos aplicar la [[Jacobiana|Jacobiano]] a la regla de la cadena, tendremos

$$ D(f \circ g)(x_0) = Df(g(x_0)) \cdot Dg(x_0) $$

Esto nos permite derivar sin hacer la composición

Con $h$ siendo un escalar, y $h = f \circ \vec{g}$ 

$$ h'(t_0) = \nabla f(\vec{g}(t_0)) \cdot \vec{g}(t_0) $$

## Nota
---
Cuando $g$ es diferenciable en $a$ y $f$ es diferenciable en $g(a)$ entonces $h = f \circ g$ es diferenciable en $a$