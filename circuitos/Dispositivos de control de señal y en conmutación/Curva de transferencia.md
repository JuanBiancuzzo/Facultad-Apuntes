---
dia: 2024-04-20
materia: circuitos
capitulo: 2
---
### Definición
---
Relaciona la [[Tensión|tensión]] de entrada de un componente, con la [[Corriente eléctrica|corriente]] de salida del mismo 

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\sep = 0.1;
		\inter = 2;
		\vinq = 3;
		\fin = 4.25;
	}
	\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
		\draw[->] (-0.5, 0) -- (5, 0)
			node[below right=2pt] {$V_i$};
		\draw[->] (0, -0.5) -- (0, 5)
			node[left=2pt] {$I_0$};

		\foreach \x in {0, \sep, ..., \inter} {
			\draw (\x, {(\x)^2 * 0.25}) 
				-- ({\x + \sep}, {(\x + \sep)^2 * 0.25});
		}
		\draw (\inter, {(\inter)^2 * 0.25}) 
			-- (\fin, {(4/3) * \fin - (5/3)});

		\draw[dashed] (\vinq, 0) 
				node[below=2pt] {$V_{iQ}$}
			-- (\vinq, {(4/3) * \vinq - (5/3)})
				node[right=2pt] {$Q$}
				node[circle, fill, minimum size=5pt, 
					inner sep=0pt, outer sep=0pt] {}
			-- (0, {(4/3) * \vinq - (5/3)})
				node[left=2pt] {$I_{0Q}$};
	\end{tikzpicture}
\end{document}
```

Donde notemos que el punto $Q$ es el punto en el cual trabaja el componente