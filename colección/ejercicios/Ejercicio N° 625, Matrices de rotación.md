---
dia: 2026-08-25
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 625
nombre: Matrices de rotación
etapa: terminado
---
# Enunciado
---
Dadas $2$ [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotaciones]] sucesivas, la primera sobre el eje $\bar{z}$ en $\frac{\pi}{2}$, y la segunda sobre el eje $\bar{x}_\text{rotado}$ también en $\frac{\pi}{2}$, obtener la matriz $R$ que la representa

Luego obtener los [[Cuaternión|cuaterniones]] $Q_1$ y $Q_2$ asociados a cada rotación, y componer el cuaterión resultante. Obtener con el problema directo la matriz $R$ y cotejarla con la hallada anteriormente

# Resolución
---
Recordemos que $$ \begin{align}
	R\left( \hat{x},~ \theta = \frac{\pi}{2} \right) &= \begin{bmatrix}
	    1 & 0 & 0 \\ 
	    0 & \cos \theta & -\sin \theta \\ 
	    0 & \sin \theta & \cos \theta
	\end{bmatrix} = \begin{bmatrix}
	    1 & 0 & 0 \\ 
	    0 & 0 & -1 \\ 
	    0 & 1 & 0
	\end{bmatrix} = R_1 \\\\
	R\left( \hat{z},~ \theta = \frac{\pi}{2} \right) &= \begin{bmatrix}
	    \cos \theta & -\sin \theta & 0 \\ 
	    \sin \theta & \cos \theta & 0 \\
	    0 & 0 & 1 
	\end{bmatrix} = \begin{bmatrix}
	    0 & -1 & 0 \\ 
	    1 & 0 & 0 \\ 
	    0 & 0 & 1
	\end{bmatrix} = R_2
\end{align} $$ por lo que la rotación final $R$ está dado por $$ R = \begin{bmatrix}
	1 & 0 & 0 \\ 
	0 & 0 & -1 \\ 
	0 & 1 & 0
\end{bmatrix} \cdot \begin{bmatrix}
	0 & -1 & 0 \\ 
	1 & 0 & 0 \\ 
	0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
	0 & -1 & 0 \\ 
	0 & 0 & -1 \\ 
	1 & 0 & 0
\end{bmatrix} $$
Ahora para encontrar el cuaternión $Q = (g,~ q_x,~ q_y,~ q_z)$, pero primero buscaremos la representación de la matriz de rotación dado por $(\vec{k},~ \theta)$

Recordemos que se puede expresar una rotación en función de $\vec{k}$ y $\theta$ de la siguiente forma $$ \begin{align}
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
\end{align} $$
Se puede utilizar la [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Traza|traza]] de la matriz obteniendo $$ \begin{align} 
	\text{tr}(R(\vec{k},~ \theta)) &= (1 - \cos\theta) \underbrace{\Big(k_x^2 + k_y^2 + k_z^2 \Big)}_{\lVert \vec{k} \rVert^2 = 1} + 3 \cos\theta \\
	 &= 1 + 2 \cos\theta \\
	\cos\theta &= \frac{1}{2} \Big( \text{tr}(R(\vec{k},~ \theta)) - 1 \Big) \\
	\theta &= \arccos \left( \frac{1}{2} \Big( \text{tr}(R(\vec{k},~ \theta)) - 1 \Big) \right) \\
\end{align} $$
Calculando para $R_1$ y $R_2$ se tiene $\theta_1 = \theta_2 = \theta = \frac{\pi}{2}$. Ahora aprovechando la parte [[Matriz simétrica|antisimétrica]], se puede obtener de esta forma los $\vec{k}_1 = (k_{1,x},~ k_{1,y},~ k_{1,z})$ y $\vec{k}_2 = (k_{2,x},~ k_{2,y},~ k_{2,z})$ de la siguiente forma $$ \begin{array}{c:c} 
	\begin{aligned}
		R_{3,2}\left( \vec{k}_1,~ \frac{\pi}{2} \right) - R_{2,3}\left( \vec{k}_1,~ \frac{\pi}{2} \right) &= 2 \\
		2 k_{1,x} ~ \sin\left( \frac{\pi}{2} \right) &= 2 \\
		k_{1,x} &= 1
	\end{aligned} & \begin{aligned}
		R_{3,2}\left( \vec{k}_2,~ \frac{\pi}{2} \right) - R_{2,3}\left( \vec{k}_2,~ \frac{\pi}{2} \right) &= 0 \\
		2 k_{2,x} ~ \sin\left( \frac{\pi}{2} \right) &= 0 \\
		k_{2,x} &= 0
	\end{aligned} \\ \hdashline
	\begin{aligned}
		R_{1,3}\left( \vec{k}_1,~ \frac{\pi}{2} \right) - R_{3,1}\left( \vec{k}_1,~ \frac{\pi}{2} \right) &= 0 \\
		2 k_{1,y} ~ \sin\left( \frac{\pi}{2} \right) &= 0 \\
		k_{1,y} &= 0
	\end{aligned} & \begin{aligned}
		R_{1,3}\left( \vec{k}_2,~ \frac{\pi}{2} \right) - R_{3,1}\left( \vec{k}_2,~ \frac{\pi}{2} \right) &= 0 \\
		2 k_{2,y} ~ \sin\left( \frac{\pi}{2} \right) &= 0 \\
		k_{2,y} &= 0
	\end{aligned} \\ \hdashline
	\begin{aligned}
		R_{2,1}\left( \vec{k}_1,~ \frac{\pi}{2} \right) - R_{1,2}\left( \vec{k}_1,~ \frac{\pi}{2} \right) &= 0 \\
		2 k_{1,z} ~ \sin\left( \frac{\pi}{2} \right) &= 0 \\
		k_{1,z} &= 0
	\end{aligned} & \begin{aligned}
		R_{2,1}\left( \vec{k}_2,~ \frac{\pi}{2} \right) - R_{1,2}\left( \vec{k}_2,~ \frac{\pi}{2} \right) &= 2 \\
		2 k_{2,z} ~ \sin\left( \frac{\pi}{2} \right) &= 2 \\
		k_{2,z} &= 1
	\end{aligned} 
\end{array} $$
Resumiendo $\vec{k}_1 = \begin{bmatrix} 1 & 0 & 0 \end{bmatrix}^T$ y $\vec{k}_2 = \begin{bmatrix} 0 & 0 & 1 \end{bmatrix}^T$, pro lo tanto recordando que se puede expresar un cuaternión $$ Q = \left( \cos\frac{\pi}{2},~ \sin\frac{\pi}{2} ~ \vec{k} \right) $$ por lo tanto se obtiene los cuaterniones $$ \begin{align}
	Q_1 &= \left(\sqrt{\frac{1}{2}},~ \sqrt{\frac{1}{2}},~ 0,~ 0 \right) \\
	Q_2 &= \left(\sqrt{\frac{1}{2}},~ 0,~ 0,~ \sqrt{\frac{1}{2}} \right) \\
\end{align} $$
Si multiplicamos los cuaterniones, es decir componerlas, se tiene $$ \begin{align} 
	Q_1 \cdot Q_2 &= \left(\sqrt{\frac{1}{2}} + i ~ \sqrt{\frac{1}{2}} \right) \cdot \left(\sqrt{\frac{1}{2}} + k ~ \sqrt{\frac{1}{2}} \right) \\ 
	 &= \frac{1}{2} + i ~ \frac{1}{2} + k ~ \frac{1}{2} + ik ~ \frac{1}{2} \\
	Q &= \frac{1}{2} + i ~ \frac{1}{2} - j ~ \frac{1}{2} + k ~ \frac{1}{2} \\
\end{align} $$

Ahora utilizando la expresión matricial para obtener una rotación, podemos comprobar que el resultado es correcto $$ \begin{align}
	R(Q) &= \begin{bmatrix}
		2 q_x q_x + 2g^2 - 1 & 2q_x q_y - 2 g q_z & 2q_x q_z + 2 g q_y \\
		2q_x q_y + 2 g q_z & 2 q_y q_y + 2g^2 - 1 & 2q_z q_y - 2 g q_x \\
		2q_x q_z - 2 g q_y & 2q_y q_z + 2 g q_x & 2 q_z q_z + 2g^2 - 1 \\
	\end{bmatrix} \\
	&= \begin{bmatrix}
		\frac{1}{2} + \frac{1}{2} - 1 & 
		-\frac{1}{2} - \frac{1}{2} & 
		\frac{1}{2} - \frac{1}{2} \\
		-\frac{1}{2} + \frac{1}{2} & 
		\frac{1}{2} + \frac{1}{2} - 1 & 
		-\frac{1}{2} - \frac{1}{2} \\
		\frac{1}{2} + \frac{1}{2} & 
		-\frac{1}{2} + \frac{1}{2} & 
		\frac{1}{2} + \frac{1}{2} - 1 \\
	\end{bmatrix} \\
	&= \begin{bmatrix}
		0 & -1 & 0 \\ 
		0 & 0 & -1 \\ 
		1 & 0 & 0
	\end{bmatrix}
\end{align} $$