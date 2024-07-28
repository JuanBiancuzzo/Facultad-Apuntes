---
dia: 2023-01-22
tags:
  - analisis-2/Capitulo-1
  - nota
---
### Definición
---
Este sistema de coordenadas, donde el [[Espacio Rn]] con $n=3$, una extension del sistema de [[Coordenadas circular]] a $\mathbb{R}^3$, de la siguiente forma

```tikz
\begin{document}
	\begin{tikzpicture}[scale=3]
		\draw[->] (0, 0) -- (0, 0, 1) node[below=2pt] {$x$};
		\draw[->] (0, 0) -- (1, 0, 0) node[right=2pt] {$y$};
		\draw[->] (0, 0) -- (0, 1.5, 0) node[above=2pt] {$z$};

		\draw (0, 0) 
		-- (.5, 0, .5) node[pos=0.75, above=0.5pt] {$r$}
		-- (.5, 1.25, .5) node[above right=2pt] {$p(r, \theta, z)$} 
		-- (0, 1.25, 0) node[left=2pt] {$z$};

		\draw (0, 0) ellipse (0.63 and 0.23);
		\draw[->, thick] (0, 0, 0.58) arc (-90:-30:0.63 and 0.05)
			node[pos=0.2, below right=2pt] {$\theta$};
		
	\end{tikzpicture}
\end{document}
```


