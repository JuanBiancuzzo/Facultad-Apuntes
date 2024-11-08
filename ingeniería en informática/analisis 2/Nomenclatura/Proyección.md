---
dia: 2023-01-22
tags:
  - nota/facultad
  - ingeniería-en-informática/analisis-2/Nomenclatura
  - ingeniería-electrónica/analisis-2/Nomenclatura
---
# Definición
---
Donde queremos llegar a poder encontrar $PR_{y \to x}$

```tikz 
\begin{document} 
	\begin{tikzpicture}
		\draw[->, very thick] (0, 0) -- (8, 2)
			node[right=2pt] {$x$};

		\draw[->, very thick] (0, 0) -- (4, 1)
			node[below=6pt] {$PR_{y \to x}$};

		\draw[->, very thick] (0, 0) -- (3, 4)
			node[above=2pt] {$y$};

		\draw[dashed, thick] (3, 4) -- (4, 1);
	\end{tikzpicture}
\end{document} 
```


$$PR_{y \to x} = \frac{y \cdot x}{\lVert x \rVert ^ 2} x = \frac{y \cdot x}{\lVert x \rVert} \hat{x}$$

Donde usamos las definiciones de [[Norma|norma]] y [[Versor|versor]]
