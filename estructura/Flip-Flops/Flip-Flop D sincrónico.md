---
dia: 2023-04-29
capitulo: 6
tags:
  - estructura/Flip-Flops
  - nota
---
### Definición
---
A diferencia de su versión [[Flip-Flop D asincrónico|asincrónica]] este nos permite tener un reloj o clock para activar su comportamiento. con ecuación característica $$ Q^{n + 1} = D \cdot C_k + Q^n \cdot \overline{C_k} $$
```tikz
\usepackage{circuitikz} 

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale = 1.3, transform shape, thick]
		\node[not port](not) at (1, 5) {};
		
		\node[and port](and1) at (4, 5 - 0.3) {};
		\node[and port](and2) at (4, 1 + 0.3) {};

		\node[nor port](nor1) at (7, 5 - 0.6) {};
		\node[nor port](nor2) at (7, 1 + 0.6) {};

		\draw (-1, 5) node[left=2pt] {D} 
			to[short, o-] ($(not.in) + (-0.5, 0)$)
			to (not.in);
		\draw (not.out) to (and1.in 1);
		\draw (and1.out) to (nor1.in 1);
		\draw (nor1.out) to[short, -o] ($(nor1.out) + (1, 0)$)
			node[right=2pt] {$Q$};

		\draw (1, 3) node[left=2pt] {Ck} 
			to[short, o-] (2, 3)
			to ($(and1.in 2) + (-0.61, 0)$)
			to (and1.in 2);
		\draw (2, 3) to[short, *-] ($(and2.in 1) + (-0.61, 0)$)
			to (and2.in 1);

		\draw ($(not.in) + (-0.5, 0)$) to[short, *-] ($(not.in) + (-0.5, -4)$)
			to (and2.in 2);
		\draw (and2.out) to (nor2.in 2);
		\draw (nor2.out) to[short, -o] ($(nor2.out) + (1, 0)$)
			node[right=2pt] {$\overline{Q}$};

		\draw (nor1.in 2) to ++ (-0.5, 0)
			to ++ (0, -0.75)
			to ($(nor2.out) + (0.5, 0.5)$)
			to ($(nor2.out) + (0.5, 0)$);
		\draw (nor2.in 1) to ++ (-0.5, 0)
			to ++ (0, 0.75)
			to ($(nor1.out) + (0.5, -0.5)$)
			to ($(nor1.out) + (0.5, 0)$);
	\end{circuitikz}
\end{document}
```


#### Tabla de estados
---

| $C_k$ | $Q^n$ | $D^n$ |     | $Q^{n+1}$ |
| ----- | ----- | ----- | --- | --------- |
| 0     | 0     | 0     |     | 0         |
| 0     | 0     | 1     |     | 0         |
| 0     | 1     | 0     |     | 1         |
| 0     | 1     | 1     |     | 1         |
| 1     | 0     | 0     |     | 0         |
| 1     | 0     | 1     |     | 1         |
| 1     | 1     | 0     |     | 0         |
| 1     | 1     | 1     |     | 1          |
