---
dia: 2026-09-08
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 684
etapa: terminado
---
# Enunciado
---
Se tiene la [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]] $2$ desplazada $p_{12} = \begin{bmatrix} 3 & 2 & 5 \end{bmatrix}^T$ y la [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotada]] según $e_1 = \begin{bmatrix} 0 & 1 & 1 \end{bmatrix}^T$ un ángulo de $12 \degree$. Luego la terna $3$ está desplazada $p_{23} = \begin{bmatrix} 0 & -2 & -5 \end{bmatrix}^T$ y rotada según $e_2 = \begin{bmatrix} 1 & -1 & 0 \end{bmatrix}^T$ un ángulo de $-20\degree$

Calcular el [[Traslación|desplazamiento]] que debo hacer para ir desde el origen de la terna $3$ al de la terna $1$ (es decir $p_{31}$) en al dirección de $x_3$ con precisión de $0.001$

# Resolución
---
Para encontrar $p_{31}|_{x}$ propondremos lo siguiente $$ \begin{align} 
	A_1^3 &= A_1^2 ~ A_2^3 \\
	A_3^1 &= \left( A_1^3 \right)^{-1} \\
	A_3^1 &= \left[ \begin{array}{c:c} 
		R_3^1 & p_{31} \\\hdashline
		0 & 1
	\end{array} \right]
\end{align} $$
Por lo tanto necesitamos encontrar $A_1^2$ y $A_2^3$, que implica encontrar las [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|matrices de rotación]] dadas por un vector y un ángulo, y recordano la expresión ![[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación#^expresion-versor-angulo]]
Donde recordemos que $\lVert \vec{k} \rVert^2 = 1$, por lo tanto tenemos las matrices $$ \begin{align}
	R_1^2\left( \vec{k} = \begin{bmatrix} 0 \\ \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix},~ \theta = 12\degree \right) &= \begin{bmatrix}
		\cos\theta & -\sin\frac{\theta}{\sqrt{2}} & \sin\frac{\theta}{\sqrt{2}} \\
		\sin\frac{\theta}{\sqrt{2}} & \frac{1}{2}(1 + \cos\theta) & \frac{1}{2}(1 - \cos\theta) \\
		-\sin\frac{\theta}{\sqrt{2}} & \frac{1}{2}(1 - \cos\theta) & \frac{1}{2}(1 + \cos\theta)
	\end{bmatrix} \\
	&= \begin{bmatrix} 
		 0.97815 & -0.14702 & 0.14702 \\
		 0.14702 &  0.98907 & 0.01093 \\
		-0.14702 &  0.01093 & 0.98907
	\end{bmatrix} \\\\
	R_2^3\left( \vec{k} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} \\ 0 \end{bmatrix},~ \theta = -20\degree \right) &= \begin{bmatrix}
		\frac{1}{2}(\cos\theta + 1) & \frac{1}{2}(\cos\theta - 1) & -\sin\frac{\theta}{\sqrt{2}} \\
		\frac{1}{2}(\cos\theta - 1) & \frac{1}{2}(\cos\theta + 1) & -\sin\frac{\theta}{\sqrt{2}} \\
		\sin\frac{\theta}{\sqrt{2}} & \sin\frac{\theta}{\sqrt{2}} & \cos\theta  
	\end{bmatrix} \\
	&= \begin{bmatrix} 
		 0.96985 & -0.03015 & 0.24184 \\
		 0.03015 &  0.96985 & 0.24184 \\
		-0.24184 & -0.24184 & 0.93969
	\end{bmatrix} \\
\end{align} $$
Obteniendo las [[ingeniería en informática/algebra 2/Transformaciones lineales/Rototranslación|matrices de rototranslación]] $$ \begin{align} 
	A_1^2 &= \left[ \begin{array}{ccc:cc}
		 0.97815 & -0.14702 & 0.14702 & 3 \\
		 0.14702 &  0.98907 & 0.01093 & 4 \\
		-0.14702 &  0.01093 & 0.98907 & 5 \\\hdashline
		 0       &  0       & 0       & 1
	\end{array} \right] &
	A_2^3 &= \left[ \begin{array}{ccc:cc}
		 0.96985 & -0.03015 & 0.24184 &  0 \\
		 0.03015 &  0.96985 & 0.24184 & -2 \\
		-0.24184 & -0.24184 & 0.93969 & -1 \\\hdashline
		 0       &  0       & 0       &  1
	\end{array} \right] \\
\end{align} $$
Finalmente se obtiene la matriz de rototranslación $$ \begin{align}
	A_1^3 &= A_1^2 ~ A_2^3 \\
	&= \left[ \begin{array}{ccc:cc}
		 0.97815 & -0.14702 & 0.14702 & 3 \\
		 0.14702 &  0.98907 & 0.01093 & 4 \\
		-0.14702 &  0.01093 & 0.98907 & 5 \\\hdashline
		 0       &  0       & 0       & 1
	\end{array} \right] ~ \left[ \begin{array}{ccc:cc}
		 0.96985 & -0.03015 & 0.24184 &  0 \\
		 0.03015 &  0.96985 & 0.24184 & -2 \\
		-0.24184 & -0.24184 & 0.93969 & -1 \\\hdashline
		 0       &  0       & 0       &  1
	\end{array} \right] \\
	&= \left[ \begin{array}{ccc:cc}
		 0.97815 & -0.20763 & 0.33915 & 3.14702 \\
		 0.11021 &  0.95217 & 0.28502 & 2.01093 \\
		-0.38211 & -0.22417 & 0.89651 & 3.98907 \\\hdashline
		 0       &  0       & 0       & 1
	\end{array} \right] \\\\
	\left( A_1^3 \right)^{-1} = A_3^1 &= \left[ \begin{array}{ccc:cc}
		  0.91753 & 0.11021 & -0.38211 & -1.58464 \\
		 -0.20763 & 0.95217 & -0.22417 & -0.36709 \\
		  0.33915 & 0.28502 &  0.89651 & -5.21674 \\\hdashline
		  0       & 0       &  0       &  1
	\end{array} \right] \\
\end{align} $$
Por lo tanto se puede ver que $p_{31}|_x = -1.585$ con la precisión de $0.001$

# Resultado
---
El resultado es $-1.585$