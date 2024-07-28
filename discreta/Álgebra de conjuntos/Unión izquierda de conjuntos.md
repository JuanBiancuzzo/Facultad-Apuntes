---
dia: 2024-04-12
tags:
  - discreta/Álgebra-de-conjuntos
  - nota
---
### Definición
---
Dado dos [[Conjunto|conjuntos]] $A$ y $B$, se define la función en [[Álgebra de conjuntos|álgebra de conjuntos]] como $$ A  $$
#### Representación gráfica
---
Donde visualmente se puede entender como 


```tikz
\begin{document} 
	\begin{tikzpicture}
		\path[fill=black, even odd rule] (-1.25, 0) circle (2.08)
			(-1.25, 0) circle (1.92);
		\path[fill=black, even odd rule] ( 1.25, 0) circle (2.08)
			( 1.25, 0) circle (1.92);
		
		\begin{scope}
			\clip (-1.25, 0) circle (2);
	
			\fill[ultra thick, green!35!darkgray] (-1.25, 0) circle (2);
			\fill[ultra thick, green!35!darkgray] ( 1.25, 0) circle (2);
		\end{scope}
		
		\draw[ultra thick, darkgray] (-1.25, 0) circle (2)
			node[font=\bfseries, black, scale=1.75, left=2pt] (a) {$A$};	
		\draw[ultra thick, darkgray] ( 1.25, 0) circle (2)
			node[font=\bfseries, black, scale=1.75, right=2pt] (b) {$B$};

		\path (a) -- (b) node[midway] (ab) {};
		\path (ab) -- ++(0, 2.4) 
			node[font=\bfseries, black, scale=1.75] {$A$};
	\end{tikzpicture}
\end{document}
```

^a436b3

