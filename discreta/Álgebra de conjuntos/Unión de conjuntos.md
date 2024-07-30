---
dia: 2024-04-12
tags:
  - discreta/Álgebra-de-conjuntos
  - nota/facultad
---
### Definición
---
Dado dos [[Conjunto|conjuntos]] $A$ y $B$, se define la función en [[Álgebra de conjuntos|álgebra de conjuntos]] como $$ A \cup B \equiv A + B $$
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

		\fill[ultra thick, green!35!darkgray] (-1.25, 0) circle (2)
			node[font=\bfseries, black, scale=1.75, left=2pt] {$A$};
		\fill[ultra thick, green!35!darkgray] ( 1.25, 0) circle (2)
			node[font=\bfseries, black, scale=1.75, right=2pt] {$B$};
	
		\draw[ultra thick, darkgray] (-1.25, 0) circle (2);		
		\draw[ultra thick, darkgray] ( 1.25, 0) circle (2);

		\path (0, 2.75) node[font=\bfseries, black, scale=1.75]
				{$A + B$};
	\end{tikzpicture}
\end{document}
```

^b372ff

