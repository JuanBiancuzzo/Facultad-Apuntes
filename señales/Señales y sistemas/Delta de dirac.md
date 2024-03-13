---
dia: 2024-03-13
materia: señales
capitulo: 1
---
### Definición
---
Es una [[Función de distribución|distribución]] que tiene las propiedades $$ \begin{matrix} 
	\delta(t) = 0 ~~ \forall t \ne 0 \\
	\displaystyle \int_{-\infty}^{\infty} \delta(t) ~ dt = 1
\end{matrix} $$
Con la representación 
```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) -- (2.5, 0)
			node[right=2pt] {$t$};
		\draw[->] (0, -0.2) node[below=2pt] {$0$}
			-- (0, 2.5);
	\end{tikzpicture}
\end{document}
```