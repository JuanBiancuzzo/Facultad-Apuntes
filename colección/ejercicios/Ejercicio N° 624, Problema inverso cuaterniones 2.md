---
dia: 2026-08-25
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 624
nombre: Problema inverso cuaterniones 2
etapa: terminado
---
# Enunciado
---
Dada la [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|matriz de rotación]] $R$, obtener el [[Cuaternión|cuaternión]] $Q$ que la representa $$ R = \begin{bmatrix}
	-1 &  0 &  0 \\
	 0 &  0 & -1 \\
	 0 & -1 &  0 \\
\end{bmatrix} $$
Comprobar el resultado mediante el problema directo de los cuaterniones


# Resolución
---
Recordemos que si definimos $Q = (g,~ q_x,~ q_y,~ q_z)$, donde recordemos que su expresión [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matricial]] $$ R(Q) = \begin{bmatrix}
	2 q_x q_x + 2g^2 - 1 & 2q_x q_y - 2 g q_z & 2q_x q_z + 2 g q_y \\
	2q_x q_y + 2 g q_z & 2 q_y q_y + 2g^2 - 1 & 2q_z q_y - 2 g q_x \\
	2q_x q_z - 2 g q_y & 2q_y q_z + 2 g q_x & 2 q_z q_z + 2g^2 - 1 \\
\end{bmatrix} $$
Si calculamos la traza obtenemos $$ \begin{align}
	\text{tr}(R(Q)) &= \left( 2 q_x q_x + 2g^2 - 1 \right) + \left( 2 q_y q_y + 2g^2 - 1 \right) + \left( 2 q_z q_z + 2g^2 - 1 \right) \\
	 &= 2q_x^2 + 2q_y^2 + 2q_z^2 + 6g^2 - 3 \\
	 &= 2 \underbrace{\left( q_x^2 + q_y^2 + q_z^2 + g^2 \right)}_{\lVert Q \rVert^2 = 1} + 4g^2 - 3 \\
	\text{tr}(R(Q)) &= 4g^2 - 1 \\
	g &= \frac{1}{2} \sqrt{\text{tr}(R(Q)) + 1}
\end{align}  $$
En nuestro caso $\text{tr}(R(Q)) = -1$, haciendo que $g = 0$. Aprovechando esto, se puede obtener de la diagonal valores para $\vec{q}$ de la siguiente forma $$ \begin{align} 
	2q_x^2 - 1 &= -1 &
	2q_y^2 - 1 &= 0 &
	2q_z^2 - 1 &= 0 \\
	q_x &= 0 &
	q_y &= \pm \sqrt{\frac{1}{2}} &
	q_z &= \pm \sqrt{\frac{1}{2}} 
\end{align} $$
Tenemos $4$ posibles combinaciones, pero se puede utilizar $R_{3,2}(Q)$ para reducirlas $$ \begin{align}
	R_{3,2}(Q) = 2 q_z q_y &= -1 \\
	q_z q_y &= -\frac{1}{2}
\end{align} \to \begin{cases}
	q_y = +\sqrt{\frac{1}{2}},& q_z = -\sqrt{\frac{1}{2}} \\
	q_y = -\sqrt{\frac{1}{2}},& q_z = +\sqrt{\frac{1}{2}} \\
\end{cases} $$
Por lo que finalmente tendremos $2$ posibles cuaterniones $$ \begin{align}
	Q_1 &= \left(0,~ 0,~ +\sqrt{\frac{1}{2}},~ -\sqrt{\frac{1}{2}} \right) \\
	Q_2 &= \left(0,~ 0,~ -\sqrt{\frac{1}{2}},~ +\sqrt{\frac{1}{2}} \right) \\
\end{align} $$
Finalmente comprobando que el cuaternión resulte en la matriz donde $$ \begin{cases}
	q_x = 0 \\
	q_y^2 = q_z^2 = \frac{1}{2} \\
	q_y q_z = -\frac{1}{2} \\
	g^2 = g q_x = g q_y = g q_z = 0 \\
\end{cases} $$ obteniendo $$ R(Q) = \begin{bmatrix}
	-1 & 0 & 0 \\
	0 & \frac{2}{2} - 1 & -\frac{2}{2} \\ 
	0 & -\frac{2}{2} & \frac{2}{2} - 1
\end{bmatrix} = \begin{bmatrix}
	-1 &  0 &  0 \\
	 0 &  0 & -1 \\
	 0 & -1 &  0 \\
\end{bmatrix} $$