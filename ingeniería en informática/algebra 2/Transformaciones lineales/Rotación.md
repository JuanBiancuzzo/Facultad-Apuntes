---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/algebra-2/Transformaciones-lineales
  - carrera/ingeniería-electrónica/robótica-industrial/Sistema-de-referencias
  - carrera/ingeniería-en-informática/algebra-2/Transformaciones-lineales
  - carrera/ingeniería-electrónica/robótica-móvil/Repaso-álgebra
  - nota/facultad
aliases:
  - Matriz de rotación
  - Formula de Rodrigues matricial#^rodrigues
vinculoFacultad:
  - tema: Transformaciones lineales
    capitulo: 2
    materia: Álgebra 2 A
    carrera: Ingeniería en informática
  - tema: Repaso álgebra
    capitulo: 1
    materia: Robótica móvil
    carrera: Ingeniería electrónica
  - tema: Sistema de referencias
    capitulo: 2
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
# Definición
---
Se define la [[ingeniería en informática/algebra 2/Transformaciones lineales/Transformación lineal|transformación lineal]] $R$ como una rotación, dado un [[Sistema coordenado|sistema coodenado]] [[ingeniería en informática/analisis 2/Nomenclatura/Base ortonormal|ortonormal]] derecho, en el caso de $2$ [[ingeniería en informática/algebra 2/Espacios Vectoriales/Dimensión|dimensiones]] dado por los [[ingeniería electrónica/robótica móvil/Repaso álgebra/Vector|versores]] $\hat{x}$ e $\hat{y}$ $$ R(\theta) \begin{bmatrix} x \\ y \end{bmatrix} := \begin{bmatrix} 
    \cos(\theta) & -\sin(\theta) \\ 
    \sin(\theta) & \cos(\theta) 
\end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} $$
Para $3$ dimensiones, con los versores $\hat{x}$, $\hat{y}$ y $\hat{z}$ existen $3$ marices de rotación, alrededor de cada eje dado por $$ R(\hat{x},~ \theta) = \begin{bmatrix} 
    1 & 0 & 0 \\ 
    0 & \cos \theta & -\sin \theta \\ 
    0 & \sin \theta & \cos \theta
\end{bmatrix} ~~~~ R(\hat{y},~ \theta) = \begin{bmatrix} 
    \cos \theta & 0 & -\sin \theta \\ 0 & 1 & 0 \\ \sin \theta & 0 & \cos \theta
\end{bmatrix} ~~~~ R(\hat{z},~ \theta) = \begin{bmatrix} 
    \cos \theta & -\sin \theta & 0 \\ \sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 
\end{bmatrix} $$
De manera arbitraria, se puede tener un eje $\vec{k} = \begin{bmatrix} k_x & k_y & k_z \end{bmatrix}^T$  y un ángulo de rotación $\theta$, se tiene expresandola como la suma entre una [[Matriz simétrica|matriz simétrica]] y [[Matriz simétrica|matriz antisimétrica]] $$ \begin{align}
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
También se puede ver como tiene la forma de la [[Formula de Rodrigues|formula de Rodrigues]] de forma matricial $$ R(\vec{k},~ \theta) = \underbrace{\cos\theta \mathbb{I} + (1 - \cos\theta) \vec{k} \vec{k}^T}_\text{simétrica} + \underbrace{\sin\theta ~ S(\vec{k})}_\text{antisimétrica} $$ ^rodrigues
Donde $S(\vec{k})$ es la matriz antisimétrica del vector $\vec{k}$ dado por $$ S(\vec{k}) = \begin{bmatrix}
	0 & -k_z & k_y \\
	k_z & 0 & -k_x \\
	k_y & k_x & 0 \\
\end{bmatrix} $$ que tiene la propiedad fundamental $S(\vec{k}) \vec{v} = \vec{k} \times \vec{v}$ 

En el caso de obtener de una matriz de rotación, y querer obtener $\theta$ y $\vec{k}$, se tiene $$ \begin{align}
	\theta &= \arccos\left( \frac{1}{2} \Big( \text{tr}(R) - 1 \Big) \right) \\
	k_x &= \frac{R_{3,2} - R_{2,3}}{2 \sin\theta} \\
	k_y &= \frac{R_{3,1} - R_{1,3}}{2 \sin\theta} \\
	k_z &= \frac{R_{2,1} - R_{1,2}}{2 \sin\theta} \\
\end{align} $$donde se toma que $R_{i,j}$ donde $i$ es la fila (empezando en $1$) y $j$ es la columna (nuevamente, empezando en $1$)

Notemos que existe una [[ingeniería electrónica/analisis 3/Series de Laurent/Singularidad|singularidad]] cuando $\theta = 0$, donde la matriz esta dada por la [[Matriz identidad|identidad]] y el versor $\vec{k}$ puede ser cualquiera

## Propiedades
---
* La [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Matriz transpuesta|matriz transpuesta]] es la [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Matriz inversa|matriz inversa]], es decir que $R^T ~ R = \mathbb{I}$
  > [!demostracion]- Demostración
  > Pendiente

## Restricciones
---
Tomando como ejemplo el caso de $3$ dimensiones, donde aunque la matriz de rotación se tiene $9$ posibles valores para definir una matriz de $3 \times 3$, existe la restricción de tener una base ortonormal dado por $$ \begin{align}
	\hat{x} \cdot \hat{y} &= 0 & \lVert \hat{x} \rVert &= 1 \\
	\hat{x} \cdot \hat{z} &= 0 & \lVert \hat{y} \rVert &= 1 \\
	\hat{y} \cdot \hat{z} &= 0 & \lVert \hat{z} \rVert &= 1 \\
\end{align} $$ por lo que reduciendo a únicamente $3$ [[investigación/animation/Grado de libertad|grados de libertad]]

Notemos que si se expresa un vector $\vec{k}$ y un ángulo de rotación $\theta$, ya que $\lVert \vec{k} \rVert = 1$, se tiene de nuevo $3$ grados de libertad 

De forma general, siendo $d$ la dimensión, entonces se tienen $d$ restricciones, ya que los $d$ versores tienen [[ingeniería en informática/algebra 2/Espacios euclídeos/Norma|norma]] $1$, y luego las combinaciones entre todos los versores donde entre ellos tienen un [[ingeniería en informática/algebra 2/Espacios euclídeos/Producto interno|producto]] nulo, finalmente dando $$ \frac{(d + 1) ~ d}{2} $$ 

## Deducción caso de $2$ dimensiones
---
Partiendo de una situación como esta

```tikz
\begin{document}
	\begin{tikzpicture}[
			scale = 4, 
			transform shape,
		]
		\draw[step=0.5, gray, thin] (-1.2, -0.2) grid (1.2, 1.2);
		\draw[step=0.1, gray, very thin] (-1.2, -0.2) grid (1.2, 1.2);

		\path (0, 0) -- (0, 1) 
			node[pos=0, below left, scale=0.3] {$0$}
			node[pos=0.5, left, scale=0.3] {$0.5$}
			node[pos=1, left, scale=0.3] {$1$};
		
		\path (-1, 0) -- (1, 0) 
			node[pos=0, below, scale=0.3] {$-1$}
			node[pos=0.25, below, scale=0.3] {$-0.5$}
			node[pos=0.75, below, scale=0.3] {$0.5$}
			node[pos=1, below, scale=0.3] {$1$};

		\draw[->, thick] (0, -0.2) -- (0, 1.2);
		\draw[->, thick] (-1.2, 0) -- (1.2, 0);

		\draw (1, 0) arc (0:180:1);
		
		\filldraw[color=blue!70, fill=blue!50] (0, 0) -- (0.3, 0) arc (0:50.42:0.3) -- (0, 0);
		\draw (0, 0) node[above=2.5pt, right=1.5pt, scale = 0.5] {$\alpha$};
		
		\draw[->, thick] (0, 0) -- (0.637, 0.77);
		\draw[dashed] (0.637, 0) -- (0.637, 0.77);
		\draw[dashed] (0, 0.77) -- (0.637, 0.77);

		\filldraw[color=blue!70, fill=blue!50] (0, 0) -- (0, 0.3) arc (90:140.42:0.3) -- (0, 0);
		\draw (-0.075, 0) node[above=1.5pt, scale = 0.5] {$\beta$};
		
		\draw[->, thick] (0, 0) -- (-0.77, 0.637);
		\draw[dashed] (-0.77, 0) -- (-0.77, 0.637);
		\draw[dashed] (0, 0.637) -- (-0.77, 0.637);
	\end{tikzpicture}
\end{document}
```

Nosotros queremos rotar nuestro plano $\mathbb{R}^2$ por un ángulo de $50.42\degree$, si la [[Transformación lineal|transformación lineal]] la llamamos $R$, entonces necesitamos determinar $$ \begin{align} 
	R \cdot \begin{bmatrix} 1 \\ 0 \end{bmatrix} &= ~~ ? \\
	R \cdot \begin{bmatrix} 0 \\ 1 \end{bmatrix} &= ~~ ?
\end{align} $$
Entonces veamos el caso $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$

```tikz
\begin{document}
	\begin{tikzpicture}[
			scale = 4, 
			transform shape,
		]
		\draw[step=0.5, gray, thin] (-0.2, -0.2) grid (1.2, 1.2);
		\draw[step=0.1, gray, very thin] (-0.2, -0.2) grid (1.2, 1.2);

		\path (0, 0) -- (0, 1) 
			node[pos=0, below left, scale=0.3] {$0$}
			node[pos=0.5, left, scale=0.3] {$0.5$}
			node[pos=1, left, scale=0.3] {$1$};
		
		\path (0, 0) -- (1, 0) 
			node[pos=1, below, scale=0.3] {$1$};

		\draw[->, thick] (0, -0.2) -- (0, 1.2);
		\draw[->, thick] (-0.2, 0) -- (1.2, 0);

		\draw (1, 0) arc (0:90:1);
		
		\filldraw[color=blue!70, fill=blue!50] (0, 0) -- (0.3, 0) arc (0:50.42:0.3) -- (0, 0);
		\draw (0, 0) node[above=2.5pt, right=1.5pt, scale = 0.5] {$\alpha$};
		
		\draw[->, thick] (0, 0) -- (0.637, 0.77);
		\draw[dashed] (0.637, 0) -- (0.637, 0.77);
		\draw[dashed] (0, 0.77) -- (0.637, 0.77);
	\end{tikzpicture}
\end{document}
```


Podemos ver el triangulo rectángulo, entonces la posición en $x$ esta dado por el $\cos(50.42\degree)$ y la $y$ esta dado por $\sin(50.42\degree)$, entonces $$ R(50.42\degree) ~ \begin{bmatrix}1 \\ 0 \end{bmatrix} = \begin{bmatrix} 
    \cos\left( 50.42\degree \right) \\
    \sin\left( 50.42\degree \right) \\
\end{bmatrix} $$
Ahora en el caso de $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$:

```tikz
\begin{document}
	\begin{tikzpicture}[
			scale = 4, 
			transform shape,
		]
		\draw[step=0.5, gray, thin] (-1.2, -0.2) grid (0.2, 1.2);
		\draw[step=0.1, gray, very thin] (-1.2, -0.2) grid (0.2, 1.2);

		\path (0, 0) -- (0, 1) 
			node[pos=0, below left, scale=0.3] {$0$}
			node[pos=0.5, left, scale=0.3] {$0.5$}
			node[pos=1, left, scale=0.3] {$1$};
		
		\path (0, 0) -- (-1, 0) 
			node[pos=0.5, below, scale=0.3] {$-0.5$}
			node[pos=1, below, scale=0.3] {$-1$};

		\draw[->, thick] (0, -0.2) -- (0, 1.2);
		\draw[->, thick] (-1.2, 0) -- (0.2, 0);

		\draw (-1, 0) arc (180:90:1);
		
		\filldraw[color=blue!70, fill=blue!50] (0, 0) -- (0, 0.3) arc (90:140.42:0.3) -- (0, 0);
		\draw (-0.075, 0) node[above=1.5pt, scale = 0.5] {$\beta$};
		
		\draw[->, thick] (0, 0) -- (-0.77, 0.637);
		\draw[dashed] (-0.77, 0) -- (-0.77, 0.637);
		\draw[dashed] (0, 0.637) -- (-0.77, 0.637);
	\end{tikzpicture}
\end{document}
```

En este caso, la posición en $x$ esta dado por $\sin(50.42\degree + \pi)$ y la $y$ esta dado por $\cos(50.42\degree)$, que es el equivalente a $-\sin(50.42\degree)$, entonces nos queda$$ R(50.42\degree) ~ \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} -\sin\left( 50.42\degree \right) \\ \cos\left( 50.42\degree \right) \end{bmatrix} $$

Por lo tanto podemos escribir la [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matriz]] de rotación, para cualquier ángulo $$ R(\theta) \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} := \begin{bmatrix} 
    \cos(\theta) & -\sin(\theta) \\ 
    \sin(\theta) & \cos(\theta) 
\end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} $$ donde esta matriz de rotación es una [[ingeniería en informática/analisis 2/Nomenclatura/Ortogonalidad#Para matrices|matriz ortogonal]] con [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Determinante|determinante]] igual a $\pm 1$

