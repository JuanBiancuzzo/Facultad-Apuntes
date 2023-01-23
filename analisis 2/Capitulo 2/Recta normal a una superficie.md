---
dia: 2023-01-22
materia: analisis 2
---
La recta normal es aquella que pase por el punto $(x_0, y_0)$ en la direccion [[Normal de una superficie]], y perpendicular al [[Plano tangente a una superficie]], dando a la recta de ecuacion

$$ r_n = (x_0, y_0, f(x_0, y_0)) + \bigg( -\frac{\partial f}{\partial x}(x_0, y_0), -\frac{\partial f}{\partial y}(x_0, y_0), 1 \bigg) \cdot t $$

Tambien lo podemos escribir como 

$$ \begin{cases}
		x = x_0 - \frac{\partial f}{\partial x}(x_0, y_0) \cdot t \\
		y = y_0 - \frac{\partial f}{\partial y}(x_0, y_0) \cdot t \\
		z = f(x_0, y_0) + t
	\end{cases}, \text{ } t \in \mathbb{R} $$
	
Tambien lo podemos escribir como 

$$ \vec{X} = \vec{a} + t \cdot \vec{n}_0 \text{ con } t \in \mathbb{R} $$

Donde $\vec{n}_0 = \vec{F}'_u(u_0, v_0) \times \vec{F}'_v(u_0, v_0)$