---
dia: 2024-08-07
tags: 
 - discreta/Relaciones
 - nota/facultad
---
# Definición
---
Sean $S$, $T$ dos [[Relación|relaciones]] del [[Conjunto|conjunto]] $A$. Entonces definiremos la relación $R = S \circ T$ para la cual $$ xRy \iff \exists z: ~~ xSz,~ zTy $$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[ultra thick]
		\coordinate (a) at (0, 0) {};
		\coordinate (b) at (6, 0) {};
		\coordinate (c) at (12, 0) {};

		\tikzmath { 
			\radio = 1.7;
			\radioMenor = 0.7;
			\radioSep = \radio cm + 5pt; 
		}
	
		\foreach \coor/\conj/\el in { (a)/A/x, (b)/B/z, (c)/C/y } {
			\draw \coor circle (\radio);
			\draw \coor circle (\radioMenor)
				node[scale=1.5] {\el};
			\path \coor -- ++(0, \radioMenor)
				node[above=2pt, scale=1.5] {\conj};
		}		

		\draw [->, shorten >=\radioSep, shorten <=\radioSep] (a) 
			.. controls +(2, 2) and +(-2, 2) .. (b)
			node[midway, above=1em, scale=1.5] {$S$};
		\draw [->, shorten >=\radioSep, shorten <=\radioSep] (b) 
			.. controls +(2, 2) and +(-2, 2) .. (c)
			node[midway, above=1em, scale=1.5] {$T$};
		\draw [->, shorten >=\radioSep, shorten <=\radioSep] (a) 
			.. controls +(2, -3.8) and +(-2, -3.8) .. (c)
			node[midway, below=2em, scale=1.5] {$R$};
			
	\end{tikzpicture}
\end{document}
```