---
dia: 2024-04-20
materia: circuitos
capitulo: 2
---
### Definición
---
Relaciona la [[Tensión|tensión]] de salida de un componente, con la [[Corriente eléctrica|corriente]] de salida del mismo 

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\va = 5.5;
		\rc = 1.5;
		\voq = 2;

		\lin = 4;
		\sep = (7/3) / \lin;
		\cant = 7;

		\linant = \lin - 1;
		\lindes = \lin + 1;
	}
	\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
		\draw[->] (-0.5, 0) -- (8, 0)
			node[below right=2pt] {$V_0$};
		\draw[->] (0, -0.5) -- (0, 5)
			node[left=2pt] {$I_0$};

		\draw (\va, 0) node[below=2pt] {$V_A$}
			-- (0, {\va / \rc})
				node[left=2pt] {$\frac{V_A}{R_C}$};

		\draw[dashed] (\voq, 0) 
				node[below=2pt] {$V_{0Q}$}
			-- (\voq, {(\va - \voq) / \rc})
				node[above right=2pt] {$Q$}
				node[circle, fill, minimum size=5pt, 
					inner sep=0pt, outer sep=0pt] {};
		
		\foreach \v in {1, ..., \linant} {
			\draw[thin] (0, {\v * \sep})
				-- ++({7.25 - \v * 0.4}, 0)
					node[right=2pt] {$V_{1\v}$};
		}
		
		\draw[thin] (0, {(\va - \voq) / \rc})
				node[left=2pt] {$I_{0Q}$}
			-- ++({7.25 - \lin * 0.4}, 0)
				node[right=2pt] {$V_{1\lin} = I_{iQ}$};
				
		\foreach \v in {\cant, ..., \lindes} {
			\draw[thin] (0, {\v * \sep})
				-- ++({7.25 - \v * 0.4}, 0)
					node[right=2pt] {$V_{1\v} $};
		}
	\end{tikzpicture}
\end{document}
```

Donde notemos que el punto $Q$ es el punto en el cual trabaja el componente. También como esta relacionado a la [[Curva de transferencia|curva de transferencia]] donde se determina la tensión de entrada