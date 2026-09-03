---
dia: 2026-08-25
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 625
nombre: Matrices de rotación
etapa: empezado
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
Utilizando 