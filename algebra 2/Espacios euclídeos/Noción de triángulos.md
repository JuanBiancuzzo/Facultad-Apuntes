---
dia: 2023-01-22
capitulo: 3
tags:
  - algebra-2/Espacios-euclídeos
---
### Definición
---
Sea $u, v, w \in \mathbb{V}$ (3 punto no alineados) en el $\mathbb{R}$-espacio euclídeo $(\mathbb{V}, \langle \cdot, \cdot \rangle)$, el siguiente es el triangulo de vertices $u, v, w$

```tikz
\begin{document}
	\begin{tikzpicture}[scale = 1.25, transform shape]
		\fill[blue!30] (0, 0) -- (6, 0) -- (2, 4) -- (0, 0);
		
		\filldraw[color=cyan!70, fill=blue!40, ultra thick] (0, 0) -- (1, 0) 
			arc (0:63.4:1) -- (0, 0);
		\path (1, 0) arc (0:63:1) node[pos=0.5, above=2pt, right=2pt] {$\alpha$};	
		
		\filldraw[color=cyan!70, fill=blue!40, ultra thick] (6, 0) -- (5.29, 0.707) 
			arc (135:180:1) -- (5, 0);	
		\path (5.29, 0.707) arc (135:180:1) node[pos=0.5, above=2pt, left=2pt] {$\beta$};

		\filldraw[color=cyan!70, fill=blue!40, ultra thick] (2, 4) -- (2.7, 3.29) arc(-45: -116: 1) -- (2, 4);
		\path (2.7, 3.29) arc(-45: -116: 1) node[pos=0.5, below=2pt] {$\gamma$};
		
		\draw[->, blue!70, ultra thick] (0, 0) -- (6, 0) 
			node[pos=0.5, below=2pt] {$c$}
			node[pos=1, right=2pt] {$v$};
			
		\draw[->, blue!70, ultra thick] (6, 0) -- (2, 4) 
			node[pos=0.5, above=2pt, right=2pt] {$a$}
			node[pos=1, above=2pt] {$w$};
		
		\draw[->, blue!70, ultra thick] (2, 4) -- (0, 0)
			node[pos=0.5, above=2pt, left=2pt] {$b$}
			node[pos=1, left=2pt] {$u$};

		\draw[blue!70, ultra thick] (2, 0) -- (2, 4)
			node[pos=0.5, right=2pt] {$h$};
	\end{tikzpicture}
\end{document}
```

Con $a = w - v$, $b = u - w$, $c = v - u$

Entonces podemos encontrar [[Ángulo entre vectores|ángulo entre vectores]], a partir de esos $a, b, c$

Y podemos encontrar la altura del triángulo $\lVert h \rVert = \lVert b \rVert \cdot sin(\alpha)$, con la que podemos encontrar el área del triángulo con la formula $A = \frac{b \cdot h}{2}$ donde $b$ es la base y $h$ la altura