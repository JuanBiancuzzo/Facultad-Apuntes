---
dia: 2024-03-14
capitulo: 1
tags:
  - señales/Señales-y-sistemas
  - nota
---
### Definición
---
En forma coloquial un [[Sistema|sistema]] es invertible cuando observando la salida del mismo podemos recuperar la entrada. En términos matemáticos concretos, un sistema es invertible cuando el [[Operador|operador]] $\mathcal{T}$ que lo define es [[Función biyectiva|biyectivo]] o lo que es lo mismo existe $\mathcal{T}^{-1}$

```tikz
\usepackage{amssymb}
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) -- (-1, 0)
			node[midway, above=2pt] {$x(t)$};
		\draw (-1, -0.5) rectangle (1, 0.5)
			node[midway] {$\mathcal{T}$};
		\draw[->] (1, 0) -- (2.5, 0)
			node[midway, above=2pt] {$y(t)$};
		\draw (2.5, -0.5) rectangle (4.5, 0.5)
			node[midway] {$\mathcal{T}^{-1}$};
		\draw[->] (4.5, 0) -- (6, 0)
			node[midway, above=2pt] {$x(t)$};
	\end{tikzpicture}
\end{document}
```