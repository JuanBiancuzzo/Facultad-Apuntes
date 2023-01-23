---
dia: 2023-01-22
materia: analisis 2
capitulo: 2
---
Considerando la funcion $f : U \subseteq \mathbb{R}^2 \to \mathbb{R}$ definida en el conjunto abierto $U$ de $\mathbb{R}^2$. Si esta funcion es [[Diferenciable]], sabemos que existen las derivadas parciales $\frac{\partial f}{\partial x}$ y $\frac{\partial f}{\partial y}$ en cualquier punto $(x, y) \in U$

Entonces podemos considerar las funciones

$$ \frac{\partial f}{\partial x} : U \subseteq \mathbb{R}^2 \to \mathbb{R}  \text{ } \text{ y } \text{ } \frac{\partial f}{\partial y} : U \subseteq \mathbb{R}^2 $$

Si simplemente las coinsideramos como funciones, podemos ver que podriamos aplicarles derivadas parciales

$$ \frac{\partial}{\partial x}\bigg(\frac{\partial f}{\partial x} \bigg) = \frac{\partial^2 f}{\partial^2 x}$$
$$ \frac{\partial}{\partial x}\bigg(\frac{\partial f}{\partial y} \bigg) = \frac{\partial^2 f}{\partial x \partial y}$$
$$ \frac{\partial}{\partial y}\bigg(\frac{\partial f}{\partial x} \bigg) = \frac{\partial^2 f}{\partial y \partial x}$$
$$ \frac{\partial}{\partial y}\bigg(\frac{\partial f}{\partial y} \bigg) = \frac{\partial^2 f}{\partial^2 y}$$

Tambien podemos tener la notacion $f'_x$ y $f'_y$, haciendo estas derivadas, $f''_{xx}, f''_{xy}, f''_{yx}, f''_{yy}$

De esta forma, podriamos seguir derivando, teniendo 8 derivadas de 3 grado, 16 de 4 grado, etc

#### Teorema de Schwarz
Sea $f : U \subseteq \mathbb{R}^2 \to \mathbb{R}$ una funcion definida en el conjunto abierto $U$ de $\mathbb{R}^2$. Si las derivadas $\frac{\partial^2 f}{\partial x \partial y} : U \subseteq \mathbb{R}^2 \to \mathbb{R}$  y $\frac{\partial^2 f}{\partial y \partial x} : U \subseteq \mathbb{R}^2 \to \mathbb{R}$ son funciones continuas en $U$, entonces

$$ \frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x} $$