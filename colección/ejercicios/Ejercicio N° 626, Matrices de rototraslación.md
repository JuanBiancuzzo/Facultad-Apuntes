---
dia: 2026-08-25
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 626
nombre: Matrices de rototraslación
etapa: terminado
---
# Enunciado
---
Dado el esquema 

![[colección/ejercicios/img/Ejercicio N° 626, Matrices de rototraslación.png|400]]

1. Obtener del gráfico las [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matrices]] $A_0^1$, $A_1^2$ y $A_0^2$ ^parte-1
2. Calcular $A_0^2$ a partir de $A_0^1$ y $A_1^2$ comprobando el resultado ^parte-2

# Resolución
---
[[colección/ejercicios/Ejercicio N° 626, Matrices de rototraslación#^parte-1|1.]] Para $A_0^1$ tenemos la [[Traslación|traslación]] $p_{01} = \begin{bmatrix} 0 & 2 & 0 \end{bmatrix}^T$ y una rotación $R_0^1 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & -1 & 0 \end{bmatrix}$  y con esta información podemos formar la matriz de [[ingeniería en informática/algebra 2/Transformaciones lineales/Rototranslación|rototranslación]] $$ A_0^1 = \left[ \begin{array}{ccc:c}
	1 & 0 & 0 & 0 \\ 
	0 & 0 & 1 & 2 \\ 
	0 & -1 & 0 & 0 \\ \hdashline
	0 & 0 & 0 & 1
\end{array} \right] $$
De igual forma se obtiene $$ A_1^2 = \left[ \begin{array}{ccc:c}
	0 & -1 & 0 & 2 \\ 
	0 & 0 & 1 & 0 \\ 
	-1 & 0 & 0 & 0 \\ \hdashline
	0 & 0 & 0 & 1
\end{array} \right],~~~ A_0^2 = \left[ \begin{array}{ccc:c}
	0 & -1 & 0 & 2 \\ 
	-1 & 0 & 0 & 2 \\ 
	0 & 0 & -1 & 0 \\ \hdashline
	0 & 0 & 0 & 1
\end{array} \right] $$

[[colección/ejercicios/Ejercicio N° 626, Matrices de rototraslación#^parte-2|2.]] Se pueden multiplicar las matrices para comprobar que usando $A_0^1$ y $A_1^2$ se llega a $A_0^2$ $$ \begin{align}
	A_0^1 \cdot A_1^2 &= A_0^2 \\
	\left[ \begin{array}{ccc:c}
		1 & 0 & 0 & 0 \\ 
		0 & 0 & 1 & 2 \\ 
		0 & -1 & 0 & 0 \\ \hdashline
		0 & 0 & 0 & 1
	\end{array} \right] \cdot \left[ \begin{array}{ccc:c}
		0 & -1 & 0 & 2 \\ 
		0 & 0 & 1 & 0 \\ 
		-1 & 0 & 0 & 0 \\ \hdashline
		0 & 0 & 0 & 1
	\end{array} \right] &= \left[ \begin{array}{ccc:c}
		0 & -1 & 0 & 2 \\ 
		-1 & 0 & 0 & 2 \\ 
		0 & 0 & -1 & 0 \\ \hdashline
		0 & 0 & 0 & 1
	\end{array} \right]
\end{align} $$
