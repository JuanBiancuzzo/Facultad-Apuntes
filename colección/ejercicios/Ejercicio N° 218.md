---
etapa: sin-empezar
dia: 2026-07-22
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 218
---
# Enunciado
---
Hallar una solución [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matricial]] al [[ingeniería en informática/proba/Representación de variables aleatorias/Recta de regresión|problema de regresión lineal]] sin [[ingeniería en informática/proba/Inferencia estadística/Sesgo|sesgo]] y con [[ingeniería en informática/orga/Machine learning/Penalización L2|regularización L2]]. Indicar las dimensiones de todas las matrices involucradas
1. ¿A qué se aproxima la solución si el [[investigación/ciencias de la computación/algoritmos/Algoritmo|algoritmo]] está muy regularizado (pero no tanto como para pensar que es cero)? ^punto-1
2. ¿Cuál es la solución si la regularización es nula? ^punto-2

# Resolución
---
Recordemos que la expresión que utiliza la regresión lineal es una [[ingeniería electrónica/analisis 3/Transformaciones conformes/Función lineal|función lineal]], y en el caso de sin sesgo, esta es simplemente $$ \hat{y} = w^T x $$ con $x \in \mathbb{R}^{d_x}$, $w \in \mathbb{R}^{d_x}$ y $y \in \mathbb{R}$

Para la función de costo, con regularización L2, esta dada por $$ \begin{align}  
	l(x,~ y) &= \lvert \hat{y} - y \rvert^2 + \lambda \lvert w \rvert^2 \\
	 &= \lvert w^T x - y \rvert^2 + \lambda \lvert w \rvert^2 \\
\end{align} $$
Si se plantea las matrices $$ X = \begin{bmatrix} 
	x_1^T \\ x_2^T \\ \vdots \\  x_n^T 
\end{bmatrix}, ~~~  Y = \begin{bmatrix} 
	y_1 \\ y_2 \\ \vdots \\ y_n 
\end{bmatrix}, ~~~  W = \begin{bmatrix} 
	w_1 \\ w_2 \\ \vdots \\ w_ {d_x}
\end{bmatrix} $$ se puede reescribir la función de costo para los $n$ puntos del entrenamiento como $$ J(W) = \frac{1}{n} \lVert X W - Y \rVert^2 + \frac{\lambda}{n} \lVert W \rVert^2 $$
Esta es la función que buscamos [[ingeniería en informática/discreta/Relaciones/Mínimo|minimizar]], por lo que utilizaremos su [[ingeniería en informática/analisis 2/Funciones de varias variables/Gradiente|gradiente]] para encontrar el extremo, y confirmaremos que es un mínimo utilizando la [[ingeniería en informática/analisis 2/Funciones de varias variables/Matriz Hessiana|matriz Hessiana]]. Por lo tanto calculando ambas obtenemos $$ \begin{align}
	\nabla J(W) &= \frac{2}{n} X^T ~ (XW - Y) + \frac{2 \lambda}{n} W &
	H_J(W) &= \frac{2}{n} ~ (X^T X + \lambda \mathbb{I})
\end{align} $$
Podemos ver por la forma de la matriz Hessiana que es definida positiva, y podemos super que es inversible ya que $d_x \ll n$, por lo que cuando el gradiente es igual al vector nulo, ese será el mínimo $$ \begin{align}
	\frac{2}{n} X^T ~ (XW - Y) + \frac{2 \lambda}{n} W &= 0 = \nabla J(W) \\
	X^T XW - X^T Y + \lambda W &= 0 \\
	X^T XW + \lambda W &= X^T Y  \\
	(X^T X + \lambda \mathbb{I}) ~ W &= X^T Y  \\
	W &= (X^T X + \lambda \mathbb{I})^{-1} X^T Y  \\
\end{align}
$$
[[colección/ejercicios/Ejercicio N° 218#^punto-1|1.]] En el caso muy regularizado, se puede aproximar $X^T X + \lambda \mathbb{I} \simeq \lambda \mathbb{I}$, y por lo tanto la solución para los parámetros sería $$ \begin{align} 
	W &= (X^T X + \lambda \mathbb{I})^{-1} X^T Y \\
	 &\simeq (\lambda \mathbb{I})^{-1} X^T Y \\
	W &\simeq \frac{1}{\lambda} X^T Y \\
\end{align} $$
Donde podemos interpretar que la [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Matriz transpuesta|matriz transpuesta]] es equivalente a la [[Matriz psudoinversa|pseudo-inversa]]

[[colección/ejercicios/Ejercicio N° 218#^punto-2|2.]] En el caso de no regularizar, es decir, $\lambda = 0$, se tiene la solución general de $$ W = (X^T X)^{-1} X^T Y $$ donde la solución es la pseudo-inversa