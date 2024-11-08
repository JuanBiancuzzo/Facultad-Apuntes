---
dia: 2023-01-22
tags:
  - ingeniería-en-informática/algebra-2/Transformaciones-lineales
  - nota/facultad
---
# Definición
---
Vamos a usar 
![[Propiedades trigonométricas#Definición]]

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

Nosotros queremos rotar nuestro plano $\mathbb{R}^2$ por un ángulo de $50.42\degree$, entonces si la [[Transformación lineal|transformación lineal]] la llamamos $R$, entonces necesitamos determinar

$$ R{1 \choose 0} = ~~ ? $$
$$ R{0 \choose 1} = ~~ ? $$

Entonces veamos el caso ${1 \choose 0}$:

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


Podemos ver el triangulo rectángulo, entonces la posición en $x$ esta dado por el $cos(50.42\degree)$ y la $y$ esta dado por $sin(50.42\degree)$, entonces:

$$ R{1 \choose 0} = {cos\left(50.42\degree\right) \choose sin\left(50.42\degree\right)} $$

Ahora en el caso de ${0 \choose 1}$:


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

En este caso, la posición en $x$ esta dado por $sin(50.42\degree + \pi)$ y la $y$ esta dado por $cos(50.42\degree)$, que es el equivalente a $-sin(50.42\degree)$, entonces nos queda

$$ R{1 \choose 0} = {-sin(50.42\degree) \choose cos(50.42\degree)} $$

Por lo tanto podemos escribir la matriz de rotación, para cualquier ángulo

$$ R{x_1 \choose x_2} := \begin{pmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{pmatrix} {x_1 \choose x_2}$$
