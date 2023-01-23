---
dia: 2023-01-22
materia: analisis 2
---
Con $f : U \subseteq \mathbb{R}^n \to \mathbb{R}^m$ siendo esta diferenciable en el punto $x_0$, la transformacion lineal, y especificamente la matriz asociada con esta, que denotaremos $Df(a) \in \mathbb{R}^{n \times m}$ y se denomina como matriz Jacobiana

$$ Df(a) = \begin{pmatrix}
		\frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_n} \\
		\vdots & \ddots & \vdots \\
		\frac{\partial f_m}{\partial x_1} & \cdots & \frac{\partial f_m}{\partial x_n}
			\end{pmatrix} $$
			
 * Si $n > 1$ y $m > 1$, es un campo vectorial y es una matriz
 * Si $n > 1$ y $m = 1$, es un campo escalar y es un vector horizontal
 * Si $n = 1$ y $m > 1$, es una funcion vectorial de una variable y es un vector vertical
 * Si $n = 1$ y $m = 1$, es una funcion escalar de una variable y es un vector de una sola componente
 
 Cabe aclarar, que realmente en todos los casos es una matriz, sino que el uso de "vector" se refiere a una forma de identificarlo, no realmente una identificacion del mismo