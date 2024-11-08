---
dia: 2024-08-07
tags: 
 - ingeniería-en-informática/discreta/Relaciones
 - nota/facultad
---
# Definición
---
Sea $A = \Set{1,~2,~3}$, en $P(a)$ (todos los subconjuntos de $A$) se define la [[Relación de orden|relación de orden]] $\subseteq$

El diagrama de Hasse ordena los elementos de un [[Conjunto|conjunto]] de forma ascendente, uniéndolos con una arista si son sucesores inmediatos

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{automata, positioning}

\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, thick, shorten >=3pt]
		\node[state] (q_emp) {$\{\}$};
		
		\node[state] (q_2)   [right=of q_emp] {$\{2\}$};
		\node[state] (q_1)   [above=of q_2]   {$\{1\}$};
		\node[state] (q_3)   [below=of q_2]   {$\{3\}$};
		
		\node[state] (q_12)  [right=of q_1, scale=0.77] {$\{1,~2\}$};
		\node[state] (q_13)  [right=of q_2, scale=0.77] {$\{1,~3\}$};
		\node[state] (q_23)  [right=of q_3, scale=0.77] {$\{2,~3\}$};
		
		\node[state] (q_123) [right=of q_13, scale=0.58] {$\{1,~2,~3\}$};
		
		\path[->] (q_emp) edge node {} (q_1)
				    edge node {} (q_2)
				    edge node {} (q_3)
			(q_1)   edge node {} (q_12)
			        edge node {} (q_13)
			(q_2)   edge node {} (q_12)
			        edge node {} (q_23)
			(q_3)   edge node {} (q_13)
			        edge node {} (q_23)
			(q_12)   edge node {} (q_123)
			(q_13)   edge node {} (q_123)
			(q_23)   edge node {} (q_123);
	\end{tikzpicture}
\end{document}
```