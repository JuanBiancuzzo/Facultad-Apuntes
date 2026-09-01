---
dia: 2026-08-25
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 623
nombre: Problema inverso cuaterniones
etapa: terminado
---
# Enunciado
---
Dada la [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|matriz de rotación]] $R$, obtener el [[ingeniería electrónica/robótica industrial/Sistema de referencias/Cuaternión|cuaternión]] $Q$ que la representa $$ R = \begin{bmatrix}
	-\frac{1}{3} & -\frac{2}{3} &  \frac{2}{3} \\ 
	-\frac{2}{3} & -\frac{1}{3} & -\frac{2}{3} \\ 
	 \frac{2}{3} & -\frac{2}{3} & -\frac{1}{3} \\ 
\end{bmatrix} $$
Comprobar el resultado mediante el problema directo de los cuaterniones

# Resolución
---
Recordemos que si definimos $Q = (g,~ q_x,~ q_y,~ q_z) = \left( \cos\frac{\theta}{2},~ \sin\frac{\theta}{2} ~ \vec{k} \right)$, por lo tanto primero podemos encontrar $\theta$ y $\vec{k}$, donde recordemos que su expresión [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matricial]] $$ \begin{align}
	R(\vec{k},~ \theta) =& \begin{bmatrix}
		k_x k_x (1 - \cos\theta) + \cos\theta &
		k_x k_y (1 - \cos\theta) &
		k_x k_z (1 - \cos\theta) \\
		k_y k_x (1 - \cos\theta) &
		k_y k_y (1 - \cos\theta) + \cos\theta &
		k_y k_z (1 - \cos\theta) \\
		k_z k_x (1 - \cos\theta) &
		k_z k_y (1 - \cos\theta) &
		k_z k_z (1 - \cos\theta) + \cos\theta \\
	\end{bmatrix} \\
	&+ \begin{bmatrix}
		0 & -k_z ~ \sin\theta & -k_y ~ \sin\theta \\
		k_z ~ \sin\theta & -0 & k_x ~ \sin\theta \\
		-k_y ~ \sin\theta & -k_x ~ \sin\theta & 0 \\
	\end{bmatrix}
\end{align} $$ donde $\vec{k} = \begin{bmatrix} k_x & k_y & k_z \end{bmatrix}^T$

Donde utilizando la [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Traza|traza]] podemos obtener $\theta$ de la siguiente forma $$ \begin{align} 
	\text{tr}(R(\vec{k},~ \theta)) &= (1 - \cos\theta) \underbrace{\Big(k_x^2 + k_y^2 + k_z^2 \Big)}_{\lVert \vec{k} \rVert^2 = 1} + 3 \cos\theta \\
	 &= 1 + 2 \cos\theta \\
	\cos\theta &= \frac{1}{2} \Big( \text{tr}(R(\vec{k},~ \theta)) - 1 \Big) \\
	\theta &= \arccos \left( \frac{1}{2} \Big( \text{tr}(R(\vec{k},~ \theta)) - 1 \Big) \right) \\
\end{align} $$
En nuestro caso, se tiene que $\text{tr}(R) = -1$, por lo que $\theta = \pm \pi$. Como $\sin(\pm \pi) = 0$, por lo que no podemos utilizar la parte [[Matriz simétrica|antisimétrica]] de la matriz de rotación

Ahora notemos que de las diagonales podemos obtener $$ \begin{align}
	R_{1,1}(\vec{k},~ \theta) = 2 k_x^2 - 1 &= -\frac{1}{3} \\ 
	k_x^2 &= \frac{1}{3} \\
	k_x &= \pm \sqrt{\frac{1}{3}}
\end{align} $$
De forma similar con $R_{2,2}(\vec{k},~ \theta)$ y $R_{3,3}(\vec{k},~ \theta)$, obtenemos que $k_y = \pm \sqrt{\frac{1}{3}}$ y $k_z = \pm \sqrt{\frac{1}{3}}$, respectivamente

Ahora, utilizando otros elementos de la matriz, encontramos la relación $$ R_{2,1}(\vec{k},~ \theta) = 2 k_x k_y = -\frac{2}{3} \to \begin{cases}
	k_x = +\sqrt{\frac{1}{3}},& k_y = -\sqrt{\frac{1}{3}} \\
	k_x = -\sqrt{\frac{1}{3}},& k_y = +\sqrt{\frac{1}{3}} \\
\end{cases} $$ 
De forma similar $$ R_{3,1}(\vec{k},~ \theta) = 2 k_x k_z = \frac{2}{3} \to \begin{cases}
	k_x = +\sqrt{\frac{1}{3}},& k_z = +\sqrt{\frac{1}{3}} \\
	k_x = -\sqrt{\frac{1}{3}},& k_z = -\sqrt{\frac{1}{3}} \\
\end{cases} $$

Por lo que se tienen las $4$ posibilidades $$ \theta = \pm \pi,~ \vec{k} = \left(\sqrt{\frac{1}{3}},~ -\sqrt{\frac{1}{3}},~ \sqrt{\frac{1}{3}} \right) ~\text{ó}~ \vec{k} = \left(-\sqrt{\frac{1}{3}},~ \sqrt{\frac{1}{3}},~ -\sqrt{\frac{1}{3}} \right) $$ pero se reduce a $2$ posiblidades ya que $\cos\left( \pm \frac{\pi}{2} \right) = 0$ , y $\sin\left( \pm \frac{\pi}{2} \right) = \pm 1$, obteniendo los cuaterniones $$ \begin{align}
	Q_1 &= \left(0,~ +\sqrt{\frac{1}{3}},~ -\sqrt{\frac{1}{3}},~ +\sqrt{\frac{1}{3}} \right) \\
	Q_2 &= \left(0,~ -\sqrt{\frac{1}{3}},~ +\sqrt{\frac{1}{3}},~ -\sqrt{\frac{1}{3}} \right) \\
\end{align} $$
Finalmente comprobando que el cuaternión resulte en la matriz dada $$ R(Q) = \begin{bmatrix}
	2 q_x q_x + 2g^2 - 1 & 2q_x q_y - 2 g q_z & 2q_x q_z + 2 g q_y \\
	2q_x q_y + 2 g q_z & 2 q_y q_y + 2g^2 - 1 & 2q_z q_y - 2 g q_x \\
	2q_x q_z - 2 g q_y & 2q_y q_z + 2 g q_x & 2 q_z q_z + 2g^2 - 1 \\
\end{bmatrix} $$ donde $$ \begin{cases}
	q_x^2 = q_y^2 = q_z^2 = \frac{1}{3} \\
	q_x q_y = -\frac{1}{3} \\
	q_x q_z = \frac{1}{3} \\
	g^2 = g q_x = g q_y = g q_z = 0 \\
\end{cases} $$ obteniendo $$ R(Q) = \begin{bmatrix}
	\frac{2}{3} - 1 & -\frac{2}{3} & \frac{2}{3} \\
	-\frac{2}{3} & \frac{2}{3} - 1 & -\frac{2}{3} \\ 
	\frac{2}{3} & -\frac{2}{3} & \frac{2}{3} - 1
\end{bmatrix} = \begin{bmatrix}
	-\frac{1}{3} & -\frac{2}{3} &  \frac{2}{3} \\ 
	-\frac{2}{3} & -\frac{1}{3} & -\frac{2}{3} \\ 
	 \frac{2}{3} & -\frac{2}{3} & -\frac{1}{3} \\ 
\end{bmatrix} $$
