---
dia: 2023-01-22
tags:
  - analisis-2/Capitulo-3
  - nota
---
### Definición
---
Considere la [[Función|función]] $z = F(x, y)$. Sea $(x_0, y_0) \in \mathbb{R}^2$ un punto tal que $F(x_0, y_0) = 0$

Supongamos que la función $F$ tiene [[Derivada parcial|derivadas parciales]] continuas en alguna [[Disco abierto|disco abierto]] $B$ con centro en $(x_0, y_0)$ y que $\frac{\partial F}{\partial y}(x_0, y_0) \ne 0$ 

Entonces $F(x, y) = 0$ se puede resolver para $y$ en términos de $x$ y definir así una función $y = f(x)$ con dominio en una vecindad de $x_0$, tal que $y_0 = f(x_0)$, la cual tiene derivadas continuas que pueden calcularse como

$$ y' = f'(x) = - ~~ \frac{\frac{\partial F}{\partial x}(x, y)}{\frac{\partial F}{\partial y}(x, y)} $$

Visualmente, esto se vería como 

```tikz
\begin{document} 
	\begin{tikzpicture}
		%\draw[thin, gray] (-4, -3) grid (10, 6);
		
		\draw[->] (-4, 0) -- (10, 0) node[below=2pt, scale=1.5] {$x$};
		\draw[->] (0, -3) -- (0, 6) node[left=2pt, scale=1.5] {$y$};
			
		\draw[smooth] plot coordinates {
			(-1, 4) (-4, 2) (-6, 4) (-4, 5) (-1, 2)
			(-4, -1) (-3, -2) (2, 0) (3, 2) (1, 3) 
			(0, 1) (3, -3) (5, 1) (7, 2) (9, 4) (10, 5) 
		};
		
		\draw (7, 2) circle (1) node[above left=2pt] {$P$};
		\draw[dashed] (0, 2) node[left=2pt] {$y_0$} -- (7, 2);
		\draw[dashed] (7, 0) node[below=2pt] {$x_0$} -- (7, 2);
		
		\clip (7, 2) circle (1);
		\draw[smooth, ultra thick] plot coordinates {
			(3, -3) (5, 1) (7, 2) (9, 4) (10, 5)
		};
	\end{tikzpicture}
\end{document}
```

En este caso, se aplica el [[Teorema Cauchy-Dini para ecuaciones escalares]]

#### Aplicaciones
---
![[Curva plana dada de forma implicita#Definición]] ![[Superficie dada en forma implicita#Definición]] ![[Curva definida como interseccion de dos superficies implicitas#Definición]]