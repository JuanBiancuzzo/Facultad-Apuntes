---
dia: 2024-02-29
capitulo: 9
tags:
  - dispo/Circuitos-digitales-y-procesos-de-fabricación-CMOS
---
### Definición
---
```tikz
\usepackage{circuitikz}

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
	\node[not port, scale = 0.7] (not) at (1, 1.25) {};
	
	\draw ($ (not.in 1) + (-0.5, 0) $) node[left=2pt] {$IN$} 
		to (not.in 1);
	\draw (not.out) 
		to ($ (not.out) + (0.5, 0) $)
			node[right=2pt] {$OUT = \overline{IN}$};

	\path (5, 1.5) rectangle (6, 2.25)
		node[midway] {$IN$};
	\path (5, 0.75) rectangle (6, 1.5)
		node[midway] {$0$};
	\path (5, 0) rectangle (6, 0.75)
		node[midway] {$1$};

	\path (6, 1.5) rectangle (7, 2.25)
		node[midway] {$OUT$};
	\path (6, 0.75) rectangle (7, 1.5)
		node[midway] {$1$};
	\path (6, 0) rectangle (7, 0.75)
		node[midway] {$0$};

	\draw (5, 1.5) -- (7, 1.5);
	\draw[dashed] (5, 0.75) -- (7, 0.75);
	\draw (6, 0) -- (6, 2.25);

	\end{circuitikz}
\end{document}
```
 
Representación circuital y función ideal de [[Transferencia del sistema|transferencia]] 

```tikz
\usepackage{circuitikz}

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
	\node[not port, scale = 0.7] (not) at (1, 1.25) {};
	
	\draw ($ (not.in 1) + (-1, 0) $) to[short, *-] (not.in 1);
	\draw (not.out) to[short, -*] ($ (not.out) + (1, 0) $);

	\draw ($ (not.in 1) + (-1, -1.25) $)
		to[short, *-*] ($ (not.out) + (1, -1.25) $);

	\draw ($ (not.in 1) + (-1, 0) $) to[open, v_=$V_{IN}$] 
		($ (not.in 1) + (-1, -1.25) $);
	\draw ($ (not.out) + (1, 0) $) to[open, v^=$V_{OUT}$] 
		($ (not.out) + (1, -1.25) $);

	\coordinate (O) at (5, -0.75);

	\draw[->] (O) -- ++(3, 0)
		node[below=2pt] {$V_{IN}$};
	\draw[->] (O) -- ++(0, 3)
		node[left=2pt] {$V_{OUT}$};

	\draw[ultra thick] ($(O) + (0, 2)$) 
		-- ($(O) + (1, 2)$)
		-- ($(O) + (1, 0)$)
		-- ($(O) + (2, 0)$);
	\draw[dashed] (O) 
		-- ($(O) + (1.5, 1.5)$) 
			node[above right=2pt] {$V_{OUT} = V_{IN}$};
	\draw[dashed] ($(O) + (0, 1)$)
		-- ($(O) + (1, 1)$);
	\filldraw[blue] ($(O) + (1, 1)$) circle (0.05);
		
	\path ($(O) + (0, 2)$) node[left=2pt] {$V^+$};
	\path ($(O) + (0, 1)$) node[left=2pt] {$\frac{V}{2}^+$};
	\path ($(O) + (0, 0)$) node[left=2pt] {$0$};

	\path ($(O) + (2, 0)$) node[below=2pt] {$V^+$};
	\path ($(O) + (1, 0)$) node[below=2pt] {$\frac{V}{2}^+$};
	\path ($(O) + (0, 0)$) node[below=2pt] {$0$};

	\end{circuitikz}
\end{document}
```

Definimos punto de conmutación o umbral lógico $$ V_M \equiv \text{tensión de entrada para la cual} ~ V_{OUT} = V_{IN} $$
* Para $0 \le V_{IN} < V_M ~~ \implies V_{OUT} = V^+$
* Para $V_M < V_{IN} \le V^+ ~~ \implies V_{OUT} = 0$

#### Propiedad fundamental: Regeneración de la señal
---
Un [[Inversor|inversor]] tiene dos estados lógicos de salida bien definidos ($0$ o $V^+$) incluso con ruido en $V_{IN}$
* Regeneración de nivel
* Supresión de ruido
* Perfeccionamiento del borde de un pulso