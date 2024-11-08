---
dia: 2023-01-22
tags:
  - nota/facultad
  - ingeniería-en-informática/analisis-2/Propiedades-de-funciones
---
# Definición
---
Considerando la [[Función|función]] $f : U \subseteq \mathbb{R}^2 \to \mathbb{R}$ definida en el [[Conjunto abierto|conjunto abierto]] $U$ de $\mathbb{R}^2$. Si esta función es [[Diferenciable|diferenciable]], sabemos que existen las derivadas parciales $\frac{\partial f}{\partial x}$ y $\frac{\partial f}{\partial y}$ en cualquier punto $(x, y) \in U$

Entonces podemos considerar las funciones

$$ \frac{\partial f}{\partial x} : U \subseteq \mathbb{R}^2 \to \mathbb{R}  ~~ \text{ y } ~~ \frac{\partial f}{\partial y} : U \subseteq \mathbb{R}^2 $$

Si simplemente las consideramos como funciones, podemos ver que podríamos aplicarles derivadas parciales

$$ \frac{\partial}{\partial x}\bigg(\frac{\partial f}{\partial x} \bigg) = \frac{\partial^2 f}{\partial^2 x}$$
$$ \frac{\partial}{\partial x}\bigg(\frac{\partial f}{\partial y} \bigg) = \frac{\partial^2 f}{\partial x \partial y}$$
$$ \frac{\partial}{\partial y}\bigg(\frac{\partial f}{\partial x} \bigg) = \frac{\partial^2 f}{\partial y \partial x}$$
$$ \frac{\partial}{\partial y}\bigg(\frac{\partial f}{\partial y} \bigg) = \frac{\partial^2 f}{\partial^2 y}$$

Tambien podemos tener la notación $f'_x$ y $f'_y$, haciendo estas derivadas, $f''_{xx}, f''_{xy}, f''_{yx}, f''_{yy}$

De esta forma, podríamos seguir derivando, teniendo 8 derivadas de 3 grado, 16 de 4 grado, etc
