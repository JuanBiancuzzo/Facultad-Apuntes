---
dia: 2023-04-28
tags:
  - estructura/Flip-Flops
  - nota
---
### Definición
---
El [[Circuito secuencial]] con ecuación característica $$ Q^{n + 1} = D $$
y tiene el circuito

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick] 	

	\node[not port](not) at (1, 0) {};
	\node[nor port](nor1) at (4, 2.7) {};
	\node[nor port](nor2) at (4, 0.3) {};	

	\draw (-0.5, 3) node[left=2pt] {D} to[short, o-*] (0, 3)
		to (0, 0)
		to (not.in);
	\draw (not.out) to (nor2.in 2);
	\draw (0, 3) to (nor1.in 1);
	\draw (nor1.out) to[short, -o] ++ (1, 0) node[right=2pt] {$\overline{Q}$};
	\draw (nor2.out) to[short, -o] ++ (1, 0) node[right=2pt] {$Q$};

	\draw (nor1.in 2) to ++ (-0.5, 0)
		to ++ (0, -0.75)
		to ($(nor2.out) + (0.5, 0.5)$)
		to[short, -*] ($(nor2.out) + (0.5, 0)$);
	\draw (nor2.in 1) to ++ (-0.5, 0)
		to ++ (0, 0.75)
		to ($(nor1.out) + (0.5, -0.5)$)
		to[short, -*] ($(nor1.out) + (0.5, 0)$);
	
	\end{circuitikz} 
\end{document} 
```

#### Tabla de estados
---

| D   | Q   |
| --- | --- |
| 0   | 0   |
| 1   | 1    |

Notemos como es un [[Flip-Flop RS asincrónico]], donde las entradas son una invertida de la otra, es decir $R = \overline{S}$.