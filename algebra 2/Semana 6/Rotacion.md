---
dia: 2023-01-22
materia: algebra 2
capitulo: 6
---
Vamos a usar ![[Propiedades trigonometricas]]

Partiendo de una situacion como esta

![[Pasted image 20211019144943.png]]

Nosotros queremos rotar nuestro plano $\mathbb{R}^2$ por un angulo de $50.42\degree$, entonces si la [[Transformacion lineal]] la llamamos $R$, entonces necesitamos determinar

$$ R{1 \choose 0} = \text{ } ? $$
$$ R{0 \choose 1} = \text{ } ? $$

Entonces veamos el caso ${1 \choose 0}$:

![[Pasted image 20211019145504.png]]

Podemos ver el triangulo rectangulo, entonces la posicion en $x$ esta dado por el $cos(50.42\degree)$ y la $y$ esta dado por $sin(50.42\degree)$, entonces:

$$ R{1 \choose 0} = {cos(50.42\degree) \choose sin(50.42\degree)} $$

Ahora en el caso de ${0 \choose 1}$:

![[Pasted image 20211019150057.png]]

En este caso, la posicion en $x$ esta dado por $sin(50.42\degree + \pi)$ y la $y$ esta dado por $cos(50.42\degree)$, que es el equivalente a $-sin(50.42\degree)$, entonces nos queda

$$ R{1 \choose 0} = {-sin(50.42\degree) \choose cos(50.42\degree)} $$

Por lo tanto podemos escribir la matriz de rotacion, para cualquier angulo

$$ R{x_1 \choose x_2} := \begin{pmatrix} cos(\theta) & -sin(\theta) \\ sin(\theta) & cos(\theta) \end{pmatrix} {x_1 \choose x_2}$$