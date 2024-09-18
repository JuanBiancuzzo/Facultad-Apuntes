---
dia: 2023-11-10
aliases:
  - Corte del MOSFET
tags:
  - dispo/Transistor-MOSFET
  - nota/facultad
---
# Definición
---
Teniendo un [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]] con $V_{GS} < V_T$, $V_{GD} < V_T$ con $V_{DS} > 0$

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
		\draw (0, 0) rectangle (10, 3)
			node[pos=0.2, font=\bfseries] {$p$};
			
		\draw (0, 2) rectangle (3, 3)
			node[midway] {$n^+$};
		\filldraw (0.4, 3) rectangle (2.6, 3.2);
		\draw ({(2.6 + 0.4) * 0.5}, 3.2) -- ++(0, 0.4)
			node[above=2pt, font=\bfseries] {Source};
		
		\draw (7, 2) rectangle (10, 3)
			node[midway, font=\bfseries] {$n^+$};
		\filldraw (7.4, 3) rectangle (9.6, 3.2);
		\draw ({(9.6 + 7.4) * 0.5}, 3.2) -- ++(0, 0.4)
			node[above=2pt, font=\bfseries] {Drain};

		\filldraw[fill=gray] (3, 3) rectangle (7, 3.4);
		\draw (3, 3.4) rectangle (7, 4)
			node[midway, font=\bfseries] {poly-n};
		\filldraw (3, 4) rectangle (7, 4.4);
		\draw ({(7 + 3) * 0.5}, 4.4) -- ++(0, 0.4)
			node[above=2pt, font=\bfseries] {Gate};
			
		\filldraw (0, -0.2) rectangle (10, 0);
		\draw (5, -0.2) -- ++(0, -0.4)
			node[below=2pt, font=\bfseries] {Body};

		\draw[dashed, rounded corners=1em] (0, 1.5) 
			-- (3.5, 1.5)
			-- (3.5, 2.5)
			-- (6.5, 2.2)
			-- (6.5, 1.2)
			-- (10, 1.2);
		\draw[<-] (4.2, 2.75) -- ++(0.25, -1)
			node[below=2pt, font=\bfseries, align=center, scale=0.8] 
				{Sin capa\\de inversión\\en ninguna parte};

		\path (3, 5.25) node {$V_{GS} < V_T$};
		\path (7, 5.25) node {$V_{GD} < V_T$};
		
	\end{tikzpicture}
\end{document}
```

No tenemos capa de inversión en ningún, por lo que no fluye [[Corriente eléctrica|corriente]] 

$$ I_D = 0 $$ ^ef3a86